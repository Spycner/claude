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


def test_resume_chat_appends_to_thread(tmp_path, monkeypatch):
    import asyncio
    from unittest.mock import patch
    from server import handle_resume_chat
    from thread_store import ThreadStore
    from conversation import StreamEvent, Delta
    monkeypatch.setenv("XDG_STATE_HOME", str(tmp_path))
    store = ThreadStore(root=tmp_path / "genie-code" / "threads")
    t = store.create(agent="LakeAgent", context_id=None, title="x")
    store.append_message(t.thread_id, {"role": "user", "content": "earlier"})

    async def fake_run_turn(*args, **kwargs):
        yield StreamEvent(delta=Delta(role="assistant", content="ok", tool_calls=None), finish_reason="stop")

    with patch("server.run_turn", new=fake_run_turn):
        res = asyncio.run(handle_resume_chat(
            thread_id=t.thread_id,
            prompt="follow-up",
            options={"mode": "oauth", "endpoint_name": "x"},
        ))
    assert res["thread_id"] == t.thread_id
    assert res["agent"] == "LakeAgent"
    refetched = store.get(t.thread_id)
    assert len(refetched.messages) >= 3


def test_list_threads_local_store(tmp_path, monkeypatch):
    import asyncio
    from server import handle_list_threads
    from thread_store import ThreadStore
    monkeypatch.setenv("XDG_STATE_HOME", str(tmp_path))
    store = ThreadStore(root=tmp_path / "genie-code" / "threads")
    store.create(agent="LakeAgent", context_id=None, title="a")
    store.create(agent="dashboardAuthoringAgent", context_id="d1", title="b")
    res = asyncio.run(handle_list_threads(agent="LakeAgent", context_id=None, limit=20))
    assert len(res) == 1
    assert res[0]["agent"] == "LakeAgent"


def test_get_thread_returns_full_history(tmp_path, monkeypatch):
    import asyncio
    from server import handle_get_thread
    from thread_store import ThreadStore
    monkeypatch.setenv("XDG_STATE_HOME", str(tmp_path))
    store = ThreadStore(root=tmp_path / "genie-code" / "threads")
    t = store.create(agent="LakeAgent", context_id=None, title="x")
    store.append_message(t.thread_id, {"role": "user", "content": "hi"})
    res = asyncio.run(handle_get_thread(thread_id=t.thread_id))
    assert res["thread_id"] == t.thread_id
    assert res["agent"] == "LakeAgent"
    assert len(res["messages"]) == 1


def test_chat_tool_returns_structured_trace(tmp_path, monkeypatch):
    """chat() returns the documented shape with thread_id, transcript, etc."""
    import asyncio
    from unittest.mock import patch
    from server import handle_chat
    from conversation import StreamEvent, Delta

    monkeypatch.setenv("XDG_STATE_HOME", str(tmp_path))

    async def fake_run_turn(*args, **kwargs):
        yield StreamEvent(delta=Delta(role="assistant", content="hi", tool_calls=None), finish_reason=None)
        yield StreamEvent(delta=Delta(role=None, content=" there", tool_calls=None), finish_reason="stop")

    with patch("server.run_turn", new=fake_run_turn):
        result = asyncio.run(handle_chat(
            prompt="hello",
            agent="LakeAgent",
            context_id=None,
            options={"mode": "oauth", "endpoint_name": "test-endpoint"},
        ))
    assert "thread_id" in result
    assert "transcript" in result
    assert "tool_calls" in result
    assert result["agent"] == "LakeAgent"
    assert any("hi there" in m["content"] for m in result["transcript"] if m["role"] == "assistant")
