import React from 'react';
import Button from '../Button';
import Header from '../layout/Header';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Cover = () => {
  const query = useStaticQuery(graphql`
    query {
      button: file(relativePath: { eq: "Header/Button.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      coverbg: file(relativePath: { eq: "Cover/coverkubearmor1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <div className="covercontent">
      {/* <Header /> */}
      <section className="pt-40 pb-40 md:pt-40 md:pb-40 ">
        <div className="container mx-auto px-8 lg:flex">
          <div className="lg:w-1/2">
            {/* <Img
              fluid={query.coverbg.childImageSharp.fluid}
              alt="Button Icon"
              className="Coverbutton"
              style={{ height: '100%', width: '85%' }}
            /> */}
          </div>
          <div className="lg:text-left lg:w-1/2">
            <p className="coverletter" style={{ paddingBottom: '20px' }}>
              KubeArmor
            </p>
            <h2 className="text-4xl lg:text-5xl  leading-none covertitle">
              K8s-native System Policy Audit/Alert & Enforcement Engine
            </h2>
            <p className=" mt-6 font-light coverdes">
              What if you “think” you don’t know enough about your topic? Then, do some research.
              Read books and magazines. Do some searches on the Internet. Who knows?
            </p>
            {/* <p className="mt-8 md:mt-12">
              <Button size="lg">
                Find us on github{' '}
                <Img fluid={query.button.childImageSharp.fluid} alt="Cover Page" />
              </Button>
            </p> */}

            <Button className="mt-8 md:mt-12" size="lg">
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>Find us on github</div>
                <div style={{ paddingLeft: '10px' }}>
                  <Img
                    fluid={query.button.childImageSharp.fluid}
                    alt="Button Icon"
                    className="Coverbutton"
                  />
                </div>
              </div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cover;
