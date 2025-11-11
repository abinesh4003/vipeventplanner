'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Slider from "react-slick";
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
  Award,
  Coffee,
  SparklesIcon,
  Instagram,
} from 'lucide-react';

import CTA from "../components/cta";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(null);

  // Service galleries
const serviceGalleries = [
  {
    id: "decorations",
    name: "Decorations",
    icon: <Palette className="w-6 h-6" />,
    description: "Stage, car, home and birthday decorations",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "catering",
    name: "Catering Services",
    icon: <Utensils className="w-6 h-6" />,
    description: "Veg, non-veg and buffet catering services",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: "stalls",
    name: "Food Stalls",
    icon: <Coffee className="w-6 h-6" />,
    description: "Popcorn, ice cream and dessert stalls",
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    id: "welcomeDolls",
    name: "Welcome Services",
    icon: <Sparkles className="w-6 h-6" />,
    description: "Welcome dolls, girls and traditional services",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: <Music className="w-6 h-6" />,
    description: "DJ, music, games and performances",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: "photography",
    name: "Photography",
    icon: <Camera className="w-6 h-6" />,
    description: "Photo, video and album services",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "specialEffects",
    name: "Special Effects",
    icon: <SparklesIcon className="w-6 h-6" />,
    description: "Snow, confetti and special effects",
    gradient: "from-indigo-500/20 to-purple-500/20"
  }
];

  // Gallery images for each category
const galleryData = {
  decorations: [
    {
      id: 1,
      src: "/services/dec/stage1.jpeg",
      images: [
        "/services/dec/stage1.jpeg",
        "/services/dec/stage2.jpeg",
        "/services/dec/stage3.jpeg",
        "/services/dec/stage4.jpeg",
        "/services/dec/WhatsApp Image 2025-11-09 at 11.28.33 AM.jpeg",
        "/services/dec/WhatsApp Image 2025-11-09 at 11.28.34 AM.jpeg",
        "/services/dec/WhatsApp Image 2025-11-09 at 11.28.35 AM (1).jpeg",
        "/services/dec/WhatsApp Image 2025-11-09 at 11.28.35 AM.jpeg",
        "/services/dec/WhatsApp Image 2025-11-09 at 11.29.36 AM.jpeg",
        "/services/dec/WhatsApp Image 2025-11-09 at 11.54.04 AM (1).jpeg",
        "/services/dec/WhatsApp Image 2025-11-09 at 11.54.04 AM.jpeg"
      ],
      title: "Stage Decoration",
      description: "Grand stage setups with premium floral arrangements and LED lighting",
      venue: "Nagercoil",
      date: "2024",
      likes: 245
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Car Decoration",
      description: "Beautiful floral and ribbon decorations for wedding cars and VIP vehicles"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Home Decoration",
      description: "Complete home transformation for festivals, weddings, and special occasions"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Birthday Decoration",
      description: "Thematic birthday decorations with balloons, props, and backdrops"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Mandap Decoration",
      description: "Traditional South Indian wedding mandap with floral arrangements"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Entrance Decoration",
      description: "Grand entrance setups with floral arches and welcome decorations"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519167758481-83f29da8c561?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Theme Decoration",
      description: "Complete thematic decorations for various event concepts and styles"
    }
  ],
  catering: [
    {
      id: 1,
      src: "/services/cat/cat1.jpg",
      images: [
        "/services/cat/cat1.jpg",
        "/services/cat/cat2.jpeg",
        "/services/cat/cat3.jpeg",
        "/services/cat/cat4.jpeg"
      ],
      title: "Veg Catering",
      description: "Complete vegetarian meals with traditional South Indian delicacies",
      venue: "Nagercoil",
      date: "2024",
      likes: 189,
      type: "veg"
    },
    {
      id: 2,
      src: "/services/cat/cat2.jpeg",
      images: [
        "/services/cat/cat2.jpeg",
        "/services/cat/cat1.jpg",
        "/services/cat/cat3.jpeg",
        "/services/cat/cat4.jpeg"
      ],
      title: "Non-Veg Catering",
      description: "Special non-vegetarian dishes including chicken, mutton, and fish preparations",
      venue: "Nagercoil",
      date: "2024",
      likes: 203,
      type: "nonveg"
    },
    {
      id: 3,
      src: "/services/buffet.jpg",
      images: [
        "/services/buffet.jpg",
        "/services/cat/cat3.jpeg",
        "/services/cat/cat4.jpeg"
      ],
      title: "Buffet Service",
      description: "Professional buffet arrangement with multiple cuisine options",
      venue: "Nagercoil",
      date: "2024",
      likes: 167,
      type: "both"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Serving Staff",
      description: "Professional serving staff and coordinators for seamless service"
    },
    {
      id: 5,
      src: "/services/cat/cat3.jpeg",
      images: [
        "/services/cat/cat3.jpeg",
        "/services/cat/cat4.jpeg",
        "/services/cat/cat2.jpeg"
      ],
      title: "Mutton Biryani Special",
      description: "Signature mutton biryani cooked with traditional spices and techniques",
      venue: "Nagercoil",
      date: "2024",
      likes: 234,
      type: "nonveg"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Food Presentation",
      description: "Elegant food presentation and professional plating services"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Special Diet Menu",
      description: "Customized menus for special dietary needs and preferences"
    }
  ],
  stalls: [
    {
      id: 1,
      src: "/images/popcorn-stall.jpg",
      images: ["/images/popcorn-stall.jpg"],
      title: "Popcorn Stall",
      description: "Fresh, buttery, and a total crowd favorite.",
      venue: "Nagercoil",
      date: "2024",
      likes: 198
    },
    {
      id: 2,
      src: "/images/cotton-candy-stall.jpg",
      images: ["/images/cotton-candy-stall.jpg"],
      title: "Cotton Candy Stall",
      description: "Sweet, fluffy clouds of pure happiness.",
      venue: "Nagercoil",
      date: "2024",
      likes: 215
    },
    {
      id: 3,
      src: "/images/chocolate-fountain.jpg",
      images: ["/images/chocolate-fountain.jpg"],
      title: "Chocolate Fountain",
      description: "Dip fruits and treats into rich melted chocolate.",
      venue: "Nagercoil",
      date: "2024",
      likes: 267
    },
    {
      id: 4,
      src: "/images/ice-cream-stall.jpg",
      images: ["/images/ice-cream-stall.jpg"],
      title: "Ice Cream Counter",
      description: "Chilled desserts in your favorite creamy flavors.",
      venue: "Nagercoil",
      date: "2024",
      likes: 243
    },
    {
      id: 5,
      src: "/images/pani-puri-stall.jpg",
      images: ["/images/pani-puri-stall.jpg"],
      title: "Pani Puri & Chaat Stall",
      description: "Spicy, tangy, and made fresh on spot.",
      venue: "Nagercoil",
      date: "2024",
      likes: 289
    },
    {
      id: 6,
      src: "/images/wine-counter.jpg",
      images: ["/images/wine-counter.jpg"],
      title: "Wine Counter",
      description: "A classy corner for your premium event moments.",
      venue: "Nagercoil",
      date: "2024",
      likes: 176
    },
    {
      id: 7,
      src: "/images/mocktails.jpg",
      images: ["/images/mocktails.jpg"],
      title: "Mocktails & Drinks",
      description: "Refreshing drinks for an elegant welcome.",
      venue: "Nagercoil",
      date: "2024",
      likes: 221
    },
    {
      id: 8,
      src: "/images/printed-balloons.jpg",
      images: ["/images/printed-balloons.jpg"],
      title: "Printed Balloons",
      description: "Customized balloons with names or messages.",
      venue: "Nagercoil",
      date: "2024",
      likes: 192
    }
  ],
  welcomeDolls: [
    {
      id: 1,
      src: "/services/doll/doll1.jpg",
      images: [
        "/services/doll/doll1.jpg",
        "/services/doll/doll2.jpeg",
        "/services/doll/doll3.jpeg"
      ],
      title: "Traditional Welcome Dolls",
      description: "Traditional welcome dolls and decorative arrangements",
      venue: "Nagercoil",
      date: "2024",
      likes: 156
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Welcome Girls Service",
      description: "Professionally trained staff in traditional attire for guest welcome"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Aarthi Services",
      description: "Traditional aarthi and ceremonial welcome rituals"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Floral Welcome",
      description: "Fresh flower garlands and floral arrangements for guests"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Traditional Welcome Setup",
      description: "Complete traditional welcome setup with all ceremonial items"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Custom Welcome Arrangements",
      description: "Customized welcome setups matching event theme and requirements"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Professional Welcome Team",
      description: "Trained professional team for grand welcome ceremonies"
    }
  ],
  entertainment: [
    {
      id: 1,
      src: "/services/dj/dj1.jpg",
      images: [
        "/services/dj/dj1.jpg",
        "/services/dj/dj2.jpeg"
      ],
      title: "DJ Services",
      description: "Professional DJs with extensive music libraries and equipment",
      venue: "Nagercoil",
      date: "2024",
      likes: 178
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Music Orchestra",
      description: "Live bands and orchestras for traditional and contemporary music"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Dhol Drummers",
      description: "Traditional dhol and percussion artists for grand entries"
    },
    {
      id: 4,
      src: "/services/photo.jpg",
      images: [
        "/services/photo.jpg"
      ],
      title: "Photo Booth",
      description: "Fun photo booth with props for guest entertainment",
      venue: "Nagercoil",
      date: "2024",
      likes: 145
    },
    {
      id: 5,
      src: "/services/games.jpg",
      images: [
        "/services/games.jpg"
      ],
      title: "Games & Activities",
      description: "Fun games and activities for all age groups",
      venue: "Nagercoil",
      date: "2024",
      likes: 132
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Live Performances",
      description: "Dance troupes and cultural performances"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Sound & Lighting",
      description: "Professional sound systems and lighting effects"
    }
  ],
  photography: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Pre-Wedding Shoots",
      description: "Creative pre-wedding photography at locations of your choice"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Event Coverage",
      description: "Complete event photography covering all ceremonies and moments"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Cinematic Videography",
      description: "4K cinematic video coverage with drone shots and professional editing"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Album Design",
      description: "Beautifully designed photo albums and digital galleries"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Candid Photography",
      description: "Natural and candid moments captured professionally"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Traditional Photography",
      description: "Traditional posed photography for formal portraits"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Same Day Edits",
      description: "Quick editing and same day video highlights"
    }
  ],
  specialEffects: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Snow Effects",
      description: "Artificial snow machines for winter wonderland effects"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Confetti Cannons",
      description: "Colorful confetti and streamer cannons for grand celebrations"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Bubble Machines",
      description: "Bubble effects for magical and romantic atmospheres"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Laser Shows",
      description: "Professional laser light shows and effects"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Fog Machines",
      description: "Atmospheric fog and smoke effects for dramatic entries"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
      ],
      title: "Sparkler Effects",
      description: "Safe sparkler effects for grand celebrations"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80"
      ],
      title: "LED Effects",
      description: "Colorful LED lighting and special effects"
    }
  ]
};
 

  const  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }

  const openImageModal = (image, index, category) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setCurrentCategory(category);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    if (!currentCategory) return;
    const categoryImages = galleryData[currentCategory];
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % categoryImages.length;
    } else {
      newIndex = (currentIndex - 1 + categoryImages.length) % categoryImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(categoryImages[newIndex]);
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

      {/* Service Galleries - Section by Section */}
      <div className="bg-white">
        {serviceGalleries.map((service, serviceIndex) => (
          <section key={service.id} className={`relative py-12 md:py-16 overflow-hidden ${serviceIndex % 2 === 0 ? 'bg-gradient-to-br from-[#f7e9b8]/30 via-[#fdfcf9] to-white' : 'bg-gradient-to-bl from-white via-[#fdfcf9] to-[#f7e9b8]/20'}`}>
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div className={`absolute ${serviceIndex % 2 === 0 ? 'top-10 right-10' : 'bottom-10 left-10'} w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl`}></div>
              <div className={`absolute ${serviceIndex % 2 === 0 ? 'bottom-20 left-20' : 'top-20 right-20'} w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl`}></div>
            </div>
            <div className="container mx-auto px-3 md:px-4 relative z-10">
              {/* Service Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 md:mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-[#d4af37] shadow-lg`}
                  >
                    {service.icon}
                  </motion.div>
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{service.name}</h2>
                    <p className="text-sm md:text-base text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
                <div className="h-1 w-24 bg-[#d4af37] rounded-full"></div>
              </motion.div>

              {/* Images - Slider */}
              <div className="relative">
                <Slider
                  dots={false}
                  infinite={true}
                  speed={900}
                  slidesToShow={3}
                  slidesToScroll={1}
                  autoplay={true}
                  autoplaySpeed={2400}
                  arrows={false}
                  pauseOnHover={false}
                  pauseOnFocus={false}
                  responsive={[
                    { breakpoint: 1024, settings: { slidesToShow: 2 } },
                    { breakpoint: 768, settings: { slidesToShow: 1 } }
                  ]}
                >
                  {galleryData[service.id].map((image, index) => (
                    <div key={image.id} className="px-2">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className="group relative cursor-pointer"
                        onClick={() => openImageModal(image, index, service.id)}
                      >
                        <div className="relative h-[340px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                          <div className="absolute inset-0 p-5 flex flex-col justify-between">
                            <div className="flex justify-end">
                              <motion.div 
                                whileHover={{ scale: 1.15 }}
                                className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 border border-white/30"
                              >
                                <Heart className="w-4 h-4 text-white fill-white" />
                                <span className="text-white text-sm font-bold">{image.likes}</span>
                              </motion.div>
                            </div>
                            <div>
                              <h3 className="text-white font-bold text-lg md:text-xl mb-2">{image.title}</h3>
                              <p className="text-white/90 text-xs md:text-sm mb-3 line-clamp-2">{image.description}</p>
                              <div className="flex items-center gap-2 text-white/80 text-xs mb-3">
                                <MapPin className="w-3.5 h-3.5" />
                                <span>{image.venue}</span>
                              </div>
                              {image.type && (
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${
                                  image.type === 'veg' ? 'bg-green-500' :
                                  image.type === 'nonveg' ? 'bg-red-500' :
                                  'bg-blue-500'
                                }`}>
                                  {image.type === 'veg' ? 'VEG' : image.type === 'nonveg' ? 'NON-VEG' : 'VEG & NON-VEG'}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                            <div className="bg-[#d4af37] rounded-full p-4">
                              <ZoomIn className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>
        ))}
      </div>


      {/* CTA Section */}
      <CTA text="Love What You See?" desc="Let's create something amazing for your next event. Contact us today!" btn1="Book Now" btn2="View Services" btn1link="/contact" btn2link="/services" />

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

              {/* Image Slider */}
              <div className="relative h-64 md:h-96 bg-gray-100">
                {selectedImage.images && selectedImage.images.length > 0 ? (
                  <Slider
                    dots={false}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    arrows={false}
                    autoplay={true}
                    autoplaySpeed={3000}
                  >
                    {selectedImage.images.map((imgSrc, index) => (
                      <div key={index} className="h-64 md:h-96">
                        <img
                          src={imgSrc}
                          alt={`${selectedImage.title} - ${index + 1}`}
                          className="w-full h-full object-fit"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                )}              
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
                {currentIndex + 1} / {currentCategory ? galleryData[currentCategory].length : 0}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;