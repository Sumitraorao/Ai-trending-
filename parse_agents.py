"""
Script to parse agents from the AI-Agents repository and generate a JSON file.
"""

import os
import json
import re

def parse_agents():
    """
    Parse agents from the AI-Agents repository and return a list of agent dictionaries.
    """
    agents_dir = 'ai-agents-repo/agents'
    if not os.path.exists(agents_dir):
        return []

    agents = []

    for item in os.listdir(agents_dir):
        item_path = os.path.join(agents_dir, item)
        if not os.path.isdir(item_path):
            continue

        readme_path = os.path.join(item_path, 'README.md')
        if not os.path.exists(readme_path):
            continue

        with open(readme_path, 'r', encoding='utf-8') as f:
            content = f.read()

        name = item
        description = "No description available."

        # Get the first H1 header
        match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
        if match:
            name = match.group(1).strip()

        # Try finding a paragraph that is not a header and not a framework/llm detail
        lines = content.split('\n')
        for line in lines:
            line = line.strip()
            # Ignore headers, bold text (like framework details), and images
            is_valid_line = (
                line and
                not line.startswith('#') and
                not line.startswith('**') and
                not line.startswith('![')
            )
            if is_valid_line and len(line) > 20:
                description = line
                break

        agents.append({
            'id': item,
            'name': name,
            'description': description,
            'path': f'/agents/{item}'
        })

    # Sort agents by id
    agents = sorted(agents, key=lambda x: x['id'])

    return agents

def main():
    """
    Main execution function.
    """
    agents = parse_agents()

    os.makedirs('src/data', exist_ok=True)
    with open('src/data/agents.json', 'w', encoding='utf-8') as f:
        json.dump(agents, f, indent=2)

if __name__ == '__main__':
    main()
