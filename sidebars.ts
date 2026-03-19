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
      label: "TACEO Services",
      link: { type: "doc", id: "services/overview" },
      items: [
        {
          type: "category",
          label: "TACEO:OPRF",
          link: { type: "doc", id: "taceo-oprf/overview" },
          items: [
            "taceo-oprf/concepts",
            "taceo-oprf/use-cases",
            "taceo-oprf/authorization",
            {
              type: "category",
              label: "Getting Started",
              items: ["taceo-oprf/quickstart", "taceo-oprf/quicklocal"],
            },
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
        {
          type: "category",
          label: "Use Cases",
          link: { type: "doc", id: "use-cases/index" },
          items: [
            { type: "doc", id: "use-cases/identity", label: "Identity" },
            { type: "doc", id: "use-cases/proof", label: "Proof" },
            { type: "doc", id: "use-cases/finance", label: "Finance" },
            { type: "doc", id: "use-cases/compliance", label: "Compliance" },
            { type: "doc", id: "use-cases/attribution", label: "Attribution" },
            { type: "doc", id: "use-cases/agents", label: "Agents" },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Releases",
      items: [
        {
          type: "category",
          label: "coSNARK Releases",
          items: [
            "releases/co-snarks-april",
            "releases/co-noir-feb",
            "releases/co-noir-nov",
          ],
        },
      ],
    },
  ],
};

export default sidebars;
