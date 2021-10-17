import React from 'react';

const Demopolicies4 = () => {
  return (
    <div
      className="pt-3 px-3 pb-3 demopoliciestext demopoliciescard"
      style={{ background: '#252937' }}
    >
      <p style={{ marginBottom: '11px', color: 'white' }}>apiVersion: security.accuknox.com/v1</p>
      <p style={{ marginBottom: '11px', color: 'white' }}>kind: KubeArmorPolicy</p>
      <p style={{ marginBottom: '11px', color: 'white' }}>metadata:</p>
      <p style={{ marginLeft: '15px', marginBottom: '11px', color: 'white' }}>
        name: ksp-wordpress-sa-block
      </p>
      <p style={{ marginLeft: '15px', marginBottom: '11px', color: 'white' }}>
        namespace: wordpress-mysql
      </p>
      <p style={{ marginBottom: '11px', color: '#0AFF00' }}>spec:</p>
      <p style={{ marginLeft: '15px', marginBottom: '11px', color: '#0AFF00' }}>severity: 8</p>
      <p style={{ marginLeft: '15px', marginBottom: '11px', color: '#0AFF00' }}>tags: ["MITRE"]</p>
      <p style={{ marginLeft: '15px', marginBottom: '11px', color: '#0AFF00' }}>
        message: "block the k8s credential access"
      </p>
      <p style={{ marginLeft: '15px', marginBottom: '11px', color: '#0AFF00' }}>selector:</p>
      <p style={{ marginLeft: '30px', marginBottom: '11px', color: '#0AFF00' }}>matchLabels:</p>
      <p style={{ marginLeft: '50px', marginBottom: '11px', color: '#0AFF00' }}>app: wordpress</p>
      <p style={{ marginLeft: '15px', marginBottom: '11px', color: '#FFD100' }}>file:</p>
      <p style={{ marginLeft: '30px', marginBottom: '11px', color: '#FFD100' }}>
        matchDirectories:
      </p>
      <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#FFD100' }}>
        - dir : /run/secrets/kubernetes.io/serviceaccount/
      </p>
      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#FFD100' }}>recursive: true</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px', color: '#FFD100' }}>action: Block</p>
    </div>
  );
};

export default Demopolicies4;
