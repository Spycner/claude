# Dashboard tool: `editPages`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **4 of 34**.

## What this tool does

> Create / rename / delete dashboard pages. Supports CANVAS pages and the singleton GLOBAL_FILTERS page (filter widgets that apply across pages).

## Description (verbatim from wire body)

> Create, rename, reorder, or delete dashboard pages.
> 
> - pageRefName format: pages/<page_ref_id>
> - When creating pages, choose a descriptive pageRefName (e.g., pages/sales_overview, pages/inventory)
> - For rename/delete, use the existing pageRefName from context
> - Reserved pageRefName: pages/global_filters (for Global Filters page, auto-created when adding global filter widgets)
> - Cannot delete the Global Filters page
> - Reorder only affects canvas pages; Global Filters page position is automatically preserved
> - Changes are applied in order
> 

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "changes": {
      "type": "object",
      "properties": {
        "pageMutations": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "enum": [
                      "create"
                    ],
                    "description": "Action: create a new page"
                  },
                  "pageRefName": {
                    "type": "string",
                    "minLength": 1,
                    "pattern": "^pages/\\w+$",
                    "description": "Page reference: pages/<page_ref_id>. For create, specify a meaningful ID (e.g., pages/sales_overview). For rename/delete, use existing pageRefName from context. Reserved: pages/global_filters for Global Filters page."
                  },
                  "displayName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "User-friendly display name for the page (shown in the page tabs)"
                  }
                },
                "required": [
                  "action",
                  "pageRefName",
                  "displayName"
                ],
                "description": "Create a new canvas page with the specified pageRefName and displayName.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "enum": [
                      "rename"
                    ],
                    "description": "Action: rename an existing page"
                  },
                  "pageRefName": {
                    "type": "string",
                    "minLength": 1,
                    "pattern": "^pages/\\w+$",
                    "description": "Page reference: pages/<page_ref_id>. For create, specify a meaningful ID (e.g., pages/sales_overview). For rename/delete, use existing pageRefName from context. Reserved: pages/global_filters for Global Filters page."
                  },
                  "displayName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "User-friendly display name for the page (shown in the page tabs)"
                  }
                },
                "required": [
                  "action",
                  "pageRefName",
                  "displayName"
                ],
                "description": "Rename an existing page to a new displayName.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "enum": [
                      "reorder"
                    ],
                    "description": "Action: reorder pages"
                  },
                  "pageOrder": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "minItems": 1,
                    "description": "Ordered list of pageRefNames defining the new page order. Do not include pages/global_filters - it is automatically preserved."
                  }
                },
                "required": [
                  "action",
                  "pageOrder"
                ],
                "description": "Reorder pages by providing the new order as a list of pageRefNames. Global Filters page position is automatically preserved.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "enum": [
                      "delete"
                    ],
                    "description": "Action: delete a page"
                  },
                  "pageRefName": {
                    "type": "string",
                    "minLength": 1,
                    "pattern": "^pages/\\w+$",
                    "description": "Page reference: pages/<page_ref_id>. For create, specify a meaningful ID (e.g., pages/sales_overview). For rename/delete, use existing pageRefName from context. Reserved: pages/global_filters for Global Filters page."
                  }
                },
                "required": [
                  "action",
                  "pageRefName"
                ],
                "description": "Delete an existing page. Cannot delete the Global Filters page (pages/global_filters).",
                "additionalProperties": false
              }
            ],
            "description": "Union schema for page mutations: create, rename, reorder, and delete operations."
          },
          "minItems": 1,
          "description": "Changes to be applied to pages in bulk."
        }
      },
      "required": [
        "pageMutations"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "changes"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `changes` (object) — 

## All properties

### `changes` **(required)**

Type: `object`.

Nested properties:
* `pageMutations` (array) — Changes to be applied to pages in bulk.

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Name constant**: the wire `name` value `"editPages"` is stored in chunk-local constant `iK`; the factory call references it as `name:iK`.

**Handler binding**: the `execute:` arrow points at the local variable `o`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 604 bytes):

```javascript
((e,i,o)=>i8(function*(){return a6({toolName:iK,abortSignal:o,context:i},()=>i8(function*(){if(ej("Edit pages bulk tool args:",e),!e.changes.pageMutations.length)return a0("No page mutations provided");let i=[];for(let t of e.changes.pageMutations)switch(t.action){case"create":i.push((yield a(t)));break;case"rename":i.push((yield r(t)));break;case"reorder":i.push((yield n(t)));break;case"delete":i.push((yield s(t)));break;default:i.push(a0(`Unknown mutation action: ${JSON.stringify(t)}`))}ej("Edit pages bulk status:",i);let o=yield t();return aK(JSON.stringify({results:i}),o)})())})(),[a,s,t,r,n])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/editPages.json`.)_
