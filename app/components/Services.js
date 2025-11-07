'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronUp, Sparkles, Star } from "lucide-react";

const services = [
  {

    title: "Stage Decoration",
    description: "Transform your venue into a breathtaking setting with our custom-designed stages and luxury floral arrangements.",
    detailedDescription: "Our expert designers create stunning backdrops, elegant mandaps, and thematic decorations that reflect your personality. We specialize in floral arrangements, lighting design, and custom props to make your event visually spectacular.",
    category: "styling",
    image: "/services/stage.jpg",
    highlights: ["Custom Thematic Designs", "Premium Floral Arrangements", "Elegant Backdrops", "Lighting Design"]
  },
  {

    title: "Catering Services",
    description: "Veg and non-veg wedding catering with authentic taste, freshness, and impeccable presentation.",
    detailedDescription: "Our culinary team prepares exquisite menus with the freshest ingredients. We offer live counters, international cuisines, and traditional specialties with attention to dietary preferences and presentation.",
    category: "hospitality",
    image: "/services/catering.jpg",
    highlights: ["Veg & Non-Veg Options", "100+ Dish Selection", "Live Counters", "International Cuisines"]
  },
  {
    title: "Wedding Catering & Buffet",
    description: "Complete catering solutions for weddings with traditional feasts and variety menus.",
    detailedDescription: "From elaborate wedding feasts to sophisticated buffet setups, we manage everything with precision. Our services include menu planning, food stations, serving staff, and cleanup.",
    category: "hospitality",
    image: "/services/buffet.jpg",
    highlights: ["Traditional Wedding Feasts", "Multiple Cuisine Options", "Professional Serving Staff", "Hygienic Food Handling"]
  },
  {

    title: "DJ Music",
    description: "Professional DJ services to set the mood and keep your celebration energized.",
    detailedDescription: "Our experienced DJs curate playlists that match your event's vibe. We provide high-quality sound systems, lighting effects, and MC services to keep the energy high throughout your celebration.",
    category: "entertainment",
    image: "/services/dj.jpg",
    highlights: ["Curated Playlists", "High-Quality Sound Systems", "Lighting Effects", "MC Services"]
  },
  {

    title: "Welcome Dolls & Girls",
    description: "Elegant welcome arrangements to greet your guests in style.",
    detailedDescription: "Make a grand first impression with our traditional welcome services. We provide professionally trained staff in traditional attire, flower garlands, and ceremonial welcome items.",
    category: "hospitality",
    image: "/services/wellcomedoll.jpg",
    highlights: ["Traditional Attire", "Floral Arrangements", "Professional Staff", "Custom Welcome Rituals"]
  },
  {

    title: "Fun Games & Return Gifts",
    description: "Entertainment activities and thoughtfully curated return gifts for your guests.",
    detailedDescription: "We organize engaging games and activities suitable for all age groups. Our return gift selection includes customized options that your guests will cherish as mementos of your special day.",
    category: "entertainment",
    image: "/services/games.jpg",
    highlights: ["Age-Appropriate Activities", "Customized Return Gifts", "Professional Hosts", "Prizes & Awards"]
  },
  {

    title: "Photography & Videography",
    description: "Cinematic coverage to capture every magical moment of your special day.",
    detailedDescription: "Our professional photographers and videographers use state-of-the-art equipment to capture your event from every angle. We offer pre-wedding shoots, candid coverage, and beautifully edited albums and films.",
    category: "entertainment",
    image: "/services/photo.jpg",
    highlights: ["Pre-Wedding Shoots", "Candid Coverage", "Drone Photography", "Custom Albums & Films"]
  },
];

export default function ServicesGrid() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-3 text-black"
        >
          Our <span className="text-gold">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
        >
          We offer a wide range of services to ensure your wedding planning experience is stress-free and enjoyable.
        </motion.p>
        <div className="h-1 w-20 bg-gold mx-auto rounded-full mb-8"></div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col w-full max-w-sm mx-auto"
            >
              {/* Title */}
              <div className="bg-gradient-to-r from-gold/20 to-yellow-100 text-black font-semibold text-lg p-3 flex items-center justify-center">
                <Sparkles className="mr-2 text-black" size={18} /> {s.title}
              </div>

              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Description */}
              <div className="p-5 text-center flex-1 flex flex-col">
                <p className="text-gray-700 text-sm mb-3 flex-1">{s.description}</p>

                {/* Learn More Toggle */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="text-gold font-medium flex items-center justify-center gap-2 mt-auto"
                >
                  {openIndex === i ? <>Hide Details <ChevronUp size={18} /></> : <>Learn More <ChevronDown size={18} /></>}
                </button>

                {/* Dropdown Details */}
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 text-left bg-gray-50 rounded-xl p-4 border border-gray-100"
                    >
                      <p className="text-gray-700 text-sm mb-2">{s.detailedDescription}</p>
                      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                        {s.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Star size={14} className="text-gold" /> {h}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}