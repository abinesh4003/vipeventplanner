'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  X
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType || !formData.message) {
      showToast('error', 'Please fill in all required fields');
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        showToast('success', data.message || "Thank you! We'll contact you soon.");
        setFormData({ name: '', email: '', phone: '', eventType: '', eventDate: '', message: '' });
      } else {
        showToast('error', data.error || 'Error sending message. Please try again.');
      }
    } catch {
      showToast('error', 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = "Hello V.I.P Function Planners! I'm interested in your event planning services.";
    const whatsappUrl = `https://wa.me/+918778304145?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-4 left-1/2 z-50 max-w-md w-full mx-4"
          >
            <div className={`rounded-xl shadow-2xl p-4 flex items-start gap-3 ${
              toast.type === 'success' 
                ? 'bg-gradient-to-r from-[var(--color-gold-light)] to-[var(--color-gold)]' 
                : 'bg-gradient-to-r from-red-100 to-red-200'
            }`}>
              {toast.type === 'success' ? (
                <CheckCircle className="w-6 h-6 text-[var(--color-dark)] flex-shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              )}
              <p className={`flex-1 font-medium ${
                toast.type === 'success' ? 'text-[var(--color-dark)]' : 'text-red-800'
              }`}>
                {toast.message}
              </p>
              <button
                onClick={() => setToast(null)}
                className={`flex-shrink-0 ${
                  toast.type === 'success' ? 'text-[var(--color-dark)]' : 'text-red-600'
                } hover:opacity-70`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    <section className="py-14 sm:py-16 bg-[#fdfbf7] text-[#222] font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-poppins">
            Plan Your <span className="text-gold">Event Today</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#555] max-w-2xl mx-auto leading-relaxed px-2">
            Let us help you design the perfect celebration — luxurious, seamless, and unforgettable.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[#eee]">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-gold font-poppins">
                Get In Touch
              </h3>

              <p className="text-[#444] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Whether it's a wedding, engagement, or corporate event, we'll turn your ideas into an extraordinary experience.
              </p>

              {/* Contact Details */}
              <div className="space-y-5 sm:space-y-6">
                {[
                  { Icon: Phone, label: "Call Us", value: "+91 8778304145", href: "tel:8778304145" },
                  { Icon: Mail, label: "Email Us", value: "vipfunctionplanners@gmail.com", href: "mailto:vipfunctionplanners@gmail.com" },
                  { Icon: MapPin, label: "Location", value: "Nagercoil, Kanyakumari District" },
                ].map(({ Icon, label, value, href }, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4 items-start">
                    <div className="bg-gold/15 p-2.5 sm:p-3 rounded-full flex-shrink-0">
                      <Icon className="text-gold" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base text-[#333]">{label}</p>
                      {href ? (
                        <a href={href} className="text-[#555] hover:text-gold text-sm sm:text-base block mt-1">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[#555] text-sm sm:text-base mt-1">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 transition text-white py-2.5 sm:py-3 rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:8778304145"
                  className="w-full bg-gold text-black py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition hover:bg-[#d4af37] text-sm sm:text-base"
                >
                  <Phone size={18} />
                  Call Now
                </motion.a>
              </div>

              {/* Badge */}
              <div className="mt-8 pt-6 border-t border-[#eee] text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#777] mb-1">
                  <Clock size={14} />
                  <span>Response within 24 hours</span>
                </div>
                <p className="text-gold font-medium">500+ Events Planned Successfully</p>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-[#eee] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none rounded-2xl" />

              <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-gold relative z-10 font-poppins">
                Get a Free Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {[
                    { id: "name", label: "Your Name *", type: "text", placeholder: "Full name" },
                    { id: "email", label: "Email Address *", type: "email", placeholder: "your@email.com" },
                    { id: "phone", label: "Phone Number *", type: "tel", placeholder: "Enter your number" },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block mb-1.5 text-sm font-medium text-[#333]">
                        {label}
                      </label>
                      <input
                        type={type}
                        id={id}
                        name={id}
                        value={formData[id]}
                        onChange={handleChange}
                        required
                        placeholder={placeholder}
                        className="w-full p-2.5 sm:p-3 rounded-lg bg-[#fafafa] border border-[#ddd] focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none text-sm sm:text-base"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="eventType" className="block mb-1.5 text-sm font-medium text-[#333]">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full p-2.5 sm:p-3 rounded-lg bg-[#fafafa] border border-[#ddd] focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none text-sm sm:text-base"
                    >
                      <option value="">Select event type</option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Engagement</option>
                      <option>Reception</option>
                      <option>Corporate</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="eventDate" className="block mb-1.5 text-sm font-medium text-[#333]">
                    Event Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full p-2.5 sm:p-3 rounded-lg bg-[#fafafa] border border-[#ddd] focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none text-sm sm:text-base"
                    />
                    <Calendar className="absolute right-3 top-3 text-gray-400" size={16} />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-[#333]">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell us about your event requirements..."
                    className="w-full p-2.5 sm:p-3 rounded-lg bg-[#fafafa] border border-[#ddd] focus:border-gold focus:ring-2 focus:ring-gold/20 focus:outline-none text-sm sm:text-base"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-black py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition hover:bg-[#d4af37]"
                >
                  {isSubmitting ? "Sending..." : "Get Free Consultation"}
                </motion.button>

                <p className="text-center text-[#777] text-xs sm:text-sm mt-3">
                  We respect your privacy. Your details are safe with us.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
