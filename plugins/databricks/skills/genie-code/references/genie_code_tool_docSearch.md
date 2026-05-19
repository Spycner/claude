# Genie Code tool: `docSearch`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [genie_code_payload.md](genie_code_payload.md) for the full request envelope and [genie_code_findings.md](genie_code_findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **5 of 18**.

## Description

> Search the public Databricks documentation for guidance on products, features, APIs, Spark (Python), SQL syntax, configs, troubleshooting, and best practices.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "searchQuery": {
      "type": "string",
      "description": "keywords used as search query. Does not support AND/OR operators, just a single query."
    }
  },
  "required": [
    "searchQuery"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `searchQuery` (string) — keywords used as search query. Does not support AND/OR operators, just a single query.

## All properties

### `searchQuery` **(required)**

Type: `string`.

> keywords used as search query. Does not support AND/OR operators, just a single query.

## Handler notes

Extracted from webpack module `329175` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({searchQuery:t})
```

**Execute body** (verbatim, minified — webpack module `329175`, 368 bytes):

```javascript
{var r;return(r=function*(){try{let r=yield(0,l.Z8)({contextObject:{},query:t,apolloClient:e}),s=(0,l.wx)(r);return{success:!0,data:s}}catch(e){return{success:!1,error:{message:(0,i.u1)(e)}}}},function(){var e=this,t=arguments;return new Promise(function(s,a){var n=r.apply(e,t);function o(e){u(n,s,a,o,i,"next",e)}function i(e){u(n,s,a,o,i,"throw",e)}o(void 0)})})()}
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.

**Helpers called from the body** (each is a different webpack module):

- `(0, l.Z8)(...)` (module `880797`)
- `(0, l.wx)(...)` (module `880797`)
- `(0, i.u1)(...)` (module `370437` — tool-error formatting / sanitised error envelopes)

**What this proves vs. what it doesn't**:

- ⚠️  The handler delegates to one or more helper modules whose internals were not traced in this pass. The actual network endpoint (or absence of one — some tools manipulate local Redux state only) is therefore **not statically verified** from this source. To confirm what each helper does on the wire, see the network-trace follow-up in [genie_code_followups.md](genie_code_followups.md) §1.

