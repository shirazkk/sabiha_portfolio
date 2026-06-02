"use client";

import React, { useEffect, useRef } from "react";
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

    // Initial delay to ensure everything is settled
    tl.to(".logo", { opacity: 1, duration: 0.5 })
      .to(".logo", { opacity: 0, duration: 0.5, delay: 0.5 })
      // Split and slide
      .to(leftCurtain.current, { xPercent: -100, duration: 1.5, ease: "power4.inOut" }, "-=0.2")
      .to(rightCurtain.current, { xPercent: 100, duration: 1.5, ease: "power4.inOut" }, "<");
  }, { scope: container });

  return (
    <div ref={container} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div ref={leftCurtain} className="absolute inset-y-0 left-0 w-1/2 bg-black z-20"></div>
      <div ref={rightCurtain} className="absolute inset-y-0 right-0 w-1/2 bg-black z-20"></div>
      
      <div className="logo opacity-0 z-30">
        <h1 className="font-jedar text-4xl md:text-6xl text-white tracking-tighter uppercase">
          SABIHA AAMIR
        </h1>
      </div>
    </div>
  );
};
