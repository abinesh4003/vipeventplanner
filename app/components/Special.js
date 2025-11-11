'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { type } from "os";

const SpecialHighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const highlights = [
    {
      title: "Stunning Stage Decoration in Nagercoil",
      description: "Our stage décor in Nagercoil service transforms your venue into a breathtaking setting. Whether it's birthday theme décor, elegant wedding décor, luxury floral arrangements, or custom-designed stages, we deliver perfection every time.",
      media: [
        { type: "video", src: "/services/dec/decvid1.mp4" },
         { type: "video", src: "/services/dec/decvid1.mp4" },
        
        // { type: "image", src: "/images/stage-highlight-2.jpg" },
        // { type: "image", src: "/images/stage-highlight-3.jpg" },
        // { type: "image", src: "/images/stage-highlight-4.jpg" }
      ],
      alignment: "left"
    },
    {
      title: "Best Catering Services in Nagercoil",
      description: "Food is the heart of every celebration, and we bring flavors your guests will never forget. Our catering services in Nagercoil include veg and non-veg wedding catering, buffet catering, and special menus with authentic taste, freshness, and presentation.",
      media: [
          {type: "video", src: "/services/cat/catvid.mp4"},
    {type: "video", src: "/services/cat/catvid1.mp4"},
    {type: "video", src: "/services/cat/catvid2.mp4"},
     {type: "video", src: "/services/cat/catvid3.mp4"},



        // { type: "image", src: "/images/catering-highlight.jpg" },
        // { type: "image", src: "/images/catering-highlight-2.jpg" },
        // { type: "image", src: "/images/catering-highlight-3.jpg" }
      ],
      alignment: "right",
      subItems: [
        {
          title: "Veg Catering",
          description: "Traditional feasts with 11 kootu, 5 curry, and 3 payasam, plus variety rice, sweets, and snacks.",
          items: [
            "Traditional feasts with 11 kootu",
            "5 curry varieties",
            "3 types of payasam",
            "Variety rice options",
            "Sweets and snacks"
          ]
        },
        {
          title: "Non-Veg Catering",
          description: "Delicious biryanis, chicken & mutton curries, seafood specialties, grills, and festive starters.",
          items: [
            "Flavorful biryanis",
            "Chicken & mutton curries",
            "Seafood specialties",
            "Grills and barbecues",
            "Festive starters"
          ]
        }
      ]
    },
    {
      title: "Entertainment & Special Arrivals",
      description: "Set the mood with our professional DJ music in Nagercoil, live games, and entertainment that keeps the crowd energized. Make a grand statement with our couple entry concepts like snow fog, fire shot, floral pathway, or royal-themed arrivals.",
      media: [

        {type: "video" ,src:"/services/dj/djvid1.mp4"},
        {type: "video" ,src:"/services/dj/djvid.mp4"},
        // { type: "image", src: "/images/entertainment-highlight.jpg" },
        // { type: "image", src: "/images/entertainment-highlight-2.jpg" },
        // { type: "image", src: "/images/entertainment-highlight-3.jpg" }
      ],
      alignment: "left"
    },
    {
      title: "Capture the Magic – Photography & Videography",
      description: "Relive your special day with our cinematic photography and videography. From candid emotions to stunning highlights, we capture every magical moment in style.",
      media: [
        { type: "image", src: "/images/photography-highlight.jpg" },
        { type: "image", src: "/images/photography-highlight-2.jpg" },
        { type: "image", src: "/images/photography-highlight-3.jpg" }
      ],
      alignment: "right"
    }
  ];


  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !isMobile,
    pauseOnHover: false,
    pauseOnfocus: false
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-[#fdfaf5] relative overflow-hidden">
      <div className="absolute top-20 left-4 text-gold/10 text-6xl md:text-8xl md:left-10">✦</div>
      <div className="absolute bottom-20 right-4 text-gold/10 text-6xl md:text-8xl md:right-10">✦</div>

      <div className="container mx-auto px-0 md:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4 md:px-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black font-poppins mb-4">
            Special <span className="text-gold">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Discover our premium services that make every event extraordinary
          </p>
        </motion.div>

        <div className="space-y-24">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-10`}
              >
                {/* Image Slider with Zoom Animation */}
 <div className="w-full lg:w-1/2 relative overflow-hidden rounded-none md:rounded-3xl shadow-none md:shadow-2xl border-none md:border md:border-gold/10">
  <Slider {...sliderSettings}>
    {highlight.media.map((item, idx) => (
      <div
        key={idx}
        className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] overflow-hidden rounded-none md:rounded-3xl"
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={item.src}
            alt={highlight.title}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        )}
      </div>
    ))}
  </Slider>
</div>



               
                {/* Text Content */}
                <div className="w-full lg:w-1/2 px-4 md:px-0">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl md:text-3xl font-semibold text-black font-montserrat">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 font-light leading-relaxed mb-6">
                      {highlight.description}
                    </p>

                    {/* Sub-Items Section (Only for Catering) */}
                    {highlight.subItems && (
                      <div className="space-y-8 mb-8">
                        {highlight.subItems.map((sub, subIndex) => (
                          <div
                            key={subIndex}
                            className="bg-white border border-gold/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                          >
                            <h4 className="text-xl font-semibold text-gold mb-3">{sub.title}</h4>
                            <p className="text-gray-600 mb-3 font-light">{sub.description}</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              {sub.items.map((item, i) => (
                                <li key={i} className="text-sm md:text-base">{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    <Link href="/services">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-gold to-gold-dark text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-medium"
                    >
                      Learn More
                    </motion.button>
                    </Link>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialHighlightsSection;