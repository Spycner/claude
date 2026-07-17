#!/usr/bin/env bash
# Test: presentations:designing-presentations skill structure
# Verifies SKILL.md, the eight reference files, the deck.md hand-off, and the
# workflow phase headings.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SKILL_DIR="$REPO_ROOT/plugins/presentations/skills/designing-presentations"
SKILL_MD="$SKILL_DIR/SKILL.md"

echo "=== Test: presentations:designing-presentations skill structure ==="
echo ""

echo "Test 1: SKILL.md exists with frontmatter..."
if [ -s "$SKILL_MD" ] && head -1 "$SKILL_MD" | grep -q '^---$'; then
    echo "  [PASS] SKILL.md exists with frontmatter"
else
    echo "  [FAIL] SKILL.md missing or lacks frontmatter"
    exit 1
fi
echo ""

echo "Test 2: All eight reference files exist and are mentioned..."
for ref in audience-brief-template audit-checklist critic-prompts message-architecture-template slide-brief-template slide-type-catalog storyboard-template time-budget; do
    if [ -s "$SKILL_DIR/references/$ref.md" ] && grep -qF "$ref" "$SKILL_MD"; then
        echo "  [PASS] references/$ref.md exists and is mentioned"
    else
        echo "  [FAIL] references/$ref.md missing or unmentioned"
        exit 1
    fi
done
echo ""

echo "Test 3: deck.md hand-off contract..."
for term in 'deck.md' 'creating-presentations'; do
    if grep -qF "$term" "$SKILL_MD"; then
        echo "  [PASS] SKILL.md mentions $term"
    else
        echo "  [FAIL] SKILL.md missing $term"
        exit 1
    fi
done
echo ""

echo "Test 4: Workflow section headings present..."
for h in 'When to Use' 'Workflow' 'Audit Mode' 'Output Format'; do
    if grep -qE "^## $h" "$SKILL_MD"; then
        echo "  [PASS] heading $h present"
    else
        echo "  [FAIL] heading $h missing"
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
