'use client';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Phone } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Privacy & Security</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="text-[var(--color-dark)]">Policy</span>
            </h1>
            <p className="text-lg text-[var(--color-dark)]/80 max-w-2xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-blue-800 mb-0">
              <strong>Last Updated:</strong> December 2024
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect information you provide directly to us, such as:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Event details and preferences</li>
                <li>Payment information (processed securely)</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide and improve our event planning services</li>
                <li>Communicate with you about your events</li>
                <li>Process payments and manage bookings</li>
                <li>Send you updates and promotional materials (with consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-4">We do not sell or rent your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Trusted vendors and service providers</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-[var(--color-gold)]" />
                  <span className="text-gray-700">+91 8778304145</span>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-[var(--color-gold)]" />
                  <span className="text-gray-700">vipfunctionplanners@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}