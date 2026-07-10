#!/usr/bin/env bash
# Test: agent-system-management:creating-skills skill structure
# Verifies SKILL.md exists with valid frontmatter, the five reference files and
# three agent docs exist and are mentioned, the eval pipeline (scripts,
# eval-viewer, assets) is present, plugin manifests are at 0.5.0, and the whole
# skill subtree is free of em-dashes and en-dashes.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/../test-helpers.sh"

REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
PLUGIN_ROOT="$REPO_ROOT/plugins/agent-system-management"
SKILL_DIR="$PLUGIN_ROOT/skills/creating-skills"
SKILL_MD="$SKILL_DIR/SKILL.md"

echo "=== Test: agent-system-management:creating-skills skill structure ==="
echo ""

# Test 1: Plugin manifests exist, parse, and are at 0.5.0
echo "Test 1: Plugin manifests at 0.5.0..."
for manifest in .claude-plugin/plugin.json .codex-plugin/plugin.json; do
    f="$PLUGIN_ROOT/$manifest"
    if [ ! -f "$f" ]; then
        echo "  [FAIL] $manifest missing"
        exit 1
    fi
    if ! jq empty "$f" 2>/dev/null; then
        echo "  [FAIL] $manifest malformed JSON"
        exit 1
    fi
    version=$(jq -r .version "$f")
    if [ "$version" != "0.5.0" ]; then
        echo "  [FAIL] $manifest version is $version, expected 0.5.0"
        exit 1
    fi
    echo "  [PASS] $manifest exists, parses, version 0.5.0"
done
echo ""

# Test 2: Codex manifest has skills field and full interface block
echo "Test 2: Codex manifest is well-formed..."
CODEX="$PLUGIN_ROOT/.codex-plugin/plugin.json"
if [ "$(jq -r .skills "$CODEX")" != "./skills/" ]; then
    echo "  [FAIL] Codex manifest skills field missing or wrong"
    exit 1
fi
echo "  [PASS] skills field is ./skills/"
for field in displayName shortDescription longDescription developerName category capabilities defaultPrompt; do
    if [ "$(jq -r ".interface.$field" "$CODEX")" = "null" ]; then
        echo "  [FAIL] Codex manifest interface.$field missing"
        exit 1
    fi
    echo "  [PASS] interface.$field present"
done
echo ""

# Test 3: SKILL.md exists with valid frontmatter
echo "Test 3: SKILL.md exists with frontmatter..."
if [ ! -s "$SKILL_MD" ]; then
    echo "  [FAIL] SKILL.md missing or empty"
    exit 1
fi
if ! head -1 "$SKILL_MD" | grep -q '^---$'; then
    echo "  [FAIL] SKILL.md missing frontmatter delimiter"
    exit 1
fi
if ! grep -q '^name: creating-skills$' "$SKILL_MD"; then
    echo "  [FAIL] SKILL.md missing or wrong name field"
    exit 1
fi
if ! grep -q '^description:' "$SKILL_MD"; then
    echo "  [FAIL] SKILL.md missing description field"
    exit 1
fi
echo "  [PASS] SKILL.md exists with valid frontmatter"
echo ""

# Test 4: All five reference files exist and SKILL.md mentions each
echo "Test 4: Reference files exist and are mentioned..."
for ref in schemas platform-mechanics writing-great-skills bulletproofing marketplace-integration; do
    f="$SKILL_DIR/references/$ref.md"
    if [ ! -s "$f" ]; then
        echo "  [FAIL] references/$ref.md missing or empty"
        exit 1
    fi
    if ! grep -qF "references/$ref.md" "$SKILL_MD"; then
        echo "  [FAIL] SKILL.md missing reference to $ref.md"
        exit 1
    fi
    echo "  [PASS] references/$ref.md exists and is mentioned"
done
echo ""

# Test 5: Agent docs exist and SKILL.md mentions each
echo "Test 5: Agent docs exist and are mentioned..."
for agent in grader comparator analyzer; do
    f="$SKILL_DIR/agents/$agent.md"
    if [ ! -s "$f" ]; then
        echo "  [FAIL] agents/$agent.md missing or empty"
        exit 1
    fi
    if ! grep -qF "agents/$agent.md" "$SKILL_MD"; then
        echo "  [FAIL] SKILL.md missing reference to agents/$agent.md"
        exit 1
    fi
    echo "  [PASS] agents/$agent.md exists and is mentioned"
done
echo ""

# Test 6: Eval pipeline tooling is present
echo "Test 6: Eval pipeline tooling present..."
for tool in scripts/quick_validate.py scripts/package_skill.py scripts/run_eval.py scripts/run_loop.py scripts/improve_description.py scripts/aggregate_benchmark.py scripts/generate_report.py eval-viewer/generate_review.py eval-viewer/viewer.html assets/eval_review.html; do
    if [ ! -s "$SKILL_DIR/$tool" ]; then
        echo "  [FAIL] $tool missing or empty"
        exit 1
    fi
    echo "  [PASS] $tool exists"
done
for mention in 'generate_review.py' 'aggregate_benchmark' 'run_loop' 'package_skill' 'assets/eval_review.html'; do
    if ! grep -qF "$mention" "$SKILL_MD"; then
        echo "  [FAIL] SKILL.md does not mention $mention"
        exit 1
    fi
    echo "  [PASS] SKILL.md mentions $mention"
done
echo ""

# Test 7: SKILL.md surfaces the core lifecycle stages
echo "Test 7: SKILL.md surfaces lifecycle stages..."
for keyword in 'Capture Intent' 'Test Cases' 'Improving the skill' 'Description Optimization' 'trigger regression' 'marketplace'; do
    if grep -qiF "$keyword" "$SKILL_MD"; then
        echo "  [PASS] SKILL.md mentions $keyword"
    else
        echo "  [FAIL] SKILL.md missing $keyword"
        exit 1
    fi
done
echo ""

# Test 8: SKILL.md description includes specific trigger keywords
echo "Test 8: Description has triggers..."
desc=$(awk '/^description:/{flag=1;sub(/^description:[ ]*/,"")} /^---$/{flag=0} flag' "$SKILL_MD")
if echo "$desc" | grep -qiE 'creat|improv|edit'; then
    echo "  [PASS] description mentions creation and improvement"
else
    echo "  [FAIL] description missing creation and improvement verbs"
    exit 1
fi
if echo "$desc" | grep -qiE 'eval|benchmark|triggering'; then
    echo "  [PASS] description mentions evals and triggering"
else
    echo "  [FAIL] description missing eval and triggering context"
    exit 1
fi
echo ""

# Test 9: No em-dashes or en-dashes anywhere in the skill subtree (project rule)
# Byte-literal UTF-8 patterns instead of grep -P: stock macOS BSD grep has no -P,
# and a failing grep invocation reads as "no match", silently passing the test.
echo "Test 9: No em-dashes in skill subtree..."
EMDASH=$'\xe2\x80\x94'
ENDASH=$'\xe2\x80\x93'
if grep -rn -e "$EMDASH" -e "$ENDASH" "$SKILL_DIR"; then
    echo "  [FAIL] em-dashes or en-dashes found in skill subtree"
    exit 1
fi
echo "  [PASS] no em-dashes or en-dashes in skill subtree"
echo ""

# Test 10: Marketplace registration in both files
echo "Test 10: Marketplace registration..."
for mkt in .claude-plugin/marketplace.json .agents/plugins/marketplace.json; do
    if jq -r '.plugins[].name' "$REPO_ROOT/$mkt" | grep -q '^agent-system-management$'; then
        echo "  [PASS] $mkt registers agent-system-management"
    else
        echo "  [FAIL] $mkt does not register agent-system-management"
        exit 1
    fi
done
echo ""

# Test 11: Version bump invariant is explicit
echo "Test 11: Version bump invariant..."
if grep -qF 'plugin change' "$SKILL_DIR/references/marketplace-integration.md"; then
    echo "  [PASS] marketplace-integration.md covers version bump discipline"
else
    echo "  [FAIL] marketplace-integration.md missing version bump discipline"
    exit 1
fi
if grep -qF 'Every plugin change bumps version' "$REPO_ROOT/AGENTS.md"; then
    echo "  [PASS] AGENTS.md requires plugin version bumps"
else
    echo "  [FAIL] AGENTS.md missing plugin version bump rule"
    exit 1
fi
if jq -e '.plugins[] | select(.name == "agent-system-management") | .version == "0.5.0"' "$REPO_ROOT/.claude-plugin/marketplace.json" >/dev/null; then
    echo "  [PASS] Claude marketplace agent-system-management at 0.5.0"
else
    echo "  [FAIL] Claude marketplace agent-system-management not at 0.5.0"
    exit 1
fi
echo ""

echo "=== Tests complete ==="
