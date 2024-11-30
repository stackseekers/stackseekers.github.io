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

## Modify to make your own

Developer Portfolio Website

<ul>
<li>Code Tree

```
├── README.md
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── README.md
│   ├── demo
│   │   ├── README.md
│   │   ├── disable.md
│   │   ├── encrypt.md
│   │   ├── layout.md
│   │   ├── markdown.md
│   │   └── page.md
│   ├── guide
│   │   ├── README.md
│   │   ├── bar
│   │   │   ├── README.md
│   │   │   └── baz.md
│   │   └── foo
│   │       ├── README.md
│   │       └── ray.md
│   ├── portfolio.md
│   └── zh
│       ├── README.md
│       ├── demo
│       │   ├── README.md
│       │   ├── disable.md
│       │   ├── encrypt.md
│       │   ├── layout.md
│       │   ├── markdown.md
│       │   └── page.md
│       ├── guide
│       │   ├── README.md
│       │   ├── bar
│       │   │   ├── README.md
│       │   │   └── baz.md
│       │   └── foo
│       │       ├── README.md
│       │       └── ray.md
│       └── portfolio.md
└── tsconfig.json
```

</li>
<li>Navbar</li>
<li>Sidebar</li>
<li>Theme</li>
<li>Light mode</li>
<li>Dark mode</li>
<li>Primevue Setup</li>
<li>Custome Css</li>
<li>Image path</li>
</ul>

Website Content Structure

1. Hero Section (First Impression)

    > Button: “Hire Me for Your Next Project”

    > Button: “Get a Free Consultation”

2. Services Offered
    > Button: “Discuss Your Project”

3. Portfolio

4. Testimonials

5. Journey

6. Blog Section (Optional)

7. Contact Me
    > Button: “Send a Message”
    
    > Button: “Get a Free Quote”

8. Footer Section
