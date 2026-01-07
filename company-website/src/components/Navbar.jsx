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
  const [activeHash, setActiveHash] = useState("#home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
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

  // ✅ HASH TRACKING (FIX)
  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "#home");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 h-24 transition-all duration-500 ${
          scrolled
            ? "h-20 bg-[#0A0F1F] shadow-2xl shadow-purple-900/20"
            : "bg-[#0A0F1F]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-[#3AB4FF] to-[#A042F4] rounded-full blur-lg opacity-0 group-hover:opacity-15 transition-opacity duration-500" />
              <Image
                src="/cwxlogo.png"
                width={110}
                height={110}
                alt="CodeWinX IT Logo"
                priority
                className="logo-spin relative drop-shadow-2xl w-auto h-auto"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold tracking-wide whitespace-nowrap bg-linear-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4] bg-clip-text text-transparent text-3xl">
                CodeWinX
              </h1>
              <span className="text-xs text-white font-light tracking-widest self-end">
                We Code, You Win.
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => {
              const isActive = activeHash === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveHash(item.href)}
                  className="relative group text-sm font-medium"
                >
                  <span
                    className={`relative inline-block pb-2 transition-all duration-300 ${
                      isActive
                        ? "text-[#5F6FFF]"
                        : "text-gray-300 group-hover:text-[#5F6FFF]"
                    }`}
                  >
                    {item.name}
                  </span>

                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-[#3AB4FF] to-[#A042F4] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              className="ml-6 flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-white text-sm bg-linear-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4] shadow-lg hover:shadow-2xl hover:scale-105 animate-float-smooth transition-all duration-300"
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

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-50 text-white p-2 rounded-lg hover:bg-white/10"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
        />

        <div
          className={`absolute right-0 top-0 h-full w-80 bg-[#0A0F1F] shadow-2xl transition-transform duration-500 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-2 p-8 mt-24">
            {navItems.map((item) => {
              const isActive = activeHash === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-[#3AB4FF]/20 via-[#5F6FFF]/20 to-[#A042F4]/20 text-white border-l-4 border-[#3AB4FF]"
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
                bg-linear-to-r from-[#3AB4FF] via-[#5F6FFF] to-[#A042F4]
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
        @keyframes spin-360 {
           from {
           transform: rotate(0deg);
         }
           to {
          transform: rotate(360deg);
       }
      }
        .group:hover .logo-spin {
            animation: spin-360 0.8s ease-in-out;
        }

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
