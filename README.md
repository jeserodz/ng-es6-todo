# Ng-ES6-todo
This example demonstrates how to create an AngularJS application using ES6 syntax. The focus of this application is to:
* Use ES6 classes to define AngularJS controllers
* Use ES6 classes to define AngularJS services
* Organize the application architecture based on features, instead of the classic AngularJS API-based organization
* Use a **build system** and common **build system plugins** to optimize the development workflow and create production-ready applications
    * **Gulp**: the build system used in this project)
    * **Browserify**: modularizes our application architecture into separate JS files, supports ES6 `import`/`export`
    * **Babelify**: transpiles ES6 modern syntax into ES5 syntax understandable in most web browsers
    * **gulp-notify**: sends errors to notification center
    * **vinyl-source-stream**: Converts the Browserify output stream into a Gulp-compatible stream (vinyl format)
    * **gulp-rename**: renames the output file (useful for renaming from `app.js` to `app.min.js`)
    * **gulp-merge**: merges multiple Gulp streams into one
    * **gulp-uglify**: mifinies source code
    * **browserify-ngannotate**: automatically injects AngularJS dependencies into controllers and services for minification
    * **gulp-angular-templatecache**: Concatenates and registers AngularJS templates in the $templateCache, so views doesn't need to load via AJAX
    * **BrowserSync**: provides a local web server with live reloading and cross-device events synchronization (clicks, scrolls, etc)