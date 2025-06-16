import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LaraJS Docs",
  description: "LaraJS is a powerful optimization & management platform providing essential tools, query builders, generators and features for Laravel and Vue.js projects",
  lang: 'en-US',
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.larajs.com/',
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'keywords', content: 'LaraJS, Laravel, Vue.js, optimization, development tools, query builder, LaraJS Query, Laravel query builder, Laravel eloquent, Vue.js development, Laravel development' }],
    ['meta', { name: 'author', content: 'Mai Ngoc Thanh Tan' }],
    ['meta', { property: 'og:title', content: 'LaraJS - Laravel & Vue.js Development Platform' }],
    ['meta', { property: 'og:description', content: 'Documentation for LaraJS - A powerful Laravel and Vue.js development platform with advanced query capabilities and generators' }],
    ['meta', { property: 'og:url', content: 'https://docs.larajs.com/' }],
    ['meta', { property: 'og:image', content: 'https://docs.larajs.com/larajs.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'LaraJS Docs' }],
    ['meta', { name: 'twitter:description', content: 'LaraJS - A powerful Laravel and Vue.js development platform with advanced query builders' }],
    ['meta', { name: 'twitter:image', content: 'https://docs.larajs.com/larajs.png' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://docs.larajs.com/",
      "name": "LaraJS Docs",
      "description": "LaraJS - A powerful Laravel and Vue.js development platform with query builders and generators",
      "author": {
        "@type": "Person",
        "name": "Mai Ngoc Thanh Tan"
      },
      "publisher": {
        "@type": "Organization",
        "name": "LaraJS",
        "logo": {
          "@type": "ImageObject",
          "url": "https://docs.larajs.com/logo.png"
        }
      },
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "LaraJS",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    })],
  ],
  themeConfig: {
    siteTitle: 'LaraJS Docs',
    footer: {
      copyright: 'Copyright © 2024-present LaraJS'
    },
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/generators/getting-started" },
      { text: "Documentation", link: "/introductions/introduction" },
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
            text: "Why Choose LaraJS",
            link: "/introductions/benefit",
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
          {
            text: "LaraJS CQRS",
            link: "/packages/larajs-cqrs",
          },
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
