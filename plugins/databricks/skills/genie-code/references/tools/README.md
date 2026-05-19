# Tools — index

The 18 function-calling tools that ship in Genie Code's tool array on every llmproxy turn. Each ref includes: function schema, handler notes from the SPA chunks, and (where captured) `Verified network behaviour` from a live trace.

| Group | Tools |
|---|---|
| [discovery/](discovery/) | Locate things in the workspace: assets, tables, queries, docs, Genie Spaces. |
| [assets/](assets/) | CRUD on workspace assets and Unity Catalog tables. |
| [execution/](execution/) | Run things: SQL, Python, the Databricks CLI, charts, Genie Space questions. |
| [agent-internals/](agent-internals/) | Mechanics the agent uses to manage its own turn: planning, skill loading, content recovery, lineage. |
