"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShinyButton } from "../ui/shiny-button";

gsap.registerPlugin(ScrollTrigger);
const SERVICE_TIERS = [
  {
    id: "01",
    title: "FREELANCE PRODUCTION",
    focus: "SINGLE PROJECTS",
    items: ["AI VIDEO", "REELS", "CAPTIONS", "HOOK EDITS"],
    accent: "var(--color-neon-pink)",
    cta: "BOOK PROJECT"
  },
  {
    id: "02",
    title: "FULL SERVICE STUDIO",
    focus: "COMPLETE PRODUCTION",
    items: ["AI PRODUCTION", "AD SCRIPTS", "BRAND IDENTITY", "AUTOMATION", "STRATEGY"],
    accent: "var(--color-neon-green)",
    cta: "GET FULL ACCESS"
  },
  {
    id: "03",
    title: "BRAND PARTNERSHIPS",
    focus: "COLLABORATIONS",
    items: ["AD SCRIPTS", "INFLUENCER SYSTEMS", "BRANDED CONTENT"],
    accent: "var(--color-neon-blue)",
    cta: "PARTNER UP"
  }
];

const Services = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal header
    gsap.fromTo(".inventory-header",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".inventory-header",
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Reveal rows on scroll individually
    const rows = gsap.utils.toArray<HTMLElement>(".service-row");
    
    gsap.set(rows, { y: 50, opacity: 0 });

    rows.forEach((row) => {
      gsap.to(row,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 95%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section 
      id="services" 
      ref={container} 
      className="relative py-24 md:py-48 bg-white text-black overflow-hidden border-t border-black/5"
    >
      {/* Atmospheric Radial Blooms (Increased opacity for white background) */}
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-neon-blue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vw] bg-neon-pink/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Inventory Header (Standardized Heading) */}
        <div className="inventory-header mb-24 md:mb-32 flex flex-col gap-8">
          <h2 className="font-black text-[clamp(3rem,12vw,8rem)] leading-[0.8] tracking-tighter uppercase text-black">
            SERVICES
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-black/10 pt-8">
            <p className="text-sm md:text-lg text-zinc-600 font-medium max-w-xl uppercase tracking-wider leading-tight">
              PREMIUM AI PRODUCTION FOR BRANDS AND CREATORS READY TO LEAD THE NEXT MEDIA SHIFT.
            </p>
            <div className="text-[10px] tracking-[0.3em] font-black text-black/20 uppercase">
              CAPABILITIES · 2026
            </div>
          </div>
        </div>

        {/* Tabular Catalogue Grid */}
        <div className="flex flex-col">
          {SERVICE_TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className="service-row group border-b border-black/10 py-12 md:py-20 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start relative transition-all hover:bg-black/[0.02]"
            >
              {/* Row Index */}
              <div className="lg:col-span-1">
                <span className="font-mono text-sm text-black/30">{tier.id}</span>
              </div>

              {/* Title & Category */}
              <div className="lg:col-span-4">
                <span 
                  className="text-[10px] tracking-[0.2em] font-bold uppercase mb-2 block"
                  style={{ color: tier.accent }}
                >
                  {tier.focus}
                </span>
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-black group-hover:translate-x-2 transition-transform duration-500">
                  {tier.title}
                </h3>
              </div>

              {/* List of Details (Tabular Spec) */}
              <div className="lg:col-span-4 flex flex-wrap gap-x-6 gap-y-2">
                {tier.items.map((item, i) => (
                  <span key={i} className="text-sm md:text-base font-bold text-zinc-600 uppercase tracking-tight">
                    — {item}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="lg:col-span-3 lg:justify-self-end w-full lg:w-auto mt-4 lg:mt-0">
                <ShinyButton
                  href="#contact"
                  className="w-full lg:w-auto"
                  highlightColor={tier.accent}
                >
                  {tier.cta}
                </ShinyButton>
              </div>
              
              {/* Row Glow Indicator - Hardware accelerated (js-batch-dom-css) */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity translate-z-0"
                style={{ backgroundColor: tier.accent, boxShadow: `0 0 15px ${tier.accent}` }}
              />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-[10px] tracking-[0.2em] font-medium text-black/20 uppercase text-center md:text-left">
          AVAILABLE FOR GLOBAL REMOTE ENGAGEMENTS · INQUIRE FOR CUSTOM SYSTEMS
        </div>
      </div>
    </section>
  );
};

export default Services;