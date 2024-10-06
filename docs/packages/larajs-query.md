## Introduction

This package allows you to filter, sort, and include Eloquent relationships dynamically based on incoming requests. It simplifies the process of querying and retrieving resources by providing a flexible interface for client-side queries.

## Quick start

```php
<?php

use App\Models\Category;
use LaraJS\Query\LaraJSQuery;

class CategoryController
{
    use LaraJSQuery;

    public function index(Request $request)
    {
        return $this->applyLaraJSQuery(Category::query(), $request)->get();
    }
}
```

## Filtering

Resources can be filtered by attributes using the `filter` query string parameter. By default, all attributes are filterable.

```http
?filter=expression
```

| **Operation**                   | **Function**             | **Example**                                                       |
| ------------------------------- | ------------------------ | ----------------------------------------------------------------- |
| Equality                        | `equals`                 | `?filter=equals(name,'Smith')`                                    |
| Equality relationship           | `equalsRelation`         | `?filter=equalsRelation(articles, name,'Smith')`                  |
| Less than                       | `lessThan`               | `?filter=lessThan(age,'25')`                                      |
| Less than relationship          | `lessThanRelation`       | `?filter=lessThanRelation(articles,age,'25')`                     |
| Less than or equal              | `lessOrEqual`            | `?filter=lessOrEqual(lastModified,'2001-01-01')`                  |
| Less than or equal relationship | `lessOrEqualRelation`    | `?filter=lessOrEqualRelation(articles,lastModified,'2001-01-01')` |
| Greater than                    | `greaterThan`            | `?filter=greaterThan(duration,'6:12:14')`                         |
| Greater than relationship       | `greaterThanRelation`    | `?filter=greaterThanRelation(articles,duration,'6:12:14')`        |
| Greater or equal                | `greaterOrEqual`         | `?filter=greaterOrEqual(percentage,'33.33')`                      |
| Greater or equal relationship   | `greaterOrEqualRelation` | `?filter=greaterOrEqualRelation(articles,percentage,'33.33')`     |
| Contains                        | `contains`               | `?filter=contains(description,'cooking')`                         |
| Contains relationship           | `containsRelation`       | `?filter=containsRelation(articles,description,'cooking')`        |
| Starts with                     | `startsWith`             | `?filter=startsWith(description,'The')`                           |
| Starts with relationship        | `startsWithRelation`     | `?filter=startsWithRelation(articles,description,'The')`          |
| Ends with                       | `endsWith`               | `?filter=endsWith(description,'End')`                             |
| Ends with Relationship          | `endsWithRelation`       | `?filter=endsWithRelation(articles,description,'End')`            |
| Equals one value from set       | `any`                    | `?filter=any(chapter,'Intro','Summary','Conclusion')`             |
| Negation                        | `not`                    | `?filter=not(equals(lastName,null))`                              |
| Existence of a relationship     | `has`                    | `?filter=has(articles,'2')`                                       |
| Conditional logical OR          | `or`                     | `?filter=or(has(orders,'1'),has(invoices,'1'))`                   |
| Conditional logical AND         | `and`                    | `?filter=and(has(orders,'1'),has(invoices,'1'))`                  |

## Sorting

Resources can be sorted by attributes using the `sort` query string parameter. By default, all attributes are sortable.

| **Operation**       | **Example**                       |
| ------------------- | --------------------------------- |
| Ascending           | `?sort=id`                        |
| Descending          | `?sort=-id`                       |
| Multiple attributes | `?sort=id,created_at,-updated_at` |
| Relationships       | `?sort=roles.name`                |
| Relationships Count | `?sort=roles_count`               |

**Sort Relationships**

We leverage the [BelongsToThrough](https://github.com/staudenmeir/belongs-to-through) package to manage relationships that involve unlimited intermediate models.

`Comment` → belongs to → `Post` → belongs to → `User` → belongs to → `Country`

Example:

You can sort `Comment` records based on the `name` attribute of the related `Country` model by using the following query:

```http
{url}/comments?sort=country.name
```

## Searching

Resources can be searched by attributes using the `search` query string parameter. By default, the search will apply a `whereLike(attribute, '%value%')` query, performing a partial match on the specified value.

| **Operation**       | **Example**                                         |
| ------------------- | --------------------------------------------------- |
| An Attribute        | `?search[column]=name&search[value]=larajs`         |
| Multiple attributes | `?search[column]=name,content&search[value]=larajs` |
| Relationships       | `?search[column]=roles.name&search[value]=admin`    |

## Including Relationships

Resources can include related models using the `include` query string parameter. By default, all attributes, including model relationships, can be included.

| **Operation**                                  | **Example**                                                                     |
| ---------------------------------------------- | ------------------------------------------------------------------------------- |
| An Attribute                                   | `?include[]=roles`                                                              |
| Multiple Attributes                            | `?include[]=roles&include[]=roles.permissions`                                  |
| Aggregates `count\|exists\|sum\|min\|max\|avg` | `?include[]=roles\|count&include[]=roles\|exists&include[]=permissions\|exists` |

## Selecting Fields

Resources can be selected by attributes using the `select` query string parameter. By default, all attributes are selectable.

| **Operation** | **Example**                   |
| ------------- | ----------------------------- |
| Attributes    | `?select=id,name,description` |

## Dating

Resources can be filtered by date attributes using the `date` query string parameter. By default, the search will automatically apply a `whereBetween(attribute, [startOfDate, endOfDate])` query, allowing you to filter resources within a specific date range.

| **Operation** | **Example**                                                                    |
| ------------- | ------------------------------------------------------------------------------ |
| Attributes    | `?date[column]=updated_at&date[value][0]=2024-10-01&date[value][1]=2024-10-15` |

## Pagination

Resources can be paginated by attributes using the `pagination` query string parameter. By default, the pagination type is `default`.

| **Operation** | **Example**                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| `default`     | `?pagination[limit]=25&pagination[page]=1`                                                    |
| `simple`      | `?pagination[type]=simple&pagination[limit]=25&pagination[page]=1`                            |
| `cursor`      | `?pagination[type]=cursor&pagination[cursor]=eyJpZCI6MTUsIl9wb2ludHNUb05leHRJdGVtcyI6dHJ1ZX0` |

## Allow Query

By default, all fields are available for querying. However, you can configure the system to exclude certain fields as needed.

```php
<?php

class Category extends Model
{
    public function allowQueryParsers(): array
    {
        // Default configuration
        return [
            'field' => [], // select
            'include' => [],
            'sort' => [],
            'filter' => [],
            'search' => [],
            'date' => [],
        ];
        // Custom configuration
        return [
            'field' => ['id', 'name', 'email'], // select
            'include' => ['roles'],
            'sort' => ['id', 'updated_at'],
            'filter' => ['name', 'age', 'lastModified'],
            'search' => ['id', 'name', 'roles'],
            'date' => ['updated_at'],
        ];
    }
}
```

## Repository

```txt
.
├── BaseLaraJSRepository.php
├── ReadRepository.php
├── ReadRepositoryInterface.php
├── WriteRepository.php
└── WriteRepositoryInterface.php
```

**BaseLaraJSRepository**

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

    public function findAll(Request $request): LengthAwarePaginator|CursorPaginator|Paginator|Collection
    {
        $queryBuilder = $this->applyLaraJSQuery($this->query(), $request);
        // The pagination.page === -1 LaraJSQuery will get all records
        if ($request->input('pagination.page') === '-1') {
            $limit = min($this->maxLimit, $request->input('pagination.limit'));

            return $queryBuilder->take($limit)->get();
        }

        return match ($request->input('pagination.type')) {
            'simple' => ...,
            'cursor' => ...,
            default => ...,
        };
    }

    public function find(int $id, ?Request $request = null)
    {
        ...
    }

    public function findOrFail(int $id, ?Request $request = null)
    {
        ...
    }

    public function query(): Builder
    {
        ...
    }
}

```

### WriteRepository

```php
<?php

namespace LaraJS\Query\Repositories;

class WriteRepository implements WriteRepositoryInterface
{
    public function __construct(protected readonly Model $model) {}

    public function create(array $data)
    {
        ...
    }

    public function update(int $id, array $data)
    {
        ...
    }

    public function delete(int $id): bool
    {
        ...
    }
}

```
