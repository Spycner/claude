"""Auth: OAuth shells out to databricks CLI; cookie reads env or Chrome profile."""

import json
import subprocess
from unittest.mock import patch, MagicMock

import pytest

from auth import get_oauth_token, get_dbauth_cookie, AuthError


def test_oauth_calls_databricks_cli():
    fake = MagicMock()
    fake.returncode = 0
    fake.stdout = json.dumps({
        "access_token": "tok_abc",
        "expires_on": "2099-01-01T00:00:00Z",
    })
    with patch("auth.subprocess.run", return_value=fake) as run:
        tok = get_oauth_token(profile="learning-new")
    assert tok == "tok_abc"
    args = run.call_args[0][0]
    assert args[:2] == ["databricks", "auth"]
    assert "--profile" in args
    assert "learning-new" in args


def test_oauth_failure_raises():
    fake = MagicMock()
    fake.returncode = 1
    fake.stderr = "Profile not found"
    with patch("auth.subprocess.run", return_value=fake):
        with pytest.raises(AuthError, match="databricks auth token"):
            get_oauth_token(profile="missing")


def test_cookie_from_env(monkeypatch):
    monkeypatch.setenv("GENIE_CODE_DBAUTH", "abc123")
    val = get_dbauth_cookie(chrome_profile=None, env_var="GENIE_CODE_DBAUTH")
    assert val == "abc123"


def test_cookie_missing_raises(monkeypatch):
    monkeypatch.delenv("GENIE_CODE_DBAUTH", raising=False)
    with pytest.raises(AuthError, match="DBAUTH"):
        get_dbauth_cookie(chrome_profile=None, env_var="GENIE_CODE_DBAUTH")


def test_cookie_env_wins_over_chrome(monkeypatch):
    """Env-var path wins when both env and chrome_profile are configured."""
    monkeypatch.setenv("GENIE_CODE_DBAUTH", "from_env")
    val = get_dbauth_cookie(
        chrome_profile="/nonexistent",
        env_var="GENIE_CODE_DBAUTH",
    )
    assert val == "from_env"
