# Genie Code tool: `tableSearch`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [genie_code_payload.md](genie_code_payload.md) for the full request envelope and [genie_code_findings.md](genie_code_findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **7 of 18**.

## Description

> Search for tables and datasets in the current workspace by keywords or natural language description. Do NOT use this tool if a fully qualified table name (catalog.schema.table) is already provided, use readTable instead to get table details directly.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "keywords": {
      "type": "array",
      "description": "Keywords to use for the table search",
      "items": {
        "type": "string",
        "minLength": 1
      }
    },
    "searchQuery": {
      "type": "string",
      "description": "Natural language description of what to look for. Be specific about the data characteristics, relationships, or business purpose. Example: \"a table that contains a mapping between user id and pseudo user id\"",
      "minLength": 1
    },
    "dataCatalog": {
      "type": "string",
      "description": "Optional Data Catalog to search tables in (default \"\")"
    },
    "dataSchema": {
      "type": "string",
      "description": "Optional schema to search tables in (default \"\")"
    }
  },
  "required": [
    "keywords",
    "searchQuery",
    "dataCatalog",
    "dataSchema"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `keywords` (array) — Keywords to use for the table search
* `searchQuery` (string) — Natural language description of what to look for. Be specific about the data characteristics, relationships, or business purpose. Example: "a table that contains a mapping between user id and pseudo user id"
* `dataCatalog` (string) — Optional Data Catalog to search tables in (default "")
* `dataSchema` (string) — Optional schema to search tables in (default "")

## All properties

### `keywords` **(required)**

Type: `array`.

> Keywords to use for the table search

### `searchQuery` **(required)**

Type: `string`.

> Natural language description of what to look for. Be specific about the data characteristics, relationships, or business purpose. Example: "a table that contains a mapping between user id and pseudo user id"

### `dataCatalog` **(required)**

Type: `string`.

> Optional Data Catalog to search tables in (default "")

### `dataSchema` **(required)**

Type: `string`.

> Optional schema to search tables in (default "")

## Handler notes

Extracted from webpack module `16716` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
t
```

**Execute body** (verbatim, minified — webpack module `16716`, 1861 bytes):

```javascript
{var r;return(r=function*(){try{if((0,u.W)("databricks.conversation.agent.enableUserLevelTableSearch",!1)||(0,u.W)("databricks.conversation.agent.enableUserLevelTableSearchV2",!1)){let r=t.dataSchema?` in schema ${t.dataSchema}`:"",s=`${t.searchQuery}${r}`,a=yield k(e,d,{query:s,keywords:t.keywords,dataSchema:t.dataSchema,maxResults:5,dataCatalogs:t.dataCatalog?[t.dataCatalog]:void 0,aclOverfetchMultiplier:10});if(a.error)return{success:!1,error:{message:`Table search failed: ${a.error}`}};let n=a.results.map(e=>({fullyQualifiedName:e.catalog&&e.schema&&e.table?`${e.catalog}.${e.schema}.${e.table}`:void 0,catalogName:e.catalog||"",schemaName:e.schema||"",tableName:e.table||"",comments:e.description,columns:(e.columns||[]).map(e=>({name:e.name,typeName:e.typeName,comments:e.comments}))}));return{success:!0,data:n}}{if((0,u.W)("databricks.conversation.agent.enableUserLevelTableSearchShadow",!1)){let r=t.dataSchema?` in schema ${t.dataSchema}`:"",s=`${t.searchQuery}${r}`;k(e,d,{query:s,keywords:t.keywords,dataSchema:t.dataSchema,maxResults:5,dataCatalogs:t.dataCatalog?[t.dataCatalog]:void 0,aclOverfetchMultiplier:10})}let r=[...t.keywords,...t.dataSchema?[t.dataSchema]:[]].join(" "),{tables:s}=yield d(r,5,!1,{},void 0,{dataCatalogs:t.dataCatalog?[t.dataCatalog]:void 0}),a=s.map(e=>({fullyQualifiedName:e.catalogName&&e.schemaName&&e.tableName?`${e.catalogName}.${e.schemaName}.${e.tableName}`:void 0,catalogName:e.catalogName,schemaName:e.schemaName,tableName:e.tableName,comments:e.comments,columns:(e.columns||[]).map(e=>({name:e.name,typeName:e.typeName,comments:e.comments}))}));return{success:!0,data:a}}}catch(e){return{success:!1,error:{message:(0,l.u1)(e)}}}},function(){var e=this,t=arguments;return new Promise(function(s,a){var n=r.apply(e,t);function o(e){I(n,s,a,o,i,"next",e)}function i(e){I(n,s,a,o,i,"throw",e)}o(void 0)})})()}
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.
- Feature flags read during execution:
    - `databricks.conversation.agent.enableUserLevelTableSearch`
    - `databricks.conversation.agent.enableUserLevelTableSearchShadow`
    - `databricks.conversation.agent.enableUserLevelTableSearchV2`

**Helpers called from the body** (each is a different webpack module):

- `(0, u.W)(...)` (module `441535` — feature-flag reader — `W(flag, default)` reads workspace feature flags)
- `(0, l.u1)(...)` (module `370437` — tool-error formatting / sanitised error envelopes)

**What this proves vs. what it doesn't**:


