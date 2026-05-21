# SQL Editor Agent

The Genie Code agent that runs on the **new SQL Editor** (`/editor/queries/<id>?contextId=sql-editor`). Persona: "query-based agentic coding assistant specialized in Databricks Spark and Databricks SQL". Captured live on `dbc-df321db9-486f.cloud.databricks.com` (2026-05-19).

This is the **Query Editor Agent** referenced from the LakeAgent's system prompt — distinct from the SQL Q&A behavior inside Genie Spaces.

## Identity

| Field | Value |
|---|---|
| `_llmproxy_fields.agent_name` | `sqlEditorAgent` |
| `_llmproxy_fields.client_id` | `editor-assistant-agent-mode` |
| `_llmproxy_fields.model_registration` | `claude-4-6-opus` |
| Chunk / factory | `31474.fe2e7e61e4.chunk.js`, factory variable `C.x` |
| Trigger URL | `/editor/queries/<queryId>?contextId=sql-editor&o=<orgId>` |

## Tools (26)

Full schemas in [`sql-editor-agent-llmproxy-body.json`](sql-editor-agent-llmproxy-body.json).

### SQL-Editor-specific (10)

| Tool | Intent |
|---|---|
| `runSqlQuery` | Run the current SQL query (single statement or all). |
| `queryGetResults` | Read results of a prior `runSqlQuery` invocation. |
| `createSqlEditorVisualization` | Attach a visualization to a SQL result. |
| `editAsset` | Edit the SQL text in the editor. |
| `addQueryParameter` / `deleteQueryParameter` / `modifyQueryParameterValue` | Manage SQL `$param` parameters. |
| `getQueryProfiles` | Read query profile for a prior execution. |
| `getSqlSample` | Quick row-sample of a SQL snippet. |
| `scheduleAsset` | Schedule the SQL query (single-task job). |
| `compute` | Inspect / change the attached compute (SQL Warehouse). |
| `renameTitle` | Rename the query. |

### Shared with the main LakeAgent toolkit (16)

`docSearch`, `readTable`, `tableSearch`, `querySearch`, `forYouAssets`, `searchAssets`, `manageTodoList`, `readSkillFile`, `readAssetById`, `fetchOmittedContent`, `createAsset`, `openAsset`, `executeCode`, `findReferencesTool`.

### Dropped vs. LakeAgent / Notebook

* No `runDatabricksCli`.
* No `recommendDataroom` / `askDataroom`.
* No `renderChart` (uses `createSqlEditorVisualization` instead).
* No `notebookRead` / `notebookGetCellsResults` / `runNotebookCells`.

## System prompt

Captured live: 389 wrapped lines.

### Headline rules

* **Statements not cells** — the prompt explicitly tells the agent to say "statements" instead of "cells" when communicating with users.
* **SQL-only** — only SQL is supported. No Python.
* **Auto-limit** — the SQL Editor adds `LIMIT 1000` to SELECTs by default. The agent is told to factor this in when the user asks about result size or performance.
* **Run mode** — the editor runs *either* a single statement (cursor-scoped) or all statements. Context indicates which mode is active.
* **Exploratory questions use `getSqlSample`** — if the user asks "what columns exist?", "how many nulls?", "show me the distribution of X?":
  * No existing query → create a new query and execute it.
  * Existing query → use `getSqlSample` (don't edit or execute the open query).
  * Explicit "modify the query" → edit and run.
* **No charting** — explicitly noted as not supported (i.e., no `renderChart`; visualizations use the dedicated `createSqlEditorVisualization` tool).
* **5 retries** on failed queries (vs. the typical 3 elsewhere).
* **Editing policy** — preserve user comments; never delete objects without permission.
* **One tool call per turn** (sequential, like the Notebook Agent).

## Sub-agents this factory ships

The SQL Editor lives in the same chunk (`31474`) as **six other agent registrations** the v3 scanner found:

| Agent | Role |
|---|---|
| `C.x` (this one) | SQL Editor main agent |
| `y` | Tables-search sub-agent (returns ranked tables for a question) |
| `g` | Dashboards-search sub-agent |
| `f` | Notebooks-search sub-agent |
| `m` | Search-results-analysis sub-agent (combines the three search results) |
| `v` | Text2SQL sub-agent (SQL generation, optimization, validation) |
| `P.lE` | (additional planning-style sub-agent) |
| `U._S` | Query-performance-optimization sub-agent |

These sub-agents fire their own `llmproxy` POSTs as dependencies of the main SQL Editor turn — the SQL Editor is by far the most orchestrated of the page agents, because it backs both ad-hoc query authoring and the "find relevant data" flow that the LakeAgent borrows.

## Handoff edges

Inbound:
* `openAsset({assetType:"query"})` from any other agent.
* `createAsset({assetType:"query"})` + `openAsset(...)` for a new query.

Outbound:
* `scheduleAsset` to schedule the query as a single-task job.
* `openAsset` back to a Dashboard / Notebook / Job with a `continueMessage`.

## Live capture summary

| Field | Value |
|---|---|
| URL | `/editor/queries/3473243573016643?contextId=sql-editor&o=<orgId>` |
| Body size | 84,206 bytes |
| Token usage | `prompt_tokens: 21,712`, `cache_creation_input_tokens: 8,754`, `cache_read_input_tokens: 11,993` |
