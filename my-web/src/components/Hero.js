import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-8">
      <div className="text-center space-y-4 container-hero" >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          Hi There! 👋
        </motion.h2>
        <div>
        <h1  Style="display: inline-block; margin: 0 5px;"  className="text-6xl font-extrabold text-white-500"> I'M</h1>
        <h1 Style="display: inline-block; margin: 0 10px; padding: 10px;" className="text-6xl font-extrabold text-purple-500">Prakash V</h1>
        </div>
        
        <p className="text-2xl font-light text-gray-400"> Data Engineer | Developer</p>
        <img
          src="Images/illustration.png"
          alt="Developer Illustration"
          className="w-64 mx-auto mt-8"
        />
      </div>
    </section>
  );
};

export default Hero;
