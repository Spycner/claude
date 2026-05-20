# Skills — index

The markdown skills Genie Code can load on demand via the `readSkillFile` tool. Each ref is the verbatim skill body extracted from the SPA's `SkillRegistry` chunk.

## LakeAgent (main) skills (11)

The 11 skills the LakeAgent ships.

| Group | Skills |
|---|---|
| [sql/](sql/) | Writing SQL, function reference, metric views, query performance. |
| [data/](data/) | Data quality root-cause analysis, sampling, asset discovery. |
| [ops/](ops/) | CLI usage, error diagnosis, external access patterns, migration orchestration. |

## Dashboard Authoring Agent skills (7 surfaced = 3 unique + 4 shared)

The Dashboard Authoring Agent's `Skill Registry` surfaces 7 entries — 3 dashboard-only and 4 shared with the LakeAgent set above.

| Group | Skills |
|---|---|
| [dashboard/](dashboard/) | Dashboard creation & design, custom calculations, Google Drive image conversion. Three dashboard-only skills plus a README mapping each registry entry to its agent factory wiring. |

See [`dashboard/README.md`](dashboard/README.md) for the full skillset wiring (`aW, aV, aF, aO.i, [aU.H]?`) and the four shared skills (`data-sampling`, `using-metric-views`, `sql-functions`, `writing-sql`).
