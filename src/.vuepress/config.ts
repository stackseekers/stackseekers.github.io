import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
import theme from "./theme.js";

export default defineUserConfig({
  title: "Stack Seekers",
  description:
    "Experienced full-stack developer specializing in scalable web, mobile, and software solutions. Let’s bring your vision to life.",
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        Components({
          resolvers: [PrimeVueResolver()],
        }),
      ],
      ssr: {
        noExternal: ["primevue"],
      },
    },
    vuePluginOptions: {},
  }),
  base: "/",
  head: [
    [
      "script",
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-TYDDHHS1MK",
        async: true,
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-TYDDHHS1MK');`,
    ],
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "Stack Seekers",
      description: "A portfolio website for stack seekers",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "Stack Seekers",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
