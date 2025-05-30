---
outline: deep
title: "LaraJS Generator - Powerful Laravel & Vue Code Generator"
description: "Speed up your development with LaraJS Generator - an advanced code generation tool that automates creation of models, controllers, migrations, and Vue components"
author: "LaraJS Team"
head:
  - - meta
    - name: keywords
      content: LaraJS Generator, Laravel code generator, Vue.js scaffolding, code generation tool, Laravel automation, CRUD generator, API generator, Laravel development productivity, Vue component generator
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:title
      content: LaraJS Generator - Powerful Laravel & Vue Code Generator
  - - meta
    - property: og:description
      content: Speed up your development with LaraJS Generator - an advanced code generation tool that automates creation of models, controllers, migrations, and Vue components
  - - meta
    - property: og:url
      content: https://docs.larajs.com/packages/larajs-generator.html
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
      content: LaraJS Generator - Powerful Laravel & Vue Code Generator
  - - meta
    - name: twitter:description
      content: Speed up your development with LaraJS Generator - an advanced code generation tool that automates Laravel & Vue.js code creation
  - - meta
    - name: twitter:image
      content: https://docs.larajs.com/larajs.png
  - - link
    - rel: canonical
      href: https://docs.larajs.com/packages/larajs-generator.html
---

# LaraJS Generator

## Introduction

The `LaraJS Generator` package is a powerful code generator that integrates Laravel and Vue.js. It allows developers to quickly scaffold and generate code for both backend and frontend, simplifying development and boosting productivity. This package automates the creation of models, controllers, migrations, views, and other components needed for Laravel applications with Vue.js integration.

## Installation

You can install the `larajs-generator` package via Composer:

```bash
composer require larajs/generator:dev-main
```

**Publish config (Optional)**

```bash
php artisan vendor:publish --tag=larajs-generator-config
```

Generator need path node in your local, So you need to add it to your `.env` file.

```bash
where node
output: /usr/local/bin/node
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

Copy path from `where node`

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

By default, the generator will create a migration file for `LaraJS`

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
