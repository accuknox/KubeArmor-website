import React from 'react';

const Demopolicies4 = () => {
  return (
    <div className="pt-3 px-3 pb-3 demopoliciestext demopoliciescard">
      <div style={{ width: '100%' }}>
        <p style={{ marginBottom: '11px' }}>apiVersion: security.accuknox.com/v1</p>
        <p style={{ marginBottom: '11px' }}>kind: KubeArmorPolicy</p>
        <p style={{ marginBottom: '11px' }}>metadata: </p>
        <p style={{ marginLeft: '15px', marginBottom: '11px' }}>name: ksp-wordpress-sa-block</p>
        <p style={{ marginLeft: '15px', marginBottom: '11px' }}>namespace: wordpress-mysql</p>
        <p className="demopoliciesblack" style={{ marginBottom: '11px' }}>spec:</p>
        <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '11px' }}>severity: 8</p>
        <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '11px' }}>tags: ["MITRE"]</p>
        <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '11px' }}>message: "block the k8s credential access"</p>
        <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '11px' }}>selector:</p>
        <p className="demopoliciesblack" style={{ marginLeft: '30px', marginBottom: '11px' }}>matchLabels:</p>
        <p className="demopoliciesblack" style={{ marginLeft: '50px', marginBottom: '11px' }}>app: wordpress</p>
        <p className="demopoliciesblack" style={{ marginLeft: '15px', marginBottom: '11px' }}>file:</p>
        <p className="demopoliciesblack" style={{ marginLeft: '30px', marginBottom: '11px' }}>matchDirectories:</p>
        <p style={{ marginLeft: '30px', marginBottom: '10px', color: '#D70000' }}>- dir : /run/secrets/kubernetes.io/serviceaccount/</p>
	      <p style={{ marginLeft: '45px', marginBottom: '10px', color: '#D70000' }}>recursive: true</p>
        <p style={{ marginLeft: '15px', marginBottom: '10px', color: '#D70000' }}>action: Block</p>
      </div>
    </div>
  );
};

export default Demopolicies4;
