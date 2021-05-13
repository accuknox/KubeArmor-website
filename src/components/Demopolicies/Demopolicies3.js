import React from 'react';

const Demopolicies3 = () => {
  return (
    <div className="pt-3 px-3 pb-3 demopoliciestext demopoliciescard">
      <p style={{ marginBottom: '11px' }}>apiVersion: security.accuknox.com/v1</p>
      <p style={{ marginBottom: '11px' }}>kind: KubeArmorPolicy</p>
      <p style={{ marginBottom: '11px' }}>metadata: </p>
      <p style={{ marginLeft: '15px', marginBottom: '11px' }}>name: ksp-wordpress-process-block</p>
      <p style={{ marginLeft: '15px', marginBottom: '11px' }}>namespace: wordpress-mysql</p>
      <p className="demopoliciesblack" style={{ marginBottom: '11px' }}>spec:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '11px' }}>severity: 3</p>
      <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '11px' }}>selector:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '30px', marginBottom: '11px' }}>matchLabels:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '50px', marginBottom: '11px' }}>app: wordpress</p>
      <p style={{ marginLeft: '15px', marginBottom: '11px', color: '#D70000' }}>process:</p>
      <p style={{ marginLeft: '30px', marginBottom: '11px', color: '#D70000' }}>matchPaths:</p>
      <p style={{ marginLeft: '30px', marginBottom: '11px', color: '#D70000' }}>- path: /usr/bin/apt</p>
      <p style={{ marginLeft: '30px', marginBottom: '11px', color: '#D70000' }}>- path: /usr/bin/apt-get</p>
      <p style={{ marginLeft: '15px', marginBottom: '11px', color: '#D70000' }}>action: Block</p>
    </div>
  );
};

export default Demopolicies3;
