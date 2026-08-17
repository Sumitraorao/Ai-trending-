"""Module for parsing AI agent README files and generating a JSON metadata file."""
import json
import os
import re

def parse_readme(readme_path):
    """Parses a README file to extract agent metadata."""
    with open(readme_path, 'r', encoding='utf-8') as f:
        content = f.read()

    name = ""
    description = ""
    difficulty = ""
    framework = ""

    # Simple parsing logic - can be improved
    name_match = re.search(r'# (.*)', content)
    if name_match:
        name = name_match.group(1).strip()

    desc_match = re.search(r'## Description\n\n(.*)', content)
    if desc_match:
        description = desc_match.group(1).strip()

    diff_match = re.search(r'Difficulty: (.*)', content, re.IGNORECASE)
    if diff_match:
        difficulty = diff_match.group(1).strip().strip('*')

    fw_match = re.search(r'Framework: (.*)', content, re.IGNORECASE)
    if fw_match:
        framework = fw_match.group(1).strip().strip('*')

    return {
        "name": name,
        "description": description if description else "An AI Agent project.",
        "difficulty": difficulty if difficulty else "Intermediate",
        "framework": framework if framework else "LangChain / CrewAI"
    }

def main():
    """Main entry point to parse agent projects."""
    agents_dir = 'ai-agents-repo/agents'
    agents = []

    if not os.path.exists(agents_dir):
        print(f"Directory {agents_dir} not found.")
        return

    for item in os.listdir(agents_dir):
        item_path = os.path.join(agents_dir, item)
        if os.path.isdir(item_path):
            readme_path = os.path.join(item_path, 'README.md')
            if os.path.exists(readme_path):
                agent_info = parse_readme(readme_path)
                agent_info['id'] = item
                agent_info['path'] = f'ai-agents-repo/agents/{item}'
                agents.append(agent_info)
            else:
                agents.append({
                    "id": item,
                    "name": item.replace('-', ' ').title(),
                    "description": "An AI Agent project.",
                    "difficulty": "Intermediate",
                    "framework": "LangChain",
                    "path": f'ai-agents-repo/agents/{item}'
                })

    # sort agents
    agents = sorted(agents, key=lambda x: x['id'])

    os.makedirs('src/data', exist_ok=True)
    with open('src/data/agents.json', 'w', encoding='utf-8') as f:
        json.dump(agents, f, indent=2)

    print(f"Successfully parsed {len(agents)} agents to src/data/agents.json")

if __name__ == '__main__':
    main()
