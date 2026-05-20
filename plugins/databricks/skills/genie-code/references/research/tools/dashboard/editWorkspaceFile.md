# Dashboard tool: `editWorkspaceFile`

Verbatim function-calling tool definition shipped by the **Dashboard Authoring Agent** on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA, opening a dashboard draft canvas, and triggering a single `hi` chat message. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent's identity, system prompt outline, and skill registry; and [`../../overview/payload.md`](../../overview/payload.md) for the request envelope shared with the other Genie Code agents.

Position in tools array: **22 of 34**.

## What this tool does

> Edit a workspace file by search-and-replace. Used when a dataset reads from a workspace file (e.g., a notebook used as a dataset source).

## Description (verbatim from wire body)

> Edit a workspace file by searching for text and replacing it. Use this to update files incrementally rather than rewriting the entire file. The search text must match exactly and occur only once in the file. Use searchText="" (empty string) to append to the end of a file or create a new file if it doesn't exist. This tool requires user approval before execution.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "The full workspace file path to edit (e.g., \"/Users/user@databricks.com/.assistant_instructions.md\")."
    },
    "searchText": {
      "type": "string",
      "description": "The exact text to search for in the file. This text must occur exactly once in the file. If it occurs zero times or more than once, the edit will fail."
    },
    "replaceText": {
      "type": "string",
      "description": "The text to replace the search text with."
    }
  },
  "required": [
    "path",
    "searchText",
    "replaceText"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `path` (string) — The full workspace file path to edit (e.g., "/Users/user@databricks.com/.assistant_instructions.md").
* `searchText` (string) — The exact text to search for in the file. This text must occur exactly once in the file. If it occurs zero times or more than once, the edit will fail.
* `replaceText` (string) — The text to replace the search text with.

## All properties

### `path` **(required)**

Type: `string`.

> The full workspace file path to edit (e.g., "/Users/user@databricks.com/.assistant_instructions.md").

### `searchText` **(required)**

Type: `string`.

> The exact text to search for in the file. This text must occur exactly once in the file. If it occurs zero times or more than once, the edit will fail.

### `replaceText` **(required)**

Type: `string`.

> The text to replace the search text with.

## Handler notes

Extracted from SPA chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). The Dashboard Authoring Agent registers each tool via a `(0,az.z6)({...})` factory call inside the agent context's `useMemo`, with the actual handler defined in a sibling `useCallback`. The wrapper below is verbatim minified JavaScript.

**Inline `execute` arrow** (verbatim, minified — 2729 bytes):

```javascript
({path:i,searchText:n,replaceText:h},w)=>{var v;return(v=function*(){try{let y;if(!i||"string"!=typeof i)return(0,s.W)("Path parameter is required and must be a string");if((0,p.s)(i))return(0,s.W)(p.J);let v=(0,o.T)(i);if("string"!=typeof n)return(0,s.W)("searchText parameter is required and must be a string");if("string"!=typeof h)return(0,s.W)("replaceText parameter is required and must be a string");let b=yield(0,c.qQ)(i,"file"),x=b.httpError&&404===b.status;if(b.httpError&&!x)return(0,s.W)(`Failed to read file at path "${i}": HTTP ${b.status}`);let N=x?"":b.data||"";if(""===n)y=N+h;else{let e=N.split(n).length-1;if(0===e)return(0,s.W)(`Search text not found in file. The exact text "${n.slice(0,100)}${n.length>100?"...":""}" does not exist in the file.`);if(e>1)return(0,s.W)(`Search text found ${e} times in file. The search text must be unique (occur exactly once). Please provide a more specific search text that includes surrounding context.`);y=N.replace(n,h)}if((0,u.W)("databricks.fe.assistant.useSuggestionsBaseline",!1)&&!x){let e={},t=yield(0,g.jf)(i);t.registerInterest(e);try{yield(0,f.VF)(t)}catch(e){return(0,s.W)(`Error: ${e.message}`)}finally{t.unregisterInterest(e)}}if(e){let{formatDiffForSafetyCheck:e}=yield(()=>{let e=()=>Promise.all([a.e(62280),a.e(90489),a.e(30259),a.e(79637),a.e(83526)]).then(a.bind(a,433072));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(433072,"$project/notebook/assistant/chat/tools/formatDiffForSafetyCheck","lazy",e);return e()})(),r=e({contentAfter:y,contentBefore:N}),i=yield(0,l.P)(r,{mode:"blockOnly",toolName:"editWorkspaceFile",llmSafetyCheck:e=>(0,d.vb)(e,t),buildToolArgs:e=>({code:e})},w.agentIds);if("blocked"===i.outcome)return(0,s.W)(i.reason)}if(x){let e=yield(0,m.S)("/ajax-api/2.0/workspace/import",{method:"POST",body:JSON.stringify({format:"AUTO",path:i,content:r.Buffer.from(y).toString("base64"),overwrite:!1})});if(!e.ok)return(0,s.W)(`Failed to create file. (HTTP ${e.status})`);let t=(yield e.json()).object_id;t&&(yield new Promise(e=>window.conn.prefetchNode(Number(t),e)))}else try{let e=yield(0,g.jf)(i);yield(0,g.fu)({content:y,notebook:e})}catch(e){return(0,s.W)(`Failed to save file: ${e instanceof Error?e.message:"unknown error"}`)}let E=i.split("/").pop()||i,R=yield v,A=JSON.stringify({success:!0,path:i,fileName:E,message:`Successfully updated "${E}". Replaced ${n.length} characters with ${h.length} characters.`},null,2);return(0,s.l)(R?`${A}

${R}`:A)}catch(e){return(0,s.W)(`${e instanceof Error?e.message:"unknown error"}`)}},function(){var e=this,t=arguments;return new Promise(function(a,r){var i=v.apply(e,t);function n(e){y(i,a,r,n,s,"next",e)}function s(e){y(i,a,r,n,s,"throw",e)}n(void 0)})})()}
```

**Verified wire-level evidence** (literal in the handler body):

- REST endpoints (POST):
    - `/ajax-api/2.0/workspace/import`
- Feature flags read during execution:
    - `databricks.fe.assistant.useSuggestionsBaseline`

**Helpers called from the body** (`(0, alias.member)(...)` references):

- `(0, s.W)(...)` 
- `(0, p.s)(...)` 
- `(0, o.T)(...)` 
- `(0, c.qQ)(...)` 
- `(0, u.W)(...)` 
- `(0, g.jf)(...)` 
- `(0, f.VF)(...)` 
- `(0, l.P)(...)` 
- `(0, d.vb)(...)` 
- `(0, m.S)(...)` 
- `(0, g.fu)(...)` 
- `(0, s.l)(...)` 

_Aliases (`tl`, `tN`, `tR`, `r8`, `rW`, etc.) are chunk-local imports. Resolve them to module IDs by grepping the chunk for `<alias>=r(<id>)` near the factory IIFE._


## Verified network behaviour

_(Live wire trace not yet captured for this tool. To collect: open a dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture from [`../../traces/`](../../traces/), then trigger this tool from the UI or via a directed prompt. Save the resulting request log as `../../traces/editWorkspaceFile.json`.)_
