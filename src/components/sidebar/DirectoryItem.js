import React from 'react';
import File from '../File';
import useLevelContext from '../../hooks/useLevelContext';
import useTabContext from '../../hooks/useTabContext';

function DirectoryItem({ name, extension, pathname }) {
  const level = useLevelContext();
  const paddingLeft = `${level * 10}px`;

  const tabs = useTabContext();
  const handleClick = () => {
    tabs.addTab({name, extension, pathname});
  };

  return (
    <button onClick={handleClick} className="hover:bg-dark-400 py-1 font-medium block w-full" style={{paddingLeft: paddingLeft}}>
      <File name={name} extension={extension} />
    </button>
  );
}

export default DirectoryItem;
