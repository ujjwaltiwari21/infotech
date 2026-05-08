"use client";
import React from "react";
import { Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    { name: "Samsung", logo: "https://cdn.simpleicons.org/samsung/0047BA" },
    { name: "LG", logo: "https://cdn.simpleicons.org/lg/A50034" },
    { name: "Sony", logo: "https://cdn.simpleicons.org/sony/000000" },
    { name: "Panasonic", logo: "https://cdn.simpleicons.org/panasonic/004191" },
    // { name: "Dahua", logo: "https://cdn.simpleicons.org/dahuasecurity/E31837" },
    { name: "TP-Link", logo: "https://cdn.simpleicons.org/tplink/19B2FF" },
    { name: "Dell", logo: "https://cdn.simpleicons.org/dell/007DB8" },
    { name: "HP", logo: "https://cdn.simpleicons.org/hp/0096D6" },
    { name: "Intel", logo: "https://cdn.simpleicons.org/intel/0071C5" },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="text-center mb-5 md:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-2">
            <Building2 size={12} className="text-blue-600" />
            <span className="text-[10px] font-semibold text-gray-700 tracking-wide">OUR PARTNERS</span>
          </div>
          <h2 className="text-xl md:text-2xl font-medium text-gray-900">
            Trusted By Global{" "}
            <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-gray-400 text-xs mt-1 max-w-2xl mx-auto">
            500+ partners worldwide
          </p>
        </div>

        {/* Compact Grid with Proper Logo Sizing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center justify-center h-16 md:h-20 px-2 transition-all duration-300 group-hover:scale-105 bg-white rounded-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-8 md:max-h-10 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    const span = document.createElement('span');
                    span.className = "text-gray-400 font-medium text-xs";
                    span.textContent = partner.name.substring(0, 3);
                    parent.appendChild(span);
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Bottom Line */}
        <div className="mt-6 pt-3 text-center">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-px bg-gray-300"></span>
            <span className="text-[10px] text-gray-400">Trusted by industry leaders</span>
            <span className="w-6 h-px bg-gray-300"></span>
          </div>
        </div>
      </div>
    </section>
  );
}