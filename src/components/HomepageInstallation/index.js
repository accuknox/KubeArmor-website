import React from "react";
import styles from "./styles.module.css";
import installationImage from "../../../static/img/installation/Installation-illustration.webp";
import { FaCirclePlay, FaRegCopy } from "react-icons/fa6";
import RedirectButton from "../RedirectButton";
import Link from "@docusaurus/Link";

export default function HomepageInstallation() {
  const videoId = "CH0qtp5DAhs";
  const code = `
helm repo add kubearmor https://kubearmor.github.io/charts

helm repo update kubearmor

helm upgrade --install kubearmor-operator kubearmor/kubearmor-operator -n kubearmor --create-namespace

kubectl apply -f https://raw.githubusercontent.com/kubearmor/KubeArmor/main/pkg/KubeArmorOperator/config/samples/sample-config.yml 
    `;

  function copyToClipboard() {
    if (!navigator.clipboard) {
      return;
    }
    const clipboardItem = new ClipboardItem({
      "text/plain": new Blob([code], { type: "text/plain" }),
    });
    navigator.clipboard.write([clipboardItem]);
  }

  const handleClick = () => {
    copyToClipboard(code);
    window.alert("Code Copied Successfully!");
  };
  return (
    <section className={`Section installation ${styles.installation}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h2>INSTALLATION</h2>
          <h1> How to Install KubeArmor?</h1>
        </div>
        <div className={`section-margin ${styles.installationContainer}`}>
          <div className={styles.guide}>
            <h4 className={styles.guideTitle}>
              Boost your security with KubeArmor in simple steps
            </h4>
            <p className={styles.guideText}>
              Download and install KubeArmor via helm chart{" "}
            </p>
            <div className={styles.codeContainer}>
              <FaRegCopy
                className={styles.codeCopy}
                size={20}
                onClick={handleClick}
              />
              <pre id="code-block" className={styles.codeBlock}>
                <code className={styles.code}>{code}</code>
              </pre>
            </div>
            <p className={styles.guideText}>
              For configuration options and further information
            </p>
            <RedirectButton
              redirectColor="var(--color-primary)"
              redirectText="Read Documentation"
              redirectLink="https://docs.kubearmor.io/kubearmor/quick-links/deployment_guide"
            />
          </div>
          <div className={styles.showcase}>
            <img
              className={styles.installationImage}
              src={installationImage}
              alt="installation image"
            />
            <Link
              className={styles.installationVideo}
              to={`https://www.youtube.com/embed/${videoId}`}
            >
              <FaCirclePlay className={styles.playIcon} size={32} />
              Watch Installation Video
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
