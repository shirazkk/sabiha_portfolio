import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-32 bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-black text-[11vw] leading-none tracking-tighter uppercase mb-24 text-white">
          EDUCATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface p-12 border-l-[16px] border-neon-pink">
            <h3 className="font-black text-4xl uppercase mb-6 leading-[1]">
              BACHELOR'S <br /> IN AI
            </h3>
            <p className="text-xl font-bold text-gray-400 mb-8 uppercase tracking-tighter">
              KFUEIT — UNIVERSITY
            </p>
            <span className="bg-neon-pink text-white px-4 py-2 font-black text-sm uppercase">
              2024 — 2028
            </span>
          </div>
          <div className="bg-surface p-12 border-l-[16px] border-neon-blue">
            <h3 className="font-black text-4xl uppercase mb-6 leading-[1]">
              HIGH SCHOOL <br /> DIPLOMA
            </h3>
            <p className="text-xl font-bold text-gray-400 mb-8 uppercase tracking-tighter">
              GOVT SECONDARY
            </p>
            <span className="bg-neon-blue text-white px-4 py-2 font-black text-sm uppercase">
              2021 — 2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
