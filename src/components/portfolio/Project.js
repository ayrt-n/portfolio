import React from 'react';

function Project({ children }) {
  return (
    <div className="flex items-center gap-x-4 mb-8">
      {children}
    </div>
  )
}

export default Project;
