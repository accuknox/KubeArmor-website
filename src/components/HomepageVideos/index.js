import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import { CustomPrevArrow, CustomNextArrow } from "../CustomArrows";
import { FaPlay } from "react-icons/fa6";
import { videos } from "./videos";
import videoContent from "./content.json";
import Link from "@docusaurus/Link";

function Item(props) {
  const Image = props.image;

  const truncatedTitle =
    props.title.length > 36
      ? props.title.substring(0, 36) + "..." // Truncate the title
      : props.title;

  return (
    <Link className={styles.container} to={props.video}>
      <div className={styles.containerContent}>
        <FaPlay
          color="var(--color-white)"
          size={20}
          className={styles.containerIcon}
        />
        <p className={styles.containerTitle}>{truncatedTitle}</p>
      </div>
      {Image && (
        <img src={Image} alt={props.alt} className={styles.containerImage} />
      )}
    </Link>
  );
}

export default function HomepageVideos() {
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
    <section className={`Section videos ${styles.videos}`}>
      <div className={`container`}>
        <div className={`centerSectionHeading`}>
          <h2>FIRESIDE CHAT</h2>
          <h1>
            Securing Kubernetes Clusters Effectively
          </h1>
        </div>
        <div className={`section-margin ${styles.videosSlider}`}>
          <Slider {...settings}>
            {videoContent.map((item) => (
              <Item
                key={item.id}
                title={item.title}
                alt={item.alt}
                video={item.video}
                image={videos[item.image]}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
