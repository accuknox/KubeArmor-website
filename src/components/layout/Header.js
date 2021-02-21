import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Header = () => {
  const query = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Header/Group.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <header className="top-0 ">
      {/* bg-white sticky  */}
      <div className="flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            {/* <LogoIcon /> */}
            <Img
              fluid={query.logo.childImageSharp.fluid}
              alt="Logo"
              style={{
                width: '40px',
                border: '5px solid #56CCF2',
                background: '#56CCF2',
                borderRadius: '50%'
              }}
            />
          </div>
          <b>KubeArmor</b>
        </div>
        <div className="flex mt-4 sm:mt-0">
          <AnchorLink className="px-4" href="#features">
            <Button size="sm"> Enterprise</Button>
          </AnchorLink>
          <AnchorLink className="px-4 mt-2" href="#services">
            Blog
          </AnchorLink>

          {/* <AnchorLink className="px-4 mt-2" href="https://kubearmor.herokuapp.com/">
            Slack
          </AnchorLink> */}
          <a className="px-4 mt-2" href="https://kubearmor.herokuapp.com/" target="_blank">
            Slack
          </a>

          <AnchorLink className="px-4 mt-2" href="">
            Documentation
          </AnchorLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
