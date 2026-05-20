# Dashboard tool: `getDashboardConfig`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **14 of 34**.

## What this tool does

> Re-read the live dashboard state (pages, widgets, datasets, layout, theme, publish status). Called only when the snapshot in context is suspected stale.

## Description (verbatim from wire body)

> Re-read the current dashboard configuration (pages, widgets, datasets, layout, theme, publish status). Use this when the dashboard may be stale — for example, after a tool edit returned an unexpected result, when the user changed something manually, or when multiple edits may have caused the config you have in context to drift from the live state. Do NOT call this routinely; the dashboard configuration is usually provided at the start of each turn and after mutation tool calls.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {},
  "required": [],
  "additionalProperties": false
}
```

## Required parameters

None — the tool can be invoked with an empty object.

## All properties

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Name constant**: the wire `name` value `"getDashboardConfig"` is stored in chunk-local constant `aY`; the factory call references it as `name:aY`.

**Handler binding**: the `execute:` arrow points at the local variable `t`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 242 bytes):

```javascript
((t,a,r)=>a7(function*(){return a6({toolName:aY,abortSignal:r,context:a},()=>a7(function*(){let t=yield e();return aZ((0,c.W)("databricks.fe.lakeview.minifyDashboardConfigInPrompt",!0)?JSON.stringify(t):JSON.stringify(t,null,2))})())})(),[e])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.
- Feature flags read during execution:
    - `databricks.fe.lakeview.minifyDashboardConfigInPrompt`

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, c.W)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/getDashboardConfig.json`.)_
