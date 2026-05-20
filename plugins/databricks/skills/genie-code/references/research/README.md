# Genie Code — Reference Bundle

Reverse-engineered surface of Databricks **Genie Code** on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). All material here is sourced from the SPA's webpack chunks and live `/ajax-api/2.0/conversation/llmproxy/` traffic.

## Layout

| Dir | Contents |
|---|---|
| [overview/](overview/) | High-level findings, request payload shape, system prompt, open work-items. |
| [tools/](tools/) | Per-tool refs. **18** for the LakeAgent (grouped by purpose) **+ 21** dashboard-specific under [`tools/dashboard/`](tools/dashboard/). Shared tools carry a "Dashboard Authoring variant" diff section. |
| [skills/](skills/) | The 11 LakeAgent markdown skills (grouped by domain) plus 3 dashboard-only skills under [`skills/dashboard/`](skills/dashboard/). Loaded on demand via `readSkillFile`. |
| [agents/](agents/) | Per-page agent matrix. The SPA ships 14 page agents (Notebook, Dashboard Authoring, Jobs, SQL Editor, Pipeline Editor, Apps, Vector Search, Model Serving, AI Gateway, CDP, Lakewatch, Genie Space Authoring, Catalog Explorer, Autopilot Incident Chat) + 13 sub-agents — each with its own system prompt and tool set. |
| [extraction/](extraction/) | Static-analysis scripts and raw chunk-derived JSON used to produce the references above. |
| [traces/](traces/) | Live network captures for each tool, recorded by patching `window.fetch` in the SPA. Confirms the wire behaviour described in the tool refs. |

## How to read this

1. Start at [overview/findings.md](overview/findings.md) for the auth + SPA layout context.
2. [overview/payload.md](overview/payload.md) documents the request envelope the SPA sends (LakeAgent's, but the shape is uniform across all page agents).
3. For other page agents (Dashboard Authoring, Notebook, Jobs, SQL Editor, …), start at [agents/README.md](agents/README.md) — the agent matrix.
4. Pick a tool from [tools/](tools/) — each ref includes the verbatim function-calling schema, handler notes from chunks, and (where captured) the observed REST behaviour from [traces/](traces/).
5. [overview/programmatic-driver-runbook.md](overview/programmatic-driver-runbook.md) — concrete recipe for driving an agent end-to-end over both `llmproxy` (DBAUTH) and `/serving-endpoints/.../invocations` (OAuth). Proven on the Dashboard Authoring Agent; same recipe applies to the other page agents.
6. [overview/followups.md](overview/followups.md) lists open work-items not yet completed.
