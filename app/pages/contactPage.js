'use client';
import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Crown } from "lucide-react";
import ContactSection from "../components/Contact"; // adjust path as needed

const ContactPage = () => {
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
      <section className="py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 
                          rounded-full px-4 py-2 mb-5 backdrop-blur-sm">
            <Crown className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#b9971f] font-medium">Let’s Connect</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-gray-900">
            Reach <span className="text-[#d4af37]">VIP Function Planners</span>
          </h1>

          <p className="text-lg sm:text-xl mb-6 text-gray-600 font-light leading-relaxed">
            We’re here to turn your special moments into golden memories.  
            Whether it's a wedding, corporate event, or celebration — connect with us today.
          </p>
        </motion.div>
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
              <motion.a
                key={i}
                href={c.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#fffaf2] to-white rounded-2xl border border-[#f5e6c2] p-6 
                           hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                <div className="mb-3">{c.icon}</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{c.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{c.desc}</p>
                <span className="text-[#d4af37] font-medium text-sm">{c.value}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 📝 Contact Form */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#fffaf2] via-white to-[#fffaf2]">
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
      </section>
    </div>
  );
};

export default ContactPage;
