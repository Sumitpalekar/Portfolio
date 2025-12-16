// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// const AboutSection = () => {
//   return (
//     <section
//       id="about"
//       className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#050505] via-[#0b0b0b] to-[#050505] px-6 py-24 md:px-16"
//     >
//       {/* Glow background */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className={cn(
//           "text-center text-5xl md:text-7xl font-bold tracking-tight mb-10",
//           "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500"
//         )}
//       >
//         About Me
//       </motion.h2>

//       {/* About Text */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="relative max-w-4xl text-center leading-relaxed text-neutral-300 text-base md:text-lg font-light"
//       >
//         <p className="mb-6">
//           Hey there! I’m{" "}
//           <span className="font-semibold text-cyan-400">Sumit Palekar</span>, a{" "}
//           <span className="text-purple-400">Blockchain Developer</span> &
//           <span className="text-cyan-300"> Full Stack Engineer</span> passionate
//           about crafting immersive, futuristic web experiences that merge clean
//           code with creative design.
//         </p>

//         <p className="mb-6">
//           My expertise spans across{" "}
//           <span className="text-blue-400">Next.js</span>,{" "}
//           <span className="text-cyan-400">React</span>,{" "}
//           <span className="text-purple-400">Three.js</span>,{" "}
//           and{" "}
//           <span className="text-cyan-400">Web3 technologies</span> like
//           Ethereum, Smart Contracts, and decentralized applications (DApps).
//         </p>

//         <p>
//           I believe in building apps that not only work efficiently but also
//           **feel** alive — blending motion, light, and interaction to create
//           that “wow” factor. When I’m not coding, I’m exploring new tools in the
//           blockchain ecosystem and contributing to open-source projects.
//         </p>
//       </motion.div>

//       {/* Bottom Glow Accent */}
//       <div className="absolute bottom-0 w-[400px] h-[400px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
//     </section>
//   );
// };

// export default AboutSection;
