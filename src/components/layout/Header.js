import React, { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
    <header className="top-0 bg-white">
      {' '}
      <div className="px-8">
        <Navbar bg="white" expand="lg" class="navbar navbar-expand-lg  navbar-light items-center">
          <Navbar.Brand href="#home" style={{ display: 'flex' }}>
            <div className="w-12"></div>
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
            <b style={{ paddingLeft: '10px' }}>KubeArmor</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" class="collapse navbar-collapse">
            <Nav as="ul" className="navbar-nav ml-md-auto">
              <Nav.Link as="li" href="#features" className="nav-item active">
                <a className="nav-link" href="#features">
                  Enterprise
                </a>
              </Nav.Link>
              <Nav.Link as="li" href="#services" className="nav-item ">
                <a className="nav-link" href="#services">
                  Blog
                </a>
              </Nav.Link>
              <Nav.Link
                as="li"
                href="https://kubearmor.herokuapp.com/"
                className="nav-item"
                target="_blank"
              >
                <a className="nav-link" href="https://kubearmor.herokuapp.com/" target="_blank">
                  Slack
                </a>
              </Nav.Link>
              <Nav.Link as="li" href="" className="nav-item">
                <a className="nav-link">Documentation</a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {/* sticky bg-white */}
      {/* <div className="px-8">
        <nav class="navbar navbar-expand-lg  navbar-light items-center">
          <div className="w-12"></div>
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
          <b className="navbar-brand">KubeArmor</b>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-lg-auto">
              <li class="nav-item active">
                <a className="nav-link" href="#features">
                  Enterprise
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="#services">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="https://kubearmor.herokuapp.com/" target="_blank">
                  Slack
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Documentation</a>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
      {/* <div className="flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <LogoIcon />
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
        <div className="flex mt-4 sm:mt-0 px-6">
          <AnchorLink className="px-3" href="#features">
            <Button size="sm"> Enterprise</Button>
          </AnchorLink>
          <AnchorLink className="px-3 mt-2" href="#services">
            Blog
          </AnchorLink>
          <a className="px-3 mt-2" href="https://kubearmor.herokuapp.com/" target="_blank">
            Slack
          </a>
          <AnchorLink className="px-1 mt-2" href="">
            Documentation
          </AnchorLink>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
