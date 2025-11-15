

'use client';
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CTA from "../components/cta";
import Image from "next/image";
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
import Slider from "react-slick";
import Link from "next/link";

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

  const images = [
    {
      url: "/about/planners.jpg",
      heading: "Best Event Planners In Nagercoil",
      desc: "Plan your dream event with us and let us take care of the rest. We have a team of experienced event planners who will help you plan your event from start to finish."
    }, // Event planners working
    {
      url: "/about/stage.jpg",
      heading: "Best Event Decorators In Nagercoil",
      desc: "Decorate your event with us and let us take care of the rest. We have a team of experienced event decorators who will help you decorate your event from start to finish."
    }, // Event setup
    {
      url: "/about/catering.jpg",
      heading: "Best Caterering Service In Nagercoil",
      desc: "Cater for your event with us and let us take care of the rest. We are the best specialized catering services for weddings, corporate events, and all celebrations across Kanyakumari district."
    }, // Team planning meeting
    {
      url: "/about/stalls.jpg"
      , heading: "Best Stalls and Desert Services In Nagercoil",
      desc: "Get you favourite stalls and desert services with us and let us take care of the rest. we have all caregory of stalls and desert services for weddings, corporate events, and all celebrations across Kanyakumari district."
    }, // Wedding planning // Corporate event
    {
      url: "/about/photo.jpg",
      heading: "Best Wedding Photography In Nagercoil",
      desc: "Plan your dream event with us and let us take care of the rest. we have the experienced team of wedding photographers to make your event more memorable."
    }, // Event coordination
    {
      url: "/about/dj.jpg",
      heading: "Best Music anad DJ Services In Nagercoil",
      desc: "Our team of experienced DJs and music planners will help you plan your event from start to finish. Get the best music and DJ services for weddings, corporate events, and all celebrations across Kanyakumari district."
    }, // Concert/entertainment event
    {
      url: "/about/reviews.jpg",
      heading: "Top Rated Google Reviews In Nagercoil",
      desc: "we are the 100% client satisfied and top rated google reviews in Nagercoil. we are the best event planners in Nagercoil."
    }  // Professional team portrait
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

  const aboutSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* About Page Hero - Bright & Elegant */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold)]"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.4),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(212,175,55,0.2)_50%,transparent_100%)]"></div>
        </div>



        {/* Hero Content */}
        <div className="relative z-10 text-center text-[var(--color-dark)] px-4 max-w-4xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/40 border border-[var(--color-dark)]/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
            >
              <Crown className="w-4 h-4 text-[var(--color-dark)]" />
              <span className="text-xs md:text-sm text-[var(--color-dark)] font-medium">Who We Are</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 25 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About <span className="text-[var(--color-dark)]">V.I.P Function Planners</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[var(--color-dark)]/80 font-light max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 25 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Celebrating life’s finest moments with creativity, care, and golden perfection.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link
                href="/contact"
                className="bg-[var(--color-dark)] text-white px-6 py-3 rounded-full font-medium hover:bg-[var(--color-dark)]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Quote
              </Link>
              <Link
                href="/testimonials"
                className="bg-white/20 text-[var(--color-dark)] px-6 py-3 rounded-full font-medium border border-[var(--color-dark)]/30 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                Our Happy Clients
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-[var(--color-dark)]/70"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-dark)]" />
                <span>500+ Events</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-dark)]" />
                <span>12+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-dark)]" />
                <span>Premium Quality</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🌟 Our Story - Elegant & Responsive */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background Accent Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.08),transparent_60%)]"></div>

        <div className="container mx-auto md:px-4 relative z-10">
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
            {/* Image - Full width on mobile, half on desktop */}
            <motion.div
              style={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 -mx-4 md:mx-0"
            >
              <div className="md:rounded-3xl overflow-hidden shadow-2xl md:border-4 border-white">
                <Slider {...aboutSliderSettings}>
                  {images.map((src, index) => (
                    <div key={index} className="relative w-full h-[320px] md:h-[480px]">
                      <Image
                        src={src.url}
                        alt={`Event ${index + 1}`}
                        fill
                        className="object-fill"
                        priority
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" /> */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 z-10 text-white p-6"
                        style={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <h3 className="text-xl md:text-3xl font-bold mb-2 drop-shadow-lg">{src.heading}</h3>
                        <p className="text-sm md:text-base text-white/90 drop-shadow-md">{src.desc}</p>
                      </motion.div>
                    </div>
                  ))}
                </Slider>
              </div>
            </motion.div>

            {/* Text - Below on mobile, right on desktop */}
            <motion.div
              style={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <motion.p
                className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4"
                style={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Since 2010, <strong className="text-[#d4af37]">V.I.P Function Planners</strong> has
                transformed ordinary events into extraordinary experiences across
                Nagercoil and beyond.
              </motion.p>
              <motion.p
                className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4"
                style={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                What began as a dream to craft meaningful celebrations has evolved
                into a legacy of creativity, precision, and unforgettable elegance.
              </motion.p>
              <motion.p
                className="text-gray-600 text-sm sm:text-base leading-relaxed"
                style={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Every event we design reflects our belief — that every moment deserves
                perfection, emotion, and timeless beauty.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🌟 Our Motive */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-[#d4af37]">Motive</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6 text-center">
          At <span className="font-semibold text-[#d4af37]">V.I.P Function Planners</span>,
          our purpose is simple — to transform every occasion into a timeless experience.
          We believe every celebration deserves perfection, elegance, and a personal touch
          that makes it unforgettable.
        </p>

        {/* Our Commitment */}
        <div className="max-w-3xl mx-auto mt-8 bg-gradient-to-br from-[#fffaf2] to-white rounded-2xl p-8 border border-[#f5e6c2] shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#d4af37]">Commitment</span> to You
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We respect your investment and will deliver our best, worthwhile and quality service for all events.
            Whether it's a simple function or a grand celebration, our commitment remains unchanged.
            Trust us — we'll be with you forever in your memories.
          </p>
        </div>
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
      <CTA text="Ready to Plan Your Perfect Event?" desc="Let us bring your vision to life with our Best event planning services" btn1="Book Now" btn2="View Testimonials" btn1link="/contact" btn2link="/testimonials" />
    </div>
  );
};

export default AboutPage;