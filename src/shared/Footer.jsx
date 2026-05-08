"use client";
import React from "react";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Globe,
  BadgeCheck,
  Link,
  X,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { Icon: Globe, href: "https://facebook.com" },
    { Icon: X, href: "https://x.com" },
    { Icon: BadgeCheck, href: "https://instagram.com" },
    { Icon: Link, href: "https://linkedin.com" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 mt-auto w-full relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-white" size={24} />
              </div>

              <span className="text-2xl font-medium text-white">
                Info<span className="text-blue-500">Tech</span>
              </span>
            </div>

            <p className="text-white/40 leading-relaxed text-sm max-w-xs">
              Premium security solutions and IT infrastructure.
              Building trust through advanced technology.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((item, i) => {
                if (!item.Icon) return null;

                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <item.Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 text-white/40 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-blue-500 transition-all uppercase font-semibold tracking-wider text-[11px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">
              Contact
            </h4>

            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-blue-500 shrink-0 mt-1"
                />

                <span>Badarpur, New-Delhi</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-blue-500 shrink-0"
                />

                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-blue-500 shrink-0"
                />

                <span>contact@infotech.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">
              Newsletter
            </h4>

            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-blue-500/50 transition-all text-white"
                />

                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold text-sm transition-colors">
                  Go
                </button>
              </div>

              <p className="text-[10px] text-white/20 uppercase tracking-tighter">
                Stay updated with latest security tech.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[10px] tracking-[0.2em] font-bold">
          <p>© 2026 SECUREPRO SYSTEMS</p>
          <p>DESIGNED BY INFOTECH</p>
        </div>
      </div>
    </footer>
  );
}