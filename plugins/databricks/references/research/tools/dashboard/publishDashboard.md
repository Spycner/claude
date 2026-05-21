# Dashboard tool: `publishDashboard`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **3 of 34**.

## What this tool does

> Publish the draft to a shareable URL. Carries `embedCredentials` to switch between Run-as-owner / Run-as-viewer.

## Description (verbatim from wire body)

> Publish the dashboard to make it viewable by others.
> 
> Parameters:
> - embedCredentials: Choose credential mode:
>   - true: "Shared data permission" - Published dashboard viewers use your permission to run queries
>   - false: "Viewer's own permission" - Each viewer uses their own permission to run queries
> 
> Returns:
> - publishedUrl: The URL to view the published dashboard - ALWAYS share this URL with the user in your response
> 
> Important:
> - Publishing makes the dashboard permanently accessible via a public URL
> - After publishing, ALWAYS include the publishedUrl in your response so users can access it

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "embedCredentials": {
      "type": "boolean",
      "description": "true = shared data permission (viewers use your permission to run queries), false = viewer's own permission (each viewer uses their own permission)"
    }
  },
  "required": [
    "embedCredentials"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `embedCredentials` (boolean) — true = shared data permission (viewers use your permission to run queries), false = viewer's own permission (each viewer uses their own permission)

## All properties

### `embedCredentials` **(required)**

Type: `boolean`.

> true = shared data permission (viewers use your permission to run queries), false = viewer's own permission (each viewer uses their own permission)

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Name constant**: the wire `name` value `"publishDashboard"` is stored in chunk-local constant `a9`; the factory call references it as `name:a9`.

**Handler binding**: the `execute:` arrow points at the local variable `a`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 731 bytes):

```javascript
((a,r,i)=>ri(function*(){return a6({toolName:a9,abortSignal:i,context:r},()=>ri(function*(){let r=(0,ra.dF)("publishDashboard"),i=r?.embedCredentials!==void 0?r.embedCredentials:a.embedCredentials,n=yield e(i),s=i?"shared":"viewer",o=i?"shared data permission - viewers use the owner's credentials to access data":"viewer's own permission - each viewer uses their own credentials to access data",l=yield t();return aK(JSON.stringify({message:"Dashboard published successfully.",credentialMode:s,credentialModeUsed:o,userOverrideApplied:void 0!==r,revisionId:n.revisionId,publishedUrl:n.publishedUrl,importantNote:`ALWAYS share this link with the user: ${n.publishedUrl}. The dashboard was published with ${o}.`}),l)})())})(),[e,t])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, ra.dF)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/publishDashboard.json`.)_
