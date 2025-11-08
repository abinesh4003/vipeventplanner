'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Filter,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Heart,
  Share2,
  MapPin,
  Calendar,
  Users,
  Star,
  Utensils,
  Music,
  Palette,
  Car,
  Camera,
  Sparkles,
  Phone,
  MessageCircle,
  Download,
  CheckCircle,
  Zap,
  Instagram,
} from 'lucide-react';

import CTA from "../components/cta";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("stage");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery categories based on your services
  const galleryCategories = [
    {
      id: "stage",
      name: "Stage Decorations",
      icon: <Palette className="w-5 h-5" />,
      count: 45,
      color: "from-gold to-gold",
      description: "Beautiful stage setups for weddings and events"
    },
    {
      id: "catering",
      name: "Catering Services",
      icon: <Utensils className="w-5 h-5" />,
      count: 38,
      color: "from-gold to-gold",
      description: "Veg & Non-veg food presentations"
    },
    {
      id: "entertainment",
      name: "Entertainment & Games",
      icon: <Music className="w-5 h-5" />,
      count: 28,
      color: "from-gold to-gold",
      description: "DJ, games and guest entertainment"
    },
    {
      id: "events",
      name: "Other Events",
      icon: <Sparkles className="w-5 h-5" />,
      count: 52,
      color: "from-gold to-gold",
      description: "Complete event management gallery"
    }
  ];

  // Gallery images for each category
  const galleryData = {
    stage: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        title: "Royal Wedding Stage",
        description: "Premium floral stage decoration with LED lighting",
        venue: "Grand Palace, Nagercoil",
        date: "2024-12-15",
        likes: 89
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=800&q=80",
        title: "Traditional Mandap",
        description: "South Indian traditional wedding mandap setup",
        venue: "Sri Krishna Hall",
        date: "2024-12-10",
        likes: 76
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80",
        title: "Modern Stage Design",
        description: "Contemporary stage with digital backdrop",
        venue: "Luxury Resort",
        date: "2024-12-08",
        likes: 92
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1519167758481-83f29da8c561?auto=format&fit=crop&w=800&q=80",
        title: "Floral Backdrop",
        description: "Fresh flower arrangements for stage decoration",
        venue: "Wedding Garden",
        date: "2024-12-05",
        likes: 67
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
        title: "LED Theme Stage",
        description: "Colorful LED theme decoration for reception",
        venue: "Convention Center",
        date: "2024-12-03",
        likes: 81
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80",
        title: "Premium Stage Setup",
        description: "Luxury stage design with custom props",
        venue: "Five Star Hotel",
        date: "2024-11-28",
        likes: 95
      }
    ],
    catering: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
        title: "Traditional South Indian Meals",
        description: "Authentic South Indian wedding feast setup",
        venue: "Family Residence",
        date: "2024-12-15",
        likes: 124,
        type: "veg"
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
        title: "Buffet Setup",
        description: "Professional buffet arrangement for 300+ guests",
        venue: "Community Hall",
        date: "2024-12-12",
        likes: 89,
        type: "both"
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
        title: "Live Counters",
        description: "Live cooking and serving counters",
        venue: "Outdoor Event",
        date: "2024-12-10",
        likes: 102,
        type: "nonveg"
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
        title: "Corporate Catering",
        description: "Professional setup for corporate events",
        venue: "Office Premises",
        date: "2024-12-08",
        likes: 67,
        type: "veg"
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80",
        title: "Food Presentation",
        description: "Elegant food presentation and plating",
        venue: "Luxury Hotel",
        date: "2024-12-05",
        likes: 78,
        type: "both"
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&w=800&q=80",
        title: "Special Diet Menu",
        description: "Customized menus for special dietary needs",
        venue: "Private Event",
        date: "2024-12-03",
        likes: 56,
        type: "veg"
      }
    ],
    entertainment: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
        title: "DJ Night",
        description: "Professional DJ with lighting effects",
        venue: "Outdoor Party",
        date: "2024-12-15",
        likes: 145
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
        title: "Live Band Performance",
        description: "Traditional and modern live music",
        venue: "Wedding Reception",
        date: "2024-12-12",
        likes: 98
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
        title: "Photo Booth",
        description: "Fun photo booth with props for guests",
        venue: "Birthday Party",
        date: "2024-12-10",
        likes: 112
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
        title: "Dance Floor",
        description: "Lighted dance floor with special effects",
        venue: "Corporate Party",
        date: "2024-12-08",
        likes: 87
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
        title: "Games & Activities",
        description: "Fun games and activities for all ages",
        venue: "Family Function",
        date: "2024-12-05",
        likes: 76
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
        title: "Cultural Programs",
        description: "Traditional dance and cultural performances",
        venue: "Community Event",
        date: "2024-12-03",
        likes: 93
      }
    ],
    events: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
        title: "Corporate Conference",
        description: "Complete corporate event management",
        venue: "Business Center",
        date: "2024-12-15",
        likes: 67
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
        title: "Product Launch",
        description: "End-to-end product launch event",
        venue: "Tech Park",
        date: "2024-12-12",
        likes: 89
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        title: "Birthday Celebration",
        description: "Complete birthday party planning",
        venue: "Private Residence",
        date: "2024-12-10",
        likes: 102
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
        title: "Anniversary Event",
        description: "Golden anniversary celebration setup",
        venue: "Garden Resort",
        date: "2024-12-08",
        likes: 78
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
        title: "Theme Party",
        description: "Complete theme party execution",
        venue: "Party Hall",
        date: "2024-12-05",
        likes: 115
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?auto=format&fit=crop&w=800&q=80",
        title: "Outdoor Event",
        description: "Large scale outdoor event management",
        venue: "Beach Resort",
        date: "2024-12-03",
        likes: 94
      }
    ]
  };

  const currentImages = galleryData[activeCategory] || [];

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % currentImages.length;
    } else {
      newIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(currentImages[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === 'Escape') {
        closeImageModal();
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-x-hidden w-full">
      {/* Hero Section */}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/40 border border-[var(--color-dark)]/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
            >
              <Camera className="w-4 h-4 text-[var(--color-dark)]" />
              <span className="text-xs md:text-sm text-[var(--color-dark)] font-medium">Our Work Portfolio</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Our <span className="text-[var(--color-dark)]">Event Gallery</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[var(--color-dark)]/80 font-light max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our stunning event creations - Stage decorations, catering services, entertainment, and complete event management in Nagercoil
            </p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link
                href="/contact"
                className="bg-[var(--color-dark)] text-white px-6 py-3 rounded-full font-medium hover:bg-[var(--color-dark)]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Your Event
              </Link>
              <Link
                href="/about"
                className="bg-white/20 text-[var(--color-dark)] px-6 py-3 rounded-full font-medium border border-[var(--color-dark)]/30 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                About Us
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
                <span>700+ Events</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-dark)]" />
                <span>1000+ Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-dark)]" />
                <span>Real Events</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex space-x-1 overflow-x-auto pb-2 scrollbar-hide">
            {galleryCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl whitespace-nowrap transition-all duration-300 flex-shrink-0 ${activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category.icon}
                <span className="font-medium text-sm">{category.name}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === category.id ? "bg-white/20" : "bg-gray-300"
                  }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Info */}
      <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent border-y">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              {galleryCategories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {galleryCategories.find(cat => cat.id === activeCategory)?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {currentImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-square"
              onClick={() => openImageModal(image, index)}
            >
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {image.type === 'veg' && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Veg
                    </span>
                  )}
                  {image.type === 'nonveg' && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Non-Veg
                    </span>
                  )}
                  {image.type === 'both' && (
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Veg & Non-Veg
                    </span>
                  )}
                </div>

                {/* Like Count */}
                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Heart className="w-3 h-3 text-white" />
                  <span className="text-white text-xs">{image.likes}</span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {currentImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Camera className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No images found</h3>
            <p className="text-gray-500 text-sm">We're updating this gallery with new content</p>
          </div>
        )}
      </div>
      {/* Behind the Scenes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <span className="text-[#d4af37]">Behind The Scenes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we transform ordinary spaces into extraordinary experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#d4af37]/10 to-transparent p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Setup Process</h3>
              </div>
              <p className="text-gray-600 mb-4">
                From empty venue to breathtaking setup - watch our team create magic step by step
              </p>
              <div className="space-y-2">
                {['Venue Planning', 'Theme Execution', 'Lighting Setup', 'Final Touches'].map((step, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-transparent p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Real-time Execution</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our team working seamlessly to ensure perfect execution during live events
              </p>
              <div className="space-y-2">
                {['Coordination', 'Quality Check', 'Guest Management', 'Problem Solving'].map((step, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Transformation Showcase Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Amazing <span className="text-[#d4af37]">Transformations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we transform ordinary spaces into extraordinary venues
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                before: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?auto=format&fit=crop&w=600&q=80",
                after: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
                title: "Empty Hall to Wedding Venue",
                time: "8 hours transformation"
              },
              {
                before: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80",
                after: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
                title: "Office Space to Conference Hall",
                time: "6 hours setup"
              }
            ].map((transformation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{transformation.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="relative h-48 rounded-lg overflow-hidden mb-2">
                      <img
                        src={transformation.before}
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                        Before
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">Empty Space</p>
                  </div>
                  <div className="text-center">
                    <div className="relative h-48 rounded-lg overflow-hidden mb-2">
                      <img
                        src={transformation.after}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                        After
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">Transformed</p>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-[#d4af37] font-medium">{transformation.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-[#d4af37]" />
              <h2 className="text-2xl md:text-3xl font-bold">Follow Our Journey</h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See real-time updates and behind-the-scenes moments on Instagram
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gray-800 rounded-lg overflow-hidden cursor-pointer relative group"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#d4af37]/20 to-transparent flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-[#d4af37] opacity-70" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-sm font-medium">@vipfunctionplanners</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA btn2="About Us" btn2link="/about" />

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-64 md:h-96 bg-gray-100">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Info */}
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {selectedImage.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#d4af37]/10 px-2 py-1 rounded-full">
                    <Heart className="w-4 h-4 text-[#d4af37]" />
                    <span className="text-sm font-medium text-[#d4af37]">{selectedImage.likes}</span>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#d4af37]" />
                    <span>{selectedImage.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#d4af37]" />
                    <span>{selectedImage.date}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t">
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors text-sm">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                 
                    <button className="flex-1 bg-[#d4af37] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors text-sm">
                      <Phone className="w-4 h-4" />
                       <Link href="/contact" className=""> Book Similar</Link>
                     
                    </button>
                 

                  
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {currentImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;