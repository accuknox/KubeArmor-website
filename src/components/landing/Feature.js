import React from 'react';
import LabelText from '../LabelText';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Feature = () => {
  const query = useStaticQuery(graphql`
    query {
      f1: file(relativePath: { eq: "Features/feature_two.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      f2: file(relativePath: { eq: "Features/feature_three.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      f3: file(relativePath: { eq: "Features/feature_five.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      f4: file(relativePath: { eq: "Features/feature_four.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      f5: file(relativePath: { eq: "Features/feature_one.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      f6: file(relativePath: { eq: "Features/feature_six.png" }) {
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
      <section id="overview" className="pt-20 pb-10 bg-blue">
        <div className="container mx-auto ">
          {/* text-center justify-between items-center */}
          <h1 className="font-weight-bold text-center pb-10" style={{ color: '#0B4296' }}>
            Key Features
          </h1>

          <div className="row pt-5 gutter-5">
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards pb-3">
                <div>
                  <Img
                    fluid={query.f1.childImageSharp.fluid}
                    alt="Restrict the behavior of containers at the system level"
                    style={{ width: '40px' }}
                  />
                </div>
              </div>
              <div>
                <h5 className=" keyfeaturetitle pb-3">
                  Restrict the behavior of containers at the system level
                </h5>
                <p className="Keyfeaturesdes">
                  KubeArmor provides the ability to filter process executions, file accesses,
                  networking operations, and resource utilization inside containers at the system
                  level.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards pb-3">
                <div>
                  <Img
                    fluid={query.f2.childImageSharp.fluid}
                    alt="Enforce security policies to containers in runtime"
                    style={{ width: '40px' }}
                  />
                </div>
              </div>
              <div>
                <h5 className=" keyfeaturetitle pb-3">
                  Enforce security policies to containers in runtime
                </h5>
                <p className="Keyfeaturesdes">
                  KubeArmor directly enforces security policies into Linux Security Modules (LSMs)
                  for each container based on the identities (e.g., labels) of given containers and
                  security policies.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards pb-3">
                <div>
                  <Img
                    fluid={query.f3.childImageSharp.fluid}
                    alt="Produce container-aware alert logs against policy violations"
                    style={{ width: '40px' }}
                  />
                </div>
              </div>
              <div>
                <h5 className=" keyfeaturetitle pb-3">
                  Produce container-aware alert logs against policy violations.
                </h5>
                <p className="Keyfeaturesdes">
                  KubeArmor produces alert logs for policy violations that happen in containers by
                  monitoring the operations of containers' processes using its eBPF-based system
                  monitor.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards pb-3">
                <div>
                  <Img
                    fluid={query.f4.childImageSharp.fluid}
                    alt="Provide effortless semantics for policy definitions"
                    style={{ width: '40px' }}
                  />
                </div>
              </div>
              <div>
                <h5 className=" keyfeaturetitle pb-3">
                  Provide effortless semantics for policy definitions
                </h5>
                <p className="Keyfeaturesdes">
                  KubeArmor manages internal complexities associated with LSMs and provides easy
                  semantics for policy definitions.
                </p>
              </div>
            </div>{' '}
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards pb-3">
                <div>
                  <Img
                    fluid={query.f5.childImageSharp.fluid}
                    alt="Support network security enforcement among containers"
                    style={{ width: '40px' }}
                  />
                </div>
              </div>
              <div>
                <h5 className=" keyfeaturetitle pb-3">
                  Support network security enforcement among containers
                </h5>
                <p className="Keyfeaturesdes">
                  KubeArmor allows applying policy settings at the level of network system calls,
                  controlling interactions among containers.
                </p>
              </div>{' '}
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="Featurekeycards pb-3">
                <div>
                  <Img
                    fluid={query.f6.childImageSharp.fluid}
                    alt="Provide Kubernetes-native security enforcement engine"
                    style={{ width: '40px' }}
                  />
                </div>
              </div>
              <div>
                <h5 className=" keyfeaturetitle pb-3">
                  Provide Kubernetes-native security enforcement engine
                </h5>
                <p className="Keyfeaturesdes">
                  KubeArmor allows operators to define security policies based on Kubernetes
                  metadata and simply apply them into Kubernetes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
