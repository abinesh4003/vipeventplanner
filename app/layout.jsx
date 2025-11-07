import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "VIP Planners",
  description: "Luxury Event Planning",
};


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body

        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
