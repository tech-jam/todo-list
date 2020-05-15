## Todo List app
To install todo-list app from the development branch execute the following:
## Frontend
```
npm install
```
Set API URL in frontend/src/app/portal.module

## Backend
Use silex framework: https://silex.symfony.com/
```
composer install
```
Set `$connectionParams` (database config) in index.php

## Frontend Commands
* `npm run serve:dev` to serve website locally for development purposes. Source files be available in the browser.
* `npm run build:dev` to build a dev version of website in .tmp. Source files be available in the browser.
* `npm run build:prd` to build a production version of website in /dist. Source files will not included here.
* `npm run lint` to launch lint verification
* `npm run lint-fix` to launch lint fixer which will try to fix style issues
