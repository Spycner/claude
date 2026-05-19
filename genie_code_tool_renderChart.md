# Genie Code tool: `renderChart`

Verbatim function-calling tool definition shipped by Genie Code on the `/ajax-api/2.0/conversation/llmproxy/` endpoint. Captured 2026-05-19 from workspace `dbc-df321db9-486f.cloud.databricks.com` by patching `window.fetch` on the SPA and triggering a single chat message. See [genie_code_payload.md](genie_code_payload.md) for the full request envelope and [genie_code_findings.md](genie_code_findings.md) for the auth bootstrap that lets you replay this endpoint programmatically.

Position in tools array: **4 of 18**.

## Description

> Make and render charts inline directly on the chat page.
> 
> - If executeCode is not available or failed, we cannot renderChart as we fetch chart data by running generated SQL through code execution.
> - Id fields are opaque. Do not try to understand, parse or generate them.
> - DatasetId refers to the fully qualified table name of format 'catalog_name.schema.table'. Use tableSearch or similar tools to get the table name. Use readTable tool to fetch the schema first.
> 

## Parameters (JSON Schema)

```json
{
  "type": "object",
  "$defs": {
    "WidgetColumn": {
      "type": "object",
      "properties": {
        "columnName": {
          "type": "string",
          "description": "User friendly name for the column"
        },
        "columnExpression": {
          "type": "string",
          "description": "Column name or aggregation expression.\nFor metric view datasets:\n  - Simple measure references: Just provide the column name (e.g., \"total_Revenue\") - MEASURE() wrapping is handled automatically\n  - Calculations involving measures: MUST use MEASURE() explicitly (e.g., \"MEASURE(`total_Revenue`) / MEASURE(`count_orders`)\")\n  - Dimensions: Reference directly with backticks (e.g., \"`order_date`\", \"`region`\")\nFor regular datasets: Provide the column name or aggregation expression as usual.\n    "
        }
      },
      "required": [
        "columnName",
        "columnExpression"
      ],
      "description": "Represents a column in a widget, with a user-friendly name and a column expression (can be a column name or aggregation expression). For metric view datasets, measure fields are automatically wrapped with MEASURE().",
      "additionalProperties": false
    },
    "QuantitativeColumn": {
      "type": "object",
      "properties": {
        "columnName": {
          "type": "string",
          "description": "User friendly name for the column"
        },
        "columnExpression": {
          "type": "string",
          "description": "Column name or aggregation expression. Column or aggregation that results in numeric values."
        },
        "format": {
          "type": "object",
          "properties": {
            "formatType": {
              "type": "string",
              "enum": [
                "number",
                "percent",
                "currency"
              ],
              "description": "Format type: number (plain), percent (multiply by 100 and add %), or currency (with currency symbol)"
            },
            "decimalPlaces": {
              "type": "integer",
              "minimum": 0,
              "maximum": 10,
              "description": "Number of decimal places to display"
            },
            "abbreviation": {
              "type": "string",
              "enum": [
                "none",
                "compact"
              ],
              "description": "Number abbreviation: none (full number) or compact (K, M, B for thousands, millions, billions)"
            },
            "currencyCode": {
              "type": "string",
              "description": "ISO 4217 currency code (e.g., USD, EUR, GBP) for currency formatting"
            }
          },
          "required": [],
          "description": "Optional number formatting options for display",
          "additionalProperties": false
        },
        "reverseScale": {
          "type": "boolean",
          "description": "Reverse the scale direction (e.g., high values at bottom, low at top)"
        }
      },
      "required": [
        "columnName",
        "columnExpression"
      ],
      "description": "Represents a quantitative column or aggregation. Resulting value must be numeric and comparable.",
      "additionalProperties": false
    },
    "CategoricalColumn": {
      "type": "object",
      "properties": {
        "columnName": {
          "type": "string",
          "description": "User friendly name for the column"
        },
        "columnExpression": {
          "type": "string",
          "description": "Column name or aggregation expression. Only categorical values that can are countable are allowed."
        },
        "sort": {
          "type": "object",
          "properties": {
            "by": {
              "type": "string",
              "enum": [
                "value",
                "label",
                "custom"
              ],
              "description": "Sort by: value (numeric), label (alphabetic), or custom order"
            },
            "order": {
              "type": "string",
              "enum": [
                "ascending",
                "descending"
              ],
              "description": "Sort direction"
            },
            "customOrder": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "For custom sort: ordered list of category values"
            }
          },
          "required": [
            "by"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "columnName",
        "columnExpression"
      ],
      "description": "Represents a categorical column that are enums, set of possible values, dates. Numeric columns that are categorical in nature are also allowed.",
      "additionalProperties": false
    },
    "ColorColumn": {
      "type": "object",
      "properties": {
        "columnName": {
          "type": "string",
          "description": "User friendly name for the column"
        },
        "columnExpression": {
          "type": "string",
          "description": "Column name or aggregation expression."
        },
        "scaleType": {
          "type": "string",
          "enum": [
            "categorical",
            "quantitative"
          ],
          "description": "Categorical for distinct colors per group (e.g., region, status). Quantitative for gradient scale (e.g., temperature, intensity). Auto-detected from column type if omitted."
        }
      },
      "required": [
        "columnName",
        "columnExpression"
      ],
      "description": "Represents a column that can be used to assign a range of colors.",
      "additionalProperties": false
    }
  },
  "description": "Parameters to render charts on a page.\n- Do not set LIMIT in the dataset SQL. The system will automatically limit the rows to 100 for chart rendering.\n- Make sure the dataset SQL is valid and returns the expected columns used in the chart specifications.\n- Origin (0,0) is the top-left corner of the page. The page has a grid layout with 6 columns and as many rows as needed.\n- Keep the layout compact. Counters and summaries should be at the top, followed by charts.\n- Each tool call starts a new canvas. Always start placing charts from the top-left corner (0,0) and fill left to right, top to bottom. No need to account for previous charts from earlier tool calls.\n  ",
  "properties": {
    "datasets": {
      "type": "array",
      "description": "A list of dataset IDs (fully qualified table names) that can be used in the charts. Minimum 1 dataset must be provided.",
      "items": {
        "type": "object",
        "properties": {
          "alias": {
            "type": "string",
            "description": "The alias to refer to the dataset in chart specifications. Make sure alias is valid sql CTE alias and unique across all datasets."
          },
          "sql": {
            "type": "string",
            "description": "The base SQL for the dataset. Can be a fully qualified table/view name (e.g. \"catalog.schema.table\") or a SELECT/WITH query. Trailing semicolons are stripped automatically. For metric views: measure columns require wrapping in MEASURE() or an aggregate function (e.g. SUM, COUNT); avoid raw SELECT * when measures are needed."
          }
        },
        "required": [
          "alias",
          "sql"
        ],
        "additionalProperties": false
      }
    },
    "chartSpecifications": {
      "type": "array",
      "description": "A list of chart specifications to render. Minimum 1 chart must be provided.",
      "items": {
        "type": "object",
        "properties": {
          "chartSpecification": {
            "anyOf": [
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "table"
                    ],
                    "description": "Widget type: table"
                  },
                  "columns": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "List of columns to display"
                  },
                  "conditionalFormatting": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "column": {
                          "type": "string",
                          "description": "Column name to apply the formatting rule to"
                        },
                        "operator": {
                          "type": "string",
                          "enum": [
                            "=",
                            "!=",
                            "<",
                            ">",
                            "<=",
                            ">=",
                            "contains",
                            "startswith",
                            "endswith",
                            "is null",
                            "is not null"
                          ],
                          "description": "Comparison operator"
                        },
                        "value": {
                          "anyOf": [
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            }
                          ],
                          "description": "Value to compare against (not needed for is null/is not null)"
                        },
                        "backgroundColor": {
                          "type": "string",
                          "description": "Hex color for cell background"
                        },
                        "foregroundColor": {
                          "type": "string",
                          "description": "Hex color for text"
                        }
                      },
                      "required": [
                        "column",
                        "operator"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Conditional formatting rules for table cells"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "columns",
                  "datasetRefName",
                  "name",
                  "filterExpressions"
                ],
                "description": "Table widget schema. Contains a list of columns, the dataset ID, and a name.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "bar"
                    ],
                    "description": "Widget type: bar"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/CategoricalColumn"
                  },
                  "yAxis": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "stackType": {
                    "type": "string",
                    "enum": [
                      "stack",
                      "percent-stack"
                    ],
                    "description": "Stack layout: \"stack\" for regular cumulative stacked (default), \"percent-stack\" for 100% normalized stacked."
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "colors": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "description": "Map category values to hex colors (e.g., {\"Technology\": \"#FF1493\", \"Furniture\": \"#1f77b4\"}). Use widget render data to get exact series names before setting colors. Only specify colors you want to customize."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxis",
                  "color",
                  "datasetRefName",
                  "name",
                  "filterExpressions"
                ],
                "description": "Bar chart. Use categorical color to split into multiple series. Labels often useful.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "line"
                    ],
                    "description": "Widget type: line"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/WidgetColumn"
                  },
                  "yAxis": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "colors": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "description": "Map category values to hex colors (e.g., {\"Technology\": \"#FF1493\", \"Furniture\": \"#1f77b4\"}). Use widget render data to get exact series names before setting colors. Only specify colors you want to customize."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxis",
                  "datasetRefName",
                  "name",
                  "filterExpressions"
                ],
                "description": "Line chart with single Y-axis metric. Only use color that is categorical. Labels can clutter.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "pie"
                    ],
                    "description": "Widget type: pie"
                  },
                  "angle": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "color": {
                    "$ref": "#/$defs/CategoricalColumn"
                  },
                  "stackType": {
                    "type": "string",
                    "enum": [
                      "stack",
                      "percent-stack"
                    ],
                    "description": "Stack layout: \"stack\" for regular cumulative stacked (default), \"percent-stack\" for 100% normalized stacked."
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "colors": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "description": "Map category values to hex colors (e.g., {\"Technology\": \"#FF1493\", \"Furniture\": \"#1f77b4\"}). Use widget render data to get exact series names before setting colors. Only specify colors you want to customize."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "angle",
                  "color",
                  "datasetRefName",
                  "name",
                  "filterExpressions"
                ],
                "description": "Pie chart widget schema. Contains angle and color columns, the dataset ID, and a name. Labels recommended.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "area"
                    ],
                    "description": "Widget type: area"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/WidgetColumn"
                  },
                  "yAxis": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "stackType": {
                    "type": "string",
                    "enum": [
                      "stack",
                      "percent-stack"
                    ],
                    "description": "Stack layout: \"stack\" for regular cumulative stacked (default), \"percent-stack\" for 100% normalized stacked."
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "colors": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "description": "Map category values to hex colors (e.g., {\"Technology\": \"#FF1493\", \"Furniture\": \"#1f77b4\"}). Use widget render data to get exact series names before setting colors. Only specify colors you want to customize."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxis",
                  "color",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Area chart with single Y-axis metric. Use categorical color field to create multiple series from categories. Labels can clutter.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "dual-y-axis-bar"
                    ],
                    "description": "Widget type: dual-y-axis-bar"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/CategoricalColumn"
                  },
                  "yAxisPrimary": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/QuantitativeColumn"
                    },
                    "description": "One or more metrics for the primary (left) Y-axis. Color automatically distinguishes metrics."
                  },
                  "yAxisSecondary": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/QuantitativeColumn"
                    },
                    "description": "One or more metrics for the secondary (right) Y-axis with different scale. Color automatically distinguishes metrics."
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxisPrimary",
                  "yAxisSecondary",
                  "datasetRefName",
                  "name",
                  "filterExpressions"
                ],
                "description": "Dual Y-axis bar chart for comparing metrics with different scales/units. Color is automatically used to distinguish between primary and secondary metrics. Labels often useful.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "dual-y-axis-line"
                    ],
                    "description": "Widget type: dual-y-axis-line"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/WidgetColumn"
                  },
                  "yAxisPrimary": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/QuantitativeColumn"
                    },
                    "description": "One or more metrics for the primary (left) Y-axis. Color automatically distinguishes metrics."
                  },
                  "yAxisSecondary": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/QuantitativeColumn"
                    },
                    "description": "One or more metrics for the secondary (right) Y-axis with different scale. Color automatically distinguishes metrics."
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxisPrimary",
                  "yAxisSecondary",
                  "datasetRefName",
                  "name",
                  "filterExpressions"
                ],
                "description": "Dual Y-axis line chart for comparing metrics with different scales/units. Color is automatically used to distinguish between primary and secondary metrics. Labels often useful.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "dual-y-axis-area"
                    ],
                    "description": "Widget type: dual-y-axis-area"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/WidgetColumn"
                  },
                  "yAxisPrimary": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/QuantitativeColumn"
                    },
                    "description": "One or more metrics for the primary (left) Y-axis. Color automatically distinguishes metrics."
                  },
                  "yAxisSecondary": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/QuantitativeColumn"
                    },
                    "description": "One or more metrics for the secondary (right) Y-axis with different scale. Color automatically distinguishes metrics."
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxisPrimary",
                  "yAxisSecondary",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Dual Y-axis area chart for comparing metrics with different scales/units. Color is automatically used to distinguish between primary and secondary metrics. Labels often useful.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "scatter"
                    ],
                    "description": "Widget type: scatter"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/WidgetColumn"
                  },
                  "yAxis": {
                    "$ref": "#/$defs/WidgetColumn"
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "size": {
                    "type": "object",
                    "properties": {
                      "columnName": {
                        "type": "string",
                        "description": "User friendly name for the column"
                      },
                      "columnExpression": {
                        "type": "string",
                        "description": "Column name or aggregation expression. Column or aggregation that results in numeric values."
                      }
                    },
                    "required": [
                      "columnName",
                      "columnExpression"
                    ],
                    "description": "Size encoding for bubble chart. Use this to vary point sizes based on a numeric value.",
                    "additionalProperties": false
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "colors": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "description": "Map category values to hex colors (e.g., {\"Technology\": \"#FF1493\", \"Furniture\": \"#1f77b4\"}). Use widget render data to get exact series names before setting colors. Only specify colors you want to customize."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxis",
                  "color",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Scatter chart. Use categorical color to distinguish groups. Use size for bubble charts. Labels can clutter.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "heatmap"
                    ],
                    "description": "Widget type: heatmap"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/WidgetColumn"
                  },
                  "yAxis": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "colors": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "description": "Map category values to hex colors (e.g., {\"Technology\": \"#FF1493\", \"Furniture\": \"#1f77b4\"}). Use widget render data to get exact series names before setting colors. Only specify colors you want to customize."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxis",
                  "color",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Heatmap. Use quantitative color for intensity scale. Labels often useful.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "histogram"
                    ],
                    "description": "Widget type: histogram"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/WidgetColumn"
                  },
                  "yAxis": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "stackType": {
                    "type": "string",
                    "enum": [
                      "stack",
                      "percent-stack"
                    ],
                    "description": "Stack layout: \"stack\" for regular cumulative stacked (default), \"percent-stack\" for 100% normalized stacked."
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "colors": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "description": "Map category values to hex colors (e.g., {\"Technology\": \"#FF1493\", \"Furniture\": \"#1f77b4\"}). Use widget render data to get exact series names before setting colors. Only specify colors you want to customize."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxis",
                  "color",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Histogram. Use categorical color for stacked histograms. Labels can clutter.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "waterfall"
                    ],
                    "description": "Widget type: waterfall"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/CategoricalColumn"
                  },
                  "yAxis": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "colors": {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "description": "Map category values to hex colors (e.g., {\"Technology\": \"#FF1493\", \"Furniture\": \"#1f77b4\"}). Use widget render data to get exact series names before setting colors. Only specify colors you want to customize."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxis",
                  "color",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Waterfall chart. Use categorical color to distinguish contribution types. Labels recommended.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "combo"
                    ],
                    "description": "Widget type: combo (dual Y-axis chart)"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/CategoricalColumn"
                  },
                  "yAxisPrimary": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/QuantitativeColumn"
                    },
                    "description": "Primary Y-axis fields (left side, rendered as bars)",
                    "minItems": 1
                  },
                  "yAxisSecondary": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/QuantitativeColumn"
                    },
                    "description": "Secondary Y-axis fields (right side, rendered as lines)"
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxisPrimary",
                  "datasetRefName",
                  "name",
                  "filterExpressions"
                ],
                "description": "Combo chart with dual Y-axes. Use for comparing metrics with different scales (e.g., revenue vs growth %). Primary fields show as bars on left axis, secondary as lines on right axis. Labels can clutter.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "pivot"
                    ],
                    "description": "Widget type: pivot"
                  },
                  "rows": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Row fields"
                  },
                  "columns": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/CategoricalColumn"
                    },
                    "description": "Column fields, list can be empty"
                  },
                  "values": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/QuantitativeColumn"
                    },
                    "description": "Value fields (aggregations supported)"
                  },
                  "showRowTotals": {
                    "type": "boolean",
                    "description": "Show totals for each row group"
                  },
                  "showColumnTotals": {
                    "type": "boolean",
                    "description": "Show totals for each column group"
                  },
                  "conditionalFormatting": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "column": {
                          "type": "string",
                          "description": "Column name to apply the formatting rule to"
                        },
                        "operator": {
                          "type": "string",
                          "enum": [
                            "=",
                            "!=",
                            "<",
                            ">",
                            "<=",
                            ">=",
                            "contains",
                            "startswith",
                            "endswith",
                            "is null",
                            "is not null"
                          ],
                          "description": "Comparison operator"
                        },
                        "value": {
                          "anyOf": [
                            {
                              "type": "string"
                            },
                            {
                              "type": "number"
                            }
                          ],
                          "description": "Value to compare against (not needed for is null/is not null)"
                        },
                        "backgroundColor": {
                          "type": "string",
                          "description": "Hex color for cell background"
                        },
                        "foregroundColor": {
                          "type": "string",
                          "description": "Hex color for text"
                        }
                      },
                      "required": [
                        "column",
                        "operator"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Conditional formatting rules for pivot cells"
                  },
                  "colorScale": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "column": {
                          "type": "string",
                          "description": "Column name to apply the color scale to"
                        },
                        "colorScheme": {
                          "type": "string",
                          "enum": [
                            "blues",
                            "greens",
                            "reds",
                            "greys",
                            "orangered",
                            "greenblue",
                            "viridis",
                            "magma",
                            "plasma",
                            "redblue",
                            "redyellowblue",
                            "blueorange",
                            "purpleorange",
                            "purplegreen",
                            "pinkyellowgreen",
                            "redgrey",
                            "redyellowgreen",
                            "spectral",
                            "rainbow",
                            "sinebow"
                          ],
                          "description": "Color scheme for the gradient"
                        },
                        "reverse": {
                          "type": "boolean",
                          "description": "Reverse the color scale direction"
                        }
                      },
                      "required": [
                        "column",
                        "colorScheme"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Color scale (heatmap) formatting for pivot values"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "rows",
                  "columns",
                  "values",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Pivot table. Column widths are not supported. Column field list can be empty.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "funnel"
                    ],
                    "description": "Widget type: funnel"
                  },
                  "stage": {
                    "$ref": "#/$defs/WidgetColumn"
                  },
                  "value": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "stage",
                  "value",
                  "color",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Funnel chart. Use categorical color to distinguish stages. Labels recommended.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "sankey"
                    ],
                    "description": "Widget type: sankey"
                  },
                  "stages": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/CategoricalColumn"
                    },
                    "description": "Stages defining the flow"
                  },
                  "value": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "stages",
                  "value",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Sankey diagram",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "forecast-line"
                    ],
                    "description": "Widget type: forecast-line"
                  },
                  "xAxis": {
                    "$ref": "#/$defs/WidgetColumn"
                  },
                  "yAxis": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "xAxis",
                  "yAxis",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Forecast line chart. Requires dataset with columns: {value}, {value}_forecast, {value}_forecast_lower, {value}_forecast_upper. Create a new dataset with AI_FORECAST() if needed. Labels can clutter.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "box"
                    ],
                    "description": "Widget type: box (box plot)"
                  },
                  "category": {
                    "$ref": "#/$defs/CategoricalColumn"
                  },
                  "value": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "showLabels": {
                    "type": "boolean",
                    "description": "Display data values on chart elements"
                  },
                  "hideXAxisTitle": {
                    "type": "boolean",
                    "description": "Hide X-axis title"
                  },
                  "hideYAxisTitle": {
                    "type": "boolean",
                    "description": "Hide Y-axis title"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "category",
                  "value",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Box plot widget showing distribution of values (min, max, median, quartiles) across categories. Labels rarely useful.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "choropleth-map"
                    ],
                    "description": "Widget type: choropleth-map"
                  },
                  "countryType": {
                    "type": "string",
                    "enum": [
                      "admin0-name",
                      "admin0-iso-3166-1-alpha-3",
                      "admin0-unit-code"
                    ],
                    "description": "Mapbox API type for admin-0 level, default to admin0-unit-code"
                  },
                  "countryColumn": {
                    "type": "string",
                    "description": "Country column name. Do not escape column name or use any SQL function."
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "extra": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions add grouping."
                  },
                  "legendPosition": {
                    "type": "string",
                    "enum": [
                      "top",
                      "bottom",
                      "left",
                      "right",
                      "hidden"
                    ],
                    "description": "Legend position or hidden (default: right)"
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "color",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Choropleth map. Use quantitative color for geographic intensity by metric value.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "symbol-map"
                    ],
                    "description": "Widget type: Point Map"
                  },
                  "latitude": {
                    "$ref": "#/$defs/WidgetColumn",
                    "description": "Column containing latitude values (numeric, -90 to 90)"
                  },
                  "longitude": {
                    "$ref": "#/$defs/WidgetColumn",
                    "description": "Column containing longitude values (numeric, -180 to 180)"
                  },
                  "size": {
                    "$ref": "#/$defs/QuantitativeColumn",
                    "description": "Optional size encoding for bubble map"
                  },
                  "color": {
                    "$ref": "#/$defs/ColorColumn"
                  },
                  "tooltip": {
                    "type": "array",
                    "items": {
                      "$ref": "#/$defs/WidgetColumn"
                    },
                    "description": "Extra measures for tooltip; dimensions here add grouping."
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "latitude",
                  "longitude",
                  "datasetRefName",
                  "filterExpressions",
                  "name"
                ],
                "description": "Point Map. Plots points on a map using latitude/longitude coordinates. Requires columns with numeric lat/long values.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "counter"
                    ],
                    "description": "Widget type: counter"
                  },
                  "value": {
                    "$ref": "#/$defs/QuantitativeColumn"
                  },
                  "valueStyleRules": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "condition": {
                          "type": "string",
                          "enum": [
                            "<",
                            ">",
                            "=",
                            "<=",
                            ">="
                          ]
                        },
                        "threshold": {
                          "type": "number"
                        },
                        "color": {
                          "type": "string",
                          "description": "Hex color (eg. #FF0000)"
                        }
                      },
                      "required": [
                        "condition",
                        "threshold",
                        "color"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Conditional colors for value (e.g., red if < 0)"
                  },
                  "target": {
                    "type": "object",
                    "properties": {
                      "columnName": {
                        "type": "string",
                        "description": "User friendly name for the target column"
                      },
                      "columnExpression": {
                        "type": "string",
                        "description": "Column name or aggregation expression for the target value to compare against"
                      },
                      "format": {
                        "type": "object",
                        "properties": {
                          "formatType": {
                            "type": "string",
                            "enum": [
                              "number",
                              "percent",
                              "currency"
                            ],
                            "description": "Format type: number (plain), percent (multiply by 100 and add %), or currency (with currency symbol)"
                          },
                          "decimalPlaces": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 10,
                            "description": "Number of decimal places to display"
                          },
                          "abbreviation": {
                            "type": "string",
                            "enum": [
                              "none",
                              "compact"
                            ],
                            "description": "Number abbreviation: none (full number) or compact (K, M, B for thousands, millions, billions)"
                          },
                          "currencyCode": {
                            "type": "string",
                            "description": "ISO 4217 currency code (e.g., USD, EUR, GBP) for currency formatting"
                          }
                        },
                        "required": [],
                        "description": "Optional number formatting options for display",
                        "additionalProperties": false
                      },
                      "change": {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "string",
                            "enum": [
                              "percent",
                              "numeric"
                            ],
                            "description": "How to display the difference: percent (as percentage) or numeric (as raw value)"
                          }
                        },
                        "required": [
                          "type"
                        ],
                        "additionalProperties": false,
                        "description": "Optional: How to show the difference between target and value. Defaults to percent if omitted."
                      },
                      "styleRules": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "condition": {
                              "type": "string",
                              "enum": [
                                "<",
                                ">",
                                "=",
                                "<=",
                                ">="
                              ]
                            },
                            "threshold": {
                              "type": "number"
                            },
                            "color": {
                              "type": "string",
                              "description": "Hex color (eg. #FF0000)"
                            }
                          },
                          "required": [
                            "condition",
                            "threshold",
                            "color"
                          ],
                          "additionalProperties": false
                        },
                        "description": "Conditional colors (e.g., green if >= 0)"
                      }
                    },
                    "required": [
                      "columnName",
                      "columnExpression"
                    ],
                    "description": "Optional target column for comparison. When provided, shows the difference between value and target.",
                    "additionalProperties": false
                  },
                  "period": {
                    "type": "object",
                    "properties": {
                      "columnName": {
                        "type": "string",
                        "description": "User friendly name for the period column"
                      },
                      "columnExpression": {
                        "type": "string",
                        "description": "Date/time column name used for period-based comparisons (e.g., week-over-week, month-over-month)"
                      }
                    },
                    "required": [
                      "columnName",
                      "columnExpression"
                    ],
                    "description": "Optional period column for period-over-period comparisons. Use with target for temporal comparisons like week-over-week or month-over-month growth.",
                    "additionalProperties": false
                  },
                  "datasetRefName": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                  },
                  "filterExpressions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Optional list of filters. Empty array means no filters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "value",
                  "datasetRefName",
                  "name",
                  "filterExpressions"
                ],
                "description": "Counter widget schema. Contains a value column, optional target for comparison (shows difference as percent/numeric), optional period for temporal comparisons (e.g., week-over-week), the dataset ID, and a name.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "text"
                    ],
                    "description": "Widget type: text"
                  },
                  "contentMarkdown": {
                    "type": "string",
                    "description": "Markdown content, default to ## heading style"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "contentMarkdown",
                  "name"
                ],
                "description": "Text widget schema. Contains markdown content and a name.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "filter-select"
                    ],
                    "description": "Widget type: filter-select"
                  },
                  "allowMultipleSelection": {
                    "type": "boolean",
                    "description": "Allow multiple selection"
                  },
                  "columns": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "datasetRefName": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                        },
                        "column": {
                          "type": "object",
                          "properties": {
                            "columnName": {
                              "type": "string",
                              "description": "User friendly name for the column"
                            },
                            "columnExpression": {
                              "type": "string",
                              "description": "Column name or aggregation expression.\nFor metric view datasets:\n  - Simple measure references: Just provide the column name (e.g., \"total_Revenue\") - MEASURE() wrapping is handled automatically\n  - Calculations involving measures: MUST use MEASURE() explicitly (e.g., \"MEASURE(`total_Revenue`) / MEASURE(`count_orders`)\")\n  - Dimensions: Reference directly with backticks (e.g., \"`order_date`\", \"`region`\")\nFor regular datasets: Provide the column name or aggregation expression as usual.\n    "
                            }
                          },
                          "required": [
                            "columnName",
                            "columnExpression"
                          ],
                          "description": "Represents a column in a widget, with a user-friendly name and a column expression (can be a column name or aggregation expression). For metric view datasets, measure fields are automatically wrapped with MEASURE().",
                          "additionalProperties": false
                        }
                      },
                      "required": [
                        "datasetRefName",
                        "column"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Data columns to filter (categorical only)"
                  },
                  "parameters": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "datasetRefName": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                        },
                        "parameterKeyword": {
                          "type": "string",
                          "description": "The keyword of the dataset parameter (e.g., \"region\" for :region in SQL)"
                        }
                      },
                      "required": [
                        "datasetRefName",
                        "parameterKeyword"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Dataset parameters to bind. Use this to connect to SQL parameters like :region"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "allowMultipleSelection",
                  "columns",
                  "parameters",
                  "name"
                ],
                "description": "Dropdown filter widget. For each dataset, bind to either a column or a parameter, not both.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "filter-date"
                    ],
                    "description": "Widget type: filter-date"
                  },
                  "columns": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "datasetRefName": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                        },
                        "column": {
                          "type": "object",
                          "properties": {
                            "columnName": {
                              "type": "string",
                              "description": "User friendly name for the column"
                            },
                            "columnExpression": {
                              "type": "string",
                              "description": "Column name or aggregation expression.\nFor metric view datasets:\n  - Simple measure references: Just provide the column name (e.g., \"total_Revenue\") - MEASURE() wrapping is handled automatically\n  - Calculations involving measures: MUST use MEASURE() explicitly (e.g., \"MEASURE(`total_Revenue`) / MEASURE(`count_orders`)\")\n  - Dimensions: Reference directly with backticks (e.g., \"`order_date`\", \"`region`\")\nFor regular datasets: Provide the column name or aggregation expression as usual.\n    "
                            }
                          },
                          "required": [
                            "columnName",
                            "columnExpression"
                          ],
                          "description": "Represents a column in a widget, with a user-friendly name and a column expression (can be a column name or aggregation expression). For metric view datasets, measure fields are automatically wrapped with MEASURE().",
                          "additionalProperties": false
                        }
                      },
                      "required": [
                        "datasetRefName",
                        "column"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Date columns to filter"
                  },
                  "parameters": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "datasetRefName": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                        },
                        "parameterKeyword": {
                          "type": "string",
                          "description": "The keyword of the dataset parameter (e.g., \"region\" for :region in SQL)"
                        }
                      },
                      "required": [
                        "datasetRefName",
                        "parameterKeyword"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Date parameters to bind. Use this to connect to SQL date parameters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "columns",
                  "parameters",
                  "name"
                ],
                "description": "Date filter widget. For each dataset, bind to either a column or a parameter, not both.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "filter-date-range"
                    ],
                    "description": "Widget type: filter-date-range"
                  },
                  "columns": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "datasetRefName": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                        },
                        "column": {
                          "type": "object",
                          "properties": {
                            "columnName": {
                              "type": "string",
                              "description": "User friendly name for the column"
                            },
                            "columnExpression": {
                              "type": "string",
                              "description": "Column name or aggregation expression.\nFor metric view datasets:\n  - Simple measure references: Just provide the column name (e.g., \"total_Revenue\") - MEASURE() wrapping is handled automatically\n  - Calculations involving measures: MUST use MEASURE() explicitly (e.g., \"MEASURE(`total_Revenue`) / MEASURE(`count_orders`)\")\n  - Dimensions: Reference directly with backticks (e.g., \"`order_date`\", \"`region`\")\nFor regular datasets: Provide the column name or aggregation expression as usual.\n    "
                            }
                          },
                          "required": [
                            "columnName",
                            "columnExpression"
                          ],
                          "description": "Represents a column in a widget, with a user-friendly name and a column expression (can be a column name or aggregation expression). For metric view datasets, measure fields are automatically wrapped with MEASURE().",
                          "additionalProperties": false
                        }
                      },
                      "required": [
                        "datasetRefName",
                        "column"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Date columns to filter"
                  },
                  "parameters": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "datasetRefName": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                        },
                        "parameterKeyword": {
                          "type": "string",
                          "description": "The keyword of the dataset parameter (e.g., \"region\" for :region in SQL)"
                        }
                      },
                      "required": [
                        "datasetRefName",
                        "parameterKeyword"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Date range parameters to bind. Use this to connect to SQL date range parameters"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "columns",
                  "parameters",
                  "name"
                ],
                "description": "Date range filter widget. For each dataset, bind to either a column or a parameter, not both.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "filter-text-entry"
                    ],
                    "description": "Widget type: filter-text-entry"
                  },
                  "matchMode": {
                    "type": "string",
                    "enum": [
                      "exact-match",
                      "contains",
                      "starts-with"
                    ],
                    "description": "Match mode for text filtering"
                  },
                  "isCaseSensitive": {
                    "type": "boolean",
                    "description": "Whether the match is case sensitive"
                  },
                  "columns": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "datasetRefName": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                        },
                        "column": {
                          "type": "object",
                          "properties": {
                            "columnName": {
                              "type": "string",
                              "description": "User friendly name for the column"
                            },
                            "columnExpression": {
                              "type": "string",
                              "description": "Column name or aggregation expression.\nFor metric view datasets:\n  - Simple measure references: Just provide the column name (e.g., \"total_Revenue\") - MEASURE() wrapping is handled automatically\n  - Calculations involving measures: MUST use MEASURE() explicitly (e.g., \"MEASURE(`total_Revenue`) / MEASURE(`count_orders`)\")\n  - Dimensions: Reference directly with backticks (e.g., \"`order_date`\", \"`region`\")\nFor regular datasets: Provide the column name or aggregation expression as usual.\n    "
                            }
                          },
                          "required": [
                            "columnName",
                            "columnExpression"
                          ],
                          "description": "Represents a column in a widget, with a user-friendly name and a column expression (can be a column name or aggregation expression). For metric view datasets, measure fields are automatically wrapped with MEASURE().",
                          "additionalProperties": false
                        }
                      },
                      "required": [
                        "datasetRefName",
                        "column"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Text columns only"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "matchMode",
                  "isCaseSensitive",
                  "columns",
                  "name"
                ],
                "description": "Text entry filter widget schema. Allows filtering by text columns with different match modes and case sensitivity.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "filter-range-slider"
                    ],
                    "description": "Widget type: filter-range-slider"
                  },
                  "columns": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "datasetRefName": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Dataset reference in format: datasets/<ref_id>. Example: datasets/24d7189b"
                        },
                        "column": {
                          "type": "object",
                          "properties": {
                            "columnName": {
                              "type": "string",
                              "description": "User friendly name for the column"
                            },
                            "columnExpression": {
                              "type": "string",
                              "description": "Column name or aggregation expression.\nFor metric view datasets:\n  - Simple measure references: Just provide the column name (e.g., \"total_Revenue\") - MEASURE() wrapping is handled automatically\n  - Calculations involving measures: MUST use MEASURE() explicitly (e.g., \"MEASURE(`total_Revenue`) / MEASURE(`count_orders`)\")\n  - Dimensions: Reference directly with backticks (e.g., \"`order_date`\", \"`region`\")\nFor regular datasets: Provide the column name or aggregation expression as usual.\n    "
                            }
                          },
                          "required": [
                            "columnName",
                            "columnExpression"
                          ],
                          "description": "Represents a column in a widget, with a user-friendly name and a column expression (can be a column name or aggregation expression). For metric view datasets, measure fields are automatically wrapped with MEASURE().",
                          "additionalProperties": false
                        }
                      },
                      "required": [
                        "datasetRefName",
                        "column"
                      ],
                      "additionalProperties": false
                    },
                    "description": "Numeric columns only"
                  },
                  "name": {
                    "type": "string",
                    "description": "User friendly name"
                  }
                },
                "required": [
                  "type",
                  "columns",
                  "name"
                ],
                "description": "Range slider filter widget schema. Allows filtering by numeric columns from datasets.",
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "Unsupported"
                    ],
                    "description": "Widget type: Unsupported"
                  }
                },
                "required": [
                  "type"
                ],
                "description": "Represents an unsupported widget type.",
                "additionalProperties": false
              }
            ],
            "description": "Union schema for all supported chart and filter widget types.\n\nImportant:\n- `columnExpression` can be a column name or an aggregation expression.\nOnly Databricks SQL aggregation expressions are supported : COUNT(column) | COUNT(DISTINCT column) | SUM(column) | AVG(column) | MIN(column) | MAX(column) | STDDEV(column) | VARIANCE(column) | APPROX_PERCENTILE(column)\n`*` wildcard is supported for COUNT(*), SUM(*), AVG(*), MIN(*), MAX(*), STDDEV(*), VARIANCE(*), APPROX_PERCENTILE(*)\nColumn names can contain spaces. Always escape column names and wildcard using backticks, e.g. `column name with spaces` or `*`.\n- datasetRefName refers to the dataset containing the data for the widget (format: datasets/<ref_id>).\n- When specifying columns and datasetRefNames, make sure they correspond to existing datasets and columns in datasets provided.\n- Some chart widgets support optional filterExpressions to filter data displayed in the widget. Text and filter widgets do not support filterExpressions. Only use a filterExpression when the user wants a static constraint on a specific widget, or when the user explicitly asks for filterExpressions. If not specified by the user, prefer a filter widget. A filterExpression is invisible and unmodifiable to viewers.\n- Each filterExpression refers to one column only. Complex expressions involving multiple columns are not supported.\n- Example filterExpressions:\n'Birthday', 'Date of Birth', 'Sighting DateTime', 'Height (cm)' are column names.\nBirthday in last 60 days:\n`Birthday` <=> PARSE_RELATIVE_DATE('now-60d/d', 'FLOOR')\nBirthday is today:\n`Date of Birth` <=> PARSE_RELATIVE_DATE('now/d', 'FLOOR')\nBirthday is Yesterday:\n`Date of Birth` <=> PARSE_RELATIVE_DATE('now-1d/d', 'FLOOR')\nBirthday is this week:\n`Date of Birth` <=> PARSE_RELATIVE_DATE('now/w', 'FLOOR')\nBirthday was last week:\n`Date of Birth` <=> PARSE_RELATIVE_DATE('now-1w/w', 'FLOOR')\nBirthday is this month:\n`Date of Birth` <=> PARSE_RELATIVE_DATE('now/M', 'FLOOR')\nBirthday was last Month:\n`Date of Birth` <=> PARSE_RELATIVE_DATE('now-1M/M', 'FLOOR')\nBirthday is this year:\n`Date of Birth` <=> PARSE_RELATIVE_DATE('now/y', 'FLOOR')\nBirthday was last year:\n`Date of Birth` <=> PARSE_RELATIVE_DATE('now-1y/y', 'FLOOR')\nDate column within a range:\nIN_RANGE(`Date of Birth`, DATE'2025-11-07T00:00:00.000', DATE'2025-12-04T23:59:59.999')\nDateTime Column within a range:\nIN_RANGE(`Sighting DateTime`, TIMESTAMP'2025-11-12T21:29:19.000', TIMESTAMP'2025-11-20T21:31:28.999')\nDate Column after a date:\nIN_RANGE(`Date of Birth`, DATE'2025-11-07T00:00:00.000', NULL)\nDate Column before a date:\nIN_RANGE(`Date of Birth`, NULL, DATE'2025-11-07T00:00:00.000')\nNumeric column within a range:\nIN_RANGE(`Height (cm)`, 1, 1000)\nNumeric column less than a value:\nIN_RANGE(`Height (cm)`, NULL, 1000)\nAny column in a set of values:\n`Name` IN ('Ariana Grande', 'Beyoncé')\nAny column not in a set of values:\n\"expression\": \"`Name` IS NULL OR `Name` NOT IN ('Ariana Grande', 'Beyoncé')\"\n\n- PARSE_RELATIVE_DATE: Make sure units are specified in the date string (d=day, w=week, M=month, y=year).\n-- Units should match:\nGood example: (now-10y/y), (now-10M/M)\nBad example: (now-10d/y), (now-10y/d)\n  "
          },
          "position": {
            "type": "object",
            "properties": {
              "x": {
                "type": "number",
                "minimum": 0,
                "maximum": 6,
                "description": "The x coordinate of the chart position. 6 columns (0 to 5)"
              },
              "y": {
                "type": "number",
                "description": "The y coordinate of the chart position. 12 rows for full page height"
              },
              "width": {
                "type": "number",
                "minimum": 0,
                "maximum": 6,
                "description": "The width of the chart. Max 6 (6 columns for full page width), Min 2"
              },
              "height": {
                "type": "number",
                "minimum": 2,
                "maximum": 12,
                "description": "The height of the chart. Typical values: 3-4 for counters/KPIs, 5-6 for standard charts, 8+ for detailed charts. Max 12."
              }
            },
            "required": [
              "x",
              "y",
              "width",
              "height"
            ],
            "description": "Chart position in a grid with 6 columns. Typical chart height is 4-6 rows. Origin (0,0) is top-left corner.",
            "additionalProperties": false
          },
          "datasetAlias": {
            "type": "string",
            "description": "The alias of the dataset to use for this chart. Must match one of the dataset aliases provided in the datasets parameter."
          }
        },
        "required": [
          "chartSpecification",
          "position"
        ],
        "additionalProperties": false
      }
    }
  },
  "required": [
    "chartSpecifications",
    "datasets"
  ],
  "additionalProperties": false
}
```

## Required parameters

* `chartSpecifications` (array) — A list of chart specifications to render. Minimum 1 chart must be provided.
* `datasets` (array) — A list of dataset IDs (fully qualified table names) that can be used in the charts. Minimum 1 dataset must be provided.

## All properties

### `datasets` **(required)**

Type: `array`.

> A list of dataset IDs (fully qualified table names) that can be used in the charts. Minimum 1 dataset must be provided.

### `chartSpecifications` **(required)**

Type: `array`.

> A list of chart specifications to render. Minimum 1 chart must be provided.

## Handler notes

Extracted from webpack module `535684` in the SPA bundle on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). The `execute()` arrow function below is the verbatim client-side handler the SPA registers when this tool is invoked by the model.

**Argument destructuring**:

```javascript
(t,r,o)
```

**Execute body** (verbatim, minified — webpack module `535684`, 1295 bytes):

```javascript
{var s;return(s=function*(){let s=r.agentIds;try{if((0,a.cY)("Render Chart tool args:",t),!t?.chartSpecifications?.length)return(0,a.yj)("No charts provided.");let{compileDecoupleSpecForAllWidgets:r}=yield(()=>{let e=()=>Promise.all([i.e(62280),i.e(92170),i.e(29580),i.e(84245),i.e(47323),i.e(63121),i.e(65084),i.e(81647),i.e(71046),i.e(36176),i.e(89478),i.e(69186),i.e(47888)]).then(i.bind(i,26467));if("function"==typeof __dbTrackModuleImport)return __dbTrackModuleImport(26467,"./renderChartToolHelper","lazy",e);return e()})(),{widgets:n,firstSqlError:l}=yield r(e,t.chartSpecifications,t.datasets,s,o),p=n.filter(e=>e.commandId),d=n.length-p.length;if(0===p.length){let e=l?` First SQL error: ${l}`:"";return(0,a.yj)(`Failed to render charts. Could not execute the required SQL queries for any of the ${n.length} chart(s).${e}`)}let c={specs:p};if(d>0){let e=l?` First error: ${l}`:"";c.warnings=[`${d} out of ${n.length} chart(s) failed to render due to SQL execution errors.${e}`]}return(0,a.r6)(JSON.stringify(c))}catch(e){return(0,a.yj)(e instanceof Error?e.message:"Invalid arguments. Could not parse JSON")}},function(){var e=this,t=arguments;return new Promise(function(i,r){var o=s.apply(e,t);function a(e){d(o,i,r,a,n,"next",e)}function n(e){d(o,i,r,a,n,"throw",e)}a(void 0)})})()}
```

**Verified wire-level evidence** (literal in the handler body):

- No REST URLs appear as literals in this handler.

**Helpers called from the body** (each is a different webpack module):

- `(0, a.cY)(...)`
- `(0, a.yj)(...)`
- `(0, a.r6)(...)`

**What this proves vs. what it doesn't**:

- ⚠️  The handler delegates to one or more helper modules whose internals were not traced in this pass. The actual network endpoint (or absence of one — some tools manipulate local Redux state only) is therefore **not statically verified** from this source. To confirm what each helper does on the wire, see the network-trace follow-up in [genie_code_followups.md](genie_code_followups.md) §1.

