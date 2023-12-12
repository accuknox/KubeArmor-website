import React from "react";
import styles from "./styles.module.css";
import MarketplaceImage from "../../../static/img/marketplace/marketplace-aws.svg";
import RedirectButton from "../RedirectButton";

export default function HomepageMarketplaceImages() {
  return (
    <section className={`Section marketplaceImages ${styles.market}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h1>KubeArmor is Now Available on</h1>
        </div>
        {/* <p className={styles.marketText}>KubeArmor is Now Available on</p> */}
        <div className={styles.marketImage}>
          <MarketplaceImage/>
          <RedirectButton
            redirectColor="var(--color-primary)"
            redirectText="Install Now"
            redirectLink="https://aws.amazon.com/marketplace/pp/prodview-5npox4ixz64qk"
          />
        </div>
      </div>
    </section>
  );
}
