# Phase 5 Heuristic Audit Checklist

This audit runs inline in the main session before the critic personas dispatch in Phase 5. The checks here are deterministic, machine-friendly, and fast: each check states what to look for, how to look for it (grep pattern, YAML parse rule), and which slide types are exempt. Any violation found by this audit is recorded in `audit-report.md` under a `### Heuristic findings` section, with one numbered item per violation. The host agent then fixes each violation in place or surfaces it to the user when the fix needs judgement. Only after the heuristic audit settles does the host agent dispatch the three critic personas (see `critic-prompts.md`).

## Check A: Headline is a sentence, not a topic noun

What: every slide's `headline` value must read as a complete sentence stating the slide's takeaway. A headline that is a noun phrase ("Q1 Results") or a topic label ("Onboarding cycle time") fails this check. The headline should answer "so what?" not "what topic?". This rule is sometimes called the assertion-evidence model in presentation-design literature; the headline asserts, the body provides evidence.

How to check: this is a heuristic, not a pure regex. The host agent reads each headline and flags it when any of the following is true.
- The headline contains no verb (no main verb, no copula, no auxiliary).
- The headline contains no clear subject.
- The headline ends in a bare noun phrase with no predicate.
- The headline reads as a section title or topic header (common patterns: `<Noun> Results`, `<Noun> Overview`, `<Metric> by <Dimension>`, `<Year> Update`).

Helpful starting grep to surface candidates for review:
```
grep -nE '^\s*headline:\s*"[A-Z][a-zA-Z ]+"\s*$' deck.md
```
That regex catches short, capitalised, punctuation-free headlines, the population most likely to be topic nouns. The host agent still reads each candidate in context before deciding.

Examples of fail and pass for the same slide topic:
- Fail: `headline: "Onboarding cycle time"` (topic noun).
- Fail: `headline: "Q1 onboarding"` (topic noun).
- Pass: `headline: "Onboarding cycle time has doubled since Q3 2024"` (subject, verb, predicate, takeaway).
- Pass: `headline: "Our onboarding pipeline is the binding constraint on Q2 revenue"` (subject, verb, predicate, takeaway).

Exempt slide types: `SectionDivider` (its headline is a section label by design), `Appendix` (its headline is a topic pointer for reference).

## Check B: Evidence slides have a non-empty sources field

What: every slide with `slide_type: Evidence` must have a `sources` field that is non-empty and that records, at minimum, the source name, the date or year, and the scope or sample size of the evidence. A bare URL with no date or scope fails this check.

How to check: parse `deck.md` as YAML-with-markdown-bodies. For every slide block where `slide_type == "Evidence"`:
1. Assert `sources` exists and is non-empty.
2. Assert the `sources` text contains a four-digit year between 2000 and the current year, OR an explicit date in `YYYY-MM` or `YYYY-MM-DD` form.
3. Assert the `sources` text mentions at least one scope marker: `n=`, `sample`, `respondents`, `customers`, `users`, `accounts`, `tickets`, `incidents`, `period`, `Q[1-4]`, or a date range.

Quick grep to surface candidates missing a year:
```
awk '/^slide_type:\s*Evidence/,/^---$/' deck.md | grep -A1 '^sources:' | grep -vE '\b(19|20)[0-9]{2}\b'
```

Exempt: none. Evidence slides without sourced evidence fail by definition.

## Check C: Decision slides have a specific ask

What: every slide with `slide_type: Decision` must have a `speaker_notes.ask` field containing four elements: actor (who decides), action (what they decide), timing (by when), and consequence-if-delayed (what happens if they do not). A vague "we should consider..." or "leadership alignment needed" fails this check.

How to check: parse `deck.md` as YAML. For every slide block where `slide_type == "Decision"`, read `speaker_notes.ask` and scan for the four elements.
- Actor: look for a named role, team, or person (`CFO`, `Steering committee`, `Pascal`, `Platform team`). Pronouns ("we", "they") fail unless preceded by a clarifying noun in the same field.
- Action: look for a decision verb (`approve`, `fund`, `sign off`, `green-light`, `commit`, `prioritise`, `de-prioritise`, `reassign`).
- Timing: look for a temporal anchor (`by end of Q3`, `before 2026-06-30`, `at the next steering meeting`, `within two weeks`).
- Consequence-if-delayed: look for a conditional consequence (`otherwise`, `if not`, `delays beyond`, `slips by`, `risks`, `blocks`).

Flag the slide if any of the four elements is missing or ambiguous.

Examples of fail and pass for a Decision slide ask:
- Fail: `ask: "We should align on the onboarding investment."` (no actor named beyond "we", no specific action, no timing, no consequence).
- Fail: `ask: "CFO to approve the onboarding budget."` (actor + action, but no timing, no consequence).
- Pass: `ask: "CFO to approve the EUR 180k onboarding budget at the 2026-06-12 steering meeting; further delay slips the Q3 hiring plan by one quarter and forces us to defer the EMEA expansion."` (actor, action, timing, consequence-if-delayed).

Exempt: none. Decision slides without a specific ask fail by definition.

## Check D: Chart-visual slides state a single comparison

What: when a slide's `visual` brief mentions a chart, plot, graph, bar, line, scatter, or similar visualisation, the brief text must state exactly one comparison the chart makes. Multi-comparison briefs ("show revenue, cost, and headcount over time, split by region") fail this check; the chart should be split into separate slides or simplified.

How to check: two passes.
1. Keyword pass: grep the visual briefs for chart-related terms.
   ```
   grep -nE 'visual:.*(chart|plot|graph|bar|line|scatter|histogram|pie|funnel|waterfall|sparkline)' deck.md
   ```
2. Comparison pass: for each match, scan the visual brief for comparison markers: `vs`, `versus`, `before/after`, `trend`, `over time`, `between`, `compared to`, `relative to`, `year-over-year`, `month-over-month`. Count the distinct comparisons asserted. If the count is not exactly one, flag the slide.

Examples:
- Fail: `visual: "Stacked bar chart of revenue, cost, and headcount by quarter, split by region, with target overlay."` (three measures, two dimensions, plus a target; at least four comparisons).
- Pass: `visual: "Bar chart of onboarding cycle time by quarter, 2024-Q3 through 2026-Q1, single series."` (one comparison: trend over time).
- Pass: `visual: "Before/after bar chart of cycle time, two bars only."` (one comparison: before vs after).

Exempt: `Appendix` (appendix charts may be reference material with multiple comparisons by design).

## Check E: Slide count is within the recommended band

What: the total slide count in `deck.md` must fall within the band recommended by `time-budget.md` for the genre and duration captured in `audience-brief.md`. A 10-minute conference talk with 35 slides fails; so does a 60-minute training session with 8 slides.

How to check:
1. Count `Slide` blocks in `deck.md` (one block per slide).
   ```
   grep -cE '^---\s*$' deck.md
   ```
   Adjust the divider pattern to match the deck's actual block boundary.
2. Read `genre` and `duration_minutes` from `audience-brief.md`.
3. Look up the recommended band for that genre/duration pair in `time-budget.md`.
4. Compare. If the count is outside the band, flag a violation.

Exempt slide types from the count: `Appendix` slides are counted and reported separately, since they do not consume live talk time.

User override: if the user explicitly requested an out-of-band slide count (recorded earlier in the session, ideally referenced in `audience-brief.md` or surfaced by the host agent), the audit-report records the override under a `### User overrides` section instead of flagging it as a violation. The override note must name the requested count and the recommended band so a later reviewer sees both.

## Check F: Image-bearing slides have non-empty alt_text

What: every slide whose `visual` brief mentions an image, photo, diagram, chart, plot, illustration, screenshot, or any meaningful graphic must have `accessibility.alt_text` populated with non-empty descriptive text. Empty alt_text on an image-bearing slide fails the check (see `accessibility-preflight.md` for alt-text content rules).

How to check:
1. For each slide, grep the `visual` brief for image keywords: `image`, `photo`, `diagram`, `chart`, `plot`, `illustration`, `screenshot`, `graphic`, `figure`, `map`, `icon` (when icon carries meaning, not decoration).
2. For each image-bearing slide, parse `accessibility.alt_text` and assert it is present and non-empty.
3. Empty string, the literal `null`, or a missing key all fail.

Exempt: text-only slides where the visual brief contains no image keyword. The common cases are `Title`, `SectionDivider`, and `Closing` slides whose visual brief is "centred text on coloured background" or similar.

## Violation report format

Each heuristic violation is recorded as a numbered item in the `### Heuristic findings` section of `audit-report.md`. The format is:

```
### Heuristic findings

1. Check A violation, Slide 04: headline reads as topic noun ("Cycle time"). Suggested fix: rewrite as sentence-takeaway, e.g. "Onboarding cycle time has doubled since Q3 2024".
2. Check C violation, Slide 09: speaker_notes.ask missing timing element. Suggested fix: add a temporal anchor, e.g. "by end of Q3" or "at the next steering meeting".
3. Check E violation, deck-level: 35 slides exceeds the 18-22 band recommended for a 20-minute conference talk. Suggested fix: cut to the 18-22 band, or move detail slides to Appendix.
4. Check F violation, Slide 12: visual brief mentions "bar chart" but accessibility.alt_text is empty. Suggested fix: add alt text describing the chart's takeaway, not its visual encoding.

### User overrides

1. Slide count: user requested 35 slides for a 20-minute talk (recommended band: 18-22). Override accepted at user direction.
```

If a check finds no violations, omit its line entirely; do not write "Check A: no violations". The absence of an item is the signal that the check passed.
