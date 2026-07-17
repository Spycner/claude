# Deck Standards

This file is the constitution for presentation review. Judges may only raise findings that cite a rule ID from this file; anything else is taste and gets rejected in verification. Hard gates (H rules) are measured by deterministic probes, never judged. Soft gates (S rules) are judged by fresh-context reviewers against screenshots, source, and the deck brief below.

Edit this file freely; it lives next to your deck as `deck-standards.md` and your edits override the bundled default. When the active preset ships `guidelines.md` or `language.md`, their rules join this file as part of the constitution: judges receive them alongside it, and a preset rule carries the same weight as an S rule.

## Severity scale

- **blocker**: the deck cannot be presented as is. Broken layout, factually wrong content, text unreadable at presentation distance.
- **major**: an audience member would notice and be distracted. Cramped slide, headline that states a topic instead of a takeaway, mismatched agenda.
- **minor**: polish. Inconsistent spacing, weak phrasing, redundant words.
- **nit**: defensible taste within the rules. Reported, but does not block convergence unless strict mode is on.

## Hard gates (measured)

- **H1 No clipped text.** No text element extends past the slide canvas. Slide content overflowing the canvas without clipping any text (decorative bleed, full-bleed panels) is not a failure; it is routed to the visual judge with the screenshot.
- **H2 No overlapping text.** No two text elements intersect by more than 4 canvas pixels in both axes.
- **H3 No broken assets.** Every image loads (`naturalWidth > 0`); no failed network requests for fonts, styles, or scripts.
- **H4 No console errors.** The deck loads and navigates with a clean console. 404s for optional probe files on the allowlist below are exempt. Allowlist: `favicon.ico`.
- **H5 Typography lint.** Banned codepoints nowhere in rendered text: U+2014 em-dash, U+2013 en-dash, U+00B7 interpunct. Edit this list to your house style.
- **H6 Contrast floor.** Text elements longer than two characters (shorter ones are decorative markers: accent dots, ghost numerals, prompt glyphs) must reach 3:1 contrast against their effective background. Text under 24 canvas pixels that lands between 3:1 and 4.5:1 is routed to the visual judge as borderline, not auto-failed. Text over images or gradients is judged from the screenshot (S13).
- **H7 Fonts load.** Every declared font family has at least one loaded face; a family with no loaded face fails. Partial weight failures (browser-synthesized bold from a loaded base weight, local-first font strategies) are routed to the visual judge as portability info, with a note that the deck renders differently on machines without the local font.

## Soft gates (judged)

### Narrative (dimension: narrative)

- **S1 One idea per slide.** A slide making two arguments is two slides.
- **S2 The deck has an arc.** The opening states a promise, each section advances it, the closing pays it off. A deck that is a list of facts fails S2.
- **S3 Agenda honesty.** If an agenda slide exists, the sections that follow match it in name, order, and count.
- **S4 Earned conclusions.** Any claim on a closing or summary slide must have appeared with support earlier in the deck.

### Clarity (dimension: clarity)

- **S5 Headlines carry the takeaway.** Each slide's takeaway surface states what the audience should conclude, not the topic ("Migration cut costs 40%", not "Cost analysis"). In layouts that pair a short topic title with a subtitle, the subtitle is that surface (the action title): a topic-noun title above a takeaway subtitle passes, a slide with no takeaway on either surface fails.
- **S6 Every element earns its place.** No filler text, decorative bullets restating the headline, or data shown but never used.
- **S7 Audience-fit language.** Jargon, acronyms, and assumed context match the audience named in the deck brief.
- **S8 Scannable in seconds.** A slide's point lands within roughly five seconds of looking at the screenshot. Walls of text fail S8.

### Visual (dimension: visual)

- **S9 Alignment discipline.** Like elements sit on a consistent grid across slides; edges that almost align are findings.
- **S10 One focal point.** Each slide has a clear visual hierarchy; if everything is bold, nothing is.
- **S11 Consistency of like elements.** Repeated element types (section dividers, stat callouts, footers, captions) look identical across slides in size, color, and position.
- **S12 Whitespace is part of the design.** Margins and breathing room are consistent; a slide noticeably denser than its neighbors is a finding against it, not against them.
- **S13 Text over imagery stays readable.** Where H6 cannot measure (images, gradients), readability is judged from the screenshot.

### Delivery (dimension: delivery)

- **S14 Speaker notes match their slides.** A note describes the slide it is attached to; a note that describes a different slide or contradicts the slide's content is a finding. Absent notes are a finding only when the deck brief requires notes. Notes are the presenter's voice: neither judges nor the fixer ever draft notes to satisfy this rule, and an empty notes entry is a valid state.
- **S15 Time budget.** Slide count and per-slide density fit the time budget in the deck brief (rule of thumb: one to two minutes per content slide).
- **S16 Presentable openings and closings.** The first and last slides work as static screens (audience waiting, Q&A) without the presenter talking.

## Deck brief

Fill this in per deck before round 1. Judges receive it as part of the constitution.

- **Audience**:
- **Goal** (what the audience should think or do afterwards):
- **Time budget**:
- **Tone**:
- **Constraints** (brand, mandatory slides, things that must not change):
