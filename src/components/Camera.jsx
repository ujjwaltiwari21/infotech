"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollCamera() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Multiple transform values for different camera parts
  const cameraRotateX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]), { damping: 30 });
  const cameraRotateY = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 20]), { damping: 30 });
  const lensScale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.2, 1]), { damping: 25 });
  const lensBlur = useTransform(scrollYProgress, [0.4, 0.6], [0, 8]);
  
  // Particle positions
  const particleX = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);
  const particleY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-black overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        
        {/* Animated Particles Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                x: particleX,
                y: particleY,
              }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
              className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
            //   transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>

        {/* Main Camera Container */}
        <motion.div
          style={{
            rotateX: isMobile ? 0 : cameraRotateX,
            rotateY: isMobile ? 0 : cameraRotateY,
          }}
          className="relative"
        >
          {/* Camera Stand/Base */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg" />
          
          {/* Camera Body */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            
            {/* Outer Shell */}
            <motion.div 
              style={{ scale: lensScale }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl"
            />
            
            {/* Middle Ring */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600" />
            
            {/* Lens Glass */}
            <motion.div 
              style={{ filter: `blur(${lensBlur}px)` }}
              className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 backdrop-blur-sm"
            />
            
            {/* Inner Lens */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-b from-blue-500/20 to-transparent" />
            
            {/* Focus Ring */}
            <motion.div 
              style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}
              className="absolute inset-16 rounded-full border-2 border-dashed border-blue-400/50"
            />
            
            {/* Center Dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full" />
            
            {/* Lens Reflection */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-sm"
            />
          </div>

          {/* Camera Flash */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
          </div>

          {/* Lens Brand */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white/40 text-xs tracking-wider">SECURITY LENS • 4K ULTRA HD</p>
          </div>
        </motion.div>

        {/* Scroll Percentage */}
        <motion.div 
          style={{ opacity: scrollYProgress }}
          className="absolute bottom-8 text-white/40 text-sm font-mono"
        >
          {useTransform(scrollYProgress, (value) => `${Math.floor(value * 100)}%`)}
        </motion.div>
      </div>
    </section>
  );
}