# Genie Code skill: `data-sampling`

Full content of the built-in Genie Code skill `data-sampling`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). Genie Code loads these markdown files lazily via the `readSkillFile` tool when its description matches the task at hand. See [genie_code_findings.md](genie_code_findings.md) and [genie_code_payload.md](genie_code_payload.md) for the request envelope and tool schema, and [genie_code_system_prompt.md](genie_code_system_prompt.md) for the system prompt that drives skill selection.

## Registry record

From the Genie Code SkillRegistry definition in the SPA's `19604.5ae31ee5cc.chunk.js` chunk (module `833455`):

```jsonc
{
  "name":        "data-sampling",
  "description": "Load BEFORE querying, filtering, or sampling any table — whether via readTable, getSqlSample, executeCode, editAsset, or writing SQL in cells. Also load when users ask conceptual questions about query result completeness: whether output is limited, whether all matching records were returned, or how to verify data coverage. Queries against unfamiliar tables frequently return wrong results without this — date formats vary, filter values are often spelled differently than expected, and results may be silently truncated.",
  "files":       [ /* 4 entries — see below */ ]
}
```

## File manifest

Each file lives in its own webpack chunk (one chunk per markdown file). The SPA exposes them as raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release — re-derive them from the asset manifest (`index.968bbeb5f6.js` at capture time). The path Genie Code uses with `readSkillFile` is `skills/data-sampling/<filename>`.

| File | Chunk id | Module id | Feature flag |
|---|---|---|---|
| `SKILL.md` | `50583` | `750583` | — |
| `temporal-validation.md` | `55792` | `655792` | — |
| `categorical-validation.md` | `37982` | `837982` | — |
| `sampling-best-practices.md` | `55463` | `55463` | — |

## Files

### `SKILL.md`

Webpack chunk `50583.<hash>.chunk.js`, module `750583`.

````markdown
# readTable & getSqlSample Best Practices

**Use this guidance whenever working with the readTable or getSqlSample tools.**

## ⚠️ REQUIRED: Date Scoping for All Exploration Queries

**Before running ANY aggregation or discovery query on a table with a date/timestamp column, add a date filter to limit to the relevant time period.** Queries without date scoping on large tables will timeout and consume minutes of the time budget.

```sql
-- ALWAYS scope to the relevant time range:
WHERE date_column >= current_date() - INTERVAL 30 DAYS

-- For specific time periods, use explicit bounds:
WHERE date_column >= '2025-01-01' AND date_column < '2025-02-01'
```

**This is NOT optional.** Full table scans on tables with millions of rows (spanning years of data) will timeout. Add date scoping to the innermost FROM clause or CTE that references the large table.

---

## REQUIRED: Load Sub-Topics Before Proceeding

**Before writing any query, check if these conditions apply. If yes, load the sub-topic FIRST.**

### Temporal Reasoning → LOAD [`temporal-validation.md`](temporal-validation.md)

**REQUIRED when ANY of these apply:**

**→ Call `readSkillFile('data-sampling/temporal-validation.md')` as your immediate next action, before writing any query or cell. This is a mandatory procedural step with no exceptions — including for date references that appear simple.**

- Query involves ANY date, month, or time reference
- User mentions dates without years (e.g., "October", "May 18th")
- User uses relative time expressions (e.g., "last month", "last year", "3 months ago")
- Working with time-series data or date ranges
- User asks about "latest", "most recent", or "current" data

**Why this matters:** Dates without years are ambiguous—the data may not contain the year you assume.

### Categorical Filtering → LOAD [`categorical-validation.md`](categorical-validation.md)

**REQUIRED when ANY of these apply:**

**→ Call `readSkillFile('data-sampling/categorical-validation.md')` as your immediate next action, before writing any query or cell. This is a mandatory procedural step with no exceptions — including for filter values that appear obvious. Do not substitute an ad hoc investigation with your own query logic; the subskill contains the required validation patterns.**

- Query filters by ANY user-specified value (e.g., "for X", "where type is Y")
- User mentions specific categories, names, or string values to filter on
- Building WHERE clauses with string comparisons or IN filters
- Need to verify exact spelling, casing, or naming conventions in the data

**Why this matters:** User-provided filter values may not match exact strings in the data (spelling, casing, naming variations).

### ⚠️ getSqlSample Does NOT Prove Categorical Column Coverage

**If `getSqlSample` returns rows that all show the same value in a categorical column, do NOT conclude that value is the only one present in the full table.**

A small sample (e.g., the most recent 100–1000 rows) may be systematically biased toward one category due to recency patterns, insertion order, or data density variation over time. Absence from a sample is NOT evidence of absence in the full table.

**Required before adding a categorical filter or concluding no filter is needed**: Run a dedicated discovery query to enumerate all distinct values:

```sql
SELECT DISTINCT column_name
FROM table_name
WHERE date_column >= current_date() - INTERVAL 90 DAYS  -- scope for performance
LIMIT 50
```

Only after seeing all distinct values can you determine whether a filter is required and which value to use.

### Sampling and Truncation Handling

**REQUIRED: Load [`sampling-best-practices.md`](sampling-best-practices.md) when ANY of these apply — call readSkillFile as your next action:**

- Dealing with isTruncated flags in query results
- Need to determine appropriate sample sizes
- Checking for data gaps or coverage issues
- Performing self-checks before drawing conclusions
- Handling query timeouts during validation
- Verifying data availability before making conclusions

## Core Principle

Always validate user-specified values and calculated dates against actual data before creating final queries. Sampling is for structure, coverage, and validation—not to redefine user intent.
````

### `temporal-validation.md`

Webpack chunk `55792.<hash>.chunk.js`, module `655792`.

````markdown
# Temporal Reasoning and Date Validation

## Use Conversation and Established Context First

- If the user or prior analysis has already established a specific year, month, or timeframe, continue referencing that period.
- Maintain temporal context across turns once established.
- Ensure any inferred date aligns with prior discussion or results whenever possible.

## Anchor Underspecified Dates Relative to Today

- **MANDATORY FIRST STEP**: When user mentions a date without a year (e.g., "October", "May 18th", "September 15th"), or relative time (e.g., "last month", "last year", "3 months ago", "15 days ago"), immediately calculate the target date relative to **today's date** BEFORE sampling any data or creating queries.
- **Use current system date for all temporal calculations**: For "last year" use current year - 1; for "N months ago" subtract N months from current date; for "May 18th" use the most recent May 18th relative to today.
- **State your calculated target date explicitly** in your reasoning (e.g., "User said 'May 18th' and today is 2023-08-10, so target is May 18, 2023" or "User said 'last year' and today is 2023-08-10, so target is 2022").
- Only consider prior messages or analysis to establish an alternative reference if clearly indicated by the user.

## Validate Inferred Periods Using Sampling

- Sample data to check date formatting, available months/years, and coverage.
- **MANDATORY DATE GAP CHECK**: After sampling temporal data, calculate: latest_date_in_sample vs today's_date. If gap > 1 month, explicitly state: "Data ends at [date] but today is [today], indicating [X] months/years of potentially missing data."
- **CRITICAL for "latest/most recent" queries**: If you're about to use terms like "most recent", "latest", "current" for temporal data AND isTruncated=true, you MUST verify you've seen the relevant temporal data for your target. Use ORDER BY [temporal_field] DESC to see newest data first, or increase limit until your target period is visible or isTruncated=false.
- **BLOCKING RULE**: If your calculated target date is NOT in your sample AND isTruncated=true, you CANNOT proceed. You must increase limit or adjust query to verify whether the target date exists.

## Do Not Shift Inferred Periods if Data is Missing

- If the calculated or inferred date has no rows, report this explicitly rather than selecting an alternative period.
- **NEVER substitute a different period** just because your initially calculated target date is not found. If "October 2022" was calculated but not found, report "No data for October 2022" rather than switching to "October 2020".

## Clarify Ambiguities Explicitly

- Make all resolved dates explicit in reasoning, plans, and queries.
- Only ask the user for clarification when multiple interpretations are equally plausible (e.g., "the 5th" could refer to multiple months with no clear context).
````

### `categorical-validation.md`

Webpack chunk `37982.<hash>.chunk.js`, module `837982`.

````markdown
# Discovery-First Categorical Validation (3-Step Process)

**When user specifies particular category values** (e.g., "for A, B, and C", "where column is X"), follow this workflow:

## Step 1: DISCOVERY (Open Exploration)

- **ALWAYS start by discovering ALL available values WITHOUT filtering the categorical column itself**: `SELECT DISTINCT column FROM table` or `SELECT column, COUNT(*) FROM table GROUP BY column`
- **CRITICAL: Do NOT use WHERE clauses on the categorical column you're discovering** - this would only test if exact strings match, missing variations
- **⚠️ REQUIRED date scoping for large tables**: You MUST filter on date/time columns to reduce data volume (e.g., `WHERE date >= current_date() - INTERVAL 30 DAYS` to limit to recent data). Without this, queries on large tables will timeout. Do NOT filter on the categorical column you're trying to discover
- Think: "What values actually exist in this column?" not "Do my exact strings exist?"
- **Check isTruncated**: If true, increase limit to ensure you've seen all distinct values

## Step 2: MAPPING (Match User Intent to Data Reality)

- Compare user's requested values to the discovered values
- Look for naming variations: case differences (NY vs ny), spacing (New York vs NewYork), spelling, synonyms (Mobile vs Smartphone)
- Map each user value to its corresponding data value (or identify if no match exists)
- **Reflection checkpoint**: If you expected N values but only found M < N matches, PAUSE - explore the full list again to find missing variations

## Step 3: VALIDATION & REPORTING

- **Report mismatches explicitly BEFORE proceeding**: "User requested 'CA' but data contains 'California'"
- **If all values map successfully**: Proceed with filter query using the ACTUAL data values (not user's original terms)
- **If some don't map**: Report which values are valid and which aren't, suggest corrections
- **BLOCKING RULE**: Do NOT create the final deliverable query until this 3-step process is complete

## Common Mistake to Avoid

- ❌ **WRONG**: `WHERE categoryColumn IN ('UserValue1', 'UserValue2')` as your first query (closed validation - tests exact matches only, misses variations)
- ✅ **RIGHT**: `SELECT DISTINCT categoryColumn FROM table WHERE date >= current_date() - INTERVAL 30 DAYS` (discover all categories in recent data, filter on OTHER columns for performance)
- ✅ **THEN**: Map user values to discovered values, and create final query with actual data values

## Output Sentinel Value Filtering

**After running your final query**, inspect categorical columns in the results for sentinel values that represent missing or uncategorized data. These come in two forms:

**1. Literal sentinel strings**: `unknown`, `other`, `N/A`, `n/a`, `none`, `unspecified`, `null`, `empty`, `(not set)`, `undefined`

**2. Catch-all buckets**: Values that _look like_ a real entity but actually aggregate many unrelated records into a single row. These are common in customer/account columns, geographic rollups, and organizational hierarchies. Warning signs: the name sounds vague or describes a category rather than a specific entity, it has suspiciously high counts compared to other rows, or it represents a billing/CRM grouping rather than a real organization. Apply the same filtering logic as literal sentinels.

**Process:**

1. **Scan results**: Check if any categorical columns contain sentinel values or catch-all buckets, especially in top-ranked rows
2. **Evaluate impact**: If a sentinel or catch-all appears as a top result in a ranking or aggregation, it is polluting the answer
3. **Filter and re-query**: Exclude the value and re-run. Report the top _specific_ entity instead
4. **Mention what you excluded**: Briefly note that you excluded the catch-all and why, so the user knows it exists in the data
5. **Exception**: Only keep sentinel values if the user specifically asked about them (e.g., "how many records have unknown status?")

**Common mistake**: Reporting a catch-all bucket or sentinel as a legitimate top-N result. If the #1 result doesn't represent a single real-world entity, it's not the answer — filter it and report the next result.

---

## Handling Query Timeouts

**IF DISCOVERY QUERY TIMES OUT**: Retry the EXACT SAME discovery query (GROUP BY, DISTINCT) at least 2 more times before changing approach. Timeouts are often transient system issues. The timeout error may suggest "avoid aggregate functions" - IGNORE this for discovery queries, as they are essential for correctness.
````

### `sampling-best-practices.md`

Webpack chunk `55463.<hash>.chunk.js`, module `55463`.

````markdown
# Sampling and Truncation Best Practices

## Understanding isTruncated and Row Limits

- **Check isTruncated field and assess its impact.** If isTruncated=true during validation tasks (e.g., confirming a specific date exists, enumerating available periods), increase the limit to ensure complete coverage. For exploratory inspection, truncation may be acceptable.
- **CRITICAL for "latest/most recent" queries**: If you're about to use terms like "most recent", "latest", "current" for temporal data AND isTruncated=true, you MUST verify you've seen the relevant temporal data for your target. Use ORDER BY [temporal_field] DESC to see newest data first, or increase limit until your target period is visible or isTruncated=false.
- **BLOCKING RULE**: If your calculated target date or value is NOT in your sample AND isTruncated=true, you CANNOT proceed. You must increase limit or adjust query to verify whether the target exists.
- Sampling is for **structure, coverage, and validation only**, not to redefine user intent.
- **When validating temporal coverage with isTruncated=true**, do not finalize conclusions about what dates are available; resample with higher limits or more targeted queries first.

## Self-Check Before Making Conclusions

Before stating conclusions about data availability or making assumptions, verify you have sufficient evidence:

- For temporal tasks: "What time period(s) am I looking for? Have I seen data covering that period? Is there a gap between my sample and today?"
- For categorical/value tasks: "What specific values am I validating? Have I confirmed they exist in my sample?"
- For all tasks: "Is isTruncated=true? Could truncation be hiding relevant data?"

## Defense-in-Depth Reflection Checkpoint

When you expect N distinct values/categories but discover fewer than N:

- STOP and enumerate ALL available values WITHOUT filtering the categorical column (you can filter OTHER columns for performance)
- Look for naming variations, synonyms, or related terms
- Report the discrepancy explicitly before proceeding
- Think: "Absence from a filtered categorical query doesn't prove absence from the table"

If verification reveals gaps or uncertainties, address them before proceeding with analysis.

## Query Timeout Handling

- If a query times out, **retry the EXACT SAME query at least 2 more times** before considering alternatives.
- Timeouts are often transient system issues (cold start, resource contention), NOT query problems.
- **ESPECIALLY FOR VALIDATION QUERIES (GROUP BY, DISTINCT, MIN/MAX)**: These are CRITICAL for correctness. The timeout error message may suggest "avoid aggregate functions" - IGNORE THIS ADVICE FOR VALIDATION QUERIES. Retry the validation query 2-3 times before abandoning.
- Only modify the query after 2-3 failed attempts with the same query. Don't prematurely abandon a good query for a faster but incorrect approach.
````
