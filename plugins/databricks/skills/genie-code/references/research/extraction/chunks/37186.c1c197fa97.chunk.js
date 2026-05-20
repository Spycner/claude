"use strict";(self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push([[37186],{637186:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});let a=`# Issue Categories and Output Format

## CLEARS Categories

Classify issues using these categories. Every assigned category **must** be justified with concrete evidence from trace data.

| Category | Code | Description | Evidence Examples |
|---|---|---|---|
| Correctness | C | Output is factually inaccurate or grounded incorrectly | Hallucinated facts, wrong tool called, contradictory statements |
| Latency | L | Response time exceeds acceptable bounds | P95 > SLA, specific spans taking >Xs, user complaints about speed |
| Execution | E | Runtime errors, tool failures, or incomplete actions | Exception in spans, ERROR status, tool call returned error |
| Adherence | A | Violates instructions, constraints, or formatting | Ignores system prompt rules, wrong output format, exceeds length limits |
| Relevance | R | Response does not address the user's actual request | Off-topic answer, retrieved irrelevant documents, ignored key context |
| Safety | S | Harmful, biased, or policy-violating output | PII leakage, toxic content, prompt injection, sensitive data exposure |

### Category Assignment Rules

- Assign the single most applicable category per issue. Pick the one that best describes the primary failure mode.
- The assigned category MUST cite specific trace IDs, span names, or assessment rationales as evidence.
- Do NOT assign a category speculatively. If you cannot point to concrete data, omit the category.

## Severity Levels

| Severity | Criteria |
|---|---|
| High | Causes complete failure (ERROR status) or severe quality degradation across multiple traces, OR any Safety issue |
| Medium | Causes degraded but functional output, OR intermittent failures |
| Low | Minor quality issues, cosmetic problems, OR latency slightly above target |

## Output Format

Present issues ordered by severity (High first), then by trace count (most impacted first). Use this structure for each issue:

---

### Issue: [Short Specific Name]
- **Severity**: [High / Medium / Low]
- **Category**: [Single most applicable CLEARS category with justification, e.g., "Execution: \\\`search_docs\\\` span throws IndexError in 3/4 affected traces"]
- **Trace count**: [Number of traces impacted by this issue]
- **Description**: [What is happening from the user's perspective]
- **Root Cause**: [Specific tool/span/path responsible — must be actionable for a developer]
- **Evidence**:
  - Trace \\\`<trace_id>\\\`: [brief description of what went wrong]
  - Trace \\\`<trace_id>\\\`: [brief description]
- **Recommendation**: [Actionable fix suggestion]

---

End the report with a summary:

### Summary
- **Total traces analyzed**: N
- **Failing traces**: N (X%)
- **Issues found**: N
- **By severity**: High: N | Medium: N | Low: N
- **Most affected execution path**: [path]
- **Top category**: [most frequent CLEARS category]
`}}]);
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/37186.c1c197fa97.chunk.js.map