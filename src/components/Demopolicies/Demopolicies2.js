import React from 'react';

const Demopolicies2 = () => {
  return (
    <div className="pt-3 px-3 pb-3 demopoliciestext demopoliciescard">
      <p>apiVersion: security.accuknox.com/v1</p>
      <p>kind: KubeArmorPolicy</p>
      <p>metadata: </p>
      <p style={{ marginLeft: '20px' }}>name: ksp-mysql-dir-audit</p>
      <p style={{ marginLeft: '20px' }}>namespace: wordpress-mysql</p>
      <p className="demopoliciesblack" style={{ marginBottom: '20px' }}>
        spec:
      </p>
      <p className="demopoliciesblack" style={{ marginLeft: '20px' }}>
        selector:
      </p>
      <p className="demopoliciesblack" style={{ marginLeft: '35px' }}>
        matchLabels:
      </p>
      <p className="demopoliciesblack" style={{ marginLeft: '55px' }}>
        app: mysql
      </p>
      <p className="demopoliciesblack">file:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '35px' }}>
        {' '}
        matchDirectories:
      </p>
      <p className="demopoliciesblack" style={{ marginLeft: '35px' }}>
        - dir: <span style={{ color: '#D70000' }}>/var/lib/mysql/</span>
      </p>
      <p className="demopoliciesblack" style={{ marginLeft: '45px' }}>
        recursive: true
      </p>

      <p style={{ color: '#D70000' }}>action:</p>
      <p style={{ marginLeft: '15px', color: '#D70000' }}>Audit</p>
      <p className="demopoliciesblack">severity: 1 </p>
    </div>
  );
};

export default Demopolicies2;
