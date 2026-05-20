"""Smoke test: server module imports and exposes the 4 tool names."""

import importlib
import json
from pathlib import Path


def test_server_imports():
    mod = importlib.import_module("server")
    assert hasattr(mod, "main"), "server.main not defined"


def test_server_advertises_four_tools():
    from server import TOOL_NAMES
    assert set(TOOL_NAMES) == {"chat", "resume_chat", "list_threads", "get_thread"}, (
        f"unexpected tools: {TOOL_NAMES}"
    )


def test_prompt_pack_layout_exists():
    pack = Path(__file__).parent.parent / "prompt_pack"
    for agent in ("lake-agent", "dashboard-authoring-agent"):
        sp = pack / agent / "system-prompt.md"
        tj = pack / agent / "tools.json"
        assert sp.exists(), f"missing: {sp}"
        assert tj.exists(), f"missing: {tj}"
        tools = json.loads(tj.read_text())
        assert isinstance(tools, list), f"{tj} is not a list"
        assert len(tools) > 0, f"{tj} is empty"
        assert sp.stat().st_size > 4000, f"{sp} too small ({sp.stat().st_size} bytes)"


def test_dashboard_pack_has_thirty_plus_tools():
    pack = Path(__file__).parent.parent / "prompt_pack" / "dashboard-authoring-agent"
    tools = json.loads((pack / "tools.json").read_text())
    assert len(tools) >= 30, f"expected 30+ tools, got {len(tools)}"


def test_lake_pack_has_fifteen_plus_tools():
    pack = Path(__file__).parent.parent / "prompt_pack" / "lake-agent"
    tools = json.loads((pack / "tools.json").read_text())
    assert len(tools) >= 15, f"expected 15+ tools, got {len(tools)}"
