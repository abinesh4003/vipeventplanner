import React from "react";
import GalleryPage from "../pages/galleryPage";

export const metadata = {
  title: "Best Event Gallery - Wedding Photos & Stage Decoration | VIP Event Management Nagercoil",
  description: "Explore our stunning gallery showcasing the best weddings, stage decorations, corporate events, and celebrations in Nagercoil. View premium catering setups, elegant decorations, and memorable events across Kanyakumari district. Real events, real moments from the best event planner.",
  keywords: "best event gallery nagercoil, best wedding photos nagercoil, best stage decoration photos, best event management portfolio, best catering gallery kanyakumari, best wedding decoration photos, best corporate event photos, best birthday party gallery, best function photos nagercoil, best event planner portfolio, best catering setup images, best wedding catering photos, best event decoration gallery nagercoil",
  authors: [{ name: "VIP Event Management" }],
  creator: "VIP Event Management",
  publisher: "VIP Event Management",
  metadataBase: new URL('https://www.vipeventmanagement.in'),
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: "Event Gallery - Wedding & Event Photos | VIP Event Management Nagercoil",
    description: "Browse our collection of beautifully executed events in Nagercoil. Weddings, corporate functions, parties, and traditional celebrations with exceptional catering and decoration.",
    url: 'https://www.vipeventmanagement.in/gallery',
    siteName: 'VIP Event Management',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VIP Event Management Event Gallery - Nagercoil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Event Gallery - VIP Event Management Nagercoil",
    description: "View our portfolio of stunning weddings, corporate events, and celebrations in Nagercoil with premium catering and decoration services.",
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
      "name": "Gallery",
      "item": "https://www.vipeventmanagement.in/gallery"
    }
  ]
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "VIP Event Management Event Gallery",
  "description": "Photo gallery showcasing our event management and catering services in Nagercoil including weddings, corporate events, and celebrations",
  "url": "https://www.vipeventmanagement.in/gallery",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VIP Event Management",
    "url": "https://www.vipeventmanagement.in"
  }
};

const Gallery = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <GalleryPage />
    </>
  );
};

export default Gallery;