#!/usr/bin/env bash
# Test: presentations:extracting-presets skill structure
# Verifies SKILL.md, the pointer to the preset contract, the .pgoell default
# placement, and the workflow checklist.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SKILL_DIR="$REPO_ROOT/plugins/presentations/skills/extracting-presets"
SKILL_MD="$SKILL_DIR/SKILL.md"

echo "=== Test: presentations:extracting-presets skill structure ==="
echo ""

echo "Test 1: SKILL.md exists with frontmatter..."
if [ -s "$SKILL_MD" ] && head -1 "$SKILL_MD" | grep -q '^---$'; then
    echo "  [PASS] SKILL.md exists with frontmatter"
else
    echo "  [FAIL] SKILL.md missing or lacks frontmatter"
    exit 1
fi
echo ""

echo "Test 2: Points at the preset contract..."
if grep -qF '../../presets/README.md' "$SKILL_MD"; then
    echo "  [PASS] SKILL.md points at presets/README.md"
else
    echo "  [FAIL] SKILL.md missing pointer to preset contract"
    exit 1
fi
echo ""

echo "Test 3: Default placement is the .pgoell layer..."
if grep -qF '.pgoell/presentations/presets/' "$SKILL_MD"; then
    echo "  [PASS] SKILL.md places new presets under .pgoell/presentations/presets/"
else
    echo "  [FAIL] SKILL.md missing .pgoell placement"
    exit 1
fi
echo ""

echo "Test 4: Workflow checklist and recipe sections present..."
for term in 'Inventory the source' 'manifest.md' 'Icon libraries' 'Slide masters' 'Extending an existing preset'; do
    if grep -qiF "$term" "$SKILL_MD"; then
        echo "  [PASS] SKILL.md mentions $term"
    else
        echo "  [FAIL] SKILL.md missing $term"
        exit 1
    fi
done
echo ""

echo "Test 5: Skill subtree free of em/en dashes..."
if grep -rqP '[\x{2014}\x{2013}]' "$SKILL_DIR"; then
    echo "  [FAIL] em-dash or en-dash found in skill subtree"
    exit 1
else
    echo "  [PASS] no em/en dashes in skill subtree"
fi
echo ""

echo "=== Tests complete ==="
