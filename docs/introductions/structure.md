# Project Structure (Monorepo)

Your LaraJS Monorepo is organized into the following structure:

```txt
.
├── .docker              # Docker configuration files
├── .husky               # Husky hooks for Git
├── .yarn                # Yarn configurations
├── apps
│   ├── api              # Laravel backend (API)
│   ├── cms              # Vue-based CMS (Content Management System)
│   └── frontend         # Vue-based frontend
├── packages
│   ├── assets           # Shared assets
│   ├── common           # Common utilities across the project
│   ├── components       # Vue components shared across apps
│   ├── core             # Core functionalities of the project
│   ├── directives       # Custom Vue directives
│   ├── eslint-config    # Eslint configuration package
│   ├── generator        # Code generator utilities
│   ├── permission       # Permissions management
│   ├── plugins          # Plugins used in the project
│   ├── ssr              # Server-side rendering support
│   ├── uses             # Custom hooks and utility functions
│   └── utils            # Utility functions shared across the project
├── .commitlintrc.json   # Commitlint configuration
├── .prettierrc.json     # Prettier configuration
├── compose.yml          # Docker Compose file
├── eslint.config.js     # Eslint configuration
├── turbo.json           # Turborepo configuration for managing workspaces
├── package.json         # Project's main package.json file
└── ...
```
