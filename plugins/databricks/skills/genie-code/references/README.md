# Genie Code — Reference Bundle

Reverse-engineered surface of Databricks **Genie Code** on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). All material here is sourced from the SPA's webpack chunks and live `/ajax-api/2.0/conversation/llmproxy/` traffic.

## Layout

| Dir | Contents |
|---|---|
| [overview/](overview/) | High-level findings, request payload shape, system prompt, open work-items. |
| [tools/](tools/) | Per-tool reference for the 18 function-calling tools the agent ships. Grouped by purpose. |
| [skills/](skills/) | The 11 built-in markdown skills the agent loads on demand via `readSkillFile`. Grouped by domain. |
| [extraction/](extraction/) | Static-analysis scripts and raw chunk-derived JSON used to produce the references above. |
| [traces/](traces/) | Live network captures for each tool, recorded by patching `window.fetch` in the SPA. Confirms the wire behaviour described in the tool refs. |

## How to read this

1. Start at [overview/findings.md](overview/findings.md) for the auth + SPA layout context.
2. [overview/payload.md](overview/payload.md) documents the request envelope the SPA sends.
3. Pick a tool from [tools/](tools/) — each ref includes the verbatim function-calling schema, handler notes from chunks, and (where captured) the observed REST behaviour from [traces/](traces/).
4. [overview/followups.md](overview/followups.md) lists open work-items not yet completed.
