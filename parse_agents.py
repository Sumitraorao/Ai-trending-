import os
import yaml
import json

AGENTS_DIR = '/tmp/500-AI-Agents-Projects/agents'
OUTPUT_FILE = 'src/data/agents.json'

agents = []
for agent_dir in os.listdir(AGENTS_DIR):
    agent_path = os.path.join(AGENTS_DIR, agent_dir)
    if os.path.isdir(agent_path):
        metadata_file = os.path.join(agent_path, 'metadata.yaml')
        if os.path.exists(metadata_file):
            with open(metadata_file, 'r') as f:
                try:
                    metadata = yaml.safe_load(f)
                    metadata['id'] = agent_dir
                    agents.append(metadata)
                except yaml.YAMLError as exc:
                    print(f"Error parsing {metadata_file}: {exc}")

with open(OUTPUT_FILE, 'w') as f:
    json.dump(agents, f, indent=2)

print(f"Extracted {len(agents)} agents to {OUTPUT_FILE}")
