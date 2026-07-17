# Presets

A preset packages one brand or context for reuse: colors, typography, assets, and example slides rebuilt as HTML. Skills carry the procedures; presets carry the content. Presets live in two homes that share this contract:

- **Bundled presets** in this directory, next to `skills/` at the plugin root. They ship with the plugin; the `default` preset lives here.
- **Local presets** in `.pgoell/presentations/presets/<name>/` at the root of the repo being worked in. They are user-owned, never ship with the plugin, and are where the `extracting-presets` skill places new presets by default.

## Directory shape

```
presets/<name>/
  manifest.md     required. The preset's single home for provenance: who the preset serves, sources and their dates, coverage, extraction decisions, gaps. All other preset files carry rules and values only.
  colors.css      required. :root CSS custom properties for colors and font sizes, plus optional variant scopes (for example .inverse) that override the semantic variables.
  typography.css  optional. :root font stack overrides.
  guidelines.md   optional. Brand expression guidance with no variable to ride on: personality attributes, tone of voice, imagery rules. Consumers read it before composing slides and review finished slides against it.
  language.md     optional. Language and copy rules from the brand's style guide: terminology, word usage, citations, required legal language. Consumers apply it to every written surface of a deck and honor its required legal elements, which can dictate per-slide footer content and back-cover legal blocks.
  assets/         optional. Wordmarks and brand imagery. SVG preferred, it inlines as text.
  icons/          optional. Brand icon library as one SVG per icon, organized in subdirectories, with an index.tsv (one row per icon: path, name, variant, category, section, aliases, keywords, colors) and a README.md documenting search and usage. Monochrome icons use currentColor so CSS color recolors them; consumers grep the index, then inline the SVG.
  slides/         optional. Example slides as self-contained HTML on a 1920x1080 canvas.
```

## Rules

- Preset names are kebab-case and name the brand or context, for example `acme-corp` or `default`.
- Example slides are self-contained: inline `<style>` opening with a synced copy of the preset's variable blocks (`colors.css`, plus `typography.css` when present, stay the source of truth), every color and font read from variables declared there, no network requests. Imagery either inlines (SVG as text, small rasters as base64) or, when inlining would force lossy recompression, stays at source quality in the preset's `assets/` and is referenced by relative path; slides open standalone from the preset directory either way.
- Official assets only. Wordmarks and logos come from a brand portal or files the user provides, never redrawn from memory.
- Keep presets small and grow the collection slowly, slide by slide. A preset is a curated gallery, not an archive of every deck.
- Adding or changing a bundled preset is a plugin change: bump the plugin version across the marketplace repo's lockstep sites (minor for a new preset, patch for extending one). Local `.pgoell` presets need no repo change.

## Selection

Consumers resolve the active preset in this order:

1. An explicit choice in the prompt wins, either a preset name or a path to a preset directory.
2. `.pgoell/presentations/config.md` at the working repo root: its `## Preset` section selects by `Name:` (resolved against local presets first, then bundled ones) or `Path:` (any directory following this contract).
3. The candidate pool is local presets plus bundled presets. Exactly one candidate: it applies, and the consumer states which preset was used. Multiple candidates and no explicit choice: ask the user which one to use.

Presets are created and extended by the `extracting-presets` skill and consumed by the `creating-presentations` skill.
