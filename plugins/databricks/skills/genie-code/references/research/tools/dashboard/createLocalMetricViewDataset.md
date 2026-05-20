# Dashboard tool: `createLocalMetricViewDataset`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **10 of 34**.

## What this tool does

> **The default dataset creator**. Creates a Dashboard-Local Metric View (DLMV): a per-widget metric view with YAML config, isolated from sibling widgets.

## Description (verbatim from wire body)

> Create a new dashboard local metric view dataset with a YAML configuration.
> 
> **WHEN TO USE THIS TOOL:**
> - User asks for metric-view-based analysis without naming a specific Unity Catalog metric view
> - User says "create a metric view" or "find or create a metric view"
> - User requests reusable metrics with dimensions and measures
> 
> **WHEN NOT TO USE THIS TOOL:**
> - User explicitly requests raw SQL or one-off queries (use createDatasetFromSQL)
> 
> **WORKFLOW:**
> 1. Load 'using-metric-views' skill via readSkillFile for YAML syntax
> 2. Determine source type (base table OR existing metric view) - see system instructions for details
> 3. Define dimensions (raw columns like region, product_category)
> 4. Define measures (aggregations like SUM(revenue), COUNT(*))
> 5. For composed measures: Use MEASURE() to reference OTHER measures in the SAME definition
> 6. Create the DLMV with this tool
> 
> **IMPORTANT**: For detailed guidance on creating DLMV from base table vs existing metric view, MEASURE() usage rules in YAML, and examples, see the system instructions in the Metric Views section.
> 
> Use this tool to create a new dataset that uses a metric view YAML definition instead of SQL.
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
      "description": "The display name for the dataset (user-friendly name)."
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
* `displayName` (string) — The display name for the dataset (user-friendly name).
* `metricViewYaml` (string) — Complete metric view YAML definition. Must include version, source, dimensions, and measures.

## All properties

### `datasetRefName` **(required)**

Type: `string`.

> Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.

### `displayName` **(required)**

Type: `string`.

> The display name for the dataset (user-friendly name).

### `metricViewYaml` **(required)**

Type: `string`.

> Complete metric view YAML definition. Must include version, source, dimensions, and measures.

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Name constant**: the wire `name` value `"createLocalMetricViewDataset"` is stored in chunk-local constant `rJ`; the factory call references it as `name:rJ`.

**Handler binding**: the `execute:` arrow points at the local variable `l`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 740 bytes):

```javascript
((t,i,l)=>ie(function*(){return a6({toolName:rJ,abortSignal:l,context:i},()=>ie(function*(){if(!o)return a0("Invalid arguments: Dashboard name is undefined.");let{datasetRefName:i}=t;if(!(0,tl.js)(i))return a0(`Invalid arguments: ${i} is not a valid Dataset RefName.`);let l=(0,tl.W1)(i),d=yield(0,r8.P)(t.metricViewYaml),c=yield r7(t.metricViewYaml,r,d);if(c)return a0(c);let u=yield ie(function*(){if(!(0,tN.Xj)()||void 0===d)return;let e=yield n();return e===rB.UQ||e===rB.IM?d:void 0})(),m=yield e("Create local metric view dataset",()=>a(()=>({displayName:t.displayName,metricViewConfig:t.metricViewYaml,customerRefId:l,...void 0!==u&&{catalog:u}}))),p=yield s();return m.success?aK(m.message,p):aX(m.message,p)})())})(),[o,a,r,s,e,n])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, tl.js)(...)` 
- `(0, tl.W1)(...)` 
- `(0, r8.P)(...)` 
- `(0, tN.Xj)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/createLocalMetricViewDataset.json`.)_
