import React from "react";
import ContactPage from "../pages/contactPage";

export const metadata = {
  title: "Contact Us - Get Free Quote for Event Management & Catering in Nagercoil | VIP Event Management",
  description: "Contact VIP Event Management for professional event management and catering services in Nagercoil. Call us for free consultation and quotes. Available 24/7 for weddings, corporate events, and all celebrations across Kanyakumari district. Visit our office or book online today.",
  keywords: "contact event planner nagercoil, catering services contact, event management enquiry, wedding planner contact nagercoil, get quote catering, book event planner, event management phone number nagercoil, catering services near me contact, vip Event Management contact, event booking nagercoil",
  authors: [{ name: "VIP Event Management" }],
  creator: "VIP Event Management",
  publisher: "VIP Event Management",
  metadataBase: new URL('https://www.vipeventmanagement.com'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact VIP Event Management - Event Management & Catering Nagercoil",
    description: "Get in touch for professional event management and catering services in Nagercoil. Free consultation, instant quotes, and 24/7 availability for all your event needs.",
    url: 'https://www.vipeventmanagement.com/contact',
    siteName: 'VIP Event Management',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact VIP Event Management - Nagercoil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact VIP Event Management - Event Management Nagercoil",
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
  "name": "Contact VIP Event Management",
  "description": "Contact page for VIP Event Management - Event Management and Catering Services in Nagercoil",
  "url": "https://www.vipeventmanagement.com/contact",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "VIP Event Management",
    "image": "https://www.vipeventmanagement.com/logo.jpg",
    "@id": "https://www.vipeventmanagement.com",
    "url": "https://www.vipeventmanagement.com",
    "telephone": "+91-XXXXXXXXXX",
    "email": "vipeventsmanagement@gmail.com",
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
      "https://www.facebook.com/vipeventsmanagement",
      "https://www.instagram.com/vipeventsmanagement"
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