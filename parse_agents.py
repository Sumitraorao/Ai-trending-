"""
This script parses metadata from the ai-agents-repo and generates a JSON file
for the Next.js frontend to consume.
"""

import json
import os
import glob
import yaml

def parse_agents():
    """
    Parses metadata.yaml from all agent folders in the repository and
    writes a combined JSON file for the frontend to consume.
    """
    agents = []
    metadata_files = glob.glob('ai-agents-repo/agents/*/metadata.yaml')
    for file_path in metadata_files:
        with open(file_path, 'r', encoding='utf-8') as file:
            try:
                metadata = yaml.safe_load(file)
                if metadata:
                    agents.append(metadata)
            except yaml.YAMLError as exc:
                print(f"Error parsing {file_path}: {exc}")

    os.makedirs('src/data', exist_ok=True)
    output_path = 'src/data/agents.json'
    with open(output_path, 'w', encoding='utf-8') as out_file:
        json.dump(agents, out_file, indent=2)

    print(f"Successfully extracted {len(agents)} agents to {output_path}")

if __name__ == "__main__":
    parse_agents()
