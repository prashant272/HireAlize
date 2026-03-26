import React, { useState, useEffect, useRef } from 'react';
import { Users, Filter, CheckCircle, Smile, Award, Zap, Globe, TrendingUp } from 'lucide-react';

const StatCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const endValue = parseInt(end.replace(/\D/g, ''));
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = endValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, endValue, duration]);

  return <span ref={countRef}>{count}{isVisible ? suffix : ''}</span>;
};

const Stats = () => {
  const stats = [
    { label: 'Verified Closures', value: '100+', sub: 'Across multiple industries and roles.', icon: <CheckCircle size={28} /> },
    { label: 'Active Partners', value: '50+', sub: 'Supporting growing businesses with their talent needs.', icon: <Users size={28} /> },
    { label: 'Market Presence', value: '5+', sub: 'Core Industries Served | Domain Specialized', icon: <TrendingUp size={28} /> },
    { label: 'Client Feedback', value: '90%', sub: 'Based on successful closures and repeat clients.', icon: <Smile size={28} /> },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#020617] border-y border-white/5 relative overflow-hidden group/stats">
      {/* Premium Background Effects */}
      {/* Premium Background Effects: Unified Orange/White */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[150px] -z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] -z-0 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-24 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-8 bg-orange-500/40"></div>
            <span className="text-orange-400 text-[11px] font-bold uppercase tracking-[0.5em]">Our Track Record</span>
            <div className="h-px w-8 bg-orange-500/40"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
            What We’ve <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic inline-block pb-1 pr-2">Achieved So Far</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Main Card */}
              <div className="h-full bg-white/[0.04] backdrop-blur-3xl border border-orange-500/30 rounded-[2.5rem] p-10 transition-all duration-700 hover:border-orange-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.2)] overflow-hidden text-center flex flex-col items-center">
                
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] via-transparent to-orange-500/5 opacity-100"></div>

                {/* Header: Icon Container */}
                <div className="relative z-10 w-20 h-20 rounded-[1.5rem] bg-orange-500 border border-orange-500 text-white flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(249,115,22,0.3)] group-hover:shadow-orange-500/50 group-hover:scale-110 mb-10">
                  {stat.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <p className="text-orange-400 text-[11px] font-black uppercase tracking-[0.4em] opacity-90 group-hover:opacity-100 transition-opacity">{stat.label}</p>
                  <h3 className="text-5xl lg:text-6xl font-display font-bold text-white tracking-tighter">
                    <StatCounter end={stat.value} />
                  </h3>
                  <div className="h-0.5 w-12 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)] transition-all duration-700 mx-auto group-hover:w-full"></div>
                  <p className="text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">{stat.sub}</p>
                </div>

                {/* Bottom Accent Decor */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
