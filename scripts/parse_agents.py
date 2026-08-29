"""
Parses agents from the ai-agents-repo.
"""
import json
import os

def parse_agents():
    """Parses agent directories and returns a list of dictionaries with metadata."""
    agents_dir = os.path.join("ai-agents-repo", "agents")
    agents = []

    if not os.path.exists(agents_dir):
        return agents

    for entry in os.listdir(agents_dir):
        agent_path = os.path.join(agents_dir, entry)
        if os.path.isdir(agent_path):
            readme_path = os.path.join(agent_path, "README.md")
            description = ""
            if os.path.exists(readme_path):
                with open(readme_path, "r", encoding="utf-8") as file:
                    description = file.read().split("\n")[0].strip("# ")
            agents.append({
                "id": entry,
                "name": entry.replace("-", " ").title(),
                "description": description if description else "No description available."
            })
    return agents

def main():
    """Main execution function."""
    agents = parse_agents()
    os.makedirs(os.path.join("src", "data"), exist_ok=True)
    with open(os.path.join("src", "data", "agents.json"), "w", encoding="utf-8") as file:
        json.dump(agents, file, indent=2)

if __name__ == "__main__":
    main()
