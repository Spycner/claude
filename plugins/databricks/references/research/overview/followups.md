# Genie Code — Reverse-Engineering Follow-ups

Open work-items deferred from the main reverse-engineering pass. Each is shaped so a future session can pick it up cold.

## 3. Per-page agents — DONE (2026-05-19)

**Status:** mapped. 14 page agents + 13 sub-agents enumerated, 4 page agents fully live-captured (Dashboard Authoring, Notebook, Jobs, SQL Editor).

**Output**: [`../agents/`](../agents/) — per-agent reference files plus the canonical comparison matrix in [`../agents/README.md`](../agents/README.md). Live-captured `POST /ajax-api/2.0/conversation/llmproxy/` bodies are checked in alongside each ref so the system prompt + tool schemas are verbatim.

Remaining work (worth doing if a future session wants 100% coverage):

* Live-capture the 10 page agents that are still ⚙ (static-only) in the matrix — see [`../agents/other-page-agents.md`](../agents/other-page-agents.md). Cheapest to start with Pipeline Editor (`/pipelines/<id>`) because the system prompt is large and references skill files we already have.
* Verify the page-name → `_llmproxy_fields.agent_name` mapping for the static-only ones — the variable-name hints in the factory aren't always the wire name (e.g., the factory calls it `notebookAgent` but the wire name is `notebookAgentMode`).

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
2. To dump the live factory: in a fresh Genie Code tab, leak `__webpack_require__` via the chunk-push trick used earlier (see `../extraction/scripts/parse-tool-handlers.py` — same pattern), call `r.m[<mid>].toString()`, save.
3. To observe the wire behaviour: write a memory file by hand via the workspace REST API (`POST /ajax-api/2.0/workspace/mkdirs` then `POST /ajax-api/2.0/workspace/import`), open Genie Code in a multi-turn task, watch whether the agent reads `MEMORY.md` at session start via `readSkillFile` or directly via `workspace/export`.
4. Output: a `genie_code_memory.md` ref file matching the tool-ref format, plus a short notes section on the storage contract.

**Acceptance:** the storage schema, expected file-tree shape, and read/write protocol are documented end to end.

## 6. The GraphQL backend at `/api/2.0/genai-mapi/universegraphql`

**Status:** identified, not mapped. Required for "real" thread semantics in a programmatic driver.

**What:** Single Apollo client; ops referenced across chunks include `GetClientConfig`, `GetSessionQuery`, `ConversationModelStatuses`, `GetAssistantEnabled`, `GetAssistantEnabledWorkspace`, `GetGenieSpaceNameByUuid`. This is almost certainly where conversation thread persistence, model registry, and per-workspace assistant settings live.

**Where to pick up cold:**

1. The Apollo client is configured in chunk `63192.368e9181cf.chunk.js`. Grep that chunk for the client constructor and the operation definitions to enumerate every op the SPA can fire.
2. To capture live ops: in the chrome-devtools-mcp browser, patch `window.fetch` to record POSTs to `/api/2.0/genai-mapi/universegraphql` (already a one-liner extension of the llmproxy capture pattern used in [`../traces/`](../traces/)). Click around: open the chat panel, switch threads, list Genie Spaces, view the assistant settings dialog. Each click triggers different ops.
3. Once you have the op bodies, probe each with an OAuth bearer (no DBAUTH) to see which are bearer-accessible — bearer-accessible ops can drive a fully programmatic thread manager without the DBAUTH bootstrap.

**Acceptance:** a `genie_code_graphql.md` ref with each op's query/mutation text, variables shape, and auth class (bearer vs DBAUTH-only).

## 7. Per-tool refs for the 34 Dashboard Authoring Agent tools — DONE (2026-05-20)

**Status:** complete for the static layer. 21 dashboard-specific refs under [`../tools/dashboard/`](../tools/dashboard/) (schema + handler analysis from chunk 40961). 13 shared LakeAgent refs carry an appended "Dashboard Authoring variant" diff section (all confirmed byte-identical to the LakeAgent variants). 3 dashboard-only skill refs (full markdown content) under [`../skills/dashboard/`](../skills/dashboard/) plus a wiring README mapping the registry to its agent factory.

**Live wire-trace layer is deferred.** Each new tool ref has a placeholder pointing at the chrome-devtools-mcp capture recipe under [`../traces/`](../traces/). Cheapest tools to capture first: `renameDashboard`, `getDashboardConfig`, `fetchWidgetRenderData` (single REST call each, deterministic triggers).

**Output**:
- [`../tools/dashboard/`](../tools/dashboard/) — 21 per-tool refs + index README.
- [`../skills/dashboard/`](../skills/dashboard/) — 3 dashboard-only skill refs + skillset README.
- [`../extraction/scripts/parse-dashboard-tool-handlers.py`](../extraction/scripts/parse-dashboard-tool-handlers.py), [`../extraction/scripts/build-dashboard-tool-refs.py`](../extraction/scripts/build-dashboard-tool-refs.py), [`../extraction/scripts/diff-shared-tools.py`](../extraction/scripts/diff-shared-tools.py), [`../extraction/scripts/extract-dashboard-skill-files.py`](../extraction/scripts/extract-dashboard-skill-files.py) — re-runnable when chunk hashes change.
- [`../extraction/data/dashboard-tool-handlers.json`](../extraction/data/dashboard-tool-handlers.json) — static handler dump (21 tools, ~30 KB).

Original scope summary follows for re-extraction:

---

**Original scope** (now satisfied for the static layer):

**What:** Produce one markdown reference per Dashboard Authoring Agent tool, matching the existing per-tool format in [`../tools/`](../tools/) (verbatim function-calling JSON Schema + handler notes + observed REST behaviour). The 16 dashboard-specific tools are net-new; the 18 base tools deserve a "diff against the LakeAgent's version" note because they may carry small parameter changes for the dashboard context.

The 34 tools (full list with one-line intents in [`../agents/dashboard-authoring.md`](../agents/dashboard-authoring.md)):

* **Dashboard-specific (16)**: `renameDashboard`, `updateDashboardTheme`, `publishDashboard`, `editPages`, `editWidgetsV2`, `getVizTypeDefinition`, `addMetricView`, `createDatasetFromSQL`, `updateDatasetFromSQL`, `createLocalMetricViewDataset`, `updateLocalMetricViewDataset`, `editDatasetCalculations`, `deleteDataset`, `getDashboardConfig`, `refreshData`, `readDatasetData`, `readDataset`, `fetchWidgetRenderData`, `editWorkspaceFile`, `getSqlSample`, `executeSql` (some of these overlap "dashboard-specific" + "shared with other agents" — confirm at extraction time).
* **Shared with the LakeAgent (13)**: `readAssetById`, `tableSearch`, `docSearch`, `readTable`, `querySearch`, `forYouAssets`, `searchAssets`, `manageTodoList`, `readSkillFile`, `fetchOmittedContent`, `createAsset`, `openAsset`, `findReferencesTool`.

**Why:** `editWidgetsV2` alone is the deep schema (carries both `RenderWidgetSpec` for visuals and `QuerySpec` for data — a thousand-line widget-language reference); `createLocalMetricViewDataset` is the DLMV creation primitive that's central to the dashboard-authoring decision tree; the metric-view / dataset family of 8 tools is undocumented externally. These refs are the foundation for any programmatic dashboard authoring driver.

**Where to pick up cold:**

1. **All 34 schemas are already on disk verbatim** — `jq '.tools[]' /home/pascal/Code/pgoell-claude-tools/plugins/databricks/skills/genie-code/references/agents/dashboard-authoring-llmproxy-body.json`. Each `.function` has `name`, `description`, `parameters` (full JSON Schema). No further capture needed for the schema layer.
2. **Handler source lives in chunk `40961.110e90c1b8.chunk.js`, module `229581`** (the same module that exports `DashboardAuthoringAgentContext`). Tool factories there register with `esComponent: Q.Es.DashboardsAI` rather than the LakeAgent's `esComponent: S.Es.Assistant` — grep that chunk for `esComponent:Q.Es.DashboardsAI` to find each tool factory's source. The tools array is built via `useMemo` from local variables `C, S, k, v, …` (~30 total) — each is the result of a separate `useMemo`-wrapped factory invocation, all in the same module.
3. **Reuse the existing tooling**: [`../extraction/scripts/parse-tool-handlers.py`](../extraction/scripts/parse-tool-handlers.py) was built for the LakeAgent's 18 tools and matches the same factory shape. Adapt it to scan chunk `40961` and point at the new factories. The output schema (per tool: `mid`, `arg_list`, `body`, `helpers`, `urls`, `methods`, `events`, `gql_ops`, `flags`, `conclusion`) is the right shape for the new refs.
4. **For the 13 shared tools**: don't re-write the refs — instead add a short "Dashboard Authoring variant" diff section to each existing `../tools/<group>/<tool>.md`. Compare the schema captured here (`dashboard-authoring-llmproxy-body.json`) against the LakeAgent's (`../extraction/data/llmproxy-body.json`); any parameter / description difference belongs in the diff.
5. **Live wire behaviour** is optional but cheap: for any tool, navigate to the dashboard draft canvas in chrome-devtools-mcp, install the `window.fetch` capture used in [`../traces/`](../traces/), and trigger the tool in the UI (or via the agent with a prompt like "rename this dashboard to X"). Save the captured request/response as `../traces/<tool>.json` matching the existing trace format.
6. **Group the new refs** under `../tools/dashboard/<tool>.md` (a new subdir alongside `discovery/`, `execution/`, `assets/`, `agent-internals/`). Or extend the existing groups if a tool fits — e.g., `getSqlSample` arguably belongs in `execution/`.

**Acceptance:** 16 new per-tool refs under `../tools/dashboard/` for the dashboard-specific tools, plus diff sections appended to the 13 existing shared-tool refs. Index in `../tools/README.md` updated to point at the new files.

