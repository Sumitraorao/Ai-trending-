import json
import os
import re

def parse_agents():
    repo_path = "/tmp/500-AI-Agents-Projects"
    agents_dir = os.path.join(repo_path, "agents")
    agents = []

    if not os.path.exists(agents_dir):
        print(f"Directory {agents_dir} does not exist.")
        return []

    for agent_folder in sorted(os.listdir(agents_dir)):
        folder_path = os.path.join(agents_dir, agent_folder)
        if not os.path.isdir(folder_path):
            continue

        readme_path = os.path.join(folder_path, "README.md")
        description = f"Agent {agent_folder}"
        if os.path.exists(readme_path):
            with open(readme_path, 'r', encoding='utf-8') as f:
                content = f.read()
                # Try to extract the first paragraph or header
                match = re.search(r'#.*?\n\n(.*?)(?:\n\n|$)', content, re.DOTALL)
                if match:
                    description = match.group(1).strip().replace('\n', ' ')

        # Check if it has a requirements.txt or pipfile
        requirements_path = os.path.join(folder_path, "requirements.txt")
        frameworks = []
        if os.path.exists(requirements_path):
            with open(requirements_path, 'r', encoding='utf-8') as f:
                req_content = f.read().lower()
                if 'langchain' in req_content or 'langgraph' in req_content:
                    frameworks.append('LangChain/LangGraph')
                if 'crewai' in req_content:
                    frameworks.append('CrewAI')
                if 'autogen' in req_content:
                    frameworks.append('AutoGen')
                if 'agno' in req_content or 'phidata' in req_content:
                    frameworks.append('Agno')

        agents.append({
            "id": agent_folder,
            "name": " ".join(word.capitalize() for word in agent_folder.split('-')[1:]),
            "description": description[:150] + "..." if len(description) > 150 else description,
            "path": f"agents/{agent_folder}",
            "frameworks": frameworks if frameworks else ["Custom/Other"],
            "status": "Ready to Use",
            "trending": True
        })

    return agents

if __name__ == "__main__":
    agents = parse_agents()
    with open("src/data/agents.json", "w", encoding='utf-8') as f:
        json.dump(agents, f, indent=2)
    print(f"Parsed {len(agents)} agents.")
