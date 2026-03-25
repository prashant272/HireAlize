import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Process', path: '/process' },
    { name: 'Job Openings', path: '/jobs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: '#', color: 'text-[#0077b5] border-[#0077b5]/30 bg-[#0077b5]/5 hover:bg-[#0077b5] hover:text-white' },
    { Icon: Twitter, href: '#', color: 'text-white border-white/30 bg-white/5 hover:bg-white hover:text-black' },
    { Icon: Facebook, href: '#', color: 'text-[#1877F2] border-[#1877F2]/30 bg-[#1877F2]/5 hover:bg-[#1877F2] hover:text-white' },
    { Icon: Instagram, href: '#', color: 'text-[#E4405F] border-[#E4405F]/30 bg-[#E4405F]/5 hover:bg-[#E4405F] hover:text-white' },
  ];

  const contactItems = [
    {
      icon: MapPin,
      label: 'Our Office',
      text: 'Kibu Coworkings, First Floor, D-65, Udyog Vihar Phase V, Sector-19, Gurugram, Haryana 122016',
    },
    {
      icon: Phone,
      label: 'Call Us',
      text: '+91 79822 81621',
      href: 'tel:+917982281621',
    },
    {
      icon: Mail,
      label: 'Mail Us',
      text: 'hirealize@outlook.in',
      href: 'mailto:hirealize@outlook.in',
    },
  ];

  return (
    <footer className="bg-[#020617] pt-20 pb-12 relative overflow-hidden border-t border-white/5 font-inter">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">

          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-flex items-center group">
              <div className="bg-white p-3 rounded-2xl shadow-xl shadow-white/5 transition-all duration-500 group-hover:scale-105">
                <img src="/logo.png" alt="Hirealize" className="h-14 w-auto object-contain" />
              </div>
              <div className="ml-5">
                <h2 className="text-white text-3xl font-bold tracking-tight mb-1">Hirealize</h2>
                <p className="text-orange-400 text-[10px] font-black uppercase tracking-[0.4em]">Consultants</p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed font-normal max-w-sm">
              Defining the future of talent acquisition through sophisticated strategy, global reach, and unparalleled expertise in executive search.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-500 ${social.color}`}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white text-[11px] font-black uppercase tracking-[0.5em] opacity-50">Explore</h4>
            <ul className="space-y-4">
              {navLinks.map((link, lIdx) => (
                <li key={lIdx}>
                  <Link to={link.path} className="text-white/70 text-sm font-medium hover:text-orange-400 transition-all duration-300 flex items-center group">
                    <ChevronRight size={13} className="mr-2 text-orange-500/40 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-6 space-y-8">
            <h4 className="text-white text-[11px] font-black uppercase tracking-[0.5em] opacity-50">Connect</h4>
            <ul className="space-y-6">
              {contactItems.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 transition-all duration-500 group-hover:bg-orange-500/20 group-hover:border-orange-500/40 group-hover:scale-110 shrink-0 mt-0.5">
                    <item.icon size={17} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-orange-400/70 font-black mb-1">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="block text-white text-sm font-medium leading-relaxed hover:text-orange-400 transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="block text-white text-sm font-medium leading-relaxed">{item.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 text-center">
          <p className="text-white font-bold text-[11px] uppercase tracking-[0.4em]">
            &copy; {currentYear} Hirealize Consultants. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
