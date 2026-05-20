#!/usr/bin/env python3
"""Scan chunks for ANY object literal that has the agent shape:
  - hostedTools:[]   AND
  - toolUseBehavior:"run_llm_again"   AND
  - some flavor of instructions: or model: or flow:

Then walk back from the `{` to capture the full object body and field values.
This catches both `(0,X.G)({...})` and bare `{...}` object literals.
"""
import json, re
from pathlib import Path

_HERE = Path(__file__).resolve().parent
CHUNKS = _HERE.parent / 'chunks'
OUT = _HERE / 'agent_registrations_v2.json'

def matching_open(src, end):
    """Walk backwards from end (a position AFTER a closing '}' at depth 0) to find the matching '{'.
    """
    depth = 0
    i = end
    while i >= 0:
        ch = src[i]
        if ch in '"\'`':
            q = ch
            i -= 1
            while i >= 0:
                if src[i] == q and (i == 0 or src[i-1] != '\\'):
                    i -= 1
                    break
                i -= 1
            continue
        if ch == '}':
            depth += 1
            i -= 1; continue
        if ch == '{':
            depth -= 1
            if depth == 0:
                return i
            i -= 1; continue
        i -= 1
    return None

def matching_close(src, start, open_ch='{', close_ch='}'):
    depth = 0
    i = start
    n = len(src)
    while i < n:
        ch = src[i]
        if ch in ('"', "'", '`'):
            q = ch
            i += 1
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
                    i = j
                    continue
                i += 1
            continue
        if ch == '/' and i+1<n and src[i+1] == '*':
            j = src.find('*/', i+2)
            if j < 0: return None
            i = j + 2; continue
        if ch == open_ch: depth += 1
        elif ch == close_ch:
            depth -= 1
            if depth == 0: return i
        i += 1
    return None

def find_agent_objects(src):
    """Find every object literal that contains hostedTools:[] AND toolUseBehavior:"run_llm_again"."""
    results = []
    for m in re.finditer(r'hostedTools:\[\]', src):
        # Walk forward to find the closing '}'
        # We need the WHOLE object body. Walk back from this position to find the enclosing '{'.
        # Strategy: find a small window — at most a few thousand chars before — for the opening '{'
        # walk back balancing braces, ignoring strings.
        anchor = m.start()
        # Walk back from anchor finding the enclosing { at depth=0
        depth = 0
        i = anchor
        start = None
        while i > max(0, anchor - 50000):
            ch = src[i]
            if ch in '"\'`':
                # Walk backward over the string
                q = ch
                i -= 1
                while i > 0:
                    if src[i] == q and src[i-1] != '\\':
                        i -= 1
                        break
                    i -= 1
                continue
            if ch == '}':
                depth += 1
            elif ch == '{':
                if depth == 0:
                    start = i
                    break
                depth -= 1
            i -= 1
        if start is None:
            continue
        end = matching_close(src, start)
        if end is None: continue
        body = src[start:end+1]
        if 'toolUseBehavior:"run_llm_again"' not in body:
            continue
        results.append((start, end, body))
    return results

def extract_field(body, field):
    """Extract a top-level field value from a JS object body (already walked)."""
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

def main():
    results = []
    for path in sorted(CHUNKS.glob('*.chunk.js')):
        try:
            src = path.read_text(errors='replace')
        except: continue
        if 'hostedTools:[]' not in src:
            continue
        for start, end, body in find_agent_objects(src):
            results.append({
                'chunk': path.name,
                'start': start,
                'end': end,
                'body_len': len(body),
                'name_raw': extract_field(body, 'name'),
                'instructions_raw': (lambda v: v[:600] if v else None)(extract_field(body, 'instructions')),
                'tools_raw': extract_field(body, 'tools'),
                'model_raw': extract_field(body, 'model'),
                'modelSettings_raw': extract_field(body, 'modelSettings'),
                'flow_raw': extract_field(body, 'flow'),
                'flowSettings_raw': extract_field(body, 'flowSettings'),
                'toolUseBehavior_raw': extract_field(body, 'toolUseBehavior'),
                'builtInToolsDeps_raw_head': (lambda v: v[:200] if v else None)(extract_field(body, 'builtInToolsDeps')),
                'skillsets_raw': extract_field(body, 'skillsets'),
                'agentName_raw': extract_field(body, 'agentName'),
            })
    OUT.write_text(json.dumps(results, indent=2))
    print(f'Wrote {len(results)} agent-like object literals to {OUT}')
    by_chunk = {}
    for r in results:
        by_chunk.setdefault(r['chunk'], []).append(r['name_raw'])
    print(f'Unique chunks: {len(by_chunk)}')
    for c, names in sorted(by_chunk.items()):
        print(f'  {c}: count={len(names)}, names={names}')

if __name__ == '__main__':
    main()
