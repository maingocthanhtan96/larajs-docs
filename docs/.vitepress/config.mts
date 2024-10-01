import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LaraJS Docs",
  description: "LaraJS Documents",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: "Home", link: "/"},
      {text: "Examples", link: "/markdown-examples"},
      {text: "API", link: "/api-examples"},
      {text: "Getting Started", link: "/introductions/introduction"},
      {
        text: "Demo",
        link: "https://youtu.be/fJ3Inyi034k",
      },
    ],

    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          {
            text: "What is LaraJS",
            link: "/introductions/introduction",
          },
          {
            text: "Installation",
            link: "/introductions/installation",
          },
          {
            text: "Project Structure",
            link: "/introductions/structure",
          },
          {
            text: "Support & Bug Reports",
            link: "/introductions/support",
          },
        ],
      },
      {
        text: "Generator",
        collapsed: false,
        items: [
          {
            text: "Getting Started",
            link: "/generators/getting-started",
          },
          {
            text: "Installation",
            link: "/introductions/installation",
          },
          {
            text: "Project Structure",
            link: "/introductions/structure",
          },
          {
            text: "Support & Bug Reports",
            link: "/introductions/support",
          },
        ],
      },
    ],

    socialLinks: [{icon: "github", link: "https://github.com/vuejs/vitepress"}],
  },
});
