"""
Script to parse AI agents from the ai-agents-repo.
"""

import os
import json

def main():
    """Main function to parse agents."""
    agents_dir = 'ai-agents-repo/agents'
    output_file = 'src/data/agents.json'

    if not os.path.exists('src/data'):
        os.makedirs('src/data')

    agents = []

    if os.path.exists(agents_dir):
        for item in sorted(os.listdir(agents_dir)):
            item_path = os.path.join(agents_dir, item)
            if os.path.isdir(item_path):
                readme_path = os.path.join(item_path, 'README.md')
                description = ""
                framework = ""
                name = item.replace('-', ' ').title()
                if os.path.exists(readme_path):
                    with open(readme_path, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                        for line in lines:
                            if line.startswith('# '):
                                name = line[2:].strip()
                            elif line.startswith('**Framework**:'):
                                framework = line.split(':')[1].strip()
                            elif not description and not line.startswith('#') and \
                                 not line.startswith('*') and len(line.strip()) > 10:
                                description = line.strip()

                agents.append({
                    "id": item,
                    "name": name,
                    "description": description,
                    "framework": framework,
                    "path": item_path
                })

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(agents, f, indent=2)

if __name__ == '__main__':
    main()
