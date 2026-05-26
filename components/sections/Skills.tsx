"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".skills-heading", 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 85%",
        }
      }
    );
    gsap.utils.toArray<HTMLElement>(".skill-pill").forEach((pill) => {
      gsap.fromTo(pill,
        {
          x: gsap.utils.random(-300, 300),
          y: gsap.utils.random(-200, 200),
          rotation: gsap.utils.random(-45, 45),
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
          },
        }
      );
    });
  }, { scope: container });

  return (
    <section id="skills" ref={container} className="py-32 bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="skills-heading font-black text-[11vw] leading-none tracking-tighter uppercase mb-24 text-white">
          SKILLS
        </h2>

        <div className="space-y-20">
          <div>
            <h3 className="font-black text-xl text-neon-pink uppercase tracking-[0.3em] mb-12">
              // CORE TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-6">
              <span className="skill-pill bg-neon-pink text-white px-8 py-4 font-black text-2xl uppercase transform -rotate-2 hover:rotate-0 transition-all cursor-default inline-block">
                Prompt Engineering
              </span>
              <span className="skill-pill bg-neon-blue text-white px-8 py-4 font-black text-2xl uppercase transform rotate-1 hover:rotate-0 transition-all cursor-default inline-block">
                AI Video Gen
              </span>
              <span className="skill-pill bg-neon-green text-black px-8 py-4 font-black text-2xl uppercase transform rotate-3 hover:rotate-0 transition-all cursor-default inline-block">
                Visual Storytelling
              </span>
              <span className="skill-pill bg-white text-black px-8 py-4 font-black text-2xl uppercase transform -rotate-1 hover:rotate-0 transition-all cursor-default inline-block">
                AI Automation
              </span>
              <span className="skill-pill bg-neon-gold text-black px-8 py-4 font-black text-2xl uppercase transform rotate-2 hover:rotate-0 transition-all cursor-default inline-block">
                Hook-Based Edits
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-20">
            <div className="flex-1">
              <h3 className="font-black text-xl text-neon-blue uppercase tracking-[0.3em] mb-12">
                // THE STACK
              </h3>
              <div className="flex flex-wrap gap-4">
                <span className="skill-pill border-4 border-white text-white px-6 py-3 font-black text-lg uppercase inline-block">
                  ChatGPT
                </span>
                <span className="skill-pill border-4 border-neon-pink text-neon-pink px-6 py-3 font-black text-lg uppercase inline-block">
                  CapCut
                </span>
                <span className="skill-pill border-4 border-neon-green text-neon-green px-6 py-3 font-black text-lg uppercase inline-block">
                  Midjourney
                </span>
                <span className="skill-pill border-4 border-neon-gold text-neon-gold px-6 py-3 font-black text-lg uppercase inline-block">
                  Luma Dream
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-black text-xl text-neon-green uppercase tracking-[0.3em] mb-12">
                // LANGUAGES
              </h3>
              <div className="flex flex-wrap gap-4">
                <span className="skill-pill bg-white text-black px-8 py-4 font-black text-xl uppercase inline-block">
                  English — PRO
                </span>
                <span className="skill-pill bg-white text-black px-8 py-4 font-black text-xl uppercase inline-block">
                  Urdu — NATIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
