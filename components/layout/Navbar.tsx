"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useLenis } from "lenis/react";

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(container.current, { y: -100 });
    gsap.set(".nav-link", { opacity: 0, y: -20 });
    gsap.set(".hire-me-btn", { opacity: 0, scale: 0.8 });

    tl.to(container.current, { y: 0, duration: 1, ease: "power3.out" })
      .to(".nav-link", { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, "-=0.5")
      .to(".hire-me-btn", { opacity: 1, scale: 1, duration: 0.5 }, "-=0.3");
  }, { scope: container });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId) as HTMLElement;
    if (element && lenis) {
      lenis.scrollTo(element, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    }
  };

  return (
    <nav ref={container} className="fixed top-0 left-0 w-full z-[100] px-6 lg:px-12 py-6 mix-blend-exclusion">
      <div className="flex items-center justify-between border-b-2 border-white pb-4">
        <div className="flex items-center gap-4 nav-link cursor-pointer" onClick={() => lenis?.scrollTo(0)}>
          <span className="font-black text-2xl tracking-tighter uppercase leading-none">
            SABIHA AAMIR
          </span>
          <span className="w-4 h-4 rounded-full bg-neon-green animate-pulse shadow-[0_0_15px_#00FF00]"></span>
        </div>
        <div className="hidden md:flex items-center gap-12 font-black text-sm tracking-widest uppercase">
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="nav-link hover:text-neon-pink transition-all duration-300">
            ABOUT
          </a>
          <a href="#work" onClick={(e) => handleNavClick(e, "#work")} className="nav-link hover:text-neon-blue transition-all duration-300">
            WORK
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")} className="nav-link hover:text-neon-green transition-all duration-300">
            SKILLS
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="nav-link hover:text-neon-gold transition-all duration-300">
            CONTACT
          </a>
        </div>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hire-me-btn bg-white text-black px-8 py-3 font-black text-sm uppercase tracking-widest hover:bg-neon-pink hover:text-white transition-all transform hover:-translate-y-1 active:translate-y-0"
        >
          HIRE ME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
