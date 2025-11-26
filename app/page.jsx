import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import SpecialHighlightsSection from "./components/Special";
import Stalls from "./components/Stalls";
import WhyChooseUsSection from "./components/WhyChooseUs";
import CTA from "./components/cta";

export const metadata = {
  title: "VIP Event Management - Best Event Management Nagercoil | Wedding & Catering Services",
  description: "Premier event management and catering services in Nagercoil. Expert wedding planning, stage decoration, corporate events. 15+ years experience serving Kanyakumari district.",
  keywords: "best catering service in nagercoil, best event planner in nagercoil, best stage decoration in nagercoil, best wedding services in nagercoil, best caterers in nagercoil, top event management nagercoil, best wedding planners nagercoil, best birthday party organizers nagercoil, best corporate event management kanyakumari, best function hall catering nagercoil, best marriage event planners nagercoil, best party planners nagercoil, best event organizers nagercoil, best traditional function catering, best outdoor catering services nagercoil, vip Event Management nagercoil",
  authors: [{ name: "VIP Event Management" }],
  creator: "VIP Event Management",
  publisher: "VIP Event Management",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.vipeventmanagement.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "VIP Event Management - Best Event Management & Catering Services in Nagercoil",
    description: "Transform your special occasions into unforgettable memories with Nagercoil's leading event management and catering experts. Specializing in weddings, corporate events, and all celebrations with premium catering services.",
    url: 'https://www.vipeventmanagement.com',
    siteName: 'VIP Event Management',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIP Event Management - Event Management & Catering Nagercoil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "VIP Event Management - Best Event Management & Catering in Nagercoil",
    description: "Premier event management and catering services in Nagercoil. Expert wedding planners, corporate event organizers, and professional caterers serving Kanyakumari district.",
    images: ['/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VIP Event Management",
  "image": "https://www.vipeventmanagement.com/logo.jpg",
  "@id": "https://www.vipeventmanagement.com",
  "url": "https://www.vipeventmanagement.com",
  "telephone": "+91-XXXXXXXXXX",
  "email": "vipeventsmanagement@gmail.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Nagercoil",
    "addressRegion": "Tamil Nadu",
    "postalCode": "629001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 8.1790,
    "longitude": 77.4337
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/vipeventsmanagement",
    "https://www.instagram.com/vipeventsmanagement"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5"
  },
  "description": "Best event management and catering services in Nagercoil. Specializing in weddings, corporate events, stage decoration, and all celebrations with 15+ years experience."
};

export default function Home() {
  return (
    <>
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
