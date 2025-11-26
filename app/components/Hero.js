'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

const VipEventManagementHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const headlines = [
        { 
            text: "Best Events & Wedding", 
            highlight: "Management in Nagercoil",
            tagline: "Creating unforgettable celebrations with elegance and perfection."
        },
        { 
            text: "Best Catering", 
            highlight: "Service in Nagercoil",
            tagline: "Delicious cuisine crafted with passion and served with excellence."
        },
        { 
            text: "Best Stage", 
            highlight: "Decorators in Nagercoil",
            tagline: "Transforming venues into breathtaking masterpieces of beauty."
        },
        { 
            text: "Best Photography &", 
            highlight: "Videography in Nagercoil",
            tagline: "Capturing your precious moments in timeless frames forever."
        },
        { 
            text: "Best DJ & Music", 
            highlight: "Services in Nagercoil",
            tagline: "Setting the perfect mood with electrifying beats and melodies."
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % headlines.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="relative h-screen flex flex-col justify-between overflow-hidden pt-16 bg-gold-light">
            {/* Video Background with Parallax */}
            <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/herobg.jpg"
                    className="w-full h-full object-fill"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Cinematic Vignette Overlay */}
            {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-transparent to-black/80"></div> */}
            <div className="absolute inset-0 z-10" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
            }}></div>

            {/* Top Content - Logo & Heading */}
            <div className="relative z-20 w-full px-6 sm:px-8 md:px-12 pt-8 sm:pt-12">
                <div className="max-w-6xl mx-auto text-center space-y-4">
                    {/* Logo with Glow */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 blur-2xl bg-gold/30 rounded-full"></div>
                            <img
                                src="logo2.png"
                                alt="VIP Event Management Logo"
                                className="relative w-24 sm:w-32 md:w-36 drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Brand Name */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{duration:0.6}}
                    >
                        <p className="text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] text-white/90 font-light flex items-center justify-center gap-2">
                            <Sparkles className="text-gold" size={18} />
                            V.I.P Event Management
                            <Sparkles className="text-gold" size={18} />
                        </p>
                    </motion.div>

                    {/* SEO H1 - Hidden but readable by search engines */}
                    <h1 className="sr-only">
                        Best Events & Wedding Management, Catering Service, Stage Decorators, Photography & Videography, DJ & Music Services in Nagercoil
                    </h1>

                    {/* Visual Heading with Sliding Text */}
                    <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gold-light drop-shadow-2xl px-4 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center justify-center" aria-hidden="true">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                {headlines[currentIndex].text}<br className="hidden sm:block" />{' '}
                                <span className="text-white inline-block">
                                    {headlines[currentIndex].highlight}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Tagline with Sliding Text */}
                    <div className="text-lg sm:text-xl md:text-2xl italic font-light text-white/70 drop-shadow-lg px-4 min-h-[60px] sm:min-h-[70px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                "{headlines[currentIndex].tagline}"
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Bottom Content - CTA Buttons */}
            <div className="relative z-20 w-full px-6 sm:px-8 md:px-12 pb-12 sm:pb-16">
                <div className="max-w-6xl mx-auto text-center space-y-6">
                    {/* Divider Line */}
                    <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>

                    {/* CTA Buttons */}
                    <div className="flex flex-row gap-3 justify-center items-center flex-wrap">
                        <Link href="/contact" className="inline-block">
                            <motion.button 
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-6 py-3 border-2 border-gold text-gold bg-black/40 backdrop-blur-md hover:bg-gold hover:text-black transition-all duration-500 font-bold text-sm sm:text-base flex items-center gap-2 shadow-2xl overflow-hidden whitespace-nowrap"
                            >
                                <span className="relative z-10">PLAN YOUR EVENT</span>
                                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
                                <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            </motion.button>
                        </Link>
                        <Link href="tel:8778304145" className="inline-block">
                            <motion.button 
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.4)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-white/20 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-black transition-all duration-500 font-bold text-sm sm:text-base flex items-center gap-2 shadow-2xl whitespace-nowrap"
                            >
                                <Phone size={18} />
                                CALL NOW
                            </motion.button>
                        </Link>
                    </div>

                    {/* Bottom Info */}
                    <div className="text-white/60 text-sm">
                        <p>⭐ 500+ Events | 15+ Years | 100% Satisfaction</p>
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        </div>
    );
};

export default VipEventManagementHero;
