# Genie Code tool: `readSkillFile`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [genie_code_payload.md](genie_code_payload.md) for the full request envelope and [genie_code_findings.md](genie_code_findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **12 of 18**.

## Description

> Read a skill file from the unified skills namespace. Use this to access skill documentation, implementation guides, reference materials, code examples... The tool automatically finds the file from the appropriate source. Can also be used to declare that no skills are needed by passing an empty string for filePath.

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "properties": {
    "filePath": {
      "type": "string",
      "description": "Path to the skill file to read. Use format: \"skills/{skill-name}/{file}.md\". Examples: \"skills/auto-loader/SKILL.md\", \"skills/auto-loader/auto-loader-python.md\", \"skills/my-custom-skill/SKILL.md\". Use empty string \"\" if no skills are needed for this request."
    }
  },
  "required": [
    "filePath"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `filePath` (string) — Path to the skill file to read. Use format: "skills/{skill-name}/{file}.md". Examples: "skills/auto-loader/SKILL.md", "skills/auto-loader/auto-loader-python.md", "skills/my-custom-skill/SKILL.md". Use empty string "" if no skills are needed for this request.

## All properties

### `filePath` **(required)**

Type: `string`.

> Path to the skill file to read. Use format: "skills/{skill-name}/{file}.md". Examples: "skills/auto-loader/SKILL.md", "skills/auto-loader/auto-loader-python.md", "skills/my-custom-skill/SKILL.md". Use empty string "" if no skills are needed for this request.

## Handler notes

Extracted from webpack module `484383` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
r
```

**Execute body** (verbatim, minified — webpack module `484383`, 531 bytes):

```javascript
p(function*(){try{if(""===r.filePath||""===r.filePath.trim())return{success:!0,content:"Skill assessment acknowledged. No skills needed for this request. You may proceed directly with your work.",isUserSkill:!1,skillsetName:e[0]?.name??"default"};let s=yield t(r.filePath);if("error"in s)return{success:!1,error:{message:s.error}};return{success:!0,content:s.content,isUserSkill:s.isUserSkill,skillsetName:s.skillsetName??"default"}}catch(e){return{success:!1,error:{message:`${e instanceof Error?e.message:"unknown error"}`}}}})()
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.

**Helpers called from the body** (each is a different webpack module):

_(none — the body is self-contained.)_

**What this proves vs. what it doesn't**:

- ✅ Self-contained handler. The body invokes no helpers, dispatches no Redux actions, and contains no URL literals — so this tool performs **local-state mutations only** (e.g. session store, in-memory Redux slice). No network I/O is fired by this execute call.

