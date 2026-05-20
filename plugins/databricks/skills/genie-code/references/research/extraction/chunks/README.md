# Webpack Chunks — refresh recipe

The Genie Code SPA serves its agent definitions as ~3,500 lazy webpack chunks (`<chunkId>.<contentHash>.chunk.js`, ~300 MB total per release). The polished refs in this bundle (`tools/`, `skills/`, `agents/`, plus the JSON dumps under `../data/` and `../agents-research/`) were derived from a snapshot captured on **2026-05-19**, release `index.968bbeb5f6.js`.

**The snapshot itself is not checked in** — at 300 MB per release and rotating on every Databricks deploy, it would dominate the repo. To re-extract against a fresh SPA build, re-download the chunks into this directory and re-run the scripts under `../scripts/` + `../agents-research/scan_agents_v3.py`.

## Chunks the refs were built from

| Chunk id (2026-05-19) | Role |
|---|---|
| `19604` | LakeAgent main chunk — factory module, all 18 tool factories, the LakeAgent skill registry, the four sub-agent factories. |
| `40961` | Dashboard Authoring Agent — `DashboardAuthoringAgentContext` module (229581), all 21 dashboard-specific tool factories, the `dashboardAgent` skillset wiring. |
| `12541` | Notebook Agent. |
| `28513` | Jobs Agent. |
| `31474` | SQL Editor (`query`) Agent. |
| `25254` | Tableau / Power BI Migration agents + Dashboard Import Router. |
| `50147`, `66786`, `93509` | Dashboard skill body chunks (`calculation`, `dashboard`, `gdrive-embed-image` SKILL.md sources). |
| `6683`, `17870`, `19154`, `25693`, `28453`, `29455`, `30969`, `35094`, `35758`, `37191`, `43756`, `46380`, `55851`, `56129`, `63192`, `69810`, `71329`, `74316`, `90719`, `93872`, `95541`, `98216`, `99706` | Other page-agent chunks (mostly ⚙ static-only). |

Chunk ids stay stable across releases; only the content-hash in the filename changes.

## Refresh recipe

```bash
cd plugins/databricks/skills/genie-code/references/research/extraction
```

### 1. Pull the live chunk URL manifest

The SPA's webpack runtime exposes a `_.u(id) → "static/js/<id>.<hash>.chunk.js"` helper. Open Genie Code in Chrome (chrome-devtools-mcp works), then in the DevTools console:

```javascript
// Leak __webpack_require__ via the chunk-push trick:
let r;
self.webpackChunkChunk.push([[crypto.randomUUID()], {}, e => { r = e; }]);

// Enumerate every chunk id from r.m (module map) ∪ r.u (URL builder):
const ids = Object.keys(r.m);  // or the chunk-id list from the asset manifest
const manifest = Object.fromEntries(ids.map(id => [id, r.u(id)]));
copy(JSON.stringify(manifest, null, 2));
```

Paste into `../agents-research/chunk_urls.json` (overwrites the captured copy from 2026-05-19). The `scan_agents_v3.py` scanner uses this file to resolve chunk ids; the bulk-download step below uses it too.

### 2. Bulk-download chunks

```bash
jq -r 'to_entries[] | "\(.value)\t\(.key)"' ../agents-research/chunk_urls.json \
  | while IFS=$'\t' read -r url id; do
      hash=$(basename "$url" .chunk.js | sed 's/^.*\.//')
      curl -sSf "https://ui-assets.cloud.databricks.com/${url}" -o "${id}.${hash}.chunk.js"
    done
```

Expect ~300 MB across 3.5k files. Vendor chunks (lodash, plotly, vega, d3) are the bulk; you only *need* the chunks in the table above, but downloading everything is fast (a few minutes) and lets the scanners find new agent factories the v3 scanner might miss.

### 3. Re-run extraction

```bash
cd ..

# Agent matrix
python3 agents-research/scan_agents_v3.py        # → agents-research/agent_registrations_v3.json

# Tool handler dumps (LakeAgent + Dashboard Authoring)
python3 scripts/parse-tool-handlers.py           # → data/tool-handlers.json
python3 scripts/parse-dashboard-tool-handlers.py # → data/dashboard-tool-handlers.json
python3 scripts/extract-dashboard-skill-files.py # → data/dashboard-skill-files/  (intermediate, deletable)

# Polished refs
python3 scripts/build-tool-refs.py               # → ../tools/<group>/*.md
python3 scripts/build-dashboard-tool-refs.py     # → ../tools/dashboard/*.md
python3 scripts/build-skill-refs.py              # → ../skills/<group>/*.md
python3 scripts/build-skill-refs-2.py            # → ../skills/<group>/*.md (second pass)
python3 scripts/diff-shared-tools.py             # → appends Dashboard variant diffs to shared tool refs
```

Each script auto-resolves paths from `Path(__file__).parent`, so any cwd works.

### 4. (Optional) Re-capture a live llmproxy body

The build scripts read tool definitions from `../agents/lake-agent-llmproxy-body.json` (the canonical capture). To refresh it, open a Genie Code chat in Chrome, send any message, and **Copy → Copy as cURL** on the `/ajax-api/2.0/conversation/llmproxy/` row in the Network panel. Save the request body (the JSON after `--data-raw`) to that path.
