#!/usr/bin/env bash
# Test: Jira integration (live API)
# Requires Atlassian auth (acli or env vars)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/../test-helpers.sh"
cd "$(cd "$SCRIPT_DIR/../.." && pwd)"

echo "=== Test: Jira integration (live API) ==="

# Skip if no auth available
if ! check_any_auth; then
    echo "  [SKIP] No Atlassian auth configured (run 'acli auth login' or set env vars)"
    exit 0
fi

# Test 1: List projects
echo ""
echo "Test 1: List Jira projects"
output=$(run_claude "List all Jira projects. Just show me the project keys and names." 120)
assert_contains "$output" "TC|project|key" "Lists projects" || true

# Test 2: Search issues
echo ""
echo "Test 2: Search for issues"
output=$(run_claude "Search Jira for all issues using JQL: 'order by created DESC' and show the first 5 results" 120)
assert_not_contains "$output" "unauthorized|403|401" "No auth errors" || true

# Test 3: Create a test issue
echo ""
echo "Test 3: Create a test issue"
TIMESTAMP=$(date +%s)
output=$(run_claude "Create a Jira task in project TC with summary 'Plugin test $TIMESTAMP' and description 'Automated test — safe to delete'. Tell me the issue key." 180)
assert_contains "$output" "[A-Z]+-[0-9]+" "Returns an issue key" || true

# Extract issue key from output (strip markdown first)
ISSUE_KEY=$(echo "$output" | sed 's/\*\*//g; s/`//g' | grep -oE '[A-Z]+-[0-9]+' | head -1 || true)

if [ -n "$ISSUE_KEY" ]; then
    echo "  Created: $ISSUE_KEY"

    # Test 4: View the issue
    echo ""
    echo "Test 4: View the created issue"
    output=$(run_claude "Show me the details of Jira issue $ISSUE_KEY" 120)
    assert_contains "$output" "$ISSUE_KEY" "Shows the issue" || true

    # Test 5: Add a comment
    echo ""
    echo "Test 5: Add a comment"
    output=$(run_claude "Add a comment to $ISSUE_KEY saying 'Automated test comment'" 120)
    assert_not_contains "$output" "unauthorized|403|401" "Comment added without auth errors" || true

    # Test 6: Transition
    echo ""
    echo "Test 6: Transition the issue"
    output=$(run_claude "Move $ISSUE_KEY to Done" 120)
    assert_not_contains "$output" "unauthorized|403|401" "Transition without auth errors" || true
else
    echo "  [SKIP] Could not extract issue key from create output"
fi

echo ""
echo "=== Jira integration tests complete ==="
