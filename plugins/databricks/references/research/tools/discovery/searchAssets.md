# Genie Code tool: `searchAssets`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [payload.md](../../overview/payload.md) for the full request envelope and [findings.md](../../overview/findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **10 of 18**.

## Description

> Search for assets in the current workspace using unified search API. Returns comprehensive search results for tables, queries, notebooks, dashboards, pipelines, jobs, datarooms, and files. Supports pagination - use the nextPageToken from response to get additional pages of results.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "searchQuery": {
      "type": "string",
      "description": "Keywords used as search query. Use an empty string to browse/list assets without keyword filtering (e.g. when listing all assets of a type). Does not support AND/OR operators."
    },
    "assetTypes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "notebooks",
          "dashboards",
          "pipelines",
          "jobs",
          "datarooms",
          "files",
          "alerts",
          "apps",
          "endpoints",
          "models",
          "folders"
        ]
      },
      "description": "Array of asset types to search for. If not provided, searches all types."
    },
    "numResultsPerAssetType": {
      "type": "number",
      "description": "The number of results to return by asset type (max: 5).",
      "default": 3
    },
    "sortBy": {
      "type": "string",
      "enum": [
        "score",
        "popularity",
        "updated_at",
        "name"
      ],
      "description": "How to sort the search results (default: score for relevance)."
    },
    "ownerOnly": {
      "type": "boolean",
      "description": "If true, restrict results to assets owned by the current user only."
    },
    "pageToken": {
      "type": "string",
      "description": "Token for paginating through search results. Use the nextPageToken from a previous search response to get the next page."
    }
  },
  "required": [
    "searchQuery",
    "assetTypes",
    "numResultsPerAssetType",
    "sortBy",
    "ownerOnly",
    "pageToken"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `searchQuery` (string) — Keywords used as search query. Use an empty string to browse/list assets without keyword filtering (e.g. when listing all assets of a type). Does not support AND/OR operators.
* `assetTypes` (array) — Array of asset types to search for. If not provided, searches all types.
* `numResultsPerAssetType` (number) — The number of results to return by asset type (max: 5).
* `sortBy` (string) — How to sort the search results (default: score for relevance).
* `ownerOnly` (boolean) — If true, restrict results to assets owned by the current user only.
* `pageToken` (string) — Token for paginating through search results. Use the nextPageToken from a previous search response to get the next page.

## All properties

### `searchQuery` **(required)**

Type: `string`.

> Keywords used as search query. Use an empty string to browse/list assets without keyword filtering (e.g. when listing all assets of a type). Does not support AND/OR operators.

### `assetTypes` **(required)**

Type: `array`.

> Array of asset types to search for. If not provided, searches all types.

### `numResultsPerAssetType` **(required)**

Type: `number`.

> The number of results to return by asset type (max: 5).

### `sortBy` **(required)**

Type: `string`. enum: 'score', 'popularity', 'updated_at', 'name'

> How to sort the search results (default: score for relevance).

### `ownerOnly` **(required)**

Type: `boolean`.

> If true, restrict results to assets owned by the current user only.

### `pageToken` **(required)**

Type: `string`.

> Token for paginating through search results. Use the nextPageToken from a previous search response to get the next page.

## Handler notes

Extracted from webpack module `257972` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({searchQuery:t,assetTypes:r,numResultsPerAssetType:s,sortBy:a,ownerOnly:n,pageToken:o})
```

**Execute body** (verbatim, minified — webpack module `257972`, 2886 bytes):

```javascript
{var i;return(i=function*(){try{let i=Math.min(Math.max(s,1),5),l=function(e){if(!e||0===e.length)return Object.values(g).flat();return e.flatMap(e=>g[e].slice())}(r),c=i*l.length,p=y[a],m=[];if(n){let e=(0,u.d)("userId_new",-1);-1!==e&&(m=[e.toString()])}let h=[];if((0,d.W)("databricks.fe.assistant.excludeOwnAssetsFromSearch",!1)){let e=(0,u.d)("userId_new",-1);-1!==e&&(h=[e.toString()])}let f=yield b(e,{query:t,filters:{resultTypes:l,...m.length>0&&{ownerIds:m}},...h.length>0&&{exclusionFilters:{ownerIds:h}},pageSize:i,...o&&{pageToken:o},sortOrder:{criteria:p}});if(f?.apiError)return{success:!1,error:{message:`Search API error: ${f.apiError.message} (${f.apiError.code})`}};let v=f?.results||[],w=v.map((e,t)=>({id:e.id||`result-${t}`,name:e.name||"Unnamed Asset",type:e.resultType||"UNKNOWN",description:e.description||void 0,path:e.treeNode?.fullPath||void 0,treeNodeId:e.treeNode?.id||void 0,owner:e.owner?{id:e.owner.id||0,fullname:e.owner.fullname||"Unknown",email:e.owner.email||""}:void 0,metadata:e.ucEntityMetadata?{catalogName:e.ucEntityMetadata.catalogName||void 0,schemaName:e.ucEntityMetadata.schemaName||void 0,securableKind:e.ucEntityMetadata.securableKind||void 0}:void 0,userActivity:e.userActivityInfo?{isFavorite:e.userActivityInfo.isFavorite||!1,lastViewed:e.userActivityInfo.lastViewedByUserAt||void 0,popularity:e.userActivityInfo.popularity?{bucket:e.userActivityInfo.popularity.bucket||"",viewerCount:e.userActivityInfo.popularity.viewerCount||0}:void 0}:void 0,updatedAt:e.updatedAt||void 0,url:e.url||void 0,highlights:e.highlighting?{codeFragments:e.highlighting.codeFragments?.map(e=>({content:e.content||"",language:e.language||"text"}))||void 0}:void 0})),k=[],_=!!f?.nextPageToken;0===v.length?(k.push("Try using different keywords or removing some filters"),k.push("Check spelling and try broader search terms"),r.length>0&&k.push("Try searching without asset type filters")):v.length===c&&_?k.push("More results available. Use the nextPageToken to fetch the next page of results."):v.length===c&&k.push("There may be more results available. Consider refining your search query for better precision");let I=o?` (page ${o?"continued":"first"})`:"",T={summary
…[truncated]
```

_(body truncated at 2,200 chars; full 2886-byte source is in `../../extraction/data/tool-handlers.json` under `searchAssets.body` and the captured factory in `../../extraction/data/tool-factories.json`.)_

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.
- Feature flags read during execution:
    - `databricks.fe.assistant.excludeOwnAssetsFromSearch`

**Helpers called from the body** (each is a different webpack module):

- `(0, u.d)(...)` (module `686560` — search-result shaping helper)
- `(0, d.W)(...)` (module `441535` — feature-flag reader — `W(flag, default)` reads workspace feature flags)
- `(0, l.u1)(...)` (module `370437` — tool-error formatting / sanitised error envelopes)

**What this proves vs. what it doesn't**:

## Verified network behaviour

Captured 2026-05-19 by patching `window.fetch` + `XMLHttpRequest` on the SPA and triggering the prompt below. Full request log (with bodies) is in [../../traces/searchAssets.json](../../traces/searchAssets.json).

**Trigger prompt:** `search the workspace for all notebooks in /Users/pgoellner@deloitte.de`

**Endpoints fired (excluding agent-housekeeping common to every turn):**

- `GET /ajax-api/2.0/workspace/get-status`
- `GET /ajax-api/2.0/folders/list`

Searching the workspace tree walks the folder hierarchy via repeated calls to `/ajax-api/2.0/folders/list` (one per directory traversed) and resolves individual paths with `/ajax-api/2.0/workspace/get-status`. In the captured turn, 6 folder-list calls fanned out to enumerate `/Users/pgoellner@deloitte.de/` and its subfolders. No single "search" REST endpoint exists — the tool drives the walk client-side.

<!-- DASHBOARD_VARIANT_BEGIN -->

## Dashboard Authoring variant

The Dashboard Authoring Agent (`dashboardAuthoringAgent`) ships this same tool. The wire schema below was captured 2026-05-19 from the `hi` POST against `/sql/dashboardsv3/<id>?edit=true` — see [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md). Position in the dashboard agent's tools array: **27 of 34**.

Description: **identical** to the LakeAgent variant.

**Parameter diff** (LakeAgent → Dashboard Authoring):

- Property set: **identical** key list.
- `required` array: **identical**.

**Handler binding in the dashboard chunk:**

Same identity as the LakeAgent variant — these 13 tools are imported into `DashboardAuthoringAgentContext` from the shared `builtInToolsDeps` registry, not redefined per agent. The factory module IDs noted in this ref's Handler-notes section above apply unchanged to the dashboard agent.

<!-- DASHBOARD_VARIANT_END -->
