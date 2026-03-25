import React from 'react';
import { Target, TrendingUp, Users, ShieldCheck, FileText, UserCircle, MapPin, Search, Award, Zap, Briefcase, ChevronRight } from 'lucide-react';

const Services = () => {
  const employerServices = [
    { t: 'Talent Acquisition', d: 'End-to-end recruitment solutions across global industries.', i: <Users size={20} /> },
    { t: 'Executive Search', d: 'Strategic leadership hiring for senior and C-suite roles.', i: <Target size={20} /> },
    { t: 'Contract Staffing', d: 'Flexible workforce solutions for specialized project needs.', i: <Search size={20} /> },
    { t: 'Payroll Management', d: 'Comprehensive payroll processing and compliance assurance.', i: <ShieldCheck size={20} /> },
    { t: 'Bulk Hiring', d: 'Efficient high-volume hiring for large-scale operations.', i: <TrendingUp size={20} /> },
    { t: 'Recruitment Consulting', d: 'Strategic workforce planning and hiring advisory.', i: <Briefcase size={20} /> },
  ];

  const candidateServices = [
    { t: 'Resume Mastery', d: 'Premium resume crafting to optimize career conversion.', i: <FileText size={20} /> },
    { t: 'Interview Coaching', d: 'Personalized mock sessions and strategic guidance.', i: <Zap size={20} /> },
    { t: 'Career Calibration', d: 'Long-term advisory to navigate your high-growth path.', i: <Target size={20} /> },
    { t: 'Relocation Support', d: 'Seamless logistics for your next global opportunity.', i: <MapPin size={20} /> },
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
          {/* Premium Header */}
          <div className="text-center mb-12 md:mb-24 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/5 border border-orange-500/20 backdrop-blur-xl mb-4 md:mb-6">
              <Award className="text-orange-400" size={14} />
              <span className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.4em]">Service Portfolio</span>
            </div>
            <h1 className="text-3xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 md:mb-8 tracking-tighter leading-none">
              Our <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic">Services</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-xl font-light max-w-2xl mx-auto tracking-wide">
              Bespoke recruitment strategies designed for the world's most innovative organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            {/* Employer Column: Engineering & Leadership */}
            <div className="space-y-8 md:space-y-12">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-600/30">
                  <Target size={28} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">For Employers</h2>
                </div>
              </div>

              <div className="space-y-6">
                {employerServices.map((s, idx) => (
                  <div key={idx} className="group p-8 bg-white/[0.02] border border-white/10 rounded-[2rem] hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/[0.03] rounded-full -mr-16 -mt-16 group-hover:bg-orange-600/[0.08] transition-all"></div>
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all">
                        {s.i}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors tracking-tight uppercase flex items-center gap-2">
                          {s.t}
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 translate-x--2 group-hover:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed font-light">{s.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Employee Column: Career Catalyst */}
            <div className="space-y-8 md:space-y-12">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-orange-400">
                  <UserCircle size={28} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">For Candidates</h2>
                </div>
              </div>

              <div className="space-y-6">
                {candidateServices.map((s, idx) => (
                  <div key={idx} className="group p-8 bg-white/[0.02] border border-white/10 rounded-[2rem] hover:border-orange-500/20 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/[0.03] rounded-full -mr-16 -mt-16 group-hover:bg-orange-600/[0.05] transition-all"></div>
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/40 group-hover:scale-110 group-hover:bg-orange-500/10 group-hover:text-orange-400 transition-all font-bold">
                        {s.i}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors tracking-tight uppercase flex items-center gap-2">
                          {s.t}
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 translate-x--2 group-hover:translate-x-0 transition-all" />
                        </h3>
                        <p className="text-sm text-white/50 leading-relaxed font-light">{s.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium Quote Card */}
              <div className="p-10 bg-gradient-to-br from-orange-600/10 to-transparent border border-orange-500/20 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/10 rounded-full blur-[60px] -mr-24 -mt-24 group-hover:scale-125 transition-transform duration-1000"></div>
                <p className="text-white text-lg font-display font-medium italic mb-6 leading-relaxed relative z-10">
                  "Our ecosystem is designed for candidates who aren't just looking for jobs, but for their next strategic leap."
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="h-px w-12 bg-orange-500/40"></div>
                  <span className="text-orange-400 text-xs font-black uppercase tracking-widest">Growth Visionaries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
