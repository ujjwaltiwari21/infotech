"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const [isMobile, setIsMobile] = useState(false);
  
  // WhatsApp number (replace with your actual number)
  const phoneNumber = "9576224120";
  const message = encodeURIComponent("Hi! I'm interested in your security solutions.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <button
        onClick={handleWhatsAppClick}
        className="relative group"
        aria-label="Chat on WhatsApp"
      >
        {/* Desktop-only hover effect */}
        {!isMobile && (
          <>
            <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-0 group-hover:opacity-40 pointer-events-none"></div>
          </>
        )}
        
        {/* Main Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="28" 
            height="28" 
            fill="white"
          >
            <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2 6.798 2 2.556 6.242 2.55 11.45c-.002 1.659.434 3.276 1.263 4.705L2 22l5.997-1.577c1.375.75 2.94 1.148 4.533 1.147h.004c5.205 0 9.448-4.242 9.454-9.45a9.394 9.394 0 0 0-2.768-6.694l-.143-.098zM12.007 20.23h-.003c-1.404-.001-2.774-.378-3.962-1.088l-.284-.169-3.564.938.953-3.508-.185-.293c-.8-1.267-1.222-2.72-1.222-4.208 0-4.383 3.568-7.951 7.957-7.951 2.124 0 4.122.828 5.624 2.33a7.918 7.918 0 0 1 2.33 5.627c-.005 4.382-3.573 7.951-7.956 7.951zm4.362-5.95c-.239-.12-1.416-.699-1.636-.779-.219-.08-.379-.12-.538.12-.159.24-.619.779-.759.939-.14.16-.28.18-.519.06-.239-.12-1.009-.372-1.922-1.185-.711-.634-1.19-1.417-1.331-1.656-.14-.24-.015-.37.106-.49.109-.109.239-.28.359-.42.119-.14.159-.24.239-.399.08-.16.04-.3-.02-.42-.06-.12-.538-1.297-.737-1.776-.194-.466-.392-.404-.539-.411-.139-.007-.299-.007-.459-.007-.16 0-.419.06-.639.299-.219.24-.839.82-.839 2.002 0 1.182.86 2.323.98 2.484.12.16 1.694 2.586 4.104 3.626.573.248 1.021.397 1.37.508.576.18 1.1.155 1.514.094.462-.069 1.423-.582 1.623-1.144.2-.562.2-1.044.14-1.144-.06-.1-.22-.16-.459-.28z"/>
          </svg>
        </div>

        {/* Desktop-only Tooltip */}
        {!isMobile && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            <div className="bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg">
              Chat on WhatsApp
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}