import React from 'react';
import CodeBlock from './CodeBlock';
import { demoCode } from './demoPoliciesCode';

const Demopolicies3 = () => {
  return (
    <div className="p-3 demopoliciestext demopoliciescard" style={{ background: '#252937' }}>
      <CodeBlock text={demoCode.code2} />
    </div>
  );
};

export default Demopolicies3;
