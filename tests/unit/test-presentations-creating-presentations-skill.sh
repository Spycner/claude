#!/usr/bin/env bash
# Test: presentations:creating-presentations skill structure
# Verifies SKILL.md, the bundled deck-stage engine assets, the perfecting-loop
# references, the preset resolution order (.pgoell layer), the default preset's
# contract basics, and the plugin version lockstep.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
PLUGIN_DIR="$REPO_ROOT/plugins/presentations"
SKILL_DIR="$PLUGIN_DIR/skills/creating-presentations"
SKILL_MD="$SKILL_DIR/SKILL.md"

echo "=== Test: presentations:creating-presentations skill structure ==="
echo ""

echo "Test 1: SKILL.md exists with frontmatter..."
if [ -s "$SKILL_MD" ] && head -1 "$SKILL_MD" | grep -q '^---$'; then
    echo "  [PASS] SKILL.md exists with frontmatter"
else
    echo "  [FAIL] SKILL.md missing or lacks frontmatter"
    exit 1
fi
echo ""

echo "Test 2: Engine assets exist..."
for a in deck-stage.js presenter.js presenter.html; do
    if [ -s "$SKILL_DIR/assets/$a" ]; then
        echo "  [PASS] assets/$a exists"
    else
        echo "  [FAIL] assets/$a missing or empty"
        exit 1
    fi
done
echo ""

echo "Test 3: Perfecting-loop references exist and are mentioned..."
for ref in deck-standards-default hard-gates review-loop; do
    if [ -s "$SKILL_DIR/references/$ref.md" ] && grep -qF "$ref" "$SKILL_MD"; then
        echo "  [PASS] references/$ref.md exists and is mentioned"
    else
        echo "  [FAIL] references/$ref.md missing or unmentioned"
        exit 1
    fi
done
echo ""

echo "Test 4: Preset resolution order..."
for term in '.pgoell/presentations/config.md' '.pgoell/presentations/presets' '../../presets/' 'extracting-presets'; do
    if grep -qF "$term" "$SKILL_MD"; then
        echo "  [PASS] SKILL.md mentions $term"
    else
        echo "  [FAIL] SKILL.md missing $term"
        exit 1
    fi
done
echo ""

echo "Test 5: Perfecting loop folded in..."
for term in 'Perfecting the deck' 'hard gate' 'consecutive review rounds' 'ledger'; do
    if grep -qiF "$term" "$SKILL_MD"; then
        echo "  [PASS] SKILL.md mentions $term"
    else
        echo "  [FAIL] SKILL.md missing $term"
        exit 1
    fi
done
echo ""

echo "Test 6: Skill subtree free of em/en dashes..."
if grep -rqP '[\x{2014}\x{2013}]' "$SKILL_DIR"; then
    echo "  [FAIL] em-dash or en-dash found in skill subtree"
    grep -rlP '[\x{2014}\x{2013}]' "$SKILL_DIR"
    exit 1
else
    echo "  [PASS] no em/en dashes in skill subtree"
fi
echo ""

echo "Test 7: Presets directory contract basics..."
PRESETS="$PLUGIN_DIR/presets"
for f in README.md default/colors.css default/typography.css default/manifest.md; do
    if [ -s "$PRESETS/$f" ]; then
        echo "  [PASS] presets/$f exists"
    else
        echo "  [FAIL] presets/$f missing or empty"
        exit 1
    fi
done
slide_count=$(ls "$PRESETS/default/slides"/*.html 2>/dev/null | wc -l | tr -d ' ')
if [ "$slide_count" -eq 10 ]; then
    echo "  [PASS] default preset has 10 example slides"
else
    echo "  [FAIL] default preset has $slide_count example slides (expected 10)"
    exit 1
fi
for s in "$PRESETS/default/slides"/*.html; do
    if ! grep -q '<style>' "$s"; then
        echo "  [FAIL] $(basename "$s") has no inline <style>"
        exit 1
    fi
    if grep -q '@import\|src="http\|href="http' "$s"; then
        echo "  [FAIL] $(basename "$s") makes a network request"
        exit 1
    fi
done
echo "  [PASS] every example slide is self-contained (inline style, no network requests)"
if grep -rqP '[\x{2014}\x{2013}]' "$PRESETS"; then
    echo "  [FAIL] em-dash or en-dash found under presets/"
    exit 1
else
    echo "  [PASS] presets/ free of em/en dashes"
fi
if grep -qF '.pgoell/presentations' "$PRESETS/README.md"; then
    echo "  [PASS] preset contract documents the .pgoell layer"
else
    echo "  [FAIL] preset contract missing the .pgoell layer"
    exit 1
fi
echo ""

echo "Test 8: Plugin version lockstep at 0.1.0..."
CCM="$PLUGIN_DIR/.claude-plugin/plugin.json"
CXM="$PLUGIN_DIR/.codex-plugin/plugin.json"
MP="$REPO_ROOT/.claude-plugin/marketplace.json"
if jq -e '.version == "0.1.0"' "$CCM" >/dev/null && jq -e '.version == "0.1.0"' "$CXM" >/dev/null; then
    echo "  [PASS] both plugin manifests at 0.1.0"
else
    echo "  [FAIL] plugin manifests not at 0.1.0"
    exit 1
fi
if jq -e '.plugins[] | select(.name == "presentations") | .version == "0.1.0"' "$MP" >/dev/null; then
    echo "  [PASS] Claude marketplace presentations at 0.1.0"
else
    echo "  [FAIL] Claude marketplace presentations not at 0.1.0"
    exit 1
fi
echo ""

echo "=== Tests complete ==="
