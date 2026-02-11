
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass' : 'bg-transparent'}`}>
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-2">
            <a href="#home" className="font-semibold text-xl tracking-tight text-white">ThirdEye</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-xs font-normal">
            <a className="text-gray-300 hover:text-white transition-colors" href="#technology">Technology</a>
            <a className="text-gray-300 hover:text-white transition-colors" href="#solutions">Solutions</a>
            <a className="text-gray-300 hover:text-white transition-colors" href="#faq">FAQ</a>
            <a className="bg-white text-black px-4 py-1.5 rounded-full hover:bg-gray-100 transition-colors font-medium" href="#home">Request Demo</a>
          </div>
          
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
