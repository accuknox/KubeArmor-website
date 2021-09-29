import { Link } from 'gatsby';

import React from 'react';

const Blog = () => {
  return (
    <div>
      <section id="blog" className="pt-20 pb-10">
        <div className="container mx-auto">
          <h1 className=" font-weight-bold" style={{ color: '#082D75' }}>
            Blog
          </h1>
          <div className="text-center justify-between items-center">
            <div className="row container mx-auto">
              <div className="col-lg-12 col-md-4 pt-4">
                <div className="card kbm-card">
                  <a
                    href="https://github.com/accuknox/KubeArmor/wiki/Introduction-to-Linux-Security-Modules-(LSMs)"
                    target="_blank"
                  >
                    <div className="card-header font-weight-bold">
                      <h3>Introduction to Linux Security Modules (LSMs)</h3>
                    </div>
                  </a>
                  <div className="card-body font-weight-normal">
                    <p>
                      LSM hooks in Linux Kernel mediates access to internal kernel objects such as
                      inodes, tasks, files, devices and IPC. LSMs, in general, refer to these
                      generic hooks added in the core kernel code. Further, Security modules could
                      make use of these generic hooks to implement enhanced access control as
                      independent kernel modules. AppArmor, SELinux, Smack, TOMOYO are examples of
                      such independent kernel security modules.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-4 pt-4">
                <div className="card kbm-card">
                  <Link to="/Blogs/blog1">
                    <div className="card-header font-weight-bold">
                      <h3>An Introduction to Kubernetes Security using KubeArmor</h3>
                    </div>
                  </Link>
                  <div className="card-body font-weight-normal">
                    <p style={{ textAlign: 'left' }}>
                      <h4>Kubernetes security</h4>
                      In recent times organizations are migrating from on-premise to cloud, owing to
                      the multi-dimensional nature of today’s cloud-native technology landscape. Due
                      to this, it is easier than ever to build and deploy application environments
                      quickly through containerization which has resulted in 45.6% of enterprises to
                      use Kubernetes in their production environments, it is important for us to
                      know how to secure it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-4 pt-4">
                <div className="card kbm-card">
                  <Link to="/Blogs/blog2">
                    <div className="card-header font-weight-bold">
                      <h3>Security Policy deployment in MultiUbuntu with KubeArmor</h3>
                    </div>
                  </Link>
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
                        Security policies.
                      </a>
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

export default Blog;
