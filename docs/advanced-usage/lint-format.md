# 🛠️ Pre-commit Checks and Tools

Before committing a message, we ensure the following checks are automatically performed: syntax validation, code rule enforcement, and formatting. This process ensures a clean, consistent codebase and helps catch errors early. The following tools are used to maintain code quality:

## ⚡ Husky

**Husky** helps automate Git hooks, allowing you to run scripts at key points in your Git workflow, such as before committing or pushing code. It ensures that actions like running tests, linting, or formatting occur automatically, helping to maintain code quality.

## 🔍 Lint-staged

**Lint-staged** runs linters on your staged files before committing. This ensures that only the files you've modified go through linting, speeding up the process while ensuring that all changes conform to the project's code quality standards.

## 🎨 Prettier

**Prettier** is an opinionated code formatter that automatically applies consistent styling to your codebase. It eliminates debates over code style, ensuring that all code is formatted according to the same rules, improving readability and maintaining uniformity across the project.

## 🚦 ESLint

**ESLint** is a static code analysis tool used to identify problematic patterns in JavaScript and TypeScript code. It helps catch errors early, enforce coding standards, and maintain a clean and consistent codebase by flagging code that doesn't meet the defined rules.

## 📝 Commitlint

**Commitlint** enforces a standardized format for commit messages. It helps ensure that commit messages follow predefined rules, which improves the clarity of the project's Git history and facilitates better communication within teams.

## 🔍 Larastan

**Larastan** is a PHP static analysis tool that integrates with Laravel. It helps detect potential bugs and enforces best coding practices, ensuring your PHP code is clean, follows Laravel conventions, and is free from common mistakes.

## ✨ Laravel Pint

**Laravel Pint** is a code formatting tool specifically for PHP, designed to follow Laravel's style guidelines. It automatically formats your PHP code, ensuring that your project adheres to Laravel's coding standards and maintains a consistent code style throughout.
