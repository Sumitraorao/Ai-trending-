"""Parse metadata from agents."""
import json
import os
import yaml

def main():
    """Main parsing function."""
    base_dir = "ai-agents-repo/agents"
    agents_data = []

    if not os.path.exists(base_dir):
        print("Directory not found")
        return

    for agent_dir in os.listdir(base_dir):
        dir_path = os.path.join(base_dir, agent_dir)
        if os.path.isdir(dir_path):
            metadata_path = os.path.join(dir_path, "metadata.yaml")
            if os.path.exists(metadata_path):
                try:
                    with open(metadata_path, 'r', encoding='utf-8') as f:
                        data = yaml.safe_load(f)
                        data['id'] = agent_dir
                        agents_data.append(data)
                except yaml.YAMLError as e:
                    print(f"Error parsing YAML {metadata_path}: {e}")
                except IOError as e:
                    print(f"Error reading {metadata_path}: {e}")

    os.makedirs("src/data", exist_ok=True)
    with open("src/data/agents.json", "w", encoding="utf-8") as f:
        json.dump(agents_data, f, indent=2)

if __name__ == "__main__":
    main()
