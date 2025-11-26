'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Phone, MessageCircle } from 'lucide-react';

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What services does V.I.P Event Management offer?",
          a: "We offer complete event planning services including wedding planning, corporate events, birthday parties, stage decoration, catering services, photography, entertainment, and venue management across Nagercoil and Kanyakumari district."
        },
        {
          q: "How far in advance should I book your services?",
          a: "We recommend booking at least 2-3 months in advance for weddings and large events, and 2-4 weeks for smaller celebrations. However, we also accommodate last-minute bookings based on availability."
        },
        {
          q: "Do you provide services outside Nagercoil?",
          a: "Yes, we serve the entire Kanyakumari district including Thuckalay, Marthandam, Kuzhithurai, Colachel, and surrounding areas."
        }
      ]
    },
    {
      category: "Pricing & Packages",
      questions: [
        {
          q: "How do you charge for your services?",
          a: "Our pricing depends on the type of event, guest count, services required, and venue. We offer customized packages and provide detailed quotes after understanding your specific needs."
        },
        {
          q: "Do you offer free consultations?",
          a: "Yes, we provide free initial consultations to understand your requirements and provide preliminary quotes."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, bank transfers, and digital payments. Payment is typically done in installments - advance booking amount, pre-event payment, and final settlement."
        }
      ]
    },
    {
      category: "Wedding Services",
      questions: [
        {
          q: "Do you handle both traditional and modern weddings?",
          a: "Yes, we specialize in both traditional South Indian weddings and modern celebration styles. We customize our services based on your cultural preferences and requirements."
        },
        {
          q: "Can you arrange destination weddings?",
          a: "Yes, we organize destination weddings across Tamil Nadu and can coordinate with venues in other states as well."
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[var(--color-gold-light)] to-[var(--color-gold)]">
        <div className="text-center text-[var(--color-dark)] px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/40 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Help Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-[var(--color-dark)]">Questions</span>
            </h1>
            <p className="text-lg text-[var(--color-dark)]/80 max-w-2xl mx-auto">
              Find answers to common questions about our event planning services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = `${categoryIndex}-${faqIndex}`;
                  return (
                    <motion.div
                      key={globalIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        {openFAQ === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0" />
                        )}
                      </button>
                      {openFAQ === globalIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-6 pb-4"
                        >
                          <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">Can't find what you're looking for? Contact our team directly</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918778304145"
              className="bg-[var(--color-gold)] text-[var(--color-dark)] px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-gold)]/90 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call: +91 8778304145
            </a>
            <a
              href="https://wa.me/918778304145"
              className="border-2 border-[var(--color-gold)] text-[var(--color-gold)] px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-gold)] hover:text-[var(--color-dark)] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}