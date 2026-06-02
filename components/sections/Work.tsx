"use client";

import React, { useRef, memo } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects as PROJECTS, type Project } from "@/src/data/projects";
import { ShinyButton } from "@/components/ui/shiny-button";
import Image from "next/image";

// Register ScrollTrigger plugin at module level
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Memoize individual cards
const ProjectCard = memo(({ project }: { project: Project }) => {
  return (
    <div className="group relative flex flex-col bg-surface/30 border border-white/5 hover:border-neon-pink/30 transition-all duration-500 overflow-hidden max-w-[260px] md:max-w-[320px] mx-auto w-full">
      <div className="relative w-full bg-black aspect-[3/4]">
        <Image
          src={
            project.gallery[0]?.type === "video"
              ? project.gallery[0].thumbnail || ""
              : project.gallery[0]?.url
          }
          alt={project.title}
          fill
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />

        {/* Centered Hover Link */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <ShinyButton
            href={`/projects/${project.slug}`}
            className=" px-6! py-3! text-[10px]! font-black! uppercase! tracking-widest!"
          >
            View Project
          </ShinyButton>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-1">
        <span className="text-neon-pink font-black text-[9px] tracking-[0.2em] uppercase">
          {project.category}
        </span>
        <h3 className="text-base font-black tracking-tighter uppercase text-white group-hover:text-neon-pink transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-zinc-500 font-medium text-[10px] leading-snug line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-neon-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";
const Work = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".work-heading",
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      ).fromTo(
        ".project-grid-item",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7 },
        "-=0.5",
      );
    },
    { scope: container },
  );

  return (
    <section
      id="work"
      ref={container}
      className="py-20 md:py-28 bg-base overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="work-heading font-black text-[clamp(3rem,12vw,8rem)] leading-none tracking-tighter uppercase">
            WORK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="project-grid-item">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
