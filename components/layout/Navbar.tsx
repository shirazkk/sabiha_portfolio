"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 lg:px-12 py-6 mix-blend-exclusion">
      <div className="flex items-center justify-between border-b-2 border-white pb-4">
        <div className="flex items-center gap-4">
          <span className="font-black text-2xl tracking-tighter uppercase leading-none">
            SABIHA AAMIR
          </span>
          <span className="w-4 h-4 rounded-full bg-neon-green animate-pulse shadow-[0_0_15px_#00FF00]"></span>
        </div>
        <div className="hidden md:flex items-center gap-12 font-black text-sm tracking-widest uppercase">
          <a href="#about" className="hover:text-neon-pink transition-all duration-300">
            ABOUT
          </a>
          <a href="#work" className="hover:text-neon-blue transition-all duration-300">
            WORK
          </a>
          <a href="#skills" className="hover:text-neon-green transition-all duration-300">
            SKILLS
          </a>
          <a href="#contact" className="hover:text-neon-gold transition-all duration-300">
            CONTACT
          </a>
        </div>
        <a
          href="#contact"
          className="bg-white text-black px-8 py-3 font-black text-sm uppercase tracking-widest hover:bg-neon-pink hover:text-white transition-all transform hover:-translate-y-1 active:translate-y-0"
        >
          HIRE ME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
