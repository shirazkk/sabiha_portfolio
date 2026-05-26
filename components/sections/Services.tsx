"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".services-heading", 
      { x: -100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 85%",
        }
      }
    );
    gsap.set(".service-card", { y: 60, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
    });

    tl.to(".service-card", { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 })
      .to(".middle-card", {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
      }, "-=0.2");
  }, { scope: container });

  return (
    <section id="services" ref={container} className="py-32 bg-neon-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="services-heading font-black text-[clamp(4rem,11vw,8rem)] leading-none tracking-tighter uppercase mb-24 text-black">
          SERVICES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-8 border-black shadow-[20px_20px_0px_#000000]">
          {/* Freelance */}
          <div className="service-card bg-white p-12 flex flex-col border-b-8 lg:border-b-0 lg:border-r-8 border-black">
            <h3 className="font-black text-4xl uppercase mb-4 text-black">
              FREELANCE
            </h3>
            <p className="font-bold uppercase text-neon-pink mb-12">
              SINGLE PROJECTS
            </p>
            <ul className="space-y-4 mb-12 flex-1 font-black uppercase text-lg">
              <li>— AI VIDEO</li>
              <li>— REELS</li>
              <li>— CAPTIONS</li>
              <li>— HOOK EDITS</li>
            </ul>
            <a
              href="#contact"
              className="bg-black text-white px-8 py-4 text-center font-black uppercase hover:bg-neon-pink transition-all"
            >
              BOOK NOW
            </a>
          </div>

          {/* Full Service */}
          <div className="service-card middle-card bg-black p-12 flex flex-col border-b-8 lg:border-b-0 lg:border-r-8 border-black z-10">
            <h3 className="font-black text-4xl uppercase mb-4 text-white">
              FULL <br /> SERVICE
            </h3>
            <p className="font-bold uppercase text-neon-green mb-12">
              COMPLETE PRODUCTION
            </p>
            <ul className="space-y-4 mb-12 flex-1 font-black uppercase text-lg text-white">
              <li className="text-neon-green">+ AI PRODUCTION</li>
              <li className="text-neon-green">+ AD SCRIPTS</li>
              <li className="text-neon-green">+ BRAND IDENTITY</li>
              <li className="text-neon-green">+ AUTOMATION</li>
              <li className="text-neon-green">+ STRATEGY</li>
            </ul>
            <a
              href="#contact"
              className="bg-neon-green text-black px-8 py-4 text-center font-black uppercase hover:bg-white transition-all"
            >
              GET IT ALL
            </a>
          </div>

          {/* Brand Collab */}
          <div className="service-card bg-white p-12 flex flex-col">
            <h3 className="font-black text-4xl uppercase mb-4 text-black">
              BRAND <br /> COLLAB
            </h3>
            <p className="font-bold uppercase text-neon-blue mb-12">
              PARTNERSHIPS
            </p>
            <ul className="space-y-4 mb-12 flex-1 font-black uppercase text-lg">
              <li>— AD SCRIPTS</li>
              <li>— INFLUENCER</li>
              <li>— SYSTEMS</li>
            </ul>
            <a
              href="#contact"
              className="bg-black text-white px-8 py-4 text-center font-black uppercase hover:bg-neon-blue transition-all"
            >
              PARTNER UP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
