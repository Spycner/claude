# Troubleshooting

## `command not found: uv`

The MCP server requires `uv` to launch. Install it:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Re-launch Claude Code so the MCP manifest re-spawns the server.

## `command not found: databricks`

Install the Databricks CLI per https://docs.databricks.com/dev-tools/cli/install.html. Verify with `databricks --version`.

## `databricks auth token --profile <name>` fails

Profile not configured. Run:

```bash
databricks auth login --profile <name>
```

Follow the OAuth flow in your browser. Verify with `databricks auth token --profile <name>`.

## Cookie mode 401 / 403

DBAUTH cookie expired or missing.

- If using Chrome profile: ensure you're signed into Databricks in that Chrome session.
- If using `GENIE_CODE_DBAUTH` env var: extract a fresh cookie from your browser DevTools and update the env var.

## "MCP tool X is not yet supported"

Genie Code emitted a tool the MCP server doesn't yet handle. V1 implements 10 of ~34 dashboard tools and 5 LakeAgent tools. Rephrase the user's request to avoid the unsupported operation, or file a followup.

## Chrome profile lock (Singleton{Lock,Cookie,Socket})

If `list_pages` or other chrome-devtools-mcp tools fail with "browser is already running":

```bash
# Find and kill any orphaned Chrome processes using the MCP profile
pkill -f 'chrome-devtools-mcp/chrome-profile'
# Remove stale lock files
rm -f ~/.cache/chrome-devtools-mcp/chrome-profile/Singleton{Lock,Cookie,Socket}
```

## Stale prompt pack: agent emits unexpected tools

Databricks updated Genie Code's prompts or tool definitions in the SPA, but the bundled prompt pack is older. Refresh the prompt pack:

```bash
cd plugins/databricks/mcp-servers/genie-code
uv run tools/refresh-prompt-pack.py
git diff prompt_pack/  # review changes
git add prompt_pack/ && git commit -m "chore(genie-code): refresh prompt pack"
```

## Threads don't appear in the SPA sidebar (cookie mode)

This is a known V1 limitation. The planned `universegraphql` `createThread` mutation could not be located during live SPA traffic capture, and Genie Code appears to track thread identity implicitly via `session_id` baked into `llmproxy` POSTs rather than a separate GraphQL mutation. As a result, cookie-mode chats started via this MCP server are not surfaced in the Databricks SPA sidebar. Threads remain accessible via `list_threads` / `get_thread`. If a future investigation surfaces the correct registration call, flip `universegraphql.WIRED = True` in the MCP server and implement `register_thread` / `list_remote_threads`. See `references/research/overview/followups.md` for context.
