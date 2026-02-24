---
name: packages-larajs-i18n
description: Use when the user asks about the LaraJS i18n package, converting Laravel PHP language files to JSON for Vue.js frontend internationalization, running php artisan larajs:i18n, publishing the larajs-i18n config, or integrating the generated JSON with Vue I18n (createI18n).
---

# LaraJS i18n

## Introduction

[This package](https://github.com/maingocthanhtan96/larajs-i18n) allows converting language files from `.php` to `.json` to support frontend internationalization.

## Quick Start

**Install**

Install the package as a development dependency using Composer:

[Github](https://github.com/maingocthanhtan96/larajs-i18n)

```bash
composer require --dev larajs/i18n
```

**Generate JSON Language Files**

Generate the necessary `.json` language files for the frontend:

```php
php artisan larajs:i18n
```

**Publish Configuration**

If you want to customize the configuration, publish the config file:

```php
php artisan vendor:publish --tag=larajs-i18n
```

**Frontend Integration**

Once the JSON files are generated, integrate them into your frontend with Vue I18n:

```ts
import { createI18n } from "vue-i18n";
import LaraJSI18n from "./i18n.generated.json";

const i18n = createI18n({
  messages: LaraJSI18n,
});

export default i18n;
```

## How It Works

The `larajs:i18n` artisan command scans your Laravel language files (PHP arrays) and converts them into a structured JSON file that Vue I18n can consume. This allows you to maintain translations in Laravel's PHP format while making them available to your Vue.js frontend.

The generated file is typically placed at:
```
packages/common/src/lang/vue-i18n-locales.generated.json
```
