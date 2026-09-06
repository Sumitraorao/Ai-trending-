# AI Agents Directory

A full-stack web application built with Next.js and Tailwind CSS that lists trending and ready-to-use AI agents cloned from the `ashishpatel26/500-AI-Agents-Projects` repository.

## Features

- **Next.js Frontend:** Fast and responsive web app.
- **Tailwind CSS:** Styled with a clean, light-themed UI (strictly no dark mode and no black colors).
- **Data Parsing:** A Python script parses the AI agents repository to extract a structured list of agents.
- **Submodule Integration:** Uses a Git submodule to stay up-to-date with the upstream repository.

## Setup

1. **Clone the repository with submodules:**
   \`\`\`bash
   git clone --recurse-submodules <repository_url>
   \`\`\`

2. **Initialize setup:**
   This command initializes the submodule, installs npm dependencies, and parses the initial data from the repository.
   \`\`\`bash
   npm run setup
   \`\`\`
   *Note: Ensure you have Python installed as it is required for the parse_agents.py script.*

3. **Run the development server:**
   \`\`\`bash
   npm run dev &
   \`\`\`

## Development Commands
- \`npm run dev &\` - Start local development server
- \`npm run build\` - Build the application for production
- \`npm run lint\` - Run Next.js linting
- \`npm run setup\` - Initialize repository data
