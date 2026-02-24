---
outline: deep
title: "LaraJS Agent Skills - AI-Powered Documentation for Claude Code"
description: "LaraJS provides a set of Claude Code agent skills that give AI assistants instant access to LaraJS documentation, enabling context-aware help for generators, packages, and configuration."
author: "LaraJS Team"
head:
  - - meta
    - name: keywords
      content: LaraJS agent skills, Claude Code skills, AI documentation, LaraJS AI assistant, Claude Code integration, LaraJS generators skills, LaraJS packages skills
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:title
      content: "LaraJS Agent Skills - AI-Powered Documentation for Claude Code"
  - - meta
    - property: og:description
      content: "LaraJS provides Claude Code agent skills that give AI assistants instant access to LaraJS documentation"
  - - meta
    - property: og:url
      content: https://docs.larajs.com/agent-skills/index.html
  - - meta
    - property: og:image
      content: https://docs.larajs.com/larajs.png
  - - meta
    - property: og:type
      content: article
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: "LaraJS Agent Skills - AI-Powered Documentation for Claude Code"
  - - meta
    - name: twitter:description
      content: "LaraJS provides Claude Code agent skills that give AI assistants instant access to LaraJS documentation"
  - - meta
    - name: twitter:image
      content: https://docs.larajs.com/larajs.png
  - - link
    - rel: canonical
      href: https://docs.larajs.com/agent-skills/index.html
---

# Agent Skills

LaraJS ships with a set of **Claude Code agent skills** that give AI assistants immediate, accurate context about LaraJS generators and packages — no manual copy-pasting from docs required.

When you work inside the LaraJS repository with [Claude Code](https://claude.ai/code), these skills are automatically available. Claude will use them whenever you ask questions about LaraJS features.

## What Are Agent Skills?

Agent skills are modular knowledge packages stored under `.claude/skills/` in your project. Each skill contains structured documentation that Claude Code loads as context when answering questions about a specific topic.

```txt
.claude/
└── skills/
    ├── generators-getting-started/
    │   └── SKILL.md
    ├── generators-backend/
    │   └── SKILL.md
    ├── generators-frontend/
    │   └── SKILL.md
    ├── packages-larajs-core/
    │   └── SKILL.md
    ├── packages-larajs-query/
    │   └── SKILL.md
    ├── packages-larajs-i18n/
    │   └── SKILL.md
    ├── packages-larajs-permission/
    │   └── SKILL.md
    ├── packages-larajs-generator/
    │   └── SKILL.md
    └── packages-larajs-cqrs/
        └── SKILL.md
```

## Available Skills

### Generator Skills

#### `generators-getting-started`

Covers the LaraJS generator overview: model configuration, all field options (timestamps, soft deletes, user signature, API only, API docs, migrations, test cases), field types (unique, index, comment), all supported database types, form UI components per type, relationship setup (hasOne, hasMany, belongsToMany, many-to-many with pivot tables), and DBML import with full type mapping and attribute mappings.

**Triggered when asking about:** model configuration, field types, DBML import, generator options, relationships.

---

#### `generators-backend`

Covers the generated backend API structure in a monorepo: file layout (controllers, services, repositories, resources, models, migrations, factories, seeders, routes, tests), code examples for each generated file, language/i18n generation, adding new languages, generating API documentation with Scribe, and running Pest PHP tests.

**Triggered when asking about:** generated PHP files, API structure, backend code, language generator, running tests.

---

#### `generators-frontend`

Covers the generated Vue.js CMS structure: file layout (API integration, router modules, uses/hooks, views), the `useCategoryApis` composable, router setup with `constantRoutes` vs `asyncRoutes`, `useForms` and `useTables` hooks, `LaraForm` and `LaraTable` components, `Form.vue` and `index.vue` view templates, and TypeScript model interfaces.

**Triggered when asking about:** generated Vue files, CMS structure, frontend hooks, LaraForm, LaraTable, router setup.

---

### Package Skills

#### `packages-larajs-core`

Covers the `larajs/core` package: installation and setup (`larajs:setup`), `BaseLaraJSController` response methods (`responseData`, `responseMessage`, `responseResource`), `LangMiddleware` for language switching, `LogRequestResponse` middleware, `UserSignature` trait for tracking `created_by`/`updated_by`, the `Action` trait, artisan commands (`larajs:make:action`, `larajs:make:controller`, `larajs:make:repository`), and helper functions.

**Triggered when asking about:** LaraJS Core, base controller, middleware, user signature, action classes, artisan commands.

---

#### `packages-larajs-query`

Covers the `larajs/query` package: dynamic Eloquent query building with `LaraJSQuery` trait, all filter operations (equals, lessThan, greaterThan, contains, startsWith, endsWith, any, between, relation, not, has, or, and), sorting (including relationship and count sorting via BelongsToThrough), searching with `whereLike`, including relationships with aggregates (count, exists, sum, min, max, avg), field selection, date filtering, all pagination modes (default, simple, cursor), the `QueryParserAllowDTO` allow-list pattern, and the repository structure (ReadRepository, WriteRepository, BaseLaraJSRepository).

**Triggered when asking about:** query filtering, sorting, searching, pagination, relationships, allow query.

---

#### `packages-larajs-i18n`

Covers the `larajs/i18n` package: installation as a dev dependency, running `php artisan larajs:i18n` to convert PHP language files to JSON, publishing the config, and integrating the generated JSON file with Vue I18n (`createI18n`).

**Triggered when asking about:** internationalization, PHP to JSON language conversion, Vue I18n integration.

---

#### `packages-larajs-permission`

Covers the `larajs/permission` package: installation, adding `HasRoles` trait to the User model, defining a Super-Admin with `Gate::before` in `AuthServiceProvider`, setting up role and permission seeders with `RoleEnum` and `PermissionEnum`, syncing roles/permissions (`syncRoles`, `givePermissionTo`), and integrating the Role Permission UI into the Vue.js CMS.

**Triggered when asking about:** RBAC, roles, permissions, user access control, permission seeder.

---

#### `packages-larajs-generator`

Covers the `larajs/generator` package: installation, configuring the Node.js path via `GENERATOR_NODE_PATH` environment variable, publishing config/migration/stubs, and the `generators` database table schema.

**Triggered when asking about:** generator package installation, node path config, publishing stubs.

---

#### `packages-larajs-cqrs`

Covers the `larajs/cqrs` package: installation, publishing config, the CQRS folder structure (Commands, Queries, Resources), creating commands with `#[Handler]` attribute, command handlers, query handlers, `CommandBusInterface` and `QueryBusInterface`, registering middleware with `#[Middleware]` and `#[ResetMiddleware]` attributes, and the `cqrs.php` bus configuration.

**Triggered when asking about:** CQRS, command bus, query bus, command handlers, query handlers, middleware on handlers.

---

## How to Use

Skills are automatically loaded by Claude Code when you're working inside the LaraJS repository. Simply ask a question in natural language:

```
How do I add a LONGTEXT field with search enabled?
```

```
What filter operations does LaraJS Query support?
```

```
Show me how the generated CategoryController looks.
```

Claude will automatically detect the relevant skill and answer using the embedded documentation.

## Creating Your Own Skills

You can extend the skill set by adding new directories under `.claude/skills/`. Each skill requires a `SKILL.md` file with a frontmatter header:

```markdown
---
name: my-skill-name
description: Describe when this skill should be triggered and what topics it covers.
---

# Skill Content

Your documentation content here...
```

For more information, visit the [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code).
