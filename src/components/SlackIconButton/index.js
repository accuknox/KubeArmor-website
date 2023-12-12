import Link from "@docusaurus/Link";
import React from "react";
import {FaSlack} from "react-icons/fa6";
import styles from "./styles.module.css";

export default function SlackIconButton () {
    return (
      <Link
        className={`slack-icon-button ${styles.button}`}
        to="https://join.slack.com/t/kubearmor/shared_invite/zt-1ltmqdbc6-rSHw~LM6MesZZasmP2hAcA/"
      >
        <FaSlack color="var(--color-white)" />
        Join Slack
      </Link>
    );
}