"use client";
import React, { useState } from "react";
import { Briefcase, Users, Award, TrendingUp, Send, ChevronRight } from "lucide-react";

export default function CareerPage() {
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

  const positions = [
    {
      title: 'Full-Stack Developer',
      type: 'Remote',
      description: 'Build end-to-end solutions with modern tech stack',
      skills: ['Node.js', 'React', 'MongoDB', 'Express']
    },
    {
      title: 'MERN Stack Developer',
      type: 'Hybrid',
      description: 'Create scalable web applications using MERN stack',
      skills: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      title: 'React Developer',
      type: 'Remote',
      description: 'Craft beautiful and performant user interfaces',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js']
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'A Culture Built on Growth',
      description: 'We offer mentorship, learning, and real-world exposure.'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Work That Matters',
      description: 'Projects that impact startups & enterprises.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Flexible Work Culture',
      description: 'Hybrid options & modern workflows.'
    },
    {
      icon: <Award className="w-8 h-8" />,
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
            Build Your Future with
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00c2ff] via-[#5b4bff] to-[#ff3bcd] text-transparent bg-clip-text">
            CodeWinx IT Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join a team where innovation meets creativity — and your growth truly matters.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-purple-900/5 to-slate-900/0"></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in-down">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Why Work <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">With Us?</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              At CodeWinx IT Solutions, we don't just give tasks — <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">we build careers.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 animate-float-up cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-blue-400 mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 group-hover:text-purple-400">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Combined Application Form & Open Positions Section */}
<section className="py-28 px-4 bg-slate-900/50">
  <div className="mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-8">
        Apply & Explore{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Opportunities
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        Your dream career awaits — take the first step today
      </p>
    </div>

    {/* Grid with Added Spacing */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-20">
      
      {/* Application Form - Left Side */}
      <div className="order-2 lg:order-1 animate-slide-in-left">
        <div className="lg:sticky lg:top-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Submit{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Application
            </span>
          </h3>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-slate-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-500/50">
            <div className="space-y-6">
              
              <div>
                <label className="block text-gray-300 mb-2 font-medium text-lg">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-lg"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium text-lg">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-lg"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium text-lg">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-lg"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium text-lg">Position *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-lg"
                >
                  <option value="">Select Position</option>
                  <option value="fullstack">Full-Stack Developer</option>
                  <option value="mern">MERN Stack Developer</option>
                  <option value="react">React Developer</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium text-lg">Years of Experience *</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-lg"
                  placeholder="e.g., 2 years"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium text-lg">Portfolio URL</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white text-lg"
                  placeholder="https://yourportfolio.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium text-lg">Cover Letter *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700/50 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-white resize-none text-lg"
                  placeholder="Tell us about yourself and why you'd be a great fit..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 rounded-xl font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
              >
                Submit Application <Send className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions - Right Side */}
      <div className="order-1 lg:order-2 animate-slide-in-right">
        <h3 className="text-3xl md:text-4xl font-bold mb-8">
          Open{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Positions
          </span>
        </h3>

        <div className="space-y-8">
          {positions.map((position, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {position.title}
                </h4>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-base font-medium border border-blue-500/30 animate-pulse-slow">
                  {position.type}
                </span>
              </div>

              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {position.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {position.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-xl text-base border border-slate-600/50 hover:bg-slate-600/50 hover:border-purple-500/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4 shadow-lg group-hover:shadow-purple-500/50">
                View Details{" "}
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Hiring Process Section */}
      <section className="py-28 px-4">
        <div className=" mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Hiring <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              A clear, transparent path to your new career
            </p>
          </div>

          <div className="relative">
            {/* Connection Line - Desktop Only */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {hiringSteps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-110 text-center group hover:shadow-2xl hover:shadow-cyan-500/30 animate-float-up"
                    style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-cyan-500/30">
                      {item.step}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800 bg-slate-950/50">
        <div className="mx-auto text-center">
          <p className="text-gray-400 text-lg">© 2025 CodeWinx IT Solutions — All Rights Reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-up {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }

        .animate-float-up {
          animation: float-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}