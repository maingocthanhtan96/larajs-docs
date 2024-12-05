---
outline: deep
---

## Introduction

- The [LaraJS Boilerplate](https://github.com/maingocthanhtan96/larajs-boilerplate) is a full-stack boilerplate for Laravel and Vue 3. It's a perfect starting point for your next project.
- I'm committed to keeping it up to date with the latest versions of both backend and frontend technologies.

## ⚡ Quick Start

**Clone the repository**

```bash
git clone https://github.com/maingocthanhtan96/larajs-boilerplate.git
```

## Features

- Backend:
  - ✅ PHP 8.3
  - ✅ Laravel 11
  - ✅ Laravel Pint (Code formatting)
  - ✅ Pest PHP (Testing)
  - ✅ Larastan (PHP static analysis)
  - ✅ Laravel Debugbar (Debugging tool)
  - ✅ Laravel IDE Helper (IDE support)
- Frontend:
  - ✅ Clean Structure
  - ✅ Pnpm (Package manager)
  - ✅ Vite + Vue 3 + TypeScript
  - ✅ Husky (Git hooks)
  - ✅ Eslint, Prettier, CommitLint (Code quality tools)
  - ✅ Auto Import (Automatic imports for components and composables)
  - ✅ Vue Router (SPA routing)
  - ✅ Pinia (State management)
  - ✅ Axios (HTTP requests)
  - ✅ NProgress (Progress bar)
  - ✅ Sass (CSS preprocessor)

## Installation

### Backend:

1. Install dependencies:

```bash
composer install
```

2. Copy the example environment file:

```bash
cp .env.example .env
```

3. Generate the application key:

```bash
php artisan key:generate
```

4. Start the local development server:

```bash
php artisan serve
```

### Frontend:

1. Install dependencies:

```bash
pnpm install
```

2. Start the local development server:

```bash
pnpm dev
```

### Vite Configuration (optional):

- Option 1: Run Vite directly from Laravel using the laravel-vite-plugin:
  - Ensure the plugin is enabled in vite.config.mts.
- Option 2: Run the Vite server separately:
  - Comment out the laravel-vite-plugin and remove the index.html file from the root directory to run Vite independently.
