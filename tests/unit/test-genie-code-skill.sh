#!/usr/bin/env bash
# Unit tests for the genie-code skill: SKILL.md and reference docs structure.
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
# shellcheck disable=SC1091
source "$SCRIPT_DIR/../test-helpers.sh"

F="/home/pascal/Code/pgoell-claude-tools/plugins/databricks/skills/genie-code/SKILL.md"
test -f "$F" || { echo "FAIL: SKILL.md missing"; exit 1; }
grep -q '^## Auth Approach$' "$F" || { echo "FAIL: Auth Approach heading"; exit 1; }
grep -q 'databricks' "$F" || { echo "FAIL: mentions databricks CLI"; exit 1; }
grep -q 'chrome-devtools-mcp' "$F" || { echo "FAIL: mentions chrome-devtools-mcp"; exit 1; }
grep -q '\bchat\b' "$F" || { echo "FAIL: mentions chat MCP tool"; exit 1; }
grep -q 'resume_chat' "$F" || { echo "FAIL: mentions resume_chat"; exit 1; }
grep -q 'list_threads' "$F" || { echo "FAIL: mentions list_threads"; exit 1; }
grep -q 'get_thread' "$F" || { echo "FAIL: mentions get_thread"; exit 1; }
grep -q 'LakeAgent' "$F" || { echo "FAIL: mentions LakeAgent"; exit 1; }
grep -q 'dashboardAuthoringAgent' "$F" || { echo "FAIL: mentions dashboardAuthoringAgent"; exit 1; }
grep -q 'modes.md\|recipes.md\|troubleshooting.md' "$F" || { echo "FAIL: links to reference docs"; exit 1; }
echo "PASS (SKILL.md structural checks)"

M="/home/pascal/Code/pgoell-claude-tools/plugins/databricks/skills/genie-code/references/modes.md"
test -f "$M" || { echo "FAIL: modes.md missing"; exit 1; }
grep -qi 'cookie' "$M" || { echo "FAIL: modes.md missing cookie"; exit 1; }
grep -qi 'oauth' "$M" || { echo "FAIL: modes.md missing oauth"; exit 1; }
grep -qi 'sidebar\|SPA' "$M" || { echo "FAIL: modes.md missing UI-visibility note"; exit 1; }
echo "PASS (modes.md)"
