import React from "react";
import styles from "./styles.module.css";
import architectureImage from "../../../static/img/architecture/architecture-diagram.webp";

export default function HomepageArchitecture() {
  return (
    <section className={`Section architecture ${styles.architecture}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h2>ARCHITECTURE</h2>
          <h1>First K8s Security Engine to Leverage BPF-LSM</h1>
          <p>
            KubeArmor is a runtime Kubernetes security engine. It uses eBPF and
            Linux Security Modules(LSM) for fortifying workloads based on Cloud
            Containers, IoT/Edge, and 5G networks. It enforces policy-based
            controls.
          </p>
        </div>
        <img
          className={styles.architectureImage}
          aria-label="architecture image"
          src={architectureImage}
          alt="architecture image"
        />
      </div>
    </section>
  );
}
