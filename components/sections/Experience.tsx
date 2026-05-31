"use client";

import React, { useRef, memo } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Hoist static data (rerender-memo-with-default-value)
const EXPERIENCES = [
  {
    date: "MAY 2026 – NOW",
    company: "ORGANIC AND PURE",
    role: "PROMPT ENGINEER",
    color: "group-hover:text-neon-pink",
    bgColor: "group-hover:bg-neon-pink",
    tasks: [
      "AI-Powered Commercial Production",
      "Emotional Marketing Scripts",
      "Character Consistency Systems",
      "Short-Form Retention Content",
    ],
  },
  {
    date: "JAN 2026 – NOW",
    company: "SELF-EMPLOYED",
    role: "AI VIDEO EDITOR",
    color: "group-hover:text-neon-blue",
    bgColor: "group-hover:bg-neon-blue",
    tasks: [
      "Commercial AI-Generated Content",
      "Consistent Character Design",
      "Cinematic AI Reels",
    ],
  },
];

const Experience = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".exp-heading", 
      { x: -100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".exp-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    const blocks = container.current?.querySelectorAll(".exp-block");

    blocks?.forEach((block, index) => {
      gsap.fromTo(block, 
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".role-title").forEach((title) => {
      gsap.fromTo(title,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section 
      id="experience" 
      ref={container} 
      // rendering-content-visibility for performance on lower sections
      className="relative py-32 bg-white text-black overflow-hidden border-t border-black/5 [content-visibility:auto] [contain-intrinsic-size:1000px]"
    >
      {/* Atmospheric Radial Blooms */}
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vw] bg-neon-pink/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="exp-heading font-black text-[clamp(2.5rem,10vw,8rem)] leading-none tracking-tighter uppercase mb-24">
          EXPERIENCE
        </h2>
        <div className="space-y-32">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="exp-block grid grid-cols-1 md:grid-cols-12 gap-12 group">
              <div className="md:col-span-4">
                <div className={`bg-black text-white p-6 inline-block font-black text-xl uppercase mb-4 transition-colors ${exp.bgColor}`}>
                  {exp.date}
                </div>
                <p className="font-black text-sm tracking-widest uppercase">
                  {exp.company}
                </p>
              </div>
              <div className="md:col-span-8 overflow-hidden">
                <h3 className={`role-title font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase mb-8 transition-colors ${exp.color}`}>
                  {exp.role.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      {word} {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <ul className="space-y-4 text-xl font-bold uppercase tracking-tight">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex gap-4">
                      — {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;