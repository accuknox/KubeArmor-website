import React from 'react';
import LabelText from '../LabelText';

const Feature2 = () => {
  return (
    <div>
      <section id="stats" className="">
        <div className="container mx-auto text-center justify-between items-center">
          <h1 className="Feature2T">KubeArmor features</h1>
          <p>Container-aware Runtime Security Enforcement System</p>{' '}
          {/* <LabelText className="text-gray-600">Our customers get results</LabelText> */}
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3" style={{ padding: '25px' }}>
              <div>
                <h1 className="FeatureTitle">
                  Restrict the behavior of containers at the system level
                </h1>
                <p className="Featuredescrip">
                  KubeArmor prevents malicious or unknown behaviors in containers by specifying
                  their desired actions (e.g., a specific process should only be allowed to access a
                  sensitive file). For this, KubeArmor provides the ability to filter process
                  executions, file accesses, resource utilization, and even network operations
                  inside containers at the system level.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/3" style={{ padding: '25px' }}>
              <h1 className="FeatureTitle">Enforce security policies to containers in runtime</h1>
              <p className="Featuredescrip">
                KubeArmor maintains security policies separately, which means that security policies
                are no longer tightly coupled with containers. Then, KubeArmor directly applies the
                security policies into Linux security modules (LSMs) for each container according to
                the labels of given containers and security policies.
              </p>
            </div>
            <div className="w-full sm:w-1/3" style={{ padding: '25px' }}>
              <h1 className="FeatureTitle">Produce container-aware audit logs</h1>
              <p className="Featuredescrip">
                Kubearmor has a eBPF engine to couple audit info with k8s-metadata. This helps
                provide superior System Monitoring.
              </p>
            </div>
          </div>{' '}
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3" style={{ padding: '25px' }}>
              <div>
                <h1 className="FeatureTitle">Handle LSM deployment complexity</h1>
                <p className="Featuredescrip">
                  This design brings a number of advantages, including superior write performance,
                  high space utilization, tunability, and simplification of concurrency control and
                  recovery.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/3" style={{ padding: '25px' }}>
              <h1 className="FeatureTitle">Effortless semantics for policy definitions</h1>
              <p className="Featuredescrip">
                KubeArmor provides the ability to monitor the life cycles of containers' processes
                and take policy decisions based on them. KubeArmor manages internal complexities
                associated with handling such policy decisions and provides easy semantics towards
                policy language.
              </p>
            </div>
            <div className="w-full sm:w-1/3" style={{ padding: '25px' }}>
              <h1 className="FeatureTitle">
                Support network security enforcement among containers
              </h1>
              <p className="Featuredescrip">
                KubeArmor aims to protect containers themselves rather than interactions among
                containers. However, using KubeArmor a user can add policies which could apply
                policy settings at network system calls thus controlling interactions among
                containers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature2;
