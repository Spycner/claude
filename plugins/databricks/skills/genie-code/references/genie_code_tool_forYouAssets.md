# Genie Code tool: `forYouAssets`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [genie_code_payload.md](genie_code_payload.md) for the full request envelope and [genie_code_findings.md](genie_code_findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **9 of 18**.

## Description

> Fetch personalized assets of the users. Supports optional keyword search for suggested assets. For lineage-based recommendations, also check if related_entities names match your keywords to determine relevance.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "numResults": {
      "type": "number",
      "description": "The number of results to fetch for each asset type (default: 25).",
      "default": 25
    },
    "includeFavorites": {
      "type": "boolean",
      "description": "Whether to include favorite assets (default: true)."
    },
    "includeSuggestedAssets": {
      "type": "boolean",
      "description": "Whether to include recent assets (default: true)."
    },
    "includePopularAssets": {
      "type": "boolean",
      "description": "Whether to include popular assets (default: false)."
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
      "description": "Array of asset types to include."
    },
    "page": {
      "type": "string",
      "description": "The page context for recommendations (default: PAGE_UNSPECIFIED).",
      "enum": [
        "CATALOG_EXPLORER_LANDING_PAGE",
        "DATABRICKS_ONE_FOR_YOU_PAGE",
        "DATABRICKS_ONE_HOME_PAGE",
        "DISCOVER_PAGE",
        "HOME_PAGE",
        "OTHER",
        "PAGE_UNSPECIFIED"
      ],
      "default": "PAGE_UNSPECIFIED"
    },
    "interface": {
      "type": "string",
      "description": "The interface context for recommendations (default: ASSISTANT).",
      "enum": [
        "ASSISTANT",
        "INTERFACE_UNSPECIFIED",
        "ONE_CHAT",
        "UI"
      ],
      "default": "ASSISTANT"
    },
    "keywords": {
      "type": "string",
      "description": "Keywords for searching assets. When provided, enables keyword-based search for suggested assets (default: empty string).",
      "default": ""
    }
  },
  "required": [
    "numResults",
    "includeFavorites",
    "includePopularAssets",
    "includeSuggestedAssets",
    "assetTypes",
    "page",
    "interface",
    "keywords"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `numResults` (number) — The number of results to fetch for each asset type (default: 25).
* `includeFavorites` (boolean) — Whether to include favorite assets (default: true).
* `includePopularAssets` (boolean) — Whether to include popular assets (default: false).
* `includeSuggestedAssets` (boolean) — Whether to include recent assets (default: true).
* `assetTypes` (array) — Array of asset types to include.
* `page` (string) — The page context for recommendations (default: PAGE_UNSPECIFIED).
* `interface` (string) — The interface context for recommendations (default: ASSISTANT).
* `keywords` (string) — Keywords for searching assets. When provided, enables keyword-based search for suggested assets (default: empty string).

## All properties

### `numResults` **(required)**

Type: `number`.

> The number of results to fetch for each asset type (default: 25).

### `includeFavorites` **(required)**

Type: `boolean`.

> Whether to include favorite assets (default: true).

### `includeSuggestedAssets` **(required)**

Type: `boolean`.

> Whether to include recent assets (default: true).

### `includePopularAssets` **(required)**

Type: `boolean`.

> Whether to include popular assets (default: false).

### `assetTypes` **(required)**

Type: `array`.

> Array of asset types to include.

### `page` **(required)**

Type: `string`. enum: 'CATALOG_EXPLORER_LANDING_PAGE', 'DATABRICKS_ONE_FOR_YOU_PAGE', 'DATABRICKS_ONE_HOME_PAGE', 'DISCOVER_PAGE', 'HOME_PAGE', 'OTHER', 'PAGE_UNSPECIFIED'

> The page context for recommendations (default: PAGE_UNSPECIFIED).

### `interface` **(required)**

Type: `string`. enum: 'ASSISTANT', 'INTERFACE_UNSPECIFIED', 'ONE_CHAT', 'UI'

> The interface context for recommendations (default: ASSISTANT).

### `keywords` **(required)**

Type: `string`.

> Keywords for searching assets. When provided, enables keyword-based search for suggested assets (default: empty string).

## Handler notes

Extracted from webpack module `731190` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({numResults:t,includeFavorites:r,includePopularAssets:s,includeSuggestedAssets:n,assetTypes:o,page:i=a.jbe.PAGE_UNSPECIFIED,interface:d=a.XD6.ASSISTANT,keywords:c=""})
```

**Execute body** (verbatim, minified — webpack module `731190`, 3106 bytes):

```javascript
{var p;return(p=function*(){try{let a=function(e){if(!e||0===e.length)return Object.values(v).flat();return e.flatMap(e=>v[e]||[])}(o),l=function(e){if(!e||0===e.length)return Object.values(b).flat();return e.flatMap(e=>b[e]||[])}(o),p={assets:[],totalCount:0,timestamp:new Date().toISOString()};if(r&&l.length>0)try{let r=yield e.query({query:w,variables:{types:l,numFavorites:t}});if(r.data?.useractivityListFavoriteAssets?.assets){let e=r.data.useractivityListFavoriteAssets.assets.map(e=>{let t=e.asset;return{id:t?.id??void 0,name:t?.name??void 0,type:t?.type??void 0,asset_type:"favorite",securable_kind:t?.unityCatalogSecurable?.securableKind??void 0}});p.assets.push(...e)}}catch(e){(0,u.W)("databricks.fe.editor.enableAssistantPromptDebug",!1)&&console.log("Error fetching favorite assets::",JSON.stringify(e))}if(s&&l.length>0)try{let r=yield e.query({query:_,variables:{userActivityTypes:l,numResults:t}});if(r.data?.useractivityListPopularAssets?.assets){let e=r.data.useractivityListPopularAssets.assets.map(e=>{let t=e.asset;return{id:t?.id??void 0,name:t?.name??void 0,type:t?.type??void 0,asset_type:"popular",full_path:t?.treeNode?.fullPath??void 0,popularity_score:e.popularity?.bucket??void 0,viewer_count:e.popularity?.viewerCount??void 0}});p.assets.push(...e)}}catch(e){(0,u.W)("databricks.fe.editor.enableAssistantPromptDebug",!1)&&console.log("Error fetching favorite assets::",JSON.stringify(e))}if(n&&a.length>0)try{let r=yield e.query({query:k,variables:{pageSize:t,types:a,page:i,interface:d,keywords:c,pageToken:void 0}}),s=r.data?.recommendationGetAssetRecommendations?.assetRecommendations;if(s){let e=s.map(e=>{let t=e.asset,r=e.relevanceReason?.lineageMetadata,s=r?.relatedEntities?r.relatedEntities.map(e=>({id:e?.id??void 0,name:e?.name??void 0,type:e?.type??void 0})):void 0;return{id:t?.id??void 0,name:t?.name??void 0,type:t?.type??void 0,asset_type:"suggested",path:t?.treeNode?.fullPath??void 0,reason_type:e.relevanceReason?.type??void 0,view_frequency:e.relevanceReason?.viewMetadata?.viewFrequency??void 0,related_entities:s}});p.assets.push(...e)}}catch(e){(0,u.W)("databricks.fe.editor.enableAssistantPromptDebug",!1)&&console.log("Error fetching suggeste
…[truncated]
```

_(body truncated at 2,200 chars; full 3106-byte source is in `.workbench/tool_handlers.json` under `forYouAssets.body` and the captured factory in `.workbench/tool_factories.json`.)_

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.
- Feature flags read during execution:
    - `databricks.fe.editor.enableAssistantPromptDebug`

**Helpers called from the body** (each is a different webpack module):

- `(0, u.W)(...)` (module `441535` — feature-flag reader — `W(flag, default)` reads workspace feature flags)
- `(0, l.u1)(...)` (module `370437` — tool-error formatting / sanitised error envelopes)

**What this proves vs. what it doesn't**:


