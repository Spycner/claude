# Genie Code skill: `diagnose-error`

Full content of the Genie Code skill `diagnose-error`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). Genie Code loads these markdown files lazily via the `readSkillFile` tool when its description matches the task at hand. See [genie_code_findings.md](genie_code_findings.md) and [genie_code_payload.md](genie_code_payload.md) for the request envelope and tool schema, and [genie_code_system_prompt.md](genie_code_system_prompt.md) for the system prompt that drives skill selection.

## Registry record

From the Genie Code SkillRegistry definition in the SPA's `19604.5ae31ee5cc.chunk.js` chunk (module `20580`):

```jsonc
{
  "name":        "diagnose-error",
  "description": "REQUIRED for any case where the user is asking help to fix their code. Load this skill FIRST when diagnosing errors i.e, when the user is using /fix, or clicking Diagnose Error or seeking help to fix their errors irrespective of the difficulty of the error. Contains critical verification workflows that prevent incorrect fixes.",
  "enabled":     "()=>(0,W)('databricks.fe.editor.enableDiagnoseErrorSkill', false)" /* feature-flag gate */,
  "files":       [ /* 4 entries — see below */ ]
}
```

**Feature flag**: This skill is hidden from the Skill Registry unless `databricks.fe.editor.enableDiagnoseErrorSkill` is true on the workspace.

## File manifest

Each file lives in its own webpack chunk and is exposed as a raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release — re-derive them from `index.968bbeb5f6.js` before re-extracting. The path Genie Code uses with `readSkillFile` is `skills/diagnose-error/<filename>`.

| File | Chunk id | Module id | Gate |
|---|---|---|---|
| `SKILL.md` | `87295` | `887295` | — |
| `python-debugging.md` | `84703` | `984703` | — |
| `sql-debugging.md` | `76287` | `376287` | — |
| `environment-issues.md` | `90374` | `890374` | — |

## Files

### `SKILL.md`

Webpack chunk `87295.<hash>.chunk.js`, module `887295`.

````markdown
# Diagnose Error Skill

**Sections:** [Core Principles](#core-principles) · [Quick Triage](#quick-triage--required-sub-skill-loading) · [Verification Workflow](#mandatory-verification-workflow) · [Scope](#scope--fix-only-the-focused-cell) · [Verify Before Fixing](#verify-before-fixing) · [Handle Dependencies](#handle-dependencies) · [Distinguish Code vs Data](#distinguish-code-bugs-from-data-issues) · [Fix Completely](#fix-completely-before-running) · [Handle New Errors](#handle-new-errors-after-fixes) · [External Files](#errors-from-external-files) · [Safety-Blocked](#safety-blocked-executions) · [Anti-Patterns](#anti-patterns)

## Core Principles

1. **Verify Before and After** — Confirm state; don't assume operations succeeded
2. **Understand Dependencies** — Check what cells/queries need to run first
3. **Validate Against Reality** — Use tools to check schemas, variables, data before fixing
4. **Code-First** — Attempt a code-level fix or workaround before concluding the issue requires infrastructure changes. See [`environment-issues.md`](environment-issues.md) for the decision framework
5. **Keep Fixes Minimal** — Don't add unnecessary code, comments, or explanations to cells; correct only the problematic code (don't comment it out or delete it)
6. **Preserve User Intent** — Don't substitute the user's intended libraries, modules, or patterns with alternatives; if you can't fix their approach, ask them
7. **Fix Only the Focused Cell** — Your context identifies a "currently focused cell" — only modify that cell. Other cells with errors are out of scope unless modifying them is strictly required to fix the focused cell. Do not batch-fix multiple errors in one turn
8. **Acting** — Diagnosis alone does not complete the task. Once you have identified the root cause, follow through with a tool call to fix the code. Stating the diagnosis in prose is not completing the task.

---

## Quick Triage — REQUIRED Sub-Skill Loading

**Before taking any action** (editing, running, or responding), load the matching sub-skill below. This is required regardless of how simple the error appears — sub-skills contain verification workflows that prevent incorrect fixes even for "obvious" cases.

After loading the sub-skill, immediately proceed to apply its guidance. Loading a skill file is preparation, not completion. Your next action after loading must be step 1 of the relevant workflow — not an explanation of the workflow.

| Error Pattern           | Load (REQUIRED)                                                             |
| ----------------------- | --------------------------------------------------------------------------- |
| Python exception        | [`python-debugging.md`](python-debugging.md)                                |
| SQL error               | [`sql-debugging.md`](sql-debugging.md)                                      |
| Permission/path/catalog | Language guide first, then [`environment-issues.md`](environment-issues.md) |

For mixed issues (e.g., SQL permission errors), load the language guide first.

---

## MANDATORY: Verification Workflow

After updating code to fix an error, you MUST complete ALL of these steps in order before your turn ends. Stopping after step 1 is an incomplete fix.

**Before fixing:** Read current state to check for pending edits. Users may have attempted fixes — incorporate their changes rather than overwriting.

1. **Update** — Apply the fix using the update tool for your context
2. **Verify persistence** — Re-read the cell/query immediately. The tool may report success but the change may not apply. Compare the returned content against what you intended to write. If the content still shows the old code:
   - Do NOT retry the same update blindly
   - Retry once using a fresh read to get the current cell ID
   - If it still fails after 2 attempts, paste the corrected code in your response so the user can apply it manually, and explain that the edit could not be applied
3. **Execute** — Run the fixed cell using the ID from the re-read result. IDs change after updates — never use the pre-update ID
4. **Check resolution** — Read the execution result. If the original error is gone, the fix is complete. If a NEW error appears, analyze it as a separate issue — do not abandon the session

You are not done until you have confirmed execution. An applied-but-unrun fix is an incomplete fix.

**For multi-stage operations:** Errors may cascade downstream — verify each stage completes before proceeding to the next.

**If the user declines a run request:** Tell them explicitly — "I cannot confirm the fix works until the cell is executed. Please run the cell and share any errors that appear."

**For function/class definitions:** After updating a definition, re-run that cell BEFORE running cells that call it. The old definition stays in memory until re-executed.

**After destructive operations:** Verify completion before creating replacements or dependent objects.

---

## Scope — Fix Only the Focused Cell

Your context identifies a **currently focused cell** — that is the only cell you are allowed to fix. Other cells may also show errors; ignore them. The user clicked "Diagnose error" on one specific cell and expects only that cell to change.

**You MAY:**

- Edit the focused cell to fix its error
- Run prerequisite cells if the focused cell depends on them (do NOT edit those prerequisite cells unless they directly cause the focused cell's error)
- Fix an upstream cell if it has a genuine bug that directly causes the focused cell to fail (a bug is different from "needs to be run first")

**You MAY NOT:**

- Edit cells other than the focused cell for reasons unrelated to the focused cell's error
- Fix unrelated errors you notice in other cells — note them to the user but don't fix them
- Add improvements, refactoring, or style changes beyond the error fix

**Running is not modifying.** You may RUN any cell needed as a prerequisite. You may only MODIFY the focused cell (unless a different cell is the direct root cause).

**When the root cause is upstream:** If the focused cell's error is caused by a bug in a different cell, either (a) fix the focused cell to handle the upstream issue defensively if that preserves intent, or (b) explain clearly which cell needs to change and what the change is, then ask the user for permission to edit it. Do not simply report the root cause and stop — always offer an actionable path.

---

## Verify Before Fixing

These are not optional background checks — perform them with tool calls before writing any code fix.

- **Schema/column/field errors**: Verify the referenced object's structure before renaming fields — check ALL occurrences of that name throughout the cell, not just the reported line
- **Variable/name errors**: Check what is actually defined in the current session — names may not exist if the session was restarted or upstream cells were not run. Verify the object's type and value, not just whether it exists
- **Type/cast errors**: Sample actual data values — schema shows expected type but data may contain malformed values (empty strings, nulls, mixed types)
- **Path/file errors**: Verify the path actually exists before changing code to point at it
- **Cell content**: Re-read the cell — content may have changed since the error was reported (user may have made edits)
- **Error messages**: Read the COMPLETE error message — it often contains the expected format, schema hints, or the exact suggested fix
- **Input values**: Check if values are actual data vs placeholders or defaults (e.g., `'your_table_name'`, `???`, `<value>`) — replace with actual values from context before applying any fix

Do not fix based on assumptions about any of the above. Use tools to confirm first. Check working examples in the same notebook for syntax patterns when available.

**For complex errors:** Test components in isolation to identify which part is failing. Unwrap nested errors to find the root cause.

---

## Handle Dependencies

Some errors are NOT code bugs — they are execution order issues. Check before modifying.

1. Identify the cell that defines the missing object (variable, table, view, import)
2. Trace that cell's own dependencies recursively — it may depend on other cells that also need to run
3. Run all prerequisite cells in dependency order, then re-run the erroring cell
4. Do NOT redefine the missing object inside the erroring cell unless it should genuinely be defined there

**If the fix is simply "run another cell first"**: Execute that cell, then re-run the erroring cell. Prefer not to modify the erroring cell in this case.

**When tracing variable/object issues:** Check ALL cells that modify that object, not just the failing cell — the value may have been overwritten upstream.

See the loaded language guide for specific dependency patterns (Python NameError chains, SQL temp views, import errors).

After running prerequisites, immediately re-run the erroring cell to verify.

---

## Distinguish Code Bugs from Data Issues

Before fixing code, determine if the error is caused by:

- **Code bug**: Logic error, syntax error, wrong API usage → fix the code
- **Invalid input data**: Missing values, wrong format, out-of-range → explain what valid input looks like
- **Test vs implementation**: If test fails, determine whether the test expectation or the implementation is wrong

Don't fix code to work around invalid data — address the data issue directly.

---

## Fix Completely Before Running

Before making any update call, complete this checklist:

- [ ] Read the ENTIRE error message — not just the first line
- [ ] Identify ALL distinct errors mentioned (there may be multiple)
- [ ] For syntax errors: scan the entire cell for OTHER syntax issues, not just the reported line
- [ ] For name/reference errors: check ALL references to that identifier throughout the cell, not just the one in the error
- [ ] For type errors: verify ALL type conversions and comparisons in the cell, not just the reported one
- [ ] Before fixing: explicitly state what the proximate error is AND what the root cause is — they are often different. Fix the root cause, not just the symptom
- [ ] Before removing or renaming any column, variable, or function: search for ALL downstream references to that element in the same cell and include every occurrence in the fix
- [ ] Draft the complete fix covering ALL identified issues
- [ ] Review the draft — does it introduce new issues?

Then make ONE update call with ALL fixes applied.

After the update: follow the verification workflow above (re-read, execute, check).

---

## Handle New Errors After Fixes

A new error after fixing isn't always a failure. If the error type changed:

- Original: syntax error → After fix: permission error
- Conclusion: Original fix worked. Acknowledge success, then address the new issue separately using the same workflow

**If the SAME error persists:** The fix didn't apply or didn't address the root cause. Re-read the cell content to verify what actually changed, then investigate why. Avoid retrying the same fix — investigate a different hypothesis instead.

**Maximum retry attempts for the same approach: 1.** After that, change strategy or report the tool failure to the user.

**After successfully fixing:** Stop. Don't apply unrelated changes or "improvements."

---

## Errors from External Files

When stack trace points to an external file (referenced notebook, imported module):

1. Inspect the external file's code — the fix may be there, not in the calling cell
2. Check if the external file has its own import errors or missing dependencies
3. If you can't edit the external file, explain what needs to change

---

## Safety-Blocked Executions

If code execution is blocked for safety reasons (not user rejection), do not modify the code to try to work around the block. Instead, confirm the fix is correct, explain that execution was blocked for safety reasons, and show the user exactly what to run manually.

---

## Anti-Patterns

1. Assuming updates succeeded without re-reading to verify (IDs change after updates)
2. Fixing based on assumptions instead of verified state
3. Iterating on code for infrastructure issues without first checking for a code workaround (see [`environment-issues.md`](environment-issues.md))
4. Adding unnecessary code beyond the fix
5. Ignoring user's pending edits
6. Commenting out or removing problematic code instead of correcting it
7. Fix-run-fix-run cycles instead of fixing completely upfront
8. Fixing the calling code when the error originates from an external module
9. Ignoring the error message's suggested replacement when one is provided
10. Continuing to make changes after successfully fixing the original error
11. Removing existing error handling or defensive patterns when fixing syntax
12. Editing other cells to fix their own unrelated errors just because they happen to share the same error pattern as the focused cell
13. Stopping after diagnosis without writing a code fix
14. Loading skill files and stopping — loading is preparation, not completion
15. Retrying the same failed update without changing approach
16. Silently substituting different tables, functions, or approaches without asking the user
````

### `python-debugging.md`

Webpack chunk `84703.<hash>.chunk.js`, module `984703`.

````markdown
# Python Debugging Guide

**Sections:** [Quick Reference](#quick-reference) · [Syntax Errors](#syntax-errors-indentationerror-syntaxerror) · [Import/Module](#import-and-module-errors) · [NameError](#nameerror--dependency-chain-tracing) · [Type Errors](#type-errors) · [DataFrame](#dataframe-issues) · [Pandas UDF](#pandas-udf-errors) · [ValueError](#valueerror) · [%run](#run-command-errors) · [Empty Results](#empty-results) · [Large Data](#large-data-operations) · [Spark/JVM](#sparkjvm-errors-analysisexception-py4jjavaerror-sparkexception-illegalargumentexception) · [Data Parsing](#data-parsing-errors-jsondecodeerror-parsererror) · [Subprocess/OS](#subprocess-and-os-errors-calledprocesserror-oserror-runtimeerror) · [AssertionError](#assertionerror) · [Anti-Patterns](#anti-patterns)

For notebook Python cells. Covers common error patterns — apply the same diagnostic approach to similar errors.

## Quick Reference

| Error                    | First Step                                    |
| ------------------------ | --------------------------------------------- |
| TypeError                | Check session context for types               |
| NameError                | Check if variable exists in session           |
| AttributeError           | Verify object type and API                    |
| ModuleNotFoundError      | Add `%pip install` cell                       |
| ImportError              | Check version compatibility                   |
| KeyError                 | Inspect dict/DataFrame keys                   |
| FileNotFoundError        | Verify path/files exist first                 |
| ValueError               | Handle invalid data gracefully                |
| IndexError               | Check collection length first                 |
| AnalysisException        | Read nested message — treat as SQL equivalent |
| Py4JJavaError            | Read nested Java exception message            |
| SparkException           | Check if code-fixable or infrastructure       |
| IllegalArgumentException | Verify argument types against API docs        |
| RuntimeError             | Check full traceback for specific cause       |
| AssertionError           | Verify data assumptions, not just code        |
| JSONDecodeError          | Verify response is actually JSON              |
| ParserError              | Check delimiter, encoding, malformed rows     |
| CalledProcessError       | Check exit code and stderr output             |
| OSError                  | Verify path format and permissions            |

For other Python errors, apply the same principle: verify state before fixing.

---

## Syntax Errors (IndentationError, SyntaxError)

Before fixing:

- Read the exact cell content — watch for invisible characters (non-breaking spaces, tabs vs spaces)
- Check for unclosed parentheses, brackets, or quotes
- Verify multi-line strings and f-strings are properly formatted
- Multi-line expressions must be enclosed in parentheses for line continuation

Common causes: mixed tabs/spaces, copy-pasted text with hidden characters, unclosed brackets across lines.

---

## Import and Module Errors

| Error                   | Solution                                             |
| ----------------------- | ---------------------------------------------------- |
| ModuleNotFoundError     | See below for how to distinguish                     |
| ImportError             | Version conflict — correct the version, don't remove |
| Custom module not found | May be in external file that can't be edited         |

**ImportError (version conflicts):**

If a `%pip install` cell forces an incompatible version, **correct the version** in that cell:

- Use `--upgrade` flag: `%pip install --upgrade package`
- Or specify newer version: `package>=required_version`
- **Don't comment out or delete** the pip install — fix the version constraint

**ModuleNotFoundError triage:**

- Typo of known library (`nump` → `numpy`): Fix the typo
- Missing PyPI package: Add a new cell with `%pip install package` before the import cell (don't merge into the same cell)
- Unknown module (not a typo, not on PyPI): Can't fix — ask user where it is. Do NOT substitute with a different library

**After `%pip install`:**

1. May need `dbutils.library.restartPython()` — check pip output for warnings
2. **The restart cell and the import cell MUST be separate cells** — combining them means the restart kills the import before it runs
3. **After restart, ALL state is cleared** — variables, imports, DataFrames, everything
4. Re-run cells in order: install → restart → import → variable definitions → your fix
5. Verify imports succeeded before running dependent code

**Import dependencies:**

- Check transitive/nested dependencies — errors may come from imports within imports
- Verify library dependencies before switching approaches
- After fixing one import, verify ALL functions used in the cell are properly imported
- Module-level initialization errors in imported files can't be fixed from the calling notebook
- Path modifications may not persist across execution contexts — verify in dependent code
- Subprocesses may not inherit notebook environment modifications

---

## NameError — Dependency Chain Tracing

When a NameError appears, trace the complete dependency chain — not just the cell that defines the variable, but all cells that variable depends on, recursively. Check if any intermediate cell was also skipped.

**Procedure:**

1. Find the cell that defines the missing variable
2. Check that cell's own dependencies (what variables/imports it requires)
3. Trace recursively until you reach cells with no unmet dependencies
4. Run ALL prerequisite cells in execution order before re-running the erroring cell

Do not discover the dependency chain one NameError at a time via repeated failures — trace it upfront and run the full chain.

**Check session/REPL context for what variables exist. Variables may be missing if:**

- Kernel was restarted
- Upstream cells weren't executed
- Variable was overwritten

**Scope issues:** Verify variables are defined at the point they're referenced — variables in error handlers must exist before the error occurs.

**Type changes:** If an object's type doesn't match expectations, trace back to find where it was reassigned.

---

## Type Errors

Inspect session context or execute code to verify object type/state. Common causes:

- Variable shadowing a function/class name
- Object modified by previous execution
- Wrong API (method vs property)
- None where object expected
- Object missing expected attributes/columns

**Type errors in output/serialization:** Errors may originate from display/output functions, not computation — fix at the source data type, not the output layer.

---

## DataFrame Issues

**Always verify DataFrame type before fixing** — Spark and pandas have incompatible APIs:

| DataFrame Type | Common Methods                         |
| -------------- | -------------------------------------- |
| **Spark**      | `.select()`, `.filter()`, `.groupBy()` |
| **pandas**     | `.loc[]`, `.iloc[]`, bracket indexing  |

Check session context to confirm type. Common mistakes:

- Using pandas indexing on Spark DataFrame
- Using Spark methods on pandas DataFrame
- Assuming `display()` output type matches input type

**Before converting to pandas:** Verify data size first (row count, memory) to avoid crashes.

**Before calling methods that return data:** Verify the object is not None.

**Before aggregation/pivot operations:** Inspect unique values in grouping columns to anticipate issues.

**Data type matching:** Data must match expected types before transformation — schemas won't coerce incompatible values. Handle nullable types explicitly before conversions.

**PySpark Join Ambiguity (AMBIGUOUS_REFERENCE):**

When joins create duplicate column names, disambiguate using aliases or rename columns before joining. Check schema after each join to identify duplicates early.

**API differences:** Some functions exist in one API but not another — verify function availability in documentation before using. Some APIs have operation restrictions based on connection mode.

**Non-deterministic functions:** Functions that generate values (IDs, timestamps, random) may produce different results on each call — assign once and reuse for consistency.

**Structure changes:** Operations may change DataFrame structure (e.g., columns becoming index after certain operations) — verify structure before accessing.

---

## Pandas UDF Errors

When UDFs fail, check the UDF implementation itself — not just the calling code.

For pandas UDFs specifically:

1. **Verify the return type annotation matches the actual return value type.** Pandas UDFs require explicit type annotations. A common mismatch: returning a pandas Series of strings when `int` is declared, or vice versa
2. **Check ALL captured closure variables for serializability.** Objects like `SparkSession`, `DataFrame`, and database connections cannot be serialized into a UDF closure. Capture only primitive values, serializable config, or broadcast variables
3. Verify the input and output types are pandas Series, not Spark columns or Python scalars
4. Test the UDF function independently on a small pandas Series before registering it
5. Some platform features (SparkContext, streaming contexts) aren't accessible from within UDFs. UDF definitions may have scope limitations — verify they're accessible at the call site

---

## ValueError

When data can't be converted (strings to numbers, invalid formats):

1. Add error handling to gracefully handle invalid values
2. Handle NaN/null values explicitly — don't rely on downstream functions to silently ignore them

---

## %run Command Errors

When `%run` fails:

1. **Target notebook errors**: The target notebook may have internal syntax/runtime errors — inspect it
2. **Path issues**: Paths with spaces need quotes; relative paths depend on current notebook location
3. **Missing definitions**: If expected variables/functions aren't defined after `%run`, the target notebook failed silently
4. **File type**: `%run` is for notebooks — use `import` for Python modules

Verify the target notebook runs successfully before debugging the `%run` command itself.

---

## Empty Results

Before accessing query results (e.g., `.collect()[0]`, `.first()`), verify data exists. Queries can return empty results due to filters, missing data, or failed upstream operations.

---

## Large Data Operations

**Before operations on large data:** Check input data characteristics (size, cardinality, distribution) to anticipate memory or performance issues.

**State/checkpoint errors:** State directories may need clearing when schemas change. Avoid path conflicts between related operations.

**Model/artifact errors:** Saved artifacts may have stale references or version mismatches — may require regeneration rather than loading workarounds.

---

## Spark/JVM Errors (AnalysisException, Py4JJavaError, SparkException, IllegalArgumentException)

These errors originate in the JVM and surface through PySpark. The diagnostic approach is the same for all: **read the nested exception message** — the actual cause is buried inside the wrapper.

**AnalysisException** — Spark's analysis-phase error. Usually wraps a SQL-equivalent error (unresolved column, table not found, schema mismatch, type mismatch). Read the nested message, then apply the same diagnostic approach as the equivalent SQL error. Common causes:

- Column not found → verify DataFrame schema with `df.columns` or `df.printSchema()` before fixing references
- Schema mismatch on write → compare DataFrame schema against target table schema; fix the transformation, not the write call
- Stale temp view schema → re-run the cell that creates the view before fixing downstream references

**Py4JJavaError** — a JVM exception surfaced through the Py4J bridge. Read the nested Java exception to determine the cause:

- `java.sql.SQLException` / JDBC errors → check connection string format, credentials, and SQL dialect compatibility with the target database
- `java.lang.OutOfMemoryError` → infrastructure issue if driver OOM; code-fixable if caused by `.collect()` or `.toPandas()` on large data (use `.limit()`, `.sample()`, or write directly)
- Authentication/credential errors → check if secrets or tokens are valid and accessible from the current compute
- `ClassNotFoundException` / `NoSuchMethodError` → JAR or library version mismatch; check cluster libraries

**SparkException** — task-level execution failures. Determine if code-fixable or infrastructure:

- Shuffle fetch failures, executor lost → usually infrastructure (cluster instability, OOM). Explain to user; suggest repartitioning or reducing data volume as a mitigation
- JDBC write failures → verify column types are compatible with the target database; cast or sanitize values before writing
- Memory errors during `.toPandas()` or `.collect()` → data too large for driver; use `.limit()`, write to table, or process in partitions

**IllegalArgumentException** — wrong argument type or value passed to a Spark/Java API. Always code-fixable:

- Verify argument types and values against API documentation
- Common: wrong column type in a schema definition, invalid path format, wrong option key/value in `.option()` calls

---

## Data Parsing Errors (JSONDecodeError, ParserError)

**JSONDecodeError** — the input is not valid JSON. Before fixing the parsing code:

1. Inspect the actual response or file content — it may be HTML (error page), CSV, or empty
2. Check the Content-Type header or file extension to confirm the expected format
3. If the data source returns non-JSON on errors (e.g., HTML 403 page), add a content-type check before parsing
4. For malformed JSON: check for truncation, encoding issues, or embedded control characters

**ParserError** — typically pandas CSV/data parsing failure:

1. Inspect the raw file content (first few lines) to identify the actual delimiter, encoding, and structure
2. Common causes: wrong delimiter (tab vs comma vs semicolon), header row mismatch, inconsistent column counts, encoding issues (UTF-8 BOM, Latin-1)
3. Use `error_bad_lines=False` or `on_bad_lines='skip'` only as a diagnostic step — fix the root cause rather than silently dropping rows

---

## Subprocess and OS Errors (CalledProcessError, OSError, RuntimeError)

**CalledProcessError** — a shell command (`!command` or `subprocess.run()`) returned a non-zero exit code:

1. Read the stderr output in the exception — it contains the actual error from the command
2. Common causes: command not found (not installed on compute), permission denied, invalid arguments
3. For package installation failures: check if the package index is accessible from the compute environment; try `%pip install` instead of `!pip install`

**OSError** — file system operation failed. See the environment-issues guide for path format verification. Common causes:

- Permission denied on write → check path type (see environment-issues decision tree)
- File not found → verify path format before concluding the file is missing
- Disk space / quota exceeded → infrastructure issue; explain to user

**RuntimeError** — broad catch-all. Read the full traceback to identify the specific cause:

- Widget/display errors → check if the widget or display function is supported in the current compute context
- Session/connection errors → may need kernel restart or cluster reattach
- External download blocked → safety policy may block network calls; use local alternatives or explain the restriction
- If the traceback points to internal platform code (not user code) → likely infrastructure; explain and scope out

---

## AssertionError

Assertion failures indicate a violated assumption — either in the user's code or in a library:

1. Read the assertion message to understand what condition failed
2. Determine if this is a **data issue** (unexpected values, duplicates, nulls) or a **code bug** (wrong logic, wrong variable)
3. For data validation assertions: inspect the actual data that triggered the assertion rather than removing the assertion
4. For library-internal assertions: check if the input data meets the library's requirements (types, shapes, ranges)

---

## Anti-Patterns

- Assuming state persists after `restartPython()` — it doesn't; re-run imports and definitions
- Combining `dbutils.library.restartPython()` and an import in the same cell — the restart kills the import
- Using pandas API on Spark DataFrame (or vice versa)
- Fixing the calling cell when the definition cell needs updating
- Substituting user's intended library with a different one
- Fixing `%run` path when the target notebook itself has errors
- Tracing NameError one cell at a time instead of tracing the full dependency chain upfront
- Redefining a missing variable inside the erroring cell instead of running the upstream definition cell
- Capturing unserializable objects (SparkSession, DataFrame) in UDF closures
- Accessing `.collect()[0]` or `.first()` without checking if result is empty
- Treating AnalysisException as a unique error type instead of reading the nested SQL-equivalent message
- Retrying `.collect()` or `.toPandas()` on large data after OOM instead of limiting or writing to table
- Parsing a response as JSON without checking content type first
- Removing assertions instead of fixing the data or logic that violated them
````

### `sql-debugging.md`

Webpack chunk `76287.<hash>.chunk.js`, module `376287`.

````markdown
# SQL Debugging Guide

**Sections:** [Cell Language](#cell-language-notebook-only) · [Verify Schema](#verify-schema-first) · [Fix Comprehensively](#fix-comprehensively) · [PARSE_SYNTAX_ERROR](#parse_syntax_error) · [Column Errors](#column-reference-errors) · [Aggregation](#aggregation-errors) · [Table/View](#tableview-errors) · [Type Errors](#type-errors) · [MERGE](#merge-errors) · [Temp Views](#temp-view-limitations) · [Pipelines](#pipelines-specific-constraints) · [GRANT](#grant-syntax) · [Subquery](#subquery-errors) · [UNION](#union-errors) · [Dynamic SQL](#dynamic-sql--generated-queries) · [JSON](#json-parsing-errors) · [File Format](#file-format-issues) · [DDL](#ddl-operations) · [Anti-Patterns](#anti-patterns)

Covers common SQL error patterns. Apply the same diagnostic approach to similar errors not explicitly listed.

## Cell Language (Notebook only)

Before fixing SQL in notebooks, check the cell's language attribute:

- `language='sql'` cells execute SQL natively — don't add `%sql` magic
- Cell language metadata must match code content — when converting between Python/SQL, update both
- `%sql` is only needed in `language='python'` cells

---

## Verify Schema First

Before fixing column/table errors:

- Check table schema for column names and types using schema inspection tools or `DESCRIBE [table]`
- Search/verify table paths
- Sample data to inspect actual values

Never assume a column exists because the error message implies it should. The error message's "did you mean" suggestions indicate what DOES exist — use them as your starting hypothesis and verify against the live schema before applying.

---

## Fix Comprehensively

When fixing an error, check for similar patterns throughout the ENTIRE query — not just the reported line:

- If fixing a column name: verify ALL references (SELECT, WHERE, GROUP BY, ORDER BY, HAVING, JOIN conditions, CTEs, subqueries). Apply the fix to ALL occurrences in the same update
- If fixing a CAST: check all clauses that use the same column
- If fixing a table alias: update ALL column references using that alias (e.g., `t.column_name`)
- For UNION queries: verify fixes are consistent across ALL branches — column order and types must match in all branches

Do not fix one occurrence and run to "see what happens." Fix all occurrences first, then run once.

---

## PARSE_SYNTAX_ERROR

Most common SQL error. Before fixing:

- Read current state to examine exact content (watch for hidden characters)
- Search documentation to verify SQL syntax

Common causes: non-printable characters, missing commas/parentheses, unclosed brackets, wrong dialect syntax.

**Statement structure:** Verify clause ordering (e.g., ELSE before END in CASE). Watch for circular references in column definitions.

**Multiple statements in one cell:** SQL cells execute one statement at a time. Multiple SELECT statements in one cell require semicolons between them, or splitting into separate cells.

**CTE completeness:** A WITH clause must be followed by a statement (SELECT, INSERT, MERGE) that consumes it. A CTE definition without a consuming statement is a syntax error.

**After fixing syntax errors:** Re-run and check for newly exposed issues — a syntax fix may reveal underlying data problems (NULL values, type mismatches) that weren't visible before.

**SQL dialect differences:** Migrations from other databases may fail — verify function names and syntax against Databricks documentation. When encountering SQL syntax from another dialect, translate to the Databricks equivalent rather than removing the logic:

| Other Dialect                       | Databricks Equivalent                     |
| ----------------------------------- | ----------------------------------------- |
| `ROWNUM` (Oracle)                   | `ROW_NUMBER() OVER (ORDER BY ...)`        |
| `LISTAGG(col, ',')` (Oracle/ANSI)   | `ARRAY_JOIN(COLLECT_LIST(col), ',')`      |
| `DECLARE @var` / `SET @var` (T-SQL) | `DECLARE VARIABLE var TYPE DEFAULT value` |
| Outer join `(+)` syntax (Oracle)    | `LEFT JOIN` / `RIGHT JOIN` syntax         |

**Runtime/version dependencies:** Some syntax or features may depend on runtime version — check documentation if syntax looks correct but fails.

---

## Column Reference Errors

| Error               | Solution                                       |
| ------------------- | ---------------------------------------------- |
| UNRESOLVED_COLUMN   | Check schema — column names are case-sensitive |
| AMBIGUOUS_REFERENCE | Add table alias to ambiguous columns in JOINs  |
| FIELD_NOT_FOUND     | Check actual field names, may be renamed       |

**Column alias rules:**

- Column aliases cannot be referenced within the same SELECT clause
- Verify quoting conventions for column names with special characters
- Window functions have specific column scoping rules
- Access control policies can affect column visibility even when columns exist

**Non-ASCII column names:** Column names containing non-ASCII characters (Japanese, Chinese, Korean, Arabic, accented Latin, etc.) MUST be quoted with backticks in SQL even if they have no other special characters (e.g., `` `更新キー` ``). After fixing one non-ASCII column name, scan ALL column references in the query.

---

## Aggregation Errors

| Error                     | Solution                                         |
| ------------------------- | ------------------------------------------------ |
| MISSING_AGGREGATION       | See below — verify intent before adding GROUP BY |
| MISSING_GROUP_BY          | Ensure non-aggregated columns are in GROUP BY    |
| NESTED_AGGREGATE_FUNCTION | Wrap inner aggregate in subquery first           |

**Before adding columns to GROUP BY to fix MISSING_AGGREGATION:** Verify the query's intent. If the query selects individual-level detail (not aggregates), removing the aggregate function is often correct, not adding GROUP BY. Only add GROUP BY when the query genuinely needs grouping.

**After fixing syntax, check for semantic errors** — function argument counts, data types, etc.

---

## Table/View Errors

| Error                        | Solution                                              |
| ---------------------------- | ----------------------------------------------------- |
| TABLE_OR_VIEW_NOT_FOUND      | Search/verify table path; run upstream for temp views |
| TABLE_OR_VIEW_ALREADY_EXISTS | Use `CREATE OR REPLACE`                               |
| SCHEMA_NOT_FOUND             | Verify catalog and schema name; try `SHOW SCHEMAS`    |
| Circular reference           | Use CTEs or temp tables to break cycle                |

**SCHEMA_NOT_FOUND:** Verify the catalog is correct first (`SHOW CATALOGS`), then check the schema name (`SHOW SCHEMAS IN <catalog>`). Common causes: wrong default catalog, typo in schema name, schema exists in a different catalog. If the schema genuinely doesn't exist, use `CREATE SCHEMA IF NOT EXISTS` — this is a code fix, not an infrastructure issue.

**Catalog notes:**

- Some system tables require specific catalog types
- Foreign catalogs are typically read-only — verify what operations are permitted before attempting DDL
- Verify correct naming conventions for your catalog type (e.g., 3-part names)
- Some object types have operation restrictions (e.g., no JOINs)

---

## Type Errors

| Error                           | Solution                                               |
| ------------------------------- | ------------------------------------------------------ |
| INCOMPATIBLE_COLUMN_TYPE        | Check schema for types before CAST                     |
| CAST_INVALID_INPUT              | Inspect actual data values; use `try_cast` for safety  |
| CANNOT_PARSE_TIMESTAMP          | Use `try_*` variant (returns NULL instead of throwing) |
| INVALID_EXTRACT_BASE_FIELD_TYPE | Verify column is timestamp/date                        |

**Before fixing cast errors:** Sample actual data values — schema shows expected type but data may contain malformed values (empty strings, invalid formats). Apply `try_cast` or handle edge cases explicitly.

**Type conversion notes:**

- Cast column BEFORE filter — filter evaluation may trigger implicit cast
- CASE/WHEN branches must return consistent types
- Verify function signatures in documentation
- Use correct literal formats for date/time types
- Strict modes may enforce type checking that fails on implicit conversions
- Some functions may have type compatibility limitations with newer data types
- When fixing date format strings: extract the actual date sample from the error message and confirm your format pattern matches it exactly (e.g., `'2026-01-15'` → `'yyyy-MM-dd'`)

---

## MERGE Errors

"Multiple source rows matching target": Deduplicate the source data BEFORE the MERGE — each target row must match at most one source row.

**Before removing WHEN NOT MATCHED clauses:** Verify whether inserting new records is required. Removing WHEN NOT MATCHED silently disables inserts — always confirm with the user first.

**MERGE target requirements:** Verify the target table format supports MERGE operations.

---

## Temp View Limitations

Temporary views (created via `CREATE OR REPLACE TEMP VIEW` or PySpark's `createOrReplaceTempView`) cannot be the target of UPDATE, MERGE, or INSERT operations. To "update" a temp view, recreate it using a SELECT with the desired transformations. If the user needs persistent mutations, suggest converting to a Delta table.

---

## Pipelines-Specific Constraints

In Lakeflow Spark Declarative Pipeline (formerly DLT Pipeline), `PRIMARY KEY` is not a supported DDL keyword. Use data quality EXPECT constraints instead:

```sql
CONSTRAINT constraint_name EXPECT (condition) ON VIOLATION FAIL UPDATE
```

Do not confuse PRIMARY KEY syntax with EXPECT syntax when diagnosing PARSE_SYNTAX_ERROR in Spark Declarative Pipelines.

---

## GRANT Syntax

In Databricks SQL GRANT statements: external location names are unquoted identifiers; principal names (users, groups, service principals) are string literals in single quotes.

```sql
GRANT READ FILES ON EXTERNAL LOCATION my_location TO 'user@company.com'
```

---

## Subquery Errors

| Error                    | Solution                                    |
| ------------------------ | ------------------------------------------- |
| UNSUPPORTED_SUBQUERY     | Restructure as JOIN or CTE                  |
| Window function in WHERE | Use subquery to compute window result first |
| VARIABLE_ALREADY_EXISTS  | Use different name or DROP first            |

**CTE scope:** CTEs have specific scoping rules — verify references are valid within the query structure.

**Command limitations:** Some commands cannot be used in subqueries or as CTE/table sources — for example, `DESCRIBE HISTORY`, `SHOW GRANTS`, and `SHOW PARTITIONS` must stand alone as statements and cannot be wrapped in a `WITH` clause or subquery. Restructure if needed.

**Optimizer issues:** If complex queries fail with optimizer errors, try materializing intermediate results.

---

## UNION Errors

Schema mismatch between branches: verify column count and types match across ALL branches. Check each SELECT returns identical structure.

**Fix at source:** UNION mismatches often need fixes in source CTEs/views, not just the UNION statement.

---

## Dynamic SQL / Generated Queries

When SQL is built via f-strings, templates, or string concatenation:

1. **Print the actual SQL** being generated before debugging — error positions may not match source code
2. Check variable values that get interpolated (e.g., empty list = `WHERE IN ()`)
3. Verify the final SQL string is valid before execution

**Connection strings:** When connecting to external databases, connection string formats vary by target system — verify correct format in documentation.

**Dynamic identifiers:** Some dynamic identifier functions have limitations — check documentation for supported usage.

---

## JSON Parsing Errors

When reading/parsing JSON data:

- `_corrupt_record` column in schema indicates malformed JSON — inspect raw data first
- Verify JSON string is valid before accessing nested fields
- Check for escape character issues

---

## File Format Issues

When reading from files:

- Schema conflicts between files may require merge/resolution options
- File format metadata may be inconsistent — verify compatibility settings
- Some formats have specific requirements for schema evolution

---

## DDL Operations

Common DDL errors:

- **Column already exists**: Check existing columns before ALTER TABLE ADD
- **Type change not supported**: Some type changes require table recreation
- **Constraint errors**: Verify constraint syntax is supported
- **Object already exists**: Use `IF NOT EXISTS` or `OR REPLACE` for idempotent DDL
- **Circular dependencies**: Break cycles using temp tables or intermediate results
- **Schema evolution blocked**: Existing data may prevent schema changes
- **Syntax requirements**: Some DDL variants require specific clause combinations
- **Statement ordering**: Some statements must be separated (e.g., CTEs before DDL)
- **Storage restrictions**: Some storage types have DDL limitations — use alternative approaches

---

## Anti-Patterns

- Assuming column names without checking schema (case-sensitive!)
- Using functions from other SQL dialects without translating to Databricks equivalents
- MERGE without deduplicating source
- Removing WHEN NOT MATCHED without confirming inserts are not needed
- Using strict type conversion when data may have invalid values (prefer `try_*` variants)
- Fixing only the first occurrence when a pattern appears multiple times
- Debugging generated SQL without printing the actual query
- Adding GROUP BY to fix MISSING_AGGREGATION without verifying the query's intent
- Using PRIMARY KEY syntax in Lakeflow Spark Declarative Pipelines (use EXPECT constraints instead)

For other SQL errors, apply the same principle: verify schema/data before fixing.
````

### `environment-issues.md`

Webpack chunk `90374.<hash>.chunk.js`, module `890374`.

````markdown
# Environment Issues Guide

**Sections:** [Decision Framework](#decision-framework--code-fix-or-infrastructure) · [Permission Errors](#permission-errors--classify-before-scoping-out) · [DDL Conflicts](#ddl-conflicts--these-are-code-fixes) · [Path/File](#path-and-file-errors) · [PARSE_SYNTAX_ERROR](#parse_syntax_error-is-almost-never-an-infrastructure-issue) · [Module/Import](#moduleimport-errors) · [Unity Catalog](#unity-catalog-and-foreign-catalogs) · [Serverless](#serverless-limitations) · [Credentials](#credentials) · [Network](#network-and-connectivity) · [Scoping Out](#scoping-out--required-output) · [Non-Code Issues](#non-code-issues) · [Anti-Patterns](#anti-patterns)

For errors that may involve infrastructure. **Always attempt a code-level fix or workaround before concluding infrastructure changes are required.**

---

## Decision Framework — Code Fix or Infrastructure?

Before scoping out any error as an infrastructure issue, work through these three questions in order:

**Q1: Is there a code-level path?**
An alternative method, different path type, accessible catalog, or equivalent API that achieves the same result without requiring admin action? If yes — try it.

**Q2: Does the error message suggest a code fix?**
Many error messages contain the correct syntax, an accessible alternative, or an exact fix. If yes — try it.

**Q3: Are ALL code paths exhausted?**
Only after Q1 and Q2 are both "no" should you scope out to an infrastructure explanation.

---

## Permission Errors — Classify Before Scoping Out

**REQUIRED: Check the path/resource type first.** Many permission errors are caused by wrong target paths, not missing ACLs.

**Decision tree for permission errors (403, INSUFFICIENT_PERMISSIONS, AccessDeniedException, PERMISSION_DENIED):**

1. **Is the path type wrong for this operation?**
   - `/Workspace/...` paths are for notebooks and code files, NOT for data writes. If code writes data to `/Workspace/`, the fix is to redirect to a Unity Catalog table (`spark.write.saveAsTable(...)`) or a Volume path (`/Volumes/catalog/schema/volume/...`). This is a code fix.
   - `/dbfs/` or `dbfs:/` paths — check if an equivalent Unity Catalog table or Volume path exists. If yes, change the path in code.
   - `dbfs:/FileStore/...` — legacy path. Redirect writes to UC Volumes.

2. **Is an alternative catalog accessible?**
   - PERMISSION_DENIED or INSUFFICIENT_PERMISSIONS on a catalog/schema operation → check if the operation can be performed in an accessible catalog (`USE CATALOG hive_metastore` or a dev/test catalog). Run `SHOW CATALOGS` to identify accessible catalogs.
   - CATALOG_NOT_FOUND — add `USE CATALOG <accessible_catalog>` before the failing statement.

3. **Does the error message itself provide example fix syntax?** Try that fix.

4. **Does the error message mention a specific permission grant needed?** If a specific grant is required (e.g., MODIFY on external location `s3://...`) and no code path avoids it → explain the grant needed and scope out.

5. **No code path exists** → explain the root cause clearly, state exactly what infrastructure change is needed, and provide actionable next steps for the user.

**NEVER scope out a permission error before checking steps 1–3.**

---

## DDL Conflicts — These Are Code Fixes

The following DDL errors are always code-fixable. Do not declare them infrastructure issues:

- `LOCATION_OVERLAP` / location already used by another table → use `CREATE OR REPLACE TABLE`, or `DROP TABLE IF EXISTS` first, or specify a different LOCATION path
- `TABLE_OR_VIEW_ALREADY_EXISTS` / `RESOURCE_ALREADY_EXISTS` → add `IF NOT EXISTS`, or use `CREATE OR REPLACE`, or check current state before creating
- Schema mismatch on table creation → use `CREATE OR REPLACE TABLE` to redefine the schema
- `DELTA_CANNOT_CHANGE_DATA_TYPE` / `NOT_SUPPORTED_CHANGE_COLUMN` → workaround: add new column with CAST, populate from old column, drop old, rename new

---

## Path and File Errors

**Before concluding the file is missing, verify the path FORMAT:**

- `/dbfs/dbfs/...` → double prefix error, fix to `/dbfs/...`
- `dbfs:/Workspace/...` → wrong prefix; Workspace paths are not accessible via `dbfs:` prefix — use `/Workspace/...` directly
- Path contains obvious placeholders (`your-path`, `your-file`, `<...>`) → immediately replace with actual values from context
- Double slashes or mismatched prefix combinations → fix the format

**When path format is correct and access fails:**

1. List the target location to see what files/directories are actually there
2. If listing fails (permissions), ask the user which files exist rather than guessing
3. Only fix paths for resources confirmed to exist; inform the user about genuinely missing ones

**Only conclude the file is genuinely missing** if the path format is correct and the file does not exist at the verified location. If genuinely missing: explain what is missing, suggest where it should come from, and propose how to proceed.

**For serverless file writes:**

- DBFS paths (`dbfs:/`) and `/tmp/` are not writable on serverless compute
- The only writable paths on serverless are Unity Catalog Volumes (`/Volumes/catalog/schema/volume/path`)
- This is a code fix: change the write target, not an infrastructure issue

**Common path issues:**

- Path format mismatches (cloud vs local paths)
- Compute-specific filesystem restrictions
- Local machine paths not accessible from cloud
- Some paths have restrictions on programmatic creation
- Different APIs expect different path formats (case sensitivity, separators)
- Some features require explicit path configuration rather than auto-generation
- External endpoints/services — verify they're accessible before debugging code that uses them

---

## PARSE_SYNTAX_ERROR Is Almost Never an Infrastructure Issue

`PARSE_SYNTAX_ERROR` should be treated as a syntax problem requiring a code fix, not an environment or compute limitation.

1. Identify the exact syntax construct that failed (use the error's line/col position and SQL fragment)
2. Fix the syntax
3. Only scope out if documentation confirms the specific syntax is genuinely unsupported in the current compute type AND no syntactically valid equivalent exists

---

## Module/Import Errors

**ModuleNotFoundError resolution steps (in order):**

1. Check if the module is a standard library that should be available — if missing, it may need `%pip install` or the import path is wrong
2. Check if the module is a custom/local module defined in another cell or file — if so, ensure that cell is executed before the import
3. Only after steps 1 and 2 fail: consider whether this is a genuine serverless limitation (e.g., C-extension libraries requiring cluster mode). If so, explain why and suggest alternatives
4. Never stop at "module not found" without attempting at least one resolution

---

## Unity Catalog and Foreign Catalogs

External/foreign catalogs may have different permissions than native catalogs. Search/verify table paths and check what operations are allowed on the target catalog.

**Foreign catalogs are typically read-only** — verify what operations are permitted before attempting DDL.

**Compute type affects features** — different compute modes have different supported APIs and restrictions. Access control can affect visibility of objects even when they exist. Security/isolation modes may restrict certain library or API features.

**Language restrictions:** Some compute types only support specific languages — verify language compatibility before attempting code fixes.

---

## Serverless Limitations

Serverless compute has restrictions that differ from classic clusters. These evolve — check documentation for current limitations.

**Common patterns:**

- Dynamic configs may be restricted — use workspace settings instead
- Some interactive features may not be available or work differently
- File path and filesystem restrictions differ from classic compute (`/tmp/` and `dbfs:/` not writable — use `/Volumes/`)
- Some workspace paths may not be accessible from serverless

**For external connectivity (external databases, JDBC sources):** Serverless compute has different network policies than classic compute. If a query accesses external data sources, verify the compute type supports the required connectivity before running.

---

## Credentials

Missing or invalid credentials: service principal, storage keys, OAuth tokens.

1. **First**: Inspect actual token/key values in code for copy-paste errors (embedded spaces, newlines, truncated values)
2. **If malformed**: Fix the credential value directly
3. **If values look correct**: Point to workspace/cluster settings for configuration

**Caching:** Sessions may cache credentials or config — may need restart after updating.

**Verify resources exist:** Before fixing code that retrieves secrets or configs, verify the referenced resource actually exists.

---

## Network and Connectivity

Connection timeouts, unreachable hosts, DNS failures:

1. These are infrastructure issues — code changes won't fix network problems
2. If connectivity tests fail, explain the limitation
3. Suggest alternatives (different endpoints, caching) rather than retrying code indefinitely

---

## Scoping Out — Required Output

When an error is genuinely infrastructure-only after exhausting all code paths:

1. Explain exactly what the error is and why code cannot fix it
2. State what infrastructure change would fix it (e.g., "grant SELECT on external location X", "switch to a classic cluster", "contact your admin to...")
3. Provide actionable next steps — never leave the user without a clear next action
4. Avoid suggesting code workarounds that change the user's intent

**Never scope out silently.** Always produce a visible response explaining the situation.

---

## Non-Code Issues

Cannot fix with code:

- External config files (YAML, JSON)
- Cluster configuration
- Library versions at cluster level
- Credential configuration
- Network/firewall rules
- System-level dependencies (JARs, native libraries, drivers)
- Kernel/session crashes — require restart, not code edits
- Runtime dependencies that must be configured before session starts

Explain the fix needed and instruct the user to make the change manually.

---

## Anti-Patterns

- Scoping out permission errors without checking if the path type is wrong (most common false scope-out)
- Scoping out catalog errors without trying `USE CATALOG hive_metastore` or an alternative catalog
- Scoping out DDL conflicts (LOCATION_OVERLAP, ALREADY_EXISTS) without trying CREATE OR REPLACE
- Scoping out PARSE_SYNTAX_ERROR as an environment issue
- Scoping out ModuleNotFoundError without attempting `%pip install`
- Iterating on code for genuine infrastructure issues after all code paths are exhausted
- Stopping silently after determining an error is infrastructure — always explain and give next steps
- Attempting destructive workarounds
- Fixing code when the error originates from internal library/platform calls
- Hardcoding credentials
- Accessing local paths from cloud compute
````
