# Genie Code skill: `external-access`

Full content of the Genie Code skill `external-access`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). Genie Code loads these markdown files lazily via the `readSkillFile` tool when its description matches the task at hand. See [genie_code_findings.md](genie_code_findings.md) and [genie_code_payload.md](genie_code_payload.md) for the request envelope and tool schema, and [genie_code_system_prompt.md](genie_code_system_prompt.md) for the system prompt that drives skill selection.

## Registry record

From the Genie Code SkillRegistry definition in the SPA's `19604.5ae31ee5cc.chunk.js` chunk (module `357001`):

```jsonc
{
  "name":        "external-access",
  "description": "Check whether a Unity Catalog table is eligible for external access via open APIs and credential vending. Use when the user asks if a table can be accessed from external tools or engines, how to connect from a non-Databricks client, or why credential vending is failing. Do not use for Delta Sharing questions.",
  "enabled":     "()=>(0,W)('databricks.fe.assistant.enableExternalAccessSkill', false)" /* feature-flag gate */,
  "files":       [ /* 2 entries — see below */ ]
}
```

**Feature flag**: This skill is hidden from the Skill Registry unless `databricks.fe.assistant.enableExternalAccessSkill` is true on the workspace.

## File manifest

Each file lives in its own webpack chunk and is exposed as a raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release — re-derive them from `index.968bbeb5f6.js` before re-extracting. The path Genie Code uses with `readSkillFile` is `skills/external-access/<filename>`.

| File | Chunk id | Module id | Gate |
|---|---|---|---|
| `SKILL.md` | `63077` | `263077` | — |
| `eligibility-checks.md` | `86449` | `586449` | — |

## Files

### `SKILL.md`

Webpack chunk `63077.<hash>.chunk.js`, module `263077`.

````markdown
# External Access Eligibility Check

**USE THIS SKILL** when the user asks:

- Whether a table can be accessed from external tools or engines
- How to connect to a Unity Catalog table from Spark, DuckDB, Polars, or another external client
- Whether credential vending is available for a table
- What external access privileges are needed for a table
- Why external access is failing for a table

**Do NOT use this skill** for questions about Delta Sharing — that is a separate protocol.

When this skill applies, **immediately start executing** the investigation steps below.

## What Is External Access?

External access allows clients outside of Databricks to read or write Unity Catalog tables directly using open APIs and credential vending. It is powered by:

- **Unity REST API** — open protocol for listing and accessing tables
- **Credential vending** — short-lived cloud credentials that let external clients access the underlying storage directly

This is distinct from Delta Sharing, which uses a different protocol and set of privileges.

## Investigation Steps

### Step 1: Identify the Table

Determine the fully-qualified table name (`catalog.schema.table`) from context or the user's message.

### Step 2: Check Table Type and Format

Read [eligibility-checks.md](eligibility-checks.md) for the SQL queries to check:

1. Table type (managed vs external) and data format (Delta, Iceberg, Parquet, etc.)
2. Whether the table is UniForm-enabled (Delta table with Iceberg reads enabled)

### Step 3: Determine External Access Support

Based on the table type, report what external access operations are supported:

| Table Type                                    | Read Access                 | Write Access              | Create Access             |
| --------------------------------------------- | --------------------------- | ------------------------- | ------------------------- |
| UC managed Delta table (catalogManaged)       | ✅ via credential vending   | ✅ via credential vending | ✅ via credential vending |
| UC managed Delta table (not catalogManaged)   | ✅ via credential vending   | ❌ upgrade required       | ❌ upgrade required       |
| UC managed Iceberg table                      | ✅ via credential vending   | ✅ via credential vending | ✅ via credential vending |
| UC managed Delta with UniForm                 | ✅ via Iceberg REST catalog | ❌                        | ❌                        |
| UC external table                             | ✅ via credential vending   | ✅ via credential vending | ✅ via credential vending |
| Other formats (CSV, JSON, Parquet without UC) | ❌ not supported            | ❌ not supported          | ❌ not supported          |

If the table is a UC managed Delta table, proceed to **Step 3a** before reporting write/create eligibility.

### Step 3a: Check catalogManaged (UC managed Delta tables only)

Read [eligibility-checks.md](eligibility-checks.md) for the SQL query (Check 3) to determine whether the table has `catalogManaged = supported` in its table properties.

- **catalogManaged = supported** → External writes and creates are available via credential vending.
- **catalogManaged not set** → Read access is still available, but external writes and creates are **not supported**. Tell the user they must upgrade the table:
  ```sql
  ALTER TABLE <catalog>.<schema>.<table> SET TBLPROPERTIES ('catalogManaged' = 'supported');
  ```

### Step 4: Check Privileges

Read [eligibility-checks.md](eligibility-checks.md) for the SQL query to check whether the current user has `EXTERNAL_USE_SCHEMA` privilege on the schema. This privilege is required for all credential vending operations.

### Step 5: Check Metastore Configuration

The metastore must have `external_access_enabled = true`. This is an admin-level setting. If the user does not have admin access, instruct them to ask their workspace admin to verify this setting in the Unity Catalog metastore configuration.

### Step 6: Report Results

Summarize the findings:

- **Eligible**: State which access modes are available (read-only vs read/write, credential vending vs Iceberg REST), and confirm the user has the required privilege.
- **Not eligible**: Explain which condition is not met and how to resolve it:
  - Wrong table type → suggest supported alternatives
  - UC managed Delta table without `catalogManaged` → read is available but writes/creates require the user to run `ALTER TABLE ... SET TBLPROPERTIES ('catalogManaged' = 'supported')`
  - Missing `EXTERNAL_USE_SCHEMA` privilege → instruct user to request it from their catalog owner (only catalog owners can grant this privilege)
  - Metastore not enabled → instruct user to contact workspace admin
````

### `eligibility-checks.md`

Webpack chunk `86449.<hash>.chunk.js`, module `586449`.

````markdown
# External Access Eligibility SQL Checks

## Check 1: Table Type and Format

**EXECUTE this SQL** to determine the table type and format:

```%sql
SELECT
  table_catalog,
  table_schema,
  table_name,
  table_type,
  data_source_format
FROM information_schema.tables
WHERE table_catalog = '<catalog>'
  AND table_schema = '<schema>'
  AND table_name = '<table>'
```

**Interpret the result:**

- `table_type = 'MANAGED'` AND `data_source_format = 'DELTA'` → UC managed Delta table (read always supported; write/create require `catalogManaged` — run Check 3)
- `table_type = 'MANAGED'` AND `data_source_format = 'ICEBERG'` → UC managed Iceberg table (read/write/create external access)
- `table_type = 'EXTERNAL'` → UC external table (read/write/create external access)
- Other formats → not eligible for credential vending

To check if a managed Delta table has UniForm (Iceberg read) enabled, **EXECUTE**:

```%sql
DESCRIBE EXTENDED <catalog>.<schema>.<table>
```

Look for `delta.universalFormat.enabledFormats` in the result. If it contains `iceberg`, the table supports read access via the Iceberg REST catalog only — write and create are not supported.

**Handle errors:**

- `TABLE_OR_VIEW_NOT_FOUND` → The table does not exist or the user lacks `SELECT` privilege. Report this and stop.
- `PERMISSION_DENIED` → The user lacks access to `information_schema`. Ask the user to verify the table name and their access level.

## Check 2: Schema Privilege

**EXECUTE this SQL** to check whether the current user has `EXTERNAL_USE_SCHEMA` on the schema:

```%sql
SELECT privilege_type
FROM information_schema.schema_privileges
WHERE catalog_name = '<catalog>'
  AND schema_name = '<schema>'
  AND grantee = current_user()
  AND privilege_type = 'EXTERNAL_USE_SCHEMA'
```

**Interpret the result:**

- **1 row returned** → The user has `EXTERNAL_USE_SCHEMA`. Proceed to Step 5 (metastore check).
- **0 rows returned** → The user does not have `EXTERNAL_USE_SCHEMA` on this schema. Only the **catalog owner** can grant this privilege:
  ```sql
  GRANT EXTERNAL_USE_SCHEMA ON SCHEMA <catalog>.<schema> TO `<user_or_group>`;
  ```
- **PERMISSION_DENIED** → The user cannot query `schema_privileges`. This may mean they lack sufficient privilege — advise them to contact their catalog owner.

## Check 3: catalogManaged (UC managed Delta tables only)

**Only run this check if** Check 1 returned `table_type = 'MANAGED'` AND `data_source_format = 'DELTA'`.

External writes and creates to UC managed Delta tables require the table to be `catalogManaged`. **EXECUTE**:

```%sql
DESCRIBE EXTENDED <catalog>.<schema>.<table>
```

Look for the `Table Properties` row in the result and check for `catalogManaged = supported`.

**Interpret the result:**

- **`catalogManaged = supported` is present** → External writes and creates are supported via credential vending.
- **`catalogManaged` is absent or not `supported`** → External writes and creates are **not** supported. The user must upgrade the table by setting the table property:
  ```sql
  ALTER TABLE <catalog>.<schema>.<table> SET TBLPROPERTIES ('catalogManaged' = 'supported');
  ```
  After setting this property, external write and create operations will be enabled.
````
