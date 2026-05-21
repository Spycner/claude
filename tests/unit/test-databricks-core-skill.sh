#!/usr/bin/env bash
# Test: databricks:databricks-core skill structure
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
PLUGIN_DIR="${PLUGIN_DIR:-$REPO_ROOT/plugins/databricks}"
SKILL_DIR="$PLUGIN_DIR/skills/databricks-core"
SKILL_MD="$SKILL_DIR/SKILL.md"

echo "=== Test: databricks:databricks-core skill ==="

# Plugin version pin (lockstep)
for manifest in \
    "$PLUGIN_DIR/.claude-plugin/plugin.json" \
    "$PLUGIN_DIR/.codex-plugin/plugin.json"; do
    if jq -e '.name == "databricks" and .version == "0.3.0" and .license == "MIT"' "$manifest" >/dev/null; then
        echo "[PASS] $manifest metadata pinned at 0.3.0"
    else
        echo "[FAIL] $manifest metadata invalid (expected name=databricks, version=0.3.0, license=MIT)"; exit 1
    fi
done

# Codex manifest extras
if jq -e '.skills == "./skills/" and (.interface.displayName | length > 0)' \
    "$PLUGIN_DIR/.codex-plugin/plugin.json" >/dev/null; then
    echo "[PASS] codex manifest has skills path and interface.displayName"
else
    echo "[FAIL] codex manifest missing skills path or interface.displayName"; exit 1
fi

# Skill file presence
if [ -s "$SKILL_MD" ] && head -1 "$SKILL_MD" | grep -q '^---$'; then
    echo "[PASS] SKILL.md exists with frontmatter"
else
    echo "[FAIL] SKILL.md missing or no frontmatter"; exit 1
fi

for ref in databricks-cli-auth.md data-exploration.md; do
    if [ -s "$SKILL_DIR/$ref" ]; then
        echo "[PASS] $ref present and non-empty"
    else
        echo "[FAIL] $ref missing or empty"; exit 1
    fi
done

# CLI installation walkthrough was deliberately not ported (NOTICE documents why).
# Guard against accidental re-introduction.
if [ -e "$SKILL_DIR/databricks-cli-install.md" ]; then
    echo "[FAIL] databricks-cli-install.md exists but was deliberately not ported (see NOTICE)"; exit 1
else
    echo "[PASS] databricks-cli-install.md correctly absent"
fi

# Frontmatter sanity: name pinned, metadata.version block was dropped from upstream
if grep -q '^name: "databricks-core"' "$SKILL_MD"; then
    echo "[PASS] frontmatter name = databricks-core"
else
    echo "[FAIL] frontmatter name mismatch"; exit 1
fi
if head -20 "$SKILL_MD" | grep -q '^metadata:'; then
    echo "[FAIL] upstream metadata block survived the port"; exit 1
else
    echo "[PASS] upstream metadata block was dropped"
fi

# Dangling cross-references to unported dependent skills must be gone
if grep -rqE 'databricks-(jobs|pipelines|apps|lakebase|model-serving|serverless-migration|dabs)' "$SKILL_DIR"/*.md; then
    echo "[FAIL] dangling skill cross-references found:"
    grep -rnE 'databricks-(jobs|pipelines|apps|lakebase|model-serving|serverless-migration|dabs)' "$SKILL_DIR"/*.md
    exit 1
else
    echo "[PASS] no dangling skill cross-references"
fi

# Em-dash and en-dash lint
if grep -rqP '[\x{2014}\x{2013}]' "$SKILL_DIR"; then
    echo "[FAIL] U+2014 or U+2013 in databricks-core skill"
    grep -rlP '[\x{2014}\x{2013}]' "$SKILL_DIR" >&2
    exit 1
else
    echo "[PASS] no U+2014 or U+2013"
fi

# Attribution files
for f in LICENSE LICENSE-upstream NOTICE; do
    if [ -s "$PLUGIN_DIR/$f" ]; then
        echo "[PASS] $f present"
    else
        echo "[FAIL] $f missing or empty"; exit 1
    fi
done

# NOTICE references upstream commit SHA
if grep -q 'bf6d932' "$PLUGIN_DIR/NOTICE"; then
    echo "[PASS] NOTICE mentions upstream commit bf6d932"
else
    echo "[FAIL] NOTICE missing upstream commit SHA"; exit 1
fi

echo "=== Tests complete ==="
