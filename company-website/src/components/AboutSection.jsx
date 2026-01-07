"use client";

import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaPhoneAlt,
} from "react-icons/fa";

export default function AboutPage() {
  const fullText = "Codewinx IT Solutions";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 90);

    return () => clearInterval(typingInterval);
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

          <div className="flex gap-6 text-4xl mt-6 pt-6">
            <FaInstagram className="text-[#E4405F]" />
            <FaLinkedin className="text-[#0A66C2]" />
            <FaWhatsapp className="text-[#25D366]" />
            <FaTelegram className="text-[#0088CC]" />
            <FaTwitter className="text-[#1DA1F2]" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center">
          <h1 className="mb-6">
            <span className="block text-3xl font-semibold">About</span>

            <span className="block mt-2 text-4xl font-extrabold bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-4">
            we craft digital experiences that blend creativity with cutting-edge
            technology. We build high-performance websites and digital solutions
            using Next.js, React, Tailwind CSS, MongoDB & Express.
          </p>

          <p className="text-lg text-gray-300 mb-3">
            We believe every brand deserves premium quality development, scalable
            architecture, and eye-catching designs that stand out in the digital world.
          </p>

          {/* CALL ICON */}
          <div className="flex justify-center mt-6">
            <a
              href="tel:+919999999999"
              className="w-14 h-14 flex items-center justify-center
                rounded-full bg-[#0c0e1a]
                border border-[#1d2030]
                shadow-lg hover:scale-110 transition"
            >
              <FaPhoneAlt className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* STATS BOXES */}
      <div className="max-w-7xl mx-auto mt-20 grid gap-8 sm:grid-cols-3">
        {[
          { number: "3+", label: "Years of Experience" },
          { number: "12+", label: "Projects Delivered" },
          { number: "98%", label: "Client Satisfaction" },
        ].map((stat, index) => (
          <div
            key={index}
            className="h-32 flex flex-col justify-center items-center
              px-6 py-4 bg-[#0c0e1a]/90
              rounded-xl border border-[#1d2030]
              shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-4xl font-bold bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
              {stat.number}
            </h3>
            <p className="text-gray-300 text-sm mt-2 text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE US – MATCHED BOX STYLE */}
      <div className="max-w-7xl mx-auto mt-24">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose{" "}
          <span className="bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
            Us?
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Creative Design",
              desc: "Premium UI/UX, neon gradients, and clean modern layouts.",
            },
            {
              title: "High Performance",
              desc: "Next.js optimized websites for speed & SEO ranking.",
            },
            {
              title: "Premium Support",
              desc: "Long-term support, maintenance & improvements.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="h-32 flex flex-col justify-center items-center
                px-6 py-4 bg-[#0c0e1a]/90
                rounded-xl border border-[#1d2030]
                shadow-lg hover:scale-105 transition text-center"
            >
              <h3 className="text-lg font-semibold bg-linear-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
