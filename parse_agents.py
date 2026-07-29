import os
import yaml
import json

agents_dir = '/tmp/500-AI-Agents-Projects/agents'
agents = []

for folder in sorted(os.listdir(agents_dir)):
    if os.path.isdir(os.path.join(agents_dir, folder)):
        meta_path = os.path.join(agents_dir, folder, 'metadata.yaml')
        if os.path.exists(meta_path):
            with open(meta_path, 'r') as f:
                data = yaml.safe_load(f)
                data['folder'] = folder
                agents.append(data)

os.makedirs('src/data', exist_ok=True)
with open('src/data/agents.json', 'w') as f:
    json.dump(agents, f, indent=2)

print(f"Saved {len(agents)} agents to src/data/agents.json")
