"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, PartyPopper, Heart, Sparkles } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  // Unsplash Images (Free to use)
  const images = [
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      heading: "Best Event Planners In Nagercoil",
      desc: "Plan your dream event with us and let us take care of the rest. We have a team of experienced event planners who will help you plan your event from start to finish."
    }, // Event planners working
    {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      heading: "Best Event Decorators In Nagercoil",
      desc: "Decorate your event with us and let us take care of the rest. We have a team of experienced event decorators who will help you decorate your event from start to finish."
    }, // Event setup
    {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
      heading: "Best Caterering Service In Nagercoil",
      desc: "Cater for your event with us and let us take care of the rest. We are the best specialized catering services for weddings, corporate events, and all celebrations across Kanyakumari district."
    }, // Team planning meeting
    {
      url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
      , heading: "Best Stalls and Desert Services In Nagercoil",
      desc: "Get you favourite stalls and desert services with us and let us take care of the rest. we have all caregory of stalls and desert services for weddings, corporate events, and all celebrations across Kanyakumari district."
    }, // Wedding planning // Corporate event
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      heading: "Best Wedding Photography In Nagercoil",
      desc: "Plan your dream event with us and let us take care of the rest. we have the experienced team of wedding photographers to make your event more memorable."
    }, // Event coordination
    {
      url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
      heading: "Best Music anad DJ Services In Nagercoil",
      desc: "Our team of experienced DJs and music planners will help you plan your event from start to finish. Get the best music and DJ services for weddings, corporate events, and all celebrations across Kanyakumari district."
    }, // Concert/entertainment event
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
      heading: "Top Rated Google Reviews In Nagercoil",
      desc: "we are the 100% client satisfied and top rated google reviews in Nagercoil. we are the best event planners in Nagercoil."
    }  // Professional team portrait
  ];

  const whyChooseUs = [
    { icon: <Star className="text-gold w-6 h-6" />, title: "12+ Years", desc: "Experience crafting elite events" },
    { icon: <PartyPopper className="text-gold w-6 h-6" />, title: "500+ Events", desc: "Memorable moments across India" },
    { icon: <Sparkles className="text-gold w-6 h-6" />, title: "Luxury Décor", desc: "Premium staging & ambience" },
    { icon: <Heart className="text-gold w-6 h-6" />, title: "Client Love", desc: "100% satisfaction guaranteed" },
  ];

  const imageSliderSettings = {
    infinite: true,
    autoplay: true,
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
      quote: "They made our wedding look like a royal celebration! Everything was elegant and perfectly organized.",
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
      quote: "The traditional welcome service added such a special touch to our event. Our guests felt truly honored and welcomed.",
      author: "Geetha Krishnan",
      event: "Kanyakumari",
    }
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

        {/* Image and Text */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Slider {...imageSliderSettings}>
                {images.map((src, index) => (
                  <div key={index} className="relative w-full h-[280px] md:h-[420px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 text-white p-6" >
                      <h3 className="text-lg md:text-2xl font-bold mb-2">{src.heading}</h3>
                      <p>{src.desc}</p>
                    </div>
                    <Image
                      src={src.url}
                      alt={`Event ${index + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                ))}
              </Slider>
              <div className="absolute bottom-4 right-4 bg-black/60 text-gold px-4 py-2 rounded-md text-xs font-semibold tracking-widest">
                SINCE 2010
              </div>
            </div>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <p className="text-gray-700 text-base md:text-lg mb-5 leading-relaxed">
              At <span className="text-gold font-semibold">V.I.P Function Planners</span>,
              we go beyond planning — we design unforgettable experiences filled with joy, precision, and beauty.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-5 leading-relaxed">
              From dream weddings to corporate celebrations, our passionate team brings your vision to life
              with luxury décor, world-class vendors, and attention to every elegant detail.
            </p>

            {/* Why Choose Us */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center bg-white shadow-md border border-gold/10 rounded-xl py-4 px-2 transition-all"
                >
                  {item.icon}
                  <h4 className="text-sm md:text-base font-semibold text-dark mt-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

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
