import React from "react";
import styles from "./styles.module.css";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
 
export function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button className={`custom-prev-arrow ${styles.prevArrow}`} onClick={onClick}>
        <FaAngleLeft color="var(--color-primary)" size={24}/>
      </button>
    );
}
export function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button className={`custom-next-arrow ${styles.nextArrow}`} onClick={onClick}>
      <FaAngleRight color="var(--color-primary)" size={24} />
    </button>
  );
}