---
outline: deep
title: "Agent Skill: LaraJS Generator Package - LaraJS Docs"
description: "AI skill context for the LaraJS Generator package: installation, Node.js path configuration, publishing config/migrations/stubs."
author: "LaraJS Team"
head:
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:title
      content: "Agent Skill: LaraJS Generator Package - LaraJS Docs"
  - - meta
    - property: og:url
      content: https://docs.larajs.com/agent-skills/packages-larajs-generator.html
  - - meta
    - property: og:image
      content: https://docs.larajs.com/larajs.png
  - - link
    - rel: canonical
      href: https://docs.larajs.com/agent-skills/packages-larajs-generator.html
---

````markdown
---
name: packages-larajs-generator
description: Use when the user asks about the LaraJS Generator package installation, configuring the node path (GENERATOR_NODE_PATH env variable), publishing generator config (larajs-generator-config), publishing generator migrations (larajs-generator-migration), publishing generator stubs (larajs-generator-stubs), or the generators database migration schema (generators table with field, model, table, files columns).
---

# LaraJS Generator

## Introduction

The `LaraJS Generator` package is a powerful code generator that integrates Laravel and Vue.js. It allows developers to quickly scaffold and generate code for both backend and frontend, simplifying development and boosting productivity. This package automates the creation of models, controllers, migrations, views, and other components needed for Laravel applications with Vue.js integration.

## Installation

Install the `larajs-generator` package via Composer:

```bash
composer require larajs/generator:dev-main
```

**Publish config (Optional)**

```bash
php artisan vendor:publish --tag=larajs-generator-config
```

The generator needs the path to Node.js on your local machine. Add it to your `.env` file:

```bash
where node
# output: /usr/local/bin/node
```

**generator.php**

```php
<?php

return [
    'node_path' => env('GENERATOR_NODE_PATH', 'node'),
    ...
];
```

**.env**

Copy the path from `where node`:

```bash
GENERATOR_NODE_PATH=/usr/local/bin/node
...
```

**Publish migration (Optional)**

```bash
php artisan vendor:publish --tag=larajs-generator-migration
```

**Publish stubs (Optional)**

```bash
php artisan vendor:publish --tag=larajs-generator-stubs
```

## Migration

By default, the generator will create a migration file for `LaraJS`:

```php
<?php

return new class extends Migration
{
    public function up()
    {
        Schema::create('generators', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('field')->nullable();
            $table->text('model')->nullable();
            $table->string('table');
            $table->json('files')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('generators');
    }
};
```
````
