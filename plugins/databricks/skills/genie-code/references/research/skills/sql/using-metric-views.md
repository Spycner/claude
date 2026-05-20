# Genie Code skill: `using-metric-views`

Full content of the Genie Code skill `using-metric-views`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). Genie Code loads these markdown files lazily via the `readSkillFile` tool when its description matches the task at hand. See [findings.md](../../overview/findings.md) and [payload.md](../../overview/payload.md) for the request envelope and tool schema, and [system-prompt.md](../../overview/system-prompt.md) for the system prompt that drives skill selection.

## Registry record

From the Genie Code SkillRegistry definition in the SPA's `19604.5ae31ee5cc.chunk.js` chunk (module `610323`):

```jsonc
{
  "name":        "using-metric-views",
  "description": "Create and query Unity Catalog metric views for centralized business metrics. Use when defining reusable KPIs, querying metric views with MEASURE() syntax, or standardizing aggregate calculations across dashboards.",
  "files":       [ /* 3 entries — see below */ ]
}
```

## File manifest

Each file lives in its own webpack chunk and is exposed as a raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release — re-derive them from `index.968bbeb5f6.js` before re-extracting. The path Genie Code uses with `readSkillFile` is `skills/using-metric-views/<filename>`.

| File | Chunk id | Module id | Gate |
|---|---|---|---|
| `SKILL.md` | `97811` | `297811` | — |
| `querying.md` | `86922` | `686922` | — |
| `materialization.md` | `12557` | `712557` | — |

## Files

### `SKILL.md`

Webpack chunk `97811.<hash>.chunk.js`, module `297811`.

````markdown
---
name: using-metric-views
description: Create and query Unity Catalog metric views for centralized business metrics. Use when defining reusable KPIs, querying metric views with MEASURE() syntax, or standardizing aggregate calculations across dashboards. Metric views are the standard way to do semantic modeling or produce a semantic layer in Databricks.
---

# Using Metric Views

Metric views are Unity Catalog objects that centralize business metric definitions. Unlike standard views that lock in aggregations at creation time, metric views separate measure definitions from dimension groupings, enabling flexible analysis at query time.

## When to Use

- User wants to define reusable business KPIs (revenue, order counts, conversion rates)
- User needs consistent metric definitions across downstream assets such as dashboards, genie spaces, and notebooks
- User is working with aggregate calculations that should be standardized
- User mentions "metric view", "measures", or wants to create metrics on existing tables
- User asks about semantic layer, semantic models, or centralized metric definitions

## Querying Metric Views

IMPORTANT: Metric views have strict query syntax rules. Before writing any SQL query against a metric view, read **[querying.md](querying.md)**.

## Creating Metric Views

Use SQL DDL with YAML definition:

```sql
CREATE OR REPLACE VIEW catalog.schema.my_metrics
WITH METRICS
LANGUAGE YAML
AS $$
  version: 1.1
  source: >
    SELECT order_id, customer_id, order_date, amount FROM catalog.schema.orders
  filter: order_date > '2020-01-01'
  comment: Order metrics for revenue analysis
  joins:
    - name: customers
      source: catalog.schema.dim_customers
      on: source.customer_id = customers.id
  dimensions:
    - name: Order Month
      expr: DATE_TRUNC('MONTH', order_date)
      display_name: Order Month
      comment: Month when order was placed
      synonyms:
        - month
        - order time
    - name: Order Status
      expr: CASE WHEN status = 'O' THEN 'Open' ELSE 'Closed' END
    - name: Customer Segment
      expr: customers.segment
  measures:
    - name: Order Count
      expr: COUNT(1)
    - name: Total Revenue
      expr: SUM(total_price)
      display_name: Total Revenue
      comment: Sum of all order prices
      format:
        type: currency
        currency_code: USD
        decimal_places:
          type: exact
          places: 2
      synonyms:
        - revenue
        - sales
    - name: Avg Revenue per Customer
      expr: SUM(total_price) / COUNT(DISTINCT customer_id)
$$
```

## Modifying metric views

ALTER VIEW is generally preferred because it maintains assigned UC permissions (among other related metadata). CREATE OR REPLACE deletes the metric view and thus also deletes cascading metadata. (For some scenarios, CREATE OR REPLACE is appropriate, e.g. if you have a CI/CD system that resets the permissions on each deploy.)

### YAML Fields

**Required fields:**

- `version`: Use `1.1` for full feature support
- `source`: The underlying table, view, or SQL query (see main example above for SQL-as-source)
- `dimensions`: Array of categorical attributes for grouping. `fields:` is an interchangeable alias (DBR 18.1+) — when editing user's YAML, preserve whichever key they used.
- `measures`: Array of aggregate calculations

**Optional fields:**

- `filter`: Base filter applied to all queries (SQL boolean expression)
- `comment`: Description of the metric view
- `joins`: Star or snowflake schema joins to dimension tables
- `materialization`: Pre-compute results for faster queries (schedule, mode, materialized views)

**Dimension/measure fields:**

- `name`, `expr`: Required identifier and SQL expression
- `comment`: Description of the column
- `display_name`: Human-readable label for dashboards
- `format`: Display formatting (`type: currency|number|date|percentage|byte` with options)
- `synonyms`: Alternative names for AI/LLM discovery (up to 10)
- `window`: Window measure config (`order`, `range`: current/cumulative/trailing/leading/all, `semiadditive`: first/last)

## Window measures

Window measures enable windowed, cumulative, or semiadditive aggregations. Add a `window` field to a measure with:

- **order**: Dimension that orders the window
- **range**: Window extent (`current`, `cumulative`, `trailing <n> <unit>`, `leading <n> <unit>`, `all`)
- **semiadditive**: How to summarize when order field isn't in GROUP BY (`first` or `last`)

```yaml
measures:
  # Trailing 7-day distinct customer count
  - name: t7d_customers
    expr: COUNT(DISTINCT o_custkey)
    window:
      - order: date
        range: trailing 7 day
        semiadditive: last

  # Running total (cumulative)
  - name: running_total_sales
    expr: SUM(o_totalprice)
    window:
      - order: date
        range: cumulative
        semiadditive: last

  # Year-to-date (multiple windows)
  - name: ytd_sales
    expr: SUM(o_totalprice)
    window:
      - order: date
        range: cumulative
        semiadditive: last
      - order: year
        range: current
        semiadditive: last

  # Day-over-day growth (current period + previous period + pct change)
  - name: daily_sales
    expr: SUM(o_totalprice)
    window:
      - order: order_date
        range: current
        semiadditive: last
  - name: prev_day_sales
    expr: SUM(o_totalprice)
    window:
      - order: order_date
        range: trailing 1 day
        semiadditive: last
  - name: daily_sales_pct_change
    expr: (MEASURE(daily_sales) - MEASURE(prev_day_sales)) / MEASURE(prev_day_sales) * 100

  # Week-over-week — "week" is NOT a valid period unit; use trailing 7 day.
  # For week/month granularity the order field must reference a DATE_TRUNC'd
  # dimension (e.g. DATE_TRUNC('WEEK', o_orderdate)), not a raw date column.
  - name: weekly_sales
    expr: SUM(o_totalprice)
    window:
      - order: order_week # dimension: DATE_TRUNC('WEEK', o_orderdate)
        range: current
        semiadditive: last
  - name: prev_week_sales
    expr: SUM(o_totalprice)
    window:
      - order: order_week
        range: trailing 7 day
        semiadditive: last
  - name: wow_pct_change
    expr: (MEASURE(weekly_sales) - MEASURE(prev_week_sales)) / MEASURE(prev_week_sales) * 100
  # Month-over-month: same pattern with order: order_month, range: trailing 1 month
```

For period-over-period growth (day-over-day, week-over-week, etc.), both the current and previous period MUST be window measures. The percentage change measure MUST NOT be a window measure -- it references them via MEASURE().

**Trailing window measures:**

```yaml
measures:
  - name: active_users
    expr: COUNT(DISTINCT CASE WHEN numMessages > 0 THEN canonicalUserId END)
  - name: t7d_active_users
    expr: MEASURE(active_users)
    window:
      - order: event_date
        semiadditive: last
        range: trailing 7 day
  - name: t28d_active_users
    expr: MEASURE(active_users)
    window:
      - order: event_date
        semiadditive: last
        range: trailing 28 day
```

## Joins

Join dimension tables using `on` or `using` clauses:

```yaml
source: catalog.schema.fact_orders
joins:
  - name: customers
    source: catalog.schema.dim_customers
    on: source.customer_id = customers.id
  - name: products
    source: catalog.schema.dim_products
    using:
      - product_id
```

**Multiple Joins:**

```yaml
source: main.eng_dashboards_ai.dashgenie_daily_source
joins:
  - name: lookup
    source: main.data_usage_log_cuid.lookup
    on: source.pseudo_user_id = lookup.pseudoUserId
  - name: workspaces_latest
    source: main.certified.workspaces_latest
    on: source.workspace_id = workspaces_latest.workspace_id
dimensions:
  - name: canonicalUserId
    expr: lookup.canonicalUserId
  - name: customer
    expr: workspaces_latest.workspace_aggregation_name
```

**Nested Joins (snowflake schema)** -- when a joined table itself needs to join another table, nest the `joins` field inside the parent join:

```yaml
source: catalog.schema.lineitem
joins:
  - name: orders
    source: catalog.schema.orders
    on: source.l_orderkey = orders.o_orderkey
    joins:
      - name: customer
        source: catalog.schema.customer
        on: orders.o_custkey = customer.c_custkey
dimensions:
  - name: market_segment
    expr: orders.customer.c_mktsegment
measures:
  - name: total_discount
    expr: SUM(source.l_discount)
```

Use nested joins when the relationship is transitive (lineitem -> orders -> customer). Use flat sibling joins when tables join directly to the source.

## Composability

Dimensions and measures can reference other dimensions and measures defined earlier. Always reference by name — do NOT duplicate expressions:

- **Dim in dim `expr`**: use the dimension's name directly in the `expr`
- **Dim in measure `FILTER (WHERE ...)`**: use the dimension's name in the filter condition
- **Measure in measure**: use `MEASURE(name)` to compose

When names contain spaces, hyphens, or other special characters, backtick-escape them wherever referenced. Single or double quotes are NOT valid — only backticks work. If a backtick would be the **first** character of an `expr`, double-quote the whole scalar.

```yaml
dimensions:
  - name: Order Month # spaces → backtick when referenced
    expr: month(o_orderdate)
  - name: Is Q1
    expr: CASE WHEN `Order Month` IN (1, 2, 3) THEN true ELSE false END
  - name: Quarter
    expr: '`Order Month` <= 3' # leading backtick → wrap expr in double quotes
measures:
  - name: Total Revenue # spaces → backtick when referenced
    expr: SUM(o_totalprice)
  - name: Order Count
    expr: COUNT(1)
  - name: Avg Order Value
    expr: MEASURE(`Total Revenue`) / MEASURE(`Order Count`)
  - name: January Revenue
    expr: SUM(o_totalprice) FILTER (WHERE `Order Month` = 1)
```

Define atomic dimensions/measures first, then reference them. When upstream definitions change, composed items automatically inherit updates.

## Materialization

Use materialization when the user wants to speed up queries on a metric view, especially when the source is an expensive view/query or joins are costly. Read **[materialization.md](materialization.md)** for configuration, types (unaggregated vs aggregated), and query behavior.

## Common Patterns

**Filtering by measure values** - Use HAVING with the alias:

```sql
SELECT `cloud`, MEASURE(`revenue`) AS `revenue`
FROM catalog.schema.metrics
GROUP BY ALL
HAVING `revenue` > 100000
```

**Top-K queries** - Use ROW_NUMBER() with MEASURE() in ORDER BY:

```sql
WITH ranked AS (
  SELECT
    `employee`,
    MEASURE(`sales`) AS `total_sales`,
    ROW_NUMBER() OVER (ORDER BY MEASURE(`sales`) DESC) AS `rank`
  FROM catalog.schema.metrics
  GROUP BY ALL
)
SELECT `employee`, `total_sales`
FROM ranked
WHERE `rank` <= 3
```

### Query Behavior

Queries automatically use materializations via aggregate-aware rewriting; falls back to source if no match. Verify with EXPLAIN EXTENDED (look for `__materialization_mat___metric_view`).

## YAML Definition Patterns

**Table source with row filters** - Reference the table directly; put row conditions in `filter`, not in source SQL:

```yaml
source: catalog.schema.workspace_metrics
filter: is_real_customer = true AND customer_type = 'External' AND date >= '2024-01-01'
```

Use SQL for `source` when you need to reshape data: derived columns, joins, deduplication, CTEs. For row filtering (predicates on raw source rows that uniformly affect all dimensions and measures), prefer the top-level `filter` field over a WHERE clause in source SQL.

**Filtered measures** - To restrict a single aggregation (not all measures), use a measure-level FILTER clause:

```yaml
- name: Open Order Revenue
  expr: SUM(total_price) FILTER (WHERE status = 'O')
```

**Ratios** - Divide aggregations (no nested aggregations allowed):

```yaml
- name: Avg Order Value
  expr: SUM(total_price) / COUNT(1)
```

**Referencing other measures** - Use MEASURE() in definitions:

```yaml
- name: Revenue Share
  expr: SUM(total_price) / MEASURE(`Total Revenue`)
```

**Multiline expressions** - Use `|-` for multiline CASE statements:

```yaml
dimensions:
  - name: genie_mode
    expr: |-
      CASE
        WHEN genie_mode = 'GENIE_MODE_ENABLED' THEN 'Auto Genie'
        WHEN genie_mode = 'GENIE_MODE_LINK_EXISTING_SPACE' THEN 'Linked'
        WHEN genie_mode = 'GENIE_MODE_DISABLED' THEN 'Without Genie'
        ELSE 'Unknown'
      END

measures:
  - name: active_dashboards
    expr: |-
      COUNT(DISTINCT CASE
        WHEN numMessages > 0 THEN dashboard_id
      END)
```

## Semantic Metadata

> **Note:** Semantic metadata is only available for version 1.1 and greater.

Semantic metadata improves usability in dashboards and AI tools. Available on dimensions and measures:

- `comment`: Description of what this column represents
- `display_name`: Human-readable label (max 255 characters)
- `synonyms`: Array of up to 10 alternative names for AI/LLM discovery
- `format`: Display formatting (see below)

### Format Options

**Format type** must be one of: `date` | `date_time` | `number` | `percentage` | `currency` | `byte`

**Date format:**

```yaml
format:
  type: date
  date_format: locale_short_month # locale_short_month | locale_long_month | year_month_day | locale_number_month | year_week
  leading_zeros: false # optional: Jan 04 vs Jan 4
```

**Date-time format:**

```yaml
format:
  type: date_time
  date_format: locale_short_month # no_date | locale_short_month | locale_long_month | year_month_day | locale_number_month | year_week
  time_format: locale_hour_minute # no_time | locale_hour_minute | locale_hour_minute_second
  leading_zeros: false # optional: 09:05 vs 9:05
  # Note: no_date and no_time cannot be used together
```

**Number format:**

```yaml
format:
  type: number
  decimal_places:
    type: exact # exact | max | all
    places: 2 # required for exact/max
  hide_group_separator: false # optional: 1000 vs 1,000
  abbreviation: compact # optional: none | compact | scientific
```

**Percentage format:**

```yaml
format:
  type: percentage
  decimal_places:
    type: exact # exact | max | all
    places: 2 # required for exact/max
  hide_group_separator: false # optional: 1000 vs 1,000
```

**Byte format:**

```yaml
format:
  type: byte
  decimal_places:
    type: exact # exact | max | all
    places: 2 # required for exact/max
  hide_group_separator: false # optional: 1000 vs 1,000
```

**Currency format:**

```yaml
format:
  type: currency
  currency_code: USD # required
  decimal_places:
    type: exact
    places: 2
  abbreviation: compact # optional: none | compact | scientific
  hide_group_separator: false
```

## Best Practices

- Add `comment` fields describing what each dimension/measure represents
- Use `display_name` for human-readable labels in visualizations
- Apply `format` to monetary values, percentages, date-times, numbers, and byte
- Include `synonyms` for dimensions and measures that might be referenced by different names
````

### `querying.md`

Webpack chunk `86922.<hash>.chunk.js`, module `686922`.

````markdown
## Query Metric Views

Metric views are special table-like assets for business intelligence queries. They differ from regular tables in structure and querying requirements.

| Rule                             | Correct                                 | Wrong                      |
| -------------------------------- | --------------------------------------- | -------------------------- |
| Wrap measures with MEASURE()     | `MEASURE(\`Total Revenue\`)`            | `Total Revenue`            |
| Always use GROUP BY ALL          | `GROUP BY ALL`                          | `GROUP BY 1` or omitting   |
| Never use SELECT \*              | `SELECT \`dim\`, MEASURE(\`m\`)`        | `SELECT *`                 |
| Backtick all names               | `\`Order Month\``                       | `Order Month`              |
| Aggregate before joining         | Use CTE first, then JOIN                | Direct JOIN on metric view |
| No MIN/MAX on measures           | `ORDER BY MEASURE(\`m\`) LIMIT 1`       | `MIN(MEASURE(\`m\`))`      |
| No AVG on measures               | `MEASURE(\`sum\`) / MEASURE(\`count\`)` | `AVG(MEASURE(\`m\`))`      |
| No wrapping MEASURE()            | `MEASURE(\`revenue\`)`                  | `MEASURE(SUM(...))`        |
| Arithmetic post-aggregation only | `MEASURE(\`a\`) / MEASURE(\`b\`)`       | `MEASURE(\`a\` / \`b\`)`   |

### Components

Metric views contain two types of columns:

1. **Dimensions**: Behave like normal columns (e.g., `store_type`, `state`, `order_date`)
   - Can be selected, transformed, filtered, and grouped like regular columns
   - Used in SELECT, WHERE, GROUP BY, and HAVING clauses
   - Support standard operations like COUNT(DISTINCT `customer_id`)

2. **Measures**: Pre-aggregated metrics (e.g., `revenue`, `customer_count`)
   - MUST be wrapped in `MEASURE()` function when queried
   - Cannot be selected without aggregation

### How to Write Metric View Queries

1. **Measure wrapping**: Every measure must use `MEASURE()`

   ```sql
   -- CORRECT
   SELECT MEASURE(`revenue`) AS `revenue`
   -- INCORRECT
   SELECT `revenue`
   ```

2. **Backtick escaping**: All dimensions and measures MUST be escaped with backticks

   ```sql
   MEASURE(`revenue`)
   `Order Date` >= '2024-01-01'
   ```

3. **GROUP BY ALL required**: When selecting measures, include `GROUP BY ALL`

   ```sql
   SELECT `cloud`, MEASURE(`revenue`) AS `revenue`
   FROM catalog.schema.metric_view
   GROUP BY ALL
   ```

4. **No SELECT \***: `SELECT *` is NOT SUPPORTED in metric views. You MUST NOT write `SELECT *` even when asked to "select everything" or "get all columns". Instead, explicitly list each dimension and wrap each measure with `MEASURE()`, then add `GROUP BY ALL`.

5. **Always use MEASURE() for counting**: When a metric view has a `count` measure, always use `MEASURE(`count`)`. Never use `COUNT(*)` or `COUNT(DISTINCT ...)` on a metric view — these give different results than the pre-defined measure.

6. **Prefer pre-defined derived measures**: If the metric view already has a derived measure (e.g., `quantity_per_customer`), ALWAYS use `MEASURE(`quantity_per_customer`)` directly — NEVER compute it manually as `MEASURE(`total quantity`) / MEASURE(`# of customers`)`.

7. **Use all measures when asked for "all totals" or "every measure"**: Include EVERY measure from the schema — count them and verify your SELECT has the same count. This includes **string** measures, not just numeric ones.

### Forbidden Patterns

8. **No nested aggregations**: Cannot wrap measures in other aggregation functions

   ```sql
   -- INCORRECT
   AVG(MEASURE(`revenue`))
   MAX(MEASURE(`revenue`))
   -- CORRECT: Use ORDER BY + LIMIT for min/max
   SELECT `cloud`, MEASURE(`revenue`) AS `revenue`
   FROM catalog.schema.metric_view
   GROUP BY ALL
   ORDER BY `revenue` DESC
   LIMIT 1
   ```

9. **No AVG on measures**: Calculate average by dividing measures

   ```sql
   -- INCORRECT
   AVG(MEASURE(`revenue`))
   -- CORRECT
   MEASURE(`revenue`) / MEASURE(`count`) AS `average_revenue`
   ```

10. **Arithmetic on measures**: Only post-aggregation arithmetic

```sql
-- INCORRECT
MEASURE(`revenue` / `count`)
-- CORRECT
MEASURE(`revenue`) / MEASURE(`count`)
```

11. **No ROUND()**: NEVER apply `ROUND()` to computed values unless the user explicitly asks for rounding. Return full precision by default.

12. **No joins before aggregation**: First aggregate in a CTE, then join

```sql
WITH metrics AS (
  SELECT `customer_id`, MEASURE(`revenue`) AS `revenue`
  FROM catalog.schema.metric_view
  GROUP BY ALL
)
SELECT c.name, m.revenue
FROM metrics m JOIN customers c ON m.customer_id = c.id
```

### Date and Time Rules

13. **Always use `date_trunc()` for date grouping**: Never use `YEAR()`, `MONTH()`, or `DATE_FORMAT()` to group by time periods. Always use `date_trunc('YEAR', ...)` or `date_trunc('MONTH', ...)` to preserve timestamp format. `YEAR()` is fine only in WHERE clauses for filtering.

```sql
-- INCORRECT
YEAR(`order_date`) AS `year`
DATE_FORMAT(`order_date`, 'MMMM') AS `month`
-- CORRECT
date_trunc('YEAR', `order_date`) AS `year`
date_trunc('MONTH', `order_date`) AS `month`
```

14. **Sort time-series ASC by default**: When querying data over time, always use `ORDER BY <date_column> ASC` unless the user explicitly requests newest first.

15. **"Average per row" means divide measures per group**: When asked for "average X per month", compute `MEASURE(total) / MEASURE(count)` per group row — do NOT compute totals in a CTE then AVG() over them.

```sql
-- INCORRECT: computes average-of-monthly-totals
WITH monthly AS (SELECT MEASURE(`price`) AS p FROM ... GROUP BY ALL)
SELECT AVG(p) FROM monthly
-- CORRECT: computes average-per-order per month
SELECT date_trunc('MONTH', `date`) AS `month`,
  MEASURE(`price`) / MEASURE(`count`) AS `avg_price`
FROM ... GROUP BY ALL
```

### Query Examples

**Simple aggregation:**

```sql
SELECT `cloud`, MEASURE(`revenue`) AS `revenue`
FROM catalog.schema.sales_metric_view
GROUP BY ALL
ORDER BY `revenue` DESC
```

**Time-based filtering:**

```sql
SELECT
  date_trunc('MONTH', `Order Date`) AS `month`,
  MEASURE(`customer_count`) AS `customer_count`
FROM catalog.schema.sales_metric_view
WHERE YEAR(`Order Date`) = 2024
GROUP BY ALL
ORDER BY `month` ASC
```

**Getting totals (no dimensions):**

```sql
SELECT MEASURE(`revenue`) AS `total_revenue`
FROM catalog.schema.sales_metric_view
GROUP BY ALL
```

**Percentage calculations:**

```sql
SELECT `region`, MEASURE(`revenue`) AS `revenue`,
  MEASURE(`revenue`) / SUM(MEASURE(`revenue`)) OVER () * 100 AS `pct`
FROM catalog.schema.sales_metric_view
GROUP BY ALL
```

**Filtering by measure values (HAVING):**

```sql
SELECT `cloud`, MEASURE(`revenue`) AS `revenue`
FROM catalog.schema.metrics
GROUP BY ALL
HAVING `revenue` > 100000
```

**Top-K queries:**

```sql
WITH ranked AS (
  SELECT
    `employee`,
    MEASURE(`sales`) AS `total_sales`,
    ROW_NUMBER() OVER (ORDER BY MEASURE(`sales`) DESC) AS `rank`
  FROM catalog.schema.metrics
  GROUP BY ALL
)
SELECT `employee`, `total_sales`
FROM ranked
WHERE `rank` <= 3
```
````

### `materialization.md`

Webpack chunk `12557.<hash>.chunk.js`, module `712557`.

````markdown
# Materialization

Materialization accelerates metric view queries using pre-computed materialized views with automatic incremental refresh.

## Configuration

Add a top-level `materialization` field:

- **schedule**: Refresh frequency (e.g., `every 6 hours`)
- **mode**: Must be `relaxed`
- **materialized_views**: List of MVs with `name`, `type`, and optionally `dimensions`/`measures` (see below)

## Types

```yaml
materialized_views:
  # Unaggregated: materializes full data model (source, joins, filters)
  # Use when source is expensive or joins are costly
  # Dimensions and measures forbidden here
  # Only a single unaggregated materialization is allowed
  - name: baseline
    type: unaggregated

  # Aggregated: pre-computes specific dimension/measure combinations
  # Include potential filter columns as dimensions
  # Dimensions or measures (or usually both) are required here
  # Multiple aggregated materializations are allowed
  - name: revenue_breakdown
    type: aggregated
    dimensions:
      - category
    measures:
      - total_revenue
```

## Restrictions

- A metric view that references **another metric view** as its source cannot have an unaggregated materialization.
- The `TRIGGER ON UPDATE` clause is not supported for materialization in metric views.

## Query Behavior

Queries automatically use materializations via aggregate-aware rewriting; falls back to source if no match. Verify with EXPLAIN EXTENDED (look for `__materialization_mat___metric_view`).
````
