import React from 'react';
import useLevelContext from '../../hooks/useLevelContext';

function DirectoryItem({ children }) {
  const level = useLevelContext();
  const paddingLeft = `${level * 10}px`;

  return (
    <div className="hover:bg-dark-400 py-1" style={{paddingLeft: paddingLeft}}>
      {children}
    </div>
  );
}

export default DirectoryItem;
