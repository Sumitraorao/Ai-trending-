"""
Script to parse AI agents metadata from the ashishpatel26/500-AI-Agents-Projects repository.
It extracts metadata from metadata.yaml files and saves it to a JSON file for the Next.js frontend.
"""

import os
import json
import yaml

def get_agents():
    """
    Parses the agents directory and returns a list of agent metadata dictionaries.
    """
    agents_dir = 'ai-agents-repo/agents'
    agent_list = []
    if not os.path.exists(agents_dir):
        return agent_list

    for agent_name in sorted(os.listdir(agents_dir)):
        agent_path = os.path.join(agents_dir, agent_name)
        if os.path.isdir(agent_path):
            metadata_path = os.path.join(agent_path, 'metadata.yaml')
            if os.path.exists(metadata_path):
                with open(metadata_path, 'r', encoding='utf-8') as f_in:
                    try:
                        metadata = yaml.safe_load(f_in)
                        metadata['id'] = agent_name
                        metadata['folder_path'] = agent_path
                        agent_list.append(metadata)
                    except yaml.YAMLError as e:
                        print(f"Error parsing {metadata_path}: {e}")
    return agent_list

if __name__ == "__main__":
    agents_data = get_agents()
    os.makedirs('src/data', exist_ok=True)
    with open('src/data/agents.json', 'w', encoding='utf-8') as f_out:
        json.dump(agents_data, f_out, indent=2)
    print(f"Parsed {len(agents_data)} agents to src/data/agents.json")
