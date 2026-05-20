#!/usr/bin/env python3
"""Diff the 13 tools shared between the LakeAgent and the Dashboard Authoring
Agent, and append a "Dashboard Authoring variant" section to each existing
``tools/<group>/<tool>.md`` ref noting any schema differences.

LakeAgent body: ``../data/llmproxy-body.json``.
Dashboard body: ``../../agents/dashboard-authoring-llmproxy-body.json``.

For each shared tool, compares:
- Top-level description
- Parameters object (shape, required, properties, descriptions, enum values)

The diff section is appended once per ref. If a section already exists, this
script rewrites it; it never duplicates.
"""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

REPO = Path("/home/pascal/Code/pgoell-claude-tools")
REFS = REPO / "plugins" / "databricks" / "skills" / "genie-code" / "references"
LAKE_BODY = REFS / "extraction" / "data" / "llmproxy-body.json"
DASH_BODY = REFS / "agents" / "dashboard-authoring-llmproxy-body.json"

# Tool name -> directory under tools/ where the existing ref lives.
TOOL_GROUPS = {
    "createAsset": "assets",
    "docSearch": "discovery",
    "fetchOmittedContent": "agent-internals",
    "findReferencesTool": "agent-internals",
    "forYouAssets": "discovery",
    "manageTodoList": "agent-internals",
    "openAsset": "assets",
    "querySearch": "discovery",
    "readAssetById": "assets",
    "readSkillFile": "agent-internals",
    "readTable": "assets",
    "searchAssets": "discovery",
    "tableSearch": "discovery",
}

SECTION_TITLE = "## Dashboard Authoring variant"
SECTION_MARKER_START = "<!-- DASHBOARD_VARIANT_BEGIN -->"
SECTION_MARKER_END = "<!-- DASHBOARD_VARIANT_END -->"


def normalize(v: Any) -> Any:
    """Sort lists deterministically and recurse into dicts."""
    if isinstance(v, dict):
        return {k: normalize(v[k]) for k in sorted(v.keys())}
    if isinstance(v, list):
        # required arrays are unordered sets; sort. For property arrays, sort
        # by stringified form. Anything else stays in order.
        try:
            return sorted(normalize(x) for x in v)
        except TypeError:
            return [normalize(x) for x in v]
    return v


def find_tool(body: dict, name: str) -> dict | None:
    for t in body.get("tools", []):
        if t.get("function", {}).get("name") == name:
            return t["function"]
    return None


def diff_descriptions(lake_desc: str, dash_desc: str) -> list[str]:
    if lake_desc == dash_desc:
        return ["Description: **identical** to the LakeAgent variant."]
    lines = [
        "Description: **differs from the LakeAgent variant**.",
        "",
        "_LakeAgent variant:_",
        "",
        "```",
        lake_desc.strip(),
        "```",
        "",
        "_Dashboard Authoring variant:_",
        "",
        "```",
        dash_desc.strip(),
        "```",
    ]
    return lines


def collect_property_diffs(lake_params: dict, dash_params: dict) -> list[str]:
    lines: list[str] = []
    lake_props = lake_params.get("properties", {})
    dash_props = dash_params.get("properties", {})
    lake_keys = set(lake_props.keys())
    dash_keys = set(dash_props.keys())

    only_lake = lake_keys - dash_keys
    only_dash = dash_keys - lake_keys
    shared = lake_keys & dash_keys

    if only_lake:
        lines.append(f"- Properties **removed** in the dashboard variant: {', '.join(f'`{k}`' for k in sorted(only_lake))}.")
    if only_dash:
        lines.append(f"- Properties **added** in the dashboard variant: {', '.join(f'`{k}`' for k in sorted(only_dash))}.")
    if not only_lake and not only_dash:
        lines.append("- Property set: **identical** key list.")

    diffs: list[str] = []
    for k in sorted(shared):
        ld = lake_props[k]
        dd = dash_props[k]
        if normalize(ld) == normalize(dd):
            continue
        sub: list[str] = []
        if ld.get("type") != dd.get("type"):
            sub.append(f"type: `{ld.get('type')}` → `{dd.get('type')}`")
        if ld.get("description") != dd.get("description"):
            sub.append("description text changed")
        if ld.get("enum") != dd.get("enum"):
            le, de = ld.get("enum"), dd.get("enum")
            sub.append(f"enum: {le!r} → {de!r}")
        if "items" in ld or "items" in dd:
            if ld.get("items") != dd.get("items"):
                sub.append("array items shape changed")
        # everything else considered shape-level
        if ld != dd and not sub:
            sub.append("shape changed (other)")
        if sub:
            diffs.append(f"  - `{k}`: {', '.join(sub)}")

    if diffs:
        lines.append("- Per-property changes:")
        lines.extend(diffs)

    lake_required = set(lake_params.get("required", []))
    dash_required = set(dash_params.get("required", []))
    if lake_required != dash_required:
        added = dash_required - lake_required
        removed = lake_required - dash_required
        if added:
            lines.append(f"- `required` **added**: {', '.join(f'`{k}`' for k in sorted(added))}.")
        if removed:
            lines.append(f"- `required` **removed**: {', '.join(f'`{k}`' for k in sorted(removed))}.")
    else:
        lines.append("- `required` array: **identical**.")

    if lake_params.get("additionalProperties") != dash_params.get("additionalProperties"):
        lines.append(
            f"- `additionalProperties`: `{lake_params.get('additionalProperties')}` → `{dash_params.get('additionalProperties')}`."
        )

    return lines


def build_section(name: str, lake_fn: dict, dash_fn: dict, dash_pos: int) -> str:
    lines: list[str] = []
    lines.append(SECTION_MARKER_START)
    lines.append("")
    lines.append(SECTION_TITLE)
    lines.append("")
    lines.append(
        "The Dashboard Authoring Agent (`dashboardAuthoringAgent`) ships this "
        "same tool. The wire schema below was captured 2026-05-19 from the "
        "`hi` POST against `/sql/dashboardsv3/<id>?edit=true` — see "
        "[`../../agents/dashboard-authoring.md`](../../agents/dashboard-authoring.md). "
        f"Position in the dashboard agent's tools array: **{dash_pos} of 34**."
    )
    lines.append("")
    lines.extend(diff_descriptions(lake_fn["description"], dash_fn["description"]))
    lines.append("")
    lines.append("**Parameter diff** (LakeAgent → Dashboard Authoring):")
    lines.append("")
    diffs = collect_property_diffs(lake_fn["parameters"], dash_fn["parameters"])
    if not diffs or (len(diffs) == 1 and "identical" in diffs[0]):
        # Check overall identical
        if normalize(lake_fn["parameters"]) == normalize(dash_fn["parameters"]):
            lines.append("- Parameters are **byte-identical** to the LakeAgent variant.")
        else:
            lines.extend(diffs)
    else:
        lines.extend(diffs)
    lines.append("")
    lines.append("**Handler binding in the dashboard chunk:**")
    lines.append("")
    lines.append(
        "Same identity as the LakeAgent variant — these 13 tools are imported "
        "into `DashboardAuthoringAgentContext` from the shared `builtInToolsDeps` "
        "registry, not redefined per agent. The factory module IDs noted in this "
        "ref's Handler-notes section above apply unchanged to the dashboard agent."
    )
    lines.append("")
    lines.append(SECTION_MARKER_END)
    return "\n".join(lines)


def update_file(path: Path, section: str) -> None:
    text = path.read_text()
    if SECTION_MARKER_START in text and SECTION_MARKER_END in text:
        new_text = re.sub(
            re.escape(SECTION_MARKER_START) + r".*?" + re.escape(SECTION_MARKER_END),
            section,
            text,
            flags=re.DOTALL,
        )
    else:
        # Append after existing content, separated by a blank line
        new_text = text.rstrip() + "\n\n" + section + "\n"
    path.write_text(new_text)


def main() -> None:
    lake = json.loads(LAKE_BODY.read_text())
    dash = json.loads(DASH_BODY.read_text())
    dash_tool_list = [t["function"]["name"] for t in dash["tools"]]

    written = 0
    for name, group in TOOL_GROUPS.items():
        lake_fn = find_tool(lake, name)
        dash_fn = find_tool(dash, name)
        if not lake_fn or not dash_fn:
            print(f"SKIP {name}: not present in both bodies (lake={bool(lake_fn)} dash={bool(dash_fn)})")
            continue
        ref_path = REFS / "tools" / group / f"{name}.md"
        if not ref_path.exists():
            print(f"SKIP {name}: no existing ref at {ref_path}")
            continue
        dash_pos = dash_tool_list.index(name) + 1
        section = build_section(name, lake_fn, dash_fn, dash_pos)
        update_file(ref_path, section)
        written += 1
        print(f"updated {ref_path}")
    print(f"\nupdated {written} refs")


if __name__ == "__main__":
    main()
