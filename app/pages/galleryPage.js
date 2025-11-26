'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Slider from "react-slick";
import { loadGalleryAssets } from "../lib/galleryLoader";
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
  const assets = loadGalleryAssets();

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
      src: assets.decorations.videos[0],
      videos: assets.decorations.videos,
      isVideo: true,
      title: "Decoration Videos",
      description: "Watch our stunning decoration work in action",
      venue: "Nagercoil",
      date: "2024",
      likes: 312
    },
    {
      id: 2,
      src: assets.decorations.images[0],
      images: assets.decorations.images.slice(0, 11),
      title: "Stage Decoration",
      description: "Grand stage setups with premium floral arrangements and LED lighting",
      venue: "Nagercoil",
      date: "2024",
      likes: 245
    },
    {
      id: 3,
      src: assets.decorations.images[12],
      images: [assets.decorations.images[12], assets.decorations.images[13], assets.decorations.images[14]],
      title: "Car Decoration",
      description: "Beautiful floral and ribbon decorations for wedding cars and VIP vehicles",
      venue: "Nagercoil",
      likes: 198
    },
    {
      id: 4,
      src: assets.decorations.images[16],
      images: [assets.decorations.images[16]],
      title: "Home Decoration",
      description: "Complete home transformation for festivals, weddings, and special occasions",
      venue: "Nagercoil",
      likes: 176
    },
    {
      id: 5,
      src: assets.decorations.images[11],
      images: [assets.decorations.images[11]],
      title: "Birthday Decoration",
      description: "Thematic birthday decorations with balloons, props, and backdrops",
      venue: "Nagercoil",
      likes: 234
    },
    {
      id: 6,
      src: assets.decorations.images[17],
      images: [assets.decorations.images[17]],
      title: "Mandap Decoration",
      description: "Traditional South Indian wedding mandap with floral arrangements",
      venue: "Nagercoil",
      likes: 189
    },
    {
      id: 7,
      src: assets.decorations.images[15],
      images: [assets.decorations.images[15], assets.decorations.images[16]],
      title: "Entrance Decoration",
      description: "Grand entrance setups with floral arches and welcome decorations",
      venue: "Nagercoil",
      likes: 212
    },
    {
      id: 8,
      src: assets.decorations.images[18],
      images: [assets.decorations.images[18]],
      title: "Theme Decoration",
      description: "Complete thematic decorations for various event concepts and styles",
      venue: "Nagercoil",
      likes: 167
    }
  ],
  catering: [
    {
      id: 1,
      src: assets.catering.videos[0],
      videos: assets.catering.videos,
      isVideo: true,
      title: "Catering Videos",
      description: "See our catering services and food preparation in action",
      venue: "Nagercoil",
      date: "2024",
      likes: 278
    },
    {
      id: 2,
      src: assets.catering.images[0],
      images: assets.catering.images.slice(0, 4),
      title: "Veg Catering",
      description: "Complete vegetarian meals with traditional South Indian delicacies",
      venue: "Nagercoil",
      date: "2024",
      likes: 189,
      type: "veg"
    },
    {
      id: 3,
      src: assets.catering.images[8],
      images: [assets.catering.images[8], assets.catering.images[1], assets.catering.images[2]],
      title: "Non-Veg Catering",
      description: "Special non-vegetarian dishes including chicken, mutton, and fish preparations",
      venue: "Nagercoil",
      date: "2024",
      likes: 203,
      type: "nonveg"
    },
    {
      id: 4,
      src: assets.catering.images[9],
      images: [assets.catering.images[9], assets.catering.images[2], assets.catering.images[3]],
      title: "Buffet Service",
      description: "Professional buffet arrangement with multiple cuisine options",
      venue: "Nagercoil",
      date: "2024",
      likes: 167,
      type: "both"
    },
    {
      id: 5,
      src: assets.catering.images[7],
      images: [assets.catering.images[7]],
      title: "Serving Staff",
      description: "Professional serving staff and coordinators for seamless service",
      venue: "Nagercoil",
      likes: 145
    },
    {
      id: 6,
      src: assets.catering.images[4],
      images: [assets.catering.images[4], assets.catering.images[3], assets.catering.images[1]],
      title: "Mutton Biryani Special",
      description: "Signature mutton biryani cooked with traditional spices and techniques",
      venue: "Nagercoil",
      date: "2024",
      likes: 234,
      type: "nonveg"
    },
    {
      id: 7,
      src: assets.catering.images[6],
      images: [assets.catering.images[6], assets.catering.images[5]],
      title: "Food Presentation",
      description: "Elegant food presentation and professional plating services",
      venue: "Nagercoil",
      likes: 178
    },
    {
      id: 8,
      src: assets.catering.images[5],
      images: [assets.catering.images[5], assets.catering.images[6]],
      title: "Special Diet Menu",
      description: "Customized menus for special dietary needs and preferences",
      venue: "Nagercoil",
      likes: 156
    }
  ],
  stalls: [
    {
      id: 1,
      src: assets.stalls.images[4],
      images: [assets.stalls.images[4], assets.stalls.images[6]],
      title: "Popcorn Stall",
      description: "Fresh, buttery, and a total crowd favorite.",
      venue: "Nagercoil",
      date: "2024",
      likes: 198
    },
    {
      id: 2,
      src: assets.stalls.images[7],
      images: [assets.stalls.images[7]],
      title: "Cotton Candy Stall",
      description: "Sweet, fluffy clouds of pure happiness.",
      venue: "Nagercoil",
      date: "2024",
      likes: 215
    },
    {
      id: 3,
      src: assets.stalls.images[8],
      images: [assets.stalls.images[8], assets.stalls.images[0]],
      title: "Chocolate Fountain",
      description: "Dip fruits and treats into rich melted chocolate.",
      venue: "Nagercoil",
      date: "2024",
      likes: 267
    },
    {
      id: 4,
      src: assets.stalls.images[2],
      images: [assets.stalls.images[2], assets.stalls.images[9]],
      title: "Ice Cream Counter",
      description: "Chilled desserts in your favorite creamy flavors.",
      venue: "Nagercoil",
      date: "2024",
      likes: 243
    },
    {
      id: 5,
      src: assets.stalls.images[10],
      images: [assets.stalls.images[10], assets.stalls.images[3]],
      title: "Pani Puri & Chaat Stall",
      description: "Spicy, tangy, and made fresh on spot.",
      venue: "Nagercoil",
      date: "2024",
      likes: 289
    },
    {
      id: 6,
      src: assets.stalls.images[11],
      images: [assets.stalls.images[11], assets.stalls.images[1]],
      title: "Wine Counter",
      description: "A classy corner for your premium event moments.",
      venue: "Nagercoil",
      date: "2024",
      likes: 176
    },
    {
      id: 7,
      src: assets.stalls.images[12],
      images: [assets.stalls.images[12], assets.stalls.images[1]],
      title: "Mocktails & Drinks",
      description: "Refreshing drinks for an elegant welcome.",
      venue: "Nagercoil",
      date: "2024",
      likes: 221
    },
    {
      id: 8,
      src: assets.stalls.images[13],
      images: [assets.stalls.images[13]],
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
      src: assets.welcomeDolls.images[0],
      images: assets.welcomeDolls.images,
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
      src: assets.entertainment.videos[0],
      videos: assets.entertainment.videos,
      isVideo: true,
      title: "Entertainment Videos",
      description: "Watch our DJ and entertainment services in action",
      venue: "Nagercoil",
      date: "2024",
      likes: 256
    },
    {
      id: 2,
      src: assets.entertainment.images[0],
      images: [assets.entertainment.images[0], assets.entertainment.images[1]],
      title: "DJ Services",
      description: "Professional DJs with extensive music libraries and equipment",
      venue: "Nagercoil",
      date: "2024",
      likes: 178
    },
    {
      id: 3,
      src: assets.entertainment.images[2],
      images: [assets.entertainment.images[2]],
      title: "Photo Booth",
      description: "Fun photo booth with props for guest entertainment",
      venue: "Nagercoil",
      date: "2024",
      likes: 145
    },
    {
      id: 4,
      src: assets.entertainment.images[3],
      images: [assets.entertainment.images[3]],
      title: "Games & Activities",
      description: "Fun games and activities for all age groups",
      venue: "Nagercoil",
      date: "2024",
      likes: 132
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
                initial={{ x: serviceIndex % 2 === 0 ? -100 : 100 }}
                whileInView={{ x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
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

              {/* Images - Pinterest Masonry Grid */}
              <div className="columns-2 md:columns-2 lg:columns-3 gap-3 md:gap-4">
                {galleryData[service.id].map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="break-inside-avoid mb-3 md:mb-4"
                  >
                    <div
                      className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl group relative"
                      onClick={() => openImageModal(image, index, service.id)}
                    >
                      <div className="relative overflow-hidden" style={{ height: `${180 + (index % 4) * 60}px` }}>
                        {image.isVideo ? (
                          <video 
                            src={image.src} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            autoPlay
                            muted
                            loop
                            playsInline
                            onMouseEnter={(e) => e.target.play()}
                          />
                        ) : (
                          <img 
                            src={image.images?.[0] || image.src} 
                            alt={image.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
                        {image.isVideo && image.videos && image.videos.length > 0 && (
                          <div className="absolute top-3 right-3 bg-red-600 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                            <Play className="w-3 h-3" />
                            {image.videos.length}
                          </div>
                        )}
                        {!image.isVideo && image.images && image.images.length > 1 && (
                          <div className="absolute top-3 right-3 bg-[#d4af37] text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">
                            +{image.images.length}
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                          <h3 className="font-bold text-sm md:text-base mb-1 line-clamp-1">{image.title}</h3>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span className="text-xs">{image.venue || 'Nagercoil'}</span>
                            </div>
                            {image.likes && (
                              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
                                <Heart className="w-3 h-3 fill-white" />
                                <span className="text-xs">{image.likes}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="p-3 md:p-4 hidden md:block">
                        <h3 className="text-black font-bold text-base mb-2">{image.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{image.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-gray-500 text-xs">
                            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                            <span>{image.venue || 'Nagercoil'}</span>
                          </div>
                          {image.likes && (
                            <div className="flex items-center gap-1">
                              <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
                              <span className="text-xs font-bold text-[#d4af37]">{image.likes}</span>
                            </div>
                          )}
                        </div>
                        {image.type && (
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold text-white mt-2 ${
                            image.type === 'veg' ? 'bg-green-500' :
                            image.type === 'nonveg' ? 'bg-red-500' :
                            'bg-blue-500'
                          }`}>
                            {image.type === 'veg' ? 'VEG' : image.type === 'nonveg' ? 'NON-VEG' : 'VEG & NON-VEG'}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>


      {/* CTA Section */}
      <CTA text="Love What You See?" desc="Let's create something amazing for your next event. Contact us today!" btn1="Book Now" btn2="View Services" btn1link="/contact" btn2link="/services" />

      {/* Image Modal - Cinematic */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-end md:items-center justify-center"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full md:max-w-6xl max-h-[95vh] md:max-h-[90vh] bg-gradient-to-b from-gray-900 to-black md:rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute top-3 right-3 md:top-6 md:right-6 z-20 bg-white/10 backdrop-blur-md text-white p-2 md:p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:rotate-90"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md text-white p-2 md:p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md text-white p-2 md:p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Image/Video Slider */}
              <div className="relative h-[50vh] md:h-[70vh] bg-black">
                {selectedImage.isVideo && selectedImage.videos && selectedImage.videos.length > 0 ? (
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={600}
                    slidesToShow={1}
                    slidesToScroll={1}
                    arrows={false}
                    autoplay={false}
                    dotsClass="slick-dots !bottom-4"
                  >
                    {selectedImage.videos.map((vidSrc, index) => (
                      <div key={`video-${index}`} className="h-[50vh] md:h-[70vh]">
                        <video
                          src={vidSrc}
                          controls
                          autoPlay
                          muted
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : selectedImage.images && selectedImage.images.length > 0 ? (
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={600}
                    slidesToShow={1}
                    slidesToScroll={1}
                    arrows={false}
                    autoplay={false}
                    dotsClass="slick-dots !bottom-4"
                  >
                    {selectedImage.images.map((imgSrc, index) => (
                      <div key={`image-${index}`} className="h-[50vh] md:h-[70vh]">
                        <img
                          src={imgSrc}
                          alt={`${selectedImage.title} - ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                )}              
              </div>

              {/* Image Info */}
              <div className="p-4 md:p-8 bg-gradient-to-t from-black via-gray-900/95 to-transparent">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>
                  {selectedImage.likes && (
                    <div className="flex items-center gap-2 bg-[#d4af37]/20 backdrop-blur-sm px-3 py-2 rounded-full">
                      <Heart className="w-4 h-4 md:w-5 md:h-5 text-[#d4af37] fill-[#d4af37]" />
                      <span className="text-sm md:text-base font-bold text-[#d4af37]">{selectedImage.likes}</span>
                    </div>
                  )}
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-300 mb-6">
                  {selectedImage.venue && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#d4af37]" />
                      <span>{selectedImage.venue}</span>
                    </div>
                  )}
                  {selectedImage.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#d4af37]" />
                      <span>{selectedImage.date}</span>
                    </div>
                  )}
                  {selectedImage.type && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      selectedImage.type === 'veg' ? 'bg-green-500' :
                      selectedImage.type === 'nonveg' ? 'bg-red-500' :
                      'bg-blue-500'
                    }`}>
                      {selectedImage.type === 'veg' ? 'VEG' : selectedImage.type === 'nonveg' ? 'NON-VEG' : 'VEG & NON-VEG'}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-white/10 backdrop-blur-sm text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300 text-sm md:text-base font-medium">
                    <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                    Share
                  </button>
                  <Link href="/contact" className="flex-1">
                    <button className="w-full bg-[#d4af37] text-black py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#c49d2f] transition-all duration-300 text-sm md:text-base font-bold shadow-lg hover:shadow-xl">
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                      Book Similar
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute top-3 left-3 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-medium">
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