import React from 'react';
import LabelText from '../LabelText';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Feature2 = () => {
  const query = useStaticQuery(graphql`
    query {
      f1: file(relativePath: { eq: "Features/Feature1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      f2: file(relativePath: { eq: "Features/Feature2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      f3: file(relativePath: { eq: "Features/Feature3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      f4: file(relativePath: { eq: "Features/Feature4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      f5: file(relativePath: { eq: "Features/Feature5.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      f6: file(relativePath: { eq: "Features/Feature6.png" }) {
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
      <section id="stats" className="pt-20 pb-20" style={{ background: '#D7EBFA' }}>
        <div className="container mx-auto ">
          <h1
            className="font-weight-bold text-center justify-between items-center"
            style={{ color: '#18214D' }}
          >
            Key Features
          </h1>

          <div className="row pt-5 gutter-5">
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards">
                <div className="Keyfeatureicon">
                  <Img
                    fluid={query.f1.childImageSharp.fluid}
                    alt="Feature"
                    style={{ width: '24px' }}
                  />
                </div>
              </div>
              <h5 className=" keyfeaturetitle pb-3">
                Support network security enforcement among containers
              </h5>
              <p className="Keyfeaturesdes">
                KubeArmor aims to protect containers themselves rather than interactions among
                containers.
              </p>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards">
                <div className="Keyfeatureicon">
                  <Img
                    fluid={query.f2.childImageSharp.fluid}
                    alt="Feature"
                    style={{ width: '24px' }}
                  />
                </div>
              </div>
              <h5 className=" keyfeaturetitle pb-3">
                Provide easy-to-use semantics for policy definitions
              </h5>
              <p className="Keyfeaturesdes">
                KubeArmor provides the ability to monitor the life cycles of containers' processes
                and take policy decisions based on them.
              </p>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards">
                <div className="Keyfeatureicon">
                  <Img
                    fluid={query.f3.childImageSharp.fluid}
                    alt="Feature"
                    style={{ width: '24px' }}
                  />
                </div>
              </div>
              <h5 className=" keyfeaturetitle pb-3">
                Enforce security policies to containers in runtime
              </h5>
              <p className="Keyfeaturesdes">
                KubeArmor maintains security policies separately, which means that security policies
                are no longer tightly coupled
              </p>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards">
                <div className="Keyfeatureicon">
                  <Img
                    fluid={query.f4.childImageSharp.fluid}
                    alt="Feature"
                    style={{ width: '24px' }}
                  />
                </div>
              </div>
              <h5 className=" keyfeaturetitle pb-3">Effortless semantics for policy definitions</h5>
              <p className="Keyfeaturesdes">
                KubeArmor provides the ability to monitor the life cycles of containers' processes
                and take policy decisions based on them.
              </p>
            </div>{' '}
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards">
                <div className="Keyfeatureicon">
                  <Img
                    fluid={query.f5.childImageSharp.fluid}
                    alt="Feature"
                    style={{ width: '24px' }}
                  />
                </div>
              </div>
              <h5 className=" keyfeaturetitle pb-3">
                Enforce security policies to containers in runtime
              </h5>
              <p className="Keyfeaturesdes">
                KubeArmor maintains security policies separately, which means that security policies
                are no longer tightly coupled
              </p>
            </div>{' '}
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards">
                <div className="Keyfeatureicon">
                  <Img
                    fluid={query.f6.childImageSharp.fluid}
                    alt="Feature"
                    style={{ width: '24px' }}
                  />
                </div>
              </div>
              <h5 className=" keyfeaturetitle pb-3">Provide k8s-native engine</h5>
              <p className="Keyfeaturesdes">
                K8s-operator for system-wide security policies . Linux Security Modules (LSMs) for
                policy enforcement
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature2;
