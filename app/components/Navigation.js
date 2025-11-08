'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 60);
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 w-full z-50 transition-all duration-500 ${
        mounted && scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gold/20'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/logo.png"
            alt="VIP Logo"
            width={42}
            height={42}
            className="rounded-full"
          />
          <span className="font-heading text-dark text-lg sm:text-xl tracking-wide font-semibold md:inline-block">
            <span className="text-gold">Function</span> Planners
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
                    : 'text-dark/80 hover:text-gold'
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
            className="md:hidden text-gold bg-white/20 p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 transition-transform duration-200 hover:scale-110 hover:bg-white/30"
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
