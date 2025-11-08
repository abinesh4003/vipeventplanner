import React from "react";
import AboutPage from "../pages/AboutPage";

export const metadata = {
  title: "About Us - Best Event Management & Catering Company in Nagercoil | VIP Function Planners",
  description: "VIP Function Planners is Nagercoil's most trusted event management and catering company with 15+ years of excellence. We've successfully organized 1000+ weddings, corporate events, and celebrations across Kanyakumari district. Expert team, premium quality, and customer satisfaction guaranteed.",
  keywords: "about vip function planners, event management company nagercoil, catering company kanyakumari, professional event planners nagercoil, experienced caterers nagercoil, wedding planners about us, event management experience, trusted caterers kanyakumari, best event company nagercoil, event planning expertise",
  authors: [{ name: "VIP Function Planners" }],
  creator: "VIP Function Planners",
  publisher: "VIP Function Planners",
  metadataBase: new URL('https://www.vipfunctionplanners.com'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About VIP Function Planners - Premier Event Management & Catering in Nagercoil",
    description: "Discover why VIP Function Planners is Nagercoil's #1 choice for event management and catering. 15+ years experience, 1000+ successful events, and a commitment to excellence in every celebration.",
    url: 'https://www.vipfunctionplanners.com/about',
    siteName: 'VIP Function Planners',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'VIP Function Planners Team - Event Management Nagercoil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About VIP Function Planners - Event Management & Catering Nagercoil",
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
  "name": "VIP Function Planners",
  "alternateName": "VIP Event Management and Catering",
  "url": "https://www.vipfunctionplanners.com",
  "logo": "https://www.vipfunctionplanners.com/logo.jpg",
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
    "https://www.facebook.com/vipfunctionplanners",
    "https://www.instagram.com/vipfunctionplanners",
    "https://www.youtube.com/@vipfunctionplanners"
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


