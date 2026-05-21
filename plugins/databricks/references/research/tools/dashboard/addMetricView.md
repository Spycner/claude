# Dashboard tool: `addMetricView`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **7 of 34**.

## What this tool does

> Attach an existing Unity Catalog metric view (UC `METRIC VIEW`) to the dashboard as a dataset. Requires `databricks.fe.editor.assistant.metricViews`.

## Description (verbatim from wire body)

> Add a metric view table to the dataset list of the current dashboard. This is equivalent to clicking 'Add data source' and selecting a metric view table.
> 
> - Use this tool when the user wants to use a metric view for the dashboard but it hasn't been added yet.
> - The metricViewName should be a fully qualified name (e.g., 'catalog.schema.metric_view_name'). If unqualified, search first using searchTables.
> - This tool registers the metric view as a dataset so it can be used in widgets.
> - After adding the metric view, it will be available in the dataset list for creating visualizations.
> - NOTE: Custom calculations on metric view datasets can only reference dimensions, not measures. Metric view measures are pre-aggregated and cannot be used in custom calculations.
> - IMPORTANT: Before using this tool, if needed, load 'using-metric-views' skill via readSkillFile to learn how to reference measures and dimensions correctly.
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
    "metricViewName": {
      "type": "string",
      "minLength": 1,
      "description": "The fully qualified name of the metric view to add (e.g., catalog.schema.metric_view_name)"
    }
  },
  "required": [
    "datasetRefName",
    "metricViewName"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `datasetRefName` (string) — Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.
* `metricViewName` (string) — The fully qualified name of the metric view to add (e.g., catalog.schema.metric_view_name)

## All properties

### `datasetRefName` **(required)**

Type: `string`.

> Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.

### `metricViewName` **(required)**

Type: `string`.

> The fully qualified name of the metric view to add (e.g., catalog.schema.metric_view_name)

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Name constant**: the wire `name` value `"addMetricView"` is stored in chunk-local constant `rI`; the factory call references it as `name:rI`.

**Handler binding**: the `execute:` arrow points at the local variable `s`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 606 bytes):

```javascript
((t,i,s)=>rU(function*(){return a6({toolName:rI,abortSignal:s,context:i},()=>rU(function*(){if(!n)return a0("Invalid arguments: Dashboard name is undefined.");let{datasetRefName:i}=t;if(!(0,tl.js)(i))return a0(`Invalid arguments: ${i} is not a valid Dataset RefName.`);let s=(0,tl.W1)(i);if(3!==t.metricViewName.split(".").length)return a0(`Invalid arguments: Metric view name must be fully qualified (catalog.schema.metric_view_name). Got: ${t.metricViewName}`);let o=t.metricViewName,l=yield e("Add metric view",()=>a(o,s)),d=yield r();return l.success?aK(l.message,d):aX(l.message,d)})())})(),[n,a,r,e])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, tl.js)(...)` 
- `(0, tl.W1)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/addMetricView.json`.)_
