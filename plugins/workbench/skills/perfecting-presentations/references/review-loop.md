# Review Loop

The orchestration layer: judge prompts, verifier prompts, the ledger, termination, and a Workflow script template. The main session drives rounds and applies fixes; judges and verifiers are fresh subagents with no conversation context. That isolation is the load-bearing property; without it the loop self-approves.

## Judge prompt

One judge per soft dimension (`narrative`, `clarity`, `visual`, `delivery`), all four in parallel, fresh every round. Template (fill the angle brackets):

```
You are reviewing a slide deck against an explicit standards document. You review; you never fix.

Standards document (the only source of valid findings):
<full text of .workbench/deck-standards.md, including the deck brief>

Your dimension: <dimension>. Raise findings ONLY for the S rules listed under that dimension.

Materials:
- Slide screenshots: read these PNG files in order: <list of slide-NN.png paths>
- Deck source: <deck html path> (read it for text content, notes, and structure)

Rules of evidence:
- Every finding must cite exactly one rule ID and one slide number, with concrete evidence
  (quote the text or describe what is visibly wrong in the screenshot).
- Judge against the standards document and the deck brief, not your taste. If a rule does not
  forbid it, it is not a finding.
- Do not propose rewrites or fixes. Findings only.
- An empty findings list is a fully acceptable answer. Do not invent findings to seem thorough.

Severity scale: blocker, major, minor, nit, as defined in the standards document.
```

Findings schema (use as the structured-output schema for `agent()`):

```json
{
  "type": "object",
  "required": ["findings"],
  "properties": {
    "findings": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["rule", "slide", "severity", "evidence"],
        "properties": {
          "rule": { "type": "string" },
          "slide": { "type": "integer" },
          "severity": { "enum": ["blocker", "major", "minor", "nit"] },
          "evidence": { "type": "string" }
        }
      }
    }
  }
}
```

## Verifier prompt

One verifier per finding by default; three with majority vote for blockers and for every finding in strict mode. The verifier is prompted to refute, not to confirm:

```
A deck reviewer raised this finding. Your job is to try to REFUTE it.

Standards document: <full text>
Finding: rule <rule>, slide <slide>, severity <severity>: <evidence>
Screenshot of that slide: <slide-NN.png path>
Deck source: <deck html path>

Refute it if ANY of these hold:
- The cited rule does not actually say what the finding needs it to say.
- The evidence is not real (the screenshot or source does not show it).
- The severity is inflated by more than one level (then correct it instead of refuting).
- The finding contradicts the deck brief's stated constraints.

If you cannot refute it on those grounds, uphold it. Uncertainty about taste is not
grounds to uphold; the finding must be solid against the written rule.
```

Verdict schema:

```json
{
  "type": "object",
  "required": ["verdict"],
  "properties": {
    "verdict": { "enum": ["uphold", "refute"] },
    "correctedSeverity": { "enum": ["blocker", "major", "minor", "nit"] },
    "reason": { "type": "string" }
  }
}
```

## The ledger

`.workbench/reviews/<deck-slug>/ledger.json`, owned by the main session:

```json
{
  "entries": [
    {
      "key": "S5:3:cost analysis",
      "status": "rejected",
      "round": 2,
      "reason": "..."
    }
  ]
}
```

- Key: `<rule>:<slide>:<first six significant words of the evidence, lowercased>`.
- Statuses: `rejected` (verifier refuted it), `fixed` (confirmed and resolved).
- Before verification each round, drop any new finding whose key matches a `rejected` entry; it was already litigated. A match against a `fixed` entry stays in: that is a regression and should alarm, not be dismissed.
- Slide indices shift when slides are added or removed; after any such fix, re-key the ledger by slide content, not position (or accept a few re-litigated findings that round).

## Round flow and termination

```
round R:
  hard gates + screenshots          (deterministic, references/hard-gates.md)
  judges x4 in parallel             (fresh subagents)
  ledger filter                     (drop re-litigated rejections)
  verify each survivor              (adversarial; 3-way majority for blockers / strict mode)
  fix = hard-gate failures + upheld findings at or above threshold
  if fix list empty: dryRounds += 1 else dryRounds = 0; apply fixes
  done when dryRounds == 2, or round == cap (default 5, then report open items)
```

Fix discipline: smallest change that resolves the citation, hard gates first, one commit per round so every round is diffable.

## Workflow script (one invocation per round)

The main session runs hard gates and screenshots first, then invokes this per round with `args = { standardsPath, deckPath, screenshots: [...], rejectedKeys: [...], strict: false }`. It returns confirmed and rejected findings; the main session updates the ledger, fixes, and decides termination.

```js
export const meta = {
  name: 'deck-review-round',
  description: 'One review round: 4 dimension judges, adversarial verification per finding',
  phases: [
    { title: 'Review', detail: 'one fresh judge per soft dimension' },
    { title: 'Verify', detail: 'adversarial refutation per finding' },
  ],
}
const FINDINGS = { /* findings schema from above */ }
const VERDICT = { /* verdict schema from above */ }
const DIMENSIONS = ['narrative', 'clarity', 'visual', 'delivery']
const key = (f) => `${f.rule}:${f.slide}:` + f.evidence.toLowerCase().split(/\W+/).filter(w => w.length > 2).slice(0, 6).join(' ')
const judgePrompt = (dim) => `...judge template above, filled with args.standardsPath contents, ${dim}, args.screenshots, args.deckPath...`
const verifyPrompt = (f) => `...verifier template above, filled with the finding and its slide screenshot...`

const results = await pipeline(
  DIMENSIONS,
  (dim) => agent(judgePrompt(dim), { label: `judge:${dim}`, phase: 'Review', schema: FINDINGS }),
  (review) => {
    const fresh = (review?.findings || []).filter(f => !args.rejectedKeys.includes(key(f)))
    return parallel(fresh.map(f => () => {
      const votes = (f.severity === 'blocker' || args.strict) ? 3 : 1
      return parallel(Array.from({ length: votes }, (_, i) =>
        () => agent(verifyPrompt(f), { label: `verify:${f.rule}:s${f.slide}:v${i}`, phase: 'Verify', schema: VERDICT })))
        .then(vs => ({ ...f, verdicts: vs.filter(Boolean) }))
    }))
  }
)
const judged = results.filter(Boolean).flat().filter(Boolean)
const upheldBy = (f) => f.verdicts.filter(v => v.verdict === 'uphold').length > f.verdicts.length / 2
return {
  confirmed: judged.filter(upheldBy).map(f => ({ ...f, severity: f.verdicts.find(v => v.correctedSeverity)?.correctedSeverity || f.severity })),
  rejected: judged.filter(f => !upheldBy(f)).map(f => ({ key: key(f), reason: f.verdicts.map(v => v.reason).join('; ') })),
}
```

Inline the actual prompt texts and schemas; the script must be self-contained. Judges and verifiers read the screenshots and deck source from disk via their own tools, so pass paths, not file contents, in the prompts (except the standards document, which is short enough to inline and must not drift mid-round).

## Fallback without the Workflow tool

Dispatch the four judges as parallel Agent calls with the same prompts and ask each to end with the findings as a JSON code block. Then dispatch verifiers the same way. Parse, filter through the ledger, fix, loop. Slower, same isolation guarantees.
