# Dashboard tool: `executeSql`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **33 of 34**.

## What this tool does

> Run exploratory / diagnostic SQL on the dashboard's shared warehouse. Used for debugging when `readDatasetData` returns empty / wrong results.

## Description (verbatim from wire body)

> Execute a SQL query

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "summary": {
      "type": "string",
      "description": "A short 3-8 word summary starting with a verb describing the specific action the SQL query performs, based on the query content — not the user's request (e.g. \"Calculate total revenue by region\")."
    },
    "sql": {
      "type": "string",
      "description": "The SQL query to execute",
      "minLength": 1
    }
  },
  "required": [
    "summary",
    "sql"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `summary` (string) — A short 3-8 word summary starting with a verb describing the specific action the SQL query performs, based on the query content — not the user's request (e.g. "Calculate total revenue by region").
* `sql` (string) — The SQL query to execute

## All properties

### `summary` **(required)**

Type: `string`.

> A short 3-8 word summary starting with a verb describing the specific action the SQL query performs, based on the query content — not the user's request (e.g. "Calculate total revenue by region").

### `sql` **(required)**

Type: `string`.

> The SQL query to execute

## Handler notes

Extracted from SPA chunk `19604.5ae31ee5cc.chunk.js` ((LakeAgent main chunk)). This tool is imported into the Dashboard Authoring Agent from another chunk rather than defined inline in `DashboardAuthoringAgentContext`. The factory below is verbatim minified JavaScript.

**Inline `execute` arrow** (verbatim, minified — 149 bytes):

```javascript
(e,t,r)=>c(function*(){try{return yield f()(e,t,r)}catch(e){return{success:!1,error:{message:`${e instanceof Error?e.message:"unknown error"}`}}}})()
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/executeSql.json`.)_
