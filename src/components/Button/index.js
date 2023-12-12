import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function Button({
  bgColor,
  textColor,
  buttonText,
  buttonLink
}) {
  const style = {
    color: textColor,
    background: bgColor,
  };
  return (
    <Link className={`button ${styles.button}`} to={buttonLink} style={style}>
      {buttonText}
    </Link>
  );
}
