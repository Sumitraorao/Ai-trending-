"""
Script to parse agents from README.md
"""
import json
import re
import urllib.request

URL = "https://raw.githubusercontent.com/ashishpatel26/500-AI-Agents-Projects/main/README.md"

def extract_github_link(line):
    """Extracts a URL from the markdown table line."""
    link_match = re.search(r'\]\((https://github.com[^\)]+)\)', line)
    if link_match:
        return link_match.group(1)

    gh_matches = re.findall(r'(https://github\.com\S+)', line)
    if gh_matches:
        return gh_matches[0].rstrip(')')

    link_match = re.search(r'\]\((https?://[^\)]+)\)', line)
    if link_match:
        return link_match.group(1)

    return ""

def process_table_line(line, current_industry, current_framework):
    """Processes a single table row line and returns an agent dict or None."""
    cols = [c.strip() for c in line.split("|") if c.strip()]
    if len(cols) < 3:
        return None

    name = cols[0].replace("**", "")
    github_link = extract_github_link(line)

    if current_industry == "Industry" and len(cols) >= 4:
        category = cols[1]
        description = cols[2]
    else:
        category = current_framework
        description = cols[2] if len(cols) > 2 else ""

    name = re.sub(r'^[^\w\s]+', '', name).strip()

    if name and github_link:
        return {
            "name": name,
            "category": category,
            "description": description,
            "url": github_link
        }
    return None

def main():
    """Main execution function"""
    with urllib.request.urlopen(URL, timeout=10) as response:
        content = response.read().decode('utf-8')

    agents = []
    current_framework = ""
    current_industry = ""

    for line in content.split("\n"):
        if line.startswith("### "):
            current_framework = line.replace("### ", "").strip()
        elif line.startswith("## "):
            if "Industry Use Cases" in line:
                current_industry = "Industry"
            else:
                current_industry = ""
        elif (line.startswith("|") and "---" not in line and
            "Use Case |" not in line and "Framework |" not in line):

            agent = process_table_line(line, current_industry, current_framework)
            if agent:
                agents.append(agent)

    with open("src/data/agents.json", "w", encoding="utf-8") as file:
        json.dump(agents, file, indent=2)

    print(f"Extracted {len(agents)} agents.")

if __name__ == "__main__":
    main()
