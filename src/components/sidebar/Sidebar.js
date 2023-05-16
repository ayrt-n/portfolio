import React from 'react';

function Sidebar({ open, children }) {
  return (
    <div className={`bg-dark-600 group select-none sticky top-0 max-h-screen ${open ? "min-w-[300px]" : "min-w-[50px]"}`}>
      <div className={`${!open && "hidden"}`}>
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
