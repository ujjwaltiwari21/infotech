"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Cctv, 
  Network, 
  Fingerprint, 
  Lock, 
  Server, 
  Radio,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Zap,
  TrendingUp,
  Award,
  Star,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    title: "AI-Powered Surveillance",
    tagline: "Smart Security",
    icon: <Cctv size={24} />,
    color: "from-blue-500 to-cyan-500",
    lightColor: "text-blue-400",
    bgGlow: "bg-blue-500/10",
    gradient: "from-blue-500/20 to-cyan-500/20",
    stats: "99.9% Accuracy",
    fullDesc: "Smart IP cameras with human detection, face recognition, and instant mobile alerts. 4K resolution with advanced night vision technology.",
    features: [
      "AI Human Detection",
      "Facial Recognition",
      "Instant Mobile Alerts",
      "4K Ultra HD",
      "Night Vision",
      "Motion Tracking"
    ]
  },
  {
    title: "Enterprise Networking",
    tagline: "Seamless Connectivity",
    icon: <Network size={24} />,
    color: "from-purple-500 to-blue-500",
    lightColor: "text-purple-400",
    bgGlow: "bg-purple-500/10",
    gradient: "from-purple-500/20 to-blue-500/20",
    stats: "10Gbps Speed",
    fullDesc: "Robust WiFi 6 solutions, server rack management, and secure VPN tunneling for seamless enterprise connectivity.",
    features: [
      "WiFi 6 Technology",
      "VPN Tunneling",
      "Server Management",
      "Load Balancing",
      "Network Security",
      "24/7 Monitoring"
    ]
  },
  {
    title: "Biometric Access",
    tagline: "Touchless Entry",
    icon: <Fingerprint size={24} />,
    color: "from-emerald-500 to-teal-500",
    lightColor: "text-emerald-400",
    bgGlow: "bg-emerald-500/10",
    gradient: "from-emerald-500/20 to-teal-500/20",
    stats: "0.1s Response",
    fullDesc: "Touchless attendance systems and high-security biometric door locks with real-time monitoring and analytics.",
    features: [
      "Touchless Entry",
      "Real-time Monitoring",
      "Attendance Tracking",
      "Multi-factor Auth",
      "Remote Access",
      "Audit Logs"
    ]
  },
  {
    title: "IT Infrastructure",
    tagline: "Enterprise Ready",
    icon: <Server size={24} />,
    color: "from-orange-500 to-red-500",
    lightColor: "text-orange-400",
    bgGlow: "bg-orange-500/10",
    gradient: "from-orange-500/20 to-red-500/20",
    stats: "99.99% Uptime",
    fullDesc: "Complete hardware solutions, cloud backups, and high-performance workstation setups for modern enterprises.",
    features: [
      "Cloud Backup",
      "High Performance",
      "Scalable Solutions",
      "Hardware Setup",
      "Data Migration",
      "Disaster Recovery"
    ]
  },
  {
    title: "Cyber Security",
    tagline: "Total Protection",
    icon: <Lock size={24} />,
    color: "from-indigo-500 to-purple-500",
    lightColor: "text-indigo-400",
    bgGlow: "bg-indigo-500/10",
    gradient: "from-indigo-500/20 to-purple-500/20",
    stats: "256-bit AES",
    fullDesc: "End-to-end encryption, firewall installation, and data protection services against modern cyber threats.",
    features: [
      "256-bit Encryption",
      "Firewall Protection",
      "Threat Detection",
      "Data Privacy",
      "Penetration Testing",
      "Security Audits"
    ]
  },
  {
    title: "Fiber Optic",
    tagline: "Lightning Fast",
    icon: <Radio size={24} />,
    color: "from-pink-500 to-rose-500",
    lightColor: "text-pink-400",
    bgGlow: "bg-pink-500/10",
    gradient: "from-pink-500/20 to-rose-500/20",
    stats: "100Gbps",
    fullDesc: "High-speed long-range connectivity and structured fiber cabling for large campuses and enterprises.",
    features: [
      "100Gbps Speed",
      "Long Range",
      "Structured Cabling",
      "Low Latency",
      "Future Ready",
      "Easy Scalability"
    ]
  }
];

export default function ServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section ref={containerRef} className="bg-gradient-to-b from-black via-gray-950 to-black py-16 md:py-24 px-4 relative overflow-hidden">
      
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/15 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-600/15 blur-[100px] rounded-full animate-pulse-slower" />
        <div className="absolute top-1/3 left-0 w-[250px] h-[250px] bg-cyan-600/10 blur-[80px] rounded-full animate-pulse-delayed" />
      </div>

      {/* Premium Grid Texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Premium Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6 hover:border-blue-500/30 transition-all duration-300">
            <Sparkles size={14} className="text-blue-400 animate-pulse-slow" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/60 uppercase">Future-Ready Technology</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Elite</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Services
            </span>
          </h2>
          
          <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4 font-light">
            We don't just install hardware. We build digital fortresses and seamless 
            connectivity for your business and home.
          </p>

          {/* Premium Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8">
            {[
              { icon: Award, label: "10+ Years", color: "text-yellow-400" },
              { icon: TrendingUp, label: "500+ Projects", color: "text-green-400" },
              { icon: Zap, label: "24/7 Support", color: "text-blue-400" }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2 group cursor-pointer">
                <div className={`p-1.5 rounded-full ${stat.color.replace('text', 'bg')}/10 transition-all duration-300 group-hover:scale-110`}>
                  <stat.icon size={16} className={stat.color} />
                </div>
                <span className="text-white/50 text-sm font-medium group-hover:text-white/70 transition-colors">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid - Mobile Optimized Cards with Dropdown */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative"
            >
              <div 
                className={`relative bg-white/[0.02] backdrop-blur-sm border rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  expandedIndex === idx 
                    ? 'border-blue-500/40 shadow-2xl shadow-blue-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => toggleExpand(idx)}
              >
                {/* Card Header - Always Visible */}
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      {/* Premium Icon Container */}
                      <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                        <div className="text-white">
                          {service.icon}
                        </div>
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} blur-md opacity-50 -z-10`} />
                      </div>
                      
                      {/* Title Section */}
                      <div>
                        <h3 className="text-white font-bold text-lg md:text-xl tracking-tight leading-tight">
                          {service.title}
                        </h3>
                        <p className={`text-xs font-medium ${service.lightColor} opacity-80 mt-0.5`}>
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    
                    {/* Dropdown Toggle Icon */}
                    <motion.div 
                      animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        expandedIndex === idx 
                          ? `bg-gradient-to-br ${service.color}` 
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      <ChevronDown size={16} className={`transition-colors ${
                        expandedIndex === idx ? 'text-white' : 'text-white/40'
                      }`} />
                    </motion.div>
                  </div>

                  {/* Stats Badge - Always Visible */}
                  <div className="flex items-center gap-1.5 mt-4">
                    <Star size={10} className="text-yellow-400" />
                    <span className="text-[10px] text-white/50 font-mono">{service.stats}</span>
                  </div>
                </div>

                {/* Dropdown Content - Animated */}
                <AnimatePresence>
                  {expandedIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 border-t border-white/10">
                        {/* Full Description */}
                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                          {service.fullDesc}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-1.5">
                              <CheckCircle2 size={10} className={`${service.lightColor} opacity-70`} />
                              <span className="text-white/40 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button className={`w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm font-semibold flex items-center justify-center gap-2 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-[1.02]`}>
                          Learn More
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover Border Animation */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none transition-all duration-500 ${
                  expandedIndex === idx ? `border-${service.color.split(' ')[0]}` : ''
                }`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 md:mt-20"
        >
          <div className="relative p-[1px] bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-pink-600/40 rounded-3xl md:rounded-[3rem] overflow-hidden group">
            <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl md:rounded-[3rem] p-8 md:p-12 text-center">
              
              {/* Animated Particles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slower" />
              
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                Ready to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Upgrade?
                </span>
              </h4>
              <p className="text-white/40 text-sm md:text-base mb-6 max-w-2xl mx-auto">
                Get a free consultation from our experts. Custom solutions tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-3 bg-white/5 border border-white/10 text-white/80 font-semibold rounded-full hover:bg-white/10 hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-white/5">
                {["ISO Certified", "24/7 Support", "100% Secure"].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-green-400/60" />
                    <span className="text-white/30 text-[10px] md:text-xs tracking-wide">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for Premium Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.15); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 8s ease-in-out infinite;
        }
        .animate-pulse-delayed {
          animation: pulse-slow 7s ease-in-out infinite 2s;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}