import React from "react";
import styles from "./styles.module.css";
import membershipLogo1 from "../../../static/img/os-membership/membership-cncf.png";
import membershipLogo2 from "../../../static/img/os-membership/membership-lf.png";
import membershipLogo3 from "../../../static/img/os-membership/membership-nephio.png";
import membershipLogo4 from "../../../static/img/os-membership/membership-openssf.png";
import membershipLogo5 from "../../../static/img/os-membership/membership-nsf.png";
import membershipLogo6 from "../../../static/img/os-membership/membership-se.png";
import Link from "@docusaurus/Link";

export default function HomepageMembership() {
  return (
    <section className={`Section membership ${styles.membership}`}>
      <div className={`container-medium`}>
        <div className={`centerSectionHeading`}>
          <h1>Open Source Membership</h1>
        </div>
        <div className={styles.members}>
          <Link to="https://www.cncf.io/">
            <img
              className={styles.member}
              src={membershipLogo1}
              alt="member logo"
            />
          </Link>
          <Link to="https://lfx.linuxfoundation.org/">
            <img
              className={styles.member}
              src={membershipLogo2}
              alt="member logo"
            />
          </Link>
          <Link to="https://nephio.org/">
            <img
              className={styles.member}
              src={membershipLogo3}
              alt="member logo"
            />
          </Link>
          <Link to="https://openssf.org/">
            <img
              className={styles.member}
              src={membershipLogo4}
              alt="member logo"
            />
          </Link>
          <Link to="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2226443&HistoricalAwards=false">
            <img
              className={styles.member}
              src={membershipLogo5}
              alt="member logo"
            />
          </Link>
          <Link to="https://www.5gsec.com/">
            <img
              className={styles.member}
              src={membershipLogo6}
              alt="member logo"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
