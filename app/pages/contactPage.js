'use client';
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Crown, CheckCircle } from "lucide-react";

import ContactSection from "../components/Contact"; // adjust path as needed
import Link from "next/link";

const ContactPage = () => {
  useEffect(()=>{
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  },[])
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-[#d4af37]" />,
      title: "Call Us",
      desc: "Talk directly with our event expert",
      value: "+91 8778304145",
      link: "tel:+918778304145",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#d4af37]" />,
      title: "WhatsApp",
      desc: "Instant chat & quick quotes",
      value: "+91 8778304145",
      link: "https://wa.me/918778304145",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#d4af37]" />,
      title: "Email Us",
      desc: "For detailed event proposals",
      value: "vipfunctionplanners@gmail.com",
      link: "mailto:vipfunctionplanners@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#d4af37]" />,
      title: "Visit Us",
      desc: "Nagercoil, Tamil Nadu — Serving Kanyakumari District",
      value: "Get Directions",
      link: "https://maps.app.goo.gl/BpAtn8LuAQ6LYMXc6",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fff9ef] to-white text-gray-800">
      
      {/* ✨ Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold)]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.4),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(212,175,55,0.2)_50%,transparent_100%)]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-[var(--color-dark)] px-4 max-w-4xl mx-auto py-16">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 
                          rounded-full px-4 py-2 mb-5 backdrop-blur-sm">
            <Crown className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#b9971f] font-medium">Let’s Connect</span>
          </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Reach <span className="text-[var(--color-dark)]">VIP Function Planners</span>
            </h1>

          <p className="text-lg sm:text-xl mb-6 text-gray-600 font-light leading-relaxed">
            We’re here to turn your special moments into golden memories.  
            Whether it's a wedding, corporate event, or celebration — connect with us today.
          </p>
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="tel:+918778304145"
              className="bg-[var(--color-dark)] text-white px-6 py-3 rounded-full font-medium hover:bg-[var(--color-dark)]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call Now
            </a>
            <Link
              href="/gallery"
              className="bg-white/20 text-[var(--color-dark)] px-6 py-3 rounded-full font-medium border border-[var(--color-dark)]/30 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              View Gallery
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-[var(--color-dark)]/70"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[var(--color-dark)]" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[var(--color-dark)]" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[var(--color-dark)]" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </section>

      {/* 📞 Contact Options */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Contact <span className="text-[#d4af37]">Our Team</span>
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Reach us through your preferred method below — we respond quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <Link
                  href={c.link}
                  className="bg-gradient-to-br from-[#fffaf2] to-white rounded-2xl border border-[#f5e6c2] p-6 
                             flex flex-col items-start h-full block"
                >
                  <div className="mb-3">{c.icon}</div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{c.desc}</p>
                  <span className="text-[#d4af37] font-medium text-sm">{c.value}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📝 Contact Form */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-[#fffaf2] via-white to-[#fffaf2]">
        <div className=" mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Send Us a <span className="text-[#d4af37]">Message</span>
          </motion.h2>

          <ContactSection />
        </div>


        {/* Our Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 text-center bg-white rounded-2xl p-8 shadow-sm border border-[#f5e6c2]"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#d4af37]">Commitment</span> to You
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            We respect your investment and will deliver our best, worthwhile and quality service for all events. 
            Whether it's a simple function or a grand celebration, our commitment remains unchanged. 
            Trust us — we'll be with you forever in your memories.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
