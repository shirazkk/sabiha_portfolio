import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-48 bg-white text-black relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="font-black text-[10vw] leading-[0.85] tracking-tighter uppercase mb-4">
          LET'S <span className="outline-text">CREATE</span>
        </h2>
        <h2 className="font-black text-[10vw] leading-[0.85] tracking-tighter uppercase mb-16">
          SOMETHING <span className="text-neon-pink">CINEMATIC</span>
        </h2>
        <p className="text-3xl font-black uppercase tracking-tighter mb-16">
          Ready for the next digital evolution?
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="mailto:sabihaaamir2@gmail.com"
            className="bg-black text-white px-12 py-6 font-black text-2xl uppercase tracking-widest hover:bg-neon-pink transition-all transform hover:-translate-y-2"
          >
            EMAIL ME
          </a>
          <a
            href="https://linkedin.com/in/sabihaaamir"
            target="_blank"
            className="border-8 border-black px-12 py-6 font-black text-2xl uppercase tracking-widest hover:bg-neon-blue hover:border-neon-blue hover:text-white transition-all transform hover:-translate-y-2"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
