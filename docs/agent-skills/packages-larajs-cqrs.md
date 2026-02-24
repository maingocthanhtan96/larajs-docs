---
outline: deep
title: "Agent Skill: LaraJS CQRS Package - LaraJS Docs"
description: "AI skill context for the LaraJS CQRS package: command buses, query buses, command/query handlers, middleware attributes, and bus configuration."
author: "LaraJS Team"
head:
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:title
      content: "Agent Skill: LaraJS CQRS Package - LaraJS Docs"
  - - meta
    - property: og:url
      content: https://docs.larajs.com/agent-skills/packages-larajs-cqrs.html
  - - meta
    - property: og:image
      content: https://docs.larajs.com/larajs.png
  - - link
    - rel: canonical
      href: https://docs.larajs.com/agent-skills/packages-larajs-cqrs.html
---

````markdown
---
name: packages-larajs-cqrs
description: Use when the user asks about the LaraJS CQRS package, Command Query Responsibility Segregation pattern in Laravel, installing larajs/cqrs, publishing the cqrs config, creating command handlers (Command, CommandHandler, CommandBusInterface), creating query handlers (Query, QueryHandler, QueryBusInterface), CQRS folder structure (Commands/, Queries/, Resources/), the #[Handler] attribute for handler resolution, #[Middleware] and #[ResetMiddleware] attributes for registering middleware on handlers, or configuring cqrs.php buses (command bus, query bus, SuffixHandlerResolver).
---

# LaraJS CQRS

## Introduction

This package allows the creation and management of multiple command buses, providing a flexible system for handling various commands in your Laravel application. It supports CQRS (Command Query Responsibility Segregation), which separates command and query handling to improve scalability, efficiency, and maintainability.

## Quick Start

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
│   ├── LoginUser
│   │   ├── LoginUserCommand.php
│   │   ├── LoginUserCommandHandler.php
│   │   └── LoginUserController.php
│   └── RegisterUserCommand
│       ├── RegisterUserCommand.php
│       ├── RegisterUserCommandHandler.php
│       └── RegisterUserController.php
├── Queries
│   └── FindUser
│       ├── FindUserController.php
│       ├── FindUserQuery.php
│       └── FindUserQueryHandler.php
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

**FindUserQueryHandler.php**

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

## Registering Middleware

Prepend middleware to an existing middleware stack:

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

Reset middleware and add new ones:

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

## Configuration (cqrs.php)

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
````
