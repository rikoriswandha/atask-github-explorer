# GitHub Explorer (atask-github-explorer)

A web application built with React, TypeScript, and Vite that allows users to search for GitHub profiles and view their public repositories. This project is part of the 'atask' series.

## Features

- **User Search:** Find GitHub users by their username.
- **Profile Display:** View basic user information such as avatar, name, bio, followers, and following count.
- **Repository Listing:** Browse a user's public repositories with links to each repository on GitHub.
- **Responsive Design:** Adapts to various screen sizes for a consistent experience on desktop and mobile devices.
- **Loading States:** UI skeletons and loading indicators provide feedback during data fetching.
- **Routing:** Utilizes TanStack Router for efficient client-side navigation and cool URL state management.
- **Styling:** Modern UI styled with Mantine.

## Tech Stack

- **Frontend Framework:** [React](https://reactjs.org/) (v18+)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [TanStack Router](https://tanstack.com/router/latest)
- **Styling:** [Mantine](https://mantine.dev/)
- **API:** [GitHub REST API](https://docs.github.com/en/rest)
- **Linting/Formatting:** ESLint, Prettier (typically configured in Vite templates)

## Project Structure (Simplified Overview)

```
/public                 # Static assets
/src
  /components         # Reusable UI components (e.g., UserCard, RepoList)
  /hooks              # Custom React Hooks (e.g., useDebounce, useFetchGitHubUser)
  /routes             # TanStack Router route definitions and associated components
  /services           # API interaction logic (e.g., functions to call GitHub API)
  /store              # State management (if used, e.g., Zustand, Jotai)
  /types              # TypeScript type definitions
  /utils              # Utility functions
  main.tsx            # Application entry point
  App.tsx             # Root application component (often includes router setup)
  vite-env.d.ts       # Vite environment type definitions
index.html              # Main HTML page
.env.example            # Example environment variables file
.eslintrc.cjs           # ESLint configuration
.gitignore              # Git ignore rules
package.json            # Project dependencies and scripts
postcss.config.js       # PostCSS configuration for Mantine
tsconfig.node.json      # TypeScript configuration for Node.js environment (e.g., Vite config)
vite.config.ts          # Vite configuration file
README.md               # This file!
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version, e.g., v18.x or v20.x recommended) or [bun](https://bun.sh/)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/) package manager

### Installation

1.  **Clone the repository:**

    ```bash
    # Replace with your actual repository URL if you have one
    git clone https://github.com/your-username/atask-github-explorer.git
    cd atask-github-explorer
    ```

2.  **Install dependencies:**
    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

    Or using pnpm:

    ```bash
    pnpm install
    ```

### Running the Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

or

```bash
pnpm dev
```

or

```bash
bun dev
```

This will start the Vite development server, typically at `http://localhost:5173`.

## Available Scripts

In the `package.json`, you will likely find the following scripts:

- `dev`: Starts the development server with Hot Module Replacement (HMR).
- `build`: Compiles TypeScript and bundles the application for production into the `dist` folder.
- `lint`: Runs ESLint to check for code quality and style issues.
- `preview`: Serves the production build locally to preview before deployment.

## Usage

1.  Navigate to the application in your browser (e.g., `http://localhost:5173`).
2.  Use the search bar to type in a GitHub username.
3.  Press Enter or click the search button.
4.  Click on the user's profile to view their public repositories.
