# Genie Code skill: `databricks-cli-public`

Full content of the built-in Genie Code skill `databricks-cli-public`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-19). Genie Code loads these markdown files lazily via the `readSkillFile` tool when its description matches the task at hand. See [findings.md](../../overview/findings.md) and [payload.md](../../overview/payload.md) for the request envelope and tool schema, and [system-prompt.md](../../overview/system-prompt.md) for the system prompt that drives skill selection.

## Registry record

From the Genie Code SkillRegistry definition in the SPA's `19604.5ae31ee5cc.chunk.js` chunk (module `61276`):

```jsonc
{
  "name":        "databricks-cli-public",
  "description": "Load when using the runDatabricksCli tool. Contains CLI command patterns for workspace assets (jobs, pipelines, clusters, serving endpoints, secrets, filesystem), pipeline management and monitoring, job diagnosis and settings, Lakebase database management, Databricks Apps lifecycle, Apps + Lakebase integration, conversation history retrieval and governed tags management.",
  "files":       [ /* 10 entries — see below */ ]
}
```

## File manifest

Each file lives in its own webpack chunk (one chunk per markdown file). The SPA exposes them as raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release — re-derive them from the asset manifest (`index.968bbeb5f6.js` at capture time). The path Genie Code uses with `readSkillFile` is `skills/databricks-cli-public/<filename>`.

| File | Chunk id | Module id | Feature flag |
|---|---|---|---|
| `SKILL.md` | `22668` | `622668` | — |
| `workspace-assets.md` | `80426` | `380426` | — |
| `pipelines-management.md` | `44530` | `644530` | — |
| `jobs-diagnosis.md` | `48451` | `148451` | — |
| `pipeline-task-parameters.md` | `14628` | `692247` | pipeline_parameters |
| `lakebase.md` | `96361` | `896361` | — |
| `databricks-apps.md` | `3292` | `503292` | — |
| `apps-lakebase-integration.md` | `51143` | `451143` | — |
| `conversation-history.md` | `10617` | `510617` | — |
| `governed-tags.md` | `47781` | `347781` | — |

## Files

### `SKILL.md`

Webpack chunk `22668.<hash>.chunk.js`, module `622668`.

````markdown
# Databricks CLI (Public)

Use this skill when executing commands with the `runDatabricksCli` tool to interact with Databricks workspace resources.

## Command Format

- Provide only the subcommand and arguments — the `databricks` prefix is added automatically.
- The CLI runs on the attached compute and is pre-authenticated with the current user's credentials.
- Use `--output JSON` on list/get commands for structured output that is easier to parse.

**Good:**

```
jobs list --output JSON
clusters get 0123-456789-abc123
```

**Bad (do NOT include the `databricks` prefix):**

```
databricks jobs list
```

## Guardrail Awareness

Commands are evaluated against allow/deny lists before execution:

**Pre-approved commands (run without confirmation):**

- `clusters list`, `clusters get`, `clusters start`
- `jobs list`, `jobs get`, `jobs run-now`
- `workspace list`, `workspace get-status`, `workspace export`
- `pipelines list`, `pipelines get`
- `serving-endpoints list`, `serving-endpoints get`
- `secrets list-scopes`, `secrets list`
- `fs ls`, `fs cat`, `fs cp`
- `bundle summary`, `bundle validate`, `bundle init`
- `apps list`, `apps get`, `apps list-deployments`, `apps get-deployment`, `apps get-update`, `apps logs`
- `apps get-permissions`, `apps get-permission-levels`, `apps start`, `apps stop`

**Blocked commands (always denied):**

- `clusters delete`, `clusters permanent-delete`
- `workspace delete`, `jobs delete`, `pipelines delete`
- `unity-catalog delete`
- `secrets delete-scope`, `secrets delete-secret`
- `fs rm`, `bundle destroy`
- `tokens delete`, `groups delete`, `service-principals delete`

Commands not on either list may trigger a confirmation prompt. Prefer pre-approved commands when possible.

## Best Practices

### JSON Output for Parsing

Always add `--output JSON` when you need to process the result programmatically or extract specific fields:

```
jobs list --output JSON
clusters get abc123 --output JSON
```

### Paginated List Commands

When a CLI list command supports `--page-size`, default to `--page-size=25` so API-backed results return a bounded page:

```
apps list --output JSON --page-size=25
jobs list --output JSON --page-size=25
```

Use `--page-token` only when continuing from a previous response's `next_page_token`.

### Filtering and Limiting Results

Many list commands support server-side filtering. Use flags rather than fetching everything:

```
jobs list --name "my_exact_job" --output JSON
pipelines list-pipelines --filter "name LIKE 'etl_%'" --output JSON
```

### Safe Command Sequencing

When performing multi-step workflows, use read commands first to verify state before mutating:

```
# Step 1: Verify the job exists
jobs get 12345 --output JSON

# Step 2: Then trigger it
jobs run-now 12345
```

### Error Handling

- If a command fails, read the error message carefully — the CLI provides descriptive errors.
- If the CLI binary is not available on the compute, the tool will fail. Do not retry.
- For long-running operations, consider using the `--no-wait` flag where supported to avoid timeouts.

## When to Load Sub-Topics

### Workspace Assets

Load [`workspace-assets.md`](workspace-assets.md) when working with:

- Jobs, Pipelines, Clusters
- Workspace files and notebooks
- Serving endpoints, Registered models
- Secrets, SQL Warehouses, Filesystem operations

### Governed Tags

Load [`governed-tags.md`](governed-tags.md) when working with:

- Creating, listing, updating, or deleting governed tags (requires Python SDK or CLI — no SQL DDL exists)
- Instructing the user how to create governed tags through the Catalog Explorer UI
- Governed tag constraints, permissions, and SDK/CLI/UI patterns
- Understanding the `allowed_values` vs `values` CLI field mismatch

### Pipeline Management

Load [`pipelines-management.md`](pipelines-management.md) when working with:

- Pipeline CRUD, updates, and full refreshes
- Pipeline event monitoring and error investigation
- Pipeline state inspection and diagnosis

### Job Diagnosis and Settings

Load [`jobs-diagnosis.md`](jobs-diagnosis.md) when working with:

- Job run failure investigation
- Job settings updates (partial updates via `jobs update`)
- Job run history and task-level debugging

Load [`pipeline-task-parameters.md`](pipeline-task-parameters.md) when working with:

- Setting `pipeline_task.parameters` on a Lakeflow pipeline task
- Per-run overrides via job-level parameters and `{{job.parameters.x}}` references

### Lakebase Database Management

Load [`lakebase.md`](lakebase.md) when working with:

- Lakebase projects, branches, computes
- Postgres endpoint management via CLI
- Database credential generation

### Databricks Apps

Load [`databricks-apps.md`](databricks-apps.md) when working with:

- Apps lifecycle (create, deploy, start, stop, delete)
- Listing and inspecting apps and deployments

### Apps + Lakebase Integration

Load [`apps-lakebase-integration.md`](apps-lakebase-integration.md) when working with:

- Connecting a Databricks App to Lakebase
- App environment variables for database connections
- End-to-end app + database setup workflows

### Conversation History

Load [`conversation-history.md`](conversation-history.md) when working with:

- Listing or searching past assistant conversations
- Reading conversation messages from workspace
````

### `workspace-assets.md`

Webpack chunk `80426.<hash>.chunk.js`, module `380426`.

````markdown
# Workspace Assets via CLI

Command patterns for managing Databricks workspace assets using `runDatabricksCli`.

## JSON payloads

`--json` payloads must be single-quoted: `--json '{"key": "value"}'`.

## Jobs

```bash
# List all jobs (JSON for parsing)
jobs list --output JSON

# Find job by exact name (server-side filter — fast even with 1000s of jobs)
jobs list --name "my_job_name" --output JSON

# Get job details by ID (positional, not --job-id)
jobs get 123456 --output JSON

# Trigger a job run (positional)
jobs run-now 123456

# List runs for a job
jobs list-runs --job-id 123456 --output JSON

# Create a job
jobs create --json '{"name": "my_job", "tasks": [...]}' --output JSON

# Update a job (job_id goes inside the JSON, not as a flag)
jobs update --json '{"job_id": 123456, "new_settings": {"name": "renamed"}}'
```

## Lakeflow Spark Declarative Pipelines (formerly DLT Pipelines)

```bash
# List all pipelines
pipelines list-pipelines --output JSON

# Filter by name pattern (server-side LIKE filter)
pipelines list-pipelines --filter "name LIKE 'etl_%'" --output JSON

# Get pipeline details
pipelines get --pipeline-id abc123 --output JSON

# List pipeline update history
pipelines list-updates --pipeline-id abc123 --output JSON

# Start a pipeline update
pipelines start-update --pipeline-id abc123
```

## Clusters

```bash
# List clusters
clusters list --output JSON

# Get cluster details (positional, not --cluster-id)
clusters get 0123-456789-abc123 --output JSON

# Start a stopped cluster (positional)
clusters start 0123-456789-abc123

# Terminate a running cluster (positional) — not a permanent delete
clusters delete 0123-456789-abc123

# List cluster events (positional)
clusters events 0123-456789-abc123 --output JSON
```

## Workspace Files & Notebooks

```bash
# List directory contents
workspace list /Workspace/Users/user@example.com --output JSON

# Get file/notebook status
workspace get-status /Workspace/Users/user@example.com/my_notebook --output JSON

# Export a notebook
workspace export /Workspace/Users/user@example.com/my_notebook

# Import a file
workspace import /Workspace/Users/user@example.com/my_notebook --file /local/path --language PYTHON
```

## Serving Endpoints

```bash
# List all serving endpoints
serving-endpoints list --output JSON

# Get endpoint details
serving-endpoints get --name my-endpoint --output JSON

# Query an endpoint
serving-endpoints query --name my-endpoint --input '{"dataframe_records": [{"input": "Hello"}]}'
```

## Registered Models (Unity Catalog)

```bash
# List models in a schema
unity-catalog models list --catalog-name main --schema-name default --output JSON

# Get model details
unity-catalog models get --full-name main.default.my_model --output JSON

# List model versions
unity-catalog model-versions list --full-name main.default.my_model --output JSON
```

## Secrets

```bash
# List secret scopes
secrets list-scopes --output JSON

# List secrets in a scope (values are never returned — by design)
secrets list --scope my-scope --output JSON
```

## SQL Warehouses

```bash
# List SQL warehouses
warehouses list --output JSON

# Get warehouse details
warehouses get --id abc123def456 --output JSON
```

## Filesystem (DBFS / Volumes)

```bash
# List files
fs ls dbfs:/path/to/dir

# Read file contents
fs cat dbfs:/path/to/file.csv

# Copy files
fs cp dbfs:/source/file.csv /local/dest/
fs cp /local/source.csv dbfs:/dest/

# Copy directory recursively
fs cp -r dbfs:/source/dir/ /local/dest/
```

## Catalogs & Schemas (Unity Catalog)

```bash
# List catalogs
unity-catalog catalogs list --output JSON

# List schemas in a catalog
unity-catalog schemas list --catalog-name main --output JSON

# List tables in a schema
unity-catalog tables list --catalog-name main --schema-name default --output JSON
```

## Tips

- **Server-side filtering** (`--name`, `--filter`) is much faster than fetching all results and filtering client-side.
- Use `--output JSON` for all list/get commands when you need to parse results or extract specific fields.
- For user-scoped views, filter JSON output by the `creator_user_name` field when the CLI does not provide a built-in flag.
````

### `pipelines-management.md`

Webpack chunk `44530.<hash>.chunk.js`, module `644530`.

````markdown
# Pipeline Management via CLI

Command patterns for managing Spark Declarative Pipelines (formerly DLT) using `runDatabricksCli`.

## List and Find Pipelines

```bash
# List all pipelines
pipelines list-pipelines --output JSON

# Filter by name pattern (server-side LIKE filter)
pipelines list-pipelines --filter "name LIKE 'etl_%'" --output JSON
```

## Get Pipeline Details

```bash
# Get pipeline configuration and state
pipelines get --pipeline-id <pipeline_id> --output JSON
```

Key fields in the response:

- `state` — current pipeline state (IDLE, RUNNING, etc.)
- `spec.catalog` / `spec.schema` — default catalog and schema
- `cluster_id` — attached compute
- `latest_updates` — recent update history

## Pipeline Updates

```bash
# Start a pipeline update (full refresh of all tables)
pipelines start-update --pipeline-id <pipeline_id>

# Start a full refresh
pipelines start-update --pipeline-id <pipeline_id> --full-refresh

# List update history
pipelines list-updates --pipeline-id <pipeline_id> --output JSON

# Get specific update details
pipelines get-update --pipeline-id <pipeline_id> --update-id <update_id> --output JSON
```

## Pipeline Events and Monitoring

```bash
# List pipeline events (errors, warnings, progress)
pipelines list-pipeline-events --pipeline-id <pipeline_id> --output JSON

# Filter events by level
pipelines list-pipeline-events --pipeline-id <pipeline_id> --filter "level='ERROR'" --output JSON
```

## Diagnosis Workflow

When investigating pipeline issues:

1. **Check pipeline state**: `pipelines get --pipeline-id <id> --output JSON`
2. **List recent updates**: `pipelines list-updates --pipeline-id <id> --output JSON`
3. **Check events for errors**: `pipelines list-pipeline-events --pipeline-id <id> --filter "level='ERROR'" --output JSON`
4. **If pipeline is stuck**: Check the cluster state and update status
5. **For data quality issues**: Look at expectation violations in the events

## Common Patterns

### Create and Navigate to a Pipeline

```
# Use createAsset tool first, then navigate:
createAsset({ assetType: 'pipeline', name: 'My ETL Pipeline' })
openAsset({ assetType: 'pipeline', assetId: '<id>' })
```

### Monitor a Running Update

```bash
# Check if update is still running
pipelines get-update --pipeline-id <id> --update-id <update_id> --output JSON
# Look at state field: QUEUED, CREATED, RUNNING, COMPLETED, FAILED, CANCELED
```
````

### `jobs-diagnosis.md`

Webpack chunk `48451.<hash>.chunk.js`, module `148451`.

````markdown
# Job Diagnosis and Management via CLI

Command patterns for diagnosing job failures and managing job settings using `runDatabricksCli`.

## Investigating Job Failures

### Step 1: Get Run Details

```bash
# Get run state and per-task status
jobs get-run <run_id> --output JSON
```

Key fields: `state.result_state` (SUCCESS, FAILED, TIMEDOUT, CANCELED), `tasks` array with per-task status.

### Step 2: Get Error Output

```bash
# Get full output and error details
jobs get-run-output <run_id> --output JSON
```

For multi-task jobs, use the task-level `run_id` from the `tasks` array in `get-run` output.

### Step 3: Check Run History

```bash
# List recent runs for pattern analysis
jobs list-runs --job-id <job_id> --output JSON
```

## Managing Job Settings

### Read Current Settings

```bash
jobs get <job_id> --output JSON
```

### Update Settings (Partial Update)

```bash
# ALWAYS use jobs update (partial), NEVER jobs reset (full replace)
jobs update --json '{"job_id": <job_id>, "new_settings": {"max_concurrent_runs": 3}}'
```

**Critical rules:**

- `job_id` goes INSIDE the JSON payload, not as a positional argument
- Field name is `new_settings` (not `settings`)
- `jobs reset` fully replaces all settings — NEVER use it

### Common Setting Updates

```bash
# Update schedule
jobs update --json '{"job_id": 123, "new_settings": {"schedule": {"quartz_cron_expression": "0 0 8 * * ?", "timezone_id": "UTC"}}}'

# Update max concurrent runs
jobs update --json '{"job_id": 123, "new_settings": {"max_concurrent_runs": 2}}'

# Update timeout
jobs update --json '{"job_id": 123, "new_settings": {"timeout_seconds": 3600}}'
```

## Job Lifecycle Commands

```bash
# Trigger a job run
jobs run-now <job_id>

# Cancel a running job
jobs cancel-run --run-id <run_id>

# Repair a failed run (retry failed tasks only)
jobs repair-run --run-id <run_id> --rerun-tasks '["failed_task_key"]'
```
````

### `pipeline-task-parameters.md`

Webpack chunk `14628.<hash>.chunk.js`, module `692247`. Feature-flag gated on `pipeline_parameters`.

````markdown
# Pipeline Task Parameters

A `pipeline_task` can override the parameters declared on the underlying Spark Declarative Pipeline. The job-supplied values are passed to the pipeline update for that run; the pipeline's own defaults are used for any keys the task does not set.

## Shape

```json
{
  "task_key": "etl_pipeline",
  "pipeline_task": {
    "pipeline_id": "abc-123",
    "full_refresh": false,
    "parameters": {
      "start_date": "2026-01-01",
      "country": "US"
    }
  }
}
```

- `parameters` is a `map<string, string>` — all values are strings, even for numbers, dates, or booleans. The pipeline SQL is responsible for casting (e.g. `CAST(:start_date AS DATE)`).
- Keys must be 1–100 characters and use only letters, digits, underscores, or dashes.
- The full map serialized as JSON must be ≤ 10,000 characters.
- A key set here only takes effect if the pipeline declares a parameter with the same name. Unknown keys do not error but have no effect.

## Update an existing pipeline task

```bash
# Add or change parameters on a task; merges into existing pipeline_task fields.
jobs update --json '{
  "job_id": 123,
  "new_settings": {
    "tasks": [
      {
        "task_key": "etl_pipeline",
        "pipeline_task": {
          "pipeline_id": "abc-123",
          "parameters": { "start_date": "2026-01-01", "country": "US" }
        }
      }
    ]
  }
}'
```

## Per-run dynamic values

For values that should change per run, reference a job-level dynamic value from the task's `parameters` map. The most common pattern is the trigger time:

```json
"pipeline_task": {
  "pipeline_id": "abc-123",
  "parameters": {
    "as_of": "{{job.parameters.trigger.time.iso_datetime}}"
  }
}
```

`{{job.parameters.x}}` references are resolved per run before the pipeline update starts, so the pipeline sees the literal string value (e.g. `2026-05-07T13:42:00Z`).
````

### `lakebase.md`

Webpack chunk `96361.<hash>.chunk.js`, module `896361`.

````markdown
# Lakebase Database Management via CLI

CLI command patterns for managing Lakebase projects, branches, computes, and database connections using `runDatabricksCli`.

**Note:** Lakebase CLI commands are under the `lakebase` command group. If the command group is not available on the attached compute's CLI version, check if a newer CLI version is available.

## Projects

```bash
# List all Lakebase projects
lakebase projects list --output JSON

# Get project details
lakebase projects get --name projects/my-project --output JSON
```

## Branches

```bash
# List branches in a project
lakebase branches list --parent projects/my-project --output JSON

# Get branch details
lakebase branches get --name projects/my-project/branches/production --output JSON
```

## Computes (Endpoints)

```bash
# List computes for a branch
lakebase endpoints list --parent projects/my-project/branches/production --output JSON

# Get compute details
lakebase endpoints get --name projects/my-project/branches/production/endpoints/my-compute --output JSON

# Create a new compute
lakebase endpoints create --parent projects/my-project/branches/production --endpoint-id new-compute --json '{"spec": {"autoscaling_limit_min_cu": 1.0, "autoscaling_limit_max_cu": 4.0}}'

# Update autoscaling range
lakebase endpoints update --name projects/my-project/branches/production/endpoints/my-compute --json '{"spec": {"autoscaling_limit_min_cu": 2.0, "autoscaling_limit_max_cu": 8.0}}' --update-mask "spec.autoscaling_limit_min_cu,spec.autoscaling_limit_max_cu"

# Delete a compute
lakebase endpoints delete --name projects/my-project/branches/production/endpoints/my-compute
```

## Database Credentials

```bash
# Get database instance info
lakebase database-instances get --name my-instance --output JSON

# Generate a short-lived OAuth credential for database access
lakebase database-credentials generate --instance-names my-instance --output JSON
```

## Resource Name Patterns

Lakebase uses hierarchical resource names:

- **Project:** `projects/{project-id}`
- **Branch:** `projects/{project-id}/branches/{branch-name}`
- **Compute:** `projects/{project-id}/branches/{branch-name}/endpoints/{compute-name}`

## CLI Availability

Lakebase CLI commands may not be available on all CLI versions. If `lakebase` is not a recognized command group:

1. Check the CLI version: `version`
2. If the Lakebase group is missing, check if a newer CLI version is available.

## Tips

- Use `--output JSON` for all commands to get structured responses.
- The `--json` flag accepts inline JSON for create/update payloads.
- Update operations require `--update-mask` to specify which fields to change.
- Status attributes in responses (e.g., `current_state`, `endpoint_type`) are enum strings.
````

### `databricks-apps.md`

Webpack chunk `3292.<hash>.chunk.js`, module `503292`.

````markdown
# Databricks Apps via CLI

CLI command patterns for managing Databricks Apps using `runDatabricksCli`.

## Tool Selection — Use the CLI for Apps

For **any** question or action about Databricks Apps (listing, inspection, lifecycle, logs, permissions, deploys), use `runDatabricksCli` with the commands below. Do **not** fall back to `searchAssets`, `openAsset`, `readAssetById`, or other asset tools to "look up" apps — those tools don't surface app status, deployments, or logs and they bypass the CLI's pre-authenticated path.

Two narrow exceptions where another tool wins:

- **Creating an app** → use the `createAsset` tool (not `apps create`).
- **Updating an app's metadata (description)** → use `editAsset` with the app name as the asset ID.

Everything else — listing, getting status, deploying code into an existing app, starting/stopping, reading logs, reading or changing permissions, deleting — goes through the CLI.

## Auto-approved Read & Lifecycle Commands

These run without a user-confirmation prompt. Prefer them whenever the question can be answered by inspection.

### List apps

```bash
apps list --output JSON --page-size=25
```

To filter by current user, look at the `creator` field in the JSON output.

### Get app details

```bash
apps get --name my-app-name --output JSON
```

Key fields: `name`, `url`, `status`, `creator`, `create_time`, `update_time`, `active_deployment`, `pending_deployment`, `resources`.

### List deployments / get a single deployment

```bash
apps list-deployments --app-name my-app-name --output JSON
apps get-deployment --app-name my-app-name --deployment-id abc123 --output JSON
```

### Get an in-flight update

```bash
apps get-update --name my-app-name --output JSON
```

Use this to check the status of a config update kicked off by `apps update` or `apps create-update`.

### Read app logs

```bash
apps logs --name my-app-name
```

Streams runtime logs from the app process. Use this first when diagnosing a misbehaving app.

In some workspaces, Apps log retrieval requires OAuth-based CLI auth. If `apps logs` fails with an auth error that mentions PATs, OAuth, permissions, or unsupported token type, classify that as a diagnostics-access limitation rather than runtime evidence. Do not infer that the app failed just because logs were inaccessible.

When logs are blocked this way, continue with read-only deployment/source inspection:

```bash
apps get --name my-app-name --output JSON
apps get-deployment --app-name my-app-name --deployment-id <active_deployment.deployment_id> --output JSON
workspace list <deployment_artifacts.source_code_path> --output JSON
workspace export <deployment_artifacts.source_code_path>/<file>
```

Use the `deployment_artifacts.source_code_path` from the active deployment. Paths under `/Workspace/Users/<user>/.bundle/<bundle>/<target>/files` are deployed source snapshots; inspect those files before proposing code fixes. If current logs are still required, ask the user for an OAuth-authenticated CLI run or use the app's `/logz` endpoint when the app URL is available and the environment supports it.

### Read permissions

```bash
# Current permission grants on the app
apps get-permissions --app-name my-app-name --output JSON

# Possible permission levels you can grant
apps get-permission-levels --app-name my-app-name --output JSON
```

### Start / stop

```bash
apps start --name my-app-name
apps stop --name my-app-name
```

Both are auto-approved. They change runtime state but are reversible.

## Commands That Require User Confirmation

These will prompt the user before running. Use them only when the user has clearly asked for the action — never speculatively.

| Command                                                   | Why it prompts                                                                                        |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `apps create <name>`                                      | Creates a new app. Note: NAME is **positional**, not `--name`. Prefer the `createAsset` tool instead. |
| `apps deploy --app-name <name> --source-code-path <path>` | Pushes new code into an existing app.                                                                 |
| `apps update --name <name> ...`                           | Changes app config (env vars, resources, etc.).                                                       |
| `apps create-update --name <name> ...`                    | Variant of `apps update` that creates an explicit update record.                                      |
| `apps import`                                             | (Experimental) Imports an app as a bundle.                                                            |
| `apps set-permissions --app-name <name> ...`              | Replaces the permission set.                                                                          |
| `apps update-permissions --app-name <name> ...`           | Modifies a subset of permissions.                                                                     |
| `apps delete --name <name>`                               | Destructive — cannot be undone.                                                                       |
| `apps run-local --name <name>`                            | Executes app code on the local CLI host; behaves like running user code.                              |

### Flag-name gotcha

Different subcommands use different flags for the app identifier — don't assume one shape:

- `apps create` → **positional** `<name>` (no flag)
- `apps get`, `apps start`, `apps stop`, `apps delete`, `apps logs`, `apps update`, `apps create-update`, `apps get-update` → `--name`
- `apps deploy`, `apps list-deployments`, `apps get-deployment`, `apps get-permissions`, `apps get-permission-levels`, `apps set-permissions`, `apps update-permissions` → `--app-name`

If a command fails with "unknown flag" or "missing argument", check this list before retrying.

## Common Workflows

### Check if an app is running

```bash
apps get --name my-app-name --output JSON
```

Look for `"status": "RUNNING"`.

### Diagnose a misbehaving app

Follow the inspection commands in this order — they're all auto-approved, so the user is not prompted at any step:

1. **Status** — `apps get --name <name> --output JSON` → check top-level `status` and `app_status`/`compute_status` if present. Note `active_deployment.deployment_id` and its `status`.
2. **Pending deployment** — if `pending_deployment` is non-null, the app is mid-deploy; inspect it with `apps get-deployment --app-name <name> --deployment-id <id> --output JSON`.
3. **Active deployment artifacts** — `apps get-deployment --app-name <name> --deployment-id <active_deployment.deployment_id> --output JSON` → read `status` and `deployment_artifacts.source_code_path` to confirm the right code is deployed.
4. **Runtime logs** — `apps logs --name <name>` to see what the app process is actually doing / failing on. If this fails due PAT/OAuth auth limitations, continue with the active deployment source path instead of stopping.
5. **Source snapshot** — if logs are unavailable or the source looks relevant, inspect `deployment_artifacts.source_code_path` with `workspace list` and `workspace export`.
6. **Recent updates** — `apps get-update --name <name> --output JSON` if the user mentions a recent config change.

Older failed deployments can explain history, but they are not the current runtime version unless they match `active_deployment` or `pending_deployment`. Keep the distinction clear in the final answer.

Only escalate to mutating commands (`apps deploy`, `apps update`, `apps stop`+`apps start`) once the diagnosis points at a specific cause.

### Redeploy an existing app

```bash
apps deploy --app-name my-app-name --source-code-path /Workspace/Users/user@example.com/my-app --output JSON
apps get --name my-app-name --output JSON  # verify the new deployment is active
```

### List apps owned by the current user

```bash
apps list --output JSON --page-size=25
# then match entries where the creator field equals <user>
```

There is no server-side `--creator` filter; do client-side filtering on the JSON output.

## Reference

### `App` response fields

- `name` — App name (unique identifier within the workspace)
- `url` — URL to access the running app
- `status` — Top-level status (`RUNNING`, `STOPPED`, `STARTING`, `STOPPING`, `DELETING`, etc.)
- `creator` — User who created the app
- `create_time` / `update_time` — Timestamps
- `active_deployment` — Deployment currently serving traffic
- `pending_deployment` — Deployment in progress, if any
- `resources` — Attached resources (e.g., Lakebase, secrets, serving endpoints)

### `AppDeployment` response fields

- `deployment_id` — Unique deployment identifier
- `status` — Deployment status (`SUCCEEDED`, `FAILED`, `IN_PROGRESS`, `CANCELLED`)
- `create_time` / `update_time` — Timestamps
- `deployment_artifacts.source_code_path` — Workspace path the code was deployed from
- `deployment_artifacts` — Build info and source location

### Related

For connecting apps to Lakebase databases, see [`apps-lakebase-integration.md`](apps-lakebase-integration.md).
````

### `apps-lakebase-integration.md`

Webpack chunk `51143.<hash>.chunk.js`, module `451143`.

````markdown
# Apps + Lakebase Integration via CLI

End-to-end workflows for connecting Databricks Apps to Lakebase databases, expressed as CLI-first steps with code patterns for the app itself.

## Workflow: Set Up App with Lakebase

### Step 1: Create or Verify the Lakebase Project

```bash
# List projects to find yours
lakebase projects list --output JSON

# Or get a specific project
lakebase projects get --name projects/my-project --output JSON
```

### Step 2: Verify a Compute Exists

```bash
# List computes on the target branch
lakebase endpoints list --parent projects/my-project/branches/production --output JSON
```

If no compute exists, create one:

```bash
lakebase endpoints create --parent projects/my-project/branches/production --endpoint-id my-compute --json '{"spec": {"autoscaling_limit_min_cu": 1.0, "autoscaling_limit_max_cu": 4.0}}'
```

### Step 3: Create or Verify the App

```bash
# Create a new app
apps create --name my-app --output JSON

# Or check an existing app
apps get --name my-app --output JSON
```

### Step 4: Deploy the App

```bash
apps deploy --app-name my-app --source-code-path /Workspace/Users/user@example.com/my-app --output JSON
```

### Step 5: Verify

```bash
apps get --name my-app --output JSON
```

Check that `status` is `RUNNING` and note the `url` field.

## Environment Variables

When Lakebase is configured as an app resource, these environment variables are automatically injected into the app runtime:

| Variable               | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `PGHOST`               | Database hostname                              |
| `PGDATABASE`           | Database name (default: `databricks_postgres`) |
| `PGUSER`               | Username (app's service principal)             |
| `PGPORT`               | Port number (default: 5432)                    |
| `DATABRICKS_CLIENT_ID` | App's service principal client ID              |

## App Code: Database Connection Patterns

These are Python patterns for the app's own source code (not CLI commands).

### Basic psycopg Connection

```python
import os
import uuid
import psycopg2
from databricks.sdk import WorkspaceClient

w = WorkspaceClient()
cred = w.database.generate_database_credential(
    request_id=str(uuid.uuid4()),
    instance_names=[os.environ["PGDATABASE"]]
)

conn = psycopg2.connect(
    host=os.environ["PGHOST"],
    database=os.environ["PGDATABASE"],
    user=os.environ["PGUSER"],
    port=os.environ.get("PGPORT", 5432),
    password=cred.token,
    sslmode="require"
)

with conn.cursor() as cur:
    cur.execute("SELECT current_database(), current_user")
    print(cur.fetchone())

conn.close()
```

### SQLAlchemy with Token Refresh

For long-running apps (OAuth tokens expire after 1 hour), auto-refresh every 15 minutes:

```python
import os, uuid, time
from sqlalchemy import create_engine, text, event
from databricks.sdk import WorkspaceClient

w = WorkspaceClient()
engine = create_engine(
    f"postgresql+psycopg2://{os.environ['PGUSER']}:@{os.environ['PGHOST']}:{os.environ.get('PGPORT', 5432)}/{os.environ['PGDATABASE']}"
)

postgres_password = None
last_password_refresh = 0

@event.listens_for(engine, "do_connect")
def provide_token(dialect, conn_rec, cargs, cparams):
    global postgres_password, last_password_refresh
    if postgres_password is None or time.time() - last_password_refresh > 900:
        cred = w.database.generate_database_credential(
            request_id=str(uuid.uuid4()),
            instance_names=[os.environ["PGDATABASE"]]
        )
        postgres_password = cred.token
        last_password_refresh = time.time()
    cparams["password"] = postgres_password
    cparams["sslmode"] = "require"

with engine.connect() as conn:
    result = conn.execute(text("SELECT version()"))
    print(result.fetchone())
```

### Schema Naming Pattern

Each app gets an isolated schema:

```python
import os

app_name = "my-app"
client_id = os.environ["DATABRICKS_CLIENT_ID"]
schema = f"{app_name}_schema_{client_id}"
```

## Unity Catalog Federation

Lakebase automatically creates a Unity Catalog catalog for your database. Query app data through UC from notebooks or SQL warehouses:

```sql
SELECT * FROM databricks_postgres_main.my_app_schema_abc123.todos
```

## Synced Tables (Reverse ETL)

Sync Unity Catalog tables into Lakebase for low-latency access:

- **Snapshot**: One-time copy
- **Triggered**: Periodic updates (requires Change Data Feed)
- **Continuous**: Real-time streaming updates

## Related

- For managing apps via CLI: [`databricks-apps.md`](databricks-apps.md)
- For managing Lakebase via CLI: [`lakebase.md`](lakebase.md)
````

### `conversation-history.md`

Webpack chunk `10617.<hash>.chunk.js`, module `510617`.

````markdown
# Conversation History via CLI

Browse and read the user's past assistant conversations stored in `~/.conversations` using `runDatabricksCli`.

## List Conversations

```bash
# List items in the conversations directory
workspace list /Workspace/Users/{currentUserEmail}/.conversations --output JSON
```

Parse the JSON output to extract conversation titles. Notebook names follow the pattern `___DBCONVERSATION___(): <title>` — strip the prefix to get the human-readable title. Sort by `modified_at` for most recent first.

## Export a Conversation

```bash
# Export the conversation notebook as source
workspace export /Workspace/Users/{currentUserEmail}/.conversations/{notebook_name}
```

The exported content is a JSON notebook. Parse `cells` to extract messages — each cell has a `metadata.role` field (`user`, `assistant`, or `summary`).

## Search by Title

Use the list command and filter results client-side by matching the conversation title against a keyword:

```bash
workspace list /Workspace/Users/{currentUserEmail}/.conversations --output JSON
```

Then search the returned paths for the keyword.

## Tips

- Replace `{currentUserEmail}` with the actual user email (available from context).
- Conversation notebooks are stored as Databricks notebooks, not plain files.
- The `workspace export` command returns base64-encoded content by default. Use the raw output to parse the JSON structure.
````

### `governed-tags.md`

Webpack chunk `47781.<hash>.chunk.js`, module `347781`.

````markdown
# Governed Tags (Python SDK & CLI)

Governed tags are account-level tags with enforced rules. They restrict which values are allowed and which users can assign them. Governed tags can be created through the Catalog Explorer UI, the Python SDK, or the CLI — there is no SQL DDL for creating governed tags.

**UI workflow**: In Catalog Explorer, click the **Govern** button → click **View All** on the Governed Tags card → click **Create Governed Tag** (top-right) to define a tag key and allowed values. See [`uc-tags.md`](../writing-sql/uc-tags.md) for the full UI steps.

If you create a governed tag with the same key as existing free-form tags, all existing assignments automatically become governed. Existing values outside the allowed list remain but cannot be reassigned.

## Governed Tag Constraints

- Max 1,000 governed tags per account.
- Max 50 allowed values per tag.
- Tag keys are case-sensitive (`Sales` and `sales` are distinct).
- Tag data is stored as plain text — never use sensitive information in tag names or values.

## Governed Tag Permissions

- **Create a governed tag**: Requires `CREATE` permission at the account level (account/workspace admins have this by default).
- **Assign a governed tag**: Requires `ASSIGN` permission on the governed tag, plus `APPLY TAG`, `USE SCHEMA`, and `USE CATALOG` on the target object.

## Creating Governed Tags (Python SDK)

Governed tags cannot be created with SQL. Use the Python SDK:

```python
from databricks.sdk import WorkspaceClient
from databricks.sdk.service.tags import TagPolicy, Value

w = WorkspaceClient()

tag = w.tag_policies.create_tag_policy(
    tag_policy=TagPolicy(
        tag_key='my_tag_key',
        description='Description of the tag',
        values=[
            Value(name='value1'),
            Value(name='value2'),
            Value(name='value3')
        ]
    )
)
print(f"Created: {tag.tag_key} (ID: {tag.id})")
```

### List All Governed Tags

```python
for policy in w.tag_policies.list_tag_policies():
    values = [v.name for v in policy.values] if policy.values else []
    print(f"{policy.tag_key}: {values}")
```

### Get a Specific Governed Tag

```python
tag = w.tag_policies.get_tag_policy(tag_key='my_tag_key')
print(f"Key: {tag.tag_key}, Values: {[v.name for v in tag.values]}")
```

### Update a Governed Tag

```python
updated = w.tag_policies.update_tag_policy(
    tag_policy=TagPolicy(
        tag_key='my_tag_key',
        description='Updated description',
        values=[
            Value(name='value1'),
            Value(name='value2'),
            Value(name='new_value')
        ]
    )
)
```

### Delete a Governed Tag

Deleting a governed tag makes all existing assignments with that key ungoverned (tags remain on objects but anyone can modify them).

```python
w.tag_policies.delete_tag_policy(tag_key='my_tag_key')
```

## Creating Governed Tags (CLI)

> **CRITICAL WARNING — `allowed_values` vs `values`**
>
> The Databricks CLI documentation examples show `"allowed_values": ["v1", "v2"]` in JSON payloads.
> This is **wrong**. The actual API field is `"values"` with a list of objects: `[{"name": "v1"}, {"name": "v2"}]`.
>
> The CLI **silently ignores** the unrecognized `allowed_values` field, creating a tag with **no allowed values**.
> This only surfaces later when assigning the tag fails with `"Allowed values: []"`.
>
> **Prefer the SDK** (`w.tag_policies.create_tag_policy`) for reliability. If you must use the CLI, use the correct `values` field format below.

```bash
# Without allowed values
databricks tag-policies create-tag-policy my_tag_key --description "Description"

# With allowed values — use "values" NOT "allowed_values"
databricks tag-policies create-tag-policy --json '{"tag_key": "my_tag_key", "description": "Description", "values": [{"name": "value1"}, {"name": "value2"}]}'
```

Note: When using `--json`, do NOT pass the tag key as a positional argument — include `tag_key` in the JSON body.
````
