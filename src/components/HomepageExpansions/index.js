import React from "react";
import styles from "./styles.module.css";
import Icon5g from "../../../static/img/expansions/expansions-5g.svg";
import IconIot from "../../../static/img/expansions/expansions-iot.svg";
import RedirectButton from "../RedirectButton";

export default function HomepageExpansions() {
  return (
    <section className={`Section expansions ${styles.expansions}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h2>EXPANSIONS</h2>
          <h1>What&apos;s new?</h1>
        </div>
        <div className={`section-margin ${styles.expansionsContent}`}>
          <div className={styles.container}>
            <IconIot className={styles.containerIcon} />
            <div className={styles.containerText}>
              <h4 className={styles.containerHeader}>IoT/Edge Security</h4>
              <p className={styles.containerDescription}>
                KubeArmor provides the ability to restrict specific behavior of
                process executions, file accesses, networking operations, and
                resource utilization inside of your workload level.
              </p>
            </div>
            <RedirectButton
              redirectColor="var(--color-primary)"
              redirectText="Learn More"
              redirectLink="https://open-horizon.github.io/docs/kubearmor-integration/docs/README/"
            />
          </div>
          <div className={styles.container}>
            <Icon5g className={styles.containerIcon} />
            <div className={styles.containerText}>
              <h4 className={styles.containerHeader}>
                5G Control Plane Security
              </h4>
              <p className={styles.containerDescription}>
                KubeArmor directly enforces security policies using Linux
                Security Modules (LSMs) for each workload based on the
                identities (e.g., labels) of given containers or workloads.
              </p>
            </div>
            <RedirectButton
              redirectColor="var(--color-primary)"
              redirectText="Learn More"
              redirectLink="https://nephio.org/publications/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
