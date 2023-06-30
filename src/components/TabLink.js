import React from 'react';
import useTabContext from '../hooks/useTabContext';

function TabLink({ tab, children }) {
  const tabs = useTabContext();

  const handleClick = () => {
    tabs.addTab({name: tab.name, extension: tab.extension, component: tab.component });
  };

  return (
    <button onClick={handleClick} className="font-bold text-yellow">
      {children}
    </button>
  );
}

export default TabLink;
