"""Script to parse agent metadata and output to a JSON file."""
import os
import json
import yaml

def parse_agents():
    """Parses agent metadata.yaml files and writes to src/data/agents.json."""
    agents_dir = 'ai-agents-repo/agents'
    if not os.path.isdir(agents_dir):
        print(f"Directory {agents_dir} not found.")
        return

    agents = []
    for entry in os.scandir(agents_dir):
        if entry.is_dir():
            metadata_path = os.path.join(entry.path, 'metadata.yaml')
            if os.path.isfile(metadata_path):
                with open(metadata_path, 'r', encoding='utf-8') as f:
                    try:
                        metadata = yaml.safe_load(f)
                        metadata['id'] = entry.name
                        agents.append(metadata)
                    except yaml.YAMLError as exc:
                        print(f"Error parsing YAML in {metadata_path}: {exc}")

    output_path = 'src/data/agents.json'
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(agents, f, indent=2)

if __name__ == '__main__':
    parse_agents()
