'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Quote,
  Heart,
  Award,
  Users,
  Calendar,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle,
  Sparkles,
  TrendingUp,
  ThumbsUp,
  Camera,
  Utensils,
  Music
} from 'lucide-react';
import CTA from '../components/cta';

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Reviews', icon: <Star className="w-4 h-4" /> },
    { id: 'wedding', name: 'Weddings', icon: <Heart className="w-4 h-4" /> },
    { id: 'corporate', name: 'Corporate', icon: <Users className="w-4 h-4" /> },
    { id: 'birthday', name: 'Birthdays', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const testimonials = [
    {
      name: "Priya & Arjun",
      event: "Wedding",
      category: "wedding",
      rating: 5,
      date: "2 weeks ago",
      location: "Nagercoil",
      image: "https://ui-avatars.com/api/?name=Priya+Arjun&background=4285f4&color=fff&bold=true",
      message: "Our wedding was absolutely magical! The VIP Function Planners team exceeded all our expectations. From the stunning stage decoration to the delicious catering, everything was perfect. They handled every detail with such care and professionalism.",
      services: ["Stage Decoration", "Catering", "Photography"],
      verified: true,
      helpful: 45
    },
    {
      name: "Ramesh Kumar",
      event: "Corporate Annual Meet",
      category: "corporate",
      rating: 5,
      date: "1 month ago",
      location: "Nagercoil",
      image: "https://ui-avatars.com/api/?name=Ramesh+Kumar&background=34a853&color=fff&bold=true",
      message: "Professional and reliable service! Our corporate event was executed flawlessly. The team's attention to detail and punctuality impressed all our guests. Highly recommend for corporate events.",
      services: ["Event Planning", "Catering", "AV Setup"],
      verified: true,
      helpful: 38
    },
    {
      name: "Divya Lakshmi",
      event: "Daughter's Birthday",
      category: "birthday",
      rating: 5,
      date: "3 weeks ago",
      location: "Kanyakumari",
      image: "https://ui-avatars.com/api/?name=Divya+Lakshmi&background=ea4335&color=fff&bold=true",
      message: "They turned my daughter's birthday into a fairytale celebration! The theme decoration was outstanding, and the kids had an amazing time. Thank you for making her day so special!",
      services: ["Theme Decoration", "Entertainment", "Catering"],
      verified: true,
      helpful: 52
    },
    {
      name: "Sundar & Meena",
      event: "25th Anniversary",
      category: "wedding",
      rating: 5,
      date: "1 month ago",
      location: "Marthandam",
      image: "https://ui-avatars.com/api/?name=Sundar+Meena&background=fbbc04&color=fff&bold=true",
      message: "Celebrating our 25th anniversary was made memorable by VIP Function Planners. The elegant setup, wonderful food, and seamless coordination made our day perfect. Our guests are still talking about it!",
      services: ["Venue Decoration", "Catering", "Music"],
      verified: true,
      helpful: 41
    },
    {
      name: "Tech Solutions Pvt Ltd",
      event: "Product Launch",
      category: "corporate",
      rating: 5,
      date: "2 months ago",
      location: "Nagercoil",
      image: "https://ui-avatars.com/api/?name=Tech+Solutions&background=4285f4&color=fff&bold=true",
      message: "Outstanding service for our product launch event! The team managed everything from stage setup to guest coordination perfectly. Very professional and creative approach.",
      services: ["Event Management", "Stage Setup", "Branding"],
      verified: true,
      helpful: 36
    },
    {
      name: "Lakshmi Devi",
      event: "60th Birthday Celebration",
      category: "birthday",
      rating: 5,
      date: "2 months ago",
      location: "Colachel",
      image: "https://ui-avatars.com/api/?name=Lakshmi+Devi&background=34a853&color=fff&bold=true",
      message: "The traditional welcome service and authentic South Indian catering were exceptional. All our guests were impressed with the taste and presentation. Truly professional service!",
      services: ["Traditional Catering", "Welcome Service", "Decoration"],
      verified: true,
      helpful: 48
    },
    {
      name: "Arun Prakash",
      event: "Engagement Ceremony",
      category: "wedding",
      rating: 5,
      date: "3 weeks ago",
      location: "Nagercoil",
      image: "https://ui-avatars.com/api/?name=Arun+Prakash&background=ea4335&color=fff&bold=true",
      message: "Fantastic experience! The team was very responsive and accommodating to all our requests. The decoration was elegant and the food was delicious. Highly recommended!",
      services: ["Decoration", "Catering", "Photography"],
      verified: true,
      helpful: 29
    },
    {
      name: "Kavitha Rajan",
      event: "Housewarming",
      category: "wedding",
      rating: 5,
      date: "1 month ago",
      location: "Kuzhithurai",
      image: "https://ui-avatars.com/api/?name=Kavitha+Rajan&background=fbbc04&color=fff&bold=true",
      message: "Perfect service from start to finish! They understood our vision and brought it to life beautifully. The traditional setup was authentic and impressive. Thank you!",
      services: ["Traditional Setup", "Catering", "Welcome Service"],
      verified: true,
      helpful: 33
    },
    {
      name: "Vijay Industries",
      event: "Corporate Seminar",
      category: "corporate",
      rating: 5,
      date: "3 months ago",
      location: "Nagercoil",
      image: "https://ui-avatars.com/api/?name=Vijay+Industries&background=4285f4&color=fff&bold=true",
      message: "Excellent coordination and execution! They managed our 300+ guest seminar with great professionalism. The AV setup was perfect and catering was top-notch.",
      services: ["Event Management", "AV Setup", "Catering"],
      verified: true,
      helpful: 27
    },
    {
      name: "Meera Shankar",
      event: "Baby Shower",
      category: "birthday",
      rating: 5,
      date: "1 month ago",
      location: "Marthandam",
      image: "https://ui-avatars.com/api/?name=Meera+Shankar&background=34a853&color=fff&bold=true",
      message: "Beautiful decoration and wonderful service! The team was very creative with the theme and everything looked picture-perfect. All my guests loved it!",
      services: ["Theme Decoration", "Catering", "Photography"],
      verified: true,
      helpful: 31
    },
    {
      name: "Rajesh & Preethi",
      event: "Reception",
      category: "wedding",
      rating: 5,
      date: "2 weeks ago",
      location: "Kanyakumari",
      image: "https://ui-avatars.com/api/?name=Rajesh+Preethi&background=ea4335&color=fff&bold=true",
      message: "Amazing work by VIP Function Planners! Our reception was grand and elegant. The stage decoration was breathtaking and the food received so many compliments. Worth every penny!",
      services: ["Stage Decoration", "Catering", "Lighting"],
      verified: true,
      helpful: 44
    },
    {
      name: "Anitha Devi",
      event: "Retirement Party",
      category: "corporate",
      rating: 5,
      date: "3 weeks ago",
      location: "Colachel",
      image: "https://ui-avatars.com/api/?name=Anitha+Devi&background=fbbc04&color=fff&bold=true",
      message: "They made my husband's retirement party so special! The arrangements were perfect, food was excellent, and the team was very professional. Highly satisfied!",
      services: ["Event Planning", "Catering", "Entertainment"],
      verified: true,
      helpful: 25
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "700+", label: "Happy Clients" },
    { icon: <Star className="w-6 h-6" />, number: "5.0/5", label: "Average Rating" },
    { icon: <Award className="w-6 h-6" />, number: "100%", label: "Satisfaction Rate" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "95%", label: "Repeat Clients" }
  ];

  const highlights = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "100% Verified Reviews" },
    { icon: <Award className="w-5 h-5" />, text: "Top Rated in Nagercoil" },
    { icon: <Heart className="w-5 h-5" />, text: "Client Satisfaction Guaranteed" },
    { icon: <ThumbsUp className="w-5 h-5" />, text: "500+ 5-Star Reviews" }
  ];

  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold)]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.4),transparent_50%)]"></div>
        </div>

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
              className="inline-flex items-center gap-2 bg-white/40 border border-[var(--color-dark)]/20 rounded-full px-4 py-2 mb-6"
            >
              <Quote className="w-4 h-4 text-[var(--color-dark)]" />
              <span className="text-xs md:text-sm text-[var(--color-dark)] font-medium">Client Testimonials</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              What Our <span className="text-[var(--color-dark)]">Clients Say</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[var(--color-dark)]/80 font-light max-w-3xl mx-auto leading-relaxed mb-8">
              Real stories from real clients who trusted us with their special moments
            </p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a
                href="https://share.google/wCOPnn4wXiqnAcwab"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 text-[var(--color-dark)]  px-6 py-3  rounded-full font-medium border border-[var(--color-dark)]/30 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Star className="w-5 h-5 fill-[var(--color-dark)]" />
                Leave a Google Review
              </a>
              <a
                href="tel:+918778304145"
                className="bg-[var(--color-dark)] text-white px-6 py-3 rounded-full font-medium hover:bg-[var(--color-dark)]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Your Event
              </a>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-[var(--color-dark)]/70">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-[var(--color-dark)]">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google-Style Rating Summary */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Overall Rating */}
                <div className="text-center md:text-left">
                  <div className="text-6xl font-bold text-[var(--color-dark)] mb-2">5.0</div>
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-[#fbbc04] fill-[#fbbc04]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">Based on 500+ reviews</p>
                  <a
                    href="https://share.google/wCOPnn4wXiqnAcwab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2  bg-[var(--color-gold-light)] text-[var(--color-dark)]  px-6 py-3  rounded-full font-medium border border-[var(--color-dark)]/30 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm "
                  >
                    <Star className="w-4 h-4 fill-[var(--color-dark)]" />
                    Write a Review
                  </a>
                </div>

                {/* Right: Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white p-4 rounded-xl shadow-sm border text-center"
                    >
                      <div className="text-[var(--color-gold)] mb-2 flex justify-center">{stat.icon}</div>
                      <div className="text-xl font-bold text-[var(--color-dark)] mb-1">{stat.number}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 md:py-8 bg-gray-50 sticky top-0 z-30 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-3 pb-2 md:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 flex-shrink-0 ${activeCategory === category.id
                    ? 'bg-[var(--color-gold)] text-[var(--color-dark)] shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {category.icon}
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-[var(--color-dark)]">{testimonial.name}</h3>
                      <p className="text-xs text-gray-500">{testimonial.event}</p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="bg-[var(--color-gold-light)] text-[var(--color-dark)] px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[var(--color-gold)] fill-[var(--color-gold)]" />
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{testimonial.message}"
                </p>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {testimonial.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" />
                    <span>{testimonial.helpful} helpful</span>
                  </div>
                </div>
                
                {/* Date */}
                <div className="text-xs text-gray-400 mt-2">
                  {testimonial.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] mb-4">
              Video <span className="text-[var(--color-gold)]">Testimonials</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our clients share their experiences in their own words
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-video bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold)] rounded-2xl flex items-center justify-center"
              >
                <div className="text-center">
                  <Camera className="w-12 h-12 text-[var(--color-dark)] mx-auto mb-2" />
                  <p className="text-[var(--color-dark)] font-medium">Video Coming Soon</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[var(--color-gold-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">Award Winning</h3>
              <p className="text-gray-600 text-sm">Recognized as Nagercoil's top event planner</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[var(--color-gold-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">Client First</h3>
              <p className="text-gray-600 text-sm">Your satisfaction is our priority</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[var(--color-gold-light)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">Quality Service</h3>
              <p className="text-gray-600 text-sm">Premium quality in every detail</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA text="Ready to Create unforgettable moments?" desc=' Join hundreds of satisfied clients who trusted us with their special moments' btn1='Get Free Quote' btn1link='/contact' btn2='Back to Home' btn2link='/' />
    </div>
  );
}
