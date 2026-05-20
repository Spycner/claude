# Modes: cookie vs OAuth

Genie Code supports two transport modes. The MCP `options.mode` argument selects per call.

## When to pick cookie

- You want threads to appear in the Databricks SPA sidebar so you can scroll past them in the UI. **Caveat:** V1 does not register cookie-mode threads in the SPA sidebar (see "Known limitation" below).
- You need llmproxy-only features (workspace instructions, certain sub-agents).
- You're signed into Databricks in Chrome already and have a local profile path.

## When to pick OAuth

- You don't want to deal with Chrome profile cookie extraction.
- You have a `databricks` CLI profile configured (`databricks auth login --profile <name>`).
- You want clean, reproducible auth (no UI session dependency).
- A serving endpoint for Genie Code is deployed in your workspace.

## Tradeoffs

| Dimension | Cookie | OAuth |
|---|---|---|
| Auth source | Chrome profile or `GENIE_CODE_DBAUTH` env var | `databricks auth token --profile <name>` |
| Threads visible in SPA sidebar | No (V1 limitation; see below) | No (only via `list_threads` / `get_thread`) |
| Feature surface | Full Genie Code | Whatever the deployed endpoint exposes |
| Auth fragility | DBAUTH refreshes every ~30s; CSRF per session | OAuth tokens valid ~1h, auto-refreshed |
| Setup friction | Sign into Databricks in Chrome | One-time CLI login |

## Decision flow

1. Is `databricks auth token --profile <name>` working in your environment? Prefer OAuth (lower friction, no UI dependency).
2. Otherwise use cookie mode (more universal, but requires Chrome sign-in).
3. SPA sidebar visibility is currently not a differentiator for V1 (see limitation below).

## Known limitation: SPA sidebar visibility

V1's planned thread-registration mutation (`createThread` via `universegraphql`) could not be located in live SPA traffic captured during research. Genie Code appears to track thread identity implicitly via `session_id` baked into each `llmproxy` POST, not a separate GraphQL mutation. As a result, cookie-mode chats started via this MCP server **do not appear in the Databricks SPA sidebar**. Threads are still queryable via `list_threads` / `get_thread` from the local store. If a follow-up investigation surfaces the correct registration call, flip `universegraphql.WIRED = True` and implement `register_thread` / `list_remote_threads`.
