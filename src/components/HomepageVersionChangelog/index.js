import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { CustomPrevArrow, CustomNextArrow } from "../CustomArrows";
import versionImage1 from "../../../static/img/version-changelog/version-c1.webp";
import versionImage2 from "../../../static/img/version-changelog/version-c2.webp";
import versionImage3 from "../../../static/img/version-changelog/version-c3.webp";
import versionImage4 from "../../../static/img/version-changelog/version-c4.webp";
import Link from "@docusaurus/Link";

export default function HomepageVersionChangelog() {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={`Section version-changelog ${styles.version}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h2>VERSION CHANGELOG</h2>
          <h1>Exciting Updates and Announcements</h1>
        </div>
        <div className={`section-margin ${styles.versionSlider}`}>
          <Slider {...settings}>
            <Link
              to="https://github.com/kubearmor/KubeArmor/wiki/v1.0.0-Release-Blog"
              className={styles.container}
            >
              <div className={styles.containerWrapper}>
                <img
                  src={versionImage1}
                  alt="version image 1"
                  className={styles.containerImage}
                />
              </div>
              <div className={styles.containerText}>
                <h4 className={styles.containerTitle}>
                  KubeArmor v1.0 Release
                </h4>
                <p className={styles.containerDate}>Nov 6, 2023</p>
              </div>
            </Link>
            <Link
              to="https://github.com/kubearmor/KubeArmor/wiki/v0.11-Release-Blog"
              className={styles.container}
            >
              <div className={styles.containerWrapper}>
                <img
                  src={versionImage2}
                  alt="version image 2"
                  className={styles.containerImage}
                />
              </div>
              <div className={styles.containerText}>
                <h4 className={styles.containerTitle}>
                  KubeArmor v0.11 Release
                </h4>
                <p className={styles.containerDate}>Aug 17, 2023</p>
              </div>
            </Link>
            <Link
              to="https://github.com/kubearmor/KubeArmor/wiki/v0.10-Release-Blog"
              className={styles.container}
            >
              <div className={styles.containerWrapper}>
                <img
                  src={versionImage3}
                  alt="version image 3"
                  className={styles.containerImage}
                />
              </div>
              <div className={styles.containerText}>
                <h4 className={styles.containerTitle}>
                  KubeArmor v0.10 Release
                </h4>
                <p className={styles.containerDate}>Jul 4, 2023</p>
              </div>
            </Link>
            <Link
              to="https://github.com/kubearmor/KubeArmor/wiki/v0.9-Release-Blog"
              className={styles.container}
            >
              <div className={styles.containerWrapper}>
                <img
                  src={versionImage4}
                  alt="version image 4"
                  className={styles.containerImage}
                />
              </div>
              <div className={styles.containerText}>
                <h4 className={styles.containerTitle}>
                  KubeArmor v0.9 Release
                </h4>
                <p className={styles.containerDate}>Mar 9, 2023</p>
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    </section>
  );
}
