import React from 'react';

const PartnerStrip = () => {
    const partners = [
        'Revolt Motors', 'DB Schenker', 'Godrej Consumers', 'Jindal Stainless',
        'Johnson Controls', 'Singhi & Co', 'Legrand India', 'Spacewood Furnishers',
        'Concentrix', 'Policy Bazar', 'Tele Performance'
    ];

    return (
        <section className="py-10 bg-[#020617] relative overflow-hidden border-y border-white/5">
            {/* Top Accent Gradient: Syncing with Orange Brand */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 md:mb-8 text-center">
                <p className="text-orange-400 text-[10px] sm:text-[11px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.5em] opacity-90 leading-relaxed px-4">
                    Strategically Scaling Global Businesses with an Elite Talent Ecosystem
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Scroll Wrapper 1 */}
                <div className="animate-marquee whitespace-nowrap flex items-center py-4">
                    {partners.map((partner, index) => (
                        <span
                            key={index}
                            className="mx-12 text-2xl md:text-3xl font-display font-black text-white hover:text-orange-400 transition-all duration-500 cursor-default tracking-tighter"
                        >
                            {partner}
                        </span>
                    ))}
                </div>

                {/* Scroll Wrapper 2 */}
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-4">
                    {partners.map((partner, index) => (
                        <span
                            key={index + partners.length}
                            className="mx-12 text-2xl md:text-3xl font-display font-black text-white hover:text-orange-400 transition-all duration-500 cursor-default tracking-tighter"
                        >
                            {partner}
                        </span>
                    ))}
                </div>

                {/* Glass Overlays for smooth edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default PartnerStrip;
