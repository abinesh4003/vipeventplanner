import "./globals.css";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import WatsappLogo from "./components/WatsappLogo";

export const metadata = {
  title: {
    default: "VIP Function Planners - Best Event Management & Catering Services in Nagercoil",
    template: "%s | VIP Function Planners"
  },
  description: "Best event management and catering services in Nagercoil. Professional wedding planning, stage decoration, corporate events, and celebrations across Kanyakumari district.",
  keywords: "event management nagercoil, catering services nagercoil, wedding planners, stage decoration, vip function planners",
  authors: [{ name: "VIP Function Planners" }],
  creator: "VIP Function Planners",
  publisher: "VIP Function Planners",
  metadataBase: new URL('https://www.vipfunctionplanners.com'),
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
    siteName: 'VIP Function Planners',
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
  "name": "VIP Function Planners",
  "alternateName": "VIP Event Management and Catering",
  "url": "https://www.vipfunctionplanners.com",
  "logo": "https://www.vipfunctionplanners.com/logo.jpg",
  "image": "https://www.vipfunctionplanners.com/logo.jpg",
  "description": "Best event management and catering services in Nagercoil specializing in weddings, corporate events, stage decoration, and celebrations",
  "telephone": "+91-XXXXXXXXXX",
  "email": "vipfunctionplanners@gmail.com",
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
    "https://www.facebook.com/vipfunctionplanners",
    "https://www.instagram.com/vipfunctionplanners"
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
