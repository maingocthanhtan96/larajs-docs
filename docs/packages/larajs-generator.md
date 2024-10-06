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
