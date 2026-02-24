---
outline: deep
title: "Agent Skill: LaraJS Core Package - LaraJS Docs"
description: "AI skill context for the LaraJS Core package: base controller, middleware, traits, artisan commands, and helper functions."
author: "LaraJS Team"
head:
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:title
      content: "Agent Skill: LaraJS Core Package - LaraJS Docs"
  - - meta
    - property: og:url
      content: https://docs.larajs.com/agent-skills/packages-larajs-core.html
  - - meta
    - property: og:image
      content: https://docs.larajs.com/larajs.png
  - - link
    - rel: canonical
      href: https://docs.larajs.com/agent-skills/packages-larajs-core.html
---

````markdown
---
name: packages-larajs-core
description: Use when the user asks about the LaraJS Core package, including installation (composer require larajs/core), setup (php artisan larajs:setup), BaseLaraJSController API response methods (responseData, responseMessage, responseResource), middleware (LangMiddleware for language switching, LogRequestResponse for request/response logging), Traits (UserSignature for tracking created_by/updated_by, Action trait for action classes), artisan commands (larajs:make:action, larajs:make:controller, larajs:make:repository), or helper functions (storage_exist_file, storage_delete_file, save_file_base64, is_file_base64, to_sql_binding, mime2ext).
---

# LaraJS Core

## Introduction

The `LaraJS Core` package provides essential tools and utilities to streamline `LaraJS` application development. It offers middleware, API setup, user signature management, and a collection of useful helpers to make your development process more efficient.

## Quick Start

**Install the package**

[Github](https://github.com/maingocthanhtan96/larajs-core)

```bash
composer require larajs/core
```

**Setup LaraJS**

Quickly set up `LaraJS` with the `larajs:setup` command:

```php
php artisan larajs:setup
```

## Base Controller

The `BaseLaraJSController` provides essential methods to handle API responses efficiently.

```php
<?php

namespace LaraJS\Core\Controllers;

class BaseLaraJSController
{
    public function responseData(mixed $data, string $message = '', int $status = Response::HTTP_OK): JsonResponse
    {
        return response()->json(
            [
                'message' => $message,
                'data' => $data,
            ],
            $status,
        );
    }

    public function responseMessage($message, int $status = Response::HTTP_OK): JsonResponse {
        return response()->json(
            [
                'message' => $message,
            ],
            $status,
        );
    }

    public function responseResource(JsonResource $resource, string $message = '', int $status = Response::HTTP_OK): JsonResponse
    {
        if ($message) {
            $resource->additional(['message' => $message]);
        }

        return $resource->response()->setStatusCode($status);
    }
}
```

## Middleware & API

### Language Middleware

The `LangMiddleware` retrieves the user's language preference from a `cookie` and applies it to the application.

```php
<?php
namespace LaraJS\Core\Middleware;

class LangMiddleware
{
    public function handle($request, Closure $next)
    {
        $lang = $request->header('X-Accept-Language', config('app.locale'));

        App::setLocale($lang);

        return $next($request);
    }
}
```

### Log Request & Response

The `LogRequestResponse` middleware allows logging of both incoming requests and outgoing responses.

```php
<?php

namespace LaraJS\Core\Middleware;

class LogRequestResponse
{
    public function handle(Request $request, Closure $next): Response
    {
        return $next($request);
    }

    public function terminate($request, $response): void
    {
        \Log::info('Request', [
            'url' => $request->fullUrl(),
            'headers' => $request->headers->all(),
            'content' => $request->getContent(),
        ]);
        \Log::info('Response', [
            'headers' => $response->headers,
            'content' => $response->getContent(),
        ]);
    }
}
```

### API

LaraJS comes with a pre-configured API endpoint to set the user's language:

```php
Route::group([ 'prefix' => 'api/v1', 'middleware' => ['api']],
    function () {
        Route::get('/language/{language}', [LaraJSController::class, 'setLanguage']);
    },
);
```

## Traits

### User Signature

Automatically track the `created_by` and `updated_by` fields on your models with the `UserSignature` trait.

```php
<?php

namespace LaraJS\Core\Traits;

trait UserSignature
{
    protected static function bootUserSignature()
    {
       ...
    }
}
```

### Action

The `Action` trait provides a streamlined way to create and execute action classes.

```php
<?php

namespace LaraJS\Core\Traits;

use Illuminate\Support\Fluent;

trait Action
{
    // Instantiates the action class.
    public static function make(): static
    {
        return app(static::class);
    }

    // Executes the handle() method.
    public static function run(...$arguments): mixed
    {
    }

    // Runs validation if available.
    public static function runValidate(...$arguments): mixed
    {
    }

    // Runs the action if the condition is true.
    public static function runIf($boolean, ...$arguments): mixed
    {
    }

    // Runs the action if the condition is false.
    public static function runUnless($boolean, ...$arguments): mixed
    {
    }
}
```

Example of a simple action:

```php
<?php

use LaraJS\Core\Traits\Action;

class UpdateAvatarAction
{
    use Action;

    public function handle(string $oldAvatar, UploadedFile|string $newAvatar): ?string
    {
    }

    public function validate(string $oldAvatar, UploadedFile|string $newAvatar): self
    {
        \Validator::make(['avatar' => ['max:10240', 'image', 'mimes:jpeg,png,jpg']], $rules)->validate();

        return $this;
    }
}
```

## Commands

### Create CRUD actions

```php
php artisan larajs:make:action {name : The name of the action class} {--repository : Include a repository interface in the action class}
```

Tree:

```txt
app/Actions/Category
├── CreateCategoryAction.php
├── DeleteCategoryAction.php
├── FindAllCategoryAction.php
├── FindOneCategoryAction.php
└── UpdateCategoryAction.php
```

Example: `php artisan larajs:make:action Category --repository`

### Create CRUD controller

```php
php artisan larajs:make:controller Category
```

```txt
app/Http/Controller
└── CategoryController.php
```

### Create repositories

```php
php artisan larajs:make:repository Category
```

Tree:

```txt
app/Repositories/Category
├── CategoryReadRepository.php
├── CategoryReadRepositoryInterface.php
├── CategoryWriteRepository.php
└── CategoryWriteRepositoryInterface.php
```

## Helpers

### storage_exist_file

Check if a file exists in storage.

```php
<?php

if (!function_exists('storage_exist_file')) {
    function storage_exist_file($url): bool
    {
    }
}
```

### storage_delete_file

Delete file in storage.

```php
if (!function_exists('storage_delete_file')) {
    function storage_delete_file($url): void
    {
    }
}
```

### save_file_base64

Store base64 to file.

```php
if (!function_exists('save_file_base64')) {
    function save_file_base64($base64, $folder): string
    {
    }
}
```

### is_file_base64

Check if file is base64.

```php
if (!function_exists('is_file_base64')) {
    function is_file_base64($base64): bool
    {
    }
}
```

### to_sql_binding

Print SQL binding parameters.

```php
if (!function_exists('to_sql_binding')) {
    function to_sql_binding($query): string
    {
    }
}
```

### mime2ext

Convert mime type to extension.

```php
if (!function_exists('mime2ext')) {
    function mime2ext($mime): bool|string
    {
    }
}
```
````
