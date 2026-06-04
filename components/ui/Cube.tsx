"use client";

import { motion } from "framer-motion";

const Cube = () => {
  return (
    <div className="cube-container z-20 mb-[-100px] transform scale-75 md:scale-100">
      <motion.div
        className="cube"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="cube-face">
          <span className="text-black text-4xl font-black uppercase tracking-tighter text-center">
            AI VIDEO
          </span>
        </div>
        <div className="cube-face">
          <span className="text-white text-4xl font-black uppercase tracking-tighter text-center">
            INFLUENCER
          </span>
        </div>
        <div className="cube-face">
          <span className="text-black text-4xl font-black uppercase tracking-tighter text-center">
            BRANDING
          </span>
        </div>
        <div className="cube-face">
          <span className="text-black text-4xl font-black uppercase tracking-tighter text-center">
            PROMPT
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Cube;
