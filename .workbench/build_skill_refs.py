#!/usr/bin/env python3
"""Build per-skill reference markdown files for Genie Code's 4 built-in skills.

Reads .workbench/genie_skill_dump.json (extracted from the SPA webpack chunks)
and emits 4 files at the repo root:
  genie_code_skill_databricks-cli-public.md
  genie_code_skill_data-sampling.md
  genie_code_skill_sql-functions.md
  genie_code_skill_writing-sql.md
"""
import json
from pathlib import Path

REPO_ROOT = Path("/home/pascal/Code/pgoell-claude-tools")
DUMP = REPO_ROOT / ".workbench" / "genie_skill_dump.json"

# Registry descriptions captured verbatim from chunk 19604.5ae31ee5cc.chunk.js.
REGISTRY = {
    "databricks-cli-public": {
        "module_id": 61276,
        "description": (
            "Load when using the runDatabricksCli tool. Contains CLI command "
            "patterns for workspace assets (jobs, pipelines, clusters, serving "
            "endpoints, secrets, filesystem), pipeline management and monitoring, "
            "job diagnosis and settings, Lakebase database management, "
            "Databricks Apps lifecycle, Apps + Lakebase integration, "
            "conversation history retrieval and governed tags management."
        ),
        "files": [
            ("SKILL.md",                     22668, 622668, None),
            ("workspace-assets.md",          80426, 380426, None),
            ("pipelines-management.md",      44530, 644530, None),
            ("jobs-diagnosis.md",            48451, 148451, None),
            ("pipeline-task-parameters.md",  14628, 692247, "pipeline_parameters"),
            ("lakebase.md",                  96361, 896361, None),
            ("databricks-apps.md",            3292, 503292, None),
            ("apps-lakebase-integration.md", 51143, 451143, None),
            ("conversation-history.md",      10617, 510617, None),
            ("governed-tags.md",             47781, 347781, None),
        ],
    },
    "data-sampling": {
        "module_id": 833455,
        "description": (
            "Load BEFORE querying, filtering, or sampling any table — whether "
            "via readTable, getSqlSample, executeCode, editAsset, or writing "
            "SQL in cells. Also load when users ask conceptual questions "
            "about query result completeness: whether output is limited, "
            "whether all matching records were returned, or how to verify "
            "data coverage. Queries against unfamiliar tables frequently "
            "return wrong results without this — date formats vary, filter "
            "values are often spelled differently than expected, and results "
            "may be silently truncated."
        ),
        "files": [
            ("SKILL.md",                    50583, 750583, None),
            ("temporal-validation.md",      55792, 655792, None),
            ("categorical-validation.md",   37982, 837982, None),
            ("sampling-best-practices.md",  55463,  55463, None),
        ],
    },
    "sql-functions": {
        "module_id": 584313,
        "description": (
            "SQL AI functions in Databricks (functions starting with ai_, "
            "like ai_forecast(..), ai_parse_document(..)). Use when user "
            "needs to parse PDFs, extract text from documents/images, "
            "perform OCR, use SQL AI functions, or AI-powered analysis."
        ),
        "files": [
            ("SKILL.md",                      82577, 982577, None),
            ("ai_analyze_sentiment.md",       31535, 431535, None),
            ("ai_classify.md",                70413, 170413, "enableAiClassifySkillV2 (true branch)"),
            ("ai_classify-legacy.md",         57739,  57739, "enableAiClassifySkillV2 (false branch)"),
            ("ai_classify_large_label_set.md",99071, 999071, None),
            ("ai_extract.md",                 36500, 736500, None),
            ("ai_fix_grammar.md",             28884, 228884, None),
            ("ai_forecast.md",                73534, 373534, None),
            ("ai_gen.md",                     12059, 912059, None),
            ("ai_generate_text.md",           46942, 246942, None),
            ("ai_mask.md",                    64999, 264999, None),
            ("ai_parse_document.md",          88638, 788638, "enableAiParseDocumentSkillV2 (true branch)"),
            ("ai_parse_document-legacy.md",   84558, 284558, "enableAiParseDocumentSkillV2 (false branch)"),
            ("ai_query.md",                   33881, 533881, "enableAiQuerySkillV2 (true branch)"),
            ("ai_query-legacy.md",            19919, 419919, "enableAiQuerySkillV2 (false branch)"),
            ("ai_similarity.md",              98044, 375663, None),
            ("ai_summarize.md",               64424,  64424, None),
            ("ai_translate.md",               49627, 549627, None),
        ],
    },
    "writing-sql": {
        "module_id": 46640,
        "description": (
            "Load before writing Databricks SQL queries involving any of: "
            "AI functions, geospatial data, stored procedures, hierarchical "
            "queries or recursive CTEs (WITH RECURSIVE), temporary tables, "
            "time-only values, internationalized text, semi-structured data "
            "(VARIANT type), dynamic query construction, data modification "
            "operations, external table migration, pipe syntax, liquid "
            "clustering, table optimization, Unity Catalog governance tags "
            "and comments, or ABAC policies (attribute-based access control, "
            "row filters, column masks, governed tags)."
        ),
        "files": [
            ("SKILL.md",                15332, 115332, None),
            ("ai-functions.md",         55673,  55673, None),
            ("clustering-strategy.md",  66849, 466849, None),
            ("collation.md",            96794, 596794, None),
            ("data-modification.md",    30194, 130194, None),
            ("dynamic-sql.md",          40065, 340065, None),
            ("foreign-tables.md",       11786, 389405, None),
            ("pipe-syntax.md",          96317, 796317, None),
            ("recursive-ctes.md",       36867, 736867, None),
            ("spatial-sql.md",          67620, 267620, None),
            ("sql-scripting.md",        73737, 173737, None),
            ("stored-procedures.md",    48897, 748897, None),
            ("table-optimization.md",    4017, 304017, None),
            ("temp-table.md",           75192, 975192, None),
            ("time-type.md",            84881, 184881, None),
            ("variant-type.md",         25935, 625935, None),
            ("uc-tags.md",              38259, 138259, None),
            ("uc-comments.md",          87356, 687356, None),
            ("abac-policies.md",        38553, 438553, None),
        ],
    },
}


def main() -> None:
    dump = json.loads(DUMP.read_text())
    asset_manifest = "index.968bbeb5f6.js"  # captured 2026-05-19
    registry_chunk = "19604.5ae31ee5cc.chunk.js"
    for slug, info in REGISTRY.items():
        skill_data = dump[slug]
        lines: list[str] = []
        lines.append(f"# Genie Code skill: `{slug}`")
        lines.append("")
        lines.append(
            "Full content of the built-in Genie Code skill `"
            f"{slug}`, extracted from the Databricks SPA webpack chunks "
            f"on workspace `dbc-df321db9-486f.cloud.databricks.com` "
            "(captured 2026-05-19). Genie Code loads these markdown files "
            "lazily via the `readSkillFile` tool when its description "
            "matches the task at hand. See "
            "[genie_code_findings.md](genie_code_findings.md) and "
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
            f"`{registry_chunk}` chunk (module `{info['module_id']}`):"
        )
        lines.append("")
        lines.append("```jsonc")
        lines.append("{")
        lines.append(f'  "name":        "{slug}",')
        lines.append(f'  "description": "{info["description"]}",')
        lines.append(f'  "files":       [ /* {len(info["files"])} entries — see below */ ]')
        lines.append("}")
        lines.append("```")
        lines.append("")
        lines.append("## File manifest")
        lines.append("")
        lines.append(
            "Each file lives in its own webpack chunk (one chunk per markdown "
            "file). The SPA exposes them as raw string `module.exports`, "
            "loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. "
            "Chunk hashes change per release — re-derive them from the asset "
            f"manifest (`{asset_manifest}` at capture time). The path Genie "
            f"Code uses with `readSkillFile` is `skills/{slug}/<filename>`."
        )
        lines.append("")
        lines.append("| File | Chunk id | Module id | Feature flag |")
        lines.append("|---|---|---|---|")
        for fname, chunk, mod, gate in info["files"]:
            gate_md = gate if gate else "—"
            lines.append(f"| `{fname}` | `{chunk}` | `{mod}` | {gate_md} |")
        lines.append("")
        lines.append("## Files")
        lines.append("")
        for fname, chunk, mod, gate in info["files"]:
            content = skill_data.get(fname)
            if isinstance(content, dict) and "error" in content:
                body = f"_Failed to extract: {content['error']}_"
            else:
                body = content
            lines.append(f"### `{fname}`")
            lines.append("")
            lines.append(
                f"Webpack chunk `{chunk}.<hash>.chunk.js`, module `{mod}`."
                + (f" Feature-flag gated on `{gate}`." if gate else "")
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
