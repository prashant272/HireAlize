import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-10 md:py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Sync from Footer */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      {/* Decorative Orbs - High Blur Luxury */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-[100px] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] px-6 py-10 md:p-12 lg:p-24 text-center relative overflow-hidden group shadow-[0_32px_120px_-20px_rgba(0,0,0,0.8)]">

          <div className="max-w-3xl mx-auto space-y-8 lg:space-y-10">
            <div className="animate-fade-in-up">
              <p className="text-orange-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] mb-4 md:mb-8 bg-orange-400/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full inline-block border border-orange-400/20">Scale Your Future</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight">
                Ready to Accelerate <br />
                <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic">Your Growth?</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg lg:text-xl font-light leading-relaxed mt-4 md:mt-8 opacity-90 max-w-2xl mx-auto tracking-wide">
                Join forces with India's premier recruitment partner and unlock the next phase of your success story today.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 animate-fade-in-up delay-300">
              <Link to="/contact" className="group relative px-10 py-5 bg-orange-600 text-white font-black uppercase tracking-[0.3em] overflow-hidden rounded-xl transition-all hover:scale-105 active:scale-95 text-xs shadow-2xl shadow-orange-600/20">
                <span className="relative z-10 flex items-center gap-3">
                  <Zap size={20} fill="currentColor" />
                  Hire Talent
                </span>
                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>

              <Link to="/jobs" className="group relative px-10 py-5 bg-transparent border-2 border-orange-600 text-orange-500 font-black uppercase tracking-[0.3em] overflow-hidden rounded-xl transition-all hover:bg-orange-600 hover:text-white active:scale-95 text-xs">
                <span className="relative z-10 flex items-center gap-3">
                  <Target size={20} />
                  Explore Jobs
                </span>
              </Link>
            </div>

            <div className="pt-10 border-t border-white/5 animate-fade-in-up delay-500">
              <p className="text-white/90 text-[11px] uppercase font-bold tracking-[0.4em]">Proven Recruitment Partner Across PAN India</p>
            </div>
          </div>

          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full -mr-80 -mt-80 blur-[140px] pointer-events-none group-hover:bg-blue-600/10 transition-colors duration-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
