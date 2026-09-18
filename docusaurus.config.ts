import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "TACEO Documentation",
  tagline:
    "Private onchain finance, integrable privacy services, and the network underneath.",
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

  markdown: {
    mermaid: true,
  },

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
    require.resolve("docusaurus-plugin-image-zoom"),
    [
      require.resolve("@docusaurus/plugin-client-redirects"),
      {
        redirects: [
          { from: "/docs/quick-start", to: "/docs/" },
          { from: "/docs/resources/circom", to: "/docs/co-circom/" },
          { from: "/docs/design/known-issues", to: "/docs/" },
          { from: "/docs/design/roadmap", to: "/docs/" },
          { from: "/docs/contact", to: "/docs/" },
          { from: "/docs/finance-solutions/x402", to: "/docs/x402/introduction/" },
          
          // --- Agent Solutions: x402 moved out of finance-solutions ---
          { from: "/docs/finance-solutions/x402/introduction", to: "/docs/x402/introduction/" },
          { from: "/docs/finance-solutions/x402/quickstart", to: "/docs/x402/quickstart/" },
          { from: "/docs/finance-solutions/x402/how-it-works", to: "/docs/x402/how-it-works/" },
          { from: "/docs/finance-solutions/x402/integration-guide", to: "/docs/x402/integration-guide/" },
          { from: "/docs/finance-solutions/x402/network-and-contracts", to: "/docs/x402/network-and-contracts/" },
          { from: "/docs/finance-solutions/x402/protocol-reference", to: "/docs/x402/protocol-reference/" },
          
          // --- payments/* folded into concepts + private virtual account ---
          { from: "/docs/finance-solutions/payments/introduction", to: "/docs/finance-solutions/overview/" },
          { from: "/docs/finance-solutions/payments/how-it-works", to: "/docs/finance-solutions/concepts/architecture/" },
          { from: "/docs/finance-solutions/payments/quickstart", to: "/docs/finance-solutions/integrate/client-sdk/" },
          
          // --- yield/* renamed to private-defi ---
          { from: "/docs/finance-solutions/yield/introduction", to: "/docs/finance-solutions/private-defi/overview/" },
          { from: "/docs/finance-solutions/yield/how-it-works", to: "/docs/finance-solutions/private-defi/private-yield/" },
          { from: "/docs/finance-solutions/yield/quickstart", to: "/docs/finance-solutions/private-defi/private-yield/" },
          
          // --- compliance renamed ---
          { from: "/docs/finance-solutions/compliance/introduction", to: "/docs/finance-solutions/compliance/overview/" },
          
          // --- legacy use-cases/* retired, mapped by topic ---
          { from: "/docs/use-cases", to: "/docs/finance-solutions/use-cases/overview/" },
          { from: "/docs/use-cases/finance", to: "/docs/finance-solutions/overview/" },
          { from: "/docs/use-cases/defi", to: "/docs/finance-solutions/private-defi/overview/" },
          { from: "/docs/use-cases/compliance", to: "/docs/finance-solutions/compliance/overview/" },
          { from: "/docs/use-cases/identity", to: "/docs/identity-solutions/overview/" },
          { from: "/docs/use-cases/agents", to: "/docs/x402/use-cases/" },
          { from: "/docs/use-cases/ai", to: "/docs/x402/use-cases/" },
          { from: "/docs/use-cases/data-ownership", to: "/docs/taceo-network/data-sovereignty/" },
          { from: "/docs/use-cases/attribution", to: "/docs/taceo-network/data-sovereignty/" },
          { from: "/docs/use-cases/proof", to: "/docs/taceo-proof/overview/" },
          { from: "/docs/use-cases/gaming", to: "/docs/taceo-network/" },
          
          // --- resources/* and the duplicate primer ---
          { from: "/docs/resources", to: "/docs/primer/collabSNARKs-primer/" },
          { from: "/docs/resources/resources", to: "/docs/primer/collabSNARKs-primer/" },
          { from: "/docs/resources/collsnarks", to: "/docs/primer/collabSNARKs-primer/" },
          { from: "/docs/resources/mpc", to: "/docs/primer/collabSNARKs-primer/" },
          { from: "/docs/resources/zkp", to: "/docs/primer/collabSNARKs-primer/" },
          { from: "/docs/primer/mpc-primer", to: "/docs/primer/collabSNARKs-primer/" },
          
          // --- misc retirements ---
          { from: "/docs/design/mpc-vm", to: "/docs/taceo-network/" },
          { from: "/docs/releases/co-noir-feb", to: "/docs/start-here/public-repos/" },
          { from: "/docs/releases/co-noir-nov", to: "/docs/start-here/public-repos/" },
          { from: "/docs/releases/co-snarks-april", to: "/docs/start-here/public-repos/" },
        ],
      },
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],

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
              label: "Finance Solutions",
              to: "/docs/finance-solutions/overview",
            },
            {
              label: "Privacy Services",
              to: "/docs/services/overview",
            },
            {
              label: "TACEO Network",
              to: "/docs/taceo-network/",
            },
            {
              label: "Developer Tools",
              to: "/docs/overview",
            },
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
      additionalLanguages: ["solidity"],
    },
    zoom: {
      selector: ".markdown img, .docusaurus-mermaid-container svg",
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
