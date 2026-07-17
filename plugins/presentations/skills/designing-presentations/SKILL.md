---
name: designing-presentations
description: Use when the user wants to design the content of a slide presentation, from audience brief through critiqued storyboard, before any slide is rendered. Produces a markdown deck.md with structured per-slide front-matter. Triggers on requests to plan a deck's storyline, storyboard a presentation, work out key messages, or audit the content of an existing deck.md. For rendering a deck.md as a styled HTML deck, see the creating-presentations skill.
---

# Designing Presentations

End-to-end content design for slide decks. Five sequential phases produce: an audience brief, a message architecture, a storyboard, per-slide drafts, and a critique report. The deliverable is a single `deck.md` file with YAML front-matter per slide. This skill stops at `deck.md`; rendering, styling, and presenting are the deck builder's job.

## When to Use

Use this skill when the user wants to plan or refine the _content_ of a slide deck: who the audience is, what message moves them, how to order the slides, what each slide should say and show, what speaker notes back it up, and whether the result will land. Content design pays for itself before rendering: a storyline problem caught here costs one markdown edit, the same problem caught in a rendered deck costs a review round.

Two entry modes:

- **Design mode** (default): runs all five phases against a fresh idea. Output dir contains five named artifacts.
- **Audit mode**: consumes an existing `deck.md` and runs only Phase 5 (heuristic audit plus three critic personas). Triggered when the user provides a path to an existing deck.

## Dependencies

Nothing to install: filesystem operations only. The skill reads templates from its own `references/` directory and writes phase artifacts to the working directory. No external services, no APIs, no rendering. The one capability worth checking before Phase 5 is subagent dispatch (the Agent tool) for the three critic personas; when subagents are unavailable, run each persona inline in sequence, loading its prompt from `references/critic-prompts.md` and appending its findings to `audit-report.md`.

## Workflow

Five phases, each writing its own artifact to the working directory. File presence determines state: a phase is complete iff its artifact file exists and is non-empty. The user may resume at any later phase if the upstream artifacts are present.

Working directory: a `<topic-slug>/` directory under the current project unless the user names one. The rendered HTML deck later lives in the same directory, so design artifacts and render stay together. The topic slug comes from the user's intake (Phase 1) and is kebab-cased.

### Step 1: Intake

**Goal:** establish who the audience is, what the deck must accomplish, and what success looks like.

**Inputs:** the user's request, `references/audience-brief-template.md`, `references/time-budget.md`.

**Process:** ask the user the following questions, one at a time (in autonomous runs, self-answer each):

1. Who is the audience? Capture role, seniority, prior knowledge of the topic, what is at stake for them, and the two most likely objections.
2. What is the genre and length? Choose one of: executive briefing, keynote, training, pitch, technical talk. State the planned duration in minutes.
3. What is the governing idea, in one sentence under 20 words, no jargon? This becomes the title slide's headline.
4. What is the call to action? Capture actor (who must act), action (what they must do), timing (when), and consequence (what happens if they delay).

**Output:** `audience-brief.md`, filled in from the template. It doubles as the deck brief when the rendered deck later enters the perfecting loop, so the audience is named once and reused.

**Pass condition:** every field in `audience-brief.md` is populated and the governing idea fits one sentence.

### Step 2: Message Architecture

**Goal:** turn the intake into an answer-first argument and a transformation arc.

**Inputs:** `audience-brief.md`, `references/message-architecture-template.md`.

**Process:**

1. Write the SCQA opener: Situation (stable context the audience already accepts), Complication (the tension), Question (the question the complication forces), Answer (the governing idea as resolution).
2. Build the answer-first pyramid: one governing idea, two to four MECE grouped reasons, evidence under each reason. Each reason must be a sentence that states a conclusion, not a topic noun.
3. Write the transformation arc: current state, insight, future state. The arc is what the audience moves from and to; without a delta, the deck is a report rather than a persuasion.
4. Restate the CTA from intake in operational terms: actor, action, timing, consequence.

**Output:** `message-architecture.md`.

**Pass condition:** the four artifacts (SCQA, pyramid, transformation arc, CTA) are present and the pyramid's reasons stated as conclusions not topics.

### Step 3: Storyboard

**Goal:** order the slides and assign each one a slide_type, a one-line sentence headline, and a one-line visual brief.

**Inputs:** `audience-brief.md`, `message-architecture.md`, `references/storyboard-template.md`, `references/slide-type-catalog.md`, `references/time-budget.md`.

**Process:**

1. Compute the recommended slide-count band: look up the genre and duration captured in Phase 1 in `references/time-budget.md` and read off the band (for example a 20-minute executive briefing recommends 8 to 12 slides).
2. Draft the slide sequence. Use the eight content-side slide types from `references/slide-type-catalog.md`: Title, Agenda, SectionDivider, Decision, Evidence, Transformation, Closing, Appendix. The recommended ordering is Title, Agenda (optional for talks under 10 minutes), SectionDivider blocks for the body, Decision and Evidence and Transformation slides inside the body, Closing, then any Appendix slides parked at the end.
3. Check for a known preset. When the user names a preset or a specific layout, or exactly one preset is installed under `../../presets/` at the plugin root, list that preset's `slides/` gallery: those file names are the concrete layouts the deck will render into, and the user may already know which they want. A visual brief may pin a gallery layout by name ("adapt chevron-process"); a pinned layout overrides the mapping recommendation in `references/slide-type-catalog.md`.
4. For each slide write: slide number, slide_type, the sentence-takeaway headline (not a topic noun), and a one-line visual brief naming the dominant proof object. The headline is the action title; layouts that pair a short topic title with a subtitle render it as the subtitle.

**Output:** `storyboard.md`.

**Pass condition:** every slide has a sentence headline (not a noun phrase), slide count falls within the recommended band (or the user explicitly overrides), and the body covers each reason from the message architecture's pyramid.

### Step 4: Slide Drafts

**Goal:** expand every slide in the storyboard to the full per-slide YAML front-matter schema plus an ASCII layout sketch.

**Inputs:** `storyboard.md`, `audience-brief.md`, `message-architecture.md`, `references/slide-brief-template.md`, `references/slide-type-catalog.md`.

**Process:** for each slide in the storyboard, produce a `## Slide NN: <headline>` block followed by a fenced `yaml` block matching the schema in `references/slide-brief-template.md`. The schema's top-level keys are `slide_type`, an optional short `title` (the topic label, for layouts that pair a title with an action subtitle), `headline`, `visual`, `speaker_notes`, and optional `sources`. Below the YAML, include an ASCII layout sketch using only plain ASCII characters (`-`, `|`, `+`, no Unicode box drawing) so the storyboard reader sees the spatial intent without needing an HTML render.

Apply the assertion-evidence pattern: the slide states (headline) and shows (visual); the speaker explains (speaker_notes). Do not duplicate the headline in the visual brief; do not duplicate the visual brief in the speaker notes.

**Output:** `deck.md`.

**Pass condition:** every slide in the storyboard has a corresponding block in `deck.md`; every block contains all required YAML keys; ASCII layout sketches are present.

### Step 5: Critique Panel

**Goal:** audit `deck.md` against deterministic constraints and qualitative critic personas, then either pass or surface remaining issues for user decision.

**Inputs:** all earlier artifacts, `references/audit-checklist.md`, `references/critic-prompts.md`.

**Process (two tiers, in order):**

1. **Heuristic audit** (inline, deterministic). Walk every slide in `deck.md` and check each item in `references/audit-checklist.md`. Slide types `SectionDivider` and `Appendix` are exempt from item (a) (sentence-headline requirement). Append a numbered violation list to `audit-report.md` with slide references.

2. **Critic personas** (three subagents in parallel via the Agent tool). Each persona reads its assigned upstream artifacts and `deck.md`, then returns CRITICAL, MAJOR, or MINOR findings. The three personas are documented in `references/critic-prompts.md`:
   - Audience critic: fit to the named audience.
   - Argument critic: logical force, evidence sufficiency, objection preemption, close landing.
   - Visual critic: one focal point per slide, one chart one comparison, no read-aloud redundancy.

   Append the consolidated critic findings to `audit-report.md`.

3. **Gate.** If any CRITICAL findings remain after this iteration, re-dispatch up to one more time (two iterations total). After two iterations, present the remaining CRITICAL issues to the user and ask whether to mark the deck ready with known issues, pause for manual intervention, or cancel.

**Output:** `audit-report.md`.

**Pass condition:** zero CRITICAL findings, or explicit user decision to proceed with known issues.

## Audit Mode

Triggered when the user provides a path to an existing `deck.md` instead of a fresh request. The skill skips Phases 1 to 4 and runs Phase 5 directly against the input deck. Output `audit-report.md` is written next to the input deck unless the user supplies an output path.

Audit mode reviews content in markdown, and that is its boundary: it judges what the deck says. What a rendered deck looks like (overflow, contrast, alignment, consistency across slides) is the deck builder's perfecting loop, which works from screenshots. Run content audit before rendering; run the perfecting loop after.

Audit mode is markdown-only. If the user asks to audit a PowerPoint, Keynote, or Google Slides export, ask them to paste or convert the content into a `deck.md` first. Binary slide-format import is out of scope.

Audit mode skips the upstream artifacts (`audience-brief.md`, `message-architecture.md`, `storyboard.md`) which the critic personas would normally read. In their absence, the critics work from `deck.md` alone and flag any missing context they need; the user may then provide a one-paragraph audience and intent summary and request a re-run.

## State and Resume

File-presence rule: a phase is complete iff its named artifact file exists and is non-empty. The artifact file names are `audience-brief.md`, `message-architecture.md`, `storyboard.md`, `deck.md`, `audit-report.md`.

On re-invocation, scan the working directory and report the latest completed phase to the user. Offer two options:

- Resume at the next phase, treating earlier artifacts as authoritative.
- Restart a specific earlier phase (which invalidates all later artifacts and asks the user to delete them or move them to an archive subdir).

Never silently overwrite a later artifact when restarting an earlier phase.

## Output Format

Format: **markdown only**. There is no HTML output mode for this skill; rendering is the deck builder's job, and `deck.md` is the hand-off contract it consumes as the source brief. The full per-slide YAML schema is documented in `references/slide-brief-template.md`. The content-side `slide_type` enum is intentionally distinct from the deck builder's rendering-side slide-type catalog; the mapping is documented in `references/slide-type-catalog.md` as a recommendation, not a constraint.

## Edge Cases

- **Missing prerequisite artifact on phase jump.** If the user invokes Phase 4 and `storyboard.md` is missing, ask whether to (a) run Phase 3 first, (b) accept a degraded run where Phase 4 reads the message architecture directly without a storyboard, or (c) cancel.
- **Audit mode against a deck without YAML front-matter.** Real-world `deck.md` inputs are usually prose-outline markdown (one `## Slide N: <title>` per slide with bullet body) rather than the skill's per-slide YAML schema. When the input lacks the YAML schema, audit mode runs in **advisory mode**: the heuristic audit walks each check against the visible content as best it can (treating slide headings as `headline` values, bullets as implied body, and flagging the absence of every other required key as a structural finding), and the critic personas are **not** dispatched because they need the structural fields to operate reliably. The audit-report's "Recommended next steps" then prominently recommends reformatting the deck into the schema before a full Phase 5 dispatch. If the input _is_ in YAML schema but has missing required keys per slide, that is a true malformation: the heuristic audit reports the missing keys and stops before dispatching critics. The user fixes the structure and re-runs.
- **Critic gate fails twice.** Present remaining CRITICAL findings to the user; ask whether to mark ready with known issues, pause, or cancel.
- **Slide count band breached deliberately.** The audit checklist flags the breach; if the user accepts (for example a deliberately dense training deck), record the override in `audit-report.md` under a "User overrides" heading so reviewers can see the deviation is intentional.
- **Governing-idea sentence too long.** If the Phase 1 governing idea is longer than 20 words, ask the user to shorten before proceeding; long governing ideas almost always indicate the audience or scope is muddled.
- **Genre mismatch.** If genre and length combine implausibly (for example a 5-minute training session), surface the mismatch at Phase 1 and ask whether the user meant a pitch or a quick demo.
- **Dash discipline.** This skill body, the bundled references, and every artifact the skill writes contain no U+2014 (em-dash) or U+2013 (en-dash) characters; the deck builder's typography lint enforces the same rule on rendered decks, so copy written here survives rendering unchanged.

## Key Principles

- One message per slide. If a slide is making two points, split it into two slides.
- Sentence headlines, not topic nouns. "Churn rose after response times crossed 12 hours" beats "Churn trends". Layouts that pair a title with a subtitle put the short topic label in the title and the sentence, the action title, in the subtitle; the takeaway obligation does not disappear, it just has a surface.
- The slide states and shows; the speaker explains and connects. Reading slide text aloud wastes the spoken channel and increases cognitive load (Mayer redundancy principle).
- Audience first. The deck is a means to move someone from one state to another; if the audience or the desired delta is unclear, the deck cannot succeed.
- Transformation contrast. Show current state versus future state explicitly; without a delta, the deck is a report not a persuasion.
- Assertion-evidence over bullet dumps. Garner and Alley's experimental evidence is that sentence-headline plus visual evidence produces stronger comprehension and delayed recall than topic-heading plus bullet stacks.
- One chart, one point, one intended comparison. Tufte, Few, Cleveland and McGill all converge on the same rule from different angles.
- Specific calls to action. Actor, action, timing, consequence. "Any questions?" is not a call to action; it is a stage exit.
