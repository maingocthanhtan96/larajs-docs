---
outline: deep
title: "LaraJS CQRS - Command Query Responsibility Segregation for Laravel"
description: "Implement CQRS architecture in Laravel applications with LaraJS CQRS package to separate command and query operations for improved scalability and maintainability"
author: "LaraJS Team"
head:
  - - meta
    - name: keywords
      content: LaraJS CQRS, Laravel command bus, Laravel query bus, Command Query Responsibility Segregation, Laravel architecture, command handlers, query handlers, Laravel middleware, Laravel scalability
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:title
      content: "LaraJS CQRS - Command Query Responsibility Segregation for Laravel"
  - - meta
    - property: og:description
      content: "Implement CQRS architecture in Laravel applications with LaraJS CQRS package to separate command and query operations"
  - - meta
    - property: og:url
      content: https://docs.larajs.com/packages/larajs-cqrs.html
  - - meta
    - property: og:image
      content: https://docs.larajs.com/larajs.png
  - - meta
    - property: og:type
      content: article
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: "LaraJS CQRS - Command Query Responsibility Segregation for Laravel"
  - - meta
    - name: twitter:description
      content: "Implement CQRS architecture in Laravel applications with LaraJS CQRS package to separate command and query operations"
  - - meta
    - name: twitter:image
      content: https://docs.larajs.com/larajs.png
  - - link
    - rel: canonical
      href: https://docs.larajs.com/packages/larajs-cqrs.html
---

# LaraJS CQRS

## Introduction

This package allows the creation and management of multiple command buses, providing a flexible system for handling various commands in your Laravel application. It supports CQRS (Command Query Responsibility Segregation), which separates command and query handling to improve scalability, efficiency, and maintainability.

## Quick start

**Install**

```bash
composer require larajs/cqrs:dev-main
```

**Publish config**

```php
php artisan vendor:publish --tag=larajs-cqrs-config
```

**Structures**

```txt
.
├── Commands
│   ├── LoginUser
│   │   ├── LoginUserCommand.php
│   │   ├── LoginUserCommandHandler.php
│   │   └── LoginUserController.php
│   └── RegisterUserCommand
│       ├── RegisterUserCommand.php
│       ├── RegisterUserCommandHandler.php
│       └── RegisterUserController.php
├── Queries
│   └── FindUser
│       ├── FindUserController.php
│       ├── FindUserQuery.php
│       └── FindUserQueryHandler.php
└── Resources
    └── UserResource.php
```

## Command

### Login User

**LoginUserController.php**

```php
<?php

use LaraJS\CQRS\Buses\CommandBusInterface;

class LoginUserController extends Controller
{
    public function __construct(private readonly CommandBusInterface $commandBus) {}

    public function __invoke(Request $request): UserResource
    {
        $loginUser = $this->commandBus->handle(new LoginUserCommand($request->get('email'), $request->get('password')));

        return UserResource::from($loginUser);
    }
}

```

**LoginUserCommand.php**

```php
<?php

#[Handler(LoginUserCommandHandler::class)]
readonly class LoginUserCommand implements Command
{
    public function __construct(public string $email, public string $password) {}
}
```

**LoginUserCommandHandler.php**

```php
<?php

readonly class LoginUserCommandHandler
{
    public function __construct(private UserReadRepositoryInterface $userRepository) {}

    public function handle(LoginUserCommand $loginUserCommand): array
    {
        $user = $this->userRepository->findEmail($loginUserCommand->email);

        if (!$user || !Hash::check($loginUserCommand->password, $user->getAttribute('password'))) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $user;
    }
}
```

### Register User

**RegisterUserController.php**

```php
<?php

use LaraJS\CQRS\Buses\CommandBusInterface;
use LaraJS\CQRS\IdResource;

class RegisterUserController extends Controller
{
    public function __construct(private readonly CommandBusInterface $commandBus) {}

    public function __invoke(Request $request): IdResource
    {
        $loginUser = $this->commandBus->handle(new RegisterUserCommand($request->get('email'), $request->get('password'), $request->get('role')));

        return IdResource::from($loginUser); // return only ID
    }
}

```

**RegisterUserCommand.php**

```php
<?php

use LaraJS\CQRS\Attributes\Handler;
use LaraJS\CQRS\Contracts\Command;

// By default will auto add suffix Handler
readonly class RegisterUserCommand implements Command
{
    public function __construct(public string $email, public string $password, public string $role) {}
}
```

**RegisterUserCommandHandler.php**

```php
<?php

readonly class RegisterUserCommandHandler
{
    public function __construct(private UserWriteRepositoryInterface $userRepository) {}

    public function handle(LoginUserCommand $loginUserCommand): array
    {
        $user = $this->userRepository->create($loginUserCommand->email, $loginUserCommand->password, $loginUserCommand->role);

        return $user;
    }
}
```

## Query

### Find User

**FindUserController.php**

```php
<?php

use LaraJS\CQRS\Buses\QueryBusInterface;

class FindUserController extends Controller
{
    public function __construct(private readonly QueryBusInterface $queryBus)
    {
    }

    public function __invoke(int $id): UserResource
    {
        $user = $this->queryBus->handle(new FindUserQuery($id));

        return UserResource::from($user);
    }
}

```

**FindUserQuery.php**

```php
<?php

use LaraJS\CQRS\Attributes\Handler;
use LaraJS\CQRS\Contracts\Command;

#[Handler(FindUserQueryHandler::class)]
readonly class FindUserQuery implements Command
{
    public function __construct(public int $id)
    {
    }
}
```

**FindUserQuery.php**

```php
<?php

class FindUserQueryHandler
{
    public function __construct(private UserReadRepositoryInterface $userRepository) {}

    public function handle(FindUserQuery $query): User
    {
        return $this->userRepository->find($query->id);
    }
}
```

## Registering middleware

```php
// This will prepend ValidationMiddleware to the existing middleware
#[Middleware([ValidationMiddleware::class], true)]
class RegisterUserCommandHandler
{
    public function handle(RegisterUserCommand $command): int
    {
        return $user->id;
    }
}
```

```php
#[ResetMiddleware]
#[Middleware([ValidationMiddleware::class])]
class RegisterUserCommandHandler
{
    public function handle(RegisterUserCommand $command): int
    {
        return $user->id;
    }
}
```

**cqrs.php**

```php
    'buses' => [
        'command' => [
            'class' => CommandBus::class,
            'interface' => CommandBusInterface::class,
            'alias' => 'bus.command',
            'middleware' => [
                // default middleware
            ],
            'handler_resolver' => SuffixHandlerResolver::class,
            'handler_method' => 'handle',
        ],
        'query' => [
            'class' => QueryBus::class,
            'interface' => QueryBusInterface::class,
            'alias' => 'bus.query',
            'middleware' => [
                // default middleware
            ],
            'handler_resolver' => SuffixHandlerResolver::class,
            'handler_method' => 'handle',
        ],
    ],
```
