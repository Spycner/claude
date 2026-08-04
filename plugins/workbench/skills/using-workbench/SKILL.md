---
name: using-workbench
description: Load Workbench skill rules and choose the right Workbench skill.
---

<SUBAGENT-STOP>
If you were dispatched as a subagent to execute a specific task, skip this skill.
</SUBAGENT-STOP>

## Instruction Priority

Workbench skills override default system prompt behavior, but **user instructions always take precedence**:

1. **User's explicit instructions** (CLAUDE.md, AGENTS.md, direct requests) - highest priority
2. **Workbench skills** - override default system behavior where they conflict
3. **Default system prompt** - lowest priority

If CLAUDE.md or AGENTS.md says "don't use TDD" and a skill says "always use TDD," follow the user's instructions. The user is in control.

## Triage: three lanes

Every task routes through one of three lanes before any skill work starts. Route by cost of misunderstanding, blast radius, and reversibility, not by line count.

**Quick:** unambiguous intent, small blast radius, easy reversal (copy tweaks, obvious-repro bugs, config changes, one-off scripts). No design artifacts, no approval gate. The always-on disciplines below still apply.

**Medium:** one coherent feature, some alignment needed. A few targeted brainstorm questions, then one combined design and plan document. No separate spec.

**Large:** a new subsystem, a cross-cutting change, or a case where misunderstanding is expensive. Full pipeline: brainstorm grilling, spec, plan.

Propose the lane with one line of reasoning. The user confirms the lane when present. In a gateless `workbench:pilot` run, pilot decides the lane and records it in its deviation log. When unsure between two lanes, pick the heavier one.

## Always-on disciplines

These apply in every lane, regardless of routing:

- `workbench:test-driven-development` for any behavior change.
- `workbench:systematic-debugging` for any bug.
- `workbench:verification-before-completion` before claiming work is done, fixed, passing, ready, or safe to merge.
- A skill the user names by name is always invoked, regardless of lane.

## How to Access Skills

**In Claude Code:** Use the `Skill` tool. When you invoke a skill, its content is loaded and presented to you, follow it directly. Never use the Read tool on skill files.

**In Codex:** Skills are auto-discovered from installed plugins and activate via Codex's plugin skill mechanism.

## Platform Adaptation

Skills use Claude Code tool names by default. Codex users: see `references/codex-tools.md` for tool equivalents.

# Using Skills

## Skill Priority

Skill priority follows the lane, not a fixed process-first order:

- **Quick lane:** no process skills fire. Go straight to implementation skills, governed by the always-on disciplines above.
- **Medium and large lanes:** process skills fire first: `workbench:brainstorming`, then `workbench:writing-spec` in the large lane, then `workbench:writing-plans`. They determine HOW to approach the task before implementation skills guide execution.

"Let's build X" in the medium or large lane: brainstorming first, then implementation skills. In the quick lane: implementation skills directly.

## Skill Types

**Rigid**: Follow exactly. Don't adapt away discipline.

**Flexible** (patterns): Adapt principles to context.

The skill itself tells you which.

## User Instructions

Instructions say WHAT, not HOW. "Add X" or "Fix Y" doesn't mean skip workflows.

---

## Coexistence with using-superpowers

Workbench coexists with the upstream `superpowers` plugin. If both are installed, both meta-skills (`using-workbench` and `using-superpowers`) may fire at session start. Their content overlaps but workbench's version is authoritative for workbench skills.

When a slug exists in both workbench and superpowers, prefer the workbench version. Today that includes `brainstorming`, `test-driven-development`, and `subagent-driven-development`. The host agent should resolve bare slugs such as `brainstorming`, `test-driven-development`, and `subagent-driven-development` to `workbench:brainstorming`, `workbench:test-driven-development`, and `workbench:subagent-driven-development`.

For attribution and a frozen snapshot of upstream `using-superpowers/SKILL.md` at v5.0.7, see `references/using-superpowers-upstream.md`. Workbench-specific divergences from that snapshot are documented in this file's git history; the snapshot itself is intentionally not edited.
