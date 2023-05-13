import React from 'react';
import useLevelContent from '../../hooks/useLevelContext';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import { LevelContext } from '../../contexts/level/LevelContext';
import DirectoryList from './DirectoryList';

function Directroy({ directory }) {
  const level = useLevelContent();

  const paddingLeft = `${level * 10}px`
  const marginLeft = `${(level + 1) * 10}px`

  const defaultClasses = "w-full py-1"
  const conditionalClasses = level === 0 ? "bg-dark-500 font-bold uppercase" : "hover:bg-dark-400 font-medium"
  const mergedClasses = classNames(defaultClasses, conditionalClasses);

  return (
    <Disclosure as="div" className="w-full cursor-pointer" defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className={mergedClasses} style={{paddingLeft: paddingLeft}}>
            <span className="flex items-center">
              <ChevronRightIcon className={`text-white-50a h-5 w-5 ${open ? "rotate-90 transform" : ""}`} />
              {directory.name}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="relative">
            <LevelContext.Provider value={level + 1}>
              {level > 0 && <div className="absolute z-10 border-l border-l-transparent h-full group-hover:border-l-dark-200 transition-colors" style={{marginLeft: marginLeft}} />}
              <DirectoryList directory={directory.children} />
            </LevelContext.Provider>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Directroy;
