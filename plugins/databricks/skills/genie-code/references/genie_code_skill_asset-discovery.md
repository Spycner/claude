# Genie Code skill: `asset-discovery`

Full content of the Genie Code skill `asset-discovery`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). Genie Code loads these markdown files lazily via the `readSkillFile` tool when its description matches the task at hand. See [genie_code_findings.md](genie_code_findings.md) and [genie_code_payload.md](genie_code_payload.md) for the request envelope and tool schema, and [genie_code_system_prompt.md](genie_code_system_prompt.md) for the system prompt that drives skill selection.

## Registry record

From the Genie Code SkillRegistry definition in the SPA's `19604.5ae31ee5cc.chunk.js` chunk (module `958510`):

```jsonc
{
  "name":        "asset-discovery",
  "description": "Load for data questions to find existing dashboards, notebooks, and query patterns before building from scratch. Even if the user specifies a table name, load this skill to find examples showing HOW to use that table correctly — existing patterns contain validated business logic (deduplication, filters, joins) that you won't find in raw schemas. Load BEFORE using searchAssets, tableSearch, readAssetById, or querySearch.",
  "enabled":     "()=>(0,W)('databricks.fe.assistant.enableAssetDiscoverySkill', false)" /* feature-flag gate */,
  "files":       [ /* 5 entries — see below */ ]
}
```

**Feature flag**: This skill is hidden from the Skill Registry unless `databricks.fe.assistant.enableAssetDiscoverySkill` is true on the workspace.

## File manifest

Each file lives in its own webpack chunk and is exposed as a raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release — re-derive them from `index.968bbeb5f6.js` before re-extracting. The path Genie Code uses with `readSkillFile` is `skills/asset-discovery/<filename>`.

| File | Chunk id | Module id | Gate |
|---|---|---|---|
| `SKILL.md` | `79450` | `879450` | NOT enableAssetDiscoverySubagents |
| `SKILL-subagent.md` | `60794` | `260794` | enableAssetDiscoverySubagents |
| `data-reconciliation.md` | `61365` | `661365` | NOT enableAssetDiscoverySubagents |
| `pattern-application.md` | `25410` | `725410` | NOT enableAssetDiscoverySubagents |
| `query-execution.md` | `13444` | `513444` | NOT enableAssetDiscoverySubagents |

## Files

### `SKILL.md`

Webpack chunk `79450.<hash>.chunk.js`, module `879450`. Gated on `NOT enableAssetDiscoverySubagents`.

````markdown
# Asset Discovery

## ⚠️ IMMEDIATELY After Loading: Update Your Plan

**Your existing plan may be missing critical steps.** Compare your plan to the recipe below and **add any missing tasks**:

- Task for EACH distinct piece of info? → Add separate tasks: "Find [piece 1]", "Find [piece 2]", etc.
- Explicit assumptions with `status: untested`? → Add to working memory assumptions
- **Step to load data-reconciliation?** → Add task: "Load data-reconciliation" (Step 4) via `readSkillFile("skills/asset-discovery/data-reconciliation.md")`
- **Step to validate assumptions?** → Add task: "Validate assumptions with SQL" (Step 6) — BEFORE pattern-application
- **Step to load pattern-application?** → Add task: "[REQUIRED] Load pattern-application" (Step 7) via `readSkillFile("skills/asset-discovery/pattern-application.md")`
- Trend chart, multi-period comparison, "over time" in the question, OR any candidate source you suspect is a large fact table (billions of rows / multi-year history)? → Add task: "Load query-execution before first executeCode against the flagged source" via `readSkillFile("skills/asset-discovery/query-execution.md")` (Step 5 if size-flag suspected; Step 8 otherwise)
- **Decision manifests?** → Add tasks: "Record `decision-source-*` observations (Step 5)", "Record `decision-filters` observation (Step 8, before executeCode)", and — if Step 5 flags a large source — "Record `decision-bounding` observation (Step 8, before each executeCode against that source)"
- **Step to verify results?** → Add task: "Verify results" (Step 9) — required before final answer

⚠️ **CRITICAL: Task ordering determines correctness!**

If you already have tasks like "Get X count" or "Calculate Y" in your plan, these are **APPLY** tasks (Step 8). They produce final answers and MUST come:

- **AFTER** "Validate assumptions" (Step 6)
- **AFTER** "Load pattern-application" (Step 7)

**Restructure your plan now.** Move any answer-producing tasks to after pattern-application. The agent often creates "Get X" tasks early but completing them before pattern-application leads to wrong answers.

**Call `updateWorkingMemory` NOW to restructure your plan.** Don't just continue with your old plan.

---

## The Recipe

Follow these steps in order. Each step should be a task in your plan.

⚠️ **Apparent exact match in `searchAssets` highlights ≠ permission to skip Steps 3–7.** When `searchAssets` returns SQL code in a result's `codeFragment` or highlights field, that snippet may be missing scope-defining categorical filters that do not appear in the search preview. Complete Steps 3–7 before any `executeCode` or `runNotebookCells` call — even when the snippet looks like a complete, runnable query.

1. **DECOMPOSE** — Break user's question into parts (one task per metric/dimension). **Pre-mortem**: which assumptions could be wrong; could parts overlap (e.g. categories not mutually exclusive → sum ≠ total); how do partial answers combine. For each risky assumption, create a working-memory assumption with `status: untested` (set to `confirmed` / `disproved` later when SQL proves it).
   - Done when: One plan item per part + explicit assumptions (status: untested) for each identified risk
2. **SEARCH** — Run 3-4 `searchAssets(assetTypes: ["dashboards", "notebooks"])` with TOPIC keywords (not table names). **Expand keywords** with domain synonyms.
   - Done when: 15+ dashboard/notebook candidates
3. **READ** — Call `readAssetById` on top 3-5 dashboards AND **3-5 notebooks**. Use `fetchOmittedContent` for truncated queries. Call `readNotebookContentForSearch` on notebooks to extract SQL patterns and table references. **Score ALL datasets** by keyword matching. **⚠️ Do NOT stop at the first plausible candidate** — always read multiple notebooks/dashboards before selecting, even if the first one looks good. Different candidates may use different tables at different granularities.
   - Done when: Actual SQL queries from 3+ candidates in hand
4. **LOAD data-reconciliation** — Call `readSkillFile("skills/asset-discovery/data-reconciliation.md")`. Read its guidance fully before proceeding.
   - Done when: Skill loaded, added to loadedSkills
5. **SELECT** — Follow data-reconciliation guidance to pick sources. Check if there are **separate queries for each part**, or if one query must be adapted for multiple parts. **Once selected, run `DESCRIBE DETAIL <chosen_table>` for each source (sub-second metadata-only read) and note `sizeInBytes`, `numFiles`, and partition columns/span** — multi-GB size, files in the thousands, and/or a multi-year date partition span together indicate a large historical fact table. Treat as combined indicators, not strict cutoffs. **If any source is flagged large, load `readSkillFile("skills/asset-discovery/query-execution.md")` NOW — before the first `executeCode` in Step 6.** Validation queries against a flagged source need its discipline as much as the final answer query does. **Then record a `decision-source-<n>` observation per major source** (see "Decision Manifests" below) — naming the chosen source, citing the evidence observation ids, and listing alternatives you rejected and why.
   - Done when: Source selected for each part, size attributes recorded, `decision-source-*` observations created, and (if any source flagged large) `query-execution.md` loaded
6. **VALIDATE ASSUMPTIONS** — **BEFORE pattern-application**: Test assumptions that affect your query approach. Run SQL to check assumptions about data relationships. **If the Step 5 size check flagged a large source, validation queries against it must use MINIMUM-viable scope, NOT the user's question period** — typically a single day, with enumerated `IN (...)` predicates from observed values (NOT `LIKE '%pattern%'` substring scans), and `COUNT(*)` rather than `COUNT(DISTINCT high_cardinality_col)` whenever a row count proves the assumption. Scoping to the user's full requested period for a validation query is how the entire time budget gets spent before the answer query ever runs. Load `query-execution.md` for the validation-query discipline section before issuing the first executeCode against a flagged source. If assumption is FALSE, adjust your approach before proceeding.
   - Done when: Assumptions validated or falsified with evidence; approach adjusted if needed
7. **LOAD pattern-application** — **[REQUIRED - DO NOT SKIP]** Call `readSkillFile("skills/asset-discovery/pattern-application.md")`. Read its guidance fully before proceeding. Validation queries from earlier steps are NOT final answers.
   - Done when: Skill loaded, added to loadedSkills
8. **APPLY** — Follow pattern-application guidance: copy query verbatim → run with `executeCode` → adapt minimally if needed. (If the user asked for a multi-period trend/visualization but Step 5 did NOT flag a large source, load `query-execution.md` here.) **Before each `executeCode` call**: record a `decision-filters` observation enumerating every filter in the canonical pattern (`PRESERVED` vs. `ADAPTED <reason>`). If the source was flagged large in Step 5, also record a `decision-bounding` observation citing the size obs id and stating the explicit date/partition bounds. Re-read both observations against your SQL before submitting (see "Decision Manifests").
   - Done when: Actual results for each part AND `decision-filters` (always) plus `decision-bounding` (if flagged) recorded immediately before the `executeCode` that used them
9. **VERIFY RESULTS** — Sanity-check final results: Are numbers in expected range? Are all categories present? Does the answer match what user asked?
   - Done when: Results validated as reasonable
10. **DELIVER** — Only after verification passes, use `addCells`.
    - Done when: Final answer

⚠️ **Steps 6 and 9 are different types of validation:**

- **Step 6 (VALIDATE ASSUMPTIONS)**: Tests whether your assumptions about data relationships are correct. Do this BEFORE committing to final queries.
- **Step 9 (VERIFY RESULTS)**: Sanity-checks final output. Do this AFTER running queries but before delivering.

---

## ⚠️ Step 3 Checkpoint: Do NOT Proceed Without Multiple Candidates

**Before moving to Step 4 (data-reconciliation), you MUST have:**

1. **Read 3+ notebooks/dashboards** that are actually relevant to the question (not just 3 random assets)
2. **Extracted table names and column references** from each candidate
3. **Documented in working memory** a brief comparison: "Candidate A uses table X with column Y; Candidate B uses table Z with column W"

**If you only have 1 relevant candidate:** Go back to your search results and read more. You had 15+ results from Step 2 — use them.

**If a candidate's table is inaccessible:** That is NOT a reason to abandon pattern-based discovery and fall back to `tableSearch`. Read the next notebook candidate instead. Only resort to `tableSearch` after exhausting notebook/dashboard candidates.

**Common failure mode:** Finding one promising notebook, seeing its table is gone or accessible, and immediately pivoting to `tableSearch` → exploring tables on your own → picking the wrong granularity. **This produces wrong answers.** Stay in pattern-discovery mode — there are almost always other notebooks that solved the same problem with different tables.

### ⚠️ tableSearch Does NOT Replace Notebook/Dashboard Discovery

**Finding a table with matching column names via `tableSearch` is NOT a substitute for Steps 2–3.**

A table schema tells you column names and types — it does NOT tell you:

- Which categorical values are meaningful filters vs. noise
- What business-logic exclusions apply (trial accounts, test entities, abuse flags, etc.)
- The correct aggregation methodology (deduplication logic, rolling windows, etc.)
- Which columns encode the metric at the right granularity

**Required**: After `tableSearch` finds a candidate table, you MUST still search for and read notebooks/dashboards that USE that table. The query patterns in those notebooks/dashboards contain the business logic that makes the query correct. Proceeding to write a query directly from the schema alone produces structurally plausible but logically incorrect results.

**The only safe shortcut is finding a notebook/dashboard pattern that has already solved the same question.** If `tableSearch` found a table, use that table name as an additional search term in Step 2 to find notebooks that reference it.

### ⚠️ Tool-Evidence Rule: No Recording or Writing SQL Without a Citing Tool Response

A notebook's name appearing in `searchAssets` results gives you ZERO information about what query it contains. Confidence based on the title is the hallucination risk.

Two checkpoints, one rule:

- **Recording observations / completing plan items** about a notebook's SQL, tables, or filters → requires a prior `readNotebookContentForSearch` or `readAssetById` response that contained the actual content. Title match, `tableSearch` hit, or assumed-similar pattern do NOT satisfy this.
- **Writing SQL via `editAsset`, `addCells`, or `updateCells`** → requires that you can point to the specific tool response (`readNotebookContentForSearch`, `readAssetById`, or `fetchOmittedContent`) that contained the SQL pattern or table references being used.

**Self-test before either action**: "Can I point to a specific tool call response where I received this content?" If no → call the tool first; do NOT record or write yet.

---

## Decision Manifests: Cite Observations Before Acting

Three decisions require a `decision-*` observation that explicitly cites prior observation ids. The act of writing the citation exposes silent contradictions between what you observed and what you are about to do — which is the most common failure mode for this agent.

| Decision            | Observation id (fixed name)                                           | Must contain                                                                                        | When                                                                                            |
| ------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Source selection    | `decision-source-<n>` (one per major source)                          | Source chosen + ids of evidence observations + alternatives rejected and why                        | End of Step 5                                                                                   |
| Filter preservation | `decision-filters`                                                    | Enumeration of every filter in the canonical pattern; each marked `PRESERVED` or `ADAPTED <reason>` | Before the `executeCode` in Step 8                                                              |
| Query bounding      | `decision-bounding` (or `-phase2`, `-validation`, etc. when multiple) | Cited size obs id + explicit date range + partition column bounds being applied                     | Before EVERY `executeCode` against a Step-5-flagged-large source — including validation queries |

**The verification beat** (mandatory): After recording the observation and assembling the SQL, re-read them side by side. If the SQL contradicts the observation (e.g. `decision-bounding` says "scope to Oct 2025" but the `WHERE` has no date predicate; `decision-filters` lists 4 PRESERVED filters but the SQL only has 1), STOP and fix the SQL before submitting.

The names are fixed (`decision-source-*`, `decision-filters`, `decision-bounding`) so failures and successes can be audited mechanically across runs.

---

## Keyword Expansion (Step 2)

⚠️ **CRITICAL**: Always expand user keywords with domain-specific related terms before searching.

### Common Domain Term Mappings:

- **Revenue/Sales** → Also search: "billing", "spend", "consumption", "ARR", "MRR"
- **Usage/Activity** → Also search: "engagement", "consumption", "sessions", "requests"
- **Active/Engagement** → Also search: "DAU", "WAU", "MAU", "trailing", "weekly active", "monthly active"
- **Customers/Users** → Also search: "accounts", "tenants", "organizations", "subscribers"
- **Exclusion criteria** (e.g., "exclude free trial users", "not including test accounts", "flagged for abuse") → Also search for those exclusion-related terms directly (e.g., "free trial", "abuse", "test accounts"). Certified dashboards and notebooks that correctly implement these exclusions will reference those terms in their query logic, CTE names, or dataset descriptions — making them discoverable when searched with exclusion vocabulary.

**Strategy**: Run parallel searches with different keyword combinations rather than a single search.

### Categorical Qualifier Mapping

A categorical qualifier in user language = a required filter constraint in SQL.

When the user's question narrows a metric to a specific category or type, that qualifier must become an explicit `WHERE` clause filter — not just a search keyword. Failing to translate the qualifier into a filter produces results for the broadest possible population, which is incorrect.

| User Question Contains          | Required SQL Filter                         |
| ------------------------------- | ------------------------------------------- |
| "batch job completions"         | `WHERE job_type = 'batch'` (or equivalent)  |
| "inbound sales channel revenue" | `WHERE channel = 'inbound'` (or equivalent) |
| "premium tier customers"        | `WHERE tier = 'premium'` (or equivalent)    |

**Before writing SQL**: Identify every categorical qualifier in the user's question. For each qualifier, verify that the canonical pattern includes a corresponding filter, or explicitly document why that filter is absent (e.g., the canonical source already partitions by that dimension and no additional filter is needed).

---

## `information_schema` Fallback (Step 2b)

⚠️ **When `tableSearch` results don't match the question's domain**, fall back to `information_schema` to discover tables directly.

**Trigger conditions** (any one is sufficient):

- `tableSearch` results come from schemas or domains unrelated to the user's question
- No results mention the key entity from the user's question
- You've done 2+ rounds of `tableSearch` without finding a relevant table

**How to run the fallback:**

```sql
SELECT table_schema, table_name
FROM information_schema.tables
WHERE table_name LIKE '%keyword%'
LIMIT 20
```

**Strategy**: Try multiple keyword variations derived from the user's question — synonyms, abbreviations, and related terms. Run several queries with different keywords to maximize coverage.

**After finding candidate tables**: Use `readTable` to inspect their schemas and confirm they contain the columns you need. Then proceed to Step 3 as normal.

---

## Dataset Scoring (Step 3)

⚠️ **Dashboards often have 10+ datasets.** Don't pick the first one that looks relevant.

**Process:**

1. **Page through ALL datasets** — `readAssetById` returns truncated results with `__more` placeholders. Use `fetchOmittedContent` to retrieve all datasets before selecting.
2. **List all keywords** from the user's question
3. **Score EVERY dataset** using `displayName`, `query` fragments, `tables`, and `cteExpressions` — count keyword matches (including **semantic matches** - synonyms and related terms)
4. **Assign +1 point** for each matching keyword
5. **Rank by score** and fetch full queries for top 3-5

**Example**: Question = "Monthly sales by region"

- Keywords: monthly, sales, region
- Dataset "Sales KPIs" → matches: sales → **Score: 1**
- Dataset "Regional performance" → matches: region (exact) → **Score: 1**
- Dataset "Monthly sales by geography" → matches: monthly (exact), sales (exact), region (semantic: geography ≈ region) → **Score: 3**

⚠️ **Include semantic matches**: "geography" matches "region", "revenue" matches "sales", "weekly" relates to "trailing 7 day"

⚠️ **Do NOT select datasets just because they appear first in the list!**

---

## Notebook Candidate Evaluation (Step 3)

⚠️ **CRITICAL: Read MULTIPLE notebook candidates before committing to any one.**

The most common failure mode is: you find a notebook that looks relevant, read it, see a plausible table — and immediately start querying that table. **This is wrong even if the table works.** Different notebooks may use different tables at different granularities, and the first notebook you find is rarely the best one.

**Required process:**

1. **Read 3+ notebooks** from search results using `readAssetById` or `readNotebookContentForSearch`
2. **For each notebook, extract**: the tables it uses, the columns it queries, and the granularity of its analysis
3. **Compare candidates** before selecting — document which tables each notebook uses and why one is better than another
4. **Only then** proceed to data-reconciliation

**When a notebook's table is inaccessible** (TABLE_OR_VIEW_NOT_FOUND, permission denied, etc.):

- ⚠️ **Do NOT immediately fall back to `tableSearch` exploration.** This is a trap — you lose the benefit of curated patterns and will likely pick a table at the wrong granularity.
- Instead: **read the next notebook candidate** from your search results. Search for more notebooks if you've exhausted your candidates.
- The inaccessible table is a data point, not a dead end — its column names and query structure tell you what to look for in alternative sources.

**When a notebook's table IS accessible:**

- ⚠️ **Still read more candidates.** A working table does not mean it's the _right_ table. Another notebook may use a table with finer granularity, better coverage, or more appropriate methodology.
- The goal is to have 2-3 candidate tables/approaches to bring into data-reconciliation, not to commit to the first one that runs.

---

## Query Shape Classification

Classify the user's question as **scalar** or **time-series** before constructing any query. Record `query_shape: scalar` or `query_shape: time-series` as a working memory observation during DECOMPOSE (Step 1) so that pattern-application knows what output to produce.

| Question Pattern                                    | Shape       |
| --------------------------------------------------- | ----------- |
| "How many orders on [specific date]?"               | scalar      |
| "What was the conversion rate for [specific date]?" | scalar      |
| "Show daily order count over [period]"              | time-series |
| "How has churn changed from [date] to [date]?"      | time-series |

**Scalar questions**: The canonical source may produce a time-series output (one row per day). A scalar question requires filtering to exactly the requested date — the final result must be a single row or single value, not a range.

**Disambiguation rule**: A date appearing in a question does not automatically indicate a time-series request. Parse whether the user wants **one value** or a **trend**. A question asking for a count or total on a specific date expects one number — add a final date filter to the canonical pattern rather than running the full time range and returning all rows.

---

## Aggregation & Quality Signals

**Aggregation gotcha**: Dashboards often have SEPARATE queries for related metrics (different `GROUP BY` shapes) because the aggregation logic differs. If a dashboard has both a "total" and a "by-category" query, USE BOTH — don't derive total from the breakdown (overlap / double-counting risk). Before combining results, ask "could there be overlap?" and "if there are multiple similar queries, why?".

**Source quality signals**:

- Dashboards: `viewerCount` is a weak tiebreaker only — semantic relevance and query content beat popularity. Names like "KPIs / metrics / official" > "tracker / scratch". `/Shared/` paths > `/Users/`.
- Datasets within a dashboard: don't pick by name alone (10+ datasets common); `cteExpressions: ["distinct_rows"]` signals deduplication; run multiple if relevant and compare output shape.
- **Table trust hierarchy**: `main.metric_store.*`, `main.certified.*` (highest) > `main.*`, `prod.*` (high) > `dev.*`, `staging.*`, `test.*`, `tmp.*`, `users.*` (avoid).

---

## Validation Checkpoints

### Step 6 — VALIDATE ASSUMPTIONS

Test assumptions that affect your query approach BEFORE committing to a final query: data relationships, derivability of one metric from others, and data availability for the requested scope. If any assumption is FALSE, adjust before proceeding. Validation results are exploratory — never use them as the final answer (final answers come from dashboard patterns).

⚠️ **Do NOT use Step 6 to re-derive filter categories the canonical pattern already defines.** The filter values in the canonical pattern (account types, segments, workspace types, etc.) are intentional business logic, not noise to second-guess. Step 6 tests whether the pattern WORKS, not WHICH values to include.

- ✅ Valid Step 6 questions: data exists for my date range? join keys match? CTE structure runs? required columns present?
- ❌ Invalid Step 6 questions: what categories exist in this column? would including additional categories be more complete? should I add more values to this filter based on what I see?

If validation reveals a canonical pattern excludes certain categories (trial accounts, internal users, test workspaces), that exclusion is intentional — do NOT add those categories back in.

### Step 9 — VERIFY RESULTS (before delivering)

1. **Magnitude check**: Is the result in the expected range? (1.4M when expecting 650k → investigate)
2. **Completeness check**: All expected categories present?
3. **Assumption check**: All Step 6 assumptions in `confirmed`/`disproved` status (not still `untested`)?
4. **Question re-read**: Does the answer match what was actually asked (subset vs total, current state vs changes)?
5. **Sentinel/catch-all check**: Are top-N results dominated by sentinels (`unknown`, `other`, `N/A`, `none`, `null`, `empty`, `unspecified`) or catch-all buckets (values that describe a category rather than a specific entity, or aggregate many unrelated records into one suspiciously-high-count row)? If yes, filter them out, re-query, and report the top SPECIFIC entity.

⚠️ **If your answer is 10× off from expected**, compare your query to the canonical pattern line-by-line — the `decision-filters` observation should pinpoint the divergence.

---

## Key Warnings

- ⚠️ **Queries will timeout without date scoping** — See **pattern-application** skill (Step 2) for required date scoping before running any dashboard query

- **Search by TOPIC, not table name** — Dashboards are named "Revenue Dashboard" not "sales_table Dashboard"
- **Read before deciding** — Search results show names only. Call `readAssetById` to see queries, `fetchOmittedContent` if truncated.
- **One query rarely answers multi-part questions** — Expect separate patterns for each part. Find dashboard patterns for ALL parts of the question.
- **Verify computationally** — "It should work" is not validation. Run SQL to test assumptions.
- **Explore first, finalize later** — Use `executeCode` to test. Only `addCells` after verification passes.
- **All final answers from dashboard patterns** — Your exploratory/validation queries inform your approach, but final answers must use the dashboard's query structure.
````

### `SKILL-subagent.md`

Webpack chunk `60794.<hash>.chunk.js`, module `260794`. Gated on `enableAssetDiscoverySubagents`.

````markdown
# Asset Discovery (subagent mode)

You have access to a hierarchical asset-discovery flow implemented as **subagent tools**. Use them to answer data questions with production-tested patterns. Each subagent is specialized, has its own focused tool set, and returns a structured deliverable — you don't need to run the discover → reconcile → generate recipe inline yourself.

## ⚠️ IMMEDIATELY After Loading: Update Your Plan

Compare your plan to the recipe below and **add any missing tasks**. Use whichever planning tool is available to you to track them (`updateWorkingMemory` or `manageTodoList`) — there should be a task for each subagent invocation plus the final delivery step. If neither is available, write the plan inline as a numbered list before calling any subagent and refer back to it after each step.

| Check                                        | If missing, add                                                                                 |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Task for EACH distinct piece of info?        | Add separate tasks per metric / breakdown so each can map to its own subagent call.             |
| Tasks for the three SEARCH subagents?        | Add tasks: "Find dashboards", "Find notebooks", "Find tables" (run **in parallel**).            |
| Task to call `analyzeSearchResultsSubagent`? | Add task: "Reconcile search results → pick a source".                                           |
| Task to call `text2sqlSubagent`?             | Add task: "Generate + validate SQL via text2sqlSubagent".                                       |
| Task to write the final cell?                | Add task: "Write SQL into notebook with addCells / editAsset" (you do this — not the subagent). |

**Restructure your plan now using your planning tool.** Don't continue with the old plan if it doesn't reflect the subagent flow.

---

## The Recipe

Follow these steps in order. Each step should be a task in your plan.

| Step                       | Action                                                                                                                                                                                                                                                                                                                                           | Done When                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| **1. DECOMPOSE**           | Break the user's question into parts. Pre-mortem: what assumptions could be wrong? Could parts overlap? Note `query_shape: scalar` vs `query_shape: time-series` (in working memory if `updateWorkingMemory` is available, otherwise inline in your message).                                                                                    | Plan items + decomposition notes.                                                   |
| **2. PARALLEL SEARCH**     | Call `dashboardSearchSubagent`, `notebookSearchSubagent`, AND `tableSearchSubagent` **in parallel** — issue all three tool calls in the same turn. Pass the user's question (or a focused subset) as the prompt to each. Even when the user mentions a specific table, run all three: dashboards/notebooks contain the validated query patterns. | Three deliverables in hand: each lists its top candidates and any inline SQL.       |
| **3. RECONCILE**           | Call `analyzeSearchResultsSubagent`. Pass the user question + the `report` field from each of the three search deliverables as the prompt. It will pick the best source and document the recommended joins, filters, and aggregation.                                                                                                            | A `recommendation` object identifying primary table + joins + filters.              |
| **4. GENERATE & VALIDATE** | Call `text2sqlSubagent`. Pass the user's original question and the `recommendation` from step 3 as the prompt. It will generate the SQL, validate it via `executeCode`, and return the validated SQL plus a sample of rows.                                                                                                                      | A `text2sqlSubagent` deliverable with `validation_passed: true` and a `sql` string. |
| **5. DELIVER**             | **You** (the main agent) write the final cell into the notebook. Use `addCells` (or `editAsset` for unified asset editing) with the `sql` from step 4. Include the subagent's `summary`, key `caveats`, and the `sample_results` in your message to the user.                                                                                    | Cell added; user-facing answer references the validated query.                      |

⚠️ **Subagents do NOT modify the notebook.** They only return deliverables. You are the only agent that calls `addCells` / `editAsset` / `runCells`. If a subagent's deliverable says "I added a cell," that's a hallucination — re-read the deliverable's `sql` field and add the cell yourself.

---

## ⚠️ Search Step Discipline (Step 2)

### Run all three searches in parallel

Issue `dashboardSearchSubagent`, `notebookSearchSubagent`, and `tableSearchSubagent` in the **same turn**. Sequential calls cost 3× the latency for no benefit.

### Even with a known table, search dashboards & notebooks

A table name tells you WHERE the data lives. Dashboards and notebooks tell you HOW to query it correctly:

- Pre-validated SQL with correct business logic (deduplication, filters, joins).
- Standard "single source of truth" tables, regional grouping, data quality patterns.
- Edge cases, business rules, exclusions (trial accounts, test workspaces, abuse flags) that aren't visible in the schema.

### Keyword Expansion

Each search subagent already expands keywords with synonyms internally, but you set the prompt — be deliberate about which terms you pass:

- **Revenue/Sales** → also mention "billing", "spend", "consumption", "ARR", "MRR".
- **Usage/Activity** → also mention "engagement", "consumption", "sessions", "requests", "DAU"/"WAU"/"MAU".
- **Customers/Users** → also mention "accounts", "tenants", "organizations", "subscribers".
- **Exclusion criteria** ("exclude free trial users", "not including test accounts", "flagged for abuse") → include those exclusion terms directly in the prompt — certified dashboards/notebooks reference them in CTE names and dataset descriptions.

### Categorical Qualifier Mapping

A categorical qualifier in user language = a required filter constraint in SQL. Surface every qualifier in the prompt to each subagent so it can pick a source whose query already encodes the right filter.

| User Question Contains          | Required SQL Filter                         |
| ------------------------------- | ------------------------------------------- |
| "batch job completions"         | `WHERE job_type = 'batch'` (or equivalent)  |
| "inbound sales channel revenue" | `WHERE channel = 'inbound'` (or equivalent) |
| "premium tier customers"        | `WHERE tier = 'premium'` (or equivalent)    |

---

## ⚠️ Reconcile Step Discipline (Step 3)

`analyzeSearchResultsSubagent` is the ONE place you make the source decision. Pass it the **full `report` strings** from each search deliverable, not summaries — it needs to see the actual candidate SQL to compare.

The subagent's deliverable has:

- `recommendation.source_kind` — `dashboard | notebook | table`.
- `recommendation.source_reference` — id + path or fully-qualified table name.
- `recommendation.primary_table`, `joins`, `filters`, `aggregation`, `reasoning`.
- `alternative_candidates` — ranked fallbacks with brief reasons.

If `text2sqlSubagent` later fails on the recommended source (access denied, missing columns, wrong data, timeout), do NOT re-call `analyzeSearchResultsSubagent`. Instead, pick the next-best entry from `alternative_candidates` and re-invoke `text2sqlSubagent` with a revised prompt that uses that alternative.

---

## ⚠️ Generate Step Discipline (Step 4)

`text2sqlSubagent` returns:

- `sql` — the validated SQL query (your final answer).
- `validation_passed` — `true` if the exploratory `executeCode` validation succeeded.
- `sample_results` — short tabular sample (max ~10 rows) from the validation run.
- `assumptions` / `caveats` — surface these to the user in your final message.

Do NOT modify the SQL the subagent returned unless you have a specific, justified reason — the subagent already validated it. If you need a different time scope or filter, you can either:

1. Re-invoke `text2sqlSubagent` with the updated requirement in the prompt, OR
2. Make a minimal local edit before calling `addCells` and explain why in your reply.

If `validation_passed` is `false`, re-invoke `text2sqlSubagent` with a tightened prompt (smaller date range, simpler aggregation, or an alternative candidate from step 3) — don't deliver an unvalidated query.

---

## ⚠️ Deliver Step Discipline (Step 5)

You — the main notebook agent — own the notebook. Use the right tool for the focused notebook (`addCells` / `editAsset` / `updateCells`) to write the validated SQL as a cell. Then run the cell if appropriate (use the standard run-cells tool, not a subagent).

Your final user-facing message should:

1. Lead with a short answer derived from `sample_results`.
2. Include the SQL inline OR mention that it's been added as a cell.
3. Surface any `caveats` and `assumptions` from the text2sql deliverable.
4. If you used an alternative candidate, mention which and why.

---

## Pre-mortem: Before You Search

Before calling any subagent, pause and ask:

1. **What distinct pieces does the user need?** (Each metric / dimension may map to its own text2sql call.)
2. **What assumptions might be WRONG?** (e.g., categories are mutually exclusive.)
3. **If I get partial answers, how do they combine?** (Could there be overlap or double-counting?)

Record explicit assumptions with `status: untested` (in working memory if `updateWorkingMemory` is available; otherwise list them inline before step 2). After step 3 / step 4, mark them `confirmed` or `disproved` based on what the subagents reported.

**Multi-part questions**: A single `text2sqlSubagent` call rarely answers a multi-part question. For "Total revenue and revenue by product category", expect TWO `text2sqlSubagent` calls (one per part) — and verify they use a consistent source.

---

## Quality Signals to Pass Through to Subagents

Tell each subagent in its prompt to prefer:

- Names with "KPIs", "metrics", "official" > "tracker", "scratch".
- `/Shared/` paths > `/Users/` paths.
- `main.metric_store.*`, `main.certified.*` > `main.*`, `prod.*` > `dev.*`, `staging.*`, `test.*`, `tmp.*`, `users.*`.

---

## Dates and Times

When the question references "today", "this month", "last quarter", etc., resolve the actual date with `executeCode` (or whichever date tool you have available) BEFORE invoking the subagents — pass the resolved date in the prompt so subagents don't re-derive it.

---

## Failure Modes to Avoid

- ❌ **Calling subagents sequentially in step 2.** They are independent — call them in parallel.
- ❌ **Skipping step 3 (reconcile).** If you go straight from search to text2sql, you lose the source decision and may pick the wrong table.
- ❌ **Calling `text2sqlSubagent` without a recommendation.** Pass the `recommendation` object so the subagent doesn't have to re-derive the source.
- ❌ **Letting a subagent write the cell.** Subagents return data; only the main agent (you) calls `addCells` / `editAsset`.
- ❌ **Re-calling `analyzeSearchResultsSubagent` on `text2sqlSubagent` failure.** Use `alternative_candidates` instead.
- ❌ **Manually re-typing `sample_results` into the final answer.** If the user needs the data, run the validated SQL yourself with `executeCode` or run the added cell — don't transcribe.
````

### `data-reconciliation.md`

Webpack chunk `61365.<hash>.chunk.js`, module `661365`. Gated on `NOT enableAssetDiscoverySubagents`.

````markdown
# Data Reconciliation: Comparing and Validating Data Sources

## When to Load This Skill

Load this skill when you have **2+ candidate data sources** (dashboards, notebooks, queries, or tables) and need to choose the best approach for answering the user's question.

**Typical trigger**: A plan item like "Load data-reconciliation skill to compare sources"

---

## ⚠️ IMMEDIATELY After Loading: Add Pattern-Application Task

**Before doing anything else**, add the pattern-application task to your plan:

```typescript
updateWorkingMemory({
  thoughts: "Loaded data-reconciliation skill. Adding pattern-application task now so I don't forget.",
  createPlanItems: [
    {
      id: 'apply-pattern',
      description:
        '[REQUIRED - DO NOT CANCEL] Load pattern-application skill before writing final queries - validation queries are NOT final answers',
      status: 'pending',
    },
  ],
  addLoadedSkills: ['data-reconciliation'],
});
```

🚨 **Why add this now?** Reconciliation and pattern-application serve **different purposes**:

| Phase                                | Purpose                         | Output                           |
| ------------------------------------ | ------------------------------- | -------------------------------- |
| **Reconciliation** (this skill)      | SELECT which source to use      | "Use dashboard X, dataset Y"     |
| **Pattern-application** (next skill) | LEARN the exact query structure | Final queries copied from source |

⚠️ **Common mistake**: Thinking "I ran some test queries during reconciliation, so I know how to write the final queries." **No!** Test queries during reconciliation are for validation (is this the right source?). Pattern-application ensures you use the source's exact structure, not your improvisation.

---

## Core Principle

**Do NOT commit to an approach until you've systematically compared candidates and validated your choice.**

Finding a working pattern is the START of evaluation, not the end. Different dashboards may answer subtly different questions, use different filters, or have different levels of accuracy.

### ⚠️ Performance: Always Add Date Scoping

When running ANY validation queries during reconciliation, **always add date filters** to the innermost CTE to limit data scanned. See "Step 1: Execute a Test Query" below for details. Queries without date scoping can timeout or take 5+ minutes.

---

## ⚠️ Two Levels of Reconciliation

Reconciliation happens at **two levels**:

### Level 1: Between Dashboards

Which dashboard is the best source for this question?

- Compare viewer counts, paths, update dates
- Check if the dashboard's domain matches the question

### Level 2: Within a Dashboard (CRITICAL!)

A single dashboard may have **10+ datasets**. They serve different purposes:

| Dataset Type         | Example                    | Use Case                  |
| -------------------- | -------------------------- | ------------------------- |
| Raw extraction       | `SELECT ... FROM table`    | Base data, no aggregation |
| Daily aggregate      | `GROUP BY date`            | Per-day counts            |
| Rolling window (T7D) | `COLLECT_SET` + `INTERVAL` | Trailing period metrics   |
| Weekly/Monthly       | `DATE_TRUNC('WEEK', ...)`  | Period summaries          |

**⚠️ Don't just pick the first dataset that mentions your topic!**

**Match the dataset to the widget:**

1. Find the widget that displays the metric you need (e.g., "T7D Active Workspaces")
2. Check which dataset that widget uses
3. Read THAT dataset's query - it has the correct calculation logic

**Common mistake:** Picking a raw data extraction dataset when the T7D widget uses a different dataset with `COLLECT_SET` aggregation.

**If the dashboard has multiple related datasets:**

- Read ALL of them to understand what each does
- The one powering the relevant widget is your answer
- Or you may need to combine multiple datasets

---

## ⚠️ Step 0: Inspect ALL Candidate Tables First (MANDATORY)

**Before filling out the analysis template below, call `readTable` on EVERY distinct table referenced across your candidates.** Do this in parallel — issue all `readTable` calls at once.

**Why this is mandatory:**

- Notebook queries use only a subset of a table's columns. You CANNOT infer a table's full capabilities from one notebook's query.
- The most common reconciliation mistake is dismissing a table because "the notebook doesn't use column X" when the table actually has column X — you just didn't check.
- `readTable` returns the full schema in seconds. Skipping it to save time costs you much more when you pick the wrong table.

**What to record for each table:**

- Full column list (focus on columns relevant to the user's question)
- Which columns could serve as the grouping/breakdown the user needs
- Any columns the notebook queries DON'T use that could be useful

**Only after inspecting all candidate table schemas**, proceed to the analysis template below.

---

## Required Analysis Template

**For EACH candidate data source, document:**

### Source Analysis

```
CANDIDATE: [Dashboard/Notebook/Query name]
PATH: [Full path]

DATASET SELECTION (for dashboards with multiple datasets):
- Total datasets in dashboard: [count]
- Dataset chosen: [dataset name/id]
- Why this dataset: [which widget uses it, or why it matches the question]
- Other datasets considered: [list any others that looked relevant]

PRIMARY TABLE: [schema.table_name from FROM clause]
   (You should already have this table's full schema from Step 0 above.
    If not, call `readTable` now before proceeding.)

JOIN OPERATIONS:
- [table1] INNER JOIN [table2] ON [key] (if applicable)
- [Additional joins...]

GROUPING: [GROUP BY columns - determines what breakdown is available]

AGGREGATION: [COUNT/SUM/AVG and what it's measuring]
⚠️ Note if this uses COLLECT_SET, window functions, or other complex aggregation

KEY FILTERS (WHERE clause):
- [Filter 1: what it does]
- [Filter 2: what it does]
- [...]

TIME WINDOW: [Date filtering logic if applicable]
⚠️ Note if this is a rolling window (T7D = trailing 7 days) vs fixed date range

DEDUPLICATION: [DISTINCT, window functions, or how duplicates are handled]
```

### Question Match Assessment

After documenting each source, answer:

1. **Does this source provide what the user asked for?**
   - User asked for: [restate the specific request]
   - This source provides: [what it actually gives you]
   - Match: [YES / PARTIAL / NO] - [explanation]
   - ⚠️ **Before marking NO**: If you're about to dismiss a candidate because its query doesn't include a column you need, first check whether the **table itself** has that column via `readTable`. Notebooks often use only a fraction of a table's columns for their specific analysis. The table may have exactly what you need even if the notebook's query doesn't use it.

2. **If the question has multiple parts:**
   - Part 1 (e.g., total): [Does this source provide it? YES/NO]
   - Part 2 (e.g., breakdown): [Does this source provide it? YES/NO]
   - Note: If dashboard has SEPARATE queries for related metrics, use the RIGHT one for each part

---

## Semantic Differences Checklist

When comparing candidates, catalog **every semantic difference**:

| Difference Type             | Candidate A | Candidate B | Impact                                                   |
| --------------------------- | ----------- | ----------- | -------------------------------------------------------- |
| **Filtering conditions**    |             |             | Different WHERE clauses, date ranges, NULL handling      |
| **Grouping & aggregation**  |             |             | Different GROUP BY columns, aggregation functions        |
| **Column selection**        |             |             | Different columns selected, calculated columns           |
| **Joins**                   |             |             | Different tables joined, join types, join conditions     |
| **Semantic interpretation** |             |             | Different sign conventions, definitions of "top/largest" |
| **Null/zero handling**      |             |             | Different inclusion/exclusion of rows with 0 or NULL     |

---

## ⚠️ Multi-Table Warning

**IMPORTANT**: Many questions require data from MULTIPLE tables joined together. Do NOT default to single-table queries.

**Red flag**: If you're recommending a single table but dashboard/notebook queries consistently use JOINs, you're probably missing something important.

**Common joins you should NOT remove**:

- Workspace metadata (account type, customer name, filters)
- Date/time dimensions
- Reference data (categories, mappings)

---

## ⚠️ Scope-Defining String Predicates Are Not Substitutable for Categorical Columns

When a canonical pattern uses a string-pattern predicate (`LIKE`, `NOT LIKE`, `RLIKE`, `regexp_like`) on a name-like column to define scope, do not substitute it with what looks like an equivalent categorical-column predicate on the same table (`<category_col> IN/NOT IN (...)` or `<category_col> = '<value>'`).

**Why they are not equivalent**: A string-pattern predicate on a name-like column is typically authored after a manual audit of edge cases. The categorical column captures the "easy" majority via a tagging pipeline; the string-pattern predicate catches the long tail the pipeline misses:

- Newly-created entities not yet tagged by the pipeline (propagation lag).
- Entities whose categorical attribute has been overridden for special reasons (testing, internal use, custom partner setup).
- Entities whose names match the pattern but whose categorical attribute belongs to a different bucket (partners, resellers, name collisions).

Replacing the string predicate with the categorical column silently re-includes that long tail. The result is usually a small but non-trivial inflation (typically 1–5%) that is invisible without a side-by-side count.

**Test before substituting** (mandatory if you intend to substitute):

```sql
SELECT
  SUM(CASE WHEN <canonical_string_predicate> THEN 1 ELSE 0 END)        AS via_pattern,
  SUM(CASE WHEN <proposed_categorical_predicate> THEN 1 ELSE 0 END)    AS via_category,
  COUNT(*)                                                              AS total
FROM <source_table>
WHERE <date_filter_scoping_to_recent_slice>
```

If the two counts differ by more than ~1% of `total`, the predicates are NOT equivalent — keep the canonical predicate. Record the counts in a `decision-filters` observation (see pattern-application.md) so the substitution is traceable.

**Default rule**: If you found the canonical string-pattern predicate in a high-quality source (notebook in `/Shared/`, dashboard with viewer count, etc.), preserve it verbatim in the adapted query. Use the categorical column only as an _additional_ filter, not as a replacement.

---

## Comparison Checklist

After analyzing all candidates, compare:

| Aspect             | Candidate A | Candidate B | Candidate C |
| ------------------ | ----------- | ----------- | ----------- |
| Primary table      |             |             |             |
| Uses JOINs?        |             |             |             |
| Grouping column    |             |             |             |
| Has deduplication? |             |             |             |
| Key filters        |             |             |             |
| Matches question?  |             |             |             |

**Key questions:**

- Do they use the same table? If not, why?
- Do they apply the same filters? If not, which is more appropriate?
- Do they handle deduplication the same way?
- Which one better matches what the user actually asked?

---

## Validation (MANDATORY)

⚠️ **Before committing to an approach, you MUST validate it.**

### ⚠️ CRITICAL: Try to FALSIFY, Not Confirm

**Confirmation bias** is the enemy of good validation. Don't just look for evidence that supports your assumption - actively try to DISPROVE it.

- ❌ **Bad**: "I assume X. I found evidence supporting X. Validated!"
- ✅ **Good**: "I assume X. What would prove X wrong? Let me look for that. I couldn't find disconfirming evidence. Validated."

**Ask**: "What evidence would prove this assumption WRONG?" Then actively search for that evidence.

### ⚠️ CRITICAL: Avoid Circular Validation

**Circular validation is NOT validation.** If you assumed something because of reasoning X, you cannot "validate" it by restating reasoning X. That's just convincing yourself.

❌ **INVALID (circular)**:

- Assumption: "These two metrics are related"
- Reasoning: "They're in the same dashboard, so they probably use consistent methodology"
- "Validation": "Validated - they're in the same dashboard so they should be consistent"
- **This is the SAME logic restated!** It proves nothing.

✅ **VALID (external evidence)**:

- Assumption: "These two metrics are related"
- Validation: "Examined both queries. Query A uses table X with filter F. Query B uses table Y with different filter G. **Actually different methodologies.** Assumption FALSE."

**Rule**: Validation requires evidence EXTERNAL to your reasoning - query results, schema inspection, documentation, or observed data. Not re-explaining why your assumption "makes sense."

### ⚠️ Structural vs Computational Validation

| Type              | What it proves                                                         |
| ----------------- | ---------------------------------------------------------------------- |
| **Structural**    | Data EXISTS (table has column, query returns rows)                     |
| **Computational** | Relationship HOLDS (your assumption about how data relates is correct) |

**CRITICAL**: If your assumption is about a RELATIONSHIP between data points, you MUST test that relationship with actual queries.

❌ **WRONG**:

- Assumption: "These two pieces of data are related in a specific way"
- Validation: "Query has both columns" ← Only proves they EXIST, not how they relate!

✅ **RIGHT**:

- Assumption: "These two pieces of data are related in a specific way"
- Validation: Run queries that TEST the relationship. Compare actual results. Does the relationship hold?

### Step 1: Execute a Test Query

Use `getSqlSample` or `executeCode` to run your intended query.

#### ⚠️ CRITICAL: Add Date Scoping for Performance

**Before running ANY query** (test or validation), add date filters to the **innermost CTE or subquery** to limit data scanned. Without this, queries can take 5+ minutes or timeout.

**Example** - If the user asks about Jan 15th 2026:

```sql
-- ❌ BAD: No date filter - scans ALL data
WITH daily_data AS (
  SELECT ... FROM main.some_table
  WHERE some_filter = 'value'
)

-- ✅ GOOD: Date filter in innermost CTE
WITH daily_data AS (
  SELECT ... FROM main.some_table
  WHERE some_filter = 'value'
    AND _event_time >= '2025-12-15'   -- ~1 month buffer before target
    AND _event_time < '2026-01-16'    -- day after target
)
```

**Rules**:

- Add date filter to the innermost table scan (not just the outer query)
- Use 2-4 weeks buffer before the target date (rolling window queries need history)
- Use `executeCode` with `timeout: 5` (minutes) to catch slow queries early
- If a query times out, it likely needs better date scoping

```sql
-- Run the pattern you're planning to use (WITH date scoping)
SELECT ... FROM ... WHERE ... GROUP BY ... LIMIT 100
```

### Step 2: Validate Results (MANDATORY)

⚠️ **Before finalizing your decision, you MUST execute the selected SQL query and validate the results.**

**VALIDATION CHECKLIST** (all must pass):

- [ ] Query executed without errors: ✓/✗
- [ ] Result is not empty/null: ✓/✗
- [ ] Result shape is correct (expected columns): ✓/✗
- [ ] Values are reasonable (in expected ranges): ✓/✗
- [ ] No unexpected NULLs where you expected data: ✓/✗
- [ ] All expected categories present (if expecting breakdown): ✓/✗

**Record this checklist in your working memory observations.** If any item is ✗, investigate before proceeding.

### Step 3: Cross-Validate Multi-Part Questions

If the question has multiple parts (e.g., "X and also Y"):

1. **Run queries for EACH part** separately
2. **Compare results**:
   - Do the results make sense together?
   - Are they using consistent methodology (same filters, time windows, etc.)?
   - If results seem contradictory, investigate why

⚠️ **Common trap**: Assuming you can derive one answer from another. If the dashboard has separate queries for related metrics, there's usually a reason - they may use different methodologies.

---

## Red Flags

Stop and investigate if you see:

- ❌ **Unexpected relationships between metrics**: If two numbers should relate but don't, understand why before proceeding
- ❌ **Very different row counts** between candidates for the same question
- ❌ **Missing expected categories** in your results
- ❌ **One candidate uses JOINs, another doesn't**: The JOIN probably matters
- ❌ **Filters differ significantly**: Understand which is correct for the user's question

---

## Decision Documentation

After comparison and validation, document your choice:

```
SELECTED APPROACH: [Candidate name]

REASONING:
1. [Why this candidate over others]
2. [How it matches the user's question]
3. [What validation confirmed]

QUERY TO USE:
[The actual SQL query you'll use]

ASSUMPTIONS VALIDATED:
- [Assumption 1]: [How you validated it]
- [Assumption 2]: [How you validated it]

CAVEATS FOR USER (if any):
- [e.g., "Results may differ from other reports due to X"]
```

---

## After Reconciliation

Once you've selected and validated an approach:

1. **Update working memory**: Mark the reconciliation plan item as completed
2. **Record the decision**: Add observations about why you chose this approach
3. **⚠️ CHECK: Are all assumptions tested?** Before proceeding to pattern-application, verify that assumptions affecting your query approach have been tested. If not, test them NOW — before applying patterns.
4. **⚠️ CHECK: Task ordering correct?** If your plan has tasks like "Get X count" or "Calculate Y" — these are APPLY tasks. They MUST come AFTER "Load pattern-application", not before. Restructure your plan if needed.
5. **Proceed to pattern-application**: Your plan should already have the "apply-pattern" task (added when you loaded this skill). Load the pattern-application skill and follow its workflow.

⚠️ **CRITICAL: Do NOT mark answer-producing tasks as complete yet!**

Even if you ran queries during reconciliation, those were validation queries to test your approach. Your "Get X" or "Calculate Y" tasks should remain pending until AFTER you load pattern-application and apply the exact dashboard pattern. Completing them early with validation results leads to wrong answers.

### ⚠️ What You Have vs What You Need

After reconciliation, you have:

- ✅ Selected the right SOURCE (dashboard, dataset)
- ✅ Confidence that source answers the user's question
- ✅ Test query results showing the source works

After reconciliation, you still need:

- ❌ **Assumptions tested** — Test assumptions BEFORE pattern-application (status should be "confirmed" or "disproved", not "untested")
- ❌ The EXACT query structure for final output (pattern-application teaches this)
- ❌ **Dashboard patterns for ALL parts of multi-part questions** — Find patterns for each part, not just one

### ⚠️ Two Types of Queries (Don't Confuse Them)

| Query Type                    | Purpose                   | Use Results As Final Answer?          |
| ----------------------------- | ------------------------- | ------------------------------------- |
| **Validation queries**        | Test if assumptions hold  | ❌ NO — exploratory only              |
| **Dashboard pattern queries** | Get authoritative answers | ✅ YES — these are your final answers |

**Common mistake:** Running a validation query and using that result as the final answer. Validation queries inform your approach; final answers must come from dashboard patterns.

**If an assumption is FALSE, it may change which queries you need.** That's why you must test assumptions BEFORE committing to final queries, not after.

**"I tested a query" ≠ "I know the right query structure."** Test queries are exploratory. Pattern-application ensures your final queries use the proven structure from the source.

---

## Quick Reference

### When to Use This Skill

- Found 2+ promising dashboards/sources
- Need to choose between different approaches
- Question has multiple parts that might need different queries
- Unsure if a pattern actually answers the user's question

### Key Actions

1. Document each candidate using the template
2. Compare side-by-side
3. Validate by running queries
4. Document your decision with reasoning

### Common Mistakes to Avoid

- ❌ Picking the first working pattern without comparing
- ❌ Assuming one metric can be derived from another without verification
- ❌ Not validating by actually running the query
- ❌ Ignoring differences in filters or JOINs between candidates
````

### `pattern-application.md`

Webpack chunk `25410.<hash>.chunk.js`, module `725410`. Gated on `NOT enableAssetDiscoverySubagents`.

````markdown
# Pattern Application: Copy, Run, Validate, Then Adapt

## When to Load This Skill

Load this skill **after data-reconciliation** when you have a SELECTED_APPROACH with a specific query/pattern to use.

**Typical trigger**: A plan item like "Apply selected pattern with executeCode"

---

## ⚠️ Why This Skill Exists (Even If You Already Ran Queries)

You may have run test queries during reconciliation. **That was for validating SOURCE SELECTION, not for learning query structure.**

| Phase                   | Query Purpose                                                    |
| ----------------------- | ---------------------------------------------------------------- |
| **Reconciliation**      | "Does this source have the data I need?" (exploratory)           |
| **Pattern-application** | "What EXACT structure should my final queries use?" (definitive) |

**Common mistake**: "I already ran some queries, so I know how to write the final ones."

**Reality**: Your exploratory queries may differ structurally from the source pattern. The source pattern exists because it handles edge cases correctly. This skill ensures you USE that structure, not your improvisation.

---

## Core Principle

**Copy the pattern EXACTLY, run it UNCHANGED, validate the output, THEN make minimal adaptations.**

The most common failure mode is finding the right pattern but then "simplifying" or "rewriting" it. This skill enforces the correct workflow.

---

## Precision Guidelines

1. **Be Precise**: Pay close attention to the exact details of the user's question and the database schema. Small details matter.

2. **Verify Semantic Meaning**: Pay close attention to business-specific terms. Use any available context (column names, dashboard descriptions, sample data) to ensure your choice accurately reflects the user's intent.

3. **Avoid Unwarranted Assumptions**: Generate the simplest query that directly answers the question. Do not add extra filters unless explicitly requested or clearly required by the source pattern.

---

## Required Workflow

### Step 1: Copy Verbatim

Copy the ENTIRE query/pattern from your SELECTED_APPROACH exactly as written:

- ALL CTEs (Common Table Expressions)
- ALL JOINs with exact join conditions
- ALL WHERE clauses and filters
- ALL GROUP BY columns
- ALL aggregation functions (don't change COLLECT_SET to COUNT DISTINCT, etc.)

**Do NOT:**

- Remove "complex" parts you don't think you need
- Simplify aggregation logic
- Replace self-joins with simpler filters
- "Clean up" the query

#### ⚠️ Multi-CTE Exclusion Logic Must Be Copied In Full

When a source pattern includes CTEs that exclude certain account types, trial users, flagged entities, or test workspaces, you MUST copy ALL exclusion CTEs verbatim.

**Explicitly prohibited simplifications:**

- (a) **Replacing a multi-CTE exclusion with a single WHERE clause filter** — a single filter cannot replicate the set-subtraction logic that multi-CTE exclusions implement
- (b) **Omitting a secondary exclusion CTE** — production patterns often have two exclusion stages because the primary exclusion signal (e.g., a flag column) is incomplete for recently created entities that haven't propagated through the data pipeline yet; the secondary CTE covers those edge cases using a hardcoded list or alternative signal
- (c) **Consolidating two parallel exclusion paths into one** — if a pattern excludes via both a join and a WHERE NOT IN clause, both paths are intentional and handle different cases

**Why multi-step exclusion structure exists**: The primary exclusion table or column may have propagation lag. A newly created trial account may not yet appear in the `is_trial_account` flag table but IS included in a fallback hardcoded exclusion list. Removing the secondary CTE silently includes those accounts, inflating results with noise that is invisible until carefully audited.

**Rule**: If the pattern has N exclusion CTEs, your adapted query must also have N exclusion CTEs with identical logic.

### Step 2: Run With Date Scoping

Execute the copied query with `executeCode`, but **add date scoping first** to prevent timeouts:

```typescript
executeCode({
  language: 'sql',
  code: '<query with date scoping added>',
  timeout: 300, // 5 minutes max
});
```

⚠️ **Why date scoping is required (not optional)**:

Dashboard queries are designed for batch runs. Running them ad-hoc without date scoping can take **10+ minutes and timeout**. Date scoping is the ONE modification you make before the first run because:

- It's a **performance optimization**, not a logic change
- It produces **identical results** for your target date
- Without it, **the task may fail entirely**

**If a query takes more than 5 minutes, something is likely wrong.** Only increase the timeout if you have specific knowledge the query legitimately needs more time (e.g., ML training, large exports).

**How to add date scoping** (add to innermost CTE/FROM clause):

```sql
-- Add these filters to the innermost table scan:
-- Example: if target date is 2025-03-15 and query uses T7D rolling window:
AND _event_time >= '2025-02-15'  -- ~1 month before target
AND _event_time < '2025-03-16'   -- day after target
```

**Rules for buffer size:**

- T7D (trailing 7 days) → Include ~1 month before target date
- T30D → Include ~3 months before target date
- No rolling window → Include ~1 week buffer
- **Err on the side of MORE data** — scanning an extra month is fine; scanning years is not

**Why run first?** This validates that the pattern works and shows you what it produces. If you skip this step and go straight to other adaptations, you lose the ability to compare your changes against the original behavior.

### Step 3: Validate Output

Check the results:

- Does it produce the type of data you expect?
- What columns and values does it return?
- What date range does it cover?
- Are the numbers in a reasonable range?

**Document in working memory:**

```
updateWorkingMemory({
  observations: [
    "Original pattern produces X rows with columns [a, b, c]",
    "Date range is X to Y",
    "Values are in expected range"
  ]
})
```

### Step 4: Adapt Minimally (ONLY if needed)

#### ⚠️ Required Before Adapting: Record `decision-filters`

Before changing anything in the canonical pattern, record a `decision-filters` observation that enumerates EVERY filter in the pattern and marks each as `PRESERVED` or `ADAPTED <reason>`. Include:

- Every `WHERE` predicate and `AND` clause
- Every CTE that performs exclusion (`WHERE NOT IN`, anti-join, `EXCEPT`)
- Every `JOIN` that filters by category (e.g., `INNER JOIN account_metadata ON ... AND account_metadata.account_type != 'internal'`)
- Every account-name / customer-name `LIKE` or `NOT LIKE` predicate (these are scope-defining filters authored after manual edge-case audit, NOT noise)

Example:

```typescript
updateWorkingMemory({
  createObservations: [
    {
      id: 'decision-filters',
      observation: [
        'Canonical pattern (notebook_X cell_3) has 4 filter layers:',
        '  1. WHERE event_date BETWEEN :start AND :end → ADAPTED (date literals updated to 2025-11-01)',
        '  2. CTE excluded_trial_accounts (account_type=trial) → PRESERVED',
        '  3. CTE excluded_known_internal (hardcoded list of 12 ws_ids) → PRESERVED',
        '  4. WHERE entity.<name_col> NOT LIKE %<pattern_a>% AND NOT LIKE %<pattern_b>% → PRESERVED',
      ].join('\n'),
    },
  ],
});
```

**Then re-read the SQL you are about to submit against this observation.** If any filter you marked `PRESERVED` is missing from the SQL, STOP and add it. If you replaced a `PRESERVED` predicate with a different column that you believe is equivalent, that is an `ADAPTED` (with reason), not a `PRESERVED` — and substituting a string-pattern predicate on a name-like column (e.g. `<name_col> NOT LIKE '%pattern%'`) with a categorical-column predicate (e.g. `<category_col> NOT IN (...)`) is almost never a valid adaptation, because the categorical column captures only the "easy" cases and the string-pattern predicate was authored to catch the long tail. When in doubt, run a count comparison query before substituting (see data-reconciliation, "Scope-Defining String Predicates Are Not Substitutable for Categorical Columns").

---

**Minimal adaptation means changing VALUES, not STRUCTURE:**

✅ **OK to change:**

- Date literals: `'2025-10-26'` → `'2025-11-01'`
- Filter values: `status = 'active'` → `status = 'pending'`
- Add a final WHERE to filter results: `WHERE event_date = '2025-11-01'`
- Limit rows: `LIMIT 100`

❌ **NOT OK (you're rewriting, not adapting):**

- Remove CTEs
- Change aggregation functions
- Replace joins with simpler filters
- Remove window functions
- "Simplify" array operations

**Note**: Date scoping (added in Step 2) is NOT rewriting — it's a performance optimization that preserves exact output.

---

### Step 5: Validate Structure Preservation

Compare your adapted query to the original pattern:

**Structural validation checklist:**

1. Does your query have the SAME CTEs as the original?
2. Does your query use the SAME aggregation functions as the original?
3. Does your query have the SAME joins and join conditions?
4. Did you ONLY change values (dates, filter literals), not logic?

**If you removed or changed any structural element**: You're rewriting, not adapting. Go back to Step 1.

---

## Pattern Fidelity Checklist

Before finalizing, verify:

| Check                                           | Status |
| ----------------------------------------------- | ------ |
| Copied pattern verbatim (no structural changes) | ✓/✗    |
| Ran original pattern first                      | ✓/✗    |
| Only changed date/filter VALUES (not structure) | ✓/✗    |
| Validated output matches expected shape         | ✓/✗    |

**If any ✗**: You're rewriting, not adapting. Go back to Step 1.

---

## Common Failure: "I Can Write This Cleaner"

**Scenario**: You see a pattern with multiple CTEs, self-joins, and COLLECT_SET operations. You think "I can just use COUNT DISTINCT with a date filter - much simpler!"

**Why this fails**: The pattern author used that approach because:

- There are edge cases you don't know about
- The T7D (trailing 7-day) calculation has specific semantics
- Deduplication requires the multi-step approach
- The simpler version may give the same number TODAY but diverge on edge cases

**Rule**: If the pattern has been in production (high viewer count, in `/Shared/`), its complexity is justified. Don't second-guess it.

---

## Notebook-Sourced Patterns

When the source pattern comes from a **notebook** rather than a dashboard, apply the same copy-run-validate-adapt workflow with these adjustments:

### Key Differences from Dashboard Patterns

1. **Multi-cell pipelines**: Notebooks may build up to a final query across multiple cells (e.g., temp views in earlier cells, final SELECT in a later cell). Copy the **full pipeline**, not just the last cell.

2. **No widget-to-dataset mapping**: Unlike dashboards (which have named datasets), notebooks have a sequence of cells. Identify the cell(s) that produce the metric the user needs by reading all cells and tracing the data flow.

3. **Mixed language content**: Notebooks may contain Python/Spark code alongside SQL. If the pattern uses `spark.sql()` or `%sql` magic, extract the SQL statements. If the logic is in PySpark/DataFrame API, preserve that structure rather than converting to SQL.

4. **Less curation**: Notebook patterns may be less polished than production dashboard queries. Apply more validation (Step 3) to confirm the pattern produces reasonable results before adapting.

5. **Granularity matters**: The notebook's table and column choices encode the author's understanding of the right level of detail. A notebook may use a specific column that provides finer-grained categorization than a more obvious alternative. Don't substitute a different table or column that seems simpler — the granularity difference can change the answer significantly.

### Workflow Adjustments

- **Step 1 (Copy)**: Copy all cells that contribute to the final result, preserving their execution order. Read ALL cells — the key query may not be in the first or last cell.
- **Step 2 (Run)**: Execute cells in order, creating any temp views or DataFrames needed by later cells
- **Step 3 (Validate)**: Pay extra attention — notebook patterns may have been one-off analyses with less testing than dashboard queries
- **Steps 4-5**: Same as dashboard patterns — adapt minimally, validate structure

---

## Multi-Part Questions: Find Patterns for ALL Parts

For questions with multiple parts, find dashboard patterns for EACH part.

**Wrong approach:**

1. Find dashboard pattern for one part → use it ✅
2. For other parts, write your own query → ❌ WRONG

**Correct approach:**

1. Find dashboard pattern for each part → use them ✅

**Key insight**: Dashboards usually have patterns for related metrics. If you found a pattern for one part, look for patterns for the other parts too.

**Never mix:**

- Dashboard patterns for some parts
- Your own exploratory/validation queries for other parts

---

## Common Failure: Using Validation Results as Final Answers

**Scenario**: During reconciliation/validation, you ran a query to test an assumption. That query returned a number. You use that number as your final answer.

**Why this fails**: Validation queries test ASSUMPTIONS, not produce ANSWERS. Validation queries and dashboard patterns may use different methodologies and produce different results.

**Rule**: Validation query results inform your APPROACH. Final answers must come from DASHBOARD PATTERNS.

---

## Example

**SELECTED_APPROACH from reconciliation:**

```sql
WITH daily_active AS (
  SELECT DATE_TRUNC('DAY', _event_time) as event_date, workspace_id
  FROM table_a JOIN table_b ON ...
  WHERE complex_filters
  GROUP BY ALL
),
customer_sets AS (
  SELECT event_date, COLLECT_SET(workspace_id) as ws_set
  FROM daily_active d
  LEFT JOIN daily_active daw ON daw.event_date BETWEEN d.event_date - INTERVAL 6 DAY AND d.event_date
  GROUP BY d.event_date
)
SELECT event_date, SIZE(ws_set) as count FROM customer_sets
```

**Step 1 - Copy verbatim**: ✅ Copy the exact query above

**Step 2 - Run unchanged**: ✅ `executeCode` with exact query

**Step 3 - Validate**: ✅ See it returns event_date and count columns, covers last 90 days

**Step 4 - Adapt minimally**: ✅ Add `WHERE event_date = '2025-11-01'` at the end

**Step 5 - Validate adapted**: ✅ Get single row for Nov 1st

**NOT this:**

```sql
-- ❌ WRONG - this is rewriting, not adapting
SELECT COUNT(DISTINCT workspace_id)
FROM table_a JOIN table_b ON ...
WHERE _event_time BETWEEN '2025-10-26' AND '2025-11-01'
```

---

## Output Format

After completing this workflow, update working memory:

```typescript
updateWorkingMemory({
  thoughts: 'Applied pattern following copy-run-validate-adapt workflow',
  updates: {
    plan: [
      // Mark the apply step as completed
      {
        id: 'apply',
        description: 'Apply selected pattern',
        status: 'completed',
        result: 'Copied pattern verbatim, ran unchanged, then added date filter',
      },
    ],
    observations: ['Pattern produced expected output shape', 'Adapted version returns X for the requested date'],
  },
});
```
````

### `query-execution.md`

Webpack chunk `13444.<hash>.chunk.js`, module `513444`. Gated on `NOT enableAssetDiscoverySubagents`.

````markdown
# Query Execution: Two-Phase Strategy for Large Tables

## Applicability Check

You loaded this file because the Step 5 size check flagged a large historical source table or the user asked for a multi-period trend/visualization. If neither actually holds in retrospect, stop here — run the query normally per `pattern-application.md`; splitting a fast query into two phases just adds latency.

---

## ⚠️ Required Before EVERY `executeCode` Against the Flagged Source: Record `decision-bounding`

Applies to validation queries (Step 6), the final answer query (Step 8), Phase 2 historical extensions, schema checks — every executeCode call. Skipping it on a "quick" validation query is the most frequent way the entire time budget gets spent on a single hung scan.

Each `decision-bounding-<id>` observation MUST contain ALL six fields below. The `Predicate strategy` and `Cost reasoning` fields are required, not optional decoration — they are the fields that catch the dominant failure mode (date-scoped query that still hangs because of a `LIKE '%pattern%'` predicate or a wide shuffle). **Then re-read the SQL you are about to submit against the observation.** If anything you said you would do is missing from the SQL, STOP and add it.

```typescript
updateWorkingMemory({
  createObservations: [
    {
      id: 'decision-bounding-validate-eventnames', // unique per executeCode
      observation: [
        'Source: main.<flagged_large_table>', // REQUIRED
        'Cited size obs: obs-N (e.g. table is massive, billions of rows, multi-year partition span)', // REQUIRED
        'Partition column: <date_col> (DATE / TIMESTAMP)', // REQUIRED
        'Bounds applied: <date_col> = "2025-09-15" (single day)', // REQUIRED
        'Predicate strategy: tags["eventName"] IN ("eventA","eventB") from obs-M — NOT LIKE %name%', // REQUIRED — see rules below
        'Aggregation strategy: COUNT(*) — no DISTINCT or wide GROUP BY needed for this validation goal', // REQUIRED — see rules below
        'Cost reasoning: validation only needs to confirm event names exist; one day with IN proves it', // REQUIRED — one sentence
      ].join('\n'),
    },
  ],
});
```

**Rules for the `Predicate strategy` field:**

- If a previous observation enumerated the relevant values (e.g. obs says `eventName in ('addWidgetFromMenu', 'widgetsAutoCreated')`), the predicate MUST use `IN ('addWidgetFromMenu','widgetsAutoCreated')` and cite that obs. Substring `LIKE '%widget%'` on a map-typed or unindexed column scans the entire date-bounded slice and is the most common cause of validation timeouts.
- If you genuinely do not yet know the values, use a single-day `GROUP BY` to discover them — that becomes a separate, cheaper executeCode with its own `decision-bounding` observation, and the next executeCode uses `IN` from the discovered values.

**Rules for the `Aggregation strategy` field:**

- Prefer `COUNT(*)` over `COUNT(DISTINCT high_cardinality_col)` when a row count proves the assumption (`COUNT(DISTINCT)` forces a distributed shuffle; `COUNT(*)` does not).
- Avoid `GROUP BY <map_key>` during validation when a `LIMIT 50` sample of the column values would prove the same point.

### Validation-query date scope: MINIMUM-viable, NOT the user's question period

The most expensive failure mode is treating "scope to the user's requested period" as sufficient discipline for a flagged-large source. A 31-day scan on a 20B-row table is not a validation query — it IS the answer query, and if it times out you've spent the whole budget proving you can read the table.

Validation queries ask "does this column exist?", "does this event name appear?", "does this join key match?" — each is answerable with **one day** of data. Pick the SMALLEST window that proves the assumption (almost always a single day; at most the smallest week that demonstrates a rolling-window property). The `Predicate strategy` and `Aggregation strategy` rules above apply with double force here, since validation is where unbounded scope and expensive predicates compound.

---

## Core Principle: Answer the Specific Question First (final answer query)

**Phase 1 (required, FINAL answer query)**: Run a narrow query scoped to exactly the date or period the user asked about. This should complete in seconds. Phase 1 is NOT a validation query — see the section above for validation discipline.

**Phase 2 (conditional)**: Run the broader historical range only if the user explicitly asked for a trend or multi-period visualization AND Phase 1 left sufficient time budget.

**Rule**: If Phase 1 answers the user's question, stop there. Do not start Phase 2 if Phase 1 used significant time (more than 2–3 minutes).

---

## Two-Phase Workflow

### Phase 1: Narrow Final-Answer Query (Always Run First)

Scope the query to the specific date or period the user asked about:

```sql
-- Example: user asked about Q3 2025
SELECT ...
FROM large_historical_table
WHERE period_date BETWEEN '2025-07-01' AND '2025-09-30'
  AND _event_time >= '2025-07-01'
  AND _event_time < '2025-10-01'
GROUP BY ...
```

Record a fresh `decision-bounding-phase1` observation per the template above before submitting. Run with `executeCode` and `timeout: 120` (2 minutes). If it returns in under 30 seconds, you have the answer.

---

### Before Running Phase 2: Required Checks

Before launching a Phase 2 historical query, complete ALL three checks. If any check provides a substitute, skip Phase 2 entirely.

#### Check 1: Pre-computed Results in Reference Notebook

**Before running a fresh historical query**, search the loaded reference notebook for cells that already contain historical output:

- DataFrame outputs (`display(df)`) covering multiple time periods
- CSV exports or table outputs with dates and metric values
- Comments like "results as of [date]" with the actual numbers

**Why**: Reference notebooks are often run once as batch jobs on large tables. Re-running the original query live may take 10–30 minutes and exceed the task time budget. The pre-computed output already has the answer.

**How to identify pre-computed results**: Look for notebook cells that display a DataFrame or table with dates and values matching the user's requested historical range.

**If pre-computed results exist**: Record the values from the notebook output and skip Phase 2. Do not re-run the expensive query.

#### Check 2: Phase 1 Completion Time

**Only proceed to Phase 2 if Phase 1 completed in under 2 minutes.**

If Phase 1 took more than 2 minutes, Phase 2 will almost certainly timeout on a larger scan. Deliver the Phase 1 answer with a note that the historical trend requires a longer-running query.

#### Check 3: Date Window Cap

**When the user does not specify a historical time range**, cap Phase 2 to at most 12 months rolling back from the Phase 1 period end date.

```sql
-- Phase 1 period: 2025-10-01 to 2025-12-31
-- Phase 2 window: 12 months back from Phase 1 start = 2024-10-01
WHERE _event_time >= '2024-10-01'   -- 12 months before Phase 1 period start
  AND _event_time < '2026-01-01'    -- end of Phase 1 period
```

**Do NOT** default to an arbitrary fixed start year (e.g., `'2024-01-01'`, `'2020-01-01'`) that would scan years of data. Fixed start years balloon scan size unpredictably as the table grows.

---

### Phase 2: Historical Range (Only If Needed)

Only run if:

1. The user explicitly asked for a trend chart or multi-period comparison, AND
2. Phase 1 completed quickly (under 2 minutes), AND
3. Pre-computed results in the reference notebook do not already provide the historical data

When running Phase 2, always add explicit date bounds — never run without a `WHERE` on the date column. Apply the 12-month cap from Check 3 above:

```sql
SELECT ...
FROM large_historical_table
WHERE _event_time >= '<12 months before Phase 1 period start>'
  AND _event_time < '<end of Phase 1 period>'
GROUP BY period_date
ORDER BY period_date
```

---

## Scope-Limiting Rules

Before running any query against a large historical table:

1. **Identify the date partition column** (`_event_time`, `date`, `period`, etc.)
2. **Add bounds to the innermost scan** — not just the outer SELECT
3. **Never run open-ended date queries** (`WHERE year > 2020` with no upper bound)
4. **Estimate scan size**: If the table has years of data and no date filter, it will timeout

```sql
-- ❌ BAD: No upper bound, scans indefinitely
WHERE _event_time > '2024-01-01'

-- ✅ GOOD: Explicit range, predictable scan
WHERE _event_time >= '2024-01-01' AND _event_time < '2026-01-01'
```

---

## Timeout Budgeting

| Phase                | Timeout Setting         | If It Times Out                                  |
| -------------------- | ----------------------- | ------------------------------------------------ |
| Phase 1 (narrow)     | `timeout: 120` (2 min)  | Reduce scope further; check date column indexing |
| Phase 2 (historical) | `timeout: 600` (10 min) | Skip — deliver Phase 1 answer only               |

**Overall task budget**: If Phase 1 + Phase 2 would exceed 25 minutes total, skip Phase 2 and deliver the narrow answer with a note that the historical trend requires a longer-running query.

---

## Avoiding Double-Execution of Expensive Queries

**Problem**: When a query takes 5+ minutes to run, executing it TWICE consumes 10+ minutes and likely exceeds the session time budget. This happens when the agent:

1. Runs the query in `executeCode` to validate results (~N minutes)
2. Writes the same SQL to `editAsset`
3. Runs `runNotebookCells` on the notebook — which re-executes the SQL (~N more minutes)

**Rule**: For queries that took more than 2 minutes in `executeCode`, do NOT also run them via `runNotebookCells`.

**Preferred pattern for expensive queries**:

- Write the validated SQL directly to the notebook cells using `editAsset` or `addCells`
- The query does NOT need to run again — `executeCode` already confirmed correctness
- The notebook cell contains the query and can be re-run by the user later if needed
- Deliver the results you already have from the `executeCode` validation run

**Only use `runNotebookCells`** when the query is fast (under 2 minutes) and you need to produce formatted notebook output (charts, displays) that requires the Databricks rendering environment.

This preserves the full cell execution record without paying the cost twice.
````
