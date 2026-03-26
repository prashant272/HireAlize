import React, { useState, useEffect } from 'react';
import { Briefcase, FileText, Plus, Edit2, Trash2, X, Check, Search, Filter, Mail, Users, Menu, LogOut, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs' or 'applications'
  
  // Jobs State
  const [jobs, setJobs] = useState([]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [jobForm, setJobForm] = useState({ title: '', location: '', type: 'Full-time', salary: '', description: '', expectations: '' });
  
  // Applications State
  const [applications, setApplications] = useState([]);
  const [sortParam, setSortParam] = useState('newest');
  const [viewingApp, setViewingApp] = useState(null);

  // Contacts & Subscribers State
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [viewingContact, setViewingContact] = useState(null);

  useEffect(() => {
    fetchJobs();
    fetchApplications();
    fetchContacts();
    fetchSubscribers();
  }, []);

  useEffect(() => {
    fetchApplications();
  }, [sortParam]);

  const fetchJobs = async () => {
    try {
      const { data } = await api.get('/jobs');
      setJobs(data);
    } catch (err) { console.error('Error fetching jobs:', err); }
  };

  const fetchApplications = async () => {
    try {
      const query = sortParam === 'status' ? '?sort=status' : (sortParam === 'oldest' ? '?sort=oldest' : '');
      const { data } = await api.get(`/applications${query}`);
      setApplications(data);
    } catch (err) { console.error('Error fetching applications:', err); }
  };

  const fetchContacts = async () => {
    try {
      const { data } = await api.get('/contacts');
      setContacts(data);
    } catch (err) { console.error('Error fetching contacts:', err); }
  };

  const fetchSubscribers = async () => {
    try {
      const { data } = await api.get('/subscribers');
      setSubscribers(data);
    } catch (err) { console.error('Error fetching subscribers:', err); }
  };

  // ---- Job Handlers ----
  const handleJobSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...jobForm, expectations: jobForm.expectations.split('\n').filter(e => e.trim() !== '') };
      if (editingJob) {
        await api.put(`/jobs/${editingJob._id}`, payload);
      } else {
        await api.post('/jobs', payload);
      }
      setShowJobForm(false);
      setEditingJob(null);
      setJobForm({ title: '', location: '', type: 'Full-time', salary: '', description: '', expectations: '' });
      fetchJobs();
    } catch (err) {
      console.error('Error saving job:', err);
      alert('Failed to save job');
    }
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setJobForm({
      title: job.title,
      location: job.location,
      type: job.type,
      salary: job.salary,
      description: job.description,
      expectations: job.expectations ? job.expectations.join('\n') : ''
    });
    setShowJobForm(true);
  };

  const handleDeleteJob = async (id) => {
    if(!window.confirm('Are you sure you want to delete this job?')) return;
    try {
      await api.delete(`/jobs/${id}`);
      fetchJobs();
    } catch (err) {
      console.error('Error deleting job:', err);
      alert('Failed to delete job');
    }
  };

  // ---- Application Handlers ----
  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.put(`/applications/${id}`, { status: newStatus });
      fetchApplications();
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update status');
    }
  };

  const handleDeleteApplication = async (id) => {
    if(!window.confirm('Are you sure you want to delete this application?')) return;
    try {
      await api.delete(`/applications/${id}`);
      fetchApplications();
    } catch (err) {
      console.error('Error deleting application:', err);
      alert('Failed to delete application');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const navItems = [
    { id: 'jobs', label: 'Manage Jobs', icon: Briefcase },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'contacts', label: 'Contact Forms', icon: Users },
    { id: 'subscribers', label: 'Subscribers', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white flex font-inter">
      
      {/* Mobile Sidebar Toggle Header (Sticky) */}
      <div className="md:hidden fixed top-0 left-0 w-full z-40 bg-[#020617] border-b border-white/10 p-4 flex justify-between items-center h-16">
        <h1 className="text-lg font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white">Admin Command Center</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-colors">
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>  
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-[#020617]/80 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed top-0 left-0 h-screen w-64 bg-[#020617] border-r border-white/10 p-6 z-50 transform transition-transform duration-300 flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} overflow-y-auto pt-20 md:pt-6`}>
        <h1 className="hidden md:block text-2xl font-display font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white">Command Center</h1>
        
        <nav className="flex-1 space-y-2">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <button 
                key={item.id}
                onClick={() => { setActiveTab(item.id); setIsSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === item.id ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
              >
                <Icon size={18} /> {item.label}
              </button>
            )
          })}
        </nav>

        <button onClick={handleLogout} className="mt-8 w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-colors font-bold text-sm">
          <LogOut size={18} /> Secure Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 w-full min-h-screen md:ml-64 pt-20 md:pt-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">


        {/* Jobs Section */}
        {activeTab === 'jobs' && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Active Jobs ({jobs.length})</h2>
              <button 
                onClick={() => { setEditingJob(null); setJobForm({ title: '', location: '', type: 'Full-time', salary: '', description: '', expectations: '' }); setShowJobForm(true); }}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-bold text-sm transition-colors"
              >
                <Plus size={16} /> Add New Job
              </button>
            </div>

            {showJobForm && (
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-8 relative">
                <button onClick={() => setShowJobForm(false)} className="absolute top-4 right-4 text-white/50 hover:text-white"><X size={20}/></button>
                <h3 className="text-xl font-bold mb-4">{editingJob ? 'Edit Job' : 'Create New Job'}</h3>
                <form onSubmit={handleJobSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Job Title" required value={jobForm.title} onChange={e => setJobForm({...jobForm, title: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-orange-500" />
                    <input type="text" placeholder="Location" required value={jobForm.location} onChange={e => setJobForm({...jobForm, location: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-orange-500" />
                    <select required value={jobForm.type} onChange={e => setJobForm({...jobForm, type: e.target.value})} className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-orange-500 text-white">
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Remote">Remote</option>
                    </select>
                    <input type="text" placeholder="Salary Range (e.g. ₹20L - ₹35L)" required value={jobForm.salary} onChange={e => setJobForm({...jobForm, salary: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-orange-500" />
                  </div>
                  <textarea placeholder="Job Description" required value={jobForm.description} onChange={e => setJobForm({...jobForm, description: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-orange-500 min-h-[100px]"></textarea>
                  <textarea placeholder="Expectations (One per line)" value={jobForm.expectations} onChange={e => setJobForm({...jobForm, expectations: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-orange-500 min-h-[100px]"></textarea>
                  
                  <button type="submit" className="px-8 py-3 bg-orange-600 rounded-lg font-bold hover:bg-orange-500 transition-colors">
                    {editingJob ? 'Save Changes' : 'Publish Job'}
                  </button>
                </form>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {jobs.map(job => (
                <div key={job._id} className="bg-white/5 border border-white/10 p-6 rounded-2xl relative group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-orange-400">{job.title}</h3>
                    <div className="flex gap-2">
                      <button onClick={() => handleEditJob(job)} className="p-1.5 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500 hover:text-white transition-colors"><Edit2 size={14}/></button>
                      <button onClick={() => handleDeleteJob(job._id)} className="p-1.5 bg-red-500/20 text-red-400 rounded hover:bg-red-500 hover:text-white transition-colors"><Trash2 size={14}/></button>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{job.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-white/40">
                    <span className="px-2 py-1 bg-white/5 rounded">{job.location}</span>
                    <span className="px-2 py-1 bg-white/5 rounded">{job.type}</span>
                    <span className="px-2 py-1 bg-white/5 rounded font-bold text-white/70">{job.salary}</span>
                  </div>
                </div>
              ))}
              {jobs.length === 0 && <p className="text-white/50">No jobs found. Create one above.</p>}
            </div>
          </div>
        )}

        {/* Applications Section */}
        {activeTab === 'applications' && (
          <div className="animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold">Candidate Applications ({applications.length})</h2>
              
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <Filter size={16} className="text-orange-400" />
                <span className="text-sm text-white/60">Sort by:</span>
                <select 
                  value={sortParam} 
                  onChange={(e) => setSortParam(e.target.value)}
                  className="bg-transparent text-white text-sm outline-none font-bold"
                >
                  <option value="newest" className="bg-dark-900">Newest First</option>
                  <option value="oldest" className="bg-dark-900">Oldest First</option>
                  <option value="status" className="bg-dark-900">Status</option>
                </select>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10 text-white/60 uppercase text-xs">
                  <tr>
                    <th className="px-6 py-4 font-bold">Candidate</th>
                    <th className="px-6 py-4 font-bold">Applied Role</th>
                    <th className="px-6 py-4 font-bold">Contact</th>
                    <th className="px-6 py-4 font-bold">Date</th>
                    <th className="px-6 py-4 font-bold text-center">Status</th>
                    <th className="px-6 py-4 font-bold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {applications.map(app => (
                    <tr key={app._id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold">{app.fullName}</div>
                        {app.resumeUrl ? (
                          <a 
                            href={app.resumeUrl.startsWith('http') ? app.resumeUrl : `${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}/${app.resumeUrl}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-400 hover:text-blue-300 transition-colors text-xs mt-1 underline decoration-blue-400/30"
                          >
                            View Resume
                          </a>
                        ) : (
                          <div className="text-white/40 text-xs mt-1">No Resume</div>
                        )}
                      </td>
                      <td className="px-6 py-4 font-medium text-orange-400">
                        {app.jobId ? app.jobId.title : <span className="text-orange-400 font-bold italic">General Application (Hero)</span>}
                      </td>
                      <td className="px-6 py-4">
                        <div>{app.email}</div>
                        <div className="text-white/40">{app.phone}</div>
                      </td>
                      <td className="px-6 py-4 text-white/50 text-xs">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 flex justify-center">
                        <select 
                          value={app.status}
                          onChange={(e) => handleStatusChange(app._id, e.target.value)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-full outline-none cursor-pointer appearance-none text-center ${
                            app.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30' :
                            app.status === 'Reviewed' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                            app.status === 'Hired' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            'bg-red-500/20 text-red-400 border border-red-500/30'
                          }`}
                        >
                          <option value="Pending" className="bg-dark-900 text-yellow-500">Pending</option>
                          <option value="Reviewed" className="bg-dark-900 text-blue-400">Reviewed</option>
                          <option value="Hired" className="bg-dark-900 text-green-400">Hired</option>
                          <option value="Rejected" className="bg-dark-900 text-red-400">Rejected</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 flex gap-2 justify-center">
                        <button 
                          onClick={() => setViewingApp(app)}
                          className="p-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <button 
                          onClick={() => handleDeleteApplication(app._id)}
                          className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                          title="Delete Application"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {applications.length === 0 && (
                    <tr>
                      <td colSpan="6" className="px-6 py-8 text-center text-white/50">No applications found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Contacts Section */}
        {activeTab === 'contacts' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Contact Form Submissions ({contacts.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contacts.map(contact => (
                <div key={contact._id} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-orange-400 mb-1">{contact.name}</h3>
                  <div className="text-white/60 text-sm mb-4">
                    <div>Email: {contact.email}</div>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${contact.type === 'Candidate' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-purple-500/10 text-purple-400 border-purple-500/20'}`}>
                          {contact.type || 'Employer'}
                        </span>
                        <span className="text-[10px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded-full border border-orange-500/20 font-bold uppercase tracking-wider">{contact.source || 'Contact Page'}</span>
                        <span className="text-xs text-white/40">{new Date(contact.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm bg-dark-900 p-3 rounded-lg border border-white/5 line-clamp-2 mb-4">{contact.message}</p>
                  
                  <div className="flex justify-end pt-2 border-t border-white/5">
                    <button 
                      onClick={() => setViewingContact(contact)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all text-xs font-bold uppercase tracking-wider"
                    >
                      <Eye size={14} /> Full View
                    </button>
                  </div>
                </div>
              ))}
              {contacts.length === 0 && <p className="text-white/50">No contact forms submitted yet.</p>}
            </div>
          </div>
        )}

        {/* Subscribers Section */}
        {activeTab === 'subscribers' && (
          <div className="animate-fade-in max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">Newsletter Subscribers ({subscribers.length})</h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10 text-white/60 uppercase text-xs">
                  <tr>
                    <th className="px-6 py-4 font-bold">Email Address</th>
                    <th className="px-6 py-4 font-bold text-right">Subscribed Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {subscribers.map(sub => (
                    <tr key={sub._id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium">{sub.email}</td>
                      <td className="px-6 py-4 text-white/50 text-right">{new Date(sub.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                  {subscribers.length === 0 && (
                    <tr>
                      <td colSpan="2" className="px-6 py-8 text-center text-white/50">No subscribers yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Application Details Modal */}
        {viewingApp && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setViewingApp(null)}></div>
            <div className="relative w-full max-w-2xl bg-[#020617] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <h3 className="text-xl font-bold text-white">Application Details</h3>
                <button onClick={() => setViewingApp(null)} className="text-white/50 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Candidate Name</div>
                    <div className="text-white font-medium">{viewingApp.fullName}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Applied Role</div>
                    <div className="text-orange-400 font-medium">
                      {viewingApp.jobId ? viewingApp.jobId.title : 'General Application'}
                    </div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Email Address</div>
                    <div className="text-white font-medium">{viewingApp.email}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Phone Number</div>
                    <div className="text-white font-medium">{viewingApp.phone}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Highest Qualification</div>
                    <div className="text-white font-medium">{viewingApp.qualification || 'N/A'}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Experience</div>
                    <div className="text-white font-medium">{viewingApp.experience || 'N/A'}</div>
                  </div>
                </div>
                
                {viewingApp.resumeUrl && (
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-3">Resume Document</div>
                    <a 
                      href={viewingApp.resumeUrl.startsWith('http') ? viewingApp.resumeUrl : `${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}/${viewingApp.resumeUrl}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-colors"
                    >
                      <FileText size={16} /> Open Resume PDF
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Contact Details Modal */}
        {viewingContact && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setViewingContact(null)}></div>
            <div className="relative w-full max-w-2xl bg-[#020617] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Mail size={20} className="text-orange-400" /> Message Details
                </h3>
                <button onClick={() => setViewingContact(null)} className="text-white/50 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Name</div>
                    <div className="text-white font-medium">{viewingContact.name}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Primary Intent</div>
                    <div className={`text-sm font-bold uppercase tracking-widest ${viewingContact.type === 'Candidate' ? 'text-blue-400' : 'text-purple-400'}`}>
                      {viewingContact.type || 'Employer'}
                    </div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Source</div>
                    <div className="text-orange-400 font-medium font-mono text-sm uppercase">
                      {viewingContact.source || 'Contact Page'}
                    </div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Email Address</div>
                    <div className="text-white font-medium">{viewingContact.email}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Phone Number</div>
                    <div className="text-white font-medium">{viewingContact.phone}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Date Submitted</div>
                    <div className="text-white font-medium">
                        {new Date(viewingContact.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>

                {viewingContact.resumeUrl && (
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-3">Professional Dossier (Resume)</div>
                    <a 
                      href={viewingContact.resumeUrl.startsWith('http') ? viewingContact.resumeUrl : `${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}/${viewingContact.resumeUrl}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-colors"
                    >
                      <FileText size={16} /> Open Resume PDF
                    </a>
                  </div>
                )}
                
                <div className="pt-4 border-t border-white/5">
                  <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-3">Message Content</div>
                  <div className="p-4 bg-dark-900 border border-white/5 rounded-xl text-white/90 whitespace-pre-wrap text-sm leading-relaxed">
                    {viewingContact.message}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
