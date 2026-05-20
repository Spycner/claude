"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[71036],{971036:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});let a=`# Issue Detection

Discover systematic quality issues across traces in this experiment. Follow these four phases in order, reporting findings after each phase so the user can guide the investigation.

## Phase 1: Triage — Sample and Score

Goal: Get a representative sample of traces and identify the failing ones. Sample size should scale with trace volume — aim for at least 100 traces or 10% of total traces, whichever is larger.

### Step 1a: Baseline and sample size

1. **Baseline metrics**: Call \`get_trace_metrics\` to get an overview of error rates, latency distribution (P50/P95/P99), trace volume, and trace name distribution. This establishes the health baseline.
2. **Determine sample size**: Based on the total trace count from metrics, set your sample target:
   - <100 traces total → sample all of them
   - 100-1000 traces → sample at least 100
   - 1000+ traces → sample at least 10%

### Step 1b: Search and surface-level triage

3. **Bulk search**: Use \`search_traces\` with maxResults set to your sample target. The search results contain summary data (status, execution time, trace name).
4. **Also search errors specifically**: Use \`search_traces\` with \`status = 'ERROR'\` (maxResults: 100) to ensure error traces are well-represented even if they are a small fraction of traffic.
5. **Check assessments**: Use \`get_assessments\` across the sampled traces to find any with negative feedback (thumbs down, low scores, negative scorer results). Traces with OK status can still have quality issues — a trace that completes without errors but produces a wrong or unhelpful answer will only show up through assessments.
6. **Surface-level triage**: Classify each trace:
   - **Likely failing**: ERROR status, extremely high execution time (>2x the P95 from step 1a baseline metrics), negative assessments, or known-problematic trace name
   - **Needs inspection**: Ambiguous — OK status but unusually slow, mixed assessment signals, or a trace name with elevated error rates
   - **Likely passing**: OK status, normal execution time, no negative assessments

### Step 1c: Deep inspection

7. **Deep inspect**: For the traces flagged as "likely failing" or "needs inspection", use \`get_trace\` to fetch the full span tree. Prioritize variety — cover different trace names and error types rather than many traces from the same endpoint. While inspecting, also **extract the execution path** (see Phase 2 step 1 for format) — this avoids fetching the trace again later.
8. **Evaluate quality**: For each inspected trace, assess whether the user's goals were achieved. Do not rely solely on status — a trace can be OK but still produce incorrect, irrelevant, or unhelpful output. Check:
   - Did the output actually answer what the input asked?
   - Are there contradictions, hallucinations, or missing information?
   - Did the agent follow its instructions and constraints?
   - Was the response time acceptable for the task?
9. **Finalize triage**: Classify each trace as:
   - **Passing**: Goals achieved, acceptable quality and latency
   - **Failing**: Errors, negative assessments, incorrect output, violated constraints, or unacceptable latency
10. For each confirmed failing trace, record:
   - A brief rationale (what went wrong)
   - The single most applicable CLEARS category — see [\`issue-categories.md\`](issue-categories.md) for the taxonomy

**Report a triage summary before proceeding:**
- Total traces in experiment
- Number of traces sampled and scanned
- Passing vs failing count
- Category distribution across failing traces (e.g., "12 Execution, 8 Correctness, 5 Latency")

If no failing traces are found across the full sample, report that no systematic issues were detected and stop.

## Phase 2: Analyze — Group and Contextualize

Goal: Group failing traces by execution path and consolidate evidence.

1. **Execution paths**: Use the execution paths already extracted during deep inspection (step 1c). The format is:
   - \`AGENT:orchestrator → TOOL:search_docs → LLM:gpt-4o\`
   - Spans with ERROR status: \`TOOL:search_docs [ERROR]\`
   - No meaningful child spans: \`(no routing)\`
   - Skip generic LLM/embedding spans — focus on meaningful orchestration steps

2. **Group by execution path**: Cluster failing traces that share similar execution paths. Traces hitting the same tool chain likely share a root cause.

3. **Session context**: For traces tagged with \`mlflow.trace.session\` metadata, use \`search_traces\` with \`metadata.\\\`mlflow.trace.session\\\` = '<session_id>'\` to pull the full conversation. Note multi-turn patterns:
   - Does the failure only occur after turn N?
   - Does the agent degrade over the conversation (growing latency, declining quality)?
   - Are there repeated errors the user had to work around?

4. **Consolidate evidence per group**:
   - Error messages and exception types from span events
   - Assessment rationales (human feedback text, scorer explanations)
   - Latency outliers (which spans are slowest?)
   - Common input patterns that trigger failures (e.g., long queries, specific topics)

## Phase 3: Cluster and Identify Issues

Goal: Synthesize grouped failures into the 5-10 most important issues to fix. If you find more, merge the lowest-severity ones or drop singletons that don't represent systematic problems.

1. **Formulate failure labels**: For each failing trace, write a label in the format:
   \`[execution_path] symptom\`
   Example: \`[orchestrator → search_docs → gpt-4o] returns empty results for multi-word queries\`

2. **Cluster labels**: Group labels that describe the same root cause, even across different execution paths. Two labels belong together when:
   - They share the same failure pattern (similar symptom)
   - They involve the same tool, sub-agent, or span
   - They were tagged with the same CLEARS categories during triage — traces in the same category are likely related, even if their execution paths differ
   - Same tool/path strongly suggests same root cause — group together unless symptoms are clearly unrelated

3. **Define each issue**:
   - **Name**: Short, specific (e.g., "RAG retriever returns empty for complex queries"). Do NOT use vague names like "Agent failures" or "Quality issues"
   - **Description**: What is happening from the user's perspective, with concrete evidence. Cite observable symptoms (e.g., "returned empty response", "ignored the user's constraint")
   - **Root cause**: Name the specific tool, span, function, or execution path responsible. A developer reading this must know exactly which component to investigate first. Do NOT write vague root causes like "the orchestration layer" or "intent handling"
   - **Severity**: High / Medium / Low — see [\`issue-categories.md\`](issue-categories.md) for criteria
   - **Category**: The single most applicable CLEARS category, with evidence justification. Only assign a category you can prove with trace data
   - **Affected traces**: List the trace IDs belonging to this issue
   - **Trace count**: Number of traces impacted by this issue
   - **IMPORTANT**: If a group of failing traces does not actually represent a real issue — e.g., the user's goals were achieved, the system functioned correctly, or there is no concrete deficiency — do NOT create an issue for it. Skip it entirely.

4. **Validate clusters**: If you define an issue from a cluster but the combined description feels incoherent or the severity is very low, break it apart and evaluate each trace's failure individually.

5. **Re-cluster singletons**: After defining all issues, review any issues with only 1 affected trace. Check if any of these singletons share a root cause with another singleton — if so, merge them into a single issue.

6. **Deduplicate**: As a final check, review all identified issues for duplicates. Merge only if they share both the same observable symptom AND the same root cause. Do NOT merge issues that are merely related or in the same category but with different root causes.

## Phase 4: Report

Present the final issue report using the structured format from [\`issue-categories.md\`](issue-categories.md).

**After the report:**

- For any High severity issue, suggest deep-diving a representative trace using the \`analyze-mlflow-trace\` skill.
- Check scorer coverage: use \`get_scheduled_scorers\` to see what automated scoring exists. If discovered issue categories are not covered by any scorer, recommend setting up monitoring via the \`agent-evaluation\` skill.
- If the experiment has low trace volume (<100 traces total), caveat that findings are based on a small sample and may not represent the full distribution of issues.
- If no issues were found despite failing traces, note that failures may be isolated incidents rather than systematic issues.

## Guidelines

- **Always ground findings in trace IDs and span names.** Never produce vague descriptions like "the agent sometimes fails" — cite the specific trace, span, and error.
- **Prioritize by impact.** If the experiment has many trace names (endpoints), focus on the highest-error-rate name first.
- **Session analysis matters.** Some issues only appear in multi-turn context — a trace that looks fine in isolation may be part of a degrading conversation.
- **Be honest about uncertainty.** If you cannot determine a root cause from the available data, say so explicitly and suggest what additional instrumentation or data would help.
- **Do not invent issues.** If traces are passing and assessments are positive, report that no systematic issues were detected. Do not manufacture concerns.
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/71036.f45d02db53.chunk.js.map