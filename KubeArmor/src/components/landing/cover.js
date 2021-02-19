import React from 'react';
import Button from '../Button';
// import Img from 'gatsby-image';
// import { useStaticQuery, graphql, Link } from 'gatsby';

const Cover = () => {
  // const query = useStaticQuery(graphql`
  //   query {
  //     cover: file(relativePath: { eq: "landing/Coverpage.png" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <div className="covercontent">
      <section className="pt-20 pb-20 md:pt-40 md:pb-40 ">
        <div className="container mx-auto px-8 lg:flex">
          <div className="lg:w-1/2">
            {/* <Img fluid={query.cover.childImageSharp.fluid} alt="Cover Page" /> */}
          </div>
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl  leading-none covertitle">
              K8s-native System Policy Audit/Alert & Enforcement Engine
            </h2>
            <p className=" mt-6 font-light coverdes">
              What if you “think” you don’t know enough about your topic? Then, do some research.
              Read books and magazines. Do some searches on the Internet. Who knows?
            </p>
            <p className="mt-8 md:mt-12">
              <Button size="lg">Find us on github</Button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cover;
