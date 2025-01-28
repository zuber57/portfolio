import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className="container w-full mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">Zuber Ahmad</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="text-gray-800 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-800 hover:text-blue-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-800 hover:text-blue-500">
              Working Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-800 hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
