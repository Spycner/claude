# Genie Code tool: `readTable`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [genie_code_payload.md](genie_code_payload.md) for the full request envelope and [genie_code_findings.md](genie_code_findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **6 of 18**.

## Description

> Get detailed information on a workspace SQL table like column types, comments, frequent queries, and joins. Specify the table as catalog.schema.name. When extraDetails is true, the result includes a metadata.properties map with Spark and Delta internals (e.g. spark.sql.statistics.*, delta.*); summarize its key entries in your reply.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "catalog": {
      "type": "string",
      "description": "Name of the catalog that contains the table to read (required).",
      "minLength": 1
    },
    "schema": {
      "type": "string",
      "description": "Name of the schema (sometimes named database) that contains the table to read (required).",
      "minLength": 1
    },
    "name": {
      "type": "string",
      "description": "The non-prefixed name of the table to read (required).",
      "minLength": 1
    },
    "extraDetails": {
      "type": "boolean",
      "description": "If true, returns the full set of table properties as JSON (can be large). If false (default), returns a compact subset of table properties."
    }
  },
  "required": [
    "catalog",
    "schema",
    "name",
    "extraDetails"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `catalog` (string) — Name of the catalog that contains the table to read (required).
* `schema` (string) — Name of the schema (sometimes named database) that contains the table to read (required).
* `name` (string) — The non-prefixed name of the table to read (required).
* `extraDetails` (boolean) — If true, returns the full set of table properties as JSON (can be large). If false (default), returns a compact subset of table properties.

## All properties

### `catalog` **(required)**

Type: `string`.

> Name of the catalog that contains the table to read (required).

### `schema` **(required)**

Type: `string`.

> Name of the schema (sometimes named database) that contains the table to read (required).

### `name` **(required)**

Type: `string`.

> The non-prefixed name of the table to read (required).

### `extraDetails` **(required)**

Type: `boolean`.

> If true, returns the full set of table properties as JSON (can be large). If false (default), returns a compact subset of table properties.

## Handler notes

Extracted from webpack module `735517` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({catalog:s,schema:a,name:n,extraDetails:o})
```

**Execute body** (verbatim, minified — webpack module `735517`, 1095 bytes):

```javascript
c(function*(){try{let i=yield c(function*(){try{let e=`${s}.${a}.${n}`,t="readTable-lineage-authz",r=yield l.k.authzEval({actions:{[t]:{action_name:"GetTableMetadataExcludingBrowseOnSchema",arguments:{table:{name:e}}}}});return r.actions?.[t]?.authorized===!0}catch{return!1}})(),d=yield(0,u.Lf)({table:{catalog:s,schema:a,entity:n},apolloClient:e,getTableColumns:t,getTableMetadata:r,options:{limitTopJoins:2,limitTopQueries:2},excludeTopQueries:!i});if(!d.columns||0===d.columns.length)return{success:!1,error:{message:"Table not found or has no columns/metadata."}};let p=d.columns.map(e=>{let{originalColumnData:t,...r}=e;return r});if(o)return{success:!0,data:{...d,columns:p,requiredSkillCheck:!0}};let m={tableName:`${s}.${a}.${n}`,tableType:d.tableType||d.metadata?.table_type||d.metadata?.type,columns:p,metadata:{table_type:d.metadata?.table_type,type:d.metadata?.type,table_size:d.metadata?.table_size,comment:d.metadata?.comment},topJoins:d.topJoins,topQueries:d.topQueries,requiredSkillCheck:!0};return{success:!0,data:m}}catch(e){return{success:!1,error:{message:(0,i.u1)(e)}}}})()
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.

**Helpers called from the body** (each is a different webpack module):

- `(0, u.Lf)(...)` (module `259660`)
- `(0, i.u1)(...)` (module `370437` — tool-error formatting / sanitised error envelopes)

**What this proves vs. what it doesn't**:

- ⚠️  The handler delegates to one or more helper modules whose internals were not traced in this pass. The actual network endpoint (or absence of one — some tools manipulate local Redux state only) is therefore **not statically verified** from this source. To confirm what each helper does on the wire, see the network-trace follow-up in [genie_code_followups.md](genie_code_followups.md) §1.

