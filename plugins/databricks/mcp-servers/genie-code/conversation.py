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


def parse_sse_stream(lines: Iterable[str]) -> Iterator[StreamEvent]:
    for raw in lines:
        line = raw.rstrip("\r\n")
        if not line:
            continue
        if line.startswith("data: "):
            line = line[len("data: "):]
        if line == "[DONE]":
            return
        payload = json.loads(line)
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


def _parse_one(line: str) -> tuple[StreamEvent | None, bool]:
    """Parse a single SSE line. Returns (event_or_none, done)."""
    s = line.rstrip("\r\n")
    if not s:
        return None, False
    if s.startswith("data: "):
        s = s[len("data: "):]
    if s == "[DONE]":
        return None, True
    payload = json.loads(s)
    choice = payload["choices"][0]
    delta_dict = choice.get("delta") or {}
    return (
        StreamEvent(
            delta=Delta(
                role=delta_dict.get("role"),
                content=delta_dict.get("content"),
                tool_calls=delta_dict.get("tool_calls"),
            ),
            finish_reason=choice.get("finish_reason"),
        ),
        False,
    )


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
            event, done = _parse_one(line)
            if done:
                return
            if event is not None:
                yield event
