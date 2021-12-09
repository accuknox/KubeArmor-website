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
      <div className="container mx-auto pt-10 text-center text-white">
        <p style={{ fontSize: '20px', lineHeight: '40px' }}>
          KubeArmor is licensed under the Apache License, Version 2.0.
          <br />
          The eBPF-based container monitor is licensed under the General Public License, Version
          2.0.
        </p>
        <hr className="mt-4" style={{ background: '#718096' }} />
      </div>

      <div className="container pt-4 pb-3" style={{ color: '#718096' }}>
        <span className="px-0 row">
          <p className="mx-0 px-0 col-10 text-white" style={{ opacity: '0.5' }}>
            © 2021 The KubeArmor Authors All Rights Reserved
          </p>
          <span className="col-2" style={{ float: 'right' }}>
            <a href="https://www.linkedin.com/company/kubearmor" target="_blank">
              <Img
                fluid={query.github.childImageSharp.fluid}
                alt="Logo"
                className=""
                style={{ height: '25px', width: '25px', float: 'right' }}
              />
            </a>
            <a href="https://github.com//kubearmor//KubeArmor" target="_blank">
              <Img
                fluid={query.linkdin.childImageSharp.fluid}
                alt="Logo"
                className="mr-3"
                style={{ height: '25px', width: '25px', float: 'right' }}
              />
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
