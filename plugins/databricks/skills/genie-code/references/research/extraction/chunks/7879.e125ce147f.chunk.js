"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[7879],{107879:(o,l,a)=>{a.r(l),a.d(l,{default:()=>e});let e=`# Autolog Reference

MLflow supports 40+ framework integrations. Below are the most common. For the full list, see the [MLflow Tracing Integrations docs](https://mlflow.org/docs/latest/genai/tracing/autolog/).

## Common Frameworks

| Framework             | Enable With                    |
| --------------------- | ------------------------------ |
| LangChain / LangGraph | \`mlflow.langchain.autolog()\`   |
| OpenAI SDK            | \`mlflow.openai.autolog()\`      |
| Anthropic SDK         | \`mlflow.anthropic.autolog()\`   |
| LiteLLM               | \`mlflow.litellm.autolog()\`     |
| DSPy                  | \`mlflow.dspy.autolog()\`        |
| AutoGen               | \`mlflow.autogen.autolog()\`     |
| CrewAI                | \`mlflow.crewai.autolog()\`      |
| PydanticAI            | \`mlflow.pydantic_ai.autolog()\` |
| LlamaIndex            | \`mlflow.llama_index.autolog()\` |

## Configuration

\`\`\`python
%python
mlflow.openai.autolog(
    log_traces=True,         # Enable trace logging (default: True)
    log_models=False,        # Log model artifacts (default: False)
    disable=False,           # Set True to disable autologging
)
\`\`\`

## Key Rule

Enable autologging **before** importing or creating framework clients:

\`\`\`python
%python
import mlflow
mlflow.openai.autolog()  # BEFORE creating client

from openai import OpenAI
client = OpenAI()  # Now all calls are auto-traced
\`\`\`
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/7879.e125ce147f.chunk.js.map