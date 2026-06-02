"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShinyButton } from "../ui/shiny-button";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(".contact-btn", { y: 40, opacity: 0 });
    gsap.set(".c-lets", { x: -150, opacity: 0 });
    gsap.set(".c-create", { x: 150, opacity: 0 });
    gsap.set(".c-something", { y: 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(".c-lets", { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
      .to(".c-create", { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "<")
      .to(".c-something", { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
      .to(".c-cinematic", {
        duration: 0.8,
        onUpdate: function () {
          const glow = gsap.utils.interpolate(0, 20, this.progress());
          (this.targets()[0] as HTMLElement).style.textShadow = `0 0 ${glow}px #FF1493`;
        },
      }, "-=0.4")
      .to(".contact-btn", { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 }, "-=0.2");
  }, { scope: container });

  return (
    <section id="contact" ref={container} className="py-48 bg-white text-black relative overflow-hidden">
      {/* Atmospheric Radial Blooms */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-neon-pink/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10 overflow-hidden">
        <h2 className="font-black text-[clamp(3rem,12vw,8rem)] leading-[0.85] tracking-tighter uppercase mb-4 overflow-hidden">
          <span className="c-lets inline-block">LET&apos;S</span> <span className="c-create inline-block outline-text">CREATE</span>
        </h2>
        <h2 className="font-black text-[clamp(3rem,12vw,8rem)] leading-[0.85] tracking-tighter uppercase mb-16 overflow-hidden">
          <span className="c-something inline-block">SOMETHING</span> <span className="c-cinematic inline-block text-neon-pink">CINEMATIC</span>
        </h2>
        <p className="text-3xl font-black uppercase tracking-tighter mb-16">
          Ready for the next digital evolution?
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="contact-btn">
            <ShinyButton
              href="mailto:sabihaaamir2@gmail.com"
              ariaLabel="Send an email to Sabiha Aamir"
              className="!px-12 !py-6 !text-2xl"
              highlightColor="#FF007F" 
            >
              EMAIL ME
            </ShinyButton>
          </div>
          <div className="contact-btn">
            <ShinyButton
              href="https://linkedin.com/in/sabihaaamir"
              target="_blank"
              ariaLabel="Visit Sabiha Aamir's LinkedIn profile"
              className="!px-12 !py-6 !text-2xl !border-black/20"
              bgColor="#FFFFFF"
              fgColor="#000000"
              highlightColor="#0080FF"
            >
              LINKEDIN
            </ShinyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
