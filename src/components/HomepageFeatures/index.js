import React, { useState, useLayoutEffect, useRef, useMemo } from "react";
import styles from "./styles.module.css";
import featuresImage from "../../../static/img/features/features-illustration.webp";
import CreatorLogo from "../../../static/img/accuknox/accuknox-light-bg.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import featuresContent from "./content.json";
import { icons } from "./icons";
import Link from "@docusaurus/Link";

gsap.registerPlugin(ScrollTrigger);

function Item(props) {
  const Icon = props.icon;

  return (
    <div className={styles.content}>
      <div className={styles.contentTop}>
        <div className={styles.iconContainer}>
          {Icon && <Icon className={styles.icon} />}
        </div>
        <h3 className={styles.contentHeader}>{props.feature}</h3>
      </div>
      <div className={styles.contentWrapper}>
        {/* <h3 className={styles.contentHeader}>{props.feature}</h3> */}
        <p className={styles.contentDescription}>{props.description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const featuresRef = useRef(null);

  useLayoutEffect(() => {
    const featuresEl = featuresRef.current;
    const featuresImage = featuresEl.querySelector("features-image");
    const featuresContentEl = featuresEl.querySelector("features-content");
    // Pin the featuresImage element
    gsap.to(featuresImage, {
      position: "fixed",
      top: "50%",
      right: 0,
    });

    gsap.to(featuresContentEl, {
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: featuresEl,
        start: "top",
        end: "+100vh",
      },
    });

    // Animate the opacity of content elements on scroll
    featuresContent.forEach((item, index) => {
      const contentEl = featuresEl.querySelector(`#content-${item.id}`);
      gsap.to(contentEl, {
        opacity: 0,
        transform: "translate3d(100%, 0, 0)",
        scrollTrigger: {
          trigger: featuresEl,
          start: `top ${index * window.innerHeight}px`,
          end: `top ${(index + 1) * window.innerHeight}px`,
          // opacity: 1,
          transform: "translate3d(0, 0, 0)",
          ease: "power1inOut",
        },
      });
    });
  }, []);

  return (
    <section className={`Section features ${styles.features}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h2>FEATURES</h2>
          <h1>What Makes KubeArmor Unique?</h1>
        </div>
        <div className={`section-margin features-container ${styles.container} `}>
          {/* <div className={`features-progress-bar ${styles.progressBar}`}>0%</div> */}
          <div
            className={`features-content ${styles.containerContent}`}
            ref={featuresRef}
            id="features-content"
          >
            {featuresContent.map((item) => (
              <Item
                key={item.id}
                id={`content-${item.id}`}
                feature={item.feature}
                description={item.description}
                icon={icons[item.icon]}
              />
            ))}
          </div>
          <img
            src={featuresImage}
            className={styles.featuresImage}
            alt="feature image"
            id="features-image"
          />
        </div>
        <div className={styles.creator}>
          Created By
          <Link
            to="https://www.accuknox.com/"
            className={styles.creatorContainer}
          >
            <CreatorLogo className={styles.creatorLogo} />
          </Link>
        </div>
      </div>
    </section>
  );
}
