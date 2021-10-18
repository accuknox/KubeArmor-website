import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const Kubdemo = () => {
  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto">
        <h1 className="font-weight-bold text-center pb-10" style={{ color: '#0B4296' }}>
          How to install KubeArmor
        </h1>
        <div className="row text-center justify-content-center">
          <div className="col-lg-8 col-md-8">
            <div className="kubedemo mx-auto">
              <iframe
                style={{ borderRadius: '5px' }}
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/2OK3e87b5jA?autoplay=1&mute=1"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kubdemo;
