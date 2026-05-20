# Dashboard Creation and Design

This skill provides comprehensive guidance for creating effective dashboards with visualizations in Databricks AI/BI Dashboards.

## Visualization Types

### Common Chart Types

- **Bar Chart**: Compare values across categories
- **Line Chart**: Show trends over time
- **Counter**: Display single key metrics
- **Table**: Present detailed data in rows and columns
- **Pie Chart**: Show proportions of a whole

### Choosing the Right Visualization

- Use bar charts for comparing discrete categories
- Use line charts for time-series data
- Use counters for KPIs and summary metrics
- Use tables when detail matters more than visual patterns

## Widget Creation Best Practices

### Dataset Requirements

- Always ensure a suitable dataset exists before creating a widget
- Check dataset schema matches the visualization needs
- Verify dataset query returns expected results

### Data Binding

- Bind widget data fields to dataset columns
- Configure aggregations when needed
- Set appropriate filters and parameters

#### Temporal Date Grouping

When the user requests time-bucketed aggregation (monthly, weekly, quarterly, daily, etc.) on a date or timestamp column:

- Use a SQL truncation function as the field expression: e.g., `DATE_TRUNC('MONTH', \`date_col\`)` for monthly grouping
- Set the x-axis scale type to `temporal` so the axis renders as a time series

❌ Incorrect pattern: raw date column + categorical scale → produces individual dates on the x-axis, not bucketed periods
✅ Correct pattern: `DATE_TRUNC('MONTH', \`date_col\`)` + temporal scale → renders one bar/point per calendar month

### Styling

- Customize colors to match branding
- Adjust fonts and sizes for readability
- Configure axis scales appropriately
- Add legends when multiple series are present

## Dashboard Layout Principles

### Information Hierarchy

- Place the most important metrics at the top or center
- Use size and position to indicate importance
- Group related information together
- Create clear visual flow from top to bottom, left to right

### Grid System

- Use consistent spacing between widgets
- Align widgets to a grid for clean appearance
- Avoid overlapping widgets
- Create visual rhythm with consistent sizing
- Balance dense and sparse areas

### Widget Positioning

- Position widgets thoughtfully to create intuitive dashboards
- Group related visualizations together
- Leave appropriate spacing between elements
- Consider responsive layout for different screen sizes

## User Experience

### Clarity

- Use clear, descriptive titles and labels
- Avoid cluttering with too many widgets
- Provide context through labels and descriptions
- Include appropriate units for metrics
- Use white space effectively

### Interactivity

- Add filters for user exploration
- Enable drill-down capabilities when appropriate
- Provide tooltips for additional context
- Consider parameter-driven dashboards

### Performance

- Limit the number of widgets on a single page to 100
- Optimize dataset queries for speed
- Use appropriate aggregation levels
- Consider caching strategies

## Dashboard Organization

### Multi-Page Dashboards

- Organize related content into logical pages
- Create a clear navigation structure
- Use consistent design across pages
- Consider the user journey

### Dashboard Types by Purpose

- **Executive Summary**: Use counters and simple charts
- **Operational Dashboards**: Use real-time data and alerts
- **Analytical Dashboards**: Use detailed tables and complex visualizations
- **Report Dashboards**: Use tables and detailed breakdowns

## Visual Design

- Use consistent color schemes across related widgets
- Add clear titles and labels
- Configure axis scales appropriately
- Consider accessibility in color choices
