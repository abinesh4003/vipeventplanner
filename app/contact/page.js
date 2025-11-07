'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Star,
  Users,
  Calendar,
  Award,
  Sparkles,
  Crown
} from 'lucide-react';
import ContactSection from "../components/Contact" // Adjust path as needed

const ContactPage = () => {
  // Contact methods
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us Directly",
      description: "Speak with our event specialists",
      value: "+91 8778304145",
      action: "tel:+918778304145",
      color: "from-green-500 to-emerald-500",
      buttonText: "Call Now"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick responses & instant quotes",
      value: "+91 8778304145",
      action: "https://wa.me/918778304145",
      color: "from-green-400 to-teal-500",
      buttonText: "Message Now"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Detailed inquiries & proposals",
      value: "vipfunctionplanners@gmail.com",
      action: "mailto:vipfunctionplanners@gmail.com",
      color: "from-blue-500 to-cyan-500",
      buttonText: "Send Email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Service Area",
      description: "Based in Nagercoil, serving all nearby areas",
      value: "Kanyakumari District",
      action: "https://maps.app.goo.gl/3AwpwUbWBfhgyxeeA",
      color: "from-orange-500 to-red-500",
      buttonText: "View Area"
    }
  ];

  // Service areas
  const serviceAreas = [
    "Nagercoil Town", "Kottar", "Vadasery", "Aralvaimozhi",
    "Kuzhithurai", "Colachel", "Kanyakumari", "Marthandam",
    "Thuckalay", "Puthukadai", "Kaliyakkavilai", "Thiruvattar"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50/20 to-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#d4af37,transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#d4af37]/20 border border-[#d4af37]/30 rounded-full px-4 py-2 mb-6"
            >
              <Crown className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-[#d4af37] font-medium">Get Your Free Quote</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Create <span className="text-[#d4af37]">Magic</span> Together
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Ready to plan your perfect event? Contact VIP Function Planners for a personalized consultation.
              Let's transform your vision into an unforgettable experience.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "500+", label: "Events", icon: <Award className="w-5 h-5" /> },
                { number: "12+", label: "Years", icon: <Calendar className="w-5 h-5" /> },
                { number: "100%", label: "Satisfaction", icon: <Star className="w-5 h-5" /> },
                { number: "50+", label: "Team", icon: <Users className="w-5 h-5" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-center"
                >
                  <div className="text-[#d4af37] mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-12 bg-white -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get in Touch <span className="text-[#d4af37]">Instantly</span>
            </h2>
            <p className="text-gray-600">Choose your preferred way to reach us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#d4af37]/30 transition-all duration-300 h-full flex flex-col">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed flex-grow">{method.description}</p>

                  <p className="text-gray-900 font-semibold text-sm mb-4">{method.value}</p>

                  <motion.a
                    href={method.action}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center gap-2 w-full justify-center px-4 py-3 rounded-xl bg-gradient-to-r ${method.color} text-white text-sm font-semibold hover:shadow-lg transition-all duration-300 mt-auto`}
                  >
                    {method.buttonText}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Existing Contact Form Component */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ContactSection />
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Areas We <span className="text-[#d4af37]">Serve</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proudly serving Nagercoil and surrounding areas in Kanyakumari District
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-[#d4af37] hover:shadow-lg transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 text-[#d4af37] mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">{area}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Contact <span className="text-[#d4af37]">VIP Planners?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Free Consultation",
                description: "Get expert advice and creative ideas for your event at no cost"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Quick Response",
                description: "We respond within 30 minutes to help with urgent event planning"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Custom Solutions",
                description: "Every event is unique - we tailor our services to your specific needs"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-[#d4af37] rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-bold text-lg">Emergency Event Support</p>
                <p className="text-white/90 text-sm">Last-minute planning? We've got you covered!</p>
              </div>
            </div>
            <motion.a
              href="tel:+918778304145"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-500 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              Call Now: +91 8778304145
            </motion.a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#d4af37] to-amber-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Planning?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't wait! Contact us today and let's create something extraordinary together.
              Your perfect event is just a conversation away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="tel:+918778304145"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#d4af37] px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-[#d4af37] transition-all text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Send Message
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>500+ Successful Events</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>12+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Nagercoil Based</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;