#!/usr/bin/env bash
set -euo pipefail

PLUGIN_DIR="${PLUGIN_DIR:-plugins/workbench}"
SKILL_DIR="$PLUGIN_DIR/skills/perfecting-presentations"
SKILL_MD="$SKILL_DIR/SKILL.md"
REFS="$SKILL_DIR/references"
PLUGIN_JSON="$PLUGIN_DIR/.claude-plugin/plugin.json"

echo "Test 1: SKILL.md exists..."
[ -s "$SKILL_MD" ] || { echo "[FAIL] missing or empty SKILL.md"; exit 1; }
echo "[PASS]"

echo "Test 2: SKILL.md frontmatter has name=perfecting-presentations..."
awk '/^---$/{c++; next} c==1' "$SKILL_MD" \
  | python3 -c "import sys,yaml; d=yaml.safe_load(sys.stdin); assert d['name']=='perfecting-presentations'" \
  || { echo "[FAIL] frontmatter name mismatch"; exit 1; }
echo "[PASS]"

echo "Test 3: SKILL.md frontmatter has non-trivial description..."
awk '/^---$/{c++; next} c==1' "$SKILL_MD" \
  | python3 -c "import sys,yaml; d=yaml.safe_load(sys.stdin); assert 'description' in d and len(d['description']) > 100" \
  || { echo "[FAIL] description missing or too short"; exit 1; }
echo "[PASS]"

echo "Test 4: SKILL.md mentions cross-reference skills..."
for token in crafting-presentations 'writing:presentations' verification-before-completion; do
  grep -q "$token" "$SKILL_MD" || { echo "[FAIL] missing cross-reference: $token"; exit 1; }
done
echo "[PASS]"

echo "Test 5: Reference docs present..."
for f in deck-standards-default.md hard-gates.md review-loop.md; do
  [ -s "$REFS/$f" ] || { echo "[FAIL] missing $REFS/$f"; exit 1; }
done
echo "[PASS]"

echo "Test 6: SKILL.md documents the constitution path and resolution..."
grep -q '\.workbench/deck-standards\.md' "$SKILL_MD" || { echo "[FAIL] constitution path not documented"; exit 1; }
grep -q 'deck-standards-default\.md' "$SKILL_MD" || { echo "[FAIL] bundled default not referenced"; exit 1; }
echo "[PASS]"

echo "Test 7: Default standards define hard gates H1-H7 and four soft dimensions..."
for rule in H1 H2 H3 H4 H5 H6 H7; do
  grep -q "\*\*$rule " "$REFS/deck-standards-default.md" || { echo "[FAIL] missing hard gate $rule"; exit 1; }
done
for dim in narrative clarity visual delivery; do
  grep -q "dimension: $dim" "$REFS/deck-standards-default.md" || { echo "[FAIL] missing dimension $dim"; exit 1; }
done
echo "[PASS]"

echo "Test 8: Default standards include severity scale and deck brief..."
for token in blocker major minor nit 'Deck brief'; do
  grep -q "$token" "$REFS/deck-standards-default.md" || { echo "[FAIL] missing: $token"; exit 1; }
done
echo "[PASS]"

echo "Test 9: Review loop documents judge, verifier, ledger, and termination..."
for token in 'Judge prompt' 'Verifier prompt' 'ledger' 'dryRounds' 'REFUTE' 'rejectedKeys'; do
  grep -q "$token" "$REFS/review-loop.md" || { echo "[FAIL] missing: $token"; exit 1; }
done
echo "[PASS]"

echo "Test 10: Hard gates cover the deterministic probes..."
for token in 'noscale' 'scrollWidth' 'naturalWidth' 'document.fonts' 'print-to-pdf' 'getBoundingClientRect'; do
  grep -q "$token" "$REFS/hard-gates.md" || { echo "[FAIL] missing: $token"; exit 1; }
done
echo "[PASS]"

echo "Test 11: Convergence rule present (dry rounds, round cap, fresh judges)..."
grep -qi 'two consecutive' "$SKILL_MD" || { echo "[FAIL] dry-round rule missing"; exit 1; }
grep -qi 'round cap' "$SKILL_MD" || { echo "[FAIL] round cap missing"; exit 1; }
grep -qi 'fresh' "$SKILL_MD" || { echo "[FAIL] fresh-judge rule missing"; exit 1; }
echo "[PASS]"

echo "Test 12: skill tree free of U+2014 and U+2013..."
if grep -rqP '[\x{2014}\x{2013}]' "$SKILL_DIR"; then
  echo "[FAIL] em-dash or en-dash found in skill tree"
  grep -rnP '[\x{2014}\x{2013}]' "$SKILL_DIR" | head -10
  exit 1
fi
echo "[PASS]"

echo "Test 13: workbench plugin version pinned to 0.21.0..."
jq -e '.version == "0.21.0"' "$PLUGIN_JSON" > /dev/null \
  || { echo "[FAIL] workbench plugin.json not at 0.21.0"; exit 1; }
echo "[PASS]"

echo
echo "All tests passed."
