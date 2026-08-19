"""
Script to parse AI agents from the ai-agents-repo submodule.
This script extracts metadata and outputs it to src/data/agents.json.
"""

import os
import json


def parse_agents():
    """
    Walk the ai-agents-repo/agents directory and parse agent metadata.
    """
    agents_dir = 'ai-agents-repo/agents'
    agents_data = []

    if not os.path.exists(agents_dir):
        return agents_data

    for item in sorted(os.listdir(agents_dir)):
        item_path = os.path.join(agents_dir, item)
        if os.path.isdir(item_path):
            readme_path = os.path.join(item_path, 'README.md')
            description = "No description available."
            if os.path.exists(readme_path):
                with open(readme_path, 'r', encoding='utf-8') as f:
                    for line in f:
                        if line.startswith('#'):
                            continue
                        if line.strip():
                            description = line.strip()
                            break

            agents_data.append({
                'id': item,
                'name': item.replace('-', ' ').title(),
                'path': item_path,
                'description': description
            })

    return agents_data


if __name__ == "__main__":
    DATA_DIR = 'src/data'
    os.makedirs(DATA_DIR, exist_ok=True)
    agents_list = parse_agents()
    with open(os.path.join(DATA_DIR, 'agents.json'), 'w', encoding='utf-8') as outfile:
        json.dump(agents_list, outfile, indent=4)
