"use client";

import React from "react";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-40 overflow-hidden">
      {/* Background Overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-pink opacity-10 blur-[150px] rotate-12"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-neon-blue opacity-10 blur-[150px] -rotate-12"></div>

      {/* Hero Content */}
      <div className="relative z-30 text-center px-4">
        <h1 className="font-black text-[16vw] md:text-[14vw] leading-[0.8] tracking-tighter uppercase mb-4">
          SABIHA <span className="text-neon-pink neon-text-pink">AAMIR</span>
        </h1>
        <p className="font-black text-lg md:text-2xl tracking-[0.3em] uppercase mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="bg-neon-blue px-4 py-1 text-white">
            AI CONTENT CREATOR
          </span>
          <span className="hidden md:block">/</span>
          <span className="bg-neon-green px-4 py-1 text-black">
            PROMPT ENGINEER
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#work"
            className="clash-gradient-1 px-12 py-5 font-black text-xl uppercase tracking-widest text-white shadow-[8px_8px_0px_#FFFFFF] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
          >
            VIEW WORK
          </a>
          <a
            href="#contact"
            className="bg-white text-black px-12 py-5 font-black text-xl uppercase tracking-widest shadow-[8px_8px_0px_#FF1493] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
          >
            HIRE ME
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-black text-xs tracking-widest uppercase text-neon-gold">
          SCROLL DOWN
        </span>
        <Icon icon="lucide:arrow-down" className="text-2xl text-neon-gold" />
      </div>
    </section>
  );
};

export default Hero;
