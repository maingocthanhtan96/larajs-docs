## Introduction

We use [Element Plus](https://element-plus.org/en-US/component/table.html#table) and `JSX` to create the `LaraTable` component.

```vue
<script setup lang="ts">
import {useCategoryTables} from "./table.tsx";

const {table} = useCategoryTables();
</script>

<template>
  <LaraTable :table="table"></LaraTable>
</template>
```

**UI**

<center>
    <img src="../assets/generators/table.png" alt="larajs-table" />
</center>

## Table.tsx

```tsx
export function useCategoryTables() {
  ...
  const table: LaraTableType<Category> = {
    ...
    name: "category",
    actions: {
      getAll: getCategories,
      delete: deleteCategory,
    },
    query: {
      sort: "-id",
      include: [],
      search: {
        column: "name",
      },
      date: {
        column: "categories.updated_at",
      },
    },
    columns: [
      {
        field: "id",
        type: "string",
        width: 80,
        sortable: "custom",
        align: "center",
        headerAlign: "center",
      },
      {
        field: "name",
        sortable: "custom",
        align: "left",
      },
      {
        field: "description",
        sortable: false,
        align: "left",
        template: ({row}) => <div v-sane-html={row.description} />,
      },
      {
        field: "updated_at",
        sortable: "custom",
        align: "center",
        label: t("date.updated_at"),
        template: "date",
      },
    ],
  };

  return {
    table,
  };
}
```

## Table Attributes

| **Name** | **Description**                                                                                                                                                       | **Type**                                                                   | **Default**                                      |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------ |
| name     | Used for integration with `i18n` and `router`, providing localization support and route handling for the table.                                                       | `string`                                                                   | —                                                |
| ref      | A reference to access the `LaraTable` component directly, allowing interaction and manipulation of the table instance.                                                | `Ref` \| `null`                                                            | —                                                |
| query    | The query object that sends requests to the API, controlling data fetching for the table's content.                                                                   | `IQuery`                                                                   | —                                                |
| filters  | Defines filters that can be applied to the table, such as search and date filters for more refined data views.                                                        | `Filter`                                                                   | `[{ template: 'search' }, { template: 'date' }]` |
| actions  | Allows you to set actions that can be performed on the table items, such as edit or delete functionality.                                                             | `Action`                                                                   | `[{ template: 'edit' }, { template: 'delete' }]` |
| props    | Inherits all props from the [Table API](https://element-plus.org/en-US/component/table.html#table-api), offering full control over the table behavior and appearance. | [Table API](https://element-plus.org/en-US/component/table.html#table-api) |                                                  |
| columns  | Defines the columns that will be displayed in the table, specifying the data structure and presentation of each column.                                               | `Column[]`                                                                 |                                                  |
