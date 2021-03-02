import React from 'react';
import Button from '../Button';
import Header from '../layout/Header';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Cover = () => {
  const query = useStaticQuery(graphql`
    query {

      button: file(relativePath: { eq: "Cover/Slack.png" }) {

        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cover: file(relativePath: { eq: "Cover/Cover image.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <div>
      {/* <Header /> */}
      <section className="pt-40 pb-40 md:pt-40 md:pb-40 ">
        <div className="container row mx-auto px-8 lg:flex text-center justify-content-center">
          <h1 className="pb-3 font-weight-bold text-center justify-between items-center">
            KubeArmor is a container-aware runtime security enforcement system
          </h1>
          <a href="https://kubearmor.herokuapp.com/" target="_blank">
            <button className="slackbutton " size="sm">
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <Img
                    fluid={query.button.childImageSharp.fluid}
                    alt="Button Icon"
                    className="Coverbutton"
                    style={{ width: '20px', background: '#00B6F0' }}
                  />
                </div>
                <div style={{ marginLeft: '10px' }}>Join Our Slack</div>
              </div>
            </button>
          </a>
          <div className="col-lg-12 pt-2">
            <Img fluid={query.cover.childImageSharp.fluid} />
          </div>
          <p className="font-weight-normal" style={{ color: '#333333' }}>
            KubeArmor is a container-aware runtime security enforcement system that restricts the
            behavior (such as process execution, file access, networking operation, and resource
            utilization) of containers at the system level.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cover;
