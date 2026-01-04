"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // ✅ ADDED (THIS FIXES THE ERROR)
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

export default function AboutPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-b from-[#02030a] via-[#05060f] to-[#080b16] text-white py-24 px-6">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="flex flex-col items-center">
          <img
            src="https://selectedfirms.co/public/assets/images/blog_cover_image/659825942_1706523199.webp"
            alt="Codewinx Team"
            className="w-full max-w-sm rounded-2xl shadow-xl
              hover:scale-105 transition duration-500
              drop-shadow-[0_0_35px_rgba(0,194,255,0.45)]"
          />

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-4xl mt-6 pt-6">
            <FaInstagram className="hover:scale-110 transition text-[#E4405F]" />
            <FaLinkedin className="hover:scale-110 transition text-[#0A66C2]" />
            <FaWhatsapp className="hover:scale-110 transition text-[#25D366]" />
            <FaTelegram className="hover:scale-110 transition text-[#0088CC]" />
            <FaTwitter className="hover:scale-110 transition text-[#1DA1F2]" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center">
          <h1 className="mb-6 leading-tight overflow-hidden">

            {/* ABOUT */}
            <span
              className={`
                block text-3xl font-semibold
                transition-opacity duration-700
                ${show ? "opacity-100" : "opacity-0"}
              `}
            >
              About
            </span>

            {/* CODEWINX HEADING */}
            <span
              className={`
                block mt-2 text-4xl font-extrabold
                bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd]
                text-transparent bg-clip-text
                transition-opacity duration-1000 delay-150
                ${show ? "opacity-100" : "opacity-0"}
              `}
            >
              Codewinx IT Solutions
            </span>

          </h1>

          {/* PARAGRAPH */}
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At{" "}
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
            , we craft digital experiences that blend creativity with cutting-edge
            technology. We build high-performance websites and digital solutions
            using Next.js, React, Tailwind CSS, MongoDB & Express.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We believe every brand deserves premium quality development, scalable
            architecture, and eye-catching designs that stand out in the digital world.
          </p>

          <button
            className="mt-5 bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd]
              px-8 py-3 rounded-xl text-lg font-semibold shadow-lg
              hover:opacity-90 transition"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto mt-20 grid gap-8 sm:grid-cols-3">
        {[
          { number: "3+", label: "Years of Experience" },
          { number: "12+", label: "Projects Delivered" },
          { number: "98%", label: "Client Satisfaction" },
        ].map((stat, index) => (
          <div
            key={index}
            className="h-32 flex flex-col justify-center items-center
              px-6 py-4 bg-[#0c0e1a] rounded-xl
              border border-[#1d2030] shadow-lg
              hover:scale-105 transition"
          >
            <h3
              className="text-4xl font-bold
                bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd]
                text-transparent bg-clip-text"
            >
              {stat.number}
            </h3>
            <p className="text-gray-300 text-sm mt-2 text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto mt-24">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose{" "}
          <span className="bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
            Us?
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Creative Design", desc: "Premium UI/UX, neon gradients, and clean modern layouts." },
            { title: "High Performance", desc: "Next.js optimized websites for speed & SEO ranking." },
            { title: "Premium Support", desc: "Long-term support, maintenance & improvements." },
          ].map((card, index) => (
            <div
              key={index}
              className="h-36 px-6 py-5 bg-[#0c0e1a]
                rounded-xl border border-[#1d2030]
                shadow-lg flex flex-col justify-center
                hover:scale-105 transition"
            >
              <h3
                className="text-lg font-semibold mb-2
                  bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd]
                  text-transparent bg-clip-text"
              >
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
