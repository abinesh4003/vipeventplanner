'use client';
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    { name: 'home', href: '/' },
    { name: 'services', href: '/services' },
    { name: 'gallery', href: '/gallery' },
    { name: 'about', href: '/about' },
    { name: 'testimonials', href: '/testimonials' },
    { name: 'contact', href: '/contact' }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = "Hello V.I.P Event Management! I'm interested in your event planning services.";
    const whatsappUrl = `https://wa.me/918778304145?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">


        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand Section */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gold mb-4">
              V.I.P Event Management
            </h3>
            <p className="text-gray-400 leading-relaxed mb-2 text-sm md:text-base">
              Creating unforgettable experiences with precision, creativity, and luxury —
              the signature V.I.P touch that defines excellence in Nagercoil.
            </p>
            {/* <div className="flex justify-center md:justify-start gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-gray-900 p-3 rounded-full hover:bg-gold/10 transition-all"
                >
                  <Icon className="text-gold" size={20} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {pageLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <button
                      className="text-gray-400 hover:text-gold transition-colors capitalize"
                    >
                      {item.name}
                    </button></Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gold mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm md:text-base">
              {[
                'Wedding Planning',
                'Corporate Events',
                'Birthday Parties',
                'Stage Decoration',
                'Catering Services',
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 hover:text-gold transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support / Legal */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gold mb-4">Support</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li><Link href="/faqs" className="text-gray-400 hover:text-gold transition-colors">FAQs</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-400 hover:text-gold transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gold mb-4">Get in Touch</h4>
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="text-gold" size={18} />
                <Link href="tel:8778304145" className="text-gray-400 hover:text-gold transition-colors">
                  +91 8778304145
                </Link>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MessageCircle className="text-gold" size={18} />
                <button onClick={openWhatsApp} className="text-gray-400 hover:text-gold transition-colors">
                  Chat on WhatsApp
                </button>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="text-gold" size={18} />
                <Link href="mailto:vipeventsmanagement@gmail.com" className="text-gray-400 hover:text-gold transition-colors">
                  vipeventsmanagement@gmail.com
                </Link>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="text-gold" size={18} />
                <span className="text-gray-400">Nagercoil, Kanyakumari</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs sm:text-sm">
              © {currentYear} <span className="text-gold font-semibold">V.I.P Event Management</span>. All Rights Reserved.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm">
              Crafted with 💛 by <span className="text-gold font-semibold">Your Creative Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
