import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How does the hiring process work?",
      answer: "Our process includes understanding your requirement, sourcing relevant candidates, screening profiles, and coordinating interviews until final closure."
    },
    {
      question: "How do you ensure candidate quality?",
      answer: "We conduct initial screening and shortlist candidates based on role requirements before sharing profiles."
    },
    {
      question: "How long does it take to hire a candidate?",
      answer: "Depending on the role, we typically share relevant candidate profiles within 5–7 working days."
    },
    {
      question: "Do you charge candidates for placement?",
      answer: "No, we do not charge candidates at any stage. Our services are completely free for job seekers."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes, we work with startups and growing businesses, helping them build strong teams across key functions."
    },
    {
      question: "Do you provide contract staffing solutions?",
      answer: "Yes, we offer both permanent hiring and contract staffing solutions based on your business requirements."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in hiring for BFSI, sales & marketing, and corporate roles across various industries."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Sync */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-20 animate-fade-in-up">
          <p className="text-orange-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] mb-4 md:mb-6 bg-orange-400/10 px-4 py-2 rounded-full inline-block border border-orange-400/20">Knowledge Base</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent italic inline-block pb-1 pr-2">Questions</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg font-light tracking-widest mt-4 md:mb-8 max-w-3xl mx-auto">Everything you need to know about our hiring process</p>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group animate-fade-in-up rounded-[2rem] transition-all duration-700 overflow-hidden border ${activeIndex === index
                  ? 'bg-orange-500/5 border-orange-500/30 shadow-2xl shadow-orange-500/5'
                  : 'bg-white/[0.03] border-white/5 hover:border-white/20'
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                className="w-full p-8 md:px-12 flex items-center justify-between text-left transition-all duration-500"
              >
                <div className="flex items-center space-x-8">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${activeIndex === index 
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 rotate-12' 
                      : 'bg-white/5 text-orange-400 group-hover:bg-white/10 group-hover:rotate-6'
                    }`}>
                    <HelpCircle size={18} />
                  </div>
                  <span className={`text-lg md:text-xl font-semibold transition-all duration-500 ${activeIndex === index ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`p-2 rounded-lg transition-all duration-500 ${activeIndex === index ? 'bg-orange-500/20 text-orange-400' : 'text-white/20'}`}>
                  {activeIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>

              <div className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeIndex === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-12 md:pl-30 md:pr-12 pb-10 pt-0">
                  <div className="h-px w-full bg-white/5 mb-8"></div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-normal opacity-90 max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
