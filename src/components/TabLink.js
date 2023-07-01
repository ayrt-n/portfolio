import React from 'react';
import useTabContext from '../hooks/useTabContext';
import classNames from 'classnames';

function TabLink({ tab, className, children }) {
  const defaultClasses = "font-bold text-yellow"
  const mergedClasses = classNames(defaultClasses, className);

  const tabs = useTabContext();

  const handleClick = () => {
    tabs.addTab({name: tab.name, extension: tab.extension, component: tab.component });
  };

  return (
    <button onClick={handleClick} className={mergedClasses}>
      {children}
    </button>
  );
}

export default TabLink;
