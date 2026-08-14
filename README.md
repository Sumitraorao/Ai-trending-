# 500 AI Agents Directory

A full-stack web application displaying a curated list of AI agents sourced from the 500-AI-Agents-Projects repository.

## Features

- **Next.js Frontend:** A modern, responsive web application built with Next.js 16.
- **Tailwind CSS:** Styled using Tailwind CSS v4, strictly adhering to a light theme with no dark colors or black themes.
- **Python Data Extraction:** A robust, pylint-compliant Python script (parse_agents.py) extracts agent metadata directly from the source repository's README into a clean JSON format.
- **Automated AI Integrations:** Clones the main agents repository as a submodule for direct access.

## Quick Start

### 1. Extract Data

First, run the Python script to extract the latest agent data:

`python3 parse_agents.py`

This generates src/data/agents.json which the frontend uses.

### 2. Install Dependencies

`npm install`

### 3. Run Development Server

`npm run dev &`

Open http://localhost:3000 to view the application.

## Building for Production

`npm run build`
`npm run start &`

## Linting

- **Python (Pylint):**
  `pylint parse_agents.py`
- **JavaScript/React (ESLint):**
  `npm run lint`
