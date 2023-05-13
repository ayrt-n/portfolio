import React from 'react';
import Directory from './Directory';
import DirectoryItem from './DirectoryItem';

function Sidebar() {
  return (
    <div className="bg-dark-600 row-span-full group">
      <div className="h-[50px] bg-dark-600 flex items-center px-4">
        EXPLORER
      </div>

      <Directory name="ayrton_parkinson_portfolio">
        <Directory name="src">
          <Directory name="components">
            <DirectoryItem name="Home" extension="js" pathname="/home" />
          </Directory>
          <DirectoryItem name="About" extension="js" pathname="/about" />
          <DirectoryItem name="index" extension="js" pathname="/contact" />
        </Directory>
        <DirectoryItem name="" extension="gitignore" />
        <DirectoryItem name="tailwind.config" extension="js" />
      </Directory>
    </div>
  );
}

export default Sidebar;
