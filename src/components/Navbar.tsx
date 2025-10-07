// assets
import { cn } from "@/lib/utils";
import { useState } from "react";

import { navLinks } from "@/constants";

import { close, hamburger } from "../assets/icons/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* Desktop */}
      <div className=" md:sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container hidden md:flex h-16 max-w-screen-2xl items-center">
          <ul className="flex flex-1 items-center space-x-4 md:justify-end md:mr-8 md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                <li>{link.label}</li>
              </a>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile */}
      <nav className="md:hidden fixed top-5 right-6 z-40 flex justify-center items-center flex-col gap-12">
        <img
          src={toggle ? close : hamburger}
          alt="nav"
          className="w-6 h-6"
          onClick={() => setToggle(!toggle)}
        />
        <ul
          className={
            (cn("flex flex-col space-y-0 bg-red-600"),
            !toggle ? "hidden" : "openMenu")
          }
        >
          {navLinks.map((link) => (
            <a href={link.href} key={link.label} className="">
              <li className="">{link.label}</li>
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
