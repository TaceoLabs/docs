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
      label: "Finance Solutions",
      collapsed: false,
      link: { type: "doc", id: "finance-solutions/overview" },
      items: [
        {
          type: "category",
          label: "Private Payments",
          link: { type: "doc", id: "finance-solutions/payments/introduction" },
          items: [
            "finance-solutions/payments/quickstart",
            "finance-solutions/payments/how-it-works",
          ],
        },
        {
          type: "category",
          label: "Confidential x402",
          link: { type: "doc", id: "finance-solutions/x402/introduction" },
          items: [
            "finance-solutions/x402/quickstart",
            "finance-solutions/x402/how-it-works",
            "finance-solutions/x402/integration-guide",
            "finance-solutions/x402/protocol-reference",
            "finance-solutions/x402/network-and-contracts",
          ],
        },
        "finance-solutions/compliance/introduction",
        {
          type: "category",
          label: "Private Yield",
          link: { type: "doc", id: "finance-solutions/yield/introduction" },
          items: [
            "finance-solutions/yield/quickstart",
            "finance-solutions/yield/how-it-works",
          ],
        },
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
        }
      ],
    },
    {
      type: "category",
      label: "TACEO Network",
      link: { type: "doc", id: "taceo-network/index" },
      items: [
        "taceo-network/network",
        "taceo-network/node-operators",
        "taceo-network/governance",
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
        "resources/mpc",
        "resources/zkp",
        {
          type: "doc",
          id: "resources/collsnarks",
          label: "coSNARKs Further Reading",
        },
      ],
    },
  ],
};

export default sidebars;
