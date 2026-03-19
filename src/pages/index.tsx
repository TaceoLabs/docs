import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function GuidanceSection() {
  return (
    <section className={styles.page}>
      <div className="container">
        {/* ── Hero ── */}
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>TACEO Network</h1>
          <p className={styles.heroSubtitle}>
            Private execution layer for digital rails.
          </p>
          <p className={styles.heroTagline}>
            The TACEO Network and services enable computation over sensitive
            data without exposing inputs.
          </p>
          <div className={styles.heroLinks}>
            <Link className={styles.heroLink} to="/docs">
              Browse Documentation
            </Link>
          </div>
        </div>

        {/* ── Journey cards ── */}
        <h2 className={styles.sectionTitle}>What do you want to accomplish?</h2>

        <div className={styles.journeyGrid}>
          <div className={styles.journeyCard}>
            <div>
              <div className={styles.journeyStatus}>Learn the fundamentals</div>
              <h4 className={styles.journeyCardTitle}>
                I want to understand TACEO Network
              </h4>
              <p className={styles.journeyCardDesc}>
                Understand how distributed privacy-preserving computation works
                and why it matters.
              </p>
            </div>
            <Link className={styles.networkLink} to="/docs/taceo-network/">
              Explore Network
            </Link>
          </div>

          <div className={styles.journeyCard}>
            <div>
              <div className={styles.journeyStatus}>
                Production ready services
              </div>
              <h4 className={styles.journeyCardTitle}>
                I want to add privacy services to my app
              </h4>
              <p className={styles.journeyCardDesc}>
                Integrate TACEO:OPRF for privacy-preserving nullifiers or
                TACEO:Proof for private proof delegation.
              </p>
            </div>
            <Link className={styles.networkLink} to="/docs/services/overview">
              Browse Services
            </Link>
          </div>

          <div className={styles.journeyCard}>
            <div>
              <div className={styles.journeyStatus}>Developer tools</div>
              <h4 className={styles.journeyCardTitle}>
                I want to experiment with CoSNARKs
              </h4>
              <p className={styles.journeyCardDesc}>
                Build collaborative zero-knowledge circuits using Co-Circom and
                Co-Noir tooling.
              </p>
            </div>
            <Link className={styles.networkLink} to="/docs/co-circom/">
              Start Building
            </Link>
          </div>
        </div>

        {/* ── Quick Links ── */}
        <div className={styles.quickLinksSection}>
          <h2 className={styles.sectionTitle}>Quick Links</h2>
          <div className={styles.quickLinksGrid}>
            <div className={styles.quickLinkCard}>
              <p className={styles.quickLinkTitle}>New to Privacy Tech?</p>
              <div className={styles.quickLinkList}>
                <Link className={styles.networkLink} to="/docs/resources/mpc">
                  Secure Multiparty Computation
                </Link>
                <Link
                  className={styles.networkLink}
                  to="/docs/primer/collabSNARKs-primer"
                >
                  CoSNARKs Primer
                </Link>
              </div>
            </div>
            <div className={styles.quickLinkCard}>
              <p className={styles.quickLinkTitle}>Real Applications</p>
              <div className={styles.quickLinkList}>
                <Link
                  className={styles.networkLink}
                  to="/docs/use-cases/identity"
                >
                  Identity
                </Link>
                <Link
                  className={styles.networkLink}
                  to="/docs/use-cases/finance"
                >
                  Finance
                </Link>
                <Link className={styles.networkLink} to="/docs/use-cases/">
                  More Use Cases
                </Link>
              </div>
            </div>
            <div className={styles.quickLinkCard}>
              <p className={styles.quickLinkTitle}>Get In Touch</p>
              <div className={styles.quickLinkList}>
                <Link
                  className={styles.networkLink}
                  to="https://taceo.io/discord"
                >
                  Discord
                </Link>
                <Link className={styles.networkLink} to="mailto:hello@taceo.io">
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Looking for something else?</h2>
          <div className={styles.ctaLinks}>
            <Link className={styles.heroLink} to="https://taceo.io">
              Visit Website
            </Link>
            <Link className={styles.heroLink} to="https://core.taceo.io">
              Read our News
            </Link>
            <Link className={styles.heroLink} to="https://taceo.io/discord">
              Ask Questions
            </Link>
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
      description="Privacy-preserving computation with collaborative SNARKs and secure multi-party computation"
      wrapperClassName="homepage-layout"
    >
      <main>
        <GuidanceSection />
      </main>
    </Layout>
  );
}
