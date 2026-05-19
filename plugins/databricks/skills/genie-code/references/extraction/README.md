# Extraction — index

Scripts and intermediate data used to lift tool definitions, handler bodies, and skill content from the Genie Code SPA's webpack chunks.

| Dir | Contents |
|---|---|
| [scripts/](scripts/) | Python helpers: parse handlers, build tool refs, build skill refs, rewrite handler notes. Re-run if chunk hashes change. |
| [data/](data/) | Raw JSON dumps: tool factory bodies, handler bodies, skill registry dump, captured llmproxy request body, per-tool helper factories. |

These artifacts are historical — the markdown refs in `tools/` and `skills/` are derived from them. Keep for re-extraction when Databricks ships a new SPA build.
