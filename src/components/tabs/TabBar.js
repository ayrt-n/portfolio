import React from 'react';
import Tab from './Tab';
import useTabContext from '../../hooks/useTabContext';

function TabBar() {
  const tabs = useTabContext();

  if (tabs.tabList.length < 1) return;

  return (
    <div className="bg-dark-700 flex text-lg h-[50px] grow select-none sticky top-0 overflow-x-auto scrollbar-hide">
      <div className="h-full flex">
        {tabs.tabList.map((tab) => (<Tab tab={tab} key={tab.name} />))}
      </div>
    </div>
  )
}

export default TabBar;
