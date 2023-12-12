import React from "react";
import styles from "./styles.module.css";
import useCasesContent from "./content.json";
import { icons } from "./icons";
import Link from "@docusaurus/Link";

function Item(props) {
  const Icon = props.icon;

  return (
    <Link to={props.link} className={styles.container}>
      <div className={styles.iconContainer}>
        {Icon && <Icon className={styles.icon} />}
      </div>
      <div className={styles.text}>
        <h4 className={styles.contentHeader}>{props.header}</h4>
        <p className={styles.contentDescription}>{props.description}</p>
      </div>
    </Link>
  );
}

export default function HomepageUseCases() {
  return (
    <section className={`Section use-cases ${styles.useCases}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h2>USE CASES</h2>
          <h1>Monitor and Enforce Policies To Prevent Sophisticated Attacks</h1>
        </div>
        <div className={`section-margin ${styles.useCasesContainer}`}>
          {useCasesContent.map((item) => (
            <Item
              key={item.id}
              header={item.header}
              description={item.description}
              icon={icons[item.icon]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
