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
          </h1>{' '}
          <div className="row gutter-5 pt-5">
            <div className="col-lg-4 col-md-4">
              <Img fluid={query.video.childImageSharp.fluid} alt="Feature" />
              <div className="Videocards">
                <p>Symbol Design Sysytem</p>
                <div style={{ padding: '12px', background: '#EFF2F6', borderRadius: '80%' }}>
                  <Img
                    fluid={query.arrow.childImageSharp.fluid}
                    alt="Feature"
                    style={{ width: '16px' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <Img fluid={query.video.childImageSharp.fluid} alt="Feature" />
              <div className="Videocards">
                <p>Method Wireframe Kit 3.0</p>
                <div style={{ padding: '12px', background: '#EFF2F6', borderRadius: '80%' }}>
                  <Img
                    fluid={query.arrow.childImageSharp.fluid}
                    alt="Feature"
                    style={{ width: '16px' }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <Img fluid={query.video.childImageSharp.fluid} alt="Feature" />
              <div className="Videocards">
                <p>Portland UI Kit</p>
                <div style={{ padding: '12px', background: '#EFF2F6', borderRadius: '80%' }}>
                  <Img
                    fluid={query.arrow.childImageSharp.fluid}
                    alt="Feature"
                    style={{ width: '16px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
