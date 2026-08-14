"""
Parses the ai-agents-repo README.md to extract a list of agents and their metadata,
and saves the result to a JSON file.
"""
import os
import json
import re

def extract_agent_data(parts):
    """Extracts name, description, and url from table parts."""
    name_col = parts[1]
    name_col = re.sub(r'\*\*(.*?)\*\*', r'\1', name_col)
    name_col = re.sub(r'[^\w\s-]', '', name_col).strip()
    desc_col = parts[3] if len(parts) > 3 else "An AI Agent"
    last_col = parts[-2] if parts[-1] == '' else parts[-1]
    url_match = re.findall(r'\]\(([^)]+)\)', last_col)
    if url_match:
        url = url_match[-1]
        if ('github.com' in url or 'http' in url) and 'img.shields.io' not in url:
            return {'name': name_col, 'url': url, 'description': desc_col}
    return None

def parse_readme():
    """Reads the README and extracts agents."""
    readme_path = 'ai-agents-repo/README.md'
    if not os.path.exists(readme_path):
        return []
    with open(readme_path, 'r', encoding='utf-8') as f:
        content = f.read()
    parsed_agents = []
    lines = content.split('\n')
    for line in lines:
        if line.strip().startswith('|') and 'Use Case' not in line and '---' not in line:
            parts = [p.strip() for p in line.split('|')]
            if len(parts) >= 4:
                agent_data = extract_agent_data(parts)
                if agent_data:
                    parsed_agents.append(agent_data)
    return parsed_agents

def main():
    """Main function to parse and save the agents data."""
    extracted_agents = parse_readme()
    os.makedirs('src/data', exist_ok=True)
    with open('src/data/agents.json', 'w', encoding='utf-8') as f:
        json.dump(extracted_agents, f, indent=2)
    print(f"Extracted {len(extracted_agents)} agents.")

if __name__ == '__main__':
    main()
