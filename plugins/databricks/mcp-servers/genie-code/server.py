"""Genie Code MCP server entry point.

Run via: uv run --directory <plugin>/mcp-servers/genie-code server.py
"""

from __future__ import annotations

import asyncio
import json
from pathlib import Path
from typing import Any
from uuid import uuid4

import httpx

from auth import get_dbauth_cookie, get_csrf_token, get_oauth_token
from config import Config, ResolvedOptions, resolve_options
from conversation import (
    Delta,
    StreamEvent,
    accumulate_tool_calls,
    build_llmproxy_body,
    build_serving_body,
    run_turn as _conversation_run_turn,
)
from handlers import dashboard as _dashboard_handlers
from handlers import lake_agent as _lake_handlers
from thread_store import ThreadStore

TOOL_NAMES = ("chat", "resume_chat", "list_threads", "get_thread")

_PACK_ROOT = Path(__file__).parent / "prompt_pack"
_PACK_DIRS = {
    "LakeAgent": "lake-agent",
    "dashboardAuthoringAgent": "dashboard-authoring-agent",
}


def _load_prompt_pack(agent: str) -> tuple[str, list[dict]]:
    pack_dir = _PACK_ROOT / _PACK_DIRS[agent]
    system_prompt = (pack_dir / "system-prompt.md").read_text()
    tools = json.loads((pack_dir / "tools.json").read_text())
    return system_prompt, tools


def _mint_session_id(agent: str, context_id: str | None) -> str:
    if agent == "dashboardAuthoringAgent":
        return f"{context_id}-{uuid4().hex[:8]}"
    return uuid4().hex


def _build_body(
    *,
    mode: str,
    agent: str,
    system_prompt: str,
    tools: list[dict],
    messages: list[dict],
    session_id: str,
    model: str | None,
) -> dict:
    if mode == "cookie":
        return build_llmproxy_body(
            system_prompt=system_prompt,
            tools=tools,
            messages=messages,
            agent_name=agent,
            session_id=session_id,
            model_registration=model or "claude-opus-4-6",
        )
    return build_serving_body(system_prompt=system_prompt, tools=tools, messages=messages)


async def run_turn(
    *,
    mode: str,
    agent: str,
    opts: ResolvedOptions,
    workspace_host: str,
    body: dict,
):
    """Acquire auth, build URL+headers, stream a single turn."""
    headers = {"Content-Type": "application/json", "Accept": "text/event-stream"}
    if mode == "cookie":
        dbauth = get_dbauth_cookie(chrome_profile=None, env_var="GENIE_CODE_DBAUTH")
        csrf = get_csrf_token(host=workspace_host, dbauth_cookie=dbauth)
        headers["Cookie"] = f"DBAUTH={dbauth}"
        headers["X-CSRF-Token"] = csrf
        url = f"https://{workspace_host}/ajax-api/2.0/conversation/llmproxy/"
    else:
        token = get_oauth_token(profile=opts.endpoint_name or "default")
        headers["Authorization"] = f"Bearer {token}"
        endpoint = opts.endpoint_name or "agents_genie_code_prod"
        url = f"https://{workspace_host}/serving-endpoints/{endpoint}/invocations"

    async with httpx.AsyncClient(timeout=120.0) as client:
        async for event in _conversation_run_turn(client, mode, url, headers, body):
            yield event


def _consume_stream_events(events):
    """Synchronous helper: aggregate stream events into (content, tool_call_deltas, finish)."""
    content_parts: list[str] = []
    tool_call_deltas: list[dict] = []
    finish_reason: str | None = None
    for event in events:
        if event.delta.content:
            content_parts.append(event.delta.content)
        if event.delta.tool_calls:
            tool_call_deltas.extend(event.delta.tool_calls)
        if event.finish_reason:
            finish_reason = event.finish_reason
    return "".join(content_parts), tool_call_deltas, finish_reason


async def handle_chat(
    *,
    prompt: str,
    agent: str,
    context_id: str | None,
    options: dict | None,
) -> dict:
    cfg = Config.load()
    opts = resolve_options(cfg, options or {}, agent=agent, context_id=context_id)

    errors: list[str] = []
    if agent not in _PACK_DIRS:
        errors.append(f"unknown agent: {agent}")
    if agent == "dashboardAuthoringAgent" and not context_id:
        errors.append("context_id required for dashboardAuthoringAgent")
    if errors:
        return {
            "thread_id": None,
            "agent": agent,
            "transcript": [],
            "dashboard_diff": {},
            "final_state": {},
            "tool_calls": [],
            "errors": errors,
        }

    system_prompt, tools = _load_prompt_pack(agent)
    session_id = _mint_session_id(agent, context_id)
    workspace_host = cfg.workspace_host or "localhost"

    store = ThreadStore()
    thread = store.create(agent=agent, context_id=context_id, title=prompt[:50])
    store.append_message(thread.thread_id, {"role": "user", "content": prompt})

    messages = [{"role": "user", "content": prompt}]
    transcript, tool_calls_log, final_state = await _run_conversation_loop(
        opts=opts,
        agent=agent,
        context_id=context_id,
        workspace_host=workspace_host,
        system_prompt=system_prompt,
        tools=tools,
        session_id=session_id,
        messages=messages,
        thread=thread,
        store=store,
    )

    return {
        "thread_id": thread.thread_id,
        "agent": agent,
        "transcript": transcript,
        "dashboard_diff": {},
        "final_state": final_state,
        "tool_calls": tool_calls_log,
        "errors": [],
    }


def _dispatch_tool_call(agent: str, name: str, args: dict, state: dict) -> dict:
    if agent == "dashboardAuthoringAgent":
        return _dashboard_handlers.dispatch(name, args, state=state)
    return _lake_handlers.dispatch(name, args, state=state)


async def _run_conversation_loop(
    *,
    opts: ResolvedOptions,
    agent: str,
    context_id: str | None,
    workspace_host: str,
    system_prompt: str,
    tools: list[dict],
    session_id: str,
    messages: list[dict],
    thread,
    store: ThreadStore,
) -> tuple[list[dict], list[dict], dict]:
    """Run turns until finish_reason == stop or max_turns. Dispatches tool calls."""
    session_state: dict = {"dashboard_id": context_id}
    tool_calls_log: list[dict] = []
    finish_reason: str | None = None
    turn_messages = list(messages)

    for _turn in range(opts.max_turns):
        body = _build_body(
            mode=opts.mode,
            agent=agent,
            system_prompt=system_prompt,
            tools=tools,
            messages=turn_messages,
            session_id=session_id,
            model=opts.model,
        )

        content_parts: list[str] = []
        tool_call_deltas: list[dict] = []
        finish_reason = None
        async for event in run_turn(
            mode=opts.mode,
            agent=agent,
            opts=opts,
            workspace_host=workspace_host,
            body=body,
        ):
            if event.delta.content:
                content_parts.append(event.delta.content)
            if event.delta.tool_calls:
                tool_call_deltas.extend(event.delta.tool_calls)
            if event.finish_reason:
                finish_reason = event.finish_reason

        assistant_content = "".join(content_parts)
        assistant_msg: dict = {"role": "assistant", "content": assistant_content}
        if tool_call_deltas:
            tool_calls = accumulate_tool_calls(tool_call_deltas)
            assistant_msg["tool_calls"] = [
                {
                    "id": tc.id,
                    "type": "function",
                    "function": {"name": tc.name, "arguments": json.dumps(tc.arguments)},
                }
                for tc in tool_calls
            ]
        turn_messages.append(assistant_msg)
        store.append_message(thread.thread_id, assistant_msg)

        if finish_reason == "tool_calls" and tool_call_deltas:
            tool_calls = accumulate_tool_calls(tool_call_deltas)
            for tc in tool_calls:
                result = _dispatch_tool_call(agent, tc.name, tc.arguments, session_state)
                tool_calls_log.append({
                    "id": tc.id,
                    "name": tc.name,
                    "arguments": tc.arguments,
                    "result": result,
                })
                tool_msg = {
                    "role": "tool",
                    "tool_call_id": tc.id,
                    "content": json.dumps(result),
                }
                turn_messages.append(tool_msg)
                store.append_message(thread.thread_id, tool_msg)
            continue

        break

    return (
        list(turn_messages),
        tool_calls_log,
        {"finish_reason": finish_reason, "session_id": session_id},
    )


async def handle_resume_chat(
    *,
    thread_id: str,
    prompt: str,
    options: dict | None,
) -> dict:
    store = ThreadStore()
    try:
        thread = store.get(thread_id)
    except KeyError:
        return {
            "thread_id": thread_id,
            "agent": None,
            "transcript": [],
            "dashboard_diff": {},
            "final_state": {},
            "tool_calls": [],
            "errors": [f"thread not found: {thread_id}"],
        }

    agent = thread.agent
    context_id = thread.context_id

    cfg = Config.load()
    opts = resolve_options(cfg, options or {}, agent=agent, context_id=context_id)

    system_prompt, tools = _load_prompt_pack(agent)
    session_id = _mint_session_id(agent, context_id)
    workspace_host = cfg.workspace_host or "localhost"

    user_msg = {"role": "user", "content": prompt}
    store.append_message(thread_id, user_msg)

    messages = list(thread.messages) + [user_msg]
    transcript, tool_calls_log, final_state = await _run_conversation_loop(
        opts=opts,
        agent=agent,
        context_id=context_id,
        workspace_host=workspace_host,
        system_prompt=system_prompt,
        tools=tools,
        session_id=session_id,
        messages=messages,
        thread=thread,
        store=store,
    )

    return {
        "thread_id": thread_id,
        "agent": agent,
        "transcript": transcript,
        "dashboard_diff": {},
        "final_state": final_state,
        "tool_calls": tool_calls_log,
        "errors": [],
    }


async def handle_list_threads(
    *,
    agent: str | None = None,
    context_id: str | None = None,
    limit: int = 20,
) -> list[dict]:
    store = ThreadStore()
    local = store.list(agent=agent, context_id=context_id, limit=limit)
    results = [
        {
            "thread_id": t.thread_id,
            "agent": t.agent,
            "context_id": t.context_id,
            "title": t.title,
            "created_at": t.created_at,
            "updated_at": t.updated_at,
            "last_message_preview": (t.messages[-1].get("content", "")[:80] if t.messages else ""),
        }
        for t in local
    ]
    from universegraphql import WIRED, list_remote_threads
    import os
    if WIRED and os.environ.get("GENIE_CODE_DBAUTH"):
        cfg = Config.load()
        try:
            remote = list_remote_threads(
                host=cfg.workspace_host,
                dbauth=os.environ["GENIE_CODE_DBAUTH"],
                csrf="",
                agent=agent,
                context_id=context_id,
            )
            seen = {r["thread_id"] for r in results}
            for r in remote:
                if r["thread_id"] not in seen:
                    results.append(r)
        except Exception:
            pass
    return results[:limit]


async def handle_get_thread(*, thread_id: str) -> dict:
    store = ThreadStore()
    try:
        thread = store.get(thread_id)
    except KeyError:
        return {
            "thread_id": thread_id,
            "agent": None,
            "context_id": None,
            "title": None,
            "messages": [],
            "errors": [f"thread not found: {thread_id}"],
        }
    return {
        "thread_id": thread.thread_id,
        "agent": thread.agent,
        "context_id": thread.context_id,
        "title": thread.title,
        "messages": list(thread.messages),
        "created_at": thread.created_at,
        "updated_at": thread.updated_at,
    }


def main() -> None:
    """Start the MCP server over stdio."""
    from mcp.server import Server
    from mcp.server.stdio import stdio_server
    from mcp.types import Tool, TextContent

    server: Server = Server("genie-code")

    @server.list_tools()
    async def list_tools() -> list[Tool]:
        return [
            Tool(
                name="chat",
                description="Send a prompt to Databricks Genie Code (LakeAgent or dashboardAuthoringAgent).",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "prompt": {"type": "string"},
                        "agent": {"type": "string", "enum": ["LakeAgent", "dashboardAuthoringAgent"]},
                        "context_id": {"type": ["string", "null"]},
                        "options": {"type": ["object", "null"]},
                    },
                    "required": ["prompt", "agent"],
                },
            ),
        ]

    @server.call_tool()
    async def call_tool(name: str, arguments: dict) -> list[TextContent]:
        if name == "chat":
            result = await handle_chat(
                prompt=arguments["prompt"],
                agent=arguments["agent"],
                context_id=arguments.get("context_id"),
                options=arguments.get("options"),
            )
            return [TextContent(type="text", text=json.dumps(result))]
        return [TextContent(type="text", text=json.dumps({"error": f"unknown tool: {name}"}))]

    async def _run() -> None:
        async with stdio_server() as (read, write):
            await server.run(read, write, server.create_initialization_options())

    asyncio.run(_run())


if __name__ == "__main__":
    main()
