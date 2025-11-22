"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
  }, [pathname]);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "h-20 bg-[#0A0F1F] shadow-2xl shadow-purple-900/20"
            : "h-24 bg-[#0A0F1F]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          {/* LOGO + COMPANY NAME */}
          <Link
            href="/"
            className="flex items-center gap-3 group cursor-pointer relative z-10"
          >
            <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-[#3AB4FF] to-[#A042F4] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <Image
                src="/logo.png"
                width={scrolled ? 100: 110}
                height={scrolled ? 100 : 110}
                alt="CodeWinX IT Logo"
               className="relative transition-all duration-500 group-hover:rotate-[360deg] drop-shadow-2xl"
              />
            </div>

            <div className="flex flex-col">
             <h1
                   className={`font-bold tracking-wide whitespace-nowrap bg-gradient-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4] bg-clip-text text-transparent transition-all duration-500 ${
                  scrolled ? "text-2xl" : "text-3xl"
                }`}
  >
               CodeWinX IT
              </h1>

                   <span className="text-xs text-white font-light tracking-widest opacity-100 transition-opacity duration-300 self-end">
                 We Code, You Win.
                 </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-base font-medium group transition"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span
                    className={`transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4] bg-clip-text text-transparent font-semibold"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>

                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full bg-gradient-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4]"
                        : "w-0 bg-gradient-to-r from-[#3AB4FF] to-[#A042F4] group-hover:w-full"
                    }`}
                  ></span>
                  </Link>
              );
            })}

              {/* WHATSAPP ICON BUTTON(desktop)*/}
              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                className="
                  ml-6 flex items-center gap-3 px-5 py-3 rounded-xl 
                  font-semibold text-white text-sm
                  bg-gradient-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4]
                  shadow-lg hover:shadow-2xl hover:scale-105
                  animate-float-smooth transition-all duration-300
                "
              >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={28}
                height={28}
                className="animate-spin-slow"
              />
               Chat on WhatsApp
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-50 text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute right-0 top-0 h-full w-80 bg-[#0A0F1F] shadow-2xl transition-transform duration-500 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-2 p-8 mt-24">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#3AB4FF]/20 via-[#5F6FFF]/20 to-[#A042F4]/20 text-white border-l-4 border-[#3AB4FF]"
                      : "text-gray-300 hover:bg-white/5 hover:text-white hover:translate-x-2"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/*WHATSAPP BUTTON (MOBILE) */}
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              className="
                mt-6 flex items-center gap-3 px-6 py-4 rounded-xl 
                text-white font-semibold text-lg w-[85%] mx-auto
                bg-gradient-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4]
                shadow-lg hover:shadow-2xl hover:scale-105
                animate-float-smooth transition-all duration-300
              "
            >
             <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={30}
                height={30}
                className="animate-spin-slow"
              />
                Chat on WhatsApp
            </Link>
          </nav>
        </div>
      </div>

      {/* GLOBAL ANIMATIONS */}
      <style jsx global>{`
        @keyframes floatSmooth {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes spinSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-float-smooth {
          animation: floatSmooth 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 6s linear infinite;
        }

        /* ADDED ANIMATION */
        @keyframes pulse-slow {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.75;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
