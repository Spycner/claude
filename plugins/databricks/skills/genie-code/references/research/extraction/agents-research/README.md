# Agents — Raw Research Artifacts

The intermediate materials produced during the agent-discovery pass (2026-05-19). Polished refs live one level up in [`../../agents/`](../../agents/); this directory is the working-set those refs were built from.

Keep these around so a future session can re-derive the matrix when Databricks ships a new SPA release: the JavaScript names (`aW`, `tN.CQ`, etc.), the chunk-id → URL manifest, the factory IIFE source, the live POST response bodies, and the scanner scripts that found everything.

## Agent factory registrations

Three scanner outputs at increasing confidence levels — each pass widened the pattern that matches an "agent" factory call.

| File | Scanner | What it catches | Confidence |
|---|---|---|---|
| [`agent_registrations.json`](agent_registrations.json) | [`scan_agents.py`](scan_agents.py) | `(0,X.G)({name:..., instructions:..., tools:..., ...})` only | First pass — narrow, misses agents that use `new X.g({...})` syntax. |
| [`agent_registrations_v2.json`](agent_registrations_v2.json) | [`scan_agents_v2.py`](scan_agents_v2.py) | Any object literal with `hostedTools:[]` + `toolUseBehavior:"run_llm_again"` + an `instructions:`/`model:`/`flow:` key | Wider — picks up bare object literals (no factory wrapper). |
| [`agent_registrations_v3.json`](agent_registrations_v3.json) | [`scan_agents_v3.py`](scan_agents_v3.py) | Both `(0,X.G)({...})` and `new X.g({...})` invocations, gated on `name:` + `instructions:` within the first ~300 chars of the body | **Canonical** — what the [`../../agents/README.md`](../../agents/README.md) matrix is built from. 55 agent registrations across 34 chunks. |

## Chunk discovery

| File | Origin | Used by |
|---|---|---|
| [`chunk_urls.json`](chunk_urls.json) | `_.u(id)` on the loaded webpack runtime — maps each of 3,511 chunk ids to its URL. | Bulk download script + every scanner. |
| [`chunk_paths.txt`](chunk_paths.txt) | Pretty-printed `<id> → <url>` listing of the same manifest. | Human reference. |
| [`raw_chunk_map.json`](raw_chunk_map.json) | The full `__webpack_require__.m` map (module id → empty stub) — extracted via the chunk-push trick to enumerate every loadable module without loading any. | Used to seed module-id lookups when resolving helper aliases (`tl.d8`, `tN.CQ`, etc.) inside tool handler bodies. |

The actual chunk bodies are in [`../chunks/`](../chunks/) (separate dir because of size).

## Dashboard Authoring Agent — verbatim source dumps

Mid-extraction working files for the Dashboard Authoring Agent. The polished outputs (per-tool refs, per-skill refs, factory documentation in [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md)) were built from these.

| File | What it is |
|---|---|
| [`dashboard_authoring_factory.txt`](dashboard_authoring_factory.txt) | The verbatim factory IIFE source extracted from chunk 40961, module 229581 (`DashboardAuthoringAgentContext`). Includes the agent's `name`/`builtInToolsDeps`/`skillsets` declaration plus the `instructions:` template generator. **Source-of-truth for the per-tool ref generator.** |
| [`dashboard_authoring_context.txt`](dashboard_authoring_context.txt) | The React-context object that wraps the factory — wiring of Apollo client, Redux store, dashboard ID, active view, etc. |
| [`dashboard_authoring_prompt_template.txt`](dashboard_authoring_prompt_template.txt) | The prompt template before its conditional branches are resolved. Useful for diffing across feature flags. |
| [`dashboard_authoring_metricviews_fragment.txt`](dashboard_authoring_metricviews_fragment.txt) | The verbatim "Metric Views" section template, which gets injected into the prompt when `tN.CQ()` (the metric-views feature flag) is on. |
| [`dashboard_authoring_system_prompt.md`](dashboard_authoring_system_prompt.md) | The fully-resolved system prompt (template + feature-flag substitutions), prettified into Markdown. Equivalent content to `messages[0].content[0].text` in [`../../agents/dashboard-authoring-llmproxy-body.json`](../../agents/dashboard-authoring-llmproxy-body.json) but readable. |
| [`dashboard_authoring_tools.json`](dashboard_authoring_tools.json) | The 34-tool array extracted as a standalone JSON. Identical content to `.tools` in the llmproxy body JSON. |
| [`dashboard_authoring_messages_user.json`](dashboard_authoring_messages_user.json) | The captured `messages[1]` and `messages[2]` (the per-turn dashboard config context object + the "hi" user message) for the live capture. |
| [`dashboard_authoring_llmproxy_response.network-response`](dashboard_authoring_llmproxy_response.network-response) | The SSE response body returned by the server for the live "hi" turn. |

## Other agents — partial templates

| File | What it is |
|---|---|
| [`pipeline_editor_prompt_template.txt`](pipeline_editor_prompt_template.txt) | Static extraction of the Pipeline Editor agent's prompt template fragment (the agent is ⚙ static-only in the matrix — see [`../../agents/pipeline-editor-agent.md`](../../agents/pipeline-editor-agent.md)). |
| `jobs_agent_system_prompt.md` / `jobs_agent_tools.json` | Same as the Dashboard Authoring split for the Jobs agent. The llmproxy body lives at [`../../agents/jobs-agent-llmproxy-body.json`](../../agents/jobs-agent-llmproxy-body.json). |
| `notebook_agent_system_prompt.md` / `notebook_agent_tools.json` | Same for the Notebook agent. Body: [`../../agents/notebook-agent-llmproxy-body.json`](../../agents/notebook-agent-llmproxy-body.json). |
| `query_agent_system_prompt.md` / `query_agent_tools.json` | Same for the SQL Editor (a.k.a. "query") agent. Body: [`../../agents/sql-editor-agent-llmproxy-body.json`](../../agents/sql-editor-agent-llmproxy-body.json). |

## Re-running

```bash
# From any directory
python3 plugins/databricks/skills/genie-code/references/extraction/agents-research/scan_agents_v3.py
```

The scripts auto-resolve `CHUNKS` and `OUT` paths from `Path(__file__).parent`, so they work regardless of `cwd`. Each script will overwrite its own `agent_registrations*.json` in this directory.
