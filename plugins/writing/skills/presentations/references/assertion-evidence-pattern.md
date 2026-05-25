# Assertion-Evidence Pattern

## The pattern in one paragraph

The assertion-evidence slide design replaces the PowerPoint-default topic-and-bullets layout with a sentence headline (the assertion) plus a single visual evidence object (the evidence). The headline states the takeaway as a complete sentence, the body is one chart, photograph, diagram, or schematic that supports it, and the speaker's spoken track explains and connects rather than reading the slide aloud. The pattern was developed by Michael Alley at Penn State and formalized in Joanna Garner and Michael Alley's 2013 study "How the design of presentation slides affects audience comprehension" (Technical Communication, 60(3), 207-220).

## Why it works

Garner and Alley's 2013 study compared three slide designs on the same technical content: the PowerPoint default (topic headline plus bullet stack), the assertion-evidence pattern (sentence headline plus single visual), and a text-only sentence headline with no visual. Across measures of immediate comprehension, perceived cognitive load, and delayed recall, the assertion-evidence pattern produced superior comprehension, lower self-reported cognitive load, and stronger delayed recall than the PowerPoint default.

The mechanism behind the effect is well-described by Richard Mayer's redundancy principle from cognitive load theory: when a presenter narrates a slide that also displays the same words on screen, the audience's working memory tries to process both the auditory and visual text streams simultaneously, which crowds out the actual content. Graphics plus narration outperform graphics plus narration plus on-screen text. The assertion-evidence pattern enforces this directly: the slide carries a one-sentence assertion and one visual; everything else the speaker would say goes in the speaker's voice, not on the slide.

A second mechanism is signal-noise. A bullet-stack slide forces the audience to read five short phrases and infer the takeaway. A sentence headline states the takeaway, so the visual is read as confirmation rather than as a puzzle whose answer the audience must reconstruct.

A third mechanism is commitment. A sentence headline forces the slide author to take a position. "Q3 Results" commits to nothing; "Q3 revenue beat plan by 12% on stronger renewals" commits to a claim that can be defended, attacked, or refined. Decks improve in quality the moment a team is required to write sentence headlines for every slide, because vague slides cannot survive the rewrite.

## Origin and adoption

Alley first proposed the pattern in the late 1990s for engineering and scientific talks, on the observation that audiences of technical talks were leaving with less retention than the speakers expected. The pattern was tested empirically in a series of studies at Penn State across the 2000s before the 2013 Garner and Alley paper consolidated the evidence. It has since been adopted in graduate engineering programs and in technical conference style guides. The pattern is content-agnostic: it works equally well for a sales deck, a technical design review, and a board recommendation, because the underlying cognitive constraint (working memory cannot process two simultaneous text streams) is invariant across audiences.

## Two positive examples

### Decision slide

```yaml
type: Decision
headline: "Approve the $400k Q3 spend on event-sourced billing to cut month-end close from 9 days to 2."
visual: "Bar chart, close duration by quarter (Q1-2024 through Q1-2026 actual + Q3-2026 projected), with the Q3-2026 projection bar in green and a horizontal target line at 2 days."
speaker_notes:
  transition: "We have seen the trend and the cost; here is the decision."
  claim: "Migrating to an event-sourced ledger cuts close time by 78%."
  evidence: "The green bar shows the projected Q3 close after migration, against the target line."
  implication: "Engineering can absorb this in Q3 with no impact to the H2 roadmap."
  ask: "I am asking for sign-off on the $400k spend today so we can start on June 15."
```

Commentary: the headline is a complete sentence stating both the ask and the magnitude of the benefit, so an audience member who looks up halfway through has the takeaway. The visual makes one and only one comparison (projected vs target). The speaker notes never restate the headline; they walk the audience through the chart and connect the evidence to the ask.

### Evidence slide

```yaml
type: Evidence
headline: "Month-end close has lengthened from 5 to 9 days over the last six quarters."
visual: "Line chart, close duration in days by quarter from Q3-2024 through Q1-2026, with the slope from Q3-2024 to Q1-2026 highlighted in orange and a horizontal reference line at the SLO of 5 days."
speaker_notes:
  transition: "Before the recommendation, the trend that triggered this work."
  claim: "Close time has roughly doubled in 18 months."
  evidence: "The orange segment is the deterioration; the dashed line is the SLO we committed to in 2024."
  implication: "If the trend continues another two quarters, close lands at 11 days, which breaches the audit cadence."
  ask: ""
```

Commentary: the headline names the magnitude (5 to 9 days) and the time window (six quarters) so the audience does not have to read both axes to find the takeaway. The visual highlights exactly one trend, with a reference line for context. The speaker's notes add the audit-cadence consequence, which is not on the slide; the slide and the speaker carry different information, not the same information twice.

## Two counter-examples to avoid

### Counter-example 1: topic-noun headline with bullet stack

```yaml
type: Evidence
headline: "Month-End Close Performance"
visual: ""
body_bullets:
  - "Close duration has increased"
  - "5 days in Q3-2024"
  - "9 days in Q1-2026"
  - "SLO is 5 days"
  - "Risk to audit cadence"
speaker_notes:
  transition: "Let me walk you through these bullets."
  claim: ""
  evidence: ""
  implication: ""
  ask: ""
```

Commentary: the headline is a topic noun ("Month-End Close Performance"), not an assertion, so the audience cannot extract a takeaway by glancing at the slide; they have to read five bullets and infer the message. The body is a text stack with no visual evidence, which means the slide is now a script for the speaker to read aloud, triggering the redundancy effect Mayer warns against: the audience reads the bullets, the speaker reads the bullets, working memory is consumed by parsing the same content twice, and comprehension drops. The fix is to convert the bullets into a single sentence headline ("Month-end close has lengthened from 5 to 9 days over the last six quarters") and render the trend as a line chart.

### Counter-example 2: speaker notes repeat the headline

```yaml
type: Decision
headline: "Approve the $400k Q3 spend on event-sourced billing to cut month-end close from 9 days to 2."
visual: "Bar chart of close duration by quarter."
speaker_notes:
  transition: ""
  claim: "I am recommending we approve the $400k Q3 spend on event-sourced billing to cut month-end close from 9 days to 2."
  evidence: "As you can see on this slide, the close duration goes from 9 days to 2 days."
  implication: "This is a 78% reduction in close time."
  ask: "Please approve the $400k Q3 spend on event-sourced billing."
```

Commentary: the speaker notes restate the headline almost word-for-word, then describe the chart in words ("as you can see on this slide, the close duration goes from 9 days to 2 days") instead of adding context the slide cannot show on its own. The audience now hears the assertion three times (headline, claim, ask) and processes the chart twice (once visually, once via the speaker's narration of it). The redundancy crowds out the information that would justify the recommendation: who absorbs the cost, what the migration risk looks like, why now and not next quarter. The fix is for the spoken track to do work the slide cannot: name the team that owns the migration, name the risk if delayed, name the precedent from a peer team that ran the same migration successfully.

## Common failure modes

A few failure patterns recur across decks that try to adopt assertion-evidence but slip back toward the default:

- **Sentence headline that is still a topic**: "We are looking at month-end close performance" is grammatically a sentence but asserts nothing. The audience cannot disagree with it. A real assertion would be "Month-end close performance has degraded to a level that threatens audit cadence."
- **Two visuals fighting for the body**: a chart plus a screenshot plus a callout box overloads the evidence object. Pick one. If a slide needs two visuals, it is two slides.
- **Speaker notes written as paragraphs, not as a track**: a wall-of-text note block invites the speaker to read it. A track (transition, claim, evidence, implication, ask) invites the speaker to perform it.
- **Sources buried in the appendix**: the slide footer should name the source so an audience member can challenge the evidence without leaving the slide. "Sources: internal data warehouse query, run 2026-05-12" is enough.

## Checklist before declaring a slide done

- Is the headline a complete sentence stating the takeaway, not a topic noun or a fragment?
- Does the visual make one and only one point, with the comparison or trend visibly highlighted?
- Do the speaker notes add information the slide does not already show (context, consequence, ownership, history)?
- If I deleted the slide text and kept only the visual, would the speaker's explanation still convey the takeaway?
- If I muted the speaker and kept only the slide, would a literate audience member extract the takeaway from headline plus visual?
- Are the speaker notes written as a track to perform, not as a script to read aloud (transition, claim, evidence, implication, ask)?
- Is every fact on the slide attributable to a source named in the slide footer or in the speaker notes?
- Could the slide stand alone in a printed handout, where the speaker's voice is absent, and still deliver the takeaway?

If any answer is no, the slide is not done. The most common no is question one (the headline is still a topic noun); the second most common no is question four (the visual cannot carry the takeaway because it is decorative rather than evidentiary).

## Reference

- Garner, J. K., and Alley, M. (2013). "How the design of presentation slides affects audience comprehension: a case for the assertion-evidence approach." International Journal of Engineering Education, 29(6), 1564-1579. The 2013 paper consolidates results from earlier studies (Alley and Neeley 2005; Alley, Schreiber, Ramsdell, and Muffo 2006) into a single comparison across three slide designs.
- Mayer, R. E. (2009). "Multimedia Learning" (2nd ed.). Cambridge University Press. The redundancy principle is chapter 7; the relevant claim is that adding on-screen text to a narrated graphic depresses learning compared to narration plus graphic alone.
