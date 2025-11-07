'use client';
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Award,
  Users,
  Calendar,
  Star,
  Quote,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  ChevronRight,
  Sparkles,
  Crown,
  Target,
  Lightbulb,
  Shield,
  Zap,
  Clock,
  CheckCircle,
  MessageCircle,
  Trophy,
  Gem,
  Eye
} from 'lucide-react';

const AboutPage = () => {

  const featuresRef = useRef(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Only key team members
  const teamMembers = [
    {
      name: "Antony Shejino A",
      role: "Founder & CEO",
      experience: "12+ Years",
      specialty: "Event Vision & Strategy",
      image: "/ceo.jpg",
      description: "Visionary leader with a passion for creating unforgettable experiences. Leads the creative direction and ensures every event reflects our premium standards.",
      achievements: ["500+ Events", "12 Years Excellence", "Premium Quality"]
    }
  ];

  // Milestones timeline
    const milestones = [
      {
        year: "2010",
        event: "Founded V.I.P Function Planners with a dream to redefine celebrations.",
       
        highlight: false,
      },
      {
        year: "2015",
        event: "Expanded into destination weddings and luxury events across Tamil Nadu.",

        highlight: true,
      },
      {
        year: "2018",
        event: "Crossed 500+ successful events with 95% client satisfaction.",
          
        highlight: false,
      },
      {
        year: "2023",
        event: "Recognized as Nagercoil’s leading event management brand.",
          
        highlight: true,
      },
    ];

  // Achievement stats
  const achievements = [
    { icon: <Trophy className="w-6 h-6" />, number: "500+", text: "Successful Events" },
    { icon: <Heart className="w-6 h-6" />, number: "100%", text: "Client Satisfaction" },
    { icon: <Gem className="w-6 h-6" />, number: "12+", text: "Years Excellence" },
    { icon: <Eye className="w-6 h-6" />, number: "50K+", text: "Happy Guests" }
  ];
    const serviceAreas = [
    "Nagercoil City",
    "Kanyakumari District", 
    "Thuckalay",
    "Marthandam",
    "Kuzhithurai",
    "Colachel",
    "Padmanabhapuram",
    "Surrounding Areas"
  ];

   const features = [
    {
      icon: <Star className="text-gold" size={24} />,
      title: "Free Consultation",
      description: "Get expert advice and personalized quotes at no cost"
    },
    {
      icon: <Award className="text-gold" size={24} />,
      title: "12+ Years Experience",
      description: "Trusted event planning expertise since 2010"
    },
    {
      icon: <Users className="text-gold" size={24} />,
      title: "500+ Happy Clients",
      description: "Successfully delivered events across South India"
    },
    {
      icon: <Clock className="text-gold" size={24} />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for your events"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
{/* About Page Hero - Bright & Elegant */}
<section
  ref={heroRef}
  className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center px-5 py-16 
             bg-gradient-to-b from-[#fffaf0] via-white to-[#fff7e6] overflow-hidden"
>
  {/* Soft Golden Glow Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.25),transparent_70%)]"></div>
  </div>

  {/* Floating Subtle Gold Dots */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-[#d4af37]/40 rounded-full blur-[1px]"
        style={{
          left: `${(i * 12) % 100}%`,
          top: `${(i * 9) % 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [0.9, 1.2, 0.9],
        }}
        transition={{
          duration: 4 + (i % 2),
          repeat: Infinity,
          delay: i * 0.5,
        }}
      />
    ))}
  </div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-xl mx-auto">
    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/30 
                 rounded-full px-4 py-2 mb-5 backdrop-blur-sm"
    >
      <Crown className="w-4 h-4 text-[#d4af37]" />
      <span className="text-xs text-[#b9971f] font-medium">Who We Are</span>
    </motion.div>

    {/* Title */}
    <motion.h1
      className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3 leading-tight"
      initial={{ opacity: 0, y: 25 }}
      animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      About <span className="text-[#d4af37]">V.I.P Function Planners</span>
    </motion.h1>

    {/* Tagline */}
    <motion.p
      className="text-base sm:text-lg text-gray-700 font-light leading-relaxed mb-4"
      initial={{ opacity: 0, y: 25 }}
      animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      Celebrating life’s finest moments with creativity, care, and golden perfection.
    </motion.p>

    {/* Subtext */}
    <motion.p
      className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8"
      initial={{ opacity: 0, y: 25 }}
      animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      From weddings to grand corporate events, our journey since 2010 has been all about crafting
      joy-filled memories that last a lifetime.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="flex flex-col sm:flex-row gap-3 justify-center items-center"
    >
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#d4af37] text-white px-6 py-3 rounded-full font-semibold text-sm 
                   shadow-md hover:shadow-[#d4af37]/30 transition-all duration-300 w-full sm:w-auto"
      >
        Get in Touch
      </motion.a>

      <motion.a
        href="/services"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border border-[#d4af37] text-[#d4af37] px-6 py-3 rounded-full font-semibold text-sm 
                   hover:bg-[#d4af37] hover:text-white transition-all duration-300 w-full sm:w-auto"
      >
        Our Services
      </motion.a>
    </motion.div>
  </div>
</section>

 {/* 🌟 Our Story - Elegant & Responsive */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background Accent Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.08),transparent_60%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#d4af37]">Journey</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
              From a passionate vision to Nagercoil’s most trusted event planners
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/about.jpg"
                alt="Our Story"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                Since 2010, <strong className="text-[#d4af37]">V.I.P Function Planners</strong> has
                transformed ordinary events into extraordinary experiences across
                Nagercoil and beyond.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                What began as a dream to craft meaningful celebrations has evolved
                into a legacy of creativity, precision, and unforgettable elegance.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Every event we design reflects our belief — that every moment deserves
                perfection, emotion, and timeless beauty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

{/* 🌟 Our Motive */}
<section className="py-16 px-6 bg-white text-center">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
    Our <span className="text-[#d4af37]">Motive</span>
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
    At <span className="font-semibold text-[#d4af37]">V.I.P Function Planners</span>, 
    our purpose is simple — to transform every occasion into a timeless experience. 
    We believe every celebration deserves perfection, elegance, and a personal touch 
    that makes it unforgettable.
  </p>
</section>


      {/* Quick Stats - Mobile Friendly */}
      <section className="py-12 bg-white -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="text-[#d4af37] mb-2 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                <div className="text-xs text-gray-600 font-medium">{achievement.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-[#fffaf0] text-center">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
    What <span className="text-[#d4af37]">We Offer</span>
  </h2>
  
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {[
      { title: "Wedding Planning", desc: "Elegant, personalized weddings with flawless coordination." },
      { title: "Corporate Events", desc: "Professional events that reflect your brand’s excellence." },
      { title: "Birthday & Private Parties", desc: "Fun-filled, creative celebrations made effortless." },
      { title: "Decor & Design", desc: "Aesthetic themes with luxurious, eye-catching setups." },
      { title: "Entertainment & Catering", desc: "Music, food, and experience — everything in style." },
      { title: "Photography & Videography", desc: "Capture memories that last forever." },
    ].map((service, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -5 }}
        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <h3 className="text-lg font-semibold text-[#d4af37] mb-2">{service.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* 🌟 Our Commitment */}
<section 
className="py-14 px-6 text-center bg-white border-t border-gray-100">
  <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
    Whether it’s a grand wedding or an intimate gathering, 
    <span className="text-[#d4af37] font-medium">we’re here to craft your moments into memories</span>. 
    With a blend of passion and precision — we make every event shine.
  </p>
</section>


     

  

  {/* Service Areas Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gold/5 to-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#222] font-heading">
              Areas We <span className="text-gold">Serve</span>
            </h2>
            <p className="text-lg text-[#555] max-w-2xl mx-auto">
              Proudly serving Nagercoil and surrounding regions with premium event planning services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 text-center shadow-md border border-gold/20 hover:shadow-lg transition-shadow duration-300"
                >
                  <MapPin className="text-gold mx-auto mb-2" size={20} />
                  <span className="text-[#222] font-medium text-sm">{area}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gold/20"
            >
              <p className="text-lg text-[#222] font-semibold mb-2">
                ✨ Serving All of Kanyakumari District ✨
              </p>
              <p className="text-[#555]">
                We travel across the district to bring luxury event planning to your doorstep
              </p>
            </motion.div>
          </div>
        </div>
      </section>

   {/* Features Section */}
      <section ref={featuresRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#222] font-heading">
              Why Choose <span className="text-gold">V.I.P</span>?
            </h2>
            <p className="text-lg text-[#555] max-w-2xl mx-auto">
              Experience the difference of working with Nagercoil's premier event planners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent border border-gold/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gold/10 p-3 rounded-xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#222] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#555] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - Personal Touch */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Meet Our <span className="text-[#d4af37]">Founder</span>
            </h2>
            <p className="text-gray-300 text-sm">The visionary behind your perfect event</p>
          </motion.div>

          <div className="max-w-md mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Image with overlay */}
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-[#d4af37] text-white px-3 py-1 rounded-full text-xs font-bold">
                    Founder & CEO
                  </div>

                  {/* Name & Role */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-[#d4af37] text-sm">{member.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="flex justify-between mb-4">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[#d4af37] text-sm font-bold">{achievement}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Experience */}
                  <div className="bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#d4af37] font-medium">Experience</span>
                      <span className="text-white font-bold">{member.experience}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Mobile Optimized */}
      <section className="py-16 bg-gradient-to-r from-[#d4af37] to-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Create Magic?
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
              Let's transform your vision into an unforgettable experience. Contact us for a personalized consultation.
            </p>

            <div className="flex flex-col gap-3 max-w-xs mx-auto">
              <motion.a
                href="tel:+918778304145"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#d4af37] px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                Call +91 8778304145
              </motion.a>

              <motion.a
                href="https://wa.me/918778304145"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-[#d4af37] transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Now
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-white/80">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>500+ Events</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>12+ Years</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>Nagercoil Based</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;