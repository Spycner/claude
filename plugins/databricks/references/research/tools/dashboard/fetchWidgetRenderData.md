# Dashboard tool: `fetchWidgetRenderData`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **18 of 34**.

## What this tool does

> Render a widget and return its JSON output (optionally a PNG). Mandatory after every `editWidgetsV2` to verify the rendered widget matches intent.

## Description (verbatim from wire body)

> Fetch render data or a screenshot for a widget.
> 
> - **format='json'**: Query result data (columns + rows). Always available.
> - **format='png'**: Widget screenshot. Only works when the target widget's page has `isActivePage: true` and `activeView === 'PAGE'`; otherwise it fails with a "could not locate widget element" error that reflects this UI limitation, not a widget bug — do not retry, do not treat as verification failure.
> - **format='png_and_json'**: Both at once. Same active-view requirement as `'png'`.
> 
> **Choosing format**: Prefer `'png_and_json'` when the widget's page is the active view (PNG catches visual issues JSON can't). Otherwise use `'json'`.
> 
> **Common errors to detect in render data:**
> - SQL execution failures (syntax errors, missing columns)
> - Empty result sets (0 rows, all NULLs)
> - Render errors (visualization fails to display)
> - CROSS JOIN creating meaningless correlations
> - Incorrect aggregations or filters
> 
> - Use widgetRefName from Dashboard Configuration to identify widgets.
> 

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "widgetRefName": {
      "type": "string",
      "minLength": 1,
      "pattern": "^pages/\\w+/widgets/\\w+$",
      "description": "Widget reference in format: pages/<page_ref_id>/widgets/<widget_ref_id>. Example: pages/abc123/widgets/xyz789"
    },
    "format": {
      "type": "string",
      "description": "The format to use for data used to render widget.",
      "enum": [
        "json",
        "png",
        "png_and_json"
      ]
    }
  },
  "required": [
    "widgetRefName",
    "format"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `widgetRefName` (string) — Widget reference in format: pages/<page_ref_id>/widgets/<widget_ref_id>. Example: pages/abc123/widgets/xyz789
* `format` (string) — The format to use for data used to render widget.

## All properties

### `widgetRefName` **(required)**

Type: `string`.

> Widget reference in format: pages/<page_ref_id>/widgets/<widget_ref_id>. Example: pages/abc123/widgets/xyz789

### `format` **(required)**

Type: `string`. enum: 'json', 'png', 'png_and_json'

> The format to use for data used to render widget.

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Name constant**: the wire `name` value `"fetchWidgetRenderData"` is stored in chunk-local constant `n4`; the factory call references it as `name:n4`.

**Handler binding**: the `execute:` arrow points at the local variable `r`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 1198 bytes):

```javascript
((r,i,n)=>se(function*(){return a6({toolName:n4,abortSignal:n,context:i},()=>se(function*(){if(!(0,tl.d8)(r.widgetRefName))return a0(`Invalid widget RefName: ${r.widgetRefName}`);if("json"===r.format){let e=yield t(r.widgetRefName);return a?aZ({data:e}):aZ(JSON.stringify({data:e}))}if("png_and_json"===r.format){let[i,n]=yield Promise.allSettled([e(r.widgetRefName),t(r.widgetRefName)]),s="fulfilled"===i.status?i.value:void 0,o="fulfilled"===n.status?n.value:void 0,l=[];if("rejected"===i.status&&l.push(`Image fetch failed: ${i.reason?.message??i.reason}`),"rejected"===n.status&&l.push(`Data fetch failed: ${n.reason?.message??n.reason}`),!s&&!o)return a0(`No data available for widget: ${r.widgetRefName}. ${l.join(". ")}`);return{success:!0,data:o?a?JSON.stringify(o):JSON.stringify({data:o}):void 0,...s?{images:[{message:`widget_${r.widgetRefName.replace(/\//g,"_")}.png`,content:s}]}:{},...l.length>0?{error:{message:l.join(". ")}}:{}}}let i=yield e(r.widgetRefName);if(!i)return a0(`No image data found for widget: ${r.widgetRefName}`);return{success:!0,data:"Widget Render Image Data URL",images:[{message:`widget_${r.widgetRefName.replace(/\//g,"_")}.png`,content:i}]}})())})(),[t,e,a])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, tl.d8)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/fetchWidgetRenderData.json`.)_
