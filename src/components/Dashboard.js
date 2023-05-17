import React from 'react';
import Sidebar from './sidebar/Sidebar';
import NoTabs from './NoTabs';
import useTabContext from '../hooks/useTabContext';
import Drawer from './sidebar/Drawer';
import { useToggle } from '../hooks/useToggle';
import { Bars3Icon } from '@heroicons/react/20/solid';
import Navbar from './Navbar';
import DirectoryList from './sidebar/DirectoryList';
import { directory } from '../utils/directory';

function Dashboard() {
  const tabs = useTabContext();
  const [drawerOpen, toggleDrawer] = useToggle(false);
  const [sidebarOpen, toggleSidebar] = useToggle(true);

  return (
    <div className="font-sans h-screen max-w-screen flex overflow-y-hidden">
      {/* Desktop Sidebar */}
      <div className="md:block hidden bg-dark-600">
        <button onClick={toggleSidebar} className="min-h-[50px] min-w-[50px] bg-dark-600 flex items-center px-3">
          <Bars3Icon className="text-white-50a w-6 h-6" />
        </button>
        <Sidebar open={sidebarOpen}>
          <DirectoryList directory={directory} />
        </Sidebar>
      </div>

      {/* Mobile drawer */}
      <div className="md:hidden block">
        <Drawer isOpen={drawerOpen} toggle={toggleDrawer}>
          <DirectoryList directory={directory} callback={toggleDrawer} />
        </Drawer>
      </div>
      
      {/* Main content and navbar */}
      <div className="grow">
        <Navbar toggleDrawer={toggleDrawer} />
        {tabs.current ?
          <div className="font-mono py-[32px] px-4 md:px-9 overflow-y-auto max-h-screen">
            <div className="max-w-[1200px]">
              {tabs.current.component}
            </div>
          </div> :
          <NoTabs />
        }
      </div>
    </div>
  );
}

export default Dashboard;
