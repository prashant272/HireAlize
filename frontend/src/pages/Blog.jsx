import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Clock, User, ArrowRight, Rss, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await api.get('/blogs');
                setPosts(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setSubscribeStatus('Subscribing...');
        try {
            await api.post('/subscribers', { email });
            setSubscribeStatus('Subscribed successfully!');
            setEmail('');
            setTimeout(() => setSubscribeStatus(''), 5000);
        } catch (error) {
            console.error('Error subscribing:', error);
            setSubscribeStatus(error.response?.data?.message || 'Failed to subscribe.');
            setTimeout(() => setSubscribeStatus(''), 5000);
        }
    };
    return (
    <section className="pt-32 pb-24 bg-[#020617] relative overflow-hidden min-h-screen font-inter">
      {/* Background Tech Pulse */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Elite Header */}
          <div className="text-center mb-24 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/5 border border-orange-500/20 backdrop-blur-xl mb-6">
                  <Rss className="text-orange-400 animate-pulse" size={14} />
                  <span className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.4em]">Insights Network</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
                  Intelligence <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic inline-block pb-1 pr-2">Feed</span>
              </h1>
              <p className="text-white/60 text-sm md:text-base font-medium tracking-[0.5em] uppercase leading-relaxed max-w-2xl mx-auto">
                  Strategic insights for the modern enterprise
              </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.length === 0 && !loading && <div className="text-white col-span-3 text-center py-10">No intelligence found.</div>}
              {posts.map((post) => (
                  <div
                      key={post._id}
                      className="group bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-orange-500/30 transition-all duration-700 hover:-translate-y-3 hover:bg-white/[0.04] relative"
                  >
                      {/* Optional Hover Glow */}
                      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      {/* Image Placeholder Equivalent */}
                      <div className="h-64 bg-white/[0.03] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/5 mix-blend-overlay group-hover:opacity-50 transition-all duration-700"></div>
                          <div className="absolute top-6 left-6 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-md">
                              {post.category}
                          </div>
                      </div>

                      {/* Content */}
                      <div className="p-10 space-y-6">
                          <div className="flex items-center space-x-4 text-white/40 text-[9px] uppercase font-black tracking-widest">
                              <div className="flex items-center space-x-2">
                                  <Clock size={12} className="text-orange-400/60" />
                                  <span>{post.date}</span>
                              </div>
                              <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                              <div className="flex items-center space-x-2">
                                  <User size={12} className="text-orange-400/60" />
                                  <span>{post.author}</span>
                              </div>
                          </div>

                          <h2 className="text-2xl font-display font-bold text-white group-hover:text-orange-400 transition-colors leading-snug tracking-tight">
                              {post.title}
                          </h2>

                          <p className="text-white/50 text-sm leading-relaxed font-light">
                              {post.excerpt}
                          </p>

                          <div className="pt-6 border-t border-white/10">
                              <button className="flex items-center space-x-3 text-white text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-orange-400 group-hover:translate-x-2 transition-all">
                                  <span>Read Full Intelligence</span>
                                  <ArrowRight size={14} />
                              </button>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

          {/* Premium Newsletter CTA */}
          <div className="mt-32 p-12 lg:p-20 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 text-center relative overflow-hidden group hover:border-orange-500/30 transition-all duration-1000">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px] -mr-64 -mt-64 group-hover:bg-orange-600/10 transition-all duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>
              
              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Subscribe to <span className="text-orange-400 italic">Tech Intel</span></h3>
                  <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">Get the latest high-value recruitment and market intelligence delivered directly to your command center weekly.</p>
                  
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 items-center justify-center p-2 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md relative">
                      {subscribeStatus && <div className={`absolute -top-10 text-sm ${subscribeStatus.includes('success') ? 'text-green-400' : 'text-orange-400'}`}>{subscribeStatus}</div>}
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Establish secure comms link (Email)" 
                        className="w-full sm:w-[400px] px-6 py-5 rounded-2xl bg-white/[0.03] border border-white/5 text-white outline-none focus:border-orange-500 transition-all text-sm font-light placeholder:text-white/30" 
                        required
                      />
                      <button type="submit" className="group/btn relative w-full sm:w-auto px-10 py-5 bg-orange-600 text-white font-black uppercase tracking-[0.3em] overflow-hidden rounded-2xl transition-all hover:scale-[1.02] active:scale-95 text-[11px] shadow-2xl shadow-orange-600/20 shrink-0 flex items-center justify-center disabled:opacity-50" disabled={subscribeStatus === 'Subscribing...'}>
                          <span className="relative z-10 flex items-center justify-center gap-3">
                              Subscribe
                              <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </span>
                          <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </section>
    );
};

export default Blog;
