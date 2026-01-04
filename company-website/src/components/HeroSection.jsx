"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

export default function HeroSection() {
  return (
   <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 bg-gradient-to-br from-[#050B1E] via-[#0A1445] to-[#050B1E]">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Building{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Digital Solutions
          </span>{" "}
          for Modern Businesses
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-300">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              filter: [
                "drop-shadow(0 0 6px rgba(99,102,241,0.6))",
                "drop-shadow(0 0 14px rgba(168,85,247,0.9))",
                "drop-shadow(0 0 6px rgba(99,102,241,0.6))",
              ],
            }}
            transition={{
              duration: 4,
              delay: 0.6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent font-semibold"
          >
            CodeWinx IT Solutions
          </motion.span>{" "}
          delivers scalable, secure and high-performance web applications using
          modern technologies.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition text-white font-medium">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-500 text-white hover:bg-white hover:text-black transition">
            Our Services
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-5">
          <a className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 hover:scale-110 transition shadow-lg">
            <FaInstagram className="text-white text-xl" />
          </a>

          <a className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A66C2] hover:scale-110 transition shadow-lg">
            <FaLinkedin className="text-white text-xl" />
          </a>

          <a className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] hover:scale-110 transition shadow-lg">
            <FaWhatsapp className="text-white text-xl" />
          </a>

          <a className="w-12 h-12 flex items-center justify-center rounded-full bg-[#229ED9] hover:scale-110 transition shadow-lg">
            <FaTelegram className="text-white text-xl" />
          </a>

          <a className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1DA1F2] hover:scale-110 transition shadow-lg">
            <FaTwitter className="text-white text-xl" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
