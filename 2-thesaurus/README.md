# Vite Boilerplate

## How to Use
To download and use this boilerplate:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal and run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server with vite

## Scripts:
- `start`: The start script runs vite, which is a build tool that serves the application during development. This script starts the development server and serves the app on a local port.
- `build`: The build script first runs tsc, which compiles the TypeScript code to JavaScript. Then, it runs vite build, which creates a production build of the application. The resulting build artifacts are saved to the dist directory.
- `lint`: The lint script runs the eslint tool with the @typescript-eslint plugin, which lints the TypeScript and React code in the src directory. This script reports any linting errors and warnings to the console.
- `preview`: The preview script runs vite preview, which serves the production build of the application on a local port. This is useful for testing the production build before deploying it to a server.

## Dependencies
- `react` and `react-dom`: These are the core libraries for building React applications.

- `@types/react` and `@types/react-dom`: These are the TypeScript type definitions for React and ReactDOM. They allow TypeScript to check that the code is using these libraries correctly.

- `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`: These are the ESLint plugins and parser for TypeScript. They allow ESLint to lint TypeScript code.

- `@vitejs/plugin-react`: This is a Vite plugin that enables Vite to compile and serve React components.

- `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`: These are ESLint and ESLint plugins for linting React code. eslint-plugin-react-hooks checks that React hooks are used correctly, and eslint-plugin-react-refresh provides linting for React Fast Refresh.

- `typescript`: This is the TypeScript compiler, which compiles TypeScript code to JavaScript.

- `vite`: This is a build tool that serves the application during development and creates a production build of the application.