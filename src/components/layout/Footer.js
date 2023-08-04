import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
      accuk_logo: file(relativePath: { eq: "Header/accuk_logo.png" }) {
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
      <div className="container mx-auto pt-10  text-white">
        <span className="px-0 row">
          <p className="col-10" style={{ fontSize: '20px', lineHeight: '40px' }}>
            KubeArmor is licensed under the Apache License, Version 2.0.
            <br />
            The eBPF-based container monitor is licensed under the General Public License, Version
            2.0.
          </p>
          <span className="col-2" style={{ float: 'right' }}>
            <a href="https://github.com//kubearmor//KubeArmor" target="_blank" rel="noreferrer">
              <Img fluid={query.github.childImageSharp.fluid} alt="Logo" className="media-icons" />
            </a>
            <a href="https://www.linkedin.com/company/kubearmor" target="_blank" rel="noreferrer">
              <Img
                fluid={query.linkdin.childImageSharp.fluid}
                alt="Logo"
                className="mr-3 media-icons"
              />
            </a>
          </span>
        </span>
        <hr className="mt-2" style={{ background: '#718096' }} />
      </div>

      <div className="container pt-2 pb-3">
        <span className="row">
          <div>
            <p className=" col-12 text-white" style={{ display: 'flex', alignItems: 'center' }}>
              © 2023 The KubeArmor Authors All Rights Reserved
            </p>
            <p className=" col-12 text-white" style={{ display: 'flex', alignItems: 'center' }}>
              Reach us: 7772 Orogrande Pl, Cupertino, California 95014, US | +1 510 579 8785
            </p>
          </div>
          <p
            className="col-6 text-white"
            style={{
              float: 'right',
              display: 'flex',
              alignItems: 'start',
              paddingLeft: '7rem'
            }}
          >
            KubeArmor was created by the team at{' '}
            <a href="https://www.accuknox.com/" target="_blank" rel="noreferrer">
              <Img
                fluid={query.accuk_logo.childImageSharp.fluid}
                alt="Logo"
                className="ml-2"
                style={{ height: '2rem', width: '11rem' }}
              />
            </a>
          </p>
        </span>
      </div>
      <div className="pt-4 pb-4" style={{ background: '#041E45' }}>
        <div className="container" style={{ color: 'white' }}>
          © 2023 The Linux Foundation. All Rights Reserved. The Linux Foundation has registered
          trademarks and uses trademarks. For a list of trademarks of the Linux Foundation, please
          see our{' '}
          <a
            href="https://www.linuxfoundation.org/trademark-usage/"
            target="_blank"
            style={{ color: '#007bff' }}
            rel="noreferrer"
          >
            Trademarks Usage page
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
