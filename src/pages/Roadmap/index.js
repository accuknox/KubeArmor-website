import React from 'react';
import { Chrono } from 'react-chrono';
import './style.css';

const Timeline = () => {
  const timelineData = [
    {
      title: 'Release Date: TBD',
      cardTitle: '',
      cardSubtitle: ''
    },
    {
      title: 'Release Date: TBD',
      cardTitle: '',
      cardSubtitle: ''
    },
    {
      title: 'Release Date: 15 Nov 2022',
      cardTitle: '',
      cardSubtitle: ''
    },
    {
      title: 'Release Date: 8 Sep 2022',
      cardTitle: '',
      cardSubtitle: ''
    },
    {
      title: 'Release Date: 07 Jul 2022',
      cardTitle: '',
      cardSubtitle: ''
    },
    {
      title: 'Release Date: 10 May 2022',
      cardTitle: '',
      cardSubtitle: ''
    },
    {
      title: 'Release Date: 07 Apr 2022',
      cardTitle: '',
      cardSubtitle: ''
    },
    {
      title: 'Release Date: 11 Feb 2022',
      cardTitle: '',
      cardSubtitle: ''
    },
    {
      title: 'Release Date: 17 Dec 2021',
      cardTitle: '',
      cardSubtitle: ''
    }
  ];
  return (
    <section id="roadmap" className="pt-20 bg-blue">
      <div className="container px-0">
        <div className="container mx-auto ">
          <h1 className=" font-weight-bold pb-2 pt-5 text-center" style={{ color: '#0B4296' }}>
            Roadmap
          </h1>
        </div>

        <div className="timelineContainer">
          <Chrono
            theme={{
              titleColor: '#2C74FF',
              titleColorActive: '#fff',
              primary: '#0F52BA',
              secondary: '#2173FF'
            }}
            fontSizes={{ title: '18px', cardTitle: '30px' }}
            cardHeight="300"
            disableNavOnKey={true}
            disableClickOnCircle={true}
            items={timelineData}
            mode="VERTICAL_ALTERNATING"
          >
            <div style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column'
                }}
              >
                <h3 className="release-version">v0.9</h3>
                <ul className="release-items">
                  <li>Visualize sys calls + network in a simple UI</li>
                  <li>Advanced Threat Scanning</li>
                  <li>Port scanning detection</li>
                  <li>Send a sequence of forensic events for troubleshooting</li>
                  <li>
                    Attribute a series of events for each individual app (including network
                    connection)
                  </li>
                  <li>In-kernel event auditor</li>
                </ul>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column'
                }}
              >
                <h3 className="release-version">v0.8</h3>
                <ul>
                  <li>Built-in SIEM</li>
                  <li>Seccomp</li>
                  <li>Granular metrics</li>
                  <li>File Integrity Monitoring</li>
                  <li>Support for serverless using ptrace</li>
                  <li>Detect container escape</li>
                  <li>Detect privilege escalation</li>
                  <li>Detect changes in capabilities</li>
                  <li>Performance optimization in kernel aggregation</li>
                  <li>Policy Templates for 5G Control Plane</li>
                </ul>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column'
                }}
              >
                <h3 className="release-version">v0.7</h3>
                <ul className="release-items">
                  <li>ARM Support (Raspberry Pi, Azure ARM VM, Apple M1)</li>
                  <li>Network Policy & Microsegmentation</li>
                  <li>Container based policy support</li>
                  <li>Workload behavior summary</li>
                  <li>Policy Recommendations and Reports</li>
                </ul>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column'
                }}
              >
                <h3 className="release-version">v0.6</h3>
                <ul className="release-items">
                  <li>Support for non-orchestrated containers</li>
                  <li>Lenient way to whitelisting policies</li>
                  <li>Lenient way to whitelisting policies</li>
                  <li>Performance improvements</li>
                  <li>Ability to watch for system calls events</li>
                  <li>Migrating to libbpf from BCC</li>
                  <li>Extend KubeArmor support on OpenShift and RKE</li>
                </ul>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column'
                }}
              >
                <h3 className="release-version">v0.5</h3>
                <ul className="release-items">
                  <li>Support for BPF-LSM policy enforcement</li>
                  <li>Integration with the Kubernetes admission controller</li>
                  <li>Support for the CRI-O container runtime engine.</li>
                </ul>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column'
                }}
              >
                <h3 className="release-version">v0.4</h3>
                <ul className="release-items">
                  <li>Apparmor-enforcer: skip non-regular profiles</li>
                  <li>Updated Policy Matcher</li>
                  <li>Updated SELinux Enforcer</li>
                  <li>Added fields for labels</li>
                  <li>Audit Mode fixes</li>
                </ul>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column'
                }}
              >
                <h3 className="release-version">v0.3</h3>

                <ul className="release-items">
                  <li>Default Security Posture</li>
                  <li>ProcessName, ParentProcessName fields in all telemetry events</li>
                  <li>Improved Support for Virtual Machines</li>
                  <li>Support for KubeArmor on GKE Rapid Release, Regular & Stable channels</li>
                </ul>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column'
                }}
              >
                <h3 className="release-version">v0.2</h3>
                <ul className="release-items">
                  <li>EKS Cluster Support</li>
                  <li>Helm Chart for KubeArmor</li>
                  <li>Enable host policy in VM mode</li>
                  <li>"Stable release image"</li>
                </ul>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexDirection: 'column'
                }}
              >
                <h3 className="release-version">v0.1</h3>
                <ul className="release-items">
                  <li>Initial Release of KubeArmor</li>
                </ul>
              </div>
            </div>
          </Chrono>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
