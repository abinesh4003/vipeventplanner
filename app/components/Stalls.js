'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import { PartyPopper, IceCream2, GlassWater, Candy, Beer, CupSoda, Popcorn } from "lucide-react";
import Link from "next/link";

const Stalls = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stalls = [
    {
      name: "Popcorn Stall",
      description: "Fresh, buttery, and a total crowd favorite.",
      image: "/images/popcorn-stall.jpg",
      icon: <Popcorn className="w-6 h-6 text-gold" />,
    },
    {
      name: "Cotton Candy Stall",
      description: "Sweet, fluffy clouds of pure happiness.",
      image: "/images/cotton-candy-stall.jpg",
      icon: <Candy className="w-6 h-6 text-gold" />,
    },
    {
      name: "Chocolate Fountain",
      description: "Dip fruits and treats into rich melted chocolate.",
      image: "/images/chocolate-fountain.jpg",
      icon: <CupSoda className="w-6 h-6 text-gold" />,
    },
    {
      name: "Ice Cream Counter",
      description: "Chilled desserts in your favorite creamy flavors.",
      image: "/images/ice-cream-stall.jpg",
      icon: <IceCream2 className="w-6 h-6 text-gold" />,
    },
    {
      name: "Pani Puri & Chaat Stall",
      description: "Spicy, tangy, and made fresh on spot.",
      image: "/images/pani-puri-stall.jpg",
      icon: <PartyPopper className="w-6 h-6 text-gold" />,
    },
    {
      name: "Wine Counter",
      description: "A classy corner for your premium event moments.",
      image: "/images/wine-counter.jpg",
      icon: <Beer className="w-6 h-6 text-gold" />,
    },
    {
      name: "Mocktails & Drinks",
      description: "Refreshing drinks for an elegant welcome.",
      image: "/images/mocktails.jpg",
      icon: <GlassWater className="w-6 h-6 text-gold" />,
    },
    {
      name: "Printed Balloons",
      description: "Customized balloons with names or messages.",
      image: "/images/printed-balloons.jpg",

    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2400,
    speed: 900,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      ref={ref}
      id="stalls"
      className="py-20 bg-gradient-to-b from-white to-[#fffaf2] relative overflow-hidden"
    >
      {/* Decorative soft gold stars */}
      <div className="absolute top-10 left-10 text-gold/10 text-7xl">✦</div>
      <div className="absolute bottom-10 right-10 text-gold/10 text-7xl">✦</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black font-poppins mb-3">
            Stalls & <span className="text-gold">Fun Options</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-5" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light font-montserrat">
            Elevate your celebrations with our elegant stalls and interactive experiences.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <Slider {...sliderSettings}>
            {stalls.map((stall, index) => (
              <div key={index} className="px-3">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gold/10"
                >
                  {/* Image with zoom animation */}
                  <div className="relative h-60 overflow-hidden">
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.1 }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                      className="w-full h-full"
                    >
                      <Image
                        src={stall.image}
                        alt={stall.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex justify-end items-start p-4">
                      <div className="bg-white/90 rounded-full p-2 shadow-lg">
                        {stall.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-black font-poppins group-hover:text-gold transition-colors duration-300">
                      {stall.name}
                    </h3>
                    <p className="text-gray-600 font-light font-montserrat mt-2 mb-4">
                      {stall.description}
                    </p>


                    <Link href='/contact'>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gold border border-gold px-5 py-2 rounded-full font-medium hover:bg-gold hover:text-white transition-all duration-300"
                      >
                        Explore
                      </motion.button>
                      </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-14"
        >
          <Link href='/contact'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Our Stalls
          </motion.button>
          </Link>
          <p className="text-gray-600 text-sm mt-4 font-light">
            Make your event unforgettable with these premium additions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stalls;
