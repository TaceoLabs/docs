import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "TACEO Documentation",
  tagline: "MPC and coSNARKs for Proof Delegation and Private Shared State",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.taceo.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TaceoLabs", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  scripts: [
    {
      src: "https://cdn.matomo.cloud/taceo.matomo.cloud/container_v2uCJC8k.js",
      async: true,
    },
    {
      src: "https://cdn.voidanalytics.com/latest.min.js",
      async: false,
    },
  ],

  plugins: [
    require.resolve("docusaurus-lunr-search"),
    [
      require.resolve("@docusaurus/plugin-client-redirects"),
      {
        redirects: [
          { from: "/docs/quick-start", to: "/docs/" },
          { from: "/docs/resources/circom", to: "/docs/co-circom/" },
          { from: "/docs/design/known-issues", to: "/docs/" },
          { from: "/docs/design/roadmap", to: "/docs/" },
          { from: "/docs/contact", to: "/docs/" },
        ],
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      // title: 'TACEO Docs',
      logo: {
        alt: "TACEO Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: "https://core.taceo.io",
          label: "Core",
          position: "right",
        },
        {
          href: "https://github.com/TaceoLabs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "TACEO Network",
              to: "/docs/taceo-network/",
            },
            {
              label: "Privacy Services",
              to: "/docs/services/overview",
            },
            {
              label: "Developer Tools",
              to: "/docs/overview",
            },
            // {
            //   label: "Infrastructure",
            //   to: "/docs/taceo-proof/ops/onboarding",
            // },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://taceo.io/discord",
            },
            {
              label: "X",
              href: "https://twitter.com/taceo_io",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/taceoio/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://blog.taceo.io",
            },
            {
              label: "About",
              href: "https://www.taceo.io",
            },
            {
              label: "GitHub",
              href: "https://github.com/TaceoLabs/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TACEO GmbH. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
