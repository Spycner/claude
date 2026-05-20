# Dashboard tool: `updateLocalMetricViewDataset`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **11 of 34**.

## What this tool does

> Edit a DLMV's YAML config in place.

## Description (verbatim from wire body)

> Update an existing dashboard local metric view dataset's YAML configuration.
> 
> Use this tool to modify the metric view YAML definition of an existing DLMV dataset.
> Use datasetRefName from context to identify the dataset.
> Always include the dataset displayName so the user knows which dataset is being updated.
> 
> CRITICAL RESTRICTIONS:
> - Do not remove or modify existing comments in the YAML content
> - Never send partial YAML; always provide a complete metric view definition
> - When creating new dimensions and measures (only when explicitly requested), use the provided table information
> - Follow YAML syntax and escaping rules for columns with spaces
> 
> Load the 'using-metric-views' skill via `readSkillFile` for YAML syntax reference.
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
      "description": "The display name of the dataset being updated (user-friendly name from context)."
    },
    "metricViewYaml": {
      "type": "string",
      "minLength": 1,
      "description": "Complete metric view YAML definition. Must include version, source, dimensions, and measures."
    }
  },
  "required": [
    "datasetRefName",
    "displayName",
    "metricViewYaml"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `datasetRefName` (string) — Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.
* `displayName` (string) — The display name of the dataset being updated (user-friendly name from context).
* `metricViewYaml` (string) — Complete metric view YAML definition. Must include version, source, dimensions, and measures.

## All properties

### `datasetRefName` **(required)**

Type: `string`.

> Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.

### `displayName` **(required)**

Type: `string`.

> The display name of the dataset being updated (user-friendly name from context).

### `metricViewYaml` **(required)**

Type: `string`.

> Complete metric view YAML definition. Must include version, source, dimensions, and measures.

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Name constant**: the wire `name` value `"updateLocalMetricViewDataset"` is stored in chunk-local constant `rZ`; the factory call references it as `name:rZ`.

**Handler binding**: the `execute:` arrow points at the local variable `l`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 729 bytes):

```javascript
((t,i,l)=>iG(function*(){return a6({toolName:rZ,abortSignal:l,context:i},()=>iG(function*(){if(!o)return a0("Invalid arguments: Dashboard name is undefined.");let{datasetRefName:i}=t;if(!(0,tl.js)(i))return a0(`Invalid arguments: ${i} is not a valid Dataset RefName.`);let l=i.split("/")[1],d=n().find(e=>e.customerRefId===l);if(!d?.metricViewConfig)return a0("Dataset is not a local metric view dataset (missing metricViewConfig). Use updateDatasetFromSQL for SQL datasets.");let c=yield r7(t.metricViewYaml,r,d.catalog);if(c)return a0(c);let u=yield e("Update local metric view dataset",()=>a(i,e=>({...e,metricViewConfig:t.metricViewYaml}))),m=yield s();return u.success?aK(u.message,m):aX(u.message,m)})())})(),[o,a,r,s,e,n])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, tl.js)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/updateLocalMetricViewDataset.json`.)_
