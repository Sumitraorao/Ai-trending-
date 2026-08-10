"""Module for parsing agent metadata from the ai-agents-repo."""
import os
import json

def parse_agents():
    """Extracts agent information from the ai-agents-repo directories."""
    agents_dir = 'ai-agents-repo/agents'
    agents = []

    if not os.path.exists(agents_dir):
        return agents

    for agent_folder in os.listdir(agents_dir):
        agent_path = os.path.join(agents_dir, agent_folder)
        if os.path.isdir(agent_path):
            readme_path = os.path.join(agent_path, 'README.md')

            agent_data = {
                'id': agent_folder,
                'name': agent_folder.replace('-', ' ').title(),
                'description': '',
                'ready_to_use': True,
                'trending': True # Assign dummy values or parse accurately
            }

            if os.path.exists(readme_path):
                with open(readme_path, 'r', encoding='utf-8') as readme_file:
                    content = readme_file.read()
                    # Basic extraction
                    first_para = content.split('\n\n')[1] if len(content.split('\n\n')) > 1 else ''
                    agent_data['description'] = first_para.strip()

            agents.append(agent_data)

    return agents

if __name__ == "__main__":
    agents_data = parse_agents()
    with open('src/data/agents.json', 'w', encoding='utf-8') as out_file:
        json.dump(agents_data, out_file, indent=2)
