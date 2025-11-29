"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, PartyPopper, Heart, Sparkles,Trophy,Gem,Eye,} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleBusiness from "./GoogleBusiness";

const AboutUs = () => {
  // Unsplash Images (Free to use)

  const images = [
     {
      url: "/about/reviews.jpg",
      heading: "Top Rated Google Reviews In Nagercoil",
      desc: "we are the 100% client satisfied and top rated google reviews in Nagercoil. we are the best event planners in Nagercoil."
    },  // Professional team portrait
    {
      url: "/about/planners.jpg",
      heading: "Best Event Planners In Nagercoil",
      desc: "Plan your dream event with us and let us take care of the rest. We have a team of experienced event planners who will help you plan your event from start to finish."
    }, // Event planners working
    {
      url: "/about/stage.jpg",
      heading: "Best Event Decorators In Nagercoil",
      desc: "Decorate your event with us and let us take care of the rest. We have a team of experienced event decorators who will help you decorate your event from start to finish."
    }, // Event setup
    {
      url: "/about/catering.jpg",
      heading: "Best Caterering Service In Nagercoil",
      desc: "Cater for your event with us and let us take care of the rest. We are the best specialized catering services for weddings, corporate events, and all celebrations across Kanyakumari district."
    }, // Team planning meeting
    {
      url: "/about/stalls.jpg"
      , heading: "Best Stalls and Desert Services In Nagercoil",
      desc: "Get you favourite stalls and desert services with us and let us take care of the rest. we have all caregory of stalls and desert services for weddings, corporate events, and all celebrations across Kanyakumari district."
    }, // Wedding planning // Corporate event
    {
      url: "/about/photo.jpg",
      heading: "Best Wedding Photography In Nagercoil",
      desc: "Plan your dream event with us and let us take care of the rest. we have the experienced team of wedding photographers to make your event more memorable."
    }, // Event coordination
    {
      url: "/about/dj.jpg",
      heading: "Best Music anad DJ Services In Nagercoil",
      desc: "Our team of experienced DJs and music planners will help you plan your event from start to finish. Get the best music and DJ services for weddings, corporate events, and all celebrations across Kanyakumari district."
    }, // Concert/entertainment event
   
  ];

  const whyChooseUs = [
    { icon: <Star className="text-gold w-6 h-6" />, title: "12+ Years", desc: "Experience crafting elite events" },
    { icon: <PartyPopper className="text-gold w-6 h-6" />, title: "500+ Events", desc: "Memorable moments across India" },
    { icon: <Sparkles className="text-gold w-6 h-6" />, title: "Luxury Décor", desc: "Premium staging & ambience" },
    { icon: <Heart className="text-gold w-6 h-6" />, title: "Client Love", desc: "100% satisfaction guaranteed" },
  ];

  const aboutSliderSettings = {
    infinite: true,
  
    autoplaySpeed: 3500,
    speed: 1000,
    arrows: false,
    pauseOnHover: false,
  };

  const testimonialSliderSettings = {

    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const testimonials = [
    {
      quote: "Outstanding wedding coordination with royal elegance! Every detail was perfectly organized and executed flawlessly.",
      author: "Priya & Karthik",
      event: "NagerCoil",
    },
    {
      quote: "Our corporate event was seamless. Their professionalism and creativity impressed everyone.",
      author: "Rajesh Kumar",
      event: "Kanyakumari",
    },
    {
      quote: "I didn’t have to worry about a single detail — they handled everything beautifully!",
      author: "Anjali Mehta",
      event: "Kottar",
    },
    {
      quote: "From décor to coordination, everything exceeded our expectations. Truly premium service.",
      author: "Arun & Deepa",
      event: "Asaripallam",
    },
    {
      quote: "The team was amazing, friendly, and creative. Our guests still talk about how wonderful it was!",
      author: "Sneha Sharma",
      event: "Parvathipuram",
    },
    {
      quote: "I was impressed by their professionalism and attention to detail. They made our event a true celebration!",
      author: "Ramesh Kumar",
      event: "Marthandam",
    },
    {
      quote: "The catering was absolutely divine! Every dish was fresh, flavorful, and beautifully presented. Our guests couldn't stop praising the food.",
      author: "Lakshmi & Venkat",
      event: "Colachel",
    },
    {
      quote: "Best decision we made for our daughter's birthday! The theme decoration was magical and the kids had an unforgettable time.",
      author: "Divya Menon",
      event: "Thuckalay",
    },
    {
      quote: "Their DJ and music setup was phenomenal! The energy throughout the night was incredible. Everyone danced till the end!",
      author: "Vikram & Meera",
      event: "Kuzhithurai",
    },
    {
      quote: "The stage decoration was breathtaking! It looked exactly like we imagined, but even better. Thank you for making our day special!",
      author: "Babu",
      event: "Puthalam",
    },
    {
      quote: "From the initial consultation to the final execution, everything was smooth and stress-free. Highly professional team!",
      author: "Arjun Enterprises",
      event: "Nagercoil",
    },
    {
      quote: "Exceptional traditional welcome arrangements created a warm, honored atmosphere that impressed all our guests throughout the celebration.",
      author: "Geetha Krishnan",
      event: "Kanyakumari",
    }
  ];

    // Achievement stats
  const achievements = [
    { icon: <Trophy className="w-6 h-6" />, number: "500+", text: "Successful Events" },
    { icon: <Heart className="w-6 h-6" />, number: "100%", text: "Client Satisfaction" },
    { icon: <Gem className="w-6 h-6" />, number: "12+", text: "Years Excellence" },
    { icon: <Eye className="w-6 h-6" />, number: "50K+", text: "Happy Guests" }
  ];

  return (
    <section id="about" className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 bg-gold/10 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 md:-translate-x-1/2 md:-translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-black/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 md:translate-x-1/3 md:translate-y-1/3" />

      <div className="relative container mx-auto px-6 md:px-12 z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-3">
            About <span className="text-gold">V.I.P</span> Planners
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-light">
            Redefining celebrations with creativity, elegance, and perfection.
          </p>
          <div className="h-1 w-24 bg-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* 🌟 Our Story - Elegant & Responsive */}
        <section className="relative py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          {/* Background Accent Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.08),transparent_60%)]"></div>

          <div className="container mx-auto md:px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-[#d4af37]">Journey</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                From a passionate vision to Nagercoil’s most trusted event planners
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
              {/* Image - Full width on mobile, half on desktop */}
              <motion.div
                style={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 -mx-4 md:mx-0"
              >
                <div className="md:rounded-3xl overflow-hidden shadow-2xl md:border-4 border-white">
                  <Slider {...aboutSliderSettings}>
                    {/* Google Business Badge as First Slide */}
                    <div className="relative w-full h-[250px] md:h-[400px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
                      <div className="w-full max-w-sm">
                        <GoogleBusiness />
                      </div>
                    </div>
                    
                    {images.map((src, index) => (
                      <div key={index} className="relative w-full h-[250px] md:h-[400px]">
                        <Image
                          src={src.url}
                          alt={`Event ${index + 1}`}
                          fill
                          className="object-fill"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 z-10 text-white p-6"
                          style={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <h3 className="text-xl md:text-3xl font-bold mb-2 drop-shadow-lg">{src.heading}</h3>
                          <p className="text-sm md:text-base text-white/90 drop-shadow-md">{src.desc}</p>
                        </motion.div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </motion.div>

              {/* Text - Below on mobile, right on desktop */}
              <motion.div
                style={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <motion.p
                  className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4"
                  style={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Since 2010, <strong className="text-[#d4af37]">V.I.P Event Management</strong> has
                  transformed ordinary events into extraordinary experiences across
                  Nagercoil and beyond.
                </motion.p>
                <motion.p
                  className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4"
                  style={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  What began as a dream to craft meaningful celebrations has evolved
                  into a legacy of creativity, precision, and unforgettable elegance.
                </motion.p>
                <motion.p
                  className="text-gray-600 text-sm sm:text-base leading-relaxed"
                  style={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Every event we design reflects our belief — that every moment deserves
                  perfection, emotion, and timeless beauty.
                </motion.p>
              </motion.div>

   
            </div>

                         {/* stats */}
    <div className="relative py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 md:px-12 z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gold/5 to-white border border-gold/10 shadow-lg rounded-xl md:rounded-2xl p-3 md:p-6 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-gold mb-2 flex justify-center">
                <div className="w-5 h-5 md:w-6 md:h-6">{item.icon}</div>
              </div>
              <div className="text-xl md:text-4xl font-bold text-dark mb-1 md:mb-2">
                {item.number}
              </div>
              <div className="text-gray-600 text-[10px] md:text-sm leading-tight">
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
          </div>
        </section>


        


  

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-center text-xl md:text-2xl font-semibold mb-8 text-dark">
            What Our <span className="text-gold">Clients Say</span>
          </h3>

          <div className="max-w-3xl mx-auto">
            <Slider {...testimonialSliderSettings}>
              {testimonials.map((t, i) => (
                <div key={i}>
                  <div className="bg-gradient-to-br from-gold/5 to-white border border-gold/10 shadow-md rounded-xl p-6 md:p-10 text-center mx-3">
                    <p className="text-gray-700 italic mb-3 text-sm md:text-base leading-relaxed">
                      “{t.quote}”
                    </p>
                    <div className="text-gold font-semibold text-sm md:text-base">
                      — {t.author}
                    </div>
                    <div className="text-gray-500 text-xs md:text-sm">{t.event}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
