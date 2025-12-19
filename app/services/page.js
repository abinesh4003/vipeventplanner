import React from "react";
import ServicesPage from "../pages/servicePage";

export const metadata = {
  title: "Best Catering & Event Management Services in Nagercoil | Wedding Stage Decoration | VIP Event Management",
  description: "Best catering service & event planner in Nagercoil. Premium wedding services, stage decoration, corporate events, birthday parties, and traditional functions. Top-rated professional service across Kanyakumari with customized packages and guaranteed satisfaction.",
  keywords: "best catering services nagercoil, best event management services nagercoil, best wedding catering nagercoil, best stage decoration services nagercoil, best corporate event catering, best birthday party catering nagercoil, best engagement function catering, best traditional event catering, best outdoor catering nagercoil, best function hall catering, best marriage catering services, best event decoration services nagercoil, best wedding stage decoration nagercoil, top catering services kanyakumari, professional event planners nagercoil",
  authors: [{ name: "VIP Event Management" }],
  creator: "VIP Event Management",
  publisher: "VIP Event Management",
  metadataBase: new URL('https://www.vipeventmanagement.in'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Event Management & Catering Services in Nagercoil | VIP Event Management",
    description: "Full-service event management and catering solutions for weddings, corporate events, parties, and traditional functions in Nagercoil. Customized packages, professional staff, and exceptional cuisine.",
    url: 'https://www.vipeventmanagement.in/services',
    siteName: 'VIP Event Management',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIP Event Management Services - Event Management & Catering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Event Management & Catering Services - VIP Event Management Nagercoil",
    description: "Professional event management and catering services for all occasions in Nagercoil and Kanyakumari district. Weddings, corporate events, parties, and more.",
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
      "name": "Services",
      "item": "https://www.vipeventmanagement.in/services"
    }
  ]
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Event Management and Catering Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VIP Event Management",
    "image": "https://www.vipeventmanagement.in/logo.jpg",
    "@id": "https://www.vipeventmanagement.in",
    "url": "https://www.vipeventmanagement.in",
    "telephone": "+91-XXXXXXXXXX",
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
    "openingHoursSpecification": {
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
    },
    "sameAs": [
      "https://www.facebook.com/vipeventsmanagement",
      "https://www.instagram.com/vipeventsmanagement"
    ]
  },
  "areaServed": {
    "@type": "City",
    "name": "Nagercoil",
    "containedIn": {
      "@type": "AdministrativeArea",
      "name": "Kanyakumari District"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Event Management and Catering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Planning and Catering",
          "description": "Complete wedding event management with premium catering services including venue decoration, food service, and coordination."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Event Management",
          "description": "Professional corporate event planning and catering for conferences, seminars, product launches, and business gatherings."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Birthday Party Catering",
          "description": "Customized birthday party planning and catering services with themed decorations and entertainment options."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Traditional Function Catering",
          "description": "Authentic traditional function catering for engagements, housewarming, and cultural ceremonies."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outdoor Catering Services",
          "description": "Professional outdoor catering with complete setup for garden parties, beach events, and outdoor celebrations."
        }
      }
    ]
  }
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesPage />
    </>
  );
}