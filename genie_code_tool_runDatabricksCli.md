# Genie Code tool: `runDatabricksCli`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [genie_code_payload.md](genie_code_payload.md) for the full request envelope and [genie_code_findings.md](genie_code_findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **3 of 18**.

## Description

> Run a Databricks CLI command.
> 
> - Executes the given command using the Databricks CLI (`databricks` binary) on the attached compute.
> - The "databricks" prefix is added automatically — only provide the subcommand and arguments.
> - Examples: "clusters list", "jobs list --output JSON", "bundle deploy --target dev".
> - The CLI is pre-authenticated with the current user's credentials on Databricks compute.
> - Shell piping (`|`) and redirection (`>`, `>>`, `<`) are not supported.
> 

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "summary": {
      "type": "string",
      "description": "A short 3-8 word summary starting with a verb describing the specific action the CLI command performs, based on the command content — not the user's request (e.g. \"List all active clusters\")."
    },
    "command": {
      "type": "string",
      "description": "The Databricks CLI command to execute, without the leading \"databricks\" prefix. For example: \"clusters list\" or \"jobs list --output JSON\"."
    }
  },
  "required": [
    "summary",
    "command"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `summary` (string) — A short 3-8 word summary starting with a verb describing the specific action the CLI command performs, based on the command content — not the user's request (e.g. "List all active clusters").
* `command` (string) — The Databricks CLI command to execute, without the leading "databricks" prefix. For example: "clusters list" or "jobs list --output JSON".

## All properties

### `summary` **(required)**

Type: `string`.

> A short 3-8 word summary starting with a verb describing the specific action the CLI command performs, based on the command content — not the user's request (e.g. "List all active clusters").

### `command` **(required)**

Type: `string`.

> The Databricks CLI command to execute, without the leading "databricks" prefix. For example: "clusters list" or "jobs list --output JSON".

## Handler notes

Extracted from webpack module `687694` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({command:a},n,o)
```

**Execute body** (verbatim, minified — webpack module `687694`, 2365 bytes):

```javascript
b(function*(){let v=n.agentIds;try{let n=yield b(function*(){let e=function(e){if(S.test(e))return`${s.o6.NOT_APPROVED} Reason: Command must not reference DATABRICKS_* environment variables`;if(E.test(e))return`${s.o6.NOT_APPROVED} Reason: Command must not contain template variable placeholders ({{ }})`}(a);if(e)return e;let t=yield(0,f.P)(a,{mode:p.mode??"blockOnly",enabled:!0,toolName:k,staticCheck:(0,f.Q)(e=>(0,g.BU)(e,p)),llmSafetyCheck:e=>m(function*(){let t=yield m(function*(){let t=(0,u.u)(),r=new l.g({name:"CliSafetyAgent",instructions:h,model:t,modelSettings:{temperature:0},tools:[],flow:"default",toolUseBehavior:"run_llm_again",flowSettings:{purpose:"standard"}}),s=(0,c.c)();return(yield s.run(r,`Check the safety of the following Databricks CLI command. Remember to only respond in JSON. Do not use backticks. 

databricks ${e}`,{maxTurns:1,clientId:d.O.EditorAssistantExecutionSafety,charsPerToken:4})).output.filter(e=>"role"in e&&"assistant"===e.role).map(e=>e.content.filter(e=>"output_text"===e.type).map(e=>e.text).join("")).join("")||null})();try{if(!t)return{success:!1,message:"CLI command blocked: Unable to verify command safety (empty response)",userMessage:"Unable to verify command safety (empty response)"};let e=JSON.parse(t);if(!e.safe){let t=e.thoughts||"CLI command contains potentially unsafe operations";return{success:!1,message:`CLI command blocked for safety reasons: ${t}`,userMessage:`Review suggested: ${t}`}}return{success:!0}}catch(e){return{success:!1,message:"CLI command blocked: Unable to verify command safety",userMessage:"Unable to verify command safety"}}})(),buildToolArgs:e=>({command:e})},v);if("blocked"===t.outcome)return`${s.o6.NOT_APPROVED} Reason: ${t.reason}`})();if(n)return n;let w=t([a],r??"",{includeStderrInError:!0,cliUpstream:"genie-code"}),_=yield(0,i.u)({store:e,language:"python",code:w,agentIds:v,opts:{timeoutMs:3e5,preferMarkdown:!1,skipGuardrail:!0},abortSignal:o});if(!_.success)throw Error(function(e){if(!e)return e;let t=e.match(/Command \[.*?\] failed with exit code \d+:\n?([\s\S]*?)(?=\[Trace ID:|$)/);return t?t[1].trim():e}(_.error?.message)||"Unknown error");let I={success:!0,cellResults:_.data?.cellResults||
…[truncated]
```

_(body truncated at 2,200 chars; full 2365-byte source is in `.workbench/tool_handlers.json` under `runDatabricksCli.body` and the captured factory in `.workbench/tool_factories.json`.)_

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.

**Helpers called from the body** (each is a different webpack module):

- `(0, f.P)(...)` (module `623457` — LLM-and-static safety check — `P(command, opts)` runs the policy gate before sensitive tool calls)
- `(0, f.Q)(...)` (module `623457` — LLM-and-static safety check — `P(command, opts)` runs the policy gate before sensitive tool calls)
- `(0, g.BU)(...)` (module `774666`)
- `(0, u.u)(...)` (module `661658`)
- `(0, c.c)(...)` (module `109867`)
- `(0, i.u)(...)` (module `954662` — code-execution dispatcher — wraps `runDatabricksCli` and `executeCode` cell submission)

**What this proves vs. what it doesn't**:

- ⚠️  The handler delegates to one or more helper modules whose internals were not traced in this pass. The actual network endpoint (or absence of one — some tools manipulate local Redux state only) is therefore **not statically verified** from this source. To confirm what each helper does on the wire, see the network-trace follow-up in [genie_code_followups.md](genie_code_followups.md) §1.

