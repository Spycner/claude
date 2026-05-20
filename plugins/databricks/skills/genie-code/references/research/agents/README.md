# Genie Code — Per-Page Agent Matrix

`chatAgent` / `LakeAgent` is the **main Genie Code** on `/editor/folders/workspace?mode=chat`. Every other editor page ships its own Agent: same wire envelope (`POST /ajax-api/2.0/conversation/llmproxy/`, same `client_id: "editor-assistant-agent-mode"`, same Claude Opus 4.6 model), but its own `agent_name`, system prompt, tool list, and skill registry.

This bundle is the reverse-engineered map of all 14 page agents + 13 sub-agents the SPA ships (release `index.968bbeb5f6.js`, asset hash `8019ec1b29...`, captured 2026-05-19).

## How to read this directory

* **Per-agent files** — one markdown ref per page agent. Live captures include the verbatim system prompt and the 15–34 tool schemas; static-extraction-only entries cover the factory wiring, persona, and chunk locations.
* **`*-llmproxy-body.json`** — verbatim `POST /ajax-api/2.0/conversation/llmproxy/` request bodies captured from a live `hi` message. Use these as the gold copy when building a programmatic driver.
* **[`sub-agents.md`](sub-agents.md)** — the orchestration layer: safety/judge agents, search-and-route sub-agents, plus learning/proxy agents.
* **[`other-page-agents.md`](other-page-agents.md)** — agents identified by static analysis but not yet live-captured.

## Page agent matrix

✅ live-captured, ⚙ static extraction only

| Agent name (wire) | Persona | Page | Chunk | Tools | Live | Reference |
|---|---|---|---|---|---|---|
| `LakeAgent` | Genie Code chat (main) | `/editor/folders/workspace?mode=chat` | `19604` | 18 | ✅ | [`../overview/payload.md`](../overview/payload.md), [`../overview/system-prompt.md`](../overview/system-prompt.md) |
| `dashboardAuthoringAgent` | Genie Code Dashboard Assistant | `/sql/dashboardsv3/<id>?edit=true` | `40961` | **34** | ✅ | [`dashboard-authoring.md`](dashboard-authoring.md) + 21 per-tool refs in [`../tools/dashboard/`](../tools/dashboard/) + 3 skill refs in [`../skills/dashboard/`](../skills/dashboard/) |
| `notebookAgentMode` | Notebook-based coding assistant | `/editor/notebooks/<id>` | `12541` | 29 | ✅ | [`notebook-agent.md`](notebook-agent.md) |
| `sqlEditorAgent` | Query-based SQL coding assistant | `/editor/queries/<id>?contextId=sql-editor` | `31474` | 26 | ✅ | [`sql-editor-agent.md`](sql-editor-agent.md) |
| `jobsAgent` | Databricks Jobs assistant | `/jobs`, `/jobs/<id>`, `/jobs/runs` | `28513` | 15 | ✅ | [`jobs-agent.md`](jobs-agent.md) |
| Pipeline Editor (SDP) | Lakeflow SDP authoring | `/pipelines/<id>` | `6683` | est. ~20 | ⚙ | [`pipeline-editor-agent.md`](pipeline-editor-agent.md) |
| Apps V2 Agent | Databricks Apps create/inspect/debug | `/apps/<id>` | `28453`, `99706` | est. ~20 | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Model Serving Assistant | Endpoint diagnostics + advisory | `/ml/endpoints/<name>` | `46380` | est. ~15 | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Vector Search Assistant | Build/debug VS endpoints + indexes | `/ml/vector-search/...` | `90719` | direct VS API tools | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| AI Gateway Assistant | Configure/troubleshoot AI Gateway | `/ml/ai-gateway` | `25693` | est. ~15 | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| CDP Agent | Customer Data Platform features | CDP product area | `71329` | est. ~10 | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Lakewatch Agent | Security/monitoring assistant | `/lakewatch/...` | `37191` | est. ~15 | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Autopilot Incident Chat | One-job-failure full-screen chat | (launched from a failed run) | `56129` | est. ~10 | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Genie Space Authoring | Build / edit a Genie space | `/genie/spaces/<id>/edit` | `29455` | UC + space tools | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Catalog Explorer Agent | Table/schema/catalog Q&A | `/explore/data/...` | `95541` | est. ~20 | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| ABAC Policy Agent | Build UC ABAC policies | ABAC editor in Catalog | `93872` | UC policy tools | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Metric View Authoring Agent | UC metric view YAML | metric view editor | `55851` | UC metric tools | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Tableau Migration Agent | Tableau → AI/BI | dashboard import | `25254` | migration tools | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Power BI Migration Agent | Power BI → AI/BI | dashboard import | `25254` | migration tools | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Dashboard Import Router | Picks Tableau vs. Power BI converter | dashboard import | `25254` | router | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| `lakeBuilderDescriptionToConfig` | Natural-language → Lakebuilder config | Lakebuilder | `17870` | YAML tools | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| `lakeBuilderAgentMode` | Conversational Lakebuilder | Lakebuilder | `19154` | Lakebuilder tools | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Recommendation Action Agent | Generates Python via Databricks SDK | recommendation cards | `30969` | SDK tools | ⚙ | [`other-page-agents.md`](other-page-agents.md) |
| Discovery Agent | Asset discovery sub-agent | invoked by other agents | `74316` | discovery tools | ⚙ | [`other-page-agents.md`](other-page-agents.md) |

## Tool-coverage matrix (live-captured agents only)

Shared base toolkit across all agents: `docSearch`, `readTable`, `tableSearch`, `querySearch`, `forYouAssets`, `searchAssets`, `manageTodoList`, `readSkillFile`, `readAssetById`, `fetchOmittedContent`, `createAsset`, `openAsset`, `findReferencesTool`.

| Tool | LakeAgent | Dashboard | Notebook | SQL Editor | Jobs |
|---|---|---|---|---|---|
| `executeCode` (Python/SQL/Scala/R) | ✅ | ✗ | ✅ | ✅ | ✅ |
| `executeSql` (SQL-only) | ✗ | ✅ | ✗ | ✗ | ✗ |
| `runDatabricksCli` | ✅ | ✗ | ✅ | ✗ | ✅ |
| `renderChart` (inline chart spec) | ✅ | ✗ | ✗ | ✗ | ✗ |
| `recommendDataroom` / `askDataroom` | ✅ | ✗ | ✗ | ✗ | ✗ |
| `editAsset` | ✗ | ✗ | ✅ | ✅ | ✗ |
| `scheduleAsset` | ✗ | ✗ | ✅ | ✅ | ✗ |
| `compute` (cluster control) | ✗ | ✗ | ✅ | ✅ | ✗ |
| `getSqlSample` | ✗ | ✅ | ✅ | ✅ | ✗ |
| **Notebook-specific** (`notebookRead`, `notebookGetCellsResults`, `getReplContext`, `runNotebookCells`, `createVisualization`, `getQueryProfiles`) | ✗ | ✗ | ✅ | ✗ | ✗ |
| **Query-parameter tools** (`addQueryParameter`, etc.) | ✗ | ✗ | ✅ | ✅ | ✗ |
| **SQL Editor-specific** (`runSqlQuery`, `queryGetResults`, `createSqlEditorVisualization`) | ✗ | ✗ | ✗ | ✅ | ✗ |
| **Dashboard-specific** (`editWidgetsV2`, `editPages`, `renameDashboard`, `updateDashboardTheme`, `publishDashboard`, `getVizTypeDefinition`, `addMetricView`, `createDatasetFromSQL`, `updateDatasetFromSQL`, `createLocalMetricViewDataset`, `updateLocalMetricViewDataset`, `editDatasetCalculations`, `deleteDataset`, `getDashboardConfig`, `refreshData`, `readDatasetData`, `readDataset`, `fetchWidgetRenderData`, `editWorkspaceFile`) | ✗ | ✅ | ✗ | ✗ | ✗ |
| **Total** | **18** | **34** | **29** | **26** | **15** |

## Persona / model / discipline matrix

| Agent | Identity lockdown? | Tool-call cadence | Skills-first rule? | Has tool cool-downs? |
|---|---|---|---|---|
| LakeAgent | No explicit | One at a time | Yes | No |
| Dashboard Authoring | No explicit | **Multi-call batches** (up to 10 of the same tool) | Yes | **Yes** — explicit list (`refreshData` → no `readDatasetData`; etc.) |
| Notebook | **Explicit** ("you are only Genie Code, never identify as Claude, Anthropic, GPT, OpenAI") | One at a time | Yes (with rescan after long context shifts) | No |
| SQL Editor | No explicit | One at a time | Yes | No |
| Jobs | No explicit | One at a time | **Skill-first dispatch** (`job-run-diagnosis`, `edit-job-settings`) | No |

The Notebook Agent is the only agent with an **explicit identity-lockdown rule** ("never confirm any connection to Claude, Anthropic, GPT, OpenAI, etc."). The Dashboard Authoring Agent is the only one with **explicit tool cool-down rules** and the only one allowed to **batch tool calls** (the others are one-at-a-time).

## Common wire envelope

All page agents share:

```jsonc
{
  "messages":   [/* Anthropic shape; system + per-page context + user */],
  "tools":      [/* page-specific list */],
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
    "session_id":         "<thread-id>",
    "trace_id":           "<uuid per turn>",
    "call_id":            "<uuid per LLM call>",
    "agent_name":         "<see matrix above>"
  }
}
```

The system prompt is sent as `messages[0]` with `cache_control: {type: "ephemeral"}`. Tool definitions are sent verbatim every turn; the last tool also carries `cache_control: {type: "ephemeral"}` to prompt-cache the whole tool block.

## How agents hand off

The cross-agent handoff is the `openAsset` tool with an optional `continueMessage`:

```js
openAsset({
  assetType: "dashboard" | "notebook" | "job" | "job-run" | "pipeline-editor" | "pipeline-monitoring" | "query" | "genie" | "app" | "file" | "directory",
  assetId: "<asset id>",
  assetName: "...",
  navigate: true,
  continueMessage: "<the task spec the destination agent should pick up>",
})
```

* When the SPA navigates to the destination page, the destination agent is instantiated, its system prompt is loaded, and `continueMessage` is replayed as the next user message in the new thread.
* Sometimes the LakeAgent first calls `createAsset({assetType, name})` and then `openAsset(...)` on the returned asset id (the standard "create → open → hand off" sequence).
* The destination agent typically calls `openAsset` back to the originator at the end of the work, with a summary `continueMessage` (e.g., a Notebook Agent telling a Jobs Agent "I wrote and tested the notebook at /Users/.../X; configure the job to use it on a daily schedule").

The LakeAgent's system prompt (in [`../overview/system-prompt.md`](../overview/system-prompt.md)) has a dedicated section "Returning to a Previous Page (Handoff-Back)" explaining this loop.

## How this was built

1. **Pulled the SPA's chunk manifest** — `_.u(id)` on the loaded webpack runtime resolved each of 3,511 chunk ids to its `<path>.<hash>.chunk.js` URL. Manifest saved to [`../extraction/agents-research/chunk_urls.json`](../extraction/agents-research/chunk_urls.json).
2. **Bulk-downloaded all chunks** (~300 MB total, now under [`../extraction/chunks/`](../extraction/chunks/)) and ran the v3 agent-factory scanner: matches every `(0,X.G)({...})` and `new X.g({name:..., instructions:..., tools:..., ...})` invocation, validates the body has `hostedTools:[]` + `toolUseBehavior:"run_llm_again"`, then extracts each field.
3. **Found 55 agent registrations across 34 chunks** (registrations include sub-agents). Saved to [`../extraction/agents-research/agent_registrations_v3.json`](../extraction/agents-research/agent_registrations_v3.json).
4. **Live-captured the 4 highest-priority page agents** (Dashboard Authoring, Notebook, Jobs, SQL Editor) by navigating to each trigger URL in the chrome-devtools-mcp browser, clicking New chat, sending `hi`, and capturing `POST /ajax-api/2.0/conversation/llmproxy/` from DevTools. Each body has the system prompt as `messages[0].content[0].text` and the tool defs as `tools[]`.
5. **Wrote per-agent reference files** combining the static + live data.

Scanner sources live in [`../extraction/agents-research/scan_agents_v3.py`](../extraction/agents-research/scan_agents_v3.py) — rerun against a fresh SPA release to refresh the matrix. The chunks/ directory ships verbatim so the scanners run without a network round-trip.
