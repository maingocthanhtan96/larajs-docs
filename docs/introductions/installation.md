---
outline: deep
title: "LaraJS Installation Guide - Setup Your Development Environment"
description: "Step-by-step instructions for installing and configuring LaraJS, the Laravel & Vue.js low-code platform for rapid application development"
author: "LaraJS Team"
head:
  - - meta
    - name: keywords
      content: LaraJS installation, setup LaraJS, Laravel Vue setup, low-code platform installation, LaraJS configuration, Laravel development environment, Vue.js setup, web application setup
  - - meta
    - name: robots
      content: index, follow
  - - meta
    - property: og:title
      content: LaraJS Installation Guide - Setup Your Development Environment
  - - meta
    - property: og:description
      content: Step-by-step instructions for installing and configuring LaraJS, the Laravel & Vue.js low-code platform for rapid application development
  - - meta
    - property: og:url
      content: https://docs.larajs.com/introductions/installation.html
  - - meta
    - property: og:image
      content: https://docs.larajs.com/larajs.png
  - - meta
    - property: og:type
      content: article
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: LaraJS Installation Guide - Setup Your Development Environment
  - - meta
    - name: twitter:description
      content: Step-by-step instructions for installing and configuring LaraJS, the Laravel & Vue.js low-code platform
  - - meta
    - name: twitter:image
      content: https://docs.larajs.com/larajs.png
  - - link
    - rel: canonical
      href: https://docs.larajs.com/introductions/installation.html
---

# Installation Guide

This guide walks you through setting up LaraJS on your development machine.

## Requirements

Before installing LaraJS, ensure that your environment meets the following requirements:

- 🐘 PHP 8.3+
- 🎼 Composer
- 🟢 Node.js (version 22.x+)
- 🧶 Yarn

## Browser Support

LaraJS supports modern versions of the following browsers:

- 🍏 Apple Safari
- 🔵 Google Chrome
- 🟣 Microsoft Edge
- 🟠 Mozilla Firefox

## Installation

**1. Create database**

- Create a new database
- For example: create database `larajs`

**2. Run script**

Execute the following command to run the setup:

```php
php ./apps/api/artisan larajs:setup
```

**Input**

When prompted, provide the necessary information to connect to your database:

```bash
 What is the url of your app? [http://127.0.0.1:8000]:
 > http://127.0.0.1:8000

 What is your database host? [127.0.0.1]:
 > 127.0.0.1

 What is your database port? [3306]:
 > 3306

 What is your database name? [larajs]:
 > larajs

 What is your username? [root]:
 > root

 What is your password? []:
 > root

```

**Output**

Once the setup is complete, you should see the following output:

```bash
...
██╗      █████╗ ██████╗  █████╗      ██╗███████╗
██║     ██╔══██╗██╔══██╗██╔══██╗     ██║██╔════╝
██║     ███████║██████╔╝███████║     ██║███████╗
██║     ██╔══██║██╔══██╗██╔══██║██   ██║╚════██║
███████╗██║  ██║██║  ██║██║  ██║╚█████╔╝███████║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝ ╚══════╝
Powered by: LaraJS
SETUP SUCCESSFULLY!

```
