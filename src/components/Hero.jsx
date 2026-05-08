"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, Globe, ChevronDown, Camera } from "lucide-react";

export default function HeroPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-black">

      {/* Animated Gradient Background without Video */}
      <div className="absolute inset-0 z-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 100, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, -50, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl"
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-br from-black/50 via-transparent to-black/50 z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10" />

        {/* Animated Camera Lens Effect */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-white/10 z-20 pointer-events-none"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/5 z-20 pointer-events-none"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-linear-to-r from-blue-500/20 to-purple-500/20 blur-3xl z-5 pointer-events-none"
        />

        {/* Scanning Line Effect */}
        <motion.div
          animate={{
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 z-10 pointer-events-none bg-linear-to-b from-transparent via-blue-500/10 to-transparent"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-5xl mx-auto"
        >

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-7xl mt-20 lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            <span className="block text-transparent [-webkit-text-stroke:.5px_white] [text-stroke:.5px_white] hover:[-webkit-text-stroke:.5px_#60A5FA] transition-all duration-300">
              Next-Gen
            </span>
            <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Security System
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Experience 360° coverage with crystal-clear 4K resolution,
            AI-powered threat detection, and real-time monitoring from anywhere.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="group relative px-8 py-3 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="px-8 py-3 rounded-full border border-white/30 text-white font-medium text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105">
              Watch Demo
            </button>
          </motion.div>

          {/* Meta Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">99.9%</div>
              <div className="text-sm text-white/60">Detection Accuracy</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">&lt;50ms</div>
              <div className="text-sm text-white/60">Response Time</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">24/7</div>
              <div className="text-sm text-white/60">AI Monitoring</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Icons for Visual Interest */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-10 hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
            <Shield size={32} className="text-blue-400" />
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 right-10 hidden lg:block"
        >
          <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
            <Globe size={32} className="text-purple-400" />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-white/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
}