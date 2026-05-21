#!/usr/bin/env python3
"""Parse each tool factory's source to extract the verbatim execute handler
and resolve the helper-call landscape.

Reads extraction/data/tool-factories.json (raw factory JS source pulled from
the SPA via __webpack_require__) and emits per-tool handler details into
extraction/data/tool-handlers.json. Output schema:

  {
    <tool>: {
      mid: int,
      arg_list: str,                 # verbatim execute function arg list
      body: str,                     # verbatim execute function body
      body_len: int,
      imports: { <letter>: int },    # local-letter -> imported module id
      helpers: [ {alias, member, mid} ],  # all `(0, X.Y)(` invocations seen in body
      urls: [str],                   # literal /api/, /ajax-api/ URL strings in body
      methods: [str],                # HTTP method literals in body
      events: [str],                 # Redux Bo enum values
      gql_ops: [str],                # GraphQL `mutation X` / `query X` references
      direct_fetches: [str],         # any direct `fetch("/path"` URL literals
      flags: [str],                  # databricks.fe.* feature flags read with W(...,!1)
      conclusion: str,               # short summary of what the tool does on the wire
    }
  }
"""

from __future__ import annotations
import json
import re
from pathlib import Path

REPO = Path("/home/pascal/Code/pgoell-claude-tools")
EXTRACTION = REPO / "plugins" / "databricks" / "skills" / "genie-code" / "references" / "extraction"
SRC_FILE = EXTRACTION / "data" / "tool-factories.json"
PAYLOAD = EXTRACTION / "data" / "llmproxy-body.json"
OUT_FILE = EXTRACTION / "data" / "tool-handlers.json"


def matching_close(src: str, start: int, open_ch: str, close_ch: str) -> int | None:
    if start >= len(src) or src[start] != open_ch:
        return None
    depth = 0
    i = start
    n = len(src)
    while i < n:
        ch = src[i]
        if ch in ('"', "'", "`"):
            q = ch
            i += 1
            while i < n:
                if src[i] == "\\":
                    i += 2
                    continue
                if src[i] == q:
                    break
                i += 1
            i += 1
            continue
        if ch == "/" and i + 1 < n and src[i + 1] == "*":
            j = src.find("*/", i + 2)
            if j == -1:
                return None
            i = j + 2
            continue
        if ch == "/" and i + 1 < n and src[i + 1] == "/":
            j = src.find("\n", i + 2)
            if j == -1:
                return None
            i = j
            continue
        if ch == open_ch:
            depth += 1
        elif ch == close_ch:
            depth -= 1
            if depth == 0:
                return i + 1
        i += 1
    return None


def position_in_string(src: str, pos: int) -> bool:
    in_str = 0
    in_line = False
    in_block = False
    i = 0
    while i < pos:
        ch = src[i]
        if in_line:
            if ch == "\n":
                in_line = False
            i += 1
            continue
        if in_block:
            if ch == "*" and i + 1 < len(src) and src[i + 1] == "/":
                in_block = False
                i += 2
                continue
            i += 1
            continue
        if in_str:
            if ch == "\\":
                i += 2
                continue
            if (in_str == 1 and ch == '"') or (in_str == 2 and ch == "'") or (in_str == 3 and ch == "`"):
                in_str = 0
            i += 1
            continue
        if ch == "/" and i + 1 < len(src) and src[i + 1] == "/":
            in_line = True
            i += 1
            continue
        if ch == "/" and i + 1 < len(src) and src[i + 1] == "*":
            in_block = True
            i += 2
            continue
        if ch == '"':
            in_str = 1
        elif ch == "'":
            in_str = 2
        elif ch == "`":
            in_str = 3
        i += 1
    return in_str != 0


def find_execute(src: str) -> int | None:
    i = src.find("execute:")
    while i != -1:
        if i > 0 and src[i - 1] in (",", "{", " ", "\t", "\n"):
            if not position_in_string(src, i):
                return i
        i = src.find("execute:", i + 1)
    return None


def parse_arrow_after_keyword(src: str, kw_start: int, kw_len: int) -> dict | None:
    n = len(src)
    p = kw_start + kw_len
    while p < n and src[p] in " \t\n":
        p += 1
    if src.startswith("async", p):
        p += len("async")
        while p < n and src[p] in " \t\n":
            p += 1
    if src[p] == "(":
        end = matching_close(src, p, "(", ")")
        if end is None:
            return {"error": "bad arg parens"}
        arg_list = src[p:end]
        p = end
    elif re.match(r"[\w$]", src[p]):
        st = p
        while p < n and re.match(r"[\w$]", src[p]):
            p += 1
        arg_list = src[st:p]
    else:
        return {"error": "no arg list"}
    while p < n and src[p] in " \t\n":
        p += 1
    if src[p:p + 2] != "=>":
        return {"error": "no arrow"}
    p += 2
    while p < n and src[p] in " \t\n":
        p += 1
    if src[p] == "{":
        end = matching_close(src, p, "{", "}")
        if end is None:
            return {"error": "bad body"}
        return {"arg_list": arg_list, "body": src[p:end], "body_is_block": True}
    q = p
    d = 0
    is2 = 0
    while q < n:
        ch = src[q]
        if is2:
            if ch == "\\":
                q += 2
                continue
            if (is2 == 1 and ch == '"') or (is2 == 2 and ch == "'") or (is2 == 3 and ch == "`"):
                is2 = 0
            q += 1
            continue
        if ch == '"':
            is2 = 1
        elif ch == "'":
            is2 = 2
        elif ch == "`":
            is2 = 3
        elif ch in "([{":
            d += 1
        elif ch in ")]}":
            if d == 0:
                break
            d -= 1
        elif ch == "," and d == 0:
            break
        q += 1
    return {"arg_list": arg_list, "body": src[p:q], "body_is_block": False}


URL_RE = re.compile(r"""[\"'`](\/(?:ajax-api|api|serving-endpoints)\/[^"'`\n]+)[\"'`]""")
HELPER_RE = re.compile(r"\(0,([a-zA-Z_$][\w$]*)\.([a-zA-Z_$][\w$]*)\)\(")
METHOD_RE = re.compile(r"""method:\s*[\"'](GET|POST|PUT|PATCH|DELETE)[\"']""")
GQL_RE = re.compile(r"\b(mutation|query|subscription)\s+([A-Z][\w]+)")
BO_EVENT_RE = re.compile(r"\.Bo\.([A-Z][A-Z_]+)\b")
IMPORT_RE = re.compile(r"\b([a-zA-Z_$][\w$]*)\s*=\s*r\(\s*(\d+)\s*\)")
DIRECT_FETCH_RE = re.compile(r"""fetch\(\s*[\"'`](\/[^"'`\n]+)[\"'`]""")
FLAG_RE = re.compile(r"""\(0,[a-zA-Z_$][\w$]*\.W\)\s*\(\s*[\"']([a-zA-Z0-9._]+)[\"']""")
NAME_LITERAL_RE = re.compile(r"""(?:^|[,{])\s*name:\s*[\"']([^\"'\\]+)[\"']""")


def collect_handler(tool: str, src: str) -> dict:
    exec_kw = find_execute(src)
    if exec_kw is None:
        return {"error": "no execute: in factory source"}
    parsed = parse_arrow_after_keyword(src, exec_kw, len("execute:"))
    if parsed is None or "error" in parsed:
        return {"error": (parsed or {}).get("error", "arrow parse failed")}

    body = parsed["body"]
    # Build imports map: `var X=r(N)` or `let X=r(N)` patterns in the surrounding factory source.
    imports: dict[str, int] = {}
    for m in IMPORT_RE.finditer(src):
        imports[m.group(1)] = int(m.group(2))

    helpers_raw: list[tuple[str, str]] = []
    seen: set[tuple[str, str]] = set()
    for m in HELPER_RE.finditer(body):
        alias, member = m.group(1), m.group(2)
        if (alias, member) in seen:
            continue
        seen.add((alias, member))
        helpers_raw.append((alias, member))

    helpers = [
        {"alias": alias, "member": member, "mid": imports.get(alias)}
        for alias, member in helpers_raw
    ]
    urls = sorted({m.group(1) for m in URL_RE.finditer(body)})
    methods = sorted({m.group(1) for m in METHOD_RE.finditer(body)})
    events = sorted({m.group(1) for m in BO_EVENT_RE.finditer(body)})
    gql_ops = sorted({f"{m.group(1)} {m.group(2)}" for m in GQL_RE.finditer(body)})
    direct_fetches = sorted({m.group(1) for m in DIRECT_FETCH_RE.finditer(body)})
    flags = sorted({m.group(1) for m in FLAG_RE.finditer(body)})

    return {
        "arg_list": parsed["arg_list"],
        "body": body,
        "body_len": len(body),
        "body_is_block": parsed["body_is_block"],
        "imports_count": len(imports),
        "helpers": helpers,
        "urls": urls,
        "methods": methods,
        "events": events,
        "gql_ops": gql_ops,
        "direct_fetches": direct_fetches,
        "flags": flags,
    }


def main() -> None:
    factories = json.loads(SRC_FILE.read_text())
    out: dict = {}
    for tool, info in factories.items():
        result = collect_handler(tool, info["source"])
        result["mid"] = info["mid"]
        out[tool] = result
    OUT_FILE.write_text(json.dumps(out, indent=2))
    print(f"wrote {OUT_FILE}")
    print()
    hdr = f"{'TOOL':22} {'BODY':>6}  {'URLs':>5}  {'METHODS':>8}  {'EVENTS':>20}  HELPERS"
    print(hdr)
    print("-" * len(hdr))
    for t, r in out.items():
        if "error" in r:
            print(f"{t:22} ERROR: {r['error']}")
            continue
        ev = ",".join(r["events"][:3])
        hp = ",".join(f'{h["alias"]}.{h["member"]}' for h in r["helpers"][:5])
        if r["urls"]:
            hp = ("URLs+" + hp) if hp else "URLs"
        print(f"{t:22} {r['body_len']:>6}  {len(r['urls']):>5}  {len(r['methods']):>8}  {ev:>20}  {hp}")


if __name__ == "__main__":
    main()
