import React from 'react';
import { Target, Eye, Rocket, CheckCircle2, Award, Users, Search, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
    const stats = [
        { label: 'Verified Closures', value: '100+', text: 'Across multiple industries and roles.', color: 'from-orange-600 to-orange-400' },
        { label: 'Active Partners', value: '50+', text: 'Supporting growing businesses with their talent needs.', color: 'from-blue-600 to-blue-400' },
        { label: 'Market Presence', value: '5+', text: 'Core Industries Served | Domain Specialized', color: 'from-purple-600 to-purple-400' },
        { label: 'Client Feedback', value: '90%', text: 'Based on successful closures and repeat clients.', color: 'from-emerald-600 to-emerald-400' },
    ];

    const features = [
        {
            t: 'Fast Turnaround',
            d: 'Quick sharing of relevant candidate profiles to meet urgent hiring needs.',
            icon: <Rocket size={20} />
        },
        {
            t: 'Strong Candidate Network',
            d: 'Access to a wide pool of candidates across corporate, sales, and BFSI roles.',
            icon: <Users size={20} />
        },
        {
            t: 'Quality Screening',
            d: 'Initial screening to ensure candidates match role requirements before submission.',
            icon: <CheckCircle2 size={20} />
        },
        {
            t: 'Dedicated Support',
            d: 'End-to-end assistance from requirement understanding to final closure.',
            icon: <Briefcase size={20} />
        },
    ];

    return (
        <section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-[#020617] relative overflow-hidden min-h-screen font-inter">
            <SEO 
                title="About Hirealize | Our Mission, Vision & Recruitment Expertise"
                description="Learn about Hirealize Consultants, our mission to empower organizations with top talent, and our expert team of recruitment professionals."
                keywords="about hirealize, recruitment mission, hiring expertise, talent acquisition team, recruitment firm india"
                canonical="https://www.hirealize.in/about"
            />
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
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.2]">
                     Know More{" "}
                     <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic inline-block pb-1">
                        About Us
                     </span>
                  </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20 md:mb-32 relative">
                    <div className="lg:col-span-6 space-y-12 animate-fade-in-up delay-100">
                        <div className="space-y-12">
                            {/* Who We Are */}
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-[1.1] tracking-tight">
                                    Who We <span className="text-orange-400 italic">Are</span>
                                </h2>
                                <p className="text-white/70 leading-relaxed font-normal text-base md:text-lg max-w-xl">
                                    Hirealize Consultants is a recruitment firm dedicated to helping businesses hire the right talent and professionals find the right opportunities. We work closely with organizations to understand their hiring needs, business goals, and work culture, ensuring that every candidate we recommend is a strong fit both professionally and culturally.
                                </p>
                            </div>

                            {/* What We Do */}
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-[1.1] tracking-tight">
                                    What We <span className="text-orange-400 italic">Do</span>
                                </h2>
                                <p className="text-white/70 leading-relaxed font-normal text-base md:text-lg max-w-xl">
                                    We provide end-to-end recruitment support across multiple industries and job functions. From entry-level positions to critical business roles, our focus is on delivering relevant profiles, faster closures, and a smooth hiring experience. While we have strong experience in corporate, sales, and BFSI roles, we also support hiring across other domains based on client requirements.
                                </p>
                            </div>

                            {/* Our Approach */}
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-[1.1] tracking-tight">
                                    Our <span className="text-orange-400 italic">Approach</span>
                                </h2>
                                <p className="text-white/70 leading-relaxed font-normal text-base md:text-lg max-w-xl">
                                    Our approach is simple and practical:
                                </p>
                                <ul className="list-disc pl-5 text-white/70 text-base md:text-lg space-y-2 mb-4 max-w-xl">
                                    <li>Understand the requirement in detail</li>
                                    <li>Source and screen suitable candidates</li>
                                    <li>Share relevant profiles quickly</li>
                                    <li>Support throughout the interview and closure process</li>
                                </ul>
                                <p className="text-white/70 leading-relaxed font-normal text-base md:text-lg max-w-xl">
                                    We focus on quality over quantity, ensuring that clients receive profiles that truly match their expectations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative animate-fade-in-up delay-200 lg:sticky lg:top-32 h-fit">
                        <div className="aspect-[4/5] lg:aspect-square bg-[#020617] rounded-[3rem] border border-white/10 p-4 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <img
                                src="/about_hero.jpg"
                                alt="Our Synergy"
                                className="w-full h-full object-cover rounded-[2.5rem] opacity-70 group-hover:scale-105 transition-all duration-1000"
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

                {/* Stats Full Width Screen */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-32 animate-fade-in-up delay-300">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="relative p-6 bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden group hover:border-orange-500/30 transition-all duration-500 flex flex-col justify-between h-full">
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-[0.03] rounded-full -mr-12 -mt-12 transition-all group-hover:opacity-[0.08]`}></div>
                            <div className="relative z-10 mb-4">
                                <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1 tracking-tighter">{stat.value}</p>
                                <p className="text-[10px] md:text-[11px] text-orange-400 font-bold uppercase tracking-widest leading-relaxed">{stat.label}</p>
                            </div>
                            <p className="relative z-10 text-white/50 text-xs leading-relaxed mt-auto font-light">
                                {stat.text}
                            </p>
                        </div>
                    ))}
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
