#!/usr/bin/env python3
"""
Quick validation script for skills - minimal version
"""

import sys
import os
import re
import yaml
from pathlib import Path

def validate_skill(skill_path):
    """Basic validation of a skill"""
    skill_path = Path(skill_path)

    # Check SKILL.md exists
    skill_md = skill_path / 'SKILL.md'
    if not skill_md.exists():
        return False, "SKILL.md not found"

    # Read and validate frontmatter
    content = skill_md.read_text()
    if not content.startswith('---'):
        return False, "No YAML frontmatter found"

    # Extract frontmatter
    match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not match:
        return False, "Invalid frontmatter format"

    frontmatter_text = match.group(1)

    # Parse YAML frontmatter
    try:
        frontmatter = yaml.safe_load(frontmatter_text)
        if not isinstance(frontmatter, dict):
            return False, "Frontmatter must be a YAML dictionary"
    except yaml.YAMLError as e:
        return False, f"Invalid YAML in frontmatter: {e}"

    # Define allowed properties: the agentskills.io spec fields plus the
    # documented platform extensions (claude.ai: dependencies; Claude Code:
    # invocation, execution, and argument fields per
    # code.claude.com/docs/en/skills).
    ALLOWED_PROPERTIES = {
        # agentskills.io spec
        'name', 'description', 'license', 'allowed-tools', 'metadata', 'compatibility',
        # claude.ai
        'dependencies',
        # Claude Code extensions
        'when_to_use', 'argument-hint', 'arguments',
        'disable-model-invocation', 'user-invocable',
        'disallowed-tools', 'model', 'effort',
        'context', 'agent', 'hooks', 'paths', 'shell',
    }

    # Check for unexpected properties (excluding nested keys under metadata)
    unexpected_keys = set(frontmatter.keys()) - ALLOWED_PROPERTIES
    if unexpected_keys:
        return False, (
            f"Unexpected key(s) in SKILL.md frontmatter: {', '.join(sorted(unexpected_keys))}. "
            f"Allowed properties are: {', '.join(sorted(ALLOWED_PROPERTIES))}"
        )

    # Check required fields
    if 'name' not in frontmatter:
        return False, "Missing 'name' in frontmatter"
    if 'description' not in frontmatter:
        return False, "Missing 'description' in frontmatter"

    # Extract name for validation
    name = frontmatter.get('name', '')
    if not isinstance(name, str):
        return False, f"Name must be a string, got {type(name).__name__}"
    name = name.strip()
    if name:
        # Check naming convention (kebab-case: lowercase with hyphens)
        if not re.match(r'^[a-z0-9-]+$', name):
            return False, f"Name '{name}' should be kebab-case (lowercase letters, digits, and hyphens only)"
        if name.startswith('-') or name.endswith('-') or '--' in name:
            return False, f"Name '{name}' cannot start/end with hyphen or contain consecutive hyphens"
        # Check name length (max 64 characters per spec)
        if len(name) > 64:
            return False, f"Name is too long ({len(name)} characters). Maximum is 64 characters."

    warnings = []

    # Extract and validate description
    description = frontmatter.get('description', '')
    if not isinstance(description, str):
        return False, f"Description must be a string, got {type(description).__name__}"
    description = description.strip()
    if description:
        # Check for angle brackets
        if '<' in description or '>' in description:
            return False, "Description cannot contain angle brackets (< or >)"
        # Check description length (max 1024 characters per spec)
        if len(description) > 1024:
            return False, f"Description is too long ({len(description)} characters). Maximum is 1024 characters."
        # claude.ai caps uploaded custom skill descriptions at 200 characters
        if len(description) > 200:
            warnings.append(
                f"Description is {len(description)} characters; claude.ai caps uploaded "
                f"custom skill descriptions at 200. Fine for Claude Code, but shorten it "
                f"if this skill will be uploaded to claude.ai."
            )

    # Validate compatibility field if present (optional)
    compatibility = frontmatter.get('compatibility', '')
    if compatibility:
        if not isinstance(compatibility, str):
            return False, f"Compatibility must be a string, got {type(compatibility).__name__}"
        if len(compatibility) > 500:
            return False, f"Compatibility is too long ({len(compatibility)} characters). Maximum is 500 characters."

    # Check that relative files linked from SKILL.md exist, so a typo'd
    # pointer doesn't ship as a dead reference. Warning only: links to
    # runtime-generated paths would otherwise block packaging.
    body = content[match.end():]
    for link_target in re.findall(r'\[[^\]]*\]\(([^)\s]+)\)', body):
        if link_target.startswith(('http://', 'https://', 'mailto:', '#', '/')):
            continue
        if '${' in link_target:
            continue
        rel_path = link_target.split('#')[0]
        if rel_path and not (skill_path / rel_path).exists():
            warnings.append(f"SKILL.md links to '{link_target}' but '{rel_path}' does not exist in the skill directory.")

    if warnings:
        return True, "Skill is valid!\nWarnings:\n" + "\n".join(f"- {w}" for w in warnings)
    return True, "Skill is valid!"

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python quick_validate.py <skill_directory>")
        sys.exit(1)
    
    valid, message = validate_skill(sys.argv[1])
    print(message)
    sys.exit(0 if valid else 1)