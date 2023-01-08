<a href="https://github.com/RonaldGuilhermePDS/Test-Chat2Desk">
<p align="center">
<img src="./docs/chat2desk-logo.jpeg" alt="Chat2Desk-Logo" width="120" height="120">
</p>
</a>

<h2 align="center">Chat2Desk Selective Process</h2>

<p align="center">
A Test to the Chat2Desk selective process
</p>

<p align="center"><a href="https://github.com/RonaldGuilhermePDS/Test-Chat2Desk/find/master"><strong><- Explore the docs -></strong></a></p>

<p align="center">
<a href="https://github.com/RonaldGuilhermePDS">Creator</a>
·
<a href="https://github.com/RonaldGuilhermePDS/Test-Chat2Desk/issues">Report Bug</a>
·
<a href="https://github.com/RonaldGuilhermePDS/Test-Chat2Desk/pulls">Request Feature</a>
</p>

<details open="open">
<summary>Table of Contents</summary>
<ol>

<li><a href="#about">About</a></li>
<li><a href="#principles">Principles</a></li>
<li><a href="#methodologies-and-designs">Methodologies and Designs</a></li>
<li><a href="#design-patterns">Design Patterns</a></li>
<li><a href="#folder-structure">Folder Structure</a></li>
<li><a href="#built-with">Built With</a></li>
<li><a href="#getting-started">Getting Started</a><ul><li><a href="#installation">Installation</a></li></ul></li>
</ol>
</details>

## About

the proposal is to create **an authentication system** following **good practices**.

## Principles

- **Single Responsibility Principle (SRP)**
- **Open Closed Principle (OCP)**
- **Liskov Substitution Principle (LSP)**
- **Interface Segregation Principle (ISP)**
- **Dependency Inversion Principle (DIP)**
- **Separation of Concerns (SOC)**
- **Don't Repeat Yourself (DRY)**
- **You Aren't Gonna Need It (YAGNI)**
- **Keep It Simple, Silly (KISS)**
- **Composition Over Inheritance**
- **Small Commits**

## Methodologies and Designs

- **Continuous Integration**
- **Continuous Delivery**
- **Conventional Commits**
- **Clean Architecture**
- **Dependency Diagrams**
- **DDD**
- **GitFlow**
- **Modular Design**
- **TDD**
- **Use Cases**

  
## Design Patterns

- **Abstract Server**
- **Builder**
- **Adapter**
- **Composition Root**
- **Composite**
- **Decorator**
- **Dependency Injection**
- **Factory**
- **Proxy**
- **Singleton**

## Folder Structure
    .
    ├── ...
    ├── dist
    ├── docs
    ├── prisma
    ├── src
    │   ├── data
    │   │   ├ protocols
    │   │   └ usecases
    │   │
    │   ├── domain
    │   │   ├ models
    │   │   └ usecases
    │   │
    │   ├── infra
    │   │   ├ criptography
    │   │   ├ db
    │   │   └ validators
    │   │
    │   ├── main
    │   │   ├ config
    │   │   ├ middlewares
    │   │   └ routes
    │   │
    │   └── presentation
    │       ├ controllers
    │       ├ erros
    │       ├ helpers
    │       └ protocols
    │
    ├── tests
    │   ├── data
    │   │   └ usecases
    │   │
    │   ├── infra
    │   │   ├ criptography
    │   │   ├ db
    │   │   └ validators
    │   │
    │   ├── main
    │   │   ├ middlewares
    │   │   └ routes
    │   │
    │   └── presentation
    │       └ controllers
    ├── ...
    .

## Built With

* [TypeScript](https://www.typescriptlang.org)
* [Eslint](https://eslint.org)
* [Prettier](https://prettier.io/)
* [Lefthook](https://github.com/evilmartians/lefthook)
* [Lint-staged](https://github.com/okonet/lint-staged)
* [Jest](https://jestjs.io/pt-BR)
* [Argon2](https://www.npmjs.com/package/argon2)
* [Validator](https://www.npmjs.com/package/validator)
* [Express](https://expressjs.com/pt-br)
* [Prisma](https://www.prisma.io)
* [Docker](https://www.docker.com)
* [Postgres](https://www.postgresql.org)

## Getting Started

Follow the instructions to start the project without any problems.

## Installation

1. Clone the Repository
```sh
git clone https://github.com/RonaldGuilhermePDS/Test-Chat2Desk.git
```
2. Create .env file
```sh
cp .env.example .env
```

3. Install Packages
```sh
npm install
```

4. Prepare Prisma
```sh
npm run prepare
```

5. Run Locally
```sh
npm run local
```

or

5. Run with Docker
```sh
npm run up
```
