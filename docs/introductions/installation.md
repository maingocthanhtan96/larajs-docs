## Requirements

Before installing LaraJS, ensure that your environment meets the following requirements:

- 🐘 PHP 8.3+
- 🎼 Composer
- 🟢 Node.js (version 20.x+)
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
