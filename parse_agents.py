"""
Script to parse the AI Agents repository README and extract agent metadata.
"""

import json
import os
import re

def _extract_link_from_markdown(link_col):
    """Helper function to extract the URL from a markdown link or badge."""
    link_match = re.search(r'\]\((https?://[^)]+)\)', link_col)
    if link_match:
        all_links = re.findall(r'\]\((https?://[^)]+)\)', link_col)
        if all_links:
            return all_links[-1]
    elif link_col.startswith("http"):
        return link_col
    return ""

def _parse_table_rows(content):
    """Extract agent data from markdown tables."""
    agents = []
    table_pattern = re.compile(
        r'\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|'
    )
    matches = table_pattern.findall(content)

    for match in matches:
        use_case = match[0].strip()

        if "---" in use_case or use_case == "Use Case" or "Use Case |" in use_case:
            continue

        name = re.sub(r'^[^\w\s]+', '', use_case).strip()
        name = name.replace("**", "").strip()
        if not name:
            name = use_case

        industry = match[1].strip()
        description = match[2].strip()
        link_col = match[3].strip()

        link = _extract_link_from_markdown(link_col)

        if not link or "img.shields.io" in link:
            continue

        description = description.replace("**", "").strip()

        tags = ["AI", "Agent"]
        if industry:
            tags.append(industry.replace(" ", ""))

        agents.append({
            "name": name,
            "category": industry,
            "description": description,
            "url": link,
            "tags": tags
        })
    return agents

def _parse_agents_dir():
    """Extract agent data from the local agents directory."""
    agents = []
    agents_dir = os.path.join("ai-agents-repo", "agents")
    if os.path.exists(agents_dir):
        for item in os.listdir(agents_dir):
            item_path = os.path.join(agents_dir, item)
            if os.path.isdir(item_path):
                name = item.replace("-", " ")
                name = re.sub(r'^\d+\s+', '', name).title()
                agents.append({
                    "name": name,
                    "category": "General",
                    "description": f"Ready to use AI Agent: {name}",
                    "url": (
                        "https://github.com/ashishpatel26/500-AI-Agents-Projects/"
                        f"tree/main/agents/{item}"
                    ),
                    "tags": ["AI", "Agent", "Ready-to-use"]
                })
    return agents

def parse_readme():
    """Parses the README.md file to extract agent data."""
    readme_path = os.path.join("ai-agents-repo", "README.md")

    if not os.path.exists(readme_path):
        print(f"File not found: {readme_path}")
        return []

    with open(readme_path, "r", encoding="utf-8") as f:
        content = f.read()

    agents = _parse_table_rows(content)
    agents.extend(_parse_agents_dir())

    unique_agents = {agent['url']: agent for agent in agents}.values()
    return list(unique_agents)

def main():
    """Main execution function."""
    agents = parse_readme()

    output_dir = os.path.join("src", "data")
    os.makedirs(output_dir, exist_ok=True)

    output_path = os.path.join(output_dir, "agents.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(agents, f, indent=2)

    print(f"Extracted {len(agents)} agents and saved to {output_path}")

if __name__ == "__main__":
    main()
