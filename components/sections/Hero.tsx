"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(".hero-word-sabiha", { x: -200, opacity: 0 });
    gsap.set(".hero-word-aamir", { x: 200, opacity: 0 });
    gsap.set(".hero-badge", { y: 30, opacity: 0 });
    gsap.set(".hero-cta", { scale: 0.8, opacity: 0 });

    tl.to(".hero-word-sabiha", { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
      .to(".hero-word-aamir", { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "<")
      .to(".hero-badge", { y: 0, opacity: 1, stagger: 0.15, duration: 0.5 }, "-=0.4")
      .to(".hero-cta", { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.2");
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-[100svh] w-full flex flex-col items-center justify-center pt-24 pb-40 overflow-hidden">
      {/* Background Overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-pink opacity-10 blur-[150px] rotate-12"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-neon-blue opacity-10 blur-[150px] -rotate-12"></div>

      {/* Hero Content */}
      <div className="relative z-30 text-center px-4">
        <h1 className="font-black text-[clamp(4rem,16vw,12rem)] leading-[0.8] tracking-tighter uppercase mb-4 overflow-hidden">
          <span className="hero-word-sabiha inline-block">SABIHA</span> <span className="hero-word-aamir text-neon-pink neon-text-pink inline-block">AAMIR</span>
        </h1>
        <p className="font-black text-base md:text-2xl tracking-[0.3em] uppercase mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="hero-badge bg-neon-blue px-4 py-1 text-white inline-block">
            AI CONTENT CREATOR
          </span>
          <span className="hidden md:block">/</span>
          <span className="hero-badge bg-neon-green px-4 py-1 text-black inline-block">
            PROMPT ENGINEER
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#work"
            className="hero-cta clash-gradient-1 px-12 py-5 font-black text-xl uppercase tracking-widest text-white shadow-[8px_8px_0px_#FFFFFF] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all inline-block"
          >
            VIEW WORK
          </a>
          <a
            href="#contact"
            className="hero-cta bg-white text-black px-12 py-5 font-black text-xl uppercase tracking-widest shadow-[8px_8px_0px_#FF1493] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all inline-block"
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
