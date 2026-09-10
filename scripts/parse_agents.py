"""
Script to parse AI agent metadata from the repository and generate a JSON file.
"""

import json
import os
import yaml

def parse_metadata():
    """Parses metadata.yaml files from agents directories and saves them to a JSON file."""
    agents_dir = "ai-agents-repo/agents"
    output_dir = "src/data"
    os.makedirs(output_dir, exist_ok=True)

    agents = []

    # Iterate over directories in agents_dir
    for item in os.listdir(agents_dir):
        item_path = os.path.join(agents_dir, item)
        if os.path.isdir(item_path):
            metadata_file = os.path.join(item_path, "metadata.yaml")
            if os.path.exists(metadata_file):
                with open(metadata_file, "r", encoding="utf-8") as f:
                    try:
                        metadata = yaml.safe_load(f)
                        if metadata:
                            metadata['folder'] = item
                            agents.append(metadata)
                    except yaml.YAMLError as exc:
                        print(f"Error parsing {metadata_file}: {exc}")

    with open(os.path.join(output_dir, "agents.json"), "w", encoding="utf-8") as f:
        json.dump(agents, f, indent=2)

if __name__ == "__main__":
    parse_metadata()
