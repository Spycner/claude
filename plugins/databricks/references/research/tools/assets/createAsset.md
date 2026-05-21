# Genie Code tool: `createAsset`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [payload.md](../../overview/payload.md) for the full request envelope and [findings.md](../../overview/findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **15 of 18**.

## Description

> Create a blank Databricks asset (only supported: notebook, dashboard, file, directory, job, query, pipeline, genie space, or designerFile / Visual ETL). The asset is created empty - use the edit asset tool to add content, then openAsset to navigate to it. Files and folders will be created relative to the user's home directory, e.g. "/Users/bob.jones@databricks.com". For genie spaces, tableIdentifiers (fully qualified table names) are required.

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
        "file",
        "job",
        "query",
        "pipeline",
        "directory",
        "genie",
        "app",
        "designerFile"
      ],
      "description": "The type of asset to create."
    },
    "name": {
      "type": "string",
      "description": "A descriptive name based on the user's request or task intent (e.g., \"Properties EDA\", \"Revenue Analysis Q4\"). Avoid generic names like \"New Notebook\". For files, include the extension (e.g., \"script.py\", \"config.json\"). For designerFile, the .designer.ipynb extension is added automatically if missing. Use the full path for nested directories (e.g., \"my-project/analysis.py\") — intermediate folders are created automatically."
    },
    "tableIdentifiers": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Required for genie spaces only. Fully qualified Unity Catalog table names (e.g., [\"catalog.schema.table\"])."
    }
  },
  "required": [
    "assetType",
    "name",
    "tableIdentifiers"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `assetType` (string) — The type of asset to create.
* `name` (string) — A descriptive name based on the user's request or task intent (e.g., "Properties EDA", "Revenue Analysis Q4"). Avoid generic names like "New Notebook". For files, include the extension (e.g., "script.py", "config.json"). For designerFile, the .designer.ipynb extension is added automatically if missing. Use the full path for nested directories (e.g., "my-project/analysis.py") — intermediate folders are created automatically.
* `tableIdentifiers` (array) — Required for genie spaces only. Fully qualified Unity Catalog table names (e.g., ["catalog.schema.table"]).

## All properties

### `assetType` **(required)**

Type: `string`. enum: 'notebook', 'dashboard', 'file', 'job', 'query', 'pipeline', 'directory', 'genie', 'app', 'designerFile'

> The type of asset to create.

### `name` **(required)**

Type: `string`.

> A descriptive name based on the user's request or task intent (e.g., "Properties EDA", "Revenue Analysis Q4"). Avoid generic names like "New Notebook". For files, include the extension (e.g., "script.py", "config.json"). For designerFile, the .designer.ipynb extension is added automatically if missing. Use the full path for nested directories (e.g., "my-project/analysis.py") — intermediate folders are created automatically.

### `tableIdentifiers` **(required)**

Type: `array`.

> Required for genie spaces only. Fully qualified Unity Catalog table names (e.g., ["catalog.schema.table"]).

## Handler notes

Extracted from webpack module `894049` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({assetType:t,name:r,tableIdentifiers:s},a)
```

**Execute body** (verbatim, minified — webpack module `894049`, 10696 bytes):

```javascript
w(function*(){let n={...(0,h.D)(),...e},o=a.agentIds.sessionId,u=n?.folderPath??k();try{let e;if((0,b.ts)((0,b.A)(t)))return(0,g.yj)(`${t} creation is not enabled for this workspace.`);if(["notebook","file","directory","designerFile"].includes(t)&&r.includes("/")){for(let e of yield w(function*(){let e=r.lastIndexOf("/");if(-1===e)return[];let t=r.substring(0,e).split("/"),s=[],a=u,n="";for(let e of t){a=`${a}/${e}`,n=n?`${n}/${e}`:e;let t=new URLSearchParams({path:a});if((yield(0,m.S)(`/ajax-api/2.0/workspace/get-status?${t}`,{method:"GET"})).ok)continue;let r=yield(0,m.S)("/ajax-api/2.0/workspace/mkdirs",{method:"POST",body:JSON.stringify({path:a})});if(!r.ok){let e=yield r.json().catch(()=>({})),t="object"==typeof e&&e.message?e.message:r.statusText;throw Error(`Failed to create directory ${a}. Status: ${r.status}. ${t}`)}let o=yield _(a);s.push({id:String(o),name:n,path:a})}return s})())n?.onAssetCreated?.({type:"directory",id:e.id,name:e.name},{threadId:o}),yield T(e.id)}switch(t){case"notebook":e=yield w(function*(){if((0,d.W)("databricks.fe.assistant.enableDefaultDbeForCreatedNotebooks",!1))return w(function*(){let e=r.lastIndexOf("/"),t=-1===e?r:r.substring(e+1),s=-1===e?u:`${u}/${r.substring(0,e)}`,a=yield _(s),n=yield(0,m.S)("/notebook",{method:"POST",body:JSON.stringify({name:t,language:"python",parentId:a,clusterId:"",reposExportFormat:"SOURCE",withDefaultBaseEnvironment:!0})});if(!n.ok){let e=yield n.json().catch(()=>({})),t="object"==typeof e&&null!==e&&"message"in e?e.message:n.statusText;throw Error(`Failed to create notebook. Status: ${n.status}. ${t}`)}let o=yield n.json();if(!o.id)throw Error("Failed to create notebook: no ID returned");let l=o.id,d=(0,i.TQ)(l);return{success:!0,assetType:"notebook",assetId:String(l),assetName:r,assetPath:`${u}/${r}`,assetUrl:d}})();return w(function*(){let e=`${r}.ipynb`,t=JSON.stringify({cells:[],metadata:{kernelspec:{display_name:"Python 3",language:"python",name:"python3"},language_info:{name:"python",version:"3.8.0"}},nbformat:4,nbformat_minor:4},null,2),s=yield I({folderPath:u,fileName:e,fileContent:t});if(!s)throw Error("Failed to create notebook: no object ID returned");let a=Number(s),n=(0,i.TQ)(a);re
…[truncated]
```

_(body truncated at 2,200 chars; full 10696-byte source is in `../../extraction/data/tool-handlers.json` under `createAsset.body` and the captured factory in `../../extraction/data/tool-factories.json`.)_

**Verified wire-level evidence** (literal in the handler body):

- REST endpoints (GET, POST):
    - `/ajax-api/2.0/notebooks`
    - `/ajax-api/2.0/notebooks/${n}/update-unified-sql-editor-opt-in-status`
    - `/ajax-api/2.0/redash-v2/queries`
    - `/ajax-api/2.0/workspace/get-status?${a}`
    - `/ajax-api/2.0/workspace/get-status?${s}`
    - `/ajax-api/2.0/workspace/get-status?${t}`
    - `/ajax-api/2.0/workspace/mkdirs`
    - `/ajax-api/2.2/jobs/create`
    - `/api/2.0/apps`
- Feature flags read during execution:
    - `databricks.fe.assistant.createAssetDisableApp`
    - `databricks.fe.assistant.enableDefaultDbeForCreatedNotebooks`
    - `databricks.fe.lakebuilder.enableDesignerFile`

**Helpers called from the body** (each is a different webpack module):

- `(0, h.D)(...)` (module `912091`)
- `(0, b.ts)(...)` (module `480427` — asset-type permission helpers (`A`, `_h`, `ts`) — gates createAsset/openAsset on workspace ACLs)
- `(0, b.A)(...)` (module `480427` — asset-type permission helpers (`A`, `_h`, `ts`) — gates createAsset/openAsset on workspace ACLs)
- `(0, g.yj)(...)` (module `570826`)
- `(0, m.S)(...)` (module `844760`)
- `(0, d.W)(...)` (module `441535` — feature-flag reader — `W(flag, default)` reads workspace feature flags)
- `(0, i.TQ)(...)` (module `485669` — asset URL / navigation helpers (e.g. asset id → page URL))
- `(0, c.m)(...)` (module `846643`)
- `(0, i.ZZ)(...)` (module `485669` — asset URL / navigation helpers (e.g. asset id → page URL))
- `(0, y.iu)(...)` (module `910320`)
- `(0, l.SV)(...)` (module `544306`)
- `(0, i.eV)(...)` (module `485669` — asset URL / navigation helpers (e.g. asset id → page URL))
- `(0, f.T)(...)` (module `941443` — asset content fetcher (resolves asset id → workspace path → contents))
- `(0, g.r6)(...)` (module `570826`)

**What this proves vs. what it doesn't**:

- ✅ The REST endpoint(s) above are inline literals in the handler — verified static evidence (URL string + method directly in this module, not in a helper).

## Verified network behaviour

Captured 2026-05-19 by patching `window.fetch` + `XMLHttpRequest` on the SPA and triggering the prompt below. Full request log (with bodies) is in [../../traces/createAsset.json](../../traces/createAsset.json).

**Trigger prompt:** `create a new notebook called genie-trace-scratch in /Users/pgoellner@deloitte.de/Drafts`

**Endpoints fired (excluding agent-housekeeping common to every turn):**

- `GET /ajax-api/2.0/workspace/get-status`
- `POST /ajax-api/2.0/workspace/import`

Creation goes through the standard workspace REST surface: `workspace/get-status` first to resolve the target folder ID, then `workspace/import` with `format=SOURCE` and `language=PYTHON` (for notebooks) to materialize the new asset. No bespoke endpoint.

<!-- DASHBOARD_VARIANT_BEGIN -->

## Dashboard Authoring variant

The Dashboard Authoring Agent (`dashboardAuthoringAgent`) ships this same tool. The wire schema below was captured 2026-05-19 from the `hi` POST against `/sql/dashboardsv3/<id>?edit=true` — see [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md). Position in the dashboard agent's tools array: **31 of 34**.

Description: **identical** to the LakeAgent variant.

**Parameter diff** (LakeAgent → Dashboard Authoring):

- Property set: **identical** key list.
- `required` array: **identical**.

**Handler binding in the dashboard chunk:**

Same identity as the LakeAgent variant — these 13 tools are imported into `DashboardAuthoringAgentContext` from the shared `builtInToolsDeps` registry, not redefined per agent. The factory module IDs noted in this ref's Handler-notes section above apply unchanged to the dashboard agent.

<!-- DASHBOARD_VARIANT_END -->
