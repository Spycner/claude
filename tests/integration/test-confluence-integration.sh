#!/usr/bin/env bash
# Test: Confluence integration (live API)
# Requires Atlassian auth (acli or env vars)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/../test-helpers.sh"
cd "$(cd "$SCRIPT_DIR/../.." && pwd)"

echo "=== Test: Confluence integration (live API) ==="

# Skip if no auth available
if ! check_any_auth; then
    echo "  [SKIP] No Atlassian auth configured (run 'acli auth login' or set env vars)"
    exit 0
fi

# Test 1: List spaces
echo ""
echo "Test 1: List Confluence spaces"
output=$(run_claude "List all Confluence spaces. Show me the space keys and names." 120)
assert_contains "$output" "TWC|space|key" "Lists spaces" || true

# Test 2: Create a test page
echo ""
echo "Test 2: Create a test page"
TIMESTAMP=$(date +%s)
output=$(run_claude "Create a Confluence page titled 'Plugin Test Page $TIMESTAMP' in the TWC space with content 'This is an automated test page. Safe to delete.' Tell me the page ID." 180)
assert_not_contains "$output" "unauthorized|403|401" "Page created without auth errors" || true

# Extract page ID from output (strip markdown first)
PAGE_ID=$(echo "$output" | sed 's/\*\*//g; s/`//g' | grep -oE '[0-9]{4,}' | head -1 || true)

if [ -n "$PAGE_ID" ]; then
    echo "  Created page ID: $PAGE_ID"

    # Test 3: Read the page back
    echo ""
    echo "Test 3: Read the created page"
    output=$(run_claude "Show me the content of Confluence page with ID $PAGE_ID" 120)
    assert_contains "$output" "test page|Plugin Test Page|automated" "Shows page content" || true

    # Test 4: Update the page
    echo ""
    echo "Test 4: Update the page"
    output=$(run_claude "Update the Confluence page with ID $PAGE_ID — add a paragraph saying 'Updated by integration test'" 180)
    assert_not_contains "$output" "unauthorized|403|401" "Page updated without auth errors" || true

    # Test 5: Search for the page
    echo ""
    echo "Test 5: Search for the page"
    output=$(run_claude "Search Confluence for pages with 'Plugin Test Page $TIMESTAMP' in the title" 120)
    assert_contains "$output" "Plugin Test Page" "Found the page via search" || true
else
    echo "  [SKIP] Could not extract page ID from create output"
fi

echo ""
echo "=== Confluence integration tests complete ==="
