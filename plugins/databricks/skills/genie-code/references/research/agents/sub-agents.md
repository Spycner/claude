# Sub-Agents

Each "sub-agent" fires its own `llmproxy` POST in addition to the main turn — typically against a smaller / cheaper model with a tightly scoped prompt. The main agent invokes them through a helper utility, not as user-visible tool calls.

This file is the **static-extraction inventory**. Live capture of sub-agent traffic is tracked in [`../overview/followups.md`](../overview/followups.md) item 4.

## Safety / approval sub-agents (LakeAgent / Notebook / etc.)

These wrap dangerous tools and run a separate Claude call before letting the tool execute.

### CliSafetyAgent

* **Where defined**: chunk `19604.5ae31ee5cc.chunk.js`, factory module `687694`. Search the chunk for `name:"CliSafetyAgent"`.
* **When it fires**: before `runDatabricksCli` executes a command. The agent reviews the command and decides allow / deny / require user approval.
* **Model**: bound to variable `t` (resolves to the workspace default; observed `claude-4-6-opus`).

### ExecutionSafetyAgent

* **Where defined**: same factory module as CliSafetyAgent.
* **When it fires**: before `executeCode` runs code. Same allow/deny/approval flow.
* **Model**: bound to variable `i`.

### ToolApprovalJudgeAgent

* **Where defined**: chunk `35094.337e3ad3d9.chunk.js`.
* **Model**: `"claude-4-5-sonnet"` (uses Sonnet for the judge, not Opus).
* **Instructions value**: `c(e.customInstructions)` — the prompt comes from a user-configurable "custom instructions" field, so this is the **only** sub-agent whose prompt is end-user-mutable.
* **When it fires**: generic tool-approval judge; called from the approval-gating policy in `runDatabricksCli`'s guardrail config (`H = {alwaysAllow: [...R.q4], unmatchedPolicy: "deny", mode: "approvalOverrideLlmOnly"}`).

## Search-and-route sub-agents (LakeAgent / SQL Editor / Discovery)

All five live in chunk `31474.fe2e7e61e4.chunk.js` and share the model var `t`:

| Sub-agent (var) | Role | Tools used |
|---|---|---|
| `y` | **Tables-search subagent** — "find relevant tables, not answer the user's question" | tableSearch helpers `b.v`, `h.aO`, `i.P` |
| `g` | **Dashboards-search subagent** — "find relevant dashboards" | `h.aO`, `r.Fh` |
| `f` | **Notebooks-search subagent** — "find relevant notebooks" | `h.aO`, `r.Fh` |
| `m` | **Search-results-analysis subagent** — "analyzes search results from multiple sources (dashboards, notebooks, tables) and determines the best data source" | `i.P`, `r.Fh`, `s.tG` |
| `v` | **Text2SQL subagent** — "SQL Generation, Optimization, and Validation" with DEFAULT_DATE_RANGE=30 days, EXPLORATORY_DATE_RANGE=7 days, EXPLORATORY_LIMIT=100, EXPLORATORY_TIMEOUT_MINUTES=5, FULL_SCOPE_TIMEOUT_MINUTES=15 | `i.P`, `s.tG` |

These are the "for-you-assets" pipeline that surfaces relevant tables/dashboards/notebooks to a question. The main agent calls them in parallel, then `m` reconciles.

## Query-performance sub-agents

| Sub-agent (var) | Chunk | Role |
|---|---|---|
| `P.lE` (Planning Assistant) | `31474` | "Specialized Planning Assistant for Databricks. Your role is to create comprehensive, actionable plans with detailed implementation steps." |
| `U._S` | `31474` | "Databricks-experienced data engineer specializing in query performance optimization for Databricks SQL and Spark DataFrame..." |
| `x._S` | `98216.8579a6e649.chunk.js` | Same persona — duplicate registration for a different page agent path. |

## DashboardWidgetSuggestionAgent

* **Where defined**: chunk `40961.110e90c1b8.chunk.js`, literal `name: "DashboardWidgetSuggestionAgent"`.
* **What it does**: on the dashboard draft canvas, when the user has the suggestions panel open, this agent generates "up to 5 prompts that will create a visualization based on current dashboard." Output is forced into JSON array shape: `["suggestion 1", "suggestion 2"]`, no markdown, max 10 words each.
* **Tools**: `[]` (no tools — it's a one-shot LLM call).
* **Trigger**: called by `(0,ty.e)(r, ...)` with `{stream: false, maxTurns: 1, clientId: EditorAssistantAgentMode, charsPerToken: 4}`.
* **esComponent**: `Es.DashboardsAI`.

## LearningExtractionAgent

* **Where defined**: chunk `69810.ec34385838.chunk.js`.
* **Model**: `"gpt-4-turbo-2024-04-09"` (one of the two non-Claude agents enumerated).
* **What it does**: extracts learnings from agent runs — almost certainly the backbone of the `auto-learning-memory` system documented in [`../overview/followups.md`](../overview/followups.md) item 5.

## Writing-mode subagent

* **Where defined**: chunks `43756.53f9bb52c4.chunk.js` and `69810.ec34385838.chunk.js`, both var `l`.
* **Persona**: a prompt-template subagent that obeys `mode: in-place | new-location | <other>` and either `editAsset` the source directly or `createAsset` to a subfolder under the user's home, then `editAsset` the new asset. Designed for the migration converter flow.
* **Model**: `r.g.DEFAULT_MODEL_PLACEHOLDER` (the workspace default, resolved at call time).

## Agent Brick & Endpoint proxy agents

These two live in chunk `35094.337e3ad3d9.chunk.js`. Their names are template literals (`` `${g}_${t}` ``) computed at runtime from the user-selected Agent Brick / Model Serving endpoint:

* **Agent Brick proxy** — "You are a proxy agent that forwards all user requests to the `${t}` Agent Brick." Wraps the user's selected Agent Brick (custom registered agent) as a Genie-Code-callable agent that uses `invokeAgentBrick` to forward the entire user message verbatim.
* **Model serving endpoint proxy** — "You are a proxy agent that forwards all user requests to the `${E}` model serving endpoint." Same pattern but via `invokeServingEndpoint`.

Both use the workspace default model `(0,d.g)()` as their *orchestration* model — the actual answer comes from the wrapped endpoint.

## echoAgent

* **Where defined**: chunk `12541.4ccb02c252.chunk.js`, literal `name: "echoAgent"`.
* **Model**: `"claude-4-5-sonnet"`.
* **Tool**: a single `echoTool` that returns `Reply: ${e}` for any input.
* Pure end-to-end test agent / fixture, not exposed in product UI.
