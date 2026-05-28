# Slide Brief Template

Documents the per-slide YAML schema used in `deck.md`. Each slide in `deck.md` is a YAML front-matter block followed by optional body markdown. The host agent fills this template once per slide, copying the YAML block into `deck.md` between slide delimiters.

## Schema

The schema below defines the six top-level keys. Five are required on every slide; one (`sources`) is optional. Sub-keys under `speaker_notes` and `accessibility` are documented after the schema block.

```yaml
slide_type: <enum>          # required. One of: Title, Agenda, SectionDivider, Decision, Evidence, Transformation, Closing, Appendix.
headline: <string>          # required. Full sentence with a verb and a claim, not a topic noun. Should match the storyboard headline verbatim.
visual: <string>            # required. One-line description of the dominant visual (chart type, image concept, table shape, layout note). The visual designer or render step reads this.
speaker_notes:              # required. Five sub-keys, see below.
  transition: <string>
  claim: <string>
  evidence: <string>
  implication: <string>
  ask: <string>
accessibility:              # required. Three sub-keys, see below.
  alt_text: <string>
  contrast: <string>
  caption_plan: <string>
sources:                    # optional. List of citations, omit entirely if no external data is shown.
  - <citation string>
  - <citation string>
```

### speaker_notes sub-keys

Each sub-key is one to three sentences. The speaker reads or paraphrases them in order during the slide.

- **transition:** how the speaker arrives at this slide from the previous one. Names the prior claim and bridges to the current one.
- **claim:** the headline restated for the ear; the sentence the speaker actually says aloud as the slide opens.
- **evidence:** the supporting data point, quote, or benchmark the speaker cites to back the claim.
- **implication:** what the audience should now believe, decide, or do differently because of the evidence.
- **ask:** the explicit ask this slide makes of the audience (attention, agreement, a question to consider, a vote). For non-Decision slides this is usually an attention or comprehension ask; for the Decision slide it is the literal motion.

### accessibility sub-keys

- **alt_text:** descriptive alt text for the dominant visual, written so a screen reader user gets the same takeaway as a sighted viewer. Omit on text-only slides (see "When to omit a key" below).
- **contrast:** notes on color contrast for the visual and any annotations; flag any element that risks falling below WCAG AA (4.5:1 for body text, 3:1 for large text and graphical elements). See accessibility-preflight.md for the full check.
- **caption_plan:** if the deck will be presented with live captions or recorded with captions, note any slide-specific terms, names, or numbers the captioner should pre-load.

## When to omit a key

The schema has one optional top-level key and one conditionally-omitted sub-key.

- **`sources` (top-level):** omit entirely if the slide shows no external data, quotes, or benchmarks. A Title, Agenda, SectionDivider, or Closing slide typically has no sources. An Evidence slide almost always does.
- **`accessibility.alt_text` (sub-key):** omit on text-only slides where the visual is purely typographic (Title with no logo, Agenda with no icons, SectionDivider that is just heading text on a colored band). On any slide with a chart, image, diagram, or photo, alt_text is required.

See `accessibility-preflight.md` for the fuller rules on contrast thresholds, caption pre-loading, and the per-slide preflight checklist that runs before the deck is finalized.

## Worked example: Decision slide

```yaml
slide_type: Decision
headline: Approve one intake workflow now to cut onboarding cycle time 35 percent in H2
visual: Single-motion card with the exact motion text the chair will read, vote-tracker row beneath
speaker_notes:
  transition: We have walked through the diagnosis, the fix, the peer benchmark, and the payback. The remaining question is procedural.
  claim: I am asking the board to vote on a single motion that authorizes scope and budget for the unified intake workflow.
  evidence: The motion text on screen matches the language approved by counsel and references the 1.4M USD budget line detailed in the appendix.
  implication: A yes vote authorizes the PMO to begin implementation in the next sprint. A no vote preserves the four current BU intakes and the 11-week cycle time.
  ask: Madam Chair, I move that the board approve scope and budget for the unified intake workflow as presented, effective next sprint.
accessibility:
  alt_text: Decision card containing the motion text "The board approves scope and budget for the unified intake workflow as presented, effective next sprint" with a five-row vote tracker beneath for CEO, CFO, COO, and two independent directors.
  contrast: Motion text in black on white (21:1, well above AA). Vote-tracker grid lines at gray 60 percent on white (4.6:1, just above AA for graphical elements at 3:1). Safe.
  caption_plan: Pre-load "PMO" and "BU" as glossary terms; the captioner has flagged both as historically misrendered.
```

ASCII layout sketch:

```
+----------------------------------------------------+
|  DECISION                                          |
|                                                    |
|  MOTION:                                           |
|  +----------------------------------------------+  |
|  | The board approves scope and budget for the  |  |
|  | unified intake workflow as presented,        |  |
|  | effective next sprint.                       |  |
|  +----------------------------------------------+  |
|                                                    |
|  VOTE TRACKER:                                     |
|  CEO     [ ]  CFO     [ ]  COO     [ ]             |
|  Dir A   [ ]  Dir B   [ ]                          |
|                                                    |
+----------------------------------------------------+
```

## Worked example: Evidence slide

```yaml
slide_type: Evidence
headline: Onboarding cycle time has held above 10 weeks since Q3 2025
visual: Line chart, 6 quarterly data points from Q3 2024 to Q4 2025, current value of 11 weeks highlighted in red, target line of 7.2 weeks drawn in green
speaker_notes:
  transition: With the agenda set, let me anchor us in the trajectory the KPI is actually on.
  claim: Onboarding cycle time has held above 10 weeks for six consecutive quarters and is currently sitting at 11.
  evidence: This is the internal Ops dashboard, pulled Monday; the target line at 7.2 weeks is the cycle time required to land the retention KPI inside FY26.
  implication: On this trajectory, the retention KPI tied to executive comp does not land. The gap is structural, not seasonal.
  ask: Hold this number, 11 weeks, as the anchor for the rest of the deck. Every later slide refers back to it.
accessibility:
  alt_text: Line chart showing onboarding cycle time in weeks across six quarters from Q3 2024 to Q4 2025. Values are 10.4, 10.6, 10.8, 11.1, 11.0, 11.0. A horizontal green target line is drawn at 7.2 weeks. The current value of 11.0 is marked with a red dot and a callout.
  contrast: Red current-value dot on white (5.2:1, AA pass). Green target line on white (3.4:1, AA pass for graphical elements). Gridlines at gray 70 percent (3.1:1, AA pass for graphical elements).
  caption_plan: No special pre-loads beyond the standard glossary.
sources:
  - Internal Ops dashboard, pulled 2026-05-23
  - FY26 retention KPI memo (Board pack, Q4 2025)
```

ASCII layout sketch:

```
+----------------------------------------------------+
|  Onboarding cycle time has held above 10 weeks     |
|  since Q3 2025                                     |
|                                                    |
|  weeks                                             |
|   12 |              o---o---o (11.0)               |
|   11 |        o---o                                |
|   10 |  o---o                                      |
|    9 |                                             |
|    8 |                                             |
|    7 |==============================  target 7.2   |
|    6 |                                             |
|      +----+----+----+----+----+----                |
|       Q3   Q4   Q1   Q2   Q3   Q4                  |
|       2024 2024 2025 2025 2025 2025                |
|                                                    |
|  Source: Internal Ops dashboard, 2026-05-23        |
+----------------------------------------------------+
```
