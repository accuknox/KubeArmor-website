import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHeader from "@site/src/components/HomepageHeader";

import styles from "./index.module.css";
import HomepageArchitecture from "../components/HomepageArchitecture";
import HomepageInstallation from "../components/HomepageInstallation";
import HomepageUseCases from "../components/HomepageUseCases";
import HomepageMarketplaces from "../components/HomepageMarketplaces";
import HomepageExpansions from "../components/HomepageExpansions";
import HomepageVersionChangelog from "../components/HomepageVersionChangelog";
import HomepageBlogs from "../components/HomepageBlogs";
import HomepageVideos from "../components/HomepageVideos";
import HomepageTestimonials from "../components/HomepageTestimonials";
import HomepageAdopters from "../components/HomepageAdopters";
import HomepageCommunity from "../components/HomepageCommunity";
import HomepageMembership from "../components/HomepageMembership";
import HomepageSupport from "../components/HomepageSupport";
import HomepageContributors from "../components/HomepageContributors";
import HomepageSandbox from "../components/HomepageSandbox";

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Runtime Security Enforcement `}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageArchitecture />
        <HomepageFeatures />
        <HomepageInstallation />
        <HomepageUseCases />
        <HomepageMarketplaces />
        <HomepageVersionChangelog />
        <HomepageExpansions />
        <HomepageBlogs />
        <HomepageVideos />
        <HomepageTestimonials />
        <HomepageAdopters />
        <HomepageCommunity />
        <HomepageMembership />
        <HomepageContributors />
        <HomepageSandbox />
        <HomepageSupport />
      </main>
    </Layout>
  );
}
