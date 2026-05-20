# Dashboard tool: `getVizTypeDefinition`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **6 of 34**.

## What this tool does

> Read-only lookup. Returns the JSON Schema for a visualization type (e.g. `bar`, `line`, `pivot`) so the agent can populate `editWidgetsV2` correctly.

## Description (verbatim from wire body)

> Look up the JSON Schema for a render widget type (RenderWidgetSpec fragments) or the QuerySpec schema.
> 
> - Returns a dictionary keyed by definition name.
> - Includes the directly requested definition plus nested definitions.
> - Use this before filling render.renderSpec in editWidgetsV2 raw-viz payloads.
> - Pass "QuerySpec" as typeName to get the full query schema (datasetName, fields, filters, orderBys, disaggregatedData, etc.) for render.queries[].query and render.parameterQueries[].query.
> - If you need schemas for multiple widget types, call this tool once per type in parallel.
> - Available widget types: area, bar, box, choropleth-map, combo, counter, custom-vega-viz, filter-date-picker, filter-date-range-picker, filter-multi-select, filter-single-select, filter-text-entry, forecast-line, funnel, heatmap, histogram, line, pie, pivot, range-slider, sankey, scatter, symbol-map, table, waterfall.
> 
> IMPORTANT — before writing a widget spec:
> - Never assume the JSON type of an unresolved $ref. A $ref body is unknown until you see its own `type`/`oneOf`/`properties` fields in a returned definition. Do NOT assume a $ref resolves to a primitive (number, string, boolean) just because the surrounding property name sounds scalar — most leaf wrappers in this schema are tagged objects with a discriminator. Always re-call this tool with the $ref key before writing the property.
> - Only use properties that appear in the returned definitions. Do NOT invent properties (like fieldName on filters) that are not in the schema.
> - Check additionalProperties: false — if set, only the listed properties are allowed.
> 

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "typeName": {
      "type": "string",
      "description": "Widget type name (for example: bar, combo, table), or \"QuerySpec\" to get the query schema."
    },
    "refs": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional list of $ref keys to resolve in parallel (e.g. [\"CellFormatType\", \"DecimalPlaces\", \"Operand\"]). Pass the exact $ref key strings you saw in a previous discovery (no-refs) call. Pass all needed refs in one call. Omit (or pass an empty array) for the discovery call."
    }
  },
  "required": [
    "typeName"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `typeName` (string) — Widget type name (for example: bar, combo, table), or "QuerySpec" to get the query schema.

## All properties

### `typeName` **(required)**

Type: `string`.

> Widget type name (for example: bar, combo, table), or "QuerySpec" to get the query schema.

### `refs`

Type: `array`.

> Optional list of $ref keys to resolve in parallel (e.g. ["CellFormatType", "DecimalPlaces", "Operand"]). Pass the exact $ref key strings you saw in a previous discovery (no-refs) call. Pass all needed refs in one call. Omit (or pass an empty array) for the discovery call.

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Inline `execute` arrow** (verbatim, minified — 1145 bytes):

```javascript
e=>{var t;return(t=function*(){return aZ(function({typeName:e,refs:t}){if("QuerySpec"===e)return JSON.stringify({definitions:{QuerySpec:ss}});if(t&&t.length>0)return JSON.stringify({widgetType:e,refs:t.map(e=>({ref:e,...sw(e)}))});let a=sw(e);if("error"in a)return JSON.stringify(a);return JSON.stringify({definitions:function(e,t=1e3,a=1e4){let r={...e},i=new Set(Object.keys(r)),n=0,s=!0;for(;s&&n<a;){s=!1;let e=new Set;for(let t of Object.values(r))for(let[a]of sg(t))i.has(a)||!sd[a]||sy(sd[a])||e.add(a);let o=[];for(let a of e){let e=sh(a,999),r=[],n=0;for(let[t,a]of Object.entries(e))i.has(t)||(r.push([t,a]),n+=JSON.stringify(a).length+t.length+5);let s=Math.ceil(n/4);s>0&&s<=t&&o.push({newEntries:r,tokens:s})}for(let{newEntries:e,tokens:t}of(o.sort((e,t)=>e.tokens-t.tokens),o)){if(n+t>a)continue;let o=0;for(let[t,a]of e)i.has(t)||(r[t]=a,i.add(t),o+=Math.ceil((JSON.stringify(a).length+t.length+5)/4));o>0&&(n+=o,s=!0)}}return r}(a.definitions)})}(e))},function(){var e=this,a=arguments;return new Promise(function(r,i){var n=t.apply(e,a);function s(e){sx(n,r,i,s,o,"next",e)}function o(e){sx(n,r,i,s,o,"throw",e)}s(void 0)})})()}
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/getVizTypeDefinition.json`.)_
