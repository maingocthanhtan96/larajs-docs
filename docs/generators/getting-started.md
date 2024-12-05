---
outline: deep
---

# Generator Overview

The **Generator** allows users to define and configure models along with their fields for a Laravel application. Users can customize the model name, fields, relationships, and other attributes that will be used to generate the backend API, database, and frontend CMS.

**UI Preview**

![Generator](../assets/generators/generator.png)

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
| `APi Only`       | Only generate the API                                                            | UnChecked   |             | Optional       |
| `Ignore Migrate` | Skips running database migrations.                                               | UnChecked   |             | Optional       |
| `Only Migrate`   | Only generate migration and Model.                                               | UnChecked   |             | Optional       |
| `Test Cases`     | Generates test cases for the model and related services.                         | Checked     |             | Optional       |

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

### 🔧 Field Option

| **Option** | **Description**                                                                                   | **Example**                                         |
| ---------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `Unique`   | Ensures the field value is unique across all records in the database.                             | Enabled for `email` field to ensure unique emails.  |
| `Index`    | Creates an index on the field to optimize database query performance.                             | Enabled for `status` field to improve search speed. |
| `Comment`  | Adds a comment for the field in the database, useful for documentation or clarification purposes. | Indicates if the category is active or inactive.    |

**UI Preview**

![Generator Option](../assets/generators/generator-option.png)

### 📦 Database Type

#### 🗄️ Database

| **Database Type**       | **Display Name**   | **Search** | **Sort** | **Show** |
| ----------------------- | ------------------ | :--------: | :------: | :------: |
| `increments`            | Increments         |     🚫     |    ✅    |    ✅    |
| `integer`               | INTEGER            |     ✅     |    ✅    |    ✅    |
| `unsignedInteger`       | UNSIGNED INTEGER   |     ✅     |    ✅    |    ✅    |
| `tinyInteger`           | TINYINT            |     ✅     |    ✅    |    ✅    |
| `unsignedTinyInteger`   | UNSIGNED TINYINT   |     ✅     |    ✅    |    ✅    |
| `smallInteger`          | SMALLINT           |     ✅     |    ✅    |    ✅    |
| `unsignedSmallInteger`  | UNSIGNED SMALLINT  |     ✅     |    ✅    |    ✅    |
| `mediumInteger`         | MEDIUMINT          |     ✅     |    ✅    |    ✅    |
| `unsignedMediumInteger` | UNSIGNED MEDIUMINT |     ✅     |    ✅    |    ✅    |
| `bigInteger`            | BIGINT             |     ✅     |    ✅    |    ✅    |
| `unsignedBigInteger`    | UNSIGNED BIGINT    |     ✅     |    ✅    |    ✅    |
| `float`                 | FLOAT              |     ✅     |    ✅    |    ✅    |
| `double`                | DOUBLE             |     ✅     |    ✅    |    ✅    |
| `decimal`               | DECIMAL            |     ✅     |    ✅    |    ✅    |
| `boolean`               | BOOLEAN            |     ✅     |    ✅    |    ✅    |
| `date`                  | DATE               |     ✅     |    ✅    |    ✅    |
| `dateTime`              | DATETIME           |     ✅     |    ✅    |    ✅    |
| `timestamp`             | TIMESTAMP          |     ✅     |    ✅    |    ✅    |
| `time`                  | TIME               |     ✅     |    ✅    |    ✅    |
| `year`                  | YEAR               |     ✅     |    ✅    |    ✅    |
| `char`                  | CHAR               |     ✅     |    ✅    |    ✅    |
| `string`                | VARCHAR            |     ✅     |    ✅    |    ✅    |
| `tinyText`              | TINYTEXT           |     ✅     |    ✅    |    ✅    |
| `mediumText`            | MEDIUMTEXT         |     ✅     |    ✅    |    ✅    |
| `text`                  | TEXT               |     ✅     |    ✅    |    ✅    |
| `longText`              | LONGTEXT           |     ✅     |    ✅    |    ✅    |
| `enum`                  | ENUM               |     ✅     |    ✅    |    ✅    |
| `json`                  | JSON               |     🚫     |    🚫    |    ✅    |
| `jsonb`                 | JSONB              |     🚫     |    🚫    |    ✅    |
| **Relationship Types**  |                    |            |          |          |
| `hasOne`                | hasOne             |     ✅     |    ✅    |    ✅    |
| `hasMany`               | hasMany            |     ✅     |    ✅    |    ✅    |

#### 📝 Form

Each **Database Type** will feature a distinct UI, with our focus centered on utilizing the **Element Plus** components.

| **Database Type**                                                                                                                                                                           |                          **UI Preview**                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------: |
| `INTEGER`, `UNSIGNED INTEGER`, `TINYINT`, `UNSIGNED TINYINT`, `SMALLINT`, `UNSIGNED SMALLINT`, `MEDIUMINT`, `UNSIGNED MEDIUMINT`, `BIGINT`, `UNSIGNED BIGINT`, `FLOAT`, `DOUBLE`, `DECIMAL` | <center>![integer](../assets/generators/ui/integer.png)</center> |
| `BOOLEAN`                                                                                                                                                                                   | <center>![boolean](../assets/generators/ui/boolean.png)</center> |
| `DATE`                                                                                                                                                                                      |            ![date](../assets/generators/ui/date.png)             |
| `DATETIME`, `TIMESTAMP`                                                                                                                                                                     |         ![integer](../assets/generators/ui/datetime.png)         |
| `TIME`                                                                                                                                                                                      |            ![time](../assets/generators/ui/time.png)             |
| `YEAR`                                                                                                                                                                                      |            ![year](../assets/generators/ui/year.png)             |
| `CHAR`, `VARCHAR`                                                                                                                                                                           |         ![varchar](../assets/generators/ui/varchar.png)          |
| `TINYTEXT`, `MEDIUMTEXT`, `TEXT`                                                                                                                                                            |            ![text](../assets/generators/ui/text.png)             |
| `LONGTEXT`                                                                                                                                                                                  |        ![longtext](../assets/generators/ui/longtext.png)         |
| `ENUM`                                                                                                                                                                                      |            ![enum](../assets/generators/ui/enum.png)             |
| `JSON`, `JSONB`                                                                                                                                                                             |            ![json](../assets/generators/ui/json.png)             |

## Relationships

There are two ways to create relationships in our system:

Example:

`Post` → belongs to → `Category`

`Category` → has many → `Post`

### 📝 Generate Form

This way just only for `hasMany` or `belongsTo`

**UI Preview**

![Relationships Form](../assets/generators/relationship-1.png)

### 📝 Relationship Form

This way for all relationship such as: `hasOne`, `hasMany`, `belongsToMany`

**UI Preview**

![Relationships Form](../assets/generators/relationship-2.png)

![Relationships Form](../assets/generators/relationship-2-form.png)

**🔄 Many To Many**

Many to many will generate pivot table. By default, the pivot table is `CategoryPost` (`{Model1}` + `{Model2}`).

**UI Preview**

![Relationships Many To Many](../assets/generators/relationship-n2n.png)

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
