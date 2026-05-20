# Genie Code tool: `openAsset`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [payload.md](../../overview/payload.md) for the full request envelope and [findings.md](../../overview/findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **16 of 18**.

## Description

> Open or get the URL for any Databricks asset. Supports notebooks, dashboards, queries, files, jobs, job runs, pipelines, pipeline editors, folders, tables, experiments, models, endpoints, alerts, genie spaces, and designer files (Visual ETL). By default, navigates to the asset. Set navigate=false to just get the URL.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "assetType": {
      "type": "string",
      "enum": [
        "notebook",
        "dashboard",
        "query",
        "file",
        "job",
        "job-run",
        "pipeline-monitoring",
        "pipeline-editor",
        "folder",
        "table",
        "experiment",
        "model",
        "endpoint",
        "alert",
        "genie",
        "app",
        "designerFile"
      ],
      "description": "The type of asset to open."
    },
    "assetId": {
      "type": "string",
      "description": "The unique identifier for the asset. For dashboards, use the `id` field from search results (32 hex chars, e.g. \"01ee875dcf1e1aa59e1b2f5a7e60b955\"), NOT the treeNodeId. For notebooks/files/jobs use numeric ID, for queries use UUID, for pipelines use pipeline ID, for tables use fully qualified name. For job-run, prefer \"jobId/runId\" format (e.g. \"123/456\"); plain \"runId\" is also accepted."
    },
    "assetName": {
      "type": "string",
      "description": "Display name or identifier (defaults to ''). Required for tables (catalog.schema.table), models, and endpoints."
    },
    "navigate": {
      "type": "boolean",
      "default": true,
      "description": "Whether to navigate to the asset URL. Defaults to true."
    },
    "continueMessage": {
      "type": "string",
      "description": "Message to send to the assistant on the destination page after navigation. Leave empty ('') to navigate without triggering a follow-up agent run. Provide a non-empty message when the user's request requires work in the destination context (e.g., 'run the cells' after opening a notebook). If the task depends on content from a previous asset, include its assetType and assetId so the destination agent can retrieve it with readAssetById."
    }
  },
  "required": [
    "assetType",
    "assetId",
    "assetName",
    "navigate",
    "continueMessage"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `assetType` (string) — The type of asset to open.
* `assetId` (string) — The unique identifier for the asset. For dashboards, use the `id` field from search results (32 hex chars, e.g. "01ee875dcf1e1aa59e1b2f5a7e60b955"), NOT the treeNodeId. For notebooks/files/jobs use numeric ID, for queries use UUID, for pipelines use pipeline ID, for tables use fully qualified name. For job-run, prefer "jobId/runId" format (e.g. "123/456"); plain "runId" is also accepted.
* `assetName` (string) — Display name or identifier (defaults to ''). Required for tables (catalog.schema.table), models, and endpoints.
* `navigate` (boolean) — Whether to navigate to the asset URL. Defaults to true.
* `continueMessage` (string) — Message to send to the assistant on the destination page after navigation. Leave empty ('') to navigate without triggering a follow-up agent run. Provide a non-empty message when the user's request requires work in the destination context (e.g., 'run the cells' after opening a notebook). If the task depends on content from a previous asset, include its assetType and assetId so the destination agent can retrieve it with readAssetById.

## All properties

### `assetType` **(required)**

Type: `string`. enum: 'notebook', 'dashboard', 'query', 'file', 'job', 'job-run', 'pipeline-monitoring', 'pipeline-editor', 'folder', 'table', 'experiment', 'model', 'endpoint', 'alert', 'genie', 'app', 'designerFile'

> The type of asset to open.

### `assetId` **(required)**

Type: `string`.

> The unique identifier for the asset. For dashboards, use the `id` field from search results (32 hex chars, e.g. "01ee875dcf1e1aa59e1b2f5a7e60b955"), NOT the treeNodeId. For notebooks/files/jobs use numeric ID, for queries use UUID, for pipelines use pipeline ID, for tables use fully qualified name. For job-run, prefer "jobId/runId" format (e.g. "123/456"); plain "runId" is also accepted.

### `assetName` **(required)**

Type: `string`.

> Display name or identifier (defaults to ''). Required for tables (catalog.schema.table), models, and endpoints.

### `navigate` **(required)**

Type: `boolean`.

> Whether to navigate to the asset URL. Defaults to true.

### `continueMessage` **(required)**

Type: `string`.

> Message to send to the assistant on the destination page after navigation. Leave empty ('') to navigate without triggering a follow-up agent run. Provide a non-empty message when the user's request requires work in the destination context (e.g., 'run the cells' after opening a notebook). If the task depends on content from a previous asset, include its assetType and assetId so the destination agent can retrieve it with readAssetById.

## Handler notes

Extracted from webpack module `226909` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({assetType:t,assetId:r,assetName:s,navigate:a=!0,continueMessage:n},l)
```

**Execute body** (verbatim, minified — webpack module `226909`, 2389 bytes):

```javascript
y(function*(){try{if((0,h.ts)((0,h._h)(t))){let e=v(t);return{success:!1,assetType:t,assetId:r,assetName:s??void 0,assetUrl:"",assetTypeDescription:e,navigated:!1,threadPreserved:!1,continueMessageSet:!1,message:`${e} is not enabled for this workspace, so it cannot be opened.`}}let g=r;"folder"===t&&(0,p.P9)(r)&&(g=yield(0,p.vy)(r));let w=yield(({assetType:e,assetId:t,assetName:r,apolloClient:s})=>y(function*(){switch(e){case"notebook":return(0,o.TQ)(t);case"dashboard":return`/sql/dashboardsv3/${t}`;case"query":return(0,o.kC)({id:t});case"file":return(0,o.ZZ)({id:t});case"job":return`/jobs/${t}`;case"job-run":{let[e,r]=t.split("/");return r?`/jobs/${e}/runs/${r}`:`/jobs/runs/${e}`}case"pipeline-monitoring":return d.hk.getPipelineDetailsRoute(t);case"pipeline-editor":return(0,f.W)("databricks.fe.ingestion.crossAgentAwareness.openAsset",!1)&&s&&(yield y(function*(){try{let{data:e}=yield s.query({query:b,variables:{input:{pipelineId:t}}});return e?.deltapipelinesGet?.status?.spec?.pipelineType??void 0}catch{return}})())==="MANAGED_INGESTION"?(0,u.oK)().setup({pipelineId:t}):`/editor/pipelines/${t}`;case"folder":return(0,o.ZZ)({id:t,isDirectory:!0});case"table":return`/explore/data/${(r||t).replace(/\./g,"/")}`;case"experiment":return`/ml/experiments/${t}`;case"model":return`/ml/models/${r||t}`;case"endpoint":return`/ml/endpoints/${r||t}`;case"alert":return`/sql/alerts-v2/${t}`;case"genie":return`/genie/rooms/${t}`;case"app":return`/apps/${r||t}`;case"designerFile":return(0,o.eV)({id:t});default:throw Error(`Unsupported asset type: ${e}`)}})())({assetType:t,assetId:g,assetName:s??void 0,apolloClient:e?.apolloClient}),k=v(t),_=l.agentIds.sessionId??e?.getThreadId?.(),I=w;if(a&&_){let e=new URLSearchParams;e.set("threadId",_);let t=w.includes("?")?"&":"?";I=`${w}${t}${e.toString()}`}if(a){n&&(0,i.uT)({type:i.bS.PAGE_TRIGGERED_CHAT_EVENT,payload:{message:n,messageTags:[],hideUserMessage:!0}});let e=(0,m.HK)({assetType:t,baseUrl:I,assetName:s??void 0});e.sameTab?setTimeout(()=>(0,c.oo)(e.url)):setTimeout(()=>window.open(I,"_blank","noopener,noreferrer"))}return{success:!0,assetType:t,assetId:g,assetName:s??void 0,assetUrl:I,assetTypeDescription:k,navigated:a,threadPrese
…[truncated]
```

_(body truncated at 2,200 chars; full 2389-byte source is in `../../extraction/data/tool-handlers.json` under `openAsset.body` and the captured factory in `../../extraction/data/tool-factories.json`.)_

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.
- Feature flags read during execution:
    - `databricks.fe.ingestion.crossAgentAwareness.openAsset`

**Helpers called from the body** (each is a different webpack module):

- `(0, h.ts)(...)` (module `480427` — asset-type permission helpers (`A`, `_h`, `ts`) — gates createAsset/openAsset on workspace ACLs)
- `(0, h._h)(...)` (module `480427` — asset-type permission helpers (`A`, `_h`, `ts`) — gates createAsset/openAsset on workspace ACLs)
- `(0, p.P9)(...)` (module `111620`)
- `(0, p.vy)(...)` (module `111620`)
- `(0, o.TQ)(...)` (module `485669` — asset URL / navigation helpers (e.g. asset id → page URL))
- `(0, o.kC)(...)` (module `485669` — asset URL / navigation helpers (e.g. asset id → page URL))
- `(0, o.ZZ)(...)` (module `485669` — asset URL / navigation helpers (e.g. asset id → page URL))
- `(0, f.W)(...)` (module `441535` — feature-flag reader — `W(flag, default)` reads workspace feature flags)
- `(0, u.oK)(...)` (module `735617`)
- `(0, o.eV)(...)` (module `485669` — asset URL / navigation helpers (e.g. asset id → page URL))
- `(0, i.uT)(...)` (module `416400`)
- `(0, m.HK)(...)` (module `955212`)
- `(0, c.oo)(...)` (module `488655`)

**What this proves vs. what it doesn't**:

- ⚠️  The handler delegates to one or more helper modules whose internals were not traced in this pass. The actual network endpoint (or absence of one — some tools manipulate local Redux state only) is therefore **not statically verified** from this source. To confirm what each helper does on the wire, see the network-trace follow-up in [followups.md](../../overview/followups.md) §1.

## Verified network behaviour

Captured 2026-05-19 by patching `window.fetch` + `XMLHttpRequest` on the SPA and triggering the prompt below. Full request log (with bodies) is in [../../traces/openAsset.json](../../traces/openAsset.json).

**Trigger prompt:** `find the notebook called cleanup_bike_training_artifacts and open it`

**Endpoints fired (excluding agent-housekeeping common to every turn):**

- `POST /graphql/UnifiedAssetSearch`
- `POST /notebook/<asset-id>`

Two-step flow: `UnifiedAssetSearch` resolves the asset name to an asset id, then the SPA POSTs to `/notebook/<id>` to load it into the editor pane. The tool also dispatches an MFE event (`MFE_LOAD_CHAT_THREAD`) to swap the agent context to the per-page agent — same hand-off described in `[overview/followups.md](../../overview/followups.md) §3`.

<!-- DASHBOARD_VARIANT_BEGIN -->

## Dashboard Authoring variant

The Dashboard Authoring Agent (`dashboardAuthoringAgent`) ships this same tool. The wire schema below was captured 2026-05-19 from the `hi` POST against `/sql/dashboardsv3/<id>?edit=true` — see [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md). Position in the dashboard agent's tools array: **32 of 34**.

Description: **identical** to the LakeAgent variant.

**Parameter diff** (LakeAgent → Dashboard Authoring):

- Property set: **identical** key list.
- `required` array: **identical**.

**Handler binding in the dashboard chunk:**

Same identity as the LakeAgent variant — these 13 tools are imported into `DashboardAuthoringAgentContext` from the shared `builtInToolsDeps` registry, not redefined per agent. The factory module IDs noted in this ref's Handler-notes section above apply unchanged to the dashboard agent.

<!-- DASHBOARD_VARIANT_END -->
