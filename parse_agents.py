"""Script to extract agent metadata from the AI agents repository."""

import os
import json
import re

def extract_description(repo_path, folder):
    """Extract description from agent README."""
    agent_readme = os.path.join(repo_path, folder, "README.md")
    desc = "A ready-to-use AI agent."
    if os.path.exists(agent_readme):
        with open(agent_readme, "r", encoding="utf-8") as af:
            agent_content = af.read()
            desc_match = re.search(r"^# .*?\n\n(.*?)(?=\n\n|$)", agent_content, re.DOTALL)
            if desc_match:
                desc = desc_match.group(1).replace("\n", " ").strip()
    return desc

def parse_agent_line(line, repo_path):
    """Parse a single agent line and return metadata."""
    parts = [p.strip() for p in line.split("|")]
    if len(parts) < 7:
        return None

    agent_col = parts[2]
    agent_match = re.search(r"\[(.*?)\]\((.*?)\)", agent_col)
    if not agent_match:
        return None

    folder = agent_match.group(2).strip("/")

    agent_info = {
        "id": folder,
        "name": agent_match.group(1),
        "framework": parts[3],
        "llm": parts[4],
        "industry": parts[5],
        "difficulty": parts[6],
        "path": f"ai-agents-repo/agents/{folder}",
        "description": extract_description(repo_path, folder)
    }

    return agent_info

def parse_metadata():
    """Extract agent metadata from README.md and directory structure."""
    repo_path = "ai-agents-repo/agents"
    agents_data = []

    readme_path = os.path.join(repo_path, "README.md")
    if not os.path.exists(readme_path):
        return agents_data

    with open(readme_path, "r", encoding="utf-8") as f:
        content = f.read()

    table_match = re.search(
        r"## Agent Index\n\n\|.*?\|\n\|[-|]+\|\n(.*?)(?=\n##|$)",
        content,
        re.DOTALL
    )

    if not table_match:
        return agents_data

    for line in table_match.group(1).strip().split("\n"):
        agent_info = parse_agent_line(line, repo_path)
        if agent_info:
            agents_data.append(agent_info)

    os.makedirs("src/data", exist_ok=True)
    with open("src/data/agents.json", "w", encoding="utf-8") as f:
        json.dump(agents_data, f, indent=2)

    return agents_data

if __name__ == "__main__":
    parse_metadata()
