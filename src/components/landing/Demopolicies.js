import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Demopolicies = () => {
  const query = useStaticQuery(graphql`
    query {
      arrow: file(relativePath: { eq: "Videos/arrow.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      demopolicies: file(relativePath: { eq: "Demopolicies/Demo.png" }) {
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
            className=" font-weight-bold text-center justify-between items-center"
            style={{ color: '#082D75' }}
          >
            KubeArmor Demo Policies
          </h1>
          <div className="row pt-5">
            <div className="col-lg-12 col-md-12">
              <Img fluid={query.demopolicies.childImageSharp.fluid} alt="Feature" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demopolicies;
