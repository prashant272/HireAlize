import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      company: 'Manufacturing Company',
      industry: 'HR Manager',
      text: "Hirealize helped us close multiple positions within tight timelines. The profiles shared were relevant and well-screened.",
      rating: 5,
    },
    {
      company: 'BFSI Firm',
      industry: 'Talent Acquisition Lead',
      text: "Good understanding of our requirements and smooth coordination throughout the hiring process.",
      rating: 5,
    },
    {
      company: 'FMCG Company',
      industry: 'Business Head',
      text: "We were able to close key sales roles quickly with their support. Reliable and responsive team.",
      rating: 5,
    },
    {
      company: 'BPO',
      industry: 'Operations Manager',
      text: "Consistent support in bulk hiring with quality candidates. Would definitely recommend.",
      rating: 5,
    },
    {
      company: 'Startup',
      industry: 'Founder',
      text: "They understand urgency and deliver profiles quickly. A dependable hiring partner.",
      rating: 5,
    },
    {
      company: 'NBFC',
      industry: 'HR Head',
      text: "Hirealize understands our urgency and consistently shares relevant profiles within a short time. Their coordination throughout the process is smooth and professional.",
      rating: 5,
    },
    {
      company: 'FMCG Company',
      industry: 'Regional Sales Head',
      text: "We hired multiple sales executives through Hirealize, and the quality of candidates was exactly what we were looking for.",
      rating: 5,
    },
    {
      company: 'Corporate Firm',
      industry: 'Talent Acquisition',
      text: "Very responsive team. They understood our requirements clearly and delivered suitable candidates without unnecessary delays.",
      rating: 5,
    },
    {
      company: 'Service Industry',
      industry: 'HR Executive',
      text: "Good experience working with them. They maintain clear communication and ensure proper follow-ups until closure.",
      rating: 5,
    },
    {
      company: 'Corporate Office',
      industry: 'Admin Head',
      text: "They have a good understanding of corporate roles and were able to match candidates as per our expectations.",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsAnimating(false);
    }, 1000);
  }, [isAnimating]);

  const prev = () => goTo((current - 1 + reviews.length) % reviews.length);
  const next = useCallback(() => goTo((current + 1) % reviews.length), [current, goTo, reviews.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const review = reviews[current];

  return (
    <section className="py-20 bg-[#020617] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/5 rounded-full blur-[150px] -z-0 animate-pulse-slow"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-8 bg-orange-500/40"></div>
            <span className="text-orange-400 text-[11px] font-bold uppercase tracking-[0.5em]">Client Testimonials</span>
            <div className="h-px w-8 bg-orange-500/40"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic inline-block pb-1 pr-2">
              Growing Businesses
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto"></div>
        </div>

        {/* Testimonial Card */}
        <div className={`relative transition-all duration-350 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="bg-white/[0.04] backdrop-blur-3xl border border-orange-500/30 rounded-[2.5rem] p-10 md:p-14 overflow-hidden relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] via-transparent to-orange-500/5"></div>

            {/* Quote Icon */}
            <Quote className="absolute top-10 right-10 text-orange-500/10" size={80} />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-orange-400 fill-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white text-lg md:text-xl leading-relaxed font-light mb-10 opacity-90 italic">
                "{review.text}"
              </p>

              {/* Company */}
              <div className="flex items-center space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-2xl font-black shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                  {review.company.charAt(0)}
                </div>
                <div>
                  <p className="text-orange-400 font-black text-lg tracking-tight">{review.company}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">{review.industry}</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-10">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex items-center space-x-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`rounded-full transition-all duration-500 ${idx === current
                  ? 'w-8 h-2 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Counter */}
        <p className="text-center text-white/20 text-xs font-bold uppercase tracking-[0.4em] mt-6">
          {String(current + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
