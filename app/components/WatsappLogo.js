'use client';
import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function WatsappLogo() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openWhatsApp = () => {
        const message = "Hello V.I.P Function Planners! I'm interested in your event planning services.";
        const whatsappUrl = `https://wa.me/918778304145?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3">
            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="bg-[var(--color-gold)] hover:bg-[var(--color-gold)]/90 text-[var(--color-dark)] p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
            )}
            
            {/* WhatsApp Button */}
            <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-[wiggle_1s_ease-in-out_infinite]"
                aria-label="Contact us on WhatsApp"
            >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
        </div>
    );
}