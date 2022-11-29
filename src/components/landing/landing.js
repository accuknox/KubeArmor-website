import React from 'react';
import Cover from './cover';
import Feature from './Feature';
import Blog from './Blog';
import Videos from './Videos';
import Demopolicies from './Demopolicies';
import Kubdemo from './kubdemo';
// import Roadmap from './Roadmap';
import Timeline from '../../pages/Roadmap';

const Landing = () => {
  return (
    <div>
      <Cover />
      <Kubdemo />
      <Feature />
      <Blog />
      <Videos />
      <Demopolicies />
      {/* <Roadmap /> */}
      <Timeline />
    </div>
  );
};

export default Landing;
