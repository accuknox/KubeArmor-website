import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { CustomPrevArrow, CustomNextArrow } from "../CustomArrows";
import blogsImage1 from "../../../static/img/blogs/blogs-c1.webp";
import blogsImage2 from "../../../static/img/blogs/blogs-c2.webp";
import blogsImage3 from "../../../static/img/blogs/blogs-c3.webp";
import blogsImage4 from "../../../static/img/blogs/blogs-c4.webp";
import Link from "@docusaurus/Link";

export default function HomepageBlogs() {
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
    <section className={`Section blogs ${styles.blogs}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h2>BLOGS</h2>
          <h1>Open Source Solutions for Kubernetes Security</h1>
        </div>
        <div className={`section-margin ${styles.blogsSlider}`}>
        {/* <div className={styles.blogsSlider}> */}
          <Slider {...settings}>
            <Link
              to="https://github.com/kubearmor/KubeArmor/wiki/v0.11-Release-Blog"
              className={styles.container}
            >
              <div className={styles.containerWrapper}>
                <img
                  src={blogsImage1}
                  alt="blogs image 1"
                  className={styles.containerImage}
                />
              </div>
              <div className={styles.containerContent}>
                <div className={styles.containerMain}>
                  <p className={styles.containerTags}>Release</p>
                  <h4 className={styles.containerTitle}>
                    KubeArmor v0.11 Release
                  </h4>
                </div>
                <div className={styles.containerData}>
                  <p className={styles.containerAuthor}>
                    by <span className={styles.author}>Prashant Mishra</span>
                  </p>
                  <p className={styles.containerDate}>Aug 17, 2023</p>
                </div>
              </div>
            </Link>
            <Link
              to="https://github.com/kubearmor/KubeArmor/wiki/KubeArmor-support-for-Oracle-Container-Engine-for-Kubernetes-(OKE)"
              className={styles.container}
            >
              <div className={styles.containerWrapper}>
                <img
                  src={blogsImage2}
                  alt="blogs image 2"
                  className={styles.containerImage}
                />
              </div>
              <div className={styles.containerContent}>
                <div className={styles.containerMain}>
                  <p className={styles.containerTags}>Container</p>
                  <h4 className={styles.containerTitle}>
                    KubeArmor support for Oracle Container Engine for Kubernetes
                    (OKE)
                  </h4>
                </div>
                <div className={styles.containerData}>
                  <p className={styles.containerAuthor}>
                    by <span className={styles.author}>Rahul Jadav</span>
                  </p>
                  <p className={styles.containerDate}>Feb 11, 2023</p>
                </div>
              </div>
            </Link>
            <Link
              to="https://github.com/kubearmor/KubeArmor/wiki/Introduction-to-Linux-Security-Modules-(LSMs)"
              className={styles.container}
            >
              <div className={styles.containerWrapper}>
                <img
                  src={blogsImage3}
                  alt="blogs image 3"
                  className={styles.containerImage}
                />
              </div>
              <div className={styles.containerContent}>
                <div className={styles.containerMain}>
                  <p className={styles.containerTags}>Security</p>
                  <h4 className={styles.containerTitle}>
                    Introduction to Linux Security Modules (LSMs)
                  </h4>
                </div>
                <div className={styles.containerData}>
                  <p className={styles.containerAuthor}>
                    by <span className={styles.author}>Barun Acharya</span>
                  </p>
                  <p className={styles.containerDate}>June 23, 2023</p>
                </div>
              </div>
            </Link>
            <Link
              to="https://github.com/kubearmor/KubeArmor/wiki/KubeArmor-Performance-Benchmarking-Data"
              className={styles.container}
            >
              <div className={styles.containerWrapper}>
                <img
                  src={blogsImage4}
                  alt="blogs image 4"
                  className={styles.containerImage}
                />
              </div>
              <div className={styles.containerContent}>
                <div className={styles.containerMain}>
                  <p className={styles.containerTags}>LSM</p>
                  <h4 className={styles.containerTitle}>
                    KubeArmor Performance Benchmarking Data
                  </h4>
                </div>
                <div className={styles.containerData}>
                  <p className={styles.containerAuthor}>
                    by <span className={styles.author}>Rudraksh Pareek</span>
                  </p>
                  <p className={styles.containerDate}>Mar 13, 2023</p>
                </div>
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    </section>
  );
}
