import os
import json
import re

def get_agents():
    agents_dir = "ai-agents-repo/agents"
    agents_list = []

    if not os.path.exists(agents_dir):
        return agents_list

    for item in os.listdir(agents_dir):
        item_path = os.path.join(agents_dir, item)
        if os.path.isdir(item_path):
            readme_path = os.path.join(item_path, "README.md")
            desc = ""
            if os.path.exists(readme_path):
                with open(readme_path, "r", encoding="utf-8") as file:
                    content = file.read()
                    # Try to extract description
                    desc_match = re.search(r'# .*?\n\n(.*?)(?:\n\n|\Z)', content, re.DOTALL)
                    if desc_match:
                        desc = desc_match.group(1).strip()

            agents_list.append({
                "id": item,
                "name": item.replace("-", " ").title(),
                "description": desc[:200] + "..." if len(desc) > 200 else desc,
                "path": f"agents/{item}",
            })

    return agents_list

if __name__ == "__main__":
    agents = get_agents()
    os.makedirs("src/data", exist_ok=True)
    with open("src/data/agents.json", "w", encoding="utf-8") as f:
        json.dump(agents, f, indent=2)
    print(f"Parsed {len(agents)} agents.")
