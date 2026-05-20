# Traces — per-tool live network captures

One JSON file per tool, each containing the outbound HTTP traffic observed when Genie Code fires that tool in response to a triggering prompt. Captured 2026-05-19 on workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` + `XMLHttpRequest` in the SPA (via chrome-devtools-mcp `initScript`) and dumping the ring buffer between the user submit and a 10-second period of network silence.

## Index

| Tool | Trigger prompt | Specific endpoint observed |
|---|---|---|
| [recommendDataroom](recommendDataroom.json) | what genie spaces do I have on this workspace? | `POST /ajax-api/2.0/data-rooms/tools/recommend-spaces` |
| [askDataroom](askDataroom.json) | use a genie space to find the largest table in samples.nyctaxi | _could not trigger — no Genie Spaces exist on this workspace_ |
| [runDatabricksCli](runDatabricksCli.json) | run \`databricks current-user me\` for me | `POST /notebook/<thread-id>/command/<cmd-id>` (executed inside the thread notebook) |
| [renderChart](renderChart.json) | make a bar chart of any 5 rows from samples.nyctaxi.trips showing fare_amount | `POST /notebook/<thread-id>/command/<cmd-id>` (executes Python/SQL in the thread notebook) |
| [docSearch](docSearch.json) | find the official Databricks docs page about Lakeflow Spark Declarative Pipelines | `POST /graphql/DocsSearch__deduped` |
| [readTable](readTable.json) | show me the schema of samples.nyctaxi.trips | `GET /ajax-api/2.1/unity-catalog/tables/<full.name>` |
| [tableSearch](tableSearch.json) | find Unity Catalog tables about taxi trips | `POST /graphql/UnifiedUCMetadataSearchForAssistant` + `POST /graphql/VectorSearchForTableSearch` |
| [querySearch](querySearch.json) | find saved SQL queries about lego | `POST /graphql/UnifiedAssetSearch` + `POST /graphql/VectorSearchForCodeSearch` |
| [forYouAssets](forYouAssets.json) | show me my recents and favorites | `POST /graphql/AssistantListFavoriteAssets` + `POST /graphql/AssistantListSuggestedAssets` |
| [searchAssets](searchAssets.json) | search the workspace for all notebooks in /Users/pgoellner@deloitte.de | `GET /ajax-api/2.0/folders/list` (walked recursively) |
| [manageTodoList](manageTodoList.json) | Plan the following multi-step task before executing it... | no bespoke endpoint — state mutates the thread notebook's `assistant_thread_metadata` blob |
| [readSkillFile](readSkillFile.json) | write me a SQL query that counts trips... use the writing-sql skill | no network call — skill bodies are bundled inside the SPA's webpack chunks |
| [readAssetById](readAssetById.json) | show me cell 1 of notebook id 94074149243400 | `GET /notebook/<id>` + `GET /notebook/<id>/command` |
| [fetchOmittedContent](fetchOmittedContent.json) | list every catalog... then tell me about the 12th one | _could not trigger — the prior tool result was not long enough to be compacted_ |
| [createAsset](createAsset.json) | create a new notebook called genie-trace-scratch in /Users/pgoellner@deloitte.de/Drafts | `POST /ajax-api/2.0/workspace/import` |
| [openAsset](openAsset.json) | find the notebook called cleanup_bike_training_artifacts and open it | `POST /graphql/UnifiedAssetSearch` + `POST /notebook/<asset-id>` |
| [executeCode](executeCode.json) | run this SQL for me and show me the result: SELECT 1 + 1 AS result | `POST /notebook/<thread-id>/command/<cmd-id>` |
| [findReferencesTool](findReferencesTool.json) | what depends on or references samples.nyctaxi.trips in this workspace? | `GET /ajax-api/2.0/lineage-tracking/table-lineage` |

## Common-to-every-turn endpoints (not in the table above)

Every Genie Code turn fires the following infrastructure calls regardless of which tool runs. They are filtered out of the per-tool index but visible in each trace file.

- `POST /ajax-api/2.0/conversation/llmproxy/` — the SSE LLM turn (OpenAI-compatible chat completions). Multiple per turn (one per tool-use round-trip).
- `POST /ajax-api/2.0/conversation/proxy/chat/completions` — a smaller non-streaming completions call, fired once per turn (likely the `followups-agent` that generates the 3 follow-up suggestions; see [../overview/followups.md](../overview/followups.md) §4).
- `POST /notebook` then `POST /notebook/<id>` — every conversation is backed by a fresh "thread notebook" created at chat start; per-turn metadata writes flow here.
- `PATCH /ajax-api/2.0/notebooks/<thread-id>?update_mask=assistant_thread_metadata.*` — persistence for run state, tool approvals, and the todo list.
- Memory probes: `GET /ajax-api/2.0/workspace-files/{Users/<user>/,}{AGENTS.md,CLAUDE.md,.assistant_instructions.md,.assistant_workspace_instructions.md,.assistant/.github_mcp_config.json,.assistant/.mcp_servers.json}` — the agent looks for memory files at turn start. All 404 here (no memory configured).
- `POST /graphql/UnifiedSearchGlobalAssistant`, `POST /graphql/CustomCodeAgentsEndpoints` — agent registry / runtime configuration.

## Schema per file

```jsonc
{
  "tool": "<toolName>",
  "prompt": "<user prompt>",
  "captured_at": "<ISO-8601>",
  "requests": [
    {
      "transport": "fetch" | "xhr",
      "url": "...",
      "method": "...",
      "request_headers": {...},  // x-csrf-token / authorization / cookie redacted
      "request_body": "...",
      "started_at": "<ISO-8601>",
      "status": 200,
      "response_headers": {...},
      "response_body": "...",    // SSE concatenated for llmproxy; raw text otherwise; truncated at 300kB (1.5MB for SSE)
      "completed_at": "<ISO-8601>"
    }
  ]
}
```
