#!/usr/bin/env bash
# Test: databricks:databricks-docs skill structure
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
PLUGIN_DIR="${PLUGIN_DIR:-$REPO_ROOT/plugins/databricks}"
SKILL_DIR="$PLUGIN_DIR/skills/databricks-docs"
SKILL_MD="$SKILL_DIR/SKILL.md"
INDEX="$SKILL_DIR/references/docs-index.md"

echo "=== Test: databricks:databricks-docs skill ==="

# Plugin version pin
for manifest in \
    "$PLUGIN_DIR/.claude-plugin/plugin.json" \
    "$PLUGIN_DIR/.codex-plugin/plugin.json"; do
    if jq -e '.name == "databricks" and .version == "0.3.1" and .license == "MIT"' "$manifest" >/dev/null; then
        echo "[PASS] $manifest metadata pinned at 0.3.1"
    else
        echo "[FAIL] $manifest metadata invalid (expected name=databricks, version=0.3.1, license=MIT)"; exit 1
    fi
done

# Files exist
if [ -s "$SKILL_MD" ] && head -1 "$SKILL_MD" | grep -q '^---$'; then
    echo "[PASS] SKILL.md exists with frontmatter"
else
    echo "[FAIL] SKILL.md missing or no frontmatter"; exit 1
fi
if [ -s "$INDEX" ]; then
    echo "[PASS] references/docs-index.md present and non-empty"
else
    echo "[FAIL] references/docs-index.md missing or empty"; exit 1
fi

# Frontmatter name
if grep -q '^name: databricks-docs' "$SKILL_MD"; then
    echo "[PASS] frontmatter name = databricks-docs"
else
    echo "[FAIL] frontmatter name mismatch"; exit 1
fi

# Skill mentions WebFetch (the tool the host is instructed to use)
if grep -q 'WebFetch' "$SKILL_MD"; then
    echo "[PASS] SKILL.md mentions WebFetch"
else
    echo "[FAIL] SKILL.md does not mention WebFetch"; exit 1
fi

# Docs index has at least 10 topic entries
TOPIC_COUNT="$(grep -cE '^[a-z-]+:[[:space:]]+https://docs\.databricks\.com/' "$INDEX" || true)"
if [ "$TOPIC_COUNT" -ge 10 ]; then
    echo "[PASS] docs-index has $TOPIC_COUNT topic entries (>= 10)"
else
    echo "[FAIL] docs-index has only $TOPIC_COUNT topic entries (expected >= 10)"; exit 1
fi

# Em-dash and en-dash lint
if grep -rqP '[\x{2014}\x{2013}]' "$SKILL_DIR"; then
    echo "[FAIL] U+2014 or U+2013 in databricks-docs skill"
    grep -rlP '[\x{2014}\x{2013}]' "$SKILL_DIR" >&2
    exit 1
else
    echo "[PASS] no U+2014 or U+2013"
fi

echo "=== Tests complete ==="
