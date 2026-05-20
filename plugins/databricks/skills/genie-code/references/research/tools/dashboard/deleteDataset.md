# Dashboard tool: `deleteDataset`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **13 of 34**.

## What this tool does

> Drop a dataset from the dashboard. Used during automatic cleanup after widget mutations leave orphaned datasets.

## Description (verbatim from wire body)

> Delete an existing dataset from the current dashboard.
> 
> - Use datasetRefName from context to identify the dataset to delete.
> - Always include the dataset displayName so the user knows which dataset is being deleted.
> - Use user-friendly display names in responses, not internal RefNames.
> - Make sure the dataset exists before attempting to delete.
> 

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
    },
    "displayName": {
      "type": "string",
      "minLength": 1,
      "description": "The display name of the dataset being deleted (user-friendly name from context)."
    }
  },
  "required": [
    "datasetRefName",
    "displayName"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `datasetRefName` (string) — Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.
* `displayName` (string) — The display name of the dataset being deleted (user-friendly name from context).

## All properties

### `datasetRefName` **(required)**

Type: `string`.

> Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.

### `displayName` **(required)**

Type: `string`.

> The display name of the dataset being deleted (user-friendly name from context).

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Name constant**: the wire `name` value `"deleteDataset"` is stored in chunk-local constant `ia`; the factory call references it as `name:ia`.

**Handler binding**: the `execute:` arrow points at the local variable `l`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 763 bytes):

```javascript
((t,i,l)=>io(function*(){return a6({toolName:ia,abortSignal:l,context:i},()=>io(function*(){if(!s)return a0("Invalid arguments: Dashboard name is undefined.");let{datasetRefName:i}=t;if(!(0,tl.js)(i))return a0(`Invalid arguments: ${i} is not a valid Dataset RefName.`);let l=(0,tl.W1)(i),d=n().find(e=>e.customerRefId===l);if(!d)return a0(`Dataset "${i}" not found.`);let c=r().filter(e=>e.queries.some(e=>e.query.datasetName===d.name)||e.parameterQueries.some(e=>e.query.datasetName===d.name));if(c.length>0)return a0(`Cannot delete dataset "${i}" because it is used by the following widgets: ${c.map(e=>e.widgetRefName).join(", ")}`);let u=yield e("Dataset deletion",()=>a(i)),m=yield o();return u.success?aK(u.message,m):aX(u.message,m)})())})(),[s,a,o,r,n,e])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, tl.js)(...)` 
- `(0, tl.W1)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/deleteDataset.json`.)_
