# 500 AI Agents Web App

This is a Next.js web application built to showcase the ready-to-use AI agents from the [500-AI-Agents-Projects](https://github.com/ashishpatel26/500-AI-Agents-Projects) repository.

## Features

- **Full Clone:** Integrates the original repository as a git submodule to ensure access to all real code.
- **Agent Directory:** Displays a list of all parsed AI agents from the source repo.
- **Agent Details:** Individual pages for each agent, providing technical details and tags.
- **Light Theme Only:** Strictly follows a light theme for optimal readability, avoiding dark themes and black colors.

## Getting Started

First, ensure the submodule is cloned and updated:

\`\`\`bash
git submodule update --init --recursive
\`\`\`

Then, parse the agent metadata to generate the data for the frontend:

\`\`\`bash
pip install -r scripts/requirements.txt
python scripts/parse_agents.py
\`\`\`

Finally, start the Next.js development server:

\`\`\`bash
npm install
npm run dev &
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

The project uses:
- **Next.js** for the frontend application.
- **Tailwind CSS** for styling (strictly light theme).
- **Python** for scripts parsing agent metadata.
- **ESLint** for Next.js and TypeScript linting.
- **Pylint** for Python script linting.
