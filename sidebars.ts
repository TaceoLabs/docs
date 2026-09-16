import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Unified sidebar structure for all documentation
  mainSidebar: [
    "index",
    {
      type: "category",
      label: "Start here",
      collapsed: false,
      link: { type: "doc", id: "index" },
      items: [
        "start-here/deployments-and-status",
        "start-here/glossary",
        "start-here/public-repos",
      ],
    },
    {
      type: "category",
      label: "Finance Solutions",
      collapsed: false,
      link: { type: "doc", id: "finance-solutions/overview" },
      items: [
        {
          type: "category",
          label: "Concepts",
          link: { type: "doc", id: "finance-solutions/concepts/privacy-model" },
          items: [
            "finance-solutions/concepts/privacy-model",
            "finance-solutions/concepts/who-sees-what",
            "finance-solutions/concepts/architecture",
            "finance-solutions/concepts/escape-hatch",
            "finance-solutions/concepts/private-shared-state",
          ],
        },
        {
          type: "category",
          label: "Private virtual account",
          link: { type: "doc", id: "finance-solutions/private-virtual-account/overview" },
          items: [
            "finance-solutions/private-virtual-account/overview",
            "finance-solutions/private-virtual-account/deposit-and-withdraw",
            "finance-solutions/private-virtual-account/transfers",
            "finance-solutions/private-virtual-account/transaction-history",
          ],
        },
        {
          type: "category",
          label: "Private DeFi",
          link: { type: "doc", id: "finance-solutions/private-defi/overview" },
          items: [
            "finance-solutions/private-defi/overview",
            "finance-solutions/private-defi/private-yield",
          ],
        },
        {
          type: "category",
          label: "Private RWAs",
          link: { type: "doc", id: "finance-solutions/private-rwas/overview" },
          items: [
            "finance-solutions/private-rwas/overview",
            "finance-solutions/private-rwas/private-holdings",
            "finance-solutions/private-rwas/disclosure",
          ],
        },
        {
          type: "category",
          label: "Cross-chain (LayerZero OFT)",
          link: { type: "doc", id: "finance-solutions/cross-chain/how-it-works" },
          items: [
            "finance-solutions/cross-chain/how-it-works",
            "finance-solutions/cross-chain/quickstart",
            "finance-solutions/cross-chain/limitations",
          ],
        },
        {
          type: "category",
          label: "Compliance",
          link: { type: "doc", id: "finance-solutions/compliance/overview" },
          items: [
            "finance-solutions/compliance/overview",
            "finance-solutions/compliance/pre-transaction-screening",
            "finance-solutions/compliance/post-transaction-disclosure",
          ],
        },
        {
          type: "category",
          label: "Use cases",
          link: { type: "doc", id: "finance-solutions/use-cases/overview" },
          items: [
            "finance-solutions/use-cases/overview",
            "finance-solutions/use-cases/payments-payroll-batch",
            "finance-solutions/use-cases/treasury",
            "finance-solutions/use-cases/card-payments",
            "finance-solutions/use-cases/on-off-ramp",
          ],
        },
        {
          type: "category",
          label: "Private Payments",
          link: { type: "doc", id: "finance-solutions/payments/introduction" },
          items: [
            "finance-solutions/payments/quickstart",
            "finance-solutions/payments/how-it-works",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Agent Solutions",
      link: { type: "doc", id: "x402/introduction" },
      items: [
        "x402/quickstart",
        "x402/how-it-works",
        "x402/integration-guide",
        "x402/protocol-reference",
        "x402/network-and-contracts",
      ],
    },
    {
      type: "category",
      label: "Identity Solutions",
      collapsed: false,
      link: { type: "doc", id: "identity-solutions/overview" },
      items: [
        {
          type: "category",
          label: "Distributed Nullifiers",
          link: { type: "doc", id: "identity-solutions/nullifiers/introduction" },
          items: [
            "identity-solutions/nullifiers/use-cases",
            {
              type: "category",
              label: "Getting Started",
              items: [
                "identity-solutions/nullifiers/getting-started/quickstart",
                "identity-solutions/nullifiers/getting-started/quicklocal",
              ],
            },
          ],
        },
        "identity-solutions/passport-identification/introduction",
        "identity-solutions/biometrics/introduction",
      ],
    },
    {
      type: "category",
      label: "TACEO Network",
      link: { type: "doc", id: "taceo-network/index" },
      items: [
        "taceo-network/network",
        {
          type: "category",
          label: "TACEO Services",
          link: { type: "doc", id: "services/overview" },
          items: [
            {
              type: "category",
              label: "TACEO:OPRF",
              link: { type: "doc", id: "taceo-oprf/overview" },
              items: [
                "taceo-oprf/authorization",
                {
                  type: "category",
                  label: "Development",
                  items: ["taceo-oprf/beta-oprf"],
                },
                "taceo-oprf/api",
              ],
            },
            {
              type: "category",
              label: "TACEO:Proof",
              link: { type: "doc", id: "taceo-proof/overview" },
              items: [
                {
                  type: "category",
                  label: "Getting Started",
                  items: [
                    "taceo-proof/dev/quick-start-co-circom",
                    "taceo-proof/dev/quick-start-co-noir",
                  ],
                },
                "taceo-proof/dev/blueprints",
                "taceo-proof/dev/bestpractice",
              ],
            },
            {
              type: "category",
              label: "TACEO:Match",
              link: { type: "doc", id: "taceo-match/overview" },
              items: ["taceo-match/concepts"],
            },
            {
              type: "category",
              label: "TACEO:OMap",
              link: { type: "doc", id: "taceo-omap/overview" },
              items: ["taceo-omap/concepts"],
            }
          ],
        },

        "taceo-network/node-operators",
        "taceo-network/governance",
        "taceo-network/data-sovereignty",
        "taceo-network/roadmap",
      ],
    },
    {
      type: "category",
      label: "Developer Tools",
      link: { type: "doc", id: "overview" },
      items: [
        {
          type: "category",
          label: "Getting Started",
          items: [
            "getting-started/install",
            "getting-started/quick-start-co-circom",
            "getting-started/quick-start-co-noir",
            "getting-started/usage",
          ],
        },
        {
          type: "category",
          label: "Examples",
          link: { type: "doc", id: "examples/examples" },
          items: [
            "examples/poseidon",
            "examples/poseidon_noir",
            "examples/kyc",
            "examples/multiplier2",
          ],
        },
        "network-config", // Network Configuration
        {
          type: "category",
          label: "coCircom",
          link: { type: "doc", id: "co-circom/co-circom" },
          items: [
            {
              type: "category",
              label: "Command-Line Interface",
              link: { type: "doc", id: "co-circom/cli/cli" },
              items: [
                "co-circom/cli/split-input",
                "co-circom/cli/merge-input-shares",
                "co-circom/cli/split-witness",
                "co-circom/cli/generate-witness",
                "co-circom/cli/translate-witness",
                "co-circom/cli/generate-proof",
                "co-circom/cli/verify",
              ],
            },
            {
              type: "category",
              label: "Rust Library",
              link: { type: "doc", id: "co-circom/lib/lib" },
              items: ["co-circom/lib/example"],
            },
          ],
        },
        {
          type: "category",
          label: "coNoir",
          link: { type: "doc", id: "co-noir/co-noir" },
          items: [
            {
              type: "category",
              label: "Command-Line Interface",
              link: { type: "doc", id: "co-noir/cli/cli" },
              items: [
                "co-noir/cli/split-input",
                "co-noir/cli/merge-input-shares",
                "co-noir/cli/split-witness",
                "co-noir/cli/generate-witness",
                "co-noir/cli/translate-witness",
                "co-noir/cli/build-proving-key",
                "co-noir/cli/split-proving-key",
                "co-noir/cli/translate-proving-key",
                "co-noir/cli/generate-proof",
                "co-noir/cli/build-and-generate-proof",
                "co-noir/cli/create-vk",
                "co-noir/cli/verify",
                "co-noir/cli/download-crs",
              ],
            },
            {
              type: "category",
              label: "Rust Library",
              link: { type: "doc", id: "co-noir/lib/lib" },
              items: ["co-noir/lib/example"],
            },
          ],
        },
      ],
    },
    // {
    //   type: "category",
    //   label: "Running Infrastructure",
    //   items: [
    //     "taceo-proof/ops/onboarding", // Running a Node
    //     "taceo-proof/ops/ops-scaling", // Node Requirements
    //     "taceo-proof/ops/security", // Node Operations
    //   ],
    // },
    {
      type: "category",
      label: "Learning Resources",
      items: [
        "primer/collabSNARKs-primer",
      ],
    },
  ],
};

export default sidebars;
