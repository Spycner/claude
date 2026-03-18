#!/usr/bin/env bash
# Helper functions for spycner-tools plugin tests
# Follows superpowers test-helpers.sh pattern

# macOS compatibility: use gtimeout if available, otherwise a bash fallback
if command -v gtimeout &>/dev/null; then
    timeout_cmd="gtimeout"
elif command -v timeout &>/dev/null; then
    timeout_cmd="timeout"
else
    # Bash fallback for macOS without coreutils
    timeout_cmd=""
    _timeout() {
        local secs="$1"; shift
        ( "$@" ) &
        local pid=$!
        ( sleep "$secs" && kill "$pid" 2>/dev/null ) &
        local watcher=$!
        wait "$pid" 2>/dev/null
        local rc=$?
        kill "$watcher" 2>/dev/null 2>&1
        wait "$watcher" 2>/dev/null 2>&1
        return $rc
    }
fi

_run_timeout() {
    if [ -n "$timeout_cmd" ]; then
        "$timeout_cmd" "$@"
    else
        _timeout "$@"
    fi
}

# Plugin directory — set by run-tests.sh or override in individual tests
PLUGIN_DIR="${PLUGIN_DIR:-}"

# Run Claude Code with a prompt and capture output
# Usage: output=$(run_claude "prompt text" [timeout_seconds])
run_claude() {
    local prompt="$1"
    local timeout="${2:-60}"
    local output_file=$(mktemp)
    local plugin_flag=""
    if [ -n "$PLUGIN_DIR" ]; then
        plugin_flag="--plugin-dir $PLUGIN_DIR"
    fi

    if bash -c "claude -p \"$prompt\" $plugin_flag --dangerously-skip-permissions" > "$output_file" 2>&1; then
        cat "$output_file"
        rm -f "$output_file"
        return 0
    else
        local exit_code=$?
        cat "$output_file" >&2
        rm -f "$output_file"
        return $exit_code
    fi
}

# Check if output contains a pattern
# Usage: assert_contains "output" "pattern" "test name"
assert_contains() {
    local output="$1"
    local pattern="$2"
    local test_name="${3:-test}"

    # Strip markdown formatting before matching
    local clean
    clean=$(echo "$output" | sed 's/\*\*//g; s/`//g; s/\*//g')
    if echo "$clean" | grep -qiE "$pattern"; then
        echo "  [PASS] $test_name"
        return 0
    else
        echo "  [FAIL] $test_name"
        echo "  Expected to find: $pattern"
        echo "  In output (first 500 chars):"
        echo "$clean" | head -c 500 | sed 's/^/    /'
        return 1
    fi
}

# Check if output does NOT contain a pattern
# Usage: assert_not_contains "output" "pattern" "test name"
assert_not_contains() {
    local output="$1"
    local pattern="$2"
    local test_name="${3:-test}"

    local clean
    clean=$(echo "$output" | sed 's/\*\*//g; s/`//g; s/\*//g')
    if echo "$clean" | grep -qiE "$pattern"; then
        echo "  [FAIL] $test_name"
        echo "  Did not expect to find: $pattern"
        return 1
    else
        echo "  [PASS] $test_name"
        return 0
    fi
}

# Check if pattern A appears before pattern B
# Usage: assert_order "output" "pattern_a" "pattern_b" "test name"
assert_order() {
    local output="$1"
    local pattern_a="$2"
    local pattern_b="$3"
    local test_name="${4:-test}"

    local clean
    clean=$(echo "$output" | sed 's/\*\*//g; s/`//g; s/\*//g')
    local line_a=$(echo "$clean" | grep -niE "$pattern_a" | head -1 | cut -d: -f1)
    local line_b=$(echo "$clean" | grep -niE "$pattern_b" | head -1 | cut -d: -f1)

    if [ -z "$line_a" ]; then
        echo "  [FAIL] $test_name: pattern A not found: $pattern_a"
        return 1
    fi
    if [ -z "$line_b" ]; then
        echo "  [FAIL] $test_name: pattern B not found: $pattern_b"
        return 1
    fi
    if [ "$line_a" -lt "$line_b" ]; then
        echo "  [PASS] $test_name (A at line $line_a, B at line $line_b)"
        return 0
    else
        echo "  [FAIL] $test_name: expected '$pattern_a' before '$pattern_b' but A=$line_a B=$line_b"
        return 1
    fi
}

# Check if acli is authenticated
check_acli_auth() {
    acli auth status &>/dev/null 2>&1
}

# Check if env vars are set for curl
check_env_auth() {
    [[ -n "${ATLASSIAN_DOMAIN:-}" && -n "${ATLASSIAN_EMAIL:-}" && -n "${ATLASSIAN_API_TOKEN:-}" ]]
}

# Check if any Atlassian auth is available
check_any_auth() {
    check_acli_auth || check_env_auth
}

# Export functions for use in tests
export -f run_claude
export -f assert_contains
export -f assert_not_contains
export -f assert_order
export -f check_acli_auth
export -f check_env_auth
export -f check_any_auth
