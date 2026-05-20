"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[29439],{429439:(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});let a=`# Analyze MLflow Traces

Debug and understand MLflow traces by examining span trees, timing, assessments, and error information.

## Single Trace Analysis

1. Use \`get_trace\` to fetch the full trace with spans and assessments.
2. Walk the span tree: identify the root span, follow child spans, check for \`ERROR\` statuses.
3. For errors: find the span with \`ERROR\` status and read its \`events\` for exception details.
4. For latency: compare span durations to find bottlenecks — LLM spans are typically slowest.
5. For quality: check assessments attached to the trace via \`get_assessments\`.

See [\`span-analysis.md\`](span-analysis.md) for span type reference and common error patterns.

## Session Analysis

To analyze multi-turn chat sessions, search traces grouped by the \`mlflow.trace.session\` metadata:

1. Use \`search_traces\` with filter \`metadata.\\\`mlflow.trace.session\\\` = '<session_id>'\`, ordered by \`timestamp_ms ASC\`.
2. For each trace in the session, extract user input and agent response from the root span.
3. Look for patterns across the session:
   - **Latency degradation**: response times growing over turns (growing context window)
   - **Token growth**: total tokens increasing per turn (prompt bloat)
   - **Repeated errors**: same failure across multiple turns
   - **Quality decline**: assessment scores dropping in later turns
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/29439.13db6cff9b.chunk.js.map