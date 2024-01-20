# MyApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
---
# 0x00
- nodejs lts
- npm
- angular language service vscode extension
- angular cli
* new project
  - file structure
  - configuration
- run server
- tests
```
$ node -v
$ npm -v
$ npm install -g @angular/cli
$ ng version
$ ng new <my-app>
$ cd <my-app>
$ ng serve
$ ng test
```
* component
  * anatomy
    - ts class
    - html template
    - css styles
  - selector
  - properties
  - interpolation
* components
  * data flow
    - @if
    - @for
  - property binding
  - event handling
* ng generate command
  - component
  - directive
  - pipe
  - service
  - class
  - guard
  - interface
  - enum
  - module
- compose components
```
$ ng generate component components/<name>
$ ng generate --inline-template component components/<name>
$ ng generate --skip-tests component components/<name>
```
* components
  * passing data
    - @input
* routing
  - navigation component
  - route definition
  - RouterLink directive
- compose interfaces
```
$ ng generate interface interfaces/<name>
```
