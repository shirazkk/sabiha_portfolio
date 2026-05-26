import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-32 bg-neon-blue overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-black text-[11vw] leading-none tracking-tighter uppercase mb-24 text-black">
          SERVICES
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-8 border-black shadow-[20px_20px_0px_#000000]">
          {/* Freelance */}
          <div className="bg-white p-12 flex flex-col border-b-8 lg:border-b-0 lg:border-r-8 border-black">
            <h3 className="font-black text-4xl uppercase mb-4 text-black">
              FREELANCE
            </h3>
            <p className="font-bold uppercase text-neon-pink mb-12">
              SINGLE PROJECTS
            </p>
            <ul className="space-y-4 mb-12 flex-1 font-black uppercase text-lg">
              <li>— AI VIDEO</li>
              <li>— REELS</li>
              <li>— CAPTIONS</li>
              <li>— HOOK EDITS</li>
            </ul>
            <a
              href="#contact"
              className="bg-black text-white px-8 py-4 text-center font-black uppercase hover:bg-neon-pink transition-all"
            >
              BOOK NOW
            </a>
          </div>

          {/* Full Service */}
          <div className="bg-black p-12 flex flex-col border-b-8 lg:border-b-0 lg:border-r-8 border-black scale-y-105 z-10">
            <h3 className="font-black text-4xl uppercase mb-4 text-white">
              FULL <br /> SERVICE
            </h3>
            <p className="font-bold uppercase text-neon-green mb-12">
              COMPLETE PRODUCTION
            </p>
            <ul className="space-y-4 mb-12 flex-1 font-black uppercase text-lg text-white">
              <li className="text-neon-green">+ AI PRODUCTION</li>
              <li className="text-neon-green">+ AD SCRIPTS</li>
              <li className="text-neon-green">+ BRAND IDENTITY</li>
              <li className="text-neon-green">+ AUTOMATION</li>
              <li className="text-neon-green">+ STRATEGY</li>
            </ul>
            <a
              href="#contact"
              className="bg-neon-green text-black px-8 py-4 text-center font-black uppercase hover:bg-white transition-all"
            >
              GET IT ALL
            </a>
          </div>

          {/* Brand Collab */}
          <div className="bg-white p-12 flex flex-col">
            <h3 className="font-black text-4xl uppercase mb-4 text-black">
              BRAND <br /> COLLAB
            </h3>
            <p className="font-bold uppercase text-neon-blue mb-12">
              PARTNERSHIPS
            </p>
            <ul className="space-y-4 mb-12 flex-1 font-black uppercase text-lg">
              <li>— AD SCRIPTS</li>
              <li>— INFLUENCER</li>
              <li>— SYSTEMS</li>
            </ul>
            <a
              href="#contact"
              className="bg-black text-white px-8 py-4 text-center font-black uppercase hover:bg-neon-blue transition-all"
            >
              PARTNER UP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
