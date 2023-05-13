import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import TabBar from './tabs/TabBar';
import { Outlet } from 'react-router-dom';
import TabProvider from '../contexts/tab/TabProvider';

function Dashboard() {
  const [tabs] = useState([
    {name: 'Home', extension: "js", pathname: "/home"},
    {name: 'About', extension: "js", pathname: "/about"},
  ]);

  return (
    <div className="font-sans grid grid-rows-dashboard grid-cols-dashboard min-h-screen">
      <TabProvider initialTabs={tabs}>
        <Sidebar />
        <TabBar />
      </TabProvider>
      <Outlet />
    </div>
  );
}

export default Dashboard;
