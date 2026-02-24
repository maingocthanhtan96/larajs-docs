---
name: generators-getting-started
description: Use when the user asks about LaraJS generator overview, model configuration, field types, database types, relationships, or DBML import. Covers how to configure models, fields, options (timestamps, soft deletes, user signature, API only, API docs, migrations, test cases), field options (unique, index, comment), all supported database types with their UI components, relationship setup (hasOne, hasMany, belongsToMany, many-to-many), and DBML import with type mapping.
---

# Generator Overview

The **Generator** allows users to define and configure models along with their fields for a Laravel application. Users can customize the model name, fields, relationships, and other attributes that will be used to generate the backend API, database, and frontend CMS.

## Model Configuration

| **Field**            | **Description**               | **Default** | **Example**        | **Validation** |
| -------------------- | ----------------------------- | ----------- | ------------------ | -------------- |
| `Model Name`         | Defines the name of the model |             | `Category`         | Required       |
| `Model Name Display` | Display name in menu bar      |             | `Category Sidebar` | Required       |

## Options

| **Field**        | **Description**                                                                  | **Default** | **Example** | **Validation** |
| ---------------- | -------------------------------------------------------------------------------- | ----------- | ----------- | -------------- |
| `Timestamps`     | Automatically adds `created_at` and `updated_at` columns to the table.           | Checked     |             | Optional       |
| `Soft Deletes`   | Adds support for soft deletion (adds a `deleted_at` column).                     | Checked     |             | Optional       |
| `User Signature` | Adds `created_by` and `updated_by` columns to track who created/updated records. | UnChecked   |             | Optional       |
| `API Only`       | Only generate the API.                                                           | UnChecked   |             | Optional       |
| `API Docs`       | Generate docs for the API. Requires the Scribe package.                          | UnChecked   |             | Optional       |
| `Ignore Migrate` | Skips running database migrations.                                               | UnChecked   |             | Optional       |
| `Only Migrate`   | Only generate migration and Model.                                               | UnChecked   |             | Optional       |
| `Test Cases`     | Generates test cases for the model and related services.                         | Checked     |             | Optional       |

### If you enable API Docs

Install the Scribe package first:

```bash
composer require knuckleswtf/scribe
```

## Fields Configuration

| **Field**                 | **Description**                                                                                                    | **Default**    | **Example**    | **Validation** |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------- | -------------- | -------------- |
| `Field Name`              | The name of the field in the database.                                                                             |                | `name`         | Required       |
| `Field Name Display`      | Display name for the field in the user interface.                                                                  |                | `Name`         | Required       |
| `Field Option`            | Setting unique, indexing, and adding comments.                                                                     |                |                | Optional       |
| `Database Type`           | The type of the field in the database (e.g., `Increments`, `VARCHAR`, `LONGTEXT`).                                 | `VARCHAR(255)` | `VARCHAR(255)` | Required       |
| `Default Value`           | The default value for this field if none is provided.                                                              | `NULL`         |                | Required       |
| `Search/Sort/Show/Layout` | On/Off `search`, `sort`, and `show` in the table. The column `layout` can be adjusted to a value between 1 and 24. |                |                | Optional       |
| `Delete`                  | Option to delete the field from the configuration.                                                                 |                |                |                |

### Field Option

| **Option** | **Description**                                                                                   | **Example**                                         |
| ---------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `Unique`   | Ensures the field value is unique across all records in the database.                             | Enabled for `email` field to ensure unique emails.  |
| `Index`    | Creates an index on the field to optimize database query performance.                             | Enabled for `status` field to improve search speed. |
| `Comment`  | Adds a comment for the field in the database, useful for documentation or clarification purposes. | Indicates if the category is active or inactive.    |

### Database Types

#### Database

| **Database Type**       | **Display Name**   | **Search** | **Sort** | **Show** |
| ----------------------- | ------------------ | :--------: | :------: | :------: |
| `increments`            | Increments         |     No     |    Yes   |    Yes   |
| `integer`               | INTEGER            |     Yes    |    Yes   |    Yes   |
| `unsignedInteger`       | UNSIGNED INTEGER   |     Yes    |    Yes   |    Yes   |
| `tinyInteger`           | TINYINT            |     Yes    |    Yes   |    Yes   |
| `unsignedTinyInteger`   | UNSIGNED TINYINT   |     Yes    |    Yes   |    Yes   |
| `smallInteger`          | SMALLINT           |     Yes    |    Yes   |    Yes   |
| `unsignedSmallInteger`  | UNSIGNED SMALLINT  |     Yes    |    Yes   |    Yes   |
| `mediumInteger`         | MEDIUMINT          |     Yes    |    Yes   |    Yes   |
| `unsignedMediumInteger` | UNSIGNED MEDIUMINT |     Yes    |    Yes   |    Yes   |
| `bigInteger`            | BIGINT             |     Yes    |    Yes   |    Yes   |
| `unsignedBigInteger`    | UNSIGNED BIGINT    |     Yes    |    Yes   |    Yes   |
| `float`                 | FLOAT              |     Yes    |    Yes   |    Yes   |
| `double`                | DOUBLE             |     Yes    |    Yes   |    Yes   |
| `decimal`               | DECIMAL            |     Yes    |    Yes   |    Yes   |
| `boolean`               | BOOLEAN            |     Yes    |    Yes   |    Yes   |
| `date`                  | DATE               |     Yes    |    Yes   |    Yes   |
| `dateTime`              | DATETIME           |     Yes    |    Yes   |    Yes   |
| `timestamp`             | TIMESTAMP          |     Yes    |    Yes   |    Yes   |
| `time`                  | TIME               |     Yes    |    Yes   |    Yes   |
| `year`                  | YEAR               |     Yes    |    Yes   |    Yes   |
| `char`                  | CHAR               |     Yes    |    Yes   |    Yes   |
| `string`                | VARCHAR            |     Yes    |    Yes   |    Yes   |
| `tinyText`              | TINYTEXT           |     Yes    |    Yes   |    Yes   |
| `mediumText`            | MEDIUMTEXT         |     Yes    |    Yes   |    Yes   |
| `text`                  | TEXT               |     Yes    |    Yes   |    Yes   |
| `longText`              | LONGTEXT           |     Yes    |    Yes   |    Yes   |
| `enum`                  | ENUM               |     Yes    |    Yes   |    Yes   |
| `json`                  | JSON               |     No     |    No    |    Yes   |
| `jsonb`                 | JSONB              |     No     |    No    |    Yes   |
| `hasOne`                | hasOne             |     Yes    |    Yes   |    Yes   |
| `hasMany`               | hasMany            |     Yes    |    Yes   |    Yes   |

## Relationships

There are two ways to create relationships:

Example: `Post` → belongs to → `Category` / `Category` → has many → `Post`

### Generate Form

This way just only for `hasMany` or `belongsTo`.

### Relationship Form

This way for all relationships such as: `hasOne`, `hasMany`, `belongsToMany`.

**Many To Many**

Many to many will generate a pivot table. By default, the pivot table is `CategoryPost` (`{Model1}` + `{Model2}`).

```php
<?php

return new class extends Migration
{
    public function up()
    {
        Schema::create('category_post', function (Blueprint $table) {
            $table->foreignId('category_id')->index();
            $table->foreignId('post_id')->index();
            $table->primary(['category_id', 'post_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('category_post');
    }
};
```

## DBML Import (beta)

LaraJS provides a DBML import interface to paste DBML content and generate model fields automatically.

### Complete Type Mapping Reference

| **DBML Type**                             | **LaraJS Database Type** |
| ----------------------------------------- | ------------------------ |
| `int`, `integer`                          | `INTEGER`                |
| `tinyint`                                 | `TINYINT`                |
| `smallint`                                | `SMALLINT`               |
| `mediumint`                               | `MEDIUMINT`              |
| `bigint`                                  | `BIGINT`                 |
| `float`                                   | `FLOAT`                  |
| `double`                                  | `DOUBLE`                 |
| `decimal`                                 | `DECIMAL`                |
| `boolean`, `bool`                         | `BOOLEAN`                |
| `date`                                    | `DATE`                   |
| `datetime`                                | `DATETIME`               |
| `timestamp`                               | `TIMESTAMP`              |
| `time`                                    | `TIME`                   |
| `year`                                    | `YEAR`                   |
| `char`                                    | `CHAR`                   |
| `varchar`, `string`                       | `VARCHAR`                |
| `text`                                    | `TEXT`                   |
| `tinytext`                                | `TINYTEXT`               |
| `mediumtext`                              | `MEDIUMTEXT`             |
| `longtext`                                | `LONGTEXT`               |
| `json`                                    | `JSON`                   |
| `jsonb`                                   | `JSONB`                  |
| `enum`                                    | `ENUM`                   |
| `unsigned int`, `unsignedint`             | `UNSIGNED INTEGER`       |
| `unsigned integer`, `unsignedinteger`     | `UNSIGNED INTEGER`       |
| `unsigned tinyint`, `unsignedtinyint`     | `UNSIGNED TINYINT`       |
| `unsigned smallint`, `unsignedsmallint`   | `UNSIGNED SMALLINT`      |
| `unsigned mediumint`, `unsignedmediumint` | `UNSIGNED MEDIUMINT`     |
| `unsigned bigint` , `unsignedbigint`      | `UNSIGNED BIGINT`        |

**Example DBML Syntax:**

```txt
Table users {
  id integer [pk]
  user_info_id bigint [ref: - user_infos.id]
  username varchar(50) [unique, not null]
  email varchar [unique, not null]
  password varchar [not null]
  profile_image varchar
  bio text
  role enum('admin', 'user', 'editor') [default: 'user']
  is_active boolean [default: true]
  created_at timestamp
  updated_at timestamp
}
```

### Field Attributes and Their Mappings

| **DBML Attribute**    | **LaraJS Equivalent**                            |
| --------------------- | ------------------------------------------------ |
| `pk`                  | Identifies the primary key field                 |
| `not null`            | Sets default value to "None" instead of "NULL"   |
| `unique`              | Enables the "Unique" field option                |
| `index`               | Enables the "Index" field option                 |
| `note: 'text'`        | Sets a comment in the field options              |
| `comment: 'text'`     | Sets a comment in the field options              |
| `default: value`      | Sets default value to "As define" with the value |
| `ref: > table.column` | Creates a "hasMany" relationship to the table    |
| `ref: < table.column` | Creates a "hasOne" relationship with the table   |
| `increment`           | Maps to autoincrement field type                 |

### Relationship Detection

- `[ref: > users.id]` detects a hasMany relationship
- `[ref: < comments.post_id]` detects a hasOne relationship

### Best Practices for DBML Import

1. **Field Naming**: Use snake_case for field names in DBML
2. **Relationship Definition**: Explicitly define relationships using the `ref:` syntax
3. **Comprehensive Attributes**: Include all necessary attributes like unique constraints, defaults, and comments
4. **Review After Import**: Always review the generated fields after import
5. **Incremental Approach**: For complex schemas, consider importing tables one at a time
6. **DBML First Design**: Consider using DBML as your initial database design tool

### Handling Complex Data Types

- **Enum Types**: When using `enum('value1', 'value2')`, LaraJS automatically creates an ENUM field with the provided values
- **Length Specification**: For types like `varchar(255)`, the parser correctly sets the length_varchar property
- **Decimal Precision**: For `decimal`, LaraJS sets up the appropriate decimal configuration

### Troubleshooting Common Issues

| **Issue**                      | **Solution**                                                  |
| ------------------------------ | ------------------------------------------------------------- |
| Relationships not detected     | Ensure you're using the proper `ref:` syntax with direction   |
| Field types not mapping        | Check the type mapping table and use a supported DBML type    |
| Default values not applying    | Use the format `[default: value]` with appropriate quotes     |
| Unique constraints not applied | Make sure to include `[unique]` in the field attributes       |
| Model name not generated       | Check the table name format - it should be `Table name {...}` |
