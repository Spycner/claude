"""Config resolution order: per-call > env > project > user."""

import os
import textwrap
from pathlib import Path

from config import Config, resolve_options


def write_toml(path: Path, body: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(textwrap.dedent(body))


def test_user_config_loads(tmp_path, monkeypatch):
    user_cfg = tmp_path / "user" / "genie-code" / "config.toml"
    write_toml(user_cfg, """
        [default]
        mode = "cookie"
        [workspace]
        host = "user-host.cloud.databricks.com"
    """)
    monkeypatch.setenv("XDG_CONFIG_HOME", str(tmp_path / "user"))
    monkeypatch.chdir(tmp_path)
    cfg = Config.load()
    assert cfg.default_mode == "cookie"
    assert cfg.workspace_host == "user-host.cloud.databricks.com"


def test_project_overrides_user(tmp_path, monkeypatch):
    user_cfg = tmp_path / "user" / "genie-code" / "config.toml"
    proj_cfg = tmp_path / "proj" / ".genie-code" / "config.toml"
    write_toml(user_cfg, '[default]\nmode = "cookie"\n')
    write_toml(proj_cfg, '[default]\nmode = "oauth"\n')
    monkeypatch.setenv("XDG_CONFIG_HOME", str(tmp_path / "user"))
    monkeypatch.chdir(tmp_path / "proj")
    cfg = Config.load()
    assert cfg.default_mode == "oauth"


def test_env_overrides_config(tmp_path, monkeypatch):
    proj_cfg = tmp_path / ".genie-code" / "config.toml"
    write_toml(proj_cfg, '[default]\nmode = "cookie"\n')
    monkeypatch.chdir(tmp_path)
    monkeypatch.setenv("GENIE_CODE_MODE", "oauth")
    cfg = Config.load()
    assert resolve_options(cfg, per_call={}).mode == "oauth"


def test_per_call_overrides_env(tmp_path, monkeypatch):
    monkeypatch.chdir(tmp_path)
    monkeypatch.setenv("GENIE_CODE_MODE", "oauth")
    cfg = Config.load()
    opts = resolve_options(cfg, per_call={"mode": "cookie"})
    assert opts.mode == "cookie"


def test_lake_agent_with_context_id_raises():
    cfg = Config(default_mode="oauth")
    import pytest
    with pytest.raises(ValueError, match="context_id"):
        resolve_options(cfg, per_call={"mode": "oauth"}, agent="LakeAgent", context_id="abc")
