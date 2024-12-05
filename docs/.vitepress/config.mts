import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LaraJS Docs",
  description: "LaraJS is an optimization & management platform providing essential tools and features for Laravel and Vue.js projects",
  lang: 'en-US',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'canonical', href: 'https://maingocthanhtan96.github.io/larajs-docs/' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'keywords', content: 'LaraJS, Laravel, Vue.js, optimization, development tools' }],
    ['meta', { name: 'author', content: 'Mai Ngoc Thanh Tan' }],
    ['meta', { property: 'og:title', content: 'LaraJS Documentation' }],
    ['meta', { property: 'og:description', content: 'Documentation for LaraJS - A Laravel and Vue.js development platform' }],
    ['meta', { property: 'og:url', content: 'https://maingocthanhtan96.github.io/larajs-docs/' }],
    ['meta', { property: 'og:image', content: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'LaraJS Documentation' }],
    ['meta', { name: 'twitter:description', content: 'LaraJS - Laravel and Vue.js development platform' }],
    ['meta', { name: 'twitter:image', content: '/logo.png' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://maingocthanhtan96.github.io/larajs-docs/",
      "name": "LaraJS Documentation",
      "description": "LaraJS - A Laravel and Vue.js development platform",
      "author": {
        "@type": "Person",
        "name": "Mai Ngoc Thanh Tan"
      }
    })],
  ],
  themeConfig: {
    siteTitle: 'LaraJS Documentation',
    footer: {
      copyright: 'Copyright © 2024-present LaraJS'
    },
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/introductions/introduction" },
      { text: "Documentation", link: "/generators/getting-started" },
      { text: "Video Demo", link: "https://youtu.be/fJ3Inyi034k" },
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
            text: "LaraJS Permission",
            link: "/packages/larajs-permission",
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
      {
        text: "Templates",
        collapsed: false,
        items: [
          {
            text: "LaraJS Boilerplate",
            link: "/templates/larajs-boilerplate",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/maingocthanhtan96/LaraJS" },
    ],
  },
});
