"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[24662],{824662:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});let o=`# Instrumenting with MLflow Tracing

Add MLflow tracing to GenAI applications. Code snippets are for **Databricks notebooks**.

- Every Python cell **must** start with \`%python\`.
- Start with a setup cell to install the latest MLflow.
- No \`MLFLOW_TRACKING_URI\` setup needed — Databricks auto-configures tracking.

For the full tracing docs, see [MLflow Tracing](https://mlflow.org/docs/latest/genai/tracing/).

## Setup

\`\`\`python
%python
%pip install --upgrade mlflow[databricks]
dbutils.library.restartPython()
\`\`\`

## Autologging (recommended for frameworks)

Zero-code instrumentation — enable before creating framework clients:

\`\`\`python
%python
import mlflow

mlflow.set_experiment("/Users/<your-email>/my-genai-experiment")
mlflow.openai.autolog()  # Enable BEFORE importing/creating the client
\`\`\`

MLflow supports 40+ framework integrations. See [\`autolog-reference.md\`](autolog-reference.md) for the list, or the [full integrations docs](https://mlflow.org/docs/latest/genai/tracing/autolog/).

## Decorator (for custom code)

Use \`@mlflow.trace\` to trace custom functions:

\`\`\`python
%python
import mlflow
from mlflow.entities import SpanType

mlflow.set_experiment("/Users/<your-email>/my-genai-experiment")

@mlflow.trace(span_type=SpanType.CHAIN)
def my_pipeline(query: str) -> str:
    context = retrieve_docs(query)
    return generate_response(query, context)

@mlflow.trace(span_type=SpanType.RETRIEVER)
def retrieve_docs(query: str) -> list[str]:
    return docs

@mlflow.trace(span_type=SpanType.LLM)
def generate_response(query: str, context: list[str]) -> str:
    return response
\`\`\`

## User and Session Tracking

Tag traces with user and session metadata for filtering and multi-turn analysis:

\`\`\`python
%python
@mlflow.trace(span_type=SpanType.CHAIN)
def chat(message: str, user_id: str, session_id: str) -> str:
    mlflow.update_current_trace(
        metadata={
            "mlflow.trace.user": user_id,
            "mlflow.trace.session": session_id,
        }
    )
    return response
\`\`\`
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/24662.32d70af50c.chunk.js.map