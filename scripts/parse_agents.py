"""
Parses agent data from the ai-agents-repo.
"""
import os
import json

def main():
    """Main execution function to parse agents and dump to JSON."""
    agents_dir = "ai-agents-repo/agents"
    if not os.path.exists(agents_dir):
        print(f"Directory {agents_dir} not found.")
        return

    agents = []
    for entry in os.listdir(agents_dir):
        full_path = os.path.join(agents_dir, entry)
        if os.path.isdir(full_path):
            readme_path = os.path.join(full_path, "README.md")
            description = ""
            if os.path.exists(readme_path):
                with open(readme_path, "r", encoding="utf-8") as f:
                    description = f.read()[:200] + "..."

            agents.append({
                "id": entry,
                "name": entry.replace("-", " ").title(),
                "path": full_path,
                "description": description
            })

    output_dir = "src/data"
    os.makedirs(output_dir, exist_ok=True)
    with open(os.path.join(output_dir, "agents.json"), "w", encoding="utf-8") as f:
        json.dump(agents, f, indent=2)
    print(f"Parsed {len(agents)} agents.")

if __name__ == "__main__":
    main()
