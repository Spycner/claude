# Dashboard tool: `renameDashboard`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **1 of 34**.

## What this tool does

> Update the dashboard's display name. Used early in a session to retitle default-named dashboards ("New Dashboard 202…") once the agent understands the data.

## Description (verbatim from wire body)

> Rename the dashboard title.
> 
> - Use this to rename the dashboard.
> 

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "displayName": {
      "type": "string",
      "minLength": 1,
      "description": "The new title for the dashboard"
    }
  },
  "required": [
    "displayName"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `displayName` (string) — The new title for the dashboard

## All properties

### `displayName` **(required)**

Type: `string`.

> The new title for the dashboard

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Name constant**: the wire `name` value `"renameDashboard"` is stored in chunk-local constant `rm`; the factory call references it as `name:rm`.

**Handler binding**: the `execute:` arrow points at the local variable `s`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 436 bytes):

```javascript
((t,i,s)=>ry(function*(){return a6({toolName:rm,abortSignal:s,context:i},()=>ry(function*(){if(!n)return a0("Invalid arguments: Dashboard name is undefined.");let i=yield e("Rename Dashboard",()=>a(e=>{let a=e.displayName?.match(/ (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})$/)?.[1],r=t.displayName;return a&&!r.includes(a)&&(r+=` ${a}`),{...e,displayName:r}})),s=yield r();return i.success?aK(i.message,s):aX(i.message,s)})())})(),[n,r,a,e])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/renameDashboard.json`.)_
