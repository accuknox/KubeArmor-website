import React from 'react';

const Demopolicies3 = () => {
  return (
    <div className="pt-3 px-3 pb-3 demopoliciestext demopoliciescard">
      <div style={{ width: '100%' }}>
        <p className="demopoliciesblack">apiVersion: security.accuknox.com/v1</p>
        <p className="demopoliciesblack">kind: KubeArmorPolicy</p>
        <p className="demopoliciesblack">metadata: </p>
        <p className="demopoliciesblack" style={{ marginLeft: '20px' }}>
          name: ksp-wordpress-process-block
        </p>
        <p className="demopoliciesblack" style={{ marginLeft: '20px' }}>
          namespace: wordpress-mysql
        </p>
        <p className="demopoliciesblack" style={{ marginBottom: '20px' }}>
          spec:
        </p>
        <p className="demopoliciesblack" style={{ marginLeft: '20px' }}>
          severity: 3
        </p>
        <p className="demopoliciesblack" style={{ marginLeft: '20px' }}>
          selector:
        </p>
        <p className="demopoliciesblack" style={{ marginLeft: '35px' }}>
          matchLabels:
        </p>
        <p className="demopoliciesblack" style={{ marginLeft: '55px' }}>
          app: wordpress
        </p>
        <p style={{ marginLeft: '20px', color: '#D70000' }}>Process:</p>
        <p style={{ marginLeft: '55px', color: '#D70000' }}>matchPaths:</p>
        <p style={{ marginLeft: '55px', color: '#D70000' }}>- path: /usr/bin/apt</p>
        <p style={{ marginLeft: '55px', color: '#D70000' }}>- path: /usr/bin/apt-get</p>
        <p style={{ marginLeft: '20px', color: '#D70000' }}>action:</p>
        <p style={{ marginLeft: '55px', color: '#D70000' }}>Block</p>
      </div>
    </div>
  );
};

export default Demopolicies3;
