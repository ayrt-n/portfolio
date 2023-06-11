import React from 'react';
import apIcon from '../assets/images/ap_code_icon.png';
import KeyboardIcon from './KeyboardIcon';

function NoTabs() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center row-span-full">
      <img className=" h-40 md:h-60 mb-6" src={apIcon} alt="" />
      <div className="text-white-50a font-medium tracking-wide hidden md:grid grid-cols-commands gap-3">
        <span className="text-right">Toggle Menu</span>
        <div className="flex gap-x-2 items-center">
          <KeyboardIcon>⌘</KeyboardIcon>
          <KeyboardIcon>B</KeyboardIcon>
        </div>
        <span className="text-right">Throw Confetti!!</span>
        <div className="flex gap-x-2 items-center">
          <KeyboardIcon>⇧</KeyboardIcon>
          <KeyboardIcon>⌘</KeyboardIcon>
          <KeyboardIcon>K</KeyboardIcon>
        </div>
      </div>
    </div>
  );
}

export default NoTabs;
