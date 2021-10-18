import React from 'react';
// import Img from 'gatsby-image';
// import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  // const query = useStaticQuery(graphql`
  //   query {
  //     youtube: file(relativePath: { eq: "Footer/Youtube.png" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //     twitter: file(relativePath: { eq: "Footer/Twitter.png" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //     linkedin: file(relativePath: { eq: "Footer/Linkedin.png" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //     facebook: file(relativePath: { eq: "Footer/Facebook.png" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <footer style={{ background: '#082D75' }}>
      <div className="container mx-auto py-16 px-3 text-center text-white">
        <p className="font-weight-bold" style={{ fontSize: '20px', lineHeight: '40px' }}>
          KubeArmor is licensed under the Apache License, Version 2.0.
          <br />
          The eBPF-based container monitor is licensed under the General Public License, Version
          2.0.
        </p>
        {/* <div className="flex -mx-3 text-white">
          <div className="flex-1 text-white">
            <h2 className="text-lg font-semibold">Platform</h2>
            <ul className="mt-2 leading-loose text-white">
              <li>
                <a href="" className="text-sm text-white">
                  Overview
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Integrations
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Mobile apps
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-lg font-semibold">Solutions</h2>
            <ul className="mt-2 leading-loose">
              <li>
                <a href="" className="text-sm text-white">
                  By training
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  By industry
                </a>
              </li>{' '}
              <li>
                <a href="" className="text-sm text-white">
                  TalentLibrary
                </a>
              </li>{' '}
              <li>
                <a href="" className="text-sm text-white">
                  Course providers
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 ">
            <h2 className="text-lg font-semibold">Learn</h2>
            <ul className="mt-2 leading-loose">
              <li>
                <a href="" className="text-sm text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  eBooks
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Blended learning
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  What is an LMS?
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Best LMS
                </a>
              </li>
            </ul>
          </div>{' '}
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Help</h2>
            <ul className="mt-2 leading-loose">
              <li>
                <a href="" className="text-sm text-white">
                  Help center
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Security
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>{' '}
          <div className="flex-1 ">
            <h2 className="text-lg font-semibold">Company</h2>
            <ul className="mt-2 leading-loose">
              <li>
                <a href="" className="text-sm text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Our customers
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Customer success
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-white">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center justify-between items-center">
          <p className="text-white">© Epignosis</p>
          <div className="footerlogocollection">
            <div>
              <Img
                fluid={query.youtube.childImageSharp.fluid}
                alt="Youtube"
                className="footersociallogo"
              />
            </div>
            <div>
              <Img
                fluid={query.twitter.childImageSharp.fluid}
                alt="Youtube"
                className="footersociallogo"
              />
            </div>
            <div>
              <Img
                fluid={query.linkedin.childImageSharp.fluid}
                alt="Youtube"
                className="footersociallogo"
              />
            </div>
            <div>
              <Img
                fluid={query.facebook.childImageSharp.fluid}
                alt="Youtube"
                className="footersociallogo"
              />
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
