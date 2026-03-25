import React from 'react';
import { Search, UserCheck, CheckCircle, ArrowRight, ClipboardCheck, Clock } from 'lucide-react';

const ProcessPreview = () => {
  const steps = [
    {
      title: 'Understanding Requirements',
      desc: 'We dive deep into your company culture and the specific demands of the role to find the precise fit.',
      icon: <Search size={28} />,
      label: 'Strategy'
    },
    {
      title: 'Talent Sourcing & Screening',
      desc: 'Our experts conduct multi-level interviews and technical evaluations to identify the top 1% talent.',
      icon: <UserCheck size={28} />,
      label: 'Refinement'
    },
    {
      title: 'Shortlisting & Coordination',
      desc: 'We manage interest, coordinate interviews, and facilitate communication between client and candidate.',
      icon: <ClipboardCheck size={28} />,
      label: 'Alignment'
    },
    {
      title: 'Offer Closure',
      desc: 'We provide strategic support during negotiations to ensure a successful and seamless onboarding.',
      icon: <CheckCircle size={28} />,
      label: 'Success'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#020617] border-y border-white/5 relative overflow-hidden group/process">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] -z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] -z-0 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/5 border border-orange-500/20 backdrop-blur-xl mb-4 md:mb-8">
            <Clock className="text-orange-400" size={16} />
            <span className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.4em]">The Engine</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">How We <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic">Accelerate</span></h2>
          <p className="text-gray-400 text-sm md:text-lg font-light tracking-widest uppercase italic mt-4 md:mt-6">Proprietary Strategic Methodology</p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8 relative lg:px-10">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step Icon Container */}
              <div className="w-28 h-28 rounded-full bg-orange-500 border-4 border-white/10 flex items-center justify-center text-white mb-10 relative z-10 transition-all duration-700 shadow-[0_0_30px_rgba(249,115,22,0.3)] group-hover:shadow-orange-500/50 group-hover:scale-105">
                <div className="absolute -inset-4 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(step.icon, { size: 32 })}
                </div>

                {/* Index Badge */}
                <div className="absolute -top-1 -right-1 w-11 h-11 rounded-full bg-[#020617] border-4 border-orange-500 text-orange-400 text-xs font-black flex items-center justify-center shadow-lg">
                  0{index + 1}
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-5 px-4 relative z-10">
                <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em] opacity-80 group-hover:opacity-100 transition-opacity italic">{step.label}</p>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight uppercase tracking-widest group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-white text-[13px] leading-relaxed font-light opacity-70 group-hover:opacity-100 transition-opacity duration-500 max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>

              {/* Animated Arrow (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-[45px] text-orange-400/20 group-hover:text-orange-500/40 transition-colors">
                  <ArrowRight size={44} strokeWidth={1} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;
