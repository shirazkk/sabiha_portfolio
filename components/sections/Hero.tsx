"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { ShinyButton } from "../ui/shiny-button";
import { useLenis } from "lenis/react";
import { useLoading } from "../context/LoadingContext";

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const { loaded } = useLoading();

  const handleNavClick = (
    e: React.MouseEvent<HTMLElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(targetId) as HTMLElement;
    if (element && lenis) {
      lenis.scrollTo(element, { duration: 1.5 });
    }
  };

  useGSAP(
    () => {
      if (!loaded) return;
      const tl = gsap.timeline();

      gsap.set(".hero-word-sabiha", { x: -200, opacity: 0 });
      gsap.set(".hero-word-aamir", { x: 200, opacity: 0 });
      gsap.set(".hero-badge", { y: 30, opacity: 0 });
      gsap.set(".hero-cta", { scale: 0.8, opacity: 0 });

      tl.to(".hero-word-sabiha", {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          ".hero-word-aamir",
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "<",
        )
        .to(
          ".hero-badge",
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.5,
          },
          "-=0.4",
        )
        .to(
          ".hero-cta",
          {
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.2",
        );
    },
    { dependencies: [loaded], scope: container },
  );

  return (
    <section
      ref={container}
      className="relative w-full min-h-dvh flex flex-col items-center justify-center overflow-hidden "
    >
      {/* Atmospheric Radial Blooms */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-neon-pink/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-jedar text-[clamp(2.5rem,12vw,10rem)] leading-[0.85] tracking-tighter uppercase mb-6">
          <span className="hero-word-sabiha inline-block">SABIHA</span>{" "}
          <span className="hero-word-aamir text-neon-pink neon-text-pink inline-block">
            AAMIR
          </span>
        </h1>

        <p className="font-black text-[10px] md:text-2xl tracking-[0.15em] md:tracking-[0.3em] uppercase mb-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="hero-badge bg-neon-blue px-3 py-1 text-white rounded-sm">
            AI CONTENT CREATOR
          </span>

          <span className="hidden md:block opacity-50">/</span>

          <span className="hero-badge bg-neon-green px-3 py-1 text-black rounded-sm">
            PROMPT ENGINEER
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <div className="hero-cta">
            <ShinyButton
              href="#work"
              onClick={(e) => handleNavClick(e, "#work")}
              className="!px-4 sm:!px-6 md:!px-12 !py-3 md:!py-5 !text-xs sm:!text-base md:!text-xl !shadow-[4px_4px_0px_#FFFFFF] md:!shadow-[8px_8px_0px_#FFFFFF] hover:!shadow-none"
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
              className="!px-4 sm:!px-6 md:!px-12 !py-3 md:!py-5 !text-xs sm:!text-base md:!text-xl !shadow-[4px_4px_0px_#FF1493] md:!shadow-[8px_8px_0px_#FF1493] hover:!shadow-none"
              highlightColor="#FF1493"
              subtleColor="#0080FF"
            >
              <span className="text-white">HIRE ME</span>
            </ShinyButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-black text-[10px] md:text-xs tracking-widest uppercase text-neon-gold">
          SCROLL DOWN
        </span>
        <Icon icon="lucide:arrow-down" className="text-xl md:text-2xl text-neon-gold" />
      </div>
    </section>
  );
};

export default Hero;