import React from "react";
import Image from "next/image";

const Work = () => {
  const projects = [
    {
      title: "AI INFLUENCER ZARA",
      tag: "CHARACTER DESIGN",
      color: "bg-neon-blue",
      img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
      textColor: "text-white",
      tagColor: "bg-white text-black",
    },
    {
      title: "REELS — ORGANIC & PURE",
      tag: "SHORT-FORM",
      color: "bg-neon-green",
      img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000",
      textColor: "text-black",
      tagColor: "bg-black text-white",
    },
    {
      title: "AI BRAND IDENTITY",
      tag: "VISUALS",
      color: "bg-neon-gold",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
      textColor: "text-black",
      tagColor: "bg-black text-white",
    },
    {
      title: "AD SCRIPT WRITING",
      tag: "STORYTELLING",
      color: "bg-neon-pink",
      img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
      textColor: "text-white",
      tagColor: "bg-white text-black",
    },
  ];

  return (
    <section id="work" className="py-32 bg-base">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <h2 className="font-black text-[11vw] leading-none tracking-tighter uppercase mb-8 md:mb-0">
            WORK
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 border-4 border-white font-black uppercase text-sm tracking-widest bg-white text-black">
              ALL
            </button>
            <button className="px-6 py-2 border-4 border-white text-white font-black uppercase text-sm tracking-widest hover:bg-neon-pink hover:border-neon-pink transition-all">
              AI VIDEO
            </button>
            <button className="px-6 py-2 border-4 border-white text-white font-black uppercase text-sm tracking-widest hover:bg-neon-blue hover:border-neon-blue transition-all">
              INFLUENCER
            </button>
            <button className="px-6 py-2 border-4 border-white text-white font-black uppercase text-sm tracking-widest hover:bg-neon-green hover:border-neon-green transition-all">
              BRAND
            </button>
          </div>
        </div>

        {/* Featured Project */}
        <div className="relative group mb-32">
          <div className="absolute inset-0 clash-gradient-1 transform scale-[1.02] -rotate-1 group-hover:rotate-0 transition-all duration-700"></div>
          <div className="relative bg-surface p-4 aspect-video flex flex-col overflow-hidden">
            <div className="flex gap-3 mb-4">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 bg-black flex items-center justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
                alt="Featured Work"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-70"
              />
              <div className="absolute inset-0 bg-neon-pink opacity-30 mix-blend-multiply"></div>
              <div className="relative z-10 text-center">
                <h3 className="font-black text-6xl md:text-8xl tracking-tighter uppercase text-white drop-shadow-2xl">
                  CINEMATIC AI AD
                </h3>
              </div>
            </div>
            <div className="py-8 flex flex-wrap gap-4">
              <span className="bg-white text-black px-4 py-2 font-black text-xs uppercase">
                COMMERCIAL VIDEO
              </span>
              <span className="border-2 border-white px-4 py-2 font-black text-xs uppercase">
                CAPCUT
              </span>
              <span className="border-2 border-white px-4 py-2 font-black text-xs uppercase">
                PROMPTING
              </span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="asymmetric-item">
              <div
                className={`${project.color} p-1 pb-12 group transform hover:-translate-y-4 transition-all`}
              >
                <div className="bg-black aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className={`absolute inset-0 ${project.color} opacity-20 mix-blend-overlay`}></div>
                </div>
                <div className="p-6">
                  <h4 className={`font-black text-4xl uppercase tracking-tighter mb-2 ${project.textColor}`}>
                    {project.title}
                  </h4>
                  <span className={`font-black text-sm uppercase px-2 ${project.tagColor}`}>
                    {project.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
