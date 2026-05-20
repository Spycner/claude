#!/usr/bin/env python
"""Refresh the bundled prompt_pack/ from a live Databricks SPA session.

Operator-run; not invoked by the MCP server or Claude. Captures the current
LakeAgent and dashboardAuthoringAgent llmproxy request bodies via the existing
research extraction scripts, then rewrites prompt_pack/<agent>/system-prompt.md
and prompt_pack/<agent>/tools.json.

Usage:
    uv run tools/refresh-prompt-pack.py --workspace-host <host>

The output prompt_pack/ directory is what the MCP server reads at runtime.
"""

from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RESEARCH_DIR = (
    ROOT.parents[2]
    / "skills"
    / "genie-code"
    / "references"
    / "research"
    / "extraction"
    / "scripts"
)

DEFAULT_CHROME_PROFILE = Path.home() / ".cache" / "chrome-devtools-mcp" / "chrome-profile"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Refresh prompt_pack/ from live SPA llmproxy capture.",
    )
    parser.add_argument(
        "--workspace-host",
        required=False,
        help="Databricks workspace hostname (e.g. dbc-xxxxx.cloud.databricks.com).",
    )
    parser.add_argument(
        "--chrome-profile",
        default=str(DEFAULT_CHROME_PROFILE),
        help="Path to chrome-devtools-mcp Chrome profile (for cookie auth).",
    )
    parser.add_argument(
        "--agent",
        choices=["lake-agent", "dashboard-authoring-agent", "both"],
        default="both",
        help="Which agent's prompt pack to refresh.",
    )
    parser.add_argument(
        "--output-dir",
        default=str(ROOT / "prompt_pack"),
        help="Where to write refreshed prompt_pack/ (default: alongside server.py).",
    )
    return parser.parse_args()


def extract_from_body(body_path: Path, target_dir: Path, *, system_in_messages: bool) -> None:
    target_dir.mkdir(parents=True, exist_ok=True)
    payload = json.loads(body_path.read_text())
    tools = payload.get("tools", [])
    if system_in_messages:
        system_blocks = payload["messages"][0]["content"]
    else:
        system_blocks = payload["system"]
    if isinstance(system_blocks, list):
        system_text = "\n".join(block.get("text", "") for block in system_blocks)
    else:
        system_text = system_blocks
    (target_dir / "tools.json").write_text(json.dumps(tools, indent=2))
    (target_dir / "system-prompt.md").write_text(system_text)


def main() -> int:
    args = parse_args()
    output_dir = Path(args.output_dir)
    print(f"Refreshing prompt_pack at {output_dir}", file=sys.stderr)
    print(
        "This script requires that you first capture llmproxy bodies in a live SPA session\n"
        "(see references/research/extraction/scripts/ for chrome-devtools-mcp helpers),\n"
        "and place the captures at references/research/agents/<agent>-llmproxy-body.json.",
        file=sys.stderr,
    )
    bodies = {
        "lake-agent": ROOT.parents[2]
        / "skills"
        / "genie-code"
        / "references"
        / "research"
        / "agents"
        / "lake-agent-llmproxy-body.json",
        "dashboard-authoring-agent": ROOT.parents[2]
        / "skills"
        / "genie-code"
        / "references"
        / "research"
        / "agents"
        / "dashboard-authoring-llmproxy-body.json",
    }
    targets = ("lake-agent", "dashboard-authoring-agent") if args.agent == "both" else (args.agent,)
    for agent_slug in targets:
        body = bodies[agent_slug]
        if not body.exists():
            print(f"  [SKIP] {agent_slug}: capture missing at {body}", file=sys.stderr)
            continue
        before_sys = (output_dir / agent_slug / "system-prompt.md").stat().st_size if (
            output_dir / agent_slug / "system-prompt.md"
        ).exists() else 0
        before_tools = (output_dir / agent_slug / "tools.json").stat().st_size if (
            output_dir / agent_slug / "tools.json"
        ).exists() else 0
        # Dashboard body keeps system inside messages[0].content; LakeAgent uses top-level system.
        system_in_messages = agent_slug == "dashboard-authoring-agent"
        extract_from_body(body, output_dir / agent_slug, system_in_messages=system_in_messages)
        after_sys = (output_dir / agent_slug / "system-prompt.md").stat().st_size
        after_tools = (output_dir / agent_slug / "tools.json").stat().st_size
        print(
            f"  [OK] {agent_slug}: system {before_sys}->{after_sys}B, tools {before_tools}->{after_tools}B",
            file=sys.stderr,
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
