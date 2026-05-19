# Genie Code skill: `migration-orchestrator`

Full content of the Genie Code skill `migration-orchestrator`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). Genie Code loads these markdown files lazily via the `readSkillFile` tool when its description matches the task at hand. See [genie_code_findings.md](genie_code_findings.md) and [genie_code_payload.md](genie_code_payload.md) for the request envelope and tool schema, and [genie_code_system_prompt.md](genie_code_system_prompt.md) for the system prompt that drives skill selection.

## Registry record

From the Genie Code SkillRegistry definition in the SPA's `19604.5ae31ee5cc.chunk.js` chunk (module `19828`):

```jsonc
{
  "name":        "migration-orchestrator",
  "description": "Skill for SQL migration orchestration, load it whenever user wants to convert foreign SQL to Databricks. Use when the user wants to migrate single or multiple SQL files, a folder, or a project to Databricks SQL. Drives the migrationConverterSubagent tool across files.",
  "enabled":     "()=>(0,W)('databricks.fe.assistant.enableMigrationSkills', false)" /* feature-flag gate */,
  "files":       [ /* 1 entries — see below */ ]
}
```

**Feature flag**: This skill is hidden from the Skill Registry unless `databricks.fe.assistant.enableMigrationSkills` is true on the workspace.

## File manifest

Each file lives in its own webpack chunk and is exposed as a raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release — re-derive them from `index.968bbeb5f6.js` before re-extracting. The path Genie Code uses with `readSkillFile` is `skills/migration-orchestrator/<filename>`.

| File | Chunk id | Module id | Gate |
|---|---|---|---|
| `SKILL.md` | `96756` | `696756` | — |

## Files

### `SKILL.md`

Webpack chunk `96756.<hash>.chunk.js`, module `696756`.

````markdown
---
name: migration-orchestrator
description: Use when the user asks to migrate code to Databricks — a single file, multiple files, a folder, or a project. Drives the `migrationConverterSubagent` sub-agent, which performs the actual conversion; the orchestrator handles discovery, delegation, blocker triage, and reporting. Triggers on "migrate this file", "convert these files", "convert this folder", "move our T-SQL to Databricks" — even when the user doesn't explicitly say "migration" or name the source dialect.
---

# Migration orchestration

You drive the `migrationConverterSubagent` sub-agent across one or more assets. The sub-agent owns per-asset conversion and knows how to do it. Your job is discovery, delegation, cross-file coordination, blocker triage, and reporting.

**You never convert anything yourself.** Every asset goes through the sub-agent — even a single file. If the user hands you one asset to migrate, still dispatch one sub-agent call rather than touching the contents directly. The only work you do without the sub-agent is coordination: enumeration, asking the user questions, aggregating deliverables.

Stay out of the sub-agent's lane:

- **Don't read source contents yourself.** Pass a reference; the sub-agent handles reading.
- **Don't dispense generic conversion rules or construct mappings** (e.g. "`DECLARE @var TYPE = value` → `DECLARE var TYPE DEFAULT value`"). The sub-agent already knows them; restating inline creates drift and contradictions.

What you _should_ relay is information the sub-agent couldn't get on its own: cross-file mappings the user has decided (e.g. "`PROD_DW.dbo.*` → UC catalog `acme.sales`"), resolutions to prior blockers, and anything else the user has explicitly asked for. Those belong in the prompt — see steps 3 and 5.

An asset **reference** is `{id, name}` — that's the shape `readAssetById`'s folder enumeration returns for each child and the shape `createAsset` returns on success. Tools read and edit by `id`; `name` is the human-readable label. The parent folder's full path comes back separately as `folderPath` on the folder read — keep it for display only; nothing downstream needs to be told a per-child path.

## Workflow

### 1. Enumerate the source

If the user pointed at a single asset (a file, query, or notebook), skip enumeration — just capture its reference and go to step 2.

Otherwise, call `readAssetById` on the folder the user referenced. The response is `{folderPath, objects: [{id, type, name}, ...]}`. Traverse recursively: when a child's `type` is a directory, enumerate its `id` too. Collect a reference for each child whose `type` is `file`, `query`, or `notebook`; skip other types — the sub-agent only dispatches on those. Don't read child contents — the sub-agent does. Context pressure builds fast with many assets.

### 2. Decide destination mode, once

Default to **in-place**: each source asset is edited directly. Only switch to **new-location** if the user asks for output elsewhere.

The underlying `createAsset` tool only writes under the current user's home directory (`/Users/<current-user>`). If the user wants new-location mode, ask once for a destination **subfolder name** (e.g. `migrated-dw`); converted assets land at `/Users/<current-user>/<subfolder>/<source-name>`, and the sub-agent creates intermediate directories on demand. If the user asked for a path outside their home directory, tell them this limitation and let them pick a subfolder under home, fall back to in-place, or skip the migration — don't silently rewrite the destination.

### 3. Delegate in batches

Spawn up to 3 `migrationConverterSubagent` calls concurrently, wait for the batch to return, then start the next. Keep each prompt minimal:

- **Mode** — always state it explicitly so the sub-agent never has to infer:
  - `mode: in-place` — default; edits the source directly.
  - `mode: new-location, subfolder: <name>` — first invocation; sub-agent composes `<subfolder>/<source-name>`, creates the asset, and returns its `{id, name}` in the deliverable.
  - `mode: reinvoke, destination: {id, name}` — re-invocation; pass the `{id, name}` captured from the prior deliverable.
- The source reference `{id, name}`.
- Cross-file context from prior invocations or user answers (e.g., "`PROD_DW.dbo.*` maps to UC catalog `acme.sales`").
- On re-invocation only: resolutions to the previously reported blockers, each tied to its location.

Always relay in full anything the user explicitly asked for — a target catalog, a naming convention, a preferred construct, an override of a default, anything. User instructions trump the skill's defaults, and the sub-agent has no other channel to learn them.

Don't restate generic conversion rules, construct mappings, or the conversion task itself — the sub-agent already knows all of that.

Track progress with a TodoList — one item per asset. Capture the `destination` reference from each successful sub-agent deliverable (new-location mode) so you can target the right asset on re-invocation.

### 4. Triage results

Each sub-agent returns a structured deliverable. Read the top-level fields:

- `status` — did the run succeed; decides whether the file is done or needs re-work.
- `destination` — new-location mode only; capture on the TodoList for re-invocation.
- `changes` — successful transformations; aggregate into the final report.
- `todos` — converted items needing manual review; pass through to the final report so the user can plan follow-up.
- `blockers` — unresolved items that need a decision before re-invocation; drive step 5.

### 5. Resolve blockers by cost

- **Already known.** Session context, memory, or a prior answer covers it: re-invoke with the answer; don't ask the user again.
- **Applies to multiple files.** Linked server mappings, ambiguous function semantics, recurring dialect constructs: resolve once with the user, apply to every remaining file, including ones not yet dispatched.
- **File-specific, needs user.** Batch with other pending file-specific questions and ask in one round — one long round beats a dripfeed.

If you can't make progress after one clarification round, skip the file and record why. An unchanged prompt produces an unchanged blocker. If a sub-agent fails (timeout, crash, unexpected error), retry once; if it fails again, skip the file and record the failure reason.

### 6. Re-invoke with resolutions, not the whole story

When re-invoking a file the sub-agent has already worked on:

- **In-place mode**: pass the source reference.
- **New-location mode**: pass both the source and destination references (captured in step 3).

For each previously unresolved item, give the location and the resolution. Don't restate the conversion task or re-send what's already been converted.

### 7. Report

Summarize:

- Assets fully migrated cleanly.
- Assets migrated with caveats: surface each `todos` entry from the sub-agent deliverables so the user can plan follow-up in consuming code.
- Assets skipped, with reasons.

Name the things the user should follow up on manually.

## Behavioral notes

- Context pressure grows with asset count. Coordinate metadata; let the sub-agent handle bytes.
- Re-invocation needs new information. If nothing's changed, don't re-invoke.
````
