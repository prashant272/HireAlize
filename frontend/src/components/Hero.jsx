import React, { useState, useEffect } from 'react';
import { ArrowRight, Send, Star, ShieldCheck, Users, Zap, Upload, CheckCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userType, setUserType] = useState('employer');
  const navigate = useNavigate();

  // Form State
  const [heroForm, setHeroForm] = useState({ name: '', phone: '', email: '', requirement: '', qualification: '', experience: '' });
  const [resumeFile, setResumeFile] = useState(null);
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleHireClick = () => {
    window.dispatchEvent(new CustomEvent('openHireModal'));
  };


  const handleApply = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    try {
      if (userType === 'employer') {
        await api.post('/contacts', {
          name: heroForm.name,
          email: heroForm.email,
          phone: heroForm.phone,
          message: heroForm.requirement || 'General employer inquiry from Hero Section',
          source: 'Hero Form (Quick Contact)'
        });
        setStatus('Inquiry received! Our team will contact you securely.');
        window.alert('Inquiry received! Our team will contact you securely.');
      } else {
        const formData = new FormData();
        formData.append('fullName', heroForm.name);
        formData.append('email', heroForm.email);
        formData.append('phone', heroForm.phone);
        formData.append('qualification', heroForm.qualification);
        formData.append('experience', heroForm.experience);
        if (resumeFile) formData.append('resume', resumeFile);

        await api.post('/applications', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        setStatus('Application submitted successfully to our network.');
        window.alert('Application submitted successfully to our network.');
      }

      setHeroForm({ name: '', phone: '', email: '', requirement: '', qualification: '', experience: '' });
      setResumeFile(null);
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Transmission error. Please try again.');
      window.alert('Transmission error. Please try again.');
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const slides = [
    {
      image: '/hero1.jpg',
      mobileImage: '/hero1_mobile.jpg',
    },
    {
      image: '/hero2.avif',
     mobileImage: '/hero2_mobile.jpg',
    },
    {
      image: '/hero3.webp',
     mobileImage: '/hero3_mobile.jpg',
    },
    {
      image: '/hero4.webp',
      mobileImage: '/hero4_mobile.jpg',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);


  return (
    <section className="relative min-h-screen md:min-h-[100dvh] w-full flex items-center overflow-hidden bg-[#020617] selection:bg-orange-500 selection:text-white leading-tight">

      {/* Background Layer (Elite Transition) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <picture className="w-full h-full">
              <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
              <img
                src={slide.image}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => { if (slide.fallback) e.target.src = slide.fallback; }}
              />
            </picture>
            {/* Dynamic Overlays: High-Contrast Overlay for Sharpness */}
            <div className="absolute inset-0 bg-[#020617]/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
          </div>
        ))}
        {/* Decorative Orbs: Optimized for Professional Feel */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/[0.03] rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 sm:pt-15 md:pt-15 lg:pt-15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Column: Premium Content (7/12) */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[300px] md:min-h-[550px] relative">
            <div className="flex flex-col justify-center space-y-4 sm:space-y-8 lg:space-y-10 animate-fade-in-up">
              {/* Tech Badge */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-display text-white mb-2 md:mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
                Hire the Right Talent <br />
                <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic font-display inline-block pb-1 pr-2">Faster & Smarter</span>
              </h1>

              <p className="text-gray-300 text-[11px] md:text-base lg:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0 tracking-wide uppercase italic opacity-85">
                Helping companies hire skilled professionals efficiently and reliably.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-6 pt-2 md:pt-6">
                <button onClick={handleHireClick} className="group relative px-5 py-3 md:px-8 md:py-4 bg-orange-600 text-white font-black uppercase tracking-[0.3em] overflow-hidden rounded-xl transition-all hover:scale-105 active:scale-95 text-[9px] md:text-[11px] shadow-2xl shadow-orange-600/20">
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap size={15} fill="currentColor" className="md:w-5 md:h-5" />
                    Hire Talent Now
                  </span>
                  <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>

                <button onClick={() => navigate('/jobs')} className="group relative px-5 py-3 md:px-8 md:py-4 bg-white/[0.03] border-2 border-white/10 text-white font-black uppercase tracking-[0.3em] overflow-hidden rounded-xl transition-all hover:bg-white hover:text-[#020617] active:scale-95 text-[9px] md:text-[11px] backdrop-blur-1xl shadow-2xl shadow-black/50">
                  <span className="relative z-10 flex items-center gap-3">
                    <ArrowRight size={15} className="md:w-5 md:h-5" />
                    Find Your Next Job
                  </span>
                </button>
              </div>

              {/* Tech Social Proof */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 pt-6">
                <div className="flex items-center space-x-3 group/item cursor-default">
                  <ShieldCheck className="text-orange-400 transition-transform group-hover/item:scale-110" size={18} />
                  <span className="text-white/60 text-[9px] font-bold uppercase tracking-wider group-hover/item:text-white transition-colors">100+ Positions Closed</span>
                </div>
                <div className="flex items-center space-x-3 group/item cursor-default">
                  <Users className="text-orange-400 transition-transform group-hover/item:scale-110" size={18} />
                  <span className="text-white/60 text-[9px] font-bold uppercase tracking-wider group-hover/item:text-white transition-colors">Specialized in Corporate Hiring</span>
                </div>
                <div className="flex items-center space-x-3 group/item cursor-default">
                  <Star className="text-orange-400 transition-transform group-hover/item:scale-110" size={18} />
                  <span className="text-white/60 text-[9px] font-bold uppercase tracking-wider group-hover/item:text-white transition-colors">Trusted by Growing Companies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form (5/12) */}
          <div id="hero-quick-form" className="lg:col-span-5 animate-fade-in-up delay-700 relative group lg:justify-self-end w-full max-w-[400px]">
            <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 lg:p-10 backdrop-blur-[1px] shadow-3xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-1000">

              <div className="relative z-10 space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-display text-white mb-2 leading-none">Start Hiring <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic inline-block pb-1 pr-2">Today</span></h3>
                  <p className="text-orange-400 text-[10px] uppercase tracking-[0.4em] font-black opacity-70">Strategic Talent Acquisition</p>
                </div>

                <form onSubmit={handleApply} className="space-y-4">
                  {status && (
                    <div className={`p-3 rounded-xl border text-[11px] font-bold text-center ${status.includes('error') ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-green-500/10 border-green-500/20 text-green-400'}`}>
                      {status}
                    </div>
                  )}
                  <input
                    id="hero-name-input"
                    type="text"
                    required
                    value={heroForm.name}
                    onChange={e => setHeroForm({ ...heroForm, name: e.target.value })}
                    placeholder="Company / Personal Name"
                    className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 focus:bg-white/10 outline-none transition-all placeholder:text-white/50 text-[11px] font-medium tracking-wide"
                  />

                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer group/radio">
                      <input
                        type="radio"
                        name="hero-type-premium"
                        className="sr-only peer"
                        checked={userType === 'employer'}
                        onChange={() => { setUserType('employer'); setStatus(''); }}
                      />
                      <div className="text-center py-3 rounded-xl border border-white/10 peer-checked:border-orange-500 peer-checked:bg-orange-500/10 text-[10px] text-white/90 peer-checked:text-white transition-all font-black tracking-[0.2em] uppercase hover:bg-white/5">Employer</div>
                    </label>
                    <label className="flex-1 cursor-pointer group/radio">
                      <input
                        type="radio"
                        name="hero-type-premium"
                        className="sr-only peer"
                        checked={userType === 'candidate'}
                        onChange={() => { setUserType('candidate'); setStatus(''); }}
                      />
                      <div className="text-center py-3 rounded-xl border border-white/10 peer-checked:border-orange-500 peer-checked:bg-orange-500/10 text-[10px] text-white/90 peer-checked:text-white transition-all font-black tracking-[0.2em] uppercase hover:bg-white/5">Candidate</div>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="tel" required value={heroForm.phone} onChange={e => setHeroForm({ ...heroForm, phone: e.target.value })} placeholder="Phone" className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 outline-none text-[11px] font-medium placeholder:text-white/50" />
                    <input type="email" required value={heroForm.email} onChange={e => setHeroForm({ ...heroForm, email: e.target.value })} placeholder="Email" className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 outline-none text-[11px] font-medium placeholder:text-white/50" />
                  </div>

                  {userType === 'employer' ? (
                    <textarea
                      rows="3"
                      required
                      value={heroForm.requirement}
                      onChange={e => setHeroForm({ ...heroForm, requirement: e.target.value })}
                      placeholder="Briefly describe your hiring requirements..."
                      className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 outline-none text-[11px] font-medium resize-none placeholder:text-white/50"
                    ></textarea>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" required value={heroForm.qualification} onChange={e => setHeroForm({ ...heroForm, qualification: e.target.value })} placeholder="Highest Qualification (e.g. B.Tech, MBA)" className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 outline-none text-[11px] font-medium placeholder:text-white/50" />
                        <input type="text" required value={heroForm.experience} onChange={e => setHeroForm({ ...heroForm, experience: e.target.value })} placeholder="Experience (e.g. 2 Years, Fresher)" className="w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white rounded-2xl focus:border-orange-500 outline-none text-[11px] font-medium placeholder:text-white/50" />
                      </div>
                      <div className="relative">
                        <input type="file" className="sr-only" id="resume-upload" onChange={e => setResumeFile(e.target.files[0])} accept=".pdf,.doc,.docx" />
                        <label htmlFor="resume-upload" className="flex items-center justify-between w-full bg-white/5 border border-white/10 px-6 py-3.5 text-white/60 rounded-2xl cursor-pointer hover:border-orange-500 hover:text-white transition-all text-[11px] font-medium group/upload">
                          <span className="truncate max-w-[80%]">{resumeFile ? resumeFile.name : 'Upload Your Resume'}</span>
                          {resumeFile ? <CheckCircle size={14} className="text-green-400" /> : <Upload size={14} className="text-orange-400 group-hover/upload:scale-110 transition-transform" />}
                        </label>
                      </div>
                    </>
                  )}

                  <button type="submit" disabled={isSubmitting} className="group relative w-full py-4 bg-orange-600 text-white font-black uppercase tracking-[0.3em] overflow-hidden rounded-xl transition-all hover:scale-[1.02] active:scale-95 text-[10px] shadow-2xl shadow-orange-600/20 disabled:opacity-50">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? 'Transmitting...' : 'Get a Call Back'}
                      <Send size={14} />
                    </span>
                    <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 animate-bounce">
        <span className="text-[10px] text-orange-400 font-bold uppercase tracking-[0.5em] rotate-90 mb-8 origin-left">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
