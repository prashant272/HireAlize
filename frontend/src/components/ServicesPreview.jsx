import React from 'react';
import { Briefcase, UserCheck, Users, ShieldCheck, FileText, GraduationCap, MapPin, ArrowUpRight, Zap, Target, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const employerServices = [
    { title: 'Talent Acquisition', desc: 'End-to-end recruitment support from requirement understanding to final placement.', icon: <Users size={22} />, tag: 'Recruitment' },
    { title: 'Executive Search', desc: 'Hiring for leadership and critical roles to drive business growth.', icon: <Target size={22} />, tag: 'Elite' },
    { title: 'Contract Staffing', desc: 'Flexible staffing solutions for short-term and project-based requirements.', icon: <Briefcase size={22} />, tag: 'Staffing' },
    { title: 'Bulk Hiring', desc: 'Efficient hiring solutions for large-scale workforce needs with quick turnaround.', icon: <Zap size={22} />, tag: 'Volume' },
  ];

  const candidateServices = [
    { title: 'Resume Building', desc: 'Professional resume support to highlight your skills and experience effectively.', icon: <FileText size={22} />, tag: 'Profile' },
    { title: 'Interview Preparation', desc: 'Guidance and tips to help you confidently crack interviews.', icon: <GraduationCap size={22} />, tag: 'Preparation' },
    { title: 'Career Guidance', desc: 'Helping you choose the right opportunities based on your skills and goals.', icon: <Award size={22} />, tag: 'Growth' },
    { title: 'Profile Shortlisting', desc: 'Get matched with suitable job roles based on your experience and preferences.', icon: <MapPin size={22} />, tag: 'Opportunities' },
  ];

  const ServiceCard = ({ service }) => (
    <div className="group relative h-full">
      <div className="h-full bg-white/[0.04] backdrop-blur-3xl border border-orange-500/30 rounded-[2.5rem] p-9 transition-all duration-700 hover:border-orange-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.2)] flex flex-col justify-between overflow-hidden">
        {/* Animated Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] via-transparent to-orange-500/5 opacity-100"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-10">
            <div className="w-16 h-16 rounded-[1.25rem] bg-orange-500 border border-orange-500 text-white flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(249,115,22,0.3)] group-hover:shadow-orange-500/50 group-hover:scale-110">
              {React.cloneElement(service.icon, { size: 28 })}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] px-4 py-2 rounded-xl border border-orange-400/30 text-orange-400 bg-orange-500/5 transition-all">
              {service.tag}
            </span>
          </div>
          <h4 className="text-2xl font-display font-bold text-white mb-5 group-hover:text-orange-400 transition-colors tracking-tight uppercase tracking-widest">{service.title}</h4>
          <p className="text-white text-[13px] leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500">{service.desc}</p>
        </div>
        
        <div className="relative z-10 pt-10 mt-auto flex items-center justify-between">
          <div className="h-0.5 w-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] transition-all duration-700"></div>
          <div className="bg-orange-500/10 p-2 rounded-full ml-4">
            <ArrowUpRight size={18} className="text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-10 md:py-10 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-32 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-8 bg-orange-500/40"></div>
            <span className="text-orange-400 text-[11px] font-bold uppercase tracking-[0.5em]">Our Services</span>
            <div className="h-px w-8 bg-orange-500/40"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight tracking-tight max-w-4xl mx-auto">
            End-to-End Recruitment Solutions Tailored to <br />
            <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic inline-block pb-1 pr-2">Your Business Needs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-10"></div>
        </div>

        {/* Employer Group */}
        <div className="space-y-8 md:space-y-12 mb-10 md:mb-16">
          <div className="flex items-center space-x-8 animate-fade-in-up">
            <div className="bg-orange-500/10 border border-orange-500/20 px-8 py-3 rounded-2xl backdrop-blur-xl shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <h3 className="text-orange-400 text-xs font-black uppercase tracking-[0.4em]">Corporate Talent Search</h3>
            </div>
            <div className="h-px flex-grow bg-gradient-to-r from-orange-500/20 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-fade-in-up">
            {employerServices.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>

        {/* Candidate Group */}
        <div className="space-y-12">
          <div className="flex items-center space-x-8 animate-fade-in-up">
            <div className="bg-orange-500/10 border border-orange-500/20 px-8 py-3 rounded-2xl backdrop-blur-xl shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <h3 className="text-orange-400 text-xs font-black uppercase tracking-[0.4em]">For Candidates (Your Career, Our Support)</h3>
            </div>
            <div className="h-px flex-grow bg-gradient-to-r from-orange-500/20 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
            {candidateServices.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Link to="/services" className="group relative inline-flex items-center px-6 py-4 bg-orange-600 border border-orange-500 rounded-2xl overflow-hidden hover:scale-105 active:scale-95 transition-all duration-500 shadow-6xl shadow-orange-600/30">
            <span className="relative z-10 text-white font-black text-[15px] tracking-[0.2em] uppercase mr-6 transition-all group-hover:mr-8">Explore Full Portfolio</span>
            <ArrowUpRight className="relative z-10 text-white group-hover:scale-125 transition-all" size={20} />
            <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
