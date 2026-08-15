"""
Script to parse metadata.yaml files from AI agents repository.
Outputs parsed agents to src/data/agents.json.
"""

import os
import json
import yaml


def main():
    """Main execution function."""
    base_dir = os.path.join(
        os.path.dirname(__file__),
        "ai-agents-repo",
        "agents"
    )

    data_dir = os.path.join(os.path.dirname(__file__), "src", "data")
    os.makedirs(data_dir, exist_ok=True)
    output_file = os.path.join(data_dir, "agents.json")

    agents = []

    if os.path.exists(base_dir):
        for entry in os.scandir(base_dir):
            if entry.is_dir():
                metadata_path = os.path.join(entry.path, "metadata.yaml")
                if os.path.exists(metadata_path):
                    with open(metadata_path, "r", encoding="utf-8") as f:
                        try:
                            metadata = yaml.safe_load(f)
                            if metadata:
                                # Ensure we have id
                                metadata["id"] = entry.name
                                agents.append(metadata)
                        except yaml.YAMLError as exc:
                            print(f"Error parsing {metadata_path}: {exc}")
    else:
        print(f"Directory {base_dir} does not exist.")

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(agents, f, indent=2)
    print(f"Successfully generated {output_file} with {len(agents)} agents.")


if __name__ == "__main__":
    main()
