#!/usr/bin/env bash
# Test: writing:presentations skill structure
# Verifies SKILL.md exists with required frontmatter and sections,
# all eleven reference files exist, slide front-matter schema is documented,
# and the skill tree contains no em-dashes or en-dashes.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/../test-helpers.sh"

REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
SKILL_DIR="$REPO_ROOT/plugins/writing/skills/presentations"
SKILL_MD="$SKILL_DIR/SKILL.md"

echo "=== Test: writing:presentations skill structure ==="
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

# Test 2: frontmatter name is presentations
echo "Test 2: frontmatter name..."
name_line=$(awk '/^---$/{n++; next} n==1 && /^name:/{print; exit}' "$SKILL_MD")
if [ "$name_line" = "name: presentations" ]; then
    echo "  [PASS] frontmatter name is presentations"
else
    echo "  [FAIL] frontmatter name is not 'presentations': got '$name_line'"
    exit 1
fi
echo ""

# Test 3: frontmatter description is non-empty
echo "Test 3: frontmatter description is non-empty..."
desc_line=$(awk '/^---$/{n++; next} n==1 && /^description:/{print; exit}' "$SKILL_MD")
if [ -n "$desc_line" ] && [ "$desc_line" != "description:" ]; then
    echo "  [PASS] frontmatter description is non-empty"
else
    echo "  [FAIL] frontmatter description is empty"
    exit 1
fi
echo ""

# Test 4: All eleven reference files exist and are non-empty
echo "Test 4: Reference files exist..."
for ref in \
    audience-brief-template.md \
    message-architecture-template.md \
    storyboard-template.md \
    slide-brief-template.md \
    slide-type-catalog.md \
    assertion-evidence-pattern.md \
    audit-checklist.md \
    critic-prompts.md \
    accessibility-preflight.md \
    time-budget.md \
    canonical-sources.md ; do
    f="$SKILL_DIR/references/$ref"
    if [ -s "$f" ]; then
        echo "  [PASS] references/$ref exists"
    else
        echo "  [FAIL] references/$ref missing or empty"
        exit 1
    fi
done
echo ""

# Test 5: Required H2 headings present in SKILL.md
echo "Test 5: Required H2 headings present..."
for h in \
    "## When to Use" \
    "## Tool Preference" \
    "## Platform Adaptation" \
    "## Workflow" \
    "## Audit Mode" \
    "## State and Resume" \
    "## Output Format" \
    "## Edge Cases" \
    "## Key Principles" ; do
    if grep -qF "$h" "$SKILL_MD"; then
        echo "  [PASS] heading present: $h"
    else
        echo "  [FAIL] heading missing: $h"
        exit 1
    fi
done
echo ""

# Test 6: Phase markers present in SKILL.md
echo "Test 6: Phase markers present..."
for p in \
    "### Step 1: Intake" \
    "### Step 2: Message Architecture" \
    "### Step 3: Storyboard" \
    "### Step 4: Slide Drafts" \
    "### Step 5: Critique Panel" ; do
    if grep -qF "$p" "$SKILL_MD"; then
        echo "  [PASS] phase present: $p"
    else
        echo "  [FAIL] phase missing: $p"
        exit 1
    fi
done
echo ""

# Test 7: Slide front-matter schema keys documented
echo "Test 7: Slide front-matter schema keys documented..."
SLIDE_TPL="$SKILL_DIR/references/slide-brief-template.md"
for key in slide_type: headline: visual: speaker_notes: accessibility: sources: ; do
    if grep -qF "$key" "$SLIDE_TPL"; then
        echo "  [PASS] schema key documented: $key"
    else
        echo "  [FAIL] schema key missing in slide-brief-template.md: $key"
        exit 1
    fi
done
echo ""

# Test 8: Em-dash and en-dash lint over the whole skill tree
echo "Test 8: No em-dashes or en-dashes in skill tree..."
if grep -rqP '[\x{2014}\x{2013}]' "$SKILL_DIR"; then
    echo "  [FAIL] em-dash or en-dash present in skill tree:"
    grep -rnP '[\x{2014}\x{2013}]' "$SKILL_DIR" | head -10
    exit 1
else
    echo "  [PASS] no em-dashes or en-dashes in skill tree"
fi
echo ""

echo "=== Tests complete ==="
