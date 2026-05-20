"""Genie Code MCP server entry point.

Run via: uv run --directory <plugin>/mcp-servers/genie-code server.py
"""

from __future__ import annotations

TOOL_NAMES = ("chat", "resume_chat", "list_threads", "get_thread")


def main() -> None:
    """Start the MCP server over stdio. Wired in Phase 3."""
    raise NotImplementedError("Wired in Phase 3 (Task 3.1)")


if __name__ == "__main__":
    main()
