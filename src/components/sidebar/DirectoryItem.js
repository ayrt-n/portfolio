import React from 'react';
import File from '../File';
import useLevelContext from '../../hooks/useLevelContext';
import useTabContext from '../../hooks/useTabContext';
import classNames from 'classnames';

function DirectoryItem({ item, callback }) {
  const level = useLevelContext();
  const paddingLeft = `${level * 10}px`;

  const tabs = useTabContext();
  const selected = (tabs.current && tabs.current.name) === item.name
  const handleClick = () => {
    tabs.addTab({name: item.name, extension: item.extension, component: item.component });
    if (callback) { callback() }
  };

  const itemClass = classNames("hover:bg-dark-400 py-1 font-medium block w-full", { 'bg-dark-400' : selected });

  return (
    <button onClick={handleClick} className={itemClass} style={{paddingLeft: paddingLeft}}>
      <File name={item.name} extension={item.extension} />
    </button>
  );
}

export default DirectoryItem;
