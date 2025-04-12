---
outline: deep
title: "LaraJS i18n - Internationalization for Laravel & Vue.js Applications"
description: "Convert Laravel language files from PHP to JSON for seamless frontend internationalization in Vue.js applications"
author: "LaraJS Team"
head:
  - - meta
    - name: keywords
      content: LaraJS i18n, Laravel internationalization, Vue.js i18n, language translation, PHP to JSON conversion, multilingual Laravel applications, Vue I18n integration, frontend localization
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:title
      content: "LaraJS i18n - Internationalization for Laravel & Vue.js Applications"
  - - meta
    - property: og:description
      content: "Convert Laravel language files from PHP to JSON for seamless frontend internationalization in Vue.js applications"
  - - meta
    - property: og:url
      content: https://docs.larajs.com/packages/larajs-i18n.html
  - - meta
    - property: og:image
      content: https://docs.larajs.com/larajs.png
  - - meta
    - property: og:type
      content: article
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: "LaraJS i18n - Internationalization for Laravel & Vue.js Applications"
  - - meta
    - name: twitter:description
      content: "Convert Laravel language files from PHP to JSON for seamless frontend internationalization"
  - - meta
    - name: twitter:image
      content: https://docs.larajs.com/larajs.png
  - - link
    - rel: canonical
      href: https://docs.larajs.com/packages/larajs-i18n.html
---

# LaraJS i18n

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
import { createI18n } from "vue-i18n";
import LaraJSI18n from "./i18n.generated.json";

const i18n = createI18n({
  messages: LaraJSI18n,
});

export default i18n;
```
