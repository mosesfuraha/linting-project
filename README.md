# LintingFormattingPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development Server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Linting

Run `npm run lint` to execute ESLint on the entire project. This will check your code for style and quality issues based on the ESLint configuration.

## Formatting

Run `npm run format` to format all files in the project using Prettier. This will apply the formatting rules defined in the Prettier configuration.

## Linting and Formatting Combined

Run `npm run lint-and-format` to execute both ESLint and Prettier, ensuring that your code adheres to both linting and formatting standards.

## Pre-commit Hooks

Husky is set up to run linting and formatting scripts before each commit. This ensures that code quality checks are enforced automatically.

## ESLint Rules

Here are some of the key rules configured in this project’s ESLint setup:

- **`@angular-eslint/directive-selector`**: Enforces consistent naming for Angular directives. In this configuration, directives should use `attribute` type selectors, start with the prefix `app`, and use camelCase style. This helps maintain readability and avoids naming conflicts across the application.

- **`@angular-eslint/component-selector`**: Enforces consistent naming for Angular components. Components should use `element` type selectors, start with the prefix `app`, and be styled in kebab-case. This ensures that component names are easily identifiable and conform to Angular standards.

- **`no-console`**: This rule warns when `console.log` and other console methods are used. It helps keep the codebase clean and avoids leaving debugging statements in production code.

- **`quotes`**: Enforces the use of single quotes for strings. Consistent quoting improves code readability and reduces potential errors when dealing with mixed quotes.

- **`no-unused-vars`**: Warns about variables that are defined but never used in the code. This helps to clean up the code and remove unnecessary variables that could cause confusion or clutter.

- **`eqeqeq`**: Enforces the use of strict equality (`===` and `!==`) instead of loose equality (`==` and `!=`). This avoids type coercion issues that can lead to unexpected behavior in the code.

- **ES6 Features Rule**: To ensure modern JavaScript features are used consistently, the project should be set up to allow ES6 features. This means enabling rules that support ES6 syntax such as arrow functions, `let` and `const` for variable declarations, template literals, and other ES6-specific functionalities. By enforcing the use of ES6 features, the codebase remains up-to-date with current JavaScript standards, improving both performance and readability.

## Further Help

To get more help on the Angular CLI, use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Additional Information

- **ESLint Configuration**: The project uses ESLint for code linting, configured to enforce Angular and TypeScript best practices, along with some custom rules.
- **Prettier Configuration**: Prettier is used for consistent code formatting. It is set up to work alongside ESLint without conflicts.
- **NPM Scripts**:
  - `lint`: Runs ESLint on the entire project.
  - `format`: Runs Prettier to format all files.
  - `lint-and-format`: Runs both ESLint and Prettier.
