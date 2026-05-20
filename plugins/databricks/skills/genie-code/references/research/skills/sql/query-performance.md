# Genie Code skill: `query-performance`

Full content of the Genie Code skill `query-performance`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). Genie Code loads these markdown files lazily via the `readSkillFile` tool when its description matches the task at hand. See [findings.md](../../overview/findings.md) and [payload.md](../../overview/payload.md) for the request envelope and tool schema, and [system-prompt.md](../../overview/system-prompt.md) for the system prompt that drives skill selection.

## Registry record

From the Genie Code SkillRegistry definition in the SPA's `19604.5ae31ee5cc.chunk.js` chunk (module `94822`):

```jsonc
{
  "name":        "query-performance",
  "description": "Audits notebooks and SQL queries for performance improvements across four dimensions: compute (DBSQL Serverless — latest runtime, Photon, DFP/DPP, result cache out of the box), table type (UC managed), data layout (Predictive Optimization + Auto Liquid Clustering), and ingestion (Photon-enabled paths, stats-on-load). Use when the user asks about performance, slow queries, optimization, latency, or best practices — whether they share specific code or ask a general question. Don't use for correctness or debugging without a performance angle.",
  "files":       [ /* 1 entries — see below */ ]
}
```

## File manifest

Each file lives in its own webpack chunk and is exposed as a raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release — re-derive them from `index.968bbeb5f6.js` before re-extracting. The path Genie Code uses with `readSkillFile` is `skills/query-performance/<filename>`.

| File | Chunk id | Module id | Gate |
|---|---|---|---|
| `SKILL.md` | `14674` | `514674` | — |

## Files

### `SKILL.md`

Webpack chunk `14674.<hash>.chunk.js`, module `514674`.

````markdown
# Performance Best Practices

When a user asks about query performance / latency, or says a query is too slow, audit all four dimensions below. Report which best practices are already adopted, which are missing, and provide the specific SQL or configuration change needed to adopt them.

**Audit all four dimensions on every request.** If the user has not confirmed a best practice is already in place, assume it is not and recommend it. Do not skip dimensions because information is incomplete — infer from available context (e.g., if compute type is unspecified, recommend the Databricks-preferred path).

## Audit Format

Structure your response as:

```
## Performance Audit

### ✅ Already Optimized
- [dimension]: [what's good]

### ⚠️ Needs Verification
- [dimension]: [what to check]

### ❌ Recommended Changes
- [dimension]: [specific action + SQL/config to apply]
```

---

## Dimension 1: Compute — Use DBSQL Serverless

**Always recommend DBSQL Serverless** for SQL warehouses and interactive workloads. It is the single best upgrade for most users because it delivers everything at once:

- **Latest runtime automatically** — no pinning to old LTS versions, always gets newest features and fixes
- **Photon vectorized execution** — faster scans, joins, aggregations out of the box
- **Result cache + disk cache** — repeated queries return instantly
- **Dynamic File Pruning (DFP) + Dynamic Partition Pruning (DPP)** — intelligent data skipping
- **Query acceleration** — automatic for slow queries
- **No JVM GC pauses** — consistent latency

**Upgrade warehouse:** Switch from Classic to Serverless in warehouse settings — no SQL changes required.

**Check current warehouse type:**

```sql
SELECT warehouse_type FROM system.runtime.warehouses WHERE name = 'your_warehouse';
```

**For pipelines:** Use Lakeflow Pipelines / SDP on Serverless or the latest channel to get the same runtime benefits.

**Audit questions:**

- Is the SQL warehouse Classic instead of Serverless?
- Is DBR pinned to an old LTS (12.x, 13.x, 14.x) on an interactive cluster?
- Are pipelines running on a fixed/old channel?

---

## Dimension 2: Table Type — Unity Catalog Managed Tables

Unity Catalog managed tables (ManagedDelta or ManagedIceberg) unlock automatic performance features unavailable for external or Hive metastore tables.

**Out-of-the-box with UC managed tables:** metadata cache, OptimizedWrites, background auto-compaction, Predictive Optimization eligibility.

**Check table type:**

```sql
DESCRIBE DETAIL catalog.schema.table_name;
-- Look for: type = MANAGED, provider = delta
```

**Migrate from Hive metastore:**

```sql
CREATE TABLE main.target_schema.table_name
CLONE hive_metastore.source_schema.table_name;
```

**Migrate from external table:**

```sql
CREATE TABLE catalog.schema.table_name
AS SELECT * FROM old_external_table;
```

**Audit questions:**

- Are tables in `hive_metastore` instead of a UC catalog?
- Are tables `EXTERNAL` type pointing to cloud storage paths?

---

## Dimension 3: Data Layout — Predictive Optimization + Auto Liquid Clustering

Predictive Optimization (PO) and Auto Liquid Clustering handle compaction and clustering automatically when enabled.

**Predictive Optimization** — automatically runs OPTIMIZE and VACUUM based on usage patterns:

```sql
-- Enable at catalog level
ALTER CATALOG your_catalog
SET DBPROPERTIES ('enable_predictive_optimization' = 'true');

-- Or at table level
ALTER TABLE catalog.schema.table_name
SET TBLPROPERTIES ('enable_predictive_optimization' = 'true');
```

**Auto Liquid Clustering** — Databricks picks optimal clustering keys from query patterns:

```sql
-- New table
CREATE TABLE catalog.schema.table_name (...)
CLUSTER BY AUTO;

-- Existing table
ALTER TABLE catalog.schema.table_name CLUSTER BY AUTO;
OPTIMIZE catalog.schema.table_name;
```

**Check layout status:**

```sql
DESCRIBE DETAIL catalog.schema.table_name;
-- Look for: clusterByAuto = true, predictiveOptimizationStatus = ENABLED
-- numFiles in the thousands + avgFileSize < 64MB = small file problem
```

**Audit questions:**

- Is Predictive Optimization enabled at catalog/schema/table level?
- Are tables using old Hive `PARTITIONED BY` instead of liquid clustering?
- Are there thousands of small files?

---

## Dimension 4: Ingestion — Photon-Enabled Write Paths

Photon-enabled ingestion paths give the best write performance and produce better-optimized files for downstream reads. **Always recommend switching to a Photon-enabled path if the current ingestion compute is a Classic cluster, interactive DBR cluster, or unspecified.**

**Recommended paths:** DBSQL warehouses, Lakeflow Pipelines / SDP (Serverless or Photon channel).

**Benefits:** stats-on-load (no separate ANALYZE needed), automatic file sizing, MERGE with Dynamic File Pruning (DFP) + Dynamic Partition Pruning (DPP).

**Verify stats after ingestion:**

```sql
EXPLAIN SELECT * FROM catalog.schema.table_name WHERE id = 123;
-- Should show: "Statistics: full stats" — not "partial" or "missing"
```

**If stats are missing:**

```sql
ANALYZE TABLE catalog.schema.table_name COMPUTE STATISTICS FOR ALL COLUMNS;
```

**MERGE best practice — filter source before joining:**

```sql
MERGE INTO catalog.schema.target t
USING (
  SELECT * FROM catalog.schema.source
  WHERE event_date >= current_date() - INTERVAL 7 DAYS
) s
ON t.id = s.id
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;
```

**Audit questions:**

- Is ingestion compute Photon-enabled (DBSQL warehouse or Photon cluster)?
- Does `EXPLAIN` show full statistics or missing/partial?
- Are MERGE operations filtering the source dataset before joining?
- Are pipelines on the current channel?
````
