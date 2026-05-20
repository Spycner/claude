# Extraction — index

Scripts and intermediate data used to lift tool definitions, handler bodies, and skill content from the Genie Code SPA's webpack chunks. The polished refs in `../tools/`, `../skills/`, and `../agents/` are derived from these.

| Dir | Contents |
|---|---|
| [scripts/](scripts/) | Python helpers: parse handlers, build tool refs, build skill refs, rewrite handler notes, diff shared tools. Re-run after a fresh SPA capture. |
| [data/](data/) | Cited intermediate JSON: `tool-factories.json`, `tool-handlers.json`, `dashboard-tool-handlers.json` (handler-body lookups for the per-tool refs), `skill-dump.json` + `skill-dump-2.json` (skill bodies for the per-skill refs), `llmproxy-body.json` (LakeAgent capture used by the build scripts). Regenerable from chunks via the scripts. |
| [chunks/](chunks/) | Empty — the ~300 MB SPA snapshot is not checked in. See [chunks/README.md](chunks/README.md) for the refresh recipe (chunk-push trick + bulk download + which chunks the refs cite). |
| [agents-research/](agents-research/) | Canonical agent-matrix inputs: `scan_agents_v3.py` scanner, its output `agent_registrations_v3.json`, and the `chunk_urls.json` manifest the scanner + the bulk-downloader consume. See [agents-research/README.md](agents-research/README.md). |
