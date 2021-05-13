import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Demopolicies1 from '../Demopolicies/Demopolicies1';
import Demopolicies2 from '../Demopolicies/Demopolicies2';
import Demopolicies3 from '../Demopolicies/Demopolicies3';
import Demopolicies4 from '../Demopolicies/Demopolicies4';
import Demopoliciesbottom from '../Demopolicies/Demopoliciesbottom';

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
      demopolicies: file(relativePath: { eq: "Demopolicies/DemoPolicies.png" }) {
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
      <section id="stats" className="pt-20 pb-10">
        <div className="container mx-auto ">
          <h1 className=" font-weight-bold" style={{ color: '#082D75' }}>
            Sample Policies
          </h1>
          <div className="row pt-5">
            <div className="col-lg-6 col-md-4 ">
              <Demopolicies1 />
              <br />
              <Demopolicies2 />
            </div>
            <div className="col-lg-6 col-md-4 ">
              <Demopolicies3 />
              <br />
              <Demopolicies4 />
            </div>
          </div>
          <Demopoliciesbottom />
        </div>
      </section>
    </div>
  );
};

export default Demopolicies;
