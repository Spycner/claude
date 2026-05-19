# Genie Code tool: `querySearch`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [payload.md](../../overview/payload.md) for the full request envelope and [findings.md](../../overview/findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **8 of 18**.

## Description

> Preferred tool to search for queries in the current workspace and provide their definition. When you use this tool, you should format your question/sentence as a how-to question and also provide specific keywords that match query names or content.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "sentence": {
      "type": "string",
      "description": "A how to question of what to look for. Be specific about the data characteristics, relationships, or business purpose. Example: \"how to map user id to pseudo user id\".",
      "minLength": 1
    },
    "keywords": {
      "type": "string",
      "description": "Specific keywords that match query names or content. Example: \"user_id pseudo_user_id mapping\".",
      "minLength": 1
    },
    "tablesToFilterOn": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Required table name array to filter on to scope down the search. Each value MUST be a fully qualified table name in the form <catalog>.<schema>.<table_name> — partial names, unqualified names, or any other format WILL CAUSE THE SEARCH TO FAIL. If not provided, use the tableSearch tool to gather relevant tables to provide as an argument here to improve the search accuracy. Only provide an empty array here if a preliminary table search was run and did not yield any relevant table names."
    }
  },
  "required": [
    "sentence",
    "keywords",
    "tablesToFilterOn"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `sentence` (string) — A how to question of what to look for. Be specific about the data characteristics, relationships, or business purpose. Example: "how to map user id to pseudo user id".
* `keywords` (string) — Specific keywords that match query names or content. Example: "user_id pseudo_user_id mapping".
* `tablesToFilterOn` (array) — Required table name array to filter on to scope down the search. Each value MUST be a fully qualified table name in the form <catalog>.<schema>.<table_name> — partial names, unqualified names, or any other format WILL CAUSE THE SEARCH TO FAIL. If not provided, use the tableSearch tool to gather relevant tables to provide as an argument here to improve the search accuracy. Only provide an empty array here if a preliminary table search was run and did not yield any relevant table names.

## All properties

### `sentence` **(required)**

Type: `string`.

> A how to question of what to look for. Be specific about the data characteristics, relationships, or business purpose. Example: "how to map user id to pseudo user id".

### `keywords` **(required)**

Type: `string`.

> Specific keywords that match query names or content. Example: "user_id pseudo_user_id mapping".

### `tablesToFilterOn` **(required)**

Type: `array`.

> Required table name array to filter on to scope down the search. Each value MUST be a fully qualified table name in the form <catalog>.<schema>.<table_name> — partial names, unqualified names, or any other format WILL CAUSE THE SEARCH TO FAIL. If not provided, use the tableSearch tool to gather relevant tables to provide as an argument here to improve the search accuracy. Only provide an empty array here if a preliminary table search was run and did not yield any relevant table names.

## Handler notes

Extracted from webpack module `701838` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
t
```

**Execute body** (verbatim, minified — webpack module `701838`, 3228 bytes):

```javascript
E(function*(){try{var r;for(let e of t.tablesToFilterOn){let t=e.split(".");if(3!==t.length||t.some(e=>""===e.trim()))return{success:!1,error:{message:`Invalid table name format: "${e}". Expected format: <catalog>.<schema>.<table>`}}}let s=()=>E(function*(){let r=yield(0,T.Sh)(e,{query:t.keywords,filters:{resultTypes:[d.iId.QUERY]},pageSize:5}).catch(()=>null);if(!r)return null;let s=(r.results||[]).slice(0,5).map(e=>({code:e.highlighting?.codeFragments?.[0]?.content||"",description:e.description||"",name:e.name||"",id:e.id||void 0,type:e.resultType||void 0,hashed_code:""}));return{success:!0,data:`${s.map((e,t)=>(0,I.X)(e,t)).join("\n\n")}`,codeSnippets:s}})();if(!(0,c.W)("databricks.fe.assistant.enableAgentCodeSearch",!1))return(yield s())??{success:!1,error:{message:"Keyword search failed"}};let a=s(),o=yield(0,y.w)((r={query:t.sentence,maxResults:5,aclOverfetchMultiplier:10,tablesToFilterOn:t.tablesToFilterOn},v(function*(){if(!e)throw Error("Apollo client is required when GraphQL implementation is enabled");return v(function*(){try{let t=function(e){if(!e||0===e.length)return;let t=e.map(e=>e?.trim()).filter(e=>void 0!==e&&""!==e).map(e=>`code LIKE "%${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}%"`);return t.length>0?t.join(" OR "):void 0}(r.tablesToFilterOn),s=(0,c.W)("databricks.fe.assistant.backupAgentCodeSearchIndex","agent-code-index");"agent-code-index"!==s?p.iT.sev2BurnRate(n.Es.AppliedAIAppPlatform,"Using code search emergency index name. Please revert once emergency is resolved",m.i1.P999,m.Ip.Min0,!1,"Using backup index for code search"):p.iT.sev2BurnRate(n.Es.AppliedAIAppPlatform,"Using code search emergency index name. Please revert once emergency is resolved",m.i1.P999,m.Ip.Min0,!0,"Using main index for code search");let a=e.query({query:w,variables:{indexName:s,queryText:r.query||"",...void 0!==t?{filter:t}:{},vectorField:"embedding",fields:_,numResults:r.maxResults,pageSize:r.maxResults,options:{aclOverfetchMultiplier:r.aclOverfetchMultiplier,includeScores:!0}},errorPolicy:"all"}),{data:o,errors:i}=yield(0,y.w)(a,3e4,"Code search request timed out"),l=(0,g.s)(o,i);if(!l.isValid)return k(!1,l.errorMessage??""),{results:[],error:l.errorMessage
…[truncated]
```

_(body truncated at 2,200 chars; full 3228-byte source is in `../../extraction/data/tool-handlers.json` under `querySearch.body` and the captured factory in `../../extraction/data/tool-factories.json`.)_

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.
- Feature flags read during execution:
    - `databricks.fe.assistant.backupAgentCodeSearchIndex`
    - `databricks.fe.assistant.enableAgentCodeSearch`

**Helpers called from the body** (each is a different webpack module):

- `(0, T.Sh)(...)` (module `257972`)
- `(0, I.X)(...)` (module `171066`)
- `(0, c.W)(...)` (module `441535` — feature-flag reader — `W(flag, default)` reads workspace feature flags)
- `(0, y.w)(...)` (module `379566`)
- `(0, g.s)(...)` (module `453806`)
- `(0, l.u1)(...)` (module `370437` — tool-error formatting / sanitised error envelopes)

**What this proves vs. what it doesn't**:

- ⚠️  The handler delegates to one or more helper modules whose internals were not traced in this pass. The actual network endpoint (or absence of one — some tools manipulate local Redux state only) is therefore **not statically verified** from this source. To confirm what each helper does on the wire, see the network-trace follow-up in [followups.md](../../overview/followups.md) §1.

## Verified network behaviour

Captured 2026-05-19 by patching `window.fetch` + `XMLHttpRequest` on the SPA and triggering the prompt below. Full request log (with bodies) is in [../../traces/querySearch.json](../../traces/querySearch.json).

**Trigger prompt:** `find saved SQL queries about lego`

**Endpoints fired (excluding agent-housekeeping common to every turn):**

- `POST /graphql/UnifiedAssetSearch`
- `POST /graphql/VectorSearchForCodeSearch`

Two GraphQL calls per invocation: `UnifiedAssetSearch` does the keyword/structured pass over saved queries; `VectorSearchForCodeSearch` runs the vector-similarity pass over query text. Results are merged on the SPA side before being handed back to the model.
