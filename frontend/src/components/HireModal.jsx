import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import api from '../api/axios';

const HireModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState('');
    const [heroForm, setHeroForm] = useState({ name: '', phone: '', email: '', requirement: '' });

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
                message: heroForm.requirement || 'General employer inquiry from Global Modal',
                source: 'Navbar / Global Hire Modal'
            });
            setStatus('Inquiry received! Our team will contact you securely.');
            window.alert('Inquiry received! Our team will contact you securely.');
            setHeroForm({ name: '', phone: '', email: '', requirement: '' });
            setTimeout(() => {
                setStatus('');
                setIsModalOpen(false);
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('Transmission error. Please try again.');
            window.alert('Transmission error. Please try again.');
            setTimeout(() => setStatus(''), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
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
    );
};

export default HireModal;
