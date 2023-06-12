import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import TabBar from './tabs/TabBar';

function Navbar({ toggleDrawer }) {
  return (
    <div className="md:bg-inherit bg-dark-600 md:sticky fixed top-0 left-0 right-0">
      <div className="flex">
        <button onClick={toggleDrawer} className="min-h-[50px] min-w-[50px] bg-dark-600 flex items-center px-3 md:hidden block group outline-none">
          <Bars3Icon className="text-white-50a w-6 h-6 group-focus:text-white-75a" />
        </button>

        <TabBar />
      </div>
    </div>
  );
}

export default Navbar;
