import React, { useState } from 'react';
import logo from '../assets/logo.avif';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black shadow-md fixed w-full z-20 top-0 left-0 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Hamburger menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 top-2.5' : 'top-1'
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'top-2.5'
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 bottom-2.5' : 'bottom-1'
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white text-lg font-semibold hover:text-blue-500 transition-all duration-300 hover:scale-110"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-black shadow-md px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-60 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="space-y-4">
          {['Home', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="block text-white text-xl font-medium hover:text-blue-500 transition-all duration-300 hover:scale-105"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
