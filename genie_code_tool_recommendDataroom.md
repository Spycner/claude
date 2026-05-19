# Genie Code tool: `recommendDataroom`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [genie_code_payload.md](genie_code_payload.md) for the full request envelope and [genie_code_findings.md](genie_code_findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **1 of 18**.

## Description

> Recommend relevant Genie spaces that could answer the users question. A space is a scoped workspace that answers natural-language questions using only the approved tables, metrics, and business definitions for a specific business domain

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Use 3 keywords to find a relevant space. Seperated by white space. Can be called a second time with up to 5 keywords if no relevant space was found"
    }
  },
  "required": [
    "query"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `query` (string) — Use 3 keywords to find a relevant space. Seperated by white space. Can be called a second time with up to 5 keywords if no relevant space was found

## All properties

### `query` **(required)**

Type: `string`.

> Use 3 keywords to find a relevant space. Seperated by white space. Can be called a second time with up to 5 keywords if no relevant space was found

## Handler notes

Extracted from webpack module `903428` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({query:e})
```

**Execute body** (verbatim, minified — webpack module `903428`, 538 bytes):

```javascript
{var t;return(t=function*(){try{let t=(yield(0,E.c)(s,{query:e,max_results:10})).recommendations||[];return{success:!0,data:{recommendations:t.map(e=>({...e,description:e.description?_()(e.description,{length:250}):"",relevanceScore:e.relevance_score&&w()(e.relevance_score,3)}))}}}catch(e){return{success:!1,error:e instanceof Error?e.message:"Unknown error"}}},function(){var e=this,r=arguments;return new Promise(function(s,a){var n=t.apply(e,r);function o(e){x(n,s,a,o,i,"next",e)}function i(e){x(n,s,a,o,i,"throw",e)}o(void 0)})})()}
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.

**Helpers called from the body** (each is a different webpack module):

- `(0, E.c)(...)` (module `520256`)

**What this proves vs. what it doesn't**:

- ⚠️  The handler delegates to one or more helper modules whose internals were not traced in this pass. The actual network endpoint (or absence of one — some tools manipulate local Redux state only) is therefore **not statically verified** from this source. To confirm what each helper does on the wire, see the network-trace follow-up in [genie_code_followups.md](genie_code_followups.md) §1.

