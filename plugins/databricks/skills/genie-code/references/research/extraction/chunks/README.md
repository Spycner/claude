# Webpack Chunks — verbatim SPA snapshot

The 3,445 webpack chunks served by Genie Code's SPA at capture time (2026-05-19, release `index.968bbeb5f6.js`, asset hash `8019ec1b29...`). Total ~299 MB.

Each chunk follows the standard webpack `chunkChunk.push([[<chunkId>], {<moduleId>:..., ...}])` shape. Filenames are `<chunkId>.<contentHash>.chunk.js`.

**Why this is checked in:** the per-agent / per-tool / per-skill refs in this bundle cite specific `(chunk_id, module_id)` pairs as their source of truth (handler bodies, factory IIFEs, skill markdown contents). Without the chunks, those citations are unverifiable. With the chunks, the extraction scripts under [`../scripts/`](../scripts/) and [`../agents-research/`](../agents-research/) run fully offline against the same snapshot that produced the refs.

## Chunks cited by the refs

| Chunk id | Role | Cited by |
|---|---|---|
| `19604` | LakeAgent main chunk — factory module, all 18 tool factories, the LakeAgent skill registry, the four sub-agent factories | Every LakeAgent tool ref under [`../../tools/`](../../tools/), every shared skill ref under [`../../skills/`](../../skills/), [`../../agents/`](../../agents/) main entries |
| `40961` | Dashboard Authoring Agent — `DashboardAuthoringAgentContext` module (229581), all 21 dashboard-specific tool factories, the `dashboardAgent` skillset wiring | All 21 refs under [`../../tools/dashboard/`](../../tools/dashboard/), [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md), 3 skill refs under [`../../skills/dashboard/`](../../skills/dashboard/) |
| `12541` | Notebook Agent chunk | [`../../agents/notebook-agent.md`](../../agents/notebook-agent.md) |
| `28513` | Jobs Agent chunk | [`../../agents/jobs-agent.md`](../../agents/jobs-agent.md) |
| `31474` | SQL Editor Agent chunk | [`../../agents/sql-editor-agent.md`](../../agents/sql-editor-agent.md) |
| `25254` | Tableau / Power BI Migration agents + Dashboard Import Router | [`../../agents/other-page-agents.md`](../../agents/other-page-agents.md) |
| `50147`, `66786`, `93509` | Dashboard skill body chunks (`calculation`, `dashboard`, `gdrive-embed-image` SKILL.md sources) | The 3 refs under [`../../skills/dashboard/`](../../skills/dashboard/) |
| `6683`, `17870`, `19154`, `25693`, `28453`, `29455`, `30969`, `35094`, `35758`, `37191`, `43756`, `46380`, `55851`, `56129`, `63192`, `69810`, `71329`, `74316`, `90719`, `93872`, `95541`, `98216`, `99706` | Other page-agent chunks (mostly ⚙ static-only) | [`../../agents/other-page-agents.md`](../../agents/other-page-agents.md), [`../../agents/pipeline-editor-agent.md`](../../agents/pipeline-editor-agent.md) |

## Chunks not cited

The other ~3,400 chunks are vendor bundles (lodash, plotly, vega, d3), framework code, and route-level splits unrelated to the agent surface. They are kept to make any future extraction self-contained (e.g., re-deriving feature-flag names, exploring helper modules referenced by tool handlers, finding new agent factories the v3 scanner missed).

## Refreshing

Chunk hashes change every release. To refresh:

1. Pull the new chunk manifest with the chunk-push trick (see [`../agents-research/scan_agents_v3.py`](../agents-research/scan_agents_v3.py) for the helper).
2. Bulk-download into this directory.
3. Re-run the cited scanners ([`../scripts/parse-tool-handlers.py`](../scripts/parse-tool-handlers.py), [`../scripts/parse-dashboard-tool-handlers.py`](../scripts/parse-dashboard-tool-handlers.py), [`../scripts/extract-dashboard-skill-files.py`](../scripts/extract-dashboard-skill-files.py), [`../agents-research/scan_agents_v3.py`](../agents-research/scan_agents_v3.py)).
4. Re-run the ref builders ([`../scripts/build-tool-refs.py`](../scripts/build-tool-refs.py), [`../scripts/build-dashboard-tool-refs.py`](../scripts/build-dashboard-tool-refs.py), [`../scripts/build-skill-refs.py`](../scripts/build-skill-refs.py), [`../scripts/build-skill-refs-2.py`](../scripts/build-skill-refs-2.py)).
5. Re-run the diff appender ([`../scripts/diff-shared-tools.py`](../scripts/diff-shared-tools.py)) for the shared-tool variant sections.
