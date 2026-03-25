import React, { useState, useEffect } from 'react';
import { MessageCircle, Briefcase, FileText, ChevronUp } from "lucide-react";

const FloatingActions = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const actions = [
        {
            icon: <MessageCircle size={28} />,
            color: 'bg-[#25D366] text-white shadow-[#25D366]/20',
            link: 'https://wa.me/917982281621',
            label: 'Chat on WhatsApp',
            isExternal: true
        }
        // {
        //     icon: <Briefcase size={24} />,
        //     color: 'bg-gradient-to-br from-orange-600 to-orange-400 text-white shadow-orange-500/20',
        //     link: '/contact',
        //     label: 'Post a Job',
        //     isExternal: false
        // },
        // {
        //     icon: <FileText size={24} />,
        //     color: 'bg-[#020617] border border-orange-500/30 text-orange-400 backdrop-blur-md shadow-orange-500/10',
        //     link: '/jobs',
        //     label: 'Upload Resume',
        //     isExternal: false
        // }
    ];

    return (
        <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-4 z-50">
            {/* Scroll to Top */}
            <button
                onClick={scrollToTop}
                className={`w-12 h-12 bg-orange-500 text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 border border-white/10 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            >
                <ChevronUp size={24} />
            </button>

            {/* Other Actions */}
            {actions.map((action, index) => (
                <div key={index} className="group relative flex items-center">
                    {/* Tooltip */}
                    <span className="absolute right-full mr-4 px-4 py-2 bg-[#020617] border border-orange-500/30 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none backdrop-blur-xl shadow-2xl">
                        {action.label}
                    </span>

                    {/* Action Button */}
                    <a
                        href={action.link}
                        target={action.isExternal ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className={`w-14 h-14 ${action.color} flex items-center justify-center rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all duration-500 border border-white/5 hover:border-white/20`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {action.icon}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default FloatingActions;
