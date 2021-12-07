import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const Footer = () => {
  const query = useStaticQuery(graphql`
    query {
      linkdin: file(relativePath: { eq: "Header/linkdin.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      github: file(relativePath: { eq: "Header/github.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <footer style={{ background: '#082D75' }}>
      <div className="container mx-auto pt-10 pb-2 text-center text-white">
        <p style={{ fontSize: '20px', lineHeight: '40px' }}>
          KubeArmor is licensed under the Apache License, Version 2.0.
          <br />
          The eBPF-based container monitor is licensed under the General Public License, Version
          2.0.
        </p>
      </div>
      <div className="container mx-auto text-white">
        <hr style={{ background: '#365F9E' }} />
        <div className="row">
          <p className="col-10" style={{ fontSize: '19px' }}>
            © 2021 The KubeArmor Authors All Rights Reserved
          </p>
          <a
            href="https://www.linkedin.com/company/kubearmor"
            target="_blank"
            className="col-1"
            style={{ maxWidth: '5.33%' }}
          >
            <Img fluid={query.linkdin.childImageSharp.fluid} className="Coverbutton " />
          </a>
          <a href="https://github.com//kubearmor//KubeArmor" target="_blank" className="col-1">
            <Img fluid={query.github.childImageSharp.fluid} className="Coverbutton" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
