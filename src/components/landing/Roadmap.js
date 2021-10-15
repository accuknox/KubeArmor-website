import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Roadmap = () => {
  const query = useStaticQuery(graphql`
    query {
      roadmap: file(relativePath: { eq: "Roadmap/Roadmap.png" }) {
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
      <section id="roadmap" className="pt-20 bg-blue">
        <div className="container mx-auto ">
          <h1 className=" font-weight-bold pb-5 text-center" style={{ color: '#0B4296' }}>
            Roadmap
          </h1>
          <Img fluid={query.roadmap.childImageSharp.fluid} alt="Roadmap" />
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
