"use client";
import { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  Clock,
  Globe,
  Award,
  Users,
  Zap,
} from "lucide-react";
import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa6";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    setTimeout(() => {
      setStatus("success");
      setIsSubmitting(false);
      setTimeout(() => {
        setForm({ name: "", email: "", message: "" });
        setStatus("");
      }, 3000);
    }, 1500);
  };

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: "Fast Response", desc: "Within 24 hours" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Team", desc: "15+ Professionals" },
    { icon: <Award className="w-6 h-6" />, title: "Quality Work", desc: "100% Satisfaction" },
    { icon: <Globe className="w-6 h-6" />, title: "Global Reach", desc: "Worldwide Service" }
  ];

  const handleCardKey = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveCard(activeCard === idx ? null : idx);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#05070F] relative overflow-hidden">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

      {/* Dark Neon Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-[450px] h-[450px] bg-[#0A1A44] rounded-full filter blur-[120px] opacity-40 animate-blob" />
        <div className="absolute top-40 -right-20 w-[450px] h-[450px] bg-[#1B0A3A] rounded-full filter blur-[120px] opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-[450px] h-[450px] bg-[#0A233A] rounded-full filter blur-[120px] opacity-40 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-20 pb-20 px-4">

        {/* Title */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight">
            Let's Build Something
            <span className="block bg-gradient-to-r from-[#005AE0] via-[#43C8FF] to-[#FF47BE] bg-clip-text text-transparent mt-2 pb-4 inline-block">
              Amazing Together
            </span>
          </h1>

          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed px-4 mx-auto">
            Transform your ideas with{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text">
              CodeWinx IT Solutions
            </span>
            . We deliver excellence worldwide.
          </p>
        </div>

        {/* Main Container */}
        <div className="w-full max-w-7xl px-4 space-y-8">

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const isActive = activeCard === idx;
              return (
                <div
                  key={idx}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveCard(isActive ? null : idx)}
                  onKeyDown={(e) => handleCardKey(e, idx)}
                  className={`card bg-[#0E1525]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer transform-gpu
                    ${isActive ? "scale-105 -translate-y-3 shadow-2xl border-white/30" : "hover:scale-102 hover:border-white/20"}`}
                  data-mounted={mounted ? "true" : "false"}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white transition-transform 
                      ${isActive ? "scale-110" : "group-hover:scale-110"} 
                      bg-gradient-to-br from-indigo-600 to-purple-700`}
                    >
                      {feature.icon}
                    </div>
                    <p className="font-bold text-white text-lg">{feature.title}</p>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form + Info */}
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div
                className="card bg-[#0E1525]/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/10"
                data-mounted={mounted ? "true" : "false"}
              >
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
                    <p className="text-gray-400">We’ll reply within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>

                  {/* Name */}
                  <div>
                    <label className="flex items-center gap-2 mb-3 font-semibold text-white">
                      <User className="w-5 h-5 text-cyan-300" />
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-[#111827] border border-gray-700 px-5 py-4 rounded-xl text-white focus:border-purple-500 outline-none"
                      placeholder="your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 mb-3 font-semibold text-white">
                      <Mail className="w-5 h-5 text-blue-300" />
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-[#111827] border border-gray-700 px-5 py-4 rounded-xl text-white focus:border-purple-500 outline-none"
                      placeholder="abc@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="flex items-center gap-2 mb-3 font-semibold text-white">
                      <MessageSquare className="w-5 h-5 text-purple-300" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-[#111827] border border-gray-700 px-5 py-4 rounded-xl text-white resize-none focus:border-purple-500 outline-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-auto px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white font-semibold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-3 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>

                  {status === "success" && (
                    <div className="flex items-center gap-3 bg-green-500/20 border border-green-400/40 text-green-300 px-5 py-4 rounded-xl animate-fadeIn">
                      <CheckCircle className="w-6 h-6" />
                      <div>
                        <p className="font-bold">Success!</p>
                        <p className="text-sm text-green-400">Your message has been sent!</p>
                      </div>
                    </div>
                  )}

                </form>
              </div>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-1 space-y-6">

              {/* Contact Information */}
              <div
                className="card bg-[#0E1525]/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
                data-mounted={mounted ? "true" : "false"}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-blue-300" />
                  Contact Information
                </h3>

                <div className="space-y-5">

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-700 to-indigo-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm mb-1">Location</p>
                      <p className="text-gray-300 text-sm">
                        Pune, Maharashtra <br /> India 🇮🇳
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-purple-700 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm mb-1">Email</p>
                      <p className="text-gray-300 text-xs break-all">
                        support@codewinxitsolutions.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm mb-1">Phone</p>
                      <p className="text-gray-300 text-sm">+91 98765 43210</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Business Hours */}
              <div
                className="card bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 rounded-3xl p-6 shadow-2xl"
                data-mounted={mounted ? "true" : "false"}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-7 h-7 text-white" />
                  <h3 className="text-xl font-bold text-white">Business Hours</h3>
                </div>

                <div className="space-y-3 text-white">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                    <span className="font-semibold text-sm">Monday - Saturday</span>
                    <span className="text-blue-100 text-sm">24 Hours</span>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div
                className="card bg-[#0E1525]/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center"
                data-mounted={mounted ? "true" : "false"}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Quick Response Guarantee</h4>
                <p className="text-gray-300 text-sm">We respond within 24 hours.</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="relative z-10 mt-16 text-center pb-16 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-white">Connect With Us</h2>

        <div className="flex justify-center gap-6 text-4xl">
          <a className="text-green-400 hover:scale-125 transition-transform"><FaWhatsapp /></a>
          <a className="text-blue-300 hover:scale-125 transition-transform"><FaTwitter /></a>
          <a className="text-pink-400 hover:scale-125 transition-transform"><FaInstagram /></a>
          <a className="text-blue-400 hover:scale-125 transition-transform"><FaTelegram /></a>
          <a className="text-blue-500 hover:scale-125 transition-transform"><FaLinkedin /></a>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .card {
          opacity: 0;
          transform: translateY(32px) scale(0.995);
        }
        .card[data-mounted="true"] {
          animation-name: cardFade;
          animation-duration: 900ms;
          animation-timing-function: cubic-bezier(.16,.84,.31,1);
          animation-fill-mode: forwards;
        }

        @keyframes cardFade {
          0% { opacity: 0; transform: translateY(32px) scale(0.995); }
          60% { opacity: 1; transform: translateY(-6px) scale(1.005); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

    </div>
  );
}
