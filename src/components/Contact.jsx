"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Clock,
  Shield,
  Zap,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";
import Footer from "@/shared/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const whatsappNumber = "919876543210";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  // FIXED: Missing function added
  const handleQuickMessage = (message) => {
    setFormData((prev) => ({
      ...prev,
      subject: message,
      message: `Hi, I need help regarding "${message}".`,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    const whatsappMessage = `
*🔒 NEW CONTACT FORM SUBMISSION*

*👤 Name:* ${formData.name}
*📧 Email:* ${formData.email}
*📌 Subject:* ${formData.subject || "General Inquiry"}

*💬 Message:* 
${formData.message}

*📱 Sent from:* Mobile Website
*⏰ Time:* ${new Date().toLocaleString()}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 800);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  const quickMessages = [
    { icon: "📹", text: "CCTV Installation Quote" },
    { icon: "🛡️", text: "Security System Upgrade" },
    { icon: "🔧", text: "Technical Support" },
    { icon: "🤝", text: "Become a Partner" },
    { icon: "📱", text: "Mobile App Demo" },
    { icon: "🏢", text: "Enterprise Solution" },
  ];

  const features = [
    { icon: Clock, text: "24/7 Support", color: "text-blue-400" },
    { icon: Zap, text: "Fast Response", color: "text-yellow-400" },
    { icon: Shield, text: "Secure", color: "text-green-400" },
    { icon: Sparkles, text: "AI Powered", color: "text-purple-400" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+91 98765 43210",
      link: `https://wa.me/${whatsappNumber}`,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@yourbusiness.com",
      link: "mailto:contact@yourbusiness.com",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Badarpur, New-Delhi, India",
      link: "https://maps.google.com/?q=Badarpur+New-Delhi+India",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
  ];

  return (
    <section className="min-h-screen bg-black overflow-x-hidden pb-[env(safe-area-inset-bottom)]">
      
      {/* Mobile Header */}
      <div className="sticky top-0 z-20 bg-black/95 backdrop-blur-md border-b border-white/10 px-4 py-4 md:hidden">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white font-medium text-lg">
              Contact Us
            </h1>

            <p className="text-white/40 text-xs">
              We're here to help
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-white/60 text-xs">
              Online
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-24 relative">

        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-600/10 blur-[100px] rounded-full -mr-40 -mt-40" />

        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-600/10 blur-[100px] rounded-full -ml-40 -mb-40" />

        {/* Desktop Header */}
        <div className="hidden md:block text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <MessageSquare
              size={16}
              className="text-green-400"
            />

            <span className="text-xs font-medium text-white/60 tracking-[0.2em]">
              CONNECT ON WHATSAPP
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-medium text-white mb-6">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Something Secure.
            </span>
          </h2>

          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Fill out the form and we'll respond on WhatsApp within 24 hours.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8 md:hidden">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
            >
              <feature.icon
                size={20}
                className={`${feature.color} mx-auto mb-1`}
              />

              <span className="text-white/60 text-[10px]">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-start">

          {/* Left */}
          <div className="order-2 lg:order-1">

            {/* Mobile Welcome */}
            <div className="md:hidden bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-5 mb-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MessageSquare
                    size={24}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <h3 className="text-white font-bold">
                    WhatsApp Support
                  </h3>

                  <p className="text-white/40 text-xs">
                    Response within 24h
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                  <span className="text-white/60 text-xs">
                    We're online!
                  </span>
                </div>

                <span className="text-green-400 text-xs font-mono">
                  24/7
                </span>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3 md:space-y-6">
              {contactInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">

                    <div
                      className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${item.bgColor} flex items-center justify-center`}
                    >
                      <item.icon
                        className={`${item.color}`}
                        size={isMobile ? 20 : 24}
                      />
                    </div>

                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>

                      <p className="text-white text-sm md:text-lg font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">

                    <button
                      onClick={() =>
                        copyToClipboard(
                          item.value.replace(/[^0-9+]/g, "")
                        )
                      }
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {copied ? (
                        <Check
                          size={16}
                          className="text-green-400"
                        />
                      ) : (
                        <Copy
                          size={16}
                          className="text-white/40"
                        />
                      )}
                    </button>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <ChevronRight
                        size={16}
                        className="text-white/40"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 p-5 md:p-10 rounded-2xl md:rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-8 md:py-12 text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4 md:mb-6">
                  <CheckCircle
                    size={32}
                    className="text-green-400"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Opening WhatsApp!
                </h3>

                <p className="text-white/40 text-sm">
                  Redirecting you to WhatsApp...
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-5"
              >

                {/* Inputs */}
                <div className="space-y-4">

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-green-500/50"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-green-500/50"
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-green-500/50"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={isMobile ? 3 : 4}
                    placeholder="Message"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-green-500/50 resize-none"
                  />
                </div>

                {/* Quick Templates */}
                <div className="flex flex-wrap gap-2">
                  {quickMessages.map((msg, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuickMessage(msg.text)}
                      className="text-xs bg-white/5 hover:bg-green-500/20 text-white/60 hover:text-white px-3 py-1.5 rounded-full transition-all"
                    >
                      <span className="mr-1">
                        {msg.icon}
                      </span>

                      {isMobile
                        ? msg.text.substring(0, 12)
                        : msg.text}
                    </button>
                  ))}
                </div>

                {/* Error */}
                {error && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2">
                    <AlertCircle
                      size={16}
                      className="text-red-400"
                    />

                    <p className="text-red-400 text-xs md:text-sm">
                      {error}
                    </p>
                  </div>
                )}

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-600/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />

                      <span className="text-sm">
                        Preparing...
                      </span>
                    </>
                  ) : (
                    <>
                      <MessageSquare size={18} />

                      <span className="text-sm md:text-base">
                        Send via WhatsApp
                      </span>

                      <Send
                        size={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>

                <p className="text-white/30 text-[10px] md:text-xs text-center">
                  By submitting, you agree to our Terms & Privacy Policy
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* FIXED: Footer moved outside container */}
      <Footer />
    </section>
  );
}