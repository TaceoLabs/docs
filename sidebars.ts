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
      items: [
        "finance-solutions/overview",
        {
          type: "category",
          label: "Concepts",
          items: [
            "finance-solutions/concepts/privacy-model",
            "finance-solutions/concepts/architecture",
            "finance-solutions/concepts/escape-hatch",
            "finance-solutions/concepts/private-shared-state",
          ],
        },
        {
          type: "category",
          label: "Private virtual account",
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
          items: [
            "finance-solutions/private-defi/overview",
            "finance-solutions/private-defi/private-yield",
          ],
        },
        {
          type: "category",
          label: "Private RWAs",
          items: [
            "finance-solutions/private-rwas/overview",
            "finance-solutions/private-rwas/private-holdings",
            "finance-solutions/private-rwas/disclosure",
          ],
        },
        {
          type: "category",
          label: "Cross-chain (LayerZero OFT)",
          items: [
            "finance-solutions/cross-chain/how-it-works",
            "finance-solutions/cross-chain/quickstart",
            "finance-solutions/cross-chain/limitations",
          ],
        },
        {
          type: "category",
          label: "Compliance",
          items: [
            "finance-solutions/compliance/overview",
            "finance-solutions/compliance/pre-transaction-screening",
            "finance-solutions/compliance/post-transaction-disclosure",
          ],
        },
        {
          type: "category",
          label: "Use cases",
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
          label: "Integrate",
          items: [
            "finance-solutions/integrate/client-sdk",
            "finance-solutions/integrate/client-sdk-omap",
            "finance-solutions/integrate/gateway",
            "finance-solutions/integrate/operator-interface",
            "finance-solutions/integrate/stack",
          ],
        },
        "finance-solutions/roadmap",
      ],
    },
    {
      type: "category",
      label: "Agent Solutions",
      items: [
        "x402/introduction",
        "x402/quickstart",
        "x402/how-it-works",
        "x402/use-cases",
        "x402/integration-guide",
        "x402/protocol-reference",
        "x402/network-and-contracts",
      ],
    },
    {
      type: "category",
      label: "Identity Solutions",
      collapsed: false,
      items: [
        "identity-solutions/overview",
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
      items: [
        "taceo-network/index",
        "taceo-network/network",
        {
          type: "category",
          label: "TACEO Services",
          items: [
            "services/overview",
            {
              type: "category",
              label: "TACEO:OPRF",
              items: [
                "services/taceo-oprf/overview",
                "services/taceo-oprf/authorization",
                {
                  type: "category",
                  label: "Development",
                  items: ["services/taceo-oprf/beta-oprf"],
                },
                "services/taceo-oprf/api",
              ],
            },
            {
              type: "category",
              label: "TACEO:Proof",
              items: [
                "services/taceo-proof/overview",
                {
                  type: "category",
                  label: "Getting Started",
                  items: [
                    "services/taceo-proof/dev/quick-start-co-circom",
                    "services/taceo-proof/dev/quick-start-co-noir",
                  ],
                },
                "services/taceo-proof/dev/blueprints",
                "services/taceo-proof/dev/bestpractice",
              ],
            },
            {
              type: "category",
              label: "TACEO:Match",
              items: ["services/taceo-match/overview", "services/taceo-match/concepts"],
            },
            {
              type: "category",
              label: "TACEO:OMap",
              items: ["services/taceo-omap/overview", "services/taceo-omap/concepts"],
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
      items: [
        {
          type: "category",
          label: "Getting Started",
          items: [
            "overview",
            "getting-started/install",
            "getting-started/quick-start-co-circom",
            "getting-started/quick-start-co-noir",
            "getting-started/usage",
          ],
        },
        {
          type: "category",
          label: "Examples",
          items: [
            "examples/examples",
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
              items: [
                "co-circom/cli/cli",
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
          items: [
            "co-noir/co-noir",
            {
              type: "category",
              label: "Command-Line Interface",
              items: [
                "co-noir/cli/cli",
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
              items: ["co-noir/lib/lib", "co-noir/lib/example"],
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
