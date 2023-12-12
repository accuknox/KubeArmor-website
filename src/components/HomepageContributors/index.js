import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import RedirectButton from "../RedirectButton";
import Link from "@docusaurus/Link";

export default function HomepageContributors() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/kubearmor/KubeArmor/contributors`)
      .then((response) => {
        const topContributors = response.data.slice(0, 27);
        setContributors(topContributors);
      })
      .catch((error) => {
        console.error("Error fetching contributors:", error);
      });
  }, []);

  return (
    <section className={`Section contributors ${styles.contributors}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h2>CONTRIBUTORS</h2>
          <h1>
            Shout Out to KubeArmor Contributors
          </h1>
        </div>
        <div className={styles.container}>
          {contributors.map((contributor) => (
            <Link
              key={contributor.id}
              className={styles.containerImage}
              to={contributor.html_url}
            >
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className={styles.image}
              />
            </Link>
          ))}
        </div>
        <div className={styles.contributorsButton}>
          <RedirectButton
            redirectColor="var(--color-primary)"
            redirectLink="https://github.com/kubearmor/KubeArmor/graphs/contributors"
            redirectText="View More"
          />
        </div>
      </div>
    </section>
  );
}
