import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";

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
      arrow: file(relativePath: { eq: "Blog/arrow.png" }) {
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
      <section id="videos" className="pt-20 pb-10 bg-blue">
        <div className="container mx-auto">
          <h1
            className="font-weight-bold text-center pb-20"
            style={{ color: "#0B4296" }}
          >
            Videos
          </h1>
          <div className="row container mx-auto text-center justify-between items-center">
            <div className="col-lg-6 col-md-6">
              <div className="Videoplayer mx-auto">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/esXWUDlU-ck"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="Videoplayer mx-auto">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/691AlW_GE1k"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="Videoplayer mx-auto">
                <iframe
                  style={{ borderRadius: "5px" }}
                  width="90%"
                  height="100%"
                  src="https://www.youtube.com/embed/NS8XC78wSME"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="Videoplayer mx-auto">
                <iframe
                  style={{ borderRadius: "5px" }}
                  width="90%"
                  height="100%"
                  src="https://www.youtube.com/embed/u1PpRsk03Ao"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <a
              href="https://www.youtube.com/playlist?list=PLQjomRVn7MXC4obhiz1wuKLrGGip07HiM"
              target="_blank"
              className="mt-10 learnmore_btn"
            >
              Learn more
              <Img
                className="arrow"
                fluid={query.arrow.childImageSharp.fluid}
                alt="Restrict the behavior of containers at the system level"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
