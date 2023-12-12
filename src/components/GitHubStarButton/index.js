import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { FaGithub } from "react-icons/fa6";
import Link from "@docusaurus/Link";

export default function GitHubStarButton() {
  const [stars, setStars] = useState(880);
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/kubearmor/KubeArmor`
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };

    fetchStars();
  }, []);

  return (
    <Link
      className={`github-star-button ${styles.button}`}
      to="https://github.com/kubearmor/KubeArmor"
    >
      <FaGithub color="var(--color-black)" />
      <p className={styles.buttonTextLabel}>
        GitHub Stars <span className={styles.buttonSeparator}>| </span>
      </p>
      <p className={styles.buttonText}>{stars}</p>
    </Link>
  );
}
