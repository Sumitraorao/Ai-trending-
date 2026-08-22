"""Script to parse agents from the ai-agents-repo and generate a JSON file."""
import os
import json
import re

AGENTS_DIR = 'ai-agents-repo/agents'
OUTPUT_FILE = 'src/data/agents.json'


def parse_agents():
    """Parse agents from the AGENTS_DIR and save metadata to OUTPUT_FILE."""
    agents = []

    if not os.path.exists(AGENTS_DIR):
        print(f"Directory {AGENTS_DIR} not found.")
        return

    for item in sorted(os.listdir(AGENTS_DIR)):
        item_path = os.path.join(AGENTS_DIR, item)
        if os.path.isdir(item_path):
            readme_path = os.path.join(item_path, 'README.md')
            description = ""
            if os.path.exists(readme_path):
                with open(readme_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Try to extract the first paragraph after headers
                    match = re.search(r'^(?!#)(?!\s*$).+', content, re.MULTILINE)
                    if match:
                        description = match.group(0).strip()

            # Make the name nicer, e.g. 01-web-research-agent -> Web Research Agent
            name = item
            name = re.sub(r'^\d+-', '', name)
            name = name.replace('-', ' ').title()

            agents.append({
                "id": item,
                "name": name,
                "description": description or f"A ready-to-use {name.lower()}.",
                "path": item_path
            })

    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump({"agents": agents}, f, indent=2)


if __name__ == '__main__':
    parse_agents()
