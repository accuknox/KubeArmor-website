import React from 'react';
import Cover from './cover';
import Feature from './Feature';
import Blog from './Blog';
import Videos from './Videos';
import Demopolicies from './Demopolicies';
import Kubdemo from './kubdemo';
import UseCasesAccordion from './Accordion';

const Landing = () => {
  return (
    <div>
      <Cover />
      <Kubdemo />
      <Feature />
      <Blog />
      <Videos />
      <Demopolicies />
      <UseCasesAccordion />
    </div>
  );
};

export default Landing;
