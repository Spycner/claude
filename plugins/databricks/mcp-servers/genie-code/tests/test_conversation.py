"""Conversation client: parses SSE, builds request bodies, handles both modes."""

from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

from conversation import (
    build_llmproxy_body,
    build_serving_body,
    parse_sse_stream,
)

FIXTURES = Path(__file__).parent / "fixtures"


def test_parse_text_only_stream():
    raw = (FIXTURES / "sse-stream-text-only.txt").read_text()
    events = list(parse_sse_stream(iter(raw.splitlines(keepends=True))))
    text = "".join(e.delta.content for e in events if getattr(e.delta, "content", None))
    assert text == "Hello world"
    assert events[-1].finish_reason == "stop"


def test_parse_tool_call_stream():
    raw = (FIXTURES / "sse-stream-tool-call.txt").read_text()
    events = list(parse_sse_stream(iter(raw.splitlines(keepends=True))))
    tcs = [tc for e in events for tc in (e.delta.tool_calls or [])]
    # Accumulator combines deltas with same index
    from conversation import accumulate_tool_calls
    full = accumulate_tool_calls(tcs)
    assert len(full) == 1
    assert full[0].name == "executeSql"
    assert full[0].arguments == {"statement": "SELECT 1"}


def test_build_llmproxy_body_includes_six_required_fields():
    body = build_llmproxy_body(
        system_prompt="SYS",
        tools=[
            {"type": "function", "function": {"name": "t1"}},
            {"type": "function", "function": {"name": "t2"}},
        ],
        messages=[{"role": "user", "content": "hi"}],
        agent_name="LakeAgent",
        session_id="sess-1",
        model_registration="claude-4-6-opus",
    )
    fields = body["_llmproxy_fields"]
    for k in ("model_registration", "client_id", "session_id", "trace_id", "call_id", "agent_name"):
        assert k in fields, f"missing _llmproxy_fields.{k}"
    assert fields["agent_name"] == "LakeAgent"
    assert body["stream"] is True
    assert body["messages"][0]["role"] == "system"
    # Anthropic prompt caching: system message and last tool def must carry cache_control.
    assert body["messages"][0].get("cache_control", {}).get("type") == "ephemeral", (
        "system message missing cache_control={type: ephemeral}"
    )
    assert body["tools"][-1].get("cache_control", {}).get("type") == "ephemeral", (
        "last tool def missing cache_control={type: ephemeral}"
    )


def test_build_serving_body_omits_llmproxy_fields():
    body = build_serving_body(
        system_prompt="SYS",
        tools=[{"type": "function", "function": {"name": "t"}}],
        messages=[{"role": "user", "content": "hi"}],
    )
    assert "_llmproxy_fields" not in body
    assert "thinking" not in body
    assert "anthropic_beta" not in body
    assert body["stream"] is True


def test_parse_anthropic_text_stream():
    raw = (FIXTURES / "sse-anthropic-text.txt").read_text()
    events = list(parse_sse_stream(iter(raw.splitlines(keepends=True))))
    text = "".join(e.delta.content for e in events if getattr(e.delta, "content", None))
    assert text == "Hello world"
    assert any(e.finish_reason == "stop" for e in events)


def test_parse_anthropic_tool_call_stream():
    raw = (FIXTURES / "sse-anthropic-tool-call.txt").read_text()
    events = list(parse_sse_stream(iter(raw.splitlines(keepends=True))))
    tcs = [tc for e in events for tc in (e.delta.tool_calls or [])]
    from conversation import accumulate_tool_calls
    full = accumulate_tool_calls(tcs)
    assert len(full) == 1
    assert full[0].name == "executeSql"
    assert full[0].arguments == {"statement": "SELECT 1"}
    assert any(e.finish_reason == "tool_calls" for e in events)


def test_parse_anthropic_thinking_then_text():
    """Thinking blocks must NOT leak into content. Only text_delta produces content."""
    raw = (FIXTURES / "sse-anthropic-thinking-then-text.txt").read_text()
    events = list(parse_sse_stream(iter(raw.splitlines(keepends=True))))
    text = "".join(e.delta.content for e in events if getattr(e.delta, "content", None))
    assert text == "answer", f"expected only 'answer', got {text!r}"
