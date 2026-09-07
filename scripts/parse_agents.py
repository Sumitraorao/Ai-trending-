"""
Parses AI agents from the repository README.md.
"""
import os
import re
import json

def clean_name(name):
    """Cleans up the name string."""
    name = re.sub(r'[\U00010000-\U0010ffff]', '', name)
    name = re.sub(r'[\u2600-\u27BF]', '', name)
    name = name.replace('**', '').strip()
    return name

def extract_agent(cols):
    """Extracts an agent from table columns."""
    agent = {
        'name': clean_name(cols[0]),
        'industry': cols[1] if len(cols) > 1 else '',
        'description': cols[2] if len(cols) > 2 else '',
        'link': ''
    }
    if len(cols) > 3:
        # Extract link
        # Format is: [![GitHub](...shields...)](https://github.com/...)
        # We need the last URL, which is the actual link.
        links = re.findall(r'\]\((.*?)\)', cols[3])
        if links:
            # Usually the repo URL is the last link in the cell
            agent['link'] = links[-1]
    return agent

def parse_readme(file_path):
    """Parses the README file and returns a list of agents."""
    agents = []
    if not os.path.exists(file_path):
        return agents

    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Find all tables
    tables = re.findall(r'\|(.*?)\|\n\|[-| ]+\|\n((?:\|.*\|\n?)*)', content)
    for header, body in tables:
        if 'Use Case' in header and 'Description' in header:
            for row in body.strip().split('\n'):
                cols = [c.strip() for c in row.split('|') if c.strip()]
                if len(cols) >= 3:
                    agents.append(extract_agent(cols))
    return agents

def main():
    """Main execution function."""
    repo_dir = 'ai-agents-repo'
    readme_path = os.path.join(repo_dir, 'README.md')
    agents = parse_readme(readme_path)

    out_dir = os.path.join('src', 'data')
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, 'agents.json')

    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(agents, f, indent=2)
    print(f"Parsed {len(agents)} agents to {out_path}")

if __name__ == '__main__':
    main()
