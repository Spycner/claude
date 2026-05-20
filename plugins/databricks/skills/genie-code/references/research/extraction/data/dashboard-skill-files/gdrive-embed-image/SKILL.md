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
