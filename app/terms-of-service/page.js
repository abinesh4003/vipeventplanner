import React from 'react';

import TermsOfServicePage from "./clientTerms";

export const metadata = {
  title: "Terms of Service - VIP Function Planners Nagercoil | Event Planning Legal Terms",
  description: "Read the terms of service and conditions for VIP Function Planners' event management, wedding planning, and catering services in Nagercoil. Understand our policies, payment terms, and service agreements.",
  keywords: "terms of service nagercoil, event planning terms, wedding planner conditions, service agreement, legal terms event management, vip function planners policy",
  openGraph: {
    title: "Terms of Service - VIP Function Planners",
    description: "Legal terms and conditions for our event planning and catering services in Nagercoil and Kanyakumari district.",
    type: "website"
  }
};

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Service - VIP Function Planners",
  "description": "Terms and conditions for event planning services",
  "publisher": {
    "@type": "Organization",
    "name": "VIP Function Planners",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <TermsOfServicePage />
    </>
  );
};
export default TermsOfService;