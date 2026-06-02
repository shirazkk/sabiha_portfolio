"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    gsap.set(".edu-heading", { x: -100, opacity: 0 });
    gsap.set(".edu-card", { y: 40, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(".edu-heading", { x: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .to(".edu-card", { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power2.out" }, "-=0.5");
  }, { scope: container });
return (
  <section 
    id="education" 
    ref={container} 
    className="py-32 bg-base relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <h2 className="edu-heading font-black text-[clamp(3rem,12vw,8rem)] leading-none tracking-tighter uppercase mb-24 text-white">
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