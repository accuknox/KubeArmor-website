/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Nav, Navbar } from 'react-bootstrap';
import { kFormatter } from '../../utils';
import '../../Styles/style.css';

const Header = () => {
  const [count, setCount] = useState(0);
  const [githubStars, setGithubStars] = useState(null);

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
      slack: file(relativePath: { eq: "Cover/Slack.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  // Fetch Github Stars
  useEffect(() => {
    fetch('https://api.github.com/repos/kubearmor/KubeArmor')
      .then(response => response.json())
      .then(data => setGithubStars(Number(data?.stargazers_count)));
  }, []);

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
          <Navbar.Brand
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}
          >
            {/* KubeArmor Logo Button */}
            <Link to="/">
              <Img fluid={query.logo.childImageSharp.fluid} alt="Logo" className="main_logo mb-1" />
            </Link>

            {/* Github Stars Button */}
            <a href="https://github.com/kubearmor/KubeArmor/" target="_blank" rel="noreferrer">
              <button
                type="button"
                className="h-8 rounded-md bg-white border-gray-900 border border-solid github-btn mt-1 ml-2"
                size="sm"
              >
                <div className="flex justify-center items-center gap-2 h-full px-2 font-extrabold">
                  <Img
                    fluid={query.button.childImageSharp.fluid}
                    alt="Button Icon"
                    className="h-5 w-5"
                  />
                  <div className="flex">
                    <span className="text-base border-r pr-2">GitHub Stars</span>
                    <span className="text-base pl-2">{kFormatter(githubStars)}</span>
                  </div>
                </div>
              </button>
            </a>

            {/* Join Slack Button */}
            <a
              href="https://join.slack.com/t/kubearmor/shared_invite/zt-1ltmqdbc6-rSHw~LM6MesZZasmP2hAcA/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="h-8 rounded-md bg-white border-gray-900 border border-solid github-btn mt-1"
                size="sm"
              >
                <div className="flex justify-center items-center gap-2 h-full px-2 font-extrabold">
                  <Img
                    fluid={query.slack.childImageSharp.fluid}
                    alt="Button Icon"
                    className="h-5 w-5"
                  />
                  <span className="text-base">Join Slack</span>
                </div>
              </button>
            </a>
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
                  href="https://docs.kubearmor.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  Documentation
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
