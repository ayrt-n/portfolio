import React from 'react';
import DirectoryList from './DirectoryList';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { useToggle } from '../../hooks/useToggle';

function Sidebar({ directory }) {
  const [collapsed, toggleCollapsed] = useToggle(true);

  return (
    <div className={`bg-dark-600 row-span-full group select-none sticky top-0 max-h-screen ${collapsed ? "w-[300px]" : "w-[50px]"}`}>
      <button onClick={toggleCollapsed} className="h-[50px] bg-dark-600 flex items-center px-3">
        <Bars3Icon className="text-white-50a w-6 h-6" />
      </button>

      {collapsed && <DirectoryList directory={directory} />}
    </div>
  );
}

export default Sidebar;
