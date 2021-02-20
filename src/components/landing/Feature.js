import React from 'react';
import Card from '../Card';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import SplitSection from '../SplitSection';
const Feature = () => {
  const query = useStaticQuery(graphql`
    query {
      feature1: file(relativePath: { eq: "landing/land1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cloudy: file(relativePath: { eq: "landing/cloudy.png" }) {
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
      <section id="features" className=" lg:pb-20 lg:pt-10 ">
        <section className="bg-gray-200 pt-20 py-20">
          <div className="container mx-auto">
            <SplitSection
              id="services"
              primarySlot={
                <div className="lg:pr-32 xl:pr-48">
                  <h3 className="text-3xl font-semibold leading-tight">
                    Design elements /features’
                  </h3>
                  <div>
                    <Card className="mb-8 featurecard">
                      <div className="mb-8" style={{ display: 'flex', flexDirection: 'row' }}>
                        <div>
                          <Img
                            fluid={query.feature1.childImageSharp.fluid}
                            alt="Feature"
                            style={{ width: '50px' }}
                          />
                        </div>
                        <div style={{ paddingLeft: '10px' }}>
                          <p className="font-bold text-xl">Provide k8s-native engine</p>
                        </div>
                      </div>
                      <ul style={{ listStyleType: 'disc' }}>
                        <li>K8s-operator for system-wide security policies</li>
                        <li>K8s-native YAML policy specification</li>
                        <li>Linux Security Modules (LSMs) for policy enforcement</li>
                        <li>eBPF engine to couple audit info with k8s-metadata</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              }
              secondarySlot={
                <div className="lg:pr-32 xl:pr-48">
                  <div>
                    <div className="flex flex-col md:flex-col md:-mx-3 px-10">
                      <div>
                        <Card className="mb-8 featurecard">
                          <div className="mb-8" style={{ display: 'flex', flexDirection: 'row' }}>
                            <div>
                              <Img
                                fluid={query.cloudy.childImageSharp.fluid}
                                alt="Feature"
                                style={{ width: '50px' }}
                              />
                            </div>
                            <div style={{ paddingLeft: '10px' }}>
                              <p className="font-bold text-xl">Handle cloud provider</p>
                            </div>
                          </div>
                          <ul style={{ listStyleType: 'disc' }}>
                            <li>GKE: Container-optimized OS (COS) ships with AppArmor</li>
                            <li>EKS: Amazon Linux 2 ships with SELinux</li>
                          </ul>
                        </Card>
                      </div>
                      <div>
                        <Card className="mb-8 featurecard">
                          <h5 className="font-bold text-xl" style={{ color: '#3B76EF' }}>
                            LSM
                          </h5>
                          <ul style={{ listStyleType: 'disc' }}>
                            <p>Handle LSM deployment complexity</p>
                          </ul>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            {/* <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:-mx-3 px-10">
              <div>
                <h2 style={{ fontSize: '50px', fontWeight: '500' }}>Design elements /features’</h2>
                <div>
                  <Card className="mb-8">
                    <div className="mb-8" style={{ display: 'flex', flexDirection: 'row' }}>
                      <div>
                        <Img
                          fluid={query.feature1.childImageSharp.fluid}
                          alt="Feature"
                          style={{ width: '50px' }}
                        />
                      </div>
                      <div style={{ padding: '10px' }}>
                        <p className="font-bold text-xl">Provide k8s-native engine</p>
                      </div>
                    </div>
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>K8s-operator for system-wide security policies</li>
                      <li>K8s-native YAML policy specification</li>
                      <li>Linux Security Modules (LSMs) for policy enforcement</li>
                      <li>eBPF engine to couple audit info with k8s-metadata</li>
                    </ul>
                  </Card>
                </div>
              </div>
              <div>
                <div className="flex flex-col md:flex-col md:-mx-3 px-10">
                  <div>
                    <Card className="mb-8">
                      <h5 className="font-bold text-xl">Handle cloud provider </h5>
                      <ul style={{ listStyleType: 'disc' }}>
                        <li>GKE: Container-optimized OS (COS) ships with AppArmor</li>
                        <li>EKS: Amazon Linux 2 ships with SELinux</li>
                      </ul>
                    </Card>
                  </div>
                  <div>
                    <Card className="mb-8">
                      <h5 className="font-bold text-xl">Handle cloud provider </h5>
                      <ul style={{ listStyleType: 'disc' }}>
                        <li>GKE: Container-optimized OS (COS) ships with AppArmor</li>
                        <li>EKS: Amazon Linux 2 ships with SELinux</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>
            </div>{' '} */}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Feature;
