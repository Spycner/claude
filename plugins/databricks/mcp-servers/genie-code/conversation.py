"""Conversation client: builds request bodies and parses SSE streams."""

from __future__ import annotations

import json
from collections.abc import AsyncIterator, Iterable, Iterator
from dataclasses import dataclass, field
from typing import Any
from uuid import uuid4

import httpx


@dataclass
class ToolCall:
    id: str
    name: str
    arguments: dict


@dataclass
class Delta:
    role: str | None = None
    content: str | None = None
    tool_calls: list[dict] | None = None


@dataclass
class StreamEvent:
    delta: Delta
    finish_reason: str | None = None


_ANTHROPIC_STOP_REASON_MAP = {
    "end_turn": "stop",
    "tool_use": "tool_calls",
    "max_tokens": "length",
    "stop_sequence": "stop",
}


def _parse_openai_payload(payload: dict) -> Iterator[StreamEvent]:
    choice = payload["choices"][0]
    delta_dict = choice.get("delta") or {}
    finish_reason = choice.get("finish_reason")
    yield StreamEvent(
        delta=Delta(
            role=delta_dict.get("role"),
            content=delta_dict.get("content"),
            tool_calls=delta_dict.get("tool_calls"),
        ),
        finish_reason=finish_reason,
    )


def _parse_anthropic_payload(payload: dict) -> Iterator[StreamEvent]:
    """Map an Anthropic streaming event to zero or one StreamEvent.

    Only text_delta becomes content (thinking_delta is intentionally dropped).
    tool_use blocks are reshaped into the OpenAI-style tool_call delta dicts
    that accumulate_tool_calls understands.
    """
    t = payload.get("type")
    if t == "content_block_start":
        block = payload.get("content_block") or {}
        if block.get("type") == "tool_use":
            yield StreamEvent(delta=Delta(tool_calls=[{
                "index": payload.get("index", 0),
                "id": block.get("id", ""),
                "type": "function",
                "function": {"name": block.get("name", ""), "arguments": ""},
            }]))
    elif t == "content_block_delta":
        delta_block = payload.get("delta") or {}
        dtype = delta_block.get("type")
        if dtype == "text_delta":
            yield StreamEvent(delta=Delta(content=delta_block.get("text", "")))
        elif dtype == "input_json_delta":
            yield StreamEvent(delta=Delta(tool_calls=[{
                "index": payload.get("index", 0),
                "function": {"arguments": delta_block.get("partial_json", "")},
            }]))
    elif t == "message_delta":
        delta_block = payload.get("delta") or {}
        stop_reason = delta_block.get("stop_reason")
        finish = _ANTHROPIC_STOP_REASON_MAP.get(stop_reason, stop_reason)
        if finish:
            yield StreamEvent(delta=Delta(), finish_reason=finish)


def _parse_event_payload(payload: dict) -> Iterator[StreamEvent]:
    """Auto-detect OpenAI vs Anthropic shape per event."""
    if "choices" in payload:
        yield from _parse_openai_payload(payload)
    elif "type" in payload:
        yield from _parse_anthropic_payload(payload)


def parse_sse_stream(lines: Iterable[str]) -> Iterator[StreamEvent]:
    for raw in lines:
        line = raw.rstrip("\r\n")
        if not line or not line.startswith("data: "):
            continue
        line = line[len("data: "):]
        if line == "[DONE]":
            return
        payload = json.loads(line)
        yield from _parse_event_payload(payload)


def accumulate_tool_calls(deltas: list[dict]) -> list[ToolCall]:
    groups: dict[int, dict] = {}
    for d in deltas:
        idx = d.get("index", 0)
        g = groups.setdefault(idx, {"id": None, "name": None, "args": ""})
        if g["id"] is None and d.get("id"):
            g["id"] = d["id"]
        fn = d.get("function") or {}
        if g["name"] is None and fn.get("name"):
            g["name"] = fn["name"]
        if fn.get("arguments"):
            g["args"] += fn["arguments"]
    out: list[ToolCall] = []
    for idx in sorted(groups):
        g = groups[idx]
        args = json.loads(g["args"]) if g["args"] else {}
        out.append(ToolCall(id=g["id"] or "", name=g["name"] or "", arguments=args))
    return out


def build_llmproxy_body(
    system_prompt: str,
    tools: list[dict],
    messages: list[dict],
    agent_name: str,
    session_id: str,
    model_registration: str,
    client_id: str = "editor-assistant-agent-mode",
    max_tokens: int = 64000,
) -> dict:
    system_message = {
        "role": "system",
        "content": system_prompt,
        "cache_control": {"type": "ephemeral"},
    }
    tools_copy = [dict(t) for t in tools]
    if tools_copy:
        tools_copy[-1] = {**tools_copy[-1], "cache_control": {"type": "ephemeral"}}
    return {
        "messages": [system_message, *messages],
        "tools": tools_copy,
        "stream": True,
        "max_tokens": max_tokens,
        "thinking": {"type": "adaptive"},
        "anthropic_beta": [
            "fine-grained-tool-streaming-2025-05-14",
            "interleaved-thinking-2025-05-14",
        ],
        "_llmproxy_fields": {
            "model_registration": model_registration,
            "client_id": client_id,
            "session_id": session_id,
            "trace_id": uuid4().hex,
            "call_id": uuid4().hex,
            "agent_name": agent_name,
        },
    }


def build_serving_body(
    system_prompt: str,
    tools: list[dict],
    messages: list[dict],
    max_tokens: int = 16000,
) -> dict:
    system_message = {"role": "system", "content": system_prompt}
    return {
        "messages": [system_message, *messages],
        "tools": list(tools),
        "stream": True,
        "max_tokens": max_tokens,
    }


def _parse_one(line: str) -> tuple[list[StreamEvent], bool]:
    """Parse a single SSE line. Returns (events, done).

    A single line may produce zero (Anthropic event types we ignore) or one
    StreamEvent. `done` is True iff the line is the SSE `[DONE]` sentinel.
    """
    s = line.rstrip("\r\n")
    if not s or not s.startswith("data: "):
        return [], False
    s = s[len("data: "):]
    if s == "[DONE]":
        return [], True
    payload = json.loads(s)
    return list(_parse_event_payload(payload)), False


async def run_turn(
    client: httpx.AsyncClient,
    mode: str,
    url: str,
    headers: dict,
    body: dict,
) -> AsyncIterator[StreamEvent]:
    async with client.stream("POST", url, headers=headers, json=body) as response:
        response.raise_for_status()
        async for line in response.aiter_lines():
            events, done = _parse_one(line)
            if done:
                return
            for event in events:
                yield event
