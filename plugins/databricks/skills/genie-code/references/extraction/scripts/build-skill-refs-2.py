#!/usr/bin/env python3
"""Build per-skill reference markdown files for the 7 additional Genie Code skills."""
import json
from pathlib import Path

REPO_ROOT = Path("/home/pascal/Code/pgoell-claude-tools")
DUMP = REPO_ROOT / ".workbench" / "genie_skill_dump_2.json"

# Registry descriptions captured verbatim from chunk 19604.5ae31ee5cc.chunk.js.
DESCRIPTIONS = {
    "migration-orchestrator": (
        "Skill for SQL migration orchestration, load it whenever user wants "
        "to convert foreign SQL to Databricks. Use when the user wants to "
        "migrate single or multiple SQL files, a folder, or a project to "
        "Databricks SQL. Drives the migrationConverterSubagent tool across "
        "files."
    ),
    "diagnose-error": (
        "REQUIRED for any case where the user is asking help to fix their "
        "code. Load this skill FIRST when diagnosing errors i.e, when the "
        "user is using /fix, or clicking Diagnose Error or seeking help to "
        "fix their errors irrespective of the difficulty of the error. "
        "Contains critical verification workflows that prevent incorrect "
        "fixes."
    ),
    "query-performance": (
        "Audits notebooks and SQL queries for performance improvements "
        "across four dimensions: compute (DBSQL Serverless — latest "
        "runtime, Photon, DFP/DPP, result cache out of the box), table "
        "type (UC managed), data layout (Predictive Optimization + Auto "
        "Liquid Clustering), and ingestion (Photon-enabled paths, "
        "stats-on-load). Use when the user asks about performance, slow "
        "queries, optimization, latency, or best practices — whether they "
        "share specific code or ask a general question. Don't use for "
        "correctness or debugging without a performance angle."
    ),
    "external-access": (
        "Check whether a Unity Catalog table is eligible for external "
        "access via open APIs and credential vending. Use when the user "
        "asks if a table can be accessed from external tools or engines, "
        "how to connect from a non-Databricks client, or why credential "
        "vending is failing. Do not use for Delta Sharing questions."
    ),
    "using-metric-views": (
        "Create and query Unity Catalog metric views for centralized "
        "business metrics. Use when defining reusable KPIs, querying "
        "metric views with MEASURE() syntax, or standardizing aggregate "
        "calculations across dashboards."
    ),
    "asset-discovery": (
        "Load for data questions to find existing dashboards, notebooks, "
        "and query patterns before building from scratch. Even if the user "
        "specifies a table name, load this skill to find examples showing "
        "HOW to use that table correctly — existing patterns contain "
        "validated business logic (deduplication, filters, joins) that you "
        "won't find in raw schemas. Load BEFORE using searchAssets, "
        "tableSearch, readAssetById, or querySearch."
    ),
    "data-quality-rca": (
        "Perform root cause analysis for data quality issues on Databricks "
        "tables. Investigates precomputed RCA from Data Quality Monitoring, "
        "traces upstream lineage, and examines job or pipeline failures to "
        "identify specific root causes. Use when the user asks why a table "
        "is unhealthy, stale, incomplete, or has failing quality metrics "
        "(such as freshness, completeness, or null constraints) — including "
        "tables without a monitor where upstream lineage tracing is needed. "
        "Do not use for general data quality questions about local "
        "DataFrames or non-Databricks datasets."
    ),
}

MODULE_IDS = {
    "migration-orchestrator": 19828,
    "diagnose-error": 20580,
    "query-performance": 94822,
    "external-access": 357001,
    "using-metric-views": 610323,
    "asset-discovery": 958510,
    "data-quality-rca": 57212,
}


def main() -> None:
    dump = json.loads(DUMP.read_text())
    asset_manifest = "index.968bbeb5f6.js"
    registry_chunk = "19604.5ae31ee5cc.chunk.js"
    for slug, info in dump.items():
        files = info["files"]
        enabled = info.get("enabledFlag")
        description = DESCRIPTIONS[slug]
        module_id = MODULE_IDS[slug]
        lines: list[str] = []
        lines.append(f"# Genie Code skill: `{slug}`")
        lines.append("")
        lines.append(
            f"Full content of the Genie Code skill `{slug}`, extracted "
            "from the Databricks SPA webpack chunks on workspace "
            "`dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). "
            "Genie Code loads these markdown files lazily via the "
            "`readSkillFile` tool when its description matches the task at "
            "hand. See [genie_code_findings.md](genie_code_findings.md) and "
            "[genie_code_payload.md](genie_code_payload.md) for the request "
            "envelope and tool schema, and "
            "[genie_code_system_prompt.md](genie_code_system_prompt.md) for "
            "the system prompt that drives skill selection."
        )
        lines.append("")
        lines.append("## Registry record")
        lines.append("")
        lines.append(
            "From the Genie Code SkillRegistry definition in the SPA's "
            f"`{registry_chunk}` chunk (module `{module_id}`):"
        )
        lines.append("")
        lines.append("```jsonc")
        lines.append("{")
        lines.append(f'  "name":        "{slug}",')
        lines.append(f'  "description": "{description}",')
        if enabled:
            lines.append(
                f'  "enabled":     "()=>(0,W)({enabled!r}, false)" '
                f'/* feature-flag gate */,'
            )
        lines.append(f'  "files":       [ /* {len(files)} entries — see below */ ]')
        lines.append("}")
        lines.append("```")
        lines.append("")
        if enabled:
            lines.append(
                "**Feature flag**: This skill is hidden from the Skill "
                f"Registry unless `{enabled}` is true on the workspace."
            )
            lines.append("")
        lines.append("## File manifest")
        lines.append("")
        lines.append(
            "Each file lives in its own webpack chunk and is exposed as a "
            "raw string `module.exports`, loaded on demand via "
            "`r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes "
            f"change per release — re-derive them from `{asset_manifest}` "
            "before re-extracting. The path Genie Code uses with "
            f"`readSkillFile` is `skills/{slug}/<filename>`."
        )
        lines.append("")
        lines.append("| File | Chunk id | Module id | Gate |")
        lines.append("|---|---|---|---|")
        for fname, fr in files.items():
            gate = fr.get("gate") or "—"
            lines.append(f"| `{fname}` | `{fr['chunk']}` | `{fr['mod']}` | {gate} |")
        lines.append("")
        lines.append("## Files")
        lines.append("")
        for fname, fr in files.items():
            content = fr.get("text")
            if content is None:
                body = f"_Failed to extract: {fr.get('error', 'unknown error')}_"
            else:
                body = content
            lines.append(f"### `{fname}`")
            lines.append("")
            gate_str = (
                f" Gated on `{fr['gate']}`." if fr.get("gate") else ""
            )
            lines.append(
                f"Webpack chunk `{fr['chunk']}.<hash>.chunk.js`, module "
                f"`{fr['mod']}`.{gate_str}"
            )
            lines.append("")
            lines.append("````markdown")
            lines.append(body.rstrip("\n"))
            lines.append("````")
            lines.append("")
        out_path = REPO_ROOT / f"genie_code_skill_{slug}.md"
        out_path.write_text("\n".join(lines))
        print(f"wrote {out_path} ({out_path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
