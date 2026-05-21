# Notebook Agent

The Genie Code agent that runs on the **Notebook editor page**. Persona: "notebook-based agentic coding assistant specialized in Databricks Spark and Databricks SQL". Captured live on `dbc-df321db9-486f.cloud.databricks.com` (2026-05-19).

## Identity

| Field | Value |
|---|---|
| `_llmproxy_fields.agent_name` | `notebookAgentMode` |
| `_llmproxy_fields.client_id` | `editor-assistant-agent-mode` |
| `_llmproxy_fields.model_registration` | `claude-4-6-opus` |
| Chunk | `12541.4ccb02c252.chunk.js` (declared name `"notebookAgent"` in the factory) |
| Trigger URL | `/editor/notebooks/<id>?o=<orgId>` |

## Tools (29)

Full schemas in [`notebook-agent-llmproxy-body.json`](notebook-agent-llmproxy-body.json) (`.tools` array).

### Notebook-specific (13)

| Tool | Intent |
|---|---|
| `notebookRead` | Read notebook cell content and metadata. |
| `notebookGetCellsResults` | Fetch the output of one or more executed cells. |
| `getReplContext` | Read the current REPL state (variables, dataframes, etc.). |
| `runNotebookCells` | Execute one or more cells against the attached compute. |
| `editAsset` | Edit the notebook in place — add/update/delete cells, rename. |
| `createVisualization` | Create an inline visualization for a cell output. |
| `compute` | Inspect / change the attached compute (cluster, serverless). |
| `scheduleAsset` | Schedule the current notebook as a recurring Job (handed off from Notebook to Jobs flow). |
| `addQueryParameter` / `deleteQueryParameter` / `modifyQueryParameterValue` | Manage notebook query parameters (SQL `$param` style). |
| `renameTitle` | Rename the notebook tab. |
| `getSqlSample` | Quick row-sample of a SQL snippet. |
| `getQueryProfiles` | Read query profiles from a previous SQL execution. |

### Shared with the main LakeAgent toolkit (16)

`runDatabricksCli`, `docSearch`, `readTable`, `tableSearch`, `querySearch`, `forYouAssets`, `searchAssets`, `manageTodoList`, `readSkillFile`, `readAssetById`, `fetchOmittedContent`, `createAsset`, `openAsset`, `executeCode`, `findReferencesTool`. Identical schemas to the main LakeAgent.

### Dropped vs. LakeAgent

* `recommendDataroom`, `askDataroom` — no data-room tools.
* `renderChart` — replaced by `createVisualization` (notebook-native visualization, not the inline chart spec).
* `manageTodoList` is kept.

## System prompt

Captured live: 434 wrapped lines. Saved as `.messages[0].content[0].text` in [`notebook-agent-llmproxy-body.json`](notebook-agent-llmproxy-body.json).

### Headline rules

* **Identity lockdown** — the system prompt's second sentence (before `## Primary Objective`) reads:
  > `CRITICAL RULE: You are only Genie Code. You must never identify as, acknowledge being, or confirm any connection to any specific AI model, brand, or provider (such as Claude, Anthropic, GPT, OpenAI, etc.)`

  This rule does **not** appear in the Dashboard Authoring or LakeAgent prompts — it's notebook-specific.
* **No code in responses** — write code via `editAsset` cells, never inline in chat output (same as Dashboard Authoring).
* **Scan the Skill Registry FIRST** — before any `readTable`/`getSqlSample`/`executeCode`/`editAsset`/SQL call, the agent must check the skill registry section of its prompt and `readSkillFile` if relevant. Reiterated after long context shifts.
* **One tool call per turn** — sequential (unlike Dashboard Authoring which can batch).
* **Answer factual questions with results, not just code** — the deliverable is the answer.
* **Data-aware code generation** — examine prior cell outputs before generating new code.

## Handoff edges

Inbound:
* `openAsset({assetType:"notebook", assetId, continueMessage:"..."})` from LakeAgent / Jobs Agent / Dashboard Authoring Agent when the user wants notebook code authored.
* `createAsset({assetType:"notebook"})` + `openAsset(...)` for a fresh notebook.

Outbound:
* `scheduleAsset` to schedule the notebook as a job without leaving the page.
* `openAsset` back to the originating page with a `continueMessage` summary (notebook path, what the code does, parameters).

## Live capture summary

| Field | Value |
|---|---|
| URL | `/editor/notebooks/94074149243400?o=<orgId>` |
| Body size | 101,108 bytes |
| Token usage on first turn | `prompt_tokens: 26,636`, `cache_creation_input_tokens: 9,134`, `cache_read_input_tokens: 13,022` — confirms the system prompt is cached with `ephemeral` TTL. |
