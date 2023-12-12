import React from "react";
import styles from "./styles.module.css";
import Button from "../Button";
import RedirectButton from "../RedirectButton";

export default function HomepageSupport() {
  return (
    <section className={`Section support ${styles.support}`}>
      <div className={`container`}>
        <div className={` ${styles.supportImage}`}>
          <div className={styles.supportText}>
            <h1 className={styles.supportHeader}>
              Effortless and Efficient Runtime Security in Minutes
            </h1>
            <p className={styles.supportDescription}>
              KubeArmor supports public and private Kubernetes deployments
            </p>
          </div>
          <div className={styles.supportCTA}>
            <RedirectButton
              redirectColor="var(--color-white)"
              redirectLink="https://killercoda.com/kubearmor/scenario/kubearmor-killercoda"
              redirectText="Learn KubeArmor Basics"
              className={styles.supportRedirect}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
