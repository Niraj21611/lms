import BusinessSection from "@/components/BusinessSection";
import CommunicateSection from "@/components/CommunicateSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import KnowledgeDeliverySection from "@/components/KnowledgeDeliverySection";
import MonetizeSection from "@/components/MonetizeSection";
import Navbar from "@/components/Navbar";

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
    </div> 
  );
}
