import React, { useState } from 'react';

const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copyFn = async text => {
    if (!navigator?.clipboard) {
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      setCopiedText(null);
      return false;
    }
  };

  return [copyFn, copiedText];
};

export default useCopyToClipboard;
