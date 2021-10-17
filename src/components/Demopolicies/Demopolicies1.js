import React from 'react';

const Demopolicies1 = () => {
  return (
    <div
      className="pt-3 px-3 pb-3 demopoliciestext demopoliciescard"
      style={{ background: '#252937' }}
    >
      <p style={{ marginBottom: '10px', color: 'white' }}>apiVersion: security.accuknox.com/v1</p>
      <p style={{ marginBottom: '10px', color: 'white' }}>kind: KubeArmorPolicy</p>
      <p style={{ marginBottom: '10px', color: 'white' }}>metadata:</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px', color: 'white' }}>
        name: ksp-wordpress-config-block
      </p>
      <p style={{ marginLeft: '15px', marginBottom: '10px', color: 'white' }}>
        namespace: wordpress-mysql
      </p>
      <p style={{ marginBottom: '10px', color: '#0AFF00' }}>spec:</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px', color: '#0AFF00' }}>severity: 10</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px', color: '#0AFF00' }}>selector:</p>
      <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#0AFF00' }}>matchLabels:</p>
      <p style={{ marginLeft: '50px', marginBottom: '10px', color: '#0AFF00' }}>app: wordpress</p>
      <p style={{ marginLeft: '15px', marginBottom: '10px', color: '#FFD100' }}>file:</p>
      <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#FFD100' }}>matchPaths:</p>
      <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#FFD100' }}>
        - path: /var/www/html/wp-config.php
      </p>
      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#FFD100' }}>fromSource:</p>
      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#FFD100' }}>
        - path: /usr/sbin/apache2
      </p>
      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#FFD100' }}>action: Allow</p>
      <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#FFD100' }}>
        - path: /var/www/html/wp-config.php
      </p>
      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#FFD100' }}>action: Block</p>
    </div>
  );
};

export default Demopolicies1;
