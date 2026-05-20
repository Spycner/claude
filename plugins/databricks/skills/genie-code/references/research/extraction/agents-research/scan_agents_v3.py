#!/usr/bin/env python3
"""V3 scanner: finds agent factories with both patterns:
  1) (0,X.G)({name:..., instructions:..., ...})
  2) new X.g({name:..., instructions:..., ...})

Looks for object literals containing `name:` followed by `instructions:` within
the first ~300 chars, then walks the body and extracts fields.
"""
import json, re
from pathlib import Path

_HERE = Path(__file__).resolve().parent
CHUNKS = _HERE.parent / 'chunks'
OUT = _HERE / 'agent_registrations_v3.json'

def matching_close(src, start, open_ch='{', close_ch='}'):
    depth = 0
    i = start
    n = len(src)
    while i < n:
        ch = src[i]
        if ch in '"\'`':
            q = ch; i += 1
            while i < n:
                if src[i] == '\\': i += 2; continue
                if src[i] == q: i += 1; break
                if q == '`' and src[i] == '$' and i+1<n and src[i+1] == '{':
                    j = i + 2; d = 1
                    while j < n and d > 0:
                        if src[j] == '\\': j += 2; continue
                        if src[j] == '{': d += 1
                        elif src[j] == '}': d -= 1
                        j += 1
                    i = j; continue
                i += 1
            continue
        if ch == open_ch: depth += 1
        elif ch == close_ch:
            depth -= 1
            if depth == 0: return i
        i += 1
    return None

def extract_field(body, field):
    i = 1
    n = len(body)
    while i < n - 1:
        while i < n and body[i] in ' \t\n\r,':
            i += 1
        if i >= n - 1: break
        key_start = i
        if body[i] in '"\'':
            q = body[i]; i += 1
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
        if i >= n or body[i] != ':': return None
        i += 1
        while i < n and body[i] in ' \t\n\r':
            i += 1
        val_start = i
        depth = 0
        while i < n:
            ch = body[i]
            if ch in '"\'`':
                q = ch; i += 1
                while i < n:
                    if body[i] == '\\': i += 2; continue
                    if body[i] == q: i += 1; break
                    if q == '`' and body[i] == '$' and i+1<n and body[i+1] == '{':
                        i += 2; d = 1
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

PATTERNS = [
    re.compile(r'\(0,\s*(\w+)\s*\.\s*([Gg])\)\(\s*\{'),  # (0,X.G)({  or  (0,X.g)({
    re.compile(r'new\s+(\w+(?:\.\w+)?)\s*\.\s*([Gg])\s*\(\s*\{'),  # new X.g({  or new X.G({
    re.compile(r'new\s+(\w+)\s*\(\s*\{name:'),  # new X({name:...
]

def main():
    results = []
    seen = set()  # (chunk, start)
    for path in sorted(CHUNKS.glob('*.chunk.js')):
        try:
            src = path.read_text(errors='replace')
        except: continue
        for pat in PATTERNS:
            for m in pat.finditer(src):
                obj_start = m.end() - 1  # position of '{'
                obj_end = matching_close(src, obj_start, '{', '}')
                if obj_end is None: continue
                key = (path.name, obj_start)
                if key in seen: continue
                body = src[obj_start:obj_end+1]
                # Validate agent shape: must have name: and instructions:
                if 'name:' not in body[:300] or 'instructions:' not in body:
                    continue
                # Must have either model: or tools: or hostedTools: or toolUseBehavior:
                has_agent_keys = any(k in body for k in [
                    'hostedTools:', 'toolUseBehavior:', 'flowSettings:', 'modelSettings:'])
                if not has_agent_keys:
                    continue
                seen.add(key)
                results.append({
                    'chunk': path.name,
                    'pattern': pat.pattern[:60],
                    'start': obj_start,
                    'end': obj_end + 1,
                    'body_len': len(body),
                    'name_raw': extract_field(body, 'name'),
                    'instructions_raw': (lambda v: v[:800] if v else None)(extract_field(body, 'instructions')),
                    'tools_raw': extract_field(body, 'tools'),
                    'model_raw': extract_field(body, 'model'),
                    'modelSettings_raw': extract_field(body, 'modelSettings'),
                    'flow_raw': extract_field(body, 'flow'),
                    'flowSettings_raw': extract_field(body, 'flowSettings'),
                    'toolUseBehavior_raw': extract_field(body, 'toolUseBehavior'),
                    'esComponent_raw': extract_field(body, 'esComponent'),
                    'builtInToolsDeps_raw_head': (lambda v: v[:400] if v else None)(extract_field(body, 'builtInToolsDeps')),
                    'skillsets_raw': extract_field(body, 'skillsets'),
                })
    OUT.write_text(json.dumps(results, indent=2))
    print(f'Wrote {len(results)} agent registrations to {OUT}')
    by_chunk = {}
    for r in results:
        by_chunk.setdefault(r['chunk'], []).append(r['name_raw'])
    print(f'Unique chunks: {len(by_chunk)}')
    for c, names in sorted(by_chunk.items()):
        print(f'  {c}: count={len(names)}, names={names}')

if __name__ == '__main__':
    main()
