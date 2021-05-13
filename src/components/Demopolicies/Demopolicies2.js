import React from 'react';

const Demopolicies2 = () => {
  return (
    <div className="pt-3 px-3 pb-3 demopoliciestext demopoliciescard">
      <p style={{ marginBottom: '10px' }}>apiVersion: security.accuknox.com/v1</p>
      <p style={{ marginBottom: '10px' }}>kind: KubeArmorPolicy</p>
      <p style={{ marginBottom: '10px' }}>metadata: </p>
      <p style={{ marginLeft: '15px', marginBottom: '10px' }}>name: ksp-mysql-dir-audit</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px' }}>namespace: wordpress-mysql</p>
      <p className="demopoliciesblack">spec:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '10px' }}>severity: 5</p>
      <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '10px' }}>selector:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '30px', marginBottom: '10px' }}>matchLabels:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '50px', marginBottom: '10px' }}>app: mysql</p>
      <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '10px' }}>file:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '30px', marginBottom: '10px' }}>matchDirectories:</p>
      <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#D70000' }}>- dir: /var/lib/mysql/</p>
      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#D70000' }}>recursive: true</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px', color: '#D70000' }}>action: Audit</p>
    </div>
  );
};

export default Demopolicies2;
