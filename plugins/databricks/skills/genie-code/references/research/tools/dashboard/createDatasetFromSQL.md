# Dashboard tool: `createDatasetFromSQL`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **8 of 34**.

## What this tool does

> Create a raw-SQL dataset on the dashboard. Decision tree fallback when DLMVs are unsuitable (parameterized tables via `IDENTIFIER(:t)`, raw extracts).

## Description (verbatim from wire body)

> Create a new dataset in the current dashboard with a given name, display name, and SQL query.
> 
> **DO NOT USE THIS TOOL IF:**
> - User asks for or mentions "metric view" → Use createLocalMetricViewDataset instead
> - User requests metric-based analysis (revenue, counts, aggregations) → Use createLocalMetricViewDataset instead
> - Request involves reusable measures and dimensions → Use createLocalMetricViewDataset instead
> - Data needs SQL complexity (joins, CTEs, window functions, combining multiple sources including metric views) → Use createLocalMetricViewDataset with a SQL source instead
> 
> **ONLY USE THIS TOOL FOR:**
> - User explicitly requests "SQL" or "query"
> - Data requires a dynamic/parameterized table source (e.g., `IDENTIFIER(:table_name)`) — DLMVs require a fixed source
> - One-off raw data extraction (not aggregated metrics)
> 
> - Specify a datasetRefName (e.g., datasets/sales_data) to assign a meaningful ref_id. The ref_id must contain only alphanumeric characters and underscores.
> - Use meaningful displayName values for user-facing identification
> - Make sure displayName is unique within the dashboard.
> - Do not limit rows in the SQL query unless explicitly instructed to do so.
> - **Keep SQL simple**: Prefer SELECT * or selecting only the raw columns needed. Push row-level computed expressions, CASE statements, and aggregations into dataset calculations instead of the SQL. Top-level `DECLARE` and `SET VAR` blocks (e.g. for dynamic catalog/schema selection) are allowed before the final SELECT.
> - If you specify parameters in your query using :paramName syntax, you must define them in the parameters array.
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
    "displayName": {
      "type": "string",
      "minLength": 1,
      "description": "The display name for the dataset (user-friendly name)."
    },
    "sqlQuery": {
      "type": "string",
      "minLength": 1,
      "description": "The SQL query. Parameter syntax:\n- Single: :paramName (e.g., WHERE region = :region)\n- Multi: Multi-select parameters are inserted as an array. Use array_contains(:paramName, field_name)\n- Range: :paramName.min and :paramName.max (e.g., WHERE ts >= :date_range.min AND ts <= :date_range.max)\nIf location (catalog/schema) is specified AND all tables are from the same catalog/schema, use UNQUALIFIED table names (e.g., \"SELECT * FROM table\"). If tables are from different catalogs/schemas, do NOT set location and use fully qualified names instead.\nMake sure the query is valid and optimized for performance."
    },
    "description": {
      "type": "string",
      "description": "A concise description of what this dataset does and what data it contains. (max 200 chars)"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "displayName": {
            "type": "string",
            "minLength": 1,
            "description": "Human-readable label shown to users."
          },
          "keyword": {
            "type": "string",
            "minLength": 1,
            "description": "The parameter keyword to update (identifier in the SQL query, e.g., \"userId\" for :userId)."
          },
          "dataType": {
            "type": "string",
            "enum": [
              "integer",
              "float",
              "datetime",
              "date",
              "decimal",
              "string"
            ],
            "description": "Data type for the parameter."
          },
          "complexType": {
            "type": "string",
            "enum": [
              "single",
              "multi",
              "range"
            ],
            "description": "Type of the parameter: \"single\" (default), \"multi\" for multiple values, \"range\" for date/datetime ranges only."
          },
          "defaultSelection": {
            "anyOf": [
              {
                "type": "object",
                "properties": {
                  "kind": {
                    "type": "string",
                    "enum": [
                      "values"
                    ],
                    "description": "Selection type: \"values\" for single/multi-select."
                  },
                  "dataType": {
                    "type": "string",
                    "enum": [
                      "integer",
                      "float",
                      "datetime",
                      "date",
                      "decimal",
                      "string"
                    ],
                    "description": "Data type for the selection (must match the parameter dataType)."
                  },
                  "values": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Array of default values as serialized strings. For date/datetime types, supports:\n- Absolute: \"2024-01-15\" or \"2024-01-15T10:30:00\"\n- Relative: \"now-7d/d\" (7 days ago), \"now/M\" (start of month), \"now-1y/y\" (1 year ago)\nRelative date format: now[-offset][/round]. Units: d=day, w=week, M=month, y=year."
                  }
                },
                "required": [
                  "kind",
                  "dataType",
                  "values"
                ],
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "kind": {
                    "type": "string",
                    "enum": [
                      "range"
                    ],
                    "description": "Selection type: \"range\" for date ranges."
                  },
                  "dataType": {
                    "type": "string",
                    "enum": [
                      "date",
                      "datetime"
                    ],
                    "description": "Data type for the range selection. Only date and datetime are supported for ranges."
                  },
                  "min": {
                    "type": "object",
                    "properties": {
                      "value": {
                        "type": "string",
                        "description": "Value as a serialized string."
                      }
                    },
                    "required": [
                      "value"
                    ],
                    "additionalProperties": false,
                    "description": "Minimum endpoint. Supports absolute (\"2024-01-15\") or relative (\"now-30d/d\") dates. Units: d=day, w=week, M=month, y=year."
                  },
                  "max": {
                    "type": "object",
                    "properties": {
                      "value": {
                        "type": "string",
                        "description": "Value as a serialized string."
                      }
                    },
                    "required": [
                      "value"
                    ],
                    "additionalProperties": false,
                    "description": "Maximum endpoint. Supports absolute (\"2024-12-31\") or relative (\"now/d\") dates. Units: d=day, w=week, M=month, y=year."
                  }
                },
                "required": [
                  "kind",
                  "dataType",
                  "min",
                  "max"
                ],
                "additionalProperties": false
              }
            ],
            "description": "Default selection for the parameter. Use kind=\"values\" for single/multi-select defaults, or kind=\"range\" for date range defaults."
          }
        },
        "required": [
          "keyword",
          "displayName",
          "dataType",
          "complexType",
          "defaultSelection"
        ],
        "description": "Configuration for a parameter.",
        "additionalProperties": false
      },
      "description": "Parameters for the dataset. SQL syntax:\n- Single: :paramName (e.g., WHERE region = :region)\n- Multi: Multi-select parameters are inserted as an array. Use array_contains(:paramName, field_name)\n- Range: :paramName.min and :paramName.max (e.g., WHERE ts >= :date_range.min AND ts <= :date_range.max)\nAll parameters used in the query must be defined in this array."
    },
    "location": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "catalog": {
              "type": "string",
              "minLength": 1,
              "description": "The catalog name (e.g., \"samples\")."
            },
            "schema": {
              "type": "string",
              "minLength": 1,
              "description": "The schema name (e.g., \"nyctaxi\")."
            }
          },
          "required": [
            "catalog",
            "schema"
          ],
          "additionalProperties": false,
          "description": "Optional. The catalog and schema to use for this dataset. ONLY set this if ALL tables in the query are from the same catalog and schema. When specified, use UNQUALIFIED table names in the SQL query (e.g., \"SELECT * FROM table\" instead of \"SELECT * FROM catalog.schema.table\"). The catalog and schema will be automatically applied to all unqualified table references."
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": [
    "datasetRefName",
    "displayName",
    "sqlQuery",
    "description",
    "parameters",
    "location"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `datasetRefName` (string) — Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.
* `displayName` (string) — The display name for the dataset (user-friendly name).
* `sqlQuery` (string) — The SQL query. Parameter syntax:
* `description` (string) — A concise description of what this dataset does and what data it contains. (max 200 chars)
* `parameters` (array) — Parameters for the dataset. SQL syntax:
* `location` () — 

## All properties

### `datasetRefName` **(required)**

Type: `string`.

> Dataset reference name in format: datasets/<ref_id> (e.g., datasets/sales_data). The ref_id must contain only alphanumeric characters and underscores.

### `displayName` **(required)**

Type: `string`.

> The display name for the dataset (user-friendly name).

### `sqlQuery` **(required)**

Type: `string`.

> The SQL query. Parameter syntax:
> - Single: :paramName (e.g., WHERE region = :region)
> - Multi: Multi-select parameters are inserted as an array. Use array_contains(:paramName, field_name)
> - Range: :paramName.min and :paramName.max (e.g., WHERE ts >= :date_range.min AND ts <= :date_range.max)
> If location (catalog/schema) is specified AND all tables are from the same catalog/schema, use UNQUALIFIED table names (e.g., "SELECT * FROM table"). If tables are from different catalogs/schemas, do NOT set location and use fully qualified names instead.
> Make sure the query is valid and optimized for performance.

### `description` **(required)**

Type: `string`.

> A concise description of what this dataset does and what data it contains. (max 200 chars)

### `parameters` **(required)**

Type: `array`.

> Parameters for the dataset. SQL syntax:
> - Single: :paramName (e.g., WHERE region = :region)
> - Multi: Multi-select parameters are inserted as an array. Use array_contains(:paramName, field_name)
> - Range: :paramName.min and :paramName.max (e.g., WHERE ts >= :date_range.min AND ts <= :date_range.max)
> All parameters used in the query must be defined in this array.

Array items (object) properties:
* `displayName` (string) — Human-readable label shown to users.
* `keyword` (string) — The parameter keyword to update (identifier in the SQL query, e.g., "userId" for :userId).
* `dataType` (string) — Data type for the parameter.
* `complexType` (string) — Type of the parameter: "single" (default), "multi" for multiple values, "range" for date/datetime ranges only.
* `defaultSelection` () — Default selection for the parameter. Use kind="values" for single/multi-select defaults, or kind="range" for date range defaults.

### `location` **(required)**

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Name constant**: the wire `name` value `"createDatasetFromSQL"` is stored in chunk-local constant `rF`; the factory call references it as `name:rF`.

**Handler binding**: the `execute:` arrow points at the local variable `s`, defined in the same factory by a `(0,i.useCallback)((args,signal,context) => …)`.

**Surrounding `useCallback` body** (verbatim, minified — 602 bytes):

```javascript
((t,i,s)=>rQ(function*(){return a6({toolName:rF,abortSignal:s,context:i},()=>rQ(function*(){let i;if(!n)return a0("Invalid arguments: Dashboard name is undefined.");let{datasetRefName:s}=t;if(!(0,tl.js)(s))return a0(`Invalid arguments: ${s} is not a valid Dataset RefName.`);let o=(0,tl.W1)(s);try{i=(0,rW.se)(t.sqlQuery)}catch{i=t.sqlQuery}let l=yield e("Add dataset from SQL",()=>a(()=>({displayName:t.displayName,query:i,parameters:t.parameters,catalog:t.location?.catalog,schema:t.location?.schema,customerRefId:o}))),d=yield r();return l.success?aK(l.message,d):aX(l.message,d)})())})(),[n,a,r,e])
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, tl.js)(...)` 
- `(0, tl.W1)(...)` 
- `(0, rW.se)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/createDatasetFromSQL.json`.)_
