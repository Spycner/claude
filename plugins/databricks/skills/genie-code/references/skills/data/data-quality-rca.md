# Genie Code skill: `data-quality-rca`

Full content of the Genie Code skill `data-quality-rca`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). Genie Code loads these markdown files lazily via the `readSkillFile` tool when its description matches the task at hand. See [findings.md](../../overview/findings.md) and [payload.md](../../overview/payload.md) for the request envelope and tool schema, and [system-prompt.md](../../overview/system-prompt.md) for the system prompt that drives skill selection.

## Registry record

From the Genie Code SkillRegistry definition in the SPA's `19604.5ae31ee5cc.chunk.js` chunk (module `57212`):

```jsonc
{
  "name":        "data-quality-rca",
  "description": "Perform root cause analysis for data quality issues on Databricks tables. Investigates precomputed RCA from Data Quality Monitoring, traces upstream lineage, and examines job or pipeline failures to identify specific root causes. Use when the user asks why a table is unhealthy, stale, incomplete, or has failing quality metrics (such as freshness, completeness, or null constraints) — including tables without a monitor where upstream lineage tracing is needed. Do not use for general data quality questions about local DataFrames or non-Databricks datasets.",
  "enabled":     "()=>(0,W)('databricks.fe.assistant.enableDataQualityRcaSkill', false)" /* feature-flag gate */,
  "files":       [ /* 4 entries — see below */ ]
}
```

**Feature flag**: This skill is hidden from the Skill Registry unless `databricks.fe.assistant.enableDataQualityRcaSkill` is true on the workspace.

## File manifest

Each file lives in its own webpack chunk and is exposed as a raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release — re-derive them from `index.968bbeb5f6.js` before re-extracting. The path Genie Code uses with `readSkillFile` is `skills/data-quality-rca/<filename>`.

| File | Chunk id | Module id | Gate |
|---|---|---|---|
| `SKILL.md` | `56504` | `656504` | — |
| `precompute-rca.md` | `51234` | `751234` | — |
| `lineage-traversal.md` | `51183` | `351183` | — |
| `job-investigation.md` | `62645` | `162645` | — |

## Files

### `SKILL.md`

Webpack chunk `56504.<hash>.chunk.js`, module `656504`.

````markdown
# Data Quality Root Cause Analysis

**USE THIS SKILL** when the user asks to:

- Investigate why a table is unhealthy in terms of data quality
- Find the root cause of data quality degradation on a table
- Debug freshness, completeness, or null constraint failures
- Trace upstream lineage to find what job or pipeline writes to a stale table

When this skill applies, **immediately start executing** the investigation. Don't describe what you'll do — do it.

## Tool Usage Rules

**All CLI commands in this skill MUST be executed via the `runDatabricksCli` tool.** Do not write Python code, shell commands, or SQL queries to perform operations that `runDatabricksCli` supports. The tool is pre-authenticated and returns structured output.

- **Steps 1 & 2** use SQL queries to read system tables — this is correct because these tables are not exposed via CLI
- **Step 3** uses `runDatabricksCli` for job and pipeline operations — do NOT substitute SQL queries or Python code for these operations

## Investigation Flow

Follow these steps sequentially. Each step tells you when to proceed or stop.

**Shortcut**: If the user or prior context already provides a specific job ID to investigate, skip directly to **Step 3** ([job-investigation.md](job-investigation.md)).

### Step 1: Precomputed RCA

Read [precompute-rca.md](precompute-rca.md) — always start here.

Queries the Data Quality Monitoring system table for precomputed root cause analysis. This may give you a direct pointer to the upstream job causing the issue.

**After Step 1:**

- Table is healthy → report to user, ask if they still want to investigate. If no, **STOP**
- RCA has upstream jobs → extract `job_id` from the first failing job, skip to **Step 3**
- RCA exists but no upstream jobs → go to **Step 2**
- No RCA or table is unmonitored → suggest the user enable Data Quality Monitoring for richer RCA, then go to **Step 2**
- PERMISSION_DENIED → note the limitation to the user, then go to **Step 2** (best effort)

### Step 2: Lineage Traversal

Read [lineage-traversal.md](lineage-traversal.md) — use when Step 1 did not identify a job to investigate.

Walks upstream through `system.access.table_lineage` to find which jobs or entities write to the affected table.

**After Step 2:**

- Found a job ID → go to **Step 3**
- Found a pipeline ID → use `pipelines get --pipeline-id <ID> --output JSON` to investigate, then report findings
- Found a notebook entity → report details and **STOP**
- PERMISSION_DENIED or no lineage → **STOP** with guidance

### Step 3: Job Investigation

Read [job-investigation.md](job-investigation.md) — use once you have a job ID from Step 1 or Step 2.

Uses Databricks CLI to examine job configuration, run history, error output, and executed source code.

### Step 4: Root Cause Report

After completing the investigation, synthesize your findings into a concise report:

- **Root cause**: The specific error or failure — not just "job failed", but the actual error message, exception, or condition
- **Affected components**: Job name/ID, specific task (for multi-task jobs), upstream table chain
- **Error pattern**: Consistent (all recent runs fail) vs intermittent (some pass, some fail), and when failures started
- **Recommended fix**: A specific, actionable next step the user can take

## Key Principles

- **Execute immediately** — don't ask for permission to investigate, just start
- **CLI is mandatory for job/pipeline operations** — you MUST use the `runDatabricksCli` tool, not SQL or Python. SQL is only for system table queries in Steps 1 and 2
- **Be concise** — state findings directly, save detailed explanations for follow-up questions
- **Best effort on permissions** — if a step is blocked by permissions, note the limitation and continue with the next step. Only stop if you are fully blocked with no alternative path forward
- **Never stop at "job failed"** — you must get the specific error from the job run output
````

### `precompute-rca.md`

Webpack chunk `51234.<hash>.chunk.js`, module `751234`.

````markdown
# Step 1: Precomputed RCA from Data Quality Monitoring System Table

**EXECUTE this SQL query** to check monitoring status and retrieve precomputed root cause analysis:

```%sql
SELECT
  catalog_name,
  schema_name,
  table_name,
  status,
  freshness,
  completeness,
  root_cause_analysis,
  event_time
FROM system.data_quality_monitoring.table_results
WHERE catalog_name = '<catalog>'
  AND schema_name = '<schema>'
  AND table_name = '<table>'
ORDER BY event_time DESC
LIMIT 10;
```

## Handle Results

### PERMISSION_DENIED error

Tell the user:

> "Unable to read Data Quality Monitoring results from `system.data_quality_monitoring.table_results`. You may not have admin access, Data Quality Monitoring may not be enabled on your workspace, or it may not be enabled on any schemas yet. Continuing to investigate via lineage instead."

**Proceed to Step 2** (lineage traversal) — this is not a blocker, just a missing data source.

### 0 rows returned

The table is not monitored by Data Quality Monitoring. Tell the user the table has no monitor configured, and suggest they enable Data Quality Monitoring on this table for richer root cause analysis in the future. Then **proceed to Step 2** (lineage traversal) to investigate upstream issues via lineage.

### Rows returned — check `status` first

**If `status` is 'Healthy' (or equivalent) for the most recent row**: The table is currently healthy according to Data Quality Monitoring. Report this to the user and ask if they still want to investigate further. If they do, **proceed to Step 2**. If not, **STOP**.

### Rows returned, unhealthy — inspect `root_cause_analysis`

The `root_cause_analysis` column is a struct with the following schema:

```
root_cause_analysis: STRUCT<
  upstream_jobs: ARRAY<STRUCT<
    job_id: STRING,
    workspace_id: STRING,
    job_name: STRING,
    last_run_status: STRING,
    run_page_url: STRING
  >>
>
```

Look at `root_cause_analysis.upstream_jobs` from the most recent unhealthy row.

**If `upstream_jobs` is non-empty**:

1. Report the precomputed RCA summary to the user (health status, number of upstream jobs found, their `last_run_status`)
2. Extract the `job_id` from the first failing upstream job (where `last_run_status` indicates failure)
3. **Proceed to Step 3** (job investigation) with the extracted `job_id`

**If `upstream_jobs` is empty or null**:

1. Report the available RCA information to the user
2. **Proceed to Step 2** (lineage traversal) to find the upstream job or pipeline

**If `root_cause_analysis` is null for all rows**:

1. Report the latest scan results to the user:
   - `status` — health status of the table
   - `freshness` — freshness metric from the scan
   - `completeness` — completeness metric from the scan
   - `event_time` — when the scan ran
2. **Proceed to Step 2** (lineage traversal) to investigate upstream
````

### `lineage-traversal.md`

Webpack chunk `51183.<hash>.chunk.js`, module `351183`.

````markdown
# Step 2: Lineage Traversal via System Table

You did not find a job to investigate in Step 1. Use `system.access.table_lineage` to find upstream tables and the jobs or entities that write to the affected table.

**NOTE**: Lineage is NOT available via CLI. You must use this SQL system table.

## Query: Find direct upstream writers

**EXECUTE this SQL query:**

```%sql
SELECT
  source_table_full_name,
  entity_type,
  entity_id,
  workspace_id,
  MAX(event_date) AS latest_event_date
FROM system.access.table_lineage
WHERE target_table_full_name = '<catalog>.<schema>.<table>'
  AND event_date >= DATEADD(DAY, -7, CURRENT_DATE())
GROUP BY source_table_full_name, entity_type, entity_id, workspace_id
ORDER BY latest_event_date DESC
LIMIT 20;
```

## Handle Results

### PERMISSION_DENIED error

Tell the user:

> "Unable to access lineage data from `system.access.table_lineage`. You may need access to the lineage system table."

If you have no other leads (no job ID from Step 1, no other information to work with), **STOP** and suggest the user contact their workspace admin or the table owner. Otherwise, continue with whatever information you have from previous steps.

### 0 rows returned

No lineage found in the last 7 days. The table may be populated by an external process or lineage tracking may not be enabled.

Report this to the user:

> "No upstream lineage found for `<catalog>.<schema>.<table>` in the last 7 days. The table may be written by an external process outside of Databricks, or lineage tracking may not be enabled on this workspace."

**STOP** — suggest the user check who owns or manages the table.

### Rows returned

Examine the `entity_type` and `entity_id` columns:

- **`entity_type = 'JOB'`**: Extract `entity_id` as the job ID. Check `workspace_id` — if it differs from the current workspace, note that the job runs in a different workspace. **Proceed to Step 3** — read [job-investigation.md](job-investigation.md) with this job ID.

- **`entity_type = 'PIPELINE'`**: Report the pipeline ID to the user. Use the `runDatabricksCli` tool to run `pipelines get --pipeline-id <entity_id> --output JSON` for pipeline details. Report the pipeline name, state, and last update info.

- **`entity_type = 'NOTEBOOK'`**: Report the notebook entity ID to the user. The user may need to investigate the notebook manually.

- **Multiple upstream entities**: If multiple entities write to this table, list them all. Focus on the most recent writer that appears to have issues (failed jobs take priority).

## Walking Further Upstream (Optional)

If the direct upstream source is another table (not a job), **first check if that upstream table has data quality issues** by querying the Data Quality Monitoring system table for it:

```%sql
SELECT
  catalog_name,
  schema_name,
  table_name,
  status,
  root_cause_analysis,
  event_time
FROM system.data_quality_monitoring.table_results
WHERE catalog_name = '<upstream_catalog>'
  AND schema_name = '<upstream_schema>'
  AND table_name = '<upstream_table>'
ORDER BY event_time DESC
LIMIT 5;
```

- If the upstream table has monitoring data with a root cause or job info, use that to continue the investigation — read [job-investigation.md](job-investigation.md) if a job ID is found.
- If the upstream table has no monitoring data or the query fails, continue walking upstream via lineage.

To walk further upstream, re-run the lineage query with the source table as the new target:

```%sql
SELECT
  source_table_full_name,
  entity_type,
  entity_id,
  MAX(event_date) AS latest_event_date
FROM system.access.table_lineage
WHERE target_table_full_name = '<upstream_source_table>'
  AND event_date >= DATEADD(DAY, -7, CURRENT_DATE())
GROUP BY source_table_full_name, entity_type, entity_id
ORDER BY latest_event_date DESC
LIMIT 20;
```

**Limit traversal to 3 levels** to avoid excessive queries. Report the full lineage chain to the user as you walk upstream.
````

### `job-investigation.md`

Webpack chunk `62645.<hash>.chunk.js`, module `162645`.

````markdown
# Step 3: Job Investigation

You have a job ID from a previous step. Investigate the job's configuration, recent runs, error details, and source code.

**⚠️ IMPORTANT: Every CLI command in this step MUST be run using the `runDatabricksCli` tool.** Do not execute these commands via SQL queries, Python code, or any other method. The `runDatabricksCli` tool is the only correct way to run Databricks CLI commands.

**Always use `--output JSON` with CLI commands for structured parsing.**

## 3a: Get Job Configuration

Run via CLI:

```
jobs get <JOB_ID> --output JSON
```

Extract from the result:

- Job name and schedule/trigger configuration
- Task definitions (for multi-task jobs, note the task keys and dependencies)
- Notebook paths or script paths being executed
- Cluster configuration

## 3b: Get Recent Run History

Run via CLI:

```
jobs list-runs --job-id <JOB_ID> --output JSON
```

Analyze the runs:

- Focus on runs within the time window the table has been unhealthy (from Step 1's scan data). For example, if the table had a completeness issue over the last 24 hours, look at all runs in that period — the failing run may not be the most recent one.
- Identify if failures are **consistent** (all runs in the window fail) or **intermittent** (some pass, some fail)
- Note when failures started — was there a sudden change?
- Record the `run_id` of the failed run that aligns with the unhealthy time window for the next steps

## 3c: Get Failed Run Details

For the most recent failed run, get full details:

```
jobs get-run <FAILED_RUN_ID> --output JSON
```

Extract:

- `state.result_state` — FAILED, TIMEDOUT, CANCELED, etc.
- `state.state_message` — error summary
- `tasks[]` — for multi-task jobs, identify which specific task(s) failed

## 3d: Get Error Output

Get the detailed error message and stack trace from the failed run:

```
jobs get-run-output <FAILED_RUN_ID> --output JSON
```

Extract:

- `error` — the error message
- `error_trace` — full stack trace (if available)
- `notebook_output` — notebook output (if the task was a notebook)

**For multi-task jobs**: If `get-run-output` fails because the run has multiple tasks, get the failed task's run ID from step 3c (`tasks[].run_id` where `tasks[].state.result_state = 'FAILED'`), then run `get-run-output` on each failed task's `run_id` individually.

**Last resort only — use only if `get-run-output` fails on EVERY failed task's individual `run_id`**: If CLI commands have been exhausted, you may query:

```%sql
SELECT
  job_id,
  run_id,
  task_key,
  result_state,
  termination_code,
  period_start_time,
  period_end_time
FROM system.lakeflow.job_task_run_timeline
WHERE job_id = <JOB_ID>
  AND period_start_time >= DATEADD(DAY, -7, CURRENT_DATE())
  AND result_state = 'FAILED'
ORDER BY period_start_time DESC
LIMIT 20;
```

## 3e: Examine Executed Source Code

Export the code that was actually executed during the failed run:

```
jobs export-run <FAILED_RUN_ID> --views-to-export CODE --output JSON
```

This returns the **snapshot** of the notebook/code as it was at execution time, which may differ from the current version. Examine the code to:

- Understand what the job is doing
- Correlate errors from step 3d with specific code sections
- Look for recent changes that may have introduced the failure

**Fallback**: If `export-run` fails or is unavailable, use the notebook path from the job config (step 3a) to read the current source:

```
workspace export <NOTEBOOK_PATH>
```

Note that this shows the current version, which may have changed since the failed run.

## Permission Errors

If any CLI command returns a permission error:

- Report which command failed and what permission is likely needed (e.g., "Can View" on the job)
- Include the job owner information from step 3a (if available)
- Suggest the user contact the job owner for access
````
