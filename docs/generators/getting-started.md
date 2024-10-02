The **Generator** allows users to define and configure models along with their fields for a Laravel application. Users can customize the model name, fields, relationships, and other attributes that will be used to generate the backend API, database, and frontend CMS.

![Generator](../assets/generators/generator.png)

## Model

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
| `Ignore Migrate` | Skips running database migrations.                                               | UnChecked   |             | Optional       |
| `Only Migrate`   | Only generate migration and Model.                                               | UnChecked   |             | Optional       |
| `Test Cases`     | Generates test cases for the model and related services.                         | Checked     |             | Optional       |

## Fields Configuration Table

| **Field**            | **Description**                                                                    | **Default**    | **Example**    | **Validation** |
| -------------------- | ---------------------------------------------------------------------------------- | -------------- | -------------- | -------------- |
| `Field Name`         | The name of the field in the database.                                             |                | `name`         | Required       |
| `Field Name Display` | Display name for the field in the user interface.                                  |                | `Name`         | Required       |
| `Field Option`       | Setting unique, indexing, and adding comments.                                     |                |                | Optional       |
| `Database Type`      | The type of the field in the database (e.g., `Increments`, `VARCHAR`, `LONGTEXT`). | `VARCHAR(255)` | `VARCHAR(255)` | Required       |
| `Default Value`      | The default value for this field if none is provided.                              | `NULL`         |                | Required       |
| `Search/Sort/Show`   | Enable or disable search, sort, and show position in the CMS.                      |                |                | Optional       |
| `Delete`             | Option to delete the field from the configuration.                                 |                |                |                |

### Field Option

| **Option** | **Description**                                                                                   | **Example**                                         |
| ---------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `Unique`   | Ensures the field value is unique across all records in the database.                             | Enabled for `email` field to ensure unique emails.  |
| `Index`    | Creates an index on the field to optimize database query performance.                             | Enabled for `status` field to improve search speed. |
| `Comment`  | Adds a comment for the field in the database, useful for documentation or clarification purposes. | Indicates if the category is active or inactive.    |

![Generator Option](../assets/generators/generator-option.png)

### Database Type

**Database**

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

**Form**

Each **Database Type** will feature a distinct UI, with our focus centered on utilizing the **Element Plus** components.

| **Database Type**                                                                                                                                                                           | **UI**                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `INTEGER`, `UNSIGNED INTEGER`, `TINYINT`, `UNSIGNED TINYINT`, `SMALLINT`, `UNSIGNED SMALLINT`, `MEDIUMINT`, `UNSIGNED MEDIUMINT`, `BIGINT`, `UNSIGNED BIGINT`, `FLOAT`, `DOUBLE`, `DECIMAL` | ![integer](../assets/generators/ui/integer.png)   |
| `BOOLEAN`                                                                                                                                                                                   | ![boolean](../assets/generators/ui/boolean.png)   |
| `DATE`                                                                                                                                                                                      | ![date](../assets/generators/ui/date.png)         |
| `DATETIME`, `TIMESTAMP`                                                                                                                                                                     | ![integer](../assets/generators/ui/datetime.png)  |
| `TIME`                                                                                                                                                                                      | ![time](../assets/generators/ui/time.png)         |
| `YEAR`                                                                                                                                                                                      | ![year](../assets/generators/ui/year.png)         |
| `CHAR`, `VARCHAR`                                                                                                                                                                           | ![varchar](../assets/generators/ui/varchar.png)   |
| `TINYTEXT`, `MEDIUMTEXT`, `TEXT`                                                                                                                                                            | ![text](../assets/generators/ui/text.png)         |
| `LONGTEXT`                                                                                                                                                                                  | ![longtext](../assets/generators/ui/longtext.png) |
| `ENUM`                                                                                                                                                                                      | ![enum](../assets/generators/ui/enum.png)         |
| `JSON`, `JSONB`                                                                                                                                                                             | ![json](../assets/generators/ui/json.png)         |
