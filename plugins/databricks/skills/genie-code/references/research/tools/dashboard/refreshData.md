# Dashboard tool: `refreshData`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **15 of 34**.

## What this tool does

> Re-execute one or more datasets to refresh their query results. The agent must wait for state to settle before reading the data back.

## Description (verbatim from wire body)

> Refresh all the data used to render the dashboard.
> 

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

**Name constant**: the wire `name` value `"refreshData"` is stored in chunk-local constant `rs`; the factory call references it as `name:rs`.

**Handler binding**: the `execute:` arrow points at the local variable `a`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 287 bytes):

```javascript
((a,r,i)=>rc(function*(){return a6({toolName:rs,abortSignal:i,context:r},()=>rc(function*(){let a=()=>{};try{let r=e();i&&(a=()=>r(),i.addEventListener("abort",a));let n=yield t();return aK("Refresh initiated successfully.",n)}finally{i&&i.removeEventListener("abort",a)}})())})(),[t,e])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/refreshData.json`.)_
