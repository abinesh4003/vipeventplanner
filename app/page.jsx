import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import SpecialHighlightsSection from "./components/Special";
import Stalls from "./components/Stalls";
import WhyChooseUsSection from "./components/WhyChooseUs";
import CTA from "./components/cta";

export const metadata = {
  alternates: {
    canonical: '/',
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
    }
  ]
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.vipeventmanagement.in/#webpage",
  "url": "https://www.vipeventmanagement.in",
  "name": "Best Event Management Nagercoil | Affordable Wedding & Catering Services",
  "description": "#1 Best & Affordable Event Management in Nagercoil. Expert wedding planning, stage decoration, corporate events, catering services at best prices. 15+ years experience, 500+ events.",
  "isPartOf": {
    "@id": "https://www.vipeventmanagement.in/#organization"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <div className="">
        <Hero />
        <AboutUs />
        <Services />
        <SpecialHighlightsSection />
        <Stalls />
        <WhyChooseUsSection />
        <CTA text="Ready to make moments into unforgettable memories?" desc="Let us bring your vision to life with our Best event planning services" btn1="Book Now" btn2="View Services" btn1link="/contact" btn2link="/services" />
      </div>
    </>
  );
}
