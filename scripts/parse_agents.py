"""
Parses the README.md from the ai-agents-repo to extract a list of AI agents
and saves them as JSON data.
"""

import re
import json
import os

def parse_readme():
    """Reads the README and extracts agents."""
    readme_path = os.path.join("ai-agents-repo", "README.md")
    if not os.path.exists(readme_path):
        print("README not found at", readme_path)
        return

    with open(readme_path, "r", encoding="utf-8") as f:
        content = f.read()

    # The agents are typically in a table format:
    # | **Agent Name** | Category | Description | [![GitHub]...](url) |

    # We will use regex to find these table rows.
    # Pattern to match table rows.
    # We skip header rows (containing '---')

    agents = []

    # Find the table rows
    lines = content.split('\n')
    for line in lines:
        if line.startswith('|') and not line.startswith('| ---'):
            parts = [p.strip() for p in line.split('|')[1:-1]]
            if len(parts) >= 4:
                # Basic validation that it looks like an agent row
                name_match = re.search(r'\*\*(.*?)\*\*', parts[0])
                if name_match:
                    name = name_match.group(1)
                    category = parts[1]
                    description = parts[2]

                    # Extract URL from the last column which typically has a markdown link
                    url_match = re.search(r'\((https://github\.com/[^\)]+)\)', parts[3])
                    if url_match:
                        url = url_match.group(1)
                        agents.append({
                            "name": name,
                            "category": category,
                            "description": description,
                            "url": url
                        })

    # Save to data directory
    os.makedirs("src/data", exist_ok=True)
    with open("src/data/agents.json", "w", encoding="utf-8") as f:
        json.dump(agents, f, indent=4)

    print(f"Successfully parsed {len(agents)} agents.")

if __name__ == "__main__":
    parse_readme()
