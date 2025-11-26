'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import path from 'path';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'home', href: '/' },
    { name: 'services', href: '/services' },
    { name: 'gallery', href: '/gallery' },
    { name: 'about', href: '/about' },
    { name: 'testimonials', href: '/testimonials' },
    { name: 'contact', href: '/contact' },
  ];

  // Toggle menu using functional state update for correctness and readability
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <motion.nav
      
      className={`${pathname === '/' ? 'fixed' : 'sticky'} top-0 w-full z-50 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src={pathname === '/' ? scrolled? '/logo.png' : '/logo2.png' :  '/logo.png'}
            alt="VIP Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className={`font-heading text-xl sm:text-2xl tracking-wide font-semibold md:inline-block transition-colors duration-300 ${
            scrolled ? 'text-dark' : pathname === '/' ?  'text-white': 'text-dark'
          }`}>
            <span className={`${pathname=='/'? scrolled? 'text-gold' : 'text-white': 'text-gold'}`}>Event </span> Management
          </span>
        
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium font-heading text-[15px]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`uppercase tracking-wide transition-colors duration-200 relative pb-1 ${
                  isActive 
                    ? 'text-gold' 
                    : scrolled ? 'text-dark/80 hover:text-gold' : pathname=='/'?'text-white hover:text-gold' : 'text-dark/80 hover:text-gold'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`md:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 transition-all duration-200 hover:scale-110 ${
              scrolled ? 'text-gold bg-white/20 hover:bg-white/30' : 'text-white bg-black/20 hover:bg-black/30'
            }`}
          >
            {menuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          id="mobile-menu"
          role="menu"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gold/20"
        >
          <div className="px-5 py-6 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full text-center uppercase tracking-wide font-medium py-2 transition-colors duration-200 ${
                    isActive 
                      ? 'text-gold' 
                      : 'text-dark hover:text-gold'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
