// assets
import { cn } from "@/lib/utils";
import { useState } from "react";

import { navLinks } from "@/constants/navlinks";

import { close, hamburger } from "../assets/icons/index";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* Desktop */}
      <div className="sticky top-0 z-50 w-full backdrop-blur-md supports-[backdrop-filter]:bg-background/40 flex items-center justify-center">
        <a href="/">
          <img
            src={logo}
            className="h-20 w-25 fixed top-1 left-10 "
            alt="logo"
          />
        </a>
        <nav className="container hidden md:flex h-25 max-w-screen-2xl items-center">
          <ul className="flex flex-1 items-center space-x-4 md:justify-end md:mr-17 md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                className="transition-colors hover:text-foreground/100 text-foreground/70"
              >
                <li>{link.label}</li>
              </a>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile */}
      <nav className="md:hidden fixed top-0 right-0 w-full h-24 z-40 backdrop-blur-md supports-[backdrop-filter]:bg-background/40">
        <img
          src={toggle ? close : hamburger}
          alt="nav"
          className={
            (cn("w-6 h-6"),
            close
              ? "fixed top-7 right-7 w-6 h-6 z-40 hover:cursor-pointer"
              : "")
          }
          onClick={() => setToggle(!toggle)}
        />
        <ul
          className={
            (cn(""),
            !toggle
              ? "hidden"
              : "fixed top-0 right-0 w-[80%] h-screen flex items-center flex-col gap-6 mt-24 supports-[backdrop-filter]:bg-background/80 backdrop-blur-md")
          }
        >
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              onClick={() => setToggle(!toggle)}
              className="block px-4 py-3"
            >
              <li className="text-[18px] font-medium ">{link.label}</li>
            </a>
          ))}
          <a href="/" className="mt-4">
            Utulivu Tours
          </a>
          <a href="mailto:utulivu.tours@gmail.com">utulivutours@gmail.com</a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
