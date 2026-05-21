# Dashboard tool: `getSqlSample`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **21 of 34**.

## What this tool does

> Quick row sample for a SQL snippet, table, or file path. Used to validate query shape before committing it to a dataset.

## Description (verbatim from wire body)

> Get sample data from a SQL table or files by running a SELECT query with LIMIT. For tables: use tableName (fully qualified as catalog.schema.name). For files: use filePath with read_files() (e.g. "/Volumes/main/data/customers/"). Use readFilesOptions for read_files() options like { multiLine: true } for multi-line JSON, { format: "csv", header: true } for CSV, etc. Optionally specify columns, WHERE clause, GROUP BY for aggregate queries, and ORDER BY for sorting results.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "summary": {
      "type": "string",
      "description": "A short 3-8 word summary starting with a verb describing the specific data being queried, based on the query content — not the user's request (e.g. \"Fetch monthly sales data\")."
    },
    "tableName": {
      "type": "string",
      "description": "The name of the table to get sample data from. Specify as catalog.schema.name. Provide this OR filePath (set the other to empty string)."
    },
    "filePath": {
      "type": "string",
      "description": "Path to files to query directly using read_files(). Auto-detects format (json, csv, parquet, etc.). Provide this OR tableName (set the other to empty string). Example: \"/Volumes/main/data/customers/\""
    },
    "readFilesOptions": {
      "type": "array",
      "description": "Key-value options for read_files() when using filePath. Common options: multiLine (boolean) for multi-line JSON, format (string) to specify file type, header (boolean) for CSV with headers, delimiter (string) for CSV delimiter, etc. Values can be strings, booleans, or numbers. Leave empty if no options are needed.",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": [
              "boolean",
              "number",
              "string"
            ]
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      }
    },
    "columns": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional array of column names or expressions to select from the selected tableName. Supports aggregate functions like COUNT(*), AVG(column), etc. If not provided, all columns (*) will be selected."
    },
    "whereClause": {
      "type": "string",
      "description": "Optional WHERE clause condition (without the WHERE keyword). Example: \"age > 25 AND status = 'active'\""
    },
    "groupBy": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional array of column names to group by. Required when using aggregate functions in the columns parameter. Example: [\"customer_id\", \"region\"]"
    },
    "orderBy": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional array of column names or expressions to order by. Each can optionally include ASC or DESC. Example: [\"date DESC\", \"customer_id ASC\"]"
    },
    "limit": {
      "type": "number",
      "description": "The number of rows to return as sample data (default: 100, max: 1000)"
    }
  },
  "required": [
    "summary",
    "tableName",
    "filePath",
    "readFilesOptions",
    "columns",
    "whereClause",
    "groupBy",
    "orderBy",
    "limit"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `summary` (string) — A short 3-8 word summary starting with a verb describing the specific data being queried, based on the query content — not the user's request (e.g. "Fetch monthly sales data").
* `tableName` (string) — The name of the table to get sample data from. Specify as catalog.schema.name. Provide this OR filePath (set the other to empty string).
* `filePath` (string) — Path to files to query directly using read_files(). Auto-detects format (json, csv, parquet, etc.). Provide this OR tableName (set the other to empty string). Example: "/Volumes/main/data/customers/"
* `readFilesOptions` (array) — Key-value options for read_files() when using filePath. Common options: multiLine (boolean) for multi-line JSON, format (string) to specify file type, header (boolean) for CSV with headers, delimiter (string) for CSV delimiter, etc. Values can be strings, booleans, or numbers. Leave empty if no options are needed.
* `columns` (array) — Optional array of column names or expressions to select from the selected tableName. Supports aggregate functions like COUNT(*), AVG(column), etc. If not provided, all columns (*) will be selected.
* `whereClause` (string) — Optional WHERE clause condition (without the WHERE keyword). Example: "age > 25 AND status = 'active'"
* `groupBy` (array) — Optional array of column names to group by. Required when using aggregate functions in the columns parameter. Example: ["customer_id", "region"]
* `orderBy` (array) — Optional array of column names or expressions to order by. Each can optionally include ASC or DESC. Example: ["date DESC", "customer_id ASC"]
* `limit` (number) — The number of rows to return as sample data (default: 100, max: 1000)

## All properties

### `summary` **(required)**

Type: `string`.

> A short 3-8 word summary starting with a verb describing the specific data being queried, based on the query content — not the user's request (e.g. "Fetch monthly sales data").

### `tableName` **(required)**

Type: `string`.

> The name of the table to get sample data from. Specify as catalog.schema.name. Provide this OR filePath (set the other to empty string).

### `filePath` **(required)**

Type: `string`.

> Path to files to query directly using read_files(). Auto-detects format (json, csv, parquet, etc.). Provide this OR tableName (set the other to empty string). Example: "/Volumes/main/data/customers/"

### `readFilesOptions` **(required)**

Type: `array`.

> Key-value options for read_files() when using filePath. Common options: multiLine (boolean) for multi-line JSON, format (string) to specify file type, header (boolean) for CSV with headers, delimiter (string) for CSV delimiter, etc. Values can be strings, booleans, or numbers. Leave empty if no options are needed.

Array items (object) properties:
* `key` (string) — 
* `value` (['boolean', 'number', 'string']) — 

### `columns` **(required)**

Type: `array`.

> Optional array of column names or expressions to select from the selected tableName. Supports aggregate functions like COUNT(*), AVG(column), etc. If not provided, all columns (*) will be selected.

### `whereClause` **(required)**

Type: `string`.

> Optional WHERE clause condition (without the WHERE keyword). Example: "age > 25 AND status = 'active'"

### `groupBy` **(required)**

Type: `array`.

> Optional array of column names to group by. Required when using aggregate functions in the columns parameter. Example: ["customer_id", "region"]

### `orderBy` **(required)**

Type: `array`.

> Optional array of column names or expressions to order by. Each can optionally include ASC or DESC. Example: ["date DESC", "customer_id ASC"]

### `limit` **(required)**

Type: `number`.

> The number of rows to return as sample data (default: 100, max: 1000)

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Inline `execute` arrow** (verbatim, minified — 3733 bytes):

```javascript
({tableName:t,filePath:a,readFilesOptions:r,columns:i,whereClause:n,groupBy:s,orderBy:p,limit:g=100},h,w)=>f(function*(){let v;try{let x,N=(0,o.Lk)({tool_subprocess:{name:"getSqlSample.buildQuery"}});try{if(!a&&!t)return{success:!1,error:{message:"Either tableName or filePath must be provided"},sqlQuery:""};v=y({tableName:t,filePath:a,readFilesOptions:r,columns:i,whereClause:n,groupBy:s,orderBy:p,limit:g}),N?.updateAnnotations({tool_subprocess:{success:!0}})}finally{N?.end()}if((0,u.W)("databricks.fe.editor.enableAssistantPromptDebug",!1)&&console.log("getSqlSample: sqlQuery:",v),!v)return(0,l.yj)("Internal error: failed to build SQL query");let E=v,R=(0,m.t1)("getSqlSample.executeWithNotebook");if(R(()=>`Executing SQL query: ${E}`),!h.agentIds.toolCallId)return(0,l.yj)("Internal error: missing toolCallId for getSqlSample execution");let A=(0,o.Lk)({tool_subprocess:{name:"getSqlSample.executeQuery"}});try{if(!(x=yield(0,d.h)(()=>f(function*(){return yield(0,c.u)({store:e,agentIds:h.agentIds,language:"sql",code:E,opts:{timeoutMs:6e4,bypassTruncation:!0},abortSignal:w})})())).success){var b;let e=(b=x.error?.message||"Failed to execute SQL query").includes("timed out")&&!b.includes("Sample data from table more efficiently")?[b,"\nSample data from table more efficiently, find more WHERE clauses, column partitions, avoid aggregate functions ..."].join("."):b;return R(()=>`Execution failed: ${e}`),A?.updateAnnotations({tool_subprocess:{success:!1}}),{success:!1,error:{message:e},sqlQuery:v}}A?.updateAnnotations({tool_subprocess:{success:!0}})}finally{A?.end()}R(()=>"Execution succeeded, processing results");let T=(0,o.Lk)({tool_subprocess:{name:"getSqlSample.parseResult"}});try{let e=x.data?.cellResults?.[0];if(!e)return R(()=>"No cell results found, returning with undefined rowCount"),T?.updateAnnotations({tool_subprocess:{success:!0}}),{success:!0,data:{sqlQuery:v,rowCount:void 0,commandInfo:x.data?.commandInfo,executionDurationMin:x.data?.executionDurationMin,requiredSkillCheck:!0}};let t=Array.isArray(e.data)?e.data.length:void 0;R(()=>`Processed cell result, rowCount: ${t}`);let a=function(e,t,a){if(void 0===e||e!==t)return{isTruncated:!1};let r=/\bGROUP\s+BY\b/i.test(a),i=/\b(YEAR|MONTH|DAY|DATE|QUARTER|WEEK)\s*\(/i.test(a);if(/\b(COUNT|SUM|AVG|MIN|MAX|STDDEV|STDDEV_POP|STDDEV_SAMP|VARIANCE|VAR_POP|VAR_SAMP|FIRST|LAST|COLLECT_LIST|COLLECT_SET|APPROX_COUNT_DISTINCT|APPROX_PERCENTILE|PERCENTILE|CORR|COVAR_POP|COVAR_SAMP|KURTOSIS|SKEWNESS)\s*\(/i.test(a)&&!r&&1===e)return{isTruncated:!1};let n=`Results truncated at ${e} rows.`;return r&&i?n+=` Showing ${e} distinct time periods - more may exist.`:r?n+=` Showing ${e} distinct groups - more may exist.`:n+=" More data may exist beyond what's shown.",{isTruncated:!0,warning:n}}(t,Math.min(g,1e3),v??"");return T?.updateAnnotations({tool_subprocess:{success:!0}}),{success:!0,data:{sqlQuery:v,commandStatus:{commandInfo:{id:x.data?.commandInfo?.id,executionId:x.data?.commandInfo?.executionId,results:{data:
…[truncated]
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in the wrapper. The execute body delegates to imported helpers — see the Helpers list below to trace network calls one hop deeper.
- Feature flags read during execution:
    - `databricks.fe.editor.enableAssistantPromptDebug`

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, o.Lk)(...)` 
- `(0, u.W)(...)` 
- `(0, l.yj)(...)` 
- `(0, m.t1)(...)` 
- `(0, d.h)(...)` 
- `(0, c.u)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/getSqlSample.json`.)_
