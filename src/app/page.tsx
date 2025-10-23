import BusinessSection from "@/components/BusinessSection";
import CommunicateSection from "@/components/CommunicateSection";
import ExternalTeacherSection from "@/components/ExternalTeacherSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KnowledgeDeliverySection from "@/components/KnowledgeDeliverySection";
import MonetizeSection from "@/components/MonetizeSection";
import Navbar from "@/components/Navbar";
import UpscaleHero from "@/components/UpscaleHero";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <KnowledgeDeliverySection/>
      <MonetizeSection/>
      <CommunicateSection/>
      <BusinessSection/>
      <ExternalTeacherSection />
      <FeaturedInSection />
      <UpscaleHero />
      <Footer />
    </div> 
  );
}
