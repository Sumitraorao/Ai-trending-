"""
Script to parse AI agent metadata from the ashishpatel26/500-AI-Agents-Projects repository
and output it as a JSON file for the Next.js frontend to consume.
"""

import json
import os
import yaml

def main():
    """
    Parses agent metadata from the agents directory and saves it to a JSON file.
    """
    agents_dir = "ai-agents-repo/agents"
    agents = []

    if not os.path.exists(agents_dir):
        print(f"Directory {agents_dir} does not exist.")
        return

    for agent_folder in sorted(os.listdir(agents_dir)):
        folder_path = os.path.join(agents_dir, agent_folder)
        if os.path.isdir(folder_path):
            metadata_file = os.path.join(folder_path, "metadata.yaml")
            if os.path.exists(metadata_file):
                with open(metadata_file, "r", encoding="utf-8") as file:
                    try:
                        metadata = yaml.safe_load(file)
                        metadata["folder"] = agent_folder
                        agents.append(metadata)
                    except yaml.YAMLError as exc:
                        print(f"Error parsing YAML in {metadata_file}: {exc}")
            else:
                # Add default if no metadata.yaml
                agents.append({
                    "title": agent_folder.replace("-", " ").title(),
                    "folder": agent_folder,
                    "description": "An AI agent project.",
                    "framework": "unknown",
                    "tags": []
                })

    os.makedirs("src/data", exist_ok=True)
    with open("src/data/agents.json", "w", encoding="utf-8") as file:
        json.dump(agents, file, indent=2)
    print(f"Successfully parsed {len(agents)} agents.")

if __name__ == "__main__":
    main()
