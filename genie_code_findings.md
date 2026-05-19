# Genie Code — Reverse-Engineering Findings

Investigation of Databricks **Genie Code** (the new agentic assistant with a web UI, not classic Genie data-rooms) on workspace `https://dbc-df321db9-486f.cloud.databricks.com/`. Goal: enumerate the HTTP surface needed to drive Genie Code programmatically.

## Auth

* Workspace uses Databricks OAuth (u2m flow).
* Profile in `~/.databrickscfg` named `learning-new` for this host.
* Bearer token obtained via `databricks auth token --profile learning-new` (1h TTL, scope `all-apis offline_access`).

## How the SPA is laid out

* Entry: `https://ui-assets.cloud.databricks.com/static/js/index.968bbeb5f6.js` (~94 KB webpack runtime).
* Asset manifest references **173 lazy chunks** under `/static/js/<id>.<hash>.chunk.js`.
* Both `/` and `/editor/folders/workspace?mode=chat` serve the same SPA shell. Genie Code is rendered by chunks loaded on-demand under the existing workspace editor.

## How Genie Code is wired

* **UI route:** `/editor/folders/workspace?mode=chat`. Triggered by feature flag `databricks.fe.assistant.useHomeFullPageGenieCode`.
* **Internal name:** `Workspace.Assistant` (this is the agent name in the GraphQL backend).
* Client-side state events (postMessage / redux):
  * `MFE_CREATE_NEW_THREAD`
  * `MFE_LOAD_CHAT_THREAD`
  * `MFE_APPEND_MESSAGE`
  * `MFE_STATE_CHANGE`
  * `PAGE_TRIGGERED_CHAT_EVENT`
  * `TOGGLE_ASSISTANT`

There is **no server `POST /threads` endpoint**. A "new chat" is a client-side action: rotate `sessionId`, dispatch `CREATE_NEW_THREAD`. Persistence likely flows through GraphQL (see direction 2 below).

## Chat REST endpoints (chunk `35758.41da1ca0fb.chunk.js`)

All are `POST`, all support `stream: true` (SSE-style), all use a uniform body envelope.

| Endpoint | Purpose |
|---|---|
| `/ajax-api/2.0/conversation/assistant/editor-chat` | **Main Genie Code chat in the editor** |
| `/ajax-api/2.0/conversation/assistant/general-chat` | Generic assistant chat |
| `/ajax-api/2.0/conversation/assistant/assistant-card` | Card-style suggestions |
| `/ajax-api/2.0/conversation/assistant/suggest-fix` | Suggest fix on errors |
| `/ajax-api/2.0/conversation-v2/assistant/inline-quick-fix` | Inline code quick-fix (v2 path) |
| `/ajax-api/2.0/conversation/assistant/merlin-support-chat` | Support chatbot |
| `/ajax-api/2.0/conversation/flow/partnerhub` | Partner Hub flow |
| `/ajax-api/2.0/conversation/internal-completions` | Generic completions; wraps GraphQL `agent(name:"Workspace.Assistant"){ conversationAssistantChatCompletion(input:$input){ _json } }` |
| `/ajax-api/2.0/conversation/proxy/chat/completions` | OpenAI-compatible direct LLM proxy |

### Request envelope (observed pattern)

```jsonc
{
  // ...spread of assistantApiArgs[<flow_key>], e.g. editor_chat
  //    expected to be OpenAI-shaped (messages, model, tools, ...)
  "stream":  true | false,
  "debug":   false,
  "metadata": "{\"sessionId\":\"<uuid>\", ...}"   // JSON-stringified nested
}
```

Headers:
* `Content-Type: application/json`
* `x-databricks-agent-version: <ver>`   (taken from a frontend constant)
* `Authorization: Bearer <oauth_token>`

### Non-streaming response

OpenAI-shaped — code unwraps:

```js
JSON.parse(JSON.parse(body).completion).choices[0].message
```

i.e. the outer payload is `{ completion: "<json-string>" }`, the inner is OpenAI `{ choices: [{ message: { role, content } }] }`.

## GraphQL backend

* Endpoint: `/api/2.0/genai-mapi/universegraphql` (single Apollo client, configured in `63192.368e9181cf.chunk.js`).
* Notable ops found across chunks: `GetClientConfig`, `GetSessionQuery`, `ConversationModelStatuses`, `GetAssistantEnabled`, `GetAssistantEnabledWorkspace`, `GetGenieSpaceNameByUuid`.
* This is almost certainly where thread/session persistence and model listing live.

## What's NOT in scope of Genie Code

* `/ajax-api/2.0/data-rooms/...` and `/genie/rooms/<id>` belong to the **legacy Genie** (data-rooms / spaces / SQL Q&A) feature, not Genie Code.

---

## Next directions

1. **Hit `editor-chat` live** with the OAuth bearer to confirm the request body and observe streamed responses. Pins down the schema for the wrapper.
2. **Introspect `/api/2.0/genai-mapi/universegraphql`** (`{ __schema { types { name } } }`) to enumerate agent/session/thread types and find thread CRUD / history operations.
3. **Trace the `assistantApiArgs.editor_chat` builder** in the bundles to extract the exact input shape (model, tool list, MCP servers, user / workspace instructions, attachments).

Current direction: **#1 — say "hello world" via editor-chat.**

---

## Direction #1 — live probe of `editor-chat`

### Auth discovery

* `/ajax-api/2.0/conversation/assistant/editor-chat` rejects the OAuth bearer (303 redirect to `/login.html`). The `ajax-api` prefix is cookie-session only.
* The **same endpoint exists at `/api/2.0/conversation/assistant/editor-chat`** and accepts the OAuth bearer for body validation. Use this path for programmatic access.

### Body schema (validation passes)

Server returns `400 BAD_REQUEST: "Request purpose field not specified for flow request"` until `common_params.request_purpose` is supplied. Wire format is snake_case (chunk `35758` runs the body through a recursive snake-case key transformer `d = o(e, snakeCase)` before posting).

Minimum body that passes validation:

```jsonc
{
  "common_params": { "request_purpose": "STANDARD_USAGE" },
  "messages":      [{ "role": "user", "content": "hello" }],
  "stream":        false,
  "debug":         false,
  "metadata":      "{\"sessionId\":\"<uuid>\"}"
}
```

Headers actually used by the SPA:
* `Content-Type: application/json`
* `x-databricks-agent-version: oai`   (string `"oai"` is the default for OpenAI-shaped flows)
* `Authorization: Bearer <oauth_token>`

### Downstream block: Lakesense

Once validation passes the conversation gateway returns:

```
HTTP 500
INTERNAL_ERROR: isDatabricksModelServing=false; code=404;
content=Lakesense not enabled: failed token auth and tls certificate auth
```

* **Lakesense** is the internal AI router that the conversation gateway proxies to.
* Our CLI OAuth bearer (client `databricks-cli`, audience `7474644141110056`, scope `all-apis offline_access`) is accepted by the gateway but **rejected by Lakesense** ("failed token auth and tls certificate auth").
* The web SPA's OAuth client id is different (`cef6a689-ce26-45d0-bc87-17bef342fbba`). It is plausible Lakesense requires either:
  1. A token issued for the web client (different audience or scopes), or
  2. The web session cookie that carries an additional internal credential / proxy cert.

The conversation gateway routing tag `isDatabricksModelServing=false` suggests Lakesense classified our request as "not from Model Serving" and then fell back to a token check it could not satisfy.

### Verdict for direction #1

* The HTTP surface is fully decoded — request shape, snake-case rule, mandatory `common_params.request_purpose`, response envelope (`{ completion: "<json>" }` wrapping OpenAI `choices[0].message`).
* Calling Genie Code end-to-end with a CLI OAuth bearer is **blocked at the model-serving layer**, not at the conversation API.

### Open questions / things to try next

* Mint a token via the web client id (`cef6a689-ce26-45d0-bc87-17bef342fbba`) and retry.
* Replay the call with the real Chrome session cookies (would prove the gateway works end-to-end and isolate the failure to token scope vs. workspace config).
* Confirm Lakesense enablement on this workspace via admin settings (`databricks.assistant` family flags).
* Re-attempt direction #2 (GraphQL introspection at `/api/2.0/genai-mapi/universegraphql`) — bearer returns 404 there; may need a different path or POST-with-query-string variant.

---

## Direction #1, revised — the real Genie Code endpoint

> The `editor-chat` / Lakesense path was a dead end: **Genie Code does not use it.**
> Captured DevTools traffic on a live message showed the real call.

### The endpoint

* `POST /ajax-api/2.0/conversation/llmproxy/`
* `accept: text/event-stream`
* Response: HTTP 200, OpenAI-compatible SSE (`data: {...chat.completion.chunk...}\n\n`, terminated by `data: [DONE]`)
* Internal name confirmed in the body: `agent_name: "LakeAgent"`. Client id: `"editor-assistant-agent-mode"`. Model id used: `eu.anthropic.claude-opus-4-6-v1` (Claude Opus 4.6 on Bedrock EU, routed by Databricks Foundation Model API in the EU region).

### Auth

* **DBAUTH cookie** (the Databricks Web Session JWT) — not an OAuth bearer.
* **`x-csrf-token` header** — paired with the DBAUTH cookie.
* `cf_clearance` cookie for Cloudflare.
* `x-databricks-org-id` and `x-databricks-self: true` headers.

The CLI-issued OAuth bearer (audience `7474644141110056`, scope `all-apis offline_access`) is rejected on `/ajax-api/` paths and is not what the SPA uses for chat. Replaying with a captured DBAUTH cookie + CSRF token works end-to-end.

### Request body (Anthropic Messages API + Databricks routing fields)

```jsonc
{
  "messages":   [/* Anthropic-shape messages */],
  "tools":      [/* full tool defs the agent should expose this turn */],
  "stream":     true,
  "max_tokens": 64000,
  "thinking":   { "type": "adaptive" },
  "anthropic_beta": [
    "fine-grained-tool-streaming-2025-05-14",
    "interleaved-thinking-2025-05-14"
  ],
  "_llmproxy_fields": {
    "model_registration": "claude-4-6-opus",
    "client_id":          "editor-assistant-agent-mode",
    "session_id":         "<workspace-thread-id>",
    "trace_id":           "<uuid>",
    "call_id":            "<uuid>",
    "agent_name":         "LakeAgent"
  }
}
```

Notes:
* The body is essentially the **public Anthropic Messages API** with one extra envelope key `_llmproxy_fields` carrying Databricks routing metadata.
* Tools are passed **per-request** — they are not server-registered. The SPA inlines all ~17 Genie Code tools (`recommendDataroom`, `askDataroom`, `executeCode`, `tableSearch`, `querySearch`, `readTable`, `readAssetById`, `createAsset`, `openAsset`, `renderChart`, `docSearch`, `forYouAssets`, `searchAssets`, `manageTodoList`, `readSkillFile`, `findReferencesTool`, `runDatabricksCli`, `fetchOmittedContent`) on every turn.
* The **system prompt that gives Genie Code its identity** is also sent client-side as the first system message. "Genie Code" is fundamentally a system prompt + tool set + model registration tag — not a separate model.
* The model never receives the user identity directly; everything goes through prompt + tools.

### Minimum viable body

```jsonc
{
  "messages":   [{"role": "user", "content": "say hello world"}],
  "stream":     true,
  "max_tokens": 1024,
  "_llmproxy_fields": {
    "model_registration": "claude-4-6-opus",
    "client_id":          "editor-assistant-agent-mode",
    "session_id":         "test-session-001",
    "trace_id":           "11111111-1111-1111-1111-111111111111",
    "call_id":            "22222222-2222-2222-2222-222222222222",
    "agent_name":         "LakeAgent"
  }
}
```

**Verified working** on workspace `dbc-df321db9-486f.cloud.databricks.com` with a captured DBAUTH cookie. Model responded `Hello, World! 👋` via SSE. No system prompt, no tools, no Genie Code persona — just raw Claude Opus 4.6 with Databricks routing metadata.

### What the SPA bundles got wrong / what we missed earlier

* The chunks we decoded (`35758.*`, `8802.*`, `23308.*`) are the **legacy Workspace Assistant** code path. They are still loaded by the workspace shell but Genie Code does not actually call them.
* Genie Code's send-message logic is in a different chunk we didn't grep for — it builds the Anthropic-shape body and posts to `llmproxy/`. The chunks listing `editor-chat` etc. are dead code paths from the older assistant.
* The `MFE_CREATE_NEW_THREAD` / `MFE_LOAD_CHAT_THREAD` events likely *are* still how Genie Code manages a "new chat" client-side — the server has no thread CRUD; `session_id` is just a string the client picks.

### What's still unmapped

* **MCP servers + workspace instructions**: Genie Code reads `.github_mcp_config.json`, `.assistant_workspace_instructions.md`, `.assistant_instructions.md` from the user's workspace folder (we saw 404s for these — they would be GET requests to `/api/2.0/workspace/export` or similar).
* **`/ajax-api/2.0/system-tables-service/internal-connections?product=AGENT`** — returns the list of "agent connections" for the AGENT product. Not yet replayed, but cheap to probe.
* **The `assistant-settings.json` GET** and the `update_mask=assistant_*` PATCH against the numeric workspace id (`324464905642538`) — these are the per-user / per-workspace Genie Code settings. Worth mapping for a full driver.
* **Streaming response format details**: the SSE chunks are OpenAI `chat.completion.chunk` shape, but tool-use streaming with interleaved thinking will produce richer events (`tool_use_start`, `thinking_delta` etc.) — needs a real tool-calling turn to capture.

### Practical conclusion for a programmatic API

Building a Python driver for Genie Code now reduces to:
1. Obtain a DBAUTH cookie (either by automating the OAuth-to-DBAUTH exchange the SPA does, or by accepting a copy-paste cookie from the user as in this session).
2. Generate UUIDs for `trace_id`, `call_id`, and a stable `session_id` per conversation.
3. POST Anthropic-shape `messages` + the tool defs you want the agent to use (or omit tools for plain chat) to `/ajax-api/2.0/conversation/llmproxy/`.
4. Parse the OpenAI-style SSE chunks and reassemble the assistant turn.
5. Reuse the same `session_id` across turns to mirror the SPA's "thread" behavior.

Open question for productionising: the DBAUTH cookie has a short TTL. We need to understand the OAuth → DBAUTH exchange (the SPA does this transparently) to mint cookies from a long-lived credential.

---

## OAuth → DBAUTH chase, and why it doesn't matter

We dug into the SPA's login flow looking for a way to mint DBAUTH from an OAuth bearer. Summary of what we learned:

* **Workspace endpoints exposed for login** (chunk `38701.55e0f82d61`):
  * `/x509cert/auth` (client certificate)
  * `/aad/consume` (Azure AD federation)
  * `/gcp/consume` (GCP federation)
  * `/j_security_check` (legacy username + password)
  * `/loginCodes` (login-funnel codes — `POST` accepts JSON, returns `{login_funnel_id, message}` for malformed bodies)
  * `/sso/verify` (303 redirect to `/login.html` without a session)
* **No `/oidc/consume` on the workspace.** The OAuth consume sits on `accounts.cloud.databricks.com/oidc/consume` (verified — returns 302) and that's a different origin.
* **DBAUTH cookie format** = `dbws.1.<JWT-signed-by-workspace>`. The workspace mints it itself; `accounts.cloud.databricks.com` cannot directly issue a workspace cookie.
* **Bearer-token endpoints** like `/auth/session/info` and `/auth/session/refresh` all 303-redirect to `/login.html` when called with the CLI OAuth bearer. They need an existing DBAUTH.
* **No documented bearer → DBAUTH exchange.** The workspace SPA cookie is intentionally browser-only.

### Confirmed login flow (from captured HAR of a fresh sign-in)

This workspace uses **email + one-time-code** (no password) as the user-facing accounts auth. The full DBAUTH-minting handshake is:

```
1. GET    workspace.com/?o=<ws>                                       → 303 to /login.html
2. GET    workspace.com/login.html                                     → 200, loads SPA shell
3. GET    workspace.com/?o=<ws>&account_id=<aid>&appendHash=true       → 303 to accounts
4. GET    accounts.cloud.databricks.com/oidc/auth?loginUsingIdp=databricks&o=<ws>&account_id=<aid>&workspace=...
                                                                       → 302 starts OIDC flow, generates `state`
5. GET    accounts.cloud.databricks.com/oidc/accounts/<aid>/v1/authorize?client_id=cef6a689-…&response_type=id_token&response_mode=form_post&redirect_uri=https://accounts.cloud.databricks.com/oidc/consume&scope=openid+email&nonce=<n>&state=<s>
                                                                       → 303 to /login (no accounts session yet)
6. GET    accounts.cloud.databricks.com/login?next_url=…               → 200, email-entry UI
7. POST   accounts.cloud.databricks.com/loginCodes                     → 200, sends OTP email
8. POST   accounts.cloud.databricks.com/accounts/<aid>/loginCodes/validate?next_url=…
          body { "email": "<user>", "temporary_login_code": "<6char>", "intents": ["INTENT_URL_PARAM_UNSPECIFIED"] }
                                                                       → 200, sets accounts session cookie
9. GET    accounts.cloud.databricks.com/oidc/accounts/<aid>/v1/authorize?…   (same as step 5)
                                                                       → 200, returns HTML auto-submit form to /oidc/consume containing id_token
10. POST  accounts.cloud.databricks.com/oidc/consume                   → 307
          body { id_token=<jwt 1098 chars>, iss=<encoded issuer>, state=<base64 state> }
                                                                       Location: https://workspace.com/federated_oidc/consume
11. POST  workspace.com/federated_oidc/consume                         → 302  🎯 DBAUTH minted here
          body { id_token=<same jwt>, iss=<same issuer>, state=<same state> }
          headers: content-type: application/x-www-form-urlencoded
                                                                       Set-Cookie: DBAUTH=dbws.1.<jwt>
                                                                       Location: /?autoLogin=true&o=<ws>&email=<email>&riid=<uuid>
12. GET   workspace.com/?autoLogin=true&o=<ws>&…                       → 200, authenticated workspace
```

**Key request — workspace DBAUTH minter:**

```
POST https://dbc-….cloud.databricks.com/federated_oidc/consume
Content-Type: application/x-www-form-urlencoded
Referer: https://accounts.cloud.databricks.com/

id_token=<JWT issued by accounts.cloud.databricks.com/oidc/accounts/<aid> with aud=cef6a689-… and email/openid claims>
&iss=https%3A%2F%2Faccounts.cloud.databricks.com%2Foidc%2Faccounts%2F<aid>
&state=<base64 blob the workspace originally generated in step 4>

Response: 302, Set-Cookie: DBAUTH=dbws.1.…
```

The `state` value the workspace emits is signed/encoded, so it can't be forged — but it can be **observed in step 4's redirect** and then replayed in step 11.

### Why pure OAuth-bearer programmatic DBAUTH minting doesn't work (confirmed)

Once we knew the endpoint, the obvious next attempt was: can we mint an `id_token` from the accounts OIDC endpoints using only our CLI OAuth bearer, then POST it to `/federated_oidc/consume`? Two probes:

1. **`GET /oidc/accounts/<aid>/v1/authorize` with `Authorization: Bearer <oauth>`** → 303 to `/login`. The authorize endpoint **ignores bearer tokens entirely** — it relies on the accounts session cookie. No way to skip the login step with a bearer.
2. **OAuth token exchange (`grant_type=urn:ietf:params:oauth:grant-type:token-exchange`, `requested_token_type=…:token-type:id_token`) on `/oidc/accounts/<aid>/v1/token`** → `400 invalid_request: unsupported requested_token_type: urn:ietf:params:oauth:token-type:id_token`. Databricks' OAuth server does not support exchanging access_tokens for id_tokens.

So there is **no documented bearer → id_token → DBAUTH path** for an OAuth-only client. The OIDC code path is **user-session only** by design.

### Realistic programmatic options

| Option | Bootstrap | Refresh | Headless? |
|---|---|---|---|
| **P1. Manual cookie paste + auto-refresh** | User logs in via browser once, copies `DBAUTH` from DevTools | `POST /auth/session/refresh` every ~10 minutes (already does this from the SPA). Refresh continues until the accounts session itself expires (~weeks on most workspaces). | No browser at runtime, but yes at session bootstrap |
| **P2. Replay the OIDC flow with a stored accounts session** | User logs in once, we capture all `accounts.cloud.databricks.com` cookies (not just DBAUTH) | When DBAUTH expires, replay steps 3–11 with the captured accounts cookies to mint a fresh DBAUTH. Works until the accounts session itself expires. | No browser at runtime |
| **P3. Headless email-OTP automation** | None | Drive steps 7–11 by polling an IMAP inbox for the OTP code | Fully headless if we can read the user's email |
| **P4. Headless browser (Playwright)** | None | Render steps 3–11 in a headless Chromium with the user's stored credentials | Fully headless |
| **P5. Federated SP (untested)** | Configure a service principal as a federated OIDC user that can complete `/federated_oidc/consume` | Standard OAuth client-credentials issues `access_token` but not `id_token`. Worth checking whether DB has a private endpoint to mint id_tokens for SPs. | Possibly fully headless if it exists |

P1 is the lightest. P2 is the next step up in robustness. P3/P4 are the only fully-zero-touch options.

### Practical recommendation

For the client pitch:

1. **Default to P1** — one-time browser login + `/auth/session/refresh` heartbeat. Code stays simple, no headless browser dependency. The user re-logs every few weeks max.
2. **Offer the serving-endpoint path (above) as the supported alternative** when the client is fine paying for inference or wants a fully zero-touch deployment.
3. **Investigate P5 separately** if a fully headless free-Genie-Code driver becomes business-critical — but that's its own project.

The OAuth→DBAUTH endpoint is now fully mapped; we now know exactly why a pure OAuth driver cannot mint DBAUTH, and we have a concrete fallback plan.

---

## Better path: skip the SPA, call the model directly

---

## Better path: skip the SPA, call the model directly

A `GET /api/2.0/serving-endpoints` with the OAuth bearer returns 31 documented model-serving endpoints on this workspace, including:

| Endpoint | Task | Notes |
|---|---|---|
| `databricks-claude-opus-4-6` | `llm/v1/chat` | **Same model `llmproxy` routes Genie Code to** (`eu.anthropic.claude-opus-4-6-v1`) |
| `databricks-claude-opus-4-7` | `llm/v1/chat` | Newest Opus |
| `databricks-claude-sonnet-4-6` | `llm/v1/chat` | Sonnet equivalent |
| `databricks-claude-haiku-4-5` | `llm/v1/chat` | Haiku equivalent |
| `databricks-gpt-5-*`, `databricks-gemini-*`, `databricks-llama-*`, … | `llm/v1/chat` | Other foundation models |

These are **documented Databricks Foundation Model Serving endpoints**. Auth is OAuth bearer. Request/response is OpenAI-compatible.

### Verified end-to-end

```
POST https://dbc-df321db9-486f.cloud.databricks.com/serving-endpoints/databricks-claude-opus-4-6/invocations
Authorization: Bearer <oauth_token>
Content-Type: application/json

{ "messages":[{"role":"user","content":"say hello world"}], "max_tokens":100 }
```

→ `HTTP 200` →
```json
{ "model":"eu.anthropic.claude-opus-4-6-v1",
  "choices":[{"message":{"role":"assistant","content":"Hello, World! 👋"},"finish_reason":"stop"}],
  "usage":{ "prompt_tokens":10, "completion_tokens":10, "total_tokens":20 } }
```

**Tool calling works** on the same endpoint. Verified by sending a single `tableSearch` tool definition + a user prompt asking the model to use it — model returned an OpenAI-shaped `tool_calls` block with valid arguments and `finish_reason: tool_calls`.

### What "Genie Code" actually is

Looking at it from this angle, "Genie Code" decomposes into three plain-text artifacts plus an agentic loop, all of which we already have from the captured request:

1. **System prompt** — the multi-thousand-token instructions defining the Genie Code persona, response format, tool-use rules, and the long-term memory policy. *Copy verbatim from the captured `llmproxy` body.*
2. **Tool definitions** — the 17 OpenAI-shaped tool schemas (`tableSearch`, `readTable`, `executeCode`, `runDatabricksCli`, `createAsset`, `openAsset`, `renderChart`, `manageTodoList`, `readSkillFile`, `findReferencesTool`, `recommendDataroom`, `askDataroom`, `docSearch`, `querySearch`, `forYouAssets`, `searchAssets`, `readAssetById`, `fetchOmittedContent`). *Copy verbatim from the captured `llmproxy` body.*
3. **Tool handlers** — Databricks REST APIs already exposed via OAuth bearer:
   * `tableSearch`, `readTable` → Unity Catalog REST APIs
   * `searchAssets`, `readAssetById`, `openAsset`, `createAsset` → Workspace + Jobs + Pipelines REST APIs
   * `executeCode` → Notebook command-execution REST API (or SQL Statement API for SQL)
   * `runDatabricksCli` → shell to local `databricks` binary (with the same profile)
   * `docSearch` → public Databricks docs
   * `recommendDataroom`, `askDataroom` → Genie spaces REST APIs (`/api/2.0/genie/spaces/...`)
   * `renderChart` → local widget renderer or static chart generation
   * `manageTodoList`, `readSkillFile`, `forYouAssets`, `findReferencesTool`, `fetchOmittedContent` → mix of REST APIs + local state
4. **Agent loop** — standard OpenAI tool-use loop:
   1. Send messages + tools to `/serving-endpoints/databricks-claude-opus-4-6/invocations`
   2. If `finish_reason: tool_calls`, execute each `tool_calls[*]`, append results as `role: tool` messages, repeat.
   3. If `finish_reason: stop`, return assistant content to the user.

No DBAUTH, no llmproxy, no SPA replay required. Authentication is the standard OAuth bearer that `databricks auth token --profile <p>` already mints and refreshes.

### Trade-offs vs. replaying `llmproxy`

| Aspect | Direct serving endpoint | `llmproxy` replay |
|---|---|---|
| Auth | OAuth bearer (long-lived, refresh-script-friendly) | DBAUTH cookie (browser-only, short TTL) |
| Documented? | Yes (Databricks Foundation Model Serving) | No (SPA-only) |
| Identical model? | Yes (`eu.anthropic.claude-opus-4-6-v1`) | Yes |
| Cache-control headers / prompt cache fields | Need to verify — Bedrock prompt caching may need explicit headers | Already wired (`cache_control: {type: "ephemeral"}` on system message) |
| `_llmproxy_fields` metadata (session_id, trace_id) | N/A — pass equivalent via OpenAI `metadata` or your own logging | Native |
| Tool definitions | Sent per request, OpenAI shape | Sent per request, OpenAI shape (identical) |
| `thinking: { type: "adaptive" }` | Supported on Anthropic via `/invocations` if endpoint forwards it; needs verification | Native |
| Genie Code persona | You ship the system prompt yourself | Server adds it |

### Recommended productionised architecture

```
client (your Python wrapper)
    │
    ├── auth: databricks SDK / `databricks auth token --profile X` (OAuth U2M or M2M)
    │
    ├── one LLM call per agent turn:
    │     POST /serving-endpoints/databricks-claude-opus-4-7/invocations
    │     body = { messages: [system, ...history, user], tools: [<17 tool defs>], max_tokens, stream }
    │
    └── tool handlers (each = one or two REST calls to Databricks public APIs)
          tableSearch, readTable, executeCode, runDatabricksCli, …
```

### Cost positioning

This serving-endpoint path is the cleanest engineering option but is **NOT cost-equivalent** to using Genie Code in the SPA:

* **Genie Code in the SPA (via `llmproxy`)** — usage is bundled in the workspace subscription. No per-token metering visible to the user. This is what "free" means in the client conversation.
* **Direct Foundation Model Serving endpoint (`/serving-endpoints/.../invocations`)** — billed per-token under Databricks Foundation Model Serving pricing (DBU-equivalent for inference). Every agent turn, every tool-result round-trip, every retry hits the meter.

For client-facing decisions this becomes a clean two-option pitch:

| Path | LLM cost | Auth complexity | Recommended when |
|---|---|---|---|
| Direct serving endpoint (this section) | Per-token billing | OAuth bearer only — trivial | Client wants a clean, documented, supported API surface and is fine paying for inference. Best for productionised customer-facing deployments where the cost is observable and predictable. |
| `llmproxy` replay (next section) | Bundled in workspace subscription | DBAUTH cookie — non-trivial bootstrap | Client wants Genie Code parity with zero incremental inference cost (internal automations, demos, sandbox tooling). Cost trade-off is operational complexity around session bootstrap. |

Recommend leading with the `llmproxy` path for cost-sensitive internal use cases and falling back to the serving-endpoint path when the client wants a supported / documented surface or when programmatic session bootstrap is too brittle.

### What's still worth chasing later

* Reproducing `cache_control: ephemeral` on the system message via the serving endpoint — significant cost saving on the multi-thousand-token system prompt.
* The Genie Code workspace-file lookups (`.assistant_instructions.md`, `.assistant_workspace_instructions.md`, `.github_mcp_config.json`) — `/api/2.0/workspace/export` should fetch them; behaviour when files are missing is a no-op (the current workspace 404s them).
* Streaming (`stream: true`) on the serving endpoint — the OpenAI SSE chunk format is the same, but worth confirming `tool_use_delta` / `thinking_delta` chunks behave as expected.

The original "OAuth → DBAUTH" question stays open as an academic curiosity, but does not block building a programmatic Genie Code driver.
