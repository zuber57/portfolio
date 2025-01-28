import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <h1 className="text-6xl font-bold mb-4 text-center ">Zuber Ahmad</h1>
      <p className="text-2xl">
        Frontend Developer | React Js Developer | Shopify | Bigcommerce |
        Wordpress 
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
      >
        View My Work
      </a>
    </motion.section>
  );
};

export default Hero;
