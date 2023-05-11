import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import TabBar from './tabs/TabBar';
import File from './File';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  const [tabs, setTabs] = useState([
    {page: 'home', tabProps: { to: '/home' }, children: <File name="home" extension="rb" />},
    {page: 'about', tabProps: { to: '/about' }, children: <File name="about" extension="js" />},
    {page: 'contact', tabProps: { to: '/contact' }, children: <File name="contact" extension="js" />},
  ]);

  const removeTab = (page) => {
    setTabs(prev => (
      prev.filter(tab => tab.page !== page)
    ));
  };

  const addTab = (newTab) => {
    if (tabs.find(tab => (tab.page === newTab.page))) return;

    setTabs(prev => ([...prev, newTab]));
  };

  return (
    <div className="font-mono grid grid-rows-dashboard grid-cols-dashboard min-h-screen">
      <Sidebar addTab={addTab} />
      <TabBar tabs={tabs} removeTab={removeTab} />
      <Outlet />
    </div>
  );
}

export default Dashboard;
