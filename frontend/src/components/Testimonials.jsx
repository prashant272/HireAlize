import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      company: 'Revolt Motors',
      industry: 'EV & Automotive',
      text: "Hirealize transformed our talent acquisition pipeline. Within 3 weeks, they placed our entire core engineering team for our new EV division—exactly the high-caliber profiles we needed to drive our product roadmap forward.",
      rating: 5,
    },
    {
      company: 'Godrej Consumers',
      industry: 'FMCG',
      text: "Their understanding of the FMCG landscape is exceptional. Hirealize consistently delivers candidates who don't just fit the role—but genuinely align with the Godrej culture and long-term vision.",
      rating: 5,
    },
    {
      company: 'DB Schenker',
      industry: 'Logistics & SCM',
      text: "For our large-scale regional expansion, we needed a recruitment partner who could move fast without compromising quality. Hirealize delivered 40+ vetted profiles across 5 cities in under a month. Outstanding execution.",
      rating: 5,
    },
    {
      company: 'Jindal Stainless',
      industry: 'Steel & Manufacturing',
      text: "We partnered with Hirealize for senior leadership mandates across our manufacturing plants. Their niche domain expertise and quality of shortlisted candidates set them apart from every other agency we've worked with.",
      rating: 5,
    },
    {
      company: 'Johnson Controls',
      industry: 'Building Tech',
      text: "Sourcing specialized HVAC and building tech professionals is notoriously difficult. Hirealize cracked it with precision—connecting us with candidates whose profiles were an immediate match. Highly recommended.",
      rating: 5,
    },
    {
      company: 'Concentrix',
      industry: 'BPO & Customer Experience',
      text: "Hirealize has been our go-to for bulk hiring across multiple locations. Their ability to maintain quality at scale—without delays—has made them an indispensable part of our hiring strategy.",
      rating: 5,
    },
    {
      company: 'Singhi & Co',
      industry: 'Audit & Consulting',
      text: "Finding professionals who meet the exacting standards of a Big 4-caliber audit firm is no easy task. Hirealize not only understood those standards—they consistently exceeded them with every shortlist.",
      rating: 5,
    },
    {
      company: 'Spacewood Furnishers',
      industry: 'Furniture Manufacturing',
      text: "We've scaled our workforce significantly over the past year, and Hirealize has been with us every step of the way—from floor-level technicians to senior plant management. A true partner.",
      rating: 5,
    },
    {
      company: 'Policy Bazaar',
      industry: 'InsurTech & FinTech',
      text: "The fintech talent war is real. Hirealize helped us secure top product and engineering talent in a highly competitive market, with a placement success rate that consistently crossed 90%.",
      rating: 5,
    },
    {
      company: 'Tele Performance',
      industry: 'CX & Outsourcing',
      text: "For our rapid ramp-ups, we needed a partner that matched our pace. Hirealize delivered high-volume, quality-screened candidates on tight timelines—every single time. They're the gold standard for CX hiring.",
      rating: 5,
    },
    {
      company: 'Legrand India',
      industry: 'Electrical & Digital Infra',
      text: "From R&D engineers to sales leadership, Hirealize has consistently matched our technical and cultural requirements. Their deep understanding of the electrical infrastructure space is evident in every hire.",
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
            <span className="text-orange-400 text-[11px] font-bold uppercase tracking-[0.5em]">Client Voices</span>
            <div className="h-px w-8 bg-orange-500/40"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
            Voice of the{' '}
            <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic">
              High-Performance Network
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
