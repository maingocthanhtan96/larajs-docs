import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LaraJS Docs",
  description: "LaraJS Documents",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: "Home", link: "/"},
      {text: "Examples", link: "/markdown-examples"},
      {text: "API", link: "/api-examples"},
      {text: "Getting Started", link: "/getting-started/introduction"},
      {
        text: "Demo",
        link: "https://youtu.be/fJ3Inyi034k",
      },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/getting-started/introduction",
          },
          {
            text: "Installation",
            link: "/getting-started/installation",
          },
          {
            text: "Project Structure",
            link: "/getting-started/structure",
          },
          {
            text: "Support & Bug Reports",
            link: "/getting-started/support",
          },
        ],
      },
      {
        text: "Generator",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/getting-started/introduction",
          },
          {
            text: "Installation",
            link: "/getting-started/installation",
          },
          {
            text: "Project Structure",
            link: "/getting-started/structure",
          },
          {
            text: "Support & Bug Reports",
            link: "/getting-started/support",
          },
        ],
      },
    ],

    socialLinks: [{icon: "github", link: "https://github.com/vuejs/vitepress"}],
  },
});
