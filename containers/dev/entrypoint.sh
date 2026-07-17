#!/usr/bin/env bash
# containers/dev/entrypoint.sh
set -euo pipefail

CLAUDE_INSTALL_CMD='curl -fsSL https://claude.ai/install.sh | bash'
CODEX_INSTALL_CMD='npm install -g @openai/codex && mise reshim'

DOTFILES=(.bashrc .profile .zshenv .tmux.conf .gitconfig)
DOTDIRS=(.tmux)

snapshot_dotfiles() {
    local src=/host-home
    local dst=/home/dev
    [ -d "$src" ] || return 0
    for f in "${DOTFILES[@]}"; do
        if [ -f "$src/$f" ]; then
            cp -f "$src/$f" "$dst/$f"
        fi
    done
    for d in "${DOTDIRS[@]}"; do
        if [ -d "$src/$d" ]; then
            cp -rf "$src/$d" "$dst/$d"
        fi
    done
}

neutralize_unsupported_lines() {
    local target=/home/dev/.bashrc
    [ -f "$target" ] || return 0
    # Comment out linuxbrew shellenv (linuxbrew is not bundled).
    sed -i 's|^\(eval "\$(/home/linuxbrew/.linuxbrew/bin/brew shellenv.*\)|# disabled in container: \1|' "$target"
    # Comment out cargo env source (mise's rust install handles cargo on PATH;
    # ~/.cargo/env does not exist inside the container).
    sed -i 's|^\(\. "\$HOME/\.cargo/env".*\)|# disabled in container: \1|' "$target"
    sed -i 's|^\(\. "/home/[^/]*/\.cargo/env".*\)|# disabled in container: \1|' "$target"
    # Rewrite hard-coded host-home mise binary paths to the container path.
    sed -i 's|/home/[^/]*/\.local/bin/mise|/home/dev/.local/bin/mise|g' "$target"
}

select_default_shell() {
    local requested="${HOST_SHELL:-/bin/bash}"
    if [ -x "$requested" ]; then
        sudo chsh -s "$requested" dev
    else
        sudo chsh -s /bin/bash dev
    fi
}

# NET_MODE=proxied: all egress goes through the squid sidecar, which may
# still be starting when this entrypoint runs. Wait until it accepts TCP
# before attempting the agent installs.
wait_for_proxy() {
    [ -n "${HTTPS_PROXY:-}" ] || return 0
    local hostport="${HTTPS_PROXY#http://}"
    local host="${hostport%%:*}"
    local port="${hostport##*:}"
    for _ in $(seq 1 30); do
        if (exec 3<>"/dev/tcp/$host/$port") 2>/dev/null; then
            exec 3>&- 3<&-
            return 0
        fi
        sleep 1
    done
    echo "proxy $host:$port not reachable after 30s" >&2
    return 1
}

# AGENT_STATE=auth: ~/.claude and ~/.codex are not mounted. Copy only the
# credential files from the read-only host-home mount so the agents run
# authenticated but otherwise clean (no host plugins, settings, or history).
# Runs on every container start, so a restart re-syncs freshly rotated tokens.
copy_auth_only() {
    [ "${AGENT_STATE:-full}" = "auth" ] || return 0
    mkdir -p /home/dev/.claude /home/dev/.codex
    if [ -f /host-home/.claude/.credentials.json ]; then
        cp -f /host-home/.claude/.credentials.json /home/dev/.claude/.credentials.json
        chmod 600 /home/dev/.claude/.credentials.json
    fi
    if [ -f /host-home/.codex/auth.json ]; then
        cp -f /host-home/.codex/auth.json /home/dev/.codex/auth.json
        chmod 600 /home/dev/.codex/auth.json
    fi
}

install_agents() {
    if ! command -v claude >/dev/null 2>&1; then
        eval "$CLAUDE_INSTALL_CMD"
    fi
    if ! command -v codex >/dev/null 2>&1; then
        eval "$CODEX_INSTALL_CMD"
    fi
}

if [ "${COPY_DOTFILES:-1}" = "1" ]; then
    snapshot_dotfiles
    neutralize_unsupported_lines
fi
copy_auth_only
select_default_shell
wait_for_proxy
install_agents

exec tail -f /dev/null
