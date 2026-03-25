import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Upload, Send, Search, X } from 'lucide-react';

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApply, setShowApply] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    { id: 1, title: 'Senior Software Engineer', location: 'Remote / Bangalore', type: 'Full-time', salary: '₹20L - ₹35L', description: 'We are looking for an experienced Senior Software Engineer with deep expertise in React and Node.js to architect high-performance scalable systems...' },
    { id: 2, title: 'VP of Talent Acquisition', location: 'New Delhi', type: 'Full-time', salary: '₹40L - ₹60L', description: 'Seeking a visionary leader to strategize recruitment pipelines and enhance employer branding for rapid-growth tech enterprises...' },
    { id: 3, title: 'Enterprise Account Executive', location: 'Mumbai', type: 'Full-time', salary: '₹15L - ₹25L + Commission', description: 'Looking for a relentless enterprise sales executive capable of closing mid-to-high ticket deals with Fortune 500 clients...' },
    { id: 4, title: 'Data Strategy Consultant', location: 'Pune', type: 'Contract', salary: '₹1.5L - ₹2.5L / Month', description: 'Seeking a highly analytical Data Consultant to drive insights processing infrastructure for a 6-month digital transformation project...' },
  ];

  const handleApply = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    setSelectedJob(null);
    setShowApply(false);
  };

  const toggleDetails = (job, apply) => {
    if (selectedJob?.id === job.id && showApply === apply) {
      setSelectedJob(null);
    } else {
      setSelectedJob(job);
      setShowApply(apply);
    }
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pt-20 md:pt-32 pb-24 bg-[#020617] relative overflow-hidden min-h-screen font-inter text-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4 md:gap-8">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/5 border border-orange-500/20 backdrop-blur-xl mb-3 md:mb-6">
              <span className="text-orange-400 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em]">Apply Now</span>
            </div>
            <h1 className="text-2xl md:text-5xl font-display font-bold text-white mb-1 md:mb-4 tracking-tighter">
              Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white italic">Roles</span>
            </h1>
          </div>
          <div className="w-full md:w-96 relative animate-fade-in-up delay-100 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500/50 group-hover:text-orange-400 transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search by role or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/[0.02] border border-white/5 rounded-lg md:rounded-2xl pl-10 pr-10 py-3 md:py-5 text-white focus:border-orange-500 focus:bg-white/[0.05] outline-none transition-all duration-300 placeholder:text-white/20 font-medium text-xs md:text-sm"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-orange-400 transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Job Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`p-5 md:p-8 rounded-[1.25rem] md:rounded-[2.5rem] transition-all duration-500 relative overflow-hidden group border ${
                  selectedJob?.id === job.id 
                  ? 'bg-orange-500/10 border-orange-500/40 shadow-2xl shadow-orange-500/10' 
                  : 'bg-white/[0.02] border-white/10 hover:border-orange-500/30 hover:bg-white/[0.04]'
                }`}
              >
                {/* Job Header */}
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4 md:mb-6 relative z-10">
                  <div className="space-y-0.5 md:space-y-1">
                    <h3 className={`text-lg md:text-3xl font-display font-bold transition-colors tracking-tight ${selectedJob?.id === job.id ? 'text-orange-400' : 'text-white group-hover:text-orange-300'}`}>
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-white/40 text-[9px] md:text-xs font-light tracking-wide">
                      <div className="flex items-center gap-1"><MapPin size={12} className="text-orange-500/50" /> {job.location}</div>
                      <div className="flex items-center gap-1"><Clock size={12} className="text-orange-500/50" /> {job.type}</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-orange-500/5 border border-orange-500/10 text-orange-400 text-[8px] font-black rounded-md uppercase tracking-widest whitespace-nowrap">
                    {job.salary}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 md:gap-4 relative z-10">
                  <button
                    onClick={() => toggleDetails(job, false)}
                    className={`flex-1 py-2.5 md:py-3.5 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                      selectedJob?.id === job.id && !showApply
                      ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/20' 
                      : 'bg-white/5 border-white/10 text-white/50 hover:border-orange-500 hover:text-orange-400'
                    }`}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => toggleDetails(job, true)}
                    className={`flex-1 py-2.5 md:py-3.5 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                      selectedJob?.id === job.id && showApply
                      ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/20'
                      : 'bg-orange-500/10 border-orange-500/20 text-orange-400 hover:bg-orange-600 hover:text-white hover:shadow-orange-600/30'
                    }`}
                  >
                    Apply
                  </button>
                </div>

                {/* Expanded Content Inline */}
                {selectedJob?.id === job.id && (
                  <div className="mt-5 pt-5 md:mt-8 md:pt-8 border-t border-white/5 animate-fade-in relative z-10">
                    <button 
                      onClick={() => setSelectedJob(null)}
                      className="absolute top-1 right-0 p-2 text-white/10 hover:text-orange-400 transition-colors"
                    >
                      <X size={16} />
                    </button>

                    {!showApply ? (
                      <div className="space-y-5 md:space-y-8">
                        <p className="text-white/50 leading-relaxed font-light text-[11px] md:text-sm italic border-l border-orange-500/50 pl-4 md:pl-6 py-1.5 bg-gradient-to-r from-orange-500/5 to-transparent">
                          "{job.description}"
                        </p>
                        <div className="space-y-2.5 md:space-y-4">
                          <p className="text-white/80 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Expectations</p>
                          <ul className="text-white/40 text-[10px] md:text-sm space-y-2 md:space-y-3 font-light">
                            <li className="flex items-center gap-2.5"><div className="w-1 h-1 rounded-full bg-orange-500/60"></div>Stable high-growth tech background.</li>
                            <li className="flex items-center gap-2.5"><div className="w-1 h-1 rounded-full bg-orange-500/60"></div>Excellent communication style.</li>
                            <li className="flex items-center gap-2.5"><div className="w-1 h-1 rounded-full bg-orange-500/60"></div>Problem-solving orientation.</li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-5">
                        <h4 className="text-base md:text-xl font-display font-bold text-white tracking-tight leading-tight">Join <span className="text-orange-400">{job.title}</span></h4>
                        <form className="space-y-3 md:space-y-4" onSubmit={handleApply}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            <input type="text" placeholder="Full Name" required className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-2.5 md:py-4 text-white text-xs md:text-sm outline-none focus:border-orange-500 transition-all font-light" />
                            <input type="email" placeholder="Email" required className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-2.5 md:py-4 text-white text-xs md:text-sm outline-none focus:border-orange-500 transition-all font-light" />
                          </div>
                          <input type="tel" placeholder="Phone" required className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-2.5 md:py-4 text-white text-xs md:text-sm outline-none focus:border-orange-500 transition-all font-light" />
                          
                          <label className="flex flex-col items-center justify-center p-3 md:p-6 border border-dashed border-white/10 rounded-lg md:rounded-2xl hover:border-orange-500/40 cursor-pointer transition-all bg-white/[0.01] group/file">
                            <Upload className="text-orange-500/60 mb-1.5 md:mb-2" size={18} />
                            <span className="text-[8px] md:text-[10px] text-white/30 font-black uppercase tracking-widest text-center">Resume (PDF)</span>
                            <input type="file" className="hidden" accept=".pdf" />
                          </label>

                          <button className="w-full py-3 md:py-4 bg-orange-600 text-white font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-lg md:rounded-xl hover:bg-orange-500 transition-all text-[10px] md:text-[11px] shadow-lg shadow-orange-600/10">
                            Submit Form
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
            <div className="w-16 h-16 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center mb-4 text-orange-500/30">
              <Search size={32} />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-1">No roles found</h3>
            <p className="text-white/30 text-[10px] max-w-xs mx-auto">
              We couldn't find any positions matching "{searchTerm}".
            </p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-6 text-orange-400 text-[8px] font-black uppercase tracking-[0.4em] hover:text-orange-300 transition-colors"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Jobs;
