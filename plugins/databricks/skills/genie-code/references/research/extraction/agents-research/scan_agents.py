#!/usr/bin/env python3
"""Scan chunk JS for agent factory invocations.

The agent class is module 91783 exported as `.G`. The factory call form is:
  (0,<letter>.G)({name:..., instructions:..., tools:..., model:..., ...})

We find these by pattern alone (no import resolution), then validate by checking
the object body has agent-shape keys.
"""
from __future__ import annotations
import json
import re
from pathlib import Path

_HERE = Path(__file__).resolve().parent
CHUNKS = _HERE.parent / 'chunks'
OUT = _HERE / 'agent_registrations.json'

def matching_close(src: str, start: int, open_ch: str, close_ch: str) -> int | None:
    if start >= len(src) or src[start] != open_ch:
        return None
    depth = 0
    i = start
    n = len(src)
    while i < n:
        ch = src[i]
        if ch in ('"', "'", "`"):
            q = ch
            i += 1
            while i < n:
                if src[i] == '\\':
                    i += 2
                    continue
                if src[i] == q:
                    i += 1
                    break
                if q == '`' and src[i] == '$' and i+1<n and src[i+1] == '{':
                    j = i + 2
                    d = 1
                    while j < n and d > 0:
                        if src[j] == '\\': j += 2; continue
                        if src[j] == '{': d += 1
                        elif src[j] == '}': d -= 1
                        j += 1
                    i = j
                    continue
                i += 1
            continue
        if ch == '/' and i+1<n and src[i+1] == '*':
            j = src.find('*/', i+2)
            if j < 0: return None
            i = j+2
            continue
        if ch == open_ch:
            depth += 1
        elif ch == close_ch:
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return None

def extract_field(body: str, field: str) -> str | None:
    i = 1
    n = len(body)
    while i < n - 1:
        while i < n and body[i] in ' \t\n\r,':
            i += 1
        if i >= n - 1: break
        key_start = i
        if body[i] in '"\'':
            q = body[i]
            i += 1
            while i < n and body[i] != q:
                if body[i] == '\\': i += 2
                else: i += 1
            key_text = body[key_start+1:i]
            i += 1
        else:
            while i < n and (body[i].isalnum() or body[i] in '_$'):
                i += 1
            key_text = body[key_start:i]
        while i < n and body[i] in ' \t\n\r':
            i += 1
        if i >= n or body[i] != ':':
            return None
        i += 1
        while i < n and body[i] in ' \t\n\r':
            i += 1
        val_start = i
        depth = 0
        while i < n:
            ch = body[i]
            if ch in '"\'`':
                q = ch
                i += 1
                while i < n:
                    if body[i] == '\\': i += 2; continue
                    if body[i] == q: i += 1; break
                    if q == '`' and body[i] == '$' and i+1<n and body[i+1] == '{':
                        i += 2
                        d = 1
                        while i < n and d > 0:
                            if body[i] == '\\': i += 2; continue
                            if body[i] == '{': d += 1
                            elif body[i] == '}': d -= 1
                            i += 1
                        continue
                    i += 1
                continue
            if ch in '{[(':
                depth += 1; i += 1; continue
            if ch in '}])':
                if depth == 0: break
                depth -= 1; i += 1; continue
            if ch == ',' and depth == 0:
                break
            i += 1
        val_text = body[val_start:i].strip()
        if key_text == field:
            return val_text
    return None

def find_letter_module_id(src: str, factory_pos: int, letter: str) -> int | None:
    """Walk backward from factory_pos within the same module fn body and find what letter is bound to."""
    # Find the enclosing module wrapper opening (e,t,r)=>{ to know the module scope
    # The chunk is a webpack manifest: {<mid>:(e,t,r)=>{...module source...},<mid>:(e,t,r)=>{...},...}
    # We need: walk back from factory_pos to find a (e,t,r)=>{ then forward through the assignment.
    snippet = src[max(0, factory_pos - 30000):factory_pos]
    # Search for <letter>=r(<digits>) in snippet, take the last one
    matches = list(re.finditer(rf'\b{letter}\s*=\s*r\((\d+)\)', snippet))
    if not matches:
        return None
    return int(matches[-1].group(1))

def main():
    results = []
    for path in sorted(CHUNKS.glob('*.chunk.js')):
        src = path.read_text(errors='replace')
        # Find all (0,<letter>.G)({ invocations
        for m in re.finditer(r'\(0,\s*(\w+)\s*\.\s*G\)\(\s*\{', src):
            letter = m.group(1)
            obj_start = m.end() - 1
            obj_end = matching_close(src, obj_start, '{', '}')
            if obj_end is None:
                continue
            body = src[obj_start:obj_end + 1]
            # Validate by checking the body has agent-shape keys
            if 'instructions:' not in body or 'tools:' not in body:
                continue
            # Resolve letter to module id
            mid = find_letter_module_id(src, m.start(), letter)
            if mid != 91783:
                continue  # Different .G — not the Agent class
            name_field = extract_field(body, 'name')
            instr_field = extract_field(body, 'instructions')
            tools_field = extract_field(body, 'tools')
            model_field = extract_field(body, 'model')
            flow_field = extract_field(body, 'flow')
            tub_field = extract_field(body, 'toolUseBehavior')
            results.append({
                'chunk': path.name,
                'letter': letter,
                'factory_pos': m.start(),
                'name_raw': name_field,
                'tools_raw': (tools_field[:300] + '...') if tools_field and len(tools_field) > 300 else tools_field,
                'model_raw': model_field,
                'flow_raw': flow_field,
                'toolUseBehavior_raw': tub_field,
                'instr_raw_head': (instr_field[:400] if instr_field else None),
                'body_len': len(body),
            })
    OUT.write_text(json.dumps(results, indent=2))
    print(f'Wrote {len(results)} agent registrations to {OUT}')
    # Quick summary
    by_chunk = {}
    for r in results:
        by_chunk.setdefault(r['chunk'], []).append(r['name_raw'])
    print(f'Unique chunks: {len(by_chunk)}')
    for c, names in by_chunk.items():
        print(f'  {c}: {names}')

if __name__ == '__main__':
    main()
