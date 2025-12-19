import React from 'react';

import TermsOfServicePage from "./clientTerms";

export const metadata = {
  title: "Terms of Service - VIP Event Management Nagercoil | Event Planning Legal Terms",
  description: "Read the terms of service and conditions for VIP Event Management' event management, wedding planning, and catering services in Nagercoil. Understand our policies, payment terms, and service agreements.",
  keywords: "terms of service nagercoil, event planning terms, wedding planner conditions, service agreement, legal terms event management, vip Event Management policy",
  metadataBase: new URL('https://www.vipeventmanagement.in'),
  alternates: {
    canonical: '/terms-of-service',
  },
  openGraph: {
    title: "Terms of Service - VIP Event Management",
    description: "Legal terms and conditions for our event planning and catering services in Nagercoil and Kanyakumari district.",
    url: 'https://www.vipeventmanagement.in/terms-of-service',
    siteName: 'VIP Event Management',
    locale: 'en_IN',
    type: "website",
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'VIP Event Management Terms of Service'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms of Service - VIP Event Management",
    description: "Legal terms and conditions for event planning services.",
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
      "name": "Terms of Service",
      "item": "https://www.vipeventmanagement.in/terms-of-service"
    }
  ]
};

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Service - VIP Event Management",
  "description": "Terms and conditions for event planning services",
  "publisher": {
    "@type": "Organization",
    "name": "VIP Event Management",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagercoil",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  }
}

const TermsOfService = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <TermsOfServicePage />
    </>
  );
};
export default TermsOfService;