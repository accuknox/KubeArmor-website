import React from 'react';

const Demopolicies1 = () => {
  return (
    <div className="pt-3 px-3 pb-3 demopoliciestext demopoliciescard">
      <p>apiVersion: security.accuknox.com/v1</p>
      <p>kind: KubeArmorPolicy</p>
      <p>metadata: </p>
      <p style={{ marginLeft: '20px' }}>name: ksp-wordpress-config-block</p>
      <p style={{ marginLeft: '20px' }}>namespace: wordpress-mysql</p>
      <p className="demopoliciesblack" style={{ marginBottom: '20px' }}>
        spec:
      </p>
      <p className="demopoliciesblack" style={{ marginLeft: '20px' }}>
        severity: 10
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
      <p className="demopoliciesblack">file:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '35px' }}>
        {' '}
        matchPaths:
      </p>
      <p style={{ marginLeft: '35px', color: '#D70000' }}>- path: /var/www/html/wp-config.php</p>
      <p style={{ marginLeft: '45px', color: '#D70000' }}>fromSource:</p>
      <p style={{ marginLeft: '60px', color: '#D70000' }}>path: /bin/cat</p>
      <p className="demopoliciesblack"># cd /var/www/html</p>
      <p className="demopoliciesblack"># cat wp-config.php</p>
      <p style={{ color: '#D70000' }}>action:</p>
      <p style={{ marginLeft: '15px', color: '#D70000' }}>Block</p>
    </div>
  );
};

export default Demopolicies1;
