#!/usr/bin/env python3
"""Rewrite the 'Handler notes' section of each genie_code_tool_*.md from real
execute-handler source extracted in extraction/data/tool-handlers.json.

Each section reports verified facts (helpers called, URLs, methods, Redux
actions dispatched, feature flags read) and clearly marks anything that
could not be confirmed from the source alone (eg. what the helpers actually
do on the wire — that requires either tracing the helper module further or
the network-trace follow-up in genie_code_followups.md).
"""

from __future__ import annotations
import json
import re
from pathlib import Path

REPO = Path("/home/pascal/Code/pgoell-claude-tools")
EXTRACTION = REPO / "plugins" / "databricks" / "skills" / "genie-code" / "references" / "extraction"
HANDLERS = EXTRACTION / "data" / "tool-handlers.json"
PAYLOAD = EXTRACTION / "data" / "llmproxy-body.json"

# Resolved helper modules from cross-tool analysis (chunk-level static inspection).
RESOLVED_HELPERS = {
    441535: "feature-flag reader — `W(flag, default)` reads workspace feature flags",
    370437: "tool-error formatting / sanitised error envelopes",
    284810: "abortable-promise / cancellation helper used across tools",
    222716: "Redux action enum (`Bo`) + dispatcher (`rN`) — `rN({type: Bo.X, payload, ...})` posts an internal MFE action",
    623457: "LLM-and-static safety check — `P(command, opts)` runs the policy gate before sensitive tool calls",
    954662: "code-execution dispatcher — wraps `runDatabricksCli` and `executeCode` cell submission",
    480427: "asset-type permission helpers (`A`, `_h`, `ts`) — gates createAsset/openAsset on workspace ACLs",
    485669: "asset URL / navigation helpers (e.g. asset id → page URL)",
    686560: "search-result shaping helper",
    941443: "asset content fetcher (resolves asset id → workspace path → contents)",
    776041: "pure data helpers (ms→sec conversion, asset-type enum)",
    774045: "model-priority enum for safety-check fallback",
    204109: "async-iterator yield helper used in tool generators",
    342411: "intl message factory (display strings)",
    439549: "(unresolved — referenced by `runDatabricksCli`)",
    511010: "(unresolved — referenced by `runDatabricksCli`)",
}


def helper_label(h: dict) -> str:
    mid = h.get("mid")
    member = h.get("member")
    alias = h.get("alias")
    if mid in RESOLVED_HELPERS:
        return f"`(0, {alias}.{member})(...)` (module `{mid}` — {RESOLVED_HELPERS[mid]})"
    if mid is not None:
        return f"`(0, {alias}.{member})(...)` (module `{mid}`)"
    return f"`(0, {alias}.{member})(...)`"


def fmt_list_block(lines: list[str]) -> str:
    if not lines:
        return "_(none observed in source)_"
    return "\n".join(f"- {ln}" for ln in lines)


def truncate_body(body: str, max_len: int = 1800) -> tuple[str, bool]:
    if len(body) <= max_len:
        return body, False
    return body[:max_len] + "\n…[truncated]", True


def render_handler_notes(tool: str, h: dict) -> str:
    if "error" in h:
        return (
            f"_Could not extract verbatim handler from the SPA chunks: "
            f"{h['error']}. The tool factory lives in webpack module `{h['mid']}` "
            "but the structured parse failed. Falling back to the description "
            "above as the only authoritative source for this tool._"
        )

    lines: list[str] = []
    lines.append(
        "Extracted from webpack module `"
        f"{h['mid']}` in the SPA bundle on workspace "
        "`dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The "
        "`execute()` arrow function below is the verbatim client-side handler "
        "the SPA registers when this tool is invoked by the model."
    )
    lines.append("")
    lines.append("**Argument destructuring**:")
    lines.append("")
    lines.append("```javascript")
    lines.append(h["arg_list"])
    lines.append("```")
    lines.append("")
    lines.append("**Execute body** (verbatim, minified — webpack module "
                 f"`{h['mid']}`, {h['body_len']} bytes):")
    lines.append("")
    body_show, truncated = truncate_body(h["body"], 2200)
    lines.append("```javascript")
    lines.append(body_show)
    lines.append("```")
    if truncated:
        lines.append("")
        lines.append(
            f"_(body truncated at 2,200 chars; full {h['body_len']}-byte source "
            "is in `../../extraction/data/tool-handlers.json` under "
            f"`{tool}.body` and the captured factory in "
            f"`../../extraction/data/tool-factories.json`.)_"
        )
    lines.append("")

    # Verified facts
    lines.append("**Verified wire-level evidence** (literal in the handler body):")
    lines.append("")
    if h["urls"]:
        method_str = ", ".join(h["methods"]) if h["methods"] else "method unspecified inline"
        lines.append(f"- REST endpoints ({method_str}):")
        for u in h["urls"]:
            lines.append(f"    - `{u}`")
    else:
        lines.append("- No REST URLs appear as literals in this handler.")
    if h["direct_fetches"]:
        lines.append(f"- Direct `fetch()` calls: {', '.join('`'+u+'`' for u in h['direct_fetches'])}")
    if h["events"]:
        lines.append(
            "- Redux action(s) dispatched via the MFE action bus "
            "(module `222716` — `rN({type: Bo.X, ...})`):"
        )
        for e in h["events"]:
            lines.append(f"    - `Bo.{e}` — handled outside this module by the corresponding MFE worker.")
    if h["gql_ops"]:
        lines.append("- GraphQL operations referenced:")
        for op in h["gql_ops"]:
            lines.append(f"    - `{op}`")
    if h["flags"]:
        lines.append("- Feature flags read during execution:")
        for f in h["flags"]:
            lines.append(f"    - `{f}`")
    lines.append("")

    # Helpers
    lines.append("**Helpers called from the body** (each is a different webpack module):")
    lines.append("")
    if h["helpers"]:
        for hp in h["helpers"]:
            lines.append(f"- {helper_label(hp)}")
    else:
        lines.append("_(none — the body is self-contained.)_")
    lines.append("")

    # Honest "what we still don't know"
    lines.append("**What this proves vs. what it doesn't**:")
    lines.append("")
    unresolved = [hp for hp in h["helpers"] if hp.get("mid") not in RESOLVED_HELPERS]
    if h["urls"]:
        lines.append(
            "- ✅ The REST endpoint(s) above are inline literals in the "
            "handler — verified static evidence (URL string + method directly "
            "in this module, not in a helper)."
        )
    if h["events"]:
        lines.append(
            "- ✅ Redux action dispatch is statically verified — but the "
            "downstream MFE worker that handles each `Bo.X` action lives in a "
            "different module and may itself perform network I/O. The actual "
            "wire call (if any) is not visible from this handler."
        )
    if not h["helpers"] and not h["urls"] and not h["events"] and not h["gql_ops"]:
        lines.append(
            "- ✅ Self-contained handler. The body invokes no helpers, "
            "dispatches no Redux actions, and contains no URL literals — so "
            "this tool performs **local-state mutations only** (e.g. session "
            "store, in-memory Redux slice). No network I/O is fired by this "
            "execute call."
        )
    elif unresolved and not (h["urls"] or h["events"]):
        lines.append(
            "- ⚠️  The handler delegates to one or more helper modules whose "
            "internals were not traced in this pass. The actual network "
            "endpoint (or absence of one — some tools manipulate local "
            "Redux state only) is therefore **not statically verified** "
            "from this source. To confirm what each helper does on the "
            "wire, see the network-trace follow-up in "
            "[genie_code_followups.md](genie_code_followups.md) §1."
        )
    lines.append("")

    return "\n".join(lines)


def replace_handler_notes(md_path: Path, new_notes: str) -> None:
    """Replace everything from `## Handler notes` to end-of-file."""
    text = md_path.read_text()
    marker = "## Handler notes"
    i = text.find(marker)
    if i == -1:
        # Append if no section exists
        md_path.write_text(text.rstrip() + f"\n\n{marker}\n\n{new_notes}\n")
        return
    head = text[:i]
    md_path.write_text(head + marker + "\n\n" + new_notes + "\n")


def main() -> None:
    handlers = json.loads(HANDLERS.read_text())
    payload = json.loads(PAYLOAD.read_text())
    tool_names = [t["function"]["name"] for t in payload["tools"]]
    assert sorted(tool_names) == sorted(handlers.keys())

    for tool in tool_names:
        notes = render_handler_notes(tool, handlers[tool])
        md_path = REPO / f"genie_code_tool_{tool}.md"
        replace_handler_notes(md_path, notes)
        print(f"updated {md_path.name}")


if __name__ == "__main__":
    main()
