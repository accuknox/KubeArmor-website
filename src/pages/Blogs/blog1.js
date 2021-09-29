import { Link } from 'gatsby';

import React from 'react';

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
                    <h3>An Introduction to Kubernetes Security using KubeArmor</h3>
                  </div>

                  <div className="card-body font-weight-normal">
                    <p style={{ textAlign: 'left' }}>
                      <h4>Kubernetes security</h4>
                      In recent times organizations are migrating from on-premise to cloud, owing to
                      the multi-dimensional nature of today’s cloud-native technology landscape. Due
                      to this, it is easier than ever to build and deploy application environments
                      quickly through containerization which has resulted in 45.6% of enterprises to
                      use Kubernetes in their production environments, it is important for us to
                      know how to secure it.
                      <h4 className="mt-3">Let's Talk about why it is difficult</h4>
                      According to this analysis, security is one of the hardest challenges of
                      running Kubernetes. There are numerous moving layers in the cloud-native
                      stack, hence we may not focus on security early on. By default, some
                      distributions of Kubernetes may not secure.
                      <h4 className="mt-3">Prevention and Detection</h4>
                      This has unfolded rampant increase in cyber attacks on the cloud. To mitigate
                      this, we have to secure all the pods and containers which are simple platforms
                      just like Windows or Linux or a MySQL database and are only as secure as you
                      make it. There are some flaws in every system, including Kubernetes and
                      Docker, but these security issues are caused directly or indirectly by the
                      users and their applications. Kubernetes provides each pod in a cluster its
                      own IP address and consequently, IP-based security is required. Moreover,
                      cluster security demands:
                      <ul>
                        <li> Network policies</li>
                        <li> Access policies for individual pods</li>
                        <li>RBAC and namespace access policies, etc</li>
                      </ul>
                      KubeArmor is an open-source tool that was created by AccuKnox and is available
                      on GitHub. It will operate with LSMs (Linux security modules) allowing it to
                      run on top of any Linux platforms such as Alpine, Ubuntu, and
                      Container-optimized OS from Google. KubeArmor will automatically detect the
                      changes in security policies and it will be imposed on the respective
                      containers without any human intervention. If there are any violations against
                      security policies, KubeArmor immediately generates audit logs with container
                      identities. If operators have any logging systems, it automatically sends
                      audit logs to their systems as well. Functionalities of KubeArmor:
                      <ul>
                        <li>Restricting the behavior of containers at the system level</li>
                        <li>Enforcing security policies to containers in runtime</li>
                        <li>Produce container-aware audit logs</li>
                        <li>
                          Provide easy-to-use semantics for policy definitions, and Support the
                          network security enforcement among containers.
                        </li>
                      </ul>
                      Restricting the behavior of containers at the system level Enforcing security
                      policies to containers in runtime Produce container-aware audit logs Provide
                      easy-to-use semantics for policy definitions, and Support the network security
                      enforcement among containers.
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
