# Genie Code skill: `sql-functions`

Full content of the built-in Genie Code skill `sql-functions`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). Genie Code loads these markdown files lazily via the `readSkillFile` tool when its description matches the task at hand. See [genie_code_findings.md](genie_code_findings.md) and [genie_code_payload.md](genie_code_payload.md) for the request envelope and tool schema, and [genie_code_system_prompt.md](genie_code_system_prompt.md) for the system prompt that drives skill selection.

## Registry record

From the Genie Code SkillRegistry definition in the SPA's `19604.5ae31ee5cc.chunk.js` chunk (module `584313`):

```jsonc
{
  "name":        "sql-functions",
  "description": "SQL AI functions in Databricks (functions starting with ai_, like ai_forecast(..), ai_parse_document(..)). Use when user needs to parse PDFs, extract text from documents/images, perform OCR, use SQL AI functions, or AI-powered analysis.",
  "files":       [ /* 18 entries — see below */ ]
}
```

## File manifest

Each file lives in its own webpack chunk (one chunk per markdown file). The SPA exposes them as raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release — re-derive them from the asset manifest (`index.968bbeb5f6.js` at capture time). The path Genie Code uses with `readSkillFile` is `skills/sql-functions/<filename>`.

| File | Chunk id | Module id | Feature flag |
|---|---|---|---|
| `SKILL.md` | `82577` | `982577` | — |
| `ai_analyze_sentiment.md` | `31535` | `431535` | — |
| `ai_classify.md` | `70413` | `170413` | enableAiClassifySkillV2 (true branch) |
| `ai_classify-legacy.md` | `57739` | `57739` | enableAiClassifySkillV2 (false branch) |
| `ai_classify_large_label_set.md` | `99071` | `999071` | — |
| `ai_extract.md` | `36500` | `736500` | — |
| `ai_fix_grammar.md` | `28884` | `228884` | — |
| `ai_forecast.md` | `73534` | `373534` | — |
| `ai_gen.md` | `12059` | `912059` | — |
| `ai_generate_text.md` | `46942` | `246942` | — |
| `ai_mask.md` | `64999` | `264999` | — |
| `ai_parse_document.md` | `88638` | `788638` | enableAiParseDocumentSkillV2 (true branch) |
| `ai_parse_document-legacy.md` | `84558` | `284558` | enableAiParseDocumentSkillV2 (false branch) |
| `ai_query.md` | `33881` | `533881` | enableAiQuerySkillV2 (true branch) |
| `ai_query-legacy.md` | `19919` | `419919` | enableAiQuerySkillV2 (false branch) |
| `ai_similarity.md` | `98044` | `375663` | — |
| `ai_summarize.md` | `64424` | `64424` | — |
| `ai_translate.md` | `49627` | `549627` | — |

## Files

### `SKILL.md`

Webpack chunk `82577.<hash>.chunk.js`, module `982577`.

````markdown
# SQL Functions in Databricks

This skill provides comprehensive guidance for using SQL functions in Databricks, including powerful AI functions for intelligent data analysis.

## AI Functions

Databricks provides AI functions that leverage state-of-the-art generative AI models for various tasks:

### Text Analysis & Generation

- **[`ai_gen()`](ai_gen.md)**: Generate text responses from prompts
- **[`ai_query()`](ai_query.md)**: Query foundation models and ML endpoints
- **[`ai_summarize()`](ai_summarize.md)**: Generate summaries of text
- **[`ai_fix_grammar()`](ai_fix_grammar.md)**: Correct grammatical errors
- **[`ai_translate()`](ai_translate.md)**: Translate text between languages

### Classification & Extraction

- **[`ai_classify()`](ai_classify.md)**: Classify text or VARIANT content into custom labels using JSON schema
  - **[Large label sets (500+)](ai_classify_large_label_set.md)**: Retrieval + ai_classify pattern for taxonomies exceeding the 500-label limit
- **[`ai_analyze_sentiment()`](ai_analyze_sentiment.md)**: Analyze sentiment (positive, negative, neutral, mixed)
- **[`ai_extract()`](ai_extract.md)**: Extract structured data from text or VARIANT content using JSON schema
- **[`ai_mask()`](ai_mask.md)**: Mask sensitive information

### Semantic Operations

- **[`ai_similarity()`](ai_similarity.md)**: Compute semantic similarity between texts

### Document Processing

- **[`ai_parse_document()`](ai_parse_document.md)**: Extract structured content from documents (PDF, images, etc.)
- **[`ai_prep_search()`](ai_prep_search.md)**: Transform parsed document output into semantic chunks for RAG vector search

### Forecasting

- **[`ai_forecast()`](ai_forecast.md)**: Time series forecasting

For detailed examples and syntax of each function, use the `readSkillFile` tool to access specific function documentation.
````

### `ai_analyze_sentiment.md`

Webpack chunk `31535.<hash>.chunk.js`, module `431535`.

````markdown
# `ai_analyze_sentiment()` Function

Performs sentiment analysis on input text.

## Syntax

```sql
ai_analyze_sentiment(content)
```

## Arguments

- `content`: A STRING expression - text to analyze

## Returns

A STRING with one of: `'positive'`, `'negative'`, `'neutral'`, or `'mixed'`. Returns NULL if sentiment cannot be detected.

## Examples

```sql
SELECT ai_analyze_sentiment('I am happy');
-- Result: "positive"

SELECT ai_analyze_sentiment('I am sad');
-- Result: "negative"

SELECT
  review_text,
  ai_analyze_sentiment(review_text) AS sentiment
FROM customer_reviews
WHERE date >= current_date() - INTERVAL 7 DAYS;
```

## Use Cases

- Analyze customer feedback sentiment
- Monitor social media mentions
- Evaluate product reviews
- Track brand sentiment over time
````

### `ai_classify.md`

Webpack chunk `70413.<hash>.chunk.js`, module `170413`. Feature-flag gated on `enableAiClassifySkillV2 (true branch)`.

````markdown
# `ai_classify()` Function

Classifies text or `VARIANT` from `ai_parse_document` into custom labels. Supports label descriptions, global instructions, and multi-label mode.

> **Always use v2.** Pass `MAP('version', '2.0')`; otherwise DBSQL silently falls back to v1 (plain `STRING` input (no ai_parse_document VARIANT supported) and `STRING` return, no descriptions/`instructions`/`multilabel`, 20-label cap, `STRING`-only input). Only fall back to v1 when editing existing v1 SQL — and recommend migrating.

---

## v2 (recommended)

### Syntax

```sql
ai_classify(
  content,                         -- arg 1: STRING or VARIANT
  labels,                          -- arg 2: JSON STRING (array or object)
  MAP('version', '2.0', ...)       -- arg 3: REQUIRED. Must include 'version' → '2.0'.
)
```

Every example below includes the `MAP(...)` argument. Do not omit it when writing new SQL, even for the simplest cases.

### Arguments

- **`content`** (arg 1, required) — `VARIANT` or `STRING`. Raw text or output from another AI function.
- **`labels`** (arg 2, required) — `STRING` literal. Either:
  - JSON array of names: `'["urgent", "not_urgent"]'` — when names are self-explanatory.
  - JSON object mapping names to descriptions — preferred when labels are close in meaning, domain-specific, or ambiguous (0–1000 chars per description meaningfully improves accuracy):
    ```json
    {
      "billing_error": "Payment, invoice, or refund issues",
      "product_defect": "Any malfunction, bug, or breakage",
      "account_issue": "Login failures, password resets"
    }
    ```
  - 2–500 labels. Names: 1–100 chars. Descriptions: 0–1000 chars.
- **`MAP(...)`** (arg 3, required) — `MAP<STRING, STRING>`. Must include `'version', '2.0'`. Other keys below.

### Options

| Key            | Values                                   | Purpose                                                                                                                                                                                                               |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`      | `'2.0'`                                  | **Required in new code.** Without it, DBSQL falls back to v1.                                                                                                                                                         |
| `instructions` | `STRING`, ≤20,000 chars                  | Global context across all labels — task framing, expected input, tie-breaking rules. Per-label details belong in the labels object. E.g. `'Inputs are customer support emails. Pick the issue they care most about.'` |
| `multilabel`   | `'true'` / `'false'` (default `'false'`) | Allow `response` to contain more than one label. Use only when content can legitimately belong to multiple categories.                                                                                                |

### Returns

A `VARIANT`: `{ "response": ["label"], "error_message": null }`.

- Single-label (default): `response` has one element. Multi-label: may have several.
- Returns `NULL` if `content` is `NULL`.
- If the model can't produce a valid label, `response` is `[]` and `error_message` is `null`.
- On call-time validation failure (malformed labels, invalid options), `response` is `null` and `error_message` describes the error.

---

## Examples

### Simple labels

```sql
SELECT ai_classify(
  'My password is leaked.',
  '["urgent", "not_urgent"]',
  MAP('version', '2.0')
);
-- Result: {"response": ["urgent"], "error_message": null}
```

### Labels with descriptions and global instructions

```sql
SELECT ai_classify(
  'Customer cannot complete checkout due to payment processing error.',
  '{
    "billing_error": "Payment, invoice, or refund issues",
    "product_defect": "Any malfunction, bug, or breakage",
    "account_issue": "Login failures, password resets",
    "feature_request": "Customer suggestions for improvements"
  }',
  MAP('version', '2.0', 'instructions', 'Classify customer support tickets by primary issue.')
);
-- Result: {"response": ["billing_error"], "error_message": null}
```

### Multi-label classification

```sql
SELECT ai_classify(
  'Customer wants refund and reports product arrived broken.',
  '{
    "billing_issue": "Payment or refund requests",
    "product_defect": "Damaged or malfunctioning items",
    "shipping_issue": "Delivery problems"
  }',
  MAP('version', '2.0', 'multilabel', 'true')
);
-- Result: {"response": ["billing_issue", "product_defect"], "error_message": null}
```

### Classify a text column on a table

```sql
SELECT
  review_id,
  ai_classify(
    review_text,
    '{
      "positive": "Overall favorable sentiment",
      "negative": "Overall unfavorable sentiment",
      "mixed": "Both positive and negative aspects",
      "neutral": "No strong sentiment either way"
    }',
    MAP('version', '2.0')
  ) AS sentiment
FROM main.default.product_reviews;
```

### Classify a folder of documents in a Unity Catalog Volume

Pick the pipeline based on the file types:

| Files in the Volume                                                      | Read as                                                                          | Parse step?                                                   | `ai_classify` `content` arg |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------- |
| PDF, image (JPG/JPEG/PNG), Office (DOC/DOCX/PPT/PPTX), or a mix of these | `READ_FILES(..., format => 'binaryFile')` → `content BINARY`                     | **Yes** — `ai_parse_document(content, MAP('version', '2.0'))` | The parsed `VARIANT`        |
| Plain text only (TXT, HTML, MD, etc.)                                    | `READ_FILES(..., format => 'text', wholetext => true)` → `value STRING` per file | **No** — skip parsing entirely                                | The `value` STRING          |

> **Always pass `wholetext => true` for `format => 'text'`.** Without it, `READ_FILES` returns one row per **line**, so `ai_classify` would label individual lines instead of whole documents.

#### Parse pipeline (PDFs / images / Office docs)

Pass the `ai_parse_document` `VARIANT` straight into `ai_classify` — **never** flatten it with `concat_ws` or extract `:elements` text first. v2 reads structure (titles, tables, sections) that stringification would discard.

The example classifies invoices into corporate cost centers; swap the path, labels, and `instructions` for any other document-routing task:

```sql
WITH parsed_docs AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed_content
  FROM READ_FILES('/Volumes/main/default/aifx/invoices/', format => 'binaryFile')
)
SELECT
  path,
  ai_classify(
    parsed_content,
    '["IT","HR","Marketing","Sales","Operations","Finance","R&D","Facilities","Legal"]',
    MAP(
      'version', '2.0',
      'instructions', 'Classify each invoice into the single best-fit corporate cost center based on the vendor and line items.'
    )
  ) AS cost_center
FROM parsed_docs;
```

To persist as a Delta table, wrap with `CREATE OR REPLACE TABLE main.default.<name> AS ...`.

#### Plain-text shortcut (no parsing needed)

```sql
SELECT
  path,
  ai_classify(
    value,
    '["IT","HR","Marketing","Sales","Operations","Finance","R&D","Facilities","Legal"]',
    MAP('version', '2.0', 'instructions', 'Classify each note into the single best-fit corporate cost center.')
  ) AS cost_center
FROM READ_FILES('/Volumes/main/default/aifx/notes/', format => 'text', wholetext => true);
```

#### Mixed Volume (binary + plain text)

`ai_parse_document` doesn't accept plain text and `READ_FILES(format => 'text')` can't parse PDFs, so split by extension and recombine with `UNION ALL`. Define labels and instructions once in a CTE so both branches stay in sync:

```sql
WITH labels AS (
  SELECT
    '["IT","HR","Marketing","Sales","Operations","Finance","R&D","Facilities","Legal"]' AS label_json,
    'Classify each document into the single best-fit corporate cost center.' AS task
),
binary_classified AS (
  SELECT
    f.path,
    ai_classify(
      ai_parse_document(f.content, MAP('version', '2.0')),
      l.label_json,
      MAP('version', '2.0', 'instructions', l.task)
    ) AS cost_center
  FROM READ_FILES(
    '/Volumes/main/default/aifx/intake/*.{pdf,jpg,jpeg,png,doc,docx,ppt,pptx}',
    format => 'binaryFile'
  ) AS f, labels AS l
),
text_classified AS (
  SELECT
    f.path,
    ai_classify(
      f.value,
      l.label_json,
      MAP('version', '2.0', 'instructions', l.task)
    ) AS cost_center
  FROM READ_FILES(
    '/Volumes/main/default/aifx/intake/*.{txt,html,md}',
    format => 'text',
    wholetext => true
  ) AS f, labels AS l
)
SELECT * FROM binary_classified
UNION ALL
SELECT * FROM text_classified;
```

---

## Scaling to 500+ Labels

`ai_classify` accepts up to 500 labels. For larger taxonomies (500–10,000+), use **embedding-based retrieval** to narrow to the top-k most relevant labels per document, then pass those to `ai_classify`. Do NOT use `ai_similarity()` for this — it does not scale to large cross-joins and does not produce reusable embeddings.

**Required pattern** (see **[full guide](ai_classify_large_label_set.md)** for tuning and eval details):

1. **Embed labels and documents** with `ai_query` using an embedding model (e.g. `databricks-qwen3-embedding-0-6b`), casting the result to `ARRAY<FLOAT>`.
2. **Rank labels per document** using `vector_cosine_similarity(doc_embedding, label_embedding)` with a `ROW_NUMBER()` window.
3. **Aggregate top-k labels** (k ≤ 500) into a JSON object via `to_json(map_from_entries(collect_list(struct(label, desc))))`.
4. **Classify** the narrowed set with `ai_classify(text, labels, MAP('version', '2.0'))`.

---

## v1 (legacy — reference only)

v1 is the DBSQL default when `version` is unset. **Do not produce new v1 queries**; recognize it in user SQL and migrate to v2.

```sql
ai_classify(content STRING, labels ARRAY<STRING>)  -- returns STRING

-- Example:
SELECT ai_classify('My password is leaked.', ARRAY('urgent', 'not urgent'));
-- Result: 'urgent'
```

**Limitations vs v2:** `STRING`-only `content` (no `VARIANT` / `ai_parse_document` chaining); `ARRAY<STRING>` labels (no descriptions); 20-label cap; no `instructions`; no `multilabel`; plain `STRING` return.

**Migrating v1 → v2:** wrap labels in a JSON string (array, or object with descriptions); add `MAP('version', '2.0')` as the third arg. The return type changes from `STRING` to `VARIANT` — keep the `VARIANT` as the column; do not flatten it inside the query unless the consumer explicitly requires a plain `STRING`.
````

### `ai_classify-legacy.md`

Webpack chunk `57739.<hash>.chunk.js`, module `57739`. Feature-flag gated on `enableAiClassifySkillV2 (false branch)`.

````markdown
# `ai_classify()` Function

Classifies text content according to custom labels you provide. Supports simple label names for basic classification, or labels with descriptions and global instructions to improve accuracy. Accepts text or `VARIANT` output from other AI functions like `ai_parse_document`, enabling composable workflows.

## Syntax

```sql
ai_classify(content, labels, [options])
```

## Arguments

- `content`: A `VARIANT` or `STRING` expression — raw text or output from another AI function (e.g. `ai_parse_document`)
- `labels`: A `STRING` literal defining classification labels. Can be:
  - A JSON array of label names: `'["urgent", "not_urgent"]'`
  - A JSON object mapping label names to descriptions (0-1000 chars each):
    ```json
    {
      "billing_error": "Payment, invoice, or refund issues",
      "product_defect": "Any malfunction, bug, or breakage",
      "account_issue": "Login failures, password resets"
    }
    ```
  - Must contain 2-500 labels. Each label name must be 1-100 characters.
- `options`: An optional `MAP<STRING, STRING>` with:
  - `instructions`: Global description of the task and domain to improve classification quality (max 20,000 characters)
  - `multilabel`: Set to `"true"` to return multiple labels when multiple categories apply. Default is `"false"`.

## Returns

A `VARIANT` with the structure `{ "response": ["label"], "error_message": null }`. In single-label mode (default), `response` is an array with one element. In multi-label mode, `response` may contain multiple labels. Label names exactly match those provided in the `labels` parameter. Returns `NULL` if content is `NULL` or cannot be classified. When classification fails (e.g. malformed labels or content that cannot be processed), `error_message` contains a descriptive error string and `response` is `null`.

## Examples

```sql
-- Simple labels
SELECT ai_classify(
  'My password is leaked.',
  '["urgent", "not_urgent"]'
);
-- Result: {"response": ["urgent"], "error_message": null}

-- Labels with descriptions
SELECT ai_classify(
  'Customer cannot complete checkout due to payment processing error.',
  '{
    "billing_error": "Payment, invoice, or refund issues",
    "product_defect": "Any malfunction, bug, or breakage",
    "account_issue": "Login failures, password resets",
    "feature_request": "Customer suggestions for improvements"
  }'
);
-- Result: {"response": ["billing_error"], "error_message": null}

-- Using global instructions
SELECT ai_classify(
  'User reports app crashes on startup after update.',
  '["critical", "high", "medium", "low"]',
  MAP('instructions', 'Classify bug severity based on user impact and frequency.')
);
-- Result: {"response": ["critical"], "error_message": null}

-- Multi-label classification
SELECT ai_classify(
  'Customer wants refund and reports product arrived broken.',
  '{
    "billing_issue": "Payment or refund requests",
    "product_defect": "Damaged or malfunctioning items",
    "shipping_issue": "Delivery problems"
  }',
  MAP('multilabel', 'true')
);
-- Result: {"response": ["billing_issue", "product_defect"], "error_message": null}

-- Composability with ai_parse_document
WITH parsed_docs AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed_content
  FROM READ_FILES('/Volumes/support/tickets/', format => 'binaryFile')
)
SELECT
  path,
  ai_classify(
    parsed_content,
    '["billing_error", "product_defect", "account_issue", "feature_request"]',
    MAP('instructions', 'Customer support ticket classification.')
  ) AS ticket_category
FROM parsed_docs;

-- Batch classification on a table
SELECT
  description,
  ai_classify(
    description,
    '["clothing", "shoes", "accessories", "furniture", "electronics"]'
  ) AS category
FROM products
LIMIT 10;
```

## Use Cases

- Categorize customer feedback and support tickets
- Classify documents by type, priority, or department
- Multi-label tagging when content spans multiple categories
- Compose with `ai_parse_document` for end-to-end document classification pipelines
- Segment data by custom categories at scale
````

### `ai_classify_large_label_set.md`

Webpack chunk `99071.<hash>.chunk.js`, module `999071`.

````markdown
# Scaling `ai_classify` to 500+ Labels (Retrieval + AI Classify)

`ai_classify` accepts up to 500 labels. When the label taxonomy is larger (e.g. 500–10,000+ labels), use **embedding-based retrieval** to narrow to the top-k most relevant labels per document, then pass those to `ai_classify`.

This strategy works because most documents only match a small subset of a large taxonomy. Embeddings find that subset cheaply, and `ai_classify` makes the final decision with full LLM reasoning.

## Step-by-step pattern

```sql
-- Step 1: Embed labels (rerun only when labels or descriptions change)
CREATE OR REPLACE TABLE label_embeddings AS
SELECT
  label,
  desc,
  cast(ai_query('databricks-qwen3-embedding-0-6b',
    concat(label, ': ', desc)) AS ARRAY<FLOAT>) AS embedding
FROM my_labels;

-- Step 2: Embed documents
CREATE OR REPLACE TABLE doc_embeddings AS
SELECT
  md5(text) AS id,
  text,
  cast(ai_query('databricks-qwen3-embedding-0-6b',
    text) AS ARRAY<FLOAT>) AS embedding
FROM my_documents;

-- Step 3: Rank labels per document by cosine similarity
CREATE OR REPLACE TABLE ranked_labels AS
SELECT
  d.id,
  d.text,
  l.label,
  l.desc,
  row_number() OVER (
    PARTITION BY d.id
    ORDER BY vector_cosine_similarity(d.embedding, l.embedding) DESC
  ) AS rank
FROM doc_embeddings d
CROSS JOIN label_embeddings l;

-- Step 4: Aggregate top-k labels per document into a JSON object
CREATE OR REPLACE TABLE top_labels_per_doc AS
SELECT
  id,
  text,
  to_json(map_from_entries(collect_list(struct(label, desc)))) AS labels
FROM ranked_labels
WHERE rank <= 500
GROUP BY id, text;

-- Step 5: Classify using the narrowed label set
SELECT
  text,
  ai_classify(text, labels, MAP('version', '2.0')) AS classification
FROM top_labels_per_doc;
```

## When to use this pattern

- The label taxonomy has **more than 500 entries** and cannot be reduced by consolidation
- Labels have short descriptions — concatenating `label: description` produces better embeddings
- The label set is relatively stable (label embeddings can be precomputed once and reused)

## Tuning K

The top-k cutoff controls how many candidate labels reach `ai_classify`. Too small and the correct label may not be in the set (low recall); too large and you waste tokens and latency for no accuracy gain.

To find the right K:

1. **Build an eval set** — sample ~100 documents and manually assign ground-truth labels.
2. **Measure Recall@K** — for each K in `[10, 20, 50, 100, 200, 500]`, check whether the ground-truth label appears in the top-K embedding candidates. This is a retrieval-only metric (no `ai_classify` calls, runs instantly).
3. **Measure end-to-end accuracy** — for each K, run `ai_classify` on the top-K labels and compare against ground truth.
4. **Pick the smallest K where accuracy plateaus** — larger K means slower classification with no quality gain.

```sql
-- Recall@K check (fast, no ai_classify calls)
SELECT
  sum(CASE WHEN r.label IS NOT NULL THEN 1 ELSE 0 END) / count(*) AS recall_at_k
FROM eval_set e
LEFT JOIN ranked_labels r
  ON r.id = e.id
  AND r.label = e.ground_truth_label
  AND r.rank <= 50;  -- try 10, 20, 50, 100, 200, 500
```
````

### `ai_extract.md`

Webpack chunk `36500.<hash>.chunk.js`, module `736500`.

````markdown
# `ai_extract()` Function

Extracts structured data from text and documents according to a schema you provide. Supports simple field names for basic extraction, or complex schemas with nested objects, arrays, type validation, and field descriptions for business documents like invoices, contracts, and financial filings.

The function accepts text or `VARIANT` output from other AI functions like `ai_parse_document`, enabling composable workflows for end-to-end document processing.

## Syntax

```sql
ai_extract(content, schema, [options])
```

## Arguments

- `content`: A `VARIANT` or `STRING` expression — raw text or output from another AI function (e.g. `ai_parse_document`)
- `schema`: A `STRING` literal containing a JSON value. Can be:
  - A JSON array of field names (assumed to be strings): `'["vendor_name", "invoice_id", "total_amount"]'`
  - A JSON object in the **ai_extract user-schema format** described in "Schema grammar" below. This is **not** Spark SQL DDL and **not** standard JSON Schema — it is a small, purpose-built grammar. Writing `STRING`, `BIGINT`, `ARRAY<STRUCT<...>>`, `DECIMAL(10,2)`, or JSON-Schema keywords like `required`, `anyOf`, `format` is rejected at validation time.
- `options`: An optional `MAP<STRING, STRING>` with:
  - `instructions`: Global description of the task and domain to improve extraction quality (max 20,000 characters)

## Returns

A `VARIANT` with the structure `{ "response": { ... }, "error_message": null }`. The `response` field contains extracted data matching the provided schema. Fields may be `null` if not found. Type validation is enforced for `integer`, `number`, `boolean`, and `enum` types. Returns `NULL` if content is `NULL`. When extraction fails (e.g. malformed schema or content that cannot be processed), `error_message` contains a descriptive error string and `response` is `null`.

## Schema grammar (user-schema format)

`ai_extract` uses a purpose-built schema format — it is **not** Spark SQL DDL and **not** standard JSON Schema. SQL-flavored types and JSON-Schema keywords are rejected as `Unsupported type` / `Unsupported keyword`. Stay inside the grammar below.

### Allowed `"type"` values (exact lowercase strings)

| Type        | Meaning                    | Required extra keyword                                                     |
| ----------- | -------------------------- | -------------------------------------------------------------------------- |
| `"string"`  | Text                       | —                                                                          |
| `"integer"` | Whole number               | —                                                                          |
| `"number"`  | Floating-point number      | —                                                                          |
| `"boolean"` | `true` / `false`           | —                                                                          |
| `"enum"`    | One value from a fixed set | `"labels"` — non-empty list of strings (≤ 500 labels; ≤ 7,500 chars total) |
| `"array"`   | Ordered list               | `"items"` — a schema **object** (not a list) with its own `"type"`         |
| `"object"`  | Nested record              | `"properties"` — non-empty map of field name → schema                      |

### Allowed keywords (any other keyword is rejected)

| Keyword         | Valid for | Notes                               |
| --------------- | --------- | ----------------------------------- |
| `"type"`        | all       | one of the 7 strings above          |
| `"description"` | all       | free-form string; guides extraction |
| `"items"`       | `array`   | required; single schema object      |
| `"properties"`  | `object`  | required; non-empty                 |
| `"labels"`      | `enum`    | required; list of strings           |

### Types and keywords that are NOT supported

All of the following are **rejected** by the validator — do not emit them:

- **SQL DDL types:** `STRING`, `VARCHAR`, `CHAR`, `TEXT`, `INT`, `BIGINT`, `SMALLINT`, `TINYINT`, `LONG`, `DOUBLE`, `FLOAT`, `REAL`, `DECIMAL(p,s)`, `NUMERIC`, `DATE`, `TIMESTAMP`, `TIMESTAMP_NTZ`, `INTERVAL`, `BINARY`, `BYTE`, `ARRAY<...>`, `STRUCT<...>`, `MAP<K,V>`. For dates/timestamps use `"type": "string"` with a `"description"` (e.g. `"ISO-8601 date"`). For decimals use `"type": "number"`.
- **Uppercase variants.** Types are case-sensitive lowercase — `"STRING"` is rejected even though `"string"` works.
- **Python / JSON-like aliases:** `"str"`, `"int"`, `"float"`, `"bool"`, `"list"`, `"dict"`, `"null"`, `"None"`.
- **JSON-Schema keywords:** `required`, `anyOf`, `oneOf`, `allOf`, `not`, `$ref`, `$schema`, `$defs`, `title`, `additionalProperties`, `patternProperties`, `minLength`, `maxLength`, `pattern`, `minimum`, `maximum`, `exclusiveMinimum`, `exclusiveMaximum`, `multipleOf`, `minItems`, `maxItems`, `format`, `contentMediaType`, `contentEncoding`, `const`, `enum` (as a keyword — use `"type": "enum"` + `"labels"` instead).

### Structural rules

- **No nested arrays.** An `array` whose `items` have `"type": "array"` is rejected. Wrap the inner list in an `object` first.
- **Max depth = 7** (root `object` counts as depth 1).
- **Max 128 total properties** across the entire schema (counted over all nested objects).
- **Property names:** 1–150 chars; unicode letters/digits, `_`, `.`, `-`; cannot start with `_`; must contain at least one letter or digit.
- **Fields are implicitly nullable and implicitly required. Never emit a `"required"` array in the user schema** — not at the top level, not inside a nested `object`'s `properties`, and not inside an `array`'s `items` object. Declaring a property is enough. Primitives and enums return `null` when not found in the content.
- **`options.instructions`:** max 20,000 characters.

## Common mistakes to avoid

The `schema` argument is a JSON string in the ai_extract user-schema format. Do **not** pass Spark SQL DDL or JSON Schema — both are silently different formats. The most frequent failures:

```sql
-- WRONG: SQL DDL types (STRING, BIGINT, ARRAY<STRUCT<...>>, DECIMAL, DATE)
SELECT ai_extract('...', '{
  "invoice_id": {"type": "STRING"},
  "total_amount": {"type": "DECIMAL(10,2)"},
  "invoice_date": {"type": "DATE"},
  "line_items": {"type": "ARRAY<STRUCT<description:STRING, qty:BIGINT>>"}
}');
-- Error: Unsupported type(s). Supported types: string, integer, number, boolean, object, array, enum.

-- RIGHT: lowercase user-schema types; dates become string + description; decimals become number;
-- nested records use object/properties + array/items
SELECT ai_extract('...', '{
  "invoice_id":    {"type": "string"},
  "total_amount":  {"type": "number"},
  "invoice_date":  {"type": "string", "description": "Invoice date in YYYY-MM-DD format"},
  "line_items": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "description": {"type": "string"},
        "qty":         {"type": "integer"}
      }
    }
  }
}');

-- WRONG: JSON-Schema-style keywords (required, anyOf, top-level enum keyword)
SELECT ai_extract('...', '{
  "id":     {"type": "string"},
  "status": {"enum": ["open", "closed"]},
  "required": ["id"]
}');
-- Error: Unsupported keyword(s): required, enum.

-- RIGHT: user schema has no `required`; enums are a type with labels
SELECT ai_extract('...', '{
  "id":     {"type": "string"},
  "status": {"type": "enum", "labels": ["open", "closed"]}
}');

-- WRONG: `"required"` inside a nested object or inside an array's items.
-- This is a JSON-Schema pattern and does NOT belong in user-schema format,
-- even though it sits deep inside the schema.
SELECT ai_extract('...', '{
  "invoice_header": {
    "type": "object",
    "properties": {
      "invoice_id":  {"type": "string"},
      "vendor_name": {"type": "string"}
    },
    "required": ["invoice_id", "vendor_name"]
  },
  "line_items": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "description": {"type": "string"},
        "quantity":    {"type": "integer"}
      },
      "required": ["description", "quantity"]
    }
  }
}');
-- Error: Unsupported keyword(s): required (at root.invoice_header and root.line_items.items).

-- RIGHT: simply omit every `"required"` array. All declared properties
-- are implicitly required-and-nullable in the user-schema format.
SELECT ai_extract('...', '{
  "invoice_header": {
    "type": "object",
    "properties": {
      "invoice_id":  {"type": "string"},
      "vendor_name": {"type": "string"}
    }
  },
  "line_items": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "description": {"type": "string"},
        "quantity":    {"type": "integer"}
      }
    }
  }
}');
```

## Examples

```sql
-- Simple schema: field names only
SELECT ai_extract(
  'Invoice #12345 from Acme Corp for $1,250.00 dated 2024-01-15',
  '["invoice_id", "vendor_name", "total_amount", "invoice_date"]'
);
-- Result:
-- {"response": {"invoice_id": "12345", "vendor_name": "Acme Corp", "total_amount": "1250.00", "invoice_date": "2024-01-15"}, "error_message": null}

-- Advanced schema: types and descriptions
SELECT ai_extract(
  'Invoice #12345 from Acme Corp for $1,250.00 dated 2024-01-15',
  '{
    "invoice_id": {"type": "string", "description": "Unique invoice identifier"},
    "vendor_name": {"type": "string", "description": "Legal business name"},
    "total_amount": {"type": "number", "description": "Total invoice amount"},
    "invoice_date": {"type": "string", "description": "Date in YYYY-MM-DD format"}
  }'
);
-- Result:
-- {"response": {"invoice_id": "12345", "vendor_name": "Acme Corp", "total_amount": 1250.00, "invoice_date": "2024-01-15"}, "error_message": null}

-- Nested objects and arrays
SELECT ai_extract(
  'Invoice #12345 from Acme Corp
   Line 1: Widget A, qty 10, $50.00 each
   Line 2: Widget B, qty 5, $100.00 each
   Subtotal: $1,000.00, Tax: $80.00, Total: $1,080.00',
  '{
    "invoice_header": {
      "type": "object",
      "properties": {
        "invoice_id": {"type": "string"},
        "vendor_name": {"type": "string"}
      }
    },
    "line_items": {
      "type": "array",
      "description": "List of invoiced products",
      "items": {
        "type": "object",
        "properties": {
          "description": {"type": "string"},
          "quantity": {"type": "integer"},
          "unit_price": {"type": "number"}
        }
      }
    },
    "totals": {
      "type": "object",
      "properties": {
        "subtotal": {"type": "number"},
        "tax_amount": {"type": "number"},
        "total_amount": {"type": "number"}
      }
    }
  }'
);

-- Enums
SELECT ai_extract(
  'Invoice #12345 from Acme Corp, amount: $1,250.00 USD',
  '{
    "invoice_id": {"type": "string"},
    "total_amount": {"type": "number"},
    "currency": {
      "type": "enum",
      "labels": ["USD", "EUR", "GBP", "CAD", "AUD"],
      "description": "Currency code"
    }
  }'
);

-- Composability with ai_parse_document
WITH parsed_docs AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed_content
  FROM READ_FILES('/Volumes/finance/invoices/', format => 'binaryFile')
)
SELECT
  path,
  ai_extract(
    parsed_content,
    '["invoice_id", "vendor_name", "total_amount"]',
    MAP('instructions', 'These are vendor invoices.')
  ) AS invoice_data
FROM parsed_docs;

-- Use in a table scan
SELECT
  text,
  ai_extract(text, '["product", "price", "date"]') AS extracted_info
FROM sales_messages;
```

## Use Cases

- Extract structured fields from invoices, contracts, and financial filings
- Parse unstructured data into typed, nested schemas
- Compose with `ai_parse_document` for end-to-end document processing pipelines
- Use enums to constrain extraction to known categories
- Build structured datasets from free text at scale
````

### `ai_fix_grammar.md`

Webpack chunk `28884.<hash>.chunk.js`, module `228884`.

````markdown
# `ai_fix_grammar()` Function

Corrects grammatical errors in text using AI.

## Syntax

```sql
ai_fix_grammar(content)
```

## Arguments

- `content`: A STRING expression - text to correct

## Returns

A STRING with corrected grammar. Returns NULL if content is NULL.

## Examples

```sql
SELECT ai_fix_grammar('This sentence have some mistake');
-- Result: "This sentence has some mistakes"

SELECT ai_fix_grammar('She dont know what to did.');
-- Result: "She doesn't know what to do."

SELECT ai_fix_grammar('He go to school every days.');
-- Result: "He goes to school every day."

SELECT
  user_comment,
  ai_fix_grammar(user_comment) AS corrected_comment
FROM user_feedback
WHERE grammar_check_needed = true;
```

## Use Cases

- Clean user-generated content
- Improve text quality in datasets
- Prepare data for analysis
- Standardize text formatting
````

### `ai_forecast.md`

Webpack chunk `73534.<hash>.chunk.js`, module `373534`.

````markdown
# `ai_forecast()` Function

Table-valued function for time series forecasting.

## Syntax

```sql
ai_forecast(
  observed TABLE,
  horizon DATE | TIMESTAMP | STRING,
  time_col STRING,
  value_col STRING | ARRAY<STRING>,
  group_col STRING | ARRAY<STRING> | NULL DEFAULT NULL,
  prediction_interval_width DOUBLE DEFAULT 0.95,
  frequency STRING DEFAULT 'auto',
  seed INTEGER | NULL DEFAULT NULL,
  parameters STRING DEFAULT '{}'
)
```

## Key Arguments

- `observed`: Table with historical data
- `horizon`: End time for forecast (exclusive)
- `time_col`: Name of time column
- `value_col`: Column(s) to forecast (max 100 metrics per group)
- `group_col`: Optional grouping columns
- `prediction_interval_width`: Confidence interval (0 to 1)
- `frequency`: Time granularity ('auto', 'day', 'week', etc.)
- `parameters`: JSON for model config (e.g., `{"global_floor": 0}`)

## Returns

Future values with columns: `{value}_forecast`, `{value}_upper`, `{value}_lower` for each value column.

## Examples

### Simple Forecast

```sql
WITH aggregated AS (
  SELECT
    DATE(tpep_pickup_datetime) AS ds,
    SUM(fare_amount) AS revenue
  FROM samples.nyctaxi.trips
  GROUP BY 1
)
SELECT * FROM ai_forecast(
  TABLE(aggregated),
  horizon => '2016-03-31',
  time_col => 'ds',
  value_col => 'revenue'
);
```

### Multiple Metrics with Grouping

```sql
WITH aggregated AS (
  SELECT
    DATE(order_date) AS ds,
    region,
    SUM(revenue) AS revenue,
    COUNT(*) AS n_orders
  FROM sales
  GROUP BY 1, 2
)
SELECT * FROM ai_forecast(
  TABLE(aggregated),
  horizon => '2024-12-31',
  time_col => 'ds',
  value_col => ARRAY('revenue', 'n_orders'),
  group_col => 'region',
  prediction_interval_width => 0.9,
  parameters => '{"global_floor": 0}'
);
```

### With Custom Parameters by Group

```sql
WITH past AS (
  SELECT
    CASE WHEN amount < 100 THEN 'small' ELSE 'large' END AS size_bucket,
    CASE WHEN amount < 100 THEN '{"daily_order": 0}'
         ELSE '{"daily_order": "auto"}' END AS parameters,
    DATE(timestamp) AS ds,
    SUM(amount) AS total
  FROM transactions
  GROUP BY ALL
)
SELECT * FROM ai_forecast(
  TABLE(past),
  horizon => (SELECT MAX(ds) + INTERVAL 30 DAYS FROM past),
  time_col => 'ds',
  value_col => 'total',
  group_col => 'size_bucket',
  parameters => 'parameters'
);
```

## Use Cases

- Sales forecasting
- Demand prediction
- Capacity planning
- Trend analysis
- Resource allocation

## Best Practices

- Coalesce missing values or provide explicit frequency for sparse data
- Use `global_floor` and `global_cap` to constrain predictions
- Ensure regular time intervals for accurate forecasting

## Visualizing forecast output

When charting `ai_forecast()` output alongside actuals as two line series, UNION ALL the actual rows and forecast rows into a single dataset, and add a **bridge row**: the last actual value duplicated into the forecast columns. Without the bridge row, the actual and forecast lines render disconnected with a visual gap.

```sql
SELECT ds, <metric> AS actual, CAST(NULL AS DOUBLE) AS forecast FROM actuals
UNION ALL
-- bridge row: last actual copied into forecast column
SELECT ds, CAST(NULL AS DOUBLE), <metric> FROM actuals WHERE ds = (SELECT MAX(ds) FROM actuals)
UNION ALL
SELECT ds, CAST(NULL AS DOUBLE), <metric>_forecast FROM forecasted
```
````

### `ai_gen.md`

Webpack chunk `12059.<hash>.chunk.js`, module `912059`.

````markdown
# `ai_gen()` Function

Invokes a generative AI model to answer user-provided prompts.

## Syntax

```sql
ai_gen(prompt)
```

## Arguments

- `prompt`: A STRING expression containing your question or instruction

## Returns

A STRING with the AI-generated response.

## Examples

```sql
SELECT ai_gen('Generate a concise, cheerful email title for a summer bike sale with 20% discount');
-- Result: "Summer Bike Sale: Grab Your Dream Bike at 20% Off!"

SELECT
  question,
  ai_gen('You are a teacher. Answer the students question in 50 words: ' || question) AS answer
FROM questions
LIMIT 10;
```

## Use Cases

- Generate content based on prompts
- Answer questions from data
- Create personalized messages
- Generate descriptions or summaries
````

### `ai_generate_text.md`

Webpack chunk `46942.<hash>.chunk.js`, module `246942`.

````markdown
# `ai_generate_text()` Function

**DEPRECATED:** Use `ai_query()` with external models instead.

## Syntax

```sql
ai_generate_text(prompt, modelName[, param1, value1] [...])
```

## Arguments

- `prompt`: STRING - text prompt for the LLM
- `modelName`: STRING literal - only `'openai/gpt-3.5-turbo'` or `'azure_openai/gpt-41-mini'`
- Additional key-value pairs for authentication and configuration

## Migration Path

Use `ai_query()` instead:

```sql
-- Old (deprecated):
SELECT ai_generate_text(
  'Summarize this text',
  'openai/gpt-3.5-turbo',
  'apiKey', secret('scope', 'key')
);

-- New (recommended):
SELECT ai_query(
  'my-openai-endpoint',
  'Summarize this text'
);
```

## Note

This function is deprecated and maintained for backward compatibility only. All new development should use `ai_query()` which supports both foundation models and external models with a cleaner interface.
````

### `ai_mask.md`

Webpack chunk `64999.<hash>.chunk.js`, module `264999`.

````markdown
# `ai_mask()` Function

Masks specified entities in text for privacy and security.

## Syntax

```sql
ai_mask(content, labels)
```

## Arguments

- `content`: A STRING expression - text to mask
- `labels`: An ARRAY<STRING> literal - entity types to mask

## Returns

A STRING where specified entities are replaced with `[MASKED]`. Returns NULL if content is NULL.

## Examples

```sql
SELECT ai_mask(
  'John Doe lives in New York. His email is john.doe@example.com.',
  array('person', 'email')
);
-- Result: "[MASKED] lives in New York. His email is [MASKED]."

SELECT ai_mask(
  'Contact me at 555-1234 or visit us at 123 Main St.',
  array('phone', 'address')
);
-- Result: "Contact me at [MASKED] or visit us at [MASKED]"

SELECT
  message_id,
  ai_mask(message_text, array('email', 'phone', 'ssn')) AS sanitized_message
FROM customer_messages;
```

## Use Cases

- Anonymize PII in datasets
- Redact sensitive information
- Create privacy-compliant datasets
- Protect customer data
````

### `ai_parse_document.md`

Webpack chunk `88638.<hash>.chunk.js`, module `788638`. Feature-flag gated on `enableAiParseDocumentSkillV2 (true branch)`.

````markdown
# `ai_parse_document()` Function

Extracts structured content from unstructured documents (PDFs, images, Office docs). Returns `VARIANT` — pass it directly into `ai_extract()` or `ai_classify()` for composable document pipelines, or flatten to text for `ai_query()`.

> **Always use v2.** Pass `MAP('version', '2.0')` on every `ai_parse_document` call — v2 is the only supported version.

---

## v2

### Syntax

```sql
ai_parse_document(
  content,                         -- arg 1: BINARY (document bytes) or STRING
  MAP('version', '2.0', ...)       -- arg 2: REQUIRED. Must include 'version' → '2.0'.
)
```

Every example below includes the `MAP(...)` argument. Do not omit it when writing new SQL, even for the simplest cases.

### Arguments

- **`content`** (arg 1, required) — `BINARY` (recommended) or `STRING`. Document bytes. Almost always the `content` column from `READ_FILES(..., format => 'binaryFile')`. **Do not pass a path as a STRING** — `ai_parse_document` reads bytes, not paths.
- **`MAP(...)`** (arg 2, required) — `MAP<STRING, STRING>`. Must include `'version', '2.0'`. Other keys below.

### Options

| Key                       | Values                                                | Purpose                                                                                                                                                 |
| ------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                 | `'2.0'`                                               | **Required in new code.** Only supported value.                                                                                                         |
| `descriptionElementTypes` | `'*'` (default), `'figure'`, `''`, or comma-separated | Element types that get AI-generated descriptions. `'*'` means all allowed types (currently just `figure`). `''` disables descriptions. Adds model cost. |
| `imageOutputPath`         | UC Volume path (`STRING`)                             | Write per-page images to this path for visual debugging. Path must be a UC Volume the warehouse can write to.                                           |
| `pageRange`               | 1-indexed ranges: `'1-5'`, `'3'`, `'1-3,7,10-12'`     | Parse only the listed pages. Useful for large PDFs where you only need specific sections.                                                               |

### Supported formats

PDF, JPG, JPEG, PNG, TIFF, TIF, DOC, DOCX, PPT, PPTX.

### Returns

A `VARIANT` containing:

- `document.pages` — array of page metadata (page number, size, etc.)
- `document.elements` — array of extracted elements. Each element has a `type`: `text` (paragraphs), `table` (HTML-formatted), `figure` (images/charts, with optional AI descriptions), `title`, `caption`, `section_header`, `page_header`, `page_footer`, `page_number`, `footnote`.
- `metadata` — file info and schema version.
- `error_status` — non-null when parsing failed. Check before downstream use: `WHERE try_cast(parsed:error_status AS STRING) IS NULL`.

---

## Examples

### Parse a single PDF from a Volume

```sql
SELECT
  path,
  ai_parse_document(content, MAP('version', '2.0')) AS parsed
FROM READ_FILES(
  '/Volumes/main/default/aifx/invoices/invoice_001.pdf',
  format => 'binaryFile'
);
```

### Parse a volume of documents

`READ_FILES` on a directory enumerates every matching file. Always use `format => 'binaryFile'` so `content` is the raw `BINARY`.

```sql
SELECT
  path,
  ai_parse_document(content, MAP('version', '2.0')) AS parsed
FROM READ_FILES(
  '/Volumes/main/default/aifx/invoices/',
  format => 'binaryFile'
);
```

To persist as a Delta table, wrap with `CREATE OR REPLACE TABLE main.default.<name> AS ...`.

### Parse only specific pages

```sql
SELECT
  path,
  ai_parse_document(
    content,
    MAP('version', '2.0', 'pageRange', '1-3,7')
  ) AS parsed
FROM READ_FILES(
  '/Volumes/main/default/aifx/contracts/',
  format => 'binaryFile'
);
```

### Emit image output + figure descriptions

```sql
SELECT
  path,
  ai_parse_document(
    content,
    MAP(
      'version', '2.0',
      'imageOutputPath', '/Volumes/main/default/aifx/page_images/',
      'descriptionElementTypes', '*'
    )
  ) AS parsed
FROM READ_FILES('/Volumes/main/default/aifx/invoices/', format => 'binaryFile');
```

### Chain: `ai_parse_document` → `ai_extract`

Pass the `VARIANT` directly into `ai_extract`. **Do not** flatten with `concat_ws` or extract `:elements` text first — the parsed structure (titles, tables, sections) carries signal that stringification discards.

`ai_extract`'s DBSQL default is v1, and v1 can't accept `VARIANT` input and ignores nested/typed schemas. The `MAP('version', '2.0', ...)` on `ai_extract` is required for the chain to work.

#### Typed schema (preferred)

```sql
WITH parsed_docs AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed_content
  FROM READ_FILES('/Volumes/main/default/aifx/invoices/', format => 'binaryFile')
)
SELECT
  path,
  ai_extract(
    parsed_content,
    '{
      "invoice_id": {"type": "string"},
      "vendor_name": {"type": "string", "description": "Legal business name"},
      "line_items": {
        "type": "array",
        "description": "List of invoiced products",
        "items": {
          "type": "object",
          "properties": {
            "description": {"type": "string"},
            "quantity": {"type": "integer"},
            "unit_price": {"type": "number"}
          }
        }
      },
      "total_amount": {"type": "number"}
    }',
    MAP('version', '2.0', 'instructions', 'These are vendor invoices. Extract all line items and totals.')
  ) AS invoice_data
FROM parsed_docs;
```

#### Simple field list

For quick extraction without typed schemas:

```sql
WITH parsed_docs AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed_content
  FROM READ_FILES('/Volumes/main/default/aifx/invoices/', format => 'binaryFile')
)
SELECT
  path,
  ai_extract(
    parsed_content,
    '["invoice_id", "vendor_name", "total_amount"]',
    MAP('version', '2.0', 'instructions', 'These are vendor invoices.')
  ) AS invoice_data
FROM parsed_docs;
```

### Chain: `ai_parse_document` → `ai_classify`

Pass the `VARIANT` directly. `ai_classify`'s DBSQL default is v1 (which can't accept `VARIANT` and has no `instructions`/`multilabel` options), so the `MAP('version', '2.0', ...)` on `ai_classify` is required.

```sql
WITH parsed_docs AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed_content
  FROM READ_FILES('/Volumes/main/default/aifx/intake/', format => 'binaryFile')
)
SELECT
  path,
  ai_classify(
    parsed_content,
    '{
      "invoice": "Billing documents with line items and totals",
      "contract": "Legal agreements with terms and signatures",
      "receipt": "Proof of payment or purchase confirmation",
      "correspondence": "Letters, memos, or general communication"
    }',
    MAP('version', '2.0', 'instructions', 'Classify scanned business documents by type.')
  ) AS doc_type
FROM parsed_docs;
```

### Summarize / free-form Q&A with `ai_query`

`ai_query` takes a `STRING` prompt — not `VARIANT`. For summaries or free-form Q&A over a document, flatten the parsed elements once to text, then send to `ai_query`:

```sql
WITH parsed_docs AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed
  FROM READ_FILES('/Volumes/main/default/aifx/invoices/', format => 'binaryFile')
),
text_content AS (
  SELECT
    path,
    concat_ws('\n\n',
      transform(
        try_cast(parsed:document:elements AS ARRAY<VARIANT>),
        element -> try_cast(element:content AS STRING)
      )
    ) AS full_text
  FROM parsed_docs
  WHERE try_cast(parsed:error_status AS STRING) IS NULL
)
SELECT
  path,
  ai_query(
    'databricks-claude-sonnet-4',
    'Summarize this document: ' || full_text
  ) AS summary
FROM text_content;
```

Flattening is correct here and **only** here — don't do it when chaining into `ai_extract` / `ai_classify`.

### Access specific parts of the parsed VARIANT

```sql
WITH corpus AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed
  FROM READ_FILES('/Volumes/main/default/aifx/invoices/', format => 'binaryFile')
)
SELECT
  path,
  parsed:document:pages AS pages,
  parsed:document:elements AS elements,
  parsed:metadata AS metadata
FROM corpus;
```
````

### `ai_parse_document-legacy.md`

Webpack chunk `84558.<hash>.chunk.js`, module `284558`. Feature-flag gated on `enableAiParseDocumentSkillV2 (false branch)`.

````markdown
# `ai_parse_document()` Function

Extracts structured content from unstructured documents (PDF, images, Office docs). The output is `VARIANT`, which can be passed directly into `ai_extract()` and `ai_classify()` for composable end-to-end document processing pipelines.

## Syntax

```sql
ai_parse_document(content)
-- or
ai_parse_document(content, MAP('version', '2.0'))
```

## Arguments

- `content`: A `BINARY` expression — document bytes
- `version`: Optional STRING — output schema version (`"2.0"`)
- `imageOutputPath`: Optional STRING — UC volume path to save page images
- `descriptionElementTypes`: Optional STRING — AI descriptions (`''`, `'figure'`, or `'*'` for all)

## Supported Formats

- PDF
- JPG/JPEG
- PNG
- DOC/DOCX
- PPT/PPTX

## Returns

A `VARIANT` containing:

- `document.pages`: Array of page metadata
- `document.elements`: Array of extracted elements (text, tables, figures, etc.)
- `error_status`: Any processing errors
- `metadata`: File information and schema version

## Examples

### Basic Document Parsing

```sql
SELECT
  path,
  ai_parse_document(content) AS parsed
FROM READ_FILES(
  '/Volumes/catalog/schema/volume/documents/*.pdf',
  format => 'binaryFile'
);
```

### With Image Output and Descriptions

```sql
SELECT
  path,
  ai_parse_document(
    content,
    map(
      'version', '2.0',
      'imageOutputPath', '/Volumes/catalog/schema/volume/images/',
      'descriptionElementTypes', '*'
    )
  ) AS parsed
FROM READ_FILES('/Volumes/data/docs/', format => 'binaryFile');
```

### Chain: Parse -> Extract (v2)

Pass `ai_parse_document` output directly into `ai_extract` as `VARIANT` content — no intermediate text concatenation needed.

```sql
WITH parsed_docs AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed_content
  FROM READ_FILES('/Volumes/finance/invoices/', format => 'binaryFile')
)
SELECT
  path,
  ai_extract(
    parsed_content,
    '{
      "invoice_id": {"type": "string"},
      "vendor_name": {"type": "string", "description": "Legal business name"},
      "line_items": {
        "type": "array",
        "description": "List of invoiced products",
        "items": {
          "type": "object",
          "properties": {
            "description": {"type": "string"},
            "quantity": {"type": "integer"},
            "unit_price": {"type": "number"}
          },
          "required": ["description", "quantity", "unit_price"]
        }
      },
      "total_amount": {"type": "number"}
    }',
    MAP('version', '2.0', 'instructions', 'These are vendor invoices. Extract all line items and totals.')
  ) AS invoice_data
FROM parsed_docs;
```

### Chain: Parse -> Classify (v2)

```sql
WITH parsed_docs AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed_content
  FROM READ_FILES('/Volumes/intake/documents/', format => 'binaryFile')
)
SELECT
  path,
  ai_classify(
    parsed_content,
    '{
      "invoice": "Billing documents with line items and totals",
      "contract": "Legal agreements with terms and signatures",
      "receipt": "Proof of payment or purchase confirmation",
      "correspondence": "Letters, memos, or general communication"
    }',
    MAP('version', '2.0', 'instructions', 'Classify scanned business documents by type.')
  ) AS doc_type
FROM parsed_docs;
```

### Chain: Parse -> Extract with Simple Schema

For quick extraction without typed schemas:

```sql
WITH parsed_docs AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed_content
  FROM READ_FILES('/Volumes/finance/invoices/', format => 'binaryFile')
)
SELECT
  path,
  ai_extract(
    parsed_content,
    '["invoice_id", "vendor_name", "total_amount"]',
    MAP('version', '2.0', 'instructions', 'These are vendor invoices.')
  ) AS invoice_data
FROM parsed_docs;
```

### Extract and Summarize with ai_query

```sql
WITH parsed_docs AS (
  SELECT
    path,
    ai_parse_document(content, MAP('version', '2.0')) AS parsed
  FROM READ_FILES('/Volumes/data/*.pdf', format => 'binaryFile')
),
text_content AS (
  SELECT
    path,
    concat_ws('\n\n',
      transform(
        try_cast(parsed:document:elements AS ARRAY<VARIANT>),
        element -> try_cast(element:content AS STRING)
      )
    ) AS full_text
  FROM parsed_docs
  WHERE try_cast(parsed:error_status AS STRING) IS NULL
)
SELECT
  path,
  ai_query(
    'databricks-claude-sonnet-4',
    'Summarize this document: ' || full_text
  ) AS summary
FROM text_content;
```

### Access Specific Elements

```sql
WITH corpus AS (
  SELECT
    path,
    ai_parse_document(content) AS parsed
  FROM READ_FILES('/Volumes/docs/*.pdf', format => 'binaryFile')
)
SELECT
  path,
  parsed:document:pages AS pages,
  parsed:document:elements AS elements,
  parsed:metadata AS metadata
FROM corpus;
```

## Element Types

- `text`: Regular paragraphs
- `table`: Tabular data (HTML format)
- `figure`: Images and charts
- `title`: Document/section titles
- `caption`: Image/table captions
- `section_header`: Section headings
- `page_footer`, `page_header`, `page_number`: Page elements
- `footnote`: Footnotes

## Use Cases

- Parse -> Extract: Structured field extraction from invoices, contracts, financial filings
- Parse -> Classify: Route documents by type, priority, or department
- Parse -> Classify + Extract: Full intake pipelines with routing and extraction
- Parse -> ai_query: Summarization, Q&A, and free-form analysis on document content
- Build searchable document databases and knowledge bases

## Best Practices

- Use `binaryFile` format with `READ_FILES`
- Check `error_status` before processing
- Use `imageOutputPath` for visual debugging
- Enable descriptions only when needed (reduces cost)
- Use `version` parameter to ensure schema stability
- Prefer passing `VARIANT` directly to `ai_extract`/`ai_classify` over manual text concatenation
````

### `ai_query.md`

Webpack chunk `33881.<hash>.chunk.js`, module `533881`. Feature-flag gated on `enableAiQuerySkillV2 (true branch)`.

````markdown
# `ai_query()` Function

General-purpose function to query foundation models, custom ML models, and AI agents for real-time or batch inference.

> **Default to specialized AI functions when applicable** (`ai_extract`, `ai_classify`, etc.). Use `ai_query` only when: no specialized function fits, user needs a specific endpoint, or user complains the specialized function output is insufficient (escalate to ai_query with a stronger model).

See the [Databricks `ai_query` docs](https://docs.databricks.com/aws/en/large-language-models/ai-query#supported-models) for the current list of supported foundation model endpoints.

## Syntax

**For foundation models:**

```sql
ai_query(endpoint, request)
```

**For custom models:**

```sql
ai_query(endpoint, request, returnType, failOnError)
```

## Arguments

- `endpoint`: STRING literal - name of serving endpoint
- `request`: STRING for foundation models, STRUCT for custom models
- `returnType`: Optional schema definition for response
- `failOnError`: Optional BOOLEAN (default true) - controls error handling
- `modelParameters`: Optional STRUCT for model configuration
- `responseFormat`: Optional JSON schema for structured output
- `files`: Optional for multimodal inputs (images)

## Examples

### Query Foundation Model

```sql
SELECT ai_query(
  'databricks-meta-llama-3-3-70b-instruct',
  'Describe Databricks SQL in 30 words.'
) AS summary;
```

### With Model Parameters

```sql
SELECT ai_query(
  'databricks-meta-llama-3-3-70b-instruct',
  'Summarize: ' || document,
  modelParameters => named_struct('max_tokens', 100, 'temperature', 0.7)
) AS summary
FROM main.default.bbc_articles;
```

### Structured Output

```sql
SELECT ai_query(
  'databricks-meta-llama-3-3-70b-instruct',
  'Extract details from: ' || document,
  responseFormat => 'STRUCT<title:STRING, topics:ARRAY<STRING>, keywords:ARRAY<STRING>>'
) AS article_info
FROM main.default.bbc_articles;
```

### Error Handling

```sql
SELECT
  index,
  ai_query(
    'databricks-meta-llama-3-3-70b-instruct',
    'Summarize: ' || document,
    failOnError => false
  ) AS result
FROM main.default.bbc_articles;
-- Each row returns STRUCT(response, errorStatus).
```

### Multimodal (Images)

```sql
SELECT
  path,
  ai_query(
    'databricks-llama-4-maverick',
    'what is this image about?',
    files => content
  ) AS description
FROM READ_FILES('/Volumes/catalog/schema/volume/', format => 'binaryFile');
```

`format => 'binaryFile'` is required so `READ_FILES` exposes the `content BINARY` column that `files => content` consumes.

### Query Custom ML Model

```sql
SELECT ai_query(
  endpoint => 'spam-classification-endpoint',
  request => named_struct('timestamp', timestamp, 'text', text),
  returnType => 'BOOLEAN'
) AS is_spam
FROM messages;
```

### Escalating from a specialized ai function to `ai_query` with a stronger model

Escalate only when (1) iterating on the specialized function (descriptions, global instructions, ICL examples) hasn't fixed the user-reported quality issue, or (2) outputs are null because they exceed the model's max output tokens. Pick a current SOTA endpoint from the supported list (see docs link above).

```sql
-- Original ai_extract call (user reports insufficient quality):
SELECT ai_extract(Messages, '["customer_email", "issue_priority", "reported_amount"]')
FROM main.default.bronze_customer_support_logs;

-- Escalate to ai_query with a SOTA endpoint and structured output:
SELECT
  ai_query(
    '<sota-endpoint>',
    'Extract the customer email, issue priority (one of: low, medium, high, critical), and reported dollar amount from the support ticket.\n\n'
    || 'Ticket: ' || Messages,
    responseFormat => 'STRUCT<customer_email:STRING, issue_priority:STRING, reported_amount:DOUBLE>',
    modelParameters => named_struct('temperature', 0),
    failOnError => false
  ) AS extracted
FROM main.default.bronze_customer_support_logs;
```

```sql
-- Original ai_classify call (user reports insufficient quality):
SELECT ai_classify(
  document,
  '["politics", "business", "technology", "science", "health", "other"]',
  MAP('version', '2.0')
) AS category
FROM main.default.bbc_articles;

-- Escalate to ai_query with a SOTA endpoint and structured output:
SELECT
  ai_query(
    'databricks-claude-opus-4-6',
    'Classify the article into exactly one of these categories. Choose the single best fit.\n\n'
    || '- politics: government, elections, policy, legislation\n'
    || '- business: companies, markets, economy, corporate news\n'
    || '- technology: software, hardware, IT industry, digital products\n'
    || '- science: research, academic study, nature — not consumer tech products\n'
    || '- health: medicine, public health, biotech, wellness\n'
    || '- other: does not fit the categories above\n\n'
    || 'Article: ' || document,
    responseFormat => 'STRUCT<category:STRING>',
    modelParameters => named_struct('temperature', 0),
    failOnError => false
  ) AS classified
FROM main.default.bbc_articles;
```

## Use Cases

- Batch inference on large datasets
- Query any foundation model or custom ML model
- Multimodal analysis (text + images)
- AI agent integration
- Quality fallback when a specialized function (e.g. `ai_extract`, `ai_classify`) isn't accurate enough
````

### `ai_query-legacy.md`

Webpack chunk `19919.<hash>.chunk.js`, module `419919`. Feature-flag gated on `enableAiQuerySkillV2 (false branch)`.

````markdown
# `ai_query()` Function

General-purpose function to query foundation models, custom ML models, and AI agents for real-time or batch inference.

## Syntax

**For foundation models:**

```sql
ai_query(endpoint, request)
```

**For custom models:**

```sql
ai_query(endpoint, request, returnType, failOnError)
```

## Arguments

- `endpoint`: STRING literal - name of serving endpoint
- `request`: STRING for foundation models, STRUCT for custom models
- `returnType`: Optional schema definition for response
- `failOnError`: Optional BOOLEAN (default true) - controls error handling
- `modelParameters`: Optional STRUCT for model configuration
- `responseFormat`: Optional JSON schema for structured output
- `files`: Optional for multimodal inputs (images)

## Examples

### Query Foundation Model

```sql
SELECT ai_query(
  'databricks-meta-llama-3-3-70b-instruct',
  'Describe Databricks SQL in 30 words.'
) AS summary;
```

### With Model Parameters

```sql
SELECT ai_query(
  "databricks-meta-llama-3-3-70b-instruct",
  "Summarize: " || text,
  modelParameters => named_struct('max_tokens', 100, 'temperature', 0.7)
) AS summary
FROM articles;
```

### Structured Output

```sql
SELECT ai_query(
  "databricks-gpt-oss-20b",
  "Extract details from: " || abstract,
  responseFormat => 'STRUCT<title:STRING, authors:ARRAY<STRING>, keywords:ARRAY<STRING>>'
) FROM research_papers;
```

### Error Handling

```sql
SELECT ai_query(
  "databricks-meta-llama-3-3-70b-instruct",
  "Summarize: " || text,
  failOnError => false
) AS result
FROM articles;
-- Returns STRUCT with response and errorStatus fields
```

### Multimodal (Images)

```sql
SELECT ai_query(
  'databricks-llama-4-maverick',
  'what is this image about?',
  files => content
) FROM READ_FILES("/Volumes/catalog/schema/volume/image.jpeg");
```

### Query Custom ML Model

```sql
SELECT ai_query(
  endpoint => 'spam-classification-endpoint',
  request => named_struct('timestamp', timestamp, 'text', text),
  returnType => 'BOOLEAN'
) AS is_spam
FROM messages;
```

## Use Cases

- Batch inference on large datasets
- Query any foundation model or custom ML model
- Extract structured information
- Multimodal analysis (text + images)
- AI agent integration
````

### `ai_similarity.md`

Webpack chunk `98044.<hash>.chunk.js`, module `375663`.

````markdown
# `ai_similarity()` Function

Computes semantic similarity between two strings.

## Syntax

```sql
ai_similarity(expr1, expr2)
```

## Arguments

- `expr1`: A STRING expression - first text
- `expr2`: A STRING expression - second text

## Returns

A FLOAT representing semantic similarity. Score of 1.0 means texts are equal. Scores are relative and should only be used for ranking.

## Examples

```sql
SELECT ai_similarity('Apache Spark', 'Apache Spark');
-- Result: 1.0

SELECT
  company_name,
  ai_similarity(company_name, 'Databricks') AS similarity_score
FROM customers
ORDER BY similarity_score DESC
LIMIT 10;
-- Result: "Databricks Inc." (top result)

-- Find similar product descriptions
SELECT
  p1.product_id,
  p2.product_id AS similar_product_id,
  ai_similarity(p1.description, p2.description) AS similarity
FROM products p1
CROSS JOIN products p2
WHERE p1.product_id < p2.product_id
  AND ai_similarity(p1.description, p2.description) > 0.8;
```

## Use Cases

- Find duplicate or similar records
- Semantic search
- Content recommendation
- Deduplication
- Fuzzy matching
````

### `ai_summarize.md`

Webpack chunk `64424.<hash>.chunk.js`, module `64424`.

````markdown
# `ai_summarize()` Function

Generates a summary of text using AI.

## Syntax

```sql
ai_summarize(content[, max_words])
```

## Arguments

- `content`: A STRING expression - text to summarize
- `max_words`: Optional non-negative INTEGER - target word count (default: 50, 0 = no limit)

## Returns

A STRING containing the summary. Returns NULL if content is NULL.

## Examples

```sql
SELECT ai_summarize(
  'Apache Spark is a unified analytics engine for large-scale data processing. ' ||
  'It provides high-level APIs in Java, Scala, Python and R, and an optimized ' ||
  'engine that supports general execution graphs.',
  20
);
-- Result: "Apache Spark is a unified, multi-language analytics engine for
-- large-scale data processing with tools for SQL, ML, and stream computing."

SELECT
  article_id,
  title,
  ai_summarize(full_text, 100) AS summary
FROM news_articles
WHERE published_date = current_date();
```

## Use Cases

- Create article summaries
- Generate executive summaries
- Condense long documents
- Create preview text for content
````

### `ai_translate.md`

Webpack chunk `49627.<hash>.chunk.js`, module `549627`.

````markdown
# `ai_translate()` Function

Translates text to a specified target language.

## Syntax

```sql
ai_translate(content, to_lang)
```

## Arguments

- `content`: A STRING expression - text to translate
- `to_lang`: A STRING expression - target language code

## Supported Languages

- English (en)
- German (de)
- French (fr)
- Italian (it)
- Portuguese (pt)
- Hindi (hi)
- Spanish (es)
- Thai (th)

## Returns

A STRING with translated text. Returns NULL if content is NULL.

## Examples

```sql
SELECT ai_translate('Hello, how are you?', 'es');
-- Result: "Hola, ¿cómo estás?"

SELECT ai_translate('La vida es un hermoso viaje.', 'en');
-- Result: "Life is a beautiful journey."

SELECT
  product_id,
  description,
  ai_translate(description, 'es') AS description_es,
  ai_translate(description, 'fr') AS description_fr,
  ai_translate(description, 'de') AS description_de
FROM products
WHERE active = true;
```

## Use Cases

- Localize content for multiple markets
- Translate customer feedback
- Create multilingual datasets
- Support international users
````
