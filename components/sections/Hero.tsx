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
      className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 md:pt-48 md:pb-32 overflow-x-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-y-0 right-0 w-[60vw] bg-neon-pink opacity-10 blur-[180px]" />

      <div className="absolute inset-y-0 left-0 w-[60vw] bg-neon-blue opacity-10 blur-[180px]" />

      {/* Content */}
      <div className="relative z-30 w-full px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-jedar text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-tighter uppercase mb-6">
          <span className="hero-word-sabiha inline-block">SABIHA</span>{" "}
          <span className="hero-word-aamir text-neon-pink neon-text-pink inline-block">
            AAMIR
          </span>
        </h1>

        <p className="font-black text-xs md:text-2xl tracking-[0.2em] md:tracking-[0.3em] uppercase mb-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="hero-badge bg-neon-blue px-3 py-1 text-white rounded-sm">
            AI CONTENT CREATOR
          </span>

          <span className="hidden md:block">/</span>

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
      <div className="absolute bottom-8 md:bottom-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-black text-xs tracking-widest uppercase text-neon-gold">
          SCROLL DOWN
        </span>

        <Icon icon="lucide:arrow-down" className="text-2xl text-neon-gold" />
      </div>
    </section>
  );
};

export default Hero;
