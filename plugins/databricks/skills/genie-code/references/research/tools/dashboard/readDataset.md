# Dashboard tool: `readDataset`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **17 of 34**.

## What this tool does

> Read a dataset's SQL or metric-view configuration plus inferred schema.

## Description (verbatim from wire body)

> Read dataset configuration information including query, columns, and metadata.
> Does NOT return dataset data.

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

**Name constant**: the wire `name` value `"readDataset"` is stored in chunk-local constant `iL`; the factory call references it as `name:iL`.

**Handler binding**: the `execute:` arrow points at the local variable `a`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 2467 bytes):

```javascript
((a,r,i)=>iV(function*(){return a6({toolName:iL,abortSignal:i,context:r},()=>iV(function*(){var r;let i,n,s,o,l,d;if(!(0,tl.js)(a.datasetRefName))return a0(`Invalid arguments: ${a.datasetRefName} is not a valid Dataset RefName.`);let c=(0,tl.W1)(a.datasetRefName),u=e(),m=u?.find(e=>e.customerRefId===c);if(!m){let e=u?.map(e=>`datasets/${e.customerRefId} (${e.displayName})`).join(", ")||"None";return a0(`Dataset "${a.datasetRefName}" not found. Available datasets: ${e}`)}let p=yield ih(t,m.name);return aZ((r=a.datasetRefName,i=function(e){let t=!!e.metricViewConfig,a=!!e.assetName,r=!!e.query;if(t)return"Dashboard Local Metric View";if(a&&!r)return"Metric View Dataset";if(!a&&r)return"SQL Dataset";if(a&&r)return`Invalid dataset, both assetName and query are defined: assetName=${e.assetName}, query=${e.query}`;return"Invalid dataset, missing assetName and query. One of the two must be defined, but not both."}(m),n=["Dataset Information:",`Dataset RefName: ${r}`,`Display Name: ${m.displayName||"Not set"}`,`Type: ${i}`],"Dashboard Local Metric View"===i&&n.push(`Metric View Config:
${m.metricViewConfig}`),"Metric View Dataset"===i&&n.push(`Asset: ${m.assetName}`),"SQL Dataset"===i&&n.push(`Query:
${m.query}`),s=function(e){if(!e)return"Schema: Not available";let t=function(e){if(!e)return{status:"not_ready",reason:"not_found",message:"Schema: Not available"};if("loading"===e.status)return{status:"not_ready",reason:"loading",message:"Schema: Loading..."};if("error"===e.status){let t=e.errorMessage||"Unknown error";return{status:"not_ready",reason:"error",message:`Schema: Error loading schema - ${t}`}}return{status:"ready"}}(e);if("ready"!==t.status)return t.message;let a=Array.from(e.schema.values());if(0===a.length)return"Schema (0 columns):\nNone";let r=a.map(e=>{let t=e.isMeasure?" [measure]":"";return`- ${e.name} (${e.type})${t}`}).join("\n");return`Schema (${a.length} columns):
${r}`}(p),o=function(e){let t=e.columns??[];if(0===t.length)return"Custom Calculations (0):\nNone";let a=t.map(e=>{let t=e.description?` - ${e.description}`:"";return`- ${e.displayName}: ${e.expression}${t}`}).join("\n");return`Custom Calculations (${t.length}):
${a}`}(m),l=function(e){let t=e.parameters??[];if(0===t.length)return"Parameters (0):\nNone";let a=t.map(e=>`- ${e.keyword} (${e.dataType}): ${e.displayName}`).join("\n");return`Parameters (${t.length}):
${a}`}(m),(d=[n.join("\n")]).push(s),d.push(o),d.push(l),d.join("\n\n")))})())})(),[e,t])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, tl.js)(...)` 
- `(0, tl.W1)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/readDataset.json`.)_
