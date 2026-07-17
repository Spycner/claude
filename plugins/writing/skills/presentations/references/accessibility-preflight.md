# Accessibility Preflight

This file captures the accessibility baselines and checks that a slide deck produced by the `writing:presentations` skill must meet. It is derived from WCAG 2.2 (W3C), Microsoft and Google accessibility guidance for slide decks, and the TEDx slide-simplicity rules. The Phase 5 Visual and Accessibility Critic reads this file as a reference; the Phase 5 heuristic audit's Check F (image-bearing slides have non-empty alt_text) also points here for the alt-text content rules. Treat the baselines as floors, not targets: a deck that just passes 4.5:1 contrast on body text is still hard to read at projection size in a bright room.

## Contrast (WCAG 2.2 AA)

WCAG 2.2 Success Criterion 1.4.3 (Contrast Minimum) sets the floor for text contrast against its background:

- Normal text: minimum 4.5:1 contrast ratio. "Normal" here means smaller than 18pt regular or smaller than 14pt bold.
- Large text: minimum 3:1 contrast ratio. "Large" means 18pt regular and up, or 14pt bold and up.
- Non-text contrast (Success Criterion 1.4.11): graphical UI components and meaningful graphics need at least 3:1 against adjacent colours. This applies to chart elements that carry meaning (bars, lines, axis labels with semantic colour), to icons that convey state, and to focus indicators.

Verification: use the WebAIM Contrast Checker (https://webaim.org/resources/contrastchecker/) on the actual hex values in the deck's design system before committing the colour palette. Test combinations at the size they will appear at projection, not at editor zoom. A combination that reads as 4.5:1 in the editor can drop below the floor when the projector's gamma curve compresses it.

Colour is not the only carrier of meaning. WCAG 2.2 Success Criterion 1.4.1 (Use of Color) requires that any information conveyed by colour must also be conveyed by a second cue. The two practical cases in slide decks:

1. Multi-series charts: if a line chart distinguishes two series by colour alone (a red line and a green line, identical otherwise), add a second cue. Options include line pattern (solid vs dashed), end-of-line label, point marker shape (circle vs square), or direct annotation. Colour-blind audience members (about 8% of men, 0.5% of women) cannot distinguish red from green at all; an audience of 50 is statistically certain to include at least one.
2. Status callouts: if a slide flags an item as "at risk" with a red background and "on track" with a green background, add a second cue (an icon, a text label, a pattern). The colour alone is not enough.

## Alt text rules

When required: every slide whose `visual` brief includes an image, chart, plot, diagram, photo, illustration, screenshot, or any meaningful graphic must have a non-empty `accessibility.alt_text` field. The Phase 5 heuristic audit's Check F enforces this mechanically; the rules below govern the content of the alt-text once present.

When omitted: text-only slides whose visual brief contains no meaningful graphic. The common cases are `Title`, `SectionDivider`, and `Closing` slides where the visual is centred text on a coloured background. Purely decorative imagery (a stock photo behind a title with no semantic content) may also omit alt-text if the speaker plans to describe nothing about it; mark the visual brief as "decorative" so the omission is intentional, not an oversight.

Format rules for alt-text content:

- Short: aim for one sentence, never more than two. Screen readers read alt-text linearly; a paragraph is unusable.
- Start with the subject or the takeaway, not the medium. Avoid the words "image of", "picture of", "chart showing". A screen reader has already announced that an image follows; the alt-text should pick up from there.
- Describe the takeaway, not the visual encoding. For data visualisations especially: the alt-text should say what the data shows, not what the chart looks like.
  - Bad: "Bar chart with five rising bars, each taller than the last, in blue."
  - Good: "Onboarding cycle time rose from 8 to 11 weeks between Q3 2024 and Q1 2026."
- For photographs and illustrations, name what is depicted and why it matters in context. "A new-hire orientation session with twelve participants" is more useful than "A photo of people at a table".
- For screenshots of UIs, name the UI and the relevant state. "Genie Code chat showing a failed dashboard creation with a 403 error" is more useful than "Screenshot of a chat interface".
- For diagrams, name the type and the relationship. "Three-layer architecture diagram: client (top), API gateway (middle), services (bottom)."

When the same image appears on multiple slides (e.g. a recurring logo, a banner image), the alt-text on the first occurrence describes it; subsequent occurrences may use shorter alt-text or be marked decorative if the speaker has already established what it is.

Practical floors that exceed the WCAG minimums and are worth adopting as house defaults:

- Body text on slides: target 7:1, not 4.5:1. Slide bodies are read at a distance (projection at the back of a room, laptop screen across a meeting table) under variable ambient light; the AAA threshold gives a margin for those conditions.
- Chart axis labels, legends, and data labels: target 4.5:1, not 3:1. These are technically "non-text" elements but they carry numbers a reader has to decode; treat them as text.
- Avoid grey-on-white text below 60% grey (#999) for body copy. Designers often pick light grey for "softer" hierarchy; it falls below 4.5:1 against white and is unreadable at projection size.

## Reading order

When the deck is delivered as a screen-reader-friendly artifact (an exported PDF, an embedded HTML slide deck, a recorded video with descriptive audio), assistive technology reads slide elements in spatial-z order: top to bottom, left to right, by stacking order. Object placement on the slide must therefore match the intended reading order. A title visually centred at the top, with body content below and a footnote at the bottom, reads in the expected order. A title positioned at the bottom of the slide with body text above it will read out of order; screen-reader users will hear the body before the title and lose the framing.

For the markdown `deck.md` artifact this skill produces, reading order is implicit: the YAML key sequence for each slide (`headline`, `body`, `visual`, `sources`, `speaker_notes`) defines the reading order, and the ASCII layout sketch in the storyboard captures the spatial intent. The downstream renderer (whatever tool converts `deck.md` into HTML, PDF, or Keynote) is responsible for ensuring the rendered spatial order matches the source key order. When choosing or building the renderer, test one exported PDF with a screen reader (VoiceOver on macOS, NVDA on Windows, Orca on Linux) before relying on the renderer's defaults; rendering quality varies considerably across tools.

If the deck includes any slide with non-linear layout (a quadrant chart, a process diagram with arrows that cross), document the intended reading order in the `accessibility.reading_order` field of that slide and verify the export reflects it. A common pattern: number the elements on the slide (1, 2, 3, 4) and record the order in the field as `reading_order: "title, quadrant 1 (top-left), quadrant 2 (top-right), quadrant 3 (bottom-left), quadrant 4 (bottom-right), summary line"`. The renderer can then use the numbering to set the underlying tab order or PDF structure.

For tables specifically: ensure the renderer emits proper `<th>` headers (not just `<td>` cells with bold styling) and that the table has a caption or summary. Screen readers announce table structure when the markup is correct and skip past tables when the markup is wrong; an unannounced data table is invisible to a screen-reader user.

## Captions plan

Captions are required for any recorded delivery and strongly recommended for any live delivery. WCAG 2.2 Success Criterion 1.2.2 (Captions, Prerecorded) makes captions a Level A requirement for all prerecorded audio content in synchronised media; this includes recorded talks shared after the event.

Live delivery: enable platform captions at the start of the talk. Teams, Zoom, Google Meet, Webex, and most other conferencing platforms now offer automated live captions; turn them on before the first slide, not after a request from the audience. Add this step to the speaker's pre-talk checklist so it is not forgotten under pressure. For in-person delivery without a conferencing platform, arrange for a CART (Communication Access Realtime Translation) provider in advance for any event larger than a workshop, or use a smartphone-based live-caption app projected alongside the slides for smaller settings.

Recorded delivery: captions are required, not optional. Two acceptable approaches:

1. Burned-in captions: caption text is encoded into the video frames themselves. Always visible; not user-controllable. Useful for video shared via platforms that do not support sidecar caption tracks.
2. Synchronised caption track: a separate `.srt`, `.vtt`, or `.ttml` file paired with the video. User-controllable (can be enabled, disabled, restyled). The preferred shape for YouTube, Vimeo, and most enterprise video platforms.

Either approach must use accurate captions (not raw auto-generated text). Auto-generated captions from YouTube or similar typically run at 70-90% accuracy; for a talk, correct them by hand or via a caption-editing tool (Descript, Otter, Rev) before publishing. Inaccurate captions are sometimes worse than no captions because they mislead.

For talks delivered in a language other than the audience's first language, plan for translated captions or subtitles in addition to same-language captions. Recorded talks shared internationally should ship with at least an English caption track; one additional language is a meaningful courtesy if the audience is concentrated in a specific market.

Each slide's `accessibility.caption_plan` field records the strategy for that slide. For most decks the same strategy applies deck-wide; record it once on the title slide and reference it from others (`caption_plan: see Slide 01`). Example values:

- "Live captions via Zoom; recorded captions burned into the published MP4 via Descript."
- "In-person delivery, CART provider engaged; no recording planned."
- "Recorded asynchronously, VTT track published to YouTube."

## Quick preflight checklist

Run through these yes/no questions before declaring the deck ready. Any "no" is a finding to log in `audit-report.md` (Check F-style for image-specific items, Visual and Accessibility Critic-style for the rest).

1. Have I tested every text-on-background colour combination in the WebAIM Contrast Checker against the actual hex values, at slide-projection size?
2. Does every meaningful graphic (chart, photo, diagram, screenshot, illustration) have non-empty alt-text in the slide's `accessibility.alt_text` field?
3. Does the alt-text describe the takeaway or the data, not the visual encoding?
4. Does any chart, status callout, or other meaningful element carry information by colour alone? If yes, is a second cue (pattern, label, shape, icon) also present?
5. Is the deck's captions plan documented in `accessibility.caption_plan` for both live and recorded delivery?
6. If the deck will be exported as PDF or HTML, have I tested the export with at least one screen reader to confirm reading order matches the source?
7. Have I added "enable platform captions" to the speaker's pre-talk checklist for live delivery?
