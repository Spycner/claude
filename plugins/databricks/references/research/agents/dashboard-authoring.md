# Dashboard Authoring Agent

The Genie Code agent that runs on the **AI/BI Dashboard draft canvas**. Persona: "Genie Code Dashboard Assistant". Fully captured live on `dbc-df321db9-486f.cloud.databricks.com` (2026-05-19).

The 34 dashboard-specific tools below replace the editor-side toolkit that the main LakeAgent ships — the user hands off to this agent via `openAsset({assetType:"dashboard", ..., continueMessage:"..."})` from any other page, and the agent takes over with its own canvas tools.

## Identity

| Field | Value |
|---|---|
| `_llmproxy_fields.agent_name` | `dashboardAuthoringAgent` |
| `_llmproxy_fields.client_id` | `editor-assistant-agent-mode` |
| `_llmproxy_fields.model_registration` | `claude-4-6-opus` (Claude Opus 4.6 on Bedrock EU, `eu.anthropic.claude-opus-4-6-v1`) |
| `max_tokens` | 64000 |
| `thinking` | `{type: "adaptive"}` |
| `anthropic_beta` | `fine-grained-tool-streaming-2025-05-14`, `interleaved-thinking-2025-05-14` |
| Chunk / module | `40961.110e90c1b8.chunk.js`, module `229581` (exports `DashboardAuthoringAgentContext`) |
| Internal factory name | `sC` (a variable inside the factory module) |
| esComponent | `Es.DashboardsAI` |
| Trigger URL | `/sql/dashboardsv3/<dashboardId>?o=<orgId>&edit=true` (draft canvas) |

## What's different from the main LakeAgent

| Aspect | LakeAgent (main Genie Code) | Dashboard Authoring Agent |
|---|---|---|
| Tools | 18 | **34** (16 dashboard-specific + 18 base) |
| Code execution | `executeCode` (Python/SQL/Scala/R on attached compute) | `executeSql` only — SQL warehouse, not a notebook kernel (`sqlOnlyExecution: true` in `builtInToolsDeps`) |
| Chart rendering | `renderChart` (returns an inline chart spec) | None — the agent edits actual dashboard widgets via `editWidgetsV2` |
| Data-room tools | `recommendDataroom`, `askDataroom` | Dropped |
| Pipeline / CLI tools | `runDatabricksCli` | Dropped |
| Persona | Generalist editor assistant | Dashboard authoring specialist with metric-views decision tree |
| Skill registry | `chatAgent` skillset | `dashboardAgent` skillset (`aW, aV, aF, aO.i, [aU.H]?`) |

## Tools (34)

The full schemas live in [`dashboard-authoring-llmproxy-body.json`](dashboard-authoring-llmproxy-body.json) (`.tools` array, captured from a live `hi` POST). **Per-tool refs:** the 21 dashboard-specific tools have full refs under [`../tools/dashboard/`](../tools/dashboard/) (schema + static handler analysis from chunk 40961). The 13 shared tools live with the LakeAgent refs and carry an appended "Dashboard Authoring variant" diff section.

### Dashboard-specific (16)

| Tool | Intent |
|---|---|
| `renameDashboard` | Set the dashboard title. Agent is told to rename "New Dashboard …" as soon as it understands the data. |
| `updateDashboardTheme` | Set theme (colors / typography). |
| `publishDashboard` | Publish the draft. |
| `editPages` | Add / rename / delete dashboard pages (CANVAS or GLOBAL_FILTERS). |
| `editWidgetsV2` | Create / edit / move / delete widgets. `widgetRefName: pages/<pageId>/widgets/<widgetId>`. Carries both `RenderWidgetSpec` (visual) and `QuerySpec` (data). |
| `getVizTypeDefinition` | Look up the JSON schema for a visualization type before creating it. |
| `addMetricView` | Add a managed metric view (UC `METRIC VIEW`) to the dashboard as a dataset. |
| `createDatasetFromSQL` | Create a raw-SQL dataset. Used only when DLMVs don't fit (parameterized tables, raw extracts). |
| `updateDatasetFromSQL` | Modify a SQL dataset's source. |
| `createLocalMetricViewDataset` | **DEFAULT** dataset creator — Dashboard-Local Metric Views (DLMVs), isolated per-widget. |
| `updateLocalMetricViewDataset` | Modify a DLMV's config. |
| `editDatasetCalculations` | Edit derived calculations attached to a dataset. |
| `deleteDataset` | Drop a dataset from the dashboard. |
| `getDashboardConfig` | Re-read the live dashboard state when the snapshot in context may be stale. |
| `refreshData` | Refresh the data of one or more datasets. |
| `readDatasetData` | Read sample rows from a dashboard dataset. |
| `readDataset` | Read a dataset's SQL/schema. |
| `fetchWidgetRenderData` | Get widget rendered output (JSON + optional PNG) — used in mandatory post-mutation verification. |
| `getSqlSample` | Fast row sample of a SQL snippet (for validation / debugging). |
| `executeSql` | Exploratory diagnostic SQL on the dashboard's warehouse. |
| `editWorkspaceFile` | Edit a workspace file (e.g., a notebook used as a dataset source). |

(Counts above show how the agent treats them — 18 unique dashboard tools when you include the shared three `editWorkspaceFile`, `getSqlSample`, `executeSql` that other agents also have but with different bindings.)

### Shared with the main LakeAgent toolkit (18)

`readAssetById`, `tableSearch`, `docSearch`, `readTable`, `querySearch`, `forYouAssets`, `searchAssets`, `manageTodoList`, `readSkillFile`, `fetchOmittedContent`, `createAsset`, `openAsset`, `findReferencesTool`, plus the three from above. See [`../tools/README.md`](../tools/README.md) for the canonical schemas — the agent ships identical JSON for these.

## System prompt

Captured live: 50 KB, 174 markdown lines, 585 wrapped lines. Saved as the first message of [`dashboard-authoring-llmproxy-body.json`](dashboard-authoring-llmproxy-body.json) (`.messages[0].content[0].text`).

Section headings, in order:

```
# Primary Objective
## Core Principles
  (10 numbered principles)
### Dashboard Naming
### Multi-Page Dashboard Awareness
### Active View Context
### Global Filters Page
### Widget Creation Guidelines
### Widget verification (mandatory)
### Dataset and SQL Guidelines
### Dashboard Publishing
### Building Widgets: Where to Express Each Metric
### Execution Outputs
## Example Widget Creation Workflow
## Dashboard-Specific Response Guidelines
## Dashboard Terminology
### Metric Views (CRITICAL - Read First)
```

### Headline rules baked into the prompt

* **Dataset-first decision tree** — the agent walks four-step "Reuse → Modify → DLMV → SQL fallback" decision tree before every widget. DLMV is the default; raw SQL is the explicit exception.
* **Dashboard-Local Metric Views (DLMVs)** — the prompt treats DLMVs created via `createLocalMetricViewDataset` as the canonical building block. The factory wires `tN.CQ()` (metric-views-enabled flag) and `tN.tJ()` (a second metric-view variant flag) and the prompt switches its phrasing between tool names accordingly:
  * Flag ON → "use `editDataset` with `metricViewName`" + "`editDataset` with `metricViewConfig`"
  * Flag OFF → fallback names like `addMetricView`, `updateLocalMetricViewDataset`, `createDatasetFromSQL`
* **Multi-page awareness** — `pageType: 'CANVAS' | 'GLOBAL_FILTERS'`, `activeView: 'PAGE' | 'DATASET'`. The agent reads `selectedPageRefName` and `selectedDatasetRefName` from context to scope edits.
* **Global filters** — when the user says "filters that affect all pages", target the GLOBAL_FILTERS page. The prompt has a four-rule cascade for binding filters to datasets with incompatible schemas.
* **Widget hygiene** — 100 widgets per page max; widgets MUST NOT overlap (`[col, col+w) × [row, row+h)` must not intersect); always fill the 12 columns.
* **Mandatory post-mutation verification** — after every `editWidgetsV2`, the agent runs `fetchWidgetRenderData` (PNG + JSON) and on partial / empty results escalates to `readDatasetData` → `readDataset` / `getSqlSample` / `executeSql` / `readTable`.
* **Tool cool-downs** — explicit list of tools that must not be chained back-to-back (`refreshData` → no `readDatasetData`; `createDatasetFromSQL` → no `readDatasetData` immediately; `editWidgetsV2` → no `fetchWidgetRenderData` immediately).
* **"You are ALREADY on a dashboard page"** — the agent is told not to call `createAsset({assetType:"dashboard"})`, since that would create a *separate* dashboard. This is the key contract for the `openAsset` handoff from other agents.
* **No SQL in responses** — never echo SQL in the chat output; always execute via tools and summarize results.
* **SQL-only execution** — shared compute is a SQL warehouse, not a notebook kernel. Never write Python, never call notebook-style execution. This is enforced both at the tool level (`executeSql` instead of `executeCode`) and in the prompt.

## Skill registry

`skillsets: [{name: "dashboardAgent", skills: [aW, aV, aF, aO.i, ...(0,tN.CQ)()?[aU.H]:[]]}]` — the agent's per-skillset wiring (chunk 40961, module 229581). The live system prompt's `Skill Registry` section actually surfaces **7** skills: the 4 base + 1 conditional from this skillset, plus 2 more added by a higher-level skill-set assembler (`sql-functions`, `writing-sql`). Skill files are loaded the same way as for the main LakeAgent — via `readSkillFile` against named markdown sidecars in the SPA chunk.

| Reference | Skill name | Source | Notes |
|---|---|---|---|
| `aW` | `dashboard` | dashboard-only | Full ref: [`../skills/dashboard/dashboard.md`](../skills/dashboard/dashboard.md) |
| `aV` | `calculation` | dashboard-only | Full ref: [`../skills/dashboard/calculation.md`](../skills/dashboard/calculation.md). Maps to `editDatasetCalculations`. |
| `aF` | `gdrive-embed-image` | dashboard-only | Full ref: [`../skills/dashboard/gdrive-embed-image.md`](../skills/dashboard/gdrive-embed-image.md). Maps to `editWidgetsV2` markdown widgets. |
| `aO.i` | `data-sampling` | shared with LakeAgent | Shared ref: [`../skills/data/data-sampling.md`](../skills/data/data-sampling.md) |
| `aU.H` | `using-metric-views` | shared (conditional) | Gated on `tN.CQ()` (metric-views feature flag). Shared ref: [`../skills/sql/using-metric-views.md`](../skills/sql/using-metric-views.md) |
| (out-of-skillset) | `sql-functions` | shared | Added by `getInitialSkills` builder. Ref: [`../skills/sql/sql-functions.md`](../skills/sql/sql-functions.md) |
| (out-of-skillset) | `writing-sql` | shared | Added by `getInitialSkills` builder. Ref: [`../skills/sql/writing-sql.md`](../skills/sql/writing-sql.md) |

The agent's full skill-registry index lives at [`../skills/dashboard/README.md`](../skills/dashboard/README.md).

## Live capture summary

| Field | Value |
|---|---|
| Captured | 2026-05-19 |
| URL | `/sql/dashboardsv3/01f14f83b76c1d2e8a433a301c683747?o=<orgId>&edit=true` |
| Request body size | 141,618 bytes |
| `messages[0]` (system) | The 50 KB system prompt (with `cache_control: {type: "ephemeral"}`) |
| `messages[1]` (user) | `<context>...{"dashboardConfig":{"dashboardDisplayName":"LEGO Set Complexity & Theme Overview", "activeView":"PAGE","selectedWidgetRefNames":[],"selectedPageRefName":"pages/1629218c","pages":[...]}}` — the dashboard config snapshot is injected as a per-turn user message |
| `messages[2]` (user) | `"hi"` |
| `session_id` | the dashboard's underlying conversation/notebook id (`3473243573016640`) |
| `trace_id` / `call_id` | per-turn UUIDs |

## Handoff edges

Inbound — other agents send users here:
* `openAsset({assetType:"dashboard", assetId, continueMessage:"..."})` from the LakeAgent / Notebook / Jobs / Pipeline agents — the destination Dashboard Authoring Agent receives `continueMessage` and authors widgets.
* `createAsset({assetType:"dashboard", name})` + `openAsset(...)` is the two-step pattern when there's no existing dashboard.

Outbound — agent hands work back:
* `openAsset` to the originating asset (e.g., back to a Job or Notebook) with a `continueMessage` summarizing the widgets it created and any open items.
