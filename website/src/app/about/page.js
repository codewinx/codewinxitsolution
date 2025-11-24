"use client";

import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#02030a] via-[#05060f] to-[#080b16] text-white py-24 px-6">
      
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEAM IMAGE */}
        <div className="flex flex-col items-center">
          
          <img
            src="https://selectedfirms.co/public/assets/images/blog_cover_image/659825942_1706523199.webp"
            alt="Codewinx Team"
            className="w-full max-w-sm rounded-2xl shadow-xl hover:scale-105 transition duration-500 drop-shadow-[0_0_35px_rgba(0,194,255,0.45)]"
          />

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-4xl mt-6 pt-6">
            <a href="#" className="transition hover:scale-110" style={{ color: "#E4405F" }}>
              <FaInstagram />
            </a>
            <a href="#" className="transition hover:scale-110" style={{ color: "#0A66C2" }}>
              <FaLinkedin />
            </a>
            <a href="#" className="transition hover:scale-110" style={{ color: "#25D366" }}>
              <FaWhatsapp />
            </a>
            <a href="#" className="transition hover:scale-110" style={{ color: "#0088CC" }}>
              <FaTelegram />
            </a>
            <a href="#" className="transition hover:scale-110" style={{ color: "#1DA1F2" }}>
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            <span>About</span> <br />
            <span className="bg-gradient-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
              Codewinx IT Solutions
            </span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At <strong>Codewinx IT Solutions</strong>, we craft digital experiences
            that blend creativity with cutting-edge technology. We build
            high-performance websites and digital solutions using Next.js, React,
            Tailwind CSS, MongoDB & Express.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We believe every brand deserves premium quality development, scalable
            architecture, and eye-catching designs that stand out in the digital world.
          </p>

          <button className="mt-5 bg-gradient-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:opacity-90 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto mt-24 grid gap-10 sm:grid-cols-3">
        {[
          { number: "3+", label: "Years of Experience" },
          { number: "12+", label: "Projects Delivered" },
          { number: "98%", label: "Client Satisfaction" },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-8 bg-[#0c0e1a] rounded-2xl shadow-xl border border-[#1d2030] text-center hover:scale-105 transition"
          >
            <h3 className="text-5xl font-bold bg-gradient-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
              {stat.number}
            </h3>
            <p className="text-gray-300 mt-3 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto mt-28">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
            Us?
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
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
              className="p-8 bg-[#0c0e1a] rounded-2xl shadow-xl border border-[#1d2030] hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
                {card.title}
              </h3>
              <p className="text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
