import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Clock, Upload, Send, Search, X } from 'lucide-react';
import api from '../api/axios';
import SEO from '../components/SEO';

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApply, setShowApply] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Application form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    experience: ''
  });
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await api.get('/jobs');
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApply = async (e) => {
    e.preventDefault();
    try {
        const applyData = new FormData();
        applyData.append('jobId', selectedJob._id);
        applyData.append('fullName', formData.fullName);
        applyData.append('email', formData.email);
        applyData.append('phone', formData.phone);
        applyData.append('qualification', formData.qualification);
        applyData.append('experience', formData.experience);
        if (resume) {
            applyData.append('resume', resume);
        }

        await api.post('/applications', applyData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        alert('Application submitted successfully!');
        setSelectedJob(null);
        setShowApply(false);
        setFormData({ fullName: '', email: '', phone: '', qualification: '', experience: '' });
        setResume(null);
    } catch (error) {
        console.error('Error applying:', error);
        const message = error.response?.data?.message || 'Failed to submit application. Please try again.';
        alert(message);
    }
  };

  const toggleDetails = (job, apply) => {
    if (selectedJob?._id === job._id && showApply === apply) {
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
      <SEO 
        title="Careers & Latest Job Openings | Find Your Dream Job"
        description="Explore the latest job openings at Hirealize. Find career opportunities in sales, BFSI, corporate, and more. Apply now and take your next strategic career leap."
        keywords="job openings, careers, hirealize jobs, recruitment portal, apply for jobs, find work india"
        canonical="https://www.hirealize.in/jobs"
      />
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
            {jobs.length === 0 && !loading && <div className="text-white col-span-2 text-center py-10">No active jobs found.</div>}
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className={`p-5 md:p-8 rounded-[1.25rem] md:rounded-[2.5rem] transition-all duration-500 relative overflow-hidden group border ${selectedJob?._id === job._id
                    ? 'bg-white/[0.05] border-white/20 shadow-2xl shadow-black/50'
                    : 'bg-white/[0.02] border-white/10 hover:border-orange-500/30 hover:bg-white/[0.04]'
                  }`}
              >
                {/* Job Header */}
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4 md:mb-6 relative z-10">
                  <div className="space-y-0.5 md:space-y-1">
                    <h3 className={`text-lg md:text-3xl font-display font-bold transition-colors tracking-tight ${selectedJob?._id === job._id ? 'text-orange-400' : 'text-white group-hover:text-orange-300'}`}>
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
                    className={`flex-1 py-2.5 md:py-3.5 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${selectedJob?._id === job._id && !showApply
                        ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/20'
                        : 'bg-white/5 border-white/10 text-white/50 hover:border-orange-500 hover:text-orange-400'
                      }`}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => toggleDetails(job, true)}
                    className={`flex-1 py-2.5 md:py-3.5 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${selectedJob?._id === job._id && showApply
                        ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/20'
                        : 'bg-orange-500/10 border-orange-500/20 text-orange-400 hover:bg-orange-600 hover:text-white hover:shadow-orange-600/30'
                      }`}
                  >
                    Apply
                  </button>
                </div>

                {/* Expanded Content Inline */}
                {selectedJob?._id === job._id && (
                  <div className="mt-5 pt-5 md:mt-8 md:pt-8 border-t border-white/5 animate-fade-in relative z-10">
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="absolute top-1 right-0 p-2 text-white/10 hover:text-orange-400 transition-colors"
                    >
                      <X size={16} />
                    </button>

                    {!showApply ? (
                      <div className="space-y-5 md:space-y-8">
                        <p className="text-white/90 leading-relaxed font-medium text-[11px] md:text-sm italic border-l border-orange-500/50 pl-4 md:pl-6 py-1.5 bg-gradient-to-r from-orange-500/5 to-transparent">
                          "{job.description}"
                        </p>
                        <div className="space-y-2.5 md:space-y-4">
                          <p className="text-white/80 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Expectations</p>
                          <ul className="text-white text-[10px] md:text-sm space-y-2 md:space-y-3 font-medium list-none ml-2">
                            {job.expectations && job.expectations.map((exp, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/80 mt-1.5 flex-shrink-0"></div>
                                  <span className="leading-relaxed">{exp}</span>
                                </li>
                            ))}
                            {(!job.expectations || job.expectations.length === 0) && (
                                <li className="flex items-start gap-2.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/80 mt-1.5 flex-shrink-0"></div>
                                  <span className="leading-relaxed">Detailed expectations will be shared during interview.</span>
                                </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-5">
                        <h4 className="text-base md:text-xl font-display font-bold text-white tracking-tight leading-tight">Join <span className="text-orange-400">{job.title}</span></h4>
                        <form className="space-y-3 md:space-y-4" onSubmit={handleApply}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" required className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-2.5 md:py-4 text-white text-xs md:text-sm outline-none focus:border-orange-500 transition-all font-light" />
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required className="w-full bg-white/[0.03] border border-white/5 rounded-lg px-4 md:px-5 py-2.5 md:py-4 text-white text-xs md:text-sm outline-none focus:border-orange-500 transition-all font-light" />
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" required className="col-span-1 sm:col-span-1 border border-white/5 w-full bg-white/[0.03] rounded-lg px-4 md:px-5 py-2.5 md:py-4 text-white text-xs md:text-sm outline-none focus:border-orange-500 transition-all font-light" />
                            <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} placeholder="Highest Qualification" required className="border border-white/5 col-span-1 sm:col-span-1 w-full bg-white/[0.03] rounded-lg px-4 md:px-5 py-2.5 md:py-4 text-white text-xs md:text-sm outline-none focus:border-orange-500 transition-all font-light" />
                            <input type="text" name="experience" value={formData.experience} onChange={handleInputChange} placeholder="Experience (e.g. 2 Yrs, Fresher)" required className="border border-white/5 col-span-1 sm:col-span-1 w-full bg-white/[0.03] rounded-lg px-4 md:px-5 py-2.5 md:py-4 text-white text-xs md:text-sm outline-none focus:border-orange-500 transition-all font-light" />
                          </div>

                          <label className="flex flex-col items-center justify-center p-3 md:p-6 border border-dashed border-white/10 rounded-lg md:rounded-2xl hover:border-orange-500/40 cursor-pointer transition-all bg-white/[0.01] group/file relative">
                            <Upload className="text-orange-500/60 mb-1.5 md:mb-2" size={18} />
                            <span className="text-[8px] md:text-[10px] text-white/30 font-black uppercase tracking-widest text-center">{resume ? resume.name : 'Resume (PDF)'}</span>
                            <input type="file" className="hidden" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
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
