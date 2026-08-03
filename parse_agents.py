import requests
import json
import re

url = "https://raw.githubusercontent.com/ashishpatel26/500-AI-Agents-Projects/main/README.md"
response = requests.get(url)
content = response.text

agents = []

current_framework = ""
current_industry = ""

for line in content.split("\n"):
    if line.startswith("### "):
        current_framework = line.replace("### ", "").strip()
    if line.startswith("## "):
        if "Industry Use Cases" in line:
            current_industry = "Industry"
        else:
            current_industry = ""

    if line.startswith("|") and not "---" in line and not "Use Case |" in line and not "Framework |" in line:
        cols = [c.strip() for c in line.split("|") if c.strip()]
        if len(cols) >= 3:
            name = cols[0].replace("**", "")

            # Extract links
            github_link = ""
            link_match = re.search(r'\]\((https://github.com[^\)]+)\)', line)
            if link_match:
                github_link = link_match.group(1)
            elif "github.com" in line:
                gh_matches = re.findall(r'(https://github\.com\S+)', line)
                if gh_matches:
                    github_link = gh_matches[0].rstrip(')')

            if not github_link:
                link_match = re.search(r'\]\((https?://[^\)]+)\)', line)
                if link_match:
                    github_link = link_match.group(1)

            if current_industry == "Industry" and len(cols) >= 4:
                category = cols[1]
                description = cols[2]
            else:
                category = current_framework
                description = cols[2] if len(cols) > 2 else ""

            # Clean emoji from name if present but keep it clean
            name = re.sub(r'^[^\w\s]+', '', name).strip()

            if name and github_link:
                agents.append({
                    "name": name,
                    "category": category,
                    "description": description,
                    "url": github_link
                })

with open("src/data/agents.json", "w") as f:
    json.dump(agents, f, indent=2)

print(f"Extracted {len(agents)} agents.")
