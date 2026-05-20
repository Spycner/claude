# Dashboard tool: `readDatasetData`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **16 of 34**.

## What this tool does

> Sample rows from a dashboard dataset's most recent execution result.

## Description (verbatim from wire body)

> Fetches latest cached sample data for a given dataset. Does not return all the data for performance reasons.
> If readDatasetData returns an error (dataset not found, still loading, or stale data from a re-run), do NOT call it again immediately or in a loop. Perform a different action first, then try once more if still needed. Repeated calls in a loop will not resolve the issue faster.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "datasetRefName": {
      "type": "string",
      "minLength": 1,
      "pattern": "^datasets/[a-zA-Z0-9_]+$",
      "description": "Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores."
    }
  },
  "required": [
    "datasetRefName"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `datasetRefName` (string) — Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.

## All properties

### `datasetRefName` **(required)**

Type: `string`.

> Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Name constant**: the wire `name` value `"readDatasetData"` is stored in chunk-local constant `iA`; the factory call references it as `name:iA`.

**Handler binding**: the `execute:` arrow points at the local variable `a`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 3154 bytes):

```javascript
((a,r,i)=>iP(function*(){return a6({toolName:iA,abortSignal:i,context:r},()=>iP(function*(){if(!(0,tl.js)(a.datasetRefName))return a0(`Invalid arguments: ${a.datasetRefName} is not a valid Dataset RefName.`);let r=yield function(e,t,a,r){var i;return(i=function*(e,t,a,{maxPolls:r=15,pollDelayMs:i=1e3}={},n){for(let s=0;s<=r;s++){let o=function(e,t,a){let r=t.find(t=>t.datasetRefName===e);if(!r){let t=(0,tl.W1)(e);if(!a?.find(e=>e.customerRefId===t)){let t=a?.map(e=>`datasets/${e.customerRefId} (${e.displayName})`).join(", ")||"None";return{status:"not_ready",reason:"not_found",message:`Dataset "${e}" not found. Available datasets: ${t}`}}return{status:"not_ready",reason:"loading",message:`Dataset "${e}" was just created or updated; results are not available yet. Do NOT retry immediately — perform a different action first, then try once more if still needed.`}}if("loading"===r.state)return{status:"not_ready",reason:"loading",message:`Dataset "${e}" query is still running. Do NOT retry immediately — perform a different action first, then try once more if still needed.`};if("error"===r.state){let t=r.error?"string"==typeof r.error?r.error:r.error?.message||JSON.stringify(r.error):"Unknown error";return{status:"not_ready",reason:"error",message:`Error loading dataset "${e}": ${t}`}}if(r.data?.type==="error"){let t=r.data.error?.message||"Unknown SQL execution error";return{status:"not_ready",reason:"error",message:`SQL execution error in dataset "${e}": ${t}`}}if(r.data?.type!=="success")return{status:"not_ready",reason:"error",message:`Dataset "${e}" has no data available`};return{status:"ready"}}(e,t(),a());if("ready"===o.status||"not_ready"===o.status&&"loading"!==o.reason)return o;if(s<r){if(n?.aborted)return o;yield new Promise(e=>setTimeout(e,i))}}return{status:"not_ready",reason:"loading",message:`Timed out waiting for dataset "${e}" to finish loading (polled ${r} times). The query may still be executing.`}},function(){var e=this,t=arguments;return new Promise(function(a,r){var n=i.apply(e,t);function s(e){iS(n,a,r,s,o,"next",e)}function o(e){iS(n,a,r,s,o,"throw",e)}s(void 0)})}).apply(this,arguments)}(a.datasetRefName,e,t,void 0,i);if("ready"!==r.status)return a0(r.message);let n=e().find(e=>e.datasetRefName===a.datasetRefName);if(!n||"loaded"!==n.state||n.data?.type!=="success")return a0(`Dataset "${a.datasetRefName}" has no data available`);let s=n.data.queryStatementIdForQueryHistory;return aZ(function(e,t){let a=e.rows||[],r=e.columns||[];if(!r.length)return"No columns in dataset.";let i=r.map(e=>iI(e.name)),n=`| ${i.join(" | ")} |`,s=`| ${i.map(()=>"---").join(" | ")} |`,o=[n,s],l=n.length+s.length+2;for(let e=0;e<a.length&&e<100;e++){let t=a[e],i=r.map(e=>iI(function(e){if(null==e)return"";if("object"==typeof e)try{return JSON.stringify(e)}catch{}return String(e)}(t[e.name]))),n=`| ${i.join(" | ")} |`;if((l+=n.length+1)>6e4){o.push("| ...truncated... |");break}o.push(n)}return a.length>100&&o.push(`
_Truncated to first 100 rows out of $
…[truncated]
```

_(body truncated at 3,000 chars; full 3154-byte source is in `../../extraction/data/dashboard-tool-handlers.json` under `readDatasetData.body_callback`.)_

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, tl.js)(...)` 
- `(0, tl.W1)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/readDatasetData.json`.)_
