import React from 'react';
import CodeBlock from './CodeBlock';
import { demoCode } from './demoPoliciesCode';

const Demopolicies2 = () => {
  return (
    <div className="p-3 demopoliciestext demopoliciescard" style={{ background: '#252937' }}>
      <CodeBlock text={demoCode.code3} />
    </div>
  );
};

export default Demopolicies2;
