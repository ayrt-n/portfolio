import React from 'react';

function KeyboardIcon({ children }) {
  return (
    <div className="bg-dark-400 w-6 text-xs rounded-sm h-5 relative flex justify-center items-center">
      {children}
      <span className="absolute h-full w-full border-b border-dark-500 left-0 bottom-[1px] rounded-sm" />
    </div>
  );
}

export default KeyboardIcon;
