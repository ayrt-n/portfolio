import React from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import File from '../File';
import useTabContext from '../../hooks/useTabContext';

function Tab({ tab }) {
  const location = useLocation();
  const selected = location.pathname === tab.pathname;
  const tabs = useTabContext();

  const defaultClasses = "relative min-w-[175px] px-4 mr-[2px] h-full flex justify-center items-center border-t-2 border-transparent";
  const selectedClasses = { 'border-t-pink': selected, 'bg-dark-500': selected, 'bg-dark-600': !selected };
  const mergedClasses = classNames(defaultClasses, selectedClasses)

  return (
    <span className={mergedClasses}>
      <button onClick={() => tabs.switchTabs(tab)} className="absolute top-0 left-0 bottom-0 right-0" />
      <File name={tab.name} extension={tab.extension} />
      <button onClick={() => tabs.removeTab(tab)} className="z-10 ml-2 rounded-md p-1 hover:bg-dark-400 active:bg-dark-300">
        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>tab-close</title>
          <path fill='currentColor' d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
        </svg>
      </button>
    </span>
  );
}

export default Tab;
