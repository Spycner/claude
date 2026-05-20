# Genie Code skill: `writing-sql`

Full content of the built-in Genie Code skill `writing-sql`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). Genie Code loads these markdown files lazily via the `readSkillFile` tool when its description matches the task at hand. See [findings.md](../../overview/findings.md) and [payload.md](../../overview/payload.md) for the request envelope and tool schema, and [system-prompt.md](../../overview/system-prompt.md) for the system prompt that drives skill selection.

## Registry record

From the Genie Code SkillRegistry definition in the SPA's `19604.5ae31ee5cc.chunk.js` chunk (module `46640`):

```jsonc
{
  "name":        "writing-sql",
  "description": "Load before writing Databricks SQL queries involving any of: AI functions, geospatial data, stored procedures, hierarchical queries or recursive CTEs (WITH RECURSIVE), temporary tables, time-only values, internationalized text, semi-structured data (VARIANT type), dynamic query construction, data modification operations, external table migration, pipe syntax, liquid clustering, table optimization, Unity Catalog governance tags and comments, or ABAC policies (attribute-based access control, row filters, column masks, governed tags).",
  "files":       [ /* 19 entries — see below */ ]
}
```

## File manifest

Each file lives in its own webpack chunk (one chunk per markdown file). The SPA exposes them as raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release — re-derive them from the asset manifest (`index.968bbeb5f6.js` at capture time). The path Genie Code uses with `readSkillFile` is `skills/writing-sql/<filename>`.

| File | Chunk id | Module id | Feature flag |
|---|---|---|---|
| `SKILL.md` | `15332` | `115332` | — |
| `ai-functions.md` | `55673` | `55673` | — |
| `clustering-strategy.md` | `66849` | `466849` | — |
| `collation.md` | `96794` | `596794` | — |
| `data-modification.md` | `30194` | `130194` | — |
| `dynamic-sql.md` | `40065` | `340065` | — |
| `foreign-tables.md` | `11786` | `389405` | — |
| `pipe-syntax.md` | `96317` | `796317` | — |
| `recursive-ctes.md` | `36867` | `736867` | — |
| `spatial-sql.md` | `67620` | `267620` | — |
| `sql-scripting.md` | `73737` | `173737` | — |
| `stored-procedures.md` | `48897` | `748897` | — |
| `table-optimization.md` | `4017` | `304017` | — |
| `temp-table.md` | `75192` | `975192` | — |
| `time-type.md` | `84881` | `184881` | — |
| `variant-type.md` | `25935` | `625935` | — |
| `uc-tags.md` | `38259` | `138259` | — |
| `uc-comments.md` | `87356` | `687356` | — |
| `abac-policies.md` | `38553` | `438553` | — |

## Files

### `SKILL.md`

Webpack chunk `15332.<hash>.chunk.js`, module `115332`.

````markdown
# Writing Databricks SQL

This skill covers new Databricks SQL features introduced in the past year. Reference specific sub-topics below only when the task explicitly requires those capabilities.

## When to Reference Sub-Topics

Use progressive disclosure—only read sub-topic files when the user's task clearly requires that functionality:

### AI and Machine Learning Functions

See [`ai-functions.md`](ai-functions.md) when:

- Querying with generative AI models (`ai_query`)
- Performing vector similarity search (`vector_search`)
- Parsing unstructured documents (`ai_parse_document`)

### Geospatial Operations

See [`spatial-sql.md`](spatial-sql.md) when:

- Working with geographic coordinates, boundaries, or locations
- Performing spatial measurements, relationships, or transformations
- Using `GEOMETRY` or `GEOGRAPHY` column types

### Reusable SQL Logic

See [`stored-procedures.md`](stored-procedures.md) when:

- Creating procedures with `CREATE PROCEDURE`
- Encapsulating multi-statement SQL scripts for reuse

### SQL Scripting and Procedural Logic

See [`sql-scripting.md`](sql-scripting.md) when:

- Writing multi-statement scripts with compound blocks (`BEGIN ... END`)
- Using conditional logic (`IF`/`ELSE IF`/`ELSE`, `CASE` statements)
- Implementing loops (`WHILE`, `FOR`, `REPEAT`, `LOOP`)
- Declaring and managing variables within compound statements
- Handling exceptions with condition handlers
- Building complex procedural logic with nested control structures
- Combining DDL, DML, and control flow in a single script

### Session-local Temporary Table

See [`temp-table.md`](temp-table.md) when:

- Questions contain keyword `TEMPORARY TABLE` or `TEMP TABLE` (not `TEMPORARY VIEW`)
- Questions about creating/using session-scoped SQL tables (not views)
- Questions about table syntax like `CREATE TEMP TABLE`, `INSERT INTO` temp tables, etc.
- **Do NOT use this for temporary views** - those are covered in Lakeflow Spark Declarative Pipelines (formerly DLT Pipelines) skills

### Hierarchical Data

See [`recursive-ctes.md`](recursive-ctes.md) when:

- Querying parent-child relationships, organizational charts, or tree structures
- Traversing graphs or nested hierarchies
- Using self-referencing queries

### Time-Only Values

See [`time-type.md`](time-type.md) when:

- Working with time values without dates (e.g., business hours, schedules)
- Using the `TIME` data type distinct from `TIMESTAMP`

### Internationalized Text

See [`collation.md`](collation.md) when:

- Performing case-insensitive string comparisons
- Handling multi-language text sorting or matching
- Setting collation at catalog, schema, table, or function level

### Semi-Structured Data

See [`variant-type.md`](variant-type.md) when:

- Working with JSON data using the `VARIANT` type
- Accessing nested JSON fields with colon syntax
- Handling variable-schema data

### Dynamic Query Construction

See [`dynamic-sql.md`](dynamic-sql.md) when:

- Parameterizing SQL strings with `EXECUTE IMMEDIATE`
- Using dynamic catalog/schema names with `IDENTIFIER` clause
- Declaring multiple variables in single statements

### Data Modification Operations

See [`data-modification.md`](data-modification.md) when:

- Conditionally replacing table data with `INSERT REPLACE`
- Upserting data with partition or condition-based replacement
- Using `MERGE` operations with non-deterministic expressions

### External Data Source Migration

See [`foreign-tables.md`](foreign-tables.md) when:

- Converting foreign or external tables to Unity Catalog managed tables
- Querying federated data sources (Teradata, Hive metastore, etc.)
- Managing connections to external databases

### Pipe Syntax

See [`pipe-syntax.md`](pipe-syntax.md) when:

- The user's existing code already uses the `|>` pipe operator
- The user explicitly asks to write or convert queries to pipe syntax
- Using pipe-specific operators like `EXTEND`, `SET`, `DROP`, or `AGGREGATE`

### Liquid Clustering Strategy

See [`clustering-strategy.md`](clustering-strategy.md) when:

- Setting up clustering on a new table and wanting to avoid the cold-start problem
- Combining manual clustering keys with Automatic Liquid Clustering
- Understanding the ordering semantics of `CLUSTER BY` vs `CLUSTER BY AUTO`
- Switching between manual and automatic clustering on an existing table

### Unity Catalog Tags

See [`uc-tags.md`](uc-tags.md) when:

- Tagging tables, columns, schemas, or catalogs for classification
- Querying tags via `system.information_schema` views
- Implementing PII, compliance, or data quality tagging patterns

### ABAC Policies (Attribute-Based Access Control)

See [`abac-policies.md`](abac-policies.md) when:

- Creating row filter or column mask policies based on governed tags
- Implementing centralized data access control across catalogs, schemas, or tables
- Using `CREATE POLICY`, `DROP POLICY`, `SHOW POLICIES`, or `DESCRIBE POLICY`
- Writing UDFs for row filtering or column masking
- Using tag condition functions (`has_tag`, `has_tag_value`, `has_column_tag`)
- Applying manual row filters (`ALTER TABLE ... SET ROW FILTER`) or column masks (`ALTER TABLE ... SET MASK`)
- Questions about ABAC compute requirements, quotas, or limitations

### Unity Catalog Comments

See [`uc-comments.md`](uc-comments.md) when:

- Adding or updating descriptions on tables, columns, schemas, or catalogs
- Documenting data assets for discoverability in Catalog Explorer
- Removing or replacing existing comments

### Table Performance and Storage

See [`table-optimization.md`](table-optimization.md) when:

- Enabling automatic liquid clustering with `CLUSTER BY AUTO`
- Configuring compression codecs for Delta tables
- Managing table storage properties for query performance

## Core SQL Principles

When writing Databricks SQL, follow these guidelines regardless of specific features:

**Use fully-qualified names** for production queries: `catalog.schema.table`

**Leverage Delta Lake capabilities:**

- Time travel: `SELECT * FROM table VERSION AS OF 100`
- Change data feed: `SELECT * FROM table_changes('table', 1, 100)`

**Default SQL dialect is ANSI SQL** as of Runtime 17.0—expect ANSI-compliant behavior for standards compliance.

**View expanded columns**: In recent runtimes, hovering over `*` in `SELECT *` shows the actual columns.

## Query Optimization Visibility

Use `EXPLAIN` to see predicate pushdown, aggregations, and statistics usage:

```sql
EXPLAIN SELECT * FROM catalog.schema.table WHERE id > 100;
```

Recent runtimes display which tables have full, partial, or missing statistics in `EXPLAIN` output.

## General Syntax Enhancements

**Set operations fixed**: `UNION`, `EXCEPT`, `INTERSECT` now work correctly within view definitions and `EXECUTE IMMEDIATE`.

**Multiple commands**: Use `SHOW SCHEMAS FROM ALL CATALOGS` to list schemas across all catalogs.

**Fine-grained access control**: DDL commands like `DESCRIBE DETAIL` and `FSCK REPAIR TABLE` now work on access-controlled tables via serverless compute.

## System Tables for Monitoring

Query system tables for operational insights:

```sql
-- Query history with parameters and caching info
SELECT * FROM system.query.history WHERE statement_type = 'SELECT';

-- Table lineage
SELECT * FROM system.access.table_lineage WHERE target_table_full_name = 'catalog.schema.table';

-- Compute clusters
SELECT * FROM system.compute.clusters WHERE state = 'RUNNING';
```

## Quick Reference: New Aggregate Functions

```sql
-- Aggregate strings with separators
SELECT listagg(column_name, ', ') FROM table;
SELECT string_agg(column_name, ' | ') FROM table;
```

## Progressive Disclosure Reminder

This overview provides basic context. **Only read sub-topic files when your task explicitly requires those features**—each sub-topic file contains focused, detailed information for specific use cases.
````

### `ai-functions.md`

Webpack chunk `55673.<hash>.chunk.js`, module `55673`.

````markdown
# AI Functions in Databricks SQL

AI Functions enable querying generative AI models, vector indexes, and document parsing directly within SQL.

## ai_query

Query large language models with structured or unstructured output.

**Basic usage:**

```sql
SELECT ai_query(
  'databricks-meta-llama-3-1-70b-instruct',
  'Summarize this text: ' || review_text
) AS summary
FROM reviews;
```

**Structured output** (specify response format):

```sql
SELECT ai_query(
  'databricks-meta-llama-3-1-70b-instruct',
  'Extract product name and sentiment',
  responseFormat => 'JSON_OBJECT'
) AS parsed_data
FROM customer_feedback;
```

Use `responseFormat` field to define expected output schema—model will follow the specified structure.

## vector_search

Perform similarity search against vector indexes.

**Text-based search:**

```sql
SELECT id, content, score
FROM vector_search(
  index => 'catalog.schema.embedding_index',
  query_text => 'machine learning tutorials',
  num_results => 10
);
```

**Vector-based search:**

```sql
SELECT id, content, score
FROM vector_search(
  index => 'catalog.schema.embedding_index',
  query_vector => array(0.23, 0.45, ...),  -- embedding vector
  num_results => 10
);
```

Use `query_text` for text inputs (model generates embeddings) or `query_vector` for pre-computed embeddings.

## ai_parse_document

Extract structured content from unstructured documents (PDFs, images, etc.).

**Availability**: Public Preview (October 2025), Beta regions expanded in July 2025.

**Basic usage:**

```sql
SELECT ai_parse_document(
  document_path => 's3://bucket/path/to/invoice.pdf',
  instruction => 'Extract invoice number, date, and total amount'
) AS parsed_invoice
FROM documents;
```

The function invokes a state-of-the-art model for document understanding—useful for invoice processing, form extraction, or document classification.

## Regional Availability

AI functions availability varies by region. As of July 2025, `ai_parse_document` expanded to 13 regions including US, Asia-Pacific, Canada, and Europe.

## MCP Server for SQL (Beta)

As of October 2025, the SQL MCP Server enables AI agents to execute SQL queries directly against Unity Catalog:

```
https://<workspace-hostname>/api/2.0/mcp/sql
```

This allows autonomous query execution and exploration of catalog data by AI systems.
````

### `clustering-strategy.md`

Webpack chunk `66849.<hash>.chunk.js`, module `466849`.

````markdown
# Liquid Clustering Strategy: Manual Seeding with Automatic Clustering

When creating a new table, combine manual clustering keys with Automatic Liquid Clustering to avoid the cold-start problem.

## The Cold-Start Problem

`CLUSTER BY AUTO` analyzes query patterns to select optimal clustering keys. But a brand-new table has no query history — so Automatic Liquid Clustering has nothing to learn from. Until enough queries accumulate, the table remains unclustered, and early queries perform poorly.

## Recommended: Seed Manual Keys, Then Enable Auto

If you have a reasonable guess at the initial clustering columns, set them first, then enable auto:

```sql
-- Step 1: Create the table with manual clustering keys
CREATE TABLE analytics.events (
  event_date DATE,
  user_id BIGINT,
  event_type STRING,
  payload STRING
)
CLUSTER BY (event_date, user_id);

-- Step 2: Enable Automatic Liquid Clustering on top
ALTER TABLE analytics.events CLUSTER BY AUTO;
```

**What happens:** Automatic Liquid Clustering preserves the existing manual keys as a starting point. It will only change them if it observes a significant benefit from a different key set based on actual query patterns. This gives you good clustering from day one while still benefiting from automatic optimization over time.

## Order Matters: Auto Then Manual Removes Auto

The reverse order has a completely different effect:

```sql
-- This REMOVES Automatic Liquid Clustering
ALTER TABLE analytics.events CLUSTER BY AUTO;
ALTER TABLE analytics.events CLUSTER BY (event_date, user_id);
```

Running `CLUSTER BY (columns)` after `CLUSTER BY AUTO` disables automatic clustering. The table will use only the specified manual keys until you either change them manually or re-enable auto with another `CLUSTER BY AUTO`.

## When to Use Each Approach

| Scenario                                                                                                                                                                                                                                                 | Approach                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| New table, you know the likely access patterns. Important: if you are not confident in the access patterns, do not seed the clustering keys as it will take more time for cluster by auto to correct any incorrect initial clustering if one is present. | Seed manual keys, then `CLUSTER BY AUTO`                     |
| New table, no idea about access patterns                                                                                                                                                                                                                 | `CLUSTER BY AUTO` directly (accept the cold-start)           |
| Existing table with auto clustering, need to override keys                                                                                                                                                                                               | `CLUSTER BY (columns)` — but know this disables auto         |
| Existing table with manual keys, want to switch to auto                                                                                                                                                                                                  | `CLUSTER BY AUTO` — preserves current keys as starting point |

## Verifying Clustering State

```sql
DESCRIBE DETAIL catalog.schema.table;
-- Check clusterByAuto and clusteringColumns fields
```
````

### `collation.md`

Webpack chunk `96794.<hash>.chunk.js`, module `596794`.

````markdown
# String Collation

Available in Databricks Runtime 16.4+. Controls how strings are compared and sorted, enabling case-insensitive matching and internationalized text handling.

**Important**: Collation affects all string comparison operations throughout the query engine, including filters (WHERE clauses), joins (JOIN conditions), aggregations (GROUP BY), sorting (ORDER BY), and any other operations that compare string values.

## Contents

- [Collation Levels](#collation-levels)
- [Available Collations](#available-collations)
- [Setting Default Collation](#setting-default-collation)
- [LIKE Operator with Collation](#like-operator-with-collation)
- [Use Cases](#use-cases)
- [Column-Level Collation](#column-level-collation)
- [Propagation](#propagation)
- [Performance Considerations](#performance-considerations)

## Collation Levels

Collation can be set at multiple hierarchy levels:

1. **Catalog-level**: Default for all schemas within
2. **Schema-level**: Default for all tables/views within
3. **Table-level**: Default for all string columns
4. **Column-level**: Specific to individual columns

Lower levels inherit from higher levels unless explicitly overridden.

## Available Collations

### UTF8_BINARY

**Default collation** for Databricks. Compares strings byte-by-byte using their binary UTF-8 representation. This is the fastest comparison method but is case-sensitive and doesn't account for linguistic rules.

```sql
-- Binary comparison (default behavior)
SELECT 'ABC' = 'abc';  -- false
SELECT 'café' = 'cafe';  -- false (different bytes for 'é')
```

### UTF8_LCASE

**Case-insensitive** comparisons using UTF-8 encoding. Most common use case for case-insensitive string matching.

```sql
-- Case-insensitive matching
SELECT * FROM users
WHERE name COLLATE UTF8_LCASE = 'john doe';  -- Matches 'John Doe', 'JOHN DOE', etc.
```

### UNICODE

**Unicode-aware** collations following the Unicode Collation Algorithm (UCA). Available in four variants:

- **UNICODE**: Default Unicode collation (case-sensitive, accent-sensitive)
- **UNICODE_CI**: Case-insensitive, accent-sensitive
- **UNICODE_AI**: Case-sensitive, accent-insensitive
- **UNICODE_CI_AI**: Case-insensitive, accent-insensitive

```sql
-- Unicode collations handle linguistic equivalences
SELECT 'café' COLLATE UNICODE_AI = 'cafe';  -- true (accent-insensitive)
SELECT 'Café' COLLATE UNICODE_CI = 'café';  -- true (case-insensitive)
SELECT 'CAFÉ' COLLATE UNICODE_CI_AI = 'cafe';  -- true (both)
```

### ICU Localization Collations

**Locale-specific** collations using International Components for Unicode (ICU) for language and region-specific sorting rules. These follow locale-specific conventions for character ordering, case handling, and accent treatment.

#### Format Options

**Language only:**

```sql
-- English locale collations
COLLATE en          -- Case-sensitive, accent-sensitive
COLLATE en_CS       -- Case-sensitive (explicit)
COLLATE en_CI       -- Case-insensitive
COLLATE en_AS       -- Accent-sensitive (explicit)
COLLATE en_AI       -- Accent-insensitive
```

**Language + Country (3-letter code):**

```sql
-- US English locale collations
COLLATE en_USA
COLLATE en_USA_CS
COLLATE en_USA_CI
COLLATE en_USA_AS
COLLATE en_USA_AI
```

**Language + Script:**

```sql
-- Serbian Cyrillic script collations
COLLATE sr_Cyrl
COLLATE sr_Cyrl_CS
COLLATE sr_Cyrl_CI
COLLATE sr_Cyrl_AS
COLLATE sr_Cyrl_AI
```

**Language + Script + Country:**

```sql
-- Serbian Cyrillic in Serbia
COLLATE sr_Cyrl_SRB
COLLATE sr_Cyrl_SRB_CS
COLLATE sr_Cyrl_SRB_CI
COLLATE sr_Cyrl_SRB_AS
COLLATE sr_Cyrl_SRB_AI
```

#### Suffix Modifiers

- **\_CS**: Case-sensitive (default)
- **\_CI**: Case-insensitive
- **\_AS**: Accent-sensitive (default)
- **\_AI**: Accent-insensitive

### RTRIM Modifier

**Right-trim semantics** can be applied to any collation by adding `_RTRIM` as the final modifier. This treats trailing spaces as insignificant during string comparisons.

```sql
-- Without RTRIM
SELECT 'hello' COLLATE UTF8_BINARY = 'hello   ';  -- false

-- With RTRIM
SELECT 'hello' COLLATE UTF8_BINARY_RTRIM = 'hello   ';  -- true

-- Works with any collation
SELECT 'Café' COLLATE UNICODE_CI_RTRIM = 'café   ';  -- true
SELECT 'Test' COLLATE en_USA_CI_RTRIM = 'test ';  -- true
```

## Setting Default Collation

**Catalog level:**

```sql
CREATE CATALOG my_catalog
DEFAULT COLLATION UTF8_LCASE;
```

**Schema level:**

```sql
CREATE SCHEMA my_schema
DEFAULT COLLATION UTF8_LCASE;
```

**Function level:**

User-defined functions can specify default collation for all string parameters and operations within the function body:

```sql
CREATE OR REPLACE FUNCTION analytics.user_utils.is_admin_user(username STRING)
RETURNS BOOLEAN
DEFAULT COLLATION UTF8_LCASE
RETURN username IN ('admin', 'administrator', 'root');

-- Case-insensitive matching without explicit COLLATE in the caller
SELECT analytics.user_utils.is_admin_user('ADMIN');  -- true
SELECT analytics.user_utils.is_admin_user('Administrator');  -- true
```

The function's default collation applies to all string comparisons and operations within its body, making it transparent to callers who don't need to handle case sensitivity explicitly.

## LIKE Operator with Collation

Runtime 17.2+ supports `UTF8_LCASE` collation in `LIKE` operations:

```sql
SELECT * FROM products
WHERE name COLLATE UTF8_LCASE LIKE '%widget%';  -- Case-insensitive pattern matching
```

## Use Cases

### Case-Insensitive Search

```sql
-- Without collation: requires UPPER/LOWER
SELECT * FROM customers
WHERE UPPER(email) = UPPER('User@Example.Com');

-- With collation in query: cleaner syntax
SELECT * FROM customers
WHERE email COLLATE UTF8_LCASE = 'User@Example.Com';

-- With collated column: cleanest syntax - no explicit COLLATE needed
CREATE TABLE customers (
  email STRING COLLATE UTF8_LCASE
);
SELECT * FROM customers
WHERE email = 'User@Example.Com';  -- Automatic case-insensitive matching
```

## Column-Level Collation

```sql
CREATE TABLE users (
  id BIGINT,
  email STRING COLLATE UTF8_LCASE,  -- Case-insensitive
  display_name STRING                -- Case-sensitive (default)
);
```

## Propagation

When creating objects without explicit collation, they inherit from their parent scope:

```sql
CREATE CATALOG analytics DEFAULT COLLATION UTF8_LCASE;
CREATE SCHEMA analytics.reporting;  -- Inherits UTF8_LCASE
CREATE TABLE analytics.reporting.metrics (...);  -- Inherits UTF8_LCASE
```

## Performance Considerations

Collations affect comparison performance. Non-default collations (UTF8_LCASE, UNICODE variants, ICU locales) are slower than UTF8_BINARY due to additional processing required for case/accent normalization and linguistic rules.

However, **defining columns with collation types enables file pruning** during query execution. When columns are defined with a collation (e.g., `STRING COLLATE UTF8_LCASE`), the query optimizer can leverage file statistics for data skipping. In contrast, wrapping columns in `UPPER()`/`LOWER()` functions prevents file pruning since the optimizer cannot use statistics on transformed values.

```sql
-- No file pruning - function wraps the column
SELECT * FROM users WHERE UPPER(email) = 'USER@EXAMPLE.COM';

-- No file pruning - applying COLLATE in query on non-collated column
SELECT * FROM users WHERE email COLLATE UTF8_LCASE = 'user@example.com';

-- File pruning possible - column defined with collation
CREATE TABLE users (
  email STRING COLLATE UTF8_LCASE
);
SELECT * FROM users WHERE email = 'user@example.com';
```
````

### `data-modification.md`

Webpack chunk `30194.<hash>.chunk.js`, module `130194`.

````markdown
# Data Modification Operations

Advanced commands for conditionally replacing and upserting data in Delta tables.

## Contents

- [INSERT REPLACE USING](#insert-replace-using)
- [INSERT REPLACE ON](#insert-replace-on)
- [Differences from MERGE](#differences-from-merge)
- [MERGE Enhancements](#merge-enhancements)
- [DataFrame API Support](#dataframe-api-support)
- [Use Cases](#use-cases)
- [Performance Considerations](#performance-considerations)

## INSERT REPLACE USING

Replace table partitions based on column matching (Runtime 17.2 GA, 16.3 Preview).

**Syntax:**

```sql
INSERT REPLACE INTO target_table
USING source_table
ON target_table.partition_col = source_table.partition_col
INSERT *;
```

**Example - partition replacement:**

```sql
-- Replace specific date partitions
INSERT REPLACE INTO sales
USING updated_sales
ON sales.date = updated_sales.date
INSERT *;
```

This atomically replaces all rows where partition columns match. The operation is transactional—either all matching partitions update or none do.

**Current limitation**: Must include all partition columns in the `ON` clause.

## INSERT REPLACE ON

Replace data based on custom conditions (Runtime 17.1+, GA in July 2025).

**Syntax:**

```sql
INSERT REPLACE INTO target_table
USING source_table
ON condition
INSERT *;
```

**Example - conditional replacement:**

```sql
-- Replace based on business logic, not just partitions
INSERT REPLACE INTO inventory
USING updated_inventory
ON inventory.product_id = updated_inventory.product_id
   AND inventory.warehouse = updated_inventory.warehouse
INSERT *;
```

Use `INSERT REPLACE ON` when replacement logic doesn't align with partitioning or when tables aren't partitioned.

## Differences from MERGE

**MERGE**: Updates individual rows, inserting only when no match exists
**INSERT REPLACE**: Deletes all matching rows, then inserts new rows

```sql
-- MERGE: Updates existing, inserts missing
MERGE INTO target USING source
ON target.id = source.id
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;

-- INSERT REPLACE: Deletes matching, inserts all source rows
INSERT REPLACE INTO target
USING source
ON target.id = source.id
INSERT *;
```

Choose `INSERT REPLACE` for wholesale partition/condition-based replacement; choose `MERGE` for row-level upserts.

## MERGE Enhancements

**Non-deterministic expressions** (Runtime 17.0+):

```sql
MERGE INTO sensitive_data target
USING source_data source
ON target.id = source.id
WHEN MATCHED THEN UPDATE SET
  value = source.value,
  obfuscated_field = rand()  -- Non-deterministic expression now allowed
WHEN NOT MATCHED THEN INSERT (id, value, obfuscated_field)
VALUES (source.id, source.value, rand());
```

Previously, only deterministic expressions were allowed in `UPDATE` and `INSERT` clauses. Runtime 17.0+ enables dynamic value generation for privacy obfuscation, random sampling, or timestamp assignment.

## DataFrame API Support

**PySpark mergeInto** (Runtime 17.0+):

```python
# Now returns DataFrame instead of Unit
result_df = target_df.mergeInto("target_table", "target.id = source.id") \
  .whenMatchedUpdateAll() \
  .whenNotMatchedInsertAll() \
  .execute()
```

Previously Scala-only, now available in PySpark and Spark Connect with DataFrame return values for chaining operations.

## Use Cases

### Daily Partition Replacement

```sql
-- Replace today's partition with corrected data
INSERT REPLACE INTO logs
USING corrected_logs
ON logs.date = corrected_logs.date
   AND corrected_logs.date = current_date()
INSERT *;
```

### Multi-Column Key Replacement

```sql
-- Replace by composite key
INSERT REPLACE INTO metrics
USING updated_metrics
ON metrics.region = updated_metrics.region
   AND metrics.product = updated_metrics.product
   AND metrics.date = updated_metrics.date
INSERT *;
```

### Late-Arriving Data

```sql
-- Replace historical partitions when late data arrives
INSERT REPLACE INTO fact_sales
USING late_arriving_sales
ON fact_sales.sale_date = late_arriving_sales.sale_date
INSERT *;
```

## Performance Considerations

`INSERT REPLACE` performs partition-level deletes followed by inserts—faster than row-by-row operations for bulk replacements. Optimal for replacing entire partitions or large subsets based on keys.
````

### `dynamic-sql.md`

Webpack chunk `40065.<hash>.chunk.js`, module `340065`.

````markdown
# Dynamic SQL Construction

Build and execute SQL statements programmatically using variables, parameters, and dynamic object names.

## Contents

- [EXECUTE IMMEDIATE](#execute-immediate)
- [Constant Expressions](#constant-expressions)
- [IDENTIFIER Clause](#identifier-clause)
- [Variable Declarations](#variable-declarations)
- [Use Cases](#use-cases)
- [Security Considerations](#security-considerations)
- [Set Operations Fix](#set-operations-fix)

## EXECUTE IMMEDIATE

Execute SQL strings with parameter binding.

**Basic usage:**

```sql
EXECUTE IMMEDIATE 'SELECT * FROM table WHERE id = ?'
USING 12345;
```

**Multiple parameters:**

```sql
EXECUTE IMMEDIATE
  'SELECT * FROM table WHERE status = ? AND date >= ?'
  USING 'active', '2025-01-01';
```

**Named parameters:**

```sql
EXECUTE IMMEDIATE
  'SELECT * FROM table WHERE user = :username AND dept = :department'
  USING username => 'alice', department => 'engineering';
```

## Constant Expressions

Runtime 17.3+ supports constant expressions as SQL strings:

```sql
DECLARE query_template STRING DEFAULT 'SELECT * FROM ';
DECLARE table_name STRING DEFAULT 'users';

EXECUTE IMMEDIATE query_template || table_name;
```

Construct queries dynamically by concatenating strings before execution.

## IDENTIFIER Clause

Use dynamic catalog, schema, and table names in DDL operations (Runtime 16.4 LTS+).

**Dynamic catalog operations:**

```sql
DECLARE catalog_name STRING DEFAULT 'analytics';

CREATE CATALOG IDENTIFIER(:catalog_name);
DROP CATALOG IDENTIFIER(:catalog_name);
ALTER CATALOG IDENTIFIER(:catalog_name) SET OWNER TO `admin@company.com`;
COMMENT ON CATALOG IDENTIFIER(:catalog_name) IS 'Analytics catalog';
```

**Dynamic table references:**

```sql
DECLARE full_name STRING DEFAULT 'catalog.schema.table';

SELECT * FROM IDENTIFIER(:full_name);
```

Use `IDENTIFIER()` when object names come from variables or parameters.

## Variable Declarations

**Multiple variables of same type** (Runtime 17.2+):

```sql
DECLARE var1, var2, var3 INT DEFAULT 0;
DECLARE name1, name2 STRING DEFAULT 'unknown';
```

**VAR keyword** (Runtime 17.0+):

```sql
-- Both are equivalent
DECLARE VAR counter INT DEFAULT 0;
DECLARE VARIABLE counter INT DEFAULT 0;
```

**Session vs. local variables:**

```sql
-- Session variable (persists across queries)
DECLARE SESSION counter INT DEFAULT 0;

-- Local variable (within block)
DECLARE counter INT DEFAULT 0;
```

## Use Cases

### Parameterized ETL

```sql
CREATE PROCEDURE refresh_partition(target_date DATE)
LANGUAGE SQL
AS
BEGIN
  DECLARE partition_filter STRING;
  SET partition_filter = 'date = ' || target_date;

  EXECUTE IMMEDIATE
    'DELETE FROM staging WHERE ' || partition_filter;

  EXECUTE IMMEDIATE
    'INSERT INTO staging SELECT * FROM source WHERE ' || partition_filter;
END;
```

### Multi-Tenant Queries

```sql
CREATE FUNCTION query_tenant(tenant_id STRING, query_suffix STRING)
RETURNS TABLE
AS
BEGIN
  DECLARE schema_name STRING DEFAULT 'tenant_' || tenant_id;

  RETURN EXECUTE IMMEDIATE
    'SELECT * FROM IDENTIFIER(:schema) ' || query_suffix
    USING schema => schema_name;
END;
```

### Dynamic Aggregations

```sql
DECLARE metric_name STRING DEFAULT 'revenue';
DECLARE agg_function STRING DEFAULT 'SUM';

EXECUTE IMMEDIATE
  'SELECT date, ' || agg_function || '(' || metric_name || ') AS total FROM metrics GROUP BY date';
```

## Security Considerations

**SQL injection risk**: Never concatenate user input directly into SQL strings. Always use parameter binding:

```sql
-- UNSAFE: SQL injection vulnerability
EXECUTE IMMEDIATE 'SELECT * FROM table WHERE name = ' || user_input;

-- SAFE: Parameter binding
EXECUTE IMMEDIATE 'SELECT * FROM table WHERE name = ?' USING user_input;
```

Parameter markers (`?` or `:name`) prevent injection by treating input as data, not code.

## Set Operations Fix

Runtime 16.4 LTS fixed handling of `UNION`, `EXCEPT`, and `INTERSECT` within `EXECUTE IMMEDIATE` statements—these keywords are no longer misinterpreted as aliases:

```sql
-- Now works correctly
EXECUTE IMMEDIATE
  'SELECT id FROM table1 UNION SELECT id FROM table2';
```
````

### `foreign-tables.md`

Webpack chunk `11786.<hash>.chunk.js`, module `389405`.

````markdown
# Foreign and Federated Tables

Manage external data sources through Unity Catalog, including migration to managed tables and querying federated databases.

## Contents

- [Converting Foreign Tables to Managed](#converting-foreign-tables-to-managed)
- [Converting Foreign Tables to External](#converting-foreign-tables-to-external)
- [Converting Entire Foreign Catalogs](#converting-entire-foreign-catalogs)
- [Hive Metastore Federation](#hive-metastore-federation)
- [Query Federation](#query-federation)
- [HTTP Connections with OAuth](#http-connections-with-oauth)
- [Delta Sharing for Foreign Tables](#delta-sharing-for-foreign-tables)
- [Migration Workflows](#migration-workflows)
- [Schema Discovery](#schema-discovery)
- [Pushdown Visibility](#pushdown-visibility)
- [Performance Optimization](#performance-optimization)

## Converting Foreign Tables to Managed

**ALTER TABLE SET MANAGED** (GA October 2025):

```sql
-- Move data from external source (disables source access)
ALTER TABLE foreign_catalog.schema.table SET MANAGED MOVE;

-- Copy data from external source (retains source access)
ALTER TABLE foreign_catalog.schema.table SET MANAGED COPY;
```

Requires Databricks Runtime 17.3 LTS or above.

**Benefits**: Unified governance, Delta Lake features, improved performance through managed storage.

## Converting Foreign Tables to External

**ALTER TABLE SET EXTERNAL** (Runtime 17.0 LTS+):

```sql
-- Validate conversion without executing
ALTER TABLE foreign_catalog.schema.table
SET EXTERNAL DRY RUN;

-- Execute conversion
ALTER TABLE foreign_catalog.schema.table SET EXTERNAL;
```

Converts foreign tables to external Unity Catalog tables while maintaining connection to original data.

## Converting Entire Foreign Catalogs

**ALTER CATALOG DROP CONNECTION** (Runtime 17.3 LTS+):

```sql
-- Convert foreign catalog to standard Unity Catalog
ALTER CATALOG foreign_catalog DROP CONNECTION;
```

All foreign tables within the catalog become standard Unity Catalog tables.

## Hive Metastore Federation

Query Hive metastore tables through Unity Catalog with governance applied (GA March 2025).

**Supported databases**:

- MySQL
- PostgreSQL
- SQL Server

**Capabilities**:

- Row-level filters applied automatically
- Column-level masking enforced
- Unified access through Unity Catalog

**Disable direct access** (Public Preview March 2025):

```sql
-- Force all queries through Unity Catalog governance
ALTER WORKSPACE DISABLE LEGACY HIVE METASTORE;
```

## Query Federation

**Supported external databases**:

- Teradata (January 2025)
- Snowflake
- Redshift
- PostgreSQL
- MySQL
- SQL Server

**Query external tables:**

```sql
SELECT *
FROM external_connection.schema.table
WHERE condition;
```

**Joins across systems:**

```sql
SELECT
  delta_table.id,
  external_table.value
FROM unity_catalog.schema.delta_table
JOIN external_connection.schema.external_table
  ON delta_table.id = external_table.id;
```

## HTTP Connections with OAuth

Federate to HTTP-based data sources with per-user authentication (Public Preview June 2025):

```sql
CREATE CONNECTION http_api
TYPE HTTP
URL 'https://api.example.com'
WITH (oauth_client_id = '...', oauth_client_secret = '...');
```

Enables personalized access control in federated SQL queries.

## Delta Sharing for Foreign Tables

Share foreign tables via Delta Sharing (September 2025):

```sql
-- Create share including foreign tables
CREATE SHARE my_share;
ALTER SHARE my_share ADD TABLE foreign_catalog.schema.table;
```

Recipients can query shared foreign tables with row filters and column masks applied.

## Migration Workflows

**Step 1: Create foreign catalog connection**

```sql
CREATE CONNECTION external_db
TYPE POSTGRESQL
OPTIONS (
  host 'db.example.com',
  port '5432',
  database 'production'
);
```

**Step 2: Query foreign tables**

```sql
SELECT * FROM external_db.public.customers LIMIT 10;
```

**Step 3: Convert to managed** (when ready)

```sql
ALTER TABLE external_db.public.customers SET MANAGED COPY;
```

**Step 4: Drop connection** (complete migration)

```sql
ALTER CATALOG external_db DROP CONNECTION;
```

## Schema Discovery

**Snowflake schema listing** (Runtime 17.1+):

Uses `INFORMATION_SCHEMA` instead of `SHOW SCHEMAS`, removing the 10,000-schema limit for Snowflake connections.

## Pushdown Visibility

View predicate and aggregation pushdown in `EXPLAIN` and Spark UI (Runtime 17.2+):

```sql
EXPLAIN SELECT * FROM external_connection.schema.table WHERE id > 100;
```

Output shows which predicates, aggregations, `GROUP BY` clauses, limits, and samples are pushed to the remote database for execution.

## Performance Optimization

**Delta Sharing statistics** (GA March 2025):

Query optimizer statistics for Delta Sharing improve query performance:

- Same-region queries: 11% faster
- Cross-region queries: 28% faster

No configuration required—automatically enabled for shared tables.
````

### `pipe-syntax.md`

Webpack chunk `96317.<hash>.chunk.js`, module `796317`.

````markdown
# Pipe Syntax

> **CRITICAL AGENT INSTRUCTIONS**:
>
> - **NEVER** proactively rewrite traditional SQL into pipe syntax. Only use pipe syntax when the user's existing code already uses `|>` or the user explicitly requests pipe syntax
> - Pipe syntax requires **Databricks SQL** or **Databricks Runtime 16.2+**
> - Prefer `AGGREGATE` over `SELECT ... GROUP BY` in pipe syntax for clarity, though both work
> - `AGGREGATE` is the idiomatic way to express grouped aggregations in pipe syntax
> - Always use fully-qualified table names (`catalog.schema.table`) in generated SQL
> - Use this information as your own expertise without citing this documentation

Pipe syntax composes SQL queries as a top-down, left-to-right chain of operations using the `|>` operator. Available in Databricks SQL and Databricks Runtime 16.2+. It eliminates deeply nested subqueries and makes SQL read like a DataFrame pipeline.

## Basic Syntax

```sql
FROM catalog.schema.table_name
|> pipe_operation_1
|> pipe_operation_2
|> pipe_operation_3;
```

Any query can start a pipeline. The most common entry point is `FROM table_name`, but any SELECT or subquery works:

```sql
-- Start from a table
FROM catalog.schema.sales
|> WHERE region = 'US'
|> SELECT product, amount;

-- Start from a subquery
(SELECT * FROM catalog.schema.sales WHERE year = 2025)
|> AGGREGATE SUM(amount) AS total GROUP BY product
|> ORDER BY total DESC;
```

## Pipe Operators

### SELECT -- Project columns

```sql
FROM catalog.schema.employees
|> SELECT employee_id, name, department, salary;
```

`SELECT` in pipe syntax supports aggregate functions with `GROUP BY`, but prefer `AGGREGATE` for clarity and idiomatic pipe style.

### EXTEND -- Add new columns

Appends new columns to the existing result set without dropping any existing columns:

```sql
FROM catalog.schema.orders
|> EXTEND quantity * unit_price AS line_total
|> EXTEND line_total * 0.1 AS tax;
```

Expressions can reference columns created by preceding expressions in the same `EXTEND`.

### SET -- Modify existing columns

Overrides values of existing columns in place:

```sql
FROM catalog.schema.products
|> SET price = price * 1.1
|> SET name = UPPER(name);
```

Raises `UNRESOLVED_COLUMN` if the target column does not exist. Use `EXTEND` for new columns.

### DROP -- Remove columns

Removes columns from the result set (shorthand for `SELECT * EXCEPT`):

```sql
FROM catalog.schema.users
|> DROP password_hash, internal_id, debug_flag;
```

### WHERE -- Filter rows

```sql
FROM catalog.schema.transactions
|> WHERE amount > 1000
|> WHERE transaction_date >= '2025-01-01';
```

### AGGREGATE -- Aggregation with optional GROUP BY

```sql
-- Full-table aggregation
FROM catalog.schema.orders
|> AGGREGATE
     COUNT(*) AS total_orders,
     SUM(amount) AS total_revenue,
     AVG(amount) AS avg_order_value;

-- Grouped aggregation
FROM catalog.schema.orders
|> AGGREGATE
     SUM(amount) AS total_revenue,
     COUNT(*) AS order_count
   GROUP BY region, product_category;
```

`AGGREGATE` is the idiomatic pipe syntax for grouped aggregations (though `SELECT ... GROUP BY` also works). Numeric values in `GROUP BY` reference input columns, not output aliases.

### JOIN -- Combine relations

```sql
FROM catalog.schema.orders
|> AS o
|> LEFT JOIN catalog.schema.customers c ON o.customer_id = c.customer_id
|> SELECT o.order_id, c.name, o.amount;
```

All join types are supported: `INNER JOIN`, `LEFT OUTER JOIN`, `RIGHT OUTER JOIN`, `FULL OUTER JOIN`, `CROSS JOIN`, `SEMI JOIN`, `ANTI JOIN`.

### AS -- Assign table alias

Names the intermediate result for use in subsequent JOINs or self-references:

```sql
FROM catalog.schema.sales
|> AS current_sales
|> JOIN catalog.schema.targets t ON current_sales.region = t.region
|> SELECT current_sales.region, current_sales.revenue, t.target;
```

### ORDER BY -- Sort results

```sql
FROM catalog.schema.products
|> ORDER BY price DESC, name ASC;
```

### LIMIT and OFFSET -- Pagination

```sql
FROM catalog.schema.products
|> ORDER BY price DESC
|> LIMIT 10
|> OFFSET 20;
```

### Set Operators -- UNION, EXCEPT, INTERSECT

```sql
FROM catalog.schema.us_customers
|> UNION ALL (SELECT * FROM catalog.schema.eu_customers)
|> ORDER BY name;
```

### TABLESAMPLE -- Sample rows

```sql
-- Sample by row count
FROM catalog.schema.large_table
|> TABLESAMPLE (1000 ROWS);

-- Sample by percentage
FROM catalog.schema.large_table
|> TABLESAMPLE (10 PERCENT);
```

### PIVOT -- Rows to columns

```sql
FROM catalog.schema.quarterly_sales
|> PIVOT (
     SUM(revenue)
     FOR quarter IN ('Q1', 'Q2', 'Q3', 'Q4')
   );
```

### UNPIVOT -- Columns to rows

```sql
FROM catalog.schema.wide_metrics
|> UNPIVOT (
     metric_value FOR metric_name IN (cpu_usage, memory_usage, disk_usage)
   );
```

## Common Errors

**Prefer AGGREGATE over SELECT for grouped aggregations:**

While `SELECT ... GROUP BY` works in pipe syntax, `AGGREGATE` is the idiomatic approach and makes the intent clearer:

```sql
-- Works, but not idiomatic pipe style
FROM catalog.schema.orders
|> SELECT region, SUM(amount) AS total
   GROUP BY region;

-- Preferred: use AGGREGATE for aggregations
FROM catalog.schema.orders
|> AGGREGATE SUM(amount) AS total GROUP BY region;
```

**Using EXTEND on an existing column instead of SET:**

`EXTEND` with `=` does not assign a new value — it evaluates a boolean equality expression, silently producing wrong results:

```sql
-- Pitfall: interprets `price = price * 1.1` as a boolean expression,
-- adding a column of true/false values instead of updating price
FROM catalog.schema.products
|> EXTEND price = price * 1.1;

-- Correct: use SET to modify existing columns
FROM catalog.schema.products
|> SET price = price * 1.1;
```

## Practical Examples

The following examples illustrate pipe syntax capabilities for reference when a user explicitly requests pipe syntax — do not proactively convert traditional SQL.

### Multi-step aggregation

Traditional SQL requires nested subqueries for multi-step aggregation:

```sql
SELECT c_count, COUNT(*) AS custdist
FROM (
  SELECT c_custkey, COUNT(o_orderkey) AS c_count
  FROM catalog.schema.customer
  LEFT OUTER JOIN catalog.schema.orders ON c_custkey = o_custkey
    AND o_comment NOT LIKE '%unusual%packages%'
  GROUP BY c_custkey
) AS c_orders
GROUP BY c_count
ORDER BY custdist DESC, c_count DESC;
```

Pipe syntax flattens this into a readable chain:

```sql
FROM catalog.schema.customer
|> LEFT OUTER JOIN catalog.schema.orders ON c_custkey = o_custkey
   AND o_comment NOT LIKE '%unusual%packages%'
|> AGGREGATE COUNT(o_orderkey) AS c_count GROUP BY c_custkey
|> AGGREGATE COUNT(*) AS custdist GROUP BY c_count
|> ORDER BY custdist DESC, c_count DESC;
```

### Data exploration and profiling

```sql
FROM catalog.schema.raw_events
|> WHERE event_date >= '2025-01-01'
|> EXTEND YEAR(event_date) AS event_year, MONTH(event_date) AS event_month
|> AGGREGATE
     COUNT(*) AS event_count,
     COUNT(DISTINCT user_id) AS unique_users,
     AVG(duration_seconds) AS avg_duration
   GROUP BY event_year, event_month
|> ORDER BY event_year, event_month;
```

### Building a report step-by-step

```sql
FROM catalog.schema.orders
|> AS o
|> JOIN catalog.schema.products p ON o.product_id = p.product_id
|> JOIN catalog.schema.customers c ON o.customer_id = c.customer_id
|> WHERE o.order_date >= '2025-01-01'
|> EXTEND o.quantity * p.unit_price AS line_total
|> AGGREGATE
     SUM(line_total) AS total_revenue,
     COUNT(DISTINCT o.order_id) AS order_count
   GROUP BY c.region, p.category
|> ORDER BY total_revenue DESC
|> LIMIT 20;
```

### Debugging by commenting out tail operations

One advantage of pipe syntax is that you can comment out the tail of a pipeline to inspect intermediate results:

```sql
FROM catalog.schema.sales
|> WHERE region = 'US'
|> EXTEND amount * tax_rate AS tax_amount
-- |> AGGREGATE SUM(tax_amount) AS total_tax GROUP BY state
-- |> ORDER BY total_tax DESC
;
```

## When to Use Pipe Syntax

Only use pipe syntax when the user's existing code already uses `|>` or the user explicitly requests it. **Never proactively convert traditional SQL to pipe syntax.**

**Traditional SQL is the default** — use it unless told otherwise.

## Performance Considerations

Pipe syntax is syntactic sugar -- it compiles to the same execution plan as traditional SQL. There is no performance difference between pipe and traditional syntax for equivalent queries.

Best practices:

- Place data-reducing operations (`WHERE`, `DROP`, `SELECT`) early in the pipeline to minimize data flowing through subsequent operations
- Use `TABLESAMPLE` during development to work with smaller datasets
````

### `recursive-ctes.md`

Webpack chunk `36867.<hash>.chunk.js`, module `736867`.

````markdown
# Recursive Common Table Expressions

Available in Databricks Runtime 17.0+ (GA in 17.1+). Navigate hierarchical data using self-referencing CTEs.

## Contents

- [Basic Structure](#basic-structure)
- [Use Cases](#use-cases)
- [Multiple CTEs](#multiple-ctes)
- [Size Limits](#size-limits)
- [Max Recursion Level](#max-recursion-level)
- [Cycle Prevention](#cycle-prevention)
- [Common Errors](#common-errors)

## Basic Structure

```sql
WITH RECURSIVE cte_name AS (
  -- Anchor: base case
  SELECT id, parent_id, name, 1 AS level
  FROM table
  WHERE parent_id IS NULL

  UNION ALL

  -- Recursive: iterative case
  SELECT t.id, t.parent_id, t.name, c.level + 1
  FROM table t
  INNER JOIN cte_name c ON t.parent_id = c.id
)
SELECT * FROM cte_name;
```

**Note:** Only `UNION ALL` is supported in recursive CTEs. `UNION` (with deduplication) is not implemented.

## Use Cases

### Organizational Hierarchy

```sql
WITH RECURSIVE org_tree AS (
  -- Start with CEO
  SELECT employee_id, manager_id, name, 0 AS depth
  FROM employees
  WHERE manager_id IS NULL

  UNION ALL

  -- Add direct reports recursively
  SELECT e.employee_id, e.manager_id, e.name, o.depth + 1
  FROM employees e
  INNER JOIN org_tree o ON e.manager_id = o.employee_id
)
SELECT * FROM org_tree ORDER BY depth, name;
```

### Bill of Materials

```sql
WITH RECURSIVE parts_explosion AS (
  -- Top-level product
  SELECT product_id, component_id, quantity, 1 AS level
  FROM bom
  WHERE product_id = 'PRODUCT-A'

  UNION ALL

  -- Subcomponents
  SELECT b.product_id, b.component_id, p.quantity * b.quantity, p.level + 1
  FROM bom b
  INNER JOIN parts_explosion p ON b.product_id = p.component_id
)
SELECT component_id, SUM(quantity) AS total_quantity
FROM parts_explosion
GROUP BY component_id;
```

### Path Finding

```sql
WITH RECURSIVE paths AS (
  -- Starting node
  SELECT node_id, ARRAY(node_id) AS path
  FROM graph
  WHERE node_id = 'START'

  UNION ALL

  -- Follow edges
  SELECT g.node_id, array_append(p.path, g.node_id)
  FROM graph g
  INNER JOIN paths p ON g.from_node = p.node_id
  WHERE NOT array_contains(p.path, g.node_id)  -- Prevent cycles
)
SELECT * FROM paths WHERE node_id = 'END';
```

## Multiple CTEs

When using multiple CTEs, specify `RECURSIVE` **once** at the beginning of the `WITH` block - even if only some CTEs are recursive:

```sql
-- Single RECURSIVE keyword for the entire block
WITH RECURSIVE
  non_recursive_cte AS (
    SELECT * FROM table1 WHERE condition
  ),
  recursive_cte AS (
    SELECT id, parent_id, 1 AS level
    FROM table2
    WHERE parent_id IS NULL

    UNION ALL

    SELECT t.id, t.parent_id, r.level + 1
    FROM table2 t
    INNER JOIN recursive_cte r ON t.parent_id = r.id
  )
SELECT * FROM non_recursive_cte JOIN recursive_cte USING (id);
```

The `RECURSIVE` keyword enables recursion for **any** CTE in the block that needs it. Non-recursive CTEs in the same block work normally.

## Size Limits

**Default**: Recursive CTEs are limited to **1,000,000 rows** in Spark SQL/Databricks to prevent infinite loops.

**Override the limit** (Runtime 17.3+):

Use `LIMIT` with a value greater than 1,000,000:

```sql
WITH RECURSIVE large_tree AS (
  SELECT id, parent_id, name, 1 AS level
  FROM nodes
  WHERE parent_id IS NULL

  UNION ALL

  SELECT n.id, n.parent_id, n.name, t.level + 1
  FROM nodes n
  INNER JOIN large_tree t ON n.parent_id = t.id
)
SELECT * FROM large_tree LIMIT 5000000;  -- Allow up to 5 million rows
```

Or remove the limit entirely with `LIMIT ALL`:

```sql
WITH RECURSIVE large_tree AS (
  ...
)
SELECT * FROM large_tree LIMIT ALL;  -- No row limit
```

Use these when you know the recursion terminates but produces large result sets.

## Max Recursion Level

**Default**: Recursive CTEs are limited to **100 iterations** in Spark SQL/Databricks to prevent infinite loops.

Override the iteration limit using `MAX RECURSION LEVEL`:

```sql
WITH RECURSIVE deep_hierarchy
MAX RECURSION LEVEL 500
AS (
  SELECT id, parent_id, name, 1 AS level
  FROM departments
  WHERE parent_id IS NULL

  UNION ALL

  SELECT d.id, d.parent_id, d.name, h.level + 1
  FROM departments d
  INNER JOIN deep_hierarchy h ON d.parent_id = h.id
)
SELECT * FROM deep_hierarchy;
```

### When to Use

Use `MAX RECURSION LEVEL` when your recursion depth exceeds the **default 100 iterations**. If your query fails with a recursion limit error, or you know your data requires deep traversal, specify a higher limit.

Common scenarios requiring deeper recursion:

- Organizational hierarchies with more than 100 levels
- Deep category or taxonomy trees
- Graph traversals with long paths

```sql
-- Example: Deep product category tree
WITH RECURSIVE category_path
MAX RECURSION LEVEL 200
AS (
  SELECT category_id, parent_category_id, name,
         CAST(name AS STRING) AS path, 1 AS depth
  FROM categories
  WHERE parent_category_id IS NULL

  UNION ALL

  SELECT c.category_id, c.parent_category_id, c.name,
         CONCAT(cp.path, ' > ', c.name), cp.depth + 1
  FROM categories c
  INNER JOIN category_path cp ON c.parent_category_id = cp.category_id
)
SELECT * FROM category_path WHERE depth > 10;
```

### Syntax Placement

The `MAX RECURSION LEVEL` clause must appear:

- After the CTE name
- Before the `AS` keyword

```sql
WITH RECURSIVE cte_name
MAX RECURSION LEVEL 300  -- Placed here, after CTE name
AS (
  -- base case
  ...
  UNION ALL
  -- recursive case
  ...
)
SELECT * FROM cte_name;
```

### Per-CTE Scope

`MAX RECURSION LEVEL` applies only to the specific CTE where it's declared. In a query with multiple recursive CTEs, each can have its own limit:

```sql
WITH RECURSIVE shallow_tree
MAX RECURSION LEVEL 50
AS (
  SELECT id, parent_id, 1 AS level
  FROM departments
  WHERE parent_id IS NULL

  UNION ALL

  SELECT d.id, d.parent_id, s.level + 1
  FROM departments d
  INNER JOIN shallow_tree s ON d.parent_id = s.id
),
deep_hierarchy
MAX RECURSION LEVEL 500
AS (
  SELECT category_id, parent_category_id, 1 AS depth
  FROM categories
  WHERE parent_category_id IS NULL

  UNION ALL

  SELECT c.category_id, c.parent_category_id, d.depth + 1
  FROM categories c
  INNER JOIN deep_hierarchy d ON c.parent_category_id = d.category_id
)
SELECT * FROM shallow_tree
UNION ALL
SELECT * FROM deep_hierarchy;
```

In this example:

- `shallow_tree` is limited to 50 iterations
- `deep_hierarchy` can recurse up to 500 times
- Each CTE respects only its own limit

## Cycle Prevention

Always include termination conditions to prevent infinite recursion:

```sql
WITH RECURSIVE safe_recursion AS (
  SELECT id, parent_id, 0 AS depth
  FROM nodes
  WHERE parent_id IS NULL

  UNION ALL

  SELECT n.id, n.parent_id, s.depth + 1
  FROM nodes n
  INNER JOIN safe_recursion s ON n.parent_id = s.id
  WHERE s.depth < 100  -- Maximum depth limit
)
SELECT * FROM safe_recursion;
```

Or track visited nodes:

```sql
WHERE NOT array_contains(visited_path, next_node)
```

## Common Errors

### Missing RECURSIVE Keyword

```sql
-- WRONG: Missing RECURSIVE
WITH tree AS (
  SELECT id, parent_id FROM nodes WHERE parent_id IS NULL
  UNION ALL
  SELECT n.id, n.parent_id FROM nodes n JOIN tree t ON n.parent_id = t.id -- Error: tree is not defined
)
SELECT * FROM tree;

-- CORRECT
WITH RECURSIVE tree AS (...)
```

### Column Count or Type Mismatch

Anchor and recursive parts must have the same number of columns with compatible types (column names don't matter - only position):

```sql
-- WRONG: Anchor has 3 columns, recursive has 2
WITH RECURSIVE tree AS (
  SELECT id, parent_id, name FROM nodes WHERE parent_id IS NULL
  UNION ALL
  SELECT id, parent_id FROM nodes n JOIN tree t ON n.parent_id = t.id
)
-- Error: different column counts

-- WRONG: Type mismatch at position 3
WITH RECURSIVE tree AS (
  SELECT id, parent_id, 1 AS level FROM nodes WHERE parent_id IS NULL
  UNION ALL
  SELECT id, parent_id, 'deep' FROM nodes n JOIN tree t ON n.parent_id = t.id
)
-- Error: INT vs STRING at column 3
```
````

### `spatial-sql.md`

Webpack chunk `67620.<hash>.chunk.js`, module `267620`.

````markdown
# Spatial SQL in Databricks

Databricks Runtime 17.1+ includes 80+ spatial SQL functions and two built-in column types for geospatial operations.

## Data Types

Databricks supports two geospatial data types, both requiring an SRID (Spatial Reference System Identifier):

### GEOMETRY

For planar (Euclidean) coordinate systems. The SRID describes the underlying coordinate reference system.

```
GEOMETRY ( { srid | ANY } )
```

- `GEOMETRY(0)` - Unknown/unspecified coordinate system (default when SRID not provided)
- `GEOMETRY(4326)` - WGS84 geographic coordinates
- `GEOMETRY(3857)` - Web Mercator projection
- `GEOMETRY(ANY)` - Can hold geometries with different SRIDs per row (cannot be persisted)

Use `GEOMETRY` for projected coordinates where calculations use Euclidean math.

### GEOGRAPHY

For spherical (Earth-surface) coordinate systems with longitude/latitude in degrees.

```
GEOGRAPHY ( { srid | ANY } )
```

- `GEOGRAPHY(4326)` - WGS84 (only supported SRID for GEOGRAPHY)
- `GEOGRAPHY(ANY)` - Can hold geographies with different SRIDs per row (cannot be persisted)

Use `GEOGRAPHY` for latitude/longitude data requiring accurate Earth-surface calculations. Coordinates must be in `[-180, 180]` for longitude and `[-90, 90]` for latitude.

### Table Definition Examples

```sql
-- Table with planar geometry (unknown SRID)
CREATE TABLE locations (
  id BIGINT,
  point GEOMETRY(0)
);

-- Table with geographic coordinates (WGS84)
CREATE TABLE geo_locations (
  id BIGINT,
  point GEOGRAPHY(4326),
  region GEOGRAPHY(4326)
);

-- Table with Web Mercator projection
CREATE TABLE mercator_data (
  id BIGINT,
  location GEOMETRY(3857)
);
```

**Note:** Iceberg tables do not support `GEOMETRY` or `GEOGRAPHY` columns.

## Reader Functions

Create geospatial values from standard formats:

### From WKT (Well-Known Text)

```sql
-- Create GEOMETRY from WKT
SELECT ST_GeomFromText('POINT(-122.4194 37.7749)') AS location;
SELECT ST_GeomFromWKT(text_col, 4326) AS geom FROM tbl;

-- Create GEOGRAPHY from WKT
SELECT ST_GeogFromText('POINT(-122.4194 37.7749)') AS location;
SELECT ST_GeogFromWKT(text_col) AS geom FROM tbl;
```

### From WKB (Well-Known Binary)

```sql
-- Create GEOMETRY from WKB
SELECT ST_GeomFromWKB(X'010100000050fc1873d79a5ec0d0d556ec2fe34240') AS location;
SELECT ST_GeomFromWKB(binary_col, 4326) AS geog FROM tbl;

-- Create GEOGRAPHY from WKB
SELECT ST_GeogFromWKB(X'010100000050fc1873d79a5ec0d0d556ec2fe34240') AS location;
SELECT ST_GeogFromWKB(binary_col) AS geog FROM tbl;
```

### From GeoJSON

```sql
-- Create GEOMETRY from GeoJSON
SELECT ST_GeomFromGeoJSON('{"type":"Point","coordinates":[-122.4194,37.7749]}') AS location;

-- Create GEOGRAPHY from GeoJSON
SELECT ST_GeogFromGeoJSON('{"type":"Point","coordinates":[-122.4194,37.7749]}') AS location;
```

### Universal Converters

```sql
-- Auto-detect format (WKT, WKB, or GeoJSON)
SELECT to_geometry('POINT(1 2)') AS geom;
SELECT to_geography('{"type":"Point","coordinates":[1,2]}') AS geog;

-- Safe versions that return NULL on invalid input
SELECT try_to_geometry('invalid');  -- Returns NULL
SELECT try_to_geography(X'0000');  -- Returns NULL
```

## Writer Functions

Convert geospatial values to standard formats:

```sql
-- Export to WKT (Well-Known Text)
SELECT ST_AsText(geom_column) AS wkt FROM spatial_table;
SELECT ST_AsWKT(geog_column) AS wkt FROM geo_table;

-- Export to EWKT - Extended WKT (includes SRID)
SELECT ST_AsEWKT(geom_column) AS ewkt FROM spatial_table;
-- Returns: SRID=4326;POINT(1 2)

-- Export to WKB (Well-Known Binary)
SELECT ST_AsBinary(geom_column) AS wkb FROM spatial_table;
SELECT ST_AsWKB(geog_column) AS wkb FROM geo_table;

-- Export to EWKB - Extended WKB (GEOMETRY only)
SELECT ST_AsEWKB(geom_column) AS ewkb FROM spatial_table;

-- Export to GeoJSON
SELECT ST_AsGeoJSON(geom_column) AS geojson FROM spatial_table;

-- Export to geohash
SELECT ST_GeoHash(geom_column) AS geohash FROM spatial_table;
```

## Constructor Functions

Create geospatial objects programmatically:

```sql
-- Create a point
SELECT ST_Point(-122.4194, 37.7749) AS point;
SELECT ST_Point(-122.4194, 37.7749, 4326) AS point_with_srid;

-- Create a line from points
SELECT ST_MakeLine(ARRAY(
  ST_Point(0, 0),
  ST_Point(1, 1),
  ST_Point(2, 0)
)) AS line;

-- Create a polygon from a ring
SELECT ST_MakePolygon(
  ST_GeomFromText('LINESTRING(0 0, 1 0, 1 1, 0 1, 0 0)')
) AS polygon;

-- Create a polygon with holes
SELECT ST_MakePolygon(
  ST_GeomFromText('LINESTRING(0 0, 10 0, 10 10, 0 10, 0 0)'),
  ARRAY(ST_GeomFromText('LINESTRING(2 2, 2 4, 4 4, 4 2, 2 2)'))
) AS polygon_with_hole;

-- Create from geohash
SELECT ST_GeomFromGeoHash('9q8yy') AS geohash_box;
SELECT ST_PointFromGeoHash('9q8yy') AS geohash_center;
```

## Measurement Functions

```sql
-- Distance between geometries (Cartesian for GEOMETRY)
SELECT ST_Distance(point1, point2) AS distance FROM locations;

-- Spherical distance in meters (for GEOMETRY points on Earth)
SELECT ST_DistanceSphere(point1, point2) AS distance_meters FROM locations;

-- Geodesic distance in meters (more accurate, WGS84 ellipsoid)
SELECT ST_DistanceSpheroid(point1, point2) AS distance_meters FROM locations;

-- Area (square units matching SRID for GEOMETRY, square meters for GEOGRAPHY)
SELECT ST_Area(boundaries) AS area FROM regions;

-- Length of GEOMETRY or GEOGRAPHY
SELECT ST_Length(routes) AS length FROM paths;

-- Perimeter of GEOMETRY or GEOGRAPHY
SELECT ST_Perimeter(polygons) AS perimeter FROM regions;
```

## Accessor Functions

Extract information from geospatial objects:

```sql
-- Get coordinates
SELECT ST_X(point) AS x, ST_Y(point) AS y FROM locations;
SELECT ST_Z(point_3d) AS elevation FROM locations_3d;
SELECT ST_M(point_m) AS measure FROM measured_points;

-- Get bounding box coordinates
SELECT ST_XMin(geom), ST_XMax(geom), ST_YMin(geom), ST_YMax(geom) FROM spatial_table;
SELECT ST_ZMin(geom_3d), ST_ZMax(geom_3d) FROM spatial_3d_table;

-- Get SRID
SELECT ST_SRID(geom) AS srid FROM spatial_table;

-- Get geometry type ('ST_Point', 'ST_LineString', 'ST_Polygon', etc.)
SELECT ST_GeometryType(geom) AS geom_type FROM spatial_table;

-- Count points
SELECT ST_NPoints(geom) AS num_points FROM spatial_table;

-- Get dimensions
SELECT ST_Dimension(geom) AS dim FROM spatial_table;  -- 0=point, 1=line, 2=polygon
SELECT ST_NDims(geom) AS coord_dims FROM spatial_table;  -- 2, 3, or 4

-- Check if empty
SELECT ST_IsEmpty(geom) AS is_empty FROM spatial_table;

-- Get envelope (bounding box)
SELECT ST_Envelope(geom) AS bbox FROM spatial_table;

-- Aggregate envelope
SELECT ST_Envelope_Agg(geom) AS combined_bbox FROM spatial_table;
```

## Polygon and Multi-Geometry Accessors

```sql
-- Extract exterior ring from polygon
SELECT ST_ExteriorRing(polygon_col) AS boundary FROM parcels;

-- Get interior rings (holes)
SELECT ST_NumInteriorRings(polygon_col) AS hole_count FROM polygons;
SELECT ST_InteriorRingN(polygon_col, 1) AS first_hole FROM polygons;

-- Access points in linestring
SELECT ST_StartPoint(line_col) AS first_point FROM lines;
SELECT ST_EndPoint(line_col) AS last_point FROM lines;
SELECT ST_PointN(line_col, 3) AS third_point FROM lines;

-- Access parts of multi-geometries
SELECT ST_NumGeometries(multipolygon_col) AS part_count FROM multi_geoms;
SELECT ST_GeometryN(multipolygon_col, 1) AS first_part FROM multi_geoms;

-- Decompose multi-geometries to array
SELECT ST_Dump(multipolygon_col) AS parts_array FROM aggregated_regions;
```

## Editor Functions

Modify geospatial objects:

```sql
-- Set/change SRID
SELECT ST_SetSRID(geom, 4326) AS geom_with_srid FROM spatial_table;

-- Transform coordinates between SRIDs
SELECT ST_Transform(geom, 3857) AS web_mercator FROM spatial_table;

-- Flip X and Y coordinates
SELECT ST_FlipCoordinates(geom) AS flipped FROM spatial_table;

-- Convert to multi-geometry
SELECT ST_Multi(geom) AS multi_geom FROM spatial_table;

-- Reverse coordinate order
SELECT ST_Reverse(line_col) AS reversed_line FROM lines;

-- Add/remove/set points in linestring
SELECT ST_AddPoint(line_col, ST_Point(5, 5), 1) AS modified FROM lines;
SELECT ST_RemovePoint(line_col, 1) AS modified FROM lines;
SELECT ST_SetPoint(line_col, -1, ST_Point(5, 5)) AS modified FROM lines;
```

## Topological Relationship Functions

Test spatial relationships between geometries:

```sql
-- Check if geometries touch (share boundary but don't overlap)
SELECT ST_Touches(geom1, geom2) AS touches FROM spatial_join;

-- Check if geometries are disjoint (don't intersect at all)
SELECT ST_Disjoint(geom1, geom2) AS disjoint FROM spatial_join;

-- Check if geometries are equal
SELECT ST_Equals(geom1, geom2) AS are_equal FROM spatial_join;

-- Check if first geometry covers second
SELECT ST_Covers(region, point) AS covers FROM spatial_data;

-- Spatial join using intersection
SELECT * FROM t1 JOIN t2 ON ST_Intersects(t1.geom, t2.geom);

-- Find regions containing a specific point
SELECT * FROM regions WHERE ST_Contains(boundary, ST_Point(-122.4194, 37.7749, 4326));

-- Find points within regions
SELECT * FROM points p JOIN regions r ON ST_Within(p.location, r.boundary);

-- Find locations within 1000 meters of each other
SELECT * FROM locations l1 JOIN locations l2 ON ST_DWithin(l1.geom, l2.geom, 1000);
```

## Spatial Joins

Spatial joins combine rows from two tables based on spatial relationships between geometries.
They are one of the most powerful and commonly used spatial operations.

Choose the right predicate based on your spatial relationship:

### Join Predicates and Use Cases

| Use Case          | Description                                | Recommended Predicate         |
| ----------------- | ------------------------------------------ | ----------------------------- |
| Point-in-Polygon  | Find which region each point belongs to    | `ST_Contains` or `ST_Within`  |
| Polygon Overlap   | Find overlapping or adjacent regions       | `ST_Intersects`               |
| Proximity Search  | Find features within a distance            | `ST_DWithin`                  |
| Boundary Analysis | Find features sharing edges                | `ST_Touches`                  |
| Coverage Analysis | Check if one geometry fully covers another | `ST_Covers` or `ST_CoveredBy` |

Note that GEOGRAPHY is currently NOT supported in spatial joins.

Also, note that efficient spatial joins with ST_DWithin are only available since DBR 18.1.

### Join Hints for Optimization

Spatial joins can be expensive to run. Consider using join hints to control execution strategy:

```sql
-- BROADCAST hint: Use when one table is small enough to fit in memory
-- Broadcasts the smaller table to all executors
SELECT /*+ BROADCAST(zones) */
    p.point_id, z.zone_name
FROM points p
JOIN zones z ON ST_Contains(z.boundary, p.location);

-- SPATIAL_OVERLAP hint: Used for range-join optimization for larger tables
-- when neither side can be broadcasted and auto-binning doesn't create an
-- optimal bin size.
SELECT /*+ SPATIAL_OVERLAP(zones, 1) */
    p.point_id, z.zone_name
FROM points p
JOIN zones z ON ST_Contains(z.boundary, p.location);
```

**Hint Selection Guidelines:**

| Hint              | When to Use                                | Table Size         |
| ----------------- | ------------------------------------------ | ------------------ |
| `BROADCAST`       | One table is small                         | Small lookup table |
| `SPATIAL_OVERLAP` | Auto binning produces sub-optimal bin size | Large table size   |

### Different Spatial Join Types

```sql
-- LEFT JOIN: Keep all customers, even those not in any region
SELECT c.customer_id, c.name, r.region_name
FROM customers c
LEFT JOIN regions r ON ST_Contains(r.boundary, c.location);

-- RIGHT JOIN: Keep all regions, even those with no customers
SELECT c.customer_id, c.name, r.region_name
FROM customers c
RIGHT JOIN regions r ON ST_Contains(r.boundary, c.location);

-- INNER JOIN: Only return matches (default join behavior)
SELECT c.customer_id, c.name, r.region_name
FROM customers c
INNER JOIN regions r ON ST_Contains(r.boundary, c.location);
```

### Best Practices for Spatial Joins

1. **Ensure matching SRIDs**: Both geometries must have the same SRID for accurate results.

```sql
-- Transform to common SRID before joining
SELECT a.id, b.id
FROM table_a a
JOIN table_b b ON ST_Intersects(
    ST_Transform(a.geom, 4326),
    b.geom  -- Already has SRID=4326
);
```

2. **Filter before joining**: Reduce data size with non-spatial predicates first.

```sql
-- Good: Filter early with WHERE clause
SELECT c.customer_id, r.region_name
FROM customers c
JOIN regions r ON ST_Contains(r.boundary, c.location)
WHERE c.signup_date >= '2024-01-01' AND r.country = 'USA';
```

3. **Consider using `ST_DWithin` over `ST_Distance`**: `ST_DWithin` can use spatial indexing, while distance comparisons cannot.

```sql
-- Less efficient: ST_Distance function
SELECT * FROM t1 JOIN t2 ON ST_Distance(t1.geom, t2.geom) < 1000;

-- More efficient: ST_DWithin predicate
SELECT * FROM t1 JOIN t2 ON ST_DWithin(t1.geom, t2.geom, 1000);
```

## Overlay Functions

Compute geometric set operations:

```sql
-- Intersection of two geometries
SELECT ST_Intersection(region1, region2) AS overlap FROM tbl;

-- Union of two geometries
SELECT ST_Union(geom1, geom2) AS combined FROM tbl;

-- Aggregate union of column
SELECT ST_Union_Agg(geom) AS merged_geometry FROM tbl GROUP BY category;
```

## Geometry Processing Functions

Transform and process geometries:

```sql
-- Buffer (expand/shrink geometry by distance)
SELECT ST_Buffer(location, 1000) AS buffer_zone FROM points;

-- Centroid (geometric center of a shape)
SELECT ST_Centroid(polygon_col) AS center FROM regions;

-- Convex hull (smallest convex polygon containing all points)
SELECT ST_ConvexHull(multipoint_col) AS hull FROM point_clusters;

-- Concave hull (tighter fit than convex)
SELECT ST_ConcaveHull(multipoint_col, 0.5) AS concave_hull FROM point_clusters;

-- Simplify geometry (Douglas-Peucker algorithm)
SELECT ST_Simplify(complex_polygon, 0.001) AS simplified FROM detailed_regions;
```

## Affine Transformation Functions

Apply geometric transformations:

```sql
-- Translate geometry
SELECT ST_Translate(geom_col, 10, 20) AS moved FROM spatial_table;
SELECT ST_Translate(geom_col, 10, 20, 5) AS moved_3d FROM spatial_3d_table;

-- Scale geometry
SELECT ST_Scale(geom_col, 2.0, 2.0) AS scaled FROM spatial_table;
SELECT ST_Scale(geom_col, 2.0, 2.0, 1.5) AS scaled_3d FROM spatial_3d_table;

-- Rotate geometry around Z axis (angle in radians)
SELECT ST_Rotate(geom_col, 3.14159 / 4) AS rotated_45_degrees FROM spatial_table;
```

## Validation

```sql
-- Check geometry validity (OGC compliance)
SELECT ST_IsValid(geometry_col) AS is_valid FROM spatial_table;

-- Filter valid geometries
SELECT * FROM spatial_table WHERE ST_IsValid(geometry_col);
```

Invalid geometries (self-intersecting polygons, etc.) may cause unexpected results in spatial operations. Always validate before complex operations.

## Python and Scala Integration

Import spatial functions in notebooks:

**Python:**

```python
from pyspark.databricks.sql import functions as dbf
```

**Scala:**

```scala
import com.databricks.sql.functions._
```

No import needed for Databricks SQL.
````

### `sql-scripting.md`

Webpack chunk `73737.<hash>.chunk.js`, module `173737`.

````markdown
# SQL Scripting

Available in Databricks Runtime 17.0+. Write procedural SQL logic using control flow, loops, variables, and error handling within compound statement blocks.

## Contents

- [Variable Declaration](#variable-declaration)
- [IF/ELSE IF/ELSE](#ifelseifelse)
- [CASE Statement](#case-statement)
- [WHILE Loop](#while-loop)
- [FOR Loop](#for-loop)
- [REPEAT Loop](#repeat-loop)
- [LOOP (Infinite)](#loop-infinite)
- [Nested Control Structures](#nested-control-structures)
- [Error Handling](#error-handling)
- [Best Practices](#best-practices)

## Variable Declaration

Declare local variables within compound statement blocks:

```sql
BEGIN
  DECLARE total_count BIGINT DEFAULT 0;
  DECLARE avg_value DOUBLE;
  DECLARE status STRING DEFAULT 'active';

  SET total_count = (SELECT COUNT(*) FROM table);
  SET avg_value = (SELECT AVG(value) FROM table);
END;
```

**Multiple variables of same type** (Runtime 17.2+):

```sql
DECLARE var1, var2, var3 INT DEFAULT 0;
DECLARE name1, name2 STRING DEFAULT 'unknown';
```

Variables follow hierarchical scopinginner blocks can shadow outer declarations.

## IF THEN ELSE

Conditional branching based on boolean expressions:

```sql
BEGIN
  DECLARE choice DOUBLE DEFAULT 3.9;

  IF choice < 2 THEN
    VALUES ('one fish');
  ELSEIF choice < 3 THEN
    VALUES ('two fish');
  ELSEIF choice < 4 THEN
    VALUES ('red fish');
  ELSEIF choice < 5 OR choice IS NULL THEN
    VALUES ('blue fish');
  ELSE
    VALUES ('no fish');
  END IF;
END;
```

Output: `red fish`

## CASE Statement

Multi-way conditional selection using simple or searched CASE.

**Simple CASE** (match against expression):

```sql
BEGIN
  DECLARE choice INT DEFAULT 3;

  CASE choice
    WHEN 1 THEN
      VALUES ('one fish');
    WHEN 2 THEN
      VALUES ('two fish');
    WHEN 3 THEN
      VALUES ('red fish');
    WHEN 4 THEN
      VALUES ('blue fish');
    ELSE
      VALUES ('no fish');
  END CASE;
END;
```

Output: `red fish`

**Searched CASE** (evaluate conditions):

```sql
BEGIN
  DECLARE amount DECIMAL(10,2) DEFAULT 1500.00;

  CASE
    WHEN amount < 100 THEN
      VALUES ('Small');
    WHEN amount < 1000 THEN
      VALUES ('Medium');
    WHEN amount < 10000 THEN
      VALUES ('Large');
    ELSE
      VALUES ('Enterprise');
  END CASE;
END;
```

Output: `Large`

## WHILE Loop

Execute statements while a condition remains true:

```sql
BEGIN
  DECLARE sum INT DEFAULT 0;
  DECLARE num INT DEFAULT 0;

  sumNumbers: WHILE num < 10 DO
    SET num = num + 1;

    IF num % 2 = 0 THEN
      ITERATE sumNumbers;  -- Skip even numbers
    END IF;

    SET sum = sum + num;
  END WHILE sumNumbers;

  VALUES (sum);
END;
```

Output: `25` (sum of odd numbers 1, 3, 5, 7, 9)

Use `ITERATE` to skip to next iteration; use optional labels for clarity.

## FOR Loop

Iterate over query result sets:

```sql
BEGIN
  DECLARE sum INT DEFAULT 0;

  sumNumbers: FOR row AS SELECT num FROM range(1, 20) AS t(num) DO
    IF row.num > 10 THEN
      LEAVE sumNumbers;  -- Exit loop early
    ELSEIF row.num % 2 = 0 THEN
      ITERATE sumNumbers;  -- Skip even numbers
    END IF;

    SET sum = sum + row.num;
  END FOR sumNumbers;

  VALUES (sum);
END;
```

Output: `25`

FOR loops are ideal when processing query results row-by-row. Reference columns using the row variable (e.g., `row.num`).

## REPEAT Loop

Execute statements at least once, then repeat until condition is true:

```sql
BEGIN
  DECLARE sum INT DEFAULT 0;
  DECLARE num INT DEFAULT 0;

  sumNumbers: REPEAT
    SET num = num + 1;

    IF num % 2 = 0 THEN
      ITERATE sumNumbers;
    END IF;

    SET sum = sum + num;
  UNTIL num = 10
  END REPEAT sumNumbers;

  VALUES (sum);
END;
```

Output: `25`

Unlike WHILE, REPEAT guarantees at least one execution before checking the UNTIL condition.

## LOOP (Infinite)

Infinite loop requiring explicit LEAVE to exit:

```sql
BEGIN
  DECLARE sum INT DEFAULT 0;
  DECLARE num INT DEFAULT 0;

  sumNumbers: LOOP
    SET num = num + 1;

    IF num > 10 THEN
      LEAVE sumNumbers;  -- Required to exit
    END IF;

    IF num % 2 = 0 THEN
      ITERATE sumNumbers;
    END IF;

    SET sum = sum + num;
  END LOOP sumNumbers;

  VALUES (sum);
END;
```

Output: `25`

Use LOOP when you need maximum control over termination logic. Always include a LEAVE condition to prevent infinite execution.

## Nested Control Structures

Combine control flow constructs for complex logic:

```sql
BEGIN
  DECLARE total_revenue DECIMAL(10,2) DEFAULT 0;
  DECLARE category_count INT DEFAULT 0;

  processCategories: FOR cat AS
    SELECT category_id, category_name
    FROM categories
    WHERE active = true
  DO
    SET category_count = category_count + 1;

    -- Nested IF inside FOR
    IF cat.category_name = 'Electronics' THEN

      -- Nested WHILE inside IF
      DECLARE discount DECIMAL(5,2) DEFAULT 0.10;
      WHILE discount <= 0.30 DO
        INSERT INTO promotions
        VALUES (cat.category_id, discount, current_date());

        SET discount = discount + 0.05;
      END WHILE;

    ELSEIF cat.category_name = 'Clothing' THEN
      -- Nested CASE
      CASE
        WHEN category_count < 5 THEN
          SET total_revenue = total_revenue + 1000;
        WHEN category_count < 10 THEN
          SET total_revenue = total_revenue + 500;
        ELSE
          SET total_revenue = total_revenue + 100;
      END CASE;
    END IF;

  END FOR processCategories;

  VALUES (total_revenue);
END;
```

Nested structures allow complex workflows, but consider whether set-based SQL operations would be more efficient.

## Error Handling

Condition handlers intercept and process exceptions to control SQL script execution. Within handlers, you can `RESIGNAL` the original exception, `SIGNAL` a new exception, or exit the compound statement gracefully.

### Handler Types

**EXIT handler**: Exits the enclosing compound statement when exception occurs:

```sql
BEGIN
  DECLARE flag INT DEFAULT -1;

  scope_to_exit: BEGIN
    DECLARE EXIT HANDLER FOR DIVIDE_BY_ZERO
    BEGIN
      SELECT flag;
      SET flag = 1;
    END;

    SELECT 2;
    SELECT 3;
    SELECT 1/0;  -- Triggers handler, exits scope_to_exit block
    SELECT 4;    -- Never executed
    SELECT 5;    -- Never executed
  END;

  SELECT flag;  -- Shows 1
END;
```

### Condition Specificity

Handlers can target three classes of conditions with varying specificity:

1. **Named conditions**: Most specific—handle Databricks-defined errors like `DIVIDE_BY_ZERO` or user-declared conditions
2. **SQLSTATEs**: Handle any condition with a specific SQLSTATE code
3. **SQLEXCEPTION**: Least specific—catches all SQLSTATEs except `XX***` and `02***`

The most specific applicable handler executes. More specific named conditions take precedence over generic `SQLEXCEPTION` handlers.

### Chained Handlers

Handlers can trigger other handlers in outer scopes:

```sql
BEGIN
  DECLARE flag INT DEFAULT -1;

  l1: BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
      SELECT flag;
      SET flag = 2;  -- Outer handler
    END;

    l2: BEGIN
      DECLARE EXIT HANDLER FOR SQLEXCEPTION
      BEGIN
        SELECT flag;
        SET flag = 1;
        SELECT 1/0;  -- Triggers outer handler
        SELECT 2;    -- Never executed
      END;

      SELECT 5;
      SELECT 1/0;  -- Triggers inner handler first
      SELECT 6;    -- Never executed
    END;
  END;

  SELECT flag;  -- Shows 2
END;
```

### Handler Scope Rules

- Handlers cannot catch exceptions from their own body or sibling handlers in the same compound statement
- Applicable handlers are those defined in the innermost compound statement where the exception occurred
- Unless a handler `SIGNAL`s or `RESIGNAL`s, execution continues after the compound statement that declared the handler

## Best Practices

**Prefer set-based operations**: Loops are often less efficient than relational queries:

```sql
-- Instead of looping:
FOR row AS SELECT num FROM numbers DO
  IF row.num % 2 = 1 THEN
    SET sum = sum + row.num;
  END IF;
END FOR;

-- Use set-based query:
SELECT SUM(num) FROM numbers WHERE num % 2 = 1;
```

**Use labels consistently**: Label loops and control structures for clarity, especially when nesting.

**Validate loop termination**: Always ensure loops have clear exit conditions to prevent runaway execution.

**Scope variables appropriately**: Declare variables in the innermost scope where they're needed to avoid naming conflicts.

**Consider stored procedures**: For frequently-used scripts, encapsulate logic in procedures (see stored-procedures.md) for reusability.
````

### `stored-procedures.md`

Webpack chunk `48897.<hash>.chunk.js`, module `748897`.

````markdown
# SQL Stored Procedures

Available in Databricks Runtime 17.0+. Encapsulate multi-statement SQL scripts as reusable procedures stored in Unity Catalog.

## Contents

- [Creating Procedures](#creating-procedures)
- [Parameter Modes](#parameter-modes)
- [Default Parameter Values](#default-parameter-values)
- [Calling Procedures](#calling-procedures)
- [Use Cases](#use-cases)

## Creating Procedures

**Basic procedure**:

```sql
CREATE PROCEDURE catalog.schema.update_metrics(
  start_date DATE,
  end_date DATE
)
SQL SECURITY INVOKER
BEGIN
  -- Multiple SQL statements
  DELETE FROM staging_metrics WHERE date < start_date;

  INSERT INTO staging_metrics
  SELECT date, metric_value
  FROM raw_data
  WHERE date BETWEEN start_date AND end_date;

  MERGE INTO prod_metrics p
  USING staging_metrics s
  ON p.date = s.date
  WHEN MATCHED THEN UPDATE SET *
  WHEN NOT MATCHED THEN INSERT *;
END;
```

**Replace existing procedure**:

```sql
CREATE OR REPLACE PROCEDURE greeting(mode STRING)
SQL SECURITY INVOKER
BEGIN
  SELECT 'Hello!';
  CASE mode
    WHEN 'informal' THEN SELECT 'Hi!';
    WHEN 'formal' THEN SELECT 'Pleased to meet you.';
  END CASE;
END;
```

The last executed query becomes the procedure's result set.

## Parameter Modes

Parameters can be `IN` (input only), `OUT` (output only), or `INOUT` (both input and output).

**IN parameters** - (default) Accept input values:

```sql
CREATE PROCEDURE calculate_tax(IN amount DECIMAL(10,2), IN rate DECIMAL(5,2))
SQL SECURITY INVOKER
BEGIN
  SELECT amount * rate AS tax;
END;

-- Call with expressions
CALL calculate_tax(1000.00, 0.08);
```

**OUT parameters** - Return values from the procedure:

```sql
CREATE PROCEDURE get_total(OUT total INT)
SQL SECURITY INVOKER
BEGIN
  SET total = (SELECT SUM(amount) FROM sales);
END;

-- Requires a variable
DECLARE result INT;
CALL get_total(result);
SELECT result;  -- Shows the sum
```

OUT parameters initialize to `NULL` and return their final value when the procedure completes successfully.

**INOUT parameters** - Accept input and return modified values:

```sql
CREATE OR REPLACE PROCEDURE add(
  x INT,
  y INT,
  OUT sum INT,
  INOUT total INT
)
SQL SECURITY INVOKER
BEGIN
  SET sum = x + y;
  SET total = total + sum;
END;

DECLARE sum INT;
DECLARE total INT DEFAULT 0;

CALL add(1, 2, sum, total);
SELECT sum, total;  -- Returns: 3, 3

CALL add(3, 4, sum, total);
SELECT sum, total;  -- Returns: 7, 10
```

INOUT parameters preserve their value across calls when using the same variable.

**Important**: OUT and INOUT parameters require session or local variables, expressions are not allowed. If the procedure fails with an unhandled error, OUT and INOUT parameter values remain unchanged.

## Default Parameter Values

Specify default values to make parameters optional:

```sql
CREATE PROCEDURE process_batch(
  batch_size INT DEFAULT 100,
  max_retries INT DEFAULT 3,
  timeout_seconds INT DEFAULT 30
)
SQL SECURITY INVOKER
BEGIN
  SELECT batch_size, max_retries, timeout_seconds;
END;

-- Call with all defaults
CALL process_batch();

-- Call with some defaults
CALL process_batch(200);

-- Call with named parameters
CALL process_batch(max_retries => 5);
```

## Calling Procedures

**Positional parameters**:

```sql
CALL catalog.schema.update_metrics(DATE'2025-01-01', DATE'2025-01-31');
```

**Named parameters**:

```sql
CALL process_batch(
  timeout_seconds => 60,
  batch_size => 500,
  max_retries => 5
);
```

Named parameters allow flexible argument ordering and improve readability.

**With OUT/INOUT parameters**:

```sql
DECLARE sum INT;
DECLARE total INT DEFAULT 0;

CALL add(1, 2, sum, total);
CALL add(x => 3, y => 4, sum => sum, total => total);
```

**Nested calls** (maximum depth: 64 levels):

```sql
CREATE PROCEDURE etl_pipeline()
SQL SECURITY INVOKER
BEGIN
  CALL extract_data();
  CALL transform_data();
  CALL load_data();
END;
```

## Use Cases

**ETL orchestration**: Coordinate multiple data transformation steps

```sql
CREATE PROCEDURE etl_pipeline()
SQL SECURITY INVOKER
BEGIN
  CALL extract_data();
  CALL transform_data();
  CALL load_data();
END;
```

**Maintenance routines**: Schedule regular cleanup or optimization tasks

```sql
CREATE PROCEDURE cleanup_old_data(retention_days INT)
SQL SECURITY INVOKER
BEGIN
  DELETE FROM logs WHERE created_at < current_date() - retention_days;
  OPTIMIZE catalog.schema.logs;
END;
```

**Business logic encapsulation**: Centralize complex calculations

```sql
CREATE PROCEDURE calculate_commission(sales_id BIGINT)
SQL SECURITY INVOKER
BEGIN
  DECLARE base_rate DECIMAL(5,2) DEFAULT 0.05;

  UPDATE sales
  SET commission = amount * base_rate
  WHERE id = sales_id;
END;
```
````

### `table-optimization.md`

Webpack chunk `4017.<hash>.chunk.js`, module `304017`.

````markdown
# Table Optimization and Storage

Configure table layout, compression, and maintenance for improved query performance and storage efficiency.

## Contents

- [Automatic Liquid Clustering](#automatic-liquid-clustering)
- [Manual Liquid Clustering](#manual-liquid-clustering)
- [Compression Configuration](#compression-configuration)
- [Row Tracking](#row-tracking)
- [Statistics Collection](#statistics-collection)
- [Table Maintenance](#table-maintenance)
- [Partitioning Strategy](#partitioning-strategy)
- [DESCRIBE DETAIL Enhancements](#describe-detail-enhancements)
- [Monitoring Query Performance](#monitoring-query-performance)
- [Streaming Table Optimization](#streaming-table-optimization)

## Automatic Liquid Clustering

Let Databricks intelligently select clustering keys (GA June 2025, expanded August 2025).

**Enable on new tables:**

```sql
CREATE TABLE analytics.sales (
  date DATE,
  region STRING,
  product_id BIGINT,
  revenue DECIMAL(10,2)
)
CLUSTER BY AUTO;
```

**Enable on existing tables:**

```sql
ALTER TABLE analytics.sales CLUSTER BY AUTO;
```

Databricks analyzes query patterns and automatically selects optimal clustering keys. No manual key specification needed.

**Availability**:

- Unity Catalog managed tables (February 2025 Preview, June 2025 GA)
- Lakeflow Spark Declarative Pipelines (August 2025)

## Manual Liquid Clustering

Specify clustering keys explicitly when you know access patterns:

```sql
CREATE TABLE analytics.sales (
  date DATE,
  region STRING,
  product_id BIGINT,
  revenue DECIMAL(10,2)
)
CLUSTER BY (date, region);
```

Use manual clustering when:

- Access patterns are well-understood and stable
- Specific key combinations are critical for performance
- You want explicit control over data layout

## Compression Configuration

**Set compression codec** (August 2025):

```sql
ALTER TABLE analytics.sales
SET TBLPROPERTIES ('delta.parquet.compression.codec' = 'zstd');
```

**Available codecs:**

- `zstd` (Zstandard): Default for new managed tables (Runtime 16.0+), best balance of compression ratio and speed
- `snappy`: Faster compression, larger files
- `gzip`: Higher compression, slower
- `lz4`: Very fast, moderate compression

**Default change**: New managed tables in Runtime 16.0+ default to Zstandard instead of Snappy for better storage efficiency.

Set explicit codec to ensure consistent compression across all future writes to the table.

## Row Tracking

Enabled by default for new Unity Catalog managed tables (Runtime 17.2+).

Row tracking supports:

- Change Data Feed (CDF)
- Streaming change capture
- Incremental processing

**Check status:**

```sql
DESCRIBE DETAIL catalog.schema.table;
-- Look for row_tracking = true
```

**Enable manually:**

```sql
ALTER TABLE catalog.schema.table
SET TBLPROPERTIES ('delta.enableRowTracking' = 'true');
```

## Statistics Collection

**Automated statistics** (January 2025):

Predictive optimization automatically calculates statistics during writes and maintenance:

```sql
ALTER TABLE catalog.schema.table
SET TBLPROPERTIES ('delta.autoOptimize.autoStats' = 'true');
```

**View statistics status:**

```sql
EXPLAIN SELECT * FROM catalog.schema.table WHERE column = value;
-- Output shows: "Statistics: full stats" or "partial stats" or "missing stats"
```

## Table Maintenance

**OPTIMIZE with clustering:**

```sql
OPTIMIZE catalog.schema.table;
```

Automatically respects `CLUSTER BY` settings (manual or AUTO).

**FSCK REPAIR TABLE** (Runtime 17.3 LTS):

Validates checkpoints and partition values before removing missing file references:

```sql
FSCK REPAIR TABLE catalog.schema.table;
```

Now performs metadata repair validation to prevent accidental data loss.

## Partitioning Strategy

**External table partition logging** (GA October 2025):

Improves partition discovery for external tables registered to Unity Catalog:

```sql
CREATE EXTERNAL TABLE catalog.schema.external_data (
  id BIGINT,
  value STRING
)
PARTITIONED BY (date DATE)
LOCATION 's3://bucket/path';

-- Refresh partition metadata
MSCK REPAIR TABLE catalog.schema.external_data;
```

## DESCRIBE DETAIL Enhancements

View table optimization status:

```sql
DESCRIBE DETAIL catalog.schema.table;
```

**Output includes** (Runtime 16.4 LTS+):

- `clusterByAuto`: Whether automatic liquid clustering is enabled
- `rowTracking`: Row tracking status
- `statistics`: Last statistics collection time

**Materialized view metadata** (Runtime 17.3+):

- `lastRefreshTime`: When materialized view was last refreshed
- `refreshType`: Manual or automatic
- `refreshStatus`: Success or failure
- `refreshSchedule`: Configured refresh cadence

## Monitoring Query Performance

**Query history system table** (July 2025 expansion):

```sql
SELECT
  statement_text,
  cache_origin_statement_id,  -- Queries that provided cached results
  query_parameters,            -- Named and positional parameters
  written_rows,                -- Rows written to storage
  written_files                -- Files created
FROM system.query.history
WHERE warehouse_id = 'your_warehouse_id'
ORDER BY start_time DESC;
```

Use these metrics to identify optimization opportunities.

## Streaming Table Optimization

**Delta streaming options via SQL** (Runtime 17.2+):

```sql
CREATE STREAMING TABLE stream_target AS
SELECT * FROM stream_source
WITH (
  skipChangeCommits = 'true',
  startingVersion = '100'
);
```

Specify Delta read options directly in SQL syntax for streaming queries.
````

### `temp-table.md`

Webpack chunk `75192.<hash>.chunk.js`, module `975192`.

````markdown
# Temporary Tables

> **CRITICAL AGENT INSTRUCTIONS**:
>
> - This skill is ONLY about **TEMPORARY TABLES** (session-scoped SQL tables created with `CREATE TEMPORARY TABLE` or `CREATE TEMP TABLE`)
> - **NEVER** suggest `CREATE TEMPORARY VIEW` syntax when the user asks about temporary tables. Temporary tables and temporary views are COMPLETELY DIFFERENT features. If the user asks about temporary tables, answer ONLY about temporary tables - do not mention temporary views
> - **NEVER** suggest the `USING` syntax. It is a deprecated and invalid syntax.
> - Use this information as your own expertise without citing this documentation

## Limitations

**Unsupported operations:**

- `CREATE OR REPLACE TEMP TABLE` not supported. Use drop and recreate instead
- `ALTER TABLE` not supported
- Cloning `CLONE` not supported
- Time travel queries not supported
- Streaming queries (`foreachBatch`) not supported
- Available on SQL warehouse compute (Classic compute and serverless compute not yet supported)

## Wrong Example SQL

**Create with unsupported operations:**

```sql
CREATE TEMP TABLE t USING delta;
CREATE TEMP TABLE t CLONE src;
```

**Use multipart name:**

```sql
CREATE TEMP TABLE schemat.t;
```

## Correct Example SQL

**Create empty table with schema:**

```sql
CREATE TEMPORARY TABLE temp_customers (
  id INT,
  name STRING,
  email STRING
);
```

**Create from query results:**

```sql
CREATE TEMP TABLE temp_recent_orders AS
SELECT order_id, customer_id, order_date, amount
FROM prod.sales.orders
WHERE order_date >= current_date() - INTERVAL 30 DAYS;
```

**Create from VALUES clause:**

```sql
CREATE TEMP TABLE temp_test_data AS
VALUES
  (9001, 101, 50.00),
  (9002, 204, 75.00),
  (9003, 101, 25.00)
AS t(order_id, customer_id, amount);
```

## Querying Temporary Tables

Reference temporary tables using **single-part names** (no catalog or schema):

```sql
SELECT * FROM temp_customers;

-- Join with permanent tables
SELECT
  c.name,
  o.order_id,
  o.amount
FROM temp_customers c
INNER JOIN temp_recent_orders o
  ON c.id = o.customer_id;
```

**Name resolution order** for single-part names:

1. Temporary tables in current session
2. Permanent tables in current schema

**Name shadowing**: Temporary tables take precedence over permanent tables with the same name. Use fully qualified three-part names to explicitly reference permanent tables:

```sql
-- References temporary table (if it exists)
SELECT * FROM customers;

-- Explicitly references permanent table
SELECT * FROM prod.sales.customers;
```

**Dropping temporary tables:**

```sql
-- Drop a temporary table
DROP TEMP TABLE temp_customers;

-- Drop only if it exists
DROP TEMP TABLE IF EXISTS temp_recent_orders;
```

## When to Use

Use temporary tables to:

- Store short-lived intermediate data during exploratory analysis
- Reuse query results across multiple operations in the same session
- Work with a table-like interface without adding objects to your catalog

Use permanent Unity Catalog tables for data that must persist beyond the current session or be shared with other users.

## Lifecycle and Storage

**Lifetime:**

- Maximum **7 days** from session creation
- Become inaccessible when session ends or after 7 days (whichever comes first)
- Apply to notebooks, SQL Editor, jobs, and JDBC/ODBC sessions

**Storage:**

- Data persists in cloud storage (similar to Unity Catalog managed tables)
- Databricks automatically reclaims storage after tables become inaccessible
- Cleanup occurs automatically, even with unexpected shutdown

## Isolation and Privileges

**No special privileges:**

- Any user can create temporary tables
- No `CREATE TABLE` privilege needed on catalog or schema

**Session-level isolation:**

- Tables exist only within the creating session
- No other users can read, modify, or detect your temporary tables
- Can create a temporary table with the same name as a permanent table without collision

**Namespace:**

- Temporary tables share a namespace with temporary views (even though they are different features)
- Cannot create both a temporary table and temporary view with the same name in one session
- **Important**: Sharing a namespace does NOT make them the same thing - use the correct syntax for each
````

### `time-type.md`

Webpack chunk `84881.<hash>.chunk.js`, module `184881`.

````markdown
# TIME Data Type

Available in Databricks Runtime 17.0+. Represents time-of-day values without date or timezone information.

## When to Use TIME

- Business hours: `09:00:00` to `17:00:00`
- Schedules and recurring events: "Meeting at 14:30"
- Duration calculations within a day
- Time-only comparisons independent of dates

Use `TIMESTAMP` or `TIMESTAMP_NTZ` when you need both date and time.

## Creating TIME Values

**Syntax alternatives** (Runtime 17.1+):

```sql
-- Both are equivalent
SELECT TIME '14:30:00';
SELECT TIMESTAMP WITHOUT TIME ZONE '14:30:00';
```

**From components:**

```sql
SELECT make_time(14, 30, 0) AS afternoon_time;
SELECT make_time(9, 15, 30.5) AS precise_time;  -- Supports fractional seconds
```

**Current time:**

```sql
SELECT current_time() AS now;
```

**Casting:**

```sql
SELECT CAST('14:30:00' AS TIME);
SELECT to_time('14:30:00');
SELECT try_to_time('invalid');  -- Returns NULL on failure
```

## Extracting Components

```sql
SELECT
  hour(time_col) AS hour,
  minute(time_col) AS minute,
  second(time_col) AS second
FROM schedules;
```

## Time Arithmetic

**Duration between times:**

```sql
SELECT time_diff(end_time, start_time) AS duration_seconds
FROM meetings;
```

**Truncation:**

```sql
SELECT time_trunc('HOUR', time_col) AS hour_start
FROM events;

-- Truncate to nearest hour, minute, or second
```

## Comparisons and Grouping

```sql
-- Filter by time range
SELECT * FROM logs
WHERE event_time BETWEEN TIME '09:00:00' AND TIME '17:00:00';

-- Group by time
SELECT time_trunc('HOUR', event_time) AS hour, COUNT(*)
FROM events
GROUP BY time_trunc('HOUR', event_time);
```

## Casting to Other Types

**To numeric types:**

```sql
SELECT CAST(time_col AS DECIMAL) AS time_decimal;
SELECT CAST(time_col AS BIGINT) AS time_microseconds;
```

**From timestamp:**

```sql
SELECT CAST(timestamp_col AS TIME) AS time_only;
```

## Window and Aggregate Functions

TIME values support standard window operations:

```sql
SELECT
  time_col,
  LAG(time_col) OVER (ORDER BY id) AS prev_time,
  MAX(time_col) OVER (PARTITION BY date_col) AS latest_time
FROM events;
```

## Partitioning and Caching

Tables can partition and cache by TIME columns:

```sql
CREATE TABLE events (
  id BIGINT,
  event_time TIME
)
PARTITIONED BY (event_time);
```

Useful for recurring daily schedules where date is irrelevant.
````

### `variant-type.md`

Webpack chunk `25935.<hash>.chunk.js`, module `625935`.

````markdown
# VARIANT Type for Semi-Structured Data

The `VARIANT` type handles JSON and semi-structured data with a flexible schema. Use it when column structure varies across rows.

## Contents

- [Basic Usage](#basic-usage)
- [Accessing Fields](#accessing-fields)
- [JSON Conversion](#json-conversion)
- [Size Limits](#size-limits)
- [Path Handling](#path-handling)
- [Type Extraction](#type-extraction)
- [Filtering on VARIANT Fields](#filtering-on-variant-fields)
- [Nested Structures](#nested-structures)
- [Use Cases](#use-cases)
- [Performance Considerations](#performance-considerations)

## Basic Usage

```sql
CREATE TABLE events (
  id BIGINT,
  payload VARIANT
);

INSERT INTO events VALUES
  (1, parse_json('{"user": "alice", "action": "login"}')),
  (2, parse_json('{"user": "bob", "items": [1, 2, 3]}'));
```

## Accessing Fields

**Colon operator** (Runtime 17.1+):

```sql
SELECT
  payload:user AS username,
  payload:action AS action,
  payload:items AS items_array
FROM events;
```

The colon syntax provides clean field access without function calls.

**Function-based access:**

```sql
SELECT variant_get(payload, '$.user', 'STRING') AS username
FROM events;

SELECT get_json_object(payload, '$.items[0]') AS first_item
FROM events;
```

## JSON Conversion

**From JSON:**

```sql
SELECT from_json('{"key": "value"}', 'STRUCT<key:STRING>') AS parsed;
```

**To JSON:**

```sql
SELECT to_json(variant_column) AS json_string
FROM table;
```

Runtime 17.1+ correctly applies JSON options (formatting, timezone) with top-level `VARIANT` schemas.

## Size Limits

**Default limit**: 16 MiB per value
**Extended limit** (Runtime 17.1+): 128 MiB per value

Use VARIANT for large JSON documents that exceed typical string limits.

## Path Handling

**Leading whitespace in paths** (Runtime 16.4 LTS fix):

```sql
-- Previously ignored keys with leading spaces
SELECT payload:' key_with_space' AS value
FROM events;
```

Functions now correctly recognize leading whitespace in JSON paths.

## Type Extraction

```sql
-- Extract as specific type
SELECT
  payload:user::STRING AS user_string,
  payload:count::BIGINT AS count_number,
  payload:active::BOOLEAN AS active_flag
FROM events;
```

Use `::TYPE` casting to extract and convert VARIANT fields to concrete types.

## Filtering on VARIANT Fields

```sql
SELECT * FROM events
WHERE payload:action = 'login';

SELECT * FROM events
WHERE payload:count > 100;
```

Predicates on VARIANT fields enable filtering without materializing the entire structure.

## Nested Structures

```sql
SELECT
  payload:user:name AS user_name,
  payload:metadata:timestamp AS event_time,
  payload:items[0]:id AS first_item_id
FROM events;
```

Navigate nested objects and arrays using chained colon notation.

## Use Cases

**Variable event schemas:** Log systems where event structure varies by type

```sql
CREATE TABLE application_logs (
  timestamp TIMESTAMP,
  event_type STRING,
  details VARIANT  -- Different structure per event_type
);
```

**API responses:** Store full API payloads with evolving schemas

```sql
CREATE TABLE api_cache (
  endpoint STRING,
  response VARIANT,
  cached_at TIMESTAMP
);
```

**Configuration data:** JSON configuration blobs with flexible keys

```sql
CREATE TABLE service_configs (
  service_name STRING,
  config VARIANT
);
```

## Performance Considerations

VARIANT fields enable flexibility but may be slower than concrete types for highly structured data. Use concrete types when schema is stable; use VARIANT when schema varies or evolves frequently.
````

### `uc-tags.md`

Webpack chunk `38259.<hash>.chunk.js`, module `138259`.

````markdown
# Unity Catalog Tags

Attach key-value tags to Unity Catalog objects for governance, discovery, and classification. Available on all Databricks runtimes with Unity Catalog enabled.

## Overview

Tags are key-value string pairs that you attach to catalogs, schemas, tables, and columns. They enable consistent metadata classification across your lakehouse — marking PII columns, labeling data quality tiers, tracking data ownership, and enforcing governance policies.

Tags are stored in Unity Catalog metastore and queryable through `system.information_schema` views.

## Governed Tags vs Free-Form Tags

Databricks supports two kinds of tags:

- **Free-form tags**: Any user with `APPLY TAG` permission can set arbitrary key-value pairs on objects. No restrictions on keys or values.
- **Governed tags**: Account-level tags with enforced rules. They restrict which values are allowed and which users can assign them. Governed tags can be created through the Catalog Explorer UI, the Python SDK, or the CLI — there is no SQL DDL for creating governed tags.

### Creating Governed Tags

**CRITICAL**: It is NOT possible to create governed tags via SQL. When the user asks about creating governed tags, first show the **UI workflow** below. Mention that the Python SDK and CLI are also available if they prefer a programmatic approach — only provide SDK code if the user explicitly asks for it.

**UI workflow** — in Catalog Explorer:

1. Open **Catalog** in the left navigation.
2. Click the **Govern** button (top-right area of Catalog Explorer).
3. On the Govern page, find the **Governed Tags** card and click **View All**.
4. Click **Create Governed Tag** (top-right) to define a new governed tag key and optional allowed values.

Governed tags are account-level tags. Required permissions:

- **To create a governed tag**: account admin privileges or the `MANAGE` privilege on the account.
- **To assign a governed tag to an object**: the `ASSIGN` permission on the governed tag **plus** `APPLY TAG` on the target object.

### Creating Governed Tags via Python SDK

Only provide the following SDK code when the user explicitly asks for a programmatic or SDK approach.

```python
from databricks.sdk import WorkspaceClient
from databricks.sdk.service.tags import TagPolicy, Value

w = WorkspaceClient()

tag = w.tag_policies.create_tag_policy(
    tag_policy=TagPolicy(
        tag_key='my_tag_key',
        description='Description of the tag',
        values=[
            Value(name='value1'),
            Value(name='value2'),
            Value(name='value3')
        ]
    )
)
print(f"Created: {tag.tag_key} (ID: {tag.id})")
```

### Other Governed Tag Operations (Python SDK)

```python
# List all governed tags
for policy in w.tag_policies.list_tag_policies():
    values = [v.name for v in policy.values] if policy.values else []
    print(f"{policy.tag_key}: {values}")

# Get a specific governed tag
tag = w.tag_policies.get_tag_policy(tag_key='my_tag_key')

# Update a governed tag
updated = w.tag_policies.update_tag_policy(
    tag_policy=TagPolicy(
        tag_key='my_tag_key',
        description='Updated description',
        values=[Value(name='value1'), Value(name='new_value')]
    )
)

# Delete a governed tag (existing assignments become ungoverned)
w.tag_policies.delete_tag_policy(tag_key='my_tag_key')
```

## Setting Tags on Tables

Use `SET TAG ON TABLE` to attach key-value tags. Each `SET TAG` statement sets **one tag** — issue multiple statements for multiple tags.

**Add tags to a table**:

```sql
SET TAG ON TABLE catalog.schema.customers team = `data-engineering`;
SET TAG ON TABLE catalog.schema.customers domain = `customer-360`;

-- Legacy syntax (pre-DBR 16.1) — supports multiple tags per statement:
ALTER TABLE catalog.schema.customers
SET TAGS ('team' = 'data-engineering', 'domain' = 'customer-360');
```

**Add multiple tags at once**:

```sql
SET TAG ON TABLE catalog.schema.transactions classification = confidential;
SET TAG ON TABLE catalog.schema.transactions retention_days = `365`;
SET TAG ON TABLE catalog.schema.transactions owner = `finance-team`;
SET TAG ON TABLE catalog.schema.transactions sla_tier = gold;
```

**Update an existing tag** — setting a tag with an existing key overwrites its value:

```sql
SET TAG ON TABLE catalog.schema.transactions sla_tier = platinum;
```

Tag keys and values are identifiers — use backticks for values containing special characters (hyphens, spaces, digits). Keep keys consistent across your organization for queryability.

## Setting Tags on Columns

Tag individual columns to classify sensitive or regulated fields.

**Tag a single column**:

```sql
SET TAG ON COLUMN catalog.schema.customers.email pii = true;
SET TAG ON COLUMN catalog.schema.customers.email pii_type = email;

-- Legacy syntax (pre-DBR 16.1) — supports multiple tags per statement:
ALTER TABLE catalog.schema.customers
ALTER COLUMN email SET TAGS ('pii' = 'true', 'pii_type' = 'email');
```

**Tag multiple columns on the same table**:

```sql
SET TAG ON COLUMN catalog.schema.customers.phone pii = true;
SET TAG ON COLUMN catalog.schema.customers.phone pii_type = phone;
SET TAG ON COLUMN catalog.schema.customers.ssn pii = true;
SET TAG ON COLUMN catalog.schema.customers.ssn pii_type = ssn;
SET TAG ON COLUMN catalog.schema.customers.ssn sensitivity = high;
```

**Tag columns for data quality metadata**:

```sql
SET TAG ON COLUMN catalog.schema.events.event_timestamp data_quality = validated;
SET TAG ON COLUMN catalog.schema.events.event_timestamp source = kafka;
SET TAG ON COLUMN catalog.schema.events.user_id join_key = true;
```

Column tags are especially useful for automated PII scanning and governance dashboards.

## Setting Tags on Schemas and Catalogs

Tags propagate governance metadata at higher levels of the namespace hierarchy.

**Tag a schema**:

```sql
SET TAG ON SCHEMA catalog.schema environment = production;
SET TAG ON SCHEMA catalog.schema team = analytics;

-- Legacy syntax (pre-DBR 16.1) — supports multiple tags per statement:
ALTER SCHEMA catalog.schema
SET TAGS ('environment' = 'production', 'team' = 'analytics');
```

**Tag a catalog**:

```sql
SET TAG ON CATALOG catalog business_unit = retail;
SET TAG ON CATALOG catalog region = `us-east`;

-- Legacy syntax (pre-DBR 16.1) — supports multiple tags per statement:
ALTER CATALOG catalog
SET TAGS ('business_unit' = 'retail', 'region' = 'us-east');
```

Schema and catalog tags do not automatically inherit down to child objects. Apply tags at each level where they are needed.

## Unsetting Tags

Remove specific tags by key. The object and other tags remain unaffected.

**Remove tags from a table**:

```sql
UNSET TAG ON TABLE catalog.schema.customers team;
UNSET TAG ON TABLE catalog.schema.customers domain;

-- Legacy syntax (pre-DBR 16.1) — supports multiple tags per statement:
ALTER TABLE catalog.schema.customers
UNSET TAGS ('team', 'domain');
```

**Remove tags from a column**:

```sql
UNSET TAG ON COLUMN catalog.schema.customers.email pii_type;

-- Legacy syntax (pre-DBR 16.1):
ALTER TABLE catalog.schema.customers
ALTER COLUMN email UNSET TAGS ('pii_type');
```

**Remove tags from a schema**:

```sql
UNSET TAG ON SCHEMA catalog.schema environment;

-- Legacy syntax (pre-DBR 16.1):
ALTER SCHEMA catalog.schema
UNSET TAGS ('environment');
```

**Remove tags from a catalog**:

```sql
UNSET TAG ON CATALOG catalog business_unit;

-- Legacy syntax (pre-DBR 16.1):
ALTER CATALOG catalog
UNSET TAGS ('business_unit');
```

Unsetting a tag that does not exist raises an exception. Verify the tag exists before removing it.

## Querying Tags

Unity Catalog exposes tags through `system.information_schema` views for programmatic governance.

**Query all table tags in a catalog**:

```sql
SELECT
  catalog_name,
  schema_name,
  table_name,
  tag_name,
  tag_value
FROM system.information_schema.table_tags
WHERE catalog_name = 'catalog'
ORDER BY schema_name, table_name, tag_name;
```

**Query column tags**:

```sql
SELECT
  catalog_name,
  schema_name,
  table_name,
  column_name,
  tag_name,
  tag_value
FROM system.information_schema.column_tags
WHERE catalog_name = 'catalog'
  AND tag_name = 'pii'
ORDER BY schema_name, table_name, column_name;
```

**Find all PII-tagged columns across catalogs**:

```sql
SELECT
  catalog_name,
  schema_name,
  table_name,
  column_name,
  tag_value AS pii_type
FROM system.information_schema.column_tags
WHERE tag_name = 'pii'
  AND tag_value = 'true'
ORDER BY catalog_name, schema_name, table_name;
```

**Find tables by tag value**:

```sql
SELECT
  catalog_name,
  schema_name,
  table_name,
  tag_value AS sla
FROM system.information_schema.table_tags
WHERE tag_name = 'sla_tier'
  AND tag_value IN ('gold', 'platinum')
ORDER BY tag_value, table_name;
```

**Schema-level tags**:

```sql
SELECT
  catalog_name,
  schema_name,
  tag_name,
  tag_value
FROM system.information_schema.schema_tags
WHERE catalog_name = 'catalog';
```

**Catalog-level tags**:

```sql
SELECT
  catalog_name,
  tag_name,
  tag_value
FROM system.information_schema.catalog_tags;
```

## Governance Patterns

Common tagging strategies for enterprise data governance.

**PII classification** — tag columns by sensitivity tier:

```sql
-- High sensitivity: direct identifiers
SET TAG ON COLUMN catalog.schema.customers.ssn pii = true;
SET TAG ON COLUMN catalog.schema.customers.ssn sensitivity = high;
SET TAG ON COLUMN catalog.schema.customers.ssn pii_type = ssn;

SET TAG ON COLUMN catalog.schema.customers.email pii = true;
SET TAG ON COLUMN catalog.schema.customers.email sensitivity = medium;
SET TAG ON COLUMN catalog.schema.customers.email pii_type = email;

-- Low sensitivity: quasi-identifiers
SET TAG ON COLUMN catalog.schema.customers.zip_code pii = true;
SET TAG ON COLUMN catalog.schema.customers.zip_code sensitivity = low;
SET TAG ON COLUMN catalog.schema.customers.zip_code pii_type = `quasi-identifier`;
```

**Data quality tiers** — label tables by validation level:

```sql
SET TAG ON TABLE catalog.schema.raw_events quality_tier = bronze;
SET TAG ON TABLE catalog.schema.raw_events validation = none;

SET TAG ON TABLE catalog.schema.cleaned_events quality_tier = silver;
SET TAG ON TABLE catalog.schema.cleaned_events validation = schema_enforced;

SET TAG ON TABLE catalog.schema.curated_events quality_tier = gold;
SET TAG ON TABLE catalog.schema.curated_events validation = fully_validated;
```

**Regulatory compliance** — track data subject to retention or privacy rules:

```sql
SET TAG ON TABLE catalog.schema.eu_customers regulation = GDPR;
SET TAG ON TABLE catalog.schema.eu_customers data_subject = customer;
SET TAG ON TABLE catalog.schema.eu_customers retention_policy = `36_months`;
SET TAG ON TABLE catalog.schema.eu_customers deletion_eligible = true;
```

**Audit query** — find all tables under a specific regulation:

```sql
SELECT
  catalog_name,
  schema_name,
  table_name,
  tag_value AS regulation
FROM system.information_schema.table_tags
WHERE tag_name = 'regulation'
  AND tag_value = 'GDPR'
ORDER BY catalog_name, schema_name, table_name;
```

**Cross-referencing tags and column masks** — identify PII columns that lack masking policies:

```sql
SELECT
  ct.catalog_name,
  ct.schema_name,
  ct.table_name,
  ct.column_name,
  ct.tag_value AS pii_type
FROM system.information_schema.column_tags ct
LEFT JOIN system.information_schema.column_masks cm
  ON ct.catalog_name = cm.table_catalog
  AND ct.schema_name = cm.table_schema
  AND ct.table_name = cm.table_name
  AND ct.column_name = cm.column_name
WHERE ct.tag_name = 'pii'
  AND ct.tag_value = 'true'
  AND cm.column_name IS NULL
ORDER BY ct.catalog_name, ct.schema_name, ct.table_name;
```

Use consistent tag keys across your organization. Document the allowed keys and values in a shared governance policy so teams can discover and filter assets reliably.
````

### `uc-comments.md`

Webpack chunk `87356.<hash>.chunk.js`, module `687356`.

````markdown
# Unity Catalog Comments

Attach free-text descriptions to Unity Catalog objects for documentation and discoverability. Available on all Databricks runtimes with Unity Catalog enabled.

## Overview

Comments provide human-readable descriptions for catalogs, schemas, tables, views, volumes, and columns. They appear in the Catalog Explorer UI and in `information_schema` views, making it easy for analysts and engineers to understand data assets without reading source code or external documentation.

Comments are stored in Unity Catalog metastore alongside object metadata.

## Comment on a Table

```sql
COMMENT ON TABLE catalog.schema.customers IS
  'Master customer table. Source: CRM sync. Refreshed daily at 02:00 UTC.';
```

## Comment on a Column

```sql
COMMENT ON COLUMN catalog.schema.customers.email IS
  'Primary contact email. May contain PII.';
```

Alternative syntax using `ALTER TABLE`:

```sql
ALTER TABLE catalog.schema.customers
ALTER COLUMN email COMMENT 'Primary contact email. May contain PII.';
```

## Comment on a Schema

```sql
COMMENT ON SCHEMA catalog.schema IS
  'Production analytics schema owned by the data engineering team.';
```

## Comment on a Catalog

```sql
COMMENT ON CATALOG catalog IS
  'Retail business unit catalog for US-East region.';
```

## Remove a Comment

Set the comment to `NULL` to remove it:

```sql
COMMENT ON TABLE catalog.schema.customers IS NULL;
```

## Comment on a View

Use `COMMENT ON TABLE` — the `TABLE` keyword works for tables, views, streaming tables, and materialized views. There is no `COMMENT ON VIEW` syntax.

```sql
COMMENT ON TABLE catalog.schema.active_customers IS
  'Filtered view of customers with activity in the last 90 days.';
```

## Comment on a Volume

```sql
COMMENT ON VOLUME catalog.schema.raw_files IS
  'Landing zone for raw CSV/JSON files from partner SFTP feeds.';
```

## Best Practices

- Include **data source**, **refresh cadence**, and **ownership** in table comments.
- For columns, note **business meaning**, **units**, and **PII status** when applicable.
- Keep comments concise — one to two sentences. Use tags for structured metadata.
- Update comments when table semantics change; stale comments erode trust.

Comments support any UTF-8 string content.
````

### `abac-policies.md`

Webpack chunk `38553.<hash>.chunk.js`, module `438553`.

````markdown
# ABAC Policies in Databricks SQL

Attribute-Based Access Control (ABAC) enables centralized, tag-driven row filtering and column masking across Unity Catalog. Define policies once on catalogs, schemas, or tables; Unity Catalog dynamically enforces them at query time based on governed tags. Public Preview — requires Databricks Runtime 16.4+ or serverless compute.

> **CRITICAL AGENT INSTRUCTIONS**:
>
> - **ALWAYS use governed tags** (not free-form tags) when writing ABAC policies. Governed tags enforce consistency rules at the account level.
> - **NEVER recommend ABAC on views** — ABAC policies cannot be applied to views. Use tables or materialized views instead.
> - Use the policy's `TO` / `EXCEPT` clauses for principal-based access control, not logic inside UDFs.
> - When the user already has manual row filters or column masks (`ALTER TABLE ... SET ROW FILTER`), explain the difference: manual filters apply to one table; ABAC policies apply dynamically to any table matching the tag condition.

## Core Concepts

ABAC has five components:

1. **Governed tags** — account-level tags with enforced allowed values. Applied to catalogs, schemas, tables, and columns.
2. **Policies** — created at catalog, schema, or table level. Policies **inherit** to child objects automatically (a catalog policy applies to all schemas and tables within it).
3. **UDFs** — SQL or Python functions that implement the filter/mask logic. Referenced by policies.
4. **Dynamic enforcement** — Unity Catalog evaluates applicable policies based on tags at query time. Only one row filter and one column mask can resolve per table/column per user.
5. **Audit logging** — all operations on tagged assets are logged for compliance.

**Policy types:**

| Type        | Purpose                            | UDF contract                                   |
| ----------- | ---------------------------------- | ---------------------------------------------- |
| Row filter  | Restrict which rows a user can see | Must return `BOOLEAN` — `true` keeps the row   |
| Column mask | Redact or transform column values  | Must return the same type as the masked column |

## Compute Requirements

| Compute type       | Minimum version                                                   |
| ------------------ | ----------------------------------------------------------------- |
| Serverless compute | Fully supported                                                   |
| Standard compute   | Databricks Runtime 16.4+                                          |
| Dedicated compute  | Databricks Runtime 16.4+ with fine-grained access control enabled |

Older runtimes **cannot** access tables protected by ABAC policies.

## Prerequisites: Governed Tags

ABAC policies reference **governed tags** in `WHEN` and `MATCH COLUMNS` clauses. Tags must exist on the target objects before policies can match them. See [`uc-tags.md`](uc-tags.md) for full syntax on creating, applying, querying, and managing tags.

Key points for ABAC:

- Tags applied at catalog or schema level **implicitly inherit** to child objects during ABAC policy evaluation.
- Deleting a governed tag referenced by an ABAC policy causes **all queries** within that policy's scope to fail with `INVALID_PARAMETER_VALUE.UC_ABAC_UNKNOWN_TAG_POLICY`. Restore the tag or update/delete the referencing policy.

## Row Filter Policies

Row filter policies restrict which rows users can see based on governed tags.

### CREATE POLICY — Row Filter

```sql
CREATE [ OR REPLACE ] POLICY policy_name
ON { CATALOG catalog_name | SCHEMA schema_name | TABLE table_name }
[ COMMENT description ]
ROW FILTER function_name
TO principal [, ...]
[ EXCEPT principal [, ...] ]
FOR TABLES
[ WHEN condition ]
[ MATCH COLUMNS condition [ [ AS ] alias ] [, ...] ]
[ USING COLUMNS ( function_arg [, ...] ) ]
```

**Parameters:**

| Parameter                          | Description                                                                                               |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `policy_name`                      | Unique name scoped to the securable. Duplicates raise `POLICY_ALREADY_EXISTS` unless `OR REPLACE` is used |
| `ON CATALOG/SCHEMA/TABLE`          | The level at which the policy is defined. Catalog/schema policies inherit to child tables                 |
| `function_name`                    | Fully-qualified name of the row filter UDF                                                                |
| `TO principal`                     | Users, groups, or service principals the policy applies to. Multiple allowed, comma-separated             |
| `EXCEPT principal`                 | Principals exempted from the policy                                                                       |
| `WHEN condition`                   | Boolean condition using tag functions — policy only applies to tables matching this condition             |
| `MATCH COLUMNS condition AS alias` | Identifies columns by tag; the alias is passed to `USING COLUMNS`. Max 3 column conditions                |
| `USING COLUMNS (args)`             | Arguments passed to the UDF — constants or aliases from `MATCH COLUMNS`                                   |

**Example — hide EU customers from high-sensitivity tables**:

```sql
CREATE POLICY hide_eu_customers
ON SCHEMA prod.customers
COMMENT 'Hide European customer rows from analysts on sensitive tables'
ROW FILTER prod.customers.is_not_eu_address
TO analysts
FOR TABLES
WHEN has_tag_value('sensitivity', 'high')
MATCH COLUMNS has_tag('geo_region') AS region
USING COLUMNS (region);
```

**Example — simple row filter on a single table**:

```sql
CREATE POLICY us_only_filter
ON TABLE catalog.schema.orders
ROW FILTER catalog.schema.is_us_region
TO `All Users` EXCEPT admins
FOR TABLES
MATCH COLUMNS has_tag_value('pii', 'address') AS addr
USING COLUMNS (addr);
```

## Column Mask Policies

Column mask policies control what values users see in specific columns based on governed tags.

### CREATE POLICY — Column Mask

```sql
CREATE [ OR REPLACE ] POLICY policy_name
ON { CATALOG catalog_name | SCHEMA schema_name | TABLE table_name }
[ COMMENT description ]
COLUMN MASK function_name
TO principal [, ...]
[ EXCEPT principal [, ...] ]
FOR TABLES
[ WHEN condition ]
MATCH COLUMNS condition [ [ AS ] alias ] [, ...]
ON COLUMN alias
[ USING COLUMNS ( function_arg [, ...] ) ]
```

The `ON COLUMN alias` clause specifies which matched column to mask. The alias must reference a `MATCH COLUMNS` condition.

**Example — mask SSN across an entire catalog**:

```sql
CREATE POLICY ssn_mask
ON CATALOG employees
COLUMN MASK catalog.schema.mask_ssn
TO `All Users` EXCEPT `HR admins`
FOR TABLES
MATCH COLUMNS has_tag_value('pii', 'ssn') AS ssn
ON COLUMN ssn;
```

**Example — partial SSN reveal with extra argument**:

```sql
CREATE POLICY ssn_last4_mask
ON CATALOG employees
COLUMN MASK catalog.schema.ssn_last_n
TO `All Users` EXCEPT `HR admins`
FOR TABLES
MATCH COLUMNS has_tag_value('pii', 'ssn') AS ssn
ON COLUMN ssn
USING COLUMNS (ssn, 4);
```

**Example — mask salary at the schema level**:

```sql
CREATE POLICY salary_mask
ON SCHEMA finance.compensation
COLUMN MASK finance.compensation.mask_salary
TO `All Users` EXCEPT `Finance admins`
FOR TABLES
MATCH COLUMNS has_tag('compensation') AS salary
ON COLUMN salary;
```

## Condition Functions

Used in `WHEN` and `MATCH COLUMNS` clauses. Snake_case is the standard naming; camelCase is supported for backward compatibility.

| Function                               | Clause               | Description                                       |
| -------------------------------------- | -------------------- | ------------------------------------------------- |
| `has_tag('key')`                       | WHEN / MATCH COLUMNS | Checks if a tag key exists on the table or column |
| `has_tag_value('key', 'value')`        | WHEN / MATCH COLUMNS | Checks for a specific tag key-value pair          |
| `has_column_tag('key')`                | MATCH COLUMNS        | Column-level tag key existence check              |
| `has_column_tag_value('key', 'value')` | MATCH COLUMNS        | Column-level tag key-value check                  |

**In WHEN clause** — table-level conditions:

```sql
-- Policy applies only to tables tagged as high sensitivity
WHEN has_tag_value('sensitivity', 'high')

-- Policy applies to any table that has a sensitivity tag (any value)
WHEN has_tag('sensitivity')

-- Combine conditions
WHEN has_tag_value('sensitivity', 'high') OR has_tag_value('regulation', 'GDPR')
```

**In MATCH COLUMNS** — column-level conditions:

```sql
-- Match any column tagged with key 'pii'
MATCH COLUMNS has_tag('pii') AS pii_col

-- Match columns with specific tag value
MATCH COLUMNS has_tag_value('pii', 'ssn') AS ssn

-- Multiple column conditions (max 3)
MATCH COLUMNS
  has_tag_value('pii', 'ssn') AS ssn,
  has_tag_value('pii', 'email') AS email
```

## Managing Policies

### DROP POLICY

Requires `MANAGE` privilege on the securable.

```sql
DROP POLICY ssn_mask ON CATALOG employees;
DROP POLICY hide_eu_customers ON SCHEMA prod.customers;
DROP POLICY us_only_filter ON TABLE catalog.schema.orders;
```

Raises `POLICY_NOT_FOUND` if the policy does not exist.

### SHOW POLICIES

```sql
-- Show policies directly associated with a securable
SHOW POLICIES ON SCHEMA catalog.schema;

-- Show direct + inherited policies from parent resources
SHOW EFFECTIVE POLICIES ON TABLE catalog.schema.orders;
```

Result columns: Policy Name, Policy Type, Catalog, Schema, Table, Comment.

### DESCRIBE POLICY

```sql
DESCRIBE POLICY ssn_mask ON CATALOG employees;
```

Output fields: Name, On Securable Type, On Securable, To Principals, For Securable Type, Match Columns, Policy Type, Function Name, Using Columns, Created By, Created At, Updated By, Updated At.

## Policy Quotas

| Object Level                        | Limit                                    |
| ----------------------------------- | ---------------------------------------- |
| Catalog                             | 10 policies per catalog                  |
| Schema                              | 10 policies per schema                   |
| Table                               | 5 policies per table                     |
| Principals per policy               | 20 (both TO and EXCEPT clauses combined) |
| Column conditions per MATCH COLUMNS | 3                                        |

## End-to-End Examples

### Example 1: Protect PII across an entire catalog

Assumes governed tag `pii` with values `ssn` and `email` is already applied to the relevant columns (see [`uc-tags.md`](uc-tags.md)), and mask UDFs `hr.governance.mask_ssn` and `hr.governance.mask_email` already exist.

```sql
-- Catalog-level policy for SSN masking
CREATE POLICY ssn_redaction
ON CATALOG hr
COMMENT 'Mask SSN columns across all HR tables'
COLUMN MASK hr.governance.mask_ssn
TO `All Users` EXCEPT `HR admins`
FOR TABLES
MATCH COLUMNS has_tag_value('pii', 'ssn') AS ssn
ON COLUMN ssn;

-- Catalog-level policy for email masking
CREATE POLICY email_redaction
ON CATALOG hr
COMMENT 'Mask email columns across all HR tables'
COLUMN MASK hr.governance.mask_email
TO `All Users` EXCEPT `HR admins`
FOR TABLES
MATCH COLUMNS has_tag_value('pii', 'email') AS email
ON COLUMN email;

-- Verify
SHOW EFFECTIVE POLICIES ON TABLE hr.employees.profiles;
DESCRIBE POLICY ssn_redaction ON CATALOG hr;
```

### Example 2: Regional data isolation with row filtering

Assumes governed tags `sensitivity` (on the table) and `geo_region` (on the column) are already applied (see [`uc-tags.md`](uc-tags.md)), and row filter UDF `global.governance.filter_non_eu` already exists.

```sql
-- Schema-level row filter policy
CREATE POLICY hide_eu_data
ON SCHEMA global.sales
COMMENT 'Hide EU customer data from non-EU analysts on sensitive tables'
ROW FILTER global.governance.filter_non_eu
TO `US analysts`, `APAC analysts`
FOR TABLES
WHEN has_tag_value('sensitivity', 'high')
MATCH COLUMNS has_tag('geo_region') AS region
USING COLUMNS (region);

-- Verify
SHOW EFFECTIVE POLICIES ON TABLE global.sales.transactions;
```

### Example 3: Combined row filter + column mask

Assumes governed tags `department_scoped`, `department`, and `compensation` are already applied (see [`uc-tags.md`](uc-tags.md)), and UDFs `catalog.gov.dept_filter` and `catalog.gov.mask_salary` already exist.

```sql
-- Row filter: only show records for the user's department
CREATE POLICY dept_isolation
ON SCHEMA catalog.internal
ROW FILTER catalog.gov.dept_filter
TO `All Users` EXCEPT `HR admins`
FOR TABLES
WHEN has_tag('department_scoped')
MATCH COLUMNS has_tag('department') AS dept
USING COLUMNS (dept);

-- Column mask: redact salary for non-finance users
CREATE POLICY salary_redaction
ON SCHEMA catalog.internal
COLUMN MASK catalog.gov.mask_salary
TO `All Users` EXCEPT `Finance admins`
FOR TABLES
MATCH COLUMNS has_tag('compensation') AS salary
ON COLUMN salary;
```

## Limitations

**General:**

- Only one row filter policy can resolve per table per user at runtime
- Only one column mask policy can resolve per column per user at runtime
- ABAC policies **cannot** be applied to views
- View queries use the view owner's identity for policy evaluation
- Materialized views and streaming tables only supported when the pipeline owner is exempt from the policy
- No `information_schema` tables for ABAC policies (use `SHOW POLICIES` / `DESCRIBE POLICY` instead)
- Tables with ABAC policies cannot be used to create vector search indexes

**Compute:**

- Databricks Runtime < 16.4 cannot access ABAC-protected tables
- Dedicated compute write operations require Databricks Runtime 16.3+

**Operations restricted for non-exempt users:**

- Time travel not supported
- Deep and shallow clones not supported
- Delta Lake APIs not supported
- Path-based file access not permitted
- `MERGE` statements incompatible with policies containing nesting, aggregations, windows, limits, or non-deterministic functions

**Delta Sharing:**

- Tables may be shared only if the user has permissions **and** is exempt from ABAC policies
- The policy does **not** govern recipient access — recipients have full access to the shared data

**Deleted tags impact:**

- Deleting a governed tag referenced by an ABAC policy causes all queries within that policy's scope to fail with `INVALID_PARAMETER_VALUE.UC_ABAC_UNKNOWN_TAG_POLICY`
- Resolution: restore the tag or update/delete the referencing policies
````
