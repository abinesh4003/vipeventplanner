import React from "react";
import Link from "next/link";

const CTA = ({
    heading = "Ready to Plan Your Perfect Event?",
    desc = "Let us bring your vision to life with our premium event planning services.",
    btn1 = "Book Now",
    btn2 = "View Services",
    btn1link = "/contact",
    btn2link = "/services"
}) => {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold)]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-dark)] mb-4 sm:mb-5 md:mb-6 leading-tight">
                    {heading}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[var(--color-dark)] opacity-90 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2">
                    {desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <Link
                        href={btn1link}
                        className="px-6 py-3 sm:px-8 sm:py-4 bg-[var(--color-dark)] text-[var(--color-gold-light)] font-semibold text-sm sm:text-base rounded-lg hover:bg-opacity-90 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    >
                        {btn1}
                    </Link>
                    <Link
                        href={btn2link}
                        className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-[var(--color-dark)] text-[var(--color-dark)] font-semibold text-sm sm:text-base rounded-lg hover:bg-[var(--color-dark)] hover:text-[var(--color-gold-light)] transition-all duration-300 w-full sm:w-auto"
                    >
                        {btn2}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;