import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

interface ArrowLinkProps {
  to: string;
  label: string;
  className?: string;
}

function ArrowLink({ to, label, className }: ArrowLinkProps) {
  return (
    <Link to={to} className={`${styles.arrowLink} ${className ?? ""}`}>
      <span className={styles.arrowLeft}>→&nbsp;</span>
      {label}
      <span className={styles.arrowRight}>&nbsp;→</span>
    </Link>
  );
}

interface JourneyCardProps {
  status: string;
  title: string;
  description: string;
  ctas: { to: string; label: string }[];
  lead?: boolean;
}

function JourneyCard({
  status,
  title,
  description,
  ctas,
  lead = false,
}: JourneyCardProps) {
  return (
    <div
      className={`${styles.journeyCard} ${lead ? styles.journeyCardLead : ""}`}
    >
      <div>
        <div className={styles.journeyStatus}>{status}</div>
        <h4 className={styles.journeyCardTitle}>{title}</h4>
        <p className={styles.journeyCardDesc}>{description}</p>
      </div>
      <div className={styles.journeyCardCtas}>
        {ctas.map((cta) => (
          <ArrowLink key={cta.to} to={cta.to} label={cta.label} />
        ))}
      </div>
    </div>
  );
}

function GuidanceSection() {
  return (
    <section className={styles.page}>
      <div className="container">
        {/* ── Hero ── */}
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>TACEO Documentation</h1>
          <p className={styles.heroSubtitle}>
            In production for global-scale identity. Now powering private
            onchain finance through Merces.
          </p>
          <div className={styles.heroLinks}>
            <ArrowLink
              to="/docs/finance-solutions/overview"
              label="Finance Solutions"
              className={styles.arrowLinkPrimary}
            />
            <ArrowLink to="/docs/" label="Browse all documentation" />
          </div>
        </div>

        {/* ── Journey cards ── */}
        <h2 className={styles.sectionTitle}>What do you want to accomplish?</h2>

        <div className={styles.journeyGrid}>
          <JourneyCard
            lead
            status="Private onchain finance"
            title="Build private payments on the chain you already use"
            description="Merces wraps existing ERC-20 tokens (USDC and others) into shielded balances. Private payments, x402, and compliance primitives are live on testnet. Private yield is in active development."
            ctas={[
              {
                to: "/docs/finance-solutions/overview",
                label: "Finance Solutions overview",
              },
              {
                to: "/docs/finance-solutions/x402/quickstart",
                label: "Confidential x402 quickstart",
              },
            ]}
          />

          <JourneyCard
            status="Privacy primitives"
            title="Add a privacy service to my application"
            description="Production-ready privacy primitives you can call directly: privacy-preserving nullifiers (TACEO:OPRF), private proof delegation (TACEO:Proof), and confidential shared state (TACEO:OMap)."
            ctas={[
              { to: "/docs/services/overview", label: "Browse services" },
              { to: "/docs/taceo-oprf/overview", label: "TACEO:OPRF" },
              { to: "/docs/taceo-proof/overview", label: "TACEO:Proof" },
            ]}
          />

          <JourneyCard
            status="The network underneath"
            title="Understand the TACEO Network"
            description="The MPC network beneath Merces and the privacy services. TACEO also co-architected the protocol now running World's iris-code system in production at global scale. Learn the security model, governance, and node operator path."
            ctas={[
              { to: "/docs/taceo-network/", label: "Network overview" },
              {
                to: "/docs/taceo-network/node-operators",
                label: "Run a node",
              },
            ]}
          />
        </div>

        {/* ── Quick Links ── */}
        <div className={styles.quickLinksSection}>
          <h2 className={styles.sectionTitle}>Quick Links</h2>
          <div className={styles.quickLinksGrid}>
            <div className={styles.quickLinkCard}>
              <p className={styles.quickLinkTitle}>New to Privacy Tech?</p>
              <div className={styles.quickLinkList}>
                <ArrowLink to="/docs/resources/mpc" label="MPC primer" />
                <ArrowLink
                  to="/docs/primer/collabSNARKs-primer"
                  label="CoSNARKs primer"
                />
              </div>
            </div>
            <div className={styles.quickLinkCard}>
              <p className={styles.quickLinkTitle}>Real Applications</p>
              <div className={styles.quickLinkList}>
                <ArrowLink to="/docs/use-cases/finance" label="Finance" />
                <ArrowLink to="/docs/use-cases/identity" label="Identity" />
                <ArrowLink to="/docs/use-cases/" label="More use cases" />
              </div>
            </div>
            <div className={styles.quickLinkCard}>
              <p className={styles.quickLinkTitle}>Developer Tools</p>
              <div className={styles.quickLinkList}>
                <ArrowLink to="/docs/co-circom/" label="coCircom" />
                <ArrowLink to="/docs/co-noir/" label="coNoir" />
              </div>
            </div>
            <div className={styles.quickLinkCard}>
              <p className={styles.quickLinkTitle}>Get In Touch</p>
              <div className={styles.quickLinkList}>
                <ArrowLink
                  to="https://taceo.io/discord"
                  label="Join Discord"
                />
                <ArrowLink
                  to="mailto:hello@taceo.io"
                  label="Email the team"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Looking for something else?</h2>
          <div className={styles.ctaLinks}>
            <ArrowLink to="https://taceo.io" label="Visit Website" />
            <ArrowLink to="https://core.taceo.io" label="Read our News" />
            <ArrowLink to="https://taceo.io/discord" label="Ask Questions" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Private onchain finance, integrable privacy services, and the TACEO Network underneath"
      wrapperClassName="homepage-layout"
    >
      <main>
        <GuidanceSection />
      </main>
    </Layout>
  );
}
