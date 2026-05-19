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

## 3. Per-page agents (Notebook, Dashboard, Pipeline, Jobs, …)

**Status:** unexplored. The biggest scope extension of this work and the one with the lowest marginal cost (same chunk-extraction technique).

**What:** `chatAgent` and `lakeAgent` are only two of the agent personas the SPA ships. Every editor page has its own agent with its own system prompt, tool set, and skill registry. The system prompt itself names: **Notebook Agent**, **Dashboard Authoring Agent**, **Pipeline Editor Agent**, **Pipeline Monitoring Agent**, **Jobs Agent**, **Data Engineer Agent**, **Visual ETL / Designer agent**, **Ingestion setup agent**. `openAsset` with `continueMessage` is how the chat hands off between them.

**Why:** Same reverse-engineering pipeline produces a parallel doc set. Compare-and-contrast between agents (which tools each one excludes, how the persona shifts) is publishable as a single artifact and matters directly to any client wanting to embed Databricks-style agents elsewhere.

**Where to pick up cold:**

1. The agent factory pattern is `new a.g({name: G, instructions: () => ..., tools: l, ...})` where `a.g` is the Agent class. We already saw it for chatAgent in chunk `19604.5ae31ee5cc.chunk.js`. Grep all chunks for `name:G,instructions:` to find every agent registration.
2. To capture each agent's llmproxy POST live, navigate to its page in the chrome-devtools-mcp browser (each URL hint is in `genie_code_findings.md`: `/editor/notebooks/<id>?mode=chat`, `/jobs`, `/jobs/<id>/runs`, dashboard draft canvas, pipeline editor, etc.), patch `window.fetch` per the script in `.workbench/` history, and send any "hi" message. Each page fires its own llmproxy body.
3. Output: `genie_code_agent_<name>.md` per agent, in the same style as `genie_code_payload.md`, listing system prompt + tools + skills + observed model.

**Acceptance:** an "agent matrix" page comparing all agents' tool/skill availability (probably a markdown table).

## 4. Sub-agents that ride on top of tool calls

**Status:** observed but not mapped. Probably the highest-novelty find for our own agent work.

**What:** Four sub-agents fire their own `llmproxy` calls in addition to the main turn:

| Sub-agent | When it fires | Module / search anchor |
|---|---|---|
| `CliSafetyAgent` | Before `runDatabricksCli` executes a command | chunk `19604.5ae31ee5cc.chunk.js`, search `name:"CliSafetyAgent"` (inside factory module `687694`) |
| `migrationConverterSubagent` | When `migration-orchestrator` skill runs across SQL files | grep `migrationConverterSubagent` in chunks; the orchestrator's SKILL.md describes the dispatch contract |
| `followups-agent` | After the main turn, to generate the 3 follow-up suggestions | chunk `19604.5ae31ee5cc.chunk.js`, module `978706`, search `followups-agent` |
| `auto-learning-memory` | Long-running tasks that should record cross-session learnings | chunk `19604.5ae31ee5cc.chunk.js`, search `c="auto-learning-memory"` |

**Why:** This is the orchestration pattern we'd want to replicate in our own agents: a tool handler that, before executing, fires its own LLM call against a different system prompt and (probably) a smaller model. We saw `model-priority` enum references suggesting Sonnet/Haiku fallbacks for these sub-calls.

**Where to pick up cold:**

1. For each sub-agent, find its system prompt the same way we found the main one — locate the factory module via grep, extract the `instructions:` string literal.
2. Capture two consecutive llmproxy POSTs (main + sub-agent) by triggering the relevant tool. Compare `_llmproxy_fields.model_registration`, `agent_name`, `client_id`, and the messages array shape.
3. Output: a single `genie_code_subagents.md` reference covering the four, with the orchestration sequence diagrammed.

**Acceptance:** the orchestration sequence (which sub-agent fires when, against which model, with which system prompt) is documented and reproducible.

## 5. `auto-learning-memory` — Genie Code's long-term memory

**Status:** the most novel pattern we stumbled on. Worth a dedicated session.

**What:** A separate tool (NOT in the 18) gives the agent CRUD access to `/Users/<user>/.assistant/memory/` as a markdown file tree. Commands: `view`, `create`, `str_replace`, `insert`, `delete`. Entrypoint is `MEMORY.md` (used as an index). The tool's full description ships verbatim in the SPA — we extracted a fragment during the helper scan.

**Why:** This is exactly the pattern Anthropic recommends for agent memory (markdown sidecars in a workspace), implemented end-to-end inside a production product. It's directly portable to our own agent designs without much modification.

**Where to pick up cold:**

1. Tool factory: chunk `19604.5ae31ee5cc.chunk.js`, search `c="auto-learning-memory"`. The full `parametersSchema` (the `u` object near the constant) plus the description string `d` live in the same module.
2. To dump the live factory: in a fresh Genie Code tab, leak `__webpack_require__` via the chunk-push trick used earlier (see `.workbench/parse_tool_handlers.py` — same pattern), call `r.m[<mid>].toString()`, save.
3. To observe the wire behaviour: write a memory file by hand via the workspace REST API (`POST /ajax-api/2.0/workspace/mkdirs` then `POST /ajax-api/2.0/workspace/import`), open Genie Code in a multi-turn task, watch whether the agent reads `MEMORY.md` at session start via `readSkillFile` or directly via `workspace/export`.
4. Output: a `genie_code_memory.md` ref file matching the tool-ref format, plus a short notes section on the storage contract.

**Acceptance:** the storage schema, expected file-tree shape, and read/write protocol are documented end to end.

## 6. The GraphQL backend at `/api/2.0/genai-mapi/universegraphql`

**Status:** identified, not mapped. Required for "real" thread semantics in a programmatic driver.

**What:** Single Apollo client; ops referenced across chunks include `GetClientConfig`, `GetSessionQuery`, `ConversationModelStatuses`, `GetAssistantEnabled`, `GetAssistantEnabledWorkspace`, `GetGenieSpaceNameByUuid`. This is almost certainly where conversation thread persistence, model registry, and per-workspace assistant settings live.

**Where to pick up cold:**

1. The Apollo client is configured in chunk `63192.368e9181cf.chunk.js`. Grep that chunk for the client constructor and the operation definitions to enumerate every op the SPA can fire.
2. To capture live ops: in the chrome-devtools-mcp browser, patch `window.fetch` to record POSTs to `/api/2.0/genai-mapi/universegraphql` (already a one-liner extension of the llmproxy capture script in `.workbench/`). Click around: open the chat panel, switch threads, list Genie Spaces, view the assistant settings dialog. Each click triggers different ops.
3. Once you have the op bodies, probe each with an OAuth bearer (no DBAUTH) to see which are bearer-accessible — bearer-accessible ops can drive a fully programmatic thread manager without the DBAUTH bootstrap.

**Acceptance:** a `genie_code_graphql.md` ref with each op's query/mutation text, variables shape, and auth class (bearer vs DBAUTH-only).

## 7. Custom user skills — is Genie Code a platform?

**Status:** experiment, not investigation. Quick win if it works.

**What:** Genie Code's system prompt mentions custom skills loadable by `readSkillFile`. The path convention should be `skills/<name>/SKILL.md`, resolved against the user's workspace. If a user-authored SKILL.md is picked up by `readSkillFile`, Genie Code is effectively a platform — every customer can ship their own skill pack on top of the built-ins.

**Why:** Pitch-shifter. If true, the client conversation goes from "we built tooling around Genie Code" to "Genie Code's extensibility surface is workspace files — here's our skill pack".

**Where to pick up cold:**

1. Author a tiny test skill in the user's workspace:
   ```
   POST /ajax-api/2.0/workspace/mkdirs
     {"path": "/Users/pgoellner@deloitte.de/.assistant/skills/test-custom-skill"}
   POST /ajax-api/2.0/workspace/import
     {"format": "AUTO",
      "path": "/Users/pgoellner@deloitte.de/.assistant/skills/test-custom-skill/SKILL.md",
      "content": "<base64 of a real skill markdown with a distinctive trigger phrase>"}
   ```
2. Open Genie Code and ask a question whose answer is uniquely encoded in your custom SKILL.md (e.g. a fake business term + definition that won't appear elsewhere). Observe whether `readSkillFile` fires for `skills/test-custom-skill/SKILL.md` and whether the answer reflects the custom content.
3. Cross-reference: did the system prompt's Skill Registry section actually mention `test-custom-skill`, or did the agent stumble on it via `readSkillFile` with a guessed path?

**Acceptance:** a yes/no + reproducer. If yes, follow up with a "how to author a skill pack" guide and an example skill.

## 8. Sibling LLM products on the same workspace

**Status:** partially mapped (legacy Workspace Assistant has its endpoints in Appendix A of findings).

**What:** At least three coexisting LLM product surfaces:
1. **Genie Code** (this work — `llmproxy` + LakeAgent)
2. **Classic Workspace Assistant** (legacy — `/ajax-api/2.0/conversation/assistant/*` + Lakesense). Chunks `35758.*`, `8802.*`, `23308.*`. Endpoint list in `genie_code_findings.md` Appendix A.
3. **Genie Spaces** (data-rooms, SQL Q&A) — `/api/2.0/genie/spaces/...`, reachable from Genie Code via `recommendDataroom` / `askDataroom`.

**Where to pick up cold:**

1. For each product, re-run the chunk-extraction technique we used here: identify the factory modules, dump the system prompts and tool sets, write parallel reference files.
2. Build a comparison matrix: model used, prompt cache behaviour, auth class, tool surface, billing model (Genie Code bundled in workspace subscription, Genie Spaces metered, classic Assistant — TBD).

**Acceptance:** one decision document explaining when a client should use which product.

## 9. Other open items inherited from `genie_code_findings.md`

* Reproduce `cache_control: ephemeral` on the system message via the serving-endpoint path (cost-saving on the multi-thousand-token system prompt).
* Behaviour of `.assistant_instructions.md`, `.assistant_workspace_instructions.md`, `.github_mcp_config.json` lookups when present (currently 404 on this workspace).
* `tool_use_delta` / `thinking_delta` chunk format on `stream: true` against the serving endpoint.
* Federated SP path (P5 in findings) — whether Databricks can mint an `id_token` for a service principal that would complete `/federated_oidc/consume`.
* Resolving the helper modules still listed as "unresolved" in each `genie_code_tool_*.md` (32 unique helper modules across the 18 tools — most are 1–2 KB and can be resolved with the same `__webpack_require__` leak + `.toString()` trick).

These are smaller and listed in `genie_code_findings.md`; copy them into specific tickets if/when they become blocking.
