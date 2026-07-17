# Preset: default

## Who this serves

The neutral out-of-the-box preset for the `creating-presentations` skill. It exists so decks look considered before any client preset is extracted: a warm off-white canvas, a bright green primary accent, a red-orange secondary accent, and a deep blue-green dark scope. All copy in the example slides is fictional placeholder content for an invented "Acme" platform-modernization story.

## Sources

- Own design work by the plugin author, originally produced with an AI design tool (claude.ai/design) in 2026 and maintained here as the source of truth. No external brand portal applies; there is nothing to cite back to.
- The palette and slide layouts were neutralized for general reuse in 2026-07: raw variables renamed to `--brand-*` descriptive names, all wordmarks replaced with a placeholder, example copy rewritten.

## Coverage

- `colors.css`: raw brand layer (`--brand-green`, `--brand-ember`, `--brand-deep`, ...), semantic layer (`--bg`, `--fg`, `--accent`, ...), status colors, slide type scale, spacing, radius, shadows, motion, and a `.dark` variant scope.
- `typography.css`: font stacks (DM Sans, JetBrains Mono, with system fallbacks).
- `slides/`: ten example layouts (Title, SectionDivider, Agenda, Content, Stat, Comparison, Quote, Capabilities, Timeline, Closing), each self-contained with an embedded synced copy of the variable files.
- `assets/`: `placeholder-wordmark.svg` (generic), `motif-blocks.svg` (geometric decorative stripes).

## Extraction decisions

- The bright green `--brand-green` (#86BC24) fails WCAG contrast as text on the light background (roughly 2.3:1). Slides use it for graphics (dots, hairlines, checkmarks) and use `--brand-green-dark` where accent-colored text is needed (deltas, tags). Keep that split when composing new slides.
- The `.dark` scope keys off `--brand-deep`; the SectionDivider, Quote, and Closing examples set their background directly for fidelity with the original layouts.
- The UI-card type scale that existed in the source token sheet was dropped; only the slide scale ships.
- Webfonts are not vendored and not imported (the contract forbids network requests); standalone slides render on system fallbacks. Deck builds that must render identically offline vendor DM Sans and JetBrains Mono per the `creating-presentations` caveats.

## Gaps

- The wordmark is a placeholder ("ACME" with an accent dot, as the inline `.wordmark` component in slides and `assets/placeholder-wordmark.svg`). Swap it for a real brand's official wordmark before any external use.
- No `guidelines.md` or `language.md`: this preset carries no brand-expression or copy rules.
- No `icons/` library; the Capabilities example inlines three generic stroke icons directly.
