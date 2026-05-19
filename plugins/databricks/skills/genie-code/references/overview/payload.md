# Genie Code — `llmproxy` Payload Reference

This file documents the request body Genie Code sends to `POST /ajax-api/2.0/conversation/llmproxy/`, captured from a real Genie Code chat session on `dbc-df321db9-486f.cloud.databricks.com`. Use it as the blueprint for a programmatic driver.

The system prompt itself (~29 KB, 366 lines of markdown) is in a separate file: [system-prompt.md](system-prompt.md).

## Endpoint

```
POST https://<workspace-host>/ajax-api/2.0/conversation/llmproxy/
```

Headers:
```
accept: text/event-stream
content-type: application/json
x-csrf-token: <csrf-from-spa>
x-databricks-org-id: <workspace-org-id>
x-databricks-self: true
Cookie: DBAUTH=<session>; cf_clearance=<...>; ...
```

Auth: DBAUTH cookie + CSRF header (not an OAuth bearer). See [findings.md](findings.md) for the auth bootstrap flow.

## Request body schema

```jsonc
{
  "messages":   [ /* Anthropic Messages API shape */ ],
  "tools":      [ /* OpenAI-shaped tool definitions (see below) */ ],
  "stream":     true,
  "max_tokens": 64000,
  "thinking":   { "type": "adaptive" },
  "anthropic_beta": [
    "fine-grained-tool-streaming-2025-05-14",
    "interleaved-thinking-2025-05-14"
  ],
  "_llmproxy_fields": {
    "model_registration": "claude-4-6-opus",
    "client_id":          "editor-assistant-agent-mode",
    "session_id":         "<workspace-thread-id, e.g. \"324464905642538\">",
    "trace_id":           "<uuid per turn>",
    "call_id":            "<uuid per LLM call>",
    "agent_name":         "LakeAgent"
  }
}
```

Notes on each field:

* **`messages`** — standard Anthropic shape with `role: system | user | assistant`. The system message is the long Genie Code identity prompt in [system-prompt.md](system-prompt.md). It sits in a single `system` message as `content: [{type: "text", text: <prompt>, cache_control: {type: "ephemeral"}}]` — note the prompt-cache hint, which is how Databricks avoids retransmitting the 29 KB system prompt every turn.
* **`thinking: {type: "adaptive"}`** — Anthropic's extended-thinking feature; the model decides when to think.
* **`anthropic_beta`** — fine-grained tool streaming + interleaved thinking. Drop either if your client can't parse the corresponding event types.
* **`_llmproxy_fields.model_registration`** — Databricks' registry name. Verified values: `claude-4-6-opus` (Opus 4.6, mapped to `eu.anthropic.claude-opus-4-6-v1` on Bedrock EU). Switching to `claude-4-7-opus` likely works.
* **`_llmproxy_fields.client_id`** — `editor-assistant-agent-mode` is the Genie Code client. Other Databricks Assistant flows (editor-chat, suggest-fix, partnerhub) use different client ids and hit `/ajax-api/2.0/conversation/assistant/*` endpoints — those are legacy and not what Genie Code uses.
* **`_llmproxy_fields.session_id`** — opaque string the client picks. Use a stable id per conversation, generate a new one for a "new chat".
* **`_llmproxy_fields.trace_id`, `call_id`** — client-generated UUIDs, used purely for tracing.
* **`_llmproxy_fields.agent_name`** — `LakeAgent` is Genie Code's internal name.

## Response

OpenAI-compatible Server-Sent Events. Each event is `data: {chat.completion.chunk JSON}` with the streaming delta. Stream ends with `data: [DONE]`.

Verified shape from a `say hello world` call:
```
data: {"model":"eu.anthropic.claude-opus-4-6-v1","choices":[{"delta":{"role":"assistant","content":"Hello,"},"index":0,"finish_reason":null}],"usage":{...},"object":"chat.completion.chunk","id":"msg_bdrk_...","created":...}
data: {"model":"...","choices":[{"delta":{"role":"assistant","content":" World!"},...}],...}
data: {"model":"...","choices":[{"delta":{"role":"assistant","content":""},"index":0,"finish_reason":"stop"}],...}
data: [DONE]
```

Tool calls arrive as `delta.tool_calls[*]` chunks; thinking arrives as separate events (shape depends on which `anthropic_beta` flags are set).

## The 18 tools (function names + intent)

These are sent verbatim on every turn — they aren't server-registered. Each row links to a dedicated reference file with the verbatim JSON Schema captured from a live `llmproxy` POST body (`../extraction/data/llmproxy-body.json`).

| # | Tool | Intent | Key params |
|---|---|---|---|
| 1 | [`recommendDataroom`](../tools/discovery/recommendDataroom.md) | Recommend relevant Genie spaces for a natural-language question | `query` (3–5 keywords) |
| 2 | [`askDataroom`](../tools/execution/askDataroom.md) | Ask a question against a specific Genie space (SQL is auto-generated) | `question`, `dataroomId` |
| 3 | [`runDatabricksCli`](../tools/execution/runDatabricksCli.md) | Run a Databricks CLI subcommand on the attached compute | `summary`, `command` |
| 4 | [`renderChart`](../tools/execution/renderChart.md) | Render inline charts on the chat page (deep schema: 20+ chart types, filter widgets, conditional formatting) | `datasets[]`, `chartSpecifications[]` |
| 5 | [`docSearch`](../tools/discovery/docSearch.md) | Search the public Databricks documentation | `searchQuery` |
| 6 | [`readTable`](../tools/assets/readTable.md) | Get column types, sample queries, joins, optional Delta/Spark properties for a UC table | `catalog`, `schema`, `name`, `extraDetails` |
| 7 | [`tableSearch`](../tools/discovery/tableSearch.md) | Search tables/datasets by keywords or natural language; falls back to `readTable` for known FQNs | `keywords[]`, `searchQuery`, `dataCatalog`, `dataSchema` |
| 8 | [`querySearch`](../tools/discovery/querySearch.md) | Find saved queries by intent + keywords, scoped to specific tables | `sentence`, `keywords`, `tablesToFilterOn[]` |
| 9 | [`forYouAssets`](../tools/discovery/forYouAssets.md) | Pull personalized / favorited / recent assets for the current user | `numResults`, `includeFavorites`, `includeSuggestedAssets`, `includePopularAssets`, `assetTypes[]`, `page`, `interface`, `keywords` |
| 10 | [`searchAssets`](../tools/discovery/searchAssets.md) | Unified search across notebooks, dashboards, pipelines, jobs, datarooms, files, alerts, apps, endpoints, models, folders | `searchQuery`, `assetTypes[]`, `numResultsPerAssetType`, `sortBy`, `ownerOnly`, `pageToken` |
| 11 | [`manageTodoList`](../tools/agent-internals/manageTodoList.md) | Read / replace the agent's structured todo list | `operation` (read|write), `todoList[]` |
| 12 | [`readSkillFile`](../tools/agent-internals/readSkillFile.md) | Load a domain Skill markdown by path (`skills/<name>/SKILL.md`) | `filePath` |
| 13 | [`readAssetById`](../tools/assets/readAssetById.md) | Open a notebook / pipeline / dashboard / query / file / directory / job / MLflow asset by id and range | `assetType`, `assetId`, `startLine`, `endLine` |
| 14 | [`fetchOmittedContent`](../tools/agent-internals/fetchOmittedContent.md) | Drill into a prior tool result's omitted `__more` blocks via a jq-style path | `toolCallId`, `path` |
| 15 | [`createAsset`](../tools/assets/createAsset.md) | Create an empty notebook / dashboard / file / job / query / pipeline / directory / genie / app / designerFile | `assetType`, `name`, `tableIdentifiers[]` (genie only) |
| 16 | [`openAsset`](../tools/assets/openAsset.md) | Navigate to an asset, or return its URL; supports a `continueMessage` handoff to the destination page | `assetType`, `assetId`, `assetName`, `navigate`, `continueMessage` |
| 17 | [`executeCode`](../tools/execution/executeCode.md) | Run a short snippet on the attached compute (`python`, `sh`, `r`, `scala`, `sql`) | `summary`, `code`, `language`, `timeoutMinutes` |
| 18 | [`findReferencesTool`](../tools/agent-internals/findReferencesTool.md) | Get UC lineage (upstream/downstream tables, dependent notebooks/jobs/dashboards) for a table or column | `tableName`, `columnName`, `includeEntityLineage` |

`cache_control: {type: "ephemeral"}` is attached to the LAST tool definition (`findReferencesTool`) — this signals Anthropic prompt caching for the whole tool block, again to save on retransmission cost.

## Skill files referenced from the system prompt

The captured system prompt's **Skill Registry** section lists 4 modular skills, but the SPA actually ships 11 in total — the others are hidden behind feature flags or attached to different agent modes (`chatAgent` for read-only chat, `lakeAgent` for the agent-mode flow that uses `runDatabricksCli`). Skills are **not** workspace files: `GET /ajax-api/2.0/workspace/list?path=/Users/<email>/.assistant/skills` returns 404, and no `*/assistant/skills` path exists in the Workspace API. Instead, each skill (and each of its sidecar markdown files) is bundled into its own webpack chunk and exported as a raw string `module.exports`. The SkillRegistry definition lives in chunk `19604.5ae31ee5cc.chunk.js`; the SPA loads a file via `r.e(<chunkId>).then(r.t.bind(r, <moduleId>, 17))` when `readSkillFile` fires with a path like `skills/<name>/<filename>`.

Full content for all 11 skills (66 sidecar markdown files in total) has been extracted into per-skill reference files. The 4 in the captured chatAgent Skill Registry:

* [`../skills/ops/databricks-cli-public.md`](../skills/ops/databricks-cli-public.md) — CLI command patterns for jobs/pipelines/clusters/secrets/Apps/Lakebase/etc. (10 files)
* [`../skills/data/data-sampling.md`](../skills/data/data-sampling.md) — How to query/sample tables without silently truncating (4 files)
* [`../skills/sql/sql-functions.md`](../skills/sql/sql-functions.md) — SQL AI functions (`ai_forecast`, `ai_parse_document`, ...) (18 files including legacy variants)
* [`../skills/sql/writing-sql.md`](../skills/sql/writing-sql.md) — Databricks SQL patterns (AI functions, geospatial, recursive CTEs, governance, Liquid Clustering, ...) (19 files)

The 7 additional skills (mostly feature-flag gated, but their content ships in every release):

* [`../skills/ops/migration-orchestrator.md`](../skills/ops/migration-orchestrator.md) — SQL migration orchestration; drives the migrationConverterSubagent. Gated on `databricks.fe.assistant.enableMigrationSkills`. (1 file)
* [`../skills/ops/diagnose-error.md`](../skills/ops/diagnose-error.md) — `/fix` / "Diagnose Error" workflow with python/sql/environment debugging guides. Gated on `databricks.fe.editor.enableDiagnoseErrorSkill`. (4 files)
* [`../skills/sql/query-performance.md`](../skills/sql/query-performance.md) — Performance audit playbook across compute, table type, data layout, and ingestion. (1 file)
* [`../skills/ops/external-access.md`](../skills/ops/external-access.md) — UC table eligibility for open-API external access. Gated on `databricks.fe.assistant.enableExternalAccessSkill`. (2 files)
* [`../skills/sql/using-metric-views.md`](../skills/sql/using-metric-views.md) — UC metric views: creation, MEASURE() querying, materialization. (3 files)
* [`../skills/data/asset-discovery.md`](../skills/data/asset-discovery.md) — Find existing dashboards/notebooks/queries before building from scratch; has a separate subagent-mode SKILL.md gated on `databricks.fe.assistant.enableAssetDiscoverySubagents`. (5 files)
* [`../skills/data/data-quality-rca.md`](../skills/data/data-quality-rca.md) — Root cause analysis for unhealthy tables; precomputed RCA → lineage traversal → job investigation. Gated on `databricks.fe.assistant.enableDataQualityRcaSkill`. (4 files)

Each per-skill file carries the registry record, the file manifest with chunk/module ids, any feature-flag gating, and the verbatim markdown of every sidecar. Chunk hashes change per release; re-derive them from the live asset manifest before re-extracting.

Plus three free-floating workspace files Genie Code reads at session start (and tolerates 404 on):

* `.assistant_instructions.md` — user-level long-term memory (Genie Code is told to write here)
* `.assistant_workspace_instructions.md` — workspace-level shared instructions
* `.github_mcp_config.json` — MCP server configuration for GitHub integration

On the inspected workspace only `/Users/pgoellner@deloitte.de/.assistant/.mcp_servers.json` exists; the two `.assistant_*instructions.md` files genuinely 404.

## Driver skeleton

Pseudocode-level Python for a single agent turn. Plug in your own DBAUTH source (manual copy + auto-refresh per recommended path P1 in [findings.md](findings.md)).

```python
import json, uuid, requests

WORKSPACE = "https://dbc-df321db9-486f.cloud.databricks.com"
DBAUTH    = "dbws.1...."          # paste from browser, refresh in background
CSRF      = "8a47e74c-..."        # paste from browser
ORG_ID    = "7474644141110056"

SESSION_ID = "<stable per conversation>"
SYSTEM_PROMPT = open("system-prompt.md").read()

# Tool definitions — copy verbatim from the captured cURL
TOOLS = [
    {"type": "function", "function": {"name": "tableSearch", "description": "...", "parameters": {...}}},
    # ... 18 in total
]

def call_llmproxy(messages, tools=TOOLS):
    body = {
        "messages": [
            {"role": "system",
             "content": [{"type": "text", "text": SYSTEM_PROMPT,
                          "cache_control": {"type": "ephemeral"}}]},
            *messages,
        ],
        "tools": tools,
        "stream": True,
        "max_tokens": 64000,
        "thinking": {"type": "adaptive"},
        "anthropic_beta": [
            "fine-grained-tool-streaming-2025-05-14",
            "interleaved-thinking-2025-05-14",
        ],
        "_llmproxy_fields": {
            "model_registration": "claude-4-6-opus",
            "client_id":          "editor-assistant-agent-mode",
            "session_id":         SESSION_ID,
            "trace_id":           str(uuid.uuid4()),
            "call_id":            str(uuid.uuid4()),
            "agent_name":         "LakeAgent",
        },
    }
    resp = requests.post(
        f"{WORKSPACE}/ajax-api/2.0/conversation/llmproxy/",
        json=body,
        headers={
            "accept":              "text/event-stream",
            "content-type":        "application/json",
            "x-csrf-token":        CSRF,
            "x-databricks-org-id": ORG_ID,
            "x-databricks-self":   "true",
            "cookie":              f"DBAUTH={DBAUTH}",
        },
        stream=True,
    )
    for line in resp.iter_lines():
        if not line or not line.startswith(b"data: "):
            continue
        payload = line[6:]
        if payload == b"[DONE]":
            return
        yield json.loads(payload)

# Agent loop sketch
def agent_loop(user_message):
    messages = [{"role": "user", "content": user_message}]
    while True:
        assistant_text = ""
        tool_calls    = []
        for chunk in call_llmproxy(messages):
            delta = chunk["choices"][0].get("delta", {})
            assistant_text += delta.get("content", "") or ""
            for tc in delta.get("tool_calls", []) or []:
                # merge streaming tool-call deltas
                ...
            if chunk["choices"][0].get("finish_reason") == "stop":
                return assistant_text
            if chunk["choices"][0].get("finish_reason") == "tool_calls":
                break
        # Execute tool_calls against Databricks REST APIs, then append results
        messages.append({"role": "assistant", "content": None, "tool_calls": tool_calls})
        for tc in tool_calls:
            result = execute_tool(tc)   # YOUR implementation per tool name
            messages.append({"role": "tool", "tool_call_id": tc["id"], "content": result})

# Session refresh — keep DBAUTH alive between turns
def refresh_session():
    requests.post(f"{WORKSPACE}/auth/session/refresh",
                  headers={"x-csrf-token": CSRF,
                           "cookie":       f"DBAUTH={DBAUTH}"})
```

## Where to copy the full tool schemas from

The HAR exported from a fresh Genie Code session captures `/ajax-api/2.0/conversation/llmproxy/` POSTs with the full tool array in the request body. Alternatively, replay an existing chat in the SPA with DevTools' Network tab open and use **Copy → Copy as cURL (bash)** on the `llmproxy/` row — that's the cURL used to seed this file.
