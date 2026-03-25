import React from 'react';
import { ShieldCheck, Users, Zap, Briefcase, UserCheck, Headset } from 'lucide-react';

const WhyChoose = () => {
  const points = [
    {
      title: 'Fast Hiring Turnaround',
      desc: 'We understand urgency and deliver relevant profiles quickly to reduce your hiring time.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Strong Candidate Pipeline',
      desc: 'Access to a wide pool of pre-screened candidates across multiple industries.',
      icon: <Users size={24} />,
    },
    {
      title: 'Industry-Focused Hiring',
      desc: 'Specialized hiring for corporate roles, engineering & manufacturing, sales, and BFSI.',
      icon: <Briefcase size={24} />,
    },
    {
      title: 'Dedicated Hiring Support',
      desc: 'Personalized support throughout the hiring process for smooth coordination.',
      icon: <Headset size={24} />,
    },
    {
      title: 'Quality Candidate Screening',
      desc: 'Basic technical and profile-level screening to ensure relevant candidate matches.',
      icon: <UserCheck size={24} />,
    },
    {
      title: 'End-to-End Hiring Assistance',
      desc: 'From requirement understanding to final closure, we support you at every step.',
      icon: <ShieldCheck size={24} />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#020617] relative overflow-hidden">
      {/* Premium Background Effects: Unified Orange/White */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[150px] -z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] -z-0 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/5 border border-orange-500/20 backdrop-blur-xl mb-4 md:mb-8">
            <ShieldCheck className="text-orange-400" size={16} />
            <span className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.4em]">Why Select Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 md:mb-6 tracking-tight">Why Companies Choose <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic">Hirealize</span></h2>
          <p className="text-gray-400 text-sm md:text-lg font-light tracking-widest uppercase italic max-w-2xl mx-auto">Elite Recruitment Ecosystem. Strategic Efficiency. Quality Results.</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full bg-white/[0.04] backdrop-blur-3xl border border-orange-500/30 rounded-[2.5rem] p-10 transition-all duration-700 hover:border-orange-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.2)] overflow-hidden">
                {/* Glow Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] via-transparent to-orange-500/5 opacity-100"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-orange-500 border border-orange-500 text-white flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(249,115,22,0.3)] group-hover:shadow-orange-500/50 group-hover:scale-110 mb-8">
                    {React.cloneElement(point.icon, { size: 28 })}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-5 transition-colors tracking-tight uppercase tracking-widest group-hover:text-orange-400">
                    {point.title}
                  </h3>
                  <p className="text-white text-[13px] leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {point.desc}
                  </p>
                </div>

                {/* Big Number Accent */}
                <div className="absolute bottom-6 right-10 text-orange-500/5 font-display font-black text-7xl italic group-hover:text-orange-500/20 transition-all duration-700 group-hover:-translate-y-2 select-none">
                  0{index + 1}
                </div>
                
                {/* Bottom Bar Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
