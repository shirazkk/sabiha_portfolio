"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ShinyButton } from "../ui/shiny-button";
import { useLoading } from "../context/LoadingContext";

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const { loaded } = useLoading();

  // Entrance animations for desktop/nav elements on mount
  useGSAP(
    () => {
      if (!loaded) return;

      const tl = gsap.timeline();

      gsap.set(container.current, { y: -100 });
      gsap.set(".nav-link", { opacity: 0, y: -20 });
      gsap.set(".hire-me-btn", { opacity: 0, scale: 0.8 });

      tl.to(container.current, { y: 0, duration: 1, ease: "power3.out" })
        .to(
          ".nav-link",
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
          "-=0.5",
        )
        .to(".hire-me-btn", { opacity: 1, scale: 1, duration: 0.5 }, "-=0.3");
    },
    { dependencies: [loaded], scope: container },
  );

  // Disable page scroll when mobile menu is open
  useEffect(() => {
    if (!lenis) return;
    if (isOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isOpen, lenis]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(targetId) as HTMLElement;
    if (element && lenis) {
      lenis.scrollTo(element, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(targetId) as HTMLElement;
    if (element && lenis) {
      setTimeout(() => {
        lenis.scrollTo(element, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }, 300); // Snappier transition
    }
  };

  // Variants for mobile menu animation
  const menuVariants: Variants = {
    hidden: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        delay: 0.1,
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const linksContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <>
      <nav
        ref={container}
        className="fixed top-0 left-0 w-full z-[100] px-6 lg:px-12 py-6 mix-blend-exclusion"
      >
        <div className="flex items-center justify-between border-b-2 border-white pb-4">
          <div
            className="flex items-center gap-4 nav-link cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              lenis?.scrollTo(0);
            }}
          >
            <span className="font-black text-2xl tracking-tighter uppercase leading-none">
              SABIHA <span className="text-neon-pink">AAMIR</span> 
            </span>
            <span className="w-4 h-4 rounded-full bg-neon-green animate-pulse shadow-[0_0_15px_#00FF00]"></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12 font-black text-sm tracking-widest uppercase">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="nav-link hover:text-neon-pink transition-all duration-300"
            >
              ABOUT
            </a>
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, "#work")}
              className="nav-link hover:text-neon-blue transition-all duration-300"
            >
              WORK
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "#skills")}
              className="nav-link hover:text-neon-green transition-all duration-300"
            >
              SKILLS
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="nav-link hover:text-neon-gold transition-all duration-300"
            >
              CONTACT
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Hire Me Button */}
            <div className="hidden md:block hire-me-btn">
              <ShinyButton
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                HIRE ME
              </ShinyButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[110] flex items-center justify-center p-2 text-white hover:text-neon-pink transition-colors cursor-pointer nav-link"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={32} /> : <Menu size={32} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[80] md:hidden"
            />

            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="fixed top-0 right-0 w-[85%] max-w-[400px] h-screen bg-[#050505] z-[90] flex flex-col justify-center px-8 border-l border-white/10 md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.8)]"
            >
              <motion.div
                variants={linksContainerVariants}
                className="flex flex-col gap-8 font-black text-5xl tracking-widest uppercase"
              >
                <motion.div variants={linkVariants}>
                  <a
                    href="#about"
                    onClick={(e) => handleMobileNavClick(e, "#about")}
                    className="hover:text-neon-pink transition-all duration-300 block py-2 outline-text hover:outline-none"
                  >
                    ABOUT
                  </a>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <a
                    href="#work"
                    onClick={(e) => handleMobileNavClick(e, "#work")}
                    className="hover:text-neon-blue transition-all duration-300 block py-2 outline-text hover:outline-none"
                  >
                    WORK
                  </a>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <a
                    href="#skills"
                    onClick={(e) => handleMobileNavClick(e, "#skills")}
                    className="hover:text-neon-green transition-all duration-300 block py-2 outline-text hover:outline-none"
                  >
                    SKILLS
                  </a>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <a
                    href="#contact"
                    onClick={(e) => handleMobileNavClick(e, "#contact")}
                    className="hover:text-neon-gold transition-all duration-300 block py-2 outline-text hover:outline-none"
                  >
                    CONTACT
                  </a>
                </motion.div>

                <motion.div variants={linkVariants} className="pt-8">
                  <ShinyButton
                    href="#contact"
                    onClick={(e) => handleMobileNavClick(e, "#contact")}
                    className="w-full text-xl py-6"
                  >
                    HIRE ME
                  </ShinyButton>
                </motion.div>
              </motion.div>

              {/* Bottom Details */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 left-8 right-8 border-t border-white/10 pt-8"
              >
                <p className="text-neon-pink font-bold text-xs tracking-widest mb-2 uppercase">
                  Available for Projects
                </p>
                <p className="text-zinc-500 font-medium text-xs tracking-widest uppercase">
                  Let&apos;s create something extraordinary
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
