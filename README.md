# Getting Started

## Prerequisites

- [Node.js 10+](https://nodejs.org/en/)
- [Pnpm](https://pnpm.io/installation) 
- [Yarn Classic](https://classic.yarnpkg.com/en/) 


## Quick Start

To use it, open up your terminal in the desired directory and run the following command:

Execute one of the following command in terminal:

pnpm

```bash
pnpm create vuepress-theme-hope stackseekers
```
OR

yarn

```bash
yarn create vuepress-theme-hope stackseekers
```
OR

npm

```bash
npm init vuepress-theme-hope@latest stackseekers
```


The command will interactively ask for details to configure your VuePress site’s metadata such as:

- Project Name
- Description
- More

Once this done, a scaffolded documentation site will be created in the `stackseekers` directory (or custom directory name, if passed) under the current directory.

To see it in action, navigate into newly scaffolded directory, install the dependencies and start the local server:



> pnpm

```bash
cd stackseekers
pnpm install
pnpm docs:dev
```
OR

> yarn

```bash
cd stackseekers
yarn install
yarn docs:dev
```

OR

> npm

```bash
cd stackseekers
npm install
npm run docs:dev
```