'use client';

import { useState, useEffect } from 'react';

import { Sling as Hamburger } from 'hamburger-react';
import Nav from './Nav';
import Logo from './Logo';
import Networks from './Networks';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuToggle = (state: boolean) => {
    setIsOpen(state);
  };
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = parseInt(document.body.style.top || '0', 10) * -1;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  return (
    <header className="bg-mainBg shadow-md  w-full xs:pt-4  lg:pt-6">
      <div className=" mx-auto flex xs:flex-row md:flex-col items-center xs:justify-between md:justify-start xs:px-4 xs:pb-4 lg:pb-6">
        <Logo />
        <div className="md:hidden  text-gradientTo">
          <Hamburger
            toggled={isOpen}
            toggle={() => handleMenuToggle(!isOpen)}
            size={24}
          />
        </div>
      </div>
      <div
        className={`flex flex-col justify-between p-2  fixed top-[90px] left-0 right-0 h-full bg-navBg opacity-90  z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        } md:hidden`}
      >
        <Nav closeMenu={() => setIsOpen(false)} />
        <div className="xs:pb-24 md:pb-4 flex xs:flex-col">
          <Networks />
        </div>
      </div>
      <div className="hidden md:flex h-full gap-2  md:flex-col bg-navBg xs:py-2 md:py-4">
        <Nav closeMenu={() => {}} />
        <Networks />
      </div>
    </header>
  );
};
export default Header;
