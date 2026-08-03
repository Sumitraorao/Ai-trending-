"""
Script to parse agents from README.md
"""
import json
import re
import urllib.request

URL = "https://raw.githubusercontent.com/ashishpatel26/500-AI-Agents-Projects/main/README.md"
with urllib.request.urlopen(URL, timeout=10) as response:
    content = response.read().decode('utf-8')

agents = []

CURRENT_FRAMEWORK = ""
current_industry = ""

for line in content.split("\n"):
    if line.startswith("### "):
        CURRENT_FRAMEWORK = line.replace("### ", "").strip()
    if line.startswith("## "):
        if "Industry Use Cases" in line:
            current_industry = "Industry"
        else:
            current_industry = ""

    if (line.startswith("|") and "---" not in line and
        "Use Case |" not in line and "Framework |" not in line):
        cols = [c.strip() for c in line.split("|") if c.strip()]
        if len(cols) >= 3:
            name = cols[0].replace("**", "")

            # Extract links
            GITHUB_LINK = ""
            link_match = re.search(r'\]\((https://github.com[^\)]+)\)', line)
            if link_match:
                GITHUB_LINK = link_match.group(1)
            elif "github.com" in line:
                gh_matches = re.findall(r'(https://github\.com\S+)', line)
                if gh_matches:
                    GITHUB_LINK = gh_matches[0].rstrip(')')

            if not GITHUB_LINK:
                link_match = re.search(r'\]\((https?://[^\)]+)\)', line)
                if link_match:
                    GITHUB_LINK = link_match.group(1)

            if current_industry == "Industry" and len(cols) >= 4:
                category = cols[1]
                description = cols[2]
            else:
                category = CURRENT_FRAMEWORK
                description = cols[2] if len(cols) > 2 else ""

            # Clean emoji from name if present but keep it clean
            name = re.sub(r'^[^\w\s]+', '', name).strip()

            if name and GITHUB_LINK:
                agents.append({
                    "name": name,
                    "category": category,
                    "description": description,
                    "url": GITHUB_LINK
                })

with open("src/data/agents.json", "w", encoding="utf-8") as f:
    json.dump(agents, f, indent=2)

print(f"Extracted {len(agents)} agents.")
