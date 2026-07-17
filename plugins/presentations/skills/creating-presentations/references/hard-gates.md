# Hard Gates

Deterministic probes for the H rules. Run them with any driveable Chromium (browser MCP tools or a small Puppeteer script); the probes themselves are plain JavaScript evaluated in the page. Every failure here is a confirmed fix item with no judging step.

## Serving the deck

Serve over HTTP, not `file://` (webfonts, `BroadcastChannel`, and some CDN loads behave differently on opaque origins):

```bash
uv run python -m http.server 8123 --directory <deck-dir> &
```

Run online if the deck loads fonts or icons from CDNs, otherwise fallback fonts cause false H1/H7 results.

## Slide model

For decks built by this skill, slides are the direct element children of `<deck-stage>` (excluding `template`, `script`, `style`). Inactive slides stay in the DOM with `visibility: hidden` but keep full layout, so geometry probes cover every slide without navigating. Before probing, set the `noscale` attribute on `<deck-stage>` so all rects are in authored canvas pixels (default 1920x1080), then remove it:

```js
document.querySelector('deck-stage').setAttribute('noscale', '');
// ... probe ...
document.querySelector('deck-stage').removeAttribute('noscale');
```

For other deck engines, identify the slide container, make all slides laid out (visible or visibility-hidden, not display-none), and adapt `slides` in the probe below.

## Geometry and contrast probe (H1, H2, H3, H6)

Evaluate in the page; returns hard failures in `issues` and judged-lane material in `forJudges` (decorative bleed, borderline contrast). Hand `forJudges` to the visual judge alongside the screenshots; never auto-fix from it.

```js
(() => {
  const stage = document.querySelector('deck-stage');
  const slides = [...stage.children].filter(el => !['TEMPLATE', 'SCRIPT', 'STYLE'].includes(el.tagName));
  const issues = [];
  const gist = (el) => `"${el.textContent.trim().replace(/\s+/g, ' ').slice(0, 50)}"`;
  const srgb = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  const lum = ({ r, g, b }) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
  const parse = (s) => { const m = (s || '').match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/); return m ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] } : null; };
  const bgOf = (el) => {
    for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage !== 'none') return null; // judged visually (S13)
      const c = parse(cs.backgroundColor);
      if (c && c.a >= 0.95) return c;
    }
    return { r: 255, g: 255, b: 255 };
  };
  const forJudges = [];
  slides.forEach((slide, i) => {
    const n = i + 1;
    const sr = slide.getBoundingClientRect();
    const texts = [...slide.querySelectorAll('*')].filter(el => el.children.length === 0 && el.textContent.trim());
    let textClipped = false;
    texts.forEach(el => {
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;
      if (r.right > sr.right + 2 || r.bottom > sr.bottom + 2 || r.left < sr.left - 2 || r.top < sr.top - 2) {
        textClipped = true;
        issues.push({ gate: 'H1', slide: n, what: `${gist(el)} extends past the slide edge` });
      }
      // Decorative markers (accent dots, ghost numerals, prompt glyphs) are exempt from H6.
      if (el.textContent.trim().length <= 2) return;
      const fg = parse(getComputedStyle(el).color), bg = bgOf(el);
      if (fg && bg) {
        const [hi, lo] = [lum(fg), lum(bg)].sort((a, b) => b - a);
        const ratio = (hi + 0.05) / (lo + 0.05);
        if (ratio < 3) {
          issues.push({ gate: 'H6', slide: n, what: `${gist(el)} contrast ${ratio.toFixed(2)}:1 < 3:1` });
        } else if (ratio < 4.5 && parseFloat(getComputedStyle(el).fontSize) < 24) {
          forJudges.push({ kind: 'borderline-contrast', slide: n, what: `${gist(el)} contrast ${ratio.toFixed(2)}:1` });
        }
      }
    });
    if (!textClipped && (slide.scrollWidth > slide.clientWidth + 2 || slide.scrollHeight > slide.clientHeight + 2)) {
      forJudges.push({ kind: 'bleed', slide: n, what: `content ${slide.scrollWidth}x${slide.scrollHeight} exceeds canvas ${slide.clientWidth}x${slide.clientHeight} without clipping text` });
    }
    for (let a = 0; a < texts.length; a++) for (let b = a + 1; b < texts.length; b++) {
      const ra = texts[a].getBoundingClientRect(), rb = texts[b].getBoundingClientRect();
      if (!ra.width || !rb.width) continue;
      const ox = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left);
      const oy = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
      if (ox > 4 && oy > 4) issues.push({ gate: 'H2', slide: n, what: `${gist(texts[a])} overlaps ${gist(texts[b])}` });
    }
    [...slide.querySelectorAll('img')].forEach(img => {
      if (img.complete && img.naturalWidth === 0) issues.push({ gate: 'H3', slide: n, what: `broken image ${img.src.split('/').pop()}` });
    });
  });
  return JSON.stringify({ slides: slides.length, issues, forJudges }, null, 2);
})();
```

Contrast caveats: the probe handles flat backgrounds only; semi-transparent text colors and layered translucent backgrounds come out approximate. Treat H6 results within 0.3 of the threshold as "verify on the screenshot" rather than auto-fail.

## Console, network, fonts (H4, H3, H7)

After loading and stepping once through all slides (End key, then Home):

- H4: read the console log; any `error`-level entry fails unless its resource is on the constitution's H4 allowlist (favicons, optional state probes some deck engines fire).
- H3 network half: list failed requests (status >= 400 or blocked); fonts, CSS, JS, images all count, same allowlist exemption.
- H7: evaluate `[...document.fonts].map(f => ({ family: f.family, weight: f.weight, status: f.status }))`. A family where every face errored fails the gate. A family with a loaded base weight but errored heavier weights (common with local-first font strategies) renders with synthesized bold; report it to the visual judge as portability info instead of failing.

## Typography lint (H5)

Grep the deck source for the constitution's banned codepoints (default U+2014, U+2013, U+00B7). Only flag matches in rendered text: skip hits inside `<script>` and `<style>` blocks and inside HTML comments.

```bash
grep -nP '[\x{2014}\x{2013}\x{00B7}]' <deck>.html
```

## Per-slide screenshots

Capture after the probe, with `noscale` removed and the thumbnail rail suppressed so judges see what the audience sees. Resize the viewport to 1920x1080, then for each slide navigate to `<url>#N` (1-based), reload if the hash change does not repaint, wait for the slide to be active, and screenshot to `.deck-review/round-<R>/slide-NN.png`. The deck hides its overlay chrome after about two seconds of mouse idle; avoid moving the mouse between navigate and capture.

Fallback without a driveable browser: the deck-stage print stylesheet lays one slide per page, so

```bash
chromium --headless --print-to-pdf=deck.pdf 'http://localhost:8123/<deck>.html'
pdftoppm -png -r 96 deck.pdf slide
```

produces equivalent per-slide images (console and network gates still need a live page).

## Output

Collect all gate results into `.deck-review/round-<R>/hard-gates.json`: one entry per issue with gate, slide, and evidence string, plus a `pass` boolean per gate. Hard-gate failures skip review and verification; they go straight onto the fix list.
