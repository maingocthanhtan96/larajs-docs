---
outline: deep
title: "Agent Skill: LaraJS Query Package - LaraJS Docs"
description: "AI skill context for LaraJS Query: dynamic Eloquent filtering, sorting, searching, relationships, pagination, and the allow query pattern."
author: "LaraJS Team"
head:
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:title
      content: "Agent Skill: LaraJS Query Package - LaraJS Docs"
  - - meta
    - property: og:url
      content: https://docs.larajs.com/agent-skills/packages-larajs-query.html
  - - meta
    - property: og:image
      content: https://docs.larajs.com/larajs.png
  - - link
    - rel: canonical
      href: https://docs.larajs.com/agent-skills/packages-larajs-query.html
---

````markdown
---
name: packages-larajs-query
description: Use when the user asks about LaraJS Query package, dynamic Eloquent query building, API filtering (equals, lessThan, greaterThan, contains, startsWith, endsWith, any, between, relation, not, has, or, and), sorting (ascending, descending, multi-attribute, relationship sorting with BelongsToThrough), searching (whereLike partial match), including relationships with aggregates (count, exists, sum, min, max, avg), field selection, date filtering, pagination (default, simple, cursor), allow query configuration (QueryParserAllowDTO), or the repository pattern (ReadRepository, WriteRepository, BaseLaraJSRepository).
---

# LaraJS Query

## Introduction

LaraJS Query is a powerful package that simplifies querying Eloquent models by dynamically filtering, sorting, and including relationships based on incoming requests. It provides a flexible interface for client-side queries and streamlines the process of retrieving resources in your Laravel applications.

## Quick Start

```php
<?php

use App\Models\Category;
use LaraJS\Query\LaraJSQuery;
use LaraJS\Query\DTO\QueryParserAllowDTO;

class CategoryController
{
    use LaraJSQuery;

    public function index(Request $request)
    {
        return $this->applyLaraJSQuery(Category::query(), QueryParserRequestDTO::fromArray($request->query()), QueryParserAllowDTO::fromArray([]))->get();
    }
}
```

## Filtering

Easily filter resources by attributes using the `filter` query string parameter:

```http
?filter=expression
```

| **Operation**                          | **Function**             | **Example**                                                               |
| -------------------------------------- | ------------------------ | ------------------------------------------------------------------------- |
| Equality                               | `equals`                 | `?filter=equals(name,'Smith')`                                            |
| Equality relationship                  | `equalsRelation`         | `?filter=equalsRelation(articles, name,'Smith')`                          |
| Less than                              | `lessThan`               | `?filter=lessThan(age,'25')`                                              |
| Less than relationship                 | `lessThanRelation`       | `?filter=lessThanRelation(articles,age,'25')`                             |
| Less than or equal                     | `lessOrEqual`            | `?filter=lessOrEqual(lastModified,'2001-01-01')`                          |
| Less than or equal relationship        | `lessOrEqualRelation`    | `?filter=lessOrEqualRelation(articles,lastModified,'2001-01-01')`         |
| Greater than                           | `greaterThan`            | `?filter=greaterThan(duration,'6:12:14')`                                 |
| Greater than relationship              | `greaterThanRelation`    | `?filter=greaterThanRelation(articles,duration,'6:12:14')`                |
| Greater or equal                       | `greaterOrEqual`         | `?filter=greaterOrEqual(percentage,'33.33')`                              |
| Greater or equal relationship          | `greaterOrEqualRelation` | `?filter=greaterOrEqualRelation(articles,percentage,'33.33')`             |
| Contains                               | `contains`               | `?filter=contains(description,'cooking')`                                 |
| Contains relationship                  | `containsRelation`       | `?filter=containsRelation(articles,description,'cooking')`                |
| Starts with                            | `startsWith`             | `?filter=startsWith(description,'The')`                                   |
| Starts with relationship               | `startsWithRelation`     | `?filter=startsWithRelation(articles,description,'The')`                  |
| Ends with                              | `endsWith`               | `?filter=endsWith(description,'End')`                                     |
| Ends with Relationship                 | `endsWithRelation`       | `?filter=endsWithRelation(articles,description,'End')`                    |
| Equals one value from set              | `any`                    | `?filter=any(chapter,'Intro','Summary','Conclusion')`                     |
| Equals relationship one value from set | `anyRelation`            | `?filter=anyRelation(chapter,name,'Intro','Summary')`                     |
| Filter between                         | `between`                | `?filter=between(updated_at,'2025-01-01 00:00:00','2025-01-15 23:59:59')` |
| Filter between relationship            | `betweenRelation`        | `?filter=betweenRelation(articles,price,'10','20')`                       |
| Filter relation                        | `relation`               | `?filter=relation(users,and(equals(name,'Smith'),greaterThan(age,'25')))` |
| Negation                               | `not`                    | `?filter=not(equals(lastName,null))`                                      |
| Existence of a relationship            | `has`                    | `?filter=has(articles,'2')`                                               |
| Conditional logical OR                 | `or`                     | `?filter=or(has(orders,'1'),has(invoices,'1'))`                           |
| Conditional logical AND                | `and`                    | `?filter=and(has(orders,'1'),has(invoices,'1'))`                          |

## Sorting

| **Operation**       | **Example**                       |
| ------------------- | --------------------------------- |
| Ascending           | `?sort=id`                        |
| Descending          | `?sort=-id`                       |
| Multiple attributes | `?sort=id,created_at,-updated_at` |
| Relationships       | `?sort=roles.name`                |
| Relationships Count | `?sort=roles_count`               |

**Sort Relationships**

LaraJS leverages [BelongsToThrough](https://github.com/staudenmeir/belongs-to-through) to manage complex relationships.

Example: Sort `Comment` records based on the `name` attribute of the related `Country` model:

```http
{url}/comments?sort=country.name
```

## Searching

Perform searches using the `search` query string parameter. Applies a `whereLike(attribute, '%value%')` query:

| **Operation**       | **Example**                                         |
| ------------------- | --------------------------------------------------- |
| An Attribute        | `?search[column]=name&search[value]=larajs`         |
| Multiple attributes | `?search[column]=name,content&search[value]=larajs` |
| Relationships       | `?search[column]=roles.name&search[value]=admin`    |

## Including Relationships

| **Operation**                                  | **Example**                                                                                          |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| An Attribute                                   | `?include[]=roles`                                                                                   |
| Multiple Attributes                            | `?include[]=roles&include[]=roles.permissions`                                                       |
| Nested Relationship                            | `?include[]=roles:id,name&include[]=roles.permissions&include[]=roles.permissions.users:id,username` |
| Aggregates `count\|exists\|sum\|min\|max\|avg` | `?include[]=roles\|count&include[]=roles\|exists&include[]=permissions\|exists`                      |
| Filter relationship                            | `?include[]=comments\|and(equals(user_id, '1'),equals(status, '1'))`                                 |

## Selecting Fields

| **Operation** | **Example**                   |
| ------------- | ----------------------------- |
| Attributes    | `?select=id,name,description` |

## Date Filtering

The `date` parameter automatically calculates the `startOfDay` and `endOfDay` values. Both methods apply a `whereBetween(attribute, [startDate, endDate])` query.

| **Operation**        | **Example**                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------- |
| Attribute (option 1) | `?date[column]=updated_at&date[value][0]=2024-10-01&date[value][1]=2024-10-15`              |
| Attribute (option 2) | `?date[column]=updated_at&date[value][start]=2024-10-01&date[value][end]=2024-10-15`        |
| Attribute (option 3) | `?filter=between(updated_at,'2025-01-01 00:00:00','2025-01-15 23:59:59')`                   |
| Attribute (option 4) | `?filter=and(greaterOrEqual(start_date, '2025-01-01'),lessOrEqual(end_date, '2025-01-15'))` |

## Pagination

| **Operation** | **Example**                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| `default`     | `?pagination[limit]=25&pagination[page]=1`                                                    |
| `simple`      | `?pagination[type]=simple&pagination[limit]=25&pagination[page]=1`                            |
| `cursor`      | `?pagination[type]=cursor&pagination[cursor]=eyJpZCI6MTUsIl9wb2ludHNUb05leHRJdGVtcyI6dHJ1ZX0` |

## Allow Query (Recommended)

Use allow query to control which fields are available for querying. By default, all fields in a model are available.

```php
<?php

use App\Models\Category;
use LaraJS\Query\LaraJSQuery;

class CategoryController
{
    use LaraJSQuery;

    public function index(Request $request)
    {
        return $this->applyLaraJSQuery(Category::query(), QueryParserRequestDTO::fromArray($request->query()), QueryParserAllowDTO::fromArray([
            'field' => ['id', 'name', 'description'],
            'include' => ['roles'],
            'sort' => ['id', 'updated_at'],
            'filter' => ['name', 'age'],
            'search' => ['id', 'name', 'roles'],
            'date' => ['updated_at'],
        ]))->get();
    }
}
```

## Repository Structure

```txt
.
├── BaseLaraJSRepository.php
├── ReadRepository.php
├── ReadRepositoryInterface.php
├── WriteRepository.php
└── WriteRepositoryInterface.php
```

### BaseLaraJSRepository

```php
<?php

namespace LaraJS\Query\Repositories;

abstract class BaseLaraJSRepository implements ReadRepositoryInterface, WriteRepositoryInterface
{
}
```

### ReadRepository

```php
<?php

namespace LaraJS\Query\Repositories;

use LaraJS\Query\LaraJSQuery;

class ReadRepository implements ReadRepositoryInterface
{
    use LaraJSQuery;

    public function __construct(protected readonly Model $model, protected readonly int $limit, protected readonly int $maxLimit) {}

    public function findAll(QueryParserAllowDTO $allow): LengthAwarePaginator|CursorPaginator|Paginator|Collection;

    public function find(int $id, QueryParserAllowDTO $allow);

    public function findOrFail(int $id, QueryParserAllowDTO $allow);

    public function query(): Builder;

    public function laraJSQuery(QueryParserAllowDTO $allow, bool $clearFilter = false): Builder;
}
```

### WriteRepository

```php
<?php

namespace LaraJS\Query\Repositories;

class WriteRepository implements WriteRepositoryInterface
{
    public function __construct(protected readonly Model $model) {}

    public function create(array $data);

    public function update(int $id, array $data);

    public function delete(int $id): bool;
}
```
````
