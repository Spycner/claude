# databricks plugin (research stub)

This plugin is a **research stub**. It contains no installable skills and no MCP servers. The directory exists to preserve the Genie Code reverse-engineering research notes that backed the original PR #52 (`feat(databricks): add Genie Code plugin and MCP server`), so a future Databricks Genie Code skill can start from the same investigation rather than re-doing it.

## Status

- No `skills/` directory: the original `genie-code` skill was removed.
- No `mcp-servers/` directory: the bundled Python MCP server was removed.
- Not registered in `.claude-plugin/marketplace.json` or `.agents/plugins/marketplace.json`.

## What is here

- `.claude-plugin/plugin.json` and `.codex-plugin/plugin.json`: minimal metadata, version `0.2.0`.
- `references/research/`: 12 MB of reverse-engineering notes covering the LakeAgent, the Dashboard Authoring Agent, sub-agents, tool handlers, prompt packs, and captured network traces. See `references/research/README.md` for the layout.

## Restoring the installable surface

The skill and MCP server code is preserved in git history at commit `6e509a4` (PR #52). To bring it back, branch from that commit, then merge or cherry-pick the parts you want.
