"""
Script to parse AI agents from the ai-agents-repo submodule and generate a JSON file.
"""

import os
import json
import re
import yaml

REPO_DIR = "ai-agents-repo/agents"
OUTPUT_FILE = "src/data/agents.json"

def main():
    """Parse agents from the submodule and save to a JSON file."""
    agents = []

    if not os.path.exists(REPO_DIR):
        print(f"Error: Directory '{REPO_DIR}' not found. Did you initialize the submodule?")
        return

    for agent_dir in sorted(os.listdir(REPO_DIR)):
        full_path = os.path.join(REPO_DIR, agent_dir)

        if not os.path.isdir(full_path):
            continue

        metadata_file = os.path.join(full_path, "metadata.yaml")
        readme_file = os.path.join(full_path, "README.md")

        agent_data = {
            "id": agent_dir,
            "name": agent_dir.replace("-", " ").title(),
            "description": "",
            "tags": [],
            "status": "ready"
        }

        if os.path.exists(metadata_file):
            try:
                with open(metadata_file, "r", encoding="utf-8") as f:
                    meta = yaml.safe_load(f)
                    if meta:
                        agent_data["name"] = meta.get("name", agent_data["name"])
                        agent_data["description"] = meta.get(
                            "description", agent_data["description"]
                        )
                        agent_data["tags"] = meta.get("tags", agent_data["tags"])
                        agent_data["status"] = meta.get("status", agent_data["status"])
            except Exception as e: # pylint: disable=broad-exception-caught
                print(f"Warning: Could not parse metadata for {agent_dir}: {e}")

        elif os.path.exists(readme_file):
            try:
                with open(readme_file, "r", encoding="utf-8") as f:
                    content = f.read()

                    # Try to find a description (first paragraph)
                    paragraphs = re.split(r'\n\s*\n', content)
                    for p in paragraphs:
                        if p.strip() and not p.startswith('#') and not p.startswith('!['):
                            agent_data["description"] = p.strip()
                            break

                    # Try to extract title
                    title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
                    if title_match:
                        agent_data["name"] = title_match.group(1).strip()
            except Exception as e: # pylint: disable=broad-exception-caught
                print(f"Warning: Could not parse README for {agent_dir}: {e}")

        agents.append(agent_data)

    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(agents, f, indent=2)

    print(f"Successfully parsed {len(agents)} agents to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
