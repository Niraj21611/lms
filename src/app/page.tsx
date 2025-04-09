import BusinessSection from "@/components/BusinessSection";
import CommunicateSection from "@/components/CommunicateSection";
import Hero from "@/components/Hero";
import MonetizeSection from "@/components/MonetizeSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <MonetizeSection/>
      <CommunicateSection/>
      <BusinessSection/>
    </div> 
  );
}
