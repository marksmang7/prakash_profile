import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white py-4 px-8 fixed w-full top-0 shadow-lg z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-purple">Know me better</h1>
            <nav className="space-x-6">
            <a href="#home" className="hover:text-pink transition">Home</a>
            <a href="#about" className="hover:text-pink transition">About</a>
            <a href="#projects" className="hover:text-pink transition">Projects</a>
            <a href="#resume" className="hover:text-pink transition">Resume</a>
            </nav>
        </div>
    </header>
  );
};

export default Header;
