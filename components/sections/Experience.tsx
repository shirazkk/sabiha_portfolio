import React from "react";

const Experience = () => {
  const experiences = [
    {
      date: "MAY 2026 – NOW",
      company: "ORGANIC AND PURE",
      role: "PROMPT ENGINEER",
      color: "group-hover:text-neon-pink",
      bgColor: "group-hover:bg-neon-pink",
      tasks: [
        "AI-Powered Commercial Production",
        "Emotional Marketing Scripts",
        "Character Consistency Systems",
        "Short-Form Retention Content",
      ],
    },
    {
      date: "JAN 2026 – NOW",
      company: "SELF-EMPLOYED",
      role: "AI VIDEO EDITOR",
      color: "group-hover:text-neon-blue",
      bgColor: "group-hover:bg-neon-blue",
      tasks: [
        "Commercial AI-Generated Content",
        "Consistent Character Design",
        "Cinematic AI Reels",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-black text-[11vw] leading-none tracking-tighter uppercase mb-24">
          EXPERIENCE
        </h2>
        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-12 group">
              <div className="md:col-span-4">
                <div className={`bg-black text-white p-6 inline-block font-black text-xl uppercase mb-4 transition-colors ${exp.bgColor}`}>
                  {exp.date}
                </div>
                <p className="font-black text-sm tracking-widest uppercase">
                  {exp.company}
                </p>
              </div>
              <div className="md:col-span-8">
                <h3 className={`font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase mb-8 transition-colors ${exp.color}`}>
                  {exp.role.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      {word} {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <ul className="space-y-4 text-xl font-bold uppercase tracking-tight">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex gap-4">
                      — {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
