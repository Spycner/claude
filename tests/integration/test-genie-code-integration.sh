#!/usr/bin/env bash
# Test: genie-code integration (live API)
# Requires either:
#   - DATABRICKS profile (OAuth mode): databricks auth login --profile <name>
#     and set GENIE_CODE_PROFILE to that profile name.
#   - GENIE_CODE_DBAUTH env var (cookie mode)
# Captures stream-json to verify which MCP tools Claude uses.

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
# shellcheck disable=SC1091
source "$SCRIPT_DIR/../test-helpers.sh"
cd "$(cd "$SCRIPT_DIR/../.." && pwd)"

LOG_DIR=$(mktemp -d)
trap "rm -rf $LOG_DIR" EXIT

echo "=== Test: genie-code integration (live API) ==="

HAS_OAUTH=0
HAS_COOKIE=0
if [ -n "${GENIE_CODE_PROFILE:-}" ] && databricks auth token --profile "$GENIE_CODE_PROFILE" >/dev/null 2>&1; then
    HAS_OAUTH=1
fi
if [ -n "${GENIE_CODE_DBAUTH:-}" ]; then
    HAS_COOKIE=1
fi

if [ "$HAS_OAUTH" = "0" ] && [ "$HAS_COOKIE" = "0" ]; then
    echo "  [SKIP] Neither OAuth (GENIE_CODE_PROFILE) nor cookie (GENIE_CODE_DBAUTH) configured"
    exit 0
fi

MODE="oauth"
[ "$HAS_OAUTH" = "0" ] && MODE="cookie"

echo ""
echo "Test 1: LakeAgent chat ($MODE mode)"
output=$(run_claude_logged "Use the genie-code MCP to ask Databricks Genie Code what tables I have in any schema. Mode: $MODE." "$LOG_DIR/chat.json" 180)
assert_contains "$output" "table|schema|database" "Chat returned content" || true
show_tools_used "$LOG_DIR/chat.json"

echo ""
echo "Test 2: list_threads"
output=$(run_claude_logged "Use the genie-code MCP list_threads tool to show recent Databricks Genie Code threads." "$LOG_DIR/list.json" 60)
assert_not_contains "$output" "unauthorized|403|401" "list_threads without auth errors" || true
show_tools_used "$LOG_DIR/list.json"

if [ -n "${GENIE_CODE_TEST_DASHBOARD_ID:-}" ]; then
    echo ""
    echo "Test 3: Dashboard build on $GENIE_CODE_TEST_DASHBOARD_ID"
    output=$(run_claude_logged "Use genie-code's chat tool on dashboard $GENIE_CODE_TEST_DASHBOARD_ID to add a row-count chart on table samples.nyctaxi.trips. Mode: $MODE." "$LOG_DIR/build.json" 300)
    assert_contains "$output" "dashboard_diff|widget|chart" "Build returned dashboard diff" || true
    show_tools_used "$LOG_DIR/build.json"
else
    echo "  [SKIP Test 3] Set GENIE_CODE_TEST_DASHBOARD_ID to exercise dashboard build"
fi

echo ""
echo "=== genie-code integration tests complete ==="
