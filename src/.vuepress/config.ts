import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

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
