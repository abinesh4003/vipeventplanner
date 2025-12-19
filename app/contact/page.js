import React from "react";
import ContactPage from "../pages/contactPage";

export const metadata = {
  title: "Contact Us - Get Free Quote | Best & Affordable Event Management Nagercoil | VIP Event Management",
  description: "Contact VIP Event Management for best affordable event management & catering services in Nagercoil. Free consultation, instant quotes, best prices guaranteed. Available 24/7 for budget-friendly weddings, corporate events across Kanyakumari. Call now for economical packages!",
  keywords: "contact best event planner nagercoil, best catering services contact, best event management enquiry, best wedding planner contact nagercoil, get free quote best catering, book best event planner, best event management phone number nagercoil, best catering services near me contact, vip event management contact, best event booking nagercoil, best affordable event contact, best budget event planner contact",
  authors: [{ name: "VIP Event Management" }],
  creator: "VIP Event Management",
  publisher: "VIP Event Management",
  metadataBase: new URL('https://www.vipeventmanagement.in'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact VIP Event Management - Event Management & Catering Nagercoil",
    description: "Get in touch for professional event management and catering services in Nagercoil. Free consultation, instant quotes, and 24/7 availability for all your event needs.",
    url: 'https://www.vipeventmanagement.in/contact',
    siteName: 'VIP Event Management',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.vipeventmanagement.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://www.vipeventmanagement.in/contact"
    }
  ]
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact VIP Event Management",
  "description": "Contact page for VIP Event Management - Event Management and Catering Services in Nagercoil",
  "url": "https://www.vipeventmanagement.in/contact",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "VIP Event Management",
    "image": "https://www.vipeventmanagement.in/logo.jpg",
    "@id": "https://www.vipeventmanagement.in",
    "url": "https://www.vipeventmanagement.in",
    "telephone": "+91-XXXXXXXXXX",
    "email": "shejinoantony@gmail.com",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPage />
    </>
  );
};

export default Contact;