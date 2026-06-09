/**
 * presenter.js, two-window presenter mode for <deck-stage> decks.
 *
 * Loaded by the main deck page (after deck-stage.js). Adds:
 *   • Press P to open a presenter window (notes + next-slide preview + timer).
 *   • Press B to black out the audience screen.
 *   • BroadcastChannel sync, keyboard or button nav in either window
 *     moves both. Disconnect-tolerant: closing the presenter window
 *     leaves the deck running.
 *
 * Sharing in Teams:
 *   1. Open the deck in a Chromium-based browser (Edge, Chrome, Arc).
 *   2. Press P. The first time, allow pop-ups for this page.
 *   3. In Teams, click Share → Window → pick the DECK window
 *      (not the presenter, that's the one with your notes on it).
 *
 * Wire format on BroadcastChannel `deck-presenter::<deckPath>`:
 *   { type: 'state', index, total, reason }     deck → presenter
 *   { type: 'notes', notes }                    deck → presenter (speaker notes)
 *   { type: 'notes-set', notes }                presenter → deck (after a save,
 *                                               refresh the in-DOM notes tag)
 *   { type: 'nav-next' | 'nav-prev' }           either → deck
 *   { type: 'nav-goto', index }                 either → deck
 *   { type: 'blackout-toggle' }                 presenter → deck
 *   { type: 'hello', from: 'presenter' }        presenter → deck (asks for state)
 *   { type: 'bye', from: 'presenter' }          presenter → deck (window closing)
 *
 * Note edits made in the presenter live in localStorage under
 * `<CHANNEL_NAME>::notes-edits` (a {slideIndex: text} map) until the user
 * writes them back into the deck HTML from the presenter window.
 */
(() => {
  // --- Guards -----------------------------------------------------------
  // Don't run inside deck-stage's own thumbnail iframes (rail / presenter
  // preview tiles). They load with ?_snthumb=... and the presenter sets
  // window.name to mark its preview iframes.
  if (/[?&]_snthumb=/.test(location.search)) return;
  if (window.name && window.name.indexOf('deck-presenter-preview-') === 0) return;

  const deck = document.querySelector('deck-stage');
  if (!deck) return;

  const POPUP_NAME = 'deck-presenter';
  const POPUP_FEATURES = 'popup=yes,width=1400,height=860';
  const CHANNEL_NAME = 'deck-presenter::' + location.pathname;

  const bc = ('BroadcastChannel' in window) ? new BroadcastChannel(CHANNEL_NAME) : null;
  let presenterWin = null;
  let blackoutEl = null;
  let presenting = false;
  let presenterWatch = null;
  let byeTimer = null;

  // --- Outbound state ---------------------------------------------------
  function postState(reason) {
    if (!bc) return;
    try {
      bc.postMessage({
        type: 'state',
        index: deck.index,
        total: deck.length,
        reason: reason || 'broadcast',
      });
    } catch (e) {}
  }

  // Speaker notes travel over the channel because the presenter popup can't
  // read them from window.opener.document on file:// (opaque origins).
  // Notes are authored either as an array (0-indexed) or as an object keyed
  // by 1-based slide number; normalize to the array shape.
  function normalizeNotes(parsed) {
    if (Array.isArray(parsed)) return parsed;
    if (parsed && typeof parsed === 'object') {
      const out = [];
      Object.keys(parsed).forEach((k) => {
        const n = parseInt(k, 10);
        if (n >= 1) out[n - 1] = String(parsed[k]);
      });
      return out;
    }
    return [];
  }

  function loadMergedNotes() {
    let notes = [];
    const tag = document.getElementById('speaker-notes');
    if (tag) {
      try { notes = normalizeNotes(JSON.parse(tag.textContent || '[]')); } catch (e) {}
    }
    // Unsaved presenter edits overlay the authored notes (file:// pages
    // share one localStorage origin, so both windows see the same map).
    try {
      const edits = JSON.parse(localStorage.getItem(CHANNEL_NAME + '::notes-edits') || 'null');
      if (edits && typeof edits === 'object') {
        Object.keys(edits).forEach((k) => {
          const i = parseInt(k, 10);
          if (i >= 0) notes[i] = String(edits[k]);
        });
      }
    } catch (e) {}
    return notes;
  }

  function postNotes() {
    if (!bc) return;
    const notes = loadMergedNotes();
    if (notes.length) bc.postMessage({ type: 'notes', notes });
  }

  // --- Presenting state ---------------------------------------------------
  // deck-stage hides its thumbnail rail and nav overlay while presenting; it
  // listens for this message on its own window (the same path its SPA host
  // uses), so the audience window shows clean slides.
  function setPresenting(on) {
    if (on === presenting) return;
    presenting = on;
    try { window.postMessage({ __omelette_presenting: on }, '*'); } catch (e) {}
  }

  // --- Presenter window -------------------------------------------------
  function openPresenter() {
    if (presenterWin && !presenterWin.closed) {
      try { presenterWin.focus(); } catch (e) {}
      return;
    }
    const here = location.pathname.split('/').pop() || 'index.html';
    const url = new URL('presenter.html', location.href);
    url.searchParams.set('deck', here);
    url.searchParams.set('channel', CHANNEL_NAME);
    url.hash = '#' + (deck.index + 1);
    presenterWin = window.open(url.toString(), POPUP_NAME, POPUP_FEATURES);
    if (!presenterWin) {
      console.warn('[presenter] pop-up blocked');
      alert('Pop-up blocked. Allow pop-ups for this page, then press P again.');
      return;
    }
    clearTimeout(byeTimer);
    setPresenting(true);
    // The popup's pagehide 'bye' covers a clean close; the poll catches it
    // being killed without one (task manager, crash) so the rail comes back.
    clearInterval(presenterWatch);
    presenterWatch = setInterval(() => {
      if (!presenterWin || presenterWin.closed) {
        clearInterval(presenterWatch);
        presenterWatch = null;
        presenterWin = null;
        setPresenting(false);
      }
    }, 1000);
    // Bounce state once the popup has had a beat to mount its listener.
    setTimeout(() => { postState('open'); postNotes(); }, 300);
  }

  // --- Blackout overlay (covers the deck window's audience view) --------
  function toggleBlackout() {
    if (blackoutEl) {
      blackoutEl.remove();
      blackoutEl = null;
      return;
    }
    blackoutEl = document.createElement('div');
    blackoutEl.setAttribute('data-deck-blackout', '');
    blackoutEl.style.cssText = [
      'position:fixed', 'inset:0', 'background:#000',
      'z-index:2147483600', 'display:flex',
      'align-items:flex-end', 'justify-content:center',
      'padding:24px', 'color:rgba(255,255,255,0.16)',
      'font:11px ui-monospace,Menlo,Consolas,monospace',
      'letter-spacing:0.08em', 'text-transform:uppercase',
    ].join(';');
    blackoutEl.textContent = 'Press B to resume';
    document.body.appendChild(blackoutEl);
  }

  // --- Keyboard on the deck ---------------------------------------------
  document.addEventListener('keydown', (e) => {
    const t = e.target;
    const tag = (t && t.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || (t && t.isContentEditable)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'p' || e.key === 'P') { e.preventDefault(); openPresenter(); }
    else if (e.key === 'b' || e.key === 'B') { e.preventDefault(); toggleBlackout(); }
  });

  // --- Deck → channel: broadcast every slide change ---------------------
  deck.addEventListener('slidechange', (e) => {
    if (!bc) return;
    try {
      bc.postMessage({
        type: 'state',
        index: e.detail.index,
        total: e.detail.total,
        reason: e.detail.reason,
      });
    } catch (err) {}
  });

  // --- Channel → deck: receive nav from presenter -----------------------
  if (bc) {
    bc.addEventListener('message', (e) => {
      const d = e.data || {};
      if (d.type === 'nav-next') deck.next();
      else if (d.type === 'nav-prev') deck.prev();
      else if (d.type === 'nav-goto' && typeof d.index === 'number') deck.goTo(d.index);
      else if (d.type === 'blackout-toggle') toggleBlackout();
      else if (d.type === 'hello' && d.from === 'presenter') {
        // hello doubles as a heartbeat, so a reloaded deck window re-learns
        // a presenter is open and re-hides its rail.
        clearTimeout(byeTimer);
        setPresenting(true);
        postState('hello');
        postNotes();
      } else if (d.type === 'bye' && d.from === 'presenter') {
        // A popup reload fires pagehide then hello within a beat; debounce
        // so the audience window doesn't flash the rail during the reload.
        // On a real close the rail is back within ~0.8s (the 1s poll above
        // also backstops a popup killed without pagehide).
        clearTimeout(byeTimer);
        byeTimer = setTimeout(() => setPresenting(false), 800);
      } else if (d.type === 'notes-set' && Array.isArray(d.notes)) {
        // The presenter saved notes into the deck HTML file; mirror them
        // into this (already-loaded) page's tag so future postNotes calls
        // match the file after the edit overlay is cleared.
        let tag = document.getElementById('speaker-notes');
        if (!tag) {
          tag = document.createElement('script');
          tag.type = 'application/json';
          tag.id = 'speaker-notes';
          document.body.appendChild(tag);
        }
        tag.textContent = JSON.stringify(d.notes);
      }
    });
  }

  // Console hint so users discover the feature.
  console.info(
    '%c● Presenter mode',
    'color:#86BC24;font-weight:600',
    ', press P to open the notes window, B to black out the audience screen.'
  );
})();
