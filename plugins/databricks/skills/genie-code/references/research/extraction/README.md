# Extraction — index

Scripts and intermediate data used to lift tool definitions, handler bodies, and skill content from the Genie Code SPA's webpack chunks.

| Dir | Contents |
|---|---|
| [scripts/](scripts/) | Python helpers: parse handlers, build tool refs, build skill refs, rewrite handler notes. Re-run if chunk hashes change. |
| [data/](data/) | Raw JSON dumps: tool factory bodies, handler bodies, skill registry dump, captured llmproxy request body, per-tool helper factories, dashboard tool handlers, dashboard skill files. |
| [chunks/](chunks/) | Verbatim SPA snapshot (3,445 webpack chunks, ~299 MB) captured 2026-05-19. Source of truth for everything in `data/` and for the per-agent / per-tool / per-skill refs. See [chunks/README.md](chunks/README.md) for what's cited where. |
| [agents-research/](agents-research/) | Agent-discovery working-set: 3 versions of agent-factory scanners + their JSON outputs, chunk manifest, and the verbatim factory IIFE / system-prompt dumps for the 4 live-captured page agents. See [agents-research/README.md](agents-research/README.md). |

These artifacts are historical — the markdown refs in `tools/`, `skills/`, and `agents/` are derived from them. Keep for re-extraction when Databricks ships a new SPA build.
