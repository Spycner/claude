#!/usr/bin/env python3
"""Build per-tool reference markdown files for the 18 Genie Code function-calling tools.

Reads the captured llmproxy POST body and emits one
genie_code_tool_<name>.md per tool with the verbatim parameters schema and
description, plus any extra notes about its handler.
"""
import json
from pathlib import Path

REPO_ROOT = Path("/home/pascal/Code/pgoell-claude-tools")
BODY_FILE = REPO_ROOT / ".workbench" / "genie_llmproxy_body.json"

# Handler notes inferred from the SPA chunks during this reverse-engineering
# session. These are not part of the wire payload — they describe what the
# client-side execute() handler is observed to call when each tool fires.
HANDLER_NOTES = {
    "recommendDataroom": (
        "Client-side handler calls Genie Spaces search (`/api/2.0/genie/spaces/search` or "
        "the underlying GraphQL ConversationModelStatuses op). Returns the "
        "ranked list of Genie spaces that could answer the question."
    ),
    "askDataroom": (
        "Posts a follow-up question to a specific Genie Space and returns the "
        "auto-generated SQL plus a natural-language answer. Internally fires "
        "`POST /api/2.0/genie/spaces/<id>/conversations` (or the same path's "
        "messages sub-resource)."
    ),
    "runDatabricksCli": (
        "Executes a `databricks ...` CLI subcommand on the attached compute. "
        "Implementation streams stdout/stderr back over the same SSE response "
        "as a code execution result. Authoritative reference for command "
        "patterns lives in the `databricks-cli-public` skill — see "
        "[genie_code_skill_databricks-cli-public.md](genie_code_skill_databricks-cli-public.md)."
    ),
    "renderChart": (
        "Pure client-side rendering — no REST call. The handler dispatches a "
        "Redux action that mounts the assistant's chart widget with the given "
        "datasets and chart specifications. Supports 20+ chart types, filter "
        "widgets, and conditional formatting per the schema below."
    ),
    "docSearch": (
        "Calls the Databricks docs search backend (the same engine that powers "
        "`docs.databricks.com` search). The result set is filtered down to "
        "passages relevant to the agent's prompt."
    ),
    "readTable": (
        "Calls Unity Catalog REST APIs to fetch table metadata (columns + types), "
        "sample rows, and optionally Delta/Spark properties. The "
        "[`data-sampling`](genie_code_skill_data-sampling.md) skill prescribes "
        "discipline around using this tool to avoid silently-truncated results."
    ),
    "tableSearch": (
        "Searches Unity Catalog for tables matching keywords and/or a natural-"
        "language query. Falls back to `readTable` automatically when the "
        "caller passes a fully-qualified table name."
    ),
    "querySearch": (
        "Searches saved SQL queries (Queries product) by intent + keywords. "
        "Scopable by table reference. The [`asset-discovery`]"
        "(genie_code_skill_asset-discovery.md) skill prescribes loading saved-"
        "query patterns before writing new SQL."
    ),
    "forYouAssets": (
        "Returns personalized assets for the current user: favorites, "
        "suggested, popular, and recents. Backs the workspace home cards."
    ),
    "searchAssets": (
        "Unified search across notebooks, dashboards, pipelines, jobs, Genie "
        "spaces, files, alerts, apps, endpoints, models, and folders. Page-"
        "tokenised."
    ),
    "manageTodoList": (
        "Read or replace the agent's structured TODO list — kept in client "
        "memory and rendered in the chat sidebar. Genie Code's system prompt "
        "tells it when to maintain a TODO list (multi-step tasks with "
        "dependencies, verification gates, underspecified requests)."
    ),
    "readSkillFile": (
        "Loads a built-in skill markdown by relative path "
        "(`skills/<skill>/<file>`). All 11 skills ship inside the SPA webpack "
        "bundles — see the `genie_code_skill_*.md` files for the full "
        "extracted contents."
    ),
    "readAssetById": (
        "Open any workspace asset (notebook, pipeline, dashboard, query, file, "
        "directory, job, MLflow model/experiment) by id and (optionally) "
        "line range. The asset content is materialised into the prompt context."
    ),
    "fetchOmittedContent": (
        "When a prior tool result exceeded the agent's token budget, the "
        "compactor replaces large fields with `__more` placeholders. This "
        "tool drills back into the full cached output via a jq-style path "
        "(`.items[3].comments`). Tool-call ids are stable for the lifetime of "
        "the conversation."
    ),
    "createAsset": (
        "Creates an empty asset of the requested type at the user's home "
        "directory (or a nested path). Implementation calls "
        "`POST /ajax-api/2.0/workspace/mkdirs` to materialise intermediate "
        "directories, then `POST /ajax-api/2.0/workspace/import` (or the "
        "Lakeview/jobs/pipelines GraphQL mutations) for the asset itself. The "
        "user is then navigated to the new asset via an implicit `openAsset` "
        "call."
    ),
    "openAsset": (
        "Navigates to an existing asset, or returns its URL. Supports a "
        "`continueMessage` parameter that hands a follow-up prompt off to the "
        "destination page's specialized agent (used heavily by notebook / "
        "dashboard / pipeline / job authoring flows in the system prompt)."
    ),
    "executeCode": (
        "Runs a short snippet on the attached compute. Languages: python, sh, "
        "r, scala, sql. The notebook command-execution REST API streams "
        "results back; the agent then summarises and displays them. The "
        "[`data-sampling`](genie_code_skill_data-sampling.md) skill prescribes "
        "discipline around the queries this tool runs."
    ),
    "findReferencesTool": (
        "Returns Unity Catalog lineage for a table or column: upstream / "
        "downstream tables, dependent notebooks, jobs, and dashboards. "
        "Carries `cache_control: {type: \"ephemeral\"}` in the tools array "
        "(the cache marker is attached to the LAST tool, signalling Anthropic "
        "prompt caching for the whole tool block)."
    ),
}

HEADER_BLURB = (
    "Verbatim function-calling tool definition shipped by Genie Code on the "
    "`/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 "
    "from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching "
    "`window.fetch` on the SPA and triggering a single chat message. See "
    "[genie_code_payload.md](genie_code_payload.md) for the full request "
    "envelope and [genie_code_findings.md](genie_code_findings.md) for the "
    "auth bootstrap that lets you replay this endpoint programmatically."
)


def main() -> None:
    body = json.loads(BODY_FILE.read_text())
    tools = body["tools"]
    assert len(tools) == 18, f"expected 18 tools, got {len(tools)}"
    for idx, t in enumerate(tools, 1):
        fn = t["function"]
        name = fn["name"]
        description = fn["description"]
        params = fn["parameters"]
        cache_control = t.get("cache_control")
        lines: list[str] = []
        lines.append(f"# Genie Code tool: `{name}`")
        lines.append("")
        lines.append(HEADER_BLURB)
        lines.append("")
        lines.append(f"Position in tools array: **{idx} of 18**.")
        if cache_control:
            lines.append("")
            lines.append(
                "**Prompt-cache marker**: `cache_control = "
                + json.dumps(cache_control)
                + "`. Anthropic prompt caching is attached to this tool "
                "definition, which means the entire tool block above it is "
                "cached on the server side and only re-validated when this "
                "tool's schema changes."
            )
        lines.append("")
        lines.append("## Description")
        lines.append("")
        lines.append("> " + description.replace("\n", "\n> "))
        lines.append("")
        lines.append("## Parameters (JSON Schema)")
        lines.append("")
        lines.append("```json")
        lines.append(json.dumps(params, indent=2, ensure_ascii=False))
        lines.append("```")
        lines.append("")
        lines.append("## Required parameters")
        lines.append("")
        required = params.get("required", [])
        if required:
            for r in required:
                prop = params["properties"].get(r, {})
                desc = prop.get("description", "")
                ptype = prop.get("type", "")
                # Truncate description to a single line in the bullet
                first = desc.splitlines()[0] if desc else ""
                lines.append(f"* `{r}` ({ptype}) — {first}")
        else:
            lines.append("None — the tool can be invoked with an empty object.")
        lines.append("")
        lines.append("## All properties")
        lines.append("")
        props = params.get("properties", {})
        for pname, pdef in props.items():
            required_marker = " **(required)**" if pname in required else ""
            ptype = pdef.get("type", "")
            penum = pdef.get("enum")
            penum_str = (
                f" enum: {', '.join(repr(e) for e in penum)}"
                if penum
                else ""
            )
            pdesc = pdef.get("description", "").strip()
            lines.append(f"### `{pname}`{required_marker}")
            lines.append("")
            if ptype:
                lines.append(f"Type: `{ptype}`.{penum_str}")
                lines.append("")
            if pdesc:
                lines.append("> " + pdesc.replace("\n", "\n> "))
                lines.append("")
        lines.append("## Handler notes")
        lines.append("")
        lines.append(HANDLER_NOTES.get(name, "_(no notes captured)_"))
        lines.append("")
        out = REPO_ROOT / f"genie_code_tool_{name}.md"
        out.write_text("\n".join(lines))
        print(f"wrote {out} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
