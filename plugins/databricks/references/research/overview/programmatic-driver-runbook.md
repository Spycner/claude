# Programmatic Driver Runbook — Dashboard Authoring Agent

End-to-end record of building a working driver for the Dashboard Authoring Agent over both API paths described in [`findings.md`](findings.md). Captured 2026-05-20 on workspace `dbc-df321db9-486f.cloud.databricks.com`. The driver itself lives at `.workbench/genie-code-driver/driver.py` in this repo.

The original write-up matched the first end-to-end working build (Bakehouse data). After running it twice more and actually rendering the result in the canvas, the driver picked up two non-obvious fixes that are now baked in. The "Revisions discovered while rendering" section at the bottom records what changed. **Read that before treating the rest of the doc as gospel.**

Both paths produced multi-widget dashboards in 2-3 turns from a single prompt. The third build (NYC taxi) rendered correctly in the Lakeview canvas without any post-hoc patching.

| Backend | Endpoint | Auth | Model id served | Result |
|---|---|---|---|---|
| `llmproxy` | `POST /ajax-api/2.0/conversation/llmproxy/` | DBAUTH cookie + `x-csrf-token` | `eu.anthropic.claude-opus-4-6-v1` | Dashboard `01f1541d8be31ab78ba776e4cca283cc` |
| `serving` | `POST /serving-endpoints/databricks-claude-opus-4-7/invocations` | OAuth bearer | `databricks-claude-opus-4-7` (Bedrock EU) | Dashboard `01f1541e73c9157084ee076322d99d68` |

Identical request body works on both endpoints: the 50 KB captured system prompt + 34 tool definitions from [`../agents/dashboard-authoring-llmproxy-body.json`](../agents/dashboard-authoring-llmproxy-body.json), with a freshly-built per-turn `<context>` user message and the user's authoring request as the final user message. The two backends differ only in URL, auth headers, and a few llmproxy-only body fields (`anthropic_beta`, `thinking`, `_llmproxy_fields`) which the driver omits on the serving-endpoint path.

## Path 1 — llmproxy (DBAUTH cookie)

### Step 1. Get a CLI profile if you don't have one

```bash
databricks auth login \
  --host https://dbc-df321db9-486f.cloud.databricks.com \
  --profile learning-new
```

This opens the OAuth U2M flow in your default browser. If a Chrome MCP session already has the workspace open and authenticated, navigate that tab to the authorization URL the CLI prints; consent uses the existing session and the callback completes in seconds. The CLI writes `~/.databrickscfg` with the new profile.

### Step 2. Extract DBAUTH from a logged-in Chrome session

The DBAUTH cookie is HttpOnly, so `document.cookie` cannot read it. On Linux with `--password-store=basic` (Chrome MCP launches Chrome this way) the cookie store uses the legacy "peanuts" fallback key:

```python
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives.hashes import SHA1
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
import sqlite3, shutil, os

db_src = os.path.expanduser('~/.cache/chrome-devtools-mcp/chrome-profile/Default/Cookies')
db_copy = '/tmp/chrome_cookies_copy.db'
shutil.copy(db_src, db_copy)
cur = sqlite3.connect(db_copy).cursor()
cur.execute("SELECT encrypted_value FROM cookies "
            "WHERE name='DBAUTH' AND host_key LIKE '%dbc-df321db9%'")
enc = cur.fetchone()[0]
key = PBKDF2HMAC(SHA1(), 16, b'saltysalt', 1, default_backend()).derive(b'peanuts')
iv = b' ' * 16
cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend()).decryptor()
pt = cipher.update(enc[3:]) + cipher.finalize()  # strip 'v10' prefix
pad = pt[-1]
if 1 <= pad <= 16:
    pt = pt[:-pad]
dbauth = pt[32:].decode('utf-8')  # strip 32-byte SHA256 prefix → "dbws.1.<jwt>"
```

Save to `~/.cache/genie-code-driver/dbauth.txt` (perms 600). Add the `x-csrf-token` separately — that one *is* readable from JS via `window.settings.csrfToken` inside the page:

```javascript
() => window.settings && window.settings.csrfToken
```

Save to `~/.cache/genie-code-driver/csrf.txt`. Both files are about 64-byte and 1 KB respectively.

### Step 3. Smoke test before building the loop

```bash
DBAUTH=$(cat ~/.cache/genie-code-driver/dbauth.txt)
CSRF=$(cat ~/.cache/genie-code-driver/csrf.txt)
curl -sS -X POST \
  'https://dbc-df321db9-486f.cloud.databricks.com/ajax-api/2.0/conversation/llmproxy/' \
  -H "Cookie: DBAUTH=$DBAUTH" \
  -H "x-csrf-token: $CSRF" \
  -H "x-databricks-org-id: 7474644141110056" \
  -H "x-databricks-self: true" \
  -H "Content-Type: application/json" \
  -H "Accept: text/event-stream" \
  --data '{"messages":[{"role":"user","content":"say hello world"}],"stream":true,"max_tokens":256,
          "_llmproxy_fields":{"model_registration":"claude-4-6-opus",
          "client_id":"editor-assistant-agent-mode","session_id":"smoke",
          "trace_id":"11111111-1111-1111-1111-111111111111",
          "call_id":"22222222-2222-2222-2222-222222222222","agent_name":"LakeAgent"}}'
```

Expect five OpenAI-shaped SSE chunks plus `data: [DONE]`. Anything else means DBAUTH is wrong or expired.

### Step 4. POST the full Dashboard Authoring body

Body = the captured `dashboard-authoring-llmproxy-body.json` with three swaps:

1. Replace `_llmproxy_fields.session_id`, `trace_id`, `call_id` with fresh values.
2. Set `_llmproxy_fields.agent_name = "dashboardAuthoringAgent"`.
3. Rebuild `messages`:
   - `messages[0]` — keep the captured system prompt verbatim (50 KB with `cache_control: ephemeral`).
   - `messages[1]` — a fresh `<context>` user message reflecting *your* dashboard's current state (display name, page list, widgets, datasets).
   - `messages[2]` — your authoring request.

The driver builds the context message from the live dashboard pulled via `databricks lakeview get`.

## Path 2 — serving-endpoint (OAuth bearer)

### Step 1. Get a bearer token

```bash
databricks auth token --profile learning-new | jq -r .access_token
```

The bearer has a 1-hour TTL but the CLI refreshes it on demand. Use the wrapper in the driver:

```python
def oauth_bearer(profile="learning-new"):
    out = subprocess.check_output(
        ["databricks", "auth", "token", "--profile", profile], text=True)
    return json.loads(out)["access_token"]
```

### Step 2. POST the same body, different URL

```python
url = f"{HOST}/serving-endpoints/databricks-claude-opus-4-7/invocations"
headers = {
    "Authorization": f"Bearer {oauth_bearer()}",
    "Content-Type": "application/json",
    "Accept": "text/event-stream",
}
```

Drop the llmproxy-only fields from the body — they are silently ignored but easier to strip:

```python
body = {"messages": messages, "tools": tools, "stream": True, "max_tokens": 16000}
# omit "thinking", "anthropic_beta", "_llmproxy_fields"
```

The system prompt and tool definitions transfer over unchanged.

### What you give up vs. llmproxy

* `cache_control: ephemeral` on the system prompt — the serving endpoint accepts the field but cache-hit behavior wasn't verified. The llmproxy path showed `cache_read_input_tokens: 22250` on the second turn, so caching is *known* to work there.
* `_llmproxy_fields` for tracing — the serving endpoint doesn't propagate `session_id` / `trace_id` to any Databricks-side observability surface visible to the user, so you must do your own correlation.
* `thinking: { type: "adaptive" }` and the `interleaved-thinking` / `fine-grained-tool-streaming` betas — these flow through but their effect on the serving endpoint isn't documented.

### What you gain vs. llmproxy

* No cookie bootstrap. The bearer token comes from `databricks auth token` and refreshes automatically.
* Newer model — `databricks-claude-opus-4-7` is available there; llmproxy is pinned to `claude-4-6-opus` via `model_registration`.
* Per-token billing is visible in the workspace usage UI.

## Parsing the response (same on both endpoints)

Both endpoints stream OpenAI-shape SSE (`chat.completion.chunk`), but `delta.content` is an **array of Anthropic-style content blocks**, not a string. Block types observed:

| `type` | Meaning |
|---|---|
| `text` | Plain assistant text — append to text buffer |
| `reasoning` | Adaptive-thinking summary — ignore or surface separately |
| `tool_use` | A full tool call `{id, name, input}` |
| `input_json_delta` / `tool_use_delta` | Streamed JSON fragment of the most-recent `tool_use.input` |

The driver coalesces tool-use blocks by `id`, treating each `input_json_delta.partial_json` as a fragment to append onto the buffered argument JSON for that tool. When `finish_reason == "tool_calls"`, parse each accumulated `arguments` string, dispatch to a handler, append `{role: "tool", tool_call_id, content}` messages, and POST the next turn.

A naive parser written as `text += delta.content` will crash on the first chunk because `delta.content` is a list. (We hit this on turn 1 of the first run.)

## Tool handlers

Implement the smallest set that lets the agent finish the build. The agent will try other tools but tolerates "not implemented" responses.

**MVP set** (worked end-to-end):

| Tool | Maps to |
|---|---|
| `getDashboardConfig` | Return the locally-maintained context JSON (no API call) |
| `renameDashboard` | Mutate local `display_name` → `PATCH /api/2.0/lakeview/dashboards/<id>` |
| `editPages` | Mutate local `serialized_dashboard.pages[]` → PATCH |
| `editWidgetsV2` | Mutate `pages[].layout[]` (see shape conversion below) → PATCH |
| `createDatasetFromSQL` | Append to `serialized_dashboard.datasets[]` → PATCH |
| `createLocalMetricViewDataset` | Stub by extracting `source:` from YAML and falling back to `createDatasetFromSQL` |
| `executeSql` | `POST /api/2.0/sql/statements` (warehouse + 30s wait timeout) |
| `readTable` | Same as `executeSql` with `SELECT * FROM cat.sch.tbl LIMIT 5` |
| `getVizTypeDefinition` | Return a small in-memory snippet per `widgetType` (counter/line/bar/pie) |
| `fetchWidgetRenderData` | Return `{ok: true, note: "render verification stubbed"}` |

Everything else (`publishDashboard`, `editDatasetCalculations`, `addMetricView`, `tableSearch`, `forYouAssets`, etc.) is fielded by a single fallback handler that responds `{ok: false, note: "use createDatasetFromSQL + editWidgetsV2 + executeSql + renameDashboard instead"}`. The agent reads that and proceeds.

## Widget shape conversion (the gotcha)

> **Update after first render.** Converting the agent's shape and copying its `renderSpec` straight through is not enough — see [Revisions discovered while rendering](#revisions-discovered-while-rendering) below. The driver now discards the agent's `renderSpec` entirely and synthesizes its own. The "field-name and position remap" table here is still accurate for the query side; the renderSpec side is now driver-built.

The agent's `editWidgetsV2` input is camelCase ("agent shape"). Lakeview's `serialized_dashboard` PATCH validator expects a different shape. The driver does the conversion the SPA's tool handler normally does:

| Agent shape (input) | Lakeview shape (output) |
|---|---|
| `widgetRefName: "pages/<page>/widgets/<id>"` | `widget.name: "<id>"` (just the id, page comes from layout location) |
| `queries[].queryName` | `queries[].name` |
| `queries[].query.datasetName: "datasets/<id>"` | `queries[].query.datasetName: "<id>"` (drop prefix) |
| `queries[].query.fields[].fieldName` | `queries[].query.fields[].name` |
| `queries[].query.disaggregatedData` | `queries[].query.disaggregated` |
| `position.row`, `position.column` | `position.y`, `position.x` |
| `render.renderSpec` | `widget.spec` |
| `render.type: "markdown"` + `render.text` | `widget.textbox_spec` |

Validator error messages reference `widget.named_queries[<name>].query.fields[N].name` — that is the internally-normalized shape (queries array keyed by name). The on-the-wire input to PATCH is still `widget.queries` as an array.

Two renderSpec versions are accepted: v2 (encodings.value/x/y at top level, e.g. captured LEGO sample) and v3 (encodings.fields.{value,x,y} arrays + nested `spec.frame`). Both validate; the agent used v3 on the serving-endpoint and a mix on llmproxy.

## Prompting tips learned the hard way

1. **Say "pre-aggregated SQL", explicitly.** Without that nudge, the agent emits `SELECT * FROM <table>` datasets and tries to do aggregation in `renderSpec.encodings`. The validator then fails because counter widgets need a single-value field, and a `SELECT *` dataset doesn't have one.
2. **Tell it which tools to use.** Listing `renameDashboard, createDatasetFromSQL, editWidgetsV2` up-front avoids the model wasting turns on `readTable`, `getVizTypeDefinition`, `tableSearch`, etc., that the MVP driver doesn't implement.
3. **Anchor the layout.** Spell out the 12-column grid with row/column/width/height per widget. The agent honors it precisely and avoids the overlap-detection footgun.
4. **Tell it `fetchWidgetRenderData` is stubbed.** Otherwise it'll call the tool 7 times and try to interpret the "render OK" response as real verification.

## Persisting changes

Every mutating handler ends with:

```python
PATCH /api/2.0/lakeview/dashboards/<id>
body = {
  "etag": <current_etag>,
  "warehouse_id": "<id>",
  "serialized_dashboard": json.dumps(self.serialized),
  "display_name": self.display_name,
}
```

Keep `etag` in sync — the API returns a new one in the response. If you skip etag refresh you'll get a 409 conflict on the next PATCH.

## Result

Both backends authored the same dashboard from the same prompt in 2-3 turns. Same datasets (kpi, daily, by_product, by_continent), same 7-widget layout (4 counters + line + 2 bars), same SQL.

The build went end-to-end without any Chrome UI interaction in the agent loop. Chrome was only used twice and only for setup: (1) completing the initial OAuth U2M consent for the CLI profile, (2) extracting DBAUTH from the cookie store for the llmproxy path. After that, every Lakeview mutation and every agent turn was a plain REST call.

## Revisions discovered while rendering

After the first write-up the dashboards looked structurally correct in the JSON dump but rendered as 7 "Unable to render visualization" boxes in the actual Lakeview canvas. Two changes were needed before the build was end-to-end usable. Both are now in `driver.py`.

### 1. The agent's `renderSpec` is unusable. Discard it.

In the first build the driver copied `editWidgetsV2.render.renderSpec` straight through into `widget.spec`. The agent on both backends emitted a malformed v3 shape that Lakeview accepted into the PATCH but couldn't render — `encodings.fields.field.fieldName` for counters and `encodings.fields.x[].fieldName` for line/bar, plus a nested `spec.spec.frame`. The canvas falls back to placeholders.

The working approach is to **ignore the agent's renderSpec entirely** and synthesize a canonical one from `widgetType` + the field names declared on the widget's query. The shapes that actually render are the ones used in the known-good LEGO sample dashboard:

* **counter (v2):** `encodings.value = {fieldName, displayName, format?}`
* **line (v3):** `encodings.x/y = {fieldName, axis.title, scale.type, displayName?}`
* **bar (v3):** `encodings.x = quantitative measure, encodings.y = categorical dimension with `scale.sort.by="x"`
* **pie (v3):** `encodings.angle = measure, encodings.color = dimension`
* **table (v2):** `encodings.columns = [{fieldName, displayName, format?}]`

Field-kind (temporal / quantitative / nominal) is inferred from the column name (`pickup_datetime`, `hour_of_day`, `zip`, etc.). Columns that look like money (`revenue`, `fare`, `price`, `amount`, `total`, `sales`, `spend`, `cost`, `value`) get a `format: {type: "number-currency", currencyCode: "USD", abbreviateMode: "compact"}` encoding so they render as `$270.83K` instead of `270830`.

This means the prompt only needs to tell the agent the `widgetType` and the field names. The driver does the rest. Less work for the agent, fewer ways for it to drift off-spec.

`fix_renderspec.py` in the workbench dir is the stand-alone version of this normalizer, useful for patching dashboards that were authored before this change. New dashboards don't need it.

### 2. `--dataset-catalog` / `--dataset-schema` on `lakeview create` don't propagate to query resolution.

Setting those flags at dashboard creation made me think unqualified `sales_transactions` in dataset SQL would resolve to `samples.bakehouse.sales_transactions`. It doesn't. Every dataset showed "Error loading dataset schema" until I patched the SQL to fully-qualified names. The LEGO sample also uses fully-qualified `divein_lego.gold.lego_sets_by_year` throughout, so this is the canonical pattern.

**Always** require the prompt to instruct the agent to use fully-qualified table names. Do not rely on dashboard-level defaults — they appear to be informational only.

### 3. Pick data with actual distribution.

Not a driver bug but a prompting one. The `samples.bakehouse` data is uniformly distributed by design (every product ~$11K, every continent ~$20K) so bar charts came out as flat bands of identical-length bars and the daily line was a flat ~$4K/day. Even with the renderSpec fixed, the resulting dashboard looked terrible. `samples.nyctaxi.trips` (21.9K trips over Jan-Feb 2016, 128 pickup zips, fare distribution, hourly cycles, the actual January 23-24 blizzard visible in the daily line) is the better choice for a demo. The lesson generalizes: if you're authoring on top of demo data, pick something with real shape before judging the agent's output.

### 4. Prompt structure that converges in 2-3 turns

Both backends produced working dashboards from the same prompt template:

```text
Author a "<Title>" dashboard from <fully.qualified.table> (...row count + shape + date range...).

CRITICAL RULES:
- Use ONLY these tools: renameDashboard, createDatasetFromSQL, editWidgetsV2.
- ALL dataset SQL must use fully qualified table names: <cat.sch.tab>.
- Datasets MUST be pre-aggregated (no SELECT *).
- For widget queries: queryName="main_query", datasetName=BARE name (no "datasets/" prefix),
  fields=[{"fieldName":"<col>","expression":"`<col>`"}].
- renderSpec is normalized by the driver from widgetType + fields — do not invent encodings.
- Do not call fetchWidgetRenderData or getVizTypeDefinition.

Build this dashboard:
1. renameDashboard "<Title>"
2. createDatasetFromSQL datasets/<id>
   SQL: <fully-qualified pre-aggregated SQL>
3. ... more datasets ...
N. editWidgetsV2 with ALL widgets in one call. Use 12-column grid:
   Row 0 (height 3): 4 KPI counters at columns 0,3,6,9 width 3 each
     - pages/page_1/widgets/<id>   widgetType counter, dataset "<id>", field <col>, title "<label>"
   Row 3 (height 6): line at col 0 width 12
     - pages/page_1/widgets/<id>   widgetType line, dataset "<id>", fields [<x>, <y>], title "<label>"
   Row 9 (height 5): two bars side by side, each width 6
     - ...

When done say "Dashboard complete."
```

Key things that made this converge:
* Naming the exact widget refs (`pages/page_1/widgets/kpi_revenue`) instead of leaving naming to the agent — it picks descriptive names but they sometimes collide with prior failed attempts.
* Telling it the renderSpec is normalized by the driver — saves it from wasting turns on `getVizTypeDefinition`.
* Spelling out the layout grid coordinates per widget — no overlap-detection footgun, no "let me check the existing widgets" loops.
* Listing one `editWidgetsV2` call with all widgets — saves a turn vs. multiple smaller calls.

## Open follow-ups

* **Cache-control verification on the serving endpoint.** Whether `cache_control: ephemeral` on the system prompt produces prompt-cache hits when going through `/serving-endpoints/.../invocations` instead of `llmproxy`. Significant cost saving on the 50 KB system prompt if it works.
* **Render verification.** `fetchWidgetRenderData` is stubbed. Real implementation needs the Lakeview `/api/2.0/lakeview/dashboards/<id>/queries/<name>` or equivalent (TBD) to fetch rendered output. Without it the agent can't verify partial-data or empty-result widgets.
* **DBAUTH refresh.** The driver reads DBAUTH once at startup. For sessions longer than ~10 minutes, add a heartbeat that POSTs to `/auth/session/refresh` to keep it alive. The SPA does this from the browser every ~30s.
* **DLMV path.** The driver's `createLocalMetricViewDataset` handler fakes it as a `SELECT * FROM <source>`. A real implementation needs to write the metric view YAML to the dataset record (Lakeview accepts the field but the schema isn't captured here). Worth doing if the agent is asked to use DLMVs as datasets.
* **Other page agents.** The same recipe (system prompt + tools from the captured body, MVP handlers, PATCH the asset) should work for Notebook, Jobs, SQL Editor, Pipeline Editor agents. Each has a captured `*-llmproxy-body.json` under [`../agents/`](../agents/).
* **Tighter rendering-side feedback.** The driver currently PATCHes Lakeview after every mutation but doesn't verify rendering. A real implementation would call the Lakeview query-execute API after each `editWidgetsV2` and feed the result back as the `fetchWidgetRenderData` response — the agent would then notice "Unable to render visualization" on its own instead of needing the human to spot it in the canvas.
