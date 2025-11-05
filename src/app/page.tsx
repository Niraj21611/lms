"use client"

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopularCourses from "@/components/Courses";
import Features from "@/components/Features";
import KnowledgeDeliverySection from "@/components/KnowledgeDeliverySection";
import MonetizeSection from "@/components/MonetizeSection";
import Navbar from "@/components/Navbar";
import UpscaleHero from "@/components/UpscaleHero";

export default function Home() {
  return (
    <>
      <Hero/>
      <PopularCourses/>
      <Features/>
      <KnowledgeDeliverySection/>
      <MonetizeSection/>
      <CommunicateSection/>
      {/* <BusinessSection/> */}
      <ExternalTeacherSection />
      <UpscaleHero />
      <Footer />
    </div> 
  );
}
