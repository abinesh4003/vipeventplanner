import React from "react";
import AboutPage from "../pages/AboutPage";

export const metadata = {
  title: "About Us - Best & Affordable Event Management Company in Nagercoil | VIP Event Management",
  description: "VIP Event Management - Nagercoil's most trusted & affordable event management company. 15+ years excellence, 500+ events, best catering with premium quality. Budget-friendly wedding planning, stage decoration at best prices. 100% satisfaction guaranteed across Kanyakumari district.",
  keywords: "about vip event management, best event management company nagercoil, best affordable catering company, best event planners nagercoil, best budget wedding planners, best experienced caterers nagercoil, best trusted event company, best affordable event services, best quality catering, best price event management, best economical wedding planners nagercoil, best budget event company kanyakumari",
  authors: [{ name: "VIP Event Management" }],
  creator: "VIP Event Management",
  publisher: "VIP Event Management",
  metadataBase: new URL('https://www.vipeventmanagement.in'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About VIP Event Management - Premier Event Management & Catering in Nagercoil",
    description: "Discover why VIP Event Management is Nagercoil's #1 choice for event management and catering. 15+ years experience, 1000+ successful events, and a commitment to excellence in every celebration.",
    url: 'https://www.vipeventmanagement.in/about',
    siteName: 'VIP Event Management',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'VIP Event Management Team - Event Management Nagercoil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About VIP Event Management - Event Management & Catering Nagercoil",
    description: "15+ years of creating memorable events in Nagercoil. Professional event management and catering services with proven track record.",
    images: ['/about-twitter.jpg'],
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

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VIP Event Management",
  "alternateName": "VIP Event Management and Catering",
  "url": "https://www.vipeventmanagement.in",
  "logo": "https://www.vipeventmanagement.in/logo.jpg",
  "description": "Leading event management and catering company in Nagercoil with over 15 years of experience in organizing weddings, corporate events, and celebrations",
  "foundingDate": "2008",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Nagercoil",
    "addressRegion": "Tamil Nadu",
    "postalCode": "629001",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Tamil"]
  },
  "sameAs": [
    "https://www.facebook.com/vipeventsmanagement",
    "https://www.instagram.com/vipeventsmanagement",
    "https://www.youtube.com/@vipeventsmanagement"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "50"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Nagercoil"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Kanyakumari District"
    }
  ],
  "knowsAbout": [
    "Event Management",
    "Catering Services",
    "Wedding Planning",
    "Corporate Events",
    "Party Planning",
    "Event Decoration"
  ]
};

const About = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutPage />
    </>
  );
};

export default About;


