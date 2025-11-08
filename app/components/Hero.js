'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 6 + Math.random() * 4,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center min-h-[calc(100vh-4rem)] pt-16 text-center overflow-hidden bg-gradient-to-b from-[#f9f9f9] via-white to-[#fdfdfd] px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-8"
    >
      {/* ✅ Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero1.mp4" type="video/mp4" />
      </video>

      {/* Subtle overlay for readability */}
      {/* <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" /> */}

      {/* Subtle golden glow background */}
      {/* <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent pointer-events-none" /> */}

      {/* Floating gold particles */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold/50 rounded-full"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}

        className="relative z-10 mb-6 sm:mb-8"
      >
        <div className="bg-gray-100 overflow-hidden backdrop-blur-md border border-gold/30 rounded-full p-4 sm:p-5 shadow-[0_0_25px_rgba(212,175,55,0.25)]">
          <Image
            src="/logo.png"
            alt="VIP Function Planners Logo"
            width={140}
            height={140}
            className="object-contain w-[110px] sm:w-[140px] md:w-[160px]"
          />
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] font-bold leading-snug sm:leading-tight max-w-4xl z-10"
      >
        <span className="text-gold">V.I.P</span> Function Planners
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-body text-base sm:text-lg md:text-xl text-[#3a3a3a] mt-3 sm:mt-4 md:mt-6 max-w-2xl z-10"
      >
        Best Events & Wedding Management in Nagercoil
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="italic text-gold font-medium text-sm sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-4 z-10"
      >
        “Turning every moment into a golden memory.”
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-8 sm:mt-10 md:mt-12 z-10"
      >
        <Link href="/contact">
          <button
            className="px-8 py-3 sm:px-10 sm:py-4 rounded-full font-heading font-semibold text-base sm:text-lg bg-gold text-[#1a1a1a] hover:brightness-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300"
          >
            Plan Your Event
          </button>
        </Link>

        <Link href="/services">

          <button
            className="px-8 py-3 sm:px-10 sm:py-4 rounded-full font-heading font-semibold text-base sm:text-lg border-2 border-gold text-[#1a1a1a] hover:bg-gold hover:text-black transition-all duration-300"
          >
            View Our Services
          </button></Link>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="absolute bottom-8 text-gold z-10"
      >
        <ArrowDown className="w-6 h-6 sm:w-7 sm:h-7" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
