# Genie Code — Reverse-Engineering Follow-ups

Open work-items deferred from the main reverse-engineering pass. Each is shaped so a future session can pick it up cold.

## 1. Verify tool handlers by triggering them from Genie Code itself

**Status:** deferred (we extracted handler implementations from the SPA chunks instead — see `genie_code_tool_*.md` "Handler notes" sections rewritten from source code). This follow-up is the wire-level verification step.

**What:** Drive Genie Code in the SPA so it actually fires each of the 18 tools, and capture the outbound network traffic via the chrome-devtools MCP. Compare the observed REST calls against the handler notes derived from the chunks. Flag any discrepancies (chunk source may have multiple code paths; only one fires per scenario).

**Why now or later:** This is the authoritative confirmation that what the chunks *say* the handler does matches what it *actually* does on this workspace. Chunk extraction is great evidence but it's still static analysis — feature flags, runtime branches, and per-environment switches can route the actual call somewhere else. Worth doing once before publishing the wire-level docs as ground truth.

**How:**

1. Open `/editor/folders/workspace?mode=chat` in the chrome-devtools MCP browser (already authenticated via existing DBAUTH cookie + CSRF; if expired, run `/auth/session/refresh` or rerun the email-OTP login).
2. Patch `window.fetch` (same pattern used to capture `genie_llmproxy_body.json` — `.workbench/genie_llmproxy_body.json`) but record **every** outbound request, not just `llmproxy`. Cap the body slice or write to disk in chunks so the capture doesn't OOM the page.
3. For each of the 18 tools, send a prompt that forces it to fire:
   - `recommendDataroom`: "what genie spaces do I have on this workspace?"
   - `askDataroom`: "ask the <first space> what its largest table is"
   - `runDatabricksCli`: "run `databricks current-user me`"
   - `renderChart`: "make a bar chart of the first 5 rows of any sample table"
   - `docSearch`: "find the official docs page on Lakeflow Spark Declarative Pipelines"
   - `readTable`: "show me the schema of samples.nyctaxi.trips"
   - `tableSearch`: "find tables about taxi trips"
   - `querySearch`: "find saved queries about lego"
   - `forYouAssets`: "show me my recents and favorites"
   - `searchAssets`: "search for all notebooks in /Users/pgoellner@deloitte.de"
   - `manageTodoList`: any task that triggers "Structured Planning" per the system prompt — eg. "audit my workspace for unused clusters, plan the steps first"
   - `readSkillFile`: implicit on any task that hits the registry — confirm the call observed for a SQL-writing prompt
   - `readAssetById`: "open notebook 94074149243400 cell 1"
   - `fetchOmittedContent`: needs a long prior tool result that got compacted — easiest is to first ask for "every table in main" then ask "what's the 12th table"
   - `createAsset`: "make me a new notebook called scratch-1"
   - `openAsset`: "open the bike training notebook" (after a `searchAssets` resolves it)
   - `executeCode`: "run select 1 + 1"
   - `findReferencesTool`: "what depends on samples.nyctaxi.trips"
4. For each prompt, grab the captured network entries that fire between the user's submit and the next SSE `[DONE]`. Diff against the handler notes.
5. Save the consolidated capture to `.workbench/genie_tool_network_traces.json` and reference it from each tool ref file's verification section.

**Acceptance:** every `genie_code_tool_*.md` has a "Verified network behaviour" subsection citing the actual observed REST call(s), or a "Could not trigger" note explaining why (eg. tool gated on a workspace feature we don't have).

## 2. Get Genie Code to do this reverse-engineering for us

**Status:** experiment / curiosity. Not blocking anything.

**What:** Hand Genie Code itself the entire reverse-engineering brief and see whether it can:

- Read its own SPA chunks
- Identify its own tools, skills, and system prompt
- Run `runDatabricksCli` / `executeCode` for verification
- Produce reference documentation comparable to what we extracted by hand

**Why:** Two reasons. (a) Genie Code has `runDatabricksCli`, `executeCode`, `docSearch`, and `readSkillFile` on this workspace — these are exactly the tools you'd want for self-documentation. (b) It's a great stress-test of how good Claude Opus 4.6 is at reading its own minified webpack output when given Databricks-native plumbing.

**How:**

1. Open a fresh Genie Code chat.
2. Prompt it with the same task we just executed: "I want a per-tool and per-skill reference file for everything you can do on this workspace. Use your tools to figure out what your other tools do — ground every claim in something you can actually call, not in your training data."
3. Compare the output against `genie_code_tool_*.md` / `genie_code_skill_*.md`. Where does it hallucinate? Where does it actually inspect chunks? Does it know about its own SkillRegistry chunk (`19604.5ae31ee5cc.chunk.js`)?
4. Useful sub-experiments:
   - Can it read the asset manifest `index.<hash>.js` and enumerate chunk URLs? It would have to use `executeCode` with a Python `urllib.request` call (or `runDatabricksCli secrets ...` won't help here).
   - Can it parse out its own webpack module exports? Probably yes via `executeCode` + Python + a regex.
   - When asked "what does `findReferencesTool` actually call", does it pretend to know, or actually grep its own bundle?
5. If results are decent, this becomes a great demo for the client pitch: "Genie Code can document itself".

**Acceptance:** a short report `notes/genie-self-documentation-experiment.md` comparing Genie Code's output to the hand-extracted references, noting what it got right, what it confabulated, and where it added insight we missed.

## 3. Other open items inherited from `genie_code_findings.md`

* Reproduce `cache_control: ephemeral` on the system message via the serving-endpoint path (cost-saving on the multi-thousand-token system prompt).
* Behaviour of `.assistant_instructions.md`, `.assistant_workspace_instructions.md`, `.github_mcp_config.json` lookups when present (currently 404 on this workspace).
* `tool_use_delta` / `thinking_delta` chunk format on `stream: true` against the serving endpoint.
* Federated SP path (P5 in findings) — whether Databricks can mint an `id_token` for a service principal that would complete `/federated_oidc/consume`.
* The GraphQL backend (`/api/2.0/genai-mapi/universegraphql`) — bearer-token compatible ops, persisted thread/session shape, model registry.

These are smaller and listed in `genie_code_findings.md`; copy them into specific tickets if/when they become blocking.
