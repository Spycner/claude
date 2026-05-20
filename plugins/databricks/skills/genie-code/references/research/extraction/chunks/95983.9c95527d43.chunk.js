"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[95983],{395983:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});let s=`# Agent Evaluation

Set up and run GenAI evaluation using \`mlflow.genai.evaluate()\`. Code snippets are for **Databricks notebooks**.

- Every Python cell **must** start with \`%python\`.
- Start with a setup cell to install the latest MLflow.
- The current experiment is automatically available — use \`mlflow.set_experiment()\` to point to it.

For the full evaluation docs, see [MLflow Evaluation](https://mlflow.org/docs/latest/genai/eval-monitor/).

## Setup

\`\`\`python
%python
%pip install --upgrade mlflow[databricks]
dbutils.library.restartPython()
\`\`\`

## Evaluate Existing Traces

The simplest approach — score traces already logged in the experiment:

\`\`\`python
%python
import mlflow

mlflow.set_experiment("<current_experiment_path>")

traces = mlflow.search_traces(experiment_ids=["<experiment_id>"])

mlflow.genai.evaluate(
    data=traces,
    scorers=[
        mlflow.genai.scorers.RelevanceToQuery(),
        mlflow.genai.scorers.Safety(),
        mlflow.genai.scorers.Guidelines(
            name="conciseness",
            guidelines=["Response should be concise and under 200 words"],
        ),
    ],
)
# Results are displayed automatically in a UI component — no print/display needed.
\`\`\`

## Evaluate with a Predict Function

Run your agent on inputs and score the results. The user must configure \`predict_fn\` to point to their agent:

\`\`\`python
%python
import mlflow

mlflow.set_experiment("<current_experiment_path>")

def predict_fn(inputs: dict) -> str:
    # User must implement this — call their agent/model here
    return my_agent(inputs["query"])

eval_data = [
    {"inputs": {"query": "What is MLflow?"}},
    {"inputs": {"query": "How do I log a model?"}},
]

result = mlflow.genai.evaluate(
    data=eval_data,
    predict_fn=predict_fn,
    scorers=[
        mlflow.genai.scorers.RelevanceToQuery(),
        mlflow.genai.scorers.Safety(),
    ],
)
\`\`\`

## Build an Evaluation Dataset

Use \`mlflow.genai.datasets.create_dataset()\` to create a persistent, versioned dataset:

\`\`\`python
%python
import mlflow
from mlflow.genai.datasets import create_dataset

dataset = create_dataset(
    name="my_eval_dataset",
    experiment_id="<experiment_id>",
)

# Populate from existing traces
traces = mlflow.search_traces(experiment_ids=["<experiment_id>"], max_results=50)
dataset.merge_records(traces)

# Or add manual test cases
dataset.merge_records([
    {
        "inputs": {"query": "What is MLflow?"},
        "expectations": {"expected_facts": ["open-source platform", "ML lifecycle"]},
    },
])
\`\`\`

See [MLflow Datasets docs](https://mlflow.org/docs/latest/genai/datasets/) for details.

## Multi-Turn Conversation Evaluation

Evaluate entire conversation sessions rather than individual turns. Requires traces tagged with \`mlflow.trace.session\` metadata.

\`\`\`python
%python
import mlflow
from mlflow.genai.scorers import ConversationCompleteness, UserFrustration

traces = mlflow.search_traces(
    experiment_ids=["<experiment_id>"],
    return_type="list",
)

result = mlflow.genai.evaluate(
    data=traces,
    scorers=[ConversationCompleteness(), UserFrustration()],
)
\`\`\`

See [Multi-Turn Evaluation docs](https://mlflow.org/docs/latest/genai/eval-monitor/running-evaluation/multi-turn/) for details on conversation simulation and custom multi-turn scorers.

## Monitoring with Scheduled Scorers

To automatically evaluate future traces, create a scorer, **register** it, then **start** it with a sampling config. There is a maximum of 20 scorers per experiment.

**Important**: Always run the Setup cell above first (\`%pip install --upgrade mlflow[databricks]\`) before using monitoring APIs.

For the full monitoring docs, see [Production Monitoring](https://docs.databricks.com/aws/en/mlflow3/genai/eval-monitor/production-monitoring).

### Built-in LLM Judge

\`\`\`python
%python
import mlflow
from mlflow.genai.scorers import Safety, Guidelines, ScorerSamplingConfig

mlflow.set_experiment("<current_experiment_path>")

# Step 1: Create the scorer
# Step 2: Register it (gives it a persistent name)
# Step 3: Start it with a sample rate (0.0–1.0)
safety = Safety().register(name="my_safety_scorer")
safety.start(sampling_config=ScorerSamplingConfig(sample_rate=0.7))

conciseness = Guidelines(
    name="conciseness",
    guidelines=["The response should be appropriately concise for the task."],
).register(name="conciseness_scorer")
conciseness.start(sampling_config=ScorerSamplingConfig(sample_rate=0.5))
\`\`\`

### Custom Scorer Function

\`\`\`python
%python
from mlflow.genai.scorers import scorer, ScorerSamplingConfig

@scorer
def mentions_databricks(outputs):
    return "databricks" in str(outputs.get("response", "")).lower()

registered = mentions_databricks.register(name="databricks_mentions")
registered.start(sampling_config=ScorerSamplingConfig(sample_rate=1.0))
\`\`\`

### Manage Scorers

\`\`\`python
%python
from mlflow.genai.scorers import list_scorers, get_scorer, delete_scorer, ScorerSamplingConfig

# List all registered scorers
for s in list_scorers():
    print(f"{s._server_name}: sample_rate={s.sample_rate}")

# Update sample rate
scorer = get_scorer(name="my_safety_scorer")
scorer.update(sampling_config=ScorerSamplingConfig(sample_rate=0.3))

# Stop (pause) a scorer
scorer.stop()

# Delete a scorer permanently
delete_scorer(name="my_safety_scorer")
\`\`\`

**Important**: \`mlflow.genai.monitor()\` does NOT exist. The correct flow is always: **create → .register(name=...) → .start(sampling_config=...)**.

## Choosing Scorers

See [\`scorer-reference.md\`](scorer-reference.md) for the full catalog of built-in scorers including response quality, RAG, tool call, and multi-turn scorers.
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/95983.9c95527d43.chunk.js.map