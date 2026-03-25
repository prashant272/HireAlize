import React from 'react';
import { Target, Eye, Rocket, CheckCircle2, Award, Users, Search, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', color: 'from-orange-600 to-orange-400' },
    { label: 'Successful Hires', value: '100+', color: 'from-blue-600 to-blue-400' },
    { label: 'Partner Companies', value: '50+', color: 'from-purple-600 to-purple-400' },
    { label: 'Candidate Pool', value: '2K+', color: 'from-emerald-600 to-emerald-400' },
  ];

  const features = [
    { 
      t: 'Fast Turnaround', 
      d: 'Candidate pipelines synced in real-time for rapid placement.',
      icon: <Rocket size={20} />
    },
    { 
      t: 'Intelligence Network', 
      d: 'Access to 5000+ pre-vetted professionals across global markets.',
      icon: <Search size={20} />
    },
    { 
      t: 'Multi-Stage Vetting', 
      d: 'Rigorous technical and cultural screening for every candidate.',
      icon: <CheckCircle2 size={20} />
    },
    { 
      t: 'Dedicated Advisory', 
      d: 'Experienced strategy partners for your entire hiring journey.',
      icon: <Users size={20} />
    },
  ];

  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-[#020617] relative overflow-hidden min-h-screen font-inter">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Elite Header */}
        <div className="text-center mb-16 md:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/5 border border-orange-500/20 backdrop-blur-xl mb-6">
            <Award className="text-orange-400" size={14} />
            <span className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.4em]">Establish Excellence</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
            Know About <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic">Us</span>
          </h1>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20 md:mb-32">
          <div className="lg:col-span-6 space-y-10 animate-fade-in-up delay-100">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-[1.1] tracking-tight">
                Specializing in global talent acquisition, staffing solutions, and <span className="text-orange-400 italic">executive search.</span>
              </h2>
              <p className="text-white/70 leading-relaxed font-normal text-base md:text-lg max-w-xl">
                We partner with modern organizations to understand their hiring needs and deliver high-quality candidates who align with both technical requirements and company culture.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="relative p-6 bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-[0.03] rounded-full -mr-12 -mt-12 transition-all group-hover:opacity-[0.08]`}></div>
                  <p className="text-3xl font-display font-bold text-white mb-1 tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] text-orange-400 font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative animate-fade-in-up delay-200">
            <div className="aspect-[4/5] lg:aspect-square bg-[#020617] rounded-[3rem] border border-white/10 p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <img
                src="https://img.freepik.com/free-photo/close-up-people-working-office_329181-16075.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Our Synergy"
                className="w-full h-full object-cover rounded-[2.5rem] opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <p className="text-white text-sm font-medium italic">"Connecting world-class companies with top-tier talent through strategic precision."</p>
              </div>
            </div>
            {/* Orbital Orbs */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/10 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] -z-10 animate-pulse-slow delay-1000"></div>
          </div>
        </div>

        {/* Mission & Vision: High-Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="group p-10 bg-orange-500/5 border border-orange-500/20 rounded-[2.5rem] hover:border-orange-500/40 hover:bg-orange-500/[0.08] transition-all duration-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -mr-32 -mt-32 blur-[100px] transition-all group-hover:bg-orange-600/20"></div>
            <div className="w-14 h-14 bg-orange-500/10 rounded-2xl border border-orange-500/20 flex items-center justify-center text-orange-400 mb-8 group-hover:scale-110 transition-transform duration-500">
              <Target size={28} />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/60 text-base md:text-lg leading-relaxed font-light font-inter">
              To empower organizations by delivering high-quality talent through strategic recruitment solutions, ensuring absolute alignment between business goals and professional expertise.
            </p>
          </div>

          <div className="group p-10 bg-blue-500/5 border border-white/10 rounded-[2.5rem] hover:border-orange-500/30 hover:bg-white/[0.04] transition-all duration-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-[100px] transition-all group-hover:bg-orange-600/10"></div>
            <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-white/40 mb-8 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 group-hover:text-orange-400 group-hover:scale-110 transition-all duration-500">
              <Eye size={28} />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/60 text-base md:text-lg leading-relaxed font-light font-inter">
              To be recognized as a leading global recruitment firm, creating meaningful connections while driving sustainable growth and long-term success for both partners and candidates.
            </p>
          </div>
        </div>

        {/* Why Choose: Luxury Grid */}
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Why Choose <span className="text-orange-400 italic">Us?</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => (
              <div key={idx} className="p-8 border border-white/5 bg-white/[0.03] rounded-3xl hover:bg-white/[0.06] hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-orange-500 group-hover:h-full transition-all duration-700"></div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500">
                  {item.icon}
                </div>
                <p className="text-white font-bold text-lg mb-3 tracking-tight group-hover:text-orange-400 transition-colors uppercase">{item.t}</p>
                <p className="text-white/50 text-xs font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
