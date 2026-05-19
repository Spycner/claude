# Genie Code tool: `executeCode`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [payload.md](../../overview/payload.md) for the full request envelope and [findings.md](../../overview/findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **17 of 18**.

## Description

> Execute code tool
> 
> - When the notebook is active, all the notebook variables and imports are available for use.
> - Use this tool to run short code snippets in the specified language (exploration, validation, small computations). It is not for persisting edits to user assets.
> - Always include your reasoning in the 'thoughts' field.
> - Do NOT use this tool to create, modify, or write workspace files — even when creating multiple files or a project structure. Always use createAsset and editAsset instead, regardless of the number of files involved.
> - **Do NOT use this tool to read, list, or explore workspace files and directories.** Use `readAssetById` instead — it is faster and returns structured results. For example, use `readAssetById` with assetType "directory" to list a directory, or assetType "file" to read a file. Do not use shell commands like `ls`, `cat`, `find`, `tree`, or Python like `os.listdir`, `open()`, `dbutils.fs.ls` for these purposes.
> - Execution has a default timeout of 15 minutes. Most simple queries should complete well within this time.
> - For expensive queries (large aggregations, complex joins), you can increase the timeout. If a query times out, consider simplifying it or adding filters.
> 
> ### Shell commands (language: 'sh')
> - Shell commands always run in the user's home directory (/Workspace/Users/{username}).
> - Home directory contains the user's notebooks, queries and files.
> - Notebooks have .ipynb extension. They are stored in Jupyter notebook format (nbformat).
> - Queries have .sql extension.
> - AI/BI dashboard files have lvdash.json extension.
> - Queries are stored with .dbquery.ipynb extension in the user's home directory. They also use the notebook format.
> - Do NOT use shell commands to create, write, or modify files or directories. Use createAsset and editAsset instead.
> - Do NOT use shell commands (ls, cat, find, tree, head, tail, etc.) to read or list workspace files and directories. Use `readAssetById` instead.
> - You can search within notebooks and queries using 'grep' command. Code will be in code cells, markdown in markdown cells. Code can span multiple lines.
> - You can grep for code in files using: grep -r "search term" *.ipynb. To identify tables, you can search for keywords like 'SELECT', 'FROM', 'JOIN', 'WHERE', etc. SQL can span multiple lines.
> - 'jq' command line tool is NOT available.
> - If shell execution fails or compute is not available, do NOT retry. Try other tools if available or respond with your final answer.
> 
> 

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "summary": {
      "type": "string",
      "description": "A short 3-8 word summary starting with a verb describing the specific action the code performs, based on the code content — not the user's request (e.g. \"Calculate average order value by region\")."
    },
    "code": {
      "type": "string",
      "description": "The code to execute",
      "minLength": 1
    },
    "language": {
      "type": "string",
      "description": "The programming language of the code",
      "enum": [
        "python",
        "sh",
        "r",
        "scala",
        "sql"
      ],
      "default": "python"
    },
    "timeoutMinutes": {
      "type": "number",
      "description": "Execution timeout in minutes. Minimum 5, default 15. Increase for expensive queries.",
      "default": 15,
      "minimum": 5
    }
  },
  "required": [
    "summary",
    "code",
    "language",
    "timeoutMinutes"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `summary` (string) — A short 3-8 word summary starting with a verb describing the specific action the code performs, based on the code content — not the user's request (e.g. "Calculate average order value by region").
* `code` (string) — The code to execute
* `language` (string) — The programming language of the code
* `timeoutMinutes` (number) — Execution timeout in minutes. Minimum 5, default 15. Increase for expensive queries.

## All properties

### `summary` **(required)**

Type: `string`.

> A short 3-8 word summary starting with a verb describing the specific action the code performs, based on the code content — not the user's request (e.g. "Calculate average order value by region").

### `code` **(required)**

Type: `string`.

> The code to execute

### `language` **(required)**

Type: `string`. enum: 'python', 'sh', 'r', 'scala', 'sql'

> The programming language of the code

### `timeoutMinutes` **(required)**

Type: `number`.

> Execution timeout in minutes. Minimum 5, default 15. Increase for expensive queries.

## Handler notes

Extracted from webpack module `657362` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({code:t,language:r,thoughts:s,timeoutMinutes:n},i,d)
```

**Execute body** (verbatim, minified — webpack module `657362`, 2079 bytes):

```javascript
v(function*(){let s=(0,u.W)("databricks.fe.assistant.disableExecutionViaMFE",!1);try{var b;let k=e();if(!k)return{success:!1,error:{message:"Code execution store not available"}};let _=()=>k,I=yield(b=i.agentIds,v(function*(){let e=yield(0,g.P)(t,{mode:"approvalOverride",enabled:!0,toolName:w,llmSafetyCheck:e=>(0,m.vb)(e),buildToolArgs:e=>({code:e})},b);if("blocked"===e.outcome)return`${a.o6.NOT_APPROVED} Reason: ${e.reason}`})());if(I)return I;let T=Math.max(5,"number"==typeof n&&n>0?n:15),S=60*T*1e3,E=t,x=r;if("sh"===r){let e,r=(e=(0,h.b)("user",(0,f.d)("user",""),()=>(0,f.d)("user_new","")),`/Workspace/Users/${e}`);(0,u.W)("databricks.fe.assistant.enableDatabricksCliInExecuteCode",!1)?(E=(0,p.Gc)(t,r),x="python"):E=`cd ${r}
${t}`}if(!s)return yield(0,y.h)(()=>v(function*(){let e=new AbortController,t=d?(0,o.NA)([d,e.signal]):e.signal,r=setTimeout(()=>e.abort(),S);try{let r=yield(0,l.rN)({type:l.Bo.EXECUTE_CODE,payload:{agentIds:i.agentIds,code:E,language:x,abortSignal:t,metadata:{traceId:i.agentIds.traceId,returnCellResults:!0,preferMarkdown:!1,skipGuardrail:!0}}});if(e.signal.aborted)return{success:!1,error:{message:`Execution timed out after ${T} minute(s). Consider simplifying the request or increasing the timeout parameter.`}};if(!r||r.error)return{success:!1,error:{message:r?.error||"RPC call failed"}};return{success:!0,cellResults:r?.cellResults||[],commandId:r?.commandInfo?.id,executionId:r?.commandInfo?.executionId,executionDurationMin:r?.executionDurationMin}}finally{clearTimeout(r)}})());return yield(0,y.h)(()=>v(function*(){let e=yield(0,c.u)({store:_,language:x,code:E,agentIds:i.agentIds,opts:{preferMarkdown:!1,timeoutMs:S,skipGuardrail:!0},abortSignal:d});if(!e.success)return{success:!1,error:{message:e.error?.message||"Unknown error occurred"}};return{success:!0,cellResults:e.data?.cellResults||[],commandId:e.data?.commandInfo?.id,executionId:e.data?.commandInfo?.executionId,executionDurationMin:e.data?.executionDurationMin}})())}catch(e){return{success:!1,error:{message:`${e instanceof Error?e.message:"unknown error"}`}}}})()
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.
- Redux action(s) dispatched via the MFE action bus (module `222716` — `rN({type: Bo.X, ...})`):
    - `Bo.EXECUTE_CODE` — handled outside this module by the corresponding MFE worker.
- Feature flags read during execution:
    - `databricks.fe.assistant.disableExecutionViaMFE`
    - `databricks.fe.assistant.enableDatabricksCliInExecuteCode`

**Helpers called from the body** (each is a different webpack module):

- `(0, u.W)(...)` (module `441535` — feature-flag reader — `W(flag, default)` reads workspace feature flags)
- `(0, g.P)(...)` (module `623457` — LLM-and-static safety check — `P(command, opts)` runs the policy gate before sensitive tool calls)
- `(0, m.vb)(...)` (module `152820`)
- `(0, h.b)(...)` (module `689262`)
- `(0, f.d)(...)` (module `686560` — search-result shaping helper)
- `(0, p.Gc)(...)` (module `407629`)
- `(0, y.h)(...)` (module `204109` — async-iterator yield helper used in tool generators)
- `(0, o.NA)(...)` (module `284810` — abortable-promise / cancellation helper used across tools)
- `(0, l.rN)(...)` (module `222716` — Redux action enum (`Bo`) + dispatcher (`rN`) — `rN({type: Bo.X, payload, ...})` posts an internal MFE action)
- `(0, c.u)(...)` (module `954662` — code-execution dispatcher — wraps `runDatabricksCli` and `executeCode` cell submission)

**What this proves vs. what it doesn't**:

- ✅ Redux action dispatch is statically verified — but the downstream MFE worker that handles each `Bo.X` action lives in a different module and may itself perform network I/O. The actual wire call (if any) is not visible from this handler.

## Verified network behaviour

Captured 2026-05-19 by patching `window.fetch` + `XMLHttpRequest` on the SPA and triggering the prompt below. Full request log (with bodies) is in [../../traces/executeCode.json](../../traces/executeCode.json).

**Trigger prompt:** `run this SQL for me and show me the result: SELECT 1 + 1 AS result`

**Endpoints fired (excluding agent-housekeeping common to every turn):**

- `POST /notebook/<thread-id>/command/<command-id>`
- `GET /notebook/<thread-id>/has-execution-context`

The agent runs SQL/Python inside a per-conversation "thread notebook" (the SPA creates one via `POST /notebook` at thread start; in this trace it was id `3473243573016638`). Each execution is `POST /notebook/<thread-id>/command/<command-id>` with the cell source as the payload. `has-execution-context` polls whether the warehouse / cluster is attached. The command id is allocated client-side and reused across turns of the same thread.
