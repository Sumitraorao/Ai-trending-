"""Parse AI agents from the ai-agents-repo."""

import os
import json

def get_agents():
    """Returns a list of agents based on the repository structure."""
    agents = []
    base_dir = "ai-agents-repo/agents"

    if not os.path.exists(base_dir):
        return agents

    for entry in sorted(os.listdir(base_dir)):
        agent_dir = os.path.join(base_dir, entry)
        if os.path.isdir(agent_dir):
            readme_path = os.path.join(agent_dir, "README.md")
            description = ""
            if os.path.exists(readme_path):
                with open(readme_path, "r", encoding="utf-8") as f:
                    description = f.read()[:200] + "..."

            agents.append({
                "id": entry,
                "name": entry.replace("-", " ").title(),
                "description": description,
                "path": f"/agents/{entry}"
            })
    return agents

def main():
    """Main execution function."""
    agents = get_agents()
    os.makedirs("src/data", exist_ok=True)
    with open("src/data/agents.json", "w", encoding="utf-8") as f:
        json.dump(agents, f, indent=2)

if __name__ == "__main__":
    main()
