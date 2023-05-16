import React from 'react';

function Project({ children }) {
  return (
    <div className="flex flex-wrap-reverse items-center gap-4">
      {children}
    </div>
  )
}

export default Project;
