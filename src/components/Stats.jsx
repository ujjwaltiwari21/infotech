"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Users, MapPin, Wrench, TrendingUp, Award } from "lucide-react";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState({
    installations: 0,
    clients: 0,
    cities: 0,
    technicians: 0
  });

  const stats = [
    { 
      label: "Installations Done", 
      shortLabel: "Installations Done",
      value: 500, 
      suffix: "+", 
      icon: Shield,
      gradient: "from-blue-400 to-blue-600"
    },
    { 
      label: "Active Clients", 
      shortLabel: "Active Clients",
      value: 120, 
      suffix: "+", 
      icon: Users,
      gradient: "from-purple-400 to-purple-600"
    },
    { 
      label: "Cities Covered", 
      shortLabel: "Cities Covered",
      value: 15, 
      suffix: "+", 
      icon: MapPin,
      gradient: "from-green-400 to-green-600"
    },
    { 
      label: "Expert Technicians", 
      shortLabel: "Expert Technicians",
      value: 25, 
      suffix: "+", 
      icon: Wrench,
      gradient: "from-orange-400 to-orange-600"
    }
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const interval = 20;
      const steps = duration / interval;
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          installations: Math.min(Math.floor(500 * progress), 500),
          clients: Math.min(Math.floor(120 * progress), 120),
          cities: Math.min(Math.floor(15 * progress), 15),
          technicians: Math.min(Math.floor(25 * progress), 25)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="relative py-16 lg:py-20 bg-black overflow-hidden">
      
      {/* Minimal Background Effect */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-black to-black" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-4">
            <TrendingUp size={16} className="text-green-400" />
            <span className="text-xs font-medium text-white/60 tracking-wide">OUR ACHIEVEMENTS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4">
            Trusted By{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
            Our numbers speak for themselves — delivering excellence in security solutions
          </p>
        </div>

        {/* Desktop View - Small Rectangle Cards */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center transition-all duration-300 hover:border-white/20"
            >
              {/* Icon */}
              <div className={`inline-flex p-2 rounded-lg bg-linear-to-br ${stat.gradient} bg-opacity-10 mb-3`}>
                <stat.icon size={20} className="text-white" />
              </div>
              
              {/* Counter */}
              <div className="flex items-baseline justify-center gap-0.5 mb-1">
                <span className="text-2xl font-bold text-white">
                  {index === 0 && counts.installations}
                  {index === 1 && counts.clients}
                  {index === 2 && counts.cities}
                  {index === 3 && counts.technicians}
                </span>
                <span className="text-xl font-bold text-white/60">
                  {stat.suffix}
                </span>
              </div>
              
              {/* Label */}
              <div className="text-white/70 font-medium text-sm">
                {stat.label}
              </div>
              
              {/* Subtle Divider */}
              <div className="w-8 h-px bg-linear-to-r from-transparent via-white/20 to-transparent mx-auto mt-3" />
            </div>
          ))}
        </div>

        {/* Tablet View - Medium Cards */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center"
            >
              <div className={`inline-flex p-2.5 rounded-lg bg-linear-to-br ${stat.gradient} bg-opacity-10 mb-3`}>
                <stat.icon size={22} className="text-white" />
              </div>
              
              <div className="flex items-baseline justify-center gap-0.5 mb-1">
                <span className="text-3xl font-bold text-white">
                  {index === 0 && counts.installations}
                  {index === 1 && counts.clients}
                  {index === 2 && counts.cities}
                  {index === 3 && counts.technicians}
                </span>
                <span className="text-2xl font-bold text-white/60">
                  {stat.suffix}
                </span>
              </div>
              
              <div className="text-white/70 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Value and Label in Same Line */}
        <div className="md:hidden space-y-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-3 transition-all duration-300"
            >
              {/* Icon - Circular background */}
              <div className={`shrink-0 p-2 rounded-full bg-linear-to-br ${stat.gradient} bg-opacity-10`}>
                <stat.icon size={20} className="text-white" />
              </div>
              
              {/* Content - Value and label in same line */}
              <div className="flex-1 flex items-center justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white">
                    {index === 0 && counts.installations}
                    {index === 1 && counts.clients}
                    {index === 2 && counts.cities}
                    {index === 3 && counts.technicians}
                  </span>
                  <span className="text-lg font-bold text-white/60">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-white/70 text-sm font-medium ml-3">
                  {stat.shortLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Trust Indicator - Minimal Version */}
        <div className="mt-10 lg:mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-yellow-500/60" />
              <span className="text-xs text-white/40">ISO Certified</span>
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-blue-500/60" />
              <span className="text-xs text-white/40">24/7 Support</span>
            </div>
            <div className="w-px h-3 bg-white/10" />
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-green-500/60" />
              <span className="text-xs text-white/40">98% Happy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}