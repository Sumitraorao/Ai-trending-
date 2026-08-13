"""
Script to parse agents from the AI agents README file and output them as JSON.
"""

import json
import os
import re

def parse_readme(file_path):
    """
    Parses the given markdown README file to extract a list of AI agents.
    """
    agents = []
    if not os.path.exists(file_path):
        return agents

    with open(file_path, 'r', encoding='utf-8') as f_in:
        content = f_in.read()

    # Parse rows looking like:
    # | **Agent Name** | Category | Description | [![GitHub](...)](URL) |
    row_pattern_str = (
        r'\|\s*\*\*([^*]+)\*\*\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|'
        r'\s*\[!\[.*?\][^\]]*\]\(([^)]+)\)\s*\|'
    )
    row_pattern = re.compile(row_pattern_str)

    for match in row_pattern.finditer(content):
        name = match.group(1).strip()
        category = match.group(2).strip()
        description = match.group(3).strip()
        url = match.group(4).strip()

        tags = [category] if category else ['General']

        agents.append({
            'name': name,
            'url': url,
            'description': description,
            'tags': tags
        })

    # Let's also look for list format:
    # - [Name](url) - Description
    list_pattern = re.compile(r'-\s+\[([^\]]+)\]\((https?://github\.com/[^)]+)\)\s*[-:]?\s*(.*)')
    for match in list_pattern.finditer(content):
        name = match.group(1).strip()
        url = match.group(2).strip()
        description = match.group(3).strip()

        # Determine tags based on description/name
        tags = []
        lower_desc = description.lower()
        if 'trading' in lower_desc or 'finance' in lower_desc:
            tags.append('Finance')
        if 'code' in lower_desc or 'developer' in lower_desc or 'dev' in lower_desc:
            tags.append('Developer Tools')
        if 'chat' in lower_desc or 'assistant' in lower_desc:
            tags.append('Assistant')
        if not tags:
            tags.append('General')

        # Check if we already have it
        if not any(a['url'] == url for a in agents) and not url.startswith(
            'https://github.com/ashishpatel26'
        ):
            agents.append({
                'name': name,
                'url': url,
                'description': description,
                'tags': tags
            })

    return agents

if __name__ == '__main__':
    README_PATH = os.path.join(os.path.dirname(__file__), '..', 'ai-agents-repo', 'README.md')
    parsed_agents_data = parse_readme(README_PATH)

    OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data')
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    OUTPUT_PATH = os.path.join(OUTPUT_DIR, 'agents.json')

    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f_out:
        json.dump(parsed_agents_data, f_out, indent=2)

    print(f"Successfully parsed {len(parsed_agents_data)} agents to {OUTPUT_PATH}")
