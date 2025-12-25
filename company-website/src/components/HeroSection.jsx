"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#050B1E] via-[#0A1445] to-[#050B1E]">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Building <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Digital Solutions
          </span>{" "}
          for Modern Businesses
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          CodeWinx IT Solutions delivers scalable, secure and high-performance
          web applications using modern technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl border border-gray-500 hover:bg-white hover:text-black transition">
            Our Services
          </button>
        </div>
      </motion.div>
    </section>
  );
}
