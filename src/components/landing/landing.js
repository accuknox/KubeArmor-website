import React from 'react';
import Blog from './Blog';
import Challenges from './Challenges';
import Cover from './cover';
import Demopolicies from './Demopolicies';
import Elementfeature from './Elementfeature';
import Feature from './Feature';
import Feature2 from './Feature2';
import Roadmap from './Roadmap';
import Securitysection from './Securitysection';
import Videos from './Videos';

const Landing = () => {
  return (
    <div>
      <Cover />
      {/* <Securitysection />
      <Feature /> */}
      {/* <Elementfeature /> */}
      <Feature2 />
      <Videos />
      <Blog />
      <Demopolicies />
      <Roadmap />
      {/* <Challenges /> */}
    </div>
  );
};

export default Landing;
