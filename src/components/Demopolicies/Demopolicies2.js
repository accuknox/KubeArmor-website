import React from 'react';

const Demopolicies2 = () => {
  return (
    <div
      className="pt-3 px-3 pb-3 demopoliciestext demopoliciescard"
      style={{ background: '#252937' }}
    >
      <p style={{ marginBottom: '10px', color: 'white' }}>apiVersion: security.accuknox.com/v1</p>
      <p style={{ marginBottom: '10px', color: 'white' }}>kind: KubeArmorPolicy</p>
      <p style={{ marginBottom: '10px', color: 'white' }}>metadata: </p>
      <p className="codetop">name: ksp-mysql-dir-audit</p>
      <p className="codetop">namespace: wordpress-mysql</p>
      <p style={{ color: '#0AFF00' }}>spec:</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px', color: '#0AFF00' }}>severity: 5</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px', color: '#0AFF00' }}>selector:</p>
      <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#0AFF00' }}>matchLabels:</p>
      <p style={{ marginLeft: '50px', marginBottom: '10px', color: '#0AFF00' }}>app: mysql</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px', color: '#FFD100' }}>file:</p>
      <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#FFD100' }}>
        matchDirectories:
      </p>
      <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#FFD100' }}>
        - dir: /var/lib/mysql/
      </p>
      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#FFD100' }}>recursive: true</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px', color: '#FFD100' }}>action: Audit</p>
    </div>
  );
};

export default Demopolicies2;
