---
name: genie-code
description: Use when the user wants to drive Databricks Genie Code (chat with LakeAgent, or build/edit Lakeview dashboards via the Dashboard Authoring Agent) from Claude.
---

# Genie Code Skill

Drive Databricks Genie Code from Claude. Supports two agents (LakeAgent for general chat, dashboardAuthoringAgent for Lakeview dashboard authoring) across two auth modes (cookie/llmproxy and OAuth/serving-endpoints). Composes with chrome-devtools-mcp for visual dashboard review.

---

## Auth Approach

Do NOT check authentication upfront. Just call the MCP tool. If it fails with an auth error, see Self-Healing.

Two modes, selected per call via `options.mode`:

- **`cookie`**: uses Databricks SPA DBAUTH cookie (set up via Chrome profile or `GENIE_CODE_DBAUTH` env var). Threads appear in the Databricks SPA sidebar.
- **`oauth`**: uses Databricks CLI OAuth token (`databricks auth token --profile <profile>`). Threads not visible in SPA; accessible via `get_thread` and `list_threads`.

See `references/modes.md` for tradeoffs and decision flow.

---

## Tool Preference

- **MCP tools (Genie Code conversation only)**: `chat`, `resume_chat`, `list_threads`, `get_thread`.
- **`databricks` CLI (everything else)**: `databricks lakeview list/get/create/update`, `databricks sql statements execute`, `databricks serving-endpoints list`, `databricks workspace export/import`.
- **`chrome-devtools-mcp` (visual review)**: `navigate_page`, `take_snapshot`, `take_screenshot` against the dashboard URL.

No wrapper scripts. The skill instructs Claude to use each tool directly.

---

## Operations — Tier 1 (Read)

### List recent dashboard threads

```python
list_threads(agent="dashboardAuthoringAgent", context_id="<dashboard_id>", limit=10)
```

### Get a thread's full message history

```python
get_thread(thread_id="<thread_id>")
```

### List Lakeview dashboards in the workspace

```bash
databricks lakeview list
databricks lakeview get <dashboard_id>
```

### List serving endpoints (for picking an OAuth endpoint_name)

```bash
databricks serving-endpoints list
```

### Run a standalone SQL query (no Genie Code session needed)

```bash
databricks sql statements execute --warehouse-id <id> --statement "SELECT ..."
```

See `references/recipes.md` for more example reads.

---

## Operations — Tier 2 (Write)

### Chat with LakeAgent (general Databricks Genie Code)

```python
chat(
  prompt="<user question>",
  agent="LakeAgent",
  context_id=None,
  options={"mode": "cookie"}
)
```

### Build/edit a Lakeview dashboard (Dashboard Authoring Agent)

1. Resolve `dashboard_id`: from user input, from `databricks lakeview list` if user named it, or by creating via `databricks lakeview create`.
2. Start the build:

```python
chat(
  prompt="<user's build request>",
  agent="dashboardAuthoringAgent",
  context_id="<dashboard_id>",
  options={"mode": "cookie"}
)
```

3. Summarize the returned `dashboard_diff` to the user.
4. If `chrome-devtools-mcp` is available, review visually:

```python
navigate_page(url="https://<workspace_host>/sql/dashboardsv3/<dashboard_id>?edit=true")
take_snapshot()
```

5. Iterate based on user feedback:

```python
resume_chat(thread_id="<thread_id_from_step_2>", prompt="<follow-up>", options={"mode": "cookie"})
```

See `references/recipes.md` for more example builds.

---

## Self-Healing

- **`uv` not found**: install with `curl -LsSf https://astral.sh/uv/install.sh | sh`.
- **`databricks` CLI not found**: install per Databricks docs.
- **`databricks auth token` fails**: profile not configured; user must run `databricks auth login --profile <profile>` first.
- **Cookie mode 401/403**: DBAUTH cookie expired or missing. If using Chrome profile, ensure user is signed into Databricks in that Chrome session. If using env var, refresh `GENIE_CODE_DBAUTH`.
- **MCP tool returns "tool not implemented"**: Genie Code emitted a tool the MCP server doesn't handle yet. Rephrase the user's request to avoid the unsupported operation, or check `references/troubleshooting.md` for the unimplemented tool list.

Full diagnostic recipes in `references/troubleshooting.md`.

---

## Behavioral Guidelines

- If the user references a specific Lakeview dashboard or asks for dashboard editing, use `agent="dashboardAuthoringAgent"` and populate `context_id`.
- Otherwise use `agent="LakeAgent"` with `context_id=None`.
- Mode default lives in `~/.config/genie-code/config.toml` or `./.genie-code/config.toml`. If neither is set, ask the user once per session ("cookie or oauth?") and reuse for subsequent calls.
- After every dashboardAuthoringAgent turn, surface the `dashboard_diff` summary and offer a visual review via chrome-devtools-mcp.
- Never log token values or DBAUTH content. Confirm presence or absence, never display.

See `references/modes.md`, `references/recipes.md`, `references/troubleshooting.md` for deeper guidance.
