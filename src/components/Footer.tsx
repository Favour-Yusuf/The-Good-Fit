// src/components/Footer.tsx
"use client";

import { FiInstagram, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-5 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dcuad6p9z/image/upload/v1754637745/Thegoodfit-logo-removebg-preview_fhcoii.png"
            alt="The Good Fit Logo"
            className="h-12 w-auto object-contain"
          />
          <div>
            <h4 className="font-bold text-lg">DeeGoodFit Studio</h4>
            <p className="text-white/60 text-sm">Where strength meets purpose</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-white/80">
            <FiPhone className="text-purple-500" />
            <span>+234 808 460 9951</span>
          </div>
          <a
            href="https://www.instagram.com/deegoodfit?utm_source=ig_web_button_share_sheet&igsh=NWlyZXlscDJ1Nm1t"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition"
          >
            <FiInstagram className="text-purple-500" />
            deegoodfit
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-white/50 text-center lg:text-right">
          &copy; {new Date().getFullYear()} DeeGoodFit Studio. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
