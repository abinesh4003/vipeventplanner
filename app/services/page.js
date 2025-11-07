'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Palette,
  Utensils,
  Users,
  Music,
  Sparkles,
  Gift,
  Camera,
  ChevronRight,
  Star,
  CheckCircle,
  X,
  ArrowRight,
  Heart,
  Clock,
  Award,
  Calendar,
  Phone,
  MessageCircle,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Lightbulb,
  Coffee,
  Mic,
  Flower2,
  PartyPopper,
  Building2,
  MapPin,
  Mail,
  ChevronDown,
  Link
} from 'lucide-react';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (isModalOpen && selectedService) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === selectedService.images.length - 1 ? 0 : prev + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isModalOpen, selectedService]);

  const serviceCategories = [
    {
      id: "all",
      name: "All Services",
      icon: <Sparkles className="w-4 h-4" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "styling",
      name: "Décor & Styling",
      icon: <Palette className="w-4 h-4" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "hospitality",
      name: "Catering",
      icon: <Utensils className="w-4 h-4" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: "entertainment",
      name: "Entertainment",
      icon: <Music className="w-4 h-4" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: "planning",
      name: "Planning",
      icon: <Target className="w-4 h-4" />,
      gradient: "from-yellow-500 to-amber-500"
    }
  ];

  const services = [
    {
      id: 1,
      icon: <Palette size={28} />,
      title: "Stage & Venue Decoration",
      shortDescription: "Transform any venue into a magical setting with our luxury décor services.",
      fullDescription: "Our award-winning design team creates breathtaking stage setups, mandap decorations, and complete venue transformations. From traditional South Indian wedding mandaps to contemporary corporate stages, we bring your vision to life with premium floral arrangements, custom backdrops, lighting design, and thematic props. Every detail is meticulously crafted to create Instagram-worthy moments.",
      category: "styling",
      images: [
        "https://images.unsplash.com/photo-1519167758481-83f29da8c561?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Custom Thematic Design Concepts",
        "Premium Floral & Fabric Arrangements",
        "Traditional & Modern Mandap Setups",
        "Professional LED & Ambient Lighting",
        "3D Props & Installations",
        "On-site Design Consultation"
      ],
      startingPrice: "₹25,000",
      duration: "4-6 hours setup",
      popular: true,
      stats: { events: 350, rating: 4.9 }
    },
    {
      id: 2,
      icon: <Utensils size={28} />,
      title: "Premium Wedding Catering",
      shortDescription: "Authentic multi-cuisine catering with impeccable taste and presentation.",
      fullDescription: "Elevate your wedding feast with our traditional and modern catering services. We specialize in authentic South Indian wedding meals (11 kootu varieties, 5 curries, 3 payasam types), North Indian delicacies, and international cuisines. Our experienced chefs use the freshest ingredients, maintain strict hygiene standards, and create stunning food presentations that delight all senses.",
      category: "hospitality",
      images: [
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Traditional South Indian Wedding Meals",
        "Multi-Cuisine Menu Options (100+ dishes)",
        "Live Cooking Counters & Food Stations",
        "Veg & Non-Veg Specialty Menus",
        "Professional Serving Staff & Coordinators",
        "Custom Menu Planning & Tasting Sessions"
      ],
      startingPrice: "₹350/plate",
      duration: "Full event coverage",
      popular: true,
      stats: { events: 600, rating: 4.9 }
    },
    {
      id: 3,
      icon: <Coffee size={28} />,
      title: "Corporate Event Catering",
      shortDescription: "Professional catering for conferences, seminars, and corporate gatherings.",
      fullDescription: "From breakfast meetings to gala dinners, we provide sophisticated catering solutions for all corporate events. Our menu includes continental breakfast spreads, working lunch boxes, tea/coffee setups, cocktail snacks, and formal dinner buffets. We ensure timely service, professional presentation, and dietary accommodations for your business events.",
      category: "hospitality",
      images: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Continental & Indian Breakfast Options",
        "Working Lunch Boxes & Buffets",
        "Tea/Coffee & Snack Stations",
        "Cocktail Reception Menus",
        "Dietary Requirement Accommodations",
        "Quick Service & Professional Staff"
      ],
      startingPrice: "₹250/plate",
      duration: "Flexible timing",
      popular: false,
      stats: { events: 200, rating: 4.7 }
    },
    {
      id: 4,
      icon: <Music size={28} />,
      title: "DJ & Live Music Entertainment",
      shortDescription: "Professional DJs and live bands to energize your celebration.",
      fullDescription: "Set the perfect mood with our entertainment services featuring experienced DJs with extensive music libraries, live bands for various genres, professional sound systems, dynamic lighting effects, and MC services. From traditional wedding songs to EDM party tracks, we customize playlists to match your event's vibe and keep your guests dancing all night.",
      category: "entertainment",
      images: [
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Professional DJ with Extensive Library",
        "Live Band Options (Various Genres)",
        "Premium Sound & Lighting Systems",
        "Interactive MC Services",
        "Custom Playlist Curation",
        "Dance Floor Setup & Effects"
      ],
      startingPrice: "₹18,000",
      duration: "6-8 hours",
      popular: true,
      stats: { events: 450, rating: 4.9 }
    },
    {
      id: 5,
      icon: <Sparkles size={28} />,
      title: "Traditional Welcome Services",
      shortDescription: "Grand traditional welcome with professional staff and ceremonial arrangements.",
      fullDescription: "Create a memorable first impression with our traditional welcome services. We provide professionally trained staff in traditional attire, fresh flower garlands, welcome dolls, aarthi plates, traditional music, and ceremonial welcome setups. Our team ensures every guest feels special from the moment they arrive at your event.",
      category: "hospitality",
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Staff in Traditional Attire",
        "Fresh Floral Garland Arrangements",
        "Welcome Dolls & Decorative Props",
        "Aarthi & Ceremonial Items",
        "Traditional Background Music",
        "Guest Assistance & Coordination"
      ],
      startingPrice: "₹10,000",
      duration: "3-4 hours",
      popular: false,
      stats: { events: 280, rating: 4.7 }
    },
    {
      id: 6,
      icon: <Camera size={28} />,
      title: "Photography & Videography",
      shortDescription: "Cinematic coverage capturing every precious moment professionally.",
      fullDescription: "Preserve your special moments with our professional photography and videography services. Our team uses state-of-the-art equipment including 4K cameras, drones, and professional lighting. We offer pre-event shoots, candid photography, traditional portraits, cinematic videos, same-day edits, and beautifully designed albums. Every frame tells your unique story.",
      category: "entertainment",
      images: [
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "4K Videography & Drone Coverage",
        "Candid & Traditional Photography",
        "Pre-Event Shoots Available",
        "Same Day Edit Videos",
        "Premium Albums & Digital Copies",
        "Multiple Photographers & Videographers"
      ],
      startingPrice: "₹25,000",
      duration: "Full day coverage",
      popular: true,
      stats: { events: 400, rating: 4.9 }
    },
    {
      id: 7,
      icon: <Gift size={28} />,
      title: "Entertainment & Return Gifts",
      shortDescription: "Engaging activities and thoughtful return gifts for all age groups.",
      fullDescription: "Keep your guests entertained with our diverse activity options and leave them with cherished memories through customized return gifts. We organize fun games, magic shows, mehendi artists, caricature artists, photo booths, and children's entertainment zones. Our return gift selection includes personalized items that reflect your event's theme.",
      category: "entertainment",
      images: [
        "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Interactive Games & Competitions",
        "Magic Shows & Live Performers",
        "Mehendi & Caricature Artists",
        "Photo Booth with Props",
        "Customized Return Gift Selection",
        "Children's Entertainment Zone"
      ],
      startingPrice: "₹15,000",
      duration: "Event duration",
      popular: false,
      stats: { events: 180, rating: 4.6 }
    },
    {
      id: 8,
      icon: <Flower2 size={28} />,
      title: "Floral Design & Arrangements",
      shortDescription: "Exquisite floral designs that add elegance to every corner.",
      fullDescription: "Our floral designers create stunning arrangements using fresh, premium flowers sourced daily. From entrance arches to centerpieces, car decorations to bridal bouquets, we handle all floral requirements. We specialize in jasmine, rose, orchid, and lotus arrangements for traditional events, as well as contemporary floral installations for modern celebrations.",
      category: "styling",
      images: [
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Fresh Premium Flower Selection",
        "Traditional & Contemporary Designs",
        "Bridal Bouquets & Accessories",
        "Entrance Arches & Installations",
        "Table Centerpieces & Garlands",
        "Car & Venue Floral Decoration"
      ],
      startingPrice: "₹12,000",
      duration: "3-5 hours setup",
      popular: false,
      stats: { events: 320, rating: 4.8 }
    },
    {
      id: 9,
      icon: <Target size={28} />,
      title: "Complete Event Planning",
      shortDescription: "End-to-end event management for stress-free celebrations.",
      fullDescription: "Let us handle everything while you enjoy your special day. Our comprehensive event planning includes venue selection, vendor coordination, timeline management, budget planning, guest management, and day-of coordination. We work closely with you from concept to execution, ensuring every detail is perfect and every moment is memorable.",
      category: "planning",
      images: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Venue Selection & Negotiation",
        "Vendor Coordination & Management",
        "Budget Planning & Tracking",
        "Timeline & Schedule Creation",
        "Guest List Management",
        "Day-of Event Coordination"
      ],
      startingPrice: "₹40,000",
      duration: "Full planning cycle",
      popular: true,
      stats: { events: 250, rating: 4.9 }
    },
    {
      id: 10,
      icon: <Building2 size={28} />,
      title: "Corporate Event Management",
      shortDescription: "Professional management for conferences, seminars, and corporate functions.",
      fullDescription: "Elevate your corporate events with our professional management services. We handle product launches, annual meetings, conferences, team building events, and corporate celebrations. Our services include venue setup, AV equipment, registration management, branding materials, stage management, and post-event reporting.",
      category: "planning",
      images: [
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Conference & Seminar Setup",
        "AV Equipment & Technical Support",
        "Registration & Guest Management",
        "Branding & Marketing Materials",
        "Stage & Presentation Management",
        "Event Analytics & Reporting"
      ],
      startingPrice: "₹35,000",
      duration: "1-3 days",
      popular: false,
      stats: { events: 150, rating: 4.8 }
    },
    {
      id: 11,
      icon: <Mic size={28} />,
      title: "Sound & Lighting Systems",
      shortDescription: "Professional audio-visual setup for perfect ambiance.",
      fullDescription: "Create the perfect atmosphere with our premium sound and lighting systems. We provide high-quality PA systems, wireless microphones, LED stage lighting, architectural lighting, laser shows, and fog machines. Our technical team ensures crystal-clear audio and stunning visual effects throughout your event.",
      category: "entertainment",
      images: [
        "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Premium PA Sound Systems",
        "Wireless & Wired Microphones",
        "LED Stage & Architectural Lighting",
        "Moving Heads & Par Lights",
        "Laser Shows & Special Effects",
        "On-site Technical Support Team"
      ],
      startingPrice: "₹20,000",
      duration: "6-8 hours",
      popular: false,
      stats: { events: 380, rating: 4.8 }
    },
    {
      id: 12,
      icon: <PartyPopper size={28} />,
      title: "Theme Parties & Celebrations",
      shortDescription: "Creative themed events with complete décor and entertainment.",
      fullDescription: "Transform your celebration with our creative theme party services. From Bollywood nights to retro themes, carnival setups to royal celebrations, we create immersive experiences. Our packages include themed décor, costumes, props, entertainment, food stations, and photo opportunities that match your chosen theme perfectly.",
      category: "planning",
      images: [
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
      ],
      features: [
        "Custom Theme Conceptualization",
        "Complete Themed Décor Setup",
        "Costume & Props Rental",
        "Themed Entertainment Options",
        "Food Stations Matching Theme",
        "Photo Opportunities & Backdrops"
      ],
      startingPrice: "₹30,000",
      duration: "4-6 hours",
      popular: false,
      stats: { events: 120, rating: 4.7 }
    }
  ];

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter(service => service.category === activeCategory);

  const openServiceModal = (service) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const stats = [
    { number: "700+", label: "Events Completed", icon: <Calendar className="w-5 h-5" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-5 h-5" /> },
    { number: "60+", label: "Expert Team", icon: <Users className="w-5 h-5" /> },
    { number: "8+", label: "Years Excellence", icon: <Award className="w-5 h-5" /> }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Excellence",
      description: "8+ years of creating memorable events in Nagercoil with 700+ successful celebrations"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "One-Stop Solution",
      description: "Complete event management from décor to catering, entertainment to photography"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Only the finest materials, freshest ingredients, and experienced professionals"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Service",
      description: "Every event is unique - we customize everything to match your vision perfectly"
    }
  ];

  const testimonials = [
    {
      name: "Priya & Raj",
      event: "Wedding",
      rating: 5,
      text: "VIP Function Planners made our dream wedding a reality! The décor was breathtaking, food was delicious, and coordination was flawless. Highly recommended!",
      location: "Nagercoil"
    },
    {
      name: "Sundar Industries",
      event: "Corporate Event",
      rating: 5,
      text: "Professional, punctual, and perfect execution. They handled our annual conference for 500+ guests seamlessly. Best event planners in Nagercoil!",
      location: "Nagercoil"
    },
    {
      name: "Lakshmi Devi",
      event: "60th Birthday",
      rating: 5,
      text: "The traditional welcome service and catering were exceptional. All our guests were impressed with the authentic taste and presentation. Thank you!",
      location: "Nagercoil"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center overflow-hidden "
      >

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/service-hero.mp4" type="video/mp4" />
        </video>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(212,175,55,0.1)_50%,transparent_100%)]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[10, 25, 40, 60, 75, 15, 35, 55, 80, 20, 45, 65, 85, 30, 70].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
              style={{
                left: `${pos}%`,
                top: `${(i * 7) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#d4af37]/20 border border-[#d4af37]/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
              <span className="text-xs md:text-sm text-[#d4af37] font-medium">Nagercoil's #1 Event Planners</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Best <span className="text-[#d4af37]">Event Services</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-300">
                in Nagercoil
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 font-light max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              From Birthdays and weddings to corporate events, we create unforgettable experiences with luxury décor, authentic catering, and flawless execution
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            >
              <motion.a
                href="tel:+918778304145"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d4af37] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-2xl hover:shadow-[#d4af37]/30 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call: +91 8778304145
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View Services <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span>700+ Events</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span>98% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span>ISO Certified</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-black/50 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-[#d4af37] mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4">
              Why Choose <span className="text-[#d4af37]">VIP Function Planners?</span>
            </h2>
            <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto px-4">
              Leading event management company in Nagercoil delivering excellence since 2016
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="text-[#d4af37] mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-grid" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4">
              Our Premium <span className="text-[#d4af37]">Services</span>
            </h2>
            <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto px-4 leading-relaxed">
              Comprehensive event solutions covering décor, catering, entertainment, and complete event management in Nagercoil
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12"
          >
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm transition-all duration-300 font-medium ${activeCategory === category.id
                  ? "bg-[#d4af37] text-white shadow-lg shadow-[#d4af37]/30"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-[#d4af37]/50"
                  }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-[#d4af37]/30 transition-all duration-500 cursor-pointer"
                onClick={() => openServiceModal(service)}
              >
                {/* Image */}
                <div className="relative h-44 md:h-52 overflow-hidden">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    {service.popular && (
                      <div className="bg-[#d4af37] text-white px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" fill="currentColor" />
                        Popular
                      </div>
                    )}
                    <div className="bg-black/70 text-white px-2 py-1 rounded text-xs ml-auto">
                      ⭐ {service.stats.rating}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-xs opacity-90 mb-0.5">From</p>
                    <p className="text-base md:text-lg font-bold">{service.startingPrice}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="text-[#d4af37] flex-shrink-0 mt-0.5">
                      {service.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-black group-hover:text-[#d4af37] transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 md:mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    {service.duration}
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 2 && (
                      <div className="text-xs text-[#d4af37] font-medium">
                        +{service.features.length - 2} more features
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-1.5 md:gap-2 text-[#d4af37] font-semibold text-xs md:text-sm group-hover:gap-2.5 md:group-hover:gap-3 transition-all duration-300">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-[#d4af37]/10 rounded-full flex items-center justify-center group-hover:bg-[#d4af37] group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4">
              What Our <span className="text-[#d4af37]">Clients Say</span>
            </h2>
            <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto px-4">
              Real experiences from our satisfied clients across Nagercoil
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-5 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-5">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-3 md:pt-4">
                  <p className="font-bold text-black text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{testimonial.event} • {testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4">
              We Serve <span className="text-[#d4af37]">Across Nagercoil</span>
            </h2>
            <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto px-4">
              Premium event management services available throughout Nagercoil and surrounding areas
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {["Nagercoil Town", "Kottar", "Vadasery", "Aralvaimozhi", "Kuzhithurai", "Colachel", "Kanyakumari", "Marthandam"].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-white p-3 md:p-4 rounded-xl border border-gray-200 hover:border-[#d4af37]/50 transition-all duration-300 text-center"
              >
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#d4af37] mx-auto mb-1.5 md:mb-2" />
                <p className="text-xs md:text-sm font-medium text-gray-700">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-black/50  text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Ready to Plan Your <span className="text-[#d4af37]">Dream Event?</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed px-4">
              Contact VIP Function Planners today for a free consultation and customized quote. Let's create something extraordinary together!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8">
              <motion.a
                href="tel:+918778304145"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d4af37] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-2xl hover:shadow-[#d4af37]/30 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call: +91 8778304145
              </motion.a>

              <motion.a
                href="https://wa.me/918778304145"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#d4af37] text-[#d4af37] px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-[#d4af37] hover:text-black transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                WhatsApp Us
              </motion.a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-white border-t border-gray-700 pt-6 md:pt-8">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Link href="mailto:shejinoantony@gmail.com" >vipfunctionplanners@gmail.com</Link>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Nagercoil, Tamil Nadu</span>
              </div>
            </div>

            <p className="text-white/80 text-xs md:text-sm mt-4 md:mt-6 ">
              ✨ Trusted by 700+ clients • ISO Certified • 24/7 Support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 md:p-4"
            onClick={closeServiceModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl md:rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image Slider */}
              <div className="relative h-64 md:h-80 lg:h-96">
                <img
                  src={selectedService.images[currentImageIndex]}
                  alt={selectedService.title}
                  className="w-full h-full object-cover rounded-t-2xl md:rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-2xl md:rounded-t-3xl" />

                {/* Close Button */}
                <button
                  onClick={closeServiceModal}
                  className="absolute top-3 md:top-4 right-3 md:right-4 bg-black/70 text-white p-2 md:p-2.5 rounded-full hover:bg-black transition-colors z-10"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {selectedService.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-[#d4af37] w-6' : 'bg-white/50'
                        }`}
                    />
                  ))}
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 text-white">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="bg-[#d4af37] px-2.5 py-1 rounded-full text-xs font-medium">
                      {serviceCategories.find(cat => cat.id === selectedService.category)?.name}
                    </span>
                    {selectedService.popular && (
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs flex items-center gap-1">
                        <Star className="w-3 h-3" fill="currentColor" />
                        Popular
                      </span>
                    )}
                    <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs">
                      ⭐ {selectedService.stats.rating} ({selectedService.stats.events}+ events)
                    </span>
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
                    {selectedService.title}
                  </h2>
                  <div className="flex items-center gap-3 text-xs md:text-sm">
                    <span>⏱️ {selectedService.duration}</span>
                    <span className="text-base md:text-lg font-bold">From {selectedService.startingPrice}</span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-5 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">About This Service</h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {selectedService.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 flex items-center gap-2">
                      <CheckCircle className="text-[#d4af37] w-5 h-5 md:w-6 md:h-6" />
                      What's Included
                    </h3>
                    <div className="space-y-2 md:space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 text-gray-700 p-2.5 md:p-3 bg-gray-50 rounded-lg text-sm md:text-base">
                          <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full flex-shrink-0 mt-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-end border-t pt-5 md:pt-6">
                  <button
                    onClick={closeServiceModal}
                    className="px-6 md:px-8 py-2.5 md:py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm md:text-base"
                  >
                    Close
                  </button>
                  <a
                    href="tel:+918778304145"
                    className="bg-[#d4af37] text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-[#c49d2f] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    Book This Service
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;