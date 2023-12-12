import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function Card ({
    cardTitle,
    cardIcon,
    cardData,
    cardLink
}) {
    return (
      <Link to={cardLink} className={styles.card}>
        <div className={styles.cardHeader}>
          <img
            className={styles.cardIcon}
            src={cardIcon}
            alt="Community Card"
          />
          <div className={styles.cardData}>{cardData}</div>
        </div>
        {cardTitle}
      </Link>
    );
}