import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Users, ShieldCheck, FileText, UserCircle, MapPin, Search, Award, Zap, Briefcase, ChevronRight, X, Send } from 'lucide-react';
import api from '../api/axios';
import SEO from '../components/SEO';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroForm, setHeroForm] = useState({ name: '', phone: '', email: '', requirement: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApply = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    try {
        await api.post('/contacts', {
            name: heroForm.name,
            email: heroForm.email,
            phone: heroForm.phone,
            message: heroForm.requirement || 'General employer inquiry from Services Page',
            source: 'Services Form (Hire Talent CTA)'
        });
        setStatus('Inquiry received! Our team will contact you securely.');
        window.alert('Inquiry received! Our team will contact you securely.');
        
        setHeroForm({ name: '', phone: '', email: '', requirement: '' });
        setTimeout(() => { setStatus(''); setIsModalOpen(false); }, 2000);
    } catch (error) {
        console.error('Error submitting form:', error);
        setStatus('Transmission error. Please try again.');
        window.alert('Transmission error. Please try again.');
        setTimeout(() => setStatus(''), 5000);
    } finally {
        setIsSubmitting(false);
    }
  };
  const employerServices = [
    { t: 'Talent Acquisition', d: 'End-to-end recruitment support from requirement understanding to final placement.', i: <Users size={20} /> },
    { t: 'Executive Search', d: 'Hiring for senior and leadership roles across key business functions.', i: <Target size={20} /> },
    { t: 'Contract Staffing', d: 'Flexible staffing solutions for short-term and project-based needs.', i: <Briefcase size={20} /> },
    { t: 'Bulk Hiring', d: 'Efficient hiring for large workforce requirements with quick turnaround.', i: <TrendingUp size={20} /> },
    { t: 'Recruitment Consulting', d: 'Support with workforce planning and hiring strategies.', i: <Search size={20} /> },
  ];

  const candidateServices = [
    { t: 'Resume Building', d: 'Professional resume support to highlight your skills effectively.', i: <FileText size={20} /> },
    { t: 'Interview Preparation', d: 'Guidance to help you perform confidently in interviews.', i: <Zap size={20} /> },
    { t: 'Career Guidance', d: 'Helping you choose the right opportunities based on your profile.', i: <Target size={20} /> },
    { t: 'Job Opportunities', d: 'Access to relevant job openings across multiple industries.', i: <Search size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#020617] font-inter">
      <SEO 
        title="Our HR Services | Executive Search, Staffing & Recruitment"
        description="Comprehensive HR solutions for businesses and candidates. We specialize in talent acquisition, executive search, contract staffing, and career growth services."
        keywords="HR services, recruitment solutions, staffing agency, executive hiring, resume building, career coaching"
        canonical="https://www.hirealize.in/services"
      />
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-8 tracking-tighter leading-none">
              Our <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic inline-block pb-1 pr-2">Services</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-xl font-light max-w-2xl mx-auto tracking-wide">
              End-to-end recruitment solutions designed to help businesses hire efficiently and candidates grow their careers.
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

          {/* Closing Statement & CTA */}
          <div className="mt-20 md:mt-32 max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              Looking to hire or find your next <span className="text-orange-400 italic">opportunity?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              We focus on connecting the right talent with the right opportunities while ensuring a smooth and efficient hiring experience for both clients and candidates.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }} 
                className="group relative px-8 py-4 bg-orange-600/10 text-orange-400 font-bold uppercase tracking-[0.2em] overflow-hidden rounded-xl transition-all hover:bg-orange-600 hover:text-white border border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] text-sm shadow-xl flex items-center gap-3"
              >
                <Target size={18} />
                <span>Hire Talent</span>
              </button>
              
              <Link 
                to="/jobs" 
                className="group relative px-8 py-4 bg-white/5 text-white font-bold uppercase tracking-[0.2em] overflow-hidden rounded-xl transition-all hover:bg-white/10 hover:text-orange-400 border border-white/10 hover:shadow-xl text-sm flex items-center gap-3"
              >
                <Search size={18} />
                <span>Find Jobs</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Hire Talent Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 opacity-100">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-[#020617] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-20">
              <X size={20} />
            </button>
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display text-white mb-2 leading-none">Start <span className="text-orange-400 italic">Hiring</span></h3>
                <p className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Strategic Talent Acquisition</p>
              </div>
              <form onSubmit={handleApply} className="space-y-4">
                  {status && (
                    <div className={`p-3 rounded-xl border text-[11px] font-bold text-center ${status.includes('error') ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-green-500/10 border-green-500/20 text-green-400'}`}>
                      {status}
                    </div>
                  )}
                  <input
                    type="text"
                    required
                    value={heroForm.name}
                    onChange={e => setHeroForm({...heroForm, name: e.target.value})}
                    placeholder="Company / Personal Name"
                    className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-[11px] font-medium tracking-wide"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="tel" required value={heroForm.phone} onChange={e => setHeroForm({...heroForm, phone: e.target.value})} placeholder="Phone" className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 outline-none text-[11px] font-medium placeholder:text-white/20" />
                    <input type="email" required value={heroForm.email} onChange={e => setHeroForm({...heroForm, email: e.target.value})} placeholder="Email" className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 outline-none text-[11px] font-medium placeholder:text-white/20" />
                  </div>
                  <textarea
                      rows="3"
                      required
                      value={heroForm.requirement}
                      onChange={e => setHeroForm({...heroForm, requirement: e.target.value})}
                      placeholder="Briefly describe your hiring requirements..."
                      className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 outline-none text-[11px] font-medium resize-none placeholder:text-white/20"
                  ></textarea>

                  <button type="submit" disabled={isSubmitting} className="group relative w-full py-4 bg-orange-600 text-white font-black uppercase tracking-[0.3em] overflow-hidden rounded-xl transition-all hover:scale-[1.02] active:scale-95 text-[10px] shadow-2xl shadow-orange-600/20 disabled:opacity-50 mt-2">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? 'Transmitting...' : 'Submit Request'}
                      <Send size={14} />
                    </span>
                    <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
