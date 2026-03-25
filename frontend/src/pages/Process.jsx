import React from 'react';
import { Search, UserCheck, CheckCircle, ClipboardCheck, Zap, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      id: '01',
      title: 'Understanding Requirements',
      description: 'We dive deep into your company culture, technical stack, and long-term goals to define the perfect persona.',
      icon: <Search size={40} className="text-blue-400" />,
    },
    {
      id: '02',
      title: 'Talent Sourcing & Screening',
      description: 'Our experts leverage our strong talent network and advanced screening tools to find and vet the top 1% of talent.',
      icon: <UserCheck size={40} className="text-blue-400" />,
    },
    {
      id: '03',
      title: 'Shortlisting & Coordination',
      description: 'We manage interest, coordinate interviews, and facilitate seamless communication between client and candidate.',
      icon: <ClipboardCheck size={40} className="text-blue-400" />,
    },
    {
      id: '04',
      title: 'Offer Closure',
      description: 'We provide strategic support during negotiations to ensure a successful and seamless onboarding process.',
      icon: <CheckCircle size={40} className="text-blue-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] font-inter">
      <section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-[#020617] relative overflow-hidden">
        {/* Background Tech Pulse */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[140px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] animate-pulse-slow delay-1000"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-24 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/5 border border-orange-500/20 backdrop-blur-xl mb-4 md:mb-6">
              <Zap className="text-orange-400 animate-pulse" size={14} />
              <span className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.4em]">Operational Matrix</span>
            </div>
            <h1 className="text-3xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 md:mb-8 tracking-tighter leading-none">
              Our <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic">Process</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-xl font-light max-w-2xl mx-auto tracking-wide uppercase italic opacity-80">
              A meticulously engineered methodology for high-stakes talent acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative animate-fade-in-up delay-100">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent -z-0"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 group bg-white/[0.02] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 text-left hover:border-orange-500/30 hover:bg-white/[0.05] md:hover:-translate-y-4 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="absolute top-6 right-6 bg-orange-500/10 text-orange-400 font-display font-black text-xl w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-orange-600/30 group-hover:-rotate-12 transition-all duration-500">
                  {step.id}
                </div>

                <div className="w-16 h-16 bg-orange-500/5 rounded-2xl border border-orange-500/10 flex items-center justify-center mb-8 group-hover:border-orange-500/30 transition-all duration-500">
                  {step.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 tracking-tight group-hover:text-orange-400 transition-colors uppercase pr-8">{step.title}</h3>
                <p className="text-white/50 leading-relaxed font-light text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Premium Call to Action */}
          <div className="mt-20 md:mt-32 p-10 md:p-12 lg:p-20 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 text-center relative overflow-hidden group hover:border-orange-500/30 transition-all duration-1000 animate-fade-in-up delay-200">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px] -mr-64 -mt-64 group-hover:bg-orange-600/10 transition-all duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>

            <h2 className="text-2xl md:text-5xl font-display font-bold text-white mb-6 md:mb-8 relative z-10 tracking-tight">Ready to build your <span className="text-orange-400 italic">high-performing</span> team?</h2>

            <button className="group/btn relative px-10 py-5 bg-orange-600 text-white font-black uppercase tracking-[0.4em] overflow-hidden rounded-2xl transition-all hover:scale-[1.02] active:scale-95 text-[11px] shadow-2xl shadow-orange-600/20 mx-auto block z-10">
              <span className="relative z-10 flex items-center justify-center gap-4">
                Initiate Consultation
                <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
