## Introduction

We use [Element Plus](https://element-plus.org/en-US/component/form.html#form) and `JSX` to create the `LaraForm` component.

```vue
<script setup lang="ts">
import {useCategoryForms} from "./form.tsx";

const {id, form, state, formElement} = useCategoryForms();
</script>

<template>
  <LaraForm :form="formElement" />
</template>
```

**UI**

<center>
    <img src="../assets/generators/form.png" alt="larajs-form" />
</center>

## Form.tsx

```tsx
export function useCategoryForms() {
  ...
  const formRef = ref<FormInstance>();
  const form = reactive<Category>({
    id: 0,
    name: "",
    description: "",
  });
  const formElement: LaraFormType<Category> = {
    ...
    name: "category",
    ref: formRef,
    form: {
      model: form,
      rules: categoryRules(),
    },
    items: [
      {
        prop: "name",
        col: {
          span: 12,
        },
        component: () => (
          <el-input
            v-model={form.name}
            show-word-limit
            maxlength={255}
            class="w-full"
          />
        ),
      },
      {
        prop: "description",
        col: {
          span: 24,
        },
        component: () => <Tinymce v-model={form.description} />,
      },
    ],
    actions: {
      create: createCategory,
      update: updateCategory,
    },
  };

  return {
    id,
    form,
    state,
    formElement,
  };
}
export function categoryRules(): FormRules {
  const {t} = useI18n();

  return {
    name: [
      {
        required: true,
        message: t("validation.required", {
          attribute: t("table.category.name"),
        }),
        trigger: "change",
      },
    ],
  };
}
```

## Form Attributes

| **Name** | **Description**                                                                                                                                                      | **Type**            | **Default**                                                  |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------ |
| name     | Used for integration with `i18n` and `router`, providing localization support and route handling for the table.                                                      | `string`            | —                                                            |
| ref      | Provides a reference to access the LaraForm component directly, enabling interaction with or manipulation of the form instance programmatically.                     | `Ref` \| `null`     | —                                                            |
| form     | Inherits all props from the [Form API](https://element-plus.org/en-US/component/form.html#form-api), giving full control over the form’s behavior and appearance     | `Form`              | —                                                            |
| row      | Inherits all props from the [Row API](https://element-plus.org/en-US/component/layout.html#row-api), allowing you to set the layout and structure of the form rows.  | `Partial<RowProps>` | —                                                            |
| items    | Specifies the form items to be displayed, defining their structure and appearance. This allows you to customize fields and inputs dynamically in the form.           | `Items`             | —                                                            |
| actions  | Defines the API actions for the form, such as `create`, `update`, or custom actions. This controls how the form interacts with the backend, such as submitting data. | `IAction`           | `[{template: 'cancel'},{template: id ? 'update' : 'store'}]` |
