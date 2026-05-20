# pgoell-claude-tools

A personal Claude Code plugin marketplace.

## Plugins

### atlassian

Jira and Confluence skills for the Atlassian suite — search, create, update, and manage work items and pages.

**Skills:**
- `/pgoell-claude-tools:jira` — Search issues, create/update tickets, transition status, add comments, manage sprints
- `/pgoell-claude-tools:confluence` — Search pages, read documentation, create/update pages, browse spaces

### databricks

Drive Databricks Genie Code (LakeAgent and Dashboard Authoring Agent) from Claude via a bundled Python MCP server. Composes with `chrome-devtools-mcp` for visual dashboard review.

**Skills:**
- `/pgoell-claude-tools:genie-code` — chat with Databricks Genie Code (LakeAgent or dashboardAuthoringAgent), build/edit Lakeview dashboards, list and resume threads. Two auth modes: cookie (Chrome profile or `GENIE_CODE_DBAUTH`) and OAuth (`databricks auth token`).

### google-workspace

Gmail and Calendar skills for Google Workspace — powered by the `gws` CLI.

**Skills:**
- `/pgoell-claude-tools:gmail` — Search, read, send, and manage Gmail messages, drafts, labels, and filters
- `/pgoell-claude-tools:calendar` — View agenda, create and manage events, check availability, manage calendars

### research

Orchestrator-driven deep research with parallel cluster researchers, synthesis under independent review, and a writer pass that produces a polished report.

**Skills:**
- `/pgoell-claude-tools:research`: orchestrator-driven pipeline. Plans the work internally, spawns parallel deep-research subagents (one per topic cluster, iterative until saturation, single-md output with inline sources), synthesizes findings, and writes the final report. Two independent review gates (synthesis-reviewer for substance, writer-reviewer for prose) with unbounded review loops, periodic check-ins, and stall detection.

### writing

Multi-phase writing pipeline modelled on Katie Parrott's process. Interview, outline, throughline gate (≤10-word compression), draft, panel review (seven critics including steel-man preemption audit), and finishing passes for blog posts and longer-form prose. Format-aware: opt-in Smart-Brevity critic for memos, newsletters, and announcements. Also ships a dedicated Pyramid Principle skill for memos, recommendations, and analytical documents, and a Diátaxis-aware tech-doc skill for tutorials, how-to guides, references, and explanations.

**Skills:**
- `/pgoell-claude-tools:writing`: orchestrates the full pipeline with phase-selectable resume. For analytical formats (memo, briefing, announcement), dispatches to the pyramid skill for the outline phase and runs an analytical draft prompt. Ships with a default style guide that any project can override.
- `/pgoell-claude-tools:pyramid`: produces a pyramid-structured outline (greenfield) or restructures an existing draft into pyramid form. Five phases (intake, construct, audit, opener, render) with a parallel audit panel (MECE, So-What, Q-A Alignment, Inductive-Deductive).
- `/pgoell-claude-tools:tech-doc`: Diátaxis-aware technical writing pipeline. Drafts and reviews tutorials, how-to guides, API and CLI references, and conceptual explanations. Bundles curated subsets of the Microsoft Writing Style Guide and Google Developer Documentation Style Guide (selectable presets, with a merged `house` default). Six-phase pipeline (intake, outline, throughline, draft, panel, finishing) with seven-critic panel per quadrant.

## Installation

```
/plugin marketplace add pgoell/pgoell-claude-tools
/plugin install atlassian@pgoell-claude-tools
/plugin install databricks@pgoell-claude-tools
/plugin install google-workspace@pgoell-claude-tools
/plugin install research@pgoell-claude-tools
/plugin install writing@pgoell-claude-tools
```

## Setup

### Atlassian

The plugin supports two authentication paths:

**Option 1 — Atlassian CLI (recommended):**
```bash
brew install atlassian/tap/acli
acli auth login
```

**Option 2 — API token (for curl fallback):**

Generate a token at https://id.atlassian.com/manage/api-tokens, then set:

```bash
export ATLASSIAN_DOMAIN="your-domain"    # e.g. mycompany (for mycompany.atlassian.net)
export ATLASSIAN_EMAIL="you@company.com"
export ATLASSIAN_API_TOKEN="your-token"
```

### Databricks

**Required:**

- `databricks` CLI v0.230 or newer: https://docs.databricks.com/dev-tools/cli/install.html
- `uv`: `curl -LsSf https://astral.sh/uv/install.sh | sh`
- Workspace credentials: either `databricks auth login --profile <name>` (OAuth mode) or `GENIE_CODE_DBAUTH` env var (cookie mode).

**Recommended:**

- `chrome-devtools-mcp` plugin for visual dashboard review: `/plugin install chrome-devtools-mcp`
- Chrome browser signed into Databricks (lets cookie mode work without a manual env var).

**Configuration** (`~/.config/genie-code/config.toml` or `./.genie-code/config.toml`):

```toml
[default]
mode = "oauth"  # or "cookie"

[workspace]
host = "your-workspace.cloud.databricks.com"

[oauth]
databricks_cli_profile = "default"
endpoint_name = "agents_genie_code_prod"
```

The MCP server is launched via `uv run`; no manual `pip install` needed.

### Google Workspace

Install and authenticate the `gws` CLI:

```bash
npm i -g @anthropic-ai/gws
gws auth login -s gmail,calendar
```

For full setup instructions, see: https://github.com/googleworkspace/cli

### Research Plugin

No authentication required. The research plugin uses WebSearch and WebFetch which work out of the box.
