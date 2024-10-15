---
outline: deep
---

## 🛠️ Introduction

The `LaraJS Core` package provides essential tools and utilities to streamline `LaraJS` application development. It offers middleware, API setup, user signature management, and a collection of useful helpers to make your development process more efficient.

## ⚡ Quick Start

**Install the package**

```bash
composer require larajs/core:dev-main
```

**Setup LaraJS**

Quickly set up `LaraJS` with the `larajs:setup` command:

```php
php artisan larajs:setup
```

## 📂 Base Controller

The `BaseLaraJSController` provides essential methods to handle API responses efficiently. This makes it easier to standardize responses across your application. Here are some key methods:

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

## 🔄 Middleware & API

### Language Middleware

The `LangMiddleware` retrieves the user's language preference from a `cookie` and applies it to the application. This middleware allows seamless switching between languages for users.

```php
<?php
namespace LaraJS\Core\Middleware;

class LangMiddleware
{
    public function handle($request, Closure $next)
    {
        $cookie = $request->cookie('language', config('app.locale'));
        App::setLocale($cookie);

        return $next($request);
    }
}
```

### Log Request & Response

The `LogRequestResponse` middleware allows logging of both incoming requests and outgoing responses. This is useful for debugging and keeping track of all API interactions.

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

## 🔄 Traits

### 👤 User Signature

Automatically track the `created_by` and `updated_by` fields on your models with the `UserSignature` trait, ensuring that user information is logged with every change to the database.

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

### 🚀 Action

The `Action` trait provides a streamlined way to create and execute action classes in your Laravel application.

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

## ⚙️ Helpers

The package provides several utility functions to simplify common tasks:

### storage_exist_file

Check file exist in storage.

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

Check file is base64.

```php
if (!function_exists('is_file_base64')) {
    function is_file_base64($base64): bool
    {
    }
}
```

### to_sql_binding

Print sql binding parameters.

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
