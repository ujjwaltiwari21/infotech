// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function RotatingText() {
//   const [particles, setParticles] = useState([]);

//   const textLines = [
//     "YOU ARE UNDER IN SURVEILLANCE",
//     "SYSTEM OFFLINE",
//   ];

//   useEffect(() => {
//     const particleCount = 50;
//     const newParticles = [];
//     for (let i = 0; i < particleCount; i++) {
//       newParticles.push({
//         id: i,
//         left: Math.random() * 100,
//         top: Math.random() * 100,
//         delay: Math.random() * 8,
//         duration: 4 + Math.random() * 4,
//         size: 1 + Math.random() * 1.5,
//       });
//     }
//     setParticles(newParticles);
//   }, []);

//   return (
//     <div className="relative h-[50vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden bg-black">
      
//       {/* Animated Particles Background */}
//       <div className="absolute inset-0">
//         {particles.map((particle) => (
//           <motion.div
//             key={particle.id}
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ 
//               opacity: [0, 0.6, 0.2, 0.6, 0],
//               scale: [0, 1, 0.5, 1, 0]
//             }}
//             transition={{
//               duration: particle.duration,
//               repeat: Infinity,
//               delay: particle.delay,
//               ease: "easeInOut",
//               times: [0, 0.25, 0.5, 0.75, 1]
//             }}
//             className="absolute rounded-full bg-blue-400/20"
//             style={{
//               left: `${particle.left}%`,
//               top: `${particle.top}%`,
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               filter: "blur(1px)"
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Container */}
//       <div className="relative z-10 flex flex-col gap-1.5 md:gap-2.5 items-center justify-center px-6">
        
//         {textLines.map((text, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ 
//               opacity: 1,
//               y: 0
//             }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.1
//             }}
//             className="text-center"
//           >
//             <motion.span
//               animate={{
//                 opacity: [1, 0.7, 1],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 delay: index * 0.5,
//                 ease: "easeInOut"
//               }}
//               className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] block ${
//                 index === 1 ? "text-blue-400" : "text-white/60"
//               }`}
//               style={{
//                 fontFamily: "'SF Mono', 'Courier New', monospace"
//               }}
//             >
//               {text}
//             </motion.span>
//           </motion.div>
//         ))}

//         {/* Decorative Elements */}
//         <div className="flex gap-2 mt-6">
//           {[0, 1, 2].map((i) => (
//             <motion.div
//               key={i}
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.3, 0.8, 0.3]
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 delay: i * 0.3,
//                 ease: "easeInOut"
//               }}
//               className="w-1 h-1 rounded-full bg-blue-400"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Minimal Gradient Overlays */}
//       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" />
//       <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent" />
//     </div>
//   );
// }