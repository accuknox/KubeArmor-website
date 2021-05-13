import React from 'react';

const Demopolicies1 = () => {
  return (
    <div className="pt-3 px-3 pb-3 demopoliciestext demopoliciescard">
      <p style={{ marginBottom: '10px' }}>apiVersion: security.accuknox.com/v1</p>
      <p style={{ marginBottom: '10px' }}>kind: KubeArmorPolicy</p>
      <p style={{ marginBottom: '10px' }}>metadata: </p>
      <p style={{ marginLeft: '15px', marginBottom: '10px' }}>name: ksp-wordpress-config-block</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px' }}>namespace: wordpress-mysql</p>
      <p className="demopoliciesblack" style={{ marginBottom: '10px' }}>spec:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '10px' }}>severity: 10</p>
      <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '10px' }}>selector:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '30px', marginBottom: '10px' }}>matchLabels:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '50px', marginBottom: '10px' }}>app: wordpress</p>
      <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '10px' }}>file:</p>
      <p className="demopoliciesblack" style={{ marginLeft: '30px', marginBottom: '10px' }}>matchPaths:</p>
      <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#D70000' }}>- path: /var/www/html/wp-config.php</p>
      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#D70000' }}>fromSource:</p>
      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#D70000' }}>- path: /usr/sbin/apache2</p>
      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#D70000' }}>action: Allow</p>
      <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#D70000' }}>- path: /var/www/html/wp-config.php</p>
      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#D70000' }}>action: Block</p>
    </div>
  );
};

export default Demopolicies1;
