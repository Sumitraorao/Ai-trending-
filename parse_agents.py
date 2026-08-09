import os
import yaml
import json

repo_path = "ai-agents-repo/agents"
agents_data = []

if os.path.exists(repo_path):
    for agent_dir in sorted(os.listdir(repo_path)):
        full_dir_path = os.path.join(repo_path, agent_dir)
        if os.path.isdir(full_dir_path):
            metadata_path = os.path.join(full_dir_path, "metadata.yaml")
            if os.path.exists(metadata_path):
                try:
                    with open(metadata_path, 'r', encoding='utf-8') as f:
                        data = yaml.safe_load(f)
                        data['id'] = agent_dir
                        data['path'] = full_dir_path
                        agents_data.append(data)
                except Exception as e:
                    print(f"Error parsing {metadata_path}: {e}")

output_path = "src/data/agents.json"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(agents_data, f, indent=2)

print(f"Parsed {len(agents_data)} agents and saved to {output_path}")
