"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Hoist static data (rerender-memo-with-default-value)
const EDUCATION_DATA = [
  {
    title: "BACHELOR'S IN AI",
    subtitle: "KFUEIT — UNIVERSITY",
    period: "2024 — 2028",
    color: "border-neon-pink",
    bgColor: "bg-neon-pink"
  },
  {
    title: "HIGH SCHOOL DIPLOMA",
    subtitle: "GOVT SECONDARY",
    period: "2021 — 2023",
    color: "border-neon-blue",
    bgColor: "bg-neon-blue"
  }
];

const Education = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".edu-heading", 
      { x: -100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".edu-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(".edu-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".edu-card",
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope: container });

  return (
    <section 
      id="education" 
      ref={container} 
      // rendering-content-visibility for performance
      className="py-32 bg-base relative overflow-hidden [content-visibility:auto] [contain-intrinsic-size:600px]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="edu-heading font-black text-[clamp(2.5rem,10vw,8rem)] leading-none tracking-tighter uppercase mb-24 text-white">
          EDUCATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className={`edu-card bg-surface p-12 border-l-[16px] ${edu.color}`}>
              <h3 className="font-black text-4xl uppercase mb-6 leading-[1] text-white">
                {edu.title.split(" IN ").map((part, i) => (
                  <React.Fragment key={i}>
                    {part} {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </h3>
              <p className="text-xl font-bold text-gray-400 mb-8 uppercase tracking-tighter">
                {edu.subtitle}
              </p>
              <span className={`${edu.bgColor} text-white px-4 py-2 font-black text-sm uppercase rounded-sm`}>
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;