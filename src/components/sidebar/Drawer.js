import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { Dialog } from '@headlessui/react';

function Drawer({ isOpen, toggle, children }) {
  return (
    <Dialog open={isOpen} onClose={toggle} as="div" className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex">
        <Dialog.Panel className="bg-dark-600 group fixed inset-y-0 select-none w-[300px]">
          <button onClick={toggle} className="min-h-[50px] min-w-[50px] bg-dark-600 flex items-center px-3 md:hidden block">
            <Bars3Icon className="text-white-50a w-6 h-6" />
          </button>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Drawer;
