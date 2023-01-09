import React from 'react';
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
      cover: file(relativePath: { eq: "Cover/updatedcover.png" }) {
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

      <section
        className="pt-40 pb-30 md:pt-40 md:pb-30 bg-gradient text-center"
        style={{ background: 'linear-gradient(179.62deg, #fafcff 15%, #e1ebff 102.93%)' }}
      >
        <div className="container pr-10 text-center">
          <h1 className="font-weight-bold justify-between items-center text-center pr-20 pl-20 pb-10 kube-title">
            Runtime protection for{' '}
            <span style={{ color: '#326DE6' }}>Kubernetes & other cloud Workloads</span>
          </h1>
          <h5 className=" keyfeaturetitle pb-3 text-center">
            KubeArmor uses eBPF and Linux Security Modules (LSM) to provide policy based system{' '}
            <br /> to restrict any unwanted, malicious behavior of cloud-native workloads at
            runtime.
          </h5>
          <a
            href="https://join.slack.com/t/kubearmor/shared_invite/zt-1ltmqdbc6-rSHw~LM6MesZZasmP2hAcA/"
            target="_blank"
          >
            <button className="slackbutton mb-10" size="sm">
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
          <div className="row  text-center justify-content-center">
            <div className="col-md-8 col-lg-8 pb-20">
              <Img fluid={query.cover.childImageSharp.fluid} alt="Cover Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cover;
