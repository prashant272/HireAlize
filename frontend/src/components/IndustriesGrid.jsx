import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu, Building2, Landmark, ShoppingCart,
  Settings, HeartPulse, Microscope, Plane,
  Smartphone, Rocket, GraduationCap, TrendingUp,
  Truck, ShoppingBag
} from 'lucide-react';

const IndustriesGrid = () => {
  const industries = [
    { name: 'IT & BPO', icon: <Cpu size={24} />, desc: 'Technology & Support Roles' },
    { name: 'Banking & Financial Services', icon: <Landmark size={24} />, desc: 'Finance & Banking Talent' },
    { name: 'Corporate Functions', icon: <Building2 size={24} />, desc: 'HR • Finance • Admin' },
    { name: 'Sales & Marketing', icon: <TrendingUp size={24} />, desc: 'Growth & Revenue Roles' },
    { name: 'Startup & Emerging Business', icon: <Rocket size={24} />, desc: 'Startup Growth Talent' },
    { name: 'Engineering & Manufacturing', icon: <Settings size={24} />, desc: 'Plant & Engineering Roles' },
    { name: 'Logistics & Supply Chain', icon: <Truck size={24} />, desc: 'Supply Chain Experts' },
    { name: 'Education & EdTech', icon: <GraduationCap size={24} />, desc: 'Academic & EdTech Roles' },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#020617] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -z-0 animate-pulse-slow"></div>
      <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-8 bg-orange-500/40"></div>
            <span className="text-orange-400 text-[11px] font-bold uppercase tracking-[0.5em]">Our Coverage </span>
            <div className="h-px w-8 bg-orange-500/40"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight tracking-tight">
            Industries We <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic inline-block pb-1 pr-2">Serve</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg font-light tracking-widest mt-4 md:mt-8 max-w-3xl mx-auto">Focused expertise in hiring across Corporate Roles, Sales & Marketing, IT & BPO and BFSI</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full bg-white/[0.04] backdrop-blur-3xl border border-orange-500/30 rounded-[2rem] p-8 transition-all duration-700 hover:border-orange-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.2)] overflow-hidden text-center flex flex-col items-center">
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] via-transparent to-orange-500/5 opacity-100"></div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-[1.25rem] bg-orange-500 border border-orange-500 text-white flex items-center justify-center mb-6 transition-all duration-500 shadow-[0_0_20px_rgba(249,115,22,0.3)] group-hover:shadow-orange-500/50 group-hover:scale-110">
                  {React.cloneElement(industry.icon, { size: 28 })}
                </div>

                <h3 className="relative z-10 text-white font-display font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors tracking-tight">
                  {industry.name}
                </h3>
                <p className="relative z-10 text-white text-[10px] uppercase tracking-widest font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  {industry.desc}
                </p>

                {/* Bottom Bar Glow */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Text */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-white/40 text-xs font-medium uppercase tracking-[0.3em]">
            Don't see your industry?{' '}
            <Link to="/contact" className="text-orange-400 underline cursor-pointer hover:text-white transition-colors">
              Connect with us
            </Link>{' '}
            for custom solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
