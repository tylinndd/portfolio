import React from 'react';

const ScanlineOverlay = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-5"
      aria-hidden="true"
    ></div>
  );
};

export default ScanlineOverlay;