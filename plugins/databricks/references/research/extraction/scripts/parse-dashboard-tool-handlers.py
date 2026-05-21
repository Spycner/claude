#!/usr/bin/env python3
"""Parse the Dashboard Authoring Agent tool factories out of chunk 40961.

Scans the SPA chunk on disk for every `a6({toolName:<NAME>, ...}, ()=>...)`
invocation. That is the inner wrapper each tool factory uses, where:
 - `<NAME>` is either a literal string ("getSqlSample") or a chunk-local
   constant ("rm" → "renameDashboard").
 - The first argument is a config object with `toolName`, `abortSignal`,
   `context`, and optional `validate`.
 - The second argument is `()=> generator(function*(){…})()` — the inner
   generator body is the real execute() handler.

The script captures the whole a6() call as the "body" for analysis (URLs,
methods, helpers, feature flags, GraphQL ops, redux events). It also pulls
back the description and parameters constants used by the surrounding
`(0,az.z6)({...})` call so we can stamp them on the per-tool refs.

Output: ``../data/dashboard-tool-handlers.json`` keyed by tool name.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

REPO = Path("/home/pascal/Code/pgoell-claude-tools")
EXTRACTION = REPO / "plugins" / "databricks" / "skills" / "genie-code" / "references" / "extraction"
CHUNK = EXTRACTION / "chunks" / "40961.110e90c1b8.chunk.js"
LAKE_CHUNK = EXTRACTION / "chunks" / "19604.5ae31ee5cc.chunk.js"
OUT = EXTRACTION / "data" / "dashboard-tool-handlers.json"

# Tools we expect to find (21 dashboard-specific = those NOT in the LakeAgent's 18)
DASHBOARD_TOOL_NAMES = {
    "renameDashboard", "updateDashboardTheme", "publishDashboard",
    "editPages", "editWidgetsV2", "getVizTypeDefinition",
    "addMetricView", "createDatasetFromSQL", "updateDatasetFromSQL",
    "createLocalMetricViewDataset", "updateLocalMetricViewDataset",
    "editDatasetCalculations", "deleteDataset", "getDashboardConfig",
    "refreshData", "readDatasetData", "readDataset",
    "fetchWidgetRenderData", "getSqlSample", "executeSql",
    "editWorkspaceFile",
}

# z6 invocation (with `(0, X.z6)(...)` IIFE-wrapped reference)
Z6_RE = re.compile(r"\(\s*0\s*,\s*(?P<alias>az|n)\.z6\s*\)\s*\(")
# a6 invocation: `a6({toolName:<NAME>, ...}, ...)`
A6_RE = re.compile(r"a6\(\s*\{\s*toolName\s*:\s*(?P<name>[a-zA-Z_$][\w$]*|\"[a-zA-Z][\w]*\")\s*,")

URL_RE = re.compile(r"""[\"'`](\/(?:ajax-api|api|serving-endpoints)\/[^"'`\n]+)[\"'`]""")
HELPER_RE = re.compile(r"\(0,([a-zA-Z_$][\w$]*)\.([a-zA-Z_$][\w$]*)\)\(")
METHOD_RE = re.compile(r"""method:\s*[\"'](GET|POST|PUT|PATCH|DELETE)[\"']""")
GQL_RE = re.compile(r"\b(mutation|query|subscription)\s+([A-Z][\w]+)")
BO_EVENT_RE = re.compile(r"\.Bo\.([A-Z][A-Z_]+)\b")
DIRECT_FETCH_RE = re.compile(r"""fetch\(\s*[\"'`](\/[^"'`\n]+)[\"'`]""")
FLAG_RE = re.compile(r"""\(0,[a-zA-Z_$][\w$]*\.W\)\s*\(\s*[\"']([a-zA-Z0-9._]+)[\"']""")


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


def collect_name_constants(src: str) -> dict[str, str]:
    out: dict[str, str] = {}
    pattern = re.compile(r"""(?:^|[,;{}=]|\blet\s|\bvar\s|\bconst\s)\s*([a-zA-Z_$][\w$]*)\s*=\s*['"]([a-zA-Z][a-zA-Z0-9_]+)['"]""")
    for m in pattern.finditer(src):
        const = m.group(1)
        value = m.group(2)
        if value in DASHBOARD_TOOL_NAMES:
            out[const] = value
    return out


def parse_string_literal(src: str, start: int) -> tuple[str, int] | None:
    if start >= len(src):
        return None
    q = src[start]
    if q not in ('"', "'", "`"):
        return None
    i = start + 1
    out_chars: list[str] = []
    while i < len(src):
        ch = src[i]
        if ch == "\\":
            if i + 1 < len(src):
                esc = src[i + 1]
                if esc == "n":
                    out_chars.append("\n")
                elif esc == "t":
                    out_chars.append("\t")
                elif esc == "r":
                    out_chars.append("\r")
                elif esc == "\\":
                    out_chars.append("\\")
                elif esc == q:
                    out_chars.append(q)
                else:
                    out_chars.append(esc)
                i += 2
                continue
        if ch == q:
            return "".join(out_chars), i + 1
        out_chars.append(ch)
        i += 1
    return None


def find_value_after_key(obj_src: str, key: str) -> tuple[int, int] | None:
    """Within an object literal source (curly braces already stripped), find the value range for `key:`."""
    pattern = re.compile(r"(?:^|[,{])\s*" + re.escape(key) + r"\s*:\s*")
    m = pattern.search(obj_src)
    if not m:
        return None
    j = m.end()
    # find end of value: depth-0 comma or end of obj
    k = j
    n = len(obj_src)
    vdepth = 0
    instr = 0
    while k < n:
        ch = obj_src[k]
        if instr:
            if ch == "\\":
                k += 2
                continue
            if (instr == 1 and ch == '"') or (instr == 2 and ch == "'") or (instr == 3 and ch == "`"):
                instr = 0
            k += 1
            continue
        if ch == '"':
            instr = 1
        elif ch == "'":
            instr = 2
        elif ch == "`":
            instr = 3
        elif ch in "([{":
            vdepth += 1
        elif ch in ")]}":
            if vdepth == 0:
                break
            vdepth -= 1
        elif ch == "," and vdepth == 0:
            break
        k += 1
    return j, k


def main() -> None:
    src = CHUNK.read_text()
    constants = collect_name_constants(src)
    print(f"name constants found: {len(constants)}")
    for c, v in sorted(constants.items()):
        print(f"  {c} -> {v}")
    print()

    results: dict[str, dict] = {}

    # Pass 1: find every z6 call and its surrounding object literal, capture
    # description / parameters constant refs to look up later. Also capture the
    # name source (literal or constant).
    z6_calls: list[dict] = []
    for m in Z6_RE.finditer(src):
        paren_pos = m.end() - 1
        # The opening brace of the object literal should be the next non-space char
        p = paren_pos + 1
        while p < len(src) and src[p] in " \t\n":
            p += 1
        if src[p] != "{":
            continue
        end = matching_close(src, p, "{", "}")
        if end is None:
            continue
        obj = src[p + 1:end - 1]

        # name
        nv = find_value_after_key(obj, "name")
        if not nv:
            continue
        name_token = obj[nv[0]:nv[1]].strip()
        if name_token.startswith('"') or name_token.startswith("'") or name_token.startswith("`"):
            parsed = parse_string_literal(obj, nv[0])
            if not parsed:
                continue
            name_value = parsed[0]
            name_source = "literal"
        else:
            name_value = constants.get(name_token, name_token)
            name_source = name_token

        if name_value not in DASHBOARD_TOOL_NAMES:
            continue

        # description
        dv = find_value_after_key(obj, "description")
        if dv:
            ds = obj[dv[0]:dv[1]].strip()
        else:
            ds = ""

        # parameters
        pv = find_value_after_key(obj, "parameters")
        if pv:
            ps = obj[pv[0]:pv[1]].strip()
        else:
            ps = ""

        z6_calls.append({
            "alias": m.group("alias"),
            "name_value": name_value,
            "name_source": name_source,
            "desc_token": ds,
            "params_token": ps,
            "z6_start": m.start(),
            "obj_end": end,
        })

    # Pass 2: for each tool name, find the a6 wrapper invocation that contains
    # the actual generator body.
    for m in A6_RE.finditer(src):
        token = m.group("name")
        # Resolve token to a known tool name
        if token.startswith('"') or token.startswith("'"):
            name_value = token.strip("\"'")
        else:
            name_value = constants.get(token, token)
        if name_value not in DASHBOARD_TOOL_NAMES:
            continue

        # Walk to the matching closing paren of a6(
        a6_open = m.start() + len("a6")
        # m.start() points to 'a6', a6_open points to '('
        # actually m matches 'a6({toolName:...,', m.end() points after the comma; we need to find '(' after 'a6'
        a6_paren = src.find("(", m.start(), m.end())
        if a6_paren == -1:
            continue
        a6_close = matching_close(src, a6_paren, "(", ")")
        if a6_close is None:
            continue
        body = src[a6_paren:a6_close]

        # Walk backwards from m.start() to find the useCallback declaration,
        # to capture the variable name and the full callback body.
        # Find the most recent `(0,i.useCallback)((` before this position
        callback_marker = "(0,i.useCallback)("
        cb_start = src.rfind(callback_marker, max(0, m.start() - 1200), m.start())
        callback_var = None
        callback_body = ""
        if cb_start != -1:
            # The variable on the LHS is just before `=(0,i.useCallback)(`
            lhs_search_end = cb_start
            # walk back to find an identifier
            i = lhs_search_end - 1
            # skip whitespace
            while i >= 0 and src[i] in " \t\n":
                i -= 1
            # skip '='
            if i >= 0 and src[i] == "=":
                i -= 1
                while i >= 0 and src[i] in " \t\n":
                    i -= 1
                end_ident = i + 1
                while i >= 0 and re.match(r"[\w$]", src[i]):
                    i -= 1
                callback_var = src[i + 1:end_ident]
            # extract the useCallback arrow body
            paren = cb_start + len(callback_marker) - 1
            cb_close = matching_close(src, paren, "(", ")")
            if cb_close is not None:
                callback_body = src[paren:cb_close]

        helpers_raw: list[tuple[str, str]] = []
        seen: set[tuple[str, str]] = set()
        for hm in HELPER_RE.finditer(body):
            alias, member = hm.group(1), hm.group(2)
            if (alias, member) in seen:
                continue
            seen.add((alias, member))
            helpers_raw.append((alias, member))

        entry = {
            "alias_used_for_z6": next((z["alias"] for z in z6_calls if z["name_value"] == name_value), None),
            "name_value": name_value,
            "name_source": next((z["name_source"] for z in z6_calls if z["name_value"] == name_value), None),
            "description_token": next((z["desc_token"] for z in z6_calls if z["name_value"] == name_value), ""),
            "parameters_token": next((z["params_token"] for z in z6_calls if z["name_value"] == name_value), ""),
            "callback_var": callback_var,
            "body_a6": body,
            "body_a6_len": len(body),
            "body_callback": callback_body,
            "body_callback_len": len(callback_body),
            "urls": sorted({u.group(1) for u in URL_RE.finditer(body)}),
            "methods": sorted({m2.group(1) for m2 in METHOD_RE.finditer(body)}),
            "events": sorted({m2.group(1) for m2 in BO_EVENT_RE.finditer(body)}),
            "gql_ops": sorted({f"{m2.group(1)} {m2.group(2)}" for m2 in GQL_RE.finditer(body)}),
            "direct_fetches": sorted({m2.group(1) for m2 in DIRECT_FETCH_RE.finditer(body)}),
            "flags": sorted({m2.group(1) for m2 in FLAG_RE.finditer(body)}),
            "helpers": [{"alias": a, "member": b} for a, b in helpers_raw],
        }
        # If we already have an entry, prefer the larger one (some tools have multiple a6 matches)
        if name_value in results and results[name_value]["body_a6_len"] >= len(body):
            continue
        results[name_value] = entry

    # Tools defined with inline execute (n.z6 form, no a6 wrapper)
    # These are getSqlSample, editWorkspaceFile, getVizTypeDefinition.
    # Detect by looking for `(0,n.z6)({name:"<NAME>"...execute:e=>{<BODY>}...})`
    for m in Z6_RE.finditer(src):
        # Process every z6 call; some are az.z6 with inline execute (getVizTypeDefinition)
        paren_pos = m.end() - 1
        p = paren_pos + 1
        while p < len(src) and src[p] in " \t\n":
            p += 1
        if src[p] != "{":
            continue
        end = matching_close(src, p, "{", "}")
        if end is None:
            continue
        obj = src[p + 1:end - 1]
        nv = find_value_after_key(obj, "name")
        if not nv:
            continue
        token = obj[nv[0]:nv[1]].strip()
        if token.startswith('"') or token.startswith("'"):
            parsed = parse_string_literal(obj, nv[0])
            if not parsed:
                continue
            name_value = parsed[0]
        else:
            name_value = constants.get(token, token)
        if name_value not in DASHBOARD_TOOL_NAMES:
            continue

        # Find inline execute body (an arrow function value)
        ev = find_value_after_key(obj, "execute")
        if not ev:
            continue
        es = obj[ev[0]:ev[1]]
        body_inline = es

        helpers_raw: list[tuple[str, str]] = []
        seen: set[tuple[str, str]] = set()
        for hm in HELPER_RE.finditer(body_inline):
            alias, member = hm.group(1), hm.group(2)
            if (alias, member) in seen:
                continue
            seen.add((alias, member))
            helpers_raw.append((alias, member))

        # Save under inline_execute key alongside any a6-derived entry
        if name_value not in results:
            results[name_value] = {
                "alias_used_for_z6": "n",
                "name_value": name_value,
                "name_source": "literal",
                "description_token": (find_value_after_key(obj, "description") and obj[find_value_after_key(obj, "description")[0]:find_value_after_key(obj, "description")[1]]) or "",
                "parameters_token": (find_value_after_key(obj, "parameters") and obj[find_value_after_key(obj, "parameters")[0]:find_value_after_key(obj, "parameters")[1]]) or "",
                "callback_var": None,
                "body_a6": "",
                "body_a6_len": 0,
                "body_callback": "",
                "body_callback_len": 0,
                "urls": [], "methods": [], "events": [], "gql_ops": [],
                "direct_fetches": [], "flags": [], "helpers": [],
            }
        results[name_value]["body_inline_execute"] = body_inline
        results[name_value]["body_inline_execute_len"] = len(body_inline)
        # Merge URL / helper analysis from inline body
        results[name_value]["urls"] = sorted(set(results[name_value]["urls"]) | {u.group(1) for u in URL_RE.finditer(body_inline)})
        results[name_value]["methods"] = sorted(set(results[name_value]["methods"]) | {m2.group(1) for m2 in METHOD_RE.finditer(body_inline)})
        results[name_value]["events"] = sorted(set(results[name_value]["events"]) | {m2.group(1) for m2 in BO_EVENT_RE.finditer(body_inline)})
        results[name_value]["gql_ops"] = sorted(set(results[name_value]["gql_ops"]) | {f"{m2.group(1)} {m2.group(2)}" for m2 in GQL_RE.finditer(body_inline)})
        results[name_value]["direct_fetches"] = sorted(set(results[name_value]["direct_fetches"]) | {m2.group(1) for m2 in DIRECT_FETCH_RE.finditer(body_inline)})
        results[name_value]["flags"] = sorted(set(results[name_value]["flags"]) | {m2.group(1) for m2 in FLAG_RE.finditer(body_inline)})
        # merge helpers
        existing = {(h["alias"], h["member"]) for h in results[name_value]["helpers"]}
        for a, b in helpers_raw:
            if (a, b) not in existing:
                existing.add((a, b))
                results[name_value]["helpers"].append({"alias": a, "member": b})

    # Special-case: executeSql lives in chunk 19604 (the LakeAgent main chunk),
    # and is shared by every SQL-only page agent. Pull its inline z6 body from
    # there so dashboard refs are complete.
    if "executeSql" not in results and LAKE_CHUNK.exists():
        lake_src = LAKE_CHUNK.read_text()
        m = re.search(r"\(\s*0\s*,\s*[a-zA-Z_$][\w$]*\.z6\s*\)\s*\(\s*\{[^{}]*name:\s*\"executeSql\"", lake_src)
        if m:
            paren_pos = lake_src.find("{", m.start(), m.end())
            end = matching_close(lake_src, paren_pos, "{", "}")
            if end is not None:
                obj = lake_src[paren_pos + 1:end - 1]
                ev = find_value_after_key(obj, "execute")
                body_inline = obj[ev[0]:ev[1]] if ev else ""
                results["executeSql"] = {
                    "alias_used_for_z6": "o",
                    "name_value": "executeSql",
                    "name_source": "literal",
                    "description_token": '"Execute a SQL query"',
                    "parameters_token": "p (constant in chunk 19604)",
                    "callback_var": None,
                    "body_a6": "",
                    "body_a6_len": 0,
                    "body_callback": "",
                    "body_callback_len": 0,
                    "body_inline_execute": body_inline,
                    "body_inline_execute_len": len(body_inline),
                    "urls": sorted({u.group(1) for u in URL_RE.finditer(body_inline)}),
                    "methods": sorted({m2.group(1) for m2 in METHOD_RE.finditer(body_inline)}),
                    "events": sorted({m2.group(1) for m2 in BO_EVENT_RE.finditer(body_inline)}),
                    "gql_ops": sorted({f"{m2.group(1)} {m2.group(2)}" for m2 in GQL_RE.finditer(body_inline)}),
                    "direct_fetches": sorted({m2.group(1) for m2 in DIRECT_FETCH_RE.finditer(body_inline)}),
                    "flags": sorted({m2.group(1) for m2 in FLAG_RE.finditer(body_inline)}),
                    "helpers": [{"alias": a, "member": b} for a, b in {(hm.group(1), hm.group(2)) for hm in HELPER_RE.finditer(body_inline)}],
                    "_chunk": "19604.5ae31ee5cc.chunk.js (LakeAgent main chunk)",
                }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(results, indent=2))
    print(f"wrote {OUT} with {len(results)} tools")
    print()
    hdr = f"{'TOOL':30} {'A6':>6} {'CB':>6} {'INLINE':>6} {'URLs':>4}  HELPERS"
    print(hdr)
    print("-" * len(hdr))
    for name, r in sorted(results.items()):
        hp = ",".join(f'{h["alias"]}.{h["member"]}' for h in r["helpers"][:4])
        if r["urls"]:
            hp = ("URLs+" + hp) if hp else "URLs"
        inline = r.get("body_inline_execute_len", 0)
        print(f"{name:30} {r['body_a6_len']:>6} {r['body_callback_len']:>6} {inline:>6} {len(r['urls']):>4}  {hp}")

    missing = DASHBOARD_TOOL_NAMES - set(results.keys())
    if missing:
        print()
        print(f"MISSING ({len(missing)}): {sorted(missing)}")


if __name__ == "__main__":
    main()
