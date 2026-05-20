# Genie Code tool: `manageTodoList`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [payload.md](../../overview/payload.md) for the full request envelope and [findings.md](../../overview/findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **11 of 18**.

## Description

> Manage a structured todo list to track progress and plan tasks throughout your coding session.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "write",
        "read"
      ],
      "description": "write: Replace entire todo list with new content. read: Retrieve current todo list. ALWAYS provide complete list when writing - partial updates not supported."
    },
    "todoList": {
      "type": "array",
      "description": "Complete array of all todo items (required for write operation, ignored for read). Must include ALL items - both existing and new.",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "description": "Unique identifier for the todo. Use sequential numbers starting from 1."
          },
          "title": {
            "type": "string",
            "description": "Concise action-oriented todo label (3-7 words). Displayed in UI."
          },
          "description": {
            "type": "string",
            "description": "Detailed context, requirements, or implementation notes. Include file paths, specific methods, or acceptance criteria."
          },
          "status": {
            "type": "string",
            "enum": [
              "not-started",
              "in-progress",
              "completed"
            ],
            "description": "not-started: Not begun | in-progress: Currently working (max 1) | completed: Fully finished with no blockers"
          }
        },
        "required": [
          "id",
          "title",
          "description",
          "status"
        ],
        "additionalProperties": false
      }
    }
  },
  "required": [
    "operation",
    "todoList"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `operation` (string) — write: Replace entire todo list with new content. read: Retrieve current todo list. ALWAYS provide complete list when writing - partial updates not supported.
* `todoList` (array) — Complete array of all todo items (required for write operation, ignored for read). Must include ALL items - both existing and new.

## All properties

### `operation` **(required)**

Type: `string`. enum: 'write', 'read'

> write: Replace entire todo list with new content. read: Retrieve current todo list. ALWAYS provide complete list when writing - partial updates not supported.

### `todoList` **(required)**

Type: `array`.

> Complete array of all todo items (required for write operation, ignored for read). Must include ALL items - both existing and new.

## Handler notes

Extracted from webpack module `826439` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({operation:t,todoList:r},s)
```

**Execute body** (verbatim, minified — webpack module `826439`, 1736 bytes):

```javascript
{var n;return(n=function*(){let a=s.getTodoStoreOverride()??e;try{if("read"===t){let e=yield a.getTodos(s.agentIds.sessionId),t=e.reduce((e,t)=>(e[t.status]=(e[t.status]||0)+1,e),{});return{success:!0,data:JSON.stringify({status:0===e.length?"Todo list is empty. No items found.":`Todo list retrieved successfully. ${e.length} item(s) found.`,summary:{total:e.length,notStarted:t["not-started"]||0,inProgress:t["in-progress"]||0,completed:t.completed||0},items:e})}}if("write"===t){if(!r||!Array.isArray(r))return{success:!1,error:{message:"todoList is required for write operation and must be an array"}};for(let e of r){if(!e.id||!e.title||!e.description||!e.status)return{success:!1,error:{message:"Each todo must have id, title, description, and status"}};if(!["not-started","in-progress","completed"].includes(e.status))return{success:!1,error:{message:"Invalid status. Must be: not-started, in-progress, or completed"}}}if(r.filter(e=>"in-progress"===e.status).length>1)return{success:!1,error:{message:"Only one todo can be in-progress at a time"}};yield a.setTodos(r,s.agentIds.sessionId);let e=r.reduce((e,t)=>(e[t.status]=(e[t.status]||0)+1,e),{});return{success:!0,data:JSON.stringify({status:`Todo list updated successfully. ${r.length} item(s) in the list.`,summary:{total:r.length,notStarted:e["not-started"]||0,inProgress:e["in-progress"]||0,completed:e.completed||0},items:r})}}return{success:!1,error:{message:'Invalid operation. Must be "read" or "write"'}}}catch(e){return{success:!1,error:{message:e instanceof Error?e.message:String(e)}}}},function(){var e=this,t=arguments;return new Promise(function(r,s){var o=n.apply(e,t);function i(e){a(o,r,s,i,l,"next",e)}function l(e){a(o,r,s,i,l,"throw",e)}i(void 0)})})()}
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.

**Helpers called from the body** (each is a different webpack module):

_(none — the body is self-contained.)_

**What this proves vs. what it doesn't**:

- ✅ Self-contained handler. The body invokes no helpers, dispatches no Redux actions, and contains no URL literals — so this tool performs **local-state mutations only** (e.g. session store, in-memory Redux slice). No network I/O is fired by this execute call.

## Verified network behaviour

Captured 2026-05-19 by patching `window.fetch` + `XMLHttpRequest` on the SPA and triggering the prompt below. Full request log (with bodies) is in [../../traces/manageTodoList.json](../../traces/manageTodoList.json).

**Trigger prompt:** `Plan the following multi-step task before executing it: audit my workspace for unused SQL warehouses. First create a step-by-step todo list, then start working through it.`

**Endpoints fired (excluding agent-housekeeping common to every turn):**

- _No tool-specific network call observed — see notes below._

No bespoke REST endpoint — the todo state lives entirely in the conversation thread's Redux store and is persisted via the standard `PATCH /ajax-api/2.0/notebooks/<thread-id>?update_mask=assistant_thread_metadata.*` calls that fire on every turn anyway. The tool's effect is to mutate the thread-metadata blob; the trace shows ten `POST /notebook/<thread-id>` calls in this turn (vs the usual 5-6), consistent with the planning step generating extra metadata writes.

<!-- DASHBOARD_VARIANT_BEGIN -->

## Dashboard Authoring variant

The Dashboard Authoring Agent (`dashboardAuthoringAgent`) ships this same tool. The wire schema below was captured 2026-05-19 from the `hi` POST against `/sql/dashboardsv3/<id>?edit=true` — see [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md). Position in the dashboard agent's tools array: **28 of 34**.

Description: **identical** to the LakeAgent variant.

**Parameter diff** (LakeAgent → Dashboard Authoring):

- Property set: **identical** key list.
- `required` array: **identical**.

**Handler binding in the dashboard chunk:**

Same identity as the LakeAgent variant — these 13 tools are imported into `DashboardAuthoringAgentContext` from the shared `builtInToolsDeps` registry, not redefined per agent. The factory module IDs noted in this ref's Handler-notes section above apply unchanged to the dashboard agent.

<!-- DASHBOARD_VARIANT_END -->
