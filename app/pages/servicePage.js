'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CTA from "../components/cta";
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
  Car,
  Home,
  Cake,
  Drum,
  IceCream,
  Popcorn,
  Snowflake,
  Sparkles as SparklesIcon,
  ChevronLeft
} from 'lucide-react';
import Link from "next/link";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true
  };

  const serviceCategories = [
    {
      id: "decorations",
      name: "Decorations",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-[#f7e9b8] to-[#fdfcf9]",
      description: "Transform any venue into a magical setting with our luxury décor services",
      subServices: [
        {
          name: "Stage Decoration",
          description: "Grand stage setups with premium floral arrangements, custom backdrops, and thematic props",
          image: "/services/dec/stage1.jpeg",
          media: [
            { type: "video", url: "/services/dec/decvid1.mp4" },
            
            { type: "video", url: "/services/dec/decvid2.mp4" },
            { type: "image", url: "/services/dec/stage2.jpeg" },
            { type: "image", url: "/services/dec/stage3.jpeg" },
            { type: "video", url: "/services/dec/decvid3.mp4" },
            { type: "image", url: "/services/dec/stage1.jpeg" },
            { type: "image", url: "/services/dec/stage4.jpeg" },
            { type: "video", url: "/services/dec/decvid4.mp4" },
            { type: "image", url: "/services/dec/WhatsApp Image 2025-11-09 at 11.28.33 AM.jpeg" },
            { type: "image", url: "/services/dec/WhatsApp Image 2025-11-09 at 11.28.34 AM.jpeg" },
            { type: "image", url: "/services/dec/WhatsApp Image 2025-11-09 at 11.28.35 AM (1).jpeg" },
            { type: "image", url: "/services/dec/WhatsApp Image 2025-11-09 at 11.28.35 AM.jpeg" },
            // { type: "image", url: "/services/dec/WhatsApp Image 2025-11-09 at 11.29.36 AM.jpeg" },
            { type: "image", url: "/services/dec/WhatsApp Image 2025-11-09 at 11.54.04 AM (1).jpeg" },
            // { type: "image", url: "/services/dec/WhatsApp Image 2025-11-09 at 11.54.04 AM.jpeg" }
          ],
          features: ["Custom Thematic Designs", "Premium Floral Arrangements", "LED Lighting", "3D Props"]
        },
        {
          name: "Car Decoration",
          description: "Beautiful floral and ribbon decorations for wedding cars and VIP vehicles",
          image: "/services/dec/car/car2.jpg",
          media: [
            { type: "image", url: "/services/dec/car/car2.jpg" },
            { type: "image", url: "/services/dec/car/car1.jpg" },
            { type: "image", url: "/services/dec/car/cardec.webp" }
          ],
          features: ["Fresh Flower Garlands", "Ribbon Work", "Traditional Designs", "Modern Styles"]
        },
        {
          name: "Home Decoration",
          description: "Complete home transformation for festivals, weddings, and special occasions",
          image: "/services/dec/home/home.jpg",
          media: [
            { type: "image", url: "/services/dec/home/home.jpg" }
          ],
          features: ["Entrance Decor", "Living Area Setup", "Traditional Elements", "Modern Touches"]
        },
        {
          name: "Birthday Decoration",
          description: "Thematic birthday decorations for all ages with balloons, props, and backdrops",
          image: "/services/dec/birthday/birthday.webp",
          media: [
             { type: "video", url: "/services/dec/birthday/birthday.mp4" },
             { type: "image", url: "/services/dec/birthday/birthday1.webp" },
             { type: "image", url: "/services/dec/birthday/birthday2.webp" }
          ],
          features: ["Theme Based Decor", "Balloon Arrangements", "Photo Backdrops", "Age Appropriate Designs"]
        },
        {
          name: "Mandap Decoration",
          description: "Traditional South Indian wedding mandap with floral arrangements",
          image: "/services/dec/mandap/mandp.mp4",
          media: [
            { type: "video", url: "/services/dec/mandap/mandp.mp4" }
          ],
          features: ["Traditional Mandap", "Floral Designs", "Cultural Elements", "Custom Themes"]
        },
        {
          name: "Entrance Decoration",
          description: "Grand entrance setups with floral arches and welcome decorations",
          image: "/services/dec/entrance/entrance.webp",
          media: [
            { type: "image", url: "/services/dec/entrance/entrance.jpg" },
            
            { type: "image", url: "/services/dec/entrance/entrance1.jpg" },
            { type: "image", url: "/services/dec/entrance/entrance.webp" },
          ],
          features: ["Floral Arches", "Welcome Gates", "Lighting Effects", "Grand Designs"]
        },
        {
          name: "Theme Decoration",
          description: "Complete thematic decorations for various event concepts and styles",
          image: "/services/dec/theme/theme.jpg",
          media: [
            { type: "image", url: "/services/dec/theme/theme.jpg" }
          ],
          features: ["Custom Themes", "Concept Design", "Props & Backdrops", "Complete Setup"]
        }
      ]
    },
    {
      id: "catering",
      name: "Catering Services",
      icon: <Utensils className="w-6 h-6" />,
      gradient: "from-[#f7e9b8] to-[#fdfcf9]",
      description: "Authentic multi-cuisine catering with impeccable taste and presentation",
      subServices: [
        { 
          name: "Non-Veg Catering",
          description: "Complete vegetarian meals with traditional South Indian delicacies",
          image: "/services/cat/cat1.jpg",
          media: [
            { type: "video", url: "/services/cat/catvid.mp4" },
           
            { type: "video", url: "/services/cat/catvid1.mp4" },
            { type: "video", url: "/services/cat/catvid2.mp4" },
            { type: "video", url: "/services/cat/catvid3.mp4" },
            { type: "video", url: "/services/cat/catvid4.mp4" },
            { type: "image", url: "/services/cat/cat2.jpeg" },
            
            { type: "image", url: "/services/cat/cat3.jpeg" },
            
            { type: "image", url: "/services/cat/cat4.jpeg" },
          
          ],
           features: ["Mutton Biryani", "Chicken Curry", "Fish Fry", "Special Gravy Items"]
        },
        {
          name: "Veg Catering",
          description: "Special non-vegetarian dishes including chicken, mutton, and fish preparations",
          image: "/services/cat/nonveg.jpg",
          media: [
              { type: "image", url: "/services/cat/cat1.jpg" },
            { type: "image", url: "/services/cat/cat2.jpeg" },
           
            { type: "image", url: "/services/cat/cat3.jpeg" },
            { type: "image", url: "/services/cat/cat4.jpeg" }
          ],
         
          features: ["11 Kootu Varieties", "5 Curry Types", "3 Payasam Varieties", "Fresh Ingredients"]
        },
        {
          name: "Buffet Service",
          description: "Professional buffet arrangement with multiple cuisine options",
          image: "/services/buffet.jpg",
          media: [
            { type: "image", url: "/services/buffet.jpg" },
            { type: "image", url: "/services/cat/buffet/buffet.webp" },
            // { type: "image", url: "/services/cat/buffet/buffet1.webp" }
          ],
          features: ["Multiple Cuisines", "Live Counters", "Professional Setup", "Hygiene Standards"]
        },
        {
          name: "Serving Staff",
          description: "Professional serving staff and coordinators for seamless service",
          image: "/services/cat/staff/staff.mp4",
          media: [
            { type: "video", url: "/services/cat/staff/staff.mp4" }
          ],
          features: ["Trained Staff", "Hygiene Focus", "Guest Assistance", "Efficient Service"]
        },
        {
          name: "Mutton Biryani Special",
          description: "Signature mutton biryani cooked with traditional spices and techniques",
          image: "/services/cat/biriyani/biriyani.webp",
          media: [
            { type: "image", url: "/services/cat/biriyani/biriyani.webp" }
          ],
          features: ["Hyderabadi Style", "Traditional Dum Cooking", "Premium Mutton", "Secret Spice Blend"]
        },
      {
          name: "Dining Setup",
          description: "Complete dining setup with tables, chairs, and decorative elements",
          image: "/services/cat/dining/dining.webp",
          media: [
            { type: "image", url: "/services/cat/dining/dining.webp" },
            { type: "image", url: "/services/cat/dining/dining1.webp" },

          ],
          features: ["Customized Tables", "Decorative Chairs", "Lighting Setup", "Complete Setup"]

      }

      ]
    },
    {
      id: "desserts",
      name: "Desserts & Stalls",
      icon: <IceCream className="w-6 h-6" />,
      gradient: "from-[#f7e9b8] to-[#fdfcf9]",
      description: "Sweet treats and specialty food stalls for all your event needs",
      subServices: [
        {
          name: "Popcorn Station",
          description: "Freshly popped popcorn with various flavors and toppings",
          image: "/services/stalls/popcorn.jpg",
          media: [{ type: "image", url: "/services/stalls/popcorn.jpg" }],
          features: ["Multiple Flavors", "Caramel & Cheese", "Fresh Preparation", "Self-Service Station"]
        },
        {
          name: "Ice Cream Parlor",
          description: "Premium ice cream with toppings and customizations",
          image: "/services/stalls/icecream.jpg",
          media: [{ type: "image", url: "/services/stalls/icecream.jpg" }],
          features: ["Various Flavors", "Toppings Bar", "Waffle Cones", "Sundae Options"]
        },
        {
          name: "Dessert Counters",
          description: "Assorted Indian and Western desserts for all tastes",
          image: "/services/stalls/desserts.webp",
          media: [
             {type: "image", url: "/services/stalls/counters/desserts1.webp" },
            { type: "image", url: "/services/stalls/counters/desserts2.webp" },
            { type: "image", url: "/services/stalls/counters/desserts3.webp" },
             { type: "image", url: "/services/stalls/counters/desserts4.webp" },
            ],
          features: ["Indian Sweets", "Pastries & Cakes", "Fruit Desserts", "Sugar-free Options"]
        },
        {
          name: "Live Food Counters",
          description: "Live cooking stations with interactive food preparation",
          image: "/services/stalls/livefood.jpg",
          media: [{ type: "image", url: "/services/stalls/livefood.jpg" }],
          features: ["Live Cooking", "Interactive Stations", "Fresh Preparation", "Chef Service"]
        },
        {
          name: "Juice & Beverage Stall",
          description: "Fresh juices, mocktails, and beverage stations",
          image: "/services/stalls/drinks.webp",
          media: [{ type: "image", url: "/services/stalls/drinks.webp" }],
          features: ["Fresh Juices", "Mocktails", "Beverage Bar", "Custom Drinks"]
        },
        {
          name: "Pani Puri Counter",
          description: "Traditional Indian street food and variety items",
          image: "/images/pani-puri-stall.jpg",
          media: [{ type: "image", url: "/services/stalls/cheet.webp" }],
          features: ["Street Food", "Multiple Varieties", "Live Preparation", "Authentic Taste"]
        },
        {
          name: "Variety tea & Coffee Stall",
          description: "Assorted tea and coffee options for all preferences",
          image: "/services/stalls/tea.webp",
          media: [{ type: "image", url: "/services/stalls/tea.webp" }],
          features: ["Variety tea contains rose patel tea, black tea , green tea , luchi tea, herbal tea , lemon tea , masala tea", "Premium Selection", "Live Preparation", "Authentic Taste"]
        },
        {
          name: "Cotton Candy Stall",
          description: "Sweet, fluffy clouds of pure happiness for all ages",
          image: "/images/cotton-candy-stall.jpg",
          media: [{ type: "image", url: "/images/cotton-candy-stall.jpg" }],
          features: ["Multiple Colors", "Fresh Preparation", "Kid Friendly", "Fun Experience"]
        },
        {
          name: "Chocolate Fountain",
          description: "Dip fruits and treats into rich melted chocolate",
          image: "/services/stalls/chocolates.webp",
          media: [{ type: "image", url: "/services/stalls/chocolates.webp" },
            { type: "image", url: "/services/stalls/chocolates1.webp" }
          ],
          features: ["Premium Chocolate", "Fresh Fruits", "Interactive Station", "Dessert Bar"]
        },
        {
          name: "Wine Counter",
          description: "A classy corner for your premium event moments",
          image: "/images/wine-counter.jpg",
          features: ["Premium Selection", "Professional Service", "Elegant Setup", "Bar Service"]
        },
        {
          name: "Printed Balloons",
          description: "Customized balloons with names or messages",
          image: "/images/printed-balloons.jpg",
          features: ["Custom Printing", "Multiple Colors", "Name & Messages", "Event Branding"]
        },
        {
          name: "Specialty Food Stalls",
          description: "Theme-based food stalls and specialty counters",
          image: "/services/cat/buffet/buffet1.webp",
          media: [
            { type: "image", url: "/services/stalls/tea1.webp" },
            { type: "image", url: "/services/cat/buffet/buffet1.webp" },
            { type: "image", url: "/services/stalls/special.webp" }],
          features: ["Theme Based", "Specialty Items", "Custom Stalls", "Unique Experience"]
        }
        ,
        {
          name : "Sweets beeda stall",
          description : "Traditional south indian sweets beeda stall for all occasions",
          image : "/services/stalls/sweets.webp",
          media: [{ type: "image", url: "/services/stalls/sweets.webp" },
            { type: "image", url: "/services/stalls/sweets1.webp" }
          ],
          features : ["Traditional sweets","Variety of beeda","Freshly made","Attractive presentation"]
        }
      ]  
    },
    {
      id: "entertainment",
      name: "Music & Entertainment",
      icon: <Music className="w-6 h-6" />,
      gradient: "from-[#f7e9b8] to-[#fdfcf9]",
      description: "Professional entertainment services to energize your celebration",
      subServices: [
        {
          name: "DJ Services",
          description: "Professional DJs with extensive music libraries and equipment",
          image: "/services/dj/dj1.jpg",
          images: [
            "/services/dj/dj1.jpg",
            "/services/dj/dj2.jpeg"
          ],
          features: ["Bollywood & International", "Premium Sound Systems", "Lighting Effects", "MC Services"]
        },
        {
          name: "Music Orchestra",
          description: "Live bands and orchestras for traditional and contemporary music",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
          features: ["Live Performances", "Multiple Genres", "Traditional Instruments", "Custom Playlists"]
        },
        {
          name: "Dhol Drummers",
          description: "Traditional dhol and percussion artists for grand entries",
          image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80",
          features: ["Traditional Dhol", "Percussion Ensemble", "Grand Entry Beats", "Interactive Performance"]
        },
        {
          name: "Photo Booth",
          description: "Fun photo booth with props for guest entertainment",
          image: "/services/photo.jpg",
          features: ["Props & Backdrops", "Instant Prints", "Digital Copies", "Fun Experience"]
        },
        {
          name: "Games & Activities",
          description: "Fun games and activities for all age groups",
          image: "/services/games.jpg",
          features: ["All Ages", "Interactive Games", "Team Activities", "Entertainment"]
        },
        {
          name: "Live Performances",
          description: "Dance troupes and cultural performances",
          image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=600&q=80",
          media: [
            { type: "video", url: "/services/entertainment/liveperformance.mp4" },
          ],
          features: ["Cultural Dances", "Bollywood Performances", "Interactive Acts", "Theme Based Shows"]
        },
        {
          name: "Sound & Lighting",
          description: "Professional sound systems and lighting effects",
          image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80",
          media:[
            { type: "video", url: "/services/entertainment/sound.mp4" },
             {type: "image", url: "/services/dec/home/home.jpg"},
             { type: "image", url: "/services/entertainment/sound.webp" },
            
          ],
          features: ["Premium Sound", "Stage Lighting", "Special Effects", "Professional Setup"]
        }
      ]
    },
    {
      id: "welcome",
      name: "Welcome Services",
      icon: <SparklesIcon className="w-6 h-6" />,
      gradient: "from-[#f7e9b8] to-[#fdfcf9]",
      description: "Grand traditional welcome with professional staff and ceremonial arrangements",
      subServices: [
        {
          name: "Welcome Dolls",
          description: "Traditional welcome dolls and decorative arrangements",
          image: "/services/doll/doll.mp4",
          // images: [
          //   "/services/doll/doll1.jpg",
          //   "/services/doll/doll2.jpeg",
          //   "/services/doll/doll3.jpeg"
          // ],
          media: [
            { type: "video", url: "/services/doll/doll.mp4" },
            { type: "image", url: "/services/doll/doll1.jpg" },
            { type: "image", url: "/services/doll/doll2.jpeg" },
            { type: "image", url: "/services/doll/doll3.jpeg" }
          ],

          features: ["Traditional Dolls", "Decorative Setup", "Cultural Significance", "Custom Designs"]
        },
        {
          name: "Welcome Girls",
          description: "Professionally trained staff in traditional attire for guest welcome",
          image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
          features: ["Traditional Attire", "Professional Training", "Guest Assistance", "Cultural Welcome"]
        },
        {
          name: "Aarthi Services",
          description: "Traditional aarthi and ceremonial welcome rituals",
          image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=600&q=80",
          features: ["Traditional Aarthi", "Ceremonial Items", "Religious Rituals", "Cultural Authenticity"]
        },
        {
          name: "Floral Welcome",
          description: "Fresh flower garlands and floral arrangements for guests",
          image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80",
          features: ["Fresh Flower Garlands", "Jasmine & Rose", "Traditional Designs", "Premium Quality"]
        },
        {
          name: "Traditional Welcome Setup",
          description: "Complete traditional welcome setup with all ceremonial items",
          image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80",
          features: ["Complete Setup", "Ceremonial Items", "Traditional Rituals", "Cultural Authenticity"]
        },
        {
          name: "Custom Welcome Arrangements",
          description: "Customized welcome setups matching event theme and requirements",
          image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
          features: ["Custom Design", "Theme Matching", "Personalized Touch", "Unique Concepts"]
        },
        {
          name: "Professional Welcome Team",
          description: "Trained professional team for grand welcome ceremonies",
          image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
          features: ["Professional Team", "Trained Staff", "Coordinated Service", "Grand Welcome"]
        }
      ]
    },
    {
      id: "photography",
      name: "Photography Services",
      icon: <Camera className="w-6 h-6" />,
      gradient: "from-[#f7e9b8] to-[#fdfcf9]",
      description: "Professional photography and videography to capture every precious moment",
      subServices: [
        {
          name: "Pre-Wedding Shoots",
          description: "Creative pre-wedding photography at locations of your choice",
          image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
          features: ["Location Shoots", "Creative Concepts", "Candid Photography", "Professional Editing"]
        },
        {
          name: "Event Coverage",
          description: "Complete event photography covering all ceremonies and moments",
          image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=600&q=80",
          features: ["Full Day Coverage", "Multiple Photographers", "Candid Shots", "Traditional Poses"]
        },
        {
          name: "Cinematic Videography",
          description: "4K cinematic video coverage with drone shots and professional editing",
          image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=600&q=80",
          features: ["4K Resolution", "Drone Coverage", "Cinematic Editing", "Same Day Edits"]
        },
        {
          name: "Album Design",
          description: "Beautifully designed photo albums and digital galleries",
          image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=80",
          features: ["Premium Albums", "Digital Copies", "Custom Designs", "Quick Delivery"]
        },
        {
          name: "Candid Photography",
          description: "Natural and candid moments captured professionally",
          image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
          features: ["Natural Moments", "Candid Shots", "Emotional Captures", "Professional Quality"]
        },
        {
          name: "Traditional Photography",
          description: "Traditional posed photography for formal portraits",
          image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=600&q=80",
          features: ["Formal Portraits", "Traditional Poses", "Family Photos", "Classic Style"]
        },
        {
          name: "Same Day Edits",
          description: "Quick editing and same day video highlights",
          image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=600&q=80",
          features: ["Quick Turnaround", "Same Day Delivery", "Highlight Reels", "Professional Editing"]
        }
      ]
    },
    {
      id: "special-effects",
      name: "Special Effects & Entries",
      icon: <Snowflake className="w-6 h-6" />,
      gradient: "from-[#f7e9b8] to-[#fdfcf9]",
      description: "Grand entry setups with special effects for memorable moments",
      subServices: [
        {
          name:"Wedding Special Entry",
          description:"Grand wedding entries with special effects like flower showers, snow effects, and LED dance floors",
         
          media: [{ type: "video", url: "/services/special-effects/weddingentry.mp4" },],
          features:["Flower Showers","Snow Effects","LED Dance Floor","Grand Entrance"]
        }
        ,{
          name: "flower entry",
          description: "Elegant flower shower effects for grand entrances",
          image: "/services/flower/flower.mp4",
          media: [{ type: "video", url: "/services/special-effects/flower.mp4" },],
          features: ["Flower Shower", "Ceremonial Items", "Traditional Rituals", "Cultural Authenticity"]
        },
        {
          name: "Snow Effects",
          description: "Artificial snow machines for winter wonderland effects",
          image: "/services/snow/snow.mp4",
          media: [{ type: "video", url: "/services/special-effects/snow.mp4" },],
          features: ["Snow Machines", "Winter Theme", "Safe Materials", "Atmospheric Effect"]
        },
          {
          name: "LED dance floor",
          description: "Colorful LED lighting and special effects",
          image: "/services/special-effects/led.mp4",
          media: [{ type: "video", url: "/services/special-effects/led.mp4" },],
          features: ["LED Lighting", "Color Effects", "Dynamic Patterns", "Modern Technology"]
        },
       
        {
          name: "Bubble Machines",
          description: "Bubble effects for magical and romantic atmospheres",
          image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
          features: ["Bubble Effects", "Romantic Atmosphere", "Child Friendly", "Continuous Operation"]
        },
        {
          name: "Laser Shows",
          description: "Professional laser light shows and effects",
          image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80",
          features: ["Laser Patterns", "Color Effects", "Music Synchronization", "Professional Setup"]
        },
        {
          name: "Fog Machines",
          description: "Atmospheric fog and smoke effects for dramatic entries",
          image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&w=600&q=80",
          features: ["Fog Effects", "Smoke Machines", "Dramatic Atmosphere", "Safe Materials"]
        },
        {
          name: "Sparkler Effects",
          description: "Safe sparkler effects for grand celebrations",
          image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
          features: ["Safe Sparklers", "Grand Effects", "Photo Moments", "Celebration Highlights"]
        },
      
      ]
    }
  ];

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const stats = [
    { number: "500+", label: "Events Completed", icon: <Calendar className="w-5 h-5" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Heart className="w-5 h-5" /> },
    { number: "60+", label: "Expert Team", icon: <Users className="w-5 h-5" /> },
    { number: "12+", label: "Years Excellence", icon: <Award className="w-5 h-5" /> }
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
      text: "VIP Event Management made our dream wedding a reality! The décor was breathtaking, food was delicious, and coordination was flawless. Highly recommended!",
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
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold)]"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.4),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(212,175,55,0.2)_50%,transparent_100%)]"></div>
        </div>



        {/* Hero Content */}
        <div className="relative z-10 text-center text-[var(--color-dark)] px-4 max-w-6xl mx-auto py-16">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/40 border border-[var(--color-dark)]/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 text-[var(--color-dark)] fill-[var(--color-dark)]" />
              <span className="text-xs md:text-sm text-[var(--color-dark)] font-medium">Nagercoil's #1 Event Planners</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Best <span className="text-[var(--color-dark)]">Event Services</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[var(--color-dark)]/80">
                in Nagercoil
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-[var(--color-dark)]/80 font-light max-w-4xl mx-auto leading-relaxed px-4">
              From Birthdays and weddings to corporate events, we create unforgettable experiences with luxury décor, authentic catering, and flawless execution
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <div>
                <Link
                  href="tel:+918778304145"
                  className="bg-[var(--color-dark)] text-[var(--color-gold-light)] px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-2xl hover:bg-black transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  Call: +91 8778304145
                </Link>
              </div>

              <button
                onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-[var(--color-dark)] text-[var(--color-dark)] px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-[var(--color-dark)] hover:text-[var(--color-gold-light)] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View Services <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-[var(--color-dark)]/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-dark)]" />
                <span>700+ Events</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-dark)]" />
                <span>100% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-dark)]" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-[var(--color-dark)]">
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-[var(--color-dark)] text-[var(--color-gold-light)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                style={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
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
      {/* <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-3 md:mb-4">
              Why Choose <span className="text-[#d4af37]">VIP Event Management?</span>
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
      </section> */}

      {/* Services Section - Cinematic Modern Design */}
      <section id="services-section" className="relative py-12 md:py-20  overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-[#d4af37]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="w-full relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-8 md:mb-12"
            style={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="inline-block mb-3 md:mb-4">
              <span className="bg-[#d4af37] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide">OUR SERVICES</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-black mb-2 md:mb-4 px-4">
              Crafting <span className="text-[#d4af37]">Unforgettable</span> Moments
            </h2>
            <div className="h-1 w-16 md:w-20 bg-[#d4af37] mx-auto rounded-full mb-3 md:mb-6"></div>
            <p className="text-gray-600 text-xs md:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
              Premium event solutions tailored for your special occasions
            </p>
          </motion.div>

          {/* Services Grid - Cards */}
          <div className="space-y-8 md:space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                className="relative"
                style={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                {/* Category Card */}
                <div className="bg-white/80 backdrop-blur-sm shadow-sm  shadow-gold/30 border-y border-[#d4af37]/20 overflow-hidden">
                  {/* Category Header - Compact & Modern */}
                  <div className={`relative bg-gradient-to-r ${category.gradient} p-4 md:p-6`}>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="bg-white/90 p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg">
                        <div className="text-[#d4af37]">{category.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-3xl font-bold text-[#222222] mb-0.5 md:mb-1">{category.name}</h3>
                        <p className="text-[#222222]/70 text-xs md:text-base hidden md:block">{category.description}</p>
                      </div>
                      <div className="hidden md:block">
                        <ChevronRight className="w-6 h-6 text-[#222222]/50" />
                      </div>
                    </div>
                  </div>

                  {/* Sub Services - Slider for both Mobile and Desktop */}
                  <div className="px-0  my-8 md:px-6 md:py-16">
                    {/* Mobile Slider - 1 slide */}
                    <div className="block md:hidden">
                      <Slider
                        dots={false}
                        infinite={true}
                        speed={900}
                        slidesToShow={1}
                        slidesToScroll={1}
                        arrows={false}
                        pauseOnHover={false}
                      >
                        {category.subServices.map((subService, index) => (
                          <div key={index} className="px-2 py-6">
                            <div
                              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer flex flex-col"
                              onClick={() => openServiceModal({ ...subService, category: category.name })}
                            >
                              <div className="bg-gradient-to-r from-gold/20 to-yellow-100 text-black font-semibold text-base p-3 flex items-center justify-center">
                                <Sparkles className="mr-2 text-black" size={16} /> {subService.name}
                              </div>
                              <div className="h-56 overflow-hidden flex-shrink-0">
                                {subService.media && subService.media.length > 0 ? (
                                  <Slider
                                    dots={false}
                                    infinite={true}
                                    speed={800}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    autoplaySpeed={3000}
                                    arrows={false}
                                    pauseOnHover={false}
                                  >
                                    {subService.media.map((item, idx) => (
                                      <div key={idx} className="h-56">
                                        {item.type === "video" ? (
                                          <video src={item.url} autoPlay muted loop playsInline className="w-full h-full object-fill" />
                                        ) : (
                                          <img src={item.url} alt={`${subService.name} ${idx + 1}`} className="w-full h-full object-fill" />
                                        )}
                                      </div>
                                    ))}
                                  </Slider>
                                ) : subService.images && subService.images.length > 1 ? (
                                  <Slider
                                    dots={false}
                                    infinite={true}
                                    speed={800}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    autoplay={true}
                                    autoplaySpeed={3000}
                                    arrows={false}
                                    pauseOnHover={false}
                                  >
                                    {subService.images.map((img, idx) => (
                                      <div key={idx} className="h-56">
                                        <img src={img} alt={`${subService.name} ${idx + 1}`} className="w-full h-full object-fill" />
                                      </div>
                                    ))}
                                  </Slider>
                                ) : (
                                  <div className="h-56">
                                    <img src={subService.image} alt={subService.name} className="w-full h-full object-fill" />
                                  </div>
                                )}
                              </div>
                              <div className="p-5 text-center flex-grow flex flex-col justify-between">
                                <p className="text-gray-700 text-sm mb-3 line-clamp-3">{subService.description}</p>
                                <button className="text-gold font-medium flex items-center justify-center gap-2 mx-auto">
                                  Learn More <ChevronDown size={18} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>

                    {/* Tablet Slider - 2 slides */}
                    <div className="hidden md:block lg:hidden">
                      <Slider
                        dots={false}
                        infinite={true}
                        speed={900}
                        slidesToShow={2}
                        slidesToScroll={1}
                        arrows={false}
                        pauseOnHover={false}
                      >
                        {category.subServices.map((subService, index) => (
                          <div key={index} className="px-2">
                            <div
                              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer flex flex-col"
                              onClick={() => openServiceModal({ ...subService, category: category.name })}
                            >
                              <div className="bg-gradient-to-r from-gold/20 to-yellow-100 text-black font-semibold text-base p-3 flex items-center justify-center">
                                <Sparkles className="mr-2 text-black" size={16} /> {subService.name}
                              </div>
                              <div className="h-56 overflow-hidden flex-shrink-0">
                                {subService.media && subService.media.length > 0 ? (
                                  <Slider
                                    dots={false}
                                    infinite={true}
                                    speed={800}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    autoplaySpeed={3000}
                                    arrows={false}
                                    pauseOnHover={false}
                                  >
                                    {subService.media.map((item, idx) => (
                                      <div key={idx} className="h-56">
                                        {item.type === "video" ? (
                                          <video src={item.url} autoPlay muted loop playsInline className="w-full h-full object-fill" />
                                        ) : (
                                          <img src={item.url} alt={`${subService.name} ${idx + 1}`} className="w-full h-full object-fill" />
                                        )}
                                      </div>
                                    ))}
                                  </Slider>
                                ) : subService.images && subService.images.length > 1 ? (
                                  <Slider
                                    dots={false}
                                    infinite={true}
                                    speed={800}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    autoplay={true}
                                    autoplaySpeed={3000}
                                    arrows={false}
                                    pauseOnHover={false}
                                  >
                                    {subService.images.map((img, idx) => (
                                      <div key={idx} className="h-56">
                                        <img src={img} alt={`${subService.name} ${idx + 1}`} className="w-full h-full object-fill" />
                                      </div>
                                    ))}
                                  </Slider>
                                ) : (
                                  <div className="h-56">
                                    <img src={subService.image} alt={subService.name} className="w-full h-full object-fill" />
                                  </div>
                                )}
                              </div>
                              <div className="p-5 text-center flex-grow flex flex-col justify-between">
                                <p className="text-gray-700 text-sm mb-3 line-clamp-3">{subService.description}</p>
                                <button className="text-gold font-medium flex items-center justify-center gap-2 mx-auto">
                                  Learn More <ChevronDown size={18} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>

                    {/* Desktop Slider - 3 slides */}
                    <div className="hidden lg:block">
                      <Slider
                        dots={false}
                        infinite={true}
                        speed={900}
                        slidesToShow={3}
                        slidesToScroll={1}
                        arrows={false}
                        pauseOnHover={false}
                      >
                        {category.subServices.map((subService, index) => (
                          <div key={index} className="px-2">
                            <div
                              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer flex flex-col"
                              onClick={() => openServiceModal({ ...subService, category: category.name })}
                            >
                              <div className="bg-gradient-to-r from-gold/20 to-yellow-100 text-black font-semibold text-base p-3 flex items-center justify-center">
                                <Sparkles className="mr-2 text-black" size={16} /> {subService.name}
                              </div>
                              <div className="h-56 overflow-hidden flex-shrink-0">
                                {subService.media && subService.media.length > 0 ? (
                                  <Slider
                                    dots={false}
                                    infinite={true}
                                    speed={800}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    autoplaySpeed={3000}
                                    arrows={false}
                                    pauseOnHover={false}
                                  >
                                    {subService.media.map((item, idx) => (
                                      <div key={idx} className="h-56">
                                        {item.type === "video" ? (
                                          <video src={item.url} autoPlay muted loop playsInline className="w-full h-full object-fill" />
                                        ) : (
                                          <img src={item.url} alt={`${subService.name} ${idx + 1}`} className="w-full h-full object-fill" />
                                        )}
                                      </div>
                                    ))}
                                  </Slider>
                                ) : subService.images && subService.images.length > 1 ? (
                                  <Slider
                                    dots={false}
                                    infinite={true}
                                    speed={800}
                                    slidesToShow={1}
                                    slidesToScroll={1}
                                    autoplay={true}
                                    autoplaySpeed={3000}
                                    arrows={false}
                                    pauseOnHover={false}
                                  >
                                    {subService.images.map((img, idx) => (
                                      <div key={idx} className="h-56">
                                        <img src={img} alt={`${subService.name} ${idx + 1}`} className="w-full h-full object-fill" />
                                      </div>
                                    ))}
                                  </Slider>
                                ) : (
                                  <div className="h-56">
                                    <img src={subService.image} alt={subService.name} className="w-full h-full object-fill" />
                                  </div>
                                )}
                              </div>
                              <div className="p-5 text-center flex-grow flex flex-col justify-between">
                                <p className="text-gray-700 text-sm mb-3 line-clamp-3">{subService.description}</p>
                                <button className="text-gold font-medium flex items-center justify-center gap-2 mx-auto">
                                  Learn More <ChevronDown size={18} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>

                    {/* Removed old desktop slider code
                        speed={900}
                        slidesToShow={3}
                        slidesToScroll={1}
                        // autoplay={true}
                        autoplaySpeed={2400}
                        arrows={false}
                        pauseOnHover={false}
                        pauseOnFocus={false}
                        responsive={[
                          { breakpoint: 1280, settings: { slidesToShow: 3 } },
                          { breakpoint: 1024, settings: { slidesToShow: 2 } }
                        ]}
                      >
                        {category.subServices.map((subService, index) => (
                          <div key={index} className="px-2">
                            <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              whileHover={{ y: -10 }}
                              className="group relative cursor-pointer"
                              onClick={() => openServiceModal({ ...subService, category: category.name })}
                            >
                              <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl">
                                <img
                                  src={subService.image}
                                  alt={subService.name}
                                  className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                  <h4 className="text-white font-bold text-xl mb-2 group-hover:text-[#d4af37] transition-colors">{subService.name}</h4>
                                  <p className="text-white/80 text-sm mb-4 line-clamp-2">{subService.description}</p>
                                  <div className="flex flex-wrap gap-2 mb-4">
                                    {subService.features.slice(0, 3).map((feature, idx) => (
                                      <span key={idx} className="bg-[#d4af37]/90 text-white px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                        {feature}
                                      </span>
                                    ))}
                                    {subService.features.length > 3 && (
                                      <span className="bg-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                        +{subService.features.length - 3}
                                      </span>
                                    )}
                                  </div>
                                  <button className="w-full bg-[#d4af37] text-black py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Explore Service <ArrowRight className="w-4 h-4" />
                                  </button>
                                </div>
                                <div className="absolute inset-0 border-2 border-[#d4af37] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                              </div>
                            </motion.div>
                          </div>
                        ))}
                      </Slider>
                    </div> */}
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
            className="text-center mb-12 md:mb-16"
            style={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
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
                className="bg-white p-5 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl"
                style={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
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
            className="text-center mb-10 md:mb-12"
            style={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
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
                className="bg-gradient-to-br from-gray-50 to-white p-3 md:p-4 rounded-xl border border-gray-200 hover:border-[#d4af37]/50 text-center"
                style={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: false }}
              >
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#d4af37] mx-auto mb-1.5 md:mb-2" />
                <p className="text-xs md:text-sm font-medium text-gray-700">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        text="Ready to Plan Your Dream Event?"
        desc="Contact VIP Event Management today for a free consultation and customized quote. Let's create something extraordinary together!"
        btn1="Contact Now"
        btn2="View Gallery"
        btn1link="/contact"
        btn2link="/gallery"
      />

      {/* Service Detail Modal */}
      {isModalOpen && selectedService && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeServiceModal}
        >
          <div
            className="bg-white w-full rounded-xl max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Title & Description */}
            <div className="relative bg-gradient-to-br from-gold/10 to-white p-4 md:p-6 border-b border-gray-100">
              <button
                onClick={closeServiceModal}
                className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="pr-10">
                <div className="bg-gold/20 px-3 py-1 rounded-full text-xs font-medium inline-block mb-2">
                  {selectedService.category}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">
                  {selectedService.name}
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {selectedService.description}
                </p>
              </div>
            </div>

            {/* Image/Video Slider Section */}
            <div className="relative flex-shrink-0 bg-gray-100">
              {selectedService.media && selectedService.media.length > 0 ? (
                <Slider {...sliderSettings} className="service-slider">
                  {selectedService.media.map((item, index) => (
                    <div key={index} className="outline-none">
                      {item.type === "video" ? (
                        <video
                          src={item.url}
                          controls
                          autoPlay
                          muted
                          loop
                          className="w-full h-48 md:h-80 object-fill"
                        />
                      ) : (
                        <img
                          src={item.url}
                          alt={`${selectedService.name} ${index + 1}`}
                          className="w-full h-48 md:h-80 object-fit"
                        />
                      )}
                    </div>
                  ))}
                </Slider>
              ) : selectedService.images && selectedService.images.length > 1 ? (
                <Slider {...sliderSettings} className="service-slider">
                  {selectedService.images.map((img, index) => (
                    <div key={index} className="outline-none">
                      <img
                        src={img}
                        alt={`${selectedService.name} ${index + 1}`}
                        className="w-full h-48 md:h-80 object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-48 md:h-80 object-cover"
                />
              )}
            </div>

            {/* Scrollable Content Section */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 md:p-6">
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3 flex items-center gap-2">
                    <CheckCircle className="text-gold w-5 h-5" />
                    Service Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-gray-700 p-2 md:p-3 bg-gray-50 rounded-lg">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0 mt-1.5"></div>
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-2 pt-4 border-t">
                  <Link
                    href={`https://wa.me/918778304145?text=I'm%20interested%20in%20your%20${selectedService.name}%20service%20for%20${selectedService.category}.`}
                    className="bg-gradient-to-r from-gold to-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Phone className="w-4 h-4" />
                    Book This Service
                  </Link>
                  <button
                    onClick={closeServiceModal}
                    className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium text-sm md:text-base"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;