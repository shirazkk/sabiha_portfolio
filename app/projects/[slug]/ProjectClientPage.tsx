"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ShinyButton } from "@/components/ui/shiny-button";
import { type Project, type MediaItem, type ProcessStep } from "@/src/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectClientPage({ project }: { project: Project }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── 1. HERO — category tag fades in first
      gsap.fromTo(
        ".hero-tag",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.1 },
      );

      // ── 2. HERO — main title slides in from left
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power4.out", delay: 0.25 },
      );

      // ── 3. HERO — subtitle fades up after title
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.6 },
      );

      // ── 4. MEDIA SECTION — label + grid fade in on scroll
      gsap.fromTo(
        ".media-label",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".media-section",
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        },
      );

      gsap.fromTo(
        ".media-item",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".media-section",
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        },
      );

      // ── 5. CHALLENGE SECTION — fade up on scroll
      gsap.fromTo(
        ".challenge-section",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".challenge-section",
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        },
      );

      // ── 6. PROCESS SECTION — heading fades up, cards stagger up
      gsap.fromTo(
        ".process-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-section",
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        },
      );

      gsap.fromTo(
        ".process-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        },
      );

      // ── 7. SIDEBAR — slides in from right on scroll
      gsap.fromTo(
        ".sidebar",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sidebar",
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        },
      );
    },
    { scope: container },
  );

  const hasVideo = project.gallery.some((item: MediaItem) => item.type === "video");

  return (
    <main ref={container} className="min-h-screen bg-base text-white">
      {/* Top Nav Bar */}
      <div className="sticky top-0 z-50 border-b border-white/5 bg-base/80 backdrop-blur-sm px-6 md:px-12 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={14} /> Back To Projects
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">

        {/* Hero Header */}
        <div className="mb-16 border-b border-white/10 pb-16">
          <p className="hero-tag text-neon-pink font-bold uppercase tracking-widest text-xs mb-4 opacity-0">
            {project.category}
          </p>
          <h1 className="hero-title text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 opacity-0">
            {project.title}
          </h1>
          <p className="hero-subtitle text-zinc-400 max-w-xl leading-relaxed opacity-0">
            {project.overview}
          </p>
        </div>

        {/* Media Gallery */}
        <div className="media-section mb-20">
          <h2 className="media-label text-xs font-bold uppercase tracking-widest text-neon-pink mb-8 opacity-0">
            {/* Project Media */}
          </h2>

          {hasVideo ? (
            <div className="flex flex-col items-center gap-6">
              {project.gallery.map((item: MediaItem, index: number) => (
                <div
                  key={index}
                  className="media-item w-full max-w-sm bg-black rounded-lg overflow-hidden border border-white/10 opacity-0"
                >
                  {item.type === "video" ? (
                    <video
                      src={item.url}
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.url}
                      alt={`${project.title} - ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((item: MediaItem, index: number) => (
                <div
                  key={index}
                  className={`media-item w-full bg-black rounded-lg overflow-hidden border border-white/10 opacity-0 ${
                    index === 0 ? "md:row-span-2" : ""
                  }`}
                >
                  <Image
                    src={item.url}
                    alt={`${project.title} - ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left — Main Content */}
          <div className="lg:col-span-2 space-y-16">

            {/* Challenge */}
            <section className="challenge-section opacity-0">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neon-pink mb-4">
                {/* 01 The Challenge */}
              </h2>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                What Needed To Be Solved
              </h3>
              <p className="text-zinc-400 leading-relaxed">{project.challenge}</p>
            </section>

            {/* Process */}
            <section className="process-section space-y-8">
              <div className="process-heading opacity-0">
                <h2 className="text-xs font-bold uppercase tracking-widest text-neon-pink mb-4">
                  {/* 02 My Process */}
                </h2>
                <h3 className="text-2xl font-black uppercase tracking-tight">
                  How I Built It
                </h3>
              </div>
              <div className="process-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.process.map((step: ProcessStep, i: number) => (
                  <div
                    key={i}
                    className="process-card group p-6 rounded border border-white/5 bg-white/[0.02] hover:border-neon-blue/40 hover:bg-neon-blue/[0.04] transition-all duration-300 opacity-0"
                  >
                    <span className="text-neon-pink text-xs font-bold font-mono mb-3 block">
                      0{i + 1}
                    </span>
                    <h4 className="font-black uppercase tracking-tight mb-2 text-sm">
                      {step.title}
                    </h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right — Sidebar */}
          <aside className="sidebar space-y-6 opacity-0">
            {/* Deliverables */}
            <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
              <p className="text-neon-pink text-xs font-bold uppercase tracking-widest mb-5">
                {/* Delivered */}
              </p>
              <ul className="space-y-3">
                {project.deliverables.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 size={14} className="text-neon-blue mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
              <p className="text-neon-pink text-xs font-bold uppercase tracking-widest mb-5">
                {/* Stack */}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-black border border-white/10 rounded text-xs font-black uppercase tracking-wide text-zinc-300 hover:border-neon-blue/40 hover:text-neon-blue transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 rounded-lg border border-neon-blue/20 bg-neon-blue/5">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                Like what you see?
              </p>
              <p className="text-white font-black uppercase tracking-tight text-lg mb-4">
                Let&apos;s Build Something Cinematic
              </p>
              <ShinyButton
                href="/#contact"
                className="w-full justify-center text-xs font-black text-white! uppercase tracking-widest"
              >
                Hire Me
              </ShinyButton>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="border-t border-white/5 mt-24 px-6 md:px-12 py-6 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-white">
          SABIHA AAMIR — 2026
        </span>
        <Link
          href="/#work"
          className="text-xs font-bold uppercase tracking-widest text-white hover:text-neon-pink transition-colors"
        >
          ← All Projects
        </Link>
      </div>
    </main>
  );
}
