#!/usr/bin/env python3
"""Extract the SKILL.md file contents shipped by the 3 dashboard-only skills:
``dashboard`` (chunk 66786, module 566786), ``calculation`` (chunk 50147,
module 972528), and ``gdrive-embed-image`` (chunk 93509, module 493509).

Each chunk wraps a single file as ``moduleId: e => e.exports = '<raw markdown>'``.
This script pulls the string literal out and writes it to
``../data/dashboard-skill-files/<skill>/<file>.md``.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

REPO = Path("/home/pascal/Code/pgoell-claude-tools")
EXTRACTION = REPO / "plugins" / "databricks" / "skills" / "genie-code" / "references" / "extraction"
CHUNKS = EXTRACTION / "chunks"
OUT_DIR = EXTRACTION / "data" / "dashboard-skill-files"

# Skill registry — values are { chunk_id, module_id, files: [filename, ...] }.
# All three currently ship a single SKILL.md.
SKILL_MAP = {
    "dashboard": {
        "chunk_id": 66786,
        "chunk_hash": "398da23ad6",
        "module_id": 566786,
        "file": "SKILL.md",
    },
    "calculation": {
        "chunk_id": 50147,
        "chunk_hash": "54b3f6ca2e",
        "module_id": 972528,
        "file": "SKILL.md",
    },
    "gdrive-embed-image": {
        "chunk_id": 93509,
        "chunk_hash": "6601166150",
        "module_id": 493509,
        "file": "SKILL.md",
    },
}


def extract_string(src: str, module_id: int) -> str | None:
    """Find `module_id:e=>{e.exports='...'}` (or with double quotes) and return the literal."""
    pattern = re.compile(rf"{module_id}\s*:\s*[a-zA-Z_$][\w$]*\s*=>\s*[^{{]*?\{{?\s*[a-zA-Z_$][\w$]*\.exports\s*=\s*")
    m = pattern.search(src)
    if not m:
        # Try simpler form: `module_id:e=>e.exports="..."`
        pattern = re.compile(rf"{module_id}\s*:\s*[a-zA-Z_$][\w$]*\s*=>\s*[a-zA-Z_$][\w$]*\.exports\s*=\s*")
        m = pattern.search(src)
        if not m:
            return None
    p = m.end()
    if p >= len(src):
        return None
    q = src[p]
    if q not in ('"', "'", "`"):
        return None
    i = p + 1
    out_chars: list[str] = []
    while i < len(src):
        ch = src[i]
        if ch == "\\":
            if i + 1 < len(src):
                esc = src[i + 1]
                if esc == "n":
                    out_chars.append("\n")
                elif esc == "t":
                    out_chars.append("\t")
                elif esc == "r":
                    out_chars.append("\r")
                elif esc == "\\":
                    out_chars.append("\\")
                elif esc == q:
                    out_chars.append(q)
                elif esc == "0":
                    out_chars.append("\x00")
                elif esc == "x":
                    out_chars.append(chr(int(src[i + 2:i + 4], 16)))
                    i += 4
                    continue
                elif esc == "u":
                    out_chars.append(chr(int(src[i + 2:i + 6], 16)))
                    i += 6
                    continue
                else:
                    out_chars.append(esc)
                i += 2
                continue
        if ch == q:
            return "".join(out_chars)
        out_chars.append(ch)
        i += 1
    return None


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    summary = {}
    for skill_name, info in SKILL_MAP.items():
        chunk_path = CHUNKS / f"{info['chunk_id']}.{info['chunk_hash']}.chunk.js"
        if not chunk_path.exists():
            print(f"MISS {skill_name}: chunk not on disk at {chunk_path}")
            continue
        src = chunk_path.read_text()
        content = extract_string(src, info["module_id"])
        if content is None:
            print(f"FAIL {skill_name}: could not extract string from chunk")
            continue
        skill_dir = OUT_DIR / skill_name
        skill_dir.mkdir(exist_ok=True)
        out_file = skill_dir / info["file"]
        out_file.write_text(content)
        summary[skill_name] = {
            "chunk_id": info["chunk_id"],
            "chunk_hash": info["chunk_hash"],
            "module_id": info["module_id"],
            "file": info["file"],
            "bytes": len(content),
            "lines": content.count("\n") + 1,
        }
        print(f"OK   {skill_name}: {len(content)} bytes, {content.count(chr(10)) + 1} lines → {out_file}")

    (OUT_DIR / "_index.json").write_text(json.dumps(summary, indent=2))
    print(f"\nindex: {OUT_DIR / '_index.json'}")


if __name__ == "__main__":
    main()
