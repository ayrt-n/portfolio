import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import TabBar from './tabs/TabBar';

function Navbar({ toggleDrawer }) {
  return (
    <div className="flex">
      <button onClick={toggleDrawer} className="min-h-[50px] min-w-[50px] bg-dark-600 flex items-center px-3 md:hidden block">
        <Bars3Icon className="text-white-50a w-6 h-6" />
      </button>

      <TabBar />
    </div>
  );
}

export default Navbar;
