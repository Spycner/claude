#!/usr/bin/env python3
"""Build per-tool reference markdown files for the 21 dashboard-specific
Genie Code function-calling tools (the Dashboard Authoring Agent's tools
that are NOT shared with the LakeAgent's 18).

Combines:
  - The verbatim wire schema (description + parameters) from the captured
    llmproxy body in ``../../agents/dashboard-authoring-llmproxy-body.json``.
  - Static handler analysis from ``../data/dashboard-tool-handlers.json``,
    produced by ``parse-dashboard-tool-handlers.py`` against chunk 40961.

Output goes to ``../../tools/dashboard/<tool>.md``.

Author this once; re-run when the wire body or chunk hashes change.
"""
from __future__ import annotations

import json
from pathlib import Path

REPO = Path("/home/pascal/Code/pgoell-claude-tools")
REFS = REPO / "plugins" / "databricks" / "skills" / "genie-code" / "references"
WIRE_BODY = REFS / "agents" / "dashboard-authoring-llmproxy-body.json"
HANDLERS = REFS / "extraction" / "data" / "dashboard-tool-handlers.json"
OUT_DIR = REFS / "tools" / "dashboard"

# Tools to emit (the 21 dashboard-specific). Order matches the wire body.
DASHBOARD_TOOLS = {
    "renameDashboard", "updateDashboardTheme", "publishDashboard",
    "editPages", "editWidgetsV2", "getVizTypeDefinition",
    "addMetricView", "createDatasetFromSQL", "updateDatasetFromSQL",
    "createLocalMetricViewDataset", "updateLocalMetricViewDataset",
    "editDatasetCalculations", "deleteDataset", "getDashboardConfig",
    "refreshData", "readDatasetData", "readDataset",
    "fetchWidgetRenderData", "getSqlSample", "executeSql",
    "editWorkspaceFile",
}

# One-line behavioural intent for each tool (extracted from the system prompt
# and the dashboard-authoring agent ref). Provides the "what this does on the
# wire" framing each ref's Handler-notes section opens with.
INTENT = {
    "renameDashboard": "Update the dashboard's display name. Used early in a session to retitle default-named dashboards (\"New Dashboard 202…\") once the agent understands the data.",
    "updateDashboardTheme": "Set the dashboard's visual theme (color tokens + typography).",
    "publishDashboard": "Publish the draft to a shareable URL. Carries `embedCredentials` to switch between Run-as-owner / Run-as-viewer.",
    "editPages": "Create / rename / delete dashboard pages. Supports CANVAS pages and the singleton GLOBAL_FILTERS page (filter widgets that apply across pages).",
    "editWidgetsV2": "The deep schema. Creates / edits / moves / deletes widgets on a page. Carries both a `RenderWidgetSpec` (visual encoding) and a `QuerySpec` (data binding) per widget — the only tool that can write to widgets on the canvas.",
    "getVizTypeDefinition": "Read-only lookup. Returns the JSON Schema for a visualization type (e.g. `bar`, `line`, `pivot`) so the agent can populate `editWidgetsV2` correctly.",
    "addMetricView": "Attach an existing Unity Catalog metric view (UC `METRIC VIEW`) to the dashboard as a dataset. Requires `databricks.fe.editor.assistant.metricViews`.",
    "createDatasetFromSQL": "Create a raw-SQL dataset on the dashboard. Decision tree fallback when DLMVs are unsuitable (parameterized tables via `IDENTIFIER(:t)`, raw extracts).",
    "updateDatasetFromSQL": "Edit a SQL dataset's source SQL / display name in place.",
    "createLocalMetricViewDataset": "**The default dataset creator**. Creates a Dashboard-Local Metric View (DLMV): a per-widget metric view with YAML config, isolated from sibling widgets.",
    "updateLocalMetricViewDataset": "Edit a DLMV's YAML config in place.",
    "editDatasetCalculations": "Edit derived calculations attached to a dataset (measure-typed or dimension-typed expressions). Blocked on DLMVs (DLMVs express derived measures inside their YAML).",
    "deleteDataset": "Drop a dataset from the dashboard. Used during automatic cleanup after widget mutations leave orphaned datasets.",
    "getDashboardConfig": "Re-read the live dashboard state (pages, widgets, datasets, layout, theme, publish status). Called only when the snapshot in context is suspected stale.",
    "refreshData": "Re-execute one or more datasets to refresh their query results. The agent must wait for state to settle before reading the data back.",
    "readDatasetData": "Sample rows from a dashboard dataset's most recent execution result.",
    "readDataset": "Read a dataset's SQL or metric-view configuration plus inferred schema.",
    "fetchWidgetRenderData": "Render a widget and return its JSON output (optionally a PNG). Mandatory after every `editWidgetsV2` to verify the rendered widget matches intent.",
    "getSqlSample": "Quick row sample for a SQL snippet, table, or file path. Used to validate query shape before committing it to a dataset.",
    "executeSql": "Run exploratory / diagnostic SQL on the dashboard's shared warehouse. Used for debugging when `readDatasetData` returns empty / wrong results.",
    "editWorkspaceFile": "Edit a workspace file by search-and-replace. Used when a dataset reads from a workspace file (e.g., a notebook used as a dataset source).",
}

HEADER_BLURB = (
    "Verbatim function-calling tool definition shipped by the **Dashboard "
    "Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. "
    "Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` "
    "by patching `window.fetch` on the SPA, opening a dashboard draft canvas, "
    "and triggering a single `hi` chat message. See "
    "[`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) "
    "for the agent's identity, system prompt outline, and skill registry; and "
    "[`../../overview/payload.md`](../../overview/payload.md) for the request "
    "envelope shared with the other Genie Code agents."
)


def fmt_param_block(params: dict) -> list[str]:
    lines: list[str] = []
    lines.append("```json")
    lines.append(json.dumps(params, indent=2, ensure_ascii=False))
    lines.append("```")
    return lines


def fmt_required_list(params: dict) -> list[str]:
    lines: list[str] = []
    required = params.get("required", [])
    if not required:
        lines.append("None — the tool can be invoked with an empty object.")
        return lines
    for r in required:
        prop = params.get("properties", {}).get(r, {})
        desc = prop.get("description", "")
        ptype = prop.get("type", "")
        first = desc.splitlines()[0] if desc else ""
        lines.append(f"* `{r}` ({ptype}) — {first}")
    return lines


def fmt_all_properties(params: dict) -> list[str]:
    lines: list[str] = []
    props = params.get("properties", {})
    required = set(params.get("required", []))
    for pname, pdef in props.items():
        marker = " **(required)**" if pname in required else ""
        ptype = pdef.get("type", "")
        penum = pdef.get("enum")
        penum_str = f" enum: {', '.join(repr(e) for e in penum)}" if penum else ""
        pdesc = pdef.get("description", "").strip()
        lines.append(f"### `{pname}`{marker}")
        lines.append("")
        if ptype:
            lines.append(f"Type: `{ptype}`.{penum_str}")
            lines.append("")
        if pdesc:
            lines.append("> " + pdesc.replace("\n", "\n> "))
            lines.append("")
        # Recursive: if nested properties exist, dump those briefly inline
        nested_props = pdef.get("properties")
        nested_items = pdef.get("items")
        if nested_props:
            lines.append("Nested properties:")
            for sub_name, sub_def in nested_props.items():
                sub_type = sub_def.get("type", "")
                _desc_lines = (sub_def.get("description", "") or "").splitlines()
                sub_desc = _desc_lines[0] if _desc_lines else ""
                lines.append(f"* `{sub_name}` ({sub_type}) — {sub_desc}")
            lines.append("")
        elif isinstance(nested_items, dict) and "properties" in nested_items:
            lines.append("Array items (object) properties:")
            for sub_name, sub_def in nested_items["properties"].items():
                sub_type = sub_def.get("type", "")
                _desc_lines = (sub_def.get("description", "") or "").splitlines()
                sub_desc = _desc_lines[0] if _desc_lines else ""
                lines.append(f"* `{sub_name}` ({sub_type}) — {sub_desc}")
            lines.append("")
    return lines


def fmt_handler_section(handler: dict | None, name: str) -> list[str]:
    lines: list[str] = []
    if not handler:
        lines.append("**No static handler captured yet.** Re-run "
                     "`extraction/scripts/parse-dashboard-tool-handlers.py` "
                     "if the chunk hashes change.")
        return lines

    chunk_alt = handler.get("_chunk")
    if chunk_alt:
        lines.append(
            f"Extracted from SPA chunk `{chunk_alt.split(' ')[0]}` "
            f"({chunk_alt.split(' ', 1)[1] if ' ' in chunk_alt else ''}). "
            f"This tool is imported into the Dashboard Authoring Agent from "
            f"another chunk rather than defined inline in "
            f"`DashboardAuthoringAgentContext`. The factory below is verbatim "
            f"minified JavaScript."
        )
    else:
        lines.append(
            "Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module "
            "`229581` — `DashboardAuthoringAgentContext`). The Dashboard "
            "Authoring Agent registers each tool via a `(0,az.z6)({...})` "
            "factory call inside the agent context's `useMemo`, with the "
            "actual handler defined in a sibling `useCallback`. The wrapper "
            "below is verbatim minified JavaScript."
        )
    lines.append("")

    body_a6 = handler.get("body_a6") or ""
    body_callback = handler.get("body_callback") or ""
    body_inline = handler.get("body_inline_execute") or ""
    name_source = handler.get("name_source") or "literal"
    callback_var = handler.get("callback_var")

    if name_source != "literal":
        lines.append(
            f"**Name constant**: the wire `name` value `\"{name}\"` is stored in "
            f"chunk-local constant `{name_source}`; the factory call references "
            f"it as `name:{name_source}`."
        )
        lines.append("")
    if callback_var:
        lines.append(
            f"**Handler binding**: the `execute:` arrow points at the local "
            f"variable `{callback_var}`, defined in the same factory by a "
            f"`(0,i.useCallback)((args,signal,context) => …)`."
        )
        lines.append("")

    if body_callback:
        lines.append(f"**Surrounding `useCallback` body** (verbatim, minified — "
                     f"{handler.get('body_callback_len', len(body_callback))} bytes):")
        lines.append("")
        lines.append("```javascript")
        snippet = body_callback if len(body_callback) <= 3000 else body_callback[:3000] + "\n…[truncated]"
        lines.append(snippet)
        lines.append("```")
        lines.append("")
        if len(body_callback) > 3000:
            lines.append(f"_(body truncated at 3,000 chars; full {handler['body_callback_len']}-byte source is in `../../extraction/data/dashboard-tool-handlers.json` under `{name}.body_callback`.)_")
            lines.append("")
    elif body_a6:
        lines.append(f"**`a6` wrapper body** (verbatim, minified — {handler.get('body_a6_len', len(body_a6))} bytes):")
        lines.append("")
        lines.append("```javascript")
        snippet = body_a6 if len(body_a6) <= 3000 else body_a6[:3000] + "\n…[truncated]"
        lines.append(snippet)
        lines.append("```")
        lines.append("")
    # Only render inline-execute if it's an actual arrow function body, not a
    # bare variable reference (e.g. `s` pointing at the useCallback above).
    if body_inline and "=>" in body_inline:
        lines.append(f"**Inline `execute` arrow** (verbatim, minified — {handler.get('body_inline_execute_len', len(body_inline))} bytes):")
        lines.append("")
        lines.append("```javascript")
        snippet = body_inline if len(body_inline) <= 3000 else body_inline[:3000] + "\n…[truncated]"
        lines.append(snippet)
        lines.append("```")
        lines.append("")

    urls = handler.get("urls", [])
    methods = handler.get("methods", [])
    helpers = handler.get("helpers", [])
    flags = handler.get("flags", [])
    events = handler.get("events", [])
    gql_ops = handler.get("gql_ops", [])
    direct_fetches = handler.get("direct_fetches", [])

    lines.append("**Verified wire-level evidence** (literal in the handler body):")
    lines.append("")
    if urls or direct_fetches:
        method_label = (", ".join(methods)) if methods else "method unknown"
        lines.append(f"- REST endpoints ({method_label}):")
        for u in urls:
            lines.append(f"    - `{u}`")
        for u in direct_fetches:
            lines.append(f"    - `{u}` (direct `fetch(...)`)")
    else:
        lines.append("- No REST URLs appear as literals in the wrapper. The "
                     "execute body delegates to imported helpers — see the "
                     "Helpers list below to trace network calls one hop deeper.")
    if flags:
        lines.append("- Feature flags read during execution:")
        for f in flags:
            lines.append(f"    - `{f}`")
    if events:
        lines.append("- Redux events dispatched (Bo enum values):")
        for e in events:
            lines.append(f"    - `Bo.{e}`")
    if gql_ops:
        lines.append("- GraphQL operations referenced:")
        for g in gql_ops:
            lines.append(f"    - `{g}`")
    lines.append("")

    if helpers:
        lines.append("**Helpers called from the body** (`(0, alias.member)(...)` references):")
        lines.append("")
        for h in helpers:
            lines.append(f"- `(0, {h['alias']}.{h['member']})(...)` ")
        lines.append("")
        lines.append(
            "_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local "
            "imports. Resolve them to module IDs by grepping the chunk for "
            "`<alias>=r(<id>)` near the factory IIFE._"
        )
        lines.append("")

    return lines


def main() -> None:
    wire = json.loads(WIRE_BODY.read_text())
    handlers = json.loads(HANDLERS.read_text())
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    tools_list = wire["tools"]
    name_to_pos = {t["function"]["name"]: i + 1 for i, t in enumerate(tools_list)}

    written = 0
    for tool_entry in tools_list:
        fn = tool_entry["function"]
        name = fn["name"]
        if name not in DASHBOARD_TOOLS:
            continue

        description = fn["description"]
        params = fn["parameters"]
        cache_control = tool_entry.get("cache_control")
        handler = handlers.get(name)

        lines: list[str] = []
        lines.append(f"# Dashboard tool: `{name}`")
        lines.append("")
        lines.append(HEADER_BLURB)
        lines.append("")
        lines.append(f"Position in tools array: **{name_to_pos[name]} of 34**.")
        lines.append("")
        if cache_control:
            lines.append(
                "**Prompt-cache marker**: `cache_control = "
                + json.dumps(cache_control)
                + "`. Anthropic prompt caching is attached to this tool, so the "
                "entire tools block up to (and including) this one is cached on "
                "the server side."
            )
            lines.append("")
        lines.append("## What this tool does")
        lines.append("")
        lines.append("> " + INTENT.get(name, "(no extracted intent yet)").replace("\n", "\n> "))
        lines.append("")
        lines.append("## Description (verbatim from wire body)")
        lines.append("")
        lines.append("> " + description.replace("\n", "\n> "))
        lines.append("")
        lines.append("## Parameters (JSON Schema)")
        lines.append("")
        lines.extend(fmt_param_block(params))
        lines.append("")
        lines.append("## Required parameters")
        lines.append("")
        lines.extend(fmt_required_list(params))
        lines.append("")
        lines.append("## All properties")
        lines.append("")
        lines.extend(fmt_all_properties(params))
        lines.append("## Handler notes")
        lines.append("")
        lines.extend(fmt_handler_section(handler, name))
        lines.append("")
        lines.append("## Verified network behaviour")
        lines.append("")
        lines.append(
            "_(Live wire trace not yet captured for this tool. To collect: "
            "open a dashboard draft canvas in chrome-devtools-mcp, install the "
            "`window.fetch` capture from [`../../traces/`](../../traces/), then "
            "trigger this tool from the UI or via a directed prompt. Save the "
            f"resulting request log as `../../traces/{name}.json`.)_"
        )
        lines.append("")

        out_path = OUT_DIR / f"{name}.md"
        out_path.write_text("\n".join(lines))
        written += 1
        print(f"wrote {out_path} ({out_path.stat().st_size} bytes)")

    print(f"\n{written} files written under {OUT_DIR}")


if __name__ == "__main__":
    main()
