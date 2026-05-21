# Genie Code tool: `readAssetById`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [payload.md](../../overview/payload.md) for the full request envelope and [findings.md](../../overview/findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **13 of 18**.

## Description

> Read detailed information about a workspace asset by its type and ID. Supports pipelines, notebooks, queries, files, directories, dashboards, Visual data preps (designerFile), jobs, MLflow evaluation runs, datasets, judges, and labeling schemas. Use this to read assets found via searchAssets or referenced in conversations. For files, you can optionally specify startLine and endLine to read a specific range of lines.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "assetType": {
      "type": "string",
      "enum": [
        "pipeline",
        "notebook",
        "query",
        "file",
        "directory",
        "dashboard",
        "designerFile",
        "job",
        "mlflowEvaluationRun",
        "mlflowDataset",
        "mlflowJudge",
        "mlflowLabelingSchema"
      ],
      "description": "The type of asset to read. Use \"pipeline\" for Lakeflow Spark Declarative Pipelines (formerly DLT Pipelines), \"notebook\" for notebooks, \"query\" for saved SQL queries, \"file\" for workspace files, \"directory\" for folders/directories, \"dashboard\" for Lakeview dashboards, \"designerFile\" for Visual data preps, \"job\" for Databricks Jobs."
    },
    "assetId": {
      "type": "string",
      "description": "The unique identifier for the asset. Format varies by type: pipeline UUID for pipelines, numeric ID for notebooks/queries/files/jobs. **For directories: numeric ID or a workspace path (e.g. /Workspace/Users/user@databricks.com/my-directory).** For dashboards: use the dashboard UUID to read the published version, or the treeNodeId (numeric) to read the draft version (which also provides the file path needed for editing). The response includes a \"source\" field indicating which version was returned."
    },
    "startLine": {
      "type": [
        "number",
        "null"
      ],
      "description": "For files only: the line number to start reading from (1-indexed, inclusive). Pass null to read from the beginning."
    },
    "endLine": {
      "type": [
        "number",
        "null"
      ],
      "description": "For files only: the line number to end reading at (1-indexed, inclusive). Pass null to read to the end."
    }
  },
  "required": [
    "assetType",
    "assetId",
    "startLine",
    "endLine"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `assetType` (string) — The type of asset to read. Use "pipeline" for Lakeflow Spark Declarative Pipelines (formerly DLT Pipelines), "notebook" for notebooks, "query" for saved SQL queries, "file" for workspace files, "directory" for folders/directories, "dashboard" for Lakeview dashboards, "designerFile" for Visual data preps, "job" for Databricks Jobs.
* `assetId` (string) — The unique identifier for the asset. Format varies by type: pipeline UUID for pipelines, numeric ID for notebooks/queries/files/jobs. **For directories: numeric ID or a workspace path (e.g. /Workspace/Users/user@databricks.com/my-directory).** For dashboards: use the dashboard UUID to read the published version, or the treeNodeId (numeric) to read the draft version (which also provides the file path needed for editing). The response includes a "source" field indicating which version was returned.
* `startLine` (['number', 'null']) — For files only: the line number to start reading from (1-indexed, inclusive). Pass null to read from the beginning.
* `endLine` (['number', 'null']) — For files only: the line number to end reading at (1-indexed, inclusive). Pass null to read to the end.

## All properties

### `assetType` **(required)**

Type: `string`. enum: 'pipeline', 'notebook', 'query', 'file', 'directory', 'dashboard', 'designerFile', 'job', 'mlflowEvaluationRun', 'mlflowDataset', 'mlflowJudge', 'mlflowLabelingSchema'

> The type of asset to read. Use "pipeline" for Lakeflow Spark Declarative Pipelines (formerly DLT Pipelines), "notebook" for notebooks, "query" for saved SQL queries, "file" for workspace files, "directory" for folders/directories, "dashboard" for Lakeview dashboards, "designerFile" for Visual data preps, "job" for Databricks Jobs.

### `assetId` **(required)**

Type: `string`.

> The unique identifier for the asset. Format varies by type: pipeline UUID for pipelines, numeric ID for notebooks/queries/files/jobs. **For directories: numeric ID or a workspace path (e.g. /Workspace/Users/user@databricks.com/my-directory).** For dashboards: use the dashboard UUID to read the published version, or the treeNodeId (numeric) to read the draft version (which also provides the file path needed for editing). The response includes a "source" field indicating which version was returned.

### `startLine` **(required)**

Type: `['number', 'null']`.

> For files only: the line number to start reading from (1-indexed, inclusive). Pass null to read from the beginning.

### `endLine` **(required)**

Type: `['number', 'null']`.

> For files only: the line number to end reading at (1-indexed, inclusive). Pass null to read to the end.

## Handler notes

Extracted from webpack module `620709` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({assetType:t,assetId:r,startLine:s,endLine:n},o,l)
```

**Execute body** (verbatim, minified — webpack module `620709`, 1295 bytes):

```javascript
{var u;return(u=function*(){let o=new AbortController,u=l?(0,a.NA)([l,o.signal]):o.signal,d=setTimeout(()=>o.abort(),12e4);try{let o=i.find(e=>e===t);if(!o)return{success:!1,error:{message:`Unknown asset type: "${t}". Supported types: ${i.join(", ")}`}};let l=V[o];if(!l){let e=Y(),r=e.length>0?`Currently supported: ${e.join(", ")}`:"No readers currently registered.";return{success:!1,error:{message:`No reader registered for asset type "${t}". ${r}`}}}let d=yield(0,a.kk)(l(r,e,{startLine:s,endLine:n}),u,`Reading ${t} was cancelled.`);if(d.success){let e="notebookPath"in d&&d.notebookPath||"filePath"in d&&d.filePath||"folderPath"in d&&d.folderPath||void 0;if(e){let t=yield(0,G.T)(e);if(t)return{...d,agentsMdHint:t}}}return d}catch(e){if(o.signal.aborted)return{success:!1,error:{message:`Reading ${t} timed out after ${Math.round(120)}s. The asset may be unusually large or the backend may be slow; try again, or fetch a smaller portion (e.g. a specific line range for files).`}};return{success:!1,error:{message:`Failed to read ${t}: ${e instanceof Error?e.message:"unknown error"}`}}}finally{clearTimeout(d)}},function(){var e=this,t=arguments;return new Promise(function(r,s){var a=u.apply(e,t);function n(e){B(a,r,s,n,o,"next",e)}function o(e){B(a,r,s,n,o,"throw",e)}n(void 0)})})()}
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.

**Helpers called from the body** (each is a different webpack module):

- `(0, a.NA)(...)` (module `284810` — abortable-promise / cancellation helper used across tools)
- `(0, a.kk)(...)` (module `284810` — abortable-promise / cancellation helper used across tools)
- `(0, G.T)(...)` (module `941443` — asset content fetcher (resolves asset id → workspace path → contents))

**What this proves vs. what it doesn't**:

## Verified network behaviour

Captured 2026-05-19 by patching `window.fetch` + `XMLHttpRequest` on the SPA and triggering the prompt below. Full request log (with bodies) is in [../../traces/readAssetById.json](../../traces/readAssetById.json).

**Trigger prompt:** `show me cell 1 of notebook id 94074149243400`

**Endpoints fired (excluding agent-housekeeping common to every turn):**

- `GET /notebook/<id>`
- `GET /notebook/<id>/command`

Direct ID-based notebook fetch (`/notebook/<id>` returns notebook metadata; `/notebook/<id>/command` returns the cell list). Both calls are XHR, not REST under `/ajax-api/`, so the path uses the legacy notebook-server surface.

<!-- DASHBOARD_VARIANT_BEGIN -->

## Dashboard Authoring variant

The Dashboard Authoring Agent (`dashboardAuthoringAgent`) ships this same tool. The wire schema below was captured 2026-05-19 from the `hi` POST against `/sql/dashboardsv3/<id>?edit=true` — see [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md). Position in the dashboard agent's tools array: **19 of 34**.

Description: **identical** to the LakeAgent variant.

**Parameter diff** (LakeAgent → Dashboard Authoring):

- Property set: **identical** key list.
- `required` array: **identical**.

**Handler binding in the dashboard chunk:**

Same identity as the LakeAgent variant — these 13 tools are imported into `DashboardAuthoringAgentContext` from the shared `builtInToolsDeps` registry, not redefined per agent. The factory module IDs noted in this ref's Handler-notes section above apply unchanged to the dashboard agent.

<!-- DASHBOARD_VARIANT_END -->
