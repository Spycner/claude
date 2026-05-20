"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[47964],{225583:(e,r,o)=>{o.r(r),o.d(r,{default:()=>s});let s=`# Scorer Reference

For the full and up-to-date list of built-in scorers, **use the \`docSearch\` tool** with the query "MLflow predefined scorers" or "MLflow GenAI scorers". The docs are the source of truth since new scorers are added regularly.

Key docs pages:
- [Predefined Scorers](https://mlflow.org/docs/latest/genai/eval-monitor/scorers/llm-judge/predefined/)
- [Guidelines Scorers](https://mlflow.org/docs/latest/genai/eval-monitor/scorers/llm-judge/guidelines)
- [Custom Scorers](https://mlflow.org/docs/latest/genai/eval-monitor/scorers/custom/)
- [Multi-Turn Evaluation](https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/multi-turn/)

## Key Principles

- All built-in LLM judge scorers return **binary yes/no** with a rationale. Do NOT use numeric scales (1-5) — binary judgments are more calibrated.
- All scorers are in \`mlflow.genai.scorers\`
- Scorer categories: response quality, guidelines, RAG, tool call, and multi-turn conversation

## Custom Scorers

Use the \`@scorer\` decorator. Parameters must be a subset of: \`inputs\`, \`outputs\`, \`expectations\`, \`trace\`, \`session\`.

Return a \`Feedback\` object for rich results, or a simple bool/int/float/str.

\`\`\`python
%python
from mlflow.genai.scorers import scorer
from mlflow.entities import Feedback

@scorer
def latency_check(inputs, outputs, trace) -> Feedback:
    duration = trace.info.execution_duration
    passed = duration <= 5000
    return Feedback(
        value=passed,
        rationale=f"Latency {duration}ms {'within' if passed else 'exceeds'} 5s SLA",
    )
\`\`\`
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/47964.24b71d5697.chunk.js.map