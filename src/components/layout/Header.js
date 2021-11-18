import React, { useEffect, useState } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  const [count, setCount] = useState(0);
  const query = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Header/Newlogo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      button: file(relativePath: { eq: "Header/Vector.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <header className="top-0">
      <div className="px-3 container">
        <Navbar expand="lg" className="navbar navbar-expand-lg  navbar-light items-center">
          <Navbar.Brand href="/" style={{ display: 'flex' }}>
            <Link to="/">
              <Img fluid={query.logo.childImageSharp.fluid} alt="Logo" className="main_logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="collapse navbar-collapse">
            <Nav as="ul" className="navbar-nav ml-md-auto">
              <Nav.Link
                as="li"
                href="#"
                className={count === 0 ? 'nav-item active' : 'nav-item'}
                onClick={e => {
                  setCount(0);
                }}
              >
                <a className="nav-link" href="#">
                  Overview
                </a>
              </Nav.Link>
              <Nav.Link
                as="li"
                href="https://blog.accuknox.com/tag/kubearmor/"
                className={count === 1 ? 'nav-item active' : 'nav-item'}
                onClick={e => {
                  setCount(1);
                }}
              >
                <a
                  className="nav-link"
                  href="https://blog.accuknox.com/tag/kubearmor/"
                  target="_blank"
                >
                  Blog
                </a>
              </Nav.Link>
              <Nav.Link
                as="li"
                href="#videos"
                className={count === 2 ? 'nav-item active' : 'nav-item'}
                onClick={e => {
                  setCount(2);
                }}
              >
                <a className="nav-link" href="#videos">
                  Videos
                </a>
              </Nav.Link>
              <Nav.Link
                as="li"
                href="#roadmap"
                className={count === 3 ? 'nav-item active' : 'nav-item'}
                onClick={e => {
                  setCount(3);
                }}
              >
                <a className="nav-link" href="#roadmap">
                  Roadmap
                </a>
              </Nav.Link>
              <Nav.Link
                as="li"
                href="https://kubearmor.com#roadmap"
                target="_blank"
                className={count === 4 ? 'nav-item active' : 'nav-item'}
                onClick={e => {
                  setCount(4);
                }}
              >
                <a className="nav-link" href="https://docs.kubearmor.com" target="_blank">
                  Documentation
                </a>
              </Nav.Link>
            </Nav>{' '}
            <Nav>
              <Nav.Link href="https://github.com/accuknox/KubeArmor/" target="_blank">
                <button className="LogoButton" size="sm">
                  <a href="https://github.com/accuknox/KubeArmor/" target="_blank">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div>
                        <Img
                          fluid={query.button.childImageSharp.fluid}
                          alt="Button Icon"
                          className="Coverbutton"
                        />
                      </div>
                      <div style={{ marginLeft: '10px' }}>Github</div>
                    </div>
                  </a>
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
