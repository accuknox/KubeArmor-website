/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Accordion, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import arrowDown from '../../images/Accordion/arrow-down.png';
import arrowRight from '../../images/Accordion/arrow-right.png';
import copyIcon from '../../images/Accordion/copy.png';
import useCopyToClipboard from '../../hooks/UseCopyToClipboard';

const accordionList = [
  {
    id: '1',
    title: 'Block access to k8s service account token',
    description:
      'K8s mounts the service account token as part of every pod by default. The service account token is a credential that can be used as bearer token to access k8s APIs and gain access to other k8s entities. Many a times there are no processes in the pod that use service account token which means in such cases the k8s service account token is an unused asset that can be leveraged by the attacker.',
    attackScenario:
      'An attacker would check for credential accesses so as to do lateral movements. For e.g., in most k8s attacks, the attacker after gaining entry into the k8s pods tries to use service account token and gain access into other entities.',
    samplePolicy: `apiVersion: security.kubearmor.com/v1
    kind: KubeArmorPolicy
    metadata:
      name: ksp-wordpress-block-sa
      namespace: wordpress-mysql
    spec:
      severity: 7
      selector:
        matchLabels:
          app: wordpress
      file:
        matchDirectories:
        - dir: /run/secrets/kubernetes.io/serviceaccount/
          recursive: true
    
          # cat /run/secrets/kubernetes.io/serviceaccount/token
          # curl https://$KUBERNETES_PORT_443_TCP_ADDR/api --insecure --header "Authorization: Bearer $(cat /run/secrets/kubernetes.io/serviceaccount/token)"
    
      action:
        Block`
  },
  {
    id: '2',
    title: 'File Integrity Monitoring (FIM)',
    description:
      'Changes to system binary folders, configuration paths, credentials paths needs to be monitored for change. With KubeArmor, one can not only monitor for changes but also block any write attempts in such system folders. Compliance frameworks such as PCI-DSS, SOX, NERC CIP, FISMA, HIPAA, SANS expect FIM to be in place.',
    attackScenario:
      'An attacker might want to update the configuration so as to disable security controls or access logs.',
    samplePolicy: `apiVersion: security.kubearmor.com/v1
    kind: KubeArmorPolicy
    metadata:
      name: fim-for-system-paths
      namespace: dvwa
    spec:
      action: Block
      file:
        matchDirectories:
        - dir: /bin/
          readOnly: true
          recursive: true
        - dir: /sbin/
          readOnly: true
          recursive: true
        - dir: /usr/sbin/
          readOnly: true
          recursive: true
        - dir: /usr/bin/
          readOnly: true
          recursive: true
      message: Alert! An attempt to write to system directories denied.
      severity: 5
      tags:
      - NIST
      - PCI-DSS`
  },
  {
    id: '3',
    title: 'Deny updates to root certs or trust bundles',
    description: `Adversaries may install a root certificate on a compromised system to avoid warnings when connecting to adversary controlled web servers. Root certificates are used in public key cryptography to identify a root certificate authority (CA). When a root certificate is installed, the system or application will trust certificates in the root's chain of trust that have been signed by the root certificate. Installation of a root certificate on a compromised system would give an adversary a way to degrade the security of that system.`,
    attackScenario:
      'Adversaries have used this technique to avoid security warnings prompting users when compromised systems connect over HTTPS to adversary controlled web servers that spoof legitimate websites in order to collect login credentials.',
    samplePolicy: `apiVersion: security.kubearmor.com/v1
    kind: KubeArmorPolicy
    metadata:
      name: protect-trust-bundles
      namespace: dvwa
    spec:
      action: Block
      file:
        matchDirectories:
        - dir: /etc/ssl/
          readOnly: true
          recursive: true
        - dir: /etc/pki/
          readOnly: true
          recursive: true
        - dir: /usr/local/share/ca-certificates/
          readOnly: true
          recursive: true
      message: Credentials modification denied
      severity: 1
      tags:
      - MITRE
      - MITRE_T1552_unsecured_credentials`
  },
  {
    id: '4',
    title: 'Process Whitelisting',
    description:
      'You can use a security feature called "process isolation" or "process whitelisting" to set specific processes to be executed as part of a container or pod, and deny everything else. This can help to secure a containerized environment by limiting the processes that can run within it, and preventing unauthorized processes from being executed.',
    attackScenario:
      'Attacker uses command injection techniques to insert binaries in the pods/workloads and then execute the binary. Process-Whitelisting will deny any unknown process from execution.',
    samplePolicy: `apiVersion: security.kubearmor.com/v1
    kind: KubeArmorPolicy
    metadata:
      name: allow-specific-process
      namespace: dvwa
    spec:
      action: Allow
      file:
        matchDirectories:
        - dir: /
          recursive: true
      process:
        matchPaths:
        - path: /bin/bash
        - fromSource:
          - path: /bin/dash
          path: /bin/ping
        - fromSource:
          - path: /usr/sbin/apache2
          path: /bin/sh
        - path: /usr/sbin/apache2
      selector: 
        matchLabels:
          app: dvwa-web
          tier: frontend
      severity: 1`
  },
  {
    id: '5',
    title: 'Process Whitelisting',
    description:
      'You can use a security feature called "process isolation" or "process whitelisting" to set specific processes to be executed as part of a container or pod, and deny everything else. This can help to secure a containerized environment by limiting the processes that can run within it, and preventing unauthorized processes from being executed.',
    attackScenario:
      'Attacker uses command injection techniques to insert binaries in the pods/workloads and then execute the binary. Process-Whitelisting will deny any unknown process from execution.',
    samplePolicy: `apiVersion: security.kubearmor.com/v1
    kind: KubeArmorPolicy
    metadata:
      name: allow-specific-process
      namespace: dvwa
    spec:
      action: Allow
      file:
        matchDirectories:
        - dir: /
          recursive: true
      process:
        matchPaths:
        - path: /bin/bash
        - fromSource:
          - path: /bin/dash
          path: /bin/ping
        - fromSource:
          - path: /usr/sbin/apache2
          path: /bin/sh
        - path: /usr/sbin/apache2
      selector: 
        matchLabels:
          app: dvwa-web
          tier: frontend
      severity: 1`,
    additionalInfo:
      'This policy allows apache2, ping and few shell accesses in the pod and denies everything else'
  },
  {
    id: '6',
    title: 'Deny execution of specific binaries in the pod',
    description:
      'Pods/Containers might get shipped with binaries which should never used in the production environments. Some of those bins might be useful in dev/staging environments but the same container image is carried forward in most cases to the production environment too. For security reasons, the devsecops team might want to disable use of these binaries in the production env even though the bins exists in the container. As an example, most of the container images are shipped with package management tools such as apk, apt, yum, etc. If anyone ends up using these bins in the prod env, it will increase the attack surface of the container/pod.',
    attackScenario:
      'Attackers use system tools such fsck, ip, who, apt etc for reconnaissance and to download its accessory tooling from the remote servers.',
    samplePolicy: `apiVersion: security.kubearmor.com/v1
    kind: KubeArmorPolicy
    metadata:
      name: ksp-wordpress-block-process
      namespace: wordpress-mysql
    spec:
      severity: 3
      selector:
        matchLabels:
          app: wordpress
      process:
        matchPaths:
        - path: /usr/bin/apt
        - path: /usr/bin/apt-get
      action:
        Block`,
    policyInfo:
      'This policy denies execution of package management tools such as apt, apt-get in the target pods.'
  },
  {
    id: '7',
    title: 'Limit access to raw database tables in the pod',
    description:
      'MySQL and other database systems keep their raw tables in a specific folder path. This path can either if a path in a volume mount or local to the pod. Typically, these raw tables are accessed only by certain set of processes such as mysqld, mysqldump, mysqladmin. Any other binary should never be allowed to read or write into this folder.',
    attackScenario: `Attackers will try to:
    exfiltrate the raw tables to obtain user and other information
    encrypt the contents of the files associated with tables for ransomware purpose
    delete the tables to cause system downtime`,
    samplePolicy: null
  },
  {
    id: '8',
    title: 'Allow only specific processes to use network primitives',
    description:
      'Typically, within a pod/container there are only specific processes that need to use network access. KubeArmor allows one to specify the set of binaries that are allowed to use network primitives such as TCP, UDP, Raw sockets and deny everyone else.',
    attackScenario:
      'An attacker binary would try to send a beacon to its C&C (Command and Control) Server. Also the binary might use the network primitives to exfiltrate pod/container data/configuration.',
    samplePolicy: null
  }
];

const CodeBlock = ({ text }) => {
  const [copy] = useCopyToClipboard();

  const handleCopyText = async () => {
    await copy(text);
  };
  return (
    <div className="bg-gray-200 p-2 relative">
      <code>
        <pre>{text}</pre>
      </code>

      <OverlayTrigger
        key="copy"
        placement="bottom"
        overlay={<Tooltip id="tooltip-bottom">Copy</Tooltip>}
      >
        <span
          className="absolute flex justify-center items-center"
          onClick={handleCopyText}
          style={{
            backgroundColor: 'white',
            top: '10px',
            right: '10px',
            width: '30px',
            height: '30px',
            padding: '2px',
            cursor: 'pointer'
          }}
          id="copy"
        >
          <img src={copyIcon} style={{ height: '24px', width: '24px' }} />
        </span>
      </OverlayTrigger>
    </div>
  );
};

const UseCasesAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <div className="flex justify-center items-center flex-col w-full p-3">
      <h1 className=" font-weight-bold text-center blue-heading mb-12 mt-6">Use Cases</h1>
      <Accordion
        onSelect={e => setActiveAccordion(e)}
        style={{ width: '75%', marginBottom: '30px' }}
        className="accordian"
      >
        <div className="flex flex-col gap-4">
          {accordionList.map(accordion => {
            return (
              <Card style={{ border: '1px solid black', borderRadius: '5px' }}>
                <Card.Header
                  style={{
                    padding: '0 10px 0 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60px'
                  }}
                >
                  <Accordion.Toggle
                    variant="link"
                    eventKey={accordion.id}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <div className="flex justify-between items-center gap-3">
                      <img
                        src={activeAccordion === accordion.id ? arrowDown : arrowRight}
                        alt="arrow"
                        style={{ height: '16px', width: '16px' }}
                      />
                      <span style={{ color: 'black', fontWeight: '500' }}>{accordion.title}</span>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={accordion.id}>
                  <Card.Body
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    <div>
                      <h4>Description</h4>
                      <p>{accordion.description}</p>
                    </div>
                    <div>
                      <h4>Attack Scenario</h4>
                      <p>{accordion.attackScenario}</p>
                    </div>
                    <div>
                      <h4>Sample Policy</h4>
                      {accordion.policyInfo ? <p>{accordion.policyInfo}</p> : null}
                      {accordion.samplePolicy ? (
                        <CodeBlock text={accordion.samplePolicy} />
                      ) : (
                        'TODO'
                      )}
                      {accordion.additionalInfo ? (
                        <p style={{ marginTop: '10px' }}>{accordion.additionalInfo}</p>
                      ) : null}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </div>
      </Accordion>
    </div>
  );
};

export default UseCasesAccordion;
