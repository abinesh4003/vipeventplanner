import React from "react";

import PrivacyPolicyPage from "./clientPrivacy";


export const metadata = {
  title: "Privacy Policy - Best Event Management Nagercoil | Data Protection | VIP Event Management",
  description: "Learn how VIP Event Management, the best event planner in Nagercoil, protects your personal information and privacy. Comprehensive privacy policy for our best affordable event planning and catering services.",
  keywords: "privacy policy nagercoil, best event planner data protection, personal information security, privacy rights, vip event management privacy, best event management data policy, secure booking nagercoil",
  openGraph: {
    title: "Privacy Policy - VIP Event Management Data Protection",
    description: "Comprehensive privacy policy explaining how we protect your personal information and respect your privacy rights.",
    type: "website"
  }
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
      "name": "Privacy Policy",
      "item": "https://www.vipeventmanagement.in/privacy-policy"
    }
  ]
};

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy - VIP Event Management",
  "description": "Privacy policy and data protection information",
  "publisher": {
    "@type": "Organization",
    "name": "VIP Event Management",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagercoil",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8778304145",
      "contactType": "Privacy Officer"
    }
  }
}


const PrivacyPolicy = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <PrivacyPolicyPage />
    </>
  );
};

export default PrivacyPolicy;