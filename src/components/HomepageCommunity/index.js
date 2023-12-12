import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Card from "./Card";
import { FaStar } from "react-icons/fa6";
import communityLogo1 from "../../../static/img/community/community-github.webp";
import communityLogo2 from "../../../static/img/community/community-slack.webp";
import communityLogo3 from "../../../static/img/community/community-youtube.webp";

export default function HomepageCommunity() {
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
    <section className={`Section community ${styles.community}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h2>COMMUNITY</h2>
          <h1>Join Our Awesome Community</h1>
        </div>
        <div className={`section-margin ${styles.communityCards}`}>
          <Card
            cardLink="https://github.com/kubearmor/KubeArmor"
            cardData={
              <>
                <FaStar color="var(--color-font-sub)" size={20} /> {stars}
              </>
            }
            cardTitle="GitHub"
            cardIcon={communityLogo1}
          />
          <Card
            cardLink="https://join.slack.com/t/kubearmor/shared_invite/zt-1ltmqdbc6-rSHw~LM6MesZZasmP2hAcA/"
            cardData="600+ Members"
            cardTitle="Slack Channel"
            cardIcon={communityLogo2}
          />
          <Card
            cardLink="https://www.youtube.com/watch?v=2OK3e87b5jA&list=PLQjomRVn7MXC4obhiz1wuKLrGGip07HiM"
            cardData="250+ Subscribers"
            cardTitle="YouTube Channel"
            cardIcon={communityLogo3}
          />
        </div>
      </div>
    </section>
  );
}
