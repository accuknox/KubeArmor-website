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
              <div className="col-lg-2 col-md-2"></div>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
