"""
Script to parse agent metadata from the ai-agents-repo.
"""
import json
import os

import yaml # pylint: disable=import-error


REPO_PATH = "ai-agents-repo/agents"
AGENTS_DATA = []

if os.path.exists(REPO_PATH):
    for agent_dir in sorted(os.listdir(REPO_PATH)):
        full_dir_path = os.path.join(REPO_PATH, agent_dir)
        if os.path.isdir(full_dir_path):
            metadata_path = os.path.join(full_dir_path, "metadata.yaml")
            if os.path.exists(metadata_path):
                try:
                    with open(metadata_path, 'r', encoding='utf-8') as f:
                        data = yaml.safe_load(f)
                        data['id'] = agent_dir
                        data['path'] = full_dir_path
                        AGENTS_DATA.append(data)
                except Exception as e: # pylint: disable=broad-exception-caught
                    print(f"Error parsing {metadata_path}: {e}")

OUTPUT_PATH = "src/data/agents.json"
os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
    json.dump(AGENTS_DATA, f, indent=2)

print(f"Parsed {len(AGENTS_DATA)} agents and saved to {OUTPUT_PATH}")
