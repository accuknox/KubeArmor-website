import { Link } from 'gatsby';

import React from 'react';
import multiUbuntu1 from '../../images/Blog/multiUbuntu1.png';
import multiUbuntu2 from '../../images/Blog/multiUbuntu2.png';
import multiUbuntu3 from '../../images/Blog/multiUbuntu3.jpg';
import multiUbuntu4 from '../../images/Blog/multiUbuntu4.png';
import multiUbuntu5 from '../../images/Blog/multiUbuntu5.png';
import multiUbuntu6 from '../../images/Blog/multiUbuntu6.png';
import multiUbuntu7 from '../../images/Blog/multiUbuntu7.png';
import multiUbuntu8 from '../../images/Blog/multiUbuntu8.png';
import multiUbuntu9 from '../../images/Blog/multiUbuntu9.png';
import multiUbuntu10 from '../../images/Blog/multiUbuntu10.png';
import multiUbuntu11 from '../../images/Blog/multiUbuntu11.png';
import multiUbuntu12 from '../../images/Blog/multiUbuntu12.png';
import multiUbuntu13 from '../../images/Blog/multiUbuntu13.jpg';

const Blog1 = () => {
  return (
    <div>
      <section id="blog" className="pt-10 pb-10">
        <div className="container mx-auto">
          <div className="text-center justify-between items-center">
            <div className="row container mx-auto">
              <div className="col-lg-24 col-md-24 pt-4">
                <div className="card kbm-card">
                  <div className="card-header font-weight-bold">
                    <h3>Security Policy deployment in MultiUbuntu with KubeArmor</h3>
                  </div>

                  <div className="card-body font-weight-normal">
                    <p style={{ textAlign: 'left' }}>
                      KubeArmor, a container-aware runtime security enforcement system, developed by
                      Accuknox helps in auditing and blocking any malicious access performed on
                      containers. It not only restricts the behavior of the container at the system
                      level but also blocks access to it and generates audit logs, and automatically
                      sends them to the system. KubeArmor allows operators to define security
                      policies and apply them to Kubernetes. Then, KubeArmor will automatically
                      detect the changes in security policies from Kubernetes and enforce them to
                      the corresponding containers and nodes. If there are any violations against
                      security policies, KubeArmor immediately generates alerts with container
                      identities. If operators have any logging systems, it automatically sends the
                      alerts to their systems as well. To deploy Multiubuntu microservice, the steps
                      are to be followed. These are the sample security policies for multiubuntu
                      deployment.{' '}
                      <a
                        href="https://github.com/kubearmor/KubeArmor/tree/master/examples/multiubuntu"
                        target="_blank"
                        style={{ color: '#007bff' }}
                      >
                        Security policies
                      </a>
                      <img className="w-100 pt-3" src={multiUbuntu1}></img>
                      <h4 className="mt-3">Example 1 - Block a process execution:</h4>
                      In this example, the sleep command can be blocked by applying a security
                      policy. Let us see how it works before and after applying the security policy.
                      The picture below shows that the sleep command is working.
                      <img className="w-100 pt-3" src={multiUbuntu2}></img>
                      This is the yaml policy to be applied to block the sleep command.
                      <img className="w-100 pt-3" src={multiUbuntu3}></img>
                      To apply the policy the following command should be given. Here we can see
                      that the kubearmor ksp-group-1-proc-path-block.yaml policy is applied.
                      <img className="w-100 pt-3" src={multiUbuntu4}></img>
                      To check if the sleep command is blocked, Execute sleep command inside the
                      ubuntu-1 pod. Replace the appropriate pod name for ubuntu 1.
                      <img className="w-100 pt-3" src={multiUbuntu5}></img>
                      Here you can see the permission is denied. To check for audit logs, replace
                      KubeArmor in the node where ubuntu-1 is located.
                      <img className="w-100 pt-3" src={multiUbuntu6}></img>
                      <img className="w-100 pt-3" src={multiUbuntu7}></img>
                      <h4 className="mt-3">Example 2 - Block file access:</h4>
                      Another example is to block a specific directory and the subdirectories. In
                      this example, the credentials directory contains sensitive information. Here
                      we can access the password text file and can view the username and password.
                      <img className="w-100 pt-3" src={multiUbuntu8}></img>
                      Let us see how to apply a policy and how to block this directory. This is the
                      yaml policy to be applied to block access to sensitive information.
                      <img className="w-100 pt-3" src={multiUbuntu9}></img>
                      To apply the policy the following command should be given. Here we can see
                      that the kubearmor ksp-ubuntu-5-file-dir-recursive-block.yaml policy is
                      applied.
                      <img className="w-100 pt-3" src={multiUbuntu10}></img>
                      To check if the password text file is blocked, Let us try to access Access
                      /credentials/password inside of the ubuntu-5 pod.
                      <img className="w-100 pt-3" src={multiUbuntu11}></img>
                      Here, the permission is denied when we try to view the password text file. To
                      check audit logs, replace KubeArmor in the node where Ubuntu 5 is located.
                      <img className="w-100 pt-3" src={multiUbuntu12}></img>
                      <img className="w-100 pt-3" src={multiUbuntu13}></img>
                      <h4 className="mt-3">Setting kubeArmor up on Kubernetes</h4>
                      Prerequisite: We need a working Kubernetes setup for this. We can use a cloud
                      Kubernetes offering GCP or set yourself locally using minikube. If you are
                      using minikube then we also require kubectl. The daemon-set has to be
                      installed as part of the kube-system namespace thus giving it the rights to
                      watch all the system events. Commands to install: Step #1: Deploy kubearmor
                      for GKE: kubectl apply -f
                      https://raw.githubusercontent.com/kubearmor/KubeArmor/master/deployments/GKE/kubearmor.yaml
                      After a second kubeArmor should be running, to verify, you will see the pods
                      you created in a moment. Before applying the security policy to the container
                      or pod the annotations should be added to the deployment, under the metadata
                      Sample deployment with annotations Here is an example of a security policy
                      which is to block a process execution of the sleep command. When you apply the
                      policy it will block this particular command, we can get the audit logs of
                      that security policy. KubeArmor Security Policy to block sleep command in
                      containers during runtime Find more about this on “Sample deployment of
                      Multiubuntu with KubeArmor”
                      <h4 className="mt-3">Conclusion</h4>
                      In this blog, we looked at the basics of Kubernetes security monitoring and
                      how to set up the kubeArmor on Kubernetes which automatically detects the
                      changes in security policies and enforces them on the respective containers
                      without any human intervention, and sends the audit logs to their system
                      admins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog1;
