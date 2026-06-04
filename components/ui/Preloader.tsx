"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const container = useRef<HTMLDivElement>(null);
  const leftCurtain = useRef<HTMLDivElement>(null);
  const rightCurtain = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
        if (container.current) container.current.style.display = "none";
      },
    });

    tl
      // Fade in name + role
      .to(".pl-content", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
      // Hold
      .to(".pl-content", { opacity: 0, duration: 0.35, ease: "power2.in" }, "+=0.7")
      // Progress bar sweep (runs in background)
      .to(".pl-progress", { scaleX: 1, duration: 2.2, ease: "none" }, 0)
      // Curtain split
      .to(leftCurtain.current,  { xPercent: -100, duration: 1.2, ease: "power4.inOut" }, "-=0.2")
      .to(rightCurtain.current, { xPercent:  100, duration: 1.2, ease: "power4.inOut" }, "<");
  }, { scope: container });

  return (
    <div ref={container} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">

      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="xMidYMid slice">
        <line x1="25%" y1="0" x2="25%" y2="100%" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/>
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/>
        <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/>
      </svg>

      {/* Corner brackets */}
      {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r",
        "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"
      ].map((cls, i) => (
        <div key={i} className={`absolute w-4 h-4 ${cls} border-white/20 z-10`} />
      ))}

      {/* Curtains */}
      <div ref={leftCurtain}  className="absolute inset-y-0 left-0 w-1/2 bg-[#0a0a0a] z-20" />
      <div ref={rightCurtain} className="absolute inset-y-0 right-0 w-1/2 bg-[#0a0a0a] z-20" />

      {/* Center content */}
      <div className="pl-content opacity-0 translate-y-2 z-30 text-center flex flex-col items-center gap-3">
        <p className="text-[10px] tracking-[0.35em] text-white/30 uppercase">Portfolio — 2026</p>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-5xl md:text-7xl text-white tracking-[0.18em] uppercase leading-none">
            Sabiha
          </h1>
          <div className="w-10 h-px bg-white/20" />
          <h1 className="text-5xl md:text-7xl text-white tracking-[0.18em] uppercase leading-none">
            Aamir
          </h1>
        </div>
        <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase">
          AI Content Creator &nbsp;·&nbsp; Prompt Engineer
        </p>
      </div>

      {/* Progress bar */}
      <div className="pl-progress absolute bottom-0 left-0 h-px w-full bg-white/40 origin-left scale-x-0 z-30" />
    </div>
  );
};