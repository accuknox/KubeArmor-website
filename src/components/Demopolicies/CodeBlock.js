/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import copyIcon from '../../images/Accordion/copy.png';
import useCopyToClipboard from '../../hooks/UseCopyToClipboard';

const CodeBlock = ({ text }) => {
  const [copy] = useCopyToClipboard();

  const handleCopyText = async () => {
    await copy(text);
  };
  return (
    <div className="p-2 relative" style={{ backgroundColor: '#252937' }}>
      <code>
        <pre className="text-white">{text}</pre>
      </code>

      <OverlayTrigger
        key="copy"
        placement="bottom"
        overlay={<Tooltip id="tooltip-bottom">Copy</Tooltip>}
      >
        <span
          className="absolute flex justify-center items-center"
          onClick={handleCopyText}
          style={{
            backgroundColor: 'white',
            top: '10px',
            right: '10px',
            width: '30px',
            height: '30px',
            padding: '2px',
            cursor: 'pointer'
          }}
          id="copy"
        >
          <img src={copyIcon} alt="Copy Icon" style={{ height: '24px', width: '24px' }} />
        </span>
      </OverlayTrigger>
    </div>
  );
};

export default CodeBlock;
