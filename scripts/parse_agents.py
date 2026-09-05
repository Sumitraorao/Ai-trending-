"""
Parses agent metadata into a JSON file for the Next.js frontend.
"""
import os
import json
import yaml

def parse_metadata():
    """
    Reads metadata.yaml from agent directories and saves it as agents.json.
    """
    agents_dir = 'ai-agents-repo/agents'
    agents = []

    for agent_dir in os.listdir(agents_dir):
        metadata_path = os.path.join(agents_dir, agent_dir, 'metadata.yaml')
        if os.path.isfile(metadata_path):
            with open(metadata_path, 'r', encoding='utf-8') as f:
                try:
                    metadata = yaml.safe_load(f)
                    metadata['id'] = agent_dir
                    agents.append(metadata)
                except yaml.YAMLError as exc:
                    print(f"Error parsing {metadata_path}: {exc}")

    os.makedirs('src/data', exist_ok=True)
    with open('src/data/agents.json', 'w', encoding='utf-8') as f:
        json.dump(agents, f, indent=2)

if __name__ == '__main__':
    parse_metadata()
