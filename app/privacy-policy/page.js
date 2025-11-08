import React from "react";

import PrivacyPolicyPage from "./clientPrivacy";


export const metadata = {
  title: "Privacy Policy - VIP Function Planners Nagercoil | Data Protection & Privacy Rights",
  description: "Learn how VIP Function Planners protects your personal information and privacy. Our comprehensive privacy policy covers data collection, usage, and your rights for event planning services in Nagercoil.",
  keywords: "privacy policy nagercoil, data protection event planning, personal information security, privacy rights, vip function planners privacy, data collection policy",
  openGraph: {
    title: "Privacy Policy - VIP Function Planners Data Protection",
    description: "Comprehensive privacy policy explaining how we protect your personal information and respect your privacy rights.",
    type: "website"
  }
};

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy - VIP Function Planners",
  "description": "Privacy policy and data protection information",
  "publisher": {
    "@type": "Organization",
    "name": "VIP Function Planners",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <PrivacyPolicyPage />
    </>
  );
};

export default PrivacyPolicy;