"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Volume2, VolumeX, Loader2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  category: string;
  videoUrl: string;
  thumbnail: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  const handleWaiting = () => setIsLoading(true);
  const handlePlaying = () => setIsLoading(false);
  const handleCanPlay = () => setIsLoading(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col bg-surface/30 border border-white/5 hover:border-neon-pink/30 transition-all duration-500 overflow-hidden max-w-[320px] mx-auto"
    >
      {/* Video Container - Compact Vertical */}
      <div className="relative aspect-[9/16] w-full overflow-hidden cursor-pointer bg-black">
        <video
          ref={videoRef}
          src={project.videoUrl}
          poster={project.thumbnail}
          loop
          playsInline
          preload="auto"
          onWaiting={handleWaiting}
          onPlaying={handlePlaying}
          onCanPlay={handleCanPlay}
          className={`w-full h-full object-cover scale-105 group-hover:scale-110 transition-all duration-700 ${isLoading && isHovered ? "opacity-50 blur-sm" : "opacity-100"}`}
        />

        {/* Loading Spinner */}
        {isLoading && isHovered && (
          <div className="absolute inset-0 z-40 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-neon-pink animate-spin" />
          </div>
        )}

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute top-3 right-3 z-30 p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-neon-pink hover:border-neon-pink transition-all opacity-0 group-hover:opacity-100"
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-1.5">
        <span className="text-neon-pink font-black text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
          {project.category}
        </span>
        <h3 className="text-lg md:text-xl font-black tracking-tighter uppercase text-white group-hover:text-neon-pink transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-500 font-medium text-[11px] md:text-xs leading-tight line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-neon-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

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
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
        "-=0.5",
      );
    },
    { scope: container },
  );

  const projects: Project[] = [
    {
      title: "AI INFLUENCER CREATION",
      description:
        "Raw reference photo turned into a hyper-realistic AI influencer with lip sync and animation.",
      category: "AI VIDEO • CHARACTER",
      videoUrl:
        "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto,w_1280/v1780216311/WhatsApp_Video_2026-05-30_at_2.17.07_PM_rbtnls.mp4",
      thumbnail:
        "https://res.cloudinary.com/dv5ic5hc0/video/upload/so_auto,f_jpg/v1780216311/WhatsApp_Video_2026-05-30_at_2.17.07_PM_rbtnls.jpg",
    },
    {
      title: "PREMIUM AI INFLUENCER",
      description:
        "AI character brought to life with cinematic backgrounds and natural lip sync animation.",
      category: "AI VIDEO • LIP SYNC",
      videoUrl:
        "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto,w_1280/v1780217086/WhatsApp_Video_2026-05-30_at_2.17.06_PM_ihtcfg.mp4",
      thumbnail:
        "https://res.cloudinary.com/dv5ic5hc0/video/upload/so_auto,f_jpg/v1780217086/WhatsApp_Video_2026-05-30_at_2.17.06_PM_ihtcfg.jpg",
    },
    {
      title: "RAW TO FINAL EDIT",
      description:
        "Unedited raw footage transformed into a scroll-stopping final edit with color grading and motion.",
      category: "AI VIDEO • EDITING",
      videoUrl:
        "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto,w_1280/v1780217415/WhatsApp_Video_2026-05-30_at_2.17.05_PM_g8ojxl.mp4",
      thumbnail:
        "https://res.cloudinary.com/dv5ic5hc0/video/upload/so_auto,f_jpg/v1780217415/WhatsApp_Video_2026-05-30_at_2.17.05_PM_g8ojxl.jpg",
    },
  ];

  return (
    <section
      id="work"
      ref={container}
      className="py-20 md:py-32 bg-base overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="work-heading font-black text-[clamp(2.5rem,10vw,8rem)] leading-none tracking-tighter uppercase mb-0">
            WORK
          </h2>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, idx) => (
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
