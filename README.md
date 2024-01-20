# training-angular_tutorial
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
