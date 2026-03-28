import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, UserCheck, CheckCircle, ClipboardCheck, Zap, ArrowRight, X, Send } from 'lucide-react';
import api from '../api/axios';

const Process = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroForm, setHeroForm] = useState({ name: '', phone: '', email: '', requirement: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpenHireModal = () => {
      setIsModalOpen(true);
    };
    window.addEventListener('openHireModal', handleOpenHireModal);
    return () => window.removeEventListener('openHireModal', handleOpenHireModal);
  }, []);

  const handleApply = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    try {
      await api.post('/contacts', {
        name: heroForm.name,
        email: heroForm.email,
        phone: heroForm.phone,
        message: heroForm.requirement || 'General employer inquiry from Process Page',
        source: 'Process Form (Initiate Consultation)'
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

  const steps = [
    {
      id: '01',
      title: 'Understanding Requirements',
      description: 'We understand your company, job role, and hiring expectations to ensure the right fit.',
      icon: <Search size={40} className="text-blue-400" />,
    },
    {
      id: '02',
      title: 'Talent Sourcing & Screening',
      description: 'We source relevant candidates and conduct initial screening to shortlist suitable profiles.',
      icon: <UserCheck size={40} className="text-blue-400" />,
    },
    {
      id: '03',
      title: 'Shortlisting & Coordination',
      description: 'We share the best-matched candidates and coordinate interviews smoothly between both sides.',
      icon: <ClipboardCheck size={40} className="text-blue-400" />,
    },
    {
      id: '04',
      title: 'Offer & Closure',
      description: 'We assist with final selection, offer discussions, and ensure successful closure.',
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
              <span className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.4em]">Our Process</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-8 tracking-tighter leading-none">
              Our <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic inline-block pb-1 pr-2">Hiring Process</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-xl font-light max-w-2xl mx-auto tracking-wide uppercase italic opacity-80">
              A simple and effective approach to finding the right talent.
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

            <h2 className="text-2xl md:text-5xl font-display font-bold text-white mb-6 md:mb-8 relative z-10 tracking-tight">Ready to hire the right talent or <span className="text-orange-400 italic">find your next opportunity?</span></h2>

            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group/btn relative px-10 py-5 bg-orange-600 text-white font-black uppercase tracking-[0.4em] overflow-hidden rounded-2xl transition-all hover:scale-[1.02] active:scale-95 text-[11px] shadow-2xl shadow-orange-600/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  Initiate Consultation
                  <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
              </button>

              <Link
                to="/jobs"
                className="group relative px-10 py-5 bg-white/5 text-white font-black uppercase tracking-[0.4em] overflow-hidden rounded-2xl transition-all hover:bg-white/10 hover:text-orange-400 border border-white/10 hover:shadow-xl text-[11px] flex items-center gap-4"
              >
                <Search size={16} />
                <span>Find Jobs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hire Talent Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
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
                  onChange={e => setHeroForm({ ...heroForm, name: e.target.value })}
                  placeholder="Company / Personal Name"
                  className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-[11px] font-medium tracking-wide"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" required value={heroForm.phone} onChange={e => setHeroForm({ ...heroForm, phone: e.target.value })} placeholder="Phone" className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 outline-none text-[11px] font-medium placeholder:text-white/20" />
                  <input type="email" required value={heroForm.email} onChange={e => setHeroForm({ ...heroForm, email: e.target.value })} placeholder="Email" className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 outline-none text-[11px] font-medium placeholder:text-white/20" />
                </div>
                <textarea
                  rows="3"
                  required
                  value={heroForm.requirement}
                  onChange={e => setHeroForm({ ...heroForm, requirement: e.target.value })}
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

export default Process;
