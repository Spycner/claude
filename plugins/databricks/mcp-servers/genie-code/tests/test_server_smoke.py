"""Smoke test: server module imports and exposes the 4 tool names."""

import importlib


def test_server_imports():
    mod = importlib.import_module("server")
    assert hasattr(mod, "main"), "server.main not defined"


def test_server_advertises_four_tools():
    from server import TOOL_NAMES
    assert set(TOOL_NAMES) == {"chat", "resume_chat", "list_threads", "get_thread"}, (
        f"unexpected tools: {TOOL_NAMES}"
    )
