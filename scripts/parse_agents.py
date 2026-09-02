"""Script to parse AI agents from the markdown repository."""
import json
import re
import os

def parse_readme():
    """Parses the README file to extract a list of AI agents."""
    with open('ai-agents-repo/README.md', 'r', encoding='utf-8') as read_file:
        content = read_file.read()

    parsed_agents = []
    id_counter = 1

    pattern1 = (
        r'\|\s*\*\*(.*?)\*\*\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|.*?\]\((https://github.com.*?)\)\s*\|'
    )
    matches1 = re.findall(pattern1, content)

    for match in matches1:
        title, industry, description, url = match
        tags = [industry.strip()]

        if 'langgraph' in url.lower() or 'langchain' in description.lower():
            tags.append('LangGraph')
        elif 'crewai' in url.lower() or 'crew' in description.lower():
            tags.append('CrewAI')
        elif 'autogen' in url.lower():
            tags.append('AutoGen')
        elif 'phidata' in url.lower() or 'agno' in url.lower():
            tags.append('Phidata/Agno')

        parsed_agents.append({
            'id': str(id_counter),
            'name': title.strip(),
            'description': description.strip(),
            'url': url.strip(),
            'tags': tags,
            'trending': id_counter <= 20,
            'readyToUse': True
        })
        id_counter += 1

    return parsed_agents

if __name__ == '__main__':
    os.makedirs('src/data', exist_ok=True)
    extracted_agents = parse_readme()
    print(f"Parsed {len(extracted_agents)} agents")
    with open('src/data/agents.json', 'w', encoding='utf-8') as write_file:
        json.dump(extracted_agents, write_file, indent=2)
