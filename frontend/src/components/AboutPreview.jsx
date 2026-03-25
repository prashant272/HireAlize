import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Award, Target, Zap } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-12 md:py-20 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Sync: Unified Orange/White */}
      <div className="absolute inset-0 bg-orange-600/5 opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      {/* Decorative Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/[0.03] rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Left Side: Visual Masterpiece (5/12) */}
          <div className="lg:col-span-5 relative group animate-fade-in-up">
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 p-2 bg-gradient-to-b from-white/10 to-transparent shadow-2xl shadow-black/50">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                <img
                  src="/hero1.jpg"
                  alt="About Hirealize"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Tech Floating Badge */}
            <div className="absolute -bottom-10 -right-6 md:-right-12 z-20 animate-fade-in-up delay-300">
              <div className="bg-[#020617]/90 backdrop-blur-3xl border border-orange-500/30 p-8 rounded-[2rem] shadow-3xl group-hover:border-orange-500 transition-all duration-500">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-display font-black bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent leading-none mb-2 text-center">100+</span>
                  <span className="text-[10px] text-white/70 font-bold uppercase tracking-[0.3em] text-center">
                    Positions <br /> Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Geometric Accents */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-t-2 border-l-2 border-orange-500/30 rounded-tl-[3rem] -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
          </div>

          {/* Right Side: Narrative Content (7/12) */}
          <div className="lg:col-span-7 space-y-10 animate-fade-in-up delay-200">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-px w-10 bg-orange-500"></div>
                <span className="text-orange-400 text-[11px] font-bold uppercase tracking-[0.5em]">Executive Excellence</span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-display font-bold text-white leading-[1.2] tracking-tight">
                Building High-Performing <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic block sm:inline">Teams for Growing Businesses</span>
              </h2>
            </div>

            <p className="text-gray-300 text-base md:text-xl font-light leading-relaxed max-w-2xl opacity-90">
              <span className="text-white font-semibold">Hirealize Consultants</span> helps businesses hire skilled professionals across corporate roles, engineering & manufacturing, sales and BFSI. We focus on quality hiring, faster closures, and long-term fit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4 md:pt-6">
              {[
                { t: 'Industry-Specific Hiring', d: '(Corporate Roles, IT, BFSI, Sales & Engineering)', i: <Award className="text-orange-400" size={20} /> },
                { t: 'Strong Candidate Pipeline', d: '(Pre-screened candidates ready for quick deployment)', i: <Target className="text-orange-400" size={20} /> },
                { t: 'Strategic Screening', d: '(Technical and behavioural evaluation for the right fit)', i: <Zap className="text-orange-400" size={20} /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-5 group/item cursor-default">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-500/5 border border-orange-500/10 flex items-center justify-center group-hover/item:bg-orange-500/10 group-hover/item:border-orange-500/30 transition-all duration-500">
                    <div className="transition-transform duration-500 group-hover/item:scale-110">
                      {item.i}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base mb-1 transition-colors group-hover/item:text-orange-400 leading-tight">{item.t}</h4>
                    <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed font-light">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10">
              <Link
                to="/about"
                className="group relative inline-flex items-center px-10 py-5 bg-transparent border-2 border-orange-600 text-white font-black uppercase tracking-[0.3em] overflow-hidden rounded-xl transition-all hover:bg-orange-600 active:scale-95 text-xs shadow-2xl shadow-orange-600/10"
              >
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 mr-4">Learn More About Us</span>
                <ArrowUpRight className="relative z-10 text-orange-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
