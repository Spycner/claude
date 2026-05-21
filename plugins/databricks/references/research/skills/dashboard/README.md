# Dashboard Authoring Agent — Skill Registry

The 7-skill registry surfaced in the **Dashboard Authoring Agent**'s system prompt. Each skill is a markdown file (or set of files) that the agent loads on demand via `readSkillFile`. Skills are not auto-injected; the agent decides which to load based on the registry description matching the task.

Captured live 2026-05-20 from the `messages[0].content[0].text` of a real `hi` POST against `/sql/dashboardsv3/<id>?edit=true`. See [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md) for the agent identity.

## Registry surface (verbatim from system prompt)

```text
### Skill Registry (names + brief descriptors)
* dashboard: Dashboard creation, visualization, and design best practices. Use when user needs to create visualizations, organize dashboard layouts, or follow UX principles for data presentation.
* calculation: Custom calculations in AI/BI dashboards. Use when user needs to create calculated measures, calculated dimensions, or use aggregate functions without modifying dataset queries.
* gdrive-embed-image: Convert a Google Drive sharing URL to an embeddable thumbnail URL. Use when the user provides a Google Drive image link to embed in a dashboard or markdown widget.
* sql-functions: SQL AI functions in Databricks (functions starting with ai_, like ai_forecast(..), ai_parse_document(..)). Use when user needs to parse PDFs, extract text from documents/images, perform OCR, use SQL AI functions, or AI-powered analysis.
* using-metric-views: Create and query Unity Catalog metric views for centralized business metrics. Use when defining reusable KPIs, querying metric views with MEASURE() syntax, or standardizing aggregate calculations across dashboards.
* data-sampling: Load BEFORE querying, filtering, or sampling any table — whether via readTable, getSqlSample, executeCode, editAsset, or writing SQL in cells. (... truncated; see ../data/data-sampling.md for full description.)
* writing-sql: Load before writing Databricks SQL queries involving any of: AI functions, geospatial data, stored procedures, hierarchical queries or recursive CTEs (WITH RECURSIVE), temporary tables, time-only values, internationalized text, semi-structured data (VARIANT type), dynamic query construction, data modification operations, external table migration, pipe syntax, liquid clustering, table optimization, Unity Catalog governance tags and comments, or ABAC policies (attribute-based access control, row filters, column masks, governed tags).
```

## Factory wiring (chunk 40961, module 229581)

```javascript
skillsets: [{
  name: "dashboardAgent",
  skills: [aW, aV, aF, aO.i, ...(0, tN.CQ)() ? [aU.H] : []]
}]
```

- `aW` → `dashboard` (new, this directory)
- `aV` → `calculation` (new, this directory)
- `aF` → `gdrive-embed-image` (new, this directory)
- `aO.i` → `data-sampling` (`aO=a(584313)`, exports `.i`) — shared with the LakeAgent's registry, see [`../data/data-sampling.md`](../data/data-sampling.md)
- `aU.H` → `using-metric-views` (`aU=a(610323)`, exports `.H`) — shared, gated on `tN.CQ()` (metric-views feature flag), see [`../sql/using-metric-views.md`](../sql/using-metric-views.md)

The remaining two skills surfaced in the system prompt — `sql-functions` and `writing-sql` — are added by a higher-level skill-set assembler (likely the `getInitialSkills` builder shared with the LakeAgent), not by the dashboard agent factory directly. Both are documented in the existing skills/ directory.

## Dashboard-only skills (3)

| File | Maps to | Notes |
|---|---|---|
| [`dashboard.md`](dashboard.md) | (no single tool) | Visualization-type chooser, layout principles, dashboard organization. Read when authoring a new dashboard from scratch. |
| [`calculation.md`](calculation.md) | [`../../tools/dashboard/editDatasetCalculations.md`](../../tools/dashboard/editDatasetCalculations.md) | The canonical reference for what expressions `editDatasetCalculations` accepts. Routed to whenever the system prompt's **Building Widgets: Where to Express Each Metric** section flags a "compound" metric. |
| [`gdrive-embed-image.md`](gdrive-embed-image.md) | [`../../tools/dashboard/editWidgetsV2.md`](../../tools/dashboard/editWidgetsV2.md) (markdown widgets) | Five-step recipe for converting Google Drive sharing URLs to renderable thumbnail URLs. No tool of its own — output is written into a markdown widget. |

## Shared skills (4) — already in the broader Genie Code registry

| Skill | Where it lives |
|---|---|
| `data-sampling` | [`../data/data-sampling.md`](../data/data-sampling.md) |
| `using-metric-views` | [`../sql/using-metric-views.md`](../sql/using-metric-views.md) |
| `sql-functions` | [`../sql/sql-functions.md`](../sql/sql-functions.md) |
| `writing-sql` | [`../sql/writing-sql.md`](../sql/writing-sql.md) |

## What's missing vs. the LakeAgent skill registry

The dashboard agent **does not** load the following skills the LakeAgent ships (see the existing 11-skill set under [`../`](../)):

- `data-quality-rca` (data root-cause analysis)
- `asset-discovery`
- `databricks-cli-public`
- `diagnose-error`
- `external-access`
- `migration-orchestrator`
- `query-performance`

This is consistent with the agent's persona — dashboard authoring stays within the canvas + dataset surface, never reaching into CLI / cluster / migration territory.
