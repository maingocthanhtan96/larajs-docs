---
outline: deep
title: "Agent Skill: LaraJS Permission Package - LaraJS Docs"
description: "AI skill context for the LaraJS Permission package: RBAC setup, role/permission seeders, HasRoles trait, and frontend role UI integration."
author: "LaraJS Team"
head:
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:title
      content: "Agent Skill: LaraJS Permission Package - LaraJS Docs"
  - - meta
    - property: og:url
      content: https://docs.larajs.com/agent-skills/packages-larajs-permission.html
  - - meta
    - property: og:image
      content: https://docs.larajs.com/larajs.png
  - - link
    - rel: canonical
      href: https://docs.larajs.com/agent-skills/packages-larajs-permission.html
---

````markdown
---
name: packages-larajs-permission
description: Use when the user asks about the LaraJS Permission package, role-based access control (RBAC), installing larajs/permission, adding HasRoles trait to User model, defining Super-Admin with Gate::before in AuthServiceProvider, setting up role/permission seeders (SetupUserRolePermissionSeeder), RoleEnum, PermissionEnum, syncing roles and permissions (syncRoles, givePermissionTo), or integrating the Role Permission UI in the Vue.js CMS frontend.
---

# LaraJS Permission

## Introduction

LaraJS integrates [Laravel Permission](https://spatie.be/docs/laravel-permission/v6/introduction) to handle role-based access control (RBAC) in your application. This package simplifies the management of user permissions, roles, and access to various resources.

## Getting Started

### Installation

By default, the `/api/v1/me` endpoint returns users with the `ADMIN` role. If you wish to implement more granular role and permission control, you can modify the response in `AuthResource.php`.

**Backend**

1. Install the **larajs-permission** backend package:

```bash
composer require larajs/permission:dev-main
```

2. Add `HasRoles` trait to the `User.php` model:

```php
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
  use HasRoles;
  // ...
}
```

3. Define a Super-Admin in the `AuthServiceProvider.php` file:

```php
<?php

namespace App\Providers;

use LaraJS\Permission\Enums\RoleEnum;

class AuthServiceProvider extends ServiceProvider
{
  public function boot(): void {
    Gate::before(function ($user, $ability) {
        return $user->hasRole(RoleEnum::ADMIN->name) ? true : null;
    });
  }
}
```

4. Set up a user, role, and permission seeder in `SetupUserRolePermissionSeeder.php`:

```php
<?php

namespace Database\Seeders;

use App\Enums\AuthEnum;
use App\Models\User;
use Illuminate\Database\Seeder;
use LaraJS\Permission\Enums\PermissionEnum;
use LaraJS\Permission\Enums\RoleEnum;
use LaraJS\Permission\Models\Permission;
use LaraJS\Permission\Models\Role;

class SetupUserRolePermissionSeeder extends Seeder
{
  public function run()
  {
      foreach (array_map(fn (RoleEnum $role) => $role->name, RoleEnum::cases()) as $role) {
          Role::findOrCreate($role);
      }

      foreach (
          array_map(fn (PermissionEnum $permission) => $permission->name, PermissionEnum::cases()) as $permission
      ) {
          Permission::findOrCreate($permission);
      }

      $admin = User::create([
        'name' => 'Admin',
        'email' => AuthEnum::USERNAME->value,
        'password' => AuthEnum::PASSWORD->value,
      ]);
      $manager = User::create([
          'name' => 'Manager',
          'email' => 'manager@larajs.com',
          'password' => AuthEnum::PASSWORD->value,
      ]);
      // Find roles
      $adminRole = Role::findByName(RoleEnum::ADMIN->name);
      $managerRole = Role::findByName(RoleEnum::MANAGER->name);
      // Sync Roles
      $admin->syncRoles($adminRole);
      $manager->syncRoles($managerRole);
      // Sync permissions
      $managerRole->givePermissionTo([
          array_map(function (PermissionEnum $permission) {
              return $permission->name;
          }, PermissionEnum::cases()),
      ]);
  }
}
```

**Frontend (Optional)**

To include the Role Permission UI in your CMS, import the component into the administrator module at `apps/cms/src/router/modules/administrator.ts`:

```ts
const administrator: RouterMapping = {
  path: "/administrators",
  name: "administrators",
  // ...
  children: [
    {
      path: "roles",
      name: "Role",
      component: () =>
        import(
          "@larajs/permission/src/views/role-permission/RolePermission.vue"
        ),
      meta: {
        title: "role_permission",
        icon: "role",
        permissions: [PermissionType.MANAGE],
      },
    },
    // ...
  ],
};
```
````
