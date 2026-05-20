# Custom Calculations

Custom calculations let you define dynamic metrics and transformations without modifying dataset queries. You can define up to 200 custom calculations per dataset.

## Types of Custom Calculations

### Calculated Measures

Aggregated values such as total sales or average cost. Calculated measures can use the `AGGREGATE OVER` command to compute values across time ranges.

**Example: Profit Margin**

```sql
(SUM(Price) - SUM(Cost)) / SUM(Price)
```

This measure is dynamic and automatically updates to reflect filters applied to the dataset.

### Calculated Dimensions

Unaggregated values or transformations such as categorizing age ranges or formatting strings.

**Example: Age Groups**

```sql
CASE
   WHEN age < 18 THEN '<18'
   WHEN age >= 18 AND age < 25 THEN '18–24'
   WHEN age >= 25 AND age < 35 THEN '25–34'
   WHEN age >= 35 AND age < 45 THEN '35–44'
   WHEN age >= 45 AND age < 55 THEN '45–54'
   WHEN age >= 55 AND age < 65 THEN '55–64'
   WHEN age >= 65 THEN '65+'
END
```

## AGGREGATE OVER Syntax

The `AGGREGATE OVER` command computes measures across time ranges or other ordered sets.

### Syntax

```
{expr} AGGREGATE OVER (ORDER BY {field} {frame})
```

### Arguments

- **expr**: A valid calculated measure expression to evaluate
- **field**: A valid column name (required)
- **frame** (required): One of the following:
  - `CURRENT`: Current row only
  - `CUMULATIVE`: From start to current row
  - `ALL`: All rows
  - `TRAILING <number> <unit>`: Previous N days/months/years (e.g., `TRAILING 7 DAY`)
  - `LEADING <number> <unit>`: Next N days/months/years (e.g., `LEADING 1 MONTH`)

**Example: 7-Day Moving Average**

```sql
(
  (SUM(Price) - SUM(Cost)) / SUM(Price)
) AGGREGATE OVER (
  ORDER BY Date
  TRAILING 7 DAY
)
```

### Key Features

- No need to specify partition fields - inherits from visualization grouping
- More dynamic than SQL window functions
- If ORDER BY field not grouped in visualization, uses last row's aggregated value

## Supported Function Categories

### Aggregate Functions

All calculated measures must be aggregated. Common functions include:

- **Basic**: `COUNT(*)`, `SUM(expr)`, `AVG(expr)`, `MIN(expr)`, `MAX(expr)`
- **Advanced**: `COUNT(DISTINCT expr)`, `MEDIAN(expr)`, `PERCENTILE(expr, percentage)`
- **Statistical**: `STDDEV(expr)`, `VARIANCE(expr)`, `CORR(expr1, expr2)`
- **Conditional**: `COUNT_IF(expr)`, `SUM(CASE WHEN ... THEN ... END)`
- **String**: `STRING_AGG(expr, delimiter)`, `LISTAGG(expr, delimiter)`

**DISTINCT and FILTER**

```sql
-- Count distinct values
COUNT(DISTINCT customer_id)

-- Aggregate with filter
SUM(amount) FILTER(WHERE status = 'completed')
```

### Arithmetic Operations

- Basic: `+`, `-`, `*`, `/`, `%` (modulo)
- Functions: `ABS(expr)`, `ROUND(expr, d)`, `FLOOR(expr)`, `CEIL(expr)`
- Power: `POW(expr1, expr2)`, `SQRT(expr)`, `EXP(expr)`
- Logarithmic: `LOG(base, expr)`, `LOG10(expr)`, `LN(expr)`
- Trigonometric: `SIN(expr)`, `COS(expr)`, `ASIN(expr)`, `ACOS(expr)`
- Safe operations: `TRY_ADD(expr1, expr2)`, `TRY_DIVIDE(dividend, divisor)`

### Boolean Operators

- Comparison: `=`, `!=`, `<`, `>`, `<=`, `>=`, `<>`
- Logical: `AND`, `OR`, `NOT`
- Special: `BETWEEN`, `IN`, `LIKE`, `ILIKE` (case-insensitive)
- Null checks: `ISNULL(expr)`, `ISNOTNULL(expr)`, `ISNAN(expr)`
- Pattern matching: `REGEXP_LIKE(str, regexp)`, `RLIKE`

### String Functions

- Concatenation: `CONCAT(expr1, expr2, ...)`, `CONCAT_WS(sep, expr1, ...)`
- Case: `UPPER(str)`, `LOWER(str)`, `INITCAP(str)`
- Trimming: `TRIM(str)`, `LTRIM(str)`, `RTRIM(str)`
- Substrings: `SUBSTR(str, pos, len)`, `LEFT(str, len)`, `RIGHT(str, len)`
- Search: `INSTR(str, substr)`, `LOCATE(substr, str)`, `CONTAINS(left, right)`
- Replace: `REPLACE(str, search, replace)`, `REGEXP_REPLACE(str, regexp, rep)`
- Formatting: `FORMAT_STRING(format, expr, ...)`, `LPAD(str, len, pad)`

### Date and Timestamp Functions

- Current: `CURRENT_DATE()`, `CURRENT_TIMESTAMP()`, `NOW()`
- Extraction: `YEAR(expr)`, `MONTH(expr)`, `DAY(expr)`, `HOUR(expr)`, `MINUTE(expr)`
- Formatting: `DATE_FORMAT(expr, fmt)`, `TO_CHAR(expr, fmt)`
- Arithmetic: `DATE_ADD(date, days)`, `DATE_SUB(date, days)`, `DATEADD(unit, value, expr)`
- Differences: `DATEDIFF(end, start)`, `MONTHS_BETWEEN(ts1, ts2)`
- Truncation: `DATE_TRUNC(fmt, source)`, `TRUNC(expr, fmt)`
- Conversion: `TO_DATE(expr, fmt)`, `TO_TIMESTAMP(expr, fmt)`
- Parts: `DATE_PART(field, source)`, `EXTRACT(field FROM source)`
- Special: `LAST_DAY(expr)`, `NEXT_DAY(date, day_of_week)`

### Cast Functions

- Basic: `CAST(expr AS type)`, `expr :: type`
- Type-specific: `STRING(expr)`, `INT(expr)`, `DOUBLE(expr)`, `BOOLEAN(expr)`
- Date: `DATE(expr)`, `TIMESTAMP(expr)`
- Safe: `TRY_CAST(expr AS type)`, `TRY_TO_TIMESTAMP(expr, fmt)`
- Decimal: `DECIMAL(expr, precision, scale)`

### Conditional Functions

- **CASE**: Choose from multiple conditions
  ```sql
  CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE default_result
  END
  ```
- **IF**: Simple condition
  ```sql
  IF(condition, true_value, false_value)
  ```
- **COALESCE**: First non-null value
  ```sql
  COALESCE(expr1, expr2, expr3)
  ```
- **NULLIF**: Return NULL if equal
  ```sql
  NULLIF(expr1, expr2)
  ```
- **NVL**: Null value logic
  ```sql
  NVL(expr1, expr2)  -- Returns expr2 if expr1 is NULL
  NVL2(expr1, expr2, expr3)  -- Returns expr2 if expr1 not NULL, else expr3
  ```

## Common Examples

### Conditionally Filter and Aggregate

```sql
SUM(CASE
  WHEN pickup_zip=10103 THEN fare_amount
  ELSE 0
END)
```

### Calculate Percentage

```sql
(COUNT(*) * 100.0) / SUM(COUNT(*)) OVER ()
```

### Format Dates

```sql
DATE_FORMAT(order_date, 'YYYY-MM-dd')
```

### Construct Strings

```sql
CONCAT(first_name, ' ', last_name)
```

### Safe Division

```sql
TRY_DIVIDE(SUM(revenue), COUNT(orders))
```

### Year-over-Year Growth

```sql
(current_value - previous_value) / previous_value * 100
```

## Performance

- Small datasets (≤100,000 rows and ≤100MB) run in the browser for faster responsiveness
- Larger datasets are processed by the SQL warehouse
- Custom calculations are optimized automatically

## Limitations

- **Custom calculations CANNOT reference other custom calculations** - expressions can only reference the base dataset columns, not other calculated fields
- Columns used in expressions must belong to the same dataset
- Expressions that reference external tables or data sources aren't supported
- Table visualizations support calculated dimensions but not calculated measures
- Maximum 200 custom calculations per dataset

## Metric View Datasets

When working with Unity Catalog metric view datasets:

- ✅ **Dimensions**: Can be referenced directly and used in aggregations (e.g., `SUM(dimension_field)`)
- ✅ **Measures**: Use MEASURE() syntax in widget field expressions for calculations involving measures

## Creating Calculations

1. Open an existing dataset or create a new one
2. Click **Custom Calculation**
3. Enter a **Name** and optional **Description**
4. Enter your expression in the **Expression** field
5. Click **Create**

Calculated measures appear in the **Measures** section with an fx icon. Calculated dimensions appear in the **Dimensions** section.
