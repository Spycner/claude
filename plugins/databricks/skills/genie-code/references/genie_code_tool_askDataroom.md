# Genie Code tool: `askDataroom`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [genie_code_payload.md](genie_code_payload.md) for the full request envelope and [genie_code_findings.md](genie_code_findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **2 of 18**.

## Description

> Ask a natural-language question to a specific Genie space and get AI-generated analysis. Genie will automatically generate and execute SQL queries, create visualizations, and provide insights based on the approved tables and business definitions in that space.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "question": {
      "type": "string",
      "description": "The question that Genie should try to answer."
    },
    "dataroomId": {
      "type": "string",
      "description": "The short ID or UUID of the Genie data room to query."
    }
  },
  "required": [
    "question",
    "dataroomId"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `question` (string) — The question that Genie should try to answer.
* `dataroomId` (string) — The short ID or UUID of the Genie data room to query.

## All properties

### `question` **(required)**

Type: `string`.

> The question that Genie should try to answer.

### `dataroomId` **(required)**

Type: `string`.

> The short ID or UUID of the Genie data room to query.

## Handler notes

Extracted from webpack module `727277` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({question:s,dataroomId:a},n)
```

**Execute body** (verbatim, minified — webpack module `727277`, 2578 bytes):

```javascript
{var u;return(u=function*(){try{var u,p;let g={title:s.trim(),model:"SMART_AI",visibility:"PRIVATE"},b=(yield(0,o.cK)(e,a,g)).id,v=yield r.buildClientContext?.({question:s,dataroomId:a},n),w={content:s.trim(),...v?{client_context:v}:{}},k=(yield(0,i._z)(e,a,b,w)).id,_=yield(u={axios:e,dataRoomId:a,conversationId:b,messageId:k,queryClient:t},m(function*(){let{axios:e,dataRoomId:t,conversationId:r,messageId:s,maxAttempts:a=60,intervalMs:n=5e3,queryClient:o}=u;for(let l=0;l<a;l++)try{let a=yield o.fetchQuery({queryKey:["lakeAgent","genieMessage",t,r,s],queryFn:()=>(function(e,t,r,s){return m(function*(){return(0,i.A_)(e,t,r,s)})()})(e,t,r,s)});if(((0,c.VI)(a)&c.l9.MESSAGE)!==c.l9.MESSAGE)return a;yield new Promise(e=>setTimeout(e,n))}catch(e){if(l===a-1)throw e}return null})());if(!_)return JSON.stringify({success:!1,error:'Failed to get final response for question"'});let I=yield t.fetchQuery({queryKey:(p=_.id,["lakeAgent","genieResultSets",a,b,p]),queryFn:()=>y(function*(){let t={},r=(0,l.Bv)(_);return yield Promise.all(r.map(r=>y(function*(){if(!r.query)return;try{let s=yield(0,f.bW)(a,b,_.id,r.query.id,e);if(s?.statement_response){let e=(0,f.ZO)(s.statement_response);if(e){let s=r.query.cached_query_schema?(0,h.a)(e,r.query.cached_query_schema.columns):e;t[r.query.id]=s}}}catch(e){}})())),t})()});if(_.error){let e={success:!1,error:_.error.error||"An error occurred while processing the question"};return JSON.stringify(e)}let T=(0,l.Bv)(_);if(0===T.length){let e={success:!1,error:`No results found for question: "${s}". The AI assistant may not have generated any SQL query or results.`};return JSON.stringify(e)}let S={dataroomId:_.data_room_id,conversationId:_.conversation_id,messageId:_.id,attachmentPreviews:_.attachments?.map(e=>{var t,r,s;let a,n;return t=e,r=I,n=(a=t.query?.id)?r[a]:void 0,{query:t.query?{id:a??"",queryText:t.query.query??"",resultSetPreview:n?{rows:(s=n).rows.slice(0,100),columns:s.columns}:void 0,rowCount:n?.rows.length??0}:void 0,viz:t.viz?{id:t.viz.id??"",type:t.viz.type}:void 0,text:t.text?{id:t.text.id??"",content:d()(t.text.content??"",{length:5e3})}:void 0,final_summary:t.final_summary?{id:t.final_summary.id??"",result_summary:d()(t.f
…[truncated]
```

_(body truncated at 2,200 chars; full 2578-byte source is in `.workbench/tool_handlers.json` under `askDataroom.body` and the captured factory in `.workbench/tool_factories.json`.)_

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.

**Helpers called from the body** (each is a different webpack module):

- `(0, o.cK)(...)` (module `143906`)
- `(0, i._z)(...)` (module `148560`)
- `(0, i.A_)(...)` (module `148560`)
- `(0, c.VI)(...)` (module `18910`)
- `(0, l.Bv)(...)` (module `310338`)
- `(0, f.bW)(...)` (module `962751`)
- `(0, f.ZO)(...)` (module `962751`)
- `(0, h.a)(...)` (module `490320`)

**What this proves vs. what it doesn't**:

- ⚠️  The handler delegates to one or more helper modules whose internals were not traced in this pass. The actual network endpoint (or absence of one — some tools manipulate local Redux state only) is therefore **not statically verified** from this source. To confirm what each helper does on the wire, see the network-trace follow-up in [genie_code_followups.md](genie_code_followups.md) §1.

