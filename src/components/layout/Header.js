/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../../Styles/style.css';

const Header = () => {
  const [count, setCount] = useState(0);
  const query = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "Header/kubearmor-logo.png" }) {
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
      star: file(relativePath: { eq: "Header/star.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cloudnative: file(relativePath: { eq: "Header/cloud_native.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <header className="sticky top-0 bg-white shadow">
      <a
        href="https://github.com/kubearmor/KubeArmor/stargazers"
        target="_blank"
        className="text-center justify-content-center banner h-[70px]"
        rel="noreferrer"
      >
        <section
          style={{
            backgroundColor: '#0b4296',
            width: '70%',
            height: '70px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: '30px',
            paddingRight: '30px'
          }}
          className="github-cta"
        >
          <div className="flex items-center justify-end github-text" style={{ width: '70%' }}>
            <Img
              fluid={query.star.childImageSharp.fluid}
              className="Coverbutton text-center justify-content-center mr-2"
            />
            If you like KubeArmor, please give us a star on GitHub!
            <Img
              fluid={query.star.childImageSharp.fluid}
              className="Coverbutton text-center justify-content-center ml-2"
            />
          </div>
          <div className="ml-auto cloudnative-logo flex justify-center items-center">
            <Img
              fluid={query.cloudnative.childImageSharp.fluid}
              alt="Cloud Native"
              style={{ height: '50px', width: '224px' }}
            />
          </div>
        </section>
      </a>
      <div className="px-3 container">
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light items-center h-20">
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
                  rel="noreferrer"
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
                <a className="nav-link" href="#use-cases">
                  Use Cases
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
                <a
                  className="nav-link"
                  href="https://docs.kubearmor.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Documentation
                </a>
              </Nav.Link>
            </Nav>{' '}
            <Nav>
              <Nav.Link href="https://github.com/kubearmor/KubeArmor/" target="_blank">
                <button className="LogoButton" size="sm">
                  <a
                    href="https://github.com/kubearmor/KubeArmor/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
