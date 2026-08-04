# Workbench Pilot Required Skills

The universal table of skills the pilot skill invokes at each step. Profiles can extend or replace rows through a `## Required skills` section in `.workbench/pilot.md`, but cannot remove rows.

## Universal table (defaults)

| Step   | Skill                                                 | Notes                                                                              |
| ------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 0      | `workbench:using-workbench`                            | session-start meta, workbench-native fork                                          |
| 2      | `workbench:brainstorming`                              | medium and large lanes                                                             |
| 3      | `workbench:writing-spec`                                | large lane                                                                          |
| 4      | `workbench:writing-plans`                               | medium and large lanes                                                             |
| 5      | `workbench:test-driven-development`                     | governs every implementation chunk                                                 |
| 5      | `workbench:subagent-driven-development`                 | governs plan execution with subagents, including parallel dispatch (medium and large lanes; the quick lane has no plan to execute) |
| 6      | `agent-system-management:capturing-session-learnings`  | runs on `always`, or on `on_learnings` when the run surfaced non-obvious learnings   |
| 6      | `agent-system-management:improving-instructions`       | runs on `always` or explicit user request only                                      |
| pre-PR | `workbench:verification-before-completion`              | verify before push and PR readiness claims                                         |

These are the rows shipped with Workbench. As more skills are ported into workbench, this table flips them to `workbench:*`.

`fewer-permission-prompts` is intentionally not in the universal table. It is Claude-Code-specific (touches `.claude/settings.json`) and an optimization rather than a discipline gate. Projects that want it can add it via `additional` (see below).

## Replace and additional semantics

Profiles override the table through a `## Required skills` heading shaped like this:

```md
## Required skills

| Step | Skill      | Action                       |
| ---- | ---------- | ----------------------------- |
| <n>  | <skill-id> | replaces <existing-skill-id> |
| <n>  | <skill-id> | additional                   |
```

### Replace

A row whose `Action` column says `replaces <skill-id>` swaps which skill fulfills an existing step; the replacement is used instead of the universal row for that step.

Example:

```md
| 4 | my-project:writing-plans | replaces workbench:writing-plans |
```

This says "for step 4, use `my-project:writing-plans` instead of `workbench:writing-plans`." The other six universal rows are unchanged.

### Additional

A row whose `Action` column is `additional` adds a new mandatory skill at a step, in addition to the universal row(s) for that step.

Example:

```md
| 6 | my-project:custom-changelog | additional |
```

This says "at step 6, in addition to `capturing-session-learnings` and `improving-instructions`, also invoke `my-project:custom-changelog`."

### Removal not supported

Profiles cannot remove a row from the universal table. The discipline floor is fixed across projects.
