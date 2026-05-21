# Agents — canonical scanner inputs

The minimal working set behind the agent matrix in [`../../agents/`](../../agents/) (built 2026-05-19). Re-run the scanner against a fresh SPA snapshot when Databricks ships a new build.

| File | Role |
|---|---|
| [`scan_agents_v3.py`](scan_agents_v3.py) | Scans `../chunks/*.js` for both agent-registration patterns (`(0,X.G)({...})` and `new X.g({...})`), gating on `name:` + `instructions:` within the first ~300 chars. 2026-05-19 run produced 55 agent registrations across 34 chunks. |
| [`agent_registrations_v3.json`](agent_registrations_v3.json) | The scanner's output — what [`../../agents/README.md`](../../agents/README.md) matrix is built from. |
| [`chunk_urls.json`](chunk_urls.json) | Live `_.u(id) → "static/js/<id>.<hash>.chunk.js"` manifest captured from the loaded webpack runtime. Maps every chunk id to its URL; consumed by the scanner and by the bulk-download step in [`../chunks/README.md`](../chunks/README.md). |

## Re-running

```bash
# After refreshing ../chunks/ (see ../chunks/README.md)
python3 plugins/databricks/skills/genie-code/references/research/extraction/agents-research/scan_agents_v3.py
```

The script auto-resolves `CHUNKS` and `OUT` paths from `Path(__file__).parent`, so it works regardless of `cwd`. It overwrites `agent_registrations_v3.json` in place.

## What's not here anymore

Earlier passes produced wider working files (v1/v2 scanner variants, verbatim factory IIFE / context / prompt-template dumps for the 4 live-captured page agents, per-agent extracted `system_prompt.md` + `tools.json`, pretty-printed chunk-paths manifest, full `__webpack_require__.m` map). They were superseded by the polished refs in [`../../agents/`](../../agents/) — each captured llmproxy body there carries the full system prompt + tool array, and the per-agent ref summarises the factory. To re-derive any of them, grep the named chunk for the factory module and pretty-print the IIFE; the scripts under [`../scripts/`](../scripts/) demonstrate the parsing pattern.
