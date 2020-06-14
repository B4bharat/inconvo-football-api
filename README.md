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

- 'Clean Architecture' helps you achieve separation of concerns by dividing the software into layers. There is at least one layer for business rules and another for interfaces.
- The underlying principle is that the architecture should be:
  - Independent of Frameworks.
  - Testable.
  - Independent of UI.
  - Independent of Database.
  - Independent of any external agency.
- The roles in the architecture as named as follows:
  - Entities:
    - Entities encapsulate Enterprise wide business rules. An entity can be an object with methods, or it can be a set of data structures and functions. It doesn’t matter so long as the entities could be used by many different applications in the enterprise.
    - In our application, 'Team' is an entity and all the business rules associated with it are written inside 'entities/team'. Dependency injection helps add interfaces to it. The dependencies are independent of the entity and can be added, modified according to the requirement, thus making the 'Team' entity individually testable.
  - Use Cases:
    - The software in this layer contains application specific business rules. It encapsulates and implements all of the use cases of the system.
    - In our application, 'Create team', 'List Teams', 'Team Details', 'Update Team' are the use cases.
  - Interface Adapters:
    - The software in this layer is a set of adapters that convert data from the format most convenient for the use cases and entities, to the format most convenient for some external agency such as the Database or the Web.
    - 'data-access' contains the 'filesystem' logic needed to read, modify files.

## APIs

- CREATE NEW TEAM

  - Request URL:
    ```bash
      http://localhost:3000/teams
    ```
  - Request Method: POST
  - Request Payload:
    ```bash
      {
        "name": "YOUR LOCAL TEAM FC",
        "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/735.jpg"
      }
    ```
  - Response:
    ```bash
    {
      "teamDetails": {
        "name": "YOUR LOCAL TEAM FC",
        "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/735.jpg"
        }
    }
    ```

- LIST TEAMS

  - Request URL:
    ```bash
      http://localhost:3000/teams
    ```
  - Request Method: GET
  - Response:

    ```bash
    {
      "teams": {
          "data": [
              {
                  "name": "Arsenal",
                  "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/632.jpg"
              },
              {
                  "name": "Bournemouth",
                  "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/631.jpg"
              },
          ]
      }
    }
    ```

  - GET TEAM DETAILS

    - Request URL:
      ```bash
        http://localhost:3000/teams/Arsenal
      ```
    - Request Method: GET
    - Response:
      ```bash
      {
        "reqTeamDetails": {
            "name": "Arsenal",
            "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/632.jpg"
        }
      }
      ```
      ```bash
      {
        "error": "The Requested team - Arsenala does not exists"
      }
      ```

  - UPDATE TEAM (If a Team name already exists, it updates the image name by one e.g. 735.jpg becomes 736.jpg)
    - Request URL:
    ```bash
      http://localhost:3000/teams
    ```
    - Request Method: POST
    - Request Payload:
      ```bash
        {
          "name": "YOUR LOCAL TEAM FC",
          "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/735.jpg"
        }
      ```
    - Response:
      ```bash
      {
        "teamDetails": {
          "name": "YOUR LOCAL TEAM FC",
          "img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/736.jpg"
          }
      }
      ```

## Lint

- Eslint errors that can be [fixed through --fix flag](https://eslint.org/docs/rules/)

```bash
# lint code with ESLint
npm run lint
yarn lint

# try to fix ESLint errors
npm run lint-and-fix
yarn lint-and-fix
```

## License

[MIT License](README.md) - [Bharat Poptwani](https://github.com/B4bharat)
