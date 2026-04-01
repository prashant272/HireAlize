import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Facebook, Twitter, Instagram, Sparkles, X, Upload, CheckCircle, ChevronDown } from 'lucide-react';
import api from '../api/axios';
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({ type: 'Employer', name: '', email: '', phone: '', message: '' });
    const [resumeFile, setResumeFile] = useState(null);
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('Transmitting...');
        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('message', formData.message);
            data.append('type', formData.type);
            data.append('source', 'Contact Page Form');
            if (resumeFile) data.append('resume', resumeFile);

            await api.post('/contacts', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            
            setStatus('Inquiry received! Our team will contact you soon.');
            window.alert('Inquiry received! Our team will contact you soon.');
            setFormData({ type: 'Employer', name: '', email: '', phone: '', message: '' });
            setResumeFile(null);
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setStatus('Transmission error. Please try again.');
            window.alert('Transmission error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    const contactInfo = [
        {
            icon: <MapPin size={24} />,
            title: 'Office',
            details: ['Kibu Coworkings, First Floor, D-65,', 'Udyog Vihar Phase V, Sector-19,', 'Gurugram, Haryana 122016'],
            color: 'from-orange-600 to-orange-400'
        },
        {
            icon: <Phone size={24} />,
            title: 'Phone',
            details: ['+91 79822 81621', 'Phone Mon-Sat | 10Am-7Pm'],
            color: 'from-blue-600 to-blue-400'
        },
        {
            icon: <Mail size={24} />,
            title: 'Email',
            details: ['hirealize@outlook.in', 'Official Channel for Partnerships'],
            color: 'from-purple-600 to-purple-400'
        }
    ];

    return (
        <div className="min-h-screen bg-[#020617] font-inter">
            <SEO 
                title="Contact Hirealize | Partner with the Best Recruitment Consultancy"
                description="Get in touch with Hirealize Consultants. Whether you're an employer looking for top talent or a candidate seeking your next role, our team is here to help."
                keywords="contact recruitment agency, hiring inquiry, job seeker support, HR consultancy contact, gurugram recruitment firm"
                canonical="https://www.hirealize.in/contact"
            />
            <section className="pt-20 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[140px] animate-pulse-slow"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/5 border border-orange-500/20 backdrop-blur-xl mb-4 md:mb-8">
                            <span className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.4em]">Speak with a Strategist</span>
                        </div>
                        <h1 className="text-3xl md:text-7xl font-display font-bold text-white mb-4 md:mb-6 tracking-tight leading-none">
                            Contact <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic inline-block pb-1 pr-2">Us</span>
                        </h1>
                        <p className="text-gray-200 text-base md:text-xl font-light max-w-2xl mx-auto tracking-wide">
                            Let’s connect to discuss your hiring needs or career opportunities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
                        {/* Left Column: Intelligence Cards */}
                        <div className="lg:col-span-12 xl:col-span-5 space-y-8 animate-fade-in-up delay-100">
                            <div className="space-y-4 md:space-y-6">
                                <h2 className="text-2xl md:text-4xl font-display font-bold text-white leading-tight uppercase tracking-tight">
                                    Strong Network, <br /><span className="text-orange-400 italic">Strategic Presence</span>
                                </h2>
                                <p className="text-white/90 leading-relaxed font-normal text-sm md:text-lg max-w-md">
                                    Reliable hiring support across multiple industries and locations
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 md:gap-6">
                                {contactInfo.map((info, idx) => (
                                    <div key={idx} className="group p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl hover:border-orange-500/30 transition-all duration-500 relative overflow-hidden">
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${info.color} opacity-[0.03] rounded-full -mr-16 -mt-16 transition-all group-hover:opacity-[0.08]`}></div>
                                        <div className="flex items-start gap-4 md:gap-6">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-all">
                                                {React.cloneElement(info.icon, { size: 20 })}
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2 tracking-tight group-hover:text-orange-400 transition-colors uppercase">{info.title}</h3>
                                                {info.details.map((detail, dIdx) => (
                                                    <p key={dIdx} className="text-white/80 text-[10px] md:text-xs font-medium leading-relaxed">{detail}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Premium Form */}
                        <div className="lg:col-span-12 xl:col-span-7 w-full animate-fade-in-up delay-200">
                            <div className="bg-white/[0.03] border border-white/10 p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] backdrop-blur-[100px] shadow-3xl relative overflow-hidden group hover:border-orange-500/20 transition-all duration-1000">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full -mr-32 -mt-32 blur-[100px]"></div>

                                <form className="relative z-10 space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                                    {status && <div className={`text-sm font-bold ${status.includes('received') ? 'text-green-400' : 'text-orange-400'}`}>{status}</div>}
                                    
                                    <div className="space-y-2 md:space-y-3">
                                        <label className="text-[10px] font-black text-orange-400/80 uppercase tracking-[0.3em] pl-1">Employer/Candidate</label>
                                        <div className="relative">
                                            <select 
                                                name="type" 
                                                value={formData.type} 
                                                onChange={handleInputChange} 
                                                className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:border-orange-500 focus:bg-white/10 outline-none transition-all font-medium text-xs md:text-sm appearance-none cursor-pointer pr-12"
                                            >
                                                <option value="Employer" className="bg-[#020617]">Employer</option>
                                                <option value="Candidate" className="bg-[#020617]">Candidate</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-orange-400/60 transition-transform group-focus-within:rotate-180">
                                                <ChevronDown size={18} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                        <div className="space-y-2 md:space-y-3">
                                            <label className="text-[10px] font-black text-orange-400/80 uppercase tracking-[0.3em] pl-1">Full Name</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:border-orange-500 focus:bg-white/10 outline-none transition-all placeholder:text-white/40 font-medium text-xs md:text-sm" placeholder="Full Name" required />
                                        </div>
                                        <div className="space-y-2 md:space-y-3">
                                            <label className="text-[10px] font-black text-orange-400/80 uppercase tracking-[0.3em] pl-1">Email</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:border-orange-500 focus:bg-white/10 outline-none transition-all placeholder:text-white/40 font-medium text-xs md:text-sm" placeholder="Email" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2 md:space-y-3">
                                        <label className="text-[10px] font-black text-orange-400/80 uppercase tracking-[0.3em] pl-1">Phone Number</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:border-orange-500 focus:bg-white/10 outline-none transition-all placeholder:text-white/40 font-medium text-xs md:text-sm" placeholder="Phone Number" required />
                                    </div>

                                    {formData.type === 'Candidate' && (
                                        <div className="space-y-2 md:space-y-3 animate-fade-in-up">
                                            <label className="text-[10px] font-black text-orange-400/80 uppercase tracking-[0.3em] pl-1">Professional Dossier</label>
                                            <div className="relative">
                                                <input 
                                                    type="file" 
                                                    id="contact-resume"
                                                    onChange={(e) => setResumeFile(e.target.files[0])}
                                                    className="sr-only" 
                                                    accept=".pdf,.doc,.docx"
                                                />
                                                <label 
                                                    htmlFor="contact-resume" 
                                                    className="flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white/60 cursor-pointer hover:border-orange-500 hover:text-white transition-all transition-all duration-300 font-medium text-xs md:text-sm group/file"
                                                >
                                                    <span className="truncate max-w-[80%]">
                                                        {resumeFile ? resumeFile.name : 'Upload Your Resume'}
                                                    </span>
                                                    {resumeFile ? (
                                                        <CheckCircle size={18} className="text-green-400" />
                                                    ) : (
                                                        <Upload size={18} className="text-orange-400 group-hover/file:scale-110 transition-transform" />
                                                    )}
                                                </label>
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-2 md:space-y-3">
                                        <label className="text-[10px] font-black text-orange-400/80 uppercase tracking-[0.3em] pl-1">Message / Requirement</label>
                                        <textarea rows="4 md:5" name="message" value={formData.message} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:border-orange-500 focus:bg-white/10 outline-none resize-none transition-all placeholder:text-white/40 font-medium text-xs md:text-sm leading-relaxed" placeholder="Message / Requirement" required></textarea>
                                    </div>

                                    <div className="pt-2 flex justify-center">
                                        <button type="submit" className="group relative w-90 max-w-sm py-3 md:py-4 bg-orange-600 text-white font-black uppercase tracking-[0.4em] overflow-hidden rounded-xl md:rounded-2xl transition-all hover:scale-[1.02] active:scale-95 text-[10px] md:text-[13px] shadow-2xl shadow-orange-600/20 disabled:opacity-50" disabled={isSubmitting}>
                                            <span className="relative z-10 flex items-center justify-center gap-4">
                                                {isSubmitting ? 'Transmitting...' : 'Get a Call Back'}
                                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </span>
                                            <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
