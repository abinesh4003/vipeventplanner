import React from "react";

import FAQsPage from "./clientFaq";

export const metadata = {
  title: "FAQs - Best Event Management Nagercoil | Common Questions & Answers | VIP Event Management",
  description: "Get answers to FAQs about best event management, wedding planning, affordable catering services, pricing, and booking in Nagercoil. Learn about our best budget-friendly packages and services across Kanyakumari district.",
  keywords: "best event planning faq nagercoil, best wedding planner questions, best catering service faq, best affordable event management queries, vip event management help, best booking questions kanyakumari, best event planner faq, best budget event planning questions",
  openGraph: {
    title: "FAQs - VIP Event Management Event Planning Questions",
    description: "Get answers to common questions about our event planning, wedding services, catering, and booking process.",
    type: "website",
    images: [{
      url: "/faq-og.jpg",
      width: 1200,
      height: 630,
      alt: "VIP Event Management FAQ"
    }]
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
      "name": "FAQs",
      "item": "https://www.vipeventmanagement.in/faqs"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does VIP Event Management offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer the best and most affordable event planning services including wedding planning, corporate events, birthday parties, stage decoration, catering services, photography, entertainment, and venue management across Nagercoil and Kanyakumari district. All services available at budget-friendly prices with premium quality."
      }
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book your best event management services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking at least 2-3 months in advance for weddings and large events, and 2-4 weeks for smaller celebrations. However, we also accommodate last-minute bookings based on availability. Contact us for best affordable packages and instant quotes."
      }
    }
  ]
}


const FAQ = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQsPage />
    </>
  );
};

export default FAQ;