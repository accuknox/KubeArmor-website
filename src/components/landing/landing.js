import React from 'react';
import Challenges from './Challenges';
import Cover from './cover';
import Feature from './Feature';
import Feature2 from './Feature2';
import Securitysection from './Securitysection';

const Landing = () => {
  return (
    <div>
      <Cover />
      <Securitysection />
      <Feature />
      {/* <Feature2 /> */}
      <Challenges />
    </div>
  );
};

export default Landing;
