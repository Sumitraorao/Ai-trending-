"""
This script parses the AI agents repository to extract metadata
about each agent and outputs it as a JSON file for the Next.js app.
"""
import os
import json
import re


def parse_agents_repo(repo_path: str, output_path: str) -> None:
    """
    Parses the agents directory in the given repository path
    and writes the extracted agent metadata to the output JSON file.
    """
    agents_dir = os.path.join(repo_path, 'agents')
    agents = []

    if not os.path.exists(agents_dir):
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(agents, f, indent=2)
        return

    for item in sorted(os.listdir(agents_dir)):
        agent_path = os.path.join(agents_dir, item)
        if os.path.isdir(agent_path):
            readme_path = os.path.join(agent_path, 'README.md')
            if os.path.exists(readme_path):
                agent_info = extract_metadata(readme_path, item)
                agents.append(agent_info)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as out_file:
        json.dump(agents, out_file, indent=2)


def extract_metadata(readme_path: str, folder_name: str) -> dict:
    """
    Extracts metadata such as title and description from a README file.
    """
    title = folder_name.replace('-', ' ').title()
    description = ""
    framework = "Unknown"

    with open(readme_path, 'r', encoding='utf-8') as f:
        content = f.read()

        title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
        if title_match:
            title = title_match.group(1).strip()

        lines = content.split('\n')
        desc_found = False
        for line in lines:
            line_stripped = line.strip()
            if line_stripped and not line_stripped.startswith('#') and not desc_found:
                if not line_stripped.startswith('[') and not line_stripped.startswith('!['):
                    description = line_stripped
                    desc_found = True

        framework_match = re.search(r'\*\*Framework\*\*:\s+(.+)', content)
        if framework_match:
            framework = framework_match.group(1).strip()
        else:
            framework_match = re.search(r'Framework:\s+(.+)', content, re.IGNORECASE)
            if framework_match:
                framework = framework_match.group(1).strip()

    return {
        "id": folder_name,
        "title": title,
        "description": description,
        "framework": framework,
        "path": f"ai-agents-repo/agents/{folder_name}"
    }


if __name__ == "__main__":
    parse_agents_repo('ai-agents-repo', 'src/data/agents.json')
