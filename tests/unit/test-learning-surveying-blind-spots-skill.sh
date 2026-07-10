#!/usr/bin/env bash
# Test: learning:surveying-blind-spots skill structure
# Verifies SKILL.md exists with correct frontmatter, the plugin manifests are at
# the current learning version, the body carries the two pass shapes (codebase,
# field) and the briefing deliverable with rewritten prompts, the sibling
# routing lines are in place, and the subtree has no em-dashes/en-dashes.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/../test-helpers.sh"

REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SKILL_DIR="$REPO_ROOT/plugins/learning/skills/surveying-blind-spots"
SKILL_MD="$SKILL_DIR/SKILL.md"
SIBLING_MD="$REPO_ROOT/plugins/learning/skills/quizzing-a-topic/SKILL.md"
CCM="$REPO_ROOT/plugins/learning/.claude-plugin/plugin.json"
CXM="$REPO_ROOT/plugins/learning/.codex-plugin/plugin.json"

echo "=== Test: learning:surveying-blind-spots skill structure ==="
echo ""

# Test 1: SKILL.md exists with frontmatter
echo "Test 1: SKILL.md exists with frontmatter..."
if [ -s "$SKILL_MD" ]; then
    if head -1 "$SKILL_MD" | grep -q '^---$'; then
        echo "  [PASS] SKILL.md exists with frontmatter"
    else
        echo "  [FAIL] SKILL.md missing frontmatter"
        exit 1
    fi
else
    echo "  [FAIL] SKILL.md missing or empty"
    exit 1
fi
echo ""

# Test 2: frontmatter name is surveying-blind-spots
echo "Test 2: frontmatter name..."
name=$(awk -F': *' '/^name:/{print $2; exit}' "$SKILL_MD")
if [ "$name" = "surveying-blind-spots" ]; then
    echo "  [PASS] name is surveying-blind-spots"
else
    echo "  [FAIL] name is '$name' (expected surveying-blind-spots)"
    exit 1
fi
echo ""

# Test 3: both plugin manifests pin version 0.2.0
echo "Test 3: plugin manifests at 0.2.0..."
if jq -e '.version == "0.2.0"' "$CCM" >/dev/null && jq -e '.version == "0.2.0"' "$CXM" >/dev/null; then
    echo "  [PASS] both plugin manifests at 0.2.0"
else
    echo "  [FAIL] plugin manifests not at 0.2.0"
    exit 1
fi
echo ""

# Test 4: body carries the pass shapes and the briefing deliverable
echo "Test 4: body carries pass shapes + briefing..."
for term in 'Codebase pass' 'Field pass' 'briefing' 'unknown unknowns' 'git log' 'Better prompts'; do
    if grep -qF "$term" "$SKILL_MD"; then
        echo "  [PASS] SKILL.md mentions $term"
    else
        echo "  [FAIL] SKILL.md missing $term"
        exit 1
    fi
done
echo ""

# Test 5: no quiz loop; briefing not tutoring
echo "Test 5: routes tutoring away instead of quizzing..."
if grep -qF 'learning:quizzing-a-topic' "$SKILL_MD"; then
    echo "  [PASS] SKILL.md routes mastery tutoring to quizzing-a-topic"
else
    echo "  [FAIL] SKILL.md missing quizzing-a-topic routing"
    exit 1
fi
if grep -qF 'do not quiz' "$SKILL_MD"; then
    echo "  [PASS] SKILL.md forbids the quiz loop"
else
    echo "  [FAIL] SKILL.md missing the no-quiz framing"
    exit 1
fi
echo ""

# Test 6: sibling quizzing-a-topic routes blind-spot prompts here
echo "Test 6: sibling routing line..."
if grep -qF 'learning:surveying-blind-spots' "$SIBLING_MD"; then
    echo "  [PASS] quizzing-a-topic routes blind-spot passes here"
else
    echo "  [FAIL] quizzing-a-topic missing surveying-blind-spots routing"
    exit 1
fi
echo ""

# Test 7: no em-dashes or en-dashes anywhere in the skill subtree
echo "Test 7: no em-dashes/en-dashes in subtree..."
if grep -rqP '[\x{2014}\x{2013}]' "$SKILL_DIR"; then
    echo "  [FAIL] em-dash or en-dash found in $SKILL_DIR"
    grep -rnP '[\x{2014}\x{2013}]' "$SKILL_DIR" | sed 's/^/    /'
    exit 1
else
    echo "  [PASS] no em-dashes/en-dashes"
fi
echo ""

echo "=== Tests complete ==="
