# Storyboard Template

Fill this in after the message architecture and before any slide briefs. The storyboard is the deck's table of contents at the headline level: every slide gets a sentence headline (not a topic noun), a slide_type drawn from the eight canonical types, a brief visual concept, and the one ask the speaker note must satisfy. If a slide's headline does not advance the pyramid, cut or merge it.

The storyboard is also the last cheap moment to change the deck. Slide briefs are 5-10x the effort per slide of a storyboard row; reordering, cutting, or adding a slide here costs minutes, doing it after slide briefs are written costs hours. Walk the storyboard once linearly and read only the headlines aloud: that sequence of sentences should already tell the full argument by itself. If it does not, fix the storyboard before going further.

The eight slide types each play a specific role: Title opens, Agenda orients, SectionDivider chunks a long deck, Decision puts the ask on screen, Evidence backs a single pyramid reason, Transformation shows the before/after pivot, Closing repeats the governing idea and consequence, Appendix holds Q&A backup that is not presented unless invoked. A short deck (under 12 slides) typically skips SectionDivider; a long deck (over 16 slides) typically uses SectionDividers to chunk the pyramid reasons.

## Deck metadata

- **Deck title:** [working title, usually a compressed restatement of the governing idea]
- **Total slide count:** [count, must fall inside the recommended band from the audience brief]
- **Recommended band reference:** [the band recorded in the audience brief, e.g. "8 to 12 slides per time-budget.md for executive briefing at 20 minutes"]

## Slide table

The eight canonical content-side slide types are: Title, Agenda, SectionDivider, Decision, Evidence, Transformation, Closing, Appendix. Pick one per row. Headlines are full sentences with a verb and a claim, not topic nouns. The visual brief is one phrase naming the dominant visual (chart type, image concept, table, ASCII layout note). The primary speaker-note ask names the single sentence the speaker must deliver to make the slide land.

| Slide # | slide_type | Sentence headline | Visual brief | Primary speaker-note ask |
|---------|------------|-------------------|--------------|--------------------------|
| 1 | [type] | [sentence headline] | [visual concept] | [the one sentence the speaker must deliver] |
| 2 | [type] | [sentence headline] | [visual concept] | [the one sentence the speaker must deliver] |

Headline test: each row's headline, read in sequence with the others, should narrate the deck. If row 4's headline is "Cost analysis" instead of "The H2 investment of 1.4M USD recovers in 7 months from avoided churn," rewrite row 4. Topic nouns produce decks the audience cannot remember; sentence headlines produce decks the audience can repeat to a colleague verbatim.

## Worked example: 10-slide board intake-workflow approval briefing

### Deck metadata

- **Deck title:** Approve one intake workflow now
- **Total slide count:** 10 (9 presentation + 1 appendix)
- **Recommended band reference:** 8 to 12 slides per time-budget.md for executive briefing at 20 minutes

### Slide table

| Slide # | slide_type | Sentence headline | Visual brief | Primary speaker-note ask |
|---------|------------|-------------------|--------------|--------------------------|
| 1 | Title | Approve one intake workflow now to cut onboarding cycle time 35 percent in H2 | Full-bleed title card with deck title and presenter name; no body chrome | Open with the SCQA Situation sentence; do not read the title aloud. |
| 2 | Agenda | We will cover the diagnosis, the fix, the numbers, and the decision in front of you today | Four-item agenda list, no icons, left-aligned | State the agenda once, name the duration (15 plus 5 Q&A), commit to the decision-by-end-of-session frame. |
| 3 | Evidence | Onboarding cycle time has held above 10 weeks since Q3 2025 | Line chart, 6 quarterly data points, target line at 7.2 weeks, current at 11 weeks highlighted | Deliver the SCQA Complication: the KPI is out of reach on this trajectory. |
| 4 | Evidence | Intake handoffs account for 6.4 of the 11 weeks, not downstream provisioning | Horizontal stacked bar of value-stream segments, intake segment highlighted | Deliver Reason 1: the bottleneck is intake, so the fix has to live there. |
| 5 | Transformation | A single PMO-owned intake replaces four BU intakes and closes the authority gap that killed prior attempts | Two-column before/after diagram: four BU intakes on the left collapsing to one unified workflow on the right | Deliver the insight: the authority gap that killed prior attempts is already closed by the PMO charter. |
| 6 | Evidence | Peer rollouts have delivered 38 to 41 percent cycle-time reduction inside one quarter | Dot plot of 23 peer firms with median line at 38 percent, our target marked at 35 percent | Deliver Reason 3: 35 percent is a conservative target relative to the peer benchmark. |
| 7 | Evidence | The H2 investment of 1.4M USD recovers in 7 months from avoided churn | Two-bar cost-vs-benefit chart, payback marker at month 7 | Deliver the financial frame: this is not a sunk cost, it is a payback case. |
| 8 | Decision | Approve scope and budget today so PMO can start the unified workflow next sprint | Single-motion card: the exact motion text the chair will read, vote-tracker row below | Read the motion verbatim; name what a yes vote authorizes and what a no vote preserves. |
| 9 | Closing | A yes today protects the retention KPI; a deferral forfeits it | Restated governing idea, the consequence-if-delayed number (180 churn losses) on the right | Close on the consequence-if-delayed, not the upside; the room remembers loss framing. |
| 10 | Appendix | Detailed budget breakdown, peer-rollout reference list, prior-attempt retrospective summary | Three appendix sub-cards, one per backup topic, no chart on the cover | Do not present; reference only if asked during Q&A. |

Notes on slide-type distribution in this worked example: one Title (1), one Agenda (2), four Evidence (3, 4, 6, 7), one Transformation (5), one Decision (8), one Closing (9), one Appendix (10). No SectionDivider was needed because the deck is short enough that the agenda alone signals the structure; for a 16-slide variant, SectionDividers would split the diagnosis section from the proposal section from the financial section.
