#!/usr/bin/env bash
# Test: presentations:exporting-presentations-to-pptx skill structure
# Verifies SKILL.md, the python-pptx recipes reference, uv-first tooling, and
# the cross-reference to the deck builder.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SKILL_DIR="$REPO_ROOT/plugins/presentations/skills/exporting-presentations-to-pptx"
SKILL_MD="$SKILL_DIR/SKILL.md"

echo "=== Test: presentations:exporting-presentations-to-pptx skill structure ==="
echo ""

echo "Test 1: SKILL.md exists with frontmatter..."
if [ -s "$SKILL_MD" ] && head -1 "$SKILL_MD" | grep -q '^---$'; then
    echo "  [PASS] SKILL.md exists with frontmatter"
else
    echo "  [FAIL] SKILL.md missing or lacks frontmatter"
    exit 1
fi
echo ""

echo "Test 2: Recipes reference exists and is mentioned..."
if [ -s "$SKILL_DIR/references/python-pptx-recipes.md" ] && grep -qF 'python-pptx-recipes' "$SKILL_MD"; then
    echo "  [PASS] references/python-pptx-recipes.md exists and is mentioned"
else
    echo "  [FAIL] references/python-pptx-recipes.md missing or unmentioned"
    exit 1
fi
echo ""

echo "Test 3: Key workflow terms present..."
for term in 'uv' 'EMU' 'speaker notes' 'creating-presentations'; do
    if grep -qiF "$term" "$SKILL_MD"; then
        echo "  [PASS] SKILL.md mentions $term"
    else
        echo "  [FAIL] SKILL.md missing $term"
        exit 1
    fi
done
echo ""

echo "Test 4: Skill subtree free of em/en dashes..."
if grep -rqP '[\x{2014}\x{2013}]' "$SKILL_DIR"; then
    echo "  [FAIL] em-dash or en-dash found in skill subtree"
    exit 1
else
    echo "  [PASS] no em/en dashes in skill subtree"
fi
echo ""

echo "=== Tests complete ==="
