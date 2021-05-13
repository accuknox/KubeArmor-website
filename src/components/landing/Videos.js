import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Videos = () => {
  const query = useStaticQuery(graphql`
    query {
      video: file(relativePath: { eq: "Videos/Base.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      arrow: file(relativePath: { eq: "Videos/arrow.png" }) {
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
      <section id="videos" className="pt-20 pb-10">
        <div className="container mx-auto ">
          <h1 className=" font-weight-bold" style={{ color: '#082D75' }}>
            Videos
          </h1>
	        <div className="row">
            <div className="col-lg-6 col-md-4">
              <div className="Videoplayer mx-auto">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/NS8XC78wSME"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="Videoplayer mx-auto">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/T32knFrf1XI"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
