import React from "react";
import ContactPage from "../pages/contactPage";

export const metadata = {
  title: "Contact Us - Get Free Quote for Event Management & Catering in Nagercoil | VIP Function Planners",
  description: "Contact VIP Function Planners for professional event management and catering services in Nagercoil. Call us for free consultation and quotes. Available 24/7 for weddings, corporate events, and all celebrations across Kanyakumari district. Visit our office or book online today.",
  keywords: "contact event planner nagercoil, catering services contact, event management enquiry, wedding planner contact nagercoil, get quote catering, book event planner, event management phone number nagercoil, catering services near me contact, vip function planners contact, event booking nagercoil",
  authors: [{ name: "VIP Function Planners" }],
  creator: "VIP Function Planners",
  publisher: "VIP Function Planners",
  metadataBase: new URL('https://vipfunctionplanners.com'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact VIP Function Planners - Event Management & Catering Nagercoil",
    description: "Get in touch for professional event management and catering services in Nagercoil. Free consultation, instant quotes, and 24/7 availability for all your event needs.",
    url: 'https://vipfunctionplanners.com/contact',
    siteName: 'VIP Function Planners',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact VIP Function Planners - Nagercoil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact VIP Function Planners - Event Management Nagercoil",
    description: "Reach out for event management and catering services in Nagercoil. Free quotes and consultation available.",
    images: ['/contact-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact VIP Function Planners",
  "description": "Contact page for VIP Function Planners - Event Management and Catering Services in Nagercoil",
  "url": "https://vipfunctionplanners.com/contact",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "VIP Function Planners",
    "image": "https://vipfunctionplanners.com/logo.jpg",
    "@id": "https://vipfunctionplanners.com",
    "url": "https://vipfunctionplanners.com",
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@vipfunctionplanners.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Nagercoil",
      "addressRegion": "Tamil Nadu",
      "postalCode": "629001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.1790,
      "longitude": 77.4337
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil"],
        "contactOption": "TollFree",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/vipfunctionplanners",
      "https://www.instagram.com/vipfunctionplanners"
    ]
  }
};

const Contact = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPage />
    </>
  );
};

export default Contact;