import React from 'react';
import useTabContext from '../hooks/useTabContext';

function TabLink({ tab, className, children }) {
  const tabs = useTabContext();

  const handleClick = () => {
    tabs.addTab({name: tab.name, extension: tab.extension, component: tab.component });
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export default TabLink;
