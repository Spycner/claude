# Dashboard tool: `editDatasetCalculations`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **12 of 34**.

## What this tool does

> Edit derived calculations attached to a dataset (measure-typed or dimension-typed expressions). Blocked on DLMVs (DLMVs express derived measures inside their YAML).

## Description (verbatim from wire body)

> Bulk add/update/delete custom calculations (calculated fields) for a dataset.
> 
> - Use this to efficiently manage multiple calculations in one operation
> - Custom calculations allow computations, transformations, and aggregations on existing dataset columns
> - IMPORTANT: Custom calculations CANNOT reference other custom calculations - expressions can only use the base dataset columns
> - For metric view datasets: calculations can only reference dimensions (not measures) - metric view measures are pre-aggregated and cannot be used in custom calculations
> - Calculated measures must use aggregate functions: SUM(), AVG(), COUNT(), etc.
> - Calculated dimensions are unaggregated transformations: CASE statements, string operations, etc.
> - The product auto-classifies the resulting calc by its expression: aggregate expression → measure-typed (`[measure]` suffix in readDataset) → reference in widgets via `MEASURE(`name`)` standalone, no arithmetic; row-level expression → dimension-typed (no suffix) → reference with bare backticks
> - BLOCKED on DLMV datasets — use `updateLocalMetricViewDataset` YAML `measures` instead
> - Maximum 200 calculations per dataset
> - Calculations are identified by their displayName (must be unique within dataset)
> - Operations are applied sequentially in order
> - Use datasetRefName from context to identify the dataset.
> - Use user-friendly display names in responses, not internal RefNames.
> - For expression syntax, supported functions, and examples, use the "calculation" skill
> 
> Operations:
> - add: Create a new calculation (fails if displayName already exists)
> - update: Modify an existing calculation by displayName (fails if not found)
> - delete: Remove a calculation by displayName (fails if not found)
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
    "changes": {
      "type": "object",
      "properties": {
        "calculationMutations": {
          "type": "array",
          "items": {
            "anyOf": [
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "enum": [
                      "add"
                    ],
                    "description": "Action to perform"
                  },
                  "displayName": {
                    "type": "string",
                    "description": "The display name for the custom calculation field (user-friendly name). Must be unique within the dataset."
                  },
                  "expression": {
                    "type": "string",
                    "description": "The calculation expression. Should reference existing dataset columns (from SQL query, or dimensions only from metric view) and use valid operators and functions. Cannot reference other custom calculations."
                  },
                  "description": {
                    "type": "string",
                    "description": "Optional. A concise description of what this calculation does (max 200 chars)"
                  }
                },
                "required": [
                  "action",
                  "displayName",
                  "expression"
                ],
                "description": "Schema for adding a new calculation to a dataset.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "enum": [
                      "update"
                    ],
                    "description": "Action to perform"
                  },
                  "displayName": {
                    "type": "string",
                    "description": "The display name of the existing calculation to update (identifier)."
                  },
                  "newDisplayName": {
                    "type": "string",
                    "description": "Optional. New display name for the calculation (must not conflict with existing calculations)."
                  },
                  "expression": {
                    "type": "string",
                    "description": "Optional. New calculation expression. Must reference only dataset columns (from SQL query, or dimensions only from metric view), not other custom calculations."
                  },
                  "description": {
                    "type": "string",
                    "description": "Optional. New description for the calculation."
                  }
                },
                "required": [
                  "action",
                  "displayName"
                ],
                "description": "Schema for updating an existing calculation. At least one of newDisplayName, expression, or description must be provided.",
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
                    "description": "Action to perform"
                  },
                  "displayName": {
                    "type": "string",
                    "description": "The display name of the calculation to delete."
                  }
                },
                "required": [
                  "action",
                  "displayName"
                ],
                "description": "Schema for deleting a calculation from a dataset.",
                "additionalProperties": false
              }
            ],
            "description": "Union schema for calculation mutations: add, update, and delete operations."
          },
          "minItems": 1,
          "description": "Changes to be applied to calculations in bulk."
        }
      },
      "required": [
        "calculationMutations"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "datasetRefName",
    "changes"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `datasetRefName` (string) — Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.
* `changes` (object) — 

## All properties

### `datasetRefName` **(required)**

Type: `string`.

> Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.

### `changes` **(required)**

Type: `object`.

Nested properties:
* `calculationMutations` (array) — Changes to be applied to calculations in bulk.

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Handler binding**: the `execute:` arrow points at the local variable `l`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 5039 bytes):

```javascript
((a,i,l)=>iy(function*(){return a6({toolName:id,abortSignal:l,context:i,validate:()=>{if(!o)return a0("Invalid arguments: Dashboard name is undefined");if(!a.datasetRefName)return a0("Invalid arguments: Dataset RefName cannot be empty");if(!(0,tl.js)(a.datasetRefName))return a0(`Invalid arguments: ${a.datasetRefName} is not a valid Dataset RefName`);if(!a?.changes?.calculationMutations||0===a.changes.calculationMutations.length)return a0("No calculation mutations provided")}},()=>iy(function*(){ej("Edit dataset calculations bulk tool args:",a);let{datasetRefName:i}=a;if(!(0,tl.js)(i))return a0(`Invalid arguments: ${i} is not a valid Dataset RefName`);let o=(0,tl.W1)(i),l=r().find(e=>e.customerRefId===o);if(!l)return a0(`Dataset "${i}" not found`);if(l.metricViewConfig)return a0("Cannot edit calculations on a DLMV dataset. To add a derived measure, use updateLocalMetricViewDataset to add it to the DLMV YAML measures section instead.");let d=yield ih(n,l.name),c=!!l.assetName,u=l.columns||[],m=[];for(let e of a.changes.calculationMutations){let{columns:t,result:a}=function(e,t){switch(t.action){case"add":if(!t.displayName||""===t.displayName.trim())return{columns:e,result:{success:!1,message:"Add calculation: Display name cannot be empty"}};if(!t.expression||""===t.expression.trim())return{columns:e,result:{success:!1,message:`Add calculation: Expression cannot be empty for "${t.displayName}"`}};if(e.length>=ip.O)return{columns:e,result:{success:!1,message:`Add calculation: Dataset has reached the limit of ${ip.O} custom calculations`}};if(e.find(e=>e.displayName===t.displayName))return{columns:e,result:{success:!1,message:`Add calculation: A calculation with the name "${t.displayName}" already exists. Use update to modify it or choose a different name`}};return{columns:[...e,{displayName:t.displayName,description:t.description||null,expression:t.expression}],result:{success:!0,message:`Added calculation "${t.displayName}"`}};case"update":if(!t.displayName||""===t.displayName.trim())return{columns:e,result:{success:!1,message:"Update calculation: Display name (identifier) cannot be empty"}};if(!t.newDisplayName&&!t.expression&&void 0===t.description)return{columns:e,result:{success:!1,message:`Update calculation: At least one of newDisplayName, expression, or description must be provided for "${t.displayName}"`}};let a=e.findIndex(e=>e.displayName===t.displayName);if(-1===a)return{columns:e,result:{success:!1,message:`Update calculation: Calculation "${t.displayName}" not found. Available: ${e.map(e=>e.displayName).join(", ")||"none"}`}};if(t.newDisplayName&&t.newDisplayName!==t.displayName&&e.find(e=>e.displayName===t.newDisplayName))return{columns:e,result:{success:!1,message:`Update calculation: Cannot rename "${t.displayName}" to "${t.newDisplayName}" - a calculation with that name already exists`}};let r=e.map((e,r)=>{if(r===a)return{...e,displayName:t.newDisplayName||e.displayName,expression:t.expression||e.expression,description:void 0!==t.d
…[truncated]
```

_(body truncated at 3,000 chars; full 5039-byte source is in `../../extraction/data/dashboard-tool-handlers.json` under `editDatasetCalculations.body_callback`.)_

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, tl.js)(...)` 
- `(0, tl.W1)(...)` 
- `(0, tR.Q7)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/editDatasetCalculations.json`.)_
