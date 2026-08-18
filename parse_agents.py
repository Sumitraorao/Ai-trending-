"""
Parses metadata for AI agents from the ai-agents-repo.
"""
import os
import json
import yaml

def parse_agents(base_dir="ai-agents-repo/agents"):
    """
    Parses agent metadata from metadata.yaml files in the given base directory.
    """
    agents = []
    if not os.path.exists(base_dir):
        return agents

    for entry in os.listdir(base_dir):
        agent_dir = os.path.join(base_dir, entry)
        if os.path.isdir(agent_dir):
            metadata_path = os.path.join(agent_dir, "metadata.yaml")
            if os.path.exists(metadata_path):
                with open(metadata_path, "r", encoding="utf-8") as f:
                    try:
                        metadata = yaml.safe_load(f)
                        metadata["id"] = entry
                        agents.append(metadata)
                    except yaml.YAMLError as e:
                        print(f"Error parsing {metadata_path}: {e}")

    return agents

if __name__ == "__main__":
    agents_data = parse_agents()
    os.makedirs("src/data", exist_ok=True)
    with open("src/data/agents.json", "w", encoding="utf-8") as out_file:
        json.dump(agents_data, out_file, indent=2)
    print(f"Parsed {len(agents_data)} agents and saved to src/data/agents.json")
