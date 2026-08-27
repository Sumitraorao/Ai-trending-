"""
Script to parse AI agents from the ai-agents-repo README.md
and output them to a JSON file for the frontend to consume.
"""

import json
import re
from pathlib import Path


def parse_readme():
    """
    Parses the README.md file to extract a list of agents
    from the markdown tables.
    """
    repo_dir = Path('ai-agents-repo')
    readme_path = repo_dir / 'README.md'

    if not readme_path.exists():
        print("README.md not found in ai-agents-repo")
        return []

    content = readme_path.read_text(encoding='utf-8')
    agents = []

    # Simple table parser
    # Match lines that look like markdown table rows, starting with |
    lines = content.split('\n')

    for line in lines:
        line = line.strip()
        if not line.startswith('|') or '---' in line or 'Code' in line or 'Use Case' in line:
            continue

        parts = [p.strip() for p in line.split('|')[1:-1]]
        if len(parts) >= 4:
            name_raw = parts[0]
            industry = parts[1]
            description = parts[2]
            code_raw = parts[3]

            # Extract names without emojis
            name = re.sub(r'^[^\w]+', '', name_raw).strip()

            # Extract URL from code column
            # Sometimes it's like [![Python](...)](url)
            # Find the last URL in parentheses
            urls = re.findall(r'\]\((.*?)\)', code_raw)
            if urls:
                url = urls[-1]  # Take the last one, usually the link to repo

                if url.startswith('http') and 'shields.io' not in url:
                    agents.append({
                        "id": re.sub(r'[^a-zA-Z0-9]+', '-', name).lower(),
                        'name': name,
                        'industry': industry,
                        'description': description,
                        'url': url
                    })

    return agents


def main():
    """Main execution function"""
    agents = parse_readme()
    print(f"Found {len(agents)} agents")

    output_dir = Path('src/data')
    output_dir.mkdir(parents=True, exist_ok=True)

    output_path = output_dir / 'agents.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(agents, f, indent=2)

    print(f"Saved to {output_path}")


if __name__ == '__main__':
    main()
