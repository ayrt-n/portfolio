import React from 'react';
import vsIcon from '../assets/images/vs_code_icon.svg';

function NoTabs() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center row-span-full">
      <div>
        <img className="h-56 w-56 mb-6" src={vsIcon} alt="" />
      </div>
    </div>
  );
}

export default NoTabs;
