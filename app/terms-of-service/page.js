'use client';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, Phone } from 'lucide-react';

export default function TermsOfServicePage() {
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
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Legal Terms</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of <span className="text-[var(--color-dark)]">Service</span>
            </h1>
            <p className="text-lg text-[var(--color-dark)]/80 max-w-2xl mx-auto">
              Terms and conditions for using our event planning services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
            <p className="text-amber-800 mb-0">
              <strong>Last Updated:</strong> December 2024
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600">
                By engaging V.I.P Function Planners for event planning services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-600 mb-4">V.I.P Function Planners provides:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Event planning and coordination services</li>
                <li>Venue decoration and setup</li>
                <li>Catering and food services</li>
                <li>Entertainment and photography arrangements</li>
                <li>Vendor coordination and management</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking and Payment Terms</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Advance Payment:</strong> 30-50% advance required to confirm booking</li>
                <li><strong>Final Payment:</strong> Balance amount due before or on event day</li>
                <li><strong>Cancellation:</strong> 48 hours notice required for cancellations</li>
                <li><strong>Refunds:</strong> Advance payments are non-refundable after vendor bookings</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate event details and requirements</li>
                <li>Make timely payments as per agreed schedule</li>
                <li>Obtain necessary permits and approvals</li>
                <li>Ensure venue accessibility and basic facilities</li>
                <li>Communicate changes at least 72 hours in advance</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                V.I.P Function Planners shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Acts of nature, weather conditions, or force majeure events</li>
                <li>Third-party vendor failures beyond our control</li>
                <li>Venue-related issues or restrictions</li>
                <li>Guest behavior or accidents during events</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-600">
                All event designs, concepts, and creative materials developed by V.I.P Function Planners remain our intellectual property. 
                Clients may use these for their specific event but cannot reproduce or distribute them without permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              <p className="text-gray-600">
                Any disputes arising from our services will be resolved through mutual discussion. 
                If unresolved, disputes will be subject to the jurisdiction of Nagercoil courts, Tamil Nadu.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service, contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-[var(--color-gold)]" />
                  <span className="text-gray-700">+91 8778304145</span>
                </div>
                <div className="flex items-center gap-3">
                  <Scale className="w-5 h-5 text-[var(--color-gold)]" />
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