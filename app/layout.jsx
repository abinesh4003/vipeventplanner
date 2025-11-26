import "./globals.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import WatsappLogo from "./components/WatsappLogo";
import ContactPopup from "./components/ContactPopup";

export const metadata = {
  title: {
    default: "VIP Event Management - Best Event Management & Catering Services in Nagercoil",
    template: "%s | VIP Event Management"
  },
  description: "Best event management and catering services in Nagercoil. Professional wedding planning, stage decoration, corporate events, and celebrations across Kanyakumari district.",
  keywords: "event management nagercoil, catering services nagercoil, wedding planners, stage decoration, vip Event Management",
  authors: [{ name: "VIP Event Management" }],
  creator: "VIP Event Management",
  publisher: "VIP Event Management",
  metadataBase: new URL('https://www.vipeventmanagement.com'),
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
  "name": "VIP Event Management",
  "alternateName": "VIP Event Management and Catering",
  "url": "https://www.vipeventmanagement.com",
  "logo": "https://www.vipeventmanagement.com/logo.jpg",
  "image": "https://www.vipeventmanagement.com/logo.jpg",
  "description": "Best event management and catering services in Nagercoil specializing in weddings, corporate events, stage decoration, and celebrations",
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
  }
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
