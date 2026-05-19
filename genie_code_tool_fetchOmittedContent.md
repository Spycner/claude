# Genie Code tool: `fetchOmittedContent`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [genie_code_payload.md](genie_code_payload.md) for the full request envelope and [genie_code_findings.md](genie_code_findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **14 of 18**.

## Description

> Retrieves omitted content from the full tool output cache.
> 
> Use this tool when you see "__toolCallId" in a tool result that was compacted. Two main scenarios:
> 
> 1. **Lazy materialization** (has "__more" placeholders) - see examples below
> 2. **Summarization** (has "__toolCallId" but no "__more") - use path "." to get full original data
> 
> ## Common Scenarios & How to Handle Them
> 
> ### Scenario: Array with Remaining Items
> When you see:
> {
>   "__toolCallId": "toolu_bdrk_01ABC...",
>   "items": [
>     {"id": 1, "name": "Item 1"},
>     {"id": 2, "name": "Item 2"},
>     {"__more": {"path": ".items[2:]", "count": 2}}
>   ]
> }
> 
> **What the fields mean:**
> - `path: ".items[2:]"` = "Start fetching from index 2 onwards"
> - `count: 2` = "You were shown 2 items already" (aligns with the [2:] in path)
> 
> **To get the rest:**
> fetchOmittedContent({toolCallId: "toolu_bdrk_01ABC...", path: ".items[2:]"})
> 
> **Don't calculate yourself!** The path is already correct - just copy it.
> 
> ### Scenario: Truncated String with Preview
> When you see:
> {
>   "__toolCallId": "toolu_bdrk_01DEF...",
>   "data": {
>     "__more": {
>       "path": ".data[9000:]",
>       "value": "First 9000 characters of the string...",
>       "chars": 9000
>     }
>   }
> }
> 
> **What the fields mean:**
> - `path: ".data[9000:]"` = "Start fetching from character 9000 onwards"
> - `value` = "Preview showing you the first 9000 chars"
> - `chars: 9000` = "The preview contains 9000 characters" (aligns with the [9000:] in path)
> 
> **To get the rest:**
> fetchOmittedContent({toolCallId: "toolu_bdrk_01DEF...", path: ".data[9000:]"})
> 
> **Note:** Simply copy the path - it already tells you where to continue from!
> 
> ### Scenario: Nested Placeholder (Drill Down Multiple Times)
> The fetched content may itself contain "__more" placeholders. Just repeat:
> 1. Look for "__more" in the new result
> 2. Copy its "path" field
> 3. Call fetchOmittedContent again with that path
> 
> ### Scenario: No Placeholder (Just "__toolCallId")
> If there's "__toolCallId" but NO "__more" placeholders, the entire result was summarized.
> Use path "." to get the full original data:
> fetchOmittedContent({toolCallId: "toolu_bdrk_01GHI...", path: "."})
> 
> ## Key Rules
> 
> ✅ **DO:**
> - Copy the exact path from "__more.path" - it's pre-formatted with slice notation for you
> - Use `count` and `chars` to understand what was shown (they align with the slice index)
> - Drill down multiple times as needed if fetched content has more "__more" placeholders
> 
> ❌ **DON'T:**
> - Try to calculate slice indices yourself (the path already has them!)
> - Modify the path from the placeholder (it's already correct)
> - Include "__more" in the path (it's just the placeholder key, NOT part of the data path!)
> - Confuse this with simple "[Truncated: X chars...]" messages (those aren't retrievable)
> - Try to fetch paths that resolve to {"__removed": {...}} — these were permanently removed during pre-cache compression and cannot be retrieved. Retry with a more targeted query instead. (Strings ending in "[+more removed]" still contain a truthful preview that you can inspect, but the chars beyond it are gone too.)
> 
> **Understanding the fields:**
> - For arrays: `count` = number of items shown, `path` has slice notation like "[2:]"
> - For strings: `chars` = length of preview shown, `path` has slice notation like "[9000:]"
> - The number in the path and the count/chars value match!
> 
> **Common Mistake - Including "__more" in the path:**
> ```json
> // You see this in the response:
> {"data": {"__more": {"path": ".data[9000:]", "value": "preview..."}}}
> 
> // ❌ WRONG: Don't include "__more" in the path!
> fetchOmittedContent({path: ".data.__more"})  // This won't work!
> 
> // ✅ CORRECT: Use the path from inside __more
> fetchOmittedContent({path: ".data[9000:]"})  // This is correct!
> ```
> 
> The "__more" key is just part of the placeholder structure - the actual data path is stored in "__more.path".
> 
> ## Understanding sliceInfo in Responses
> 
> When you fetch sliced content (arrays or strings), the response includes `sliceInfo` with:
> - `start`: Where this slice starts (e.g., 9438)
> - `end`: Where this slice ends (e.g., 16104)
> - `totalLength`: Total length of the full array/string (e.g., 30000)
> - `hasMore`: Boolean - whether there's more content after this slice
> 
> **Example:**
> ```json
> {
>   "value": "... 6666 chars ...",
>   "sliceInfo": {
>     "start": 9438,
>     "end": 16104,
>     "totalLength": 30000,
>     "hasMore": true
>   }
> }
> ```
> 
> **How to use it:**
> - If `hasMore: true`, call fetchOmittedContent again with path `".yourPath[{end}:]"`
> - If `hasMore: false`, you've fetched everything
> - `totalLength` tells you the size of the complete array/string
> 
> ## Finding the Tool Call ID
> Look for "__toolCallId" at the TOP LEVEL of the tool result (not nested inside).

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "toolCallId": {
      "type": "string",
      "description": "The tool call ID from the original tool invocation that had content omitted. This should be available as __toolCallId at the top level of the tool result."
    },
    "path": {
      "type": "string",
      "description": "The jq-style path to fetch from the cached content. Supports path expressions, array indexing, array slicing, and string slicing:\n- Identity/root: \".\" - retrieves the complete original data (use this to recover full results after summarization)\n- Object property: \".data\", \".data.items\"\n- Array indexing: \".data.items[42]\" - returns single element\n- Array slicing: \".data.items[10:30]\", \".data.items[10:]\", \".data.items[:10]\"\n- String slicing: \".message[0:100]\", \".text[50:]\" - extracts substring (single-index NOT supported for strings)\n- Root-level slicing: If the cached data itself is an array or string, use \".[0:10]\" or \".[5:]\" to slice directly\nOther jq features are not supported."
    }
  },
  "required": [
    "toolCallId",
    "path"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `toolCallId` (string) — The tool call ID from the original tool invocation that had content omitted. This should be available as __toolCallId at the top level of the tool result.
* `path` (string) — The jq-style path to fetch from the cached content. Supports path expressions, array indexing, array slicing, and string slicing:

## All properties

### `toolCallId` **(required)**

Type: `string`.

> The tool call ID from the original tool invocation that had content omitted. This should be available as __toolCallId at the top level of the tool result.

### `path` **(required)**

Type: `string`.

> The jq-style path to fetch from the cached content. Supports path expressions, array indexing, array slicing, and string slicing:
> - Identity/root: "." - retrieves the complete original data (use this to recover full results after summarization)
> - Object property: ".data", ".data.items"
> - Array indexing: ".data.items[42]" - returns single element
> - Array slicing: ".data.items[10:30]", ".data.items[10:]", ".data.items[:10]"
> - String slicing: ".message[0:100]", ".text[50:]" - extracts substring (single-index NOT supported for strings)
> - Root-level slicing: If the cached data itself is an array or string, use ".[0:10]" or ".[5:]" to slice directly
> Other jq features are not supported.

## Handler notes

Extracted from webpack module `697085` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
({toolCallId:e,path:t},r,s)
```

**Execute body** (verbatim, minified — webpack module `697085`, 1972 bytes):

```javascript
{var o;return(o=function*(){try{let o=yield(0,l.kk)((0,a.a3)(e,t,r),s),i=o.toolName?` for tool "${o.toolName}"`:"";if(!o.success)if("cacheKeyNotFound"===o.errorType)return{success:!1,error:{message:`${o.message}

toolCallId "${e}"${i} was not found in the tool call result cache. It has either expired or there is a typo in the ID. Check that the toolCallId is correct or repeat the original tool call again to refresh the result cache.`}};else if("invalidPath"===o.errorType)return{success:!1,error:{message:`${o.message}

Check the path syntax:
- Object access: ".data.items"
- Array indexing: ".data.items[0]"
- Array slicing: ".data.items[10:20]" or ".data.items[10:]"`}};else return{success:!1,error:{message:o.message}};if(void 0===o.value)return{success:!1,error:{message:`Path "${t}" does not exist in the cached data for toolCallId "${e}".

The path may be incorrect. Try calling ${d} again with a corrected path:
- Check the structure shown in the placeholder's fetch_omitted_params
- Verify the path syntax (e.g., ".data.items" or ".data.items[0]")
- Or call the original tool "${o.toolName}"${i} again to see its full output structure`}};if((0,n.wK)(o.value,n.dK))return{success:!1,error:{message:`[PERMANENTLY_REMOVED] Path "${t}" resolves to a {"__removed": {...}} placeholder. The original data at this position was permanently discarded during pre-cache compression and cannot be retrieved. Retry with a different (more targeted) query, or call the original tool "${o.toolName}"${i} again with a narrower scope.`}};let u={toolCallId:e,path:t,value:o.value};return o.toolName&&(u.toolName=o.toolName),o.sliceInfo&&(u.sliceInfo=o.sliceInfo),{success:!0,data:u}}catch(e){return{success:!1,error:{message:`Error fetching omitted content: ${e instanceof Error?e.message:String(e)}`}}}},function(){var e=this,t=arguments;return new Promise(function(r,s){var a=o.apply(e,t);function n(e){u(a,r,s,n,i,"next",e)}function i(e){u(a,r,s,n,i,"throw",e)}n(void 0)})})()}
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.

**Helpers called from the body** (each is a different webpack module):

- `(0, l.kk)(...)` (module `284810` — abortable-promise / cancellation helper used across tools)
- `(0, a.a3)(...)` (module `647777`)
- `(0, n.wK)(...)` (module `865532`)

**What this proves vs. what it doesn't**:

- ⚠️  The handler delegates to one or more helper modules whose internals were not traced in this pass. The actual network endpoint (or absence of one — some tools manipulate local Redux state only) is therefore **not statically verified** from this source. To confirm what each helper does on the wire, see the network-trace follow-up in [genie_code_followups.md](genie_code_followups.md) §1.

