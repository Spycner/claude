"""Config resolution for the Genie Code MCP server.

Precedence (highest to lowest): per-call kwargs > env vars > project .toml > user .toml.
"""

from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

try:
    import tomllib
except ModuleNotFoundError:  # pragma: no cover
    import tomli as tomllib  # type: ignore[no-redef]


@dataclass
class Config:
    default_mode: str | None = None
    workspace_host: str | None = None
    cookie_chrome_profile: str | None = None
    cookie_dbauth_env_var: str | None = None
    oauth_databricks_cli_profile: str | None = None
    oauth_endpoint_name: str | None = None

    @classmethod
    def load(cls) -> "Config":
        xdg = os.environ.get("XDG_CONFIG_HOME") or str(Path.home() / ".config")
        user_path = Path(xdg) / "genie-code" / "config.toml"
        proj_path = Path.cwd() / ".genie-code" / "config.toml"

        merged: dict = {}
        for path in (user_path, proj_path):
            data = _read_toml(path)
            _deep_merge(merged, data)

        default = merged.get("default", {})
        workspace = merged.get("workspace", {})
        cookie = merged.get("cookie", {})
        oauth = merged.get("oauth", {})

        return cls(
            default_mode=default.get("mode"),
            workspace_host=workspace.get("host"),
            cookie_chrome_profile=cookie.get("chrome_profile"),
            cookie_dbauth_env_var=cookie.get("dbauth_env_var"),
            oauth_databricks_cli_profile=oauth.get("databricks_cli_profile"),
            oauth_endpoint_name=oauth.get("endpoint_name"),
        )


@dataclass
class ResolvedOptions:
    mode: str | None = None
    model: str | None = None
    endpoint_name: str | None = None
    thread_id: str | None = None
    subagents: bool = False
    max_turns: int = 30


def resolve_options(
    cfg: Config,
    per_call: dict,
    agent: str | None = None,
    context_id: str | None = None,
) -> ResolvedOptions:
    if agent == "LakeAgent" and context_id is not None:
        raise ValueError("context_id must be None for LakeAgent")

    mode = (
        per_call.get("mode")
        or os.environ.get("GENIE_CODE_MODE")
        or cfg.default_mode
    )
    model = (
        per_call.get("model")
        or os.environ.get("GENIE_CODE_MODEL")
    )
    endpoint_name = (
        per_call.get("endpoint_name")
        or os.environ.get("GENIE_CODE_ENDPOINT")
        or cfg.oauth_endpoint_name
    )
    thread_id = per_call.get("thread_id")
    subagents = bool(per_call.get("subagents", False))
    max_turns = int(per_call.get("max_turns", 30))

    return ResolvedOptions(
        mode=mode,
        model=model,
        endpoint_name=endpoint_name,
        thread_id=thread_id,
        subagents=subagents,
        max_turns=max_turns,
    )


def _read_toml(path: Path) -> dict:
    if not path.is_file():
        return {}
    with path.open("rb") as fh:
        return tomllib.load(fh)


def _deep_merge(dst: dict, src: dict) -> None:
    for key, value in src.items():
        if isinstance(value, dict) and isinstance(dst.get(key), dict):
            _deep_merge(dst[key], value)
        else:
            dst[key] = value
