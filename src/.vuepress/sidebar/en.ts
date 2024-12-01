import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "Process",
      icon: "pi pi-spinner-dotted",
      prefix: "process/",
      children: "structure",
    }
  ],
});
