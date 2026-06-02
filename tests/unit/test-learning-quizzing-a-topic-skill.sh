#!/usr/bin/env bash
# Test: learning:quizzing-a-topic skill structure
# Verifies SKILL.md exists with correct frontmatter, the plugin manifests are at
# the current learning version, the body names the teaching-engine mechanics and
# the user-named-topic curriculum source (with one-clarifying-question scoping),
# and the subtree has no em-dashes/en-dashes.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/../test-helpers.sh"

REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SKILL_DIR="$REPO_ROOT/plugins/learning/skills/quizzing-a-topic"
SKILL_MD="$SKILL_DIR/SKILL.md"
CCM="$REPO_ROOT/plugins/learning/.claude-plugin/plugin.json"
CXM="$REPO_ROOT/plugins/learning/.codex-plugin/plugin.json"

echo "=== Test: learning:quizzing-a-topic skill structure ==="
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

# Test 2: frontmatter name is quizzing-a-topic
echo "Test 2: frontmatter name..."
name=$(awk -F': *' '/^name:/{print $2; exit}' "$SKILL_MD")
if [ "$name" = "quizzing-a-topic" ]; then
    echo "  [PASS] name is quizzing-a-topic"
else
    echo "  [FAIL] name is '$name' (expected quizzing-a-topic)"
    exit 1
fi
echo ""

# Test 3: both plugin manifests pin version 0.1.0
echo "Test 3: plugin manifests at 0.1.0..."
if jq -e '.version == "0.1.0"' "$CCM" >/dev/null && jq -e '.version == "0.1.0"' "$CXM" >/dev/null; then
    echo "  [PASS] both plugin manifests at 0.1.0"
else
    echo "  [FAIL] plugin manifests not at 0.1.0"
    exit 1
fi
echo ""

# Test 4: body names the teaching engine and the topic-scoping rule
echo "Test 4: body names engine + topic scoping..."
for term in 'AskUserQuestion' 'checklist' 'mastery' 'topic' 'clarifying question' 'eli5'; do
    if grep -qF "$term" "$SKILL_MD"; then
        echo "  [PASS] SKILL.md mentions $term"
    else
        echo "  [FAIL] SKILL.md missing $term"
        exit 1
    fi
done
echo ""

# Test 5: description targets a named topic
echo "Test 5: description targets a topic..."
desc=$(awk '/^description:/{flag=1;sub(/^description:[ ]*/,"")} /^---$/{flag=0} flag' "$SKILL_MD")
if echo "$desc" | grep -qiF 'topic'; then
    echo "  [PASS] description mentions topic"
else
    echo "  [FAIL] description missing 'topic'"
    exit 1
fi
echo ""

# Test 6: no em-dashes or en-dashes anywhere in the skill subtree
echo "Test 6: no em-dashes/en-dashes in subtree..."
if grep -rqP '[\x{2014}\x{2013}]' "$SKILL_DIR"; then
    echo "  [FAIL] em-dash or en-dash found in $SKILL_DIR"
    grep -rnP '[\x{2014}\x{2013}]' "$SKILL_DIR" | sed 's/^/    /'
    exit 1
else
    echo "  [PASS] no em-dashes/en-dashes"
fi
echo ""

echo "=== Tests complete ==="
