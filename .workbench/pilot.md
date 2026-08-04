# Workbench Pilot Profile

## Project name
pgoell-claude-tools

## Branching
Default branch: master
Branch prefixes: feat, fix, docs, chore, refactor, test, perf, style, ci, build, revert

## Commands
Task runner: bash
Lint: no automated script; for each changed SKILL.md run `awk '/^---$/{c++; next} c==1' <file> | uv run --with pyyaml python3 -c 'import sys,yaml; yaml.safe_load(sys.stdin); print("ok")'`, then run `grep -rnP '[\x{2014}\x{2013}]' plugins/ README.md AGENTS.md` expecting no output (per AGENTS.md CI Checks)

## Documentation paths
Specs: don't commit
Plans: don't commit

## PR behavior
Mode: stop_at_green
Base branch: master
Squash: yes

## Gates
Gates: design, slices

## Improvement pass
Improvement pass: on_learnings

## Project-specific rules

Use `uv` instead of direct `python` commands.
Do not duplicate skill directories between Claude Code and Codex. Runtime metadata must point at the same `skills` directory.
