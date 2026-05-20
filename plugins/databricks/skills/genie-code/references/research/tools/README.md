# Tools — index

Function-calling tools that ship in Genie Code's tool array on every llmproxy turn. Each ref includes: function schema, handler notes from the SPA chunks, and (where captured) `Verified network behaviour` from a live trace.

## LakeAgent toolkit (18)

The 18 tools the main LakeAgent (`/home`, `/notebook`, `/sql`, etc.) ships. Refs include schema + handler analysis + (in most cases) live wire traces.

| Group | Tools |
|---|---|
| [discovery/](discovery/) | Locate things in the workspace: assets, tables, queries, docs, Genie Spaces. |
| [assets/](assets/) | CRUD on workspace assets and Unity Catalog tables. |
| [execution/](execution/) | Run things: SQL, Python, the Databricks CLI, charts, Genie Space questions. |
| [agent-internals/](agent-internals/) | Mechanics the agent uses to manage its own turn: planning, skill loading, content recovery, lineage. |

## Dashboard Authoring Agent toolkit (34 = 21 unique + 13 shared)

The Dashboard Authoring Agent (`/sql/dashboardsv3/<id>?edit=true`) ships **34** tools — 21 are dashboard-specific (canvas, datasets, widget verification) and 13 are shared imports from the LakeAgent toolkit.

| Group | Tools |
|---|---|
| [dashboard/](dashboard/) | Dashboard-specific tools — canvas, datasets, widget verification, diagnostic SQL. |
| (shared) | The 13 LakeAgent tools that the dashboard agent re-imports. Each LakeAgent ref carries an appended "Dashboard Authoring variant" section confirming identity. |

See [`../agents/dashboard-authoring.md`](../agents/dashboard-authoring.md) for the agent identity, system prompt outline, and skill registry.
