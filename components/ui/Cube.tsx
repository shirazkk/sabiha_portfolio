// "use client";

// import React, { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Cube = () => {
//   const container = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     // Continuous rotation (slowed down)
//     gsap.to(".cube", {
//       rotateX: 360,
//       rotateY: 360,
//       duration: 60, // Increased duration for slower rotation
//       repeat: -1,
//       ease: "linear",
//     });

//     // Keeping it fixed in the viewport
//     // No need for ScrollTrigger animation to move it;
//     // 'fixed inset-0' already keeps it in the center.
//   }, { scope: container });

//   return (
//     <div ref={container} className="cube-container z-[5] fixed inset-0 flex items-center justify-center opacity-20 pointer-events-none scale-50 md:scale-75">
//       <div className="cube">
//         <div className="cube-face">
//           <span className="text-black text-4xl font-black uppercase tracking-tighter text-center">
//             AI VIDEO
//           </span>
//         </div>
//         <div className="cube-face">
//           <span className="text-white text-4xl font-black uppercase tracking-tighter text-center">
//             INFLUENCER
//           </span>
//         </div>
//         <div className="cube-face">
//           <span className="text-black text-4xl font-black uppercase tracking-tighter text-center">
//             BRANDING
//           </span>
//         </div>
//         <div className="cube-face">
//           <span className="text-black text-4xl font-black uppercase tracking-tighter text-center">
//             PROMPT
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cube;
