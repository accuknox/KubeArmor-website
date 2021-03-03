import React from 'react';

const Demopolicies4 = () => {
  return (
    <div className="pt-3 px-3 pb-3 demopoliciestext demopoliciescard">
      <div style={{ width: '100%' }}>
        {' '}
        <p className="demopoliciesblack">apiVersion: security.accuknox.com/v1</p>
        <p className="demopoliciesblack">kind: KubeArmorPolicy</p>
        <p className="demopoliciesblack">metadata: </p>
        <p className="demopoliciesblack" style={{ marginLeft: '20px' }}>
          name: ksp-wordpress-sa-block
        </p>
        <p className="demopoliciesblack" style={{ marginLeft: '20px' }}>
          namespace: wordpress-mysql
        </p>
        <p className="demopoliciesblack" style={{ marginBottom: '20px' }}>
          spec:
        </p>
        <p className="demopoliciesblack" style={{ marginLeft: '20px' }}>
          severity: 7
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
        <p className="demopoliciesblack" style={{ marginLeft: '20px' }}>
          file:
        </p>
        <p style={{ marginLeft: '55px', color: '#D70000' }}>matchDirectories:</p>
        <p className="dpfontsize" style={{ marginLeft: '55px', color: '#D70000' }}>
          - dir : /run/secrets/kubernetes.io/serviceaccount/
        </p>
        <p style={{ marginLeft: '55px', color: '#D70000' }}>recursive: true</p>
        <p className="dpfontsize" style={{ marginLeft: '20px' }}>
          # cat /run/secrets/kubernetes.io/serviceaccount/token
        </p>
        <p className="dpfontsize" style={{ marginLeft: '20px' }}>
          # curl https://$KUBERNETES_PORT_443_TCP_ADDR/api --insecure --header \
        </p>
        <p className="dpfontsize" style={{ marginLeft: '35px' }}>
          "Authorization: Bearer $(cat /run/secrets/kubernetes.io/serviceaccount/token)"
        </p>
        <p style={{ marginLeft: '35px', color: '#D70000' }}>action:</p>
        <p style={{ marginLeft: '55px', color: '#D70000' }}>Block</p>
      </div>
    </div>
  );
};

export default Demopolicies4;
