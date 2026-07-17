#!/usr/bin/env bash
# Test: no Deloitte references anywhere in tracked repo content
# Guard for the 2026-07 IP scrub: the marketplace must not name or brand-reference
# Deloitte in any tracked file. The pattern is split so this test file does not
# match itself.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

echo "=== Test: no Deloitte references in tracked files ==="
echo ""

pattern="delo""itte"
cd "$REPO_ROOT"
matches=$(git ls-files -z | xargs -0 grep -lni "$pattern" 2>/dev/null | grep -v '^tests/unit/test-no-deloitte-references\.sh$' || true)
if [ -n "$matches" ]; then
    echo "  [FAIL] tracked files still reference the scrubbed brand:"
    echo "$matches"
    exit 1
else
    echo "  [PASS] no tracked file references the scrubbed brand"
fi
echo ""

echo "=== Tests complete ==="
