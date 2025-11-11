import React from "react";
import TestimonialsPage from "../pages/testmonials";

export const metadata = {
  title: "Client Testimonials - VIP Function Planners Nagercoil | Real Reviews & Feedback",
  description: "Read authentic client testimonials and reviews for VIP Function Planners. 500+ satisfied customers share their wedding, corporate event, and celebration experiences in Nagercoil and Kanyakumari district.",
  keywords: "testimonials nagercoil, event planner reviews, wedding planner feedback, client testimonials kanyakumari, vip function planners reviews, event management testimonials, customer feedback nagercoil",
  openGraph: {
    title: "Client Testimonials - VIP Function Planners Reviews",
    description: "Discover why 500+ clients trust VIP Function Planners for their special events. Read real testimonials from weddings, corporate events, and celebrations.",
    type: "website",
    images: [{
      url: "/testimonials-og.jpg",
      width: 1200,
      height: 630,
      alt: "VIP Function Planners Client Testimonials"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials - VIP Function Planners",
    description: "500+ satisfied clients share their experiences with Nagercoil's premier event planning company."
  }
};

const testimonialsSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VIP Function Planners",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "500",
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
      "reviewBody": "Our wedding was absolutely magical! The VIP Function Planners team exceeded all our expectations."
    }
  ]
}

const Testimonials = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialsSchema) }}
      />
      <TestimonialsPage/>
    </>
  );
};

export default Testimonials;