import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-black text-[11vw] leading-none tracking-tighter uppercase mb-24 text-white">
          SKILLS
        </h2>

        <div className="space-y-20">
          <div>
            <h3 className="font-black text-xl text-neon-pink uppercase tracking-[0.3em] mb-12">
              // CORE TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-6">
              <span className="bg-neon-pink text-white px-8 py-4 font-black text-2xl uppercase transform -rotate-2 hover:rotate-0 transition-all cursor-default">
                Prompt Engineering
              </span>
              <span className="bg-neon-blue text-white px-8 py-4 font-black text-2xl uppercase transform rotate-1 hover:rotate-0 transition-all cursor-default">
                AI Video Gen
              </span>
              <span className="bg-neon-green text-black px-8 py-4 font-black text-2xl uppercase transform rotate-3 hover:rotate-0 transition-all cursor-default">
                Visual Storytelling
              </span>
              <span className="bg-white text-black px-8 py-4 font-black text-2xl uppercase transform -rotate-1 hover:rotate-0 transition-all cursor-default">
                AI Automation
              </span>
              <span className="bg-neon-gold text-black px-8 py-4 font-black text-2xl uppercase transform rotate-2 hover:rotate-0 transition-all cursor-default">
                Hook-Based Edits
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-20">
            <div className="flex-1">
              <h3 className="font-black text-xl text-neon-blue uppercase tracking-[0.3em] mb-12">
                // THE STACK
              </h3>
              <div className="flex flex-wrap gap-4">
                <span className="border-4 border-white text-white px-6 py-3 font-black text-lg uppercase">
                  ChatGPT
                </span>
                <span className="border-4 border-neon-pink text-neon-pink px-6 py-3 font-black text-lg uppercase">
                  CapCut
                </span>
                <span className="border-4 border-neon-green text-neon-green px-6 py-3 font-black text-lg uppercase">
                  Midjourney
                </span>
                <span className="border-4 border-neon-gold text-neon-gold px-6 py-3 font-black text-lg uppercase">
                  Luma Dream
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-black text-xl text-neon-green uppercase tracking-[0.3em] mb-12">
                // LANGUAGES
              </h3>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white text-black px-8 py-4 font-black text-xl uppercase">
                  English — PRO
                </span>
                <span className="bg-white text-black px-8 py-4 font-black text-xl uppercase">
                  Urdu — NATIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
