# Time Budget

Slides-per-minute heuristics by genre, plus recommended slide-count bands for common talk lengths. This file is consulted in Phase 1 (intake captures the genre and duration so an initial slide-count target can be set) and in Phase 5 (Check E asserts the actual slide count in `deck.md` is within the band for the chosen genre and duration).

## Slides per minute by genre

| Genre | Typical minutes per slide | Notes |
|---|---|---|
| Keynote | 1.5 to 2 | Sparse, story-driven; long pauses between slides |
| Executive briefing | 2 to 3 | Per-slide depth; few slides, dense argument |
| Training | 1 to 2 | Progressive reveals; staged complexity |
| Pitch | 1 | Tight rhythm; one message per slide; brisk pace |
| Technical talk | 2 to 3 | Code, diagrams, walkthroughs need think time |

## Recommended slide-count bands by genre and duration

| Genre | 5 min | 10 min | 15 min | 20 min | 30 min | 45 min | 60 min |
|---|---|---|---|---|---|---|---|
| Keynote | 3 to 4 | 6 to 8 | 9 to 12 | 12 to 16 | 18 to 24 | 25 to 35 | 30 to 45 |
| Executive briefing | 2 to 3 | 4 to 6 | 6 to 9 | 8 to 12 | 12 to 18 | 18 to 25 | 24 to 32 |
| Training | 4 to 6 | 8 to 12 | 12 to 18 | 16 to 24 | 24 to 36 | 36 to 50 | 50 to 70 |
| Pitch | 4 to 6 | 8 to 12 | 12 to 18 | 16 to 24 | n/a | n/a | n/a |
| Technical talk | 2 to 3 | 4 to 6 | 6 to 9 | 8 to 12 | 12 to 18 | 18 to 25 | 24 to 32 |

Pitch durations beyond 20 minutes are uncommon; if requested, treat as a hybrid pitch and briefing and use the executive-briefing band for the longer end.

## How Phase 5 uses the bands

Check E in `audit-checklist.md` compares the actual slide count in `deck.md` against the band lookup for the deck's genre and duration. If the count falls inside the band, the check passes. If the count falls outside the band and the user has deliberately overridden the default (for example, a 30-minute training deck that intentionally runs to 80 slides because of dense progressive reveals), the override is recorded under "User overrides" in `audit-report.md` and the check is marked as passed-with-override rather than failed.

## Adjustments and caveats

Appendix slides do not count toward the body band. If a deck has ten body slides plus four appendix slides, the band check uses ten, not fourteen. Training decks with progressive reveals (where a single conceptual slide is split into three or four reveal stages for pacing) may exceed the body band by the planned reveal count; record the reveal stages in `deck.md` so the audit can subtract them before checking the band.

The bands are starting points calibrated to the slides-per-minute table above. They are not laws. A keynote speaker with a very visual storytelling style might use twice as many slides as the band suggests because each slide is on screen for only seconds; an executive briefing presenter who walks the audience through a complex spreadsheet might use half as many because each slide is on screen for five minutes. Use the bands to challenge the deck, not to enforce a count.
