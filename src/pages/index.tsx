import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function NetworkTools() {
  const tools = [
    {
      title: "CoSNARKs<br/>for Circom and Noir",
      status: "Status: coCircom feature complete, coNoir in development",
      description: "Developer tooling to run circom and Noir circuits in an MPC environment.",
      link: "/docs/overview",
      linkText: "Get started",
      highlight: true,
    },
    {
      title: "TACEO:Proof<br/>Private Proof Network", 
      status: "Status: Live in Production and ready for use",
      description: "CoSNARK network to outsource proof generation while maintaining privacy.",
      link: "/docs/taceo-proof/overview",
      linkText: "Learn more",
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
          We're building an MPC and coSNARK network for private shared state and proof delegation.<br/>
          Here you'll find documentation pertaining to those.
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
