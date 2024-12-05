## Introduction

[This package](https://github.com/maingocthanhtan96/larajs-i18n) allows converting language files from `.php` to `.json` to support frontend.

## Quick Start

**Install**

First, install the package as a development dependency using Composer:

```bash
composer require --dev larajs/i18n:dev-main
```

**Generate JSON Language Files**

Generate the necessary .json language files for the frontend using this command:

```php
php artisan larajs:i18n
```

**Publish Configuration**

If you want to customize the configuration, publish the config file with the following command:

```php
php artisan vendor:publish --tag=larajs-i18n
```

**Frontend Integration**

Once the JSON files are generated, integrate them into your frontend with Vue I18n:

```ts
import {createI18n} from "vue-i18n";
import LaraJSI18n from "./i18n.generated.json";

const i18n = createI18n({
  messages: LaraJSI18n,
});

export default i18n;
```
