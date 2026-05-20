# Genie Code skill: `gdrive-embed-image`

Full content of the built-in Genie Code skill `gdrive-embed-image`, extracted from the Databricks SPA webpack chunks on workspace `dbc-df321db9-486f.cloud.databricks.com` (captured 2026-05-20). Loaded by the **Dashboard Authoring Agent** (`dashboardAuthoringAgent`) — see [`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md). The agent loads this file via the `readSkillFile` tool when the user pastes a Google Drive sharing URL for embedding.

## Registry record

Defined as `aF` in chunk `40961.110e90c1b8.chunk.js` (module `229581` — `DashboardAuthoringAgentContext`). Referenced from the agent factory as `skillsets:[{name:"dashboardAgent",skills:[aW,aV,aF,...]}]`.

```jsonc
{
  "name":        "gdrive-embed-image",
  "description": "Convert a Google Drive sharing URL to an embeddable thumbnail URL. Use when the user provides a Google Drive image link to embed in a dashboard or markdown widget.",
  "files":       [ /* 1 entry — see below */ ]
}
```

## File manifest

The file lives in its own webpack chunk and is exposed as a raw string `module.exports`, loaded on demand via `r.e(<chunk>).then(r.t.bind(r, <module>, 17))`. Chunk hashes change per release. The path the agent uses with `readSkillFile` is `skills/gdrive-embed-image/SKILL.md`.

| File | Chunk id | Module id | Feature flag |
|---|---|---|---|
| `SKILL.md` | `93509` (hash `6601166150` at capture) | `493509` | — |

## Loaded by

| Agent | How it's loaded |
|---|---|
| Dashboard Authoring Agent (`dashboardAuthoringAgent`) | Static — third entry in the `dashboardAgent` skillset. Always present. |

Maps to the `editWidgetsV2` tool — markdown widgets render thumbnail URLs produced by this skill. There is no special-purpose image-embedding tool; the agent constructs the thumbnail URL from the user's Google Drive link in chat and writes it into a widget's markdown content via `editWidgetsV2`.

## Files

### `SKILL.md`

Webpack chunk `93509.6601166150.chunk.js`, module `493509`. 2,230 bytes.

````markdown
# Google Drive Image URL Conversion

## Overview

Converts Google Drive sharing URLs into publicly renderable image thumbnail URLs for embedding in dashboards, markdown widgets, or any context requiring a direct image URL.

## When to Use

- User provides a Google Drive sharing URL (e.g., `https://drive.google.com/file/d/.../view?usp=sharing`)
- User wants to embed a Google Drive image in a dashboard or markdown widget
- The provided URL is not in a directly renderable format

## Conversion Steps

### Step 1: Identify the URL Format

Google Drive sharing URLs follow this pattern:

```
https://drive.google.com/file/d/{FILE_ID}/view?usp=sharing
```

If the URL does not contain `/file/d/` and `/view`, it is not a standard Google Drive sharing link. Inform the user and ask them to provide one.

### Step 2: Extract the File ID

The file ID is the long alphanumeric string between `/d/` and `/view`.

**Example:**

- Input: `https://drive.google.com/file/d/1Nm6EqXUxlMaJC2FAjShtJJsEeXeoDYVC/view?usp=sharing`
- File ID: `1Nm6EqXUxlMaJC2FAjShtJJsEeXeoDYVC`

### Step 3: Construct the Thumbnail URL

```
https://drive.google.com/thumbnail?id={FILE_ID}&sz=w1000
```

Always default to `sz=w1000` unless the user specifies a different size.

### Step 4: Control Output Size (Optional)

| Parameter      | Description          | Example    |
| -------------- | -------------------- | ---------- |
| `sz=w{NUMBER}` | Set width in pixels  | `sz=w800`  |
| `sz=h{NUMBER}` | Set height in pixels | `sz=h600`  |
| `sz=s{NUMBER}` | Set max dimension    | `sz=s1000` |

### Step 5: Complete Example

**Input:**

```
https://drive.google.com/file/d/1Nm6EqXUxlMaJC2FAjShtJJsEeXeoDYVC/view?usp=sharing
```

**Output:**

```
https://drive.google.com/thumbnail?id=1Nm6EqXUxlMaJC2FAjShtJJsEeXeoDYVC&sz=w1000
```

After conversion, use the thumbnail URL in markdown image syntax:

```
![Alt Text](https://drive.google.com/thumbnail?id=1Nm6EqXUxlMaJC2FAjShtJJsEeXeoDYVC&sz=w1000)
```

## Important Requirements

- The Google Drive file **must** have sharing set to "Anyone with the link" for the thumbnail URL to work.
- If the user provides a URL that is not in the standard format, inform them and ask for a proper Google Drive sharing link.
````
