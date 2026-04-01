import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import api from '../api/axios';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { data } = await api.post('/admin/login', { email, password });
            if (data.token) {
                localStorage.setItem('adminToken', data.token);
                navigate('/admin');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 font-inter relative overflow-hidden">
            {/* Background Effects */}
            <meta name="robots" content="noindex, nofollow" />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse-slow delay-1000"></div>
            </div>

            <div className="w-full max-w-md bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-[2rem] backdrop-blur-[50px] relative z-10 shadow-2xl">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-orange-600/10 flex items-center justify-center rounded-2xl mx-auto mb-4 border border-orange-500/20">
                        <Lock className="text-orange-500" size={32} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">System Control</h2>
                    <p className="text-white/50 text-sm">Restricted access protocol.</p>
                    <div className="mt-6 text-center text-xs text-white/40">
                        Tip: Use <strong>admin@biryaniyoyo.com</strong> and <strong>admin@2026</strong> to login.
                    </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    {error && <div className="text-red-400 text-sm text-center bg-red-400/10 p-3 rounded-xl border border-red-400/20">{error}</div>}
                    
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-orange-400/60 uppercase tracking-[0.3em] pl-1">Admin Identity</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:border-orange-500 outline-none transition-all placeholder:text-white/20 text-sm" 
                                placeholder="commander@hirealize.com" 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-orange-400/60 uppercase tracking-[0.3em] pl-1">Passcode</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                            <input 
                                type="password" 
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white focus:border-orange-500 outline-none transition-all placeholder:text-white/20 text-sm" 
                                placeholder="••••••••" 
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="group relative w-full py-4 mt-4 bg-orange-600 text-white font-black uppercase tracking-[0.3em] overflow-hidden rounded-xl transition-all hover:scale-[1.02] active:scale-95 text-[11px] disabled:opacity-50 disabled:hover:scale-100"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            {loading ? 'Authenticating...' : 'Engage'}
                            {!loading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                        </span>
                        <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
