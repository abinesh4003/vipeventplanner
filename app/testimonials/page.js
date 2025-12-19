import React from "react";
import TestimonialsPage from "../pages/testmonials";

export const metadata = {
  title: "Client Testimonials - Best Event Management Nagercoil | Real Reviews & Feedback | VIP Event Management",
  description: "Read authentic testimonials for best event management in Nagercoil. 500+ satisfied customers share their experiences with our best affordable catering, wedding planning, and celebration services across Kanyakumari district. 4.9★ rated!",
  keywords: "best testimonials nagercoil, best event planner reviews, best wedding planner feedback, best client testimonials kanyakumari, vip event management reviews, best event management testimonials, best customer feedback nagercoil, best affordable event reviews, top rated event planner nagercoil",
  metadataBase: new URL('https://www.vipeventmanagement.in'),
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: "Client Testimonials - VIP Event Management Reviews",
    description: "Discover why 500+ clients trust VIP Event Management for their special events. Read real testimonials from weddings, corporate events, and celebrations.",
    url: 'https://www.vipeventmanagement.in/testimonials',
    siteName: 'VIP Event Management',
    locale: 'en_IN',
    type: "website",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "VIP Event Management Client Testimonials"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials - VIP Event Management",
    description: "500+ satisfied clients share their experiences with Nagercoil's premier event planning company.",
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
      "name": "Testimonials",
      "item": "https://www.vipeventmanagement.in/testimonials"
    }
  ]
};

const testimonialsSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VIP Event Management",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya & Arjun"
      },
      "reviewBody": "Our wedding was absolutely magical! The VIP Event Management team exceeded all our expectations."
    }
  ]
}

const Testimonials = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialsSchema) }}
      />
      <TestimonialsPage />
    </>
  );
};

export default Testimonials;