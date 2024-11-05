"use client"

import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#000000] to-[#2f0147] text-white sticky top-0">
      <div className="max-w-screen-2xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="\">
            <Image
              src="/images/initial.png"
              alt="home pic"
              width={100}
              height={100}
              // className="w-24 h-24 max-h-24 w-auto rounded-full"
            />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-xl font-bold">
              {/* <a href="/" className="hover:text-[#BC6FF1] px-3 py-2 rounded-md">
                Home
              </a>
              <a href="about" className="hover:text-[#BC6FF1] px-3 py-2 rounded-md">
                About
              </a> */}
              <a href="project" className="hover:text-[#BC6FF1] px-3 py-2 rounded-md">
                Projects
              </a>
              <a href="#contact" className="hover:text-[#BC6FF1] px-3 py-2 rounded-md">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#about" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#projects" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </a>
            <a href="#contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
