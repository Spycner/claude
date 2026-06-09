# pgoell-claude-tools

A plugin marketplace containing shared skills for Claude Code and Codex.

Claude Code and Codex use separate plugin metadata, but they must reuse the same skill directories. Do not duplicate `SKILL.md` files for another runtime.

## Repository Structure

```
AGENTS.md                   # Shared host-agent instructions (canonical file)
CLAUDE.md                   # Symlink to AGENTS.md, kept for Claude Code discovery
.claude-plugin/
  marketplace.json          # Claude Code plugin registry, lists all plugins with name, source, version
.agents/
  plugins/
    marketplace.json        # Codex plugin registry, lists all plugins with local source and policy metadata
plugins/
  <plugin-name>/
    .claude-plugin/
      plugin.json           # Claude Code plugin metadata
    .codex-plugin/
      plugin.json           # Codex plugin metadata, must set "skills": "./skills/"
    agents/                 # Optional, currently unused: forward-looking slot for agent definitions
      <agent-name>.md       #   that long-running, context-heavy skills could dispatch as subagents.
                            #   No plugin uses this directory yet; see the matching Design Decision.
    hooks/                  # Optional: hook scripts plus hooks.json (e.g. workbench session-start)
    skills/
      <service>/
        SKILL.md            # Shared skill definition, used by Claude Code and Codex
        <reference>.md      # Flat reference doc (legacy layout, see "Add reference docs")
        references/         # Subdirectory layout for skills with multiple bundled refs
          <reference>.md    #   (modern convention; preferred for new skills with >1 ref
                            #   or any bundled HTML/template files)
    references/             # Optional: non-skill research notes or scaffolding.
                            #   Valid both as a stub-state slot (unregistered plugin
                            #   without skills/ yet) and as a post-install slot
                            #   alongside skills/ (e.g. plugins/databricks/references/research/
                            #   survived the stub-to-installable transition).
                            #   See "Unregistered plugin directories" design decision.
    LICENSE                 # Required for ported plugins. Usually this repo's MIT
                            #   license; an Apache-2.0 upstream may be vendored
                            #   verbatim instead (e.g. plugins/terminal/LICENSE),
                            #   in which case the manifest license field matches.
                            #   A restricted-license upstream ships LICENSE-upstream
                            #   alongside MIT LICENSE (e.g. plugins/databricks/).
    NOTICE                  # Required for ported plugins: per-file upstream attribution
    README.md               # Required for ported plugins: human-facing overview with Credits section
tests/
  test-helpers.sh           # Shared test utilities (run_claude, assertions, auth checks)
  unit/                     # Skill recognition and capability tests
  integration/              # Live API tests (require auth)
  skill-triggering/         # Verify correct skill activates for prompts
    prompts/                # One .txt file per test case
    run-test.sh             # Test runner
containers/
  dev/                      # Podman-first dev container for running Claude or Codex
                            # with bypass permissions in host-isolated mode
    Dockerfile
    entrypoint.sh
    run-dev                 # wrapper script
    README.md               # usage and manual acceptance checklist
```

## Current Plugins

| Plugin | Version | Skills |
|--------|---------|--------|
| `atlassian` | 2.0.0 | `jira`, `confluence` |
| `google-workspace` | 1.0.0 | `gmail`, `calendar` |
| `research` | 2.1.1 | `research` (multi-agent pipeline with review gates) |
| `writing` | 1.7.0 | `writing`, `pyramid`, `tech-doc`, `presentations` |
| `runtime-bridge` | 0.1.0 | `claude-codex-bridge` |
| `agent-system-management` | 0.4.2 | `improving-instructions`, `capturing-session-learnings`, `creating-skills` |
| `workbench` | 0.18.0 | `brainstorming`, `writing-spec`, `writing-plans`, `visualizing-options`, `using-workbench`, `terse-mode`, `autopilot`, `copilot`, `verification-before-completion`, `test-driven-development`, `dispatching-parallel-agents`, `subagent-driven-development`, `systematic-debugging`, `crafting-html`, `crafting-design-systems`, `crafting-presentations`, `exporting-decks-to-pptx` |
| `terminal` | 0.1.0 | `tmux` |
| `frontend-design` | 0.2.1 | `frontend-design` (ported from Anthropic, Apache 2.0 upstream), `emil-design-eng` (ported from emilkowalski/skill, no upstream license declared) |
| `playground` | 0.1.0 | `playground` (ported from Anthropic, Apache 2.0 upstream) |
| `databricks` | 0.3.0 | `databricks-core` (ported from databricks/databricks-agent-skills under upstream Databricks License, restricted to Databricks Services), `databricks-docs` |
| `learning` | 0.1.0 | `quizzing-the-session`, `quizzing-a-topic` (adapted from the ThariqS "Learn Quiz" gist) |

## How to Develop a New Skill

> **Tip:** The `agent-system-management:creating-skills` skill automates this entire workflow. Invoke it for greenfield scaffolding, iteration with eval loops, pressure-testing discipline skills, description optimization, or extraction from a session. The steps below remain the canonical reference.

### 1. Plan the skill

- Identify the CLI tool or API the skill wraps
- Prefer invoking the CLI or `curl` directly in the skill (no wrapper scripts)
- Define operation tiers: Tier 1 (Read), Tier 2 (Write), Tier 3 (Manage/Admin)

### 2. Create the plugin structure

If adding to an existing plugin, just add a new `skills/<service>/` directory. For a new plugin:

```bash
mkdir -p plugins/<plugin-name>/.claude-plugin
mkdir -p plugins/<plugin-name>/skills/<service>
```

Create `.claude-plugin/plugin.json`:
```json
{
  "name": "<plugin-name>",
  "version": "0.1.0",
  "description": "<one-line description>",
  "author": { "name": "Pascal Göllner" },
  "license": "MIT",
  "keywords": ["<relevant>", "<keywords>"]
}
```

Create `.codex-plugin/plugin.json` for the same plugin. It must point to the existing skills directory:

```json
{
  "name": "<plugin-name>",
  "version": "<same-version-as-claude-plugin>",
  "description": "<one-line description>",
  "author": { "name": "Pascal Göllner" },
  "license": "MIT",
  "keywords": ["<relevant>", "<keywords>"],
  "skills": "./skills/",
  "interface": {
    "displayName": "<Plugin Display Name>",
    "shortDescription": "<short human-facing description>",
    "longDescription": "<long human-facing description>",
    "developerName": "Pascal Göllner",
    "category": "Productivity",
    "capabilities": ["Interactive", "Write"],
    "defaultPrompt": ["<starter prompt>"],
    "screenshots": []
  }
}
```

Register the plugin in both marketplaces:

- `.claude-plugin/marketplace.json` for Claude Code
- `.agents/plugins/marketplace.json` for Codex (each plugin entry must include `interface.displayName` and `interface.shortDescription` so the picker label is explicit)

Marketplace registration is the gate between a stub directory and an installable plugin. If the plugin has no `skills/` yet (research notes, scaffolding, or a placeholder for future work), skip registration: a `plugins/<plugin>/` directory without a marketplace entry is a valid stub state. See the "Unregistered plugin directories" design decision below.

### 3. Write SKILL.md

This is the most important file. Both Claude Code and Codex read it to understand the skill. Follow this structure:

```markdown
---
name: <service>
description: Use when the user wants to <what this skill does>
---

# <Service> Skill

<One-line description>

---

## Auth Approach
<Lazy auth: do not check upfront, just run the command. Diagnose auth failures in Self-Healing>

## Tool Preference
<What tools to use and in what priority order>

## Operations: Tier 1 (Read)
<Read-only operations with exact commands>

## Operations: Tier 2 (Write)
<Create/update operations with exact commands>

## Operations: Tier 3 (Manage)
<Admin/destructive operations with exact commands>

## Self-Healing
<What to do when commands fail (help flags, schema inspection, error codes)>

## Behavioral Guidelines
<How Claude should infer intent and pick operations>
```

Key principles:
- **Exact commands.** Show copy-pasteable commands, not pseudocode.
- **Auth is lazy.** Attempt the operation first, diagnose auth failures in Self-Healing. Never print credential values.
- **Prefer helpers over raw API.** If the CLI has convenience commands, use them.
- **Confirm before destructive ops.** Always ask the user before delete operations.
- **Platform-aware tool names.** When a skill uses orchestration tools, include a short mapping for Claude Code and Codex instead of hardcoding one runtime only.
- **Self-healing is critical.** Tell the host agent how to debug when things go wrong.

### 4. Add reference docs

Create reference files for complex query syntaxes, format references, recipe collections, or HTML templates. Reference them from SKILL.md with `See <filename>` or `See references/<filename>`.

Two layouts coexist; pick by skill shape:

- **Flat layout** (`<service>-<topic>.md` next to `SKILL.md`): legacy convention, used by `gmail`, `calendar`, `jira`, `confluence`, `claude-codex-bridge`, `research`, and `databricks-core` (verbatim ports inherit the upstream layout, even when it is flat; do not refactor a port into the subdirectory layout because that breaks the per-file `NOTICE` mapping). Acceptable for skills with one or two short reference files.
- **`references/` subdirectory** (`references/<topic>.md`): modern convention, used by every workbench skill, `agent-system-management/*`, `frontend-design/*`, `crafting-html`, `improving-instructions`, `databricks-docs`. Required when a skill bundles HTML templates, multiple long references, or any non-markdown assets. Prefer this for new skills.

Examples (flat): `jql-recipes.md`, `gmail-search-recipes.md`, `calendar-recipes.md`.
Examples (subdirectory): `references/config-schema.md` (autopilot), `references/spec-template.html` (writing-spec), `references/quality-criteria.md` (improving-instructions).

### 5. Write tests

Follow the existing patterns in `tests/`:

**Unit tests** (`tests/unit/test-<plugin>-<service>-skill.sh`, or `tests/unit/test-<service>-skill.sh` for single-skill plugins where `<plugin>` and `<service>` would be the same word):
- Verify skill loads and is recognized
- Check it describes its capabilities
- Verify it mentions the correct tool
- Check supporting references are mentioned
- Pattern: filesystem checks (`jq`, `grep`, `[ -s "$f" ]`) for structure; `run_claude "<prompt>" | assert_contains "<pattern>"` only when actual model output must be exercised. See the "Prefer filesystem-check unit tests" decision below.
- Note on naming: the version-bump lockstep (Design Decisions) uses the glob `test-<plugin>-*-skill.sh`, which matches the long form (e.g. `test-workbench-autopilot-skill.sh`) used by `workbench`, `frontend-design`, and `agent-system-management`. Single-skill plugins like `playground`, `terminal`, `runtime-bridge` use the short form (`test-playground-skill.sh`), where `<plugin>` and `<service>` collapse to one word; the glob still matches. The `writing` plugin is an exception: it is multi-skill but its unit tests use the short form (`test-writing-skill.sh`, `test-pyramid-skill.sh`, `test-tech-doc-skill.sh`), so the `test-writing-*-skill.sh` glob matches only `test-writing-skill.sh`. The `writing` plugin does not pin version in its unit tests today, so the gap is dormant; if you ever add a version pin to a `writing` skill test, either rename the test to the long form (`test-writing-pyramid-skill.sh`) or widen the lockstep check for that plugin.

**Integration tests** (`tests/integration/test-<service>-integration.sh`):
- Require live auth (skip gracefully if not available)
- Test the full CRUD lifecycle: create → read → update → delete
- Use `run_claude_logged` + `show_tools_used` for diagnostics
- Clean up after yourself (delete test resources)

**Skill triggering tests** (`tests/skill-triggering/prompts/<service>-<action>.txt`):
- One natural-language prompt per file
- Run with: `PLUGIN_DIR=plugins/<plugin> bash tests/skill-triggering/run-test.sh <skill-name> tests/skill-triggering/prompts/<file>.txt`
- For negative routing (skill MUST NOT trigger for a given prompt), use `--not`: `PLUGIN_DIR=plugins/<plugin> bash tests/skill-triggering/run-test.sh --not <skill-name> tests/skill-triggering/prompts/<file>.txt`. Use this when two skills in the same plugin sit close enough that a prompt could plausibly route either way (e.g. `writing:writing --format talk` vs `writing:presentations`, where a "write me a talk" prompt should land on the prose pipeline not the deck pipeline).

**Auth helpers.** Add a `check_<tool>_auth()` function to `tests/test-helpers.sh` if your tool has its own auth mechanism.

**Filesystem-check tests use inline echo, not pass/fail helpers.** `tests/test-helpers.sh` exports `run_claude`, `run_claude_logged`, `assert_contains`, `assert_not_contains`, `assert_order`, `assert_used_atlassian_tool`, `show_tools_used`, and the auth checks (`check_acli_auth`, `check_env_auth`, `check_any_auth`, `check_gws_auth`). It does **not** export `pass` or `fail` functions despite the intuitive naming. The canonical filesystem-check shape uses inline `echo "  [PASS] ..."` / `echo "  [FAIL] ...; exit 1"` (see `tests/unit/test-workbench-autopilot-skill.sh` and `tests/unit/test-presentations-skill.sh`). Defining local `assert_*` wrappers that call `pass`/`fail` produces command-not-found errors at run time; either inline the echo or add new helpers to `tests/test-helpers.sh` in the same commit.

### 6. Update README.md and AGENTS.md

When adding a new plugin, the documentation lockstep set is five-or-six sites: four-or-five in `README.md` and one in `AGENTS.md`. (1) `README.md` "Skills at a glance" table at the top. (2) `README.md` per-plugin section under `## Plugins`. (3) `README.md` "Installation > Claude Code" `/plugin install` list. (4) `README.md` "Installation > Codex" `/plugins` picker line. (5) `README.md` per-plugin `**Setup:**` subsection inside the plugin's `## Plugins` block, but only if the plugin needs setup; plugins with no setup get no Setup subsection (its absence is the signal). (6) `AGENTS.md` "Current Plugins" table (CLAUDE.md is a symlink, so it updates automatically). The standalone `## Setup` section that existed before the 2026-05 README rewrite is gone; setup now folds into each plugin's section so an installer reads one block per plugin.

This is separate from, and additional to, the version-bump lockstep documented under Design Decisions ("Every plugin change bumps version"). Adding a new plugin requires both lockstep sets in the same commit: the five-or-six docs sites here, plus the five version-pinned sites listed there.

When adding only a new skill to an existing plugin, the "Skills at a glance" table and per-plugin section are usually the only required edits, plus two sites that drift silently when missed: the plugin's own `plugins/<plugin>/README.md` `## Skills` list (if the README has one), and, for workbench skills specifically, the parenthetical skill enumeration in the "One skill per service, one plugin per product family" Design Decision below (it names every workbench skill; the copilot and exporting-decks-to-pptx additions both had to update it). The workbench plugin README's skills list had drifted eight skills behind before the 2026-06 exporting-decks-to-pptx PR brought it current; nothing tests these two sites, so check them by hand.

## Running Tests

```bash
# Unit tests (no auth required)
# Multi-skill plugins (workbench, frontend-design, agent-system-management):
PLUGIN_DIR=plugins/<plugin> bash tests/unit/test-<plugin>-<service>-skill.sh
# Single-skill plugins (playground, terminal, runtime-bridge, etc.):
PLUGIN_DIR=plugins/<plugin> bash tests/unit/test-<service>-skill.sh
bash tests/unit/test-skill-frontmatter-yaml.sh

# Codex plugin structure
bash tests/unit/test-codex-plugin-structure.sh

# Integration tests (requires live auth)
PLUGIN_DIR=plugins/<plugin> bash tests/integration/test-<service>-integration.sh

# Skill triggering
PLUGIN_DIR=plugins/<plugin> bash tests/skill-triggering/run-test.sh <skill> tests/skill-triggering/prompts/<prompt>.txt
PLUGIN_DIR=plugins/<plugin> bash tests/skill-triggering/run-test.sh --not <skill> tests/skill-triggering/prompts/<prompt>.txt
```

This repo has no GitHub Actions or other automated CI; the commands above are the entire gate. A regression that breaks a unit test surfaces only when a contributor runs the affected test locally, so verify the relevant per-plugin tests pass before pushing. A precedent: `plugins/workbench/NOTICE` was accidentally deleted in commit `0218de8` via what looked like a GitHub UI click-delete (default commit message `Delete <path>`); five workbench unit tests went red and stayed red for eight days because nothing observed the failure until the next local run. When the autopilot workflow reaches "Step 8: CI loop", expect `gh pr view <pr> --json statusCheckRollup` to return an empty array, which the loop treats as immediately green.

## Design Decisions

- **No wrapper scripts.** Skills use the underlying CLI directly (`gws` for Google Workspace) or raw `curl` with env-var auth (for Atlassian). This keeps each skill self-contained, with no extra bash layer to maintain, debug, or ship with the plugin.
- **One skill per service, one plugin per product family.** Gmail and Calendar are both under `google-workspace`. Jira and Confluence are both under `atlassian`. Workbench is the exception: its skills (`brainstorming`, `writing-spec`, `writing-plans`, `visualizing-options`, `using-workbench`, `terse-mode`, `autopilot`, `copilot`, `verification-before-completion`, `test-driven-development`, `dispatching-parallel-agents`, `subagent-driven-development`, `systematic-debugging`, `crafting-html`, `crafting-design-systems`, `crafting-presentations`, `exporting-decks-to-pptx`) are peer workflow and session-control capabilities rather than separate services, so they ship together but stay split so the host agent (or autopilot) can invoke each phase independently. Terminal capabilities that depend on local Unix tools belong in the `terminal` plugin, so Windows users can skip them unless they use WSL.
- **Every plugin change bumps version.** Any change to a plugin's skills, metadata, docs, hooks, agents, or tests must bump that plugin's version in lockstep across every site that records the version. New skills are minor bumps; fixes, docs, tests, and description changes are patch bumps unless they change behavior materially. The full lockstep set is: (1) `.claude-plugin/plugin.json` (only when this file already declares a `version` field; the `atlassian` and `google-workspace` plugins intentionally omit it because Claude Code reads their version from `.claude-plugin/marketplace.json`), (2) `.codex-plugin/plugin.json` (always required; every Codex manifest in this repo declares `version`), (3) the `version` field of the plugin's entry in `.claude-plugin/marketplace.json`, (4) the plugin's row in the AGENTS.md "Current Plugins" table (CLAUDE.md is a symlink to AGENTS.md, so it updates automatically), and (5) every per-plugin test under `tests/unit/test-<plugin>-*-skill.sh` that already pins the version with a `jq -e '.version == "X.Y.Z"'` assertion or a literal grep. Items (1) and (5) are plugin-by-plugin: only some plugins pin in `.claude-plugin/plugin.json` (currently every plugin except `atlassian` and `google-workspace`), and only some pin in unit tests (currently `workbench`, `frontend-design`, `terminal`, `playground`, `agent-system-management`, `databricks`, `learning`); plugins without an existing pin are exempt from that item until a pin is added. To check, run `grep -lF "<old-version>" tests/unit/test-<plugin>-*-skill.sh` (the `grep -l 'version == '` shortcut misses tests that pin with a `[ "$VAR" = "X.Y.Z" ]` shell idiom, e.g. `test-workbench-systematic-debugging-skill.sh`). After bumping, also run `grep -nP '\b[0-9]+\.[0-9]+\.[0-9]+\b' tests/unit/test-<plugin>-*-skill.sh` to surface any test that still pins a stale version from a prior bump that was missed in lockstep, then sync those to the new version in the same commit. The Codex marketplace entry (`.agents/plugins/marketplace.json`) does not record a version field. The bump is per-PR (per ship unit), not per-commit: with `Squash: yes` set in `.workbench/autopilot.md`, multiple commits on the same feature branch merge as one commit at one version, so a follow-up commit on a branch that already bumped does not bump again. Before bumping, run `git diff <base>..HEAD -- plugins/<plugin>/.claude-plugin/plugin.json plugins/<plugin>/.codex-plugin/plugin.json .claude-plugin/marketplace.json AGENTS.md` to see whether this PR has already moved the version. The next version number can also be claimed by a parallel in-flight branch: check open PRs and local worktrees (`git worktree list`, then inspect each worktree's uncommitted diff) for another branch bumping the same plugin (precedent: `feat/perfecting-presentations-skill` and `feat/deck-to-pptx-skill` both targeted workbench 0.18.0 in 2026-06); whichever ships second re-bumps before merge. With no CI to catch a missed lockstep site (see the Running Tests section), forgetting any one of these members either breaks the next local unit-test run or, worse, ships a misleading version number to consumers reading the table.
- **`tests/unit/test-codex-plugin-structure.sh` pins the plugin count and the plugin name list.** Two coupled assertions: a `plugin_count -eq N` literal and a `for plugin in <space-separated names>` list. Adding or removing a plugin requires updating both in the same commit; updating just one leaves the suite either red or asserting a stale set. The for-loop list follows marketplace-insertion order (the same order the plugin entries appear in `.agents/plugins/marketplace.json`), not alphabetical order; append new plugins at the tail and verify with `grep -n 'for plugin in' tests/unit/test-codex-plugin-structure.sh` before assuming a position. Note: this is a separate pin from the per-plugin version pins in the version-bump lockstep above. The version pins assert "this plugin is at version X.Y.Z"; the structure pin asserts "this repo contains exactly these N plugins". A plugin add/remove touches both, but a version bump only touches the version pin.
- **Skills are self-contained.** Each SKILL.md should contain everything the host agent needs to use the service without reading other files (except reference docs it explicitly links to).
- **Codex compatibility is metadata plus platform mapping.** Codex manifests live beside Claude Code manifests and point at the same `skills` directory. Platform-specific tool differences belong in the shared skill body as a mapping, not in duplicated skill files.
- **Workflow skills are execution protocols.** When a user invokes a workflow skill such as `workbench:autopilot`, follow its required sequence as an operational workflow, including branch setup, brainstorm, spec, plan, pressure-test, implementation, and verification where applicable. Do not treat the skill body as informal guidance.
- **Skill invocation syntax in docs is `/<plugin>:<skill>`, not `/<marketplace>:<skill>`.** Claude Code resolves skill calls by `plugin:skill` (e.g., `/atlassian:jira`, `/workbench:autopilot`), not by marketplace name. The marketplace name `pgoell-claude-tools` appears only as the `@pgoell-claude-tools` suffix in `/plugin install <plugin>@<marketplace>` lines and in `codex plugin marketplace add pgoell/pgoell-claude-tools`; it cannot prefix a skill call. README and any user-facing doc that shows skill invocation examples MUST use the fully qualified `/<plugin>:<skill>` form: it always works, regardless of what other marketplaces the user has installed. The short form `/<skill>` (e.g., `/jira`) works only when the user's installed set has no other skill with the same name, which the README cannot reason about; do not teach it. The 2026-05 README rewrite fixed 33 wrong `/pgoell-claude-tools:<skill>` examples that had accumulated from earlier copy-paste cycles. When auditing future doc edits run `grep -nE '/pgoell-claude-tools:[a-z]' README.md` (expected: no matches) and `grep -nE '/(atlassian|google-workspace|research|writing|runtime-bridge|agent-system-management|workbench|terminal|frontend-design|playground|databricks):' README.md` (expected: at least one match per plugin that has skills the doc references).
- **Prefer filesystem-check unit tests over `run_claude` for structure verification.** When verifying a skill exists, has valid frontmatter, references its bundled docs, or hits required headings, use `jq`, `grep`, `head`, and `[ -s "$f" ]` (see `tests/unit/test-workbench-autopilot-skill.sh` for the canonical shape). Filesystem checks are fast, deterministic, and run without spawning Claude Code subprocesses; the majority of `tests/unit/*.sh` are now filesystem-only. Reserve `run_claude` for cases where actual model output must be exercised (semantic recognition, behavioral phrasing checks); when used, it runs Claude in a subprocess with `--dangerously-skip-permissions`. Integration tests always use `run_claude_logged` with `--output-format stream-json` to capture tool usage.
- **Per-artifact format, path, and design-system resolution via `.workbench/config.md`.** Four workbench skills (`writing-spec`, `writing-plans`, `brainstorming`, `systematic-debugging`) consult an optional `.workbench/config.md` at repo root for per-artifact output format (`md` or `html`), output directory, and active design system. Format resolution order is per-prompt override, then `.workbench/config.md` `## Output formats`, then per-skill hard-coded default. Path resolution order is `.workbench/autopilot.md` `## Documentation paths` (specs and plans only), then `.workbench/config.md` `## Output paths`, then per-skill default. Design-system resolution order is per-prompt override, then `.workbench/config.md` `## Design system` `Name:`, then no override (template defaults render unchanged). Format, path, and design system resolve independently. Per-skill defaults are: specs `md` in `.workbench/specs`, plans `md` in `.workbench/plans`, brainstorm summaries `html` in `.workbench/brainstorms`, debug reports `html` in `.workbench/debug-reports`. `research:research` opts out of `.workbench/config.md` for format and path (its hard-coded default is HTML, `reports/<topic-slug>-<YYYY-MM-DD>/report.html`) but does honor `## Design system` like the other HTML producers. `crafting-html` consults only `## Design system`, not `## Output formats` or `## Output paths`. Full schema in `plugins/workbench/skills/autopilot/references/config-schema.md`.
- **HTML artifact output is a first-class skill mode.** Five skills (`writing-spec`, `writing-plans`, `brainstorming`, `systematic-debugging`, `research:research`) ship an `## Output Format` section plus a `references/<artifact>-template.html` and can emit either markdown or HTML. The `workbench:crafting-html` skill is the catch-all for standalone HTML artifacts not covered by another skill (PR walkthroughs, slide decks, status reports, design prototypes, custom editing interfaces); it bundles 21 reference files under `references/` and instructs lazy reads. Each of the five HTML-producing skills cross-references `crafting-html` for out-of-scope artifact types. To add a new HTML producer, follow the same pattern: an `## Output Format` section with the format and path resolution order, a bundled `references/<artifact>-template.html`, a cross-reference to `crafting-html` for out-of-scope artifact types, an inline `### Applying a design system` block that documents the design-system resolution and inlining protocol (matching the six existing producers; do not cross-reference `crafting-design-systems` for the protocol because the protocol must live where the producer needs it), and per-skill em-dash lint coverage over `references/*.html`. The companion skill `workbench:crafting-design-systems` supplies the optional theming layer (CSS variables, components, images) that any of the seven HTML producers (the five plus `crafting-html` plus the multi-file `crafting-presentations`) inlines into its artifact when a design system is configured via per-prompt override or `.workbench/config.md` `## Design system`. Templates do not share a canonical CSS variable schema; each producer template declares its own set in its `:root` block, and `crafting-html`'s 21 reference templates each carry their own variables. The per-template variable inventory for the five producer templates lives in `plugins/workbench/skills/crafting-design-systems/SKILL.md`; the inventory deliberately does not enumerate `crafting-html`'s reference set (the active variable surface depends on which reference the host agent chose). If you rename, add, or remove a CSS variable in any of the five producer `references/<artifact>-template.html` `:root` blocks, update the inventory in `crafting-design-systems` in the same commit.
- **Multi-file HTML producers are a distinct shape.** `workbench:crafting-presentations` is the first producer that emits a multi-file deck (slide HTMLs, `slides.css`, a deck-stage runtime JS, a presenter sidecar) instead of a single inline-everything HTML file. It does not ship an `## Output Format` section (format is fixed to HTML; there is no markdown alternative) and does not consult `.workbench/config.md` `## Output formats`. It does honor `## Design system` like the other HTML producers, with the same inline resolution protocol. When adding a future multi-file producer, mirror this shape rather than the single-file `## Output Format` shape: ship the runtime as bundled references, declare its CSS variable surface in `crafting-design-systems`' per-template inventory, and cross-reference `crafting-html` for adjacent single-file artifact types.
- **Em-dash lint and instruction text:** when a markdown file needs to describe the forbidden em-dash or en-dash characters (e.g., a SKILL.md that explains the no-em-dash rule), reference them by Unicode codepoint (`U+2014`, `U+2013`) instead of including the literal characters. Otherwise the em-dash lint matches on the description itself. Per-skill unit tests scan the entire `$SKILL_DIR` subtree with `grep -rqP '[\x{2014}\x{2013}]'`, which means bundled `references/*.html` template files, vendored `references/**/*.css`, and vendored `references/**/*.js` (e.g. code comments in a ported runtime) all need em-dash and en-dash substitution. In HTML body copy, the entity forms `&mdash;`, `&#8212;`, `&ndash;`, `&#8211;` are permitted as the escape hatch (the lint matches the raw codepoints, not the entities). CSS and JS code comments have no entity escape; substitute the codepoint at port time. Root-level files (`README.md`, `AGENTS.md`, and per-plugin `plugins/*/README.md`) are NOT covered by the per-skill lint. Run `grep -nP '[\x{2014}\x{2013}]' README.md AGENTS.md plugins/*/README.md` before committing user-facing doc edits. Two em-dashes in the Atlassian Setup section survived in the root README from before this lint gap was documented; the 2026-05 README rewrite removed them.
- **Verbatim ports must substitute em-dashes/en-dashes inline at port time.** When porting a SKILL.md verbatim from an upstream that contains em-dashes (U+2014) or en-dashes (U+2013), substitute them before committing. The five substitution rules used to date across `emil-design-eng`, `playground`, and `databricks-core` ports are: (1) sentence-pause `<space>U+2014<space>` becomes `, ` (comma + space); (2) labelled-bullet `**name** U+2014 description` becomes `: ` (colon + space) so the labelled-list feel is preserved; (3) numeric-range `<digit>U+2013<digit>` (e.g., `0-24px`, `1-500`) becomes `-` (hyphen); (4) heading-internal `## Title U+2014 Subtitle` (em-dash inside a markdown heading separating a title from a subtitle) becomes `: ` (colon + space), e.g., `## Data Exploration: Use AI Tools`; (5) code-block-internal `# Label U+2014 Description` (em-dash inside a fenced code block, typically a bash comment) becomes `: ` (colon + space), e.g., `# Unity Catalog: POSITIONAL arguments`. The global writing-style rule on the user side also allows periods, semicolons, parentheses, or sentence splits if the context calls for them. Record the substitution rules that were actually applied for a given port explicitly in the plugin's `NOTICE` so a later upstream diff is reproducible. The `emil-design-eng`, `playground`, and `databricks` ports are the canonical examples; see `plugins/frontend-design/NOTICE`, `plugins/playground/NOTICE`, and `plugins/databricks/NOTICE` for the exact wording. The Anthropic `frontend-design` port did not need a substitution clause because the upstream contained no em-dashes or en-dashes; if a future re-port encounters them, add the clause to its `NOTICE` block. Right-arrow `→` (U+2192) and other non-em-dash special punctuation are not flagged by the lint and are preserved verbatim.
- **SKILL.md frontmatter `description:` must not contain a colon-space (`: `) unless the whole value is quoted.** `tests/unit/test-skill-frontmatter-yaml.sh` parses frontmatter as strict YAML, and an unquoted scalar containing `: ` (for example `description: Use when X. Examples: "..."`) is read as a nested mapping and fails with `mapping values are not allowed here`. Rephrase to drop the mid-value colon (`Examples:` becomes `For example`), or quote the entire value. Embedded double-quotes inside an unquoted value are fine as long as the value does not start with a quote. This lint auto-covers every `plugins/**/SKILL.md`; run `bash tests/unit/test-skill-frontmatter-yaml.sh` after writing any new SKILL.md. The `learning:quizzing-a-topic` description hit this during the 0.1.0 add and was fixed by replacing `Examples:` with `For example`.
- **Agents for long-running, context-heavy operations (forward-looking, currently unused).** When a skill's execution would consume significant context (e.g. dozens of web pages), the intended layout is to define an agent in the plugin's `agents/` directory and have the skill dispatch it via the host subagent tool so the agent runs in an isolated subagent context. No plugin in this repo currently uses an `agents/` directory; the `research` plugin orchestrates subagents from prompt templates inside `skills/research/` instead. Treat `agents/` as a reserved, documented slot rather than a populated convention. Use skills for everything else.
- **Lazy auth, never print secrets.** Skills do not check authentication upfront. They attempt the operation and only diagnose auth issues when commands fail (in Self-Healing). Credentials, tokens, and API keys are NEVER printed or echoed. Only check whether they are set (`test -n`), never display values.
- **Upstream-port attribution.** When a plugin ports a skill from a non-MIT upstream (e.g. Anthropic's Apache 2.0 `frontend-design` and `playground`), the plugin directory must ship `LICENSE` (this repo's MIT license), `NOTICE` (per-file upstream attribution and original license), and a plugin-level `README.md` with a Credits section linking back to the source. Normalize the SKILL.md frontmatter to drop upstream-only fields like `license:`. Capture the upstream commit SHA in `NOTICE` and, when fetching upstream content via `gh api` during the port, include `?ref=<commit-sha>` so the fetch matches the SHA recorded in `NOTICE` (otherwise the fetch goes against the upstream's default branch and may drift). See `plugins/frontend-design/` and `plugins/playground/` for the canonical layout. Manifest `license:` declares MIT in both cases because the plugin's original additions (SKILL.md normalization, NOTICE, README) are MIT-licensed; the Apache-2.0 upstream files remain under their own license as recorded in `NOTICE`.
- **Upstream-port attribution, vendored-LICENSE variant.** A second Apache-2.0-upstream shape exists: vendor the upstream LICENSE verbatim at `plugins/<plugin>/LICENSE` and declare that license in the manifest, instead of overlaying MIT. The `terminal` plugin uses this shape (Apache-2.0 LICENSE vendored from `mitsuhiko/agent-stuff`, manifest declares `"license": "Apache-2.0"`). Use this when the upstream license already permits redistribution with attribution and the plugin's original additions (e.g. inline command patterns replacing helper scripts) are released under the same license as a courtesy. `NOTICE` still records the per-file mapping. The Credits-section requirement in `README.md` still applies. Pick the overlay-MIT shape when you want the original additions explicitly under MIT (frontend-design, playground); pick the vendored-LICENSE shape when keeping a single license across original and ported files simplifies attribution (terminal). Both shapes are valid; document the choice in `NOTICE` so a later re-port can mirror the convention.
- **Upstream with no declared license.** If the upstream repo declares no license (GitHub API reports `license: null`, no `LICENSE` file), do not silently relicense and do not refuse to port. Vendor verbatim and disclose the license absence explicitly in `NOTICE`: capture the upstream commit SHA at port time, document the upstream author's publishing intent (e.g. "distributed via `npx skills add <user>/<repo>` for AI agent use, per its README"), and state that all rights to the original text remain with the upstream author. Note that adaptations (such as the em-dash substitution) are mechanical and add no original authorship. The `emil-design-eng` port is the canonical example.
- **Upstream with restricted-license upstream (use-scope restriction).** When porting from an upstream whose license restricts use to a particular service or context (e.g., the Databricks License, which restricts use to "in connection with Databricks Services"), vendor the upstream LICENSE verbatim at `plugins/<plugin>/LICENSE-upstream` and ship MIT at `plugins/<plugin>/LICENSE` for original work in the plugin. `NOTICE` must capture the upstream commit SHA, the upstream license name and its key restriction stated in one sentence, the substitution rules applied at port time, the per-file mapping (upstream path -> local path), and an explicit statement of which files are original authorship under MIT. The plugin-level `README.md` Credits section calls out the restriction so users installing the plugin understand the constraint they accept. The `databricks` plugin (`databricks-core` skill, ported from `databricks/databricks-agent-skills` at commit `bf6d932`) is the canonical example. This pattern differs from the standard Apache 2.0 upstream-port pattern in three ways: (1) the upstream LICENSE is vendored alongside MIT instead of replacing it, (2) NOTICE states the use restriction in plain English so it survives a casual readthrough, and (3) the dependent-skill cross-references in the upstream skill body are removed during the port if those dependent skills are not also ported (otherwise the body would point at skills that do not exist in this marketplace). The plugin manifest `license:` field (in both `.claude-plugin/plugin.json` and `.codex-plugin/plugin.json`) describes the license that applies to the plugin's original work only, not to the vendored upstream files; the databricks plugin therefore declares `"license": "MIT"` in both manifests even though the bulk of the bytes are governed by the upstream Databricks License. Do not change the manifest field to claim the upstream license, and do not omit MIT from the manifest just because most of the plugin is vendored: the manifest field documents the license for original additions, and the restriction on vendored files is documented in `NOTICE` and `LICENSE-upstream`.
- **Idea adaptation ("steal like an artist") is distinct from a verbatim port.** When a plugin reimplements a concept from an upstream (for example an unlicensed gist) in this repo's own words without vendoring any upstream text, it is original MIT work, not a port. Ship MIT `LICENSE` and a plugin `README.md` with an `## Inspiration` (or Credits) section that links the source and names the author, but do NOT ship `NOTICE` or `LICENSE-upstream`: there are no verbatim files to map, and the per-file mapping plus em-dash substitution scaffolding (which the three verbatim-port decisions above all assume) does not apply. The `learning` plugin (`quizzing-the-session`, `quizzing-a-topic`), adapted from Thariq Shihipar's "Learn Quiz" gist, is the canonical example: the SKILL.md bodies are rewritten, not copied, so no per-file attribution is owed. Choose this shape only when you genuinely rewrote the content; the moment you paste upstream text it becomes a port and the verbatim-port rules (vendored LICENSE or LICENSE-upstream, per-file `NOTICE`, em-dash substitution clause) apply instead.
- **Unregistered plugin directories are a valid stub state.** A directory under `plugins/<plugin>/` can exist with `.claude-plugin/plugin.json` and `.codex-plugin/plugin.json` but without being listed in `.claude-plugin/marketplace.json` or `.agents/plugins/marketplace.json`. The structure test (`tests/unit/test-codex-plugin-structure.sh`) iterates only over the marketplace's plugin list, so an unregistered directory is never inspected and never fails the test. Use this shape when retaining research notes, reference material, or future-skill scaffolding that should live in `plugins/` but is not yet installable. No plugin currently holds this shape; the `databricks` plugin held it historically (from PR #53 until `0.3.0`) before becoming installable. Its `references/research/` directory (12 MB of Genie Code reverse-engineering notes) survived the stub-to-installable transition and demonstrates a separate point: plugin-level `references/` is a valid slot for non-skill research material even after the plugin ships skills, distinct from per-skill `references/`. To bring a stub online, add a `skills/` directory with at least one `SKILL.md`, then re-register in both marketplaces and bump the structure test's `plugin_count` and `for plugin in` list in the same commit. Going the other direction (retracting an installable plugin to a stub) requires removing the plugin from both marketplaces and ensuring the structure test pin matches the new count.
- **Producer/renderer skill pairs maintain different taxonomies at different abstraction levels.** When two skills compose such that one designs the *content* of an artifact and the other *renders* it, do not force one's taxonomy onto the other. The producer enumerates argument roles (what each unit of the artifact contributes to the message); the renderer enumerates layout templates (how each unit is laid out on screen). The producer ships a recommended mapping table as a non-binding hand-off contract; the renderer remains free to pick its own template based on the unit's brief. The first instance in this repo is `writing:presentations` (content-side `slide_type` enum: Title, Agenda, SectionDivider, Decision, Evidence, Transformation, Closing, Appendix) paired with `workbench:crafting-presentations` (rendering-side template catalog: Title, SectionDivider, AgendaSlide, ContentSlide, StatSlide, CapabilitiesSlide, ComparisonSlide, QuoteSlide, TimelineSlide, ClosingSlide); the mapping table lives in `plugins/writing/skills/presentations/references/slide-type-catalog.md`. The `writing:presentations` SKILL.md notes the distinction in one sentence near the `deck.md` hand-off contract (the producer side carries the note because that is where the artifact is named); the `workbench:crafting-presentations` SKILL.md does not need to repeat it because the renderer never consumes the producer's enum as a constraint. The full argument-role-vs-visual-layout rationale lives in this Design Decision and does not need to be mirrored into either SKILL.md. The hand-off contract is the artifact (`deck.md`) as a *brief*, not as a render-config: the producer's `slide_type` is a hint to the renderer, not a constraint. When adding a future producer/renderer pair, follow the same shape rather than collapsing the two taxonomies into one shared enum; the two levels of abstraction are intrinsic (argument role vs visual layout) and forcing them to match leaks rendering concerns into the producer or argument concerns into the renderer.
- **Sibling-skill reference sharing for thin variants.** A skill that is a thin variant of another skill in the same plugin may share the original's `references/` instead of duplicating them, by pointing every reference path at `../<sibling-skill>/references/<file>.md`. `workbench:copilot` is the first instance: it is the human-in-the-loop variant of `workbench:autopilot` (steps 2 brainstorm and 3 spec stay human-driven, steps 1 and 4 through 9 stay autonomous), it ships only `SKILL.md`, and it references autopilot's six shared orchestrator docs (`profile-schema`, `example-project-profile`, `invariants`, `required-skills`, `claude-code-adapter`, `codex-adapter`) plus the same `.workbench/autopilot.md` profile rather than copying any of them. Two constraints make this work: (1) the variant's `SKILL.md` must carry the `../<sibling>/references/` prefix on every shared-doc path, because a bare `references/...` resolves against the variant's own base dir, which has no such directory; (2) the variant's unit test asserts the prefixed path in `SKILL.md` and asserts the docs exist at the sibling location (`plugins/<plugin>/skills/<sibling>/references/`), NOT in the variant's own dir, and asserts the variant ships no `references/` dir of its own (`[ ! -d "$SKILL_DIR/references" ]`). Note `config-schema.md` lives in autopilot's `references/` but neither orchestrator's `SKILL.md` references it (the producer skills consume it), so the shared set the variant references is six, not seven. Prefer a self-contained orchestration `SKILL.md` (parallel content, runnable on a single read) over a thin redirect to the sibling's `SKILL.md`; redirects are the info-dump-behind-a-cross-reference anti-pattern and break when the sibling renumbers its steps. Use sharing only when the reference docs are genuinely identical infrastructure consumed the same way; duplicate into the variant's own `references/` only where it must diverge.
