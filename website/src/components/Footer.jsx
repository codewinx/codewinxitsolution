"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0F1F] text-white pt-20 pb-10">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">

        {/* Logo Section */}
        <div className="col-span-1">
          <img 
            src="logo.png" 
            alt="Logo" 
            className="w-[80px] mb-6"
          />
          {/* <p className="text-gray-300 text-sm leading-relaxed max-w-[220px]">
            Leading IT solutions for Web, Mobile & Enterprise applications.
          </p> */}
          <p className="text-gray-300 text-sm leading-relaxed max-w-[220px] font-Bold">
  Leading IT solutions for Web, Mobile & Enterprise applications.
</p>

        </div>

        {/* OUR SERVICES */}
        <div>
          <h2 className="text-lg font-semibold mb-4">OUR SERVICES</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white transition">Web Development</li>
            <li className="hover:text-white transition">Mobile Development</li>
            <li className="hover:text-white transition">Billing Software</li>
            <li className="hover:text-white transition">Enterprise Software</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h2 className="text-lg font-semibold mb-4">HELP</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white transition">Contact Us</li>
            <li className="hover:text-white transition">FAQ</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-lg font-semibold mb-4">QUICK LINKS</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">About</li>
            <li className="hover:text-white transition">Services</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* Newsletter + Social Icons */}
        <div>
          {/* Email Subscribe */}
          <h2 className="text-lg font-semibold mb-4">SUBSCRIBE</h2>

          <div className="flex mb-6">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 w-[200px] rounded-l-full text-white outline-skyblue"
            />
            <button className="bg-[#DE963C] px-6 py-2 rounded-r-full text-black font-semibold ml-[5px]
">
              Go
            </button>
          </div>

          {/* Social Icons */}
          <p className="text-[17px] mb-3">Connect With Us</p>

          <div className="flex items-center gap-4">

            {/* Instagram */}
            <SocialIcon src="https://cdn-icons-png.flaticon.com/512/174/174855.png" />

            {/* Facebook */}
            <SocialIcon src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />

            {/* WhatsApp */}
            <SocialIcon src="https://cdn-icons-png.flaticon.com/512/733/733585.png" />

            {/* X */}
            <SocialText text="X" glow="rgba(0,153,255,0.9)" />

            {/* LinkedIn */}
            <SocialIcon src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" />

          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <p className="text-center text-gray-400 mt-16 text-sm">
        © {new Date().getFullYear()} CodeWinX IT Solutions. All Rights Reserved.
      </p>
    </footer>
  );
}

/* Social Image Icon */
function SocialIcon({ src }) {
  return (
    <img
      src={src}
      className="w-[30px] cursor-pointer transition duration-200 hover:scale-125 hover:drop-shadow-[0_0_10px_white]"
      alt="icon"
    />
  );
}

/* Social X Text Icon */
function SocialText({ text, glow }) {
  return (
    <span
      className="text-[25px] font-bold cursor-pointer transition duration-200"
      onMouseOver={(e) => {
        e.target.style.transform = "scale(1.25)";
        e.target.style.filter = `drop-shadow(0 0 10px ${glow})`;
      }}
      onMouseOut={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.filter = "drop-shadow(0 0 0 transparent)";
      }}
    >
      {text}
    </span>
  );
}
