import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Process', path: '/process' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#020617]/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 relative">

           {/* Branded Logo: Independent from Navbar Height */}
           <Link to="/" className="absolute left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 transition-all duration-500 hover:scale-[1.02]">
             <div className="bg-white p-3 rounded-2xl shadow-2xl shadow-white/10 flex items-center justify-center transition-transform shrink-0">
               <img
                 src="/logo.png"
                 alt="Hirealize"
                 className="h-12 md:h-16 w-auto object-contain"
               />
             </div>
           </Link>

           {/* Spacer to prevent menu overlap */}
           <div className="w-48 lg:w-64 shrink-0 pointer-events-none"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 group ${location.pathname === link.path ? 'text-orange-400' : 'text-white hover:text-orange-300'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-orange-500 rounded-full transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="group relative px-6 py-2.5 bg-orange-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/20"
            >
              <span className="relative z-10">Hire Now</span>
              <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#020617]/98 backdrop-blur-2xl border-b border-white/5 py-8 px-6 space-y-5 flex flex-col items-center animate-fade-in-up">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'text-orange-400' : 'text-white hover:text-orange-300'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="group relative w-full text-center px-6 py-4 bg-orange-600 text-white font-black uppercase tracking-widest rounded-xl overflow-hidden shadow-xl shadow-orange-600/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            <span className="relative z-10">Hire Now</span>
            <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
