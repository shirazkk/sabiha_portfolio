"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function Cursor() {
  const blobRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const velRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });

  useGSAP(() => {
    document.body.style.cursor = "none";

    const blobX = gsap.quickTo(blobRef.current, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    const blobY = gsap.quickTo(blobRef.current, "y", {
      duration: 0.35,
      ease: "power3.out",
    });

    const dotX = gsap.quickTo(dotRef.current, "x", {
      duration: 0.06,
      ease: "power4.out",
    });
    const dotY = gsap.quickTo(dotRef.current, "y", {
      duration: 0.06,
      ease: "power4.out",
    });

    const onMove = (e: MouseEvent) => {
      // Calculate velocity
      const vx = e.clientX - velRef.current.prevX;
      const vy = e.clientY - velRef.current.prevY;
      velRef.current.prevX = e.clientX;
      velRef.current.prevY = e.clientY;
      velRef.current.x = vx;
      velRef.current.y = vy;

      // Speed magnitude
      const speed = Math.sqrt(vx * vx + vy * vy);
      const clampedSpeed = Math.min(speed, 40);

      // Stretch amount based on speed
      const stretchX = 1 + clampedSpeed * 0.03;
      const stretchY = 1 - clampedSpeed * 0.015;

      // Rotation angle based on movement direction
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);

      gsap.to(blobRef.current, {
        scaleX: stretchX,
        scaleY: stretchY,
        rotation: angle,
        duration: 0.15,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Snap back to circle when slowing
      gsap.to(blobRef.current, {
        scaleX: 1,
        scaleY: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
        delay: 0.1,
        overwrite: false,
      });

      blobX(e.clientX);
      blobY(e.clientY);
      dotX(e.clientX);
      dotY(e.clientY);
    };

    window.addEventListener("mousemove", onMove);

    // Hover — blob fills neonGreen, dot hides
    const interactives = document.querySelectorAll("a, button");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(blobRef.current, {
          width: "56px",
          height: "56px",
          backgroundColor: "#00FF00",
          mixBlendMode: "difference",
          scaleX: 1,
          scaleY: 1,
          duration: 0.35,
          ease: "power3.out",
        });
        gsap.to(dotRef.current, {
          opacity: 0,
          duration: 0.2,
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(blobRef.current, {
          width: "36px",
          height: "36px",
          backgroundColor: "rgba(255,255,255,0.08)",
          mixBlendMode: "difference",
          duration: 0.35,
          ease: "power3.out",
        });
        gsap.to(dotRef.current, {
          opacity: 1,
          duration: 0.2,
        });
      });
    });

    // Click — squish down then elastic bounce
    const onClick = () => {
      gsap.timeline()
        .to(blobRef.current, {
          scaleX: 1.8,
          scaleY: 0.4,
          duration: 0.1,
          ease: "power4.in",
        })
        .to(blobRef.current, {
          scaleX: 1,
          scaleY: 1,
          duration: 0.7,
          ease: "elastic.out(1.2, 0.4)",
        });
    };

    window.addEventListener("click", onClick);

    // Fade on leave/enter
    const onLeave = () =>
      gsap.to([blobRef.current, dotRef.current], {
        opacity: 0,
        duration: 0.4,
      });

    const onEnter = () =>
      gsap.to([blobRef.current, dotRef.current], {
        opacity: 1,
        duration: 0.4,
      });

    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      {/* Morph blob */}
      <div
        ref={blobRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99998,
          mixBlendMode: "difference",
        }}
      />

      {/* Sharp center dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999,
        }}
      />
    </>
  );
}