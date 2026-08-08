import os
import json
import re

def parse_agents(repo_path, output_path):
    agents_dir = os.path.join(repo_path, "agents")
    if not os.path.exists(agents_dir):
        print(f"Agents directory {agents_dir} not found.")
        return

    agents = []

    for item in sorted(os.listdir(agents_dir)):
        item_path = os.path.join(agents_dir, item)
        if os.path.isdir(item_path):
            readme_path = os.path.join(item_path, "README.md")
            if os.path.exists(readme_path):
                with open(readme_path, "r", encoding="utf-8") as f:
                    content = f.read()

                # Extract Title
                title_match = re.search(r"^#\s+(.+)", content, re.MULTILINE)
                title = title_match.group(1) if title_match else item

                # Extract Framework
                framework_match = re.search(r"\*\*Framework\*\*:\s+(.+)", content, re.IGNORECASE)
                framework = framework_match.group(1) if framework_match else "Unknown"

                # Extract LLM
                llm_match = re.search(r"\*\*LLM\*\*:\s+(.+)", content, re.IGNORECASE)
                llm = llm_match.group(1) if llm_match else "Unknown"

                # Extract Description (first paragraph after title that doesn't start with bold)
                desc_match = re.search(r"^#\s+.*?\n+(?![\*\#])(.+?)(?=\n\n|\n\#)", content, re.MULTILINE | re.DOTALL)
                description = desc_match.group(1).strip() if desc_match else "No description available."

                agents.append({
                    "id": item,
                    "title": title.strip(),
                    "framework": framework.strip(),
                    "llm": llm.strip(),
                    "description": description.replace("\n", " ").strip(),
                    "path": f"ai-agents-repo/agents/{item}"
                })

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(agents, f, indent=2)
    print(f"Parsed {len(agents)} agents and saved to {output_path}")

if __name__ == "__main__":
    parse_agents("ai-agents-repo", "src/data/agents.json")
