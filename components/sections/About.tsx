"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(".about-stat", { y: 60, opacity: 0 });
    gsap.set(".about-bio", { y: 40, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(".about-heading", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .to(".about-stat", { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 }, "-=0.8")
      .to(".about-bio", { y: 0, opacity: 1, duration: 0.8 }, "-=0.5");
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-20 md:py-32 relative bg-white text-black overflow-hidden">
      {/* Atmospheric Radial Blooms */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-neon-pink/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex justify-end mb-16">
          <h2 className="about-heading font-black text-[clamp(2.5rem,10vw,8rem)] leading-none tracking-tighter uppercase text-neon-pink opacity-0">
            ABOUT Me
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="about-bio lg:col-span-7 flex flex-col justify-center">
            <div className="relative">
              <p className="font-black text-2xl md:text-5xl leading-tight tracking-tighter uppercase mb-12">
                I build <span className="bg-black text-white px-3">cinematic</span> digital universes using{" "}
                <span className="underline decoration-neon-pink decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">
                  advanced AI tools
                </span>{" "}
                and modern workflows.
              </p>
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 border-l-4 md:border-l-8 border-neon-blue pl-6 md:pl-8">
                Currently mastering Artificial Intelligence at KFUEIT. Bridging the gap between raw code and visual storytelling. Passionate about media automation and future digital aesthetics.
              </p>
              <p className="font-black text-xl md:text-2xl uppercase tracking-tighter flex flex-wrap gap-4">
                <span className="text-neon-blue">FREELANCE</span> • <span className="text-neon-pink">BRAND COLLAB</span> • <span className="text-neon-green">REMOTE</span>
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="about-stat bg-black text-white p-8 md:p-10 transform -rotate-3 hover:rotate-0 transition-all">
              <div className="text-5xl md:text-7xl font-black text-neon-green mb-2">2+</div>
              <div className="font-black text-xs md:text-sm uppercase tracking-widest">
                YEARS EXPERIENCE
              </div>
            </div>
            <div className="about-stat bg-neon-pink text-white p-8 md:p-10 transform rotate-2 hover:rotate-0 transition-all">
              <div className="text-5xl md:text-7xl font-black text-white mb-2">10+</div>
              <div className="font-black text-xs md:text-sm uppercase tracking-widest">
                PROJECTS COMPLETED
              </div>
            </div>
            <div className="about-stat bg-neon-blue text-white p-8 md:p-10 transform -rotate-1 hover:rotate-0 transition-all">
              <div className="text-5xl md:text-7xl font-black text-neon-gold mb-2">OPEN</div>
              <div className="font-black text-xs md:text-sm uppercase tracking-widest">
                TO WORK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
