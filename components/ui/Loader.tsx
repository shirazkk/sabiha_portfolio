"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete();
      },
    });

    tl.to(".loader-text", {
      opacity: 1,
      duration: 0.5,
    })
      .to(".loader-container", {
        opacity: 0,
        duration: 0.5,
        delay: 0.7,
        ease: "power2.inOut",
      });
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader-container fixed inset-0 z-50 flex items-center justify-center bg-base">
      <h1 className="loader-text font-black text-4xl uppercase tracking-widest opacity-0">
        SABIHA AAMIR
      </h1>
    </div>
  );
}
