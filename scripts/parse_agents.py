"""
Parses the AI agents repository and extracts metadata.
"""
import os
import json
import re

def main():
    """Main function."""
    agents_dir = "ai-agents-repo/agents"
    agents_data = []

    if not os.path.exists(agents_dir):
        print(f"Directory {agents_dir} does not exist.")
        return

    for item in sorted(os.listdir(agents_dir)):
        item_path = os.path.join(agents_dir, item)
        if os.path.isdir(item_path):
            readme_path = os.path.join(item_path, "README.md")
            description = ""
            name = item.replace("-", " ").title()

            # Remove leading numbers like "01 "
            name = re.sub(r'^\d+\s+', '', name)

            if os.path.exists(readme_path):
                with open(readme_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                    # Try to extract the first paragraph as description
                    lines = content.split('\n')
                    for line in lines:
                        line = line.strip()
                        if line and not line.startswith(('#', '!', '[')):
                            description = line
                            break

            agents_data.append({
                "id": item,
                "name": name,
                "description": description or f"A {name} agent.",
                "path": f"/ai-agents-repo/agents/{item}"
            })

    output_dir = "src/data"
    os.makedirs(output_dir, exist_ok=True)

    output_file = os.path.join(output_dir, "agents.json")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(agents_data, f, indent=2)

    print(f"Parsed {len(agents_data)} agents and saved to {output_file}")

if __name__ == "__main__":
    main()
