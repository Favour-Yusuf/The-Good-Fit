// src/components/PrivateTraining.tsx
"use client";

import { useState } from "react";
import { FiUser, FiPhone, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function PrivateTraining({
  whatsappNumber,
  backgroundImageUrl,
}: {
  whatsappNumber: string;
  backgroundImageUrl: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = () => {
    if (name.trim().length < 2) {
      toast.error("Please enter your name.");
      return;
    }
    if (!/^\d{11}$/.test(phone)) {
      toast.error("Phone number must be 11 digits.");
      return;
    }

    const msg = `Hi, my name is ${name}, and I'm interested in private training at The Good Fit.\nPhone: ${phone}`;
    const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waLink, "_blank");
  };

  return (
    <section
      className="relative w-full text-white"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/10 p-10 md:p-16 backdrop-blur-lg border border-white/10 shadow-xl"
        >
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Looking for Private Training?
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              Get one-on-one sessions tailored to your fitness goals.
              Our certified trainers are here to help you level up.
            </p>

            <div className="grid gap-4 mt-6">
              <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3">
                <FiUser className="text-purple-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                  className="flex-1 bg-transparent text-white placeholder-white/50 outline-none"
                />
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3">
                <FiPhone className="text-purple-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="11-digit Phone Number"
                  maxLength={11}
                  className="flex-1 bg-transparent text-white placeholder-white/50 outline-none"
                />
              </div>

              <button
                onClick={handleBooking}
                className="inline-flex justify-center items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition mt-3"
              >
                <FiZap />
                Book Private Session
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
