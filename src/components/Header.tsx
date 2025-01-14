"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuToggle = (state: boolean) => {
    setIsOpen(state);
    if (state) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="bg-mainBg shadow-md  w-full xs:pt-4  lg:pt-6">
      <div className=" mx-auto flex xs:flex-row md:flex-col items-center xs:justify-between md:justify-start xs:px-4 xs:pb-4 lg:pb-6">
        <Link href="/" className="  ">
          <Image
            src="/Logo.png"
            alt="Malena Design Atelier"
            width={400}
            height={400}
            className="object-contain md:mx-auto xs:w-32 md:w-40 xl:w-48 cursor-pointer"
          />
        </Link>
        <div className="md:hidden  text-gradientTo">
          <Hamburger
            toggled={isOpen}
            toggle={() => handleMenuToggle(!isOpen)}
            size={24}
          />
        </div>
      </div>
      <div
        className={`fixed top-[90px] left-0 right-0 h-full bg-navBg z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } md:hidden`}
      >
        <Nav closeMenu={() => setIsOpen(false)} />
      </div>
      <div className="hidden md:block">
        <Nav closeMenu={() => {}} />
      </div>
    </header>
  );
};
export default Header;
