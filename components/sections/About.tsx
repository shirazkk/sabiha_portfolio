import React from "react";

const About = () => {
  return (
    <section id="about" className="py-32 relative bg-white text-black">
      <div className="absolute -top-20 right-20 z-10">
        <h2 className="font-black text-[11vw] leading-none tracking-tighter uppercase text-neon-pink mix-blend-difference">
          ABOUT
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="relative">
            <p className="font-black text-3xl md:text-5xl leading-tight tracking-tighter uppercase mb-12">
              I build <span className="bg-black text-white px-3">cinematic</span> digital universes using{" "}
              <span className="underline decoration-neon-pink decoration-8 underline-offset-8">
                advanced AI tools
              </span>{" "}
              and modern workflows.
            </p>
            <p className="text-xl font-medium leading-relaxed mb-8 border-l-8 border-neon-blue pl-8">
              Currently mastering Artificial Intelligence at KFUEIT. Bridging the gap between raw code and visual storytelling. Passionate about media automation and future digital aesthetics.
            </p>
            <p className="font-black text-2xl uppercase tracking-tighter flex flex-wrap gap-4">
              <span className="text-neon-blue">FREELANCE</span> • <span className="text-neon-pink">BRAND COLLAB</span> • <span className="text-neon-green">REMOTE</span>
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          <div className="bg-black text-white p-10 transform -rotate-3 hover:rotate-0 transition-all">
            <div className="text-7xl font-black text-neon-green mb-2">2+</div>
            <div className="font-black text-sm uppercase tracking-widest">
              YEARS EXPERIENCE
            </div>
          </div>
          <div className="bg-neon-pink text-white p-10 transform rotate-2 hover:rotate-0 transition-all">
            <div className="text-7xl font-black text-white mb-2">10+</div>
            <div className="font-black text-sm uppercase tracking-widest">
              PROJECTS COMPLETED
            </div>
          </div>
          <div className="bg-neon-blue text-white p-10 transform -rotate-1 hover:rotate-0 transition-all">
            <div className="text-7xl font-black text-neon-gold mb-2">OPEN</div>
            <div className="font-black text-sm uppercase tracking-widest">
              TO WORK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
