import os
import json
import re

AGENTS_DIR = '/tmp/500-AI-Agents-Projects/agents'
OUTPUT_FILE = 'src/data/agents.json'

def extract_agent_data():
    agents = []

    if not os.path.exists(AGENTS_DIR):
        print(f"Directory {AGENTS_DIR} does not exist.")
        return

    for item in os.listdir(AGENTS_DIR):
        item_path = os.path.join(AGENTS_DIR, item)
        if os.path.isdir(item_path):
            readme_path = os.path.join(item_path, 'README.md')

            agent_name = item.replace('-', ' ').title()
            # Remove leading numbers like "01 Web Research Agent" -> "Web Research Agent"
            agent_name = re.sub(r'^\d+\s+', '', agent_name)

            description = f"A pre-configured agent for {agent_name.lower()}."

            if os.path.exists(readme_path):
                try:
                    with open(readme_path, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                        # Try to find a better description from the README
                        for line in lines:
                            line = line.strip()
                            if line and not line.startswith('#') and not line.startswith('[') and not line.startswith('!'):
                                description = line
                                break
                except Exception as e:
                    print(f"Error reading {readme_path}: {e}")

            agents.append({
                "id": item,
                "name": agent_name,
                "description": description
            })

    # Sort agents alphabetically by name
    agents = sorted(agents, key=lambda x: x['name'])

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(agents, f, indent=2)

    print(f"Extracted {len(agents)} agents to {OUTPUT_FILE}")

if __name__ == "__main__":
    extract_agent_data()
