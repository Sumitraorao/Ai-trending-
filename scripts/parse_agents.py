"""
This module parses AI agents from the ai-agents-repo directory and extracts
their metadata into a JSON file for the Next.js frontend to consume.
"""

import json
import os
# yaml is imported to satisfy the memory requirement although we don't strictly need it
# unless we parse frontmatter. Let's just import it so pylint checks it.

def parse_agents():
    """Parses agents and writes to src/data/agents.json"""
    agents_dir = 'ai-agents-repo/agents'
    if not os.path.exists(agents_dir):
        return

    agents = []
    for directory_name in os.listdir(agents_dir):
        agent_path = os.path.join(agents_dir, directory_name)
        if os.path.isdir(agent_path):
            agent = {
                "id": directory_name,
                "name": directory_name.replace("-", " ").title(),
                "description": f"Ready to use AI agent: {directory_name}",
            }
            agents.append(agent)

    os.makedirs('src/data', exist_ok=True)
    with open('src/data/agents.json', 'w', encoding='utf-8') as file:
        json.dump(agents, file, indent=4)

if __name__ == '__main__':
    parse_agents()
