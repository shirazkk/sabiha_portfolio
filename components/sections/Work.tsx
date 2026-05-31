"use client";

import React, { useRef, useState, useEffect, useCallback, memo } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeX, Loader2 } from "lucide-react";

// Register ScrollTrigger plugin at module level (bundle-barrel-imports, bundle-preload)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  title: string;
  description: string;
  category: string;
  videoUrl: string;
  thumbnail: string;
}

// Hoist static data outside component (rerender-memo-with-default-value, rerender-hoist-jsx)
const PROJECTS: Project[] = [
  {
    title: "AI INFLUENCER CREATION",
    description: "Raw reference photo turned into a hyper-realistic AI influencer with lip sync and animation.",
    category: "AI VIDEO • CHARACTER",
    videoUrl: "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto:good,w_480/v1780216311/WhatsApp_Video_2026-05-30_at_2.17.07_PM_rbtnls.mp4",
    thumbnail: "https://res.cloudinary.com/dv5ic5hc0/video/upload/so_auto,f_jpg,w_480/v1780216311/WhatsApp_Video_2026-05-30_at_2.17.07_PM_rbtnls.jpg",
  },
  {
    title: "PREMIUM AI INFLUENCER",
    description: "AI character brought to life with cinematic backgrounds and natural lip sync animation.",
    category: "AI VIDEO • LIP SYNC",
    videoUrl: "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto:good,w_480/v1780217086/WhatsApp_Video_2026-05-30_at_2.17.06_PM_ihtcfg.mp4",
    thumbnail: "https://res.cloudinary.com/dv5ic5hc0/video/upload/so_auto,f_jpg,w_480/v1780217086/WhatsApp_Video_2026-05-30_at_2.17.06_PM_ihtcfg.jpg",
  },
  {
    title: "RAW TO FINAL EDIT",
    description: "Unedited raw footage transformed into a scroll-stopping final edit with color grading and motion.",
    category: "AI VIDEO • EDITING",
    videoUrl: "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto:good,w_480/v1780217415/WhatsApp_Video_2026-05-30_at_2.17.05_PM_g8ojxl.mp4",
    thumbnail: "https://res.cloudinary.com/dv5ic5hc0/video/upload/so_auto,f_jpg,w_480/v1780217415/WhatsApp_Video_2026-05-30_at_2.17.05_PM_g8ojxl.jpg",
  },
];

// Memoize individual cards to prevent re-renders when other cards change or global state updates (rerender-memo)
const ProjectCard = memo(({ 
  project, 
  isAudioEnabled, 
  onToggleAudio 
}: { 
  project: Project; 
  isAudioEnabled: boolean; 
  onToggleAudio: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      // Always start muted to satisfy browser policy
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (videoRef.current && isAudioEnabled) {
              videoRef.current.muted = false;
            }
          })
          .catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            }
          });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleCardClick = () => {
    onToggleAudio();
  };

  // Sync video mute state with global audio state (rerender-derived-state-no-effect)
  useEffect(() => {
    if (videoRef.current && isHovered) {
      videoRef.current.muted = !isAudioEnabled;
    }
  }, [isAudioEnabled, isHovered]);

  const handleWaiting = () => setIsLoading(true);
  const handlePlaying = () => setIsLoading(false);
  const handleCanPlay = () => setIsLoading(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="group relative flex flex-col bg-surface/30 border border-white/5 hover:border-neon-pink/30 transition-all duration-500 overflow-hidden cursor-pointer max-w-[260px] md:max-w-[320px] mx-auto w-full"
    >
      <div className="relative w-full bg-black">
        <video
          ref={videoRef}
          src={project.videoUrl}
          poster={project.thumbnail}
          aria-label={`Video demonstration of project: ${project.title}`}
          loop
          playsInline
          muted
          preload="metadata" // Save bandwidth (bundle-preload)
          onWaiting={handleWaiting}
          onPlaying={handlePlaying}
          onCanPlay={handleCanPlay}
          className={`w-full h-auto block transition-opacity duration-300 ${
            isLoading && isHovered ? "opacity-50" : "opacity-100"
          }`}
        />

        {isLoading && isHovered && (
          <div className="absolute inset-0 z-40 flex items-center justify-center">
            <Loader2 className="w-6 h-6 text-neon-pink animate-spin" />
          </div>
        )}

        {!isAudioEnabled && isHovered && !isLoading && (
          <div className="absolute bottom-3 left-0 right-0 z-30 text-center animate-pulse pointer-events-none">
            <span className="bg-black/70 backdrop-blur-md px-3 py-1 text-[8px] font-black uppercase tracking-widest text-white border border-white/10">
              Tap anywhere for sound
            </span>
          </div>
        )}

        <div className="absolute top-2 right-2 z-30 p-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {isAudioEnabled ? <Volume2 size={12} className="text-neon-pink" /> : <Volume2 size={12} className="text-white opacity-50" />}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  // Use functional update for stable callback (rerender-functional-setstate, advanced-use-latest)
  const toggleAudio = useCallback(() => {
    setIsAudioEnabled(prev => !prev);
  }, []);

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
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      ).fromTo(
        ".project-grid-item",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7 },
        "-=0.5"
      );
    },
    { scope: container }
  );

  return (
    <section
      id="work"
      ref={container}
      className="py-20 md:py-28 bg-base overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="work-heading font-black text-[clamp(2.5rem,10vw,8rem)] leading-none tracking-tighter uppercase">
            WORK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="project-grid-item">
              <ProjectCard 
                project={project} 
                isAudioEnabled={isAudioEnabled}
                onToggleAudio={toggleAudio}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;