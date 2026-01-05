"use client";
import React, { useState } from "react";
import { Briefcase, Users, Award, TrendingUp, Send } from "lucide-react";

export default function CareerSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    message: ''
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.position || !formData.experience || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    alert('Application submitted successfully! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      portfolio: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'A Culture Built on Growth',
      description: 'We offer mentorship, learning, and real-world exposure.'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Work That Matters',
      description: 'Projects that impact startups & enterprises.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Flexible Work Culture',
      description: 'Hybrid options & modern workflows.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Recognition & Rewards',
      description: 'We reward your contributions.'
    }
  ];

  const hiringSteps = [
    { step: '1', title: 'Apply Online', description: 'Submit your application' },
    { step: '2', title: 'Shortlisting', description: 'Resume evaluation' },
    { step: '3', title: 'HR Round', description: 'Discussion with HR' },
    { step: '4', title: 'Technical Round', description: 'Skills assessment' },
    { step: '5', title: 'Onboarding', description: 'Welcome to CodeWinx' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-6 md:px-12 lg:px-20">


      {/* Why Work With Us */}
      <section className="py-18 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-purple-900/5 to-slate-900/0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Why Work <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">With Us?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Experience a workplace that fuels your ambition and values your contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-5 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 animate-float-up cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-blue-400 mb-3 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 group-hover:text-purple-400">
                  {benefit.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form - Larger Size */}
      <section className="py-18 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Submit Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Application
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Your dream career awaits — take the first step today
            </p>
          </div>

          <div className="animate-fade-in-up">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-500/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Left Column */}
                <div>
                  <label className="block text-gray-300 mb-2 font-medium text-sm">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-sm"
                    placeholder="your name"
                  />
                </div>

                {/* Right Column */}
                <div>
                  <label className="block text-gray-300 mb-2 font-medium text-sm">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-sm"
                    placeholder="abc@gmail.com"
                  />
                </div>

                {/* Left Column */}
                <div>
                  <label className="block text-gray-300 mb-2 font-medium text-sm">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-sm"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                {/* Right Column */}
                <div>
                  <label className="block text-gray-300 mb-2 font-medium text-sm">Position *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-sm"
                  >
                    <option value="">Select Position</option>
                    <option value="fullstack">Full-Stack Developer</option>
                    <option value="mern">MERN Stack Developer</option>
                    <option value="react">React Developer</option>
                  </select>
                </div>

                {/* Left Column */}
                <div>
                  <label className="block text-gray-300 mb-2 font-medium text-sm">Years of Experience *</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-sm"
                    placeholder="e.g., 2 years"
                  />
                </div>

                {/* Right Column */}
                <div>
                  <label className="block text-gray-300 mb-2 font-medium text-sm">Portfolio URL</label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-sm"
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                {/* Full Width */}
                <div className="md:col-span-2">
                  <label className="block text-gray-300 mb-2 font-medium text-sm">Cover Letter *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white resize-none text-sm"
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                  ></textarea>
                </div>

                {/* Full Width Button */}
                <div className="md:col-span-2">
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 rounded-lg font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    Submit Application <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-18">
        <div className="mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Hiring <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connection Line - Desktop Only */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {hiringSteps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm p-5 md:p-6 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 text-center group hover:shadow-xl hover:shadow-cyan-500/30 animate-float-up"
                    style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-cyan-500/30">
                      {item.step}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-950/50 text-center">
        <p className="text-gray-400 text-base md:text-lg">© 2025 CodeWinx IT Solutions — All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-float-up { animation: float-up 0.8s ease-out forwards; }
        .animate-gradient-x { 
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite; 
        }
      `}</style>
    </div>
  );
}