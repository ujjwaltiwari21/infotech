"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Camera, Shield, LayoutGrid, Phone, Menu, X } from "lucide-react";

const DockIcon = ({ icon: Icon, label, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative group flex flex-col items-center justify-center p-2 cursor-pointer"
    >
      <div className="text-white/80 group-hover:text-white transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-medium py-1 px-2 rounded-lg shadow-lg whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
};

// Mobile Menu Item Component
const MobileMenuItem = ({ icon: Icon, label, onClick, isLast }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex items-center gap-4 w-full px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 ${
        !isLast ? "border-b border-white/10" : ""
      }`}
    >
      <Icon size={20} strokeWidth={1.5} />
      <span className="text-sm font-medium">{label}</span>
    </motion.button>
  );
};

export default function Dock() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const menus = [
    { icon: Home, label: "Home", href: "/", id: "home" },
    { icon: Camera, label: "Cameras", href: "/cameras", id: "cameras" },
    { icon: Shield, label: "Security", href: "/security", id: "security" },
    { icon: LayoutGrid, label: "Services", href: "/services", id: "services" },
    { icon: Phone, label: "Contact", href: "/contact", id: "contact" },
  ];

  const handleNavigation = (href, label) => {
    console.log(`Navigating to: ${label} - ${href}`);
    
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Handle navigation
    if (href === "/") {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Update URL without reload
      if (window.location.pathname !== "/") {
        window.location.href = href;
      }
    } else {
      // Navigate to different pages
      window.location.href = href;
    }
  };

  // Smooth scroll to section if on same page
  const handleSmoothScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Desktop: macOS-style taskbar
  if (!isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <nav className="flex items-center gap-1 px-3 py-1.5 bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] shadow-white/5">
          {menus.map((item, index) => (
            <React.Fragment key={item.label}>
              <DockIcon
                icon={item.icon}
                label={item.label}
                onClick={() => handleNavigation(item.href, item.label)}
              />
              {index !== menus.length - 1 && (
                <div className="w-[1px] h-6 bg-white/10 mx-0.5" />
              )}
            </React.Fragment>
          ))}
        </nav>
      </motion.div>
    );
  }

  // Mobile: Hamburger menu in top bar
  return (
    <>
      {/* Hamburger Icon */}
      <div className="lg:hidden fixed top-4 right-4 z-[60]">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-200"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X size={20} className="text-white" />
          ) : (
            <Menu size={20} className="text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[65]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="mobile-menu-container fixed top-0 right-0 h-full w-64 z-[70] bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-l border-white/20 shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-white font-semibold text-lg">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={20} className="text-white/70" />
                </button>
              </div>
              
              <div className="flex flex-col py-2">
                {menus.map((item, idx) => (
                  <MobileMenuItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    onClick={() => handleNavigation(item.href, item.label)}
                    isLast={idx === menus.length - 1}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}