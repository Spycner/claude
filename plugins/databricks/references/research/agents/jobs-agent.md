# Jobs Agent

The Genie Code agent that runs on the **Jobs & Pipelines page** (list / details / runs). Persona: "Databricks Jobs assistant specialized in helping users manage and operate Databricks Jobs". Captured live on `dbc-df321db9-486f.cloud.databricks.com` (2026-05-19).

## Identity

| Field | Value |
|---|---|
| `_llmproxy_fields.agent_name` | `jobsAgent` |
| `_llmproxy_fields.client_id` | `editor-assistant-agent-mode` |
| `_llmproxy_fields.model_registration` | `claude-4-6-opus` |
| Chunk / factory | `28513.74b0ddd74a.chunk.js`, factory variable `ea` |
| Trigger URLs | `/jobs`, `/jobs/<id>`, `/jobs/runs`, `/jobs/<id>/runs/<runId>` |

## Tools (15)

The smallest toolkit of any page agent — the Jobs Agent is deliberately CLI-driven for almost everything via `runDatabricksCli`. Full schemas in [`jobs-agent-llmproxy-body.json`](jobs-agent-llmproxy-body.json).

```
runDatabricksCli, docSearch, readTable, tableSearch, querySearch, forYouAssets, searchAssets,
manageTodoList, readSkillFile, readAssetById, fetchOmittedContent, createAsset, openAsset,
executeCode, findReferencesTool
```

### Notable absences

* **No jobs-specific tools** — no `runJob`, no `getJobRun`, no `updateJobSettings`. All of those are achieved via `runDatabricksCli` with the documented Databricks CLI commands.
* **No `scheduleAsset`** — that tool lives on the Notebook Agent.

## System prompt

Captured live: 290 wrapped lines.

### Headline rules

* **Skill-first dispatch** — the prompt routes the user's intent to one of two skill files via `readSkillFile`, then follows the skill:
  * Diagnosis requests → `job-run-diagnosis` skill
  * Configuration requests → `edit-job-settings` skill
* **CLI is the engine** — `runDatabricksCli` with `--output JSON` is the canonical way to read/write jobs:
  * `jobs get-run <run_id> --output JSON`
  * `jobs get <job_id> --output JSON`
  * `jobs run-now <job_id> --no-wait --output JSON` (always `--no-wait` so the agent gets the new `run_id` immediately)
* **All IDs are positional** — the prompt explicitly forbids `--job-id` / `--run-id` flags.
* **No `jobs get` before update** — go straight to the update command (skip the pre-fetch).
* **Run trigger → openAsset → job-run page** — after a successful `run-now`, the agent calls `openAsset({assetType:"job-run", assetId:"<job_id>/<run_id>"})` to navigate the user to the run details page.
* **UI updates automatically** — never tell the user to refresh.
* **Timestamp sanity check** — Unix epoch ms in API responses must convert to a date strictly before `today` (Tue May 19 2026 captured); else present the raw value.
* **Guardrail-denied commands are terminal** — do not retry after a denial; explain to the user.

## Handoff edges

Inbound:
* `openAsset({assetType:"job"})` or `openAsset({assetType:"job-run"})` from any other agent when the user wants to manage or diagnose jobs.

Outbound:
* `openAsset({assetType:"notebook", continueMessage:"<full coding task spec>. When done navigate back to job <jobId>..."})` — the Jobs Agent's primary handoff is to the Notebook Agent for code authoring, because **the Jobs page has no notebook editing tools**.
* `openAsset({assetType:"job-run"})` after `run-now` (see above).

## Live capture summary

| Field | Value |
|---|---|
| URL | `/jobs?o=<orgId>` (no specific job selected) |
| Body size | 50,590 bytes (smallest of the four agents captured) |
| Token usage | `prompt_tokens: 13,566`, `cache_read_input_tokens: 7,591`, `cache_creation_input_tokens: 5,557` — system prompt cached with ephemeral TTL |
