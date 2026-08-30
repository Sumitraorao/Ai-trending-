"""
Script to parse AI agents metadata from the ai-agents-repo.
Outputs the parsed data to src/data/agents.json.
"""

import os
import json
import yaml

AGENTS_DIR = 'ai-agents-repo/agents'
OUTPUT_FILE = 'src/data/agents.json'

def parse_agents():
    """Parses agent metadata and returns a list of dictionaries."""
    agents = []
    if not os.path.exists(AGENTS_DIR):
        return agents
    for agent_dir in os.listdir(AGENTS_DIR):
        agent_path = os.path.join(AGENTS_DIR, agent_dir)
        if not os.path.isdir(agent_path):
            continue
        metadata_file = os.path.join(agent_path, 'metadata.yaml')
        if not os.path.exists(metadata_file):
            continue
        try:
            with open(metadata_file, 'r', encoding='utf-8') as f:
                metadata = yaml.safe_load(f)
                metadata['id'] = agent_dir
                agents.append(metadata)
        except Exception as e: # pylint: disable=broad-exception-caught
            print(f"Error parsing {metadata_file}: {e}")
    return agents

def main():
    """Main execution function."""
    print(f"Parsing agents from {AGENTS_DIR}...")
    agents = parse_agents()
    print(f"Found {len(agents)} agents.")
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(agents, f, indent=2)
    print(f"Successfully wrote {OUTPUT_FILE}.")

if __name__ == '__main__':
    main()
