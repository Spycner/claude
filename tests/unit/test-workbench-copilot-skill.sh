#!/usr/bin/env bash
# Test: workbench:copilot skill structure
# copilot is the human-in-the-loop sibling of autopilot. It ships only SKILL.md and
# references autopilot's six shared docs via the ../autopilot/references/ prefix.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/../test-helpers.sh"

REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SKILL_DIR="$REPO_ROOT/plugins/workbench/skills/copilot"
SKILL_MD="$SKILL_DIR/SKILL.md"
AUTOPILOT_REFS="$REPO_ROOT/plugins/workbench/skills/autopilot/references"

echo "=== Test: workbench:copilot skill structure ==="
echo ""

# Test 1: SKILL.md exists with frontmatter
echo "Test 1: SKILL.md exists with frontmatter..."
if [ -s "$SKILL_MD" ] && head -1 "$SKILL_MD" | grep -q '^---$'; then
    echo "  [PASS] SKILL.md exists with frontmatter"
else
    echo "  [FAIL] SKILL.md missing or no frontmatter"; exit 1
fi
echo ""

# Test 2: copilot ships NO references/ dir of its own
echo "Test 2: copilot has no references/ dir..."
if [ ! -d "$SKILL_DIR/references" ]; then
    echo "  [PASS] no copilot-local references/ dir"
else
    echo "  [FAIL] copilot must not duplicate references; it shares autopilot's"; exit 1
fi
echo ""

# Test 3: the six shared reference docs exist at the autopilot location
echo "Test 3: shared reference files exist under autopilot/references..."
for ref in profile-schema example-project-profile invariants required-skills claude-code-adapter codex-adapter; do
    if [ -s "$AUTOPILOT_REFS/$ref.md" ]; then
        echo "  [PASS] autopilot/references/$ref.md exists"
    else
        echo "  [FAIL] autopilot/references/$ref.md missing"; exit 1
    fi
done
echo ""

# Test 4: SKILL.md references each shared doc via the ../autopilot/references/ prefix
echo "Test 4: SKILL.md uses ../autopilot/references/ prefix for all six..."
for ref in profile-schema example-project-profile invariants required-skills claude-code-adapter codex-adapter; do
    if grep -qF "../autopilot/references/$ref.md" "$SKILL_MD"; then
        echo "  [PASS] SKILL.md references ../autopilot/references/$ref.md"
    else
        echo "  [FAIL] SKILL.md missing ../autopilot/references/$ref.md"; exit 1
    fi
done
echo ""

# Test 5: SKILL.md mentions .workbench/autopilot.md (shared profile)
echo "Test 5: SKILL.md mentions .workbench/autopilot.md..."
if grep -qF '.workbench/autopilot.md' "$SKILL_MD"; then
    echo "  [PASS] mentions .workbench/autopilot.md"
else
    echo "  [FAIL] missing .workbench/autopilot.md"; exit 1
fi
echo ""

# Test 6: SKILL.md mentions every universal required skill
echo "Test 6: SKILL.md mentions every universal skill..."
for skill in 'workbench:using-workbench' 'workbench:brainstorming' 'workbench:writing-spec' 'workbench:writing-plans' 'workbench:test-driven-development' 'workbench:dispatching-parallel-agents' 'workbench:subagent-driven-development' 'agent-system-management:capturing-session-learnings' 'agent-system-management:improving-instructions' 'workbench:verification-before-completion'; do
    if grep -qF "$skill" "$SKILL_MD"; then
        echo "  [PASS] mentions $skill"
    else
        echo "  [FAIL] missing $skill"; exit 1
    fi
done
echo ""

# Test 7: All ten step headings present
echo "Test 7: All ten step headings present..."
for n in 0 1 2 3 4 5 6 7 8 9; do
    if grep -qE "^### Step $n[: ]" "$SKILL_MD"; then
        echo "  [PASS] Step $n heading present"
    else
        echo "  [FAIL] Step $n heading missing"; exit 1
    fi
done
echo ""

# Test 8: Human-in-the-loop framing, NOT autopilot's self-answer scaffolding
echo "Test 8: human-in-the-loop framing present, autonomous-brainstorm scaffolding absent..."
if grep -qiF 'human' "$SKILL_MD"; then
    echo "  [PASS] mentions human gate"
else
    echo "  [FAIL] missing human-in-the-loop framing"; exit 1
fi
if grep -qF 'self-answer' "$SKILL_MD"; then
    echo "  [FAIL] copilot must NOT self-answer the brainstorm/spec gates"; exit 1
else
    echo "  [PASS] no self-answer instruction"
fi
if grep -qF "grep -c '^## Q'" "$SKILL_MD"; then
    echo "  [FAIL] copilot must NOT carry autopilot's brainstorm format-verify gate"; exit 1
else
    echo "  [PASS] no brainstorm format-verify gate"
fi
echo ""

# Test 9: Description trigger phrases
echo "Test 9: Description trigger phrases..."
desc=$(awk '/^description:/{flag=1;sub(/^description:[ ]*/,"")} /^---$/{flag=0} flag' "$SKILL_MD")
if echo "$desc" | grep -qiF 'copilot'; then
    echo "  [PASS] description mentions copilot"
else
    echo "  [FAIL] description missing 'copilot'"; exit 1
fi
if echo "$desc" | grep -qiE 'human|by hand|you drive|semi-autonomous'; then
    echo "  [PASS] description signals human-in-the-loop"
else
    echo "  [FAIL] description missing human-in-the-loop signal"; exit 1
fi
if echo "$desc" | grep -qF '.workbench/autopilot.md'; then
    echo "  [PASS] description mentions .workbench/autopilot.md"
else
    echo "  [FAIL] description missing .workbench/autopilot.md"; exit 1
fi
echo ""

# Test 10: Plugin manifests and marketplace at 0.18.0
echo "Test 10: Plugin manifests and marketplace at 0.18.0..."
CCM="$REPO_ROOT/plugins/workbench/.claude-plugin/plugin.json"
CXM="$REPO_ROOT/plugins/workbench/.codex-plugin/plugin.json"
MP="$REPO_ROOT/.claude-plugin/marketplace.json"
if jq -e '.version == "0.18.0"' "$CCM" >/dev/null && jq -e '.version == "0.18.0"' "$CXM" >/dev/null \
   && jq -e '.plugins[] | select(.name == "workbench") | .version == "0.18.0"' "$MP" >/dev/null; then
    echo "  [PASS] manifests and marketplace at 0.18.0"
else
    echo "  [FAIL] workbench not at 0.18.0"; exit 1
fi
echo ""

# Test 11: No em-dash or en-dash in the skill subtree
echo "Test 11: No em-dash or en-dash codepoints..."
if grep -rqP '[\x{2014}\x{2013}]' "$SKILL_DIR"; then
    echo "  [FAIL] em-dash or en-dash found in copilot skill"; exit 1
else
    echo "  [PASS] no em-dash or en-dash"
fi
echo ""

echo "=== Tests complete ==="
