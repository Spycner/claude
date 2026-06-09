#!/usr/bin/env bash
# Test: workbench:exporting-decks-to-pptx skill structure
# Converts a workbench deck-stage HTML deck into a native, editable .pptx.
# Ships SKILL.md (pipeline) plus references/python-pptx-recipes.md (recipes and gotchas).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/../test-helpers.sh"

REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SKILL_DIR="$REPO_ROOT/plugins/workbench/skills/exporting-decks-to-pptx"
SKILL_MD="$SKILL_DIR/SKILL.md"
RECIPES="$SKILL_DIR/references/python-pptx-recipes.md"

echo "=== Test: workbench:exporting-decks-to-pptx skill structure ==="
echo ""

# Test 1: SKILL.md exists with frontmatter
echo "Test 1: SKILL.md exists with frontmatter..."
if [ -s "$SKILL_MD" ] && head -1 "$SKILL_MD" | grep -q '^---$'; then
    echo "  [PASS] SKILL.md exists with frontmatter"
else
    echo "  [FAIL] SKILL.md missing or no frontmatter"; exit 1
fi
echo ""

# Test 2: frontmatter name is correct
echo "Test 2: frontmatter name..."
if grep -q '^name: exporting-decks-to-pptx$' "$SKILL_MD"; then
    echo "  [PASS] name: exporting-decks-to-pptx"
else
    echo "  [FAIL] frontmatter name wrong or missing"; exit 1
fi
echo ""

# Test 3: description trigger phrases and deferral
echo "Test 3: description trigger phrases..."
desc=$(awk '/^description:/{flag=1;sub(/^description:[ ]*/,"")} /^---$/{flag=0} flag' "$SKILL_MD")
if echo "$desc" | grep -qiF 'powerpoint'; then
    echo "  [PASS] description mentions PowerPoint"
else
    echo "  [FAIL] description missing 'PowerPoint'"; exit 1
fi
if echo "$desc" | grep -qiF 'pptx'; then
    echo "  [PASS] description mentions pptx"
else
    echo "  [FAIL] description missing 'pptx'"; exit 1
fi
if echo "$desc" | grep -qF 'workbench:crafting-presentations'; then
    echo "  [PASS] description defers new-deck builds to crafting-presentations"
else
    echo "  [FAIL] description missing crafting-presentations deferral"; exit 1
fi
echo ""

# Test 4: bundled reference exists and is non-empty
echo "Test 4: references/python-pptx-recipes.md exists..."
if [ -s "$RECIPES" ]; then
    echo "  [PASS] python-pptx-recipes.md exists"
else
    echo "  [FAIL] python-pptx-recipes.md missing or empty"; exit 1
fi
echo ""

# Test 5: SKILL.md cites the reference
echo "Test 5: SKILL.md cites references/python-pptx-recipes.md..."
if grep -qF 'references/python-pptx-recipes.md' "$SKILL_MD"; then
    echo "  [PASS] reference cited from SKILL.md"
else
    echo "  [FAIL] SKILL.md does not cite the reference"; exit 1
fi
echo ""

# Test 6: SKILL.md pipeline anchors
echo "Test 6: SKILL.md pipeline anchors..."
for anchor in '6350' 'LibreOffice' 'uv venv' 'workbench:crafting-presentations'; do
    if grep -qF "$anchor" "$SKILL_MD"; then
        echo "  [PASS] SKILL.md mentions $anchor"
    else
        echo "  [FAIL] SKILL.md missing $anchor"; exit 1
    fi
done
if grep -qiF 'speaker notes' "$SKILL_MD"; then
    echo "  [PASS] SKILL.md mentions speaker notes"
else
    echo "  [FAIL] SKILL.md missing speaker notes"; exit 1
fi
echo ""

# Test 7: reference gotcha anchors
echo "Test 7: reference gotcha anchors..."
for anchor in 'spcPct' 'wrap="none"' 'buChar' 'outerShdw' 'adjustments' 'est_lines'; do
    if grep -qF "$anchor" "$RECIPES"; then
        echo "  [PASS] recipes mention $anchor"
    else
        echo "  [FAIL] recipes missing $anchor"; exit 1
    fi
done
echo ""

# Test 8: Plugin manifests and marketplace at 0.18.0
echo "Test 8: Plugin manifests and marketplace at 0.18.0..."
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

# Test 9: No em-dash or en-dash in the skill subtree
echo "Test 9: No em-dash or en-dash codepoints..."
if grep -rqP '[\x{2014}\x{2013}]' "$SKILL_DIR"; then
    echo "  [FAIL] em-dash or en-dash found in exporting-decks-to-pptx skill"; exit 1
else
    echo "  [PASS] no em-dash or en-dash"
fi
echo ""

echo "=== Tests complete ==="
