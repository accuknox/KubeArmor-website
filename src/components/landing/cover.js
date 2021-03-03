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
      cover: file(relativePath: { eq: "Cover/Cover.png" }) {
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

      <section className="pt-40 pb-30 md:pt-40 md:pb-30 ">
        <div className="container row mx-auto px-8 lg:flex ">
          <div className="row ">
            <div className="col-lg-6 col-md-6 pb-5">
              <h1
                className="pb-5 font-weight-bold text-left justify-between items-center"
                style={{ fontSize: '48px', lineHeight: '60px' }}
              >
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
                      />
                    </div>
                    <div style={{ marginLeft: '10px' }}>Join Our Slack</div>
                  </div>
                </button>
              </a>
            </div>
            <div className="col-lg-6 col-md-6">
              <Img fluid={query.cover.childImageSharp.fluid} alt="Cover Image" />
            </div>
          </div>
          <div className="text-center justify-between items-center pt-4">
            <p className="font-weight-normal" style={{ lineHeight: '28px' }}>
              KubeArmor is a container-aware runtime security enforcement system that restricts the
              behavior (such as process execution, file access, networking operation, and resource
              utilization) of containers at the system level.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cover;
