import "./globals.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import WatsappLogo from "./components/WatsappLogo";
import ContactPopup from "./components/ContactPopup";

export const metadata = {
  title: {
    default: "Best Event Management & Catering Services in Nagercoil | VIP Event Management | Top Wedding Planners",
    template: "%s | VIP Event Management Nagercoil"
  },
  description: "#1 Best & Affordable Event Management in Nagercoil | Best Catering Services with Premium Quality. Budget-friendly wedding planners, stage decoration, corporate events. 15+ years experience, 500+ events. Best prices guaranteed. Quality service at affordable rates across Kanyakumari.",
  keywords: "best event management nagercoil, best affordable event management nagercoil, best affordable catering services nagercoil, best catering services nagercoil, best budget wedding planners nagercoil, best catering nagercoil, best affordable event planner nagercoil, best stage decoration nagercoil, best low cost event management, best wedding catering nagercoil, best affordable birthday party nagercoil, best budget event organizers, best affordable stage decoration, best affordable corporate catering, best price catering nagercoil, best economical event planning, best affordable party planners nagercoil, best affordable wedding services, best budget friendly catering, best affordable event decorators nagercoil, best affordable function catering, best low price event management, best affordable outdoor catering, best affordable marriage planners, best budget event services kanyakumari, best quality affordable catering, best affordable event packages, vip event management, event management near me, catering services near me",
  authors: [{ name: "VIP Event Management" }],
  creator: "VIP Event Management",
  publisher: "VIP Event Management",
  metadataBase: new URL('https://www.vipeventmanagement.in'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'VIP Event Management',
    title: 'Best Event Management & Catering Services in Nagercoil | VIP Event Management',
    description: '#1 Rated Event Management & Catering in Nagercoil. Expert wedding planners, stage decoration, corporate events. 500+ successful events, 100% satisfaction.',
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f7e9b8',
};


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.vipeventmanagement.in/#organization",
  "name": "VIP Event Management",
  "alternateName": ["VIP Event Management and Catering", "VIP Events Nagercoil", "Best Event Planner Nagercoil"],
  "url": "https://www.vipeventmanagement.in",
  "logo": "https://www.vipeventmanagement.in/logo.jpg",
  "image": [
    "https://www.vipeventmanagement.in/logo.jpg",
    "https://www.vipeventmanagement.in/og-image.jpg"
  ],
  "description": "#1 Best & Affordable Event Management in Nagercoil. Best catering services with premium quality at affordable prices. Budget-friendly wedding planners, stage decoration, corporate events. 15+ years experience, 500+ successful events, 100% satisfaction. Quality service at best prices across Kanyakumari district.",
  "telephone": "+91-XXXXXXXXXX",
  "email": "shejinoantony@gmail.com",
  "priceRange": "$-$$",
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
  "areaServed": [
    {
      "@type": "City",
      "name": "Nagercoil"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Kanyakumari District"
    },
    {
      "@type": "State",
      "name": "Tamil Nadu"
    }
  ],
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
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Event Management and Catering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Best Wedding Planning and Catering Services",
          "description": "Complete wedding event management with premium catering, stage decoration, photography, and coordination"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Best Corporate Event Management",
          "description": "Professional corporate event planning and catering for conferences, seminars, and business gatherings"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Best Stage Decoration Services",
          "description": "Premium stage decoration for weddings, birthdays, and all celebrations with elegant designs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Best Catering Services",
          "description": "Top-quality catering with veg, non-veg, and buffet options for all types of events"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Best Birthday Party Planning",
          "description": "Themed birthday party planning with decoration, catering, and entertainment services"
        }
      }
    ]
  },
  "knowsAbout": [
    "Event Management",
    "Catering Services",
    "Wedding Planning",
    "Stage Decoration",
    "Corporate Events",
    "Birthday Parties",
    "Traditional Functions",
    "Event Coordination"
  ],
  "slogan": "Best Quality at Affordable Prices - Premium Event Management & Catering in Nagercoil",
  "paymentAccepted": "Cash, UPI, Credit Card, Debit Card, Bank Transfer",
  "currenciesAccepted": "INR"
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
      "name": "Services",
      "item": "https://www.vipeventmanagement.in/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Gallery",
      "item": "https://www.vipeventmanagement.in/gallery"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Contact",
      "item": "https://www.vipeventmanagement.in/contact"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is the best and most affordable event management company in Nagercoil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VIP Event Management is the best and most affordable event management company in Nagercoil with 15+ years of experience, 500+ successful events, and 100% client satisfaction. We offer best catering services with premium quality at affordable prices, budget-friendly wedding planning, and affordable stage decoration at the best prices."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best and most affordable catering service in Nagercoil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VIP Event Management provides the best and most affordable catering services in Nagercoil with premium quality food at best prices. We offer budget-friendly packages, professional staff, and customized menus for weddings, corporate events, and all celebrations with veg, non-veg, and buffet options at economical rates."
      }
    },
    {
      "@type": "Question",
      "name": "Who provides the best stage decoration in Nagercoil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VIP Event Management is the best stage decoration service provider in Nagercoil, offering elegant and creative designs for weddings, birthdays, corporate events, and traditional functions with premium quality materials and expert decorators."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does VIP Event Management serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VIP Event Management serves Nagercoil and entire Kanyakumari district including Marthandam, Colachel, Kuzhithurai, Thuckalay, and surrounding areas with best and most affordable event management and catering services."
      }
    },
    {
      "@type": "Question",
      "name": "Are VIP Event Management services affordable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! VIP Event Management offers the most affordable and budget-friendly event management and catering services in Nagercoil without compromising on quality. We provide best affordable catering packages, economical wedding planning, and low-cost stage decoration with premium quality service at the best prices in Kanyakumari district."
      }
    },
    {
      "@type": "Question",
      "name": "What is the price range for event management services in Nagercoil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VIP Event Management offers flexible and affordable pricing starting from budget-friendly packages to premium services. We provide customized quotes based on your requirements and budget. Contact us for the best prices on event management and catering services in Nagercoil with guaranteed quality."
      }
    }
  ]
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="sAoWLSTs1HvNkfO5k_d6TQ5Nz1cix4j5x606sAg97Uc" />
        <link rel="canonical" href="https://www.vipeventmanagement.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased relative">
        <Navbar />
        <WatsappLogo />
        <ContactPopup />
        {children}
        <Footer />
      </body>
    </html>
  );
}
