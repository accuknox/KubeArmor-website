import React from 'react';
import CodeBlock from './CodeBlock';
import { demoCode } from './demoPoliciesCode';

const Demopolicies1 = () => {
  return (
    <div className="p-2 demopoliciestext demopoliciescard" style={{ background: '#252937' }}>
      <CodeBlock text={demoCode.code1} />
    </div>
  );
};

export default Demopolicies1;
