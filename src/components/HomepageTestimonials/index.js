import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { FaXTwitter } from "react-icons/fa6";
import { images } from "./images";
import tweetContent from "./content.json";

function Item(props) {
  const Image = props.image;
  return (
    <Link className={styles.container} to={props.url}>
      <div className={styles.containerHeader}>
        <div className={styles.containerUser}>
          <div className={styles.containerImage}>
            {Image && <img src={Image} alt="tweet" className={styles.image} />}
          </div>
          <h4 className={styles.containerTitle}>{props.header}</h4>
        </div>
        <FaXTwitter size={20} color="var(--color-black)" />
      </div>
      <p className={styles.containerDescription}>{props.description}</p>
    </Link>
  );
}

export default function HomepageTestimonials() {
  return (
    <section className={`Section testimonials ${styles.testimonials}`}>
      <div className={`container-medium`}>
        <div className={`centerSectionHeading`}>
          <h2>TESTIMONIALS</h2>
          <h1>
            Developers Love Using KubeArmor
          </h1>
        </div>
        <div className={`section-margin ${styles.tweets}`}>
          {tweetContent.map((item) => (
            <Item
              key={item.id}
              header={item.header}
              description={item.description}
              url={item.url}
              image={images[item.image]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
