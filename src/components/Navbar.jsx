import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Section IDs for navigation
  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'projects', name: 'Projects' },
    { id: 'about', name: 'About' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'contact', name: 'Contact' }
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black shadow-md fixed w-full z-50 top-0 left-0 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a 
            href="#hero" 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('hero');
            }}
          >
            <img
              src="/logo.avif"
              alt="Krypt Media Logo"
              className="h-20 w-auto transition-transform duration-300"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className={`text-lg font-semibold transition-all duration-300 ${
                  activeSection === section.id 
                    ? 'text-yellow-400 scale-110' 
                    : 'text-white hover:text-yellow-100 hover:scale-105'
                }`}
                onClick={() => {
                  setActiveSection(section.id);
                  setIsOpen(false);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-8 h-8 relative flex items-center justify-center">
                <span
                  className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                ></span>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-black shadow-lg overflow-hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-3 space-y-4">
          {sections.map((section) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              className={`block text-xl font-medium transition-all ${
                activeSection === section.id
                  ? 'text-blue-500 pl-4 border-l-4 border-blue-500'
                  : 'text-white hover:text-blue-400'
              }`}
              onClick={() => {
                setActiveSection(section.id);
                setIsOpen(false);
              }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;