# Pipeline Editor Agent (SDP)

The Genie Code agent that runs on the **Lakeflow Spark Declarative Pipeline editor**. Persona: "Lakeflow pipeline editor" assistant — the agent that authors SDP code in Python and SQL.

Identified via static extraction; **not** live-captured in this pass (the workspace had no SDP pipelines to navigate to). The factory pattern, system prompt fragments, and tool wiring are documented from the chunk source.

## Identity

| Field | Value |
|---|---|
| Chunk / factory | `6683.a0828ee751.chunk.js`, factory variable `A.Tq` |
| Module exports | (no clean export name found; the agent class is the standard `Agent` module 91783) |
| Model | `tr` (resolves to the workspace default model, typically `claude-4-6-opus`) |
| `client_id` | `editor-assistant-agent-mode` (uniform across editor-mode agents) |
| Trigger URL | `/pipelines/<pipelineId>` (pipeline editor) |

## What's in the factory

* **builtInToolsDeps**: `apolloClient`, `getTableColumns`, `getTableMetadata`, `storeGetter: D.useGlobalChatStore.getState()`, `skillsets: n`, `defaultDisplayPath: eC??void 0`, `createAssetOptions: { folderPath: i, onAssetCreated }`.
* **`onAssetCreated` hook** — `D.useGlobalChatStore.getState().trackEditedAsset(e, t, {wasCreated:!0})` — the Pipeline Editor Agent informs the global chat store every time it creates a new pipeline file, so the agent can re-find it across turns.
* **Per-pipeline annotation** — the factory calls `(0,o.nd)()?.updateAnnotations({agent_run:{additional_info:{pipeline_id:eA}}})` when an `eA` (current pipeline id) is in scope. This tags every LLM call with the pipeline id for analytics.
* **Language-aware prompt** — the prompt template injects different guidance depending on whether the user's current pipeline file is SQL or Python:
  * If SQL → "Before writing Python, first read `skills/write-spark-declarative-pipelines/python-basics.md` via readSkillFile"
  * If Python → inline the full `python-basics.md` content (and equivalently for the reverse direction with `sql-basics.md`)
  * If unknown → "look up files before implementing in SQL or Python"
* **Cross-agent awareness** — the prompt includes a `CROSS_AGENT_AWARENESS_PROMPT` slot populated from `el.f.getCrossAgentAwareness()`, which lists the other agents the user could navigate to (Dashboard Authoring, Notebook, Jobs, etc.) for handoffs.

## System prompt (fragments from the chunk)

The full prompt is assembled at runtime by interpolating: `LANGUAGE_SUGGESTION`, `LANGUAGE_SPECIFIC_PROMPT`, `TODAY_DATE`, `CROSS_AGENT_AWARENESS_PROMPT`, `PIPELINE_PARAMETERS_GUIDANCE` (gated on a feature flag), and "DO NOT include these notebooks in the pipeline settings" boilerplate. Notable headlined sections found in the source:

* **You are on the Lakeflow pipeline editor page (pipeline ID: `${eA}`).**
* **Pipeline Dataset Creation** — decision tree for what kind of dataset (streaming table, materialized view, view) to create.
* **Schema Definition Guidelines** — "MANDATORY: Start with sc..." (full text in chunk at offset 31124).
* **Full Refresh Usage** — "Only run full refresh if there are no other options and after a failure in a regular run, or if the user explicitly requested it, because full refresh is very expensive and can lead to data loss."
* **End-to-end verification** — the agent must execute the pipeline update itself, not just propose changes.
* **Type-change handling** — "Do NOT change the type of downstream datasets — only update their name references and read method."

## Skills it loads via `readSkillFile`

Identified in the chunk:

* `skills/write-spark-declarative-pipelines/python-basics.md`
* `skills/write-spark-declarative-pipelines/sql-basics.md`
* `migrate-to-sdp` — top-level skill description in chunk: "Migrate an ETL project (DBT today; Snowflake / Informatica / etc. in the future) to a Lakeflow Spark Declarative Pipeline (SDP)."
* `writing-unit-tests` — "Provides guidance for writing Python unit tests using pytest, including PySpark dataf..." (gated on `databricks.fe.assistant.enableWritingUnitTestsSkillWithPipelineReferences`)

## Pipeline-specific tools (from the chunk)

The factory ships pipeline-only tools that are not in any other agent:

| Tool (module / name) | Intent |
|---|---|
| `readPipelineIssues` | Reads issues from the latest pipeline update. |
| (module 113680) | Pipeline file read/write. |
| (module 648815, 683164) | "Start the pipeline" / pipeline update lifecycle. |
| (module 363737) | Generic "thoughts" wrapper for chain-of-thought logging. |

Plus the standard Genie Code base tools.

## To capture live

To upgrade this reference with live data, navigate to a workspace with an existing SDP pipeline:

1. Find a pipeline via `/jobs` (filter for "Pipelines").
2. Open it; the URL will be `/pipelines/<pipelineId>?o=<orgId>`.
3. Click "New chat" in the Genie Code panel, send `hi`, capture the next `POST /ajax-api/2.0/conversation/llmproxy/` from DevTools.
4. The `_llmproxy_fields.agent_name` will be the canonical name (likely `pipelineEditorAgent` or similar).

## Handoff edges

Inbound:
* `openAsset({assetType:"pipeline-editor", assetId, continueMessage:"..."})` from the LakeAgent or other agents when the user wants to author or modify SDP code.
* `createAsset({assetType:"pipeline"})` + `openAsset(...)` for a new pipeline.

Outbound:
* `openAsset({assetType:"pipeline-monitoring"})` to hand off to the Pipeline Monitoring Agent for debugging an update run.
* `openAsset({assetType:"job"})` to schedule the pipeline as part of a job.
