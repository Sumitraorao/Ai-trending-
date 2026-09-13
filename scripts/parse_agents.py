"""Module to parse agent metadata from the ai-agents-repo README."""
import os
import json
import re

def parse_readme():
    """Parses the README.md to extract agent metadata."""
    readme_path = "ai-agents-repo/agents/README.md"
    if not os.path.exists(readme_path):
        print(f"File {readme_path} not found.")
        return []

    parsed_agents = []

    with open(readme_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    for line in lines:
        if line.startswith('|') and not line.startswith('| # |') and not line.startswith('|---|'):
            parts = [p.strip() for p in line.split('|')]
            if len(parts) >= 7:
                idx = parts[1]
                agent_raw = parts[2]
                framework = parts[3]
                llm = parts[4]
                industry = parts[5]
                difficulty = parts[6]

                match = re.search(r'\[(.*?)\]\((.*?)\)', agent_raw)
                if match:
                    title = match.group(1)
                    url = match.group(2)
                    parsed_agents.append({
                        'id': idx,
                        'title': title,
                        'url': url,
                        'framework': framework,
                        'llm': llm,
                        'industry': industry,
                        'difficulty': difficulty,
                        'ready_to_use': True,
                        'trending': True
                    })

    return parsed_agents

if __name__ == "__main__":
    extracted_agents = parse_readme()
    os.makedirs('src/data', exist_ok=True)
    with open('src/data/agents.json', 'w', encoding='utf-8') as outfile:
        json.dump(extracted_agents, outfile, indent=2)
    print(f"Parsed {len(extracted_agents)} agents and saved to src/data/agents.json")
