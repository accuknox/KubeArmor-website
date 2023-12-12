import React from "react";
import Link from "@docusaurus/Link";
import { FaAngleRight } from "react-icons/fa6";
import styles from "./styles.module.css";

export default function RedirectButton({
  redirectColor,
  redirectText,
  redirectLink,
}) {
  return (
    <Link
      className={`redirect-button ${styles.button}`}
      style={{ color: `${redirectColor}` }}
      to={redirectLink}
    >
      {redirectText}
      <FaAngleRight color={redirectColor} />
    </Link>
  );
}
