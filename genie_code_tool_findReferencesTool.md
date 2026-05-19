# Genie Code tool: `findReferencesTool`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [genie_code_payload.md](genie_code_payload.md) for the full request envelope and [genie_code_findings.md](genie_code_findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **18 of 18**.

**Prompt-cache marker**: `cache_control = {"type": "ephemeral"}`. Anthropic prompt caching is attached to this tool definition, which means the entire tool block above it is cached on the server side and only re-validated when this tool's schema changes.

## Description

> Find data lineage and references for tables and columns in Unity Catalog.
> 
> This tool helps discover:
> - Upstream dependencies (where data comes from)
> - Downstream dependencies (where data is used)
> - Related notebooks, jobs, and dashboards
> - Column-level lineage when column name is provided
> 
> Requires fully qualified table names in format: catalog.schema.table

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "tableName": {
      "type": "string",
      "description": "Fully qualified table name in format: catalog.schema.table"
    },
    "columnName": {
      "type": "string",
      "description": "Optional column name for column-level lineage analysis"
    },
    "includeEntityLineage": {
      "type": "boolean",
      "description": "Whether to include related notebooks, jobs, and dashboards (default: true)"
    }
  },
  "required": [
    "tableName",
    "columnName",
    "includeEntityLineage"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `tableName` (string) — Fully qualified table name in format: catalog.schema.table
* `columnName` (string) — Optional column name for column-level lineage analysis
* `includeEntityLineage` (boolean) — Whether to include related notebooks, jobs, and dashboards (default: true)

## All properties

### `tableName` **(required)**

Type: `string`.

> Fully qualified table name in format: catalog.schema.table

### `columnName` **(required)**

Type: `string`.

> Optional column name for column-level lineage analysis

### `includeEntityLineage` **(required)**

Type: `boolean`.

> Whether to include related notebooks, jobs, and dashboards (default: true)

## Handler notes

Extracted from webpack module `270168` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
e
```

**Execute body** (verbatim, minified — webpack module `270168`, 845 bytes):

```javascript
{var t;return(t=function*(){try{let{tableName:t,columnName:r,includeEntityLineage:s=!0}=e;if(!function(e){let t=e.split(".");if(3!==t.length)return null;return{catalog:t[0],schema:t[1],table:t[2]}}(t))return{success:!1,error:{message:`Invalid table name format. Expected format: catalog.schema.table, but received: ${t}`}};let a=yield(0,i.s4)(t,r,s);if(!a.success)return{success:!1,error:{message:a.error?.message||"Failed to retrieve lineage data"}};if(!a.data)return{success:!1,error:{message:"No lineage data returned"}};return{success:!0,data:a.data}}catch(e){return{success:!1,error:{message:e instanceof Error?e.message:"Invalid arguments or unexpected error"}}}},function(){var e=this,r=arguments;return new Promise(function(s,a){var n=t.apply(e,r);function o(e){l(n,s,a,o,i,"next",e)}function i(e){l(n,s,a,o,i,"throw",e)}o(void 0)})})()}
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.

**Helpers called from the body** (each is a different webpack module):

- `(0, i.s4)(...)` (module `469070`)

**What this proves vs. what it doesn't**:

- ⚠️  The handler delegates to one or more helper modules whose internals were not traced in this pass. The actual network endpoint (or absence of one — some tools manipulate local Redux state only) is therefore **not statically verified** from this source. To confirm what each helper does on the wire, see the network-trace follow-up in [genie_code_followups.md](genie_code_followups.md) §1.

