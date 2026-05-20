"""Auth for Genie Code MCP server: OAuth via Databricks CLI, DBAUTH cookie via env or Chrome profile."""

import json
import os
import re
import sqlite3
import subprocess
from datetime import datetime, timedelta, timezone
from pathlib import Path

import httpx


class AuthError(Exception):
    pass


_oauth_cache: dict[str, dict] = {}
_csrf_cache: dict[str, dict] = {}


def get_oauth_token(profile: str, force_refresh: bool = False) -> str:
    """Return an OAuth access token for the given Databricks CLI profile.

    Caches per profile and refreshes 5 minutes before expiry.
    """
    now = datetime.now(timezone.utc)
    cached = _oauth_cache.get(profile)
    if cached and not force_refresh and cached["expires_at"] > now + timedelta(minutes=5):
        return cached["token"]

    result = subprocess.run(
        ["databricks", "auth", "token", "--profile", profile],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        raise AuthError(f"databricks auth token failed: {result.stderr}")

    payload = json.loads(result.stdout)
    token = payload["access_token"]
    expires_on = payload["expires_on"]
    if expires_on.endswith("Z"):
        expires_on = expires_on[:-1] + "+00:00"
    expires_at = datetime.fromisoformat(expires_on)
    _oauth_cache[profile] = {"token": token, "expires_at": expires_at}
    return token


def get_dbauth_cookie(chrome_profile: str | None, env_var: str) -> str:
    """Return the DBAUTH cookie value.

    Env var wins. Falls back to reading the unencrypted value from Chrome's
    cookies SQLite. Raises AuthError if neither source is available.
    """
    env_val = os.environ.get(env_var)
    if env_val:
        return env_val

    if chrome_profile:
        cookies_db = Path(chrome_profile) / "Default" / "Network" / "Cookies"
        if not cookies_db.exists():
            raise AuthError(f"DBAUTH cookie not found: {cookies_db} does not exist")
        conn = sqlite3.connect(f"file:{cookies_db}?mode=ro", uri=True)
        try:
            cur = conn.execute(
                "SELECT value, encrypted_value FROM cookies WHERE name = 'DBAUTH'"
            )
            row = cur.fetchone()
        finally:
            conn.close()
        if row is None:
            raise AuthError("DBAUTH cookie not found in Chrome profile")
        value, encrypted_value = row
        if value:
            return value
        if encrypted_value:
            raise AuthError(
                "DBAUTH cookie is encrypted in Chrome profile; "
                "please set GENIE_CODE_DBAUTH env var instead"
            )
        raise AuthError("DBAUTH cookie row has no value in Chrome profile")

    raise AuthError("DBAUTH not configured: set GENIE_CODE_DBAUTH or cookie.chrome_profile")


def get_csrf_token(host: str, dbauth_cookie: str) -> str:
    """Probe the workspace root and extract the CSRF token.

    Cached per host for 25 seconds.
    """
    now = datetime.now(timezone.utc)
    cached = _csrf_cache.get(host)
    if cached and cached["expires_at"] > now:
        return cached["token"]

    resp = httpx.get(
        f"https://{host}/",
        headers={"Cookie": f"DBAUTH={dbauth_cookie}"},
        follow_redirects=True,
    )
    token = resp.headers.get("X-CSRF-TOKEN")
    if not token:
        match = re.search(
            r'<meta\s+name="csrf-token"\s+content="([^"]+)"',
            resp.text,
        )
        if match:
            token = match.group(1)
    if not token:
        raise AuthError("CSRF token not found in workspace response")

    _csrf_cache[host] = {"token": token, "expires_at": now + timedelta(seconds=25)}
    return token
