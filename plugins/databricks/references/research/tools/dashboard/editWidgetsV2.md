# Dashboard tool: `editWidgetsV2`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **5 of 34**.

## What this tool does

> The deep schema. Creates / edits / moves / deletes widgets on a page. Carries both a `RenderWidgetSpec` (visual encoding) and a `QuerySpec` (data binding) per widget — the only tool that can write to widgets on the canvas.

## Description (verbatim from wire body)

> Create/edit/move/delete widgets on dashboard pages.
> 
> - RenderWidgetSpec (render.renderSpec) — visual presentation of already-fetched rows.
> - QuerySpec (render.queries[].query) — row and aggregation selection for a widget's dataset.
> - widgetRefName format: pages/<page_ref_id>/widgets/<widget_ref_id>
> - When creating widgets, choose a descriptive widgetRefName (e.g., pages/main/widgets/sales_by_region)
> - For update/move/delete, use the existing widgetRefName from context
> - Make sure widget display name is unique within the page.
> - Widgets cannot overlap. Ensure the position does not overlap with existing widgets. If required, move the existing widgets to make space.
> - Changes are applied in order. Do not update or delete a widget before it is created.
> 
> Render input (for create/update):
> Two render types are supported:
> 
> 1. raw-viz (charts, tables, counters, filters):
> - render.type must be 'raw-viz'
> - render.name: widget display name
> - render.renderSpec: the render widget spec (Helios RenderWidgetSpec). Must include widgetType. Encodings and visual config live here. Use getVizTypeDefinition for the exact JSON schema for each widget type.
> - render.renderSpec.version: always include the spec version when known (e.g. 3 for current chart types, as shown in getVizTypeDefinition). Omitting version is discouraged — validation and coupling expect it.
> - render.queries: array of { queryName, query } objects for widget **data** queries. The inner `query` follows Helios QuerySpec (datasetName, fields, filters, orderBys, disaggregatedData, etc.). Call getVizTypeDefinition with typeName "QuerySpec" to retrieve the full schema before writing queries.
> - render.parameterQueries: same **array item** shape ({ queryName, query }) as `queries`, but a **different role**: entries are referenced only by **ParameterEncoding** rows (`parameterName` + `queryName` in `renderSpec.encodings.fields`) on filter/control widgets so the UI drives dataset SQL `:parameters`. Use `[]` for charts. For each parameter encoding, include a matching `parameterQueries` row; the inner `query` is a **ParameterQuery** — include `parameters: { parameterName, keyword }` (`keyword` = dataset SQL token without the leading `:`), with `parameterQueries[].queryName` and `query.parameters.parameterName` aligned to each encoding row. It is **not** interchangeable with `render.queries[].query` (GenericQuery); `fields` / `parameterValues` alone do not declare the binding, and **empty `fields`** does **not** wire parameters. See `getVizTypeDefinition` for the control widget schema.
> 
> 2. text (markdown text boxes):
> - render.type must be 'text'
> - render.name: widget display name
> - render.contentMarkdown: markdown content (default to ## heading style). No queries or renderSpec needed.
> 
> Coupling rules not in getVizTypeDefinition: JSON Schema fragments from getVizTypeDefinition do not list every render↔query constraint enforced when the widget is validated/coupled.
> - Box charts (widgetType: box) only: each encodings.y fieldName (whiskerStart, boxStart, boxMid, boxEnd, whiskerEnd) must match a main_query.fields fieldName, and that field's expression must start with MIN, PERCENTILE, MEDIAN, or MAX as required for that slot—not bare column/alias references alone.
> - Table widgets (widgetType: table): widget-level `query.orderBys` is not persisted for Table widgets; sort row order via dataset SQL `ORDER BY` instead.
> 
> Before creating or updating a widget, call getVizTypeDefinition to inspect the exact schema for the target widgetType.
> If you need schemas for multiple widget types, call getVizTypeDefinition for each type in parallel.
> Do NOT guess property formats — always check the schema first via getVizTypeDefinition.
> If renderSpec or queries are invalid, the tool response includes a detailed validation error (syntax or semantics); fix the spec and retry.
> semanticValidationWarnings in the response are informational for validation only — the widget could be created/updated successfully. Do not keep fixing them unless you are sure the widget is broken and the warnings are relevant.
> 
> REQUIRED before any `editWidgetsV2` mutation:
> 1. `getVizTypeDefinition({ typeName })` — discovery, once per widget type.
> 2. If a response leaves `$ref`s unresolved that you intend to write: `getVizTypeDefinition({ typeName, refs: [...] })` once, batched with all such refs. Repeat as resolved bodies expose further such refs.
> 3. Then `editWidgetsV2`. No speculative specs.
> 
> On validation error: read the error path, follow the protocol above to resolve the unresolved `$ref`(s) covering the failing properties (repeating only if necessary), then fix only that portion of the spec and retry (max 2 attempts).
> 

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "changes": {
      "type": "object",
      "properties": {
        "widgetMutations": {
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
                    "description": "Action to perform"
                  },
                  "widgetRefName": {
                    "type": "string",
                    "description": "Widget reference: pages/<page_ref_id>/widgets/<widget_ref_id>. For create, specify a meaningful ID (e.g., pages/main/widgets/sales_chart). For update/move/delete, use existing widgetRefName from context."
                  },
                  "render": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "raw-viz"
                            ],
                            "description": "Widget type: raw-viz"
                          },
                          "name": {
                            "type": "string",
                            "description": "Display name for the widget."
                          },
                          "renderSpec": {
                            "type": "object",
                            "properties": {},
                            "required": [],
                            "additionalProperties": true,
                            "description": "Render widget spec (RenderWidgetSpec). Must include widgetType. Use getVizTypeDefinition for JSON Schema fragments."
                          },
                          "queries": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "queryName": {
                                  "type": "string",
                                  "description": "Stable name for this query; encodings in renderSpec reference it (e.g. main_query)."
                                },
                                "query": {
                                  "type": "object",
                                  "properties": {},
                                  "required": [],
                                  "additionalProperties": true,
                                  "description": "QuerySpec object (datasetName, fields, disaggregatedData, optional filters, orderBys, …). Call getVizTypeDefinition with typeName \"QuerySpec\" to see the full schema."
                                }
                              },
                              "required": [
                                "queryName",
                                "query"
                              ],
                              "additionalProperties": false,
                              "description": "Named query: queryName plus QuerySpec (datasetName, fields, disaggregatedData, optional filters, orderBys, …)."
                            },
                            "description": "Named queries backing the widget. Each element expands the full QuerySpec schema on `query`."
                          },
                          "parameterQueries": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "queryName": {
                                  "type": "string",
                                  "description": "Must match ParameterEncoding.queryName in renderSpec.encodings.fields (pairs with parameterName on that row). Distinct from domain query names in render.queries[]."
                                },
                                "query": {
                                  "type": "object",
                                  "properties": {},
                                  "required": [],
                                  "additionalProperties": true,
                                  "description": "QuerySpec object (same keys as render.queries[].query: datasetName, fields, disaggregatedData, optional filters, orderBys, parameterValues, …). Call getVizTypeDefinition with typeName \"QuerySpec\" to see the full schema. For **parameter binding**, the runtime expects a `parameters` object { parameterName, keyword } on this query in addition to the QuerySpec-required fields — see getVizTypeDefinition for the filter/control widgetType. `parameterValues` carries selections, not the dataset-parameter declaration. Empty `fields` alone does not wire a SQL parameter."
                                }
                              },
                              "required": [
                                "queryName",
                                "query"
                              ],
                              "additionalProperties": false,
                              "description": "One entry in render.parameterQueries[]: { queryName, query }. Same structural schema as render.queries[] items; different semantic role (ParameterEncoding targets only)."
                            },
                            "description": "Array of { queryName, query } entries whose queryName is referenced **only** from ParameterEncoding rows in renderSpec (not from chart field encodings). Empty [] for charts. Multiple entries are allowed when one control binds several parameters/datasets. The array wrapper is normal — ambiguity came from reusing the same QuerySpec item shape as render.queries without spelling out parameter-binding semantics; see items schema."
                          }
                        },
                        "required": [
                          "type",
                          "name",
                          "renderSpec",
                          "queries",
                          "parameterQueries"
                        ],
                        "description": "Widget definition using decoupled render spec + queries (Helios decoupled format).",
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "text"
                            ],
                            "description": "Widget type: text (markdown text box)"
                          },
                          "name": {
                            "type": "string",
                            "description": "Display name for the text widget."
                          },
                          "contentMarkdown": {
                            "type": "string",
                            "description": "Markdown content, default to ## heading style"
                          }
                        },
                        "required": [
                          "type",
                          "contentMarkdown",
                          "name"
                        ],
                        "description": "Text box widget with markdown content. No queries needed.",
                        "additionalProperties": false
                      }
                    ],
                    "description": "Widget render definition. Use raw-viz for charts, tables, counters, and filters. Use text for markdown text boxes."
                  },
                  "position": {
                    "type": "object",
                    "properties": {
                      "row": {
                        "type": "integer",
                        "description": "Row position (zero-based, unlimited, 14 rows fit in one screen)"
                      },
                      "column": {
                        "type": "integer",
                        "description": "Column position (zero-based)"
                      },
                      "width": {
                        "type": "integer",
                        "description": "Width in columns (min 1)"
                      },
                      "height": {
                        "type": "integer",
                        "description": "Height in rows (min 1)"
                      }
                    },
                    "required": [
                      "row",
                      "column",
                      "width",
                      "height"
                    ],
                    "description": "Describes the position and size of a widget on the page canvas grid. Text box widgets are best placed on a dedicated row starting at column 0.",
                    "additionalProperties": false
                  }
                },
                "required": [
                  "action",
                  "widgetRefName",
                  "render",
                  "position"
                ],
                "description": "Schema for creating a new widget with specified widgetRefName (pages/<page_customer_ref_id>/widgets/<widget_customer_ref_id>), properties, and position.",
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
                  "widgetRefName": {
                    "type": "string",
                    "description": "Widget reference: pages/<page_ref_id>/widgets/<widget_ref_id>. For create, specify a meaningful ID (e.g., pages/main/widgets/sales_chart). For update/move/delete, use existing widgetRefName from context."
                  },
                  "render": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "raw-viz"
                            ],
                            "description": "Widget type: raw-viz"
                          },
                          "name": {
                            "type": "string",
                            "description": "Display name for the widget."
                          },
                          "renderSpec": {
                            "type": "object",
                            "properties": {},
                            "required": [],
                            "additionalProperties": true,
                            "description": "Render widget spec (RenderWidgetSpec). Must include widgetType. Use getVizTypeDefinition for JSON Schema fragments."
                          },
                          "queries": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "queryName": {
                                  "type": "string",
                                  "description": "Stable name for this query; encodings in renderSpec reference it (e.g. main_query)."
                                },
                                "query": {
                                  "type": "object",
                                  "properties": {},
                                  "required": [],
                                  "additionalProperties": true,
                                  "description": "QuerySpec object (datasetName, fields, disaggregatedData, optional filters, orderBys, …). Call getVizTypeDefinition with typeName \"QuerySpec\" to see the full schema."
                                }
                              },
                              "required": [
                                "queryName",
                                "query"
                              ],
                              "additionalProperties": false,
                              "description": "Named query: queryName plus QuerySpec (datasetName, fields, disaggregatedData, optional filters, orderBys, …)."
                            },
                            "description": "Named queries backing the widget. Each element expands the full QuerySpec schema on `query`."
                          },
                          "parameterQueries": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "queryName": {
                                  "type": "string",
                                  "description": "Must match ParameterEncoding.queryName in renderSpec.encodings.fields (pairs with parameterName on that row). Distinct from domain query names in render.queries[]."
                                },
                                "query": {
                                  "type": "object",
                                  "properties": {},
                                  "required": [],
                                  "additionalProperties": true,
                                  "description": "QuerySpec object (same keys as render.queries[].query: datasetName, fields, disaggregatedData, optional filters, orderBys, parameterValues, …). Call getVizTypeDefinition with typeName \"QuerySpec\" to see the full schema. For **parameter binding**, the runtime expects a `parameters` object { parameterName, keyword } on this query in addition to the QuerySpec-required fields — see getVizTypeDefinition for the filter/control widgetType. `parameterValues` carries selections, not the dataset-parameter declaration. Empty `fields` alone does not wire a SQL parameter."
                                }
                              },
                              "required": [
                                "queryName",
                                "query"
                              ],
                              "additionalProperties": false,
                              "description": "One entry in render.parameterQueries[]: { queryName, query }. Same structural schema as render.queries[] items; different semantic role (ParameterEncoding targets only)."
                            },
                            "description": "Array of { queryName, query } entries whose queryName is referenced **only** from ParameterEncoding rows in renderSpec (not from chart field encodings). Empty [] for charts. Multiple entries are allowed when one control binds several parameters/datasets. The array wrapper is normal — ambiguity came from reusing the same QuerySpec item shape as render.queries without spelling out parameter-binding semantics; see items schema."
                          }
                        },
                        "required": [
                          "type",
                          "name",
                          "renderSpec",
                          "queries",
                          "parameterQueries"
                        ],
                        "description": "Widget definition using decoupled render spec + queries (Helios decoupled format).",
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "text"
                            ],
                            "description": "Widget type: text (markdown text box)"
                          },
                          "name": {
                            "type": "string",
                            "description": "Display name for the text widget."
                          },
                          "contentMarkdown": {
                            "type": "string",
                            "description": "Markdown content, default to ## heading style"
                          }
                        },
                        "required": [
                          "type",
                          "contentMarkdown",
                          "name"
                        ],
                        "description": "Text box widget with markdown content. No queries needed.",
                        "additionalProperties": false
                      }
                    ],
                    "description": "Widget render definition. Use raw-viz for charts, tables, counters, and filters. Use text for markdown text boxes."
                  }
                },
                "required": [
                  "action",
                  "widgetRefName",
                  "render"
                ],
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "enum": [
                      "move"
                    ],
                    "description": "Action to perform"
                  },
                  "widgetRefName": {
                    "type": "string",
                    "description": "Widget reference: pages/<page_ref_id>/widgets/<widget_ref_id>. For create, specify a meaningful ID (e.g., pages/main/widgets/sales_chart). For update/move/delete, use existing widgetRefName from context."
                  },
                  "position": {
                    "type": "object",
                    "properties": {
                      "row": {
                        "type": "integer",
                        "description": "Row position (zero-based, unlimited, 14 rows fit in one screen)"
                      },
                      "column": {
                        "type": "integer",
                        "description": "Column position (zero-based)"
                      },
                      "width": {
                        "type": "integer",
                        "description": "Width in columns (min 1)"
                      },
                      "height": {
                        "type": "integer",
                        "description": "Height in rows (min 1)"
                      }
                    },
                    "required": [
                      "row",
                      "column",
                      "width",
                      "height"
                    ],
                    "description": "Describes the position and size of a widget on the page canvas grid. Text box widgets are best placed on a dedicated row starting at column 0.",
                    "additionalProperties": false
                  }
                },
                "required": [
                  "action",
                  "widgetRefName",
                  "position"
                ],
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
                  "widgetRefName": {
                    "type": "string",
                    "description": "Widget reference: pages/<page_ref_id>/widgets/<widget_ref_id>. For create, specify a meaningful ID (e.g., pages/main/widgets/sales_chart). For update/move/delete, use existing widgetRefName from context."
                  }
                },
                "required": [
                  "action",
                  "widgetRefName"
                ],
                "additionalProperties": false
              }
            ],
            "description": "Union schema for widget mutations: create, update render, move, and delete operations."
          },
          "minItems": 1,
          "description": "Changes to be applied to widgets in bulk."
        }
      },
      "required": [
        "widgetMutations"
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
* `widgetMutations` (array) — Changes to be applied to widgets in bulk.

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Handler binding**: the `execute:` arrow points at the local variable `o`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 741 bytes):

```javascript
((e,i,o,l)=>n3(function*(){return a6({toolName:nG,abortSignal:o,context:i,validate:()=>{if(!e?.changes?.widgetMutations||0===e.changes.widgetMutations.length)return a0("No widget mutations provided.")}},()=>n3(function*(){ej("Edit widgets v2 bulk tool args:",e);let i=[];for(let t of e.changes.widgetMutations){let e;switch(t.action){case"create":e=yield a(t);break;case"update":e=yield r(t);break;case"move":e=yield n(t);break;case"delete":e=yield s(t);break;default:e=a0("Unknown mutation action")}let{widgetRefName:o}=t;(0,tl.d8)(o)?i.push({widgetRefName:o,result:e}):i.push({result:e,error:`Invalid widgetRefName: ${o}`})}ej("Edit widgets v2 bulk status:",i);let o=yield t();return aK(JSON.stringify({results:i}),o)})())})(),[a,s,t,n,r])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, tl.d8)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/editWidgetsV2.json`.)_
