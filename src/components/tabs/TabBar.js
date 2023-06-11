import React, { useEffect } from 'react';
import Tab from './Tab';
import useTabContext from '../../hooks/useTabContext';

function TabBar() {
  const tabs = useTabContext();
  const selectedTab = tabs.current ? tabs.current.name : null
  
  useEffect(() => {
    if (selectedTab) {
      const tab = document.querySelector(`[data-tab="${selectedTab}"]`);
      tab.scrollIntoView();
    }
  }, [selectedTab]);

  if (tabs.tabList.length < 1) return;

  return (
    <div className="bg-dark-700 flex font-medium text-lg h-[50px] grow select-none overflow-x-auto scrollbar-hide">
      {tabs.tabList.map((tab) => (<Tab tab={tab} key={tab.name} />))}
    </div>
  )
}

export default TabBar;
