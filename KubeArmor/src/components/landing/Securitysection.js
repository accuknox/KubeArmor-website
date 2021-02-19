import React from 'react';
import SplitSection from '../SplitSection';

const Securitysection = () => {
  return (
    <div>
      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48">
            <h2 className="text-3xl font-bold leading-tight">
              KubeArmor Container-aware Runtime Security Enforcement System
            </h2>
          </div>
        }
        secondarySlot={
          <div>
            <div className="mt-5">
              <h3 className="text-3xl font-semibold leading-tight">
                Effortless semantics for policy definitions
              </h3>
              <p className="mt-2 font-light ">
                KubeArmor provides the ability to monitor the life cycles of containers' processes
                and take policy decisions based on them.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-3xl font-semibold leading-tight">
                Support network security enforcement among containers
              </h3>
              <p className="mt-2 font-light">
                KubeArmor aims to protect containers themselves rather than interactions among
                containers. However, using KubeArmor a user can add policies which could apply
                policy settings at network system calls thus controlling interactions among
                containers.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-3xl font-semibold leading-tight">
                Produce container-aware audit logs
              </h3>
              <p className="mt-2 font-light">
                Kubearmor has a eBPF engine to couple audit info with k8s-metadata. This helps
                provide superior System Monitoring.
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-3xl font-semibold leading-tight">
                Enforce security policies to containers in runtime
              </h3>
              <p className="mt-2 font-light">
                KubeArmor maintains security policies separately, which means that security policies
                are no longer tightly coupled with containers. Then, KubeArmor directly applies the
                security policies into Linux security modules (LSMs) for each container according to
                the labels of given containers and security policies.
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Securitysection;
