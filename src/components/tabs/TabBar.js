import React from 'react';
import Tab from './Tab';
import useTabContext from '../../hooks/useTabContext';

function TabBar() {
  const tabs = useTabContext();

  if (tabs.tabList.length < 1) return;

  return (
    <div className="bg-dark-700 flex text-lg h-[50px] grow">
      <div className="h-full flex">
        {tabs.tabList.map((tab) => (
            <Tab tab={tab} key={tab.pathname} />
          ))
        }
      </div>
    </div>
  )
}

export default TabBar;
