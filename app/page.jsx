import Image from "next/image";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import SpecialHighlightsSection from "./components/Special";
import Stalls from "./components/Stalls";
import WhyChooseUsSection from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="">

      <Hero />
      <AboutUs />
      <Services />
      <SpecialHighlightsSection />
       <Stalls/>
       <WhyChooseUsSection/>

    </div>
  );
}
