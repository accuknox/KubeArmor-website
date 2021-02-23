import React from 'react';
import LabelText from '../LabelText';

const Challenges = () => {
  return (
    <div>
      <section id="challenges" className="lg:pb-20 lg:pt-20">
        <div className="container mx-auto">
          <h1 className="mb-10 text-gray-600 text-center ChallengeTitle">
            System Primitives & Challenges
          </h1>
          <div className="flex flex-col lg:flex-row md:-mx-5  ">
            <div className="flex-1 px-10">
              <h1 className="challengecardtitle">Container Runtime Security ≠ Network Security</h1>
              <p className="challengecarddes">
                Container Security ≈ Network Security + System Security + Data Security
              </p>
            </div>
            <div className="flex-1 px-10">
              <h1 className="challengecardtitle">
                Linux kernel primitives are not tailored for k8s platform
              </h1>
            </div>
            <div className="flex-1 px-10">
              <h1 className="challengecardtitle">Runtime security for systems and applications</h1>
              <p className="challengecarddes">
                Vital aspects for compliance and hardening standards
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenges;
