# INCONVO FOOTBALL TEAM APPLICATION

RESTful APIs following the 'Clean Architecture' principles for interacting with football teams data.

# Best Practices

The project follows the following best practices and the users are expected to consult the same throughout the development process:

- [Node Best Practices](https://github.com/i0natan/nodebestpractices)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [Clean Architecture](https://www.freecodecamp.org/news/a-quick-introduction-to-clean-architecture-990c014448d2/)

## Features

- Complete Typescript Support
- ES2017 latest features like Async/Await
- CORS enabled
- Consistent coding styles with [editorconfig](http://editorconfig.org)
- Uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
- Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
- Linting with [eslint](http://eslint.org)
- Formatting with [prettier](https://prettier.io/)
- Git hooks with [husky](https://github.com/typicode/husky)

## Requirements

- [Node](https://nodejs.org/en/download/current/)

## Getting Started

Clone the repo and make it yours:

```bash
git clone https://github.com/B4bharat/inconvo-football-api
cd inconvo-football-api
rm -rf .git
```

## Set environment variables

```bash
cp .env.example .env
```

## Install dependencies

Note: DO NOT use npm and yarn alternately, stick with one package manager only because both produce their own '.lock' files and may result in inconsistencies with dependencies

```bash
cd src
npm i or npm install
```

## Running Locally

```bash
npm run start:dev
yarn start:dev
```

## Running in Production

```bash
npm build
yarn build
```

## Folder Structure

```bash
+-- build (Production ready files)
+-- src
|   +-- controllers (handles the http request response structure and routes to appropriate use-cases. should handle grpc as well)
|   +-- data (contains the json data)
|   +-- data-access (Data Access Layer, has the responsibility of file reading, writing. Should contain Database, cache initialisation and helper functions)
|   +-- entities (The entities a project has e.g. post entity for a social media application)
|   |   +-- team (Football Team entity, contains the business logic a football team data must abide by)
|   +-- use-cases (Use Cases for the entity)
|   |   +-- team (Contains the use cases for the 'team' entity)
|   +-- utilities (All the utility methods)
|   +-- index.ts (main file, app initialisation)
+-- .editorconfig (configurations for the editors)
+-- .env
+-- .env.example (sample dotenv file)
+-- .eslintignore
+-- .eslintrc (eslint configuration)
+-- .gitignore
+-- nodemon.json
+-- package.json
+-- package-lock.json
+-- tsconfig.json (Typescript configuration)
+-- .README.MD
+-- .prettierrc (prettier configuration)
```

## Clean Architecture

- Explanation of 'Clean Architecture' in our context

## API

- Request, response of each api alongwith their description

## Lint

- Eslint errors that can be [fixed through --fix flag](https://eslint.org/docs/rules/)

```bash
# lint code with ESLint
npm run lint
yarn lint

# try to fix ESLint errors
npm run lint:fix
yarn lint:fix

# lint and watch for changes
npm run lint:watch
yarn lint:watch

# fix formatting issues through prettier
npm run formatting:fix
yarn formatting:fix
```

## Test

```bash
# run all tests with Mocha
npm run test
yarn test

# run unit tests
npm run test:unit
yarn test:unit

# run integration tests
npm run test:integration
yarn test:integration

# run all tests and watch for changes
npm run test:watch
yarn test:watch

# open nyc test coverage reports
npm run coverage
yarn coverage
```

## Validate

```bash
# run lint and tests
yarn validate
```

## Logs

```bash
# show logs in production
pm2 logs
```

## Documentation

```bash
# generate and open api documentation
npm run docs
yarn docs
```

## License

[MIT License](README.md) - [Bharat Poptwani](https://github.com/B4bharat)
