# python-pptx recipes for deck-stage exports

Durable raw material for the per-deck generator script: the coordinate system, the helper-layer shape, and twelve gotchas. Each gotcha cost a render-fix cycle to discover; apply them up front. All examples are generic; lift concrete values (colors, sizes) from the deck's own CSS.

## Coordinate conversion

```python
from pptx.util import Emu, Pt

EMU_PX = 6350                      # 12192000 EMU / 1920 stage px
def E(px):    return Emu(int(round(px * EMU_PX)))
def PTpx(px): return Pt(px / 2.0)  # 1 stage px = 0.5 pt
```

## Helper-layer shape

Keep the generator thin and uniform:

- `tb(slide, x, y, w, paragraphs)`: rich text boxes; each paragraph is a list of `(text, style)` runs.
- `rect(slide, x, y, w, h, fill, line)`: autoshapes with the de-shadowing fix from gotcha 1 applied.
- One builder per repeated component (editor window, facts strip, pill stamp, layers stack).
- `est_lines(text, width_px, font_px, cpw)`: greedy wrap estimator; see gotcha 7.

## The twelve gotchas

1. **Strip `<p:style>` from every autoshape.** The `add_shape` template carries a theme style reference with `effectRef idx="2"`, which renders as an unwanted drop shadow in LibreOffice and some Office themes, even with an empty `effectLst`:

   ```python
   from pptx.oxml.ns import qn
   el = shape._element.find(qn("p:style"))
   if el is not None:
       shape._element.remove(el)
   shape.shadow.inherit = False
   ```

2. **Line spacing must be exact points, not a multiplier.** `paragraph.line_spacing = 1.45` writes `spcPct`, which PowerPoint and LibreOffice apply to the font's natural line height (about 1.2em), inflating everything by about 20 percent versus the CSS. Write `paragraph.line_spacing = Pt(css_line_height * px_size / 2)` instead; for paragraphs mixing font sizes, use the max run size. This single change makes all vertical math match the CSS across engines.

3. **LibreOffice ignores `wrap="none"`.** Long headlines wrap at the box edge anyway and destroy the layout (PowerPoint honors it, so Office-side checks will not catch this). Break multi-line headlines into explicit paragraphs sized to fit the box in the real target font.

4. **Letter spacing** (CSS `letter-spacing` on heroes): set the `spc` attribute on the run's `rPr` in hundredths of a point: `rPr.set("spc", str(int(em * size_pt * 100)))`.

5. **Colored underline** (accent-colored underline on emphasized text): set `rPr.set("u", "sng")` and insert `<a:uFill><a:solidFill><a:srgbClr val="<accent-hex>"/></a:solidFill></a:uFill>` into the `rPr`, positioned before the `<a:latin>` element. Schema order matters; insert after setting the font.

6. **Bulleted lists: use native bullets, not positioned dot shapes.** Absolutely positioned dots need text-height estimates that differ per font, so list rhythm goes uneven. One text frame with per-paragraph `marL="228600" indent="-228600"` (36px hanging indent) plus `buClr` (accent color), `buSzPct` (about 60000), `buFont` Arial, and `buChar` set to the U+25CF black circle gives uniform spacing in any font, with `space_after` for the gap.

7. **Text height estimation for stacked layouts.** You cannot measure text. Use a greedy wrap estimator `est_lines(text, width_px, font_px, cpw)` where `cpw` is the average character width in em, chosen conservatively: 0.54 to 0.58 for sans body text, 0.6 for mono. The estimator shape is `lines = ceil(len(text) / (width_px / (font_px * cpw)))`, applied greedily per word. Always place stacked elements sequentially from the estimates so an over-estimate only widens a gap and an overlap is impossible. Tune toward the wider rendering engine.

8. **Editor-window component** (browser/IDE chrome): body is a `ROUNDED_RECTANGLE` (white fill, no border), title bar is `ROUND_2_SAME_RECTANGLE` (top corners only), a 1px hairline under the bar, three 14px traffic-light ovals, then a border-only `ROUNDED_RECTANGLE` outline drawn on top of everything. Corner radius via `shape.adjustments[0] = radius_px / min(w_px, h_px)`.

9. **Soft card shadows** (CSS box-shadow tokens): append to the shape's empty `effectLst` an `outerShdw` with `blurRad="152400"` (24px), `dist="63500"` (10px), `dir="5400000"` (down), child `srgbClr` of the shadow color with `alpha val="8000"`.

10. **Stadium pills** (CSS `border-radius: 999px`): rounded rectangle with `adjustments[0] = 0.5`, that is radius = height/2. The default small radius reads as a card, not a pill.

11. **Fonts.** Prefer widely installed faces over the deck's webfonts: Aptos for sans (M365 default), Consolas for mono (safer than JetBrains Mono on arbitrary Windows installs). Accept that the verification renderer substitutes both; treat renders as geometry and color checks, not glyph checks.

12. **Speaker notes and metadata.** `slide.notes_slide.notes_text_frame.text = ...` from the HTML's speaker-notes JSON, keyed by 1-based slide number. Set `core_properties.title` and `core_properties.author`.

## Render verification

```bash
docker run --rm -v <workdir>:/data --entrypoint soffice linuxserver/libreoffice:latest \
  --headless --convert-to pdf --outdir /data /data/<deck>.pptx
```

```python
import fitz  # pymupdf
doc = fitz.open("<deck>.pdf")
for i, page in enumerate(doc, 1):
    page.get_pixmap(dpi=96).save(f"slide-{i:02d}.png")
```

MuPDF prints "No common ancestor in structure tree" warnings; harmless.
