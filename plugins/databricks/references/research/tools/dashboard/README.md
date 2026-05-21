# Dashboard Authoring Agent — Tool Index

The 21 tools shipped only by the **Dashboard Authoring Agent** (`dashboardAuthoringAgent`) — i.e., the dashboard agent's 34 tools minus the 13 it shares with the LakeAgent. The shared 13 live in [`../assets/`](../assets/), [`../discovery/`](../discovery/), [`../agent-internals/`](../agent-internals/) and carry a "Dashboard Authoring variant" diff section appended at the bottom.

Each ref includes: the verbatim wire schema (description + JSON Schema parameters from the captured llmproxy body), the static handler analysis lifted from chunk `40961.110e90c1b8.chunk.js` (the `DashboardAuthoringAgentContext` module), and a placeholder for live wire-trace capture. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent identity.

## Canvas & layout (5)

Tools that mutate the dashboard surface itself — title, theme, pages, widgets, publish state.

| Tool | Intent |
|---|---|
| [`renameDashboard`](renameDashboard.md) | Update the dashboard title. |
| [`updateDashboardTheme`](updateDashboardTheme.md) | Set color tokens and typography. |
| [`publishDashboard`](publishDashboard.md) | Publish the draft to a shareable URL (Run-as-owner or Run-as-viewer). |
| [`editPages`](editPages.md) | Create / rename / delete CANVAS and GLOBAL_FILTERS pages. |
| [`editWidgetsV2`](editWidgetsV2.md) | The deep schema. Create / edit / move / delete widgets — carries `RenderWidgetSpec` (visual) + `QuerySpec` (data). |

## Widget metadata (1)

| Tool | Intent |
|---|---|
| [`getVizTypeDefinition`](getVizTypeDefinition.md) | Look up the JSON Schema for a visualization type before populating `editWidgetsV2`. |

## Datasets — metric views (4)

The default dataset family — DLMVs (Dashboard-Local Metric Views).

| Tool | Intent |
|---|---|
| [`createLocalMetricViewDataset`](createLocalMetricViewDataset.md) | **Default** dataset creator. Per-widget metric view with YAML config. |
| [`updateLocalMetricViewDataset`](updateLocalMetricViewDataset.md) | Edit a DLMV's YAML. |
| [`addMetricView`](addMetricView.md) | Register an existing UC metric view to the dashboard. |
| [`editDatasetCalculations`](editDatasetCalculations.md) | Add / remove derived calculations on a dataset (measure-typed or dimension-typed expressions). |

## Datasets — SQL (3)

The fallback dataset family — used when DLMVs can't satisfy the request (parameterized tables, raw extracts).

| Tool | Intent |
|---|---|
| [`createDatasetFromSQL`](createDatasetFromSQL.md) | Create a raw-SQL dataset. |
| [`updateDatasetFromSQL`](updateDatasetFromSQL.md) | Edit a SQL dataset's source. |
| [`deleteDataset`](deleteDataset.md) | Drop a dataset (used during automatic cleanup). |

## Verification & introspection (5)

Read-only tools the agent uses to validate widget mutations and re-read live state.

| Tool | Intent |
|---|---|
| [`getDashboardConfig`](getDashboardConfig.md) | Re-read live dashboard state when the context snapshot is suspected stale. |
| [`refreshData`](refreshData.md) | Re-execute one or more datasets. |
| [`readDatasetData`](readDatasetData.md) | Sample rows from a dataset's most recent results. |
| [`readDataset`](readDataset.md) | Read a dataset's SQL / metric-view config + inferred schema. |
| [`fetchWidgetRenderData`](fetchWidgetRenderData.md) | Render a widget; return JSON + optional PNG. **Mandatory after every `editWidgetsV2`** for verification. |

## Diagnostic SQL (3)

| Tool | Intent |
|---|---|
| [`getSqlSample`](getSqlSample.md) | Quick row sample for a SQL snippet, table, or file path. |
| [`executeSql`](executeSql.md) | Run exploratory / diagnostic SQL on the warehouse. |
| [`editWorkspaceFile`](editWorkspaceFile.md) | Search-and-replace edits on a workspace file used as a dataset source. |

## Shared with the LakeAgent (13)

These 13 tools are imported into `DashboardAuthoringAgentContext` from the same builtin registry the LakeAgent uses, with byte-identical schemas. Refs live with the LakeAgent versions; each carries an appended "Dashboard Authoring variant" section confirming identity and giving the position in the dashboard agent's 34-tool array:

- Discovery: [`docSearch`](../discovery/docSearch.md), [`tableSearch`](../discovery/tableSearch.md), [`querySearch`](../discovery/querySearch.md), [`searchAssets`](../discovery/searchAssets.md), [`forYouAssets`](../discovery/forYouAssets.md)
- Assets: [`readAssetById`](../assets/readAssetById.md), [`readTable`](../assets/readTable.md), [`createAsset`](../assets/createAsset.md), [`openAsset`](../assets/openAsset.md)
- Agent internals: [`manageTodoList`](../agent-internals/manageTodoList.md), [`readSkillFile`](../agent-internals/readSkillFile.md), [`fetchOmittedContent`](../agent-internals/fetchOmittedContent.md), [`findReferencesTool`](../agent-internals/findReferencesTool.md)

## Static-evidence completeness

The schema layer is **100% verified** — every parameter and description was lifted verbatim from the live `messages` array of a real `hi` POST (captured 2026-05-19). The handler layer is **statically verified** for 20 of 21 tools (chunk 40961) and 1 of 21 by import (chunk 19604 for `executeSql`). The **live wire layer** (network endpoints fired by each handler when triggered in the browser) is intentionally deferred — see [`../../overview/followups.md`](../../overview/followups.md) §7 for the capture recipe.
