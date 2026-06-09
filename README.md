# pgoell-claude-tools

Plugin marketplace for Claude Code and Codex.

Bundles 12 plugins across Atlassian, Google Workspace, Databricks, agent-system management, design workflows, research, writing, terminal control, learning, and more.

## Skills at a glance

| Skill | Plugin | What it does |
|---|---|---|
| `jira` | `atlassian` | Search Jira issues, create and update tickets, transition workflows, comment, manage sprints, run bulk operations |
| `confluence` | `atlassian` | Search Confluence pages, read documentation, create and update pages, browse spaces |
| `gmail` | `google-workspace` | Triage inbox, search and read messages, send mail, manage drafts, labels, and filters via the `gws` CLI |
| `calendar` | `google-workspace` | View agenda, manage events, check availability, manage calendars via the `gws` CLI |
| `research` | `research` | Research complex topics and produce sourced reports |
| `writing` | `writing` | Draft, review, and finish long form prose |
| `pyramid` | `writing` | Structure analytical documents with the Pyramid Principle |
| `tech-doc` | `writing` | Draft, review, and finish technical documentation |
| `presentations` | `writing` | Design slide-deck content (audience, message, storyboard, per-slide briefs); hands off to `crafting-presentations` for HTML |
| `claude-codex-bridge` | `runtime-bridge` | Align Claude Code and Codex project files |
| `improving-instructions` | `agent-system-management` | Audit and improve agent instruction files |
| `capturing-session-learnings` | `agent-system-management` | Capture session learnings into the right instruction file |
| `creating-skills` | `agent-system-management` | Scaffold, iterate, pressure-test, and tune skills across the full lifecycle |
| `brainstorming` | `workbench` | Sequential Q&A to clarify design intent |
| `writing-spec` | `workbench` | Synthesize a design discussion into a spec doc |
| `writing-plans` | `workbench` | Turn approved specs into concrete implementation plans |
| `visualizing-options` | `workbench` | Browser-based visual companion for layout choices |
| `using-workbench` | `workbench` | Load Workbench skill rules and routing |
| `terse-mode` | `workbench` | Compact token-saving replies until disabled |
| `autopilot` | `workbench` | Ship a feature from brainstorm to PR using a project profile |
| `copilot` | `workbench` | Human-in-the-loop autopilot: you drive brainstorm and spec, the agent ships the rest |
| `verification-before-completion` | `workbench` | Require fresh verification evidence before completion claims |
| `test-driven-development` | `workbench` | Enforce test-first RED-GREEN-REFACTOR implementation discipline |
| `dispatching-parallel-agents` | `workbench` | Split independent tasks across concurrent agents |
| `subagent-driven-development` | `workbench` | Execute implementation plans with fresh agents and review gates |
| `systematic-debugging` | `workbench` | Root-cause investigation before proposing bug fixes |
| `crafting-html` | `workbench` | Reference gallery of 21 HTML artifact patterns |
| `crafting-design-systems` | `workbench` | Design systems (CSS variables, components, images) that theme HTML producers |
| `crafting-presentations` | `workbench` | Multi-slide HTML decks with deck navigation, slide-type catalog, and a presenter view |
| `exporting-decks-to-pptx` | `workbench` | Export a deck-stage HTML deck to a native, editable PowerPoint (.pptx) via python-pptx |
| `perfecting-presentations` | `workbench` | Strict deck review loop: hard gates plus adversarial judge panels until rounds come back dry |
| `tmux` | `terminal` | Control interactive terminal programs through isolated tmux sessions |
| `frontend-design` | `frontend-design` | Distinctive, production-grade frontend interfaces that avoid generic AI aesthetics |
| `emil-design-eng` | `frontend-design` | Emil Kowalski's design engineering philosophy: animation timing, component polish, UI craft |
| `playground` | `playground` | Interactive single-file HTML playgrounds with controls, live preview, and copy-out prompt |
| `databricks-core` | `databricks` | Databricks CLI, authentication, profile management, and data exploration |
| `databricks-docs` | `databricks` | Live `docs.databricks.com` lookups for product-surface questions |
| `quizzing-the-session` | `learning` | Get taught and quizzed on the current session's work until you demonstrably understand the problem, solution, and impact |
| `quizzing-a-topic` | `learning` | Get taught and quizzed on any topic or theme you name until you demonstrably understand it |

Skills are invoked from the host agent (Claude Code or Codex) using the fully qualified form `/<plugin>:<skill>`, for example `/atlassian:jira` or `/workbench:autopilot`.

## Installation

### Claude Code

```
/plugin marketplace add pgoell/pgoell-claude-tools
/plugin install atlassian@pgoell-claude-tools
/plugin install google-workspace@pgoell-claude-tools
/plugin install research@pgoell-claude-tools
/plugin install writing@pgoell-claude-tools
/plugin install runtime-bridge@pgoell-claude-tools
/plugin install agent-system-management@pgoell-claude-tools
/plugin install workbench@pgoell-claude-tools
/plugin install terminal@pgoell-claude-tools
/plugin install frontend-design@pgoell-claude-tools
/plugin install playground@pgoell-claude-tools
/plugin install databricks@pgoell-claude-tools
/plugin install learning@pgoell-claude-tools
```

### Codex

Add the marketplace from your shell, then install plugins from inside Codex:

```
codex plugin marketplace add pgoell/pgoell-claude-tools
codex
/plugins
```

In the `/plugins` picker, install any combination of `atlassian`, `google-workspace`, `research`, `writing`, `runtime-bridge`, `agent-system-management`, `workbench`, `terminal`, `frontend-design`, `playground`, `databricks`, and `learning`.

To pick up updates: `codex plugin marketplace upgrade pgoell-claude-tools` and re-install the affected plugins.

## Plugins

### atlassian

Jira and Confluence skills for Atlassian Cloud.

**Skills:**
- `/atlassian:jira`: Search issues, update tickets, transition status, add comments, and manage sprints.
- `/atlassian:confluence`: Search pages, read documentation, update pages, and browse spaces.

**Setup:**

The plugin supports two authentication paths.

**Atlassian CLI (recommended).**

```bash
brew install atlassian/tap/acli
acli auth login
```

**API token fallback.**

Generate a token at https://id.atlassian.com/manage/api-tokens, then export:

```bash
export ATLASSIAN_DOMAIN="your-domain"    # e.g. mycompany (for mycompany.atlassian.net)
export ATLASSIAN_EMAIL="you@company.com"
export ATLASSIAN_API_TOKEN="your-token"
```

### google-workspace

Gmail and Calendar skills for Google Workspace, powered by the `gws` CLI.

**Skills:**
- `/google-workspace:gmail`: Search, read, send, and manage Gmail messages, drafts, labels, and filters.
- `/google-workspace:calendar`: View agendas, manage events, check availability, and manage calendars.

**Setup:**

Install and authenticate the `gws` CLI:

```bash
npm i -g @anthropic-ai/gws
gws auth login -s gmail,calendar
```

Full setup instructions: https://github.com/googleworkspace/cli

### research

Research complex topics and produce sourced reports.

**Skills:**
- `/research:research`: Plan focused investigations, gather sources, synthesize findings, review conclusions, and write reports. Reports default to HTML at `reports/<topic-slug>-<YYYY-MM-DD>/report.html`; override per invocation with "give me a markdown research report".

### writing

Writing skills for prose, analytical structure, and technical documentation.

**Skills:**
- `/writing:writing`: Draft, review, and finish long form prose.
- `/writing:pyramid`: Structure memos, recommendations, briefings, and decision documents with the Pyramid Principle.
- `/writing:tech-doc`: Draft, review, and finish tutorials, how-to guides, references, and explanations.
- `/writing:presentations`: Design slide-deck content end to end (intake, message architecture, storyboard, per-slide drafts, critique panel). Produces a markdown `deck.md` you can hand off to `/workbench:crafting-presentations` for HTML rendering. Also runs in audit mode against an existing `deck.md`.

### runtime-bridge

Aligns Claude Code and Codex project configuration.

**Skills:**
- `/runtime-bridge:claude-codex-bridge`: Align project files, settings, hooks, agents, and plugin availability across the two runtimes.

### agent-system-management

Manage the host agent's instruction layer and skill layer: audit `AGENTS.md` / `CLAUDE.md`, capture session learnings, and scaffold or iterate on Claude Code / Codex skills.

**Skills:**
- `/agent-system-management:improving-instructions`: Audit and improve `AGENTS.md` and `CLAUDE.md` files.
- `/agent-system-management:capturing-session-learnings`: Capture session learnings into the right instruction file.
- `/agent-system-management:creating-skills`: Scaffold a new skill, iterate on an existing one with eval loops, pressure-test discipline skills, optimize triggering, or extract a skill from a conversation.

### workbench

Workbench skills for design dialogue, skill routing, and profile-driven feature shipping.

**Skills:**
- `/workbench:brainstorming`: Sequential question-and-answer loop to clarify design intent. Hands off to `writing-spec` when the design is ready to be written down.
- `/workbench:writing-spec`: Synthesize a design discussion into a spec doc, run a fresh-eyes self-review subagent, gate on user approval, then hand off to `workbench:writing-plans`.
- `/workbench:writing-plans`: Turn approved specs into concrete implementation plans.
- `/workbench:visualizing-options`: Browser-based visual companion for mockups, layout comparisons, wireframes, and architecture diagrams.
- `/workbench:using-workbench`: Load Workbench skill rules and routing.
- `/workbench:terse-mode`: Compact token-saving replies until disabled.
- `/workbench:autopilot`: Ship a feature from brainstorm to PR using a project profile. Profile schema documented in `plugins/workbench/skills/autopilot/references/profile-schema.md`.
- `/workbench:copilot`: Human-in-the-loop sibling of `autopilot`. You drive the brainstorm and spec by hand; the agent automates plan, implementation, docs, audit, and PR. Reads the same `.workbench/autopilot.md` profile as `autopilot`.
- `/workbench:verification-before-completion`: Require fresh verification evidence before completion claims.
- `/workbench:test-driven-development`: Enforce test-first RED-GREEN-REFACTOR implementation discipline.
- `/workbench:dispatching-parallel-agents`: Split independent tasks across concurrent agents.
- `/workbench:subagent-driven-development`: Execute implementation plans with fresh agents and review gates.
- `/workbench:systematic-debugging`: Enforce root-cause investigation before proposing bug fixes; bundles techniques for backward stack tracing, defense in depth, and condition-based waiting.
- `/workbench:crafting-html`: Reference gallery of 21 HTML artifact patterns vendored from `ThariqS/html-effectiveness`. Activates for standalone HTML artifacts not covered by specs, plans, brainstorm summaries, debug reports, or research reports.
- `/workbench:crafting-design-systems`: Create reusable design systems (CSS variables, components, images) at project (`.workbench/design-systems/<name>/`) or user (`~/.claude/workbench/design-systems/<name>/`) scope. HTML producers inline the active design system over their template defaults.
- `/workbench:crafting-presentations`: Multi-slide HTML decks with a deck-stage engine, slide-type catalog (Title, SectionDivider, Agenda, Content, Stat, Capabilities, Comparison, Quote, Timeline, Closing), speaker notes JSON island, and a two-window presenter view that syncs over `BroadcastChannel`, hides the deck's editing chrome while presenting, and lets you edit notes live as markdown and save them back into the deck file. Bundles a Deloitte/Databricks Alliance example deck.
- `/workbench:exporting-decks-to-pptx`: Convert a finished deck-stage HTML deck (single-file or multi-file) into a native, editable PowerPoint file via a freshly written python-pptx generator, with a dockerized LibreOffice render-verify loop and an optional per-slide adversarial verification panel.
- `/workbench:perfecting-presentations`: Strict review loop for existing HTML decks. Deterministic hard gates (overflow, overlap, contrast, broken assets, typography lint) plus four fresh-context judge dimensions (narrative, clarity, visual, delivery) whose findings must cite a per-project constitution (`.workbench/deck-standards.md`, seeded from a bundled default) and survive adversarial verification. Terminates on convergence: two consecutive dry rounds, with a rejected-findings ledger to prevent oscillation.

`writing-spec`, `writing-plans`, `brainstorming`, and `systematic-debugging` can emit either markdown or HTML; defaults are markdown for specs and plans, HTML for brainstorm summaries and debug reports. Override per invocation or via `.workbench/config.md` (schema in `plugins/workbench/skills/autopilot/references/config-schema.md`).

### terminal

Terminal skills for interactive command-line programs.

**Skills:**
- `/terminal:tmux`: Drive interactive CLIs, REPLs, debuggers, and experimental nested agent sessions through isolated tmux sessions.

**Setup:**

Install `tmux` on Linux, macOS, or WSL. Native Windows terminals are not supported.

### frontend-design

Distinctive, production-grade frontend interfaces with deep UI craft and animation discipline. Ports two complementary skills: Anthropic's `frontend-design` (Apache 2.0) for creative direction, and Emil Kowalski's [`emil-design-eng`](https://github.com/emilkowalski/skill) for design engineering and animation discipline (the upstream repo declares no license; included under the upstream author's public publishing intent). See `plugins/frontend-design/NOTICE` for full attribution.

**Skills:**
- `/frontend-design:frontend-design`: Build web components, pages, and applications with a clear aesthetic point of view (typography, color, motion, composition).
- `/frontend-design:emil-design-eng`: Review UI craft, choose easing curves and durations, build interaction-rich components, and audit motion.

### playground

Interactive single-file HTML playgrounds: control panel, live preview, and copy-out prompt. Ports Anthropic's `playground` plugin (Apache 2.0; see `plugins/playground/NOTICE` for attribution).

**Skills:**
- `/playground:playground`: Build self-contained HTML playgrounds for design, data, concept maps, document critique, diff review, or code architecture.

### databricks

Two Databricks skills. `databricks-core` is a verbatim port from [databricks/databricks-agent-skills](https://github.com/databricks/databricks-agent-skills) at commit `bf6d932`, governed by the upstream Databricks License (use restricted to Databricks Services; see `plugins/databricks/LICENSE-upstream` and `plugins/databricks/NOTICE`). `databricks-docs` is original authorship: it points the host agent at `docs.databricks.com` via WebFetch using a curated URL index. The plugin also preserves `references/research/` with 12 MB of Genie Code reverse-engineering notes; see `plugins/databricks/README.md` for details.

**Skills:**
- `/databricks:databricks-core`: CLI, authentication, profile management, data exploration, and bundles.
- `/databricks:databricks-docs`: Live `docs.databricks.com` lookups for product-surface questions (Apps, DABs, Jobs, Lakebase, Model Serving, Pipelines, Unity Catalog, SQL Warehouses, MLflow, serverless, secrets, workflows).

**Setup:**

`databricks-core` operates against your existing `databricks` CLI profiles; configure them with `databricks auth login` or by editing `~/.databrickscfg`. `databricks-docs` is read-only against `docs.databricks.com` and needs no auth.

### learning

Socratic teach-and-quiz skills that verify you deeply understand something. An original adaptation of Thariq Shihipar's "Learn Quiz" gist (see `plugins/learning/README.md` for attribution).

**Skills:**
- `/learning:quizzing-the-session`: Build a problem/solution/impact checklist from the current session and recent git activity, then teach and quiz you item by item to mastery.
- `/learning:quizzing-a-topic`: The same teaching engine pointed at any topic or theme you name, grounded in repo files when the topic is local code.

---

See `AGENTS.md` for repository structure, plugin layout, and contribution conventions.
