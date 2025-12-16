"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0A0F1F] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-3">
          <Image src="/logo.png" width={50} height={50} alt="Logo" />
          <span className="font-bold text-xl">CodeWinX</span>
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-white transition"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0F1F] px-6 py-8 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block text-left w-full text-gray-300 hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
