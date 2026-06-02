"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { ShinyButton } from "../ui/shiny-button";
import { useLenis } from "lenis/react";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId) as HTMLElement;
    if (element && lenis) {
      lenis.scrollTo(element, { duration: 1.5 });
    }
  };

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
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-neon-pink opacity-10 blur-[150px] rotate-12"></div>
      <div className="absolute bottom-0 left-0 w-full md:w-1/3 h-full bg-neon-blue opacity-10 blur-[150px] -rotate-12"></div>

      {/* Hero Content */}
      <div className="relative z-30 text-center px-4 w-full max-w-[100vw] overflow-hidden">
        <h1 className="font-black text-[clamp(2.5rem,14vw,12rem)] leading-[0.8] tracking-tighter uppercase mb-4 overflow-hidden">
          <span className="hero-word-sabiha inline-block">SABIHA</span> <span className="hero-word-aamir text-neon-pink neon-text-pink inline-block">AAMIR</span>
        </h1>
        <p className="font-black text-sm md:text-2xl tracking-[0.2em] md:tracking-[0.3em] uppercase mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="hero-badge bg-neon-blue px-4 py-1 text-white inline-block rounded-sm">
            AI CONTENT CREATOR
          </span>
          <span className="hidden md:block">/</span>
          <span className="hero-badge bg-neon-green px-4 py-1 text-black inline-block rounded-sm">
            PROMPT ENGINEER
          </span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 px-4">
          <div className="hero-cta">
            <ShinyButton
              href="#work"
              onClick={(e) => handleNavClick(e, "#work")}
              className="!px-8 md:!px-12 !py-4 md:!py-5 !text-lg md:!text-xl !shadow-[8px_8px_0px_#FFFFFF] hover:!shadow-none"
              highlightColor="#00FF00"
              subtleColor="#FFFFFF"
              bgColor="#0080FF"
            >
              VIEW WORK
            </ShinyButton>
          </div>
          <div className="hero-cta">
            <ShinyButton
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="!px-8 md:!px-12 !py-4 md:!py-5 !text-lg md:!text-xl !shadow-[8px_8px_0px_#FF1493] hover:!shadow-none"
              highlightColor="#FF1493"
              subtleColor="#0080FF"
            >
              HIRE ME
            </ShinyButton>
          </div>
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
