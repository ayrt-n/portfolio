import React from 'react';
import Tab from './Tab';
import useTabContext from '../../hooks/useTabContext';

function TabBar() {
  const tabs = useTabContext();

  if (tabs.tabList.length < 1) return;

  return (
    <div className="bg-dark-700 flex font-medium text-lg h-[50px] grow select-none overflow-x-auto scrollbar-hide">
      {tabs.tabList.map((tab) => (<Tab tab={tab} key={tab.name} />))}
    </div>
  )
}

export default TabBar;
