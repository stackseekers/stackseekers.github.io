# Getting Started

## Prerequisites

- [Node.js 18+](https://nodejs.org/en/)
- [Pnpm](https://pnpm.io/installation)
- [Giscus](https://giscus.app/)
- [Github pages](https://docs.github.com/en/pages/quickstart)


## Clone and modify Your Own

```
git clone https://github.com/stackseekers/stackseekers.github.io.git
```

> using pnpm

```bash
cd stackseekers.github.io
pnpm install
pnpm docs:dev
```

Don't Forget to create your own github repo.

## UI Framework used

- [Primevue](https://primevue.org/vite)
- [Primeflex](https://primeflex.org/installation)
- [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)
- [Vuepress](https://v2.vuepress.vuejs.org/)

## Quick Start to learn from scratch

To use it, open up your terminal in the desired directory and run the following command:

Execute one of the following command in terminal:

pnpm

```bash
pnpm create vuepress-theme-hope stackseekers
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

## Modify bellow features accornding to your need

Free Developer Portfolio Website

<ul>

<li>Navbar</li>
<li>Dropdown Menu</li>
<li>Collapsible Sidebar</li>
<li>Giscus: A comments system powered by GitHub Discussions</li>
<li>Theme</li>
<li>Responsive - Mobile, Table, Desktop, Large Desktop</li>
<li>Image path</li>
<li>Light mode</li>
<li>Dark mode</li>
<li>Internationalization</li>
<li>Primevue Setup</li>
<li>Custom CSS</li>
<li>Back to top of the page</li>
<li>Deploy to GitHub pages</li>
<li>Code Structure

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
</ul>


## Website Content Ideas

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
