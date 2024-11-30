import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/portfolio",
  // "/demo/",
  {
    text: "Process",
    icon: "pi pi-spinner-dotted",
    prefix: "/process/",
    children: [
      {
        text: "Consultation",
        icon: "pi pi-book",
        link: "consultation.html",
      },
      {
        text: "Timeline",
        icon: "pi pi-clock",
        link: "timeline.html",
      },
      {
        text: "Development",
        icon: "pi pi-cog",
        link: "development.html",
      },
      {
        text: "Delivery & Support",
        icon: "pi pi-cloud-upload",
        link: "delivery-Support.html",
      },
    ],
  },
  {
    text: "Videos",
    icon: "pi pi-youtube",
    link: "https://www.youtube.com/@stackseekers",
  },
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
