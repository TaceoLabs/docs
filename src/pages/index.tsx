import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function NetworkTools() {
  const tools = [
    {
      title: "CoSNARKs<br/>for Circom and Noir",
      status: "Status: coCircom feature complete, coNoir in active development",
      description: "Developer tooling to run circom and Noir circuits in an MPC environment.",
      link: "/docs/overview",
      linkText: "Get started",
      highlight: true,
    },
    {
      title: "TACEO:Proof<br/>Private Proof Network", 
      status: "Status: Live in production and ready for use",
      description: "CoSNARK network to outsource proof generation while maintaining privacy.",
      link: "/docs/taceo-proof/overview",
      linkText: "Learn more",
      highlight: true,
    },
    {
      title: "TACEO:OPRF<br/>Oblivious Pseudorandom Function",
      status: "Status: In beta",
      description: "Privacy-preserving pseudorandom function for nullifiers and more.",
      link: "/docs/taceo-oprf/overview",
      linkText: "Explore",
      highlight: true,
    },
  ];

  return (
    <section className={styles.network}>
      <div className="container">
        <h3 className={styles.networkTitle}>
          Documentation & Tools
        </h3>
        <p className={styles.networkDescription}>
          We're building an encrypted compute layer for private shared state via the TACEO Network.<br/>
          Here you'll find documentation pertaining to the tools and services currently available.
        </p>

        <div className={styles.networkGrid}>
          {tools.map((tool, idx) => (
            <div className={styles.networkCard} key={tool.title}>
              <div className={styles.networkCardInner}>
                <div className={styles.networkIcon}>
                  <div className={styles.networkIconBar}></div>
                </div>
                <div className={styles.networkContent}>
                  <h3 
                    className={styles.networkCardTitle}
                    dangerouslySetInnerHTML={{ __html: tool.title }}
                  />
                  <div className={styles.networkStatus}>
                    {tool.status}
                  </div>
                  <div className={styles.networkCardDescription}>
                    {tool.description}
                  </div>
                  <div className={styles.networkLinkWrapper}>
                    <Link 
                      className={styles.networkLink}
                      to={tool.link}
                    >
                      {tool.linkText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Privacy-preserving computation with collaborative SNARKs and secure multi-party computation"
      wrapperClassName="homepage-layout">
      <main>
        <NetworkTools />
      </main>
    </Layout>
  );
}
