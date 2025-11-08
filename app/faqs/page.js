import React from "react";

import FAQsPage from "./clientFaq";

export const metadata = {
  title: "FAQs - VIP Function Planners Nagercoil | Event Planning Questions & Answers",
  description: "Find answers to frequently asked questions about VIP Function Planners' event management, wedding planning, catering services, pricing, and booking process in Nagercoil and Kanyakumari district.",
  keywords: "event planning faq nagercoil, wedding planner questions, catering service faq, event management queries, vip function planners help, booking questions kanyakumari",
  openGraph: {
    title: "FAQs - VIP Function Planners Event Planning Questions",
    description: "Get answers to common questions about our event planning, wedding services, catering, and booking process.",
    type: "website",
    images: [{
      url: "/faq-og.jpg",
      width: 1200,
      height: 630,
      alt: "VIP Function Planners FAQ"
    }]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does V.I.P Function Planners offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer complete event planning services including wedding planning, corporate events, birthday parties, stage decoration, catering services, photography, entertainment, and venue management across Nagercoil and Kanyakumari district."
      }
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book your services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking at least 2-3 months in advance for weddings and large events, and 2-4 weeks for smaller celebrations. However, we also accommodate last-minute bookings based on availability."
      }
    }
  ]
}


const FAQ = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQsPage />
    </>
  );
};

export default FAQ;