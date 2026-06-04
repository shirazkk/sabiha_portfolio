import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-24 px-6 lg:px-12">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between border-t-4 border-white pt-12 gap-12">
        <div className="font-black text-4xl uppercase tracking-tighter">
          SABIHA <span className="text-neon-pink">AAMIR</span>
        </div>
        <div className="flex gap-12 font-black text-sm uppercase tracking-widest text-white">
          <a href="https://linkedin.com/in/sabihaaamir" target="_blank" aria-label="Visit Sabiha Aamir's LinkedIn profile" className="hover:text-neon-blue transition-all">
            LINKEDIN
          </a>
          <a href="https://www.instagram.com/sabiha_swart" target="_blank" aria-label="Visit Sabiha Aamir's Instagram profile" className="hover:text-neon-pink transition-all">
            INSTAGRAM
          </a>
        </div>
        <div className="text-gray-500 font-bold uppercase tracking-widest">
          © 2026 AI VISIONARY
        </div>
      </div>
    </footer>
  );
};

export default Footer;
