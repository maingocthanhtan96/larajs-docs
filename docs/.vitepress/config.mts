import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LaraJS Docs",
  description: "LaraJS Documents",
  head: [["link", {rel: "icon", href: "/logo.png"}]],
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: "Home", link: "/"},
      {text: "Getting Started", link: "/introductions/introduction"},
      {
        text: "Video Demo",
        link: "https://youtu.be/fJ3Inyi034k",
      },
    ],

    sidebar: [
      {
        text: "Getting Started",
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
            text: "Backend",
            link: "/generators/backend",
          },
          {
            text: "Frontend",
            link: "/generators/frontend",
          },
        ],
      },
      {
        text: "Packages",
        collapsed: false,
        items: [
          {
            text: "LaraJS Query",
            link: "/packages/larajs-query",
          },
          {
            text: "LaraJS I18n",
            link: "/packages/larajs-i18n",
          },
          {
            text: "LaraJS Core",
            link: "/packages/larajs-core",
          },
          {
            text: "LaraJS Generator",
            link: "/packages/larajs-generator",
          },
          // {
          //   text: "LaraJS CQRS",
          //   link: "/packages/larajs-cqrs",
          // },
          {
            text: "LaraJS Boilerplate",
            link: "/packages/larajs-boilerplate",
          },
        ],
      },
      {
        text: "Advanced usage",
        collapsed: false,
        items: [
          {
            text: "LaraJS Table",
            link: "/advanced-usage/larajs-table",
          },
          {
            text: "LaraJS Form",
            link: "/advanced-usage/larajs-form",
          },
          {
            text: "Lint & Format",
            link: "/advanced-usage/lint-format",
          },
        ],
      },
    ],
    socialLinks: [
      {icon: "github", link: "https://github.com/maingocthanhtan96/LaraJS"},
    ],
  },
});
